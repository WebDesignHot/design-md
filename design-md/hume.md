---
name: Hume AI
tagline: 'Warm cream canvas, custom Fellix type, and near-black pill CTAs — voice-AI research presented with humanist calm rather than tech coldness.'
updated_at: 2026-05-28T23:11:13.340Z
published_at: 2026-05-28T23:11:13.340Z
author: webdesignhot
source_url: https://www.hume.ai
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [ai]
tags: [light, warm, sans, ai, voice, humanist, spacious]
preview_swatch: ['#fff9f3', '#222222', '#e8d5c4']
related: [cartesia, anthropic]
description: 'Hume AI is the empathic-AI research lab, and its marketing surface argues that emotional intelligence belongs on a warm, humane canvas — not the clinical white the rest of the AI sector defaults to. The page rests on a soft cream `#fff9f3` (warmed paper, not lab white), near-black `#222222` ink (softer than pure `#000`), and a custom geometric-humanist sans, Fellix, that carries both display and body. Headlines land in Fellix at 48px held to an unusual ~520 weight — heavier than book, lighter than bold — giving the type a calm, considered presence. Every primary action is a fully-pilled near-black `#222222` button with cream text, an inversion of the canvas that reads as quiet confidence rather than loud conversion. Where consumer voice-AI brands reach for purple gradients, waveform glow, or character mascots, Hume ships a page that feels like a humanist research journal: warm, credible, unhurried, and unmistakably built by a lab that studies feeling.'


aliases:
  background: bg
  foreground: text
  primary-foreground: on-brand
  muted: text-muted
  primary: brand
  accent: accent
  border: border
  ring: border-strong
colors:
  # Primary
  bg: '#fff9f3'                           # warm cream canvas — the defining surface, never clinical white
  bg-soft: '#fdf4ec'                      # one shade deeper cream for inset panels and quiet bands
  surface: '#f7ede1'                      # warm sand panel base — cards and callouts
  surface-strong: '#efe2d2'              # stronger sand for divider blocks and stat strips
  surface-hover: '#f4e8da'               # hover wash on warm panels
  text: '#222222'                         # near-black ink — body and headlines, softer than #000
  text-strong: '#000000'                  # absolute black, reserved for the heaviest display moments
  text-medium: '#3a3633'                  # warm-tinted secondary heading emphasis
  text-muted: '#5c554e'                   # captions, metadata, supporting copy
  text-soft: '#7a7269'                    # helper text, footnotes
  text-faint: '#a89e92'                   # disabled, microcopy on cream
  on-brand: '#fff9f3'                     # cream label on the near-black brand pill
  on-cta: '#fff9f3'                       # cream label on the primary CTA — matches canvas exactly

  # Brand & Accent
  brand: '#222222'                        # signature near-black — every primary pill CTA and the wordmark
  brand-hover: '#000000'                  # press state for the near-black pill (deepens to true black)
  brand-soft: '#3a3633'                   # warm-charcoal accent for secondary dark surfaces
  accent: '#e8d5c4'                       # warm peach-sand accent — quiet highlight bands, illustration tone
  accent-deep: '#d9bfa6'                  # deeper peach for accent borders and hover on warm chips
  accent-faint: '#f3e7da'                 # faintest peach tint for selected/active warm states

  # Interactive
  link: '#222222'                         # near-black link, underline on hover (no separate link blue)
  link-hover: '#000000'                   # pressed link state
  selected-bg: '#f3e7da'                  # selected nav item, selected warm row tint
  disabled-bg: '#f4e8da'                  # disabled control fill on cream
  disabled-text: '#a89e92'                # disabled control label

  # Borders
  border: '#e7dccd'                       # default warm hairline — the standard rule on cream
  border-strong: '#d9cdbb'               # emphasized warm rule
  border-soft: '#f0e6d9'                  # quietest warm division
  border-focus: '#222222'                 # near-black focus ring on the cream canvas

  # Semantic
  success-bg: '#e3efe0'
  success-text: '#3f6b3a'
  warning-bg: '#fbeecf'
  warning-text: '#8a6420'
  danger-bg: '#f7e0db'
  danger-text: '#a4362a'
  info-bg: '#e8e6e3'
  info-text: '#3a3633'

  # Shadow tints
  shadow-rgb: '34, 28, 22'                # warm brown-black shadow base — never neutral grey
  shadow-warm: '160, 120, 80'            # rare warm-amber glow for hero illustration lift

typography:
  display:
    family: 'Fellix, system-ui, -apple-system, "Helvetica Neue", sans-serif'
    weights: [500, 520, 600, 700]
    opentype-features: ['liga', 'kern']
  body:
    family: 'Fellix, system-ui, -apple-system, "Helvetica Neue", sans-serif'
    weights: [400, 500, 600]
    opentype-features: ['liga', 'kern']
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
    weights: [400, 500]
    opentype-features: ['tnum']
  scale:
    display-hero:    { size: 80, weight: 600, lineHeight: 1.02, tracking: '-0.025em', family: display }
    display-lg:      { size: 64, weight: 600, lineHeight: 1.05, tracking: '-0.02em',  family: display }
    h1:              { size: 48, weight: 520, lineHeight: 1.08, tracking: '-0.018em', family: display }
    h2:              { size: 36, weight: 520, lineHeight: 1.15, tracking: '-0.012em', family: display }
    h3:              { size: 28, weight: 600, lineHeight: 1.2,  tracking: '-0.008em', family: display }
    h4:              { size: 22, weight: 600, lineHeight: 1.3,  tracking: '-0.004em', family: display }
    h5:              { size: 18, weight: 600, lineHeight: 1.4,  tracking: '0',        family: display }
    eyebrow:         { size: 12, weight: 600, lineHeight: 1.4,  tracking: '0.12em',   family: body, transform: uppercase }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    label:           { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0.01em',   family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.45, tracking: '0',        family: body }
    stat:            { size: 44, weight: 600, lineHeight: 1.0,  tracking: '-0.02em',  family: display }
    button:          { size: 14, weight: 600, lineHeight: 1.0,  tracking: '0.04em',   family: body, transform: uppercase }

radius:
  micro: 2
  sm: 6
  md: 10
  lg: 14
  xl: 20
  card: 18
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]

