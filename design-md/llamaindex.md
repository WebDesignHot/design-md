---
name: LlamaIndex
tagline: White canvas with Inter and a signature `#1b9aff` blue — RAG infrastructure dressed as a clean technical reference card.
updated_at: 2026-05-04T20:53:02+12:00
published_at: 2026-05-04T20:53:02+12:00
author: webdesignhot
source_url: https://www.llamaindex.ai
spec: design.md/v1.5
quality: curated
featured: false
categories: [ai, dev-tools]
tags: [light, blue, sans, mono, technical, data-stack]
preview_swatch: ['#ffffff', '#1b9aff', '#0e1116']
related: [anthropic, huggingface, modal]
description: 'LlamaIndex''s marketing surface reads like a clean technical-reference card — a pure white canvas, Inter at weight 600 carrying every display headline, and a signature `#1b9aff` blue that handles primary CTAs, link state, and the data-pipeline arrow chrome that LlamaIndex turns into its primary marketing artifact. The brand inhabits the RAG-data-stack space: code blocks (Python, TypeScript) embed inside softly-elevated white cards, llama-themed accent illustrations appear sparingly, and the page rhythm prioritizes documentation-grade clarity over consumer-marketing flourish. Where most AI-infra brands chase dark canvases, LlamaIndex commits to white as the defining surface — clean, calm, and confident.'

colors:
  bg: '#ffffff'                  # canvas — pure white
  bg-soft: '#fafbfc'              # slightly tinted band for section alternation
  bg-deep: '#0e1116'              # dark footer / dark CTA band
  surface-soft: '#f6f8fa'         # softer section tint
  surface: '#ffffff'              # default content card on white canvas
  surface-elevated: '#ffffff'     # featured card with stronger shadow
  surface-blue: '#eaf5ff'          # tinted info surface
  surface-dark: '#0e1116'         # dark CTA band / footer
  text: '#0e1116'                 # primary headlines + strong type
  text-body: '#3d4148'            # default running-text
  text-strong: '#1c2128'          # emphasised paragraphs
  text-muted: '#656d76'           # captions, breadcrumbs
  text-faint: '#8b949e'           # tertiary fine-print
  text-on-dark: '#ffffff'         # text on dark CTA band
  text-on-dark-muted: '#c9d1d9'   # muted text on dark band
  brand: '#1b9aff'                # signature LlamaIndex blue
  brand-hover: '#0c87e6'          # press / hover-darker variant
  brand-active: '#0066c2'         # deep blue for active state
  brand-soft: '#eaf5ff'            # tinted blue surface for badges
  brand-deep: '#0a4d80'            # deep blue for dark backgrounds
  on-brand: '#ffffff'             # white text on blue CTAs
  on-light: '#0e1116'             # primary text on white surfaces
  link: '#1b9aff'                 # inline links match brand
  link-hover: '#0c87e6'
  link-visited: '#5b6cdb'
  border: '#d0d7de'               # 1px hairline on cards
  border-strong: '#afb8c1'        # divider on inputs
  border-soft: '#eaeef2'          # subtle separator
  border-blue: '#1b9aff'          # focus border
  shadow-color: 'rgba(31, 35, 40, 0.04)'
  shadow-color-md: 'rgba(31, 35, 40, 0.08)'
  shadow-color-lg: 'rgba(31, 35, 40, 0.12)'
  accent-llama: '#f59e0b'         # rare llama-themed orange-amber accent
  accent-emerald: '#1f883d'       # success
  accent-rose: '#cf222e'          # error
  accent-violet: '#8250df'        # rare workflow-engine accent
  success: '#1f883d'
  warning: '#bf8700'
  danger: '#cf222e'
  info: '#1b9aff'
  code-keyword: '#cf222e'
  code-string: '#0a3069'
  code-comment: '#6e7781'
  code-symbol: '#953800'

typography:
  display:
    family: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: "'cv11', 'ss01'"
  body:
    family: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'JetBrains Mono, ui-monospace, SF Mono, Menlo, Monaco, Consolas, monospace'
    weights: [400, 500]
  scale:
    display-xl:        { size: 64, weight: 700, lineHeight: 1.05, tracking: '-2px',    family: display, opentype: "'ss01'" }
    display-lg:        { size: 52, weight: 700, lineHeight: 1.10, tracking: '-1.5px',  family: display }
    display-md:        { size: 40, weight: 600, lineHeight: 1.15, tracking: '-1px',    family: display }
    display-sm:        { size: 32, weight: 600, lineHeight: 1.20, tracking: '-0.6px',  family: display }
    title-lg:          { size: 24, weight: 600, lineHeight: 1.30, tracking: '-0.2px',  family: display }
    title-md:          { size: 20, weight: 600, lineHeight: 1.35, tracking: 0,         family: body }
    title-sm:          { size: 16, weight: 600, lineHeight: 1.40, tracking: 0,         family: body }
    body-lg:           { size: 18, weight: 400, lineHeight: 1.60, tracking: 0,         family: body }
    body-md:           { size: 16, weight: 400, lineHeight: 1.60, tracking: 0,         family: body }
    body-sm:           { size: 14, weight: 400, lineHeight: 1.55, tracking: 0,         family: body }
    caption:           { size: 13, weight: 500, lineHeight: 1.40, tracking: 0,         family: body }
    caption-uppercase: { size: 11, weight: 600, lineHeight: 1.40, tracking: '1.5px',   family: body, transform: uppercase }
    code-md:           { size: 14, weight: 400, lineHeight: 1.60, tracking: 0,         family: mono }
    code-sm:           { size: 12, weight: 400, lineHeight: 1.50, tracking: 0,         family: mono }
    button:            { size: 14, weight: 600, lineHeight: 1.0,  tracking: 0,         family: body }
    nav-link:          { size: 14, weight: 500, lineHeight: 1.40, tracking: 0,         family: body }

