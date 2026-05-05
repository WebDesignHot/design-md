---
name: RunPod
tagline: Deep slate canvas with Inter and a signature `#673ab7` purple — accessible GPU cloud dressed in friendly developer chrome.
author: webdesignhot
source_url: https://www.runpod.io
spec: design.md/v1.5
quality: curated
featured: false
categories: [ai, dev-tools]
tags: [dark, purple, sans, mono, gpu, accessible]
preview_swatch: ['#0e1a2b', '#673ab7', '#ffffff']
related: [modal, anthropic, huggingface]
description: 'RunPod''s marketing surface reads like an accessible GPU cloud workshop — a deep slate `#0e1a2b` canvas, Inter at weight 600 carrying every display headline, and a signature `#673ab7` Material-purple that handles primary CTAs, link state, and the GPU-pricing-grid chrome that RunPod turns into its primary marketing artifact. Embedded GPU pricing tables (RTX 4090, A100, H100, MI300X with hourly rates) and code blocks (Python, Docker) establish the GPU-cloud credibility; the purple operates as friendly brand voltage in a category dominated by enterprise cyans and corporate blues. Where AWS and GCP lean toward enterprise sterility, RunPod commits to a more approachable purple-on-slate register — accessible, friendly, and unmistakably GPU-pricing-driven.'

colors:
  bg: '#0e1a2b'                  # canvas — deep slate-blue (NOT pure black, NOT pure navy)
  bg-deep: '#080f1a'              # near-black footer band
  surface-soft: '#142133'         # softer band tint
  surface: '#1a293d'              # default content card
  surface-elevated: '#243349'     # nested cards inside dark cards
  surface-purple-soft: '#2d1d4a'  # tinted purple surface for featured rows in pricing tables
  surface-light: '#f8fafc'        # rare light surface for testimonial sections
  text: '#ffffff'                 # primary headlines + strong type
  text-body: '#cbd5e1'            # default running-text on dark
  text-strong: '#f1f5f9'          # emphasised paragraphs
  text-muted: '#94a3b8'           # captions, breadcrumbs
  text-faint: '#64748b'           # tertiary fine-print
  text-on-light: '#0e1a2b'        # text on rare light surface
  brand: '#673ab7'                # signature RunPod purple — Material-deep-purple
  brand-hover: '#5e35b1'          # press / hover-darker variant
  brand-active: '#512da8'         # deep purple for active state
  brand-soft: '#3d2768'            # tinted purple surface (dark-mode tinted)
  brand-soft-light: '#ede7f6'     # rare light-mode purple surface
  brand-deep: '#311b92'            # darkest purple
  brand-light: '#9575cd'           # lighter purple for accents on dark
  on-brand: '#ffffff'             # white text on purple CTAs
  on-dark: '#ffffff'              # primary text on dark surfaces
  link: '#9575cd'                 # inline links — lightened purple for legibility on dark
  link-hover: '#b39ddb'
  border: '#243349'               # 1px hairline on cards
  border-strong: '#334155'        # divider on inputs / dropdown rows
  border-soft: '#1a293d'          # subtle separator
  border-purple: '#673ab7'        # focus border
  shadow-color: 'rgba(8, 15, 26, 0.50)'
  shadow-color-md: 'rgba(8, 15, 26, 0.60)'
  shadow-glow-purple: 'rgba(103, 58, 183, 0.20)'
  accent-emerald: '#22c55e'       # success / "available" GPU
  accent-rose: '#ef4444'          # error / "unavailable" GPU
  accent-amber: '#f59e0b'         # warning / "scarce" GPU
  accent-cyan: '#06b6d4'          # rare info accent
  success: '#22c55e'
  warning: '#f59e0b'
  danger: '#ef4444'
  info: '#06b6d4'
  code-keyword: '#9575cd'
  code-string: '#86efac'
  code-comment: '#64748b'
  code-number: '#fbbf24'
  gpu-tier-low: '#22c55e'         # community/spot tier color stripe
  gpu-tier-mid: '#f59e0b'         # standard tier color stripe
  gpu-tier-high: '#ef4444'        # high-end tier color stripe (H100, MI300X)

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
    display-sm:        { size: 30, weight: 600, lineHeight: 1.20, tracking: '-0.6px',  family: display }
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
    gpu-price:         { size: 24, weight: 700, lineHeight: 1.0,  tracking: '-0.4px',  family: display, notes: 'GPU hourly price in pricing table' }
    gpu-price-unit:    { size: 13, weight: 500, lineHeight: 1.0,  tracking: 0,         family: body, notes: '/hr suffix to gpu-price' }

radius:
  micro: 2
  xs: 4
  sm: 6
  md: 8
  lg: 12
  xl: 16
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
  page-width: 1280
  prose-width: 720
  header-height: 64

