---
name: Temporal
tagline: Near-black engineering canvas, Aeonik at hairline-light 300, signature indigo CTA — durable-execution gravity for distributed-systems people.
updated_at: 2026-05-29T21:44:24.257Z
published_at: 2026-05-29T21:44:24.257Z
author: webdesignhot
source_url: https://temporal.io
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [dark, indigo, technical, sans, developer]
preview_swatch: ['#141414', '#444ce7', '#34d399']
related: [hashicorp, vercel, fly-io]
description: 'Temporal''s marketing surface is a near-black `#141414` engineering canvas carrying near-white `#f8fafc` type set in Aeonik at deliberately light weights — the hero h1 runs 68px at weight 300, the h2 at 48px/100, a hairline-thin display register that reads as composed reliability rather than startup loudness. The single chromatic anchor is an electric indigo-blue `#444ce7` reserved for primary CTAs, links, and focus, with a mint-green `#34d399` carrying live/healthy status — the two colors that matter to a durable-execution platform: the action you take, and the signal that your workflow is still running. Code surfaces drop into a deep slate `#243349` Shiki block where a warm yellow `#fed553` lights the keywords. The whole system is built for developers reading about reliability at 2am.'

colors:
  bg: '#141414'                  # canvas — near-black engineering ground
  surface: '#1a1a1a'             # surface-1: cards one step above canvas
  surface-elevated: '#222222'    # surface-2: hovered chrome, featured cards
  surface-code: '#243349'        # deep slate — Shiki code blocks
  surface-pre: '#1f2937'         # prose <pre> background
  text: '#f8fafc'                # ink — near-white primary type
  text-body: '#cbd5e1'           # ink-muted — body, secondary copy
  text-muted: '#94a3b8'          # ink-subtle — captions, metadata
  text-inverse: '#141414'        # dark text on light/green surfaces
  brand: '#444ce7'               # signature indigo-blue — CTA, link, focus
  brand-bright: '#5b63f0'        # hover/active lift on brand
  on-brand: '#ffffff'            # white type on indigo
  link: '#444ce7'               # = brand indigo
  border: '#2a2a2a'              # default 1px hairline on near-black
  border-soft: '#222222'        # subtler dividers
  border-strong: '#3a3a3a'      # emphasised borders, input focus base
  ring: 'rgba(68,76,231,0.5)'    # indigo focus ring
  shadow-color: 'rgba(0,0,0,0.6)'
  code-text: '#f8fafc'           # Shiki text
  code-keyword: '#fed553'        # Shiki token / keyword highlight (warm yellow)
  success: '#34d399'             # mint-green — live / healthy workflow status
  warning: '#fed553'             # warm yellow — = code-keyword
  danger: '#f43f5e'              # rose — failed run / error status
  info: '#444ce7'               # = brand indigo