radius:
  micro: 2
  xs: 4
  sm: 6
  md: 8
  lg: 12
  xl: 16
  xxl: 20
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
  section: 96
  scale: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]

layout:
  page-width: 1200
  prose-width: 720
  header-height: 64

components:
  button-primary:
    backgroundColor: brand
    textColor: on-brand
    rounded: md
    padding: '12px 20px'
    height: 40
    use: 'every primary CTA — Get started, Talk to sales'
  button-secondary:
    backgroundColor: surface
    textColor: text
    rounded: md
    padding: '12px 20px'
    height: 40
    border: '1px solid #d0d7de'
    use: 'paired secondary action next to brand CTA'
  button-ghost:
    backgroundColor: transparent
    textColor: text
    rounded: md
    padding: '10px 16px'
  button-text-link:
    backgroundColor: transparent
    textColor: link
  button-dark:
    backgroundColor: bg-deep
    textColor: text-on-dark
    rounded: md
    padding: '12px 20px'
    use: 'tertiary CTA on white surface — quiet authority'
  card-feature:
    backgroundColor: surface
    textColor: text
    rounded: lg
    padding: 32
    border: '1px solid #d0d7de'
    use: 'standard feature card on white canvas'
  card-product:
    backgroundColor: surface-soft
    textColor: text
    rounded: lg
    padding: 24
    use: 'shows LlamaCloud / LlamaParse product chrome'
  card-code-window:
    backgroundColor: surface-dark
    textColor: text-on-dark
    rounded: lg
    padding: 24
    use: 'embeds Python / TS snippets — dark card on light canvas'
  card-pricing-tier:
    backgroundColor: surface
    rounded: lg
    padding: 32
    border: '1px solid #d0d7de'
  card-pricing-tier-featured:
    backgroundColor: surface
    rounded: lg
    padding: 32
    border: '2px solid #1b9aff'
    use: 'featured tier marked by 2px blue border'
  badge-pill:
    backgroundColor: surface-soft
    textColor: text
    rounded: pill
    padding: '4px 12px'
  badge-blue:
    backgroundColor: brand-soft
    textColor: brand-active
    rounded: pill
    padding: '4px 12px'
    transform: uppercase
  text-input:
    backgroundColor: surface
    textColor: text
    rounded: md
    padding: '10px 14px'
    height: 40
    border: '1px solid #d0d7de'
  cta-band-dark:
    backgroundColor: surface-dark
    textColor: text-on-dark
    rounded: lg
    padding: 64
    use: 'pre-footer CTA — dark band on light canvas for dramatic contrast'
  top-nav:
    backgroundColor: bg
    textColor: text
    height: 64
    border: '1px solid #eaeef2'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 120
  duration-standard: 200
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce — opacity-only transitions'

breakpoints:
  mobile: 640
  tablet: 768
  desktop: 1024
  wide: 1440

shadows:
  ambient: 'rgba(31, 35, 40, 0.04) 0 1px 2px'
  standard: 'rgba(31, 35, 40, 0.08) 0 4px 12px'
  elevated: 'rgba(31, 35, 40, 0.12) 0 12px 32px -8px'
  deep: 'rgba(31, 35, 40, 0.16) 0 24px 48px -12px'
  ring: '0 0 0 3px rgba(27, 154, 255, 0.30)'

accessibility:
  contrast-text-on-bg: 16.6              # AAA — #0e1116 on #ffffff
  contrast-text-on-brand: 3.4            # AA at large only — #ffffff on #1b9aff (use ≥18px or ≥14px bold)
  contrast-body-on-bg: 9.1               # AAA — #3d4148 on #ffffff
  contrast-muted-on-bg: 5.0              # AA — #656d76 on #ffffff
  focus-ring: '3px rgba(27, 154, 255, 0.30) ring with 1px solid #1b9aff core'
  reduced-motion-honored: true

dark-mode: 'optional — LlamaIndex marketing is light-default; docs site offers a dark-theme toggle that mirrors GitHub-dark (`#0d1117` canvas, `#c9d1d9` text, same `#1b9aff` brand)'

lineage:
  summary: |
    LlamaIndex's marketing surface descends from the GitHub-light
    aesthetic — pure white canvas, system-grayscale type, hairline
    `#d0d7de` borders, and Inter at weight 600 carrying display
    headlines. The signature `#1b9aff` blue is calibrated to read
    confident-but-friendly: deeper than Twitter blue, lighter than
    Stripe purple, sitting squarely in the "developer-tool primary"
    register. JetBrains Mono on every code surface; code-window cards
    use a dark `#0e1116` background even on the light canvas — a clear
    "this is code" signal that mirrors GitHub's dark code blocks. The
    page rhythm alternates between white feature card grids and
    softly-tinted `#fafbfc` band sections; the pre-footer CTA flips
    the page entirely to dark `#0e1116` for dramatic emphasis. Where
    LangChain commits to dark canvas as the brand surface, LlamaIndex
    commits to white — and the dark CTA band becomes the contrast
    moment.
  influences:
    - name: GitHub
      role: Light-mode canvas with hairline borders, system-grayscale type, and the dark-code-on-light-page pattern.
      url: https://github.com
    - name: Vercel
      role: Single-blue accent discipline and Inter-with-negative-tracking display headlines.
      url: https://vercel.com
    - name: Stripe
      role: Trust-via-restraint chromatic strategy and confident-single-color action discipline.
      url: https://stripe.com
    - name: JetBrains
      role: JetBrains Mono as the credibility-via-IDE-typeface signal across every code block.
      url: https://www.jetbrains.com/lp/mono/