layout:
  page-width: 1280
  prose-width: 720
  hero-prose-width: 760
  site-gutter: 'clamp(20px, 5vw, 64px)'
  header-height: 64
  grid-columns: 12
  section-rhythm: '96-128px'

components:
  button-primary:
    background: '#222222'
    text: '#fff9f3'
    padding: '14px 28px'
    radius: 9999
    border: '1px solid #222222'
    font: 'Fellix 600 / 14px uppercase 0.04em'
    hover-bg: '#000000'
    active-bg: '#000000'
    use: 'Near-black full-pill — the primary action everywhere (Contact Research, Get Started, Try EVI)'
  button-secondary:
    background: 'transparent'
    text: '#222222'
    padding: '14px 28px'
    radius: 9999
    border: '1px solid #d9cdbb'
    font: 'Fellix 600 / 14px uppercase 0.04em'
    hover-bg: '#f4e8da'
    use: 'Outlined pill twin — same shape, warm hairline border, sits beside primary in hero clusters'
  button-tonal:
    background: '#f7ede1'
    text: '#222222'
    padding: '14px 28px'
    radius: 9999
    border: '1px solid transparent'
    font: 'Fellix 600 / 14px uppercase 0.04em'
    hover-bg: '#efe2d2'
    use: 'Warm sand fill pill — soft tertiary action that stays within the cream family'
  button-ghost:
    background: 'transparent'
    text: '#222222'
    padding: '10px 16px'
    radius: 9999
    border: 'none'
    font: 'Fellix 500 / 14px'
    hover-bg: '#f4e8da'
    use: 'Quiet pill — nav links, inline actions, in-card buttons'
  card:
    background: '#fff9f3'
    border: '1px solid #e7dccd'
    radius: 18
    padding: '28px'
    use: 'Product card (EVI, Octave, TADA) — warm hairline on cream, generous radius'
  card-soft:
    background: '#f7ede1'
    border: '1px solid transparent'
    radius: 18
    padding: '28px'
    use: 'Warm sand panel — research highlights, feature callouts that lift off the page'
  input:
    background: '#fff9f3'
    border: '1px solid #e7dccd'
    radius: 14
    padding: '12px 16px'
    font: 'Fellix 400 / 16px'
    placeholder-color: '#a89e92'
    focus-ring: '0 0 0 2px #222222'
    use: 'Form fields, newsletter capture, API key entry'
  badge:
    background: '#f7ede1'
    text: '#5c554e'
    padding: '4px 12px'
    radius: 9999
    font: 'Fellix 500 / 13px'
    use: 'Warm metadata pill — model status, category tags, "Open Source"'
  badge-accent:
    background: '#f3e7da'
    text: '#222222'
    padding: '4px 12px'
    radius: 9999
    font: 'Fellix 600 / 12px'
    use: 'Highlight pill — New / Research Preview, peach-tinted to draw a soft eye'
  stat-block:
    background: 'transparent'
    text: '#222222'
    padding: '0'
    font: 'Fellix 600 / 44px display'
    use: 'Big-number proof block — 50+ Languages, 48+ Emotions, 600+ Voice Descriptors'
  nav-link:
    background: 'transparent'
    text: '#222222'
    padding: '8px 14px'
    radius: 9999
    font: 'Fellix 500 / 15px'
    hover-text: '#5c554e'
    use: 'Top nav — quiet near-black, warm pill hover wash, no underline until hover'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.22, 1, 0.36, 1)'
  ease-out: 'cubic-bezier(0.16, 1, 0.3, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  duration-page: 420
  reduced-motion: 'respects prefers-reduced-motion: reduce — transforms become opacity-only, durations halved, no parallax on hero illustration'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  none: 'none'
  ambient: 'rgba(34, 28, 22, 0.04) 0 1px 3px'
  standard: 'rgba(34, 28, 22, 0.06) 0 6px 18px -4px'
  elevated: 'rgba(34, 28, 22, 0.08) 0 14px 32px -10px, rgba(34, 28, 22, 0.04) 0 4px 10px'
  deep: 'rgba(34, 28, 22, 0.12) 0 28px 56px -16px'
  ring: '0 0 0 2px #222222'
  ring-offset: '0 0 0 2px #fff9f3, 0 0 0 4px #222222'

accessibility:
  contrast-text-on-bg: 14.8               # #222222 on #fff9f3 — AAA at all sizes
  contrast-on-brand-on-brand: 14.8        # #fff9f3 on #222222 — AAA at all sizes (CTA pill)
  contrast-text-muted-on-bg: 7.1          # #5c554e on #fff9f3 — AAA
  contrast-text-soft-on-bg: 4.7           # #7a7269 on #fff9f3 — AA at body sizes
  contrast-text-on-accent: 12.0           # #222222 on #e8d5c4 — AAA (accent bands keep dark ink)
  focus-ring: '2px solid #222222 with 2px cream offset'
  reduced-motion-honored: true
  keyboard-nav: 'visible near-black focus ring on every interactive surface; tab order matches visual reading order'
  prose-line-length: 'capped at 720px (~70 characters) for hero copy and long-form prose'
  aria-patterns: 'menus use aria-expanded on disclosure triggers; modals use aria-modal + initial-focus; stat blocks expose the full label via aria-label'

dark-mode: null                           # marketing surface is warm-light only; product app handles its own theme