typography:
  display:
    family: 'Aeonik, system-ui, -apple-system, "Segoe UI", sans-serif'
    weights: [100, 300, 400, 500]
  body:
    family: 'Aeonik, system-ui, -apple-system, "Segoe UI", sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", "JetBrains Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 68, weight: 300, lineHeight: 1.05, tracking: '-0.02em',  family: display }
    display-lg:      { size: 48, weight: 100, lineHeight: 1.1,  tracking: '-0.015em', family: display }
    h1:              { size: 40, weight: 300, lineHeight: 1.1,  tracking: '-0.015em', family: display }
    h2:              { size: 32, weight: 300, lineHeight: 1.15, tracking: '-0.01em',  family: display }
    h3:              { size: 24, weight: 400, lineHeight: 1.25, tracking: '-0.005em', family: display }
    h4:              { size: 20, weight: 500, lineHeight: 1.3,  tracking: '0',        family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    label:           { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0',        family: body }
    eyebrow:         { size: 12, weight: 600, lineHeight: 1.4,  tracking: '0.08em',   family: body, transform: uppercase }
    caption:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.02em',   family: body }
    code-md:         { size: 14, weight: 400, lineHeight: 1.6,  tracking: '0',        family: mono }
    code-sm:         { size: 13, weight: 400, lineHeight: 1.55, tracking: '0',        family: mono }
    button:          { size: 15, weight: 500, lineHeight: 1.2,  tracking: '0',        family: body }

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
  header-height: 64

components:
  button-primary:
    backgroundColor: brand
    textColor: on-brand
    rounded: pill
    padding: '12px 22px'
    use: 'every primary CTA — indigo rounded button on near-black'
  button-secondary:
    backgroundColor: surface-elevated
    textColor: text
    border: '1px solid border'
    rounded: pill
    padding: '12px 22px'
    use: 'secondary action paired with the indigo primary'
  button-ghost:
    backgroundColor: transparent
    textColor: text
    rounded: pill
    padding: '12px 22px'
    use: 'low-emphasis link-style action in dense UI'
  button-outline:
    backgroundColor: transparent
    textColor: brand
    border: '1px solid brand'
    rounded: pill
    padding: '12px 22px'
    use: 'indigo outline CTA on a busy hero or code-adjacent band'
  card:
    backgroundColor: surface
    textColor: text
    border: '1px solid border'
    rounded: lg
    padding: 24
    use: 'default feature / content card'
  card-code:
    backgroundColor: surface-code
    textColor: code-text
    rounded: lg
    padding: 20
    use: 'Shiki-highlighted code sample card'
  badge:
    backgroundColor: surface-elevated
    textColor: text-body
    rounded: pill
    padding: '4px 10px'
  badge-status-live:
    backgroundColor: 'rgba(52,211,153,0.12)'
    textColor: success
    rounded: pill
    padding: '4px 10px'
    use: 'running / healthy workflow status pill'
  text-input:
    backgroundColor: surface
    textColor: text
    border: '1px solid border-strong'
    rounded: md
    padding: '10px 14px'
  top-nav:
    backgroundColor: bg
    textColor: text
    height: 64
  footer:
    backgroundColor: bg
    textColor: text-body
    padding: '64px 32px'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce — transforms removed, transitions reduced to opacity-only'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'none — surface stepping carries most depth'
  standard: '0 1px 0 rgba(255,255,255,0.04) inset — faint top edge on cards'
  elevated: '0 8px 24px rgba(0,0,0,0.5) — floating nav, dropdowns'
  deep: '0 24px 48px rgba(0,0,0,0.6) — modals'
  ring: '0 0 0 3px rgba(68,76,231,0.5)'

accessibility:
  contrast-text-on-bg: 17.61      # AAA — #f8fafc near-white on #141414
  contrast-body-on-bg: 12.41      # AAA — #cbd5e1 on #141414
  contrast-muted-on-bg: 7.18      # AAA — #94a3b8 on #141414
  contrast-on-brand: 6.12         # AA — white text on #444ce7 indigo
  contrast-brand-on-bg: 3.01      # large-text / UI only — indigo on near-black
  contrast-success-on-bg: 9.58    # AAA — #34d399 mint-green on #141414
  contrast-keyword-on-code: 9.03  # AAA — #fed553 yellow on #243349 code bg
  focus-ring: '3px indigo ring rgba(68,76,231,0.5)'
  reduced-motion-honored: true

dark-mode: 'dark-only — #141414 near-black is the marketing ground; no light variant ships at the marketing surface'

lineage:
  summary: 'Temporal sits in the modern developer-infrastructure lineage — near-black canvas, monochrome chrome, a single chromatic action color — alongside Vercel and HashiCorp rather than consumer SaaS. Its distinguishing choice is typographic: Aeonik set at deliberately light display weights (h1/300, h2/100), a hairline register made legible only by the enormous near-white-on-near-black contrast. The neo-grotesque discipline of Aeonik (Swiss / International-Typographic descent, shared with Inter and Helvetica Now) keeps those light weights reading as engineered rather than fragile. Code is a first-class surface via Shiki wells with warm-yellow keyword highlighting, following the Stripe / Prism docs convention. The indigo-and-mint pairing — one color for action, one for status — is Temporal''s own, derived directly from the durable-execution domain: the action you take, and the signal that your workflow is still running.'
  influences:
    - { name: 'Aeonik (CoType Foundry)', role: 'Neo-grotesque display face whose light weights define the brand voice', url: 'https://www.cotypefoundry.com/fonts/aeonik' }
    - { name: 'Vercel', role: 'Near-black developer canvas, single chromatic accent, minimal chrome', url: 'https://vercel.com' }
    - { name: 'HashiCorp', role: 'Dark infrastructure marketing system, monochrome chrome with rationed accent', url: 'https://www.hashicorp.com' }
    - { name: 'Inter (Rasmus Andersson)', role: 'Neo-grotesque substitute and legibility reference at light weights', url: 'https://rsms.me/inter/' }
    - { name: 'Shiki', role: 'TextMate-grammar syntax highlighter behind the slate code wells', url: 'https://shiki.style' }
    - { name: 'Stripe Docs', role: 'Code-as-first-class-surface treatment in developer documentation', url: 'https://docs.stripe.com' }
---

## 1. Visual Theme & Atmosphere

Temporal's marketing surface is a near-black engineering canvas — `#141414`, a hair warmer and softer than pure `#000` — carrying near-white `#f8fafc` type. It reads the way good infrastructure feels: quiet, deliberate, load-bearing. Where a consumer SaaS site shouts in gradients, Temporal speaks in the register of a platform you trust with the parts of your system that absolutely cannot fail. The canvas is not pure black because pure black is harsh under code-heavy reading; the slight lift to `#141414` keeps long technical passages comfortable while preserving the deep-night gravity.

The defining typographic move is weight. Display type is set in **Aeonik** at deliberately *light* weights — the hero `h1` runs 68px at weight **300**, and the `h2` drops further to 48px at weight **100**, a true hairline. On a dark canvas this thin-stroke display is unusual and is the brand's signature: most dark developer sites reach for bold to punch through, but Temporal lets the near-white headlines float, thin and confident, against the black. The effect is composure. A durable-execution platform is, fundamentally, a promise of calm under failure, and the typography embodies that promise before you read a word.

Color is rationed to exactly what a distributed-systems audience cares about. There is one chromatic anchor — an electric **indigo-blue `#444ce7`** (rgb 68, 76, 231) — and it is reserved for the things you *act on*: primary CTAs, links, focus rings. Alongside it sits a single mint **green `#34d399`** that carries *status* — the live, healthy, still-running signal. Those are the two states that define working with workflows: the action you initiate, and the confirmation that it is durably executing. The palette is the product thesis rendered as color.

Code is a first-class surface, not an afterthought. Inline and block code drop into a deep slate `#243349` Shiki block where keywords light up in a warm yellow `#fed553`, body code stays in the near-white `#f8fafc`. The contrast between the matte near-black canvas and the cooler blue-slate code well visually separates "prose about reliability" from "the actual reliable code" — a distinction Temporal's audience reads constantly.

The overall atmosphere is engineered restraint. Borders are 1px hairlines barely lighter than the canvas; elevation comes from a tight ladder of near-black surfaces rather than glow or heavy shadow; whitespace is generous so dense technical content never crowds. Nothing competes with the headlines and the indigo CTA. It is a system designed to be read at 2am by someone debugging a production incident, and it respects that reader.

**Key Characteristics:**
- Near-black `#141414` canvas — warmer and softer than pure black, tuned for long code-adjacent reading.
- **Hairline-light display type**: Aeonik hero at weight 300, h2 at weight 100 — thin strokes floating on dark, the brand's signature.
- Near-white `#f8fafc` primary ink at AAA contrast (17.6:1) — maximum legibility without the harshness of pure white.
- One chromatic action color: indigo-blue **`#444ce7`** for CTA, link, and focus — nothing else competes for "click me."
- One status color: mint **`#34d399`** green for live / healthy / running — the durable-execution heartbeat.
- Rounded (pill) CTAs — soft, approachable action shapes against the rectilinear engineering grid.
- Code as a designed surface: deep slate `#243349` Shiki wells with warm-yellow `#fed553` keyword highlighting.
- Depth by surface stepping (`#141414` → `#1a1a1a` → `#222`) rather than shadow; borders are 1px hairlines, felt not seen.
- Developer / reliability / distributed-systems voice — concrete, calm, outcome-anchored, never hype.

## 2. Color Palette & Roles

### Primary
- **Bg / Canvas** (`#141414`): The system primary surface. Hero, body bands, footer — the near-black engineering ground.
- **Text** (`#f8fafc`): Near-white primary ink — headlines and lead copy on the dark canvas.
- **Brand** (`#444ce7`): The signature indigo-blue (rgb 68, 76, 231). The one chromatic action color — primary CTA, links, focus.

### Brand & Interactive
- **Brand** (`#444ce7`): Primary buttons, hyperlinks, active states, focus rings. The single high-energy color in the system.
- **Brand Bright** (`#5b63f0`): Hover / active lift on the indigo — a step brighter to confirm press.
- **On-Brand** (`#ffffff`): Pure white type sitting on the indigo button (6.12:1, AA).
- **Link** (`#444ce7`): Hyperlinks across prose — same indigo as the brand; underline on hover.
- **Ring** (`rgba(68,76,231,0.5)`): Translucent indigo focus ring, 3px.

### Accent — Status
- **Success** (`#34d399`): Mint-green. Live / healthy / running workflow status — the durable-execution heartbeat. Doubles as the system success color.
- **Warning** (`#fed553`): Warm yellow — also the code-keyword highlight color. Caution states, pending runs.
- **Danger** (`#f43f5e`): Rose-red. Failed run, error state, terminated workflow.

### Neutral Scale
- **Text** (`#f8fafc`): Headlines, primary type.
- **Text Body** (`#cbd5e1`): Default running-text — the soft near-white that carries body copy (12.4:1, AAA).
- **Text Muted** (`#94a3b8`): Captions, timestamps, metadata, secondary labels (7.2:1, AAA).
- **Text Inverse** (`#141414`): Dark type on light or green surfaces (e.g. on a green status fill).

### Surface & Elevation
- **Surface** (`#1a1a1a`): One step above canvas — default feature and content cards.
- **Surface Elevated** (`#222222`): Two steps above — hovered chrome, featured cards, secondary buttons.
- **Surface Code** (`#243349`): The deep blue-slate Shiki code-block well — the cool counterpoint to the warm-neutral canvas.
- **Surface Pre** (`#1f2937`): Prose `<pre>` background where Shiki isn't applied.

### Borders
- **Border** (`#2a2a2a`): Default 1px hairline — barely lighter than canvas, defines card edges and dividers.
- **Border Soft** (`#222222`): Subtler dividers — list rows, section separators.
- **Border Strong** (`#3a3a3a`): Emphasised borders, default input border before focus.

### Shadow Colors
- **Shadow Color** (`rgba(0,0,0,0.6)`): Drop shadow under floating nav, dropdowns, and modals only. Content cards do not shadow.

### Code Surface
- **Code Text** (`#f8fafc`): Shiki body code — same near-white as prose ink.
- **Code Keyword** (`#fed553`): Shiki keyword / token highlight — warm yellow against the slate well (9.03:1, AAA).

### Semantic
- **Success** (`#34d399`): Mint green — running / healthy.
- **Warning** (`#fed553`): Warm yellow — pending / caution (= code-keyword).
- **Danger** (`#f43f5e`): Rose — failed / error.
- **Info** (`#444ce7`): Indigo — informational (= brand).

## 3. Typography Rules

### Font Family
- **Display & Body**: `Aeonik, system-ui, -apple-system, "Segoe UI", sans-serif`. Aeonik (CoType Foundry) is the brand face — a neo-grotesque with crisp, even strokes that hold up beautifully at *light* weights, which is exactly how Temporal uses it. The system-ui stack is the substitute when Aeonik isn't loaded.
- **Mono**: `ui-monospace, SFMono-Regular, "SF Mono", "JetBrains Mono", Menlo, monospace`. Code blocks, CLI snippets, SDK examples, inline identifiers.
- **The defining decision is weight, not family**: display headlines run at 300 (hero) and even 100 (h2). The light register is the brand. Body and UI labels step *up* to 400–600 so running text and buttons stay solid and legible.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | Notes |
|---|---|---|---|---|---|---|
| display-hero | Aeonik | 68 | 300 | 1.05 | -0.02em | Homepage hero h1 — light, floating |
| display-lg | Aeonik | 48 | 100 | 1.10 | -0.015em | Section h2 — true hairline weight |
| h1 | Aeonik | 40 | 300 | 1.10 | -0.015em | Page titles |
| h2 | Aeonik | 32 | 300 | 1.15 | -0.01em | Section heads |
| h3 | Aeonik | 24 | 400 | 1.25 | -0.005em | Sub-section heads — weight steps up |
| h4 | Aeonik | 20 | 500 | 1.30 | 0 | Card titles, module heads |
| body-lg | Aeonik | 18 | 400 | 1.60 | 0 | Lead paragraphs |
| body | Aeonik | 16 | 400 | 1.60 | 0 | Default body |
| body-sm | Aeonik | 14 | 400 | 1.55 | 0 | Small body, footnotes |
| label | Aeonik | 13 | 500 | 1.40 | 0 | Form labels, UI labels |
| eyebrow | Aeonik | 12 | 600 | 1.40 | 0.08em | Section eyebrows, uppercase |
| caption | Aeonik | 12 | 500 | 1.40 | 0.02em | Captions, metadata |
| button | Aeonik | 15 | 500 | 1.20 | 0 | CTA labels |
| code-md | mono | 14 | 400 | 1.60 | 0 | Code blocks |
| code-sm | mono | 13 | 400 | 1.55 | 0 | Inline code |

### Principles
- **Weight goes light at the top, heavy at the bottom.** Display headlines are 100–300; body and labels are 400–600. This inverts the usual "bold headlines" instinct and is the single most identifying trait of the system.
- **Light display only works on this canvas because contrast is huge.** `#f8fafc` on `#141414` is 17.6:1, so even a hairline weight-100 h2 stays crisply legible. Never carry the light weights onto a low-contrast surface.
- **Negative tracking on display, neutral on body.** Headlines pull in -0.01em to -0.02em to tighten the thin strokes into a unit; body stays at 0 for reading comfort.
- **Body line-height is generous (1.6).** Technical reading is dense; the open leading keeps long passages and code-adjacent prose breathable.
- **Eyebrows are the one place letterspacing goes positive** (+0.08em, uppercase, 600) — a deliberate signal that this text is a *label*, not voice.
- **Mono everywhere code appears.** No system-sans fallback for code surfaces; identifiers in running prose use inline code styling.
- **Aeonik or a true neo-grotesque substitute** — Inter or system-ui at matching weights. Do not substitute a humanist or geometric sans; the neo-grotesque evenness is what makes the light weights read as engineered rather than fragile.

## 4. Component Stylings

### Buttons (4 variants)

**`button-primary`** — The indigo CTA. Background `#444ce7`, white `#ffffff` text, button type (15px / 500), padding 12px × 22px, **pill** radius. The only high-saturation element on most pages; it is unmistakably "the action." Hover lifts background to `#5b63f0`; press translates down 1px.

**`button-secondary`** — Paired neutral action. Background `#222222` (surface-elevated), `#f8fafc` text, 1px `#2a2a2a` border, same pill shape and padding. Sits beside the primary as "the other option."

**`button-ghost`** — Low-emphasis, link-style action for dense UI. Transparent background, `#f8fafc` text, pill padding. No border at rest; faint `#222` fill on hover.

**`button-outline`** — Indigo outline. Transparent background, `#444ce7` text, 1px `#444ce7` border, pill shape. Used on busy heroes or code-adjacent bands where a solid indigo fill would over-weight the composition. Hover fills to a 10% indigo wash.

### Cards

**`card`** — Default feature / content card. Background `#1a1a1a`, `#f8fafc` text, 1px `#2a2a2a` border, **12px** radius, 24px padding. No shadow — the one-step surface lift plus hairline border carries it.

**`card-code`** — Code sample card. Background `#243349` (deep slate), Shiki-highlighted text (`#f8fafc` body, `#fed553` keywords), 12px radius, 20px padding. The cool blue-slate well visually flags "this is real code" against the warm-neutral canvas.

**`card-elevated`** — Hover / featured state. Background steps to `#222222`; border may brighten to `#3a3a3a`. Used for the hovered state of any card and for featured content tiles.

### Badges & Pills

**`badge`** — Neutral pill. Background `#222222`, `#cbd5e1` text, caption typography, pill radius, 4px × 10px padding. Tags, categories, version chips.

**`badge-status-live`** — The status pill. Background `rgba(52,211,153,0.12)` (mint tint), `#34d399` text, pill radius. Carries "Running", "Healthy", "Active" — the durable-execution heartbeat made visible. Sibling variants: warning (yellow tint + `#fed553`) for "Pending", danger (rose tint + `#f43f5e`) for "Failed".

### Inputs / Forms

**`text-input`** — Background `#1a1a1a`, `#f8fafc` text, 1px `#3a3a3a` border, **8px** radius, 10px × 14px padding. Placeholder in `#94a3b8`. Focus: 1px border shifts to indigo `#444ce7` plus a 3px `rgba(68,76,231,0.5)` ring. Inputs use the 8px md radius (not pill) — forms read as precise, CTAs read as approachable.

### Navigation

**`top-nav`** — 64px tall bar on `#141414`, `#f8fafc` text. Logo + wordmark left, primary menu (Platform, Solutions, Developers, Pricing, Docs) center, "Log In" text link + indigo `button-primary` ("Get Started" / "Try Cloud") right. Sticky on scroll with a faint `0 8px 24px rgba(0,0,0,0.5)` shadow and a 1px bottom hairline appearing only after the page scrolls.

## 5. Layout Principles

### Spacing System
Base unit **4px**. Scale: `0 · 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`. Major section bands sit on 96–128px vertical padding; card internal padding ranges 20–24px; inline gaps cluster on 8/12/16. The wide top of the scale (96, 128) is what gives the page its calm, unhurried cadence — content never crowds.

### Grid & Container
Max content width is **1280px**, centered. Prose caps at **720px** for readability. Hero commonly runs a 6/6 split — light headline + indigo CTA left, an animated workflow diagram or code sample right. Feature grids run 3-up at desktop, 2-up at tablet, 1-up at mobile. Code-and-copy sections alternate sides band to band so the eye is led down the page.

### Whitespace Philosophy
Whitespace is the luxury good here. Generous section padding and a 1.6 body line-height keep the dark canvas feeling open rather than oppressive — a common failure of dark sites is density-induced fatigue, which Temporal avoids by spending space liberally. The thin display type *needs* air around it; crowding a weight-100 h2 would make it look like a mistake rather than a choice.

### Section Cadence
Page rhythm: hero (light headline + indigo CTA + code/diagram) → social-proof logo strip → alternating copy/code feature bands → product-capability grid → status/reliability proof section → pricing or "Cloud vs self-hosted" comparison → pre-footer CTA band (indigo button on `#1a1a1a`) → footer. Code samples recur throughout; the eye learns that copy explains and the slate well demonstrates.

## 6. Shapes & Radius Scale

| Tier | Token | Value | Use |
|---|---|---|---|
| Micro | micro | 2px | Reserved — inline accents, rarely used |
| Standard | sm | 4px | Small chips, code-block inner accents |
| Comfortable | md | 8px | Text inputs, selects — form controls |
| Relaxed | lg | 12px | Content cards, code cards, feature tiles |
| Large | xl | 16px | Larger feature shells, modal corners |
| Pill | pill | 9999px | All buttons, status badges, category chips |

The radius system has a deliberate split: **forms use 8px** (precise, exact — they're inputs to a system), while **all actions use the pill** (rounded, approachable — they're invitations to act). Cards land in the middle at 12px. This is the inverse of HashiCorp's all-8px discipline; Temporal softens the *action* shapes specifically to balance the cool, exacting engineering canvas with warmth at the point of decision.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat (canvas) | `#141414`, no border | Hero, body bands, footer |
| 1 — Card | `#1a1a1a` + 1px `#2a2a2a` border, no shadow | Default feature, content, code cards |
| 2 — Card elevated | `#222222` + 1px `#3a3a3a` border, no shadow | Hovered cards, featured tiles, secondary buttons |
| 3 — Code well | `#243349`, no border, no shadow | Shiki code blocks — color, not lift, marks it |
| 4 — Floating nav / dropdown | Surface + `0 8px 24px rgba(0,0,0,0.5)` | Sticky nav on scroll, menus |
| 5 — Modal | Surface + `0 24px 48px rgba(0,0,0,0.6)` | Dialogs |

### Shadow Philosophy
Temporal's depth is **surface-step elevation**: the near-black ladder (`#141414` → `#1a1a1a` → `#222`) does the cardinality work, with 1px hairlines (`#2a2a2a`) drawing card edges. Content cards never carry drop shadows — shadow is reserved for genuinely floating chrome (sticky nav, dropdowns, modals), where a soft, large-radius `rgba(0,0,0,0.5–0.6)` shadow communicates "this is above the page." The code well at `#243349` is a special case: it earns separation through *color temperature* (cool slate against warm near-black) rather than elevation, so even a flat code block reads as a distinct surface.

## 8. Interaction & Motion

### Easing Curves
- **Standard ease**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, focus, color, and small transforms.
- **Emphasized ease**: `cubic-bezier(0.2, 0, 0, 1)` — modal entrances, hero diagram reveals, the animated workflow visualization.

### Duration Buckets
- **Fast (150ms)**: Button hover/press, link underline, focus-ring expansion.
- **Standard (240ms)**: Card hover (border + surface shift), dropdown open, status-pill state changes.
- **Slow (320ms)**: Modal entrance, scroll-reveal fade-ups, the durable-execution workflow diagram stepping through states.

### Per-Component Micro-States
- **Button (primary) hover**: Background `#444ce7` → `#5b63f0` over 150ms; no transform.
- **Button (primary) press**: `transform: translateY(1px)` over 80ms.
- **Button (outline) hover**: Fills to a 10% indigo wash; border stays `#444ce7`.
- **Card hover**: Surface `#1a1a1a` → `#222222`, border `#2a2a2a` → `#3a3a3a` over 240ms. No lift, no shadow.
- **Link hover**: Indigo underline appears / thickens over 150ms; color holds at `#444ce7`.
- **Status pill (live)**: A subtle pulsing glow on the mint `#34d399` dot signals "still running" — the one ambient animation that is *semantic*, not decorative.
- **Input focus**: Border → `#444ce7`, 3px `rgba(68,76,231,0.5)` ring expands from 0 over 150ms.

### Page Transitions
Standard browser navigation. Section-on-scroll reveals are a 320ms fade-in-up with a 12px offset. The hero often carries an animated workflow diagram that steps through states (queued → running → completed) on a loop with emphasized easing — a live demonstration of durable execution rather than a static graphic.

### Reduced Motion
`prefers-reduced-motion: reduce` is honored: all transforms removed, transitions reduced to opacity-only at ~100ms, scroll-reveal fade-ups disabled, and the workflow-diagram animation freezes on its completed state. The live status-pulse becomes a static filled dot — the meaning (running) is preserved without motion.

## 9. Accessibility & A11y

### Contrast Pairs (computed from live tokens)
- **Text on bg**: `#f8fafc` on `#141414` = **17.61** — AAA. Near-white ink on near-black canvas, the workhorse pairing.
- **Body on bg**: `#cbd5e1` on `#141414` = **12.41** — AAA at body sizes.
- **Muted on bg**: `#94a3b8` on `#141414` = **7.18** — AAA; safe down to caption sizes.
- **White on brand**: `#ffffff` on `#444ce7` = **6.12** — AA. The primary-button text pairing.
- **Brand on bg**: `#444ce7` on `#141414` = **3.01** — passes for **large text (≥24px) and UI components only**; do *not* set small indigo body text directly on the canvas. For inline indigo links at body size, add an underline so color is not the only signal.
- **Success on bg**: `#34d399` on `#141414` = **9.58** — AAA. Status text and live indicators.
- **Keyword on code well**: `#fed553` on `#243349` = **9.03** — AAA. Shiki keyword highlighting stays legible.

### Focus Indicators
Every focusable element shows a **3px indigo ring** (`rgba(68,76,231,0.5)`) with the border shifting to solid `#444ce7`. The ring color is the brand indigo throughout, so focus is recognizable and on-brand. On the indigo button itself, the focus ring shifts to a white/light offset so it remains visible against its own color.

### ARIA Patterns
- **Buttons**: Native `<button>`; CTAs carry explicit `aria-label` where the visible label is short ("Start" → `aria-label="Start free trial"`).
- **Status pills**: `role="status"` with `aria-live="polite"` so workflow state changes (Running → Completed) are announced; the pulsing dot is `aria-hidden="true"` and the text carries the meaning.
- **Code blocks**: Wrapped with an accessible "Copy" button (`aria-label="Copy code"`); language is exposed in a visible label and `aria-label`.
- **Navigation**: `<nav aria-label="Primary">`; mega-menu triggers use `aria-expanded`.
- **Diagrams**: The animated workflow visualization carries a text alternative describing the state sequence.

### Keyboard Navigation
Tab order follows visual reading order. A skip-link ("Skip to main content") sits first on every page — confirmed present in production. Mega-menus open on focus and respond to arrow keys; Escape closes. Code-block copy buttons are reachable and operable by keyboard.

### Screen Reader Hints
Status is conveyed in text, never color alone — "Running" / "Failed" labels accompany every status color. Eyebrow labels are announced for section context. Decorative ambient effects (status-dot pulse, hero glow) are `aria-hidden`.

### Reduced Motion Handling
All transforms and scroll-reveals removed; the workflow animation freezes on its completed state; the live status pulse becomes a static dot. No information is lost to a reduced-motion user.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Hero h1 68→34px; 6/6 split stacks to single column (copy over diagram); nav → hamburger; feature grid 1-up; code blocks horizontal-scroll |
| Tablet | 640–1024px | Hero h1 ~48px; feature grid 2-up; pricing 2-up; nav may stay inline or collapse near 768px |
| Desktop | 1024–1280px | Full hero h1 68px; 6/6 hero split; 3-up feature grid; full inline nav |
| Wide | > 1280px | Content caps at 1280px; prose caps at 720px; generous outer gutters |

### Touch Targets
- Primary CTA ≥ 44px tall via 12px vertical padding + button line-height — comfortably above the 44px tap minimum.
- Nav links and footer links carry ≥ 44px tap height on mobile via padded hit areas.
- Code-block copy buttons enlarge to a 40px tap target on touch.

### Collapsing Strategy
Top nav collapses to a hamburger drawer below ~768px. Hero's 6/6 split stacks to a single column, copy first, diagram/code second. Feature grids step 3-up → 2-up → 1-up. Code blocks horizontal-scroll on mobile rather than wrapping (preserving line integrity). Comparison tables switch to stacked cards on mobile.

### Image & Diagram Behavior
The animated workflow diagram scales within a fixed aspect ratio; on mobile it may simplify to fewer visible nodes. Customer logos run in a monochrome strip that wraps on small screens. Screenshots use fixed aspect ratios with the container scaling.

## 11. Content & Voice

### Tone
**Developer-direct, calm, reliability-anchored.** Temporal writes for backend engineers, platform teams, and distributed-systems builders. There is no hype and no hand-waving. Headlines describe what the platform *guarantees* ("Durable Execution", "Code that's reliable by default", "Build invincible applications"); body copy backs it with concrete mechanics — retries, timeouts, state persistence, exactly-once semantics. The register assumes the reader is technical and respects their time.

### Microcopy Patterns
- **CTA verbs**: "Get Started", "Try Temporal Cloud", "Read the docs", "View on GitHub", "Talk to an expert" — specific and action-first, never "Learn more" alone.
- **Section eyebrows**: 12px uppercase, +0.08em tracking — "DURABLE EXECUTION", "DEVELOPERS", "RELIABILITY", "PRICING".
- **Capability statements**: One mechanism per line — "Automatic retries", "Stateful, fault-tolerant workflows", "Built-in observability".

### Empty States
Where they appear (filtered docs, search, an empty workflow list in product UI), the recipe is a single `#94a3b8` muted line ("No workflows match this filter") plus a reset action in indigo `#444ce7`. Calm, never cute.

### Error & Status Messages
Declarative and mechanism-aware: "Workflow execution failed — retry policy exhausted after 5 attempts" rather than "Something went wrong." Failed states carry the rose `#f43f5e`; running states carry mint `#34d399`; pending carries yellow `#fed553`. Status is always paired with a text label.

### Success Confirmations
Single-line, factual, often with the mint accent: "Workflow started", "Connected to Temporal Cloud". The green here is the brand's status heartbeat, so confirmations feel native to the product rather than bolted on.

## 12. Dark Mode & Theming

Temporal is **dark-only** at the marketing surface. The near-black `#141414` canvas is the brand's defining ground — the light Aeonik display weights and the indigo/mint accent system are all calibrated against it. There is no light marketing theme; introducing one would break the high-contrast condition that lets weight-100 headlines stay legible.

In-product surfaces (Temporal Cloud, Web UI) follow the same dark-first identity. The accent semantics stay constant whatever the surface — indigo always means *action*, mint always means *running/healthy*, rose always means *failed* — so a developer moving from marketing site to dashboard to docs reads the same color language throughout. If a light in-product theme is offered, canvas and text invert while the indigo/mint/rose accents hold their hues.

## 13. Lineage & Influences

Temporal's aesthetic descends from the **modern developer-infrastructure tradition** — the near-black canvas, monochrome chrome, and single chromatic accent place it alongside Vercel and HashiCorp rather than consumer SaaS. But where Vercel reaches for stark high-contrast minimalism and HashiCorp wears a seven-color product portfolio, Temporal's distinguishing choice is *typographic*: the deliberately light Aeonik display register. Thin display weights on dark canvases are rare precisely because they're risky; Temporal makes the risk a signature, leaning on the enormous near-white-on-near-black contrast to keep hairline type crisp.

The neo-grotesque discipline of Aeonik tracks the Swiss/International-Typographic lineage that runs through Inter and Helvetica Now — even strokes, neutral letterforms, no humanist warmth — which is exactly what makes the light weights read as engineered rather than fragile. The code-as-first-class-surface treatment (Shiki wells, warm-yellow keyword highlighting) follows the Stripe/Prism convention that has become standard for developer docs. The indigo-and-mint pairing — one color for *action*, one for *status* — is Temporal's own, a palette derived directly from the product's domain (the action you take; the signal it's still running).

- **Aeonik (CoType Foundry)** — The neo-grotesque display face whose light weights define the brand. https://www.cotypefoundry.com/fonts/aeonik
- **Vercel** — Near-black developer canvas, single chromatic accent, minimal chrome. https://vercel.com
- **HashiCorp** — Dark infrastructure marketing system, monochrome chrome with rationed accent. https://www.hashicorp.com
- **Inter (Rasmus Andersson)** — The neo-grotesque substitute and a reference for legibility at light weights. https://rsms.me/inter/
- **Shiki** — The TextMate-grammar syntax highlighter behind the code wells. https://shiki.style
- **Stripe Docs** — Code-as-first-class-surface treatment in developer documentation. https://docs.stripe.com

## 14. Do's and Don'ts

### Do
- Anchor every page on the near-black `#141414` canvas — warmer than pure black, tuned for code-adjacent reading.
- Set display headlines in Aeonik at light weights (300 for h1, 100 for h2). The hairline display type is the brand.
- Keep body and labels at 400–600 — only display goes light. Body must stay solid.
- Reserve indigo `#444ce7` for *action*: CTAs, links, focus. Nothing else competes for the click.
- Reserve mint `#34d399` for *status*: live, healthy, running. It is the durable-execution heartbeat.
- Use pill radius on all buttons and badges; 8px on form inputs; 12px on cards. The action/form split is intentional.
- Drop code into the deep slate `#243349` well with warm-yellow `#fed553` keyword highlighting.
- Spend whitespace generously (96–128px section bands, 1.6 body line-height) — the light type needs air.
- Always pair status color with a text label ("Running", "Failed") for accessibility.
- Use surface stepping (`#141414` → `#1a1a1a` → `#222`) plus 1px hairlines for depth; reserve shadows for floating chrome.

### Don't
- Don't carry the light display weights (100/300) onto any low-contrast surface — they only read on the high-contrast near-black.
- Don't set small indigo body text directly on the canvas (3.01:1 fails AA); indigo is for large text, UI, and underlined links only.
- Don't reach for bold to make headlines "punch" — the light weight is the point; boldness would erase the brand.
- Don't introduce a second action color or a second status color. The discipline is one indigo, one mint.
- Don't shadow content cards. Shadows live only on sticky nav, dropdowns, and modals.
- Don't use pill radius on form inputs — forms are precise (8px), actions are approachable (pill).
- Don't convey status by color alone; always include the text label.
- Don't ship a light marketing theme — it breaks the contrast condition the light type depends on.
- Don't substitute a humanist or geometric sans for Aeonik; the neo-grotesque evenness is what keeps light weights from looking fragile.
- Don't crowd the headlines. Crammed weight-100 type looks like a bug, not a choice.

## 15. Agent Prompt Guide

### Quick Color Reference
```
Bg / Canvas:        #141414 (near-black engineering ground)
Surface:            #1a1a1a (default card)
Surface Elev:       #222222 (hover / featured)
Code Well:          #243349 (deep slate Shiki block)
Border:             #2a2a2a (1px hairline)
Text:               #f8fafc (near-white ink)
Text Body:          #cbd5e1 (running-text)
Text Muted:         #94a3b8 (captions)
Brand / Action:     #444ce7 (indigo — CTA, link, focus)
On Brand:           #ffffff (white text on indigo)
Status / Live:      #34d399 (mint green — running/healthy)
Warning / Keyword:  #fed553 (warm yellow)
Danger:             #f43f5e (rose — failed)
```

### Example Component Prompts

1. "Create a hero band on `#141414` with an Aeonik 68px / weight 300 / -0.02em tracking near-white (`#f8fafc`) headline ('Durable Execution'), an 18px / 400 / 1.6 line-height `#cbd5e1` lead paragraph, and a CTA cluster: an indigo pill `button-primary` (`#444ce7` bg, white text, 'Get Started') beside a neutral pill `button-secondary` ('Read the docs'). Right side: an animated workflow diagram stepping queued → running → completed."

2. "Design a code-and-copy feature band: left column 32px / weight 300 Aeonik `#f8fafc` heading + `#cbd5e1` body; right column a `card-code` — deep slate `#243349` well, 12px radius, 20px padding, mono 14px / 1.6 code with keywords in warm yellow `#fed553` and body code in `#f8fafc`, plus a keyboard-accessible Copy button."

3. "Build a status pill: pill-shaped, background `rgba(52,211,153,0.12)`, text mint `#34d399`, label 'Running', with a small pulsing `#34d399` dot (aria-hidden). Add sibling variants: yellow tint + `#fed553` 'Pending', rose tint + `#f43f5e` 'Failed'."

4. "Create a 3-up feature grid: each `card` on `#1a1a1a` with a 1px `#2a2a2a` border, 12px radius, 24px padding — a 12px uppercase `#94a3b8` eyebrow (+0.08em tracking: 'RETRIES' / 'TIMEOUTS' / 'STATE'), a 20px / 500 `#f8fafc` title, and 16px / 400 / 1.6 `#cbd5e1` body. Hover: surface → `#222222`, border → `#3a3a3a`, no shadow."

5. "Compose a pre-footer CTA band: `#1a1a1a` surface, 16px radius, 64px padding, centered Aeonik 40px / weight 300 `#f8fafc` headline ('Build invincible applications'), and an indigo pill `button-primary` ('Try Temporal Cloud')."

6. "Create a 64px top nav on `#141414`: logo + wordmark left, primary menu (Platform, Developers, Pricing, Docs) center in 15px / 500 `#f8fafc`, and right-aligned 'Log In' text link + indigo pill `button-primary` ('Get Started'). Sticky on scroll with a faint `0 8px 24px rgba(0,0,0,0.5)` shadow and a 1px bottom hairline appearing after scroll."

### Iteration Guide
1. Start with the `#141414` near-black canvas and near-white `#f8fafc` ink. That high-contrast pairing is the precondition for everything else.
2. Set headlines in Aeonik at *light* weights — 300 for h1, 100 for h2. If they look bold, you've lost the brand; go thinner.
3. Add exactly one indigo CTA per major section. If two indigo buttons compete, demote one to `button-secondary` (neutral) or `button-outline`.
4. Reserve mint `#34d399` strictly for status. If you're tempted to use green for a CTA, stop — indigo is action, green is "still running."
5. Drop every code sample into the deep slate `#243349` well with warm-yellow keyword highlighting — code is a designed surface, not plain text.
6. Use pill radius for buttons/badges and 8px for inputs. If a form field is pill-shaped, it's wrong; if a button is square, it's wrong.
7. Build depth with surface steps and 1px hairlines, not shadows. Only sticky nav, dropdowns, and modals may shadow.
8. Spend whitespace — push section padding to 96–128px and body line-height to 1.6. Crowding kills the light type.