---

## 1. Visual Theme & Atmosphere

LlamaIndex's marketing surface reads like a clean technical-reference card — a pure white `#ffffff` canvas carrying confident dark sans-serif type, with one signature blue (`#1b9aff`) that handles every primary CTA, every link, every focus ring. The brand commits to white as the defining surface in a category dominated by dark canvases (LangChain, Anthropic, Modal). The white isn't soft or warm; it's a clinical, documentation-grade white that signals "this is infrastructure" rather than "this is a product to play with."

Where most AI-infra brands chase dark gradients and glow effects, LlamaIndex stays austerely flat. Feature cards are white surfaces with 1px `#d0d7de` hairline borders — the GitHub-light aesthetic translated to RAG-infra marketing. Code blocks invert: dark `#0e1116` background on the light page, white code text in JetBrains Mono. This dark-code-on-light-canvas pattern is borrowed directly from GitHub and reinforces the message: "this surface is for reading prose; the dark surface is where the code lives."

Type voice runs Inter at weight 600 for display headlines (700 only at the largest hero size), with negative tracking (`-0.6px` to `-2px`). The negative tracking gives LlamaIndex the precise feel without making the system feel cold. Body type runs Inter at 400 with 1.60 line-height — slightly taller than typical for a tech site, signaling "this is documentation, read carefully."

The page rhythm alternates between white feature card grids (bordered, slightly elevated) and softly-tinted `#fafbfc` band sections. The pre-footer CTA flips dramatically to dark `#0e1116` — a single moment of high contrast that bookends the otherwise-light page. Llama-themed accent illustrations appear sparingly: a small llama icon next to the wordmark, occasional amber `#f59e0b` accents on illustrations, but never a full-bleed llama hero illustration. The brand keeps its mascot quiet.

**Key Characteristics:**
- Pure white `#ffffff` canvas with dark slate-graphite type. Marketing is light-mode by default.
- Signature `#1b9aff` blue for primary CTAs, links, focus rings, and pipeline-arrow chrome.
- Inter at weight 600 (display) with negative tracking on every headline.
- JetBrains Mono on every code surface; code-window cards are dark `#0e1116` on light canvas (GitHub-style).
- 1px `#d0d7de` hairline borders on every feature card — the GitHub-light idiom.
- Llama mascot stays quiet — small icon adjacent to wordmark, no full-bleed mascot illustrations.
- Pre-footer CTA flips the page to dark `#0e1116` for dramatic single-moment contrast.
- 8px radius on CTAs, 12px on cards, 9999px reserved for badges.
- 96px section rhythm; 32px feature card padding; 24px code-window card padding.
- Single brand color discipline — blue + grayscale, llama-amber only as rare illustrative accent.

## 2. Color Palette & Roles

### Primary
- **Bg / Canvas** (`#ffffff`): Pure white — runs every marketing page top to bottom (until the dark CTA band).
- **Text** (`#0e1116`): GitHub-graphite — all headlines and primary type on white canvas.
- **Brand / Primary CTA** (`#1b9aff`): The LlamaIndex blue — every primary CTA, every link, every brand-critical accent.

### Brand & Dark
- **Brand** (`#1b9aff`): Reserved for primary CTAs, link state, focus rings, featured-tier border.
- **Brand Hover** (`#0c87e6`): Press / hover-darker variant.
- **Brand Active** (`#0066c2`): Deep blue for pressed/active state and badge text on `brand-soft` surface.
- **Brand Deep** (`#0a4d80`): Deep blue used for type on dark CTA bands when blue contrast is needed.
- **Bg Deep** (`#0e1116`): GitHub-graphite — dark footer band, dark CTA band, code-window background.

### Accent
LlamaIndex runs a deliberately constrained accent system. Decorative accents are reserved for illustration moments and product sub-brands.
- **Accent Llama** (`#f59e0b`): Rare llama-themed amber-orange — used in mascot illustration, occasional illustrative highlights inside data-pipeline diagrams.
- **Accent Violet** (`#8250df`): Rare LlamaIndex Workflows accent — used inside product UI mockups for workflow-engine state indicators.
- **Accent Emerald** (`#1f883d`): Inside product UI for "passed" indicators; in marketing only as success toast color.

### Interactive
- **Link** (`#1b9aff`): Inline body links match brand exactly. Underlined.
- **Link Hover** (`#0c87e6`): Hover darkens link 1 step.
- **Link Visited** (`#5b6cdb`): Visited link state — slightly violet-shifted.
- **Selected** (`rgba(27, 154, 255, 0.15)`): Selected text background — blue tint.
- **Disabled** (`#8b949e`): Disabled labels and tertiary text.

### Neutral Scale
- **Text** (`#0e1116`): Headlines, primary type — GitHub-graphite.
- **Text Strong** (`#1c2128`): Emphasised paragraphs.
- **Text Body** (`#3d4148`): Default running-text — softened from pure black for editorial comfort.
- **Text Muted** (`#656d76`): Captions, breadcrumbs.
- **Text Faint** (`#8b949e`): Tertiary fine-print.
- **Text on Dark** (`#ffffff`): Headlines on dark CTA band.
- **Text on Dark Muted** (`#c9d1d9`): Body text on dark CTA band.