components:
  button-primary:
    backgroundColor: brand
    textColor: on-brand
    rounded: md
    padding: '12px 22px'
    height: 40
    use: 'every primary CTA — Get started, Deploy now'
  button-secondary:
    backgroundColor: surface
    textColor: on-dark
    rounded: md
    padding: '12px 22px'
    height: 40
    border: '1px solid #334155'
    use: 'paired secondary action'
  button-ghost:
    backgroundColor: transparent
    textColor: on-dark
    rounded: md
    padding: '10px 16px'
  button-text-link:
    backgroundColor: transparent
    textColor: link
  card-feature:
    backgroundColor: surface
    textColor: on-dark
    rounded: lg
    padding: 32
    border: '1px solid #243349'
    use: 'standard feature card on dark canvas'
  card-gpu-row:
    backgroundColor: surface
    textColor: on-dark
    rounded: 0
    padding: '14px 20px'
    border-bottom: '1px solid #243349'
    use: 'single GPU row in the dense GPU pricing table'
  card-gpu-tile:
    backgroundColor: surface
    textColor: on-dark
    rounded: lg
    padding: 24
    border: '1px solid #243349'
    use: 'larger GPU featured tile (H100, MI300X)'
  card-product:
    backgroundColor: surface-soft
    textColor: on-dark
    rounded: lg
    padding: 24
    use: 'shows RunPod console / pod dashboard UI'
  card-code-window:
    backgroundColor: surface
    textColor: on-dark
    rounded: lg
    padding: 24
    use: 'embeds Python / Docker / curl snippets'
  card-pricing-tier:
    backgroundColor: surface
    rounded: lg
    padding: 32
    border: '1px solid #243349'
  card-pricing-tier-featured:
    backgroundColor: surface-elevated
    rounded: lg
    padding: 32
    border: '2px solid #673ab7'
    use: 'featured tier marked by 2px purple border'
  badge-pill:
    backgroundColor: surface
    textColor: on-dark
    rounded: pill
    padding: '4px 12px'
    border: '1px solid #334155'
  badge-purple:
    backgroundColor: brand-soft
    textColor: brand-light
    rounded: pill
    padding: '4px 12px'
    transform: uppercase
  badge-spot:
    backgroundColor: 'rgba(34, 197, 94, 0.15)'
    textColor: accent-emerald
    rounded: pill
    padding: '4px 12px'
    transform: uppercase
    use: '"SPOT" tag on community-tier GPU rows — green'
  text-input:
    backgroundColor: surface
    textColor: on-dark
    rounded: md
    padding: '10px 14px'
    height: 40
    border: '1px solid #334155'
  cta-band:
    backgroundColor: surface
    textColor: on-dark
    rounded: lg
    padding: 64
    border: '1px solid #243349'
    use: 'pre-footer "Get the GPUs you need" CTA band'
  top-nav:
    backgroundColor: bg
    textColor: on-dark
    height: 64
    border-bottom: '1px solid #243349'
  gpu-pricing-table:
    backgroundColor: surface
    textColor: on-dark
    use: 'dense GPU × VRAM × $/hr pricing table — RunPod''s primary marketing artifact'
    row-padding: '14px 20px'
    header-padding: '12px 20px'

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
  ambient: 'rgba(8, 15, 26, 0.50) 0 1px 2px'
  standard: 'rgba(8, 15, 26, 0.60) 0 4px 12px'
  elevated: 'rgba(8, 15, 26, 0.70) 0 12px 32px -8px'
  deep: 'rgba(8, 15, 26, 0.80) 0 24px 48px -12px'
  glow-purple: 'rgba(103, 58, 183, 0.20) 0 12px 48px -8px'
  ring: '0 0 0 3px rgba(103, 58, 183, 0.40)'

accessibility:
  contrast-text-on-bg: 16.8              # AAA — #ffffff on #0e1a2b
  contrast-text-on-brand: 5.4            # AA — #ffffff on #673ab7
  contrast-body-on-bg: 11.2              # AAA — #cbd5e1 on #0e1a2b
  contrast-muted-on-bg: 5.7              # AA — #94a3b8 on #0e1a2b
  contrast-link-on-bg: 6.8               # AAA — #9575cd on #0e1a2b
  focus-ring: '3px rgba(103, 58, 183, 0.40) ring with 1px solid #673ab7 core'
  reduced-motion-honored: true

dark-mode: 'this IS the marketing dark mode — RunPod ships only a dark theme; the docs site offers a light-theme toggle for documentation only'

lineage:
  summary: |
    RunPod's marketing aesthetic descends from the **accessible GPU
    cloud** lineage that runs through Modal, Replicate, and Vast.ai —
    bright accent color, dense pricing tables, and developer-friendly
    chrome rather than enterprise-stern AWS-style marketing. The
    signature `#673ab7` Material-deep-purple is calibrated to read
    accessible and friendly: it''s the color of a community-driven
    GPU marketplace, not an enterprise hyperscaler. The deep slate
    `#0e1a2b` canvas (NOT pure black, NOT navy) sits between Linear''s
    near-black and traditional navy, giving the brand a softer, more
    inviting dark surface than the pure-black competitors. The dense
    GPU pricing table is the brand''s primary marketing artifact —
    RunPod''s value proposition is transparent GPU pricing across
    every tier (community/spot, on-demand, reserved), and the
    marketing makes that pricing visible. Where AWS and GCP lean
    toward enterprise sterility, RunPod commits to a friendlier,
    more approachable purple-on-slate register — GPU access for
    developers, not for procurement teams.
  influences:
    - name: Modal
      role: ML-cloud accessible-developer-tool aesthetic; pricing-as-marketing-chrome.
      url: https://modal.com
    - name: Vercel
      role: Dark-monolithic marketing rhythm with single-accent discipline.
      url: https://vercel.com
    - name: Hugging Face
      role: Community-friendly accent strategy; approachable tone.
      url: https://huggingface.co
    - name: Material Design
      role: The Material-deep-purple `#673ab7` palette lineage and the friendly accessible-design tradition.
      url: https://m3.material.io