lineage:
  summary: 'Hume AI rejects the clinical-white default of the AI sector and instead anchors its empathic-AI mission on a warm cream canvas — the colour of considered paper rather than a lab coat. The system pairs a custom geometric-humanist sans (Fellix) held at an unusual ~520 display weight with near-black `#222222` ink and fully-pilled CTAs. Lineage runs through Anthropic''s warm cream-and-slate restraint, the humanist-sans tradition behind Fellix, research-journal typesetting, and the soft-radius warmth of brands like Stripe-era product pages — but the warmth is pushed further than any of them, because the brand''s entire thesis is that feeling belongs in the interface.'
  influences:
    - name: Anthropic
      role: 'Warm cream-and-slate canvas as a deliberate anti-clinical stance; type-led, imagery-light research marketing'
      url: https://anthropic.com
    - name: Fellix (Mostardesign)
      role: 'The custom geometric-humanist sans carrying both display and body; held at a calm ~520 display weight'
      url: https://www.mostardesign.com/fonts/fellix
    - name: Stripe
      role: 'Full-pill primary buttons and soft generous radii as a friendliness signal on a restrained palette'
      url: https://stripe.com
    - name: Cartesia
      role: 'Voice-AI-as-research-lab register and near-black inverted CTA — Hume warms the same playbook from white to cream'
      url: https://cartesia.ai
    - name: arXiv
      role: 'Research-journal credibility: quantified claims, sober hierarchy, restraint over marketing flourish'
      url: https://arxiv.org
---

## 1. Visual Theme & Atmosphere

Hume AI is the empathic-AI research lab, and the very first design decision the homepage makes is a refusal: it will *not* be clinical white. Where almost every adjacent AI brand opens on a calibrated lab-coat `#ffffff`, Hume lands you on a warm cream `#fff9f3` — the colour of considered paper, of a well-lit reading room, of something made by people who study feeling. That single substitution sets the entire tone. The page argues, before a word is read, that emotional intelligence belongs on a humane surface rather than a sterile one.

The type carries the same intent. Hume runs a single custom typeface — **Fellix**, a geometric-humanist sans — across both display and body, and it holds headlines at an unusual **~520 weight**. That number matters: 520 is heavier than a book weight but distinctly lighter than bold, which gives the 48px h1 a calm, deliberate presence. It reads as *considered*, not *shouting*. There are no competing serif pull-quotes, no editorial counterpoint — the voice is monolithic and warm, the way a thoughtful research note is monolithic and warm.

Ink is near-black `#222222`, never pure `#000`. On a cream ground, true black would punch a hard hole in the warmth; `#222222` settles into the page instead, dark enough for AAA contrast yet soft enough to keep the humanist register. The only place the system goes truly assertive is the call to action, and even there it inverts the canvas rather than introducing a loud accent: every primary button is a **fully-pilled near-black `#222222` capsule with cream `#fff9f3` text**. The radius is effectively infinite (the production value reads `3.35e7px` — a hard full-pill), so the CTA is a smooth, friendly capsule rather than a sharp rectangle. Quiet confidence, not conversion pressure.

The supporting palette is deliberately narrow and tonal. Deeper creams and warm sands (`#fdf4ec`, `#f7ede1`, `#efe2d2`) chunk the page into bands without ever breaking the warmth, and a soft peach-sand accent (`#e8d5c4`) appears in illustration tones and the occasional highlight chip. There are no purple gradients, no glowing waveforms, no character mascots — the consumer voice-AI clichés are entirely absent. Proof comes instead from big sober stat blocks (50+ Languages, 48+ Emotions, 600+ Voice Descriptors) set large in Fellix, the way a journal reports results.

The overall feeling is best captured by a small vocabulary: *warm-cream, paper-not-lab, Fellix-calm, near-black-pill, humanist-research, considered-not-loud, feeling-in-the-interface, journal-credible, soft-radius-friendly, unhurried.* Every surface insists that this is a lab that takes emotion seriously enough to design for it.

**Key Characteristics**
- Warm cream `#fff9f3` canvas — a deliberate rejection of clinical white
- Single custom sans (Fellix) across display and body — no serif counterpoint
- Headlines held at an unusual **~520 weight** — calm, considered, never bold-shouting
- Near-black `#222222` ink, never pure `#000` — softer on cream, still AAA
- Every primary CTA is a **full-pill** near-black capsule with cream text — canvas inverted
- Soft generous radii (14–18px on cards, full-pill on buttons) signal friendliness
- Warm tonal bands (cream → sand) chunk the page instead of dark inverted heroes
- Big sober stat blocks as proof — research-journal credibility, not marketing exuberance
- Quiet peach-sand accent `#e8d5c4` for illustration tone and soft highlight chips
- Restraint with warmth — none of the purple-gradient voice-AI clichés appear

## 2. Color Palette & Roles

### Canvas / Primary

- **bg** `#fff9f3` — warm cream canvas; the defining surface, never substituted for clinical white.
- **bg-soft** `#fdf4ec` — one shade deeper cream for inset panels and quiet alternating bands.
- **text** `#222222` — near-black ink for body and headlines; softer than `#000` so it settles into the cream.
- **text-strong** `#000000` — absolute black, reserved for the heaviest display moments only.
- **on-brand / on-cta** `#fff9f3` — cream label on the near-black pill, matching the canvas exactly.

### Brand

- **brand** `#222222` — the signature near-black; every primary pill CTA and the wordmark.
- **brand-hover** `#000000` — press state, deepening the pill to true black.
- **brand-soft** `#3a3633` — warm-charcoal for secondary dark surfaces and dark-band sections.

### Accent

- **accent** `#e8d5c4` — warm peach-sand; quiet highlight bands and illustration tone (used sparingly).
- **accent-deep** `#d9bfa6` — deeper peach for accent borders and hover on warm chips.
- **accent-faint** `#f3e7da` — faintest peach tint for selected/active warm states.

### Interactive