### Surface & Borders
- **Surface Soft** (`#f6f8fa`): Section dividers, alternating band tints.
- **Bg Soft** (`#fafbfc`): Slightly tinted band for editorial section alternation.
- **Surface** (`#ffffff`): Default content card on white canvas.
- **Surface Blue** (`#eaf5ff`): Tinted info surface for note callouts.
- **Surface Dark** (`#0e1116`): Code-window background, dark CTA band, footer.
- **Border** (`#d0d7de`): 1px hairline on cards — the GitHub-light divider.
- **Border Strong** (`#afb8c1`): Divider on input underlines, dropdown rows.
- **Border Soft** (`#eaeef2`): Subtle separator inside dense lists.
- **Border Blue** (`#1b9aff`): Focus border on inputs and 2px featured-tier border.

### Shadow Colors
LlamaIndex uses a soft, neutral shadow system — graphite-tinted at low alpha rather than blue-tinted. The system feels "softly elevated" rather than "floating."
- **Shadow Color** (`rgba(31, 35, 40, 0.04)`): Ambient shadow for subtle elevation.
- **Shadow Color Md** (`rgba(31, 35, 40, 0.08)`): Standard card shadow.
- **Shadow Color Lg** (`rgba(31, 35, 40, 0.12)`): Hover-state lift, modal entrance.

### Semantic
- **Success** (`#1f883d`): Confirmation toasts, "passed" indicators.
- **Warning** (`#bf8700`): Caution states.
- **Danger** (`#cf222e`): Destructive actions, validation errors.
- **Info** (`#1b9aff`): Informational notices.

## 3. Typography Rules

### Font Family
- **Primary**: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`. Inter handles every text role.
- **Mono**: `JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace`. Code blocks, terminal output, Python/TypeScript snippets.
- **OpenType features**: `'cv11'` for the alternative single-storey lowercase 'a', `'ss01'` for the disambiguated I/l. Toggled at display sizes.
- **No serif**: Deliberately. The single-family approach is the documentation discipline.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display-xl | Inter | 64 | 700 | 1.05 | -2px | ss01 | Homepage h1 ("Build production AI agents over your data") |
| display-lg | Inter | 52 | 700 | 1.10 | -1.5px | — | Section heads on top of major bands |
| display-md | Inter | 40 | 600 | 1.15 | -1px | — | Sub-section heads, CTA-band headlines |
| display-sm | Inter | 32 | 600 | 1.20 | -0.6px | — | Card titles, pricing tier prices |
| title-lg | Inter | 24 | 600 | 1.30 | -0.2px | — | Pricing plan names, larger feature titles |
| title-md | Inter | 20 | 600 | 1.35 | 0 | — | Card titles |
| title-sm | Inter | 16 | 600 | 1.40 | 0 | — | Small card titles, list labels |
| body-lg | Inter | 18 | 400 | 1.60 | 0 | — | Hero subhead, intro paragraphs |
| body-md | Inter | 16 | 400 | 1.60 | 0 | — | Default running-text |
| body-sm | Inter | 14 | 400 | 1.55 | 0 | — | Footer body, fine-print |
| caption | Inter | 13 | 500 | 1.40 | 0 | — | Badge labels, captions |
| caption-uppercase | Inter | 11 | 600 | 1.40 | 1.5px | — | Section labels, eyebrows |
| code-md | JetBrains Mono | 14 | 400 | 1.60 | 0 | — | Code blocks (in dark code-window cards) |
| code-sm | JetBrains Mono | 12 | 400 | 1.50 | 0 | — | Inline code in body paragraphs |
| button | Inter | 14 | 600 | 1.00 | 0 | — | Standard button labels |
| nav-link | Inter | 14 | 500 | 1.40 | 0 | — | Top-nav menu items |

### Principles
- **Display weights stay at 600–700.** 700 reserved for the homepage h1; 600 for everything below.
- **Negative tracking is essential** for display sizes. Inter at 600 without negative tracking reads as too consumer-marketing.
- **Body and labels stay at 400 / 500 / 600.** Never bold body text for emphasis — use weight 600.
- **Body line-height stays at 1.60.** Slightly taller than typical for a tech site — signaling "this is documentation."
- **Mono everywhere code appears.** No system-font fallback for code; JetBrains Mono is the credibility signal.
- **Inline code uses code-sm (12px JetBrains Mono).** Inline mono never matches body size — the tighter mono distinguishes "this is a class name" from running prose.
- **Caption-uppercase carries section structure.** Every major band is preceded by an 11px uppercase eyebrow at 1.5px tracking.

## 4. Component Stylings

### Buttons (5 variants)

**`button-primary`** — The signature blue CTA. Background `#1b9aff`, text `#ffffff`, Inter 14px / 600, padding 12px × 20px, height 40px, radius 8px. Hover: `#0c87e6` over 120ms; subtle 2px lift via translateY(-1px) + shadow intensify.

**`button-secondary`** — White-bordered button. Background `#ffffff`, text `#0e1116`, 1px solid `#d0d7de` border, same shape and padding as primary. Hover: background fades to `#f6f8fa`, border darkens to `#afb8c1`.

**`button-ghost`** — Transparent text-with-arrow CTA. No background, text `#0e1116`, `→` glyph after label.

**`button-text-link`** — Pure text link in `#1b9aff` with hover-darken to `#0c87e6`. Used inside body paragraphs.

