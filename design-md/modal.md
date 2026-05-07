---
name: Modal
tagline: 'Serverless GPU infra in lime-green — `#0c0c0c` canvas, electric `#7fee64` accent, custom Modal Mono on every chip and code block.'
updated_at: 2026-05-06T08:44:32+12:00
published_at: 2026-05-03T10:27:49+12:00
author: webdesignhot
source_url: https://modal.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [dev-tools, ai, saas]
tags: [dark, mono, bright, dense, structured, brutalist]
preview_swatch: ['#0c0c0c', '#7fee64', '#ffffff']
related: [linear, vercel, turbo]
description: 'Modal renders serverless GPU infrastructure with a single, electric design move — lime-green `#7fee64` on near-black `#0c0c0c`, custom Modal Mono running through every chip, label, and CTA. The site reads like a terminal that learned typography: brutalist developer-tool conviction with full-bleed mono labels, asymmetric code blocks, and a green that nearly hums.'

colors:
  # Primary surfaces
  bg: '#0c0c0c'                    # near-black canvas — slightly warmer than pure 000
  bg-elev-1: '#141414'             # first elevation tier — cards, code blocks
  bg-elev-2: '#1c1c1c'             # second elevation tier — emphasized blocks, hover
  bg-elev-3: '#262626'             # third tier — popovers, dialogs
  bg-elev-4: '#333333'             # fourth tier — modal surface
  bg-overlay: 'rgba(0, 0, 0, 0.78)' # modal scrim

  # Text scale
  text: '#ffffff'                  # body, headlines, code output
  text-strong: '#ffffff'           # display headlines, wordmark
  text-soft: '#a3a3a3'             # secondary copy, meta
  text-muted: '#737373'            # tertiary copy, captions
  text-faint: '#525252'            # disabled, watermark
  text-on-brand: '#0c0c0c'         # black-on-lime is the contrast move

  # Brand — the only allocated chromatic surface
  brand: '#7fee64'                 # Modal lime — the entire chromatic identity
  brand-hover: '#6dd954'           # darker lime on hover
  brand-active: '#5cc548'          # active state
  brand-tint: 'rgba(127, 238, 100, 0.12)'   # tinted backgrounds (chips, alerts)
  brand-tint-strong: 'rgba(127, 238, 100, 0.2)' # heavier tint for emphasis
  brand-glow: 'rgba(127, 238, 100, 0.4)'    # atmospheric halo

  # Accent — secondary lime variants for code highlighting
  accent-output: '#7fee64'         # CLI output highlight
  accent-prompt: '#a3eb8e'         # softer lime for prompt prefix `$`
  accent-syntax-keyword: '#7fee64'
  accent-syntax-string: '#fbbf24'   # warm yellow — only secondary chromatic in code
  accent-syntax-comment: '#737373'
  accent-syntax-fn: '#a3eb8e'

  # Borders
  border: 'rgba(255, 255, 255, 0.1)'    # 10% white hairline
  border-strong: 'rgba(255, 255, 255, 0.2)'
  border-subtle: 'rgba(255, 255, 255, 0.05)'
  border-brand: 'rgba(127, 238, 100, 0.4)'
  border-focus: '#7fee64'

  # Semantic
  success: '#7fee64'                # brand-as-success — same lime
  success-bg: 'rgba(127, 238, 100, 0.12)'
  warning: '#fbbf24'
  warning-bg: 'rgba(251, 191, 36, 0.12)'
  danger: '#f87171'
  danger-bg: 'rgba(248, 113, 113, 0.12)'
  info: '#60a5fa'
  info-bg: 'rgba(96, 165, 250, 0.12)'

  # On-color
  on-brand: '#0c0c0c'              # black on lime — never white
  on-bg: '#ffffff'
  on-surface: '#ffffff'
  on-warning: '#0c0c0c'
  on-danger: '#ffffff'

typography:
  display:
    family: '"Söhne", "Inter Variable", -apple-system, system-ui, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: ['ss01', 'tnum']
  body:
    family: '"Söhne", "Inter Variable", -apple-system, system-ui, sans-serif'
    weights: [400, 500]
  mono:
    family: '"Modal Mono", "Berkeley Mono", "JetBrains Mono", ui-monospace, "SF Mono", monospace'
    weights: [400, 500, 600]
    opentype-features: ['zero', 'ss01']
  scale:
    display-hero:    { size: 88, weight: 600, lineHeight: 0.95, tracking: '-0.035em' }
    display:         { size: 72, weight: 600, lineHeight: 1.0,  tracking: '-0.03em' }
    h1:              { size: 56, weight: 600, lineHeight: 1.05, tracking: '-0.025em' }
    h2:              { size: 36, weight: 600, lineHeight: 1.15, tracking: '-0.018em' }
    h3:              { size: 22, weight: 500, lineHeight: 1.3 }
    h4:              { size: 18, weight: 500, lineHeight: 1.35 }
    body-large:      { size: 18, weight: 400, lineHeight: 1.55 }
    body:            { size: 16, weight: 400, lineHeight: 1.55 }
    body-small:      { size: 14, weight: 400, lineHeight: 1.5 }
    label:           { size: 11, weight: 500, lineHeight: 1.3, family: mono, transform: 'uppercase', tracking: '0.08em' }
    label-strong:    { size: 12, weight: 600, lineHeight: 1.3, family: mono, transform: 'uppercase', tracking: '0.06em' }
    caption:         { size: 12, weight: 400, lineHeight: 1.4 }
    overline:        { size: 10, weight: 500, lineHeight: 1.2, family: mono, transform: 'uppercase', tracking: '0.1em' }
    code:            { size: 14, weight: 400, lineHeight: 1.6, family: mono }
    code-inline:     { size: 13, weight: 500, lineHeight: 1.4, family: mono }
    code-micro:      { size: 12, weight: 400, lineHeight: 1.5, family: mono }
    cli:             { size: 13, weight: 400, lineHeight: 1.5, family: mono }

radius:
  micro: 2
  sm: 4
  md: 6
  lg: 8
  card: 12
  button: 6
  pill: 9999

spacing:
  base: 4
  scale: [0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 96, 128]