- **link** `#222222` — near-black inline link, underline on hover; there is no separate link-blue.
- **link-hover** `#000000` — pressed link state.
- **selected-bg** `#f3e7da` — selected nav item, selected warm row tint.
- **disabled-bg** `#f4e8da` — disabled control fill on cream.
- **disabled-text** `#a89e92` — disabled control label.
- **focus-ring** `#222222` — 2px near-black ring with 2px cream offset.

### Neutral / Surface Scale

- **surface** `#f7ede1` — warm sand panel base (cards, callouts).
- **surface-strong** `#efe2d2` — stronger sand for divider blocks and stat strips.
- **surface-hover** `#f4e8da` — hover wash on warm panels.
- **text-medium** `#3a3633` — warm-tinted secondary heading emphasis.
- **text-muted** `#5c554e` — captions, metadata, supporting copy.
- **text-soft** `#7a7269` — helper text, footnotes.
- **text-faint** `#a89e92` — disabled, microcopy.

### Borders

- **border** `#e7dccd` — default warm hairline; the standard rule on cream.
- **border-strong** `#d9cdbb` — emphasized warm rule (outlined buttons, strong dividers).
- **border-soft** `#f0e6d9` — quietest warm division.

### Shadow Colors

Hume uses **warm brown-black-tinted** shadows (`rgba(34, 28, 22, …)`), never neutral grey. Even at very low opacity the warmth matters: a neutral-grey shadow on cream reads dirty, while a warm-tinted one keeps the page coherent. Shadows are used sparingly — depth comes mostly from the cream-to-sand tonal step plus a hairline, with real shadows reserved for floating elements (dropdowns, modals, the occasional lifted hero illustration).

### Semantic

- **success** — `#e3efe0` bg / `#3f6b3a` text. Warm-leaning green for operational/positive states.
- **warning** — `#fbeecf` bg / `#8a6420` text. Amber that sits naturally on cream.
- **danger** — `#f7e0db` bg / `#a4362a` text. Warm terracotta-red rather than a cold alarm red.
- **info** — `#e8e6e3` bg / `#3a3633` text. Neutral warm-grey rather than a blue info pair (the system has no link-blue to reuse).

## 3. Typography Rules

### Font Family

- **Display & Body**: **Fellix**, a custom geometric-humanist sans, used across the entire system. The fallback chain runs `system-ui` → `-apple-system` → `Helvetica Neue` → generic `sans-serif`. There is no secondary marketing typeface and no serif counterpoint — the voice is intentionally monolithic.
- **Mono companion**: a system monospace stack (`ui-monospace`, `SF Mono`, `Menlo`). Mono is a minor player here — it appears only in code samples and the rare inline metric, not as a content-bearing benchmark voice the way it does on more engineer-coded sites.
- **OpenType features**: standard ligatures and kerning (`liga`, `kern`) across both display and body; `tnum` on the mono stack for any aligned numerics.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---|---|---|---|---|
| display-hero | Fellix | 80 | 600 | 1.02 | -0.025em | Rare oversized hero on key landing pages |
| display-lg | Fellix | 64 | 600 | 1.05 | -0.02em | Section opener, large statements |
| h1 | Fellix | 48 | **520** | 1.08 | -0.018em | Standard hero headline — the signature weight |
| h2 | Fellix | 36 | 520 | 1.15 | -0.012em | Section heading |
| h3 | Fellix | 28 | 600 | 1.2 | -0.008em | Subsection heading |
| h4 | Fellix | 22 | 600 | 1.3 | -0.004em | Card heading |
| h5 | Fellix | 18 | 600 | 1.4 | 0 | Inline subheading |
| eyebrow | Fellix | 12 | 600 | 1.4 | 0.12em | Uppercase section kicker / label |
| body-lg | Fellix | 18 | 400 | 1.6 | 0 | Lede paragraph, hero supporting copy |
| body | Fellix | 16 | 400 | 1.6 | 0 | Default body — generous 1.6 leading |
| body-sm | Fellix | 14 | 400 | 1.55 | 0 | Secondary copy, dense lists |
| label | Fellix | 13 | 500 | 1.4 | 0.01em | Form labels, metadata |
| caption | Fellix | 13 | 400 | 1.45 | 0 | Helper text, image captions |
| stat | Fellix | 44 | 600 | 1.0 | -0.02em | Big-number proof blocks |
| button | Fellix | 14 | 600 | 1.0 | 0.04em | Uppercase pill button text |

### Principles

- **The ~520 display weight is the voice.** Holding the h1 at 520 — not 700 — is the single most defining typographic decision. It reads as considered and calm, the difference between a research note and a product launch.
- **One family, no counterpoint.** Fellix carries everything. There is no serif pull-quote, no second display face. The monolithic voice is part of the warmth.
- **Generous body leading.** Body runs at 1.6 line-height on 16px — airier than a dense dashboard, matching the unhurried reading-room atmosphere.
- **Negative tracking on display only.** Display sizes pull in to `-0.025em`; body stays at neutral tracking. Long-form copy is never compressed.
- **Uppercase only for labels and buttons.** Eyebrows (0.12em) and button text (0.04em) are the only uppercase moments; everything else is sentence case for warmth.
- **Stats are typography.** The proof numbers (50+, 48+, 600+) get the display family at 44px — they are first-class type, not fine print.
- **Warm hierarchy, soft contrast.** Secondary text uses warm-tinted greys (`#5c554e`, `#7a7269`) rather than cool neutrals, keeping the page chromatically coherent.

## 4. Component Stylings

### Buttons

**Primary (near-black full-pill)** — `#222222` background, `#fff9f3` cream text, **full-pill radius**, Fellix 600 / 14px uppercase with 0.04em tracking, padding `14px 28px`. Hover deepens to `#000000`; no translate or scale — the press is purely chromatic. This is the defining action button: "Contact Research", "Get Started", "Try EVI". Every primary conversion path lands here.

**Secondary (outlined pill)** — transparent background, `#222222` text, `1px #d9cdbb` warm border, full-pill radius, identical typography to primary. Hover wash `#f4e8da`. Paired with the primary in hero CTA clusters: "Read the research", "View docs".