**`button-dark`** — Dark CTA on white surface. Background `#0e1116`, text `#ffffff`, same padding/radius as primary. Used for "View on GitHub" or "Read whitepaper" — the quiet authority CTA.

### Cards

**`card-feature`** — Standard white feature card. Background `#ffffff`, text `#0e1116`, radius 12px, padding 32px, 1px solid `#d0d7de` border. The default container for every feature description. Hover: shadow intensifies from ambient to standard; border stays.

**`card-product`** — Card showing actual LlamaCloud / LlamaParse product UI. Background `#fafbfc` (slightly tinted), radius 12px, padding 24px, 1px solid `#eaeef2` border. Embedded product chrome (sidebar, breadcrumbs, panel headers).

**`card-code-window`** — Dark card showing a Python or TypeScript code block. Background `#0e1116` (GitHub-dark), code in JetBrains Mono with syntax highlighting (keywords `#cf222e`, strings `#0a3069`, comments `#6e7781`, symbols `#953800` on a light theme inverted to GitHub-dark variants for the dark surface), radius 12px, padding 24px. Top-left "Python" or "TypeScript" tab indicator. Often the hero's right-side artifact.

**`card-data-pipeline`** — Card showing an LLM data-pipeline flow (sources → ingest → index → retrieve → respond). Background `#fafbfc`, nodes drawn as `#ffffff` 8px-radius rectangles with 1px `#d0d7de` borders, connecting arrows are 1.5px `#1b9aff` lines with arrow heads. Radius 12px, padding 32px.

**`card-pricing-tier`** — Standard pricing tier card. Background `#ffffff`, radius 12px, padding 32px, 1px solid `#d0d7de` border.

**`card-pricing-tier-featured`** — Featured tier marked by 2px solid `#1b9aff` border (replacing the standard 1px). Same surface as standard tier — the thicker blue border alone is the featured signal.

### Badges & Pills

**`badge-pill`** — Small light pill label. Background `#f6f8fa`, text `#0e1116`, caption typography, radius 9999, padding 4px × 12px.

**`badge-blue`** — Blue tinted pill for "NEW" or product-name labels. Background `#eaf5ff`, text `#0066c2`, caption-uppercase typography, radius 9999.

### Inputs / Forms

**`text-input`** — White text input. Background `#ffffff`, text `#0e1116`, radius 8px, padding 10px × 14px, height 40px, 1px solid `#d0d7de` border.

**`text-input-focused`** — 3px rgba(27, 154, 255, 0.30) ring with 1px solid `#1b9aff` core. The soft ring + sharp core is the GitHub-light focus pattern.

### Navigation

**`top-nav`** — White nav bar pinned to top, 64px tall, background `#ffffff` with 1px solid `#eaeef2` bottom border. Logo + wordmark left (small llama icon adjacent to "LlamaIndex"), primary horizontal menu (Products [LlamaIndex, LlamaCloud, LlamaParse], Use cases, Customers, Resources, Pricing) center, right-side cluster: "Sign in" + blue `button-primary` ("Get Started").

**`category-tab` / `category-tab-active`** — White tab navigation. Inactive: transparent + muted text. Active: white + blue underline (2px `#1b9aff` bottom border). Padding 8px × 14px.

### Decorative

**`pipeline-arrow`** — Inline arrow chrome between data-pipeline nodes. 1.5px `#1b9aff` stroke, arrow head at terminus. Static; only animates if reduced motion is not set.

**`cta-band-dark`** — Pre-footer "Build with LlamaIndex" CTA band. `#0e1116` surface, 12px radius (or full-bleed depending on layout), 64px padding. Carries h2 in display-md white, body subhead in `#c9d1d9`, primary `#1b9aff` CTA + ghost white text-link with arrow.

**`customer-logo-strip`** — Horizontal monochrome customer-logo strip. Background `#ffffff`, logos in `#656d76`, padding 32px vertical.

**`llama-icon`** — Small (24px) llama mascot icon used adjacent to wordmark and as occasional illustrative accent. Color `#0e1116` on light, `#ffffff` on dark, with rare amber `#f59e0b` highlight on the saddle.

## 5. Layout Principles

### Spacing System
Base unit **4px**. Tokens: `xxs:4 · xs:8 · sm:12 · md:16 · lg:24 · xl:32 · xxl:48 · section:96`. Section padding is 96px between major bands; card internal padding stays at 32px for feature cards, 24px for code-window cards. The system feels documentation-grade with appropriate breathing room.

### Grid & Container
Max content width is 1200px centered (slightly tighter than typical 1280px to feel more editorial). Editorial body uses a 12-column grid; hero often uses a 6/6 split (h1 + subhead left, code-window or data-pipeline diagram right). Feature card grids run 3-up at desktop, 2-up at tablet, 1-up at mobile. Pricing grids run 3-up at desktop.

### Whitespace Philosophy
LlamaIndex uses balanced whitespace appropriate for a developer-tooling brand with documentation lineage. Generous enough to feel calm, tight enough to fit dense technical information per band. Cards and bands breathe more than typical SaaS marketing because the brand wants to feel "spec sheet," not "feature list."

### Section Cadence
Every page follows the same rhythm: white hero band → code-window or data-pipeline diagram → light feature card grid → softly-tinted band with product mockup → customer-logo strip → pricing → light feature card → dark `#0e1116` pre-footer CTA band → dark footer. The dark pre-footer CTA is the single dramatic contrast moment.