layout:
  page-width: 1280
  prose-width: 720
  reading-width: 720
  container: 1280
  gutter: 24
  section-padding: 96
  header-height: 64
  grid: 12

components:
  button-primary:
    bg: '#7fee64'
    color: '#0c0c0c'
    border: 'none'
    radius: 6
    weight: 500
    padding: '10px 18px'
    font: 'Söhne 14px / weight 500'
    use: 'Sign up, Start building — lime block on near-black canvas'
  button-secondary:
    bg: 'transparent'
    color: '#ffffff'
    border: '1px solid rgba(255, 255, 255, 0.2)'
    radius: 6
    weight: 500
    padding: '10px 18px'
    use: 'Read docs, View pricing — paired with primary'
  button-ghost:
    bg: 'transparent'
    color: '#a3a3a3'
    border: 'none'
    radius: 6
    weight: 500
    padding: '10px 16px'
    use: 'Inline link-grade actions; hover lifts text to white'
  button-mono:
    bg: '#1c1c1c'
    color: '#7fee64'
    border: '1px solid rgba(127, 238, 100, 0.4)'
    radius: 6
    weight: 500
    padding: '8px 14px'
    font: 'Modal Mono 13px'
    use: '`$ modal run` style command pills inside docs'
  card:
    bg: '#141414'
    border: '1px solid rgba(255, 255, 255, 0.1)'
    radius: 12
    padding: '24px'
    use: 'Feature tile, code preview block — minimal elevation'
  code-block:
    bg: '#141414'
    color: '#ededed'
    border: '1px solid rgba(255, 255, 255, 0.1)'
    radius: 8
    font: 'Modal Mono 14px'
    padding: '20px 24px'
    use: 'Full-bleed snippet, CLI output, latency benchmark'
  badge:
    bg: 'rgba(127, 238, 100, 0.12)'
    color: '#7fee64'
    border: '1px solid rgba(127, 238, 100, 0.4)'
    radius: 9999
    padding: '2px 10px'
    font: 'Modal Mono 11px uppercase 0.08em'
    use: 'Status chips: RUNNING, QUEUED, COMPLETED'
  input:
    bg: '#0c0c0c'
    color: '#ffffff'
    border: '1px solid rgba(255, 255, 255, 0.2)'
    radius: 6
    padding: '10px 14px'
    focus-ring: '0 0 0 2px #7fee64'
    use: 'Email, search, command palette input'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-decelerate: 'cubic-bezier(0, 0, 0.2, 1)'
  ease-accelerate: 'cubic-bezier(0.4, 0, 1, 1)'
  duration-instant: 80
  duration-fast: 120
  duration-standard: 200
  duration-slow: 300
  duration-deliberate: 480
  hover-shift: 'translateY(-1px) over 120ms ease-standard'
  cursor-blink: '1.0s ease-in-out infinite alternate — only on the hero CLI prompt'
  reduced-motion: 'respects prefers-reduced-motion: reduce — cursor blink halts, hover lifts collapse to opacity-only'

breakpoints:
  mobile: 640
  tablet: 768
  laptop: 1024
  desktop: 1280
  wide: 1536

shadows:
  none: 'none'
  ambient: '0 1px 2px rgba(0, 0, 0, 0.5)'
  standard: '0 4px 12px rgba(0, 0, 0, 0.6)'
  elevated: '0 12px 32px rgba(0, 0, 0, 0.7), 0 2px 6px rgba(0, 0, 0, 0.4)'
  deep: '0 30px 60px rgba(0, 0, 0, 0.8), 0 12px 24px rgba(0, 0, 0, 0.5)'
  glow-lime: '0 0 60px rgba(127, 238, 100, 0.4)'
  glow-lime-soft: '0 0 32px rgba(127, 238, 100, 0.25)'
  ring: '0 0 0 2px #7fee64'

accessibility:
  contrast-text-on-bg: 19.5            # white on #0c0c0c — AAA all sizes
  contrast-soft-on-bg: 7.4             # #a3a3a3 on #0c0c0c — AAA body
  contrast-muted-on-bg: 4.6            # #737373 on #0c0c0c — AA body, AAA large
  contrast-text-on-brand: 14.2         # black on lime — AAA all sizes (the whole point)
  contrast-white-on-brand: 1.5         # white on lime FAILS — never use this combo
  contrast-on-brand-recommended: 'always use #0c0c0c (near-black) text on the lime CTA — white-on-lime fails contrast at any size'
  focus-ring: '2px solid #7fee64 with 2px offset'
  reduced-motion-honored: true
  keyboard-nav: 'tab order: skip link, logo, main nav, primary CTA, secondary CTA, content. Modal command palette opens on cmd+k.'
  aria-patterns: 'CLI status chips use role="status" with aria-live="polite". Code copy buttons announce "Copy <language> snippet". Status badges expose state via aria-label.'

dark-mode: 'native dark — Modal is dark-only by design. The near-black `#0c0c0c` canvas and lime accent are the entire brand identity; a light variant would dilute the terminal-grade signal. Docs surfaces stay dark; no light theme offered.'