**Tonal (warm sand pill)** — `#f7ede1` sand fill, `#222222` text, full-pill radius, no visible border. Hover `#efe2d2`. A soft tertiary action that stays inside the cream family — used in cards and quieter sections.

**Ghost (quiet pill)** — transparent, `#222222` text, no border, full-pill radius, Fellix 500 / 14px (not uppercase), padding `10px 16px`. Hover wash `#f4e8da`. Used for nav links and inline in-card actions.

### Cards

**Product card** — `#fff9f3` cream background, `1px #e7dccd` warm hairline, **18px radius**, `28px` padding, no shadow (or ambient at most). Used for the model cards (EVI, Octave, TADA) — generous corners and a warm hairline rather than a heavy box.

**Warm panel card** — `#f7ede1` sand background, transparent border, 18px radius, `28px` padding. Lifts off the cream page via tone alone — used for research highlights and feature callouts.

### Badges, Tags, Pills

**Metadata badge** — `#f7ede1` sand bg, `#5c554e` text, Fellix 500 / 13px, pill radius. Examples: `Open Source`, `API`, `Research`.

**Accent badge** — `#f3e7da` peach-faint bg, `#222222` text, Fellix 600 / 12px, pill radius. Draws a soft eye: `New`, `Research Preview`, `Beta`.

### Inputs & Forms

**Default input** — `#fff9f3` cream bg, `1px #e7dccd` warm border, **14px radius**, `12px 16px` padding, Fellix 400 / 16px, `#a89e92` placeholder. Focus ring `0 0 0 2px #222222` with a 2px cream offset; the border darkens to `#222222` simultaneously.

**Form labels** — Fellix 500 / 13px, `#222222`, `6px` margin-bottom from the input.

**Helper text** — Fellix 400 / 13px, `#7a7269`, `6px` margin-top.

**Error state** — border swaps to `#a4362a`, helper text flips to `#a4362a`, background tints `#f7e0db`.

### Navigation

**Top nav** — 64px header height, cream background (often transparent over the hero, settling to `#fff9f3` on scroll), `#222222` link colour, Fellix 500 / 15px, no underline until hover. Links are quiet pills with a `#f4e8da` warm hover wash. The wordmark sits left in Fellix; the right-most slot is a near-black full-pill CTA.

**Footer nav** — Fellix 400 / 14px, `#5c554e` colour, multi-column grid on desktop collapsing to a single column at mobile, warm hairline `#e7dccd` separating the columns from the legal row.

### Stat Blocks

**Big-number proof** — number in Fellix 600 / 44px `#222222` with `-0.02em` tracking, label beneath in Fellix 500 / 13px `#5c554e`. Arranged in a horizontal strip (often over a `#efe2d2` band), no borders between — whitespace separates them.

## 5. Layout Principles

### Spacing System

Base unit is **4px**. Scale: `0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128`. Component padding lives in the 12–32 range; section padding in 64–128. The rhythm is airy — closer to a reading room than a dashboard — which reinforces the unhurried, considered tone.

### Grid & Container

- **Page max-width**: 1280px, centred, `clamp(20px, 5vw, 64px)` site gutter.
- **Hero prose-width**: ~760px max, so headlines and lede copy stay readable even on wide screens.
- **Grid columns**: 12, with a comfortable gutter.
- **Feature / model grid**: typically 3-up equal-width cards for the model lineup.
- **Stat strip**: 3-up horizontal block, usually banded over `#efe2d2`.

### Whitespace Philosophy

Between sections: 96–128px on desktop, 64px on mobile. Within sections: 24–48px between groups. The page reads top-to-bottom as a single calm narrative — no sidebars, no dense two-column marketing rhythm. Whitespace is the primary tool for hierarchy; it does the work that borders and shadows do on busier sites.

### Section Cadence

The page alternates **cream `#fff9f3`** and **deeper cream / sand `#fdf4ec` / `#f7ede1`** bands every few sections to chunk the narrative without ever leaving the warm family. Occasional warm-charcoal `#3a3633` bands provide a single dark moment for contrast, but there is no full-black inverted hero — the warmth holds throughout.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| Micro | 2px | Hairline inner-stroke, focus indicator inner edge |
| Small | 6px | Dense chips, inline tags |
| Medium | 10px | Small controls, compact buttons in dense UI |
| Comfortable | 14px | Inputs, form controls, small cards |
| Card | 18px | Product cards, warm panels, content cards |
| Large | 20px | Featured panels, hero illustration frames |
| Pill | 9999px (full) | Every button, every badge, nav hover pills |

The defining radius decision is the **full-pill button**. The production CTA radius reads as `3.35e7px` — an arbitrarily huge value that resolves to a perfect capsule. Combined with the comfortable 14–18px radii on inputs and cards, the whole system reads soft and friendly. There are no sharp 0–4px rectangles in the interactive layer; even the hairline cards round to 18px. Soft corners are the brand's friendliness signal, balancing the seriousness of the research voice.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow, no border | Page bg, hero copy |
| 1 (hairline) | `1px #e7dccd` warm border, no shadow | Product cards, default cards |
| 2 (tonal) | `#f7ede1` sand background tint, no border | Warm panels, callouts, stat strips |
| 3 (ambient) | `rgba(34,28,22,0.04) 0 1px 3px` | Resting cards that need a hint of lift |
| 4 (standard) | `rgba(34,28,22,0.06) 0 6px 18px -4px` | Dropdowns, popovers, hovering cards |
| 5 (elevated) | `rgba(34,28,22,0.08) 0 14px 32px -10px` | Floating menus, tooltips |
| 6 (deep) | `rgba(34,28,22,0.12) 0 28px 56px -16px` | Modal panels |

### Shadow Philosophy