---

## 1. Visual Theme & Atmosphere

RunPod's marketing surface reads like an accessible GPU cloud workshop — a deep slate `#0e1a2b` canvas (NOT pure black, NOT pure navy) carrying confident white type, with one signature purple `#673ab7` (Material-deep-purple) that handles every primary CTA, every link, every focus ring. The slate canvas is RunPod's distinctive surface choice: softer than Linear's near-black, less corporate than enterprise navy, sitting in the "developer-friendly dark" register that signals "this is a tool you can actually use, not a hyperscaler procurement portal."

The defining visual artifact is the **dense GPU pricing table**. RunPod lists every available GPU — RTX 4090, A100 80GB, H100, MI300X, A6000, L40S, etc. — with VRAM, hourly rate, region availability, and tier (community/spot, on-demand, reserved) in a JetBrains Mono-rendered table. The table IS the brand's primary marketing chrome. Where Pinecone shows vector-grids and Fireworks shows benchmark charts, RunPod shows the actual GPU price catalog — because RunPod's value proposition is transparent GPU access, the marketing makes that transparency visible.

Color stripes mark GPU tiers: a thin (2px) left-side stripe color-codes each row by tier — green `#22c55e` for community/spot (cheapest), amber `#f59e0b` for standard on-demand, red `#ef4444` for high-end (H100, MI300X). The stripe is informational, not decorative — it lets users scan the pricing table for their tier preference at a glance.

Type voice runs Inter at weight 600 for display headlines (700 only at the largest hero size), with negative tracking (`-0.6px` to `-2px`). Body type runs Inter at 400 with 1.60 line-height. JetBrains Mono carries every code surface and every GPU price callout — `$0.34/hr` reads more credibly in mono than in Inter.

The page rhythm is monolithic dark canvas top to bottom — RunPod ships only a dark marketing theme. Section padding stays at 96px; card padding at 32px for feature cards and 24px for code-window cards.

**Key Characteristics:**
- Deep slate `#0e1a2b` canvas (NOT pure black, NOT navy) with white type. Marketing is dark-only.
- Signature `#673ab7` Material-deep-purple for primary CTAs, links, focus rings, featured-tier border.
- Inter at weight 600 (display) with negative tracking on every headline.
- JetBrains Mono on every code surface AND every GPU price callout.
- Dense GPU pricing table as the brand's signature visual artifact.
- Tier color stripes (green/amber/red) indicate GPU tier at a glance in the pricing table.
- 1px `#243349` hairline borders on cards.
- 8px radius on CTAs, 12px on cards, 9999px reserved for badges.
- Pre-footer CTA stays on the same dark canvas — no contrast band needed since the page is already dark.
- Lighter purple `#9575cd` for inline body links (legibility on dark canvas).

## 2. Color Palette & Roles

### Primary
- **Bg / Canvas** (`#0e1a2b`): Deep slate-blue, sits between near-black and navy. The brand's distinctive dark surface.
- **Text** (`#ffffff`): Pure white — all headlines and primary type.
- **Brand / Primary CTA** (`#673ab7`): The RunPod Material-deep-purple — every primary CTA, every brand-critical accent.

### Brand & Dark
- **Brand** (`#673ab7`): Reserved for primary CTAs, focus rings, featured-tier border.
- **Brand Hover** (`#5e35b1`): Press / hover-darker variant.
- **Brand Active** (`#512da8`): Deep purple for pressed/active state.
- **Brand Deep** (`#311b92`): Darkest purple.
- **Brand Light** (`#9575cd`): Lighter purple for inline body links and accents on dark canvas.
- **Brand Soft** (`#3d2768`): Tinted purple surface for badges (dark-mode tinted).
- **Bg Deep** (`#080f1a`): Near-black footer band — slightly deeper than canvas.

### Accent
RunPod's accent system is constrained to GPU-tier color stripes and product-status indicators.
- **GPU Tier Low** (`#22c55e`): Green stripe on community/spot GPU rows.
- **GPU Tier Mid** (`#f59e0b`): Amber stripe on standard on-demand rows.
- **GPU Tier High** (`#ef4444`): Red stripe on high-end (H100, MI300X) rows.
- **Accent Emerald** (`#22c55e`): "Available" GPU status indicator.
- **Accent Rose** (`#ef4444`): "Unavailable" status indicator.
- **Accent Amber** (`#f59e0b`): "Scarce" warning.
- **Accent Cyan** (`#06b6d4`): Rare info accent.

### Interactive
- **Link** (`#9575cd`): Inline body links use lightened purple for legibility on dark — 6.8 contrast on bg. Underlined.
- **Link Hover** (`#b39ddb`): Hover lightens further.
- **Selected** (`rgba(103, 58, 183, 0.20)`): Selected text background — purple tint.
- **Disabled** (`#64748b`): Disabled labels and tertiary text.

### Neutral Scale
- **Text** (`#ffffff`): Headlines, primary type.
- **Text Strong** (`#f1f5f9`): Emphasised paragraphs.
- **Text Body** (`#cbd5e1`): Default running-text on dark.
- **Text Muted** (`#94a3b8`): Captions, breadcrumbs, table secondary cells.
- **Text Faint** (`#64748b`): Tertiary fine-print.