lineage:
  summary: |
    Modal is a serverless GPU/CPU compute platform whose marketing
    site is engineered around a single, conviction-level design move:
    lime-green `#7fee64` on near-black `#0c0c0c`. The accent is
    near-radioactive — a green that registers somewhere between Hacker
    terminal phosphor and 1990s rave flyer — and Modal commits to it
    across every CTA, label chip, code highlight, and hover state.
    The mono face is Modal Mono, a custom commission (the
    company's name doubles as the typography brand), with Berkeley Mono
    as the closest licensed cousin. Display copy runs in Söhne (Klim
    Type Foundry), the same family that anchors Stripe's editorial
    system — Modal treats it more aggressively, cranking weights to
    600 and tracking to `-0.025em` for engineering-grade confidence.
    The black canvas has subtle elevation tiers (`#141414` → `#1c1c1c`
    → `#262626`) but no decorative gradients; the green is the entire
    color story. Code blocks, latency benchmarks, and CLI output are
    first-class typography citizens — full-bleed, mono-set, with the
    green reserved for output highlights and command prefixes. The
    system reads as a terminal that learned typography. The brutalist
    discipline is the brand: dense, mono-saturated, almost punishingly
    confident.
  influences:
    - name: Söhne (Klim Type Foundry)
      role: 'Display sans — Modal cranks weights to 600 and tracking to -0.025em for engineering-grade confidence.'
      url: https://klim.co.nz/retail-fonts/soehne/
    - name: Berkeley Mono / Modal Mono lineage
      role: 'Custom commercial mono as typography signature — every label, chip, and CLI prefix renders in Modal Mono.'
      url: https://berkeleygraphics.com/typefaces/berkeley-mono/
    - name: Vercel
      role: 'Pure-black canvas with single-accent CTAs — Modal pushes brighter and warmer.'
      url: https://vercel.com
    - name: Linear
      role: 'Mono-uppercase label typography for navigation and section markers.'
      url: https://linear.app
    - name: Hacker terminal aesthetic
      role: 'Phosphor-green-on-black as the original developer-tool register; Modal is the typography-grade refinement of that lineage.'
---

## 1. Visual Theme & Atmosphere

Modal is the rare developer infra company whose visual identity is
*louder* than its competitors. The canvas is near-black `#0c0c0c` —
a hair warmer than pure zero, calibrated to read as terminal-grade
without the brutality of `#000000`. On top of that void sits an
electric lime `#7fee64` that nearly hums, applied flat across every
primary CTA, status chip, code highlight, and hover state. The lime
is the entire chromatic identity — there is no secondary brand color,
no gradient, no decorative accent. The discipline is the design.

Modal's neighbors in serverless compute (Vercel, Cloudflare Workers,
Replicate) lean into restrained palettes: black-and-white, a single
muted accent, conservative typography. Modal goes the other way,
picking a green that's almost radioactive and applying it as the
dominant CTA fill. The choice is intentional: in a category of
similar pitches, the loudest visual signal wins. The site signals
that the product behind it is fast — fast enough that the brand can
afford to be punchy without seeming unserious.