Hume is **tonal-first**: most depth comes from the cream-to-sand step plus a warm hairline, not from blur. When a real shadow is required, it is always **warm brown-black-tinted** (`rgba(34, 28, 22, …)`) at low opacity — a neutral-grey shadow would read dirty against cream and break the chromatic warmth. There is no blue or cool shadow anywhere in the system. The focus ring is the one "shadow" that uses a hard colour: 2px near-black with a 2px cream offset.

## 8. Interaction & Motion

### Easing curves

- **Standard** — `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, focus, opacity and colour changes.
- **Emphasized** — `cubic-bezier(0.22, 1, 0.36, 1)` — gentle overshoot for incoming elements (dropdowns, modals, hero reveals).
- **Out** — `cubic-bezier(0.16, 1, 0.3, 1)` — soft decelerate for slide and fade-in transitions.

### Duration buckets

- **Fast** — 150ms — hover wash, button colour shift, focus ring.
- **Standard** — 240ms — default transition; nav reveals, dropdown opens, card hover.
- **Slow** — 320ms — modal opens, larger reveals.
- **Page** — 420ms — between-route or hero entrance reveal (rare; the marketing site is mostly static).

### Per-component micro-states

- **Button hover** — background shifts (`#222222` → `#000000`) via `150ms ease-standard`. No translate, no scale; the press is purely chromatic, in keeping with the calm voice.
- **Card hover** — warm hairline brightens from `#e7dccd` to `#d9cdbb` and an ambient shadow fades in over `240ms`; a very subtle 1–2px lift at most.
- **Link hover** — underline reveals over `150ms`; no offset trick.
- **Input focus** — focus ring fades in `150ms`; border darkens to `#222222` simultaneously.
- **Nav pill hover** — warm wash `#f4e8da` fades in over `150ms`.
- **Hero illustration** — gentle ambient motion (slow drift / parallax) on the warm illustration where present, fully disabled under reduced-motion.

### Page transitions

The site is essentially static. Section anchors scroll smoothly with `scroll-behavior: smooth`; any hero entrance uses a soft fade-and-rise over ~420ms with the emphasized curve. Reduced-motion disables smooth scroll and all entrance transforms.

### Reduced-motion strategy

`prefers-reduced-motion: reduce` is fully honoured. All transforms (drifts, lifts, parallax on the hero illustration) become opacity-only. Durations halve. Smooth scroll disables. The chromatic hover states remain, since they carry no motion.

## 9. Accessibility & A11y

### Contrast pairs (computed)

| Pair | Ratio | WCAG |
|---|---|---|
| `#222222` on `#fff9f3` (body / headlines) | 14.8:1 | AAA |
| `#fff9f3` on `#222222` (primary CTA pill) | 14.8:1 | AAA |
| `#5c554e` on `#fff9f3` (muted) | 7.1:1 | AAA |
| `#7a7269` on `#fff9f3` (soft) | 4.7:1 | AA at body |
| `#222222` on `#e8d5c4` (ink on accent band) | 12.0:1 | AAA |
| `#222222` on `#f7ede1` (ink on sand panel) | 13.4:1 | AAA |
| `#a4362a` on `#f7e0db` (danger pair) | 5.0:1 | AA |

The cream canvas is light enough (`#fff9f3` is near the top of the luminance range) that near-black ink clears AAA comfortably — the warmth costs nothing in contrast. The single rule to enforce: **dark ink on accent/warm bands, never light ink**, since the warm tones are too pale to carry cream text.

### Focus indicators

**2px solid `#222222`** with a **2px cream offset** on every interactive surface. The near-black ring is visually distinct from the warm hover washes, so focus can never be confused with hover. Inputs additionally darken their border to `#222222` on focus.

### ARIA pattern recommendations

- **Disclosure / menu** — `aria-expanded` on the trigger, `aria-controls` pointing at the panel; nav dropdowns use `role="menu"` / `role="menuitem"` where appropriate.
- **Modal** — `role="dialog"` + `aria-modal="true"` + `aria-labelledby` (title) + `aria-describedby` (lede). Initial focus on the first field or close button; ESC closes; backdrop click closes.
- **Stat blocks** — each big number exposes its full meaning via `aria-label` ("50 plus supported languages") rather than relying on the visible "50+" microcopy.
- **Tooltip** — `role="tooltip"` referenced by `aria-describedby` from the trigger.

### Keyboard navigation

- Tab order matches visual reading order.
- ESC closes any open modal, menu, or popover.
- Arrow keys move within menus.
- Space activates buttons; Enter activates links and submits forms.
- A skip-to-content link appears on first Tab focus.

### Screen reader hints

- The wordmark SVG is `aria-hidden="true"` with an adjacent `<span class="sr-only">Hume AI</span>` text label.
- Decorative warm illustrations carry empty `alt=""` / `aria-hidden`.
- Stat numbers and any inline metric expose a spoken-friendly `aria-label`.

### Reduced motion

Honoured globally. See §8.

## 10. Responsive Behavior

### Breakpoints

| Name | Min-width | Notes |
|---|---|---|
| mobile | 0 | Single-column, 20px gutter, hero copy ~32–36px |
| tablet | 640px | 2-up feature grid, hero copy ~40px |
| desktop | 1024px | 3-up model grid, hero copy 48px |
| wide | 1280px | Full 12-column grid, container near max |
| max | 1536px | Container caps ~1280px, gutter expands |

### Touch targets

All interactive elements honour a **44×44px minimum touch target**. The full-pill buttons already exceed this thanks to `14px 28px` padding; ghost nav pills extend their hit area via padding even when the visible label is small. The mobile nav is a hamburger overlay with comfortable ~56px row heights.

### Collapsing strategy