### Surface & Borders
- **Surface Soft** (`#142133`): Section dividers, very-soft band tints.
- **Surface** (`#1a293d`): Default content card.
- **Surface Elevated** (`#243349`): Nested cards, hover states.
- **Surface Purple Soft** (`#2d1d4a`): Tinted purple surface for featured rows in pricing tables.
- **Surface Light** (`#f8fafc`): Rare light surface for testimonial sections (used 0–1 times per page).
- **Border** (`#243349`): 1px hairline on cards.
- **Border Strong** (`#334155`): Divider on input underlines, table rows.
- **Border Purple** (`#673ab7`): Focus border on inputs and 2px featured-tier border.

### Shadow Colors
RunPod uses deep slate-tinted shadows at moderate alpha — appropriate for the dark canvas. Shadows are essential here because the dark surface needs lifting cues that color-stepping alone can't provide.
- **Shadow Color** (`rgba(8, 15, 26, 0.50)`): Ambient shadow for subtle elevation.
- **Shadow Color Md** (`rgba(8, 15, 26, 0.60)`): Standard card shadow.
- **Shadow Glow Purple** (`rgba(103, 58, 183, 0.20)`): Rare ambient glow on hero CTA card or featured pricing tier.

### Semantic
- **Success** (`#22c55e`): Confirmation toasts, "active pod" indicators.
- **Warning** (`#f59e0b`): Caution states.
- **Danger** (`#ef4444`): Destructive actions.
- **Info** (`#06b6d4`): Informational notices.

## 3. Typography Rules

### Font Family
- **Primary**: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`. Inter handles every text role.
- **Mono**: `JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace`. Code blocks, GPU price callouts, model identifiers, terminal output.
- **OpenType features**: `'cv11'` and `'ss01'` toggled at display sizes.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display-xl | Inter | 64 | 700 | 1.05 | -2px | ss01 | Homepage h1 ("GPU cloud built for AI") |
| display-lg | Inter | 52 | 700 | 1.10 | -1.5px | — | Section heads on top of major bands |
| display-md | Inter | 40 | 600 | 1.15 | -1px | — | Sub-section heads, CTA-band headlines |
| display-sm | Inter | 30 | 600 | 1.20 | -0.6px | — | Card titles, pricing tier prices |
| title-lg | Inter | 24 | 600 | 1.30 | -0.2px | — | Pricing plan names, GPU tile headlines |
| title-md | Inter | 20 | 600 | 1.35 | 0 | — | Card titles |
| title-sm | Inter | 16 | 600 | 1.40 | 0 | — | Small card titles, list labels |
| body-lg | Inter | 18 | 400 | 1.60 | 0 | — | Hero subhead |
| body-md | Inter | 16 | 400 | 1.60 | 0 | — | Default running-text |
| body-sm | Inter | 14 | 400 | 1.55 | 0 | — | Footer body, fine-print |
| caption | Inter | 13 | 500 | 1.40 | 0 | — | Badge labels, captions |
| caption-uppercase | Inter | 11 | 600 | 1.40 | 1.5px | — | Section labels, eyebrows |
| gpu-price | Inter | 24 | 700 | 1.0 | -0.4px | — | GPU hourly price in pricing table — paired with /hr suffix |
| gpu-price-unit | Inter | 13 | 500 | 1.0 | 0 | — | "/hr" suffix to gpu-price |
| code-md | JetBrains Mono | 14 | 400 | 1.60 | 0 | — | Code blocks (Python, Docker, curl) |
| code-sm | JetBrains Mono | 12 | 400 | 1.50 | 0 | — | Inline code, GPU price values inline |
| button | Inter | 14 | 600 | 1.00 | 0 | — | Standard button labels |
| nav-link | Inter | 14 | 500 | 1.40 | 0 | — | Top-nav menu items |

### Principles
- **Display weights stay at 600–700.** 700 reserved for the homepage h1; 600 below.
- **Negative tracking is essential** for display sizes.
- **Body and labels stay at 400 / 500 / 600.**
- **Body line-height stays at 1.60.** Documentation-tall.
- **Mono everywhere code or price values appear.** GPU prices ($0.34/hr, $1.89/hr, $4.69/hr) use mono inline for credibility.
- **GPU-price typography (24px / 700 / -0.4px) is reserved for pricing tables.** Pairs with "/hr" unit at 13px / 500.
- **Caption-uppercase carries section structure.** 11px uppercase eyebrow at 1.5px tracking — "GPU PRICING", "INSTANT DEPLOY", "REGIONS", "PRICING".
- **White headlines on slate.** The white-on-slate combination provides strongest hierarchy.

## 4. Component Stylings

### Buttons (4 variants)

**`button-primary`** — The signature purple CTA. Background `#673ab7`, text `#ffffff`, Inter 14px / 600, padding 12px × 22px, height 40px, radius 8px. Hover: `#5e35b1` over 120ms; subtle 1px lift.

**`button-secondary`** — Dark surface card button. Background `#1a293d`, text `#ffffff`, 1px solid `#334155` border, same padding/radius as primary. Hover: surface lightens to `#243349`.

**`button-ghost`** — Transparent text-with-arrow CTA. No background, text `#ffffff`, padding 10px × 16px.

**`button-text-link`** — Pure text link in `#9575cd` (lightened purple for legibility on dark) with hover-lighten to `#b39ddb`.