## 6. Shapes & Radius Scale

| Tier | Token | Value | Use |
|---|---|---|---|
| Micro | micro | 2px | Reserved — barely used |
| XS | xs | 4px | Badge accents, syntax-highlight chips inside code blocks |
| Standard | sm | 6px | Small inline buttons, tight inputs |
| Comfortable | md | 8px | Standard CTA buttons, text inputs — default for actionables |
| Large | lg | 12px | Content cards, code-window cards, pricing tiers |
| Featured | xl | 16px | Hero shells (rare) |
| Generous | xxl | 20px | Pre-footer CTA band when not full-bleed |
| Pill | pill | 9999px | Badges, avatars, icon-only circular buttons |

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No shadow, no border | Body sections, top nav, hero text |
| 1 — Soft hairline | 1px `#d0d7de` border | Standard feature cards, pricing tiers |
| 2 — Soft shadow | 1px border + ambient shadow | Cards on hover, slightly-elevated info callouts |
| 3 — Standard shadow | 1px border + standard shadow | Featured cards, modal entrance start |
| 4 — Featured | 2px solid `#1b9aff` border | Featured pricing tier — blue border alone is the signal |
| 5 — Modal | Standard shadow + backdrop dim 60% | Dialogs, dropdowns |

### Shadow Philosophy
LlamaIndex uses graphite-tinted shadows at low alpha — `rgba(31, 35, 40, 0.04)` ambient through `rgba(31, 35, 40, 0.16)` deep. The shadows are neutral (not blue-tinted like Stripe, not absent like ClickHouse) — they create the "softly placed on a clean surface" feel of GitHub-light. Shadows intensify on hover; the lift is subtle (translateY(-1px) + shadow up one tier), never theatrical.

## 8. Interaction & Motion

### Easing Curves
- **Standard ease**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for transitions.
- **Emphasized ease**: `cubic-bezier(0.2, 0, 0, 1)` — used on CTA hover and modal entrances.

### Duration Buckets
- **Fast (120ms)**: Color and opacity transitions on hover.
- **Standard (200ms)**: Card hover lifts, dropdown opens, button press feedback.
- **Slow (320ms)**: Modal entrance, page-section reveals on scroll.

### Per-Component Micro-States
- **Button hover**: Blue CTAs darken from `#1b9aff` → `#0c87e6` over 120ms; lift 1px via translateY; shadow intensifies from ambient to standard.
- **Button press**: Lift cancels, button returns to translateY(0).
- **Card hover**: Feature cards lift via translateY(-2px) over 200ms; shadow intensifies one tier; border color stays.
- **Code-window hover**: No state change — code is content, not an action. The "Copy" button inside the card flips state on click.
- **Link hover**: Color darkens from `#1b9aff` → `#0c87e6` over 120ms; underline thickens 1px → 2px.
- **Input focus**: 3px ring expands from 0 → 3px over 120ms with standard ease.
- **Pipeline arrow**: 4s subtle stroke-dashoffset cycle when the data-pipeline diagram is visible — suggests data flow without being loud.

### Page Transitions
LlamaIndex uses standard browser navigation. Section-on-scroll reveals are a 320ms fade-in-up (12px offset) gated by `IntersectionObserver`. No parallax, no scroll-jacking.

### Reduced Motion
`prefers-reduced-motion: reduce` honored: all transforms removed, all transitions reduced to opacity-only at 100ms. Pipeline-arrow stroke animation is paused.

## 9. Accessibility & A11y

### Contrast Pairs
- **Text on bg**: `#0e1116` on `#ffffff` = **16.6** — AAA at every size.
- **Body on bg**: `#3d4148` on `#ffffff` = **9.1** — AAA at every size.
- **Muted on bg**: `#656d76` on `#ffffff` = **5.0** — AA at body sizes; do not use below 14px.
- **On-brand on brand**: `#ffffff` on `#1b9aff` = **3.4** — AA at large text only (≥18px or ≥14px bold). Buttons use 14px / 600 (qualifies as bold-large).
- **Brand-active on brand-soft**: `#0066c2` on `#eaf5ff` = **6.7** — AAA — used for blue badge text.
- **Body on surface-soft**: `#3d4148` on `#f6f8fa` = **8.7** — AAA.

### Focus Indicators
Every focusable element shows a 3px `rgba(27, 154, 255, 0.30)` ring with a 1px solid `#1b9aff` core — the GitHub-light focus pattern. This double-ring is unmistakable on white canvas without reading as theatrical.

### ARIA Patterns
- **Buttons**: Use native `<button>` elements with `aria-label` only when icon-only.
- **Code blocks**: Wrap in `<pre><code>` with `aria-label="Python example"` for screen readers; copy buttons announce via `aria-live="polite"` toast.
- **Navigation**: Top-nav uses `<nav aria-label="Primary">`; mobile drawer uses `aria-expanded`.
- **Data-pipeline diagrams**: Provided as SVG with `<title>` and `<desc>` describing the data flow; each node carries a `role="img" aria-label="..."`.
- **Dialog**: Modal uses `role="dialog"` with `aria-labelledby` referencing the dialog title.

### Keyboard Navigation
Tab order follows visual reading order. Skip-link at top of every page jumps to `<main>`. All interactive elements respond to Enter and Space. Modal traps focus; Escape closes.

### Screen Reader Hints
Llama icon adjacent to wordmark uses `aria-hidden="true"` (decorative). Code blocks announce language. Data-pipeline diagrams provide a textual fallback.