- **Hero** — two-column desktop (copy + warm illustration) collapses to single-column mobile, copy first.
- **Model grid** — 3-up desktop → 2-up tablet → 1-up mobile.
- **Stat strip** — horizontal 3-up on desktop → wraps to a 2+1 or stacked column on mobile, each number keeping its display size.
- **Nav** — top nav links collapse into a hamburger drawer below 1024px; the near-black CTA pill stays visible in the bar.
- **Cards** — keep 18px radius and `28px` padding at all sizes; padding eases to ~20px on the smallest screens.

### Image behaviour

- Warm illustrations export as SVG or AVIF with WebP fallback.
- `loading="lazy"` on every below-the-fold image.
- `aspect-ratio` set on the container to prevent CLS.
- Hero illustrations cap their max-width and centre below copy on mobile.

### Container queries

Used sparingly on the model card — it can swap from a horizontal media+copy layout to a stacked layout at a narrow container width, independent of the page breakpoint.

## 11. Content & Voice

### Tone

**Warm, credible, unhurried.** Hume writes the way a research lab that studies emotion would write — claims are specific and often quantified, but the register is humane rather than clinical. "The Emotional Intelligence Lab for Voice AI" is the brand voice; "Supercharge your app with AI!" is not. There is confidence without hype, and warmth without softness of substance.

### Microcopy patterns

- **Button verbs** — "Contact Research", "Get Started", "Try EVI", "Read the research", "View docs". Concrete, often research-flavoured; vague verbs like "Discover" or "Unlock" are absent.
- **Error messages** — `[Field]: [problem]. [what to do].` Example: "Email: that doesn't look right. Use the form name@domain.com."
- **Success confirmations** — quiet and direct: "Saved", "API key copied". No celebratory exclamation.
- **Empty states** — explain and direct: "No projects yet. Create your first to get started." Helpful, never cute.

### CTA verb conventions

The brand favours **specific, often research-coded** verbs: *Contact, Try, Read, View, Get*. The ladder runs:

1. **Try EVI / Get Started** — top hero CTA, the live-demo or sign-up entry, the near-black full-pill.
2. **Contact Research** — the credibility-and-partnership path, also a near-black pill.
3. **Read the research / View docs** — for builders and credibility-driven readers, the outlined pill.

### Tone anchors

- Quantify when it helps ("48+ emotions", "50+ languages") — proof beats adjectives.
- Centre the human: this is *emotional* intelligence; copy should sound like it was written by people, not a model.
- Stay sober. No exclamation-mark marketing, no breathless superlatives.
- Don't apologise for the field. There is no "we know AI is overhyped, but…" register.

## 12. Dark Mode & Theming

The marketing surface is **warm-light only** by design — there is no dark variant and no auto-theme on the homepage. The cream canvas *is* the brand; inverting it would erase the single most defining decision. The product application (the EVI playground / dashboard) handles its own theming, but the marketing surface holds warm light throughout.

If a dark mode were ever introduced for the marketing site, it would need to:

- Swap the canvas to a warm near-black (`#1c1815`-ish, warm-tinted, *not* neutral `#111`) so the warmth survives the inversion.
- Lift body text to a warm off-white near `#f0e8df` rather than pure white.
- Keep the CTA pill inverted: it would become a **cream pill with near-black text** on the dark ground, preserving the canvas-inversion logic.
- Warm the accent peach slightly and use it more, since dark grounds can carry a touch more colour.
- Replace warm-tinted shadows with warm glows; keep all radii (full-pill, 18px cards) unchanged.

But none of this is shipped. **Warm-light only — no dark variant offered.**

## 13. Lineage & Influences

Hume AI sits in the same "voice-AI as research lab" register as Cartesia and the broader Anthropic-adjacent school of type-led, imagery-light marketing — but it pushes one variable further than any of them: **warmth**. Where Cartesia opens on clinical white and Anthropic on a restrained cream-slate, Hume commits fully to a warm cream `#fff9f3` canvas, a custom humanist sans (Fellix) held at a calm ~520 weight, and soft full-pill CTAs. The thesis is consistent and deliberate: a lab that studies *emotional* intelligence cannot present itself on a cold, clinical surface, so every token — the cream, the warm-tinted shadows, the generous radii, the warm-grey secondary text — is chosen to make the interface feel humane while still reading as credible research.

The lineage also rejects two adjacent registers. Hume is *not* the consumer voice-AI register (no purple gradients, no glowing waveforms, no character mascots), and it is *not* the cold-infrastructure register (no clinical white, no dense mono-benchmark walls). It threads between them: the sober proof-and-restraint of a research journal, delivered on the warmest possible humanist canvas. Fellix's geometric-humanist construction is central to that balance — geometric enough to read as serious and modern, humanist enough to feel like it was made for people.