### Cards

**`card-feature`** — Standard dark feature card. Background `#1a293d`, text `#ffffff`, radius 12px, padding 32px, 1px solid `#243349` border.

**`card-gpu-row`** — Single GPU row in the dense pricing table. Background `#1a293d`, padding 14px × 20px, 1px bottom border `#243349`, 2px left-side tier color stripe (green/amber/red). GPU name in Inter 16px / 600 / white, VRAM in Inter 14px / 400 / `#cbd5e1`, price in `gpu-price` typography (24px / 700 / white) with "/hr" suffix, region/availability in 12px Inter `#94a3b8`. Hover: surface lightens to `#243349`; tier stripe widens to 3px.

**`card-gpu-tile`** — Larger GPU featured tile (used for H100, MI300X, latest releases). Background `#1a293d`, radius 12px, padding 24px, 1px solid `#243349` border. Top: GPU name in title-lg, VRAM badge. Center: gpu-price (24px / 700 white) + /hr suffix. Bottom: feature bullets, primary CTA "Deploy now."

**`card-product`** — Card showing actual RunPod console UI (pod list, GPU selector, terminal output). Background `#142133`, radius 12px, padding 24px.

**`card-code-window`** — Dark card showing a Python, Docker, or curl code block. Background `#1a293d` (slightly lighter than canvas for definition), code in JetBrains Mono with syntax highlighting (keywords purple-shifted to `#9575cd`, strings `#86efac`, comments `#64748b`, numbers `#fbbf24`), radius 12px, padding 24px. Top-left "Python" / "Dockerfile" / "curl" tab indicator.

**`card-pricing-tier`** — Standard pricing tier card. Background `#1a293d`, radius 12px, padding 32px, 1px solid `#243349` border.

**`card-pricing-tier-featured`** — Featured tier marked by 2px solid `#673ab7` border, slightly elevated surface `#243349` (vs standard `#1a293d`), and `shadow-glow-purple` ambient glow. The cluster of signals — color, surface, glow — marks the featured tier unmistakably.

### Badges & Pills

**`badge-pill`** — Small dark pill label. Background `#1a293d`, text `#ffffff`, caption typography, radius 9999, padding 4px × 12px, 1px solid `#334155` border.

**`badge-purple`** — Purple tinted pill for "FEATURED" or product callouts. Background `#3d2768`, text `#9575cd`, caption-uppercase typography, radius 9999.

**`badge-spot`** — "SPOT" tag on community-tier GPU rows. Background `rgba(34, 197, 94, 0.15)` (green tint), text `#22c55e`, caption-uppercase typography, radius 9999. Signals "this is a community/spot tier — cheapest pricing."

### Inputs / Forms

**`text-input`** — Dark text input. Background `#1a293d`, text `#ffffff`, radius 8px, padding 10px × 14px, height 40px, 1px solid `#334155` border.

**`text-input-focused`** — 3px `rgba(103, 58, 183, 0.40)` ring with 1px solid `#673ab7` core.

### Navigation

**`top-nav`** — Dark slate nav bar pinned to top, 64px tall, background `#0e1a2b`, 1px solid `#243349` bottom border. Logo + "RunPod" wordmark left, primary horizontal menu (GPU Cloud, Serverless, Pricing, Resources, Customers) center, right-side: "Sign in" + purple `button-primary` ("Get started").

### Decorative

**`gpu-pricing-table`** — The brand's primary marketing chrome. Each row is a `card-gpu-row`. Header row uses Inter 12px / 600 / uppercase / `#94a3b8` (columns: GPU, VRAM, $/hr, Region). Body rows use the gpu-price typography for prices and JetBrains Mono for technical identifiers. Tier stripes color-code rows. Sortable by clicking column headers (sort indicator in muted `#94a3b8`).

**`stat-callout`** — Inline white or purple stat numbers ("500k+ GPU hours", "20+ regions", "10+ GPU types"). Display-sm typography (30px / 600).

**`cta-band`** — Pre-footer "Get the GPUs you need" CTA band. `#1a293d` surface, 12px radius, 64px padding, 1px solid `#243349` border. h2 in display-md white, body subhead in `#cbd5e1`, primary `#673ab7` purple CTA + secondary dark-surface CTA.

**`customer-logo-strip`** — Horizontal monochrome customer-logo strip. Background `#0e1a2b`, logos in `#94a3b8`, padding 32px vertical.

## 5. Layout Principles

### Spacing System
Base unit **4px**. Tokens: `xxs:4 · xs:8 · sm:12 · md:16 · lg:24 · xl:32 · xxl:48 · section:96`. 96px section padding, 32px feature card padding, 24px code-window padding.

### Grid & Container
Max content width **1280px** centered. Editorial body uses a 12-column grid; hero often uses an 8/4 split (h1 + GPU pricing preview right). Feature card grids run 3-up at desktop. GPU-tile grids run 4-up at desktop, 2-up at tablet, 1-up at mobile. The full GPU pricing table spans the full content width.

### Whitespace Philosophy
RunPod uses moderately dense whitespace appropriate for a GPU-cloud brand with technical users. The page is informationally dense (every GPU price is shown), but the rhythm provides enough breathing room for scanning.

### Section Cadence
Dark hero band (with GPU price preview) → GPU pricing table (the marketing centerpiece) → feature card grid → softly-tinted band with stat callouts → product mockup band (RunPod console) → customer-logo strip → pricing tiers (subscription) → pre-footer CTA band → dark footer.