The defining typographic move is Modal Mono — a custom commission
(the company's name doubles as the typography brand). Modal Mono
appears on every label chip, every status pill, every CLI prefix,
every benchmark figure. Display copy runs in Söhne at weight 600,
tracked tight, projecting the kind of engineering-grade confidence
that Stripe-flavored editorial-soft Söhne would never. Where Stripe
uses Söhne at 300 for editorial-soft, Modal uses 600 for
infrastructure-hard.

The atmosphere is brutalist developer-tool: full-bleed code blocks,
asymmetric layouts that favor the snippet over the prose, mono labels
in uppercase tracked to `+0.08em`, and a green so saturated it
appears to be a UI element of the *product itself*, not a
decorative choice on a marketing page. Reading the page feels like
watching a terminal that learned typography — and that's precisely
the brand's pitch.

**Key Characteristics**

- Near-black `#0c0c0c` canvas — warmer than pure zero, terminal-grade
- Electric lime `#7fee64` — the entire chromatic identity, no second color
- Black-on-lime CTAs — never white on lime (contrast fails)
- Modal Mono on every label, chip, status pill, CLI prefix
- Söhne at weight 600 / tight tracking for display copy
- Tonal-black layering (0c → 14 → 1c → 26 → 33) — no shadows on cards
- Uppercase mono labels with `+0.08em` tracking — the Linear-adjacent move
- Full-bleed code blocks with line-numbered Modal Mono and lime-on-output highlighting
- Asymmetric `1.4fr / 1fr` splits where the snippet outweighs the prose
- 6px button radii — sharper than Stripe (8px), gentler than pure brutalist (0–2px)

## 2. Color Palette & Roles

### Primary

- **Background** `#0c0c0c` — near-black canvas. Slightly warmer than pure `#000000`; calibrated to read as terminal-grade without the brutality of zero. The Vercel-system would render at `#000`; Modal lifts to `0c` to give the lime room to breathe.
- **Text Primary** `#ffffff` — body copy, headlines, code output.
- **Text Soft** `#a3a3a3` — secondary copy, meta, navigation captions.

### Brand

- **Brand Lime** `#7fee64` — the entire chromatic identity. Used on primary CTA fill, status chip text, code output highlights, command prefix `$`, focus rings, hover-state borders, success states. There is no secondary brand color.
- **Brand Hover** `#6dd954` — darker lime for primary CTA hover state.
- **Brand Active** `#5cc548` — pressed state.
- **Brand Tint** `rgba(127, 238, 100, 0.12)` — tinted background for status chips, alert panels, code-line highlights.
- **Brand Tint Strong** `rgba(127, 238, 100, 0.2)` — heavier tint for emphasis.
- **Brand Glow** `rgba(127, 238, 100, 0.4)` — atmospheric halo behind hero CTA (used sparingly, optional).

### Accent / Code Syntax

The only secondary chromatic role is yellow-on-string in code blocks. It's the single concession to multi-color syntax highlighting:

- **Syntax Keyword** `#7fee64` — `def`, `class`, `import` — lime
- **Syntax Function** `#a3eb8e` — function names — softer lime
- **Syntax String** `#fbbf24` — `"hello world"` — warm amber
- **Syntax Comment** `#737373` — `# notes` — text-muted
- **Syntax Number** `#ffffff` — integers, floats — pure white
- **CLI Prompt** `#a3eb8e` — the leading `$` in CLI examples
- **CLI Output** `#7fee64` — output lines highlighted in full lime

### Interactive

- **Link** `#7fee64` — inline link color on dark surfaces
- **Link Hover** `#a3eb8e` — softer on hover, slightly lifted
- **Focus Ring** `#7fee64` — 2px solid lime with 2px offset
- **Selection** `rgba(127, 238, 100, 0.3)` — text-selection background
- **Disabled** `#525252` — text-faint role

### Neutral Scale

- **Text** `#ffffff` — body, headlines
- **Text Soft** `#a3a3a3` — secondary copy
- **Text Muted** `#737373` — tertiary, captions
- **Text Faint** `#525252` — disabled, watermark
- **Background** `#0c0c0c` — canvas
- **BG Elev 1** `#141414` — first elevation tier (cards, code blocks)
- **BG Elev 2** `#1c1c1c` — second tier (emphasized blocks, hover)
- **BG Elev 3** `#262626` — third tier (popovers, dialogs)
- **BG Elev 4** `#333333` — fourth tier (modal surface)

### Surface & Borders

- **Border** `rgba(255, 255, 255, 0.1)` — 10% white hairline. The default divider.
- **Border Strong** `rgba(255, 255, 255, 0.2)` — emphasis dividers, ghost button outlines.
- **Border Subtle** `rgba(255, 255, 255, 0.05)` — barely-visible row separators.
- **Border Brand** `rgba(127, 238, 100, 0.4)` — lime border on chips, focus contexts.
- **Border Focus** `#7fee64` — full-saturation lime for focus rings.

### Shadow Colors

Modal renders shadows minimally — depth comes from tonal stacking. When shadows do appear, they're pure black at varying alpha, never blue-tinted:

- **Shadow Ambient** `0 1px 2px rgba(0, 0, 0, 0.5)` — input focus
- **Shadow Standard** `0 4px 12px rgba(0, 0, 0, 0.6)` — popover lift
- **Shadow Elevated** `0 12px 32px rgba(0, 0, 0, 0.7)` — dialog
- **Shadow Deep** `0 30px 60px rgba(0, 0, 0, 0.8)` — modal occlusion
- **Glow Lime** `0 0 60px rgba(127, 238, 100, 0.4)` — atmospheric halo, optional

### Semantic

- **Success** `#7fee64` text on `rgba(127, 238, 100, 0.12)` background — overlaps brand (the lime is the success).
- **Warning** `#fbbf24` text on `rgba(251, 191, 36, 0.12)` background — amber.
- **Danger** `#f87171` text on `rgba(248, 113, 113, 0.12)` background — soft red.
- **Info** `#60a5fa` text on `rgba(96, 165, 250, 0.12)` background — soft blue.

The lime-as-success overlap is intentional: build-passed states use the brand color, reinforcing "lime = positive" across the system.

## 3. Typography Rules

### Font Family

- **Primary**: `"Söhne", "Inter Variable", -apple-system, system-ui, sans-serif` — Klim Type Foundry's Söhne, a contemporary grotesk used across editorial dev-tools (Stripe, Vercel for some surfaces). Modal uses it at weight 600 for engineering-hard register.
- **Monospace**: `"Modal Mono", "Berkeley Mono", "JetBrains Mono", ui-monospace, "SF Mono", monospace` — Modal Mono is a custom commission; Berkeley Mono is the licensed substitute that closest matches the optical character.
- **OpenType features**: `ss01` (alternate single-story `g` in Söhne), `tnum` (tabular numerals for benchmarks), `zero` (slashed zero in mono — critical for distinguishing `0` from `O` in CLI output).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| Display Hero | Söhne | 88 | 600 | 0.95 | -0.035em | ss01 | Reserved for landing hero |
| Display | Söhne | 72 | 600 | 1.0 | -0.03em | ss01 | Standard hero h1 |
| H1 | Söhne | 56 | 600 | 1.05 | -0.025em | — | Section opener |
| H2 | Söhne | 36 | 600 | 1.15 | -0.018em | — | Sub-section |
| H3 | Söhne | 22 | 500 | 1.3 | 0 | — | Feature title |
| H4 | Söhne | 18 | 500 | 1.35 | 0 | — | Card heading |
| Body Large | Söhne | 18 | 400 | 1.55 | 0 | — | Hero subhead |
| Body | Söhne | 16 | 400 | 1.55 | 0 | — | Default reading copy |
| Body Small | Söhne | 14 | 400 | 1.5 | 0 | — | Footnotes, secondary |
| Label | Modal Mono | 11 | 500 | 1.3 | 0.08em UPPER | — | Section markers, nav, chip labels |
| Label Strong | Modal Mono | 12 | 600 | 1.3 | 0.06em UPPER | — | Emphasized labels |
| Caption | Söhne | 12 | 400 | 1.4 | 0 | — | Image captions, meta |
| Overline | Modal Mono | 10 | 500 | 1.2 | 0.1em UPPER | — | Smallest section markers |
| Code | Modal Mono | 14 | 400 | 1.6 | 0 | zero | Block code, full-bleed |
| Code Inline | Modal Mono | 13 | 500 | 1.4 | 0 | zero | Inline ``code`` token |
| Code Micro | Modal Mono | 12 | 400 | 1.5 | 0 | zero | Tooltips, dense docs tables |
| CLI | Modal Mono | 13 | 400 | 1.5 | 0 | zero | Command-line output blocks |
| Numeric Tabular | Söhne | inherit | 500 | inherit | 0 | tnum | Latency figures, benchmark numbers |

### Principles

- **Söhne at weight 600 is the brand voice.** Where Stripe uses Söhne at 300 for editorial-soft, Modal uses 600 for engineering-hard. The weight choice is the entire personality difference.
- **Modal Mono on every label.** Every chip, status pill, navigation marker, and section overline renders in Modal Mono uppercase tracked to `+0.08em`. Sans labels read as SaaS; mono labels read as terminal-grade.
- **Tabular numerals (`tnum`)** mandatory for benchmark figures. Latency numbers in proportional figures look amateur.
- **Slashed zero (`zero`)** mandatory in mono — distinguishes `0` from `O` in CLI output and tokens.
- **Negative tracking on display only.** Display sizes (36px+) use `-0.018em` to `-0.035em`. Body stays at `0`. Labels use *positive* tracking (`+0.06em` to `+0.10em`).
- **Line-heights compress as size grows.** 0.95 at 88px, 1.55 at 16px. Tight LH on display gives the headline visual mass.
- **Uppercase only on mono labels.** Söhne stays sentence-case throughout. Mono labels go ALL CAPS — that's the typographic boundary.

## 4. Component Stylings

### Buttons

**Button Primary (Lime CTA)** — the signature.

- Background: `#7fee64`
- Text: `#0c0c0c` (near-black), Söhne 14px weight 500
- Padding: `10px 18px`
- Radius: 6px
- Border: none
- Hover: background to `#6dd954`, no scale
- Active: background to `#5cc548`
- Focus: 2px white ring with 2px offset (white because lime is too close to brand for self-ring)
- Use: "Sign up", "Start building", "Get started" — the primary action on every section

**Button Secondary (Ghost)** — paired with primary.

- Background: transparent
- Text: `#ffffff`, Söhne 14px weight 500
- Padding: `10px 18px`
- Border: `1px solid rgba(255, 255, 255, 0.2)`
- Radius: 6px
- Hover: border lifts to `rgba(255, 255, 255, 0.4)`, bg lifts to `rgba(255, 255, 255, 0.05)`
- Use: "Read docs", "View pricing"

**Button Ghost (Inline)** — link-grade.

- Background: transparent
- Text: `#a3a3a3`, Söhne 14px weight 500
- Padding: `10px 16px`
- Border: none
- Hover: text lifts to `#ffffff`
- Use: nav links, footer columns, inline CTAs

**Button Mono (Command Pill)** — the brutalist signature inside docs.

- Background: `#1c1c1c`
- Text: `#7fee64`, Modal Mono 13px weight 500
- Padding: `8px 14px`
- Border: `1px solid rgba(127, 238, 100, 0.4)`
- Radius: 6px
- Hover: bg lifts to `#262626`
- Use: `$ modal run`, `$ modal deploy` — command pills inside doc bodies

### Cards

- Background: `#141414`
- Border: `1px solid rgba(255, 255, 255, 0.1)`
- Radius: 12px
- Padding: 24px
- Hover: border lifts to `rgba(255, 255, 255, 0.2)`, no shadow
- Use: feature tiles, code preview blocks, pricing cells

### Badges / Chips / Status Pills

**Brand Badge (Lime Pill)**

- Background: `rgba(127, 238, 100, 0.12)`
- Text: `#7fee64`, Modal Mono 11px weight 500 uppercase `0.08em` tracking
- Border: `1px solid rgba(127, 238, 100, 0.4)`
- Radius: 9999 (pill)
- Padding: `2px 10px`
- Use: "RUNNING", "QUEUED", "COMPLETED", "GPU", "BETA"

**Status Chip Variants**

- **Running** — lime tint, lime text
- **Queued** — amber tint `rgba(251, 191, 36, 0.12)`, amber text `#fbbf24`
- **Failed** — red tint `rgba(248, 113, 113, 0.12)`, red text `#f87171`
- **Stopped** — neutral tint `rgba(255, 255, 255, 0.08)`, soft text `#a3a3a3`

**Neutral Badge**

- Background: `rgba(255, 255, 255, 0.08)`
- Text: `#a3a3a3`, Modal Mono 11px uppercase
- Border: `1px solid rgba(255, 255, 255, 0.2)`
- Use: tag pills, version markers without status semantics

### Inputs / Forms

- Background: `#0c0c0c`
- Text: `#ffffff`, Söhne 14px
- Placeholder: `#737373`
- Border: `1px solid rgba(255, 255, 255, 0.2)`
- Radius: 6px
- Padding: `10px 14px`
- Focus: border to `#7fee64`, ring `0 0 0 2px rgba(127, 238, 100, 0.2)`
- Error: border to `#f87171`, ring `rgba(248, 113, 113, 0.2)`
- Use: email signup, search, command palette

### Code Block

- Background: `#141414`
- Text: `#ededed`
- Border: `1px solid rgba(255, 255, 255, 0.1)`
- Radius: 8px
- Padding: `20px 24px`
- Font: Modal Mono 14px / 1.6
- Line numbers: `#525252`, right-aligned, `Modal Mono` 12px
- Syntax: keywords lime, strings amber, comments soft-gray, output lime
- Copy button: top-right, hover-revealed, Modal Mono 12px label "COPY"
- CLI prompt: leading `$` in soft-lime `#a3eb8e`, output lines in full `#7fee64`

### Navigation

- Height: 64px sticky
- Background: `rgba(12, 12, 12, 0.78)` with `backdrop-filter: blur(16px)` on scroll
- Border-bottom: `1px solid rgba(255, 255, 255, 0.1)` on scroll
- Logo: lowercase "modal" wordmark in Modal Mono 18px weight 500 white
- Nav links: 14px weight 500 `#a3a3a3` → `#ffffff` on hover
- CTA cluster: secondary + primary (lime), right-aligned

### Tooltip

- Background: `#262626`
- Text: `#ffffff`, Söhne 12px weight 500 (or Modal Mono 11px for code-context)
- Border: `1px solid rgba(255, 255, 255, 0.1)`
- Radius: 6px
- Padding: `4px 8px`
- Shadow: `0 4px 12px rgba(0, 0, 0, 0.6)`

### Toast

- Background: `#1c1c1c`
- Border: `1px solid rgba(255, 255, 255, 0.2)` (or `rgba(127, 238, 100, 0.4)` for success)
- Radius: 8px
- Padding: `12px 16px`
- Text: `#ffffff`, Söhne 14px
- Status icon: 16px lime check (success), amber alert (warning), red x (error)

### Modal Dialog

- Background: `#1c1c1c` panel on `rgba(0, 0, 0, 0.78)` scrim
- Border: `1px solid rgba(255, 255, 255, 0.1)`
- Radius: 12px
- Padding: `32px`
- Shadow: deep
- Header: H3 (22px weight 500)
- Footer: secondary + primary buttons right-aligned

## 5. Layout Principles

### Spacing System

- **Base unit**: 4px
- **Scale**: 0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 96, 128
- **Density observation**: Modal uses tight intra-card density (12–16px gutters) and aggressive section padding (96–128px). Code blocks get extra breathing room — `20px 24px` inner padding versus the 16px standard for cards. The density reads as terminal-grade information density.

### Grid & Container

- Container: 1280px max-width with 24px gutters.
- Reading column: 720px for long-form prose.
- Grid: 12-column with 24px gaps.
- Hero treatment: full-bleed canvas; content constrained to 800px center-aligned. Lime CTA paired with secondary ghost.
- Asymmetric splits: feature pages routinely use `1.4fr / 1fr` where the code block deserves visual primacy over its prose. The snippet wins.
- Benchmark grid: 4-column at desktop (latency figure + label, repeated 4x).

### Whitespace Philosophy

Modal trades on density. Section padding (96–128px) is generous, but the *interior* of each section is dense — code blocks fill, labels stack tightly, status chips clump. The page reads as engineering-grade because every surface is *useful*, not decorative. White space happens *between* sections, not *inside* them.

### Section Cadence

- **Section 1 (Hero)**: full-bleed `#0c0c0c`, lime CTA + ghost CTA, optional CLI demo block right-aligned.
- **Section 2 (Code preview)**: full-bleed Modal Mono code block on `#141414`, syntax-highlighted, line-numbered.
- **Section 3 (Feature grid)**: 3-column cards on `#0c0c0c` canvas.
- **Section 4 (Benchmarks)**: 4-column latency/throughput figures with tabular numerals and Modal Mono labels.
- **Section 5 (Pricing or social proof)**: card grid or muted logo strip.
- **Section 6 (Final CTA)**: same lime CTA pattern as hero.

The page never alternates light/dark — Modal stays near-black through every section. Depth comes from elevation tiers (0c → 14 → 1c → 26).

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| Micro | 2px | Hairline tag chips, dense status indicators |
| SM | 4px | Inline code chips, micro-pills |
| MD | 6px | Buttons (primary, secondary, ghost, mono), inputs |
| LG | 8px | Code blocks, small cards |
| Card | 12px | Feature cards, modal panels |
| Pill | 9999px | Status badges, brand chips |

The defining radii are **6px on buttons** and **12px on cards**. The 6px button is the signature — sharper than Stripe's 8px (consumer-soft) but gentler than full brutalist 0–2px (punk). The 12px card matches Vercel/Turbo discipline. No compound radii (no asymmetric corner rounding) — every corner is uniform.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat on `#0c0c0c` | Hero, section bodies — no shadow, no lift |
| 1 | Tonal lift to `#141414` | Code blocks, default cards |
| 2 | Tonal lift to `#1c1c1c` + 10% white border | Hovered cards, emphasized blocks |
| 3 | Tonal lift to `#262626` + standard shadow | Popovers, tooltips |
| 4 | `#262626` + elevated shadow | Dropdowns, dialogs |
| 5 | `#333333` + deep shadow | Full modal overlays |

### Shadow Philosophy

Modal's depth strategy is **tonal-black layering with finer granularity than Linear's 3-tier system**. Each elevation step is 4–6% lightness apart, calibrated for the product's denser information surfaces. Drop shadows appear only at level 3+ (popovers, dialogs, modals); cards and code blocks rely entirely on tonal layering.

Shadows are pure black at varying alpha (50–80%) — never blue-tinted (Stripe), never warm (Notion). The brutalist register demands neutral occlusion shadows.

The optional atmospheric depth move is the **lime glow** — `0 0 60px rgba(127, 238, 100, 0.4)` behind the hero CTA on certain campaign surfaces. It's used sparingly; over-applied lime glow undermines the disciplined-flat-fill brand pattern.

## 8. Interaction & Motion

### Easing Curves

- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, fade, transition.
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal open, page enter.
- **Decelerate**: `cubic-bezier(0, 0, 0.2, 1)` — entering elements.
- **Accelerate**: `cubic-bezier(0.4, 0, 1, 1)` — exiting elements.

### Duration Buckets

- **Instant**: 80ms — tooltip show, micro feedback.
- **Fast**: 120ms — button hover, link hover.
- **Standard**: 200ms — card hover, dropdown open.
- **Slow**: 300ms — modal open, page transition.
- **Deliberate**: 480ms — hero illustration entrance.

### Per-Component Micro-States

- **Button hover (primary)**: background shifts `#7fee64 → #6dd954` over 120ms ease-standard. No scale, no lift — the brand is flat.
- **Button hover (ghost)**: border lifts `0.2 → 0.4` alpha, bg lifts `0 → 0.05` alpha over 120ms.
- **Card hover**: border lifts `0.1 → 0.2` alpha over 200ms; no `translateY`, no shadow.
- **Link hover**: color shifts `#a3a3a3 → #ffffff` over 120ms.
- **CLI cursor blink**: 1.0s ease-in-out infinite alternate, only on the hero CLI prompt block. Block-character cursor (`█`) toggles opacity 1 ↔ 0.3.
- **Code copy button**: opacity 0 → 1 on card hover over 200ms; success state flashes "COPIED" in lime for 1.5s.
- **Status pill (running → completed)**: tint shifts amber → lime over 200ms with a brief 100ms scale `1.0 → 1.05 → 1.0` pulse on transition.

### Page Transitions

Modal uses Next.js client-side routing with no page-level transition — the canvas stays consistent across navigations, only content swaps. Documents pages fade content over 200ms; marketing pages have no transition.

### Reduced-Motion Strategy

Respects `prefers-reduced-motion: reduce`:

- CLI cursor blink halts (cursor stays at full opacity).
- Status pill pulse animation removed.
- All hover lifts collapse to opacity-only at 80ms.
- Modal open uses opacity fade only.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | WCAG Level |
|---|---|---|
| `#ffffff` on `#0c0c0c` | 19.5 | AAA all sizes |
| `#a3a3a3` on `#0c0c0c` | 7.4 | AAA body |
| `#737373` on `#0c0c0c` | 4.6 | AA body, AAA large |
| `#0c0c0c` on `#7fee64` | 14.2 | AAA all sizes — the entire point |
| `#ffffff` on `#7fee64` | 1.5 | FAIL — never use this combo |
| `#7fee64` on `#0c0c0c` | 13.5 | AAA all sizes — chip text on canvas |

**The contrast move is the design.** Black text on lime is mandatory; white text on lime fails contrast catastrophically (1.5:1) and would never reach AA.

### Focus Indicators

- All interactive elements: `2px solid #7fee64` ring with 2px offset.
- Primary lime CTA uses a `2px solid #ffffff` ring instead — lime-on-lime fails as a focus indicator.
- Inputs: border swap to `#7fee64` plus `0 0 0 2px rgba(127, 238, 100, 0.2)` ring.
- Focus-visible only — mouse clicks don't show ring; keyboard navigation does.

### ARIA Pattern Recommendations

- Navigation: `<nav role="navigation" aria-label="Main">`
- Status chips: `<span role="status" aria-live="polite">RUNNING</span>` for build-state changes.
- Code blocks: copy buttons use `aria-label="Copy <language> snippet to clipboard"` with success announcement via live region.
- Command palette (cmd+k): `role="combobox"` with `aria-expanded`, `aria-controls`, `aria-activedescendant`.
- Modal dialogs: `role="dialog"`, `aria-modal="true"`, focus trap on open, return focus on close.

### Keyboard Navigation

Tab order: skip link → logo → main nav → utility nav → primary CTA → main content → feature cards → footer. Command palette opens on `cmd+k` or `ctrl+k` and traps focus within. Skip-link to `#main` always present.

### Screen Reader Hints

- Wordmark `<a aria-label="Modal home">modal</a>` — lowercase rendering doesn't affect SR pronunciation.
- Decorative lime glow uses `aria-hidden="true"`.
- Status chips expose state via both visible text and `aria-label` — `<span aria-label="Status: running">RUNNING</span>`.
- CLI prompts (`$`) are decorative and `aria-hidden`; only the command itself is announced.

### Reduced Motion

Respected via `@media (prefers-reduced-motion: reduce)`. CLI cursor blink halts, status pill pulse animations disable, lift transitions become opacity-only.

## 10. Responsive Behavior

### Breakpoints

| Name | Min Width | Use |
|---|---|---|
| Mobile | 0–639px | Single-column, 16px gutters |
| Tablet | 640–767px | 2-column cards, 20px gutters |
| Laptop | 768–1023px | 3-column cards, full nav |
| Desktop | 1024–1279px | 1280px container, full grid |
| Wide | 1280–1535px | 1280px container, more padding |
| 4K | 1536+ | 1280px container caps |

### Touch Targets

Minimum 44x44px. Buttons render at `10px 18px` padding around 14px text → ~36px tall — bumped to 44px on mobile via increased vertical padding (`14px 22px`).

### Collapsing Strategy

- **Hero**: 96px → 56px on mobile; CLI demo block stacks below copy at < 1024px.
- **Asymmetric `1.4fr / 1fr` splits**: collapse to 1-col at < 1024px, code block first.
- **Feature cards**: 3-col → 1-col below 768px, 2-col at 640–767px.
- **Code blocks**: full-width at all sizes; horizontal scroll for long lines, mono `12px` on mobile from `14px` desktop.
- **Nav**: hamburger menu below 768px; CTA buttons stack vertically.
- **Benchmark figures**: 4-col → 2-col at 640px → 1-col at < 480px.

### Image Behavior

Hero illustrations use `srcset` + `<picture>` with `media` queries. The lime glow halo scales proportionally to viewport.

### Container Queries

Used inside the docs sidebar for nav-list density: when sidebar narrows below 220px, list items collapse padding from `8px 12px` to `4px 8px` and labels truncate via `text-overflow: ellipsis`.

## 11. Content & Voice

### Tone

Brutalist developer-tool. Sentences are short, often verb-first. Adjectives are scarce; numbers are plentiful. The voice assumes the reader is a senior infra engineer who values latency figures over feature copy. Never apologetic, never speculative. Modal speaks the way `man` pages speak — concise, declarative, technical.

### Microcopy Patterns

**Button verbs (in order of confidence)**:

- **Primary**: "Sign up", "Start building", "Get started", "Deploy"
- **Secondary**: "Read docs", "View pricing", "See benchmarks"
- **Tertiary (mono command)**: "$ modal run", "$ modal deploy"

**Error message recipe**: `<verb> failed.` followed by exit-code or reason in mono. Example: "Build failed. Exit code 1. [View logs →]". Errors render with red `#f87171` label chip.

**Success confirmation**: terminal-style. "Deployed in 3.2s.", "Cache warm.", "12 GPUs running."

**Latency figures**: tabular numerals, Söhne weight 500, paired with mono unit label. Example: "**1.2s** ms — cold start". The figure is large display; the unit is uppercase Modal Mono 11px.

### Empty States

Empty states focus on next action, not explanation. "No deployments yet — `$ modal deploy` to get started." Not "You have no deployments. To create your first deployment, click the button below."

### CTA Verb Conventions

Modal's verbs are infrastructure verbs: **Sign up, Start, Deploy, Run, Build, Scale, Cache, Connect**. Never "Register", "Create account", "Subscribe to our newsletter". The brand assumes the reader is ready to write code, not fill in a form.

## 12. Dark Mode & Theming

Modal is **dark-only by design**. The near-black `#0c0c0c` canvas and lime accent are the entire brand identity — a light variant would dilute the terminal-grade signal and would force the lime to read against a non-contrasting backdrop. There is no light theme.

Docs surfaces stay dark; the landing page stays dark; the dashboard stays dark. The only theming is the user-toggled syntax-highlighting palette inside code blocks — Modal supports a "high-contrast" palette that uses `#ffffff` for keywords instead of lime, for users with green-spectrum vision deficiencies.

## 13. Lineage & Influences

Modal's design language is a **brutalist refinement of the developer-terminal aesthetic**. The lineage is explicit: phosphor green on black is the original developer-tool register (terminals from VT100 onward, BBS interfaces, hacker-flavored marketing). Modal takes that lineage and applies typography-grade discipline: a custom mono (Modal Mono), a serious display sans (Söhne at weight 600), tonal-black elevation tiers, and a lime so saturated it reads as *engineering* rather than *retro*.

The closest contemporary cousins are **Linear** (mono-uppercase labels, dark canvas, tonal-tier elevation) and **Vercel** (pure-black canvas, single-accent restraint). Modal pushes brighter and warmer than both — Linear's accent is cool purple, Vercel's is cool blue, Modal's is electric lime. The brightness is the differentiator: in a category of muted dev-tool branding, Modal owns the loudest signal.

What it rejects: gradients (Stripe-flavored chromatic surfaces), light-mode default (Remix), pastel accents (Notion), full brutalism (zero-radius, monospace-everywhere — Modal preserves Söhne for display).

**Named influences**:

- **Söhne (Klim Type Foundry)** — display sans at weight 600 with tight tracking
- **Berkeley Mono / Modal Mono lineage** — custom commercial mono as typography signature
- **Vercel** — pure-black canvas with single-accent CTAs; Modal pushes brighter
- **Linear** — mono-uppercase labels for navigation and section markers
- **Hacker terminal aesthetic** — phosphor green on black; Modal is the typography-grade refinement of that lineage

## 14. Do's and Don'ts

### Do

- **Do** commit to lime `#7fee64` as the only accent. No secondary brand colors, no gradients, no decorative chromatic surfaces.
- **Do** use **black text** (`#0c0c0c`) on the lime CTA — never white. Contrast is the design.
- **Do** use Modal Mono (or licensed Berkeley Mono) for every label, chip, status pill, code block, and CLI prefix.
- **Do** crank Söhne to weight 600 for display copy — that's the engineering-hard register.
- **Do** uppercase every mono label and track to `+0.06–0.10em`. Sans labels stay sentence-case.
- **Do** use tabular numerals (`tnum`) for benchmark figures and slashed zero (`zero`) in mono.
- **Do** render code blocks full-bleed inside cards with line numbers and Modal Mono syntax highlighting.
- **Do** use the asymmetric `1.4fr / 1fr` split where the code block deserves more visual weight than the prose.
- **Do** keep elevation tiers tight (4–6% lightness apart) and rely on tonal layering, not shadows.
- **Do** preserve the 6px button radius — it's the brand's geometry signature.

### Don't

- **Don't** soften the canvas to navy or pure black. `#0c0c0c` is calibrated; pure `#000` reads as Vercel-clone, navy reads as enterprise-soft.
- **Don't** add gradients to the lime. The flat fill is the brand. Gradient lime reads as Stripe, not Modal.
- **Don't** drop labels to title case or sans-case. Uppercase + `+0.08em` tracking + Modal Mono is the system rule.
- **Don't** use white text on the lime CTA. White-on-lime fails contrast (1.5:1). Always use near-black `#0c0c0c`.
- **Don't** introduce a secondary brand color. Lime is the entire chromatic identity. Use semantic tokens (warning amber, danger red) for state, but never a "second brand".
- **Don't** soften corners past 12px. Buttons stay 6px, cards 12px. Pills are the only exception (9999).
- **Don't** use Söhne at weight 300 or 400 for display. That's a Stripe-editorial move; Modal lives at 600.
- **Don't** offer a light-mode variant. The brand is dark-only.
- **Don't** add SaaS-flavored verbs ("Register", "Subscribe", "Create account"). Use infrastructure verbs ("Sign up", "Deploy", "Run").
- **Don't** animate the lime fill. The CTA hover is a flat color shift; no scale, no lift, no pulse.
- **Don't** add drop shadows to cards. Depth is tonal layering only; shadows render at level 3+ (popovers, dialogs, modals).

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #0c0c0c
text: #ffffff
text-soft: #a3a3a3
brand: #7fee64
on-brand: #0c0c0c
brand-tint: rgba(127, 238, 100, 0.12)
border: rgba(255, 255, 255, 0.1)
elev-1: #141414
elev-2: #1c1c1c
focus: #7fee64
syntax-string: #fbbf24
```

### Example Component Prompts

1. **"Create a hero section in Modal's design language. Near-black `#0c0c0c` canvas, Söhne 72px display headline at weight 600 with `-0.03em` tracking, 18px body subhead in `#a3a3a3`, lime CTA `#7fee64` with black text and 6px radius, optional CLI demo block right-aligned showing `$ modal deploy`."**

2. **"Design a feature card for Modal. Background `#141414`, 10% white hairline border, 12px radius, 24px padding. Header in Söhne 22px weight 500, body in 16px regular `#a3a3a3`. Hover lifts border to 20% white. Optional Modal Mono uppercase label chip at top in lime tint."**

3. **"Build a full-bleed code block in Modal's style. Background `#141414`, Modal Mono 14px, line numbers in `#525252`, syntax tokens with lime keywords, amber strings, soft-gray comments. Top-right copy button revealed on card hover, label `COPY` in Modal Mono 12px. CLI prompt `$` in soft lime, output lines in full lime."**

4. **"Render a Modal nav bar. 64px height sticky, backdrop-blur on scroll, 10% white hairline bottom border. Lowercase 'modal' wordmark in Modal Mono 18px weight 500. Nav links at 14px weight 500 `#a3a3a3` → `#ffffff` on hover. CTA cluster: ghost secondary + lime primary, right-aligned."**

5. **"Create a status badge chip for Modal. Pill shape, lime tinted background `rgba(127, 238, 100, 0.12)`, Modal Mono 11px weight 500 uppercase `#7fee64` text, `0.08em` tracking, lime hairline border. Variants for RUNNING (lime), QUEUED (amber), FAILED (red), STOPPED (neutral gray)."**

6. **"Build a benchmark figure block. Söhne 56px weight 500 `#ffffff` for the latency number with `tnum` tabular numerals enabled. Below: Modal Mono 11px uppercase `#a3a3a3` for the unit label `MS — COLD START`. Repeat 4x in a horizontal row."**

### Iteration Guide

1. **If the page reads too "Vercel-clone"**: lean harder on Modal Mono. More mono labels, more uppercase chips, more CLI command pills inside body copy. The mono is what differentiates Modal from Vercel.

2. **If the lime feels overbearing**: pull it back to CTAs and status chips only. Keep the lime tint backgrounds but reduce flat-lime fills. The brand is *electric*, but the page doesn't have to be saturated lime.

3. **If contrast fails on the lime**: always use `#0c0c0c` black text, never white. White-on-lime is a categorical fail. Verify in dev tools.

4. **If the page feels sterile**: add a subtle lime glow `0 0 60px rgba(127, 238, 100, 0.4)` behind the hero CTA. Used sparingly, the glow gives atmospheric depth without breaking the flat-fill brand.

5. **If the canvas reads "too dark"**: confirm you're at `#0c0c0c`, not pure `#000`. The 0c warmth gives the lime room to read. Pure zero would compress the contrast.

6. **If Modal Mono isn't available**: substitute Berkeley Mono first, then JetBrains Mono. Don't substitute SF Mono or Menlo as primary — they read too generic.

7. **If light mode is requested**: refuse. Modal is dark-only by design. Offer a syntax-highlighting palette toggle inside code blocks if the request is about reading-mode preference.

8. **If a gradient is requested**: refuse. The flat lime fill is the brand. Gradient lime reads as Stripe-flavored marketing; Modal lives in flat-saturation territory.