**Named influences**:
- **Anthropic** ([https://anthropic.com](https://anthropic.com)) — warm cream-and-slate canvas as a deliberate anti-clinical stance; type-led, imagery-light research marketing.
- **Fellix / Mostardesign** ([https://www.mostardesign.com/fonts/fellix](https://www.mostardesign.com/fonts/fellix)) — the custom geometric-humanist sans carrying both display and body, held at a calm ~520 display weight.
- **Stripe** ([https://stripe.com](https://stripe.com)) — full-pill primary buttons and soft, generous radii as a friendliness signal over a restrained palette.
- **Cartesia** ([https://cartesia.ai](https://cartesia.ai)) — the voice-AI-as-research-lab register and the near-black inverted CTA; Hume warms the same playbook from white to cream.
- **arXiv / academic preprints** ([https://arxiv.org](https://arxiv.org)) — research-journal credibility: quantified claims, sober hierarchy, restraint over marketing flourish.

## 14. Do's and Don'ts

### Do

- **Use warm cream `#fff9f3` as the canvas — never clinical white.** The warmth is the single most defining decision; substituting `#ffffff` collapses the brand.
- **Hold display type to ~520 weight, not 700.** That calm, considered weight is the typographic voice.
- **Run Fellix (or a geometric-humanist sans) across both display and body.** One family, no serif counterpoint.
- **Use near-black `#222222` for ink, not pure `#000`.** True black punches a hole in the cream warmth.
- **Make every primary CTA a full-pill near-black capsule with cream text.** The canvas-inverted capsule is the brand's action shape.
- **Keep radii soft and generous — 14px inputs, 18px cards, full-pill buttons.** Softness is the friendliness signal.
- **Chunk the page with warm tonal bands (cream → sand), not dark inverted heroes.** Keep the warmth throughout.
- **Tint shadows warm (`rgba(34, 28, 22, …)`), never neutral grey.** A grey shadow on cream reads dirty.
- **Treat stats as display typography.** 44px Fellix numbers are proof, not fine print.
- **Use warm-grey secondary text (`#5c554e`, `#7a7269`).** Cool neutrals fight the cream.
- **Honour `prefers-reduced-motion`.** Disable the hero illustration drift and entrance transforms.

### Don't

- **Don't use clinical white `#ffffff` anywhere as the page canvas.** This is the #1 way to break Hume.
- **Don't set headlines at 700 / bold.** The calm ~520 weight is non-negotiable for the voice.
- **Don't introduce purple gradients, glowing waveforms, or character mascots.** Those are the consumer voice-AI clichés Hume rejects.
- **Don't use sharp 0–4px rectangular buttons.** Every button is a full-pill capsule.
- **Don't use a separate link-blue.** Links are near-black; the system intentionally has no blue.
- **Don't put light/cream text on the warm accent or sand bands.** They're too pale — always dark ink on warm surfaces.
- **Don't use neutral-grey shadows.** Warm-tinted only.
- **Don't add a serif pull-quote or a second display face.** The monolithic Fellix voice is part of the warmth.
- **Don't invert to a full-black hero band.** The warmth holds; the single dark moment is warm-charcoal `#3a3633` at most.
- **Don't animate buttons with translate or scale.** The press is purely chromatic; stillness suits the calm voice.
- **Don't write breathless marketing copy.** Sober, quantified, humane — no exclamation-mark superlatives.
- **Don't compress body tracking.** Negative tracking is display-only; long-form copy stays neutral.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg:           #fff9f3
bg-soft:      #fdf4ec
surface:      #f7ede1
text:         #222222
text-muted:   #5c554e
brand:        #222222
accent:       #e8d5c4
cta-bg:       #222222
cta-text:     #fff9f3
border:       #e7dccd
focus-ring:   #222222
```

### Example Component Prompts

1. *"Create a Hume-style hero section: warm cream `#fff9f3` canvas, headline in Fellix at 48px held to ~520 weight with -0.018em tracking and near-black `#222222` ink, lede in Fellix 400 at 18px / 1.6 line-height in `#222222`. Primary CTA is a full-pill near-black `#222222` capsule with cream `#fff9f3` uppercase text (14px, 0.04em tracking, `14px 28px` padding); secondary CTA is an outlined full-pill with a `1px #d9cdbb` warm border and `#222222` text."*

2. *"Design a Hume-style product card for a voice model: cream `#fff9f3` background, `1px #e7dccd` warm hairline, 18px radius, `28px` padding, no shadow. Heading in Fellix 600 / 22px, body in Fellix 400 / 16px / 1.6 in `#5c554e`, an 'Open Source' badge as a `#f7ede1` sand pill with `#5c554e` text, and a ghost full-pill 'Learn more' action at the bottom."*

3. *"Build a Hume-style stat strip: a `#efe2d2` warm-sand band, three big numbers in Fellix 600 / 44px `#222222` with -0.02em tracking (50+, 48+, 600+), each with a label beneath in Fellix 500 / 13px `#5c554e`. No borders between numbers — separate them with whitespace."*

4. *"Create a Hume-style nav bar: 64px height, cream `#fff9f3` background, wordmark left in Fellix 600 `#222222`, nav links right as quiet pills in Fellix 500 / 15px `#222222` with a `#f4e8da` warm hover wash, and a right-most full-pill near-black 'Contact Research' CTA with cream uppercase text."*

5. *"Design a Hume-style newsletter input: cream `#fff9f3` field, `1px #e7dccd` warm border, 14px radius, `12px 16px` padding, Fellix 400 / 16px with `#a89e92` placeholder. Focus state darkens the border to `#222222` and adds a 2px `#222222` ring with a 2px cream offset. Submit button is a full-pill near-black capsule with cream text."*

6. *"Build a Hume-style two-up content section: warm cream `#fff9f3` on one band and a `#f7ede1` sand panel (18px radius, `28px` padding) on the other. Section eyebrow in uppercase Fellix 600 / 12px with 0.12em tracking, heading in Fellix 520 / 36px, body in Fellix 400 / 16px / 1.6. Use a soft peach-sand `#e8d5c4` accent only as a small highlight, never as a large fill."*

### Iteration Guide

1. **Check the canvas first.** If a Hume-styled layout looks wrong, the most common cause is a clinical-white `#ffffff` background. Swap to warm cream `#fff9f3`.
2. **Verify the display weight is ~520, not 700.** A bold headline reads as a product launch; the calm 520 reads as a research lab.
3. **Make every button a full-pill.** If any button has a 4–12px rectangular radius, change it to a full capsule.
4. **Replace pure `#000` ink with `#222222`.** True black punches a hole in the cream warmth.
5. **Warm the shadows.** Any neutral-grey shadow should become `rgba(34, 28, 22, …)`; a grey shadow on cream reads dirty.
6. **Remove any link-blue.** Links should be near-black `#222222` with a hover underline — the system has no blue.
7. **Use warm-grey secondary text.** Swap cool neutrals (`#666`, `#888`) for warm tints (`#5c554e`, `#7a7269`).
8. **Strip the clichés.** If there's a purple gradient, glowing waveform, or character mascot, remove it — Hume's warmth comes from cream and type, not effects.

---

*Theme-toggle audit: score=0, signals=[none]*