## 6. Shapes & Radius Scale

| Tier | Token | Value | Use |
|---|---|---|---|
| Micro | micro | 2px | Reserved |
| XS | xs | 4px | Badge accents, syntax-highlight chips |
| Standard | sm | 6px | Small inline buttons, tight inputs |
| Comfortable | md | 8px | Standard CTA buttons, text inputs |
| Large | lg | 12px | Content cards, code-window cards, GPU tiles, pricing tiers |
| Featured | xl | 16px | Hero shells (rare) |
| Pill | pill | 9999px | Badges, avatars, tier-stripe terminations |

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No shadow, no border | Body sections, top nav, hero text, table cells |
| 1 — Soft hairline | 1px `#243349` border | Standard feature cards, GPU rows, pricing tiers |
| 2 — Surface | `#1a293d` background | Feature cards, GPU tiles |
| 3 — Elevated | `#243349` background | Nested cards, hover states |
| 4 — Brand glow | 1px purple border + glow-purple | Featured pricing tier (rare) |
| 5 — Modal | Standard shadow + backdrop dim 80% | Dialogs, dropdowns |

### Shadow Philosophy
RunPod uses slate-tinted shadows at moderate alpha. Shadows are essential on the dark canvas because tonal stepping alone provides limited depth cues. Hover lifts are subtle (translateY(-2px) + shadow up one tier). The brand glow shadow is reserved for the featured pricing tier — used scarcely (one card per page).

## 8. Interaction & Motion

### Easing Curves
- **Standard ease**: `cubic-bezier(0.4, 0, 0.2, 1)` — default.
- **Emphasized ease**: `cubic-bezier(0.2, 0, 0, 1)` — CTA hover, modal entrances.

### Duration Buckets
- **Fast (120ms)**: Color and opacity transitions.
- **Standard (200ms)**: Card hover lifts, dropdown opens, table row hovers.
- **Slow (320ms)**: Modal entrance, scroll reveals.

### Per-Component Micro-States
- **Button hover**: Purple CTAs darken `#673ab7` → `#5e35b1` over 120ms; 1px lift.
- **GPU-row hover**: Background lightens to `#243349` over 120ms; tier color stripe widens from 2px → 3px; price text gets a slight glow.
- **Card hover**: TranslateY(-2px) over 200ms; shadow intensifies one tier.
- **Code-window hover**: No state change.
- **Link hover**: Color lightens `#9575cd` → `#b39ddb`; underline thickens 1px → 2px.
- **Input focus**: 3px purple ring expands.
- **Pricing-table sort header click**: Sort indicator rotates 180° over 200ms with emphasized ease.

### Page Transitions
Standard browser navigation. Section-on-scroll reveals are 320ms fade-in-up.

### Reduced Motion
Honored — all transforms removed, transitions reduced to 100ms opacity-only, sort-indicator rotation skipped (instant flip instead).

## 9. Accessibility & A11y

### Contrast Pairs
- **Text on bg**: `#ffffff` on `#0e1a2b` = **16.8** — AAA at every size.
- **Body on bg**: `#cbd5e1` on `#0e1a2b` = **11.2** — AAA.
- **Muted on bg**: `#94a3b8` on `#0e1a2b` = **5.7** — AA at body sizes.
- **On-brand on brand**: `#ffffff` on `#673ab7` = **5.4** — AA at body / AAA at large.
- **Link on bg**: `#9575cd` on `#0e1a2b` = **6.8** — AAA.
- **Body on surface**: `#cbd5e1` on `#1a293d` = **9.8** — AAA.

### Focus Indicators
3px `rgba(103, 58, 183, 0.40)` ring with 1px solid `#673ab7` core. Higher alpha than typical because the dark canvas needs stronger ring to register.

### ARIA Patterns
- **Buttons**: Native `<button>`; icon-only carry `aria-label`.
- **Code blocks**: `<pre><code>` with `aria-label="Python example"`.
- **GPU pricing table**: Use `<table>` with `<thead>`, `<tbody>`, `<th scope="col">`. Each row has `<th scope="row">` for the GPU name. Tier stripes use `aria-hidden="true"` (decorative); tier label is announced via separate `<span class="sr-only">Community tier</span>`.
- **Sort headers**: Use `aria-sort="ascending|descending|none"`.
- **Navigation**: `<nav aria-label="Primary">`.
- **Dialog**: `role="dialog"` + `aria-labelledby`.

### Keyboard Navigation
Tab order follows reading order. Skip-link to `<main>`. Pricing table is fully keyboard-navigable (arrow keys move between rows when table is focused). Modal trap focus + Escape closes.

### Screen Reader Hints
GPU prices use `aria-label="zero point three four dollars per hour"` to ensure correct pronunciation. VRAM values use the literal value text. Tier labels are announced via screen-reader-only spans.

### Reduced Motion Handling
Honored — all transforms removed, transitions to 100ms opacity-only, table sort indicator instant-flip.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Hamburger nav; hero h1 64→36px; GPU table horizontal-scroll; GPU tiles 1-up; pricing 1-up |
| Tablet | 640–1024px | Top nav tightens; feature cards 2-up; GPU tiles 2-up; hero h1 52px |
| Desktop | 1024–1440px | Full top-nav; 3-up feature cards; 4-up GPU tiles; full GPU pricing table; hero h1 64px |
| Wide | > 1440px | Same as desktop with more breathing room; max content 1280px |