### Reduced Motion Handling
Honored — all transforms removed, transitions reduced to 100ms opacity-only, pipeline-arrow animation paused, card-hover lifts disabled.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Hamburger nav; hero h1 64→36px; code-window stacks below; feature grids 1-up; pricing 1-up |
| Tablet | 640–1024px | Top nav tightens; feature cards 2-up; pricing 2-up; hero h1 52px |
| Desktop | 1024–1440px | Full top-nav; 3-up feature cards; 3-up pricing tiers; hero h1 64px |
| Wide | > 1440px | Same as desktop with more breathing room; max content 1200px |

### Touch Targets
- Primary CTA at minimum 40 × 40px.
- Icon-only circular button at exactly 36 × 36 — slightly under WCAG 44, visually centered with adequate hit area via padding.
- Text input height is 40px.

### Collapsing Strategy
Top nav collapses to hamburger at < 768px. Hero 6/6 grid collapses to single-column on mobile. Feature card grids reduce columns rather than scaling type. Data-pipeline diagrams swap from horizontal to vertical orientation on mobile.

### Image Behavior
Code blocks inside dark code-window cards stay at fixed font-size; horizontal scroll on mobile rather than wrapping. Customer logos retain native widths; row wraps on mobile. Llama mascot icon stays at 24px regardless of viewport.

## 11. Content & Voice

### Tone
**Technical, data-stack-confident, friendly-but-not-playful.** LlamaIndex writes for engineers building production RAG systems. There's no hand-holding, but the tone is warmer than Hashicorp or Stripe — closer to a senior engineer's slack DM than a sterile enterprise spec sheet. Headlines state capabilities ("Build production AI agents over your data"); body copy supports with framework primitives, integration counts, and use-case examples.

### Microcopy Patterns
- **CTA verbs**: "Get started", "Read the docs", "Talk to an expert", "View on GitHub", "Try LlamaCloud". Never "Sign up free" or "Learn more".
- **Section labels**: Uppercase eyebrow (11px / 600 / 1.5px tracking) labels every band — "FRAMEWORK", "PARSING", "CLOUD", "PRICING".
- **Stat numbers**: Followed by qualifier — "1M+ developers", "50k+ apps in production", "300+ integrations".
- **Feature copy**: Always leads with the verb ("Parse complex documents", "Ingest from any source", "Index for retrieval").

### Empty States
LlamaCloud product UI empty states: single line in `text-muted` ("No documents yet — upload one to begin parsing") with a blue link to docs. Friendly without being whimsical.

### Error Messages
**Pattern**: `<icon-x in #cf222e> + "What went wrong" + "What to try next"`. Example: "Document parsing failed — verify the PDF is text-based, not scanned." Never apologetic ("Oops!"), never blaming the user.