### Touch Targets
Primary CTA min 40 × 40px. GPU-row touch height 56px (extends row vertical hit area for mobile thumb access). Input height 40px.

### Collapsing Strategy
Top nav collapses to hamburger at < 768px. Hero 8/4 grid collapses to single-column. GPU pricing table retains font-size; horizontal scroll on mobile with sticky first column (GPU name).

### Image Behavior
Code blocks stay at fixed font-size; horizontal scroll on mobile. Customer logos retain native widths.

## 11. Content & Voice

### Tone
**Accessible, GPU-pricing-transparent, developer-friendly.** RunPod writes for ML developers who need GPU access without the enterprise procurement overhead. The tone is closer to Modal or Replicate than to AWS — emphasizes "you can spin up an H100 for $4/hr right now" rather than "contact our enterprise sales team." Headlines state the pricing value prop ("GPU cloud built for AI"); body copy supports with regions, GPU types, and per-hour rates.

### Microcopy Patterns
- **CTA verbs**: "Get started", "Deploy now", "Read the docs", "View pricing", "Talk to sales". Friendly but direct.
- **Section labels**: Uppercase eyebrow — "GPU PRICING", "INSTANT DEPLOY", "REGIONS", "SERVERLESS", "CUSTOMERS".
- **Stat numbers**: Followed by qualifier — "500k+ GPU hours", "20+ regions", "10+ GPU types", "$0.34/hr min".
- **Feature copy**: Verb-first ("Deploy in 30 seconds", "Scale to thousands of GPUs", "Pay per second").

### Empty States
Pod dashboard product UI: "No active pods — deploy your first GPU pod to get started" with purple link. Friendly without being whimsical.

### Error Messages
**Pattern**: `<icon-x in #ef4444> + "What went wrong" + "What to try next"`. Example: "GPU type unavailable in this region — try us-east-1 or pick a different GPU."

### Success Confirmations
Toast in `text` over `surface` with success accent stripe. "Pod deployed — SSH into it with `runpod connect <pod-id>`." Auto-dismiss 4s.

## 12. Dark Mode & Theming

RunPod is **dark-only**. The marketing site has no light mode toggle. The deep slate canvas is the brand's natural state.

The docs site (`docs.runpod.io`) supports a light theme for documentation reading: `bg: #ffffff`, `surface: #f8fafc`, `border: #e2e8f0`, `text: #0e1a2b`, `brand: #673ab7` (unchanged), `link: #673ab7`. Code-window cards retain their dark slate background in both themes.

## 13. Lineage & Influences

RunPod's marketing aesthetic descends from the **accessible GPU cloud** lineage that runs through Modal, Replicate, Vast.ai — bright accent color, dense pricing tables, developer-friendly chrome rather than enterprise-stern AWS-style marketing. The signature `#673ab7` Material-deep-purple is borrowed from Material Design's color system, which signals accessibility and friendliness rather than enterprise severity.

The deep slate `#0e1a2b` canvas is RunPod's distinctive surface choice — softer than Linear's near-black `#0a0a14`, less corporate than enterprise navy `#1e3a8a`. The slate sits in a sweet spot that feels "developer-friendly dark." This canvas decision is what most distinguishes RunPod's brand from competitors.

The dense GPU pricing table is RunPod's primary marketing innovation. AWS and GCP hide GPU pricing behind quote forms and complicated calculators; RunPod commits to making every GPU price visible and sortable. The marketing chrome IS the price catalog. Tier color stripes (green/amber/red) are borrowed from spot-pricing markets (financial broker dashboards, electricity-grid demand displays) translated into GPU-cloud UI.

The 600-weight Inter with negative tracking tracks the modern dev-tool typographic discipline (Stripe, Vercel). JetBrains Mono on every code surface AND every price callout is RunPod's distinctive typographic move — most brands use mono only for code; RunPod uses mono for prices because mono signals "this is a measured, transparent value."

- **Modal** — ML-cloud accessible-developer-tool aesthetic; pricing-as-marketing-chrome. https://modal.com
- **Vercel** — Dark-monolithic marketing rhythm with single-accent discipline. https://vercel.com
- **Hugging Face** — Community-friendly accent strategy; approachable tone. https://huggingface.co
- **Material Design** — The Material-deep-purple palette lineage; friendly accessible-design tradition. https://m3.material.io
- **Vast.ai** — GPU pricing transparency tradition translated into accessible dev-tool marketing.

## 14. Do's and Don'ts

### Do
- Anchor every page on the deep slate `#0e1a2b` canvas. Marketing is dark-only.
- Reserve the purple (`#673ab7`) for primary CTAs, focus rings, featured-tier border.
- Use lighter purple `#9575cd` for inline body links (legibility on dark).
- Use Inter at weight 600 (display) with negative tracking on every headline.
- Show the dense GPU pricing table as primary marketing chrome.
- Use tier color stripes (green/amber/red) on GPU rows to signal community/standard/high-end at a glance.
- Use JetBrains Mono on every code surface AND every GPU price callout.
- Use the `gpu-price` typography (24px / 700) paired with `/hr` suffix in pricing tables.
- Anchor every band with 96px vertical rhythm.
- Use a 2px solid `#673ab7` border + glow-purple for the featured pricing tier.
- Use slate-tinted shadows (`rgba(8, 15, 26, ...)`) at moderate alpha for elevation cues on dark.

### Don't
- Don't switch the marketing canvas to pure black or to navy. Stay on the deep slate `#0e1a2b`.
- Don't switch to a light marketing band mid-page. RunPod is dark canvas top to bottom.
- Don't introduce a second brand color. RunPod is purple + tier-stripe-accents (which are functional, not decorative).
- Don't bold display weight beyond 700.
- Don't replace the GPU pricing table with abstract illustrations. The table IS the marketing.
- Don't use the link purple `#9575cd` for buttons or featured borders — it's reserved for body links.
- Don't use rounded-pill buttons for primary CTAs. Standard radius is 8px.
- Don't add gradient halos to the brand purple. Solid only — brand glow shadow is for featured pricing tier only.
- Don't use Inter for GPU price callouts. Mono is the credibility signal — `$0.34/hr` reads more transparent in mono.
- Don't use enterprise CTA verbs like "Contact sales for pricing" without an immediately-visible "Get started" alternative.

## 15. Agent Prompt Guide

### Quick Color Reference
```
Bg / Canvas:     #0e1a2b (deep slate-blue)
Surface:         #1a293d (default card)
Surface Soft:    #142133 (band tint)
Surface Elevated: #243349 (nested card / hover)
Border:          #243349 (1px hairline)
Text:            #ffffff (headlines)
Text Body:       #cbd5e1 (running-text)
Text Muted:      #94a3b8 (captions)
Brand:           #673ab7 (Material-deep-purple)
Brand Hover:     #5e35b1 (press)
Brand Light:     #9575cd (inline body links — lightened for legibility on dark)
On-Brand:        #ffffff (white text on purple CTAs)
Tier Low:        #22c55e (green stripe — community/spot)
Tier Mid:        #f59e0b (amber stripe — standard)
Tier High:       #ef4444 (red stripe — H100/MI300X)
```

### Example Component Prompts

1. "Create a RunPod hero band on `#0e1a2b` deep slate canvas, with an Inter 64px / 700 / -2px tracking white headline ('GPU cloud built for AI'), 18px / 400 `#cbd5e1` subhead, and a purple `#673ab7` primary CTA ('Get started') paired with a dark-surface secondary CTA ('View pricing'). Right side: a 12px-radius `#1a293d` card showing a GPU pricing preview — three rows for RTX 4090 ($0.34/hr, green stripe), A100 ($1.89/hr, amber stripe), H100 ($4.69/hr, red stripe), each with the price in JetBrains Mono."

2. "Design a dense GPU pricing table on `#0e1a2b` canvas. Columns: GPU (Inter 16px / 600 white), VRAM (Inter 14px / 400 `#cbd5e1`), $/hr (gpu-price 24px / 700 white + /hr 13px / 500 suffix), Region (Inter 12px `#94a3b8`). 2px left-side tier color stripe on each row (green for spot, amber for standard, red for H100/MI300X). Header row uses Inter 12px / 600 / uppercase / `#94a3b8`. Row hover: surface lightens to `#243349`."

3. "Build a 4-column GPU tile grid on `#0e1a2b`. Each tile: `#1a293d` background, 1px solid `#243349` border, 12px radius, 24px padding, GPU name in Inter 24px / 600 / white, VRAM badge below, gpu-price 24px / 700 + /hr suffix, feature bullets in body-sm `#cbd5e1`, primary purple CTA at bottom."

4. "Compose a stat-callout strip with three numbers ('500k+', '20+', '10+') in Inter 30px / 600 / white, each with a `#94a3b8` 11px / 600 uppercase label below ('GPU HOURS', 'REGIONS', 'GPU TYPES'). 96px vertical padding."

5. "Compose a pricing grid with 3 tiers on `#0e1a2b`. Two standard `#1a293d` cards (12px radius, 32px padding, 1px solid `#243349` border) and one featured tier marked with a 2px solid `#673ab7` border, slightly elevated `#243349` surface, and a subtle `shadow-glow-purple` ambient glow."

6. "Design a top nav: 64px tall `#0e1a2b` bar with 1px solid `#243349` bottom border. White 'RunPod' wordmark left, horizontal menu in Inter 14px / 500 / white center ('GPU Cloud', 'Serverless', 'Pricing', 'Resources'), 'Sign in' text link and a purple `#673ab7` `button-primary` ('Get started') right."

### Iteration Guide
1. Start with the deep slate canvas. The brand commits to `#0e1a2b` — softer than black, less corporate than navy.
2. The GPU pricing table IS the marketing. If you find yourself adding abstract illustrations, replace them with the actual price catalog instead.
3. Use tier color stripes to make the table scannable. Green/amber/red are functional, not decorative.
4. Pick one place per band where the purple appears.
5. Keep display headlines at Inter 600 (or 700 for the homepage h1) with negative tracking.
6. Use JetBrains Mono for prices. `$0.34/hr` in mono reads more transparent than in Inter.
7. Use lighter purple `#9575cd` for body links — pure brand purple `#673ab7` doesn't read well as inline body text on dark canvas.
8. Brand glow shadows are reserved for the featured pricing tier only — don't apply to every card.
9. The pre-footer CTA stays on the same dark canvas — RunPod doesn't need a contrast band because the page is already dark.