### Success Confirmations
Single-line toast in `text` colour over `surface` background with a `success` (#1f883d) accent stripe. Auto-dismiss after 4s. "Index built — 1,243 documents ready for retrieval." not "Yay! 🎉".

## 12. Dark Mode & Theming

LlamaIndex marketing is **light-default**. The marketing site has no dark mode toggle on the marketing surface; the docs site (`docs.llamaindex.ai`) supports a dark theme that mirrors GitHub-dark (`#0d1117` canvas, `#c9d1d9` text, same `#1b9aff` brand).

For the docs-dark theme: `bg: #0d1117`, `bg-soft: #161b22`, `surface: #161b22`, `surface-soft: #21262d`, `border: #30363d`, `text: #c9d1d9`, `text-body: #8b949e`, `brand: #1b9aff` (unchanged), `link: #58a6ff` (lightened for contrast on dark).

Code-window cards retain their `#0e1116` background in both themes — code is always shown on the GitHub-dark surface.

## 13. Lineage & Influences

LlamaIndex's marketing aesthetic descends from **GitHub-light** — pure white canvas, hairline borders, system-grayscale type, and Inter at weight 600 carrying display headlines. The signature `#1b9aff` blue sits just slightly deeper than GitHub's link blue, calibrated to read as "developer-tool primary" rather than "consumer brand."

Where LangChain commits to dark canvas as its marketing surface, LlamaIndex commits to white — and the dark `#0e1116` pre-footer CTA becomes the single high-contrast moment. This light-by-default + dark-CTA-band pattern is borrowed from Vercel's recent work, but LlamaIndex pushes the dark CTA further, giving it a full-bleed presence that bookends the otherwise-clean light page.

The dark-code-on-light-canvas pattern is taken from GitHub directly. The 600-weight Inter with negative tracking tracks the modern dev-tool typographic discipline (Stripe, Vercel, LangChain). The llama mascot stays quiet — appears as a small icon, never as a full-bleed illustration. This restraint distinguishes LlamaIndex from competitors that lean harder into mascot-driven branding.

- **GitHub** — Light-mode canvas with hairline borders, system-grayscale type, dark-code-on-light pattern. https://github.com
- **Vercel** — Single-blue accent discipline; dark-CTA-band-on-light-page pattern. https://vercel.com
- **Stripe** — Inter + negative-tracking display discipline; trust-via-restraint chromatic strategy. https://stripe.com
- **JetBrains** — JetBrains Mono as the credibility-via-IDE-typeface signal. https://www.jetbrains.com/lp/mono/
- **Tailwind CSS** — The Inter + grayscale + single-accent recipe that ships every modern dev marketing site. https://tailwindcss.com

## 14. Do's and Don'ts

### Do
- Anchor every page on the white `#ffffff` canvas. Marketing is light-default.
- Reserve the blue (`#1b9aff`) for primary CTAs, links, focus rings, and pipeline-arrow chrome.
- Use Inter at weight 600 (display-md and below) or 700 (display-xl/lg only) with negative tracking on every display headline.
- Use 1px `#d0d7de` hairline borders on every feature card — the GitHub-light idiom.
- Show actual Python or TypeScript code inside dark `#0e1116` code-window cards. The dark code surface on light canvas is the brand's signature.
- Use data-pipeline diagrams (sources → ingest → index → retrieve) as primary marketing chrome.
- Keep the llama mascot quiet — small icon adjacent to wordmark, no full-bleed illustrations.
- Use the dark `#0e1116` pre-footer CTA band as the single high-contrast moment of the page.
- Use a 2px solid `#1b9aff` border to mark the featured pricing tier.
- Anchor every band with 96px vertical rhythm.

### Don't
- Don't switch the marketing canvas to dark in the middle of the page. Stay light until the pre-footer CTA.
- Don't introduce a second brand color in marketing. LlamaIndex is grayscale + blue; llama-amber is for illustrations only.
- Don't bold display weight beyond 700 or use weight 500 for headlines.
- Don't replace code-window cards with light-on-light code blocks. Code always lives on dark `#0e1116`.
- Don't replace data-pipeline diagrams with abstract illustrations.
- Don't use the llama mascot as a full-bleed hero illustration.
- Don't add prominent drop shadows; use the GitHub-light soft-graphite shadow tier.
- Don't use rounded-pill buttons for primary CTAs. Standard button radius is 8px.
- Don't use consumer-marketing CTA verbs like "Sign up free". Use "Get started", "Read the docs", "Talk to an expert".

## 15. Agent Prompt Guide

### Quick Color Reference
```
Bg / Canvas:     #ffffff (pure white)
Bg Soft:         #fafbfc (alternating band)
Surface Soft:    #f6f8fa (section divider tint)
Border:          #d0d7de (1px hairline)
Text:            #0e1116 (GitHub-graphite)
Text Body:       #3d4148 (running-text)
Text Muted:      #656d76 (captions)
Brand:           #1b9aff (LlamaIndex blue)
Brand Hover:     #0c87e6 (press state)
On-Brand:        #ffffff (white text on blue)
Surface Dark:    #0e1116 (code-window, footer, pre-footer CTA)
```

### Example Component Prompts

1. "Create a LlamaIndex hero band on `#ffffff` canvas, with an Inter 64px / 700 / -2px tracking `#0e1116` headline ('Build production AI agents over your data'), 18px / 400 `#3d4148` subhead, and a blue `#1b9aff` primary CTA ('Get started') paired with a white-bordered secondary CTA ('Read the docs') with 1px solid `#d0d7de` border. Right side: a 12px-radius `#0e1116` dark code-window card containing a JetBrains Mono Python snippet with GitHub-dark syntax highlighting."

2. "Design a data-pipeline card showing sources → ingest → index → retrieve → respond. `#fafbfc` background, 12px radius, 32px padding. Five nodes drawn as `#ffffff` 8px-radius rectangles with 1px `#d0d7de` borders; connecting arrows are 1.5px `#1b9aff` lines with arrow heads."

3. "Build a 3-column feature card grid on `#ffffff`. Each card: `#ffffff` background, 1px solid `#d0d7de` border, 12px radius, 32px padding, `#0e1116` 20px / 600 title, `#3d4148` 16px body, soft graphite ambient shadow. Each card carries a small 11px / 600 / 1.5px uppercase eyebrow ('FRAMEWORK', 'PARSING', 'CLOUD')."

4. "Compose a pricing grid with 3 tiers on `#ffffff`. Two standard `#ffffff` cards (12px radius, 32px padding, 1px solid `#d0d7de` border) and one featured tier marked with a 2px solid `#1b9aff` border replacing the standard 1px — the thicker blue border is the featured signal."

5. "Create a top nav: 64px tall `#ffffff` bar with 1px solid `#eaeef2` bottom border. Small 24px llama icon + 'LlamaIndex' wordmark in Inter 16px / 600 / `#0e1116` left, horizontal menu in Inter 14px / 500 / `#0e1116` center ('Products', 'Use cases', 'Customers', 'Resources', 'Pricing'), 'Sign in' text link and a blue `#1b9aff` `button-primary` ('Get Started') right."

6. "Design a pre-footer dark CTA band: full-bleed `#0e1116` background, 64px padding. Inter 40px / 600 / -1px tracking `#ffffff` headline ('Build with LlamaIndex today'), 16px / 400 `#c9d1d9` subhead, primary `#1b9aff` CTA ('Get started') + ghost `#ffffff` text-link with arrow ('Read the docs')."

### Iteration Guide
1. Start with the white canvas. The brand commits to white in a category dominated by dark canvases — this is the first decision.
2. Pick one place per band where the blue appears. Two blue elements competing for attention is too many.
3. Keep display headlines at Inter 600 (or 700 for the homepage h1) with negative tracking.
4. Code always lives on dark `#0e1116`. Light-on-light code blocks break the brand idiom.
5. When in doubt about emphasis, scale the type up before adding color. Size is the primary lever.
6. Use 1px hairline borders rather than shadows for card definition. Shadow intensifies only on hover.
7. The llama mascot stays small. If you find yourself wanting a hero llama illustration, the brand calls for restraint instead.
8. The pre-footer CTA is the page's one dramatic moment — full-bleed dark, single CTA, single moment of high contrast.
