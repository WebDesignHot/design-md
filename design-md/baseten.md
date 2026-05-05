---
name: Baseten
tagline: White canvas with Inter and a signature `#6c5ce7` purple — ML model deployment dressed in approachable workshop chrome.
author: webdesignhot
source_url: https://www.baseten.co
spec: design.md/v1.5
quality: curated
featured: false
categories: [ai, dev-tools]
tags: [light, purple, sans, mono, technical, approachable]
preview_swatch: ['#ffffff', '#6c5ce7', '#1a1830']
related: [anthropic, modal, huggingface]
description: 'Baseten''s marketing surface reads like an approachable ML deployment workshop — a pure white canvas, Inter at weight 600 carrying every display headline, and a signature `#6c5ce7` purple that handles primary CTAs, link state, and the model-deployment pipeline chrome (model → Truss → endpoint) that Baseten turns into its primary marketing artifact. Embedded code blocks (Python, Truss config YAML) and product UI mockups (deployment dashboard, autoscaling graphs) establish the deploy-ML-fast credibility; the purple operates as a friendly brand voltage rather than enterprise severity. Where Modal commits to lime-green developer optimism and Replicate leans toward minimal black-and-white, Baseten commits to a warmer, more approachable purple register — friendly, capable, and unmistakably ML-focused.'

colors:
  bg: '#ffffff'                  # canvas — pure white
  bg-soft: '#fafaff'              # softly tinted alternating band — slight purple tint
  bg-deep: '#1a1830'              # signature deep-purple-tinted dark band
  surface-soft: '#f5f5fa'         # softer section tint
  surface: '#ffffff'              # default content card
  surface-elevated: '#ffffff'
  surface-purple: '#ede9fe'        # tinted purple info surface
  surface-dark: '#1a1830'         # dark CTA band / footer (deep-purple, not black)
  surface-dark-card: '#28254a'    # nested card on dark band
  text: '#1a1830'                 # primary headlines — deep-purple-graphite
  text-body: '#3d3a5c'            # default running-text
  text-strong: '#28254a'          # emphasised paragraphs
  text-muted: '#6b6889'           # captions, breadcrumbs
  text-faint: '#9c98b6'           # tertiary fine-print
  text-on-dark: '#ffffff'
  text-on-dark-muted: '#c8c5dd'
  brand: '#6c5ce7'                # signature Baseten purple
  brand-hover: '#5a48d3'          # press / hover-darker variant
  brand-active: '#4938b3'         # deep purple for active state
  brand-soft: '#ede9fe'            # tinted purple surface for badges
  brand-deep: '#352a8a'            # darkest purple for type on brand-soft
  on-brand: '#ffffff'             # white text on purple CTAs
  on-light: '#1a1830'
  link: '#6c5ce7'                 # inline links match brand
  link-hover: '#5a48d3'
  border: '#e4e4ec'               # 1px hairline on cards
  border-strong: '#c8c5d8'        # divider on inputs
  border-soft: '#f0eff7'          # subtle separator
  border-purple: '#6c5ce7'        # focus border
  shadow-color: 'rgba(26, 24, 48, 0.04)'
  shadow-color-md: 'rgba(26, 24, 48, 0.08)'
  shadow-color-lg: 'rgba(26, 24, 48, 0.12)'
  shadow-glow-purple: 'rgba(108, 92, 231, 0.15)'
  accent-emerald: '#10b981'       # success
  accent-rose: '#ef4444'          # error
  accent-amber: '#f59e0b'         # warning
  accent-cyan: '#06b6d4'          # rare info accent
  accent-pink: '#ec4899'          # rare highlight on featured model
  success: '#10b981'
  warning: '#f59e0b'
  danger: '#ef4444'
  info: '#06b6d4'
  code-keyword: '#6c5ce7'
  code-string: '#10b981'
  code-comment: '#9c98b6'
  code-number: '#f59e0b'
  truss-yaml-key: '#6c5ce7'
  truss-yaml-string: '#10b981'

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
    stat-display:      { size: 56, weight: 700, lineHeight: 1.0,  tracking: '-1.5px',  family: display, notes: 'always purple or graphite' }

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
  page-width: 1200
  prose-width: 720
  header-height: 64

components:
  button-primary:
    backgroundColor: brand
    textColor: on-brand
    rounded: md
    padding: '12px 22px'
    height: 40
    use: 'every primary CTA — Get started, Try Baseten'
  button-secondary:
    backgroundColor: surface
    textColor: text
    rounded: md
    padding: '12px 22px'
    height: 40
    border: '1px solid #e4e4ec'
    use: 'paired secondary action'
  button-dark:
    backgroundColor: bg-deep
    textColor: text-on-dark
    rounded: md
    padding: '12px 22px'
    use: '"Talk to sales" or "View on GitHub"'
  button-text-link:
    backgroundColor: transparent
    textColor: link
  card-feature:
    backgroundColor: surface
    textColor: text
    rounded: lg
    padding: 32
    border: '1px solid #e4e4ec'
    use: 'standard feature card on white canvas'
  card-pipeline:
    backgroundColor: surface-soft
    textColor: text
    rounded: lg
    padding: 32
    use: 'model-to-endpoint pipeline diagram — Baseten signature visual'
  card-product:
    backgroundColor: surface-soft
    textColor: text
    rounded: lg
    padding: 24
    use: 'shows Baseten dashboard / deployment console UI'
  card-code-window:
    backgroundColor: surface-dark
    textColor: text-on-dark
    rounded: lg
    padding: 24
    use: 'embeds Python / Truss YAML — dark card on light canvas'
  card-pricing-tier:
    backgroundColor: surface
    rounded: lg
    padding: 32
    border: '1px solid #e4e4ec'
  card-pricing-tier-featured:
    backgroundColor: surface
    rounded: lg
    padding: 32
    border: '2px solid #6c5ce7'
    use: 'featured tier marked by 2px purple border'
  badge-pill:
    backgroundColor: surface-soft
    textColor: text
    rounded: pill
    padding: '4px 12px'
  badge-purple:
    backgroundColor: brand-soft
    textColor: brand-deep
    rounded: pill
    padding: '4px 12px'
    transform: uppercase
  text-input:
    backgroundColor: surface
    textColor: text
    rounded: md
    padding: '10px 14px'
    height: 40
    border: '1px solid #e4e4ec'
  cta-band-dark:
    backgroundColor: surface-dark
    textColor: text-on-dark
    rounded: lg
    padding: 64
    use: 'pre-footer "Deploy your model" CTA — deep-purple-tinted dark band'
  top-nav:
    backgroundColor: bg
    textColor: text
    height: 64

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
  ambient: 'rgba(26, 24, 48, 0.04) 0 1px 2px'
  standard: 'rgba(26, 24, 48, 0.08) 0 4px 12px'
  elevated: 'rgba(26, 24, 48, 0.12) 0 12px 32px -8px'
  deep: 'rgba(26, 24, 48, 0.16) 0 24px 48px -12px'
  glow-purple: 'rgba(108, 92, 231, 0.15) 0 12px 48px -8px'
  ring: '0 0 0 3px rgba(108, 92, 231, 0.30)'

accessibility:
  contrast-text-on-bg: 14.6              # AAA — #1a1830 on #ffffff
  contrast-text-on-brand: 4.7            # AA at body / AAA at large — #ffffff on #6c5ce7
  contrast-body-on-bg: 9.0               # AAA — #3d3a5c on #ffffff
  contrast-muted-on-bg: 4.6              # AA — #6b6889 on #ffffff
  focus-ring: '3px rgba(108, 92, 231, 0.30) ring with 1px solid #6c5ce7 core'
  reduced-motion-honored: true

dark-mode: 'optional — Baseten marketing is light-default; the in-product deployment console offers a dark theme on a deep-purple `#1a1830` canvas'

lineage:
  summary: |
    Baseten's marketing aesthetic descends from the **approachable
    ML-tooling** lineage — bright accent color, friendly type, and
    pipeline-diagram visual chrome that suggests "deploy your model
    in a few steps." The signature `#6c5ce7` purple is calibrated to
    read warm and approachable rather than enterprise-stern: closer
    to Stripe's inviting violet than to Linear's cool indigo. The
    purple pairs with a deep-purple-tinted `#1a1830` dark surface
    (NOT pure black) — keeps every dark moment brand-aligned. Where
    Modal commits to lime-green developer optimism and Replicate
    leans toward minimal black-and-white, Baseten commits to a more
    approachable purple register — friendly, capable, and
    unmistakably ML-focused. The Truss config YAML rendered in
    code-window cards is the brand's distinctive marketing chrome:
    Baseten owns the Truss open-source framework, and showing the
    YAML is showing the brand's own infrastructure.
  influences:
    - name: Vercel
      role: Single-accent dev-tool light-aesthetic baseline; dark-CTA-band-on-light pattern.
      url: https://vercel.com
    - name: Stripe
      role: Inter + negative-tracking display discipline; warm-purple chromatic register.
      url: https://stripe.com
    - name: Modal
      role: ML-deployment marketing register and pipeline-as-marketing-chrome lineage.
      url: https://modal.com
    - name: Hugging Face
      role: Approachable ML community-friendly aesthetic.
      url: https://huggingface.co
---

## 1. Visual Theme & Atmosphere

Baseten's marketing surface reads like an approachable ML deployment workshop — a pure white `#ffffff` canvas carrying confident deep-purple-graphite type, with one signature purple `#6c5ce7` that handles every primary CTA, every link, every focus ring. The purple is calibrated to read warm and approachable: closer to Stripe's inviting violet than to Linear's cool indigo or to enterprise-stern dark blues. Baseten's brand voice is "ML deployment doesn't have to be hard" — and the purple's friendly register supports that voice.

The defining visual artifact is the **model-to-endpoint pipeline diagram**. Baseten shows the deployment flow: model file → Truss config → containerized service → autoscaling endpoint. This pipeline is the brand's value proposition rendered as marketing chrome. Where Pinecone shows vector-grids, LangChain shows agent-architecture diagrams, and Fireworks shows benchmark charts, Baseten shows the deployment pipeline.

The second signature visual element is the **Truss YAML code window**. Truss is Baseten's open-source model-packaging framework, and the brand frequently shows the actual Truss `config.yaml` inside dark code-window cards. The YAML syntax (model name, requirements, env vars, autoscaling settings) is the brand's marketing voltage — a few lines of YAML is what stands between an ML model and a production endpoint.

Type voice runs Inter at weight 600 for display headlines (700 only at the largest hero size), with negative tracking (`-0.6px` to `-2px`). Body type runs Inter at 400 with 1.60 line-height. JetBrains Mono carries every code surface. Stat-callout numbers ("99.95% SLA", "10ms cold-start", "1000+ models deployed") use display-stat sizing (56px / 700) in purple or graphite.

The page rhythm alternates light cards with the occasional deep-purple-tinted `#1a1830` band (NOT pure black — every dark surface stays brand-aligned). The pre-footer CTA is the dramatic dark moment.

**Key Characteristics:**
- Pure white `#ffffff` canvas with deep-purple-graphite `#1a1830` type. Marketing is light-default.
- Signature `#6c5ce7` purple for primary CTAs, links, focus rings, and pipeline-diagram accents.
- Inter at weight 600 (display) with negative tracking on every headline.
- JetBrains Mono on every code surface; Truss YAML config is the brand's distinctive code artifact.
- Model-to-endpoint pipeline diagrams as the brand's signature visual chrome.
- Deep-purple-tinted `#1a1830` (NOT pure black) for every dark surface.
- 1px `#e4e4ec` hairline borders; rare ambient purple glow on hero cards.
- 8px radius on CTAs, 12px on cards, 9999px reserved for badges.
- Pre-footer CTA flips to deep-purple-tinted dark for warm contrast.
- Single brand color discipline — purple + grayscale, no second accent in marketing.

## 2. Color Palette & Roles

### Primary
- **Bg / Canvas** (`#ffffff`): Pure white — runs every marketing page.
- **Text** (`#1a1830`): Deep-purple-graphite, not pure black — adds warmth and ties to brand.
- **Brand / Primary CTA** (`#6c5ce7`): The Baseten purple — every primary CTA, every link, every brand-critical accent.

### Brand & Dark
- **Brand** (`#6c5ce7`): Reserved for primary CTAs, link state, focus rings, featured-tier border, pipeline-diagram accents.
- **Brand Hover** (`#5a48d3`): Press / hover-darker variant.
- **Brand Active** (`#4938b3`): Deep purple for pressed/active state.
- **Brand Deep** (`#352a8a`): Darkest purple for type on `brand-soft` surface.
- **Bg Deep** (`#1a1830`): Deep-purple-tinted dark surface — dark CTA band, footer, code-window background. NOT pure black.

### Accent
Baseten's accent system is constrained. The accents below appear only inside product UI mockups, never as marketing chrome.
- **Accent Emerald** (`#10b981`): "Deployed" / "active" indicators inside dashboard mockups.
- **Accent Rose** (`#ef4444`): "Error" / "failed" indicators.
- **Accent Amber** (`#f59e0b`): "Warning" / "scaling" indicators.
- **Accent Cyan** (`#06b6d4`): Rare info accent.
- **Accent Pink** (`#ec4899`): Rare highlight on featured model card.

### Interactive
- **Link** (`#6c5ce7`): Inline body links match brand. Underlined.
- **Link Hover** (`#5a48d3`): Hover darkens.
- **Selected** (`rgba(108, 92, 231, 0.15)`): Selected text background — purple tint.
- **Disabled** (`#9c98b6`): Disabled labels and tertiary text.

### Neutral Scale
- **Text** (`#1a1830`): Headlines, primary type — deep-purple-graphite.
- **Text Strong** (`#28254a`): Emphasised paragraphs.
- **Text Body** (`#3d3a5c`): Default running-text.
- **Text Muted** (`#6b6889`): Captions, breadcrumbs.
- **Text Faint** (`#9c98b6`): Tertiary fine-print.
- **Text on Dark** (`#ffffff`): Headlines on dark CTA band.
- **Text on Dark Muted** (`#c8c5dd`): Body on dark band.

### Surface & Borders
- **Surface Soft** (`#f5f5fa`): Section dividers, very-soft band tints.
- **Bg Soft** (`#fafaff`): Slightly purple-tinted band for editorial alternation.
- **Surface** (`#ffffff`): Default content card.
- **Surface Purple** (`#ede9fe`): Tinted purple surface for info callouts.
- **Surface Dark** (`#1a1830`): Code-window background, dark CTA band, footer.
- **Surface Dark Card** (`#28254a`): Nested card on dark band.
- **Border** (`#e4e4ec`): 1px hairline on cards.
- **Border Strong** (`#c8c5d8`): Divider on input underlines.
- **Border Purple** (`#6c5ce7`): Focus border on inputs and 2px featured-tier border.

### Shadow Colors
Baseten uses purple-tinted shadows — graphite with a slight purple cast at low alpha. Subtle but brand-aligned.
- **Shadow Color** (`rgba(26, 24, 48, 0.04)`): Ambient.
- **Shadow Color Md** (`rgba(26, 24, 48, 0.08)`): Standard card shadow.
- **Shadow Color Lg** (`rgba(26, 24, 48, 0.12)`): Hover / modal entrance.
- **Shadow Glow Purple** (`rgba(108, 92, 231, 0.15)`): Rare ambient glow on hero CTA card.

### Semantic
- **Success** (`#10b981`): Confirmation toasts.
- **Warning** (`#f59e0b`): Caution states.
- **Danger** (`#ef4444`): Destructive actions.
- **Info** (`#06b6d4`): Informational notices.

## 3. Typography Rules

### Font Family
- **Primary**: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`. Inter handles every text role.
- **Mono**: `JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace`. Code blocks, Truss YAML config, model identifiers.
- **OpenType features**: `'cv11'` and `'ss01'` toggled at display sizes.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display-xl | Inter | 64 | 700 | 1.05 | -2px | ss01 | Homepage h1 ("Deploy any ML model in production") |
| display-lg | Inter | 52 | 700 | 1.10 | -1.5px | — | Section heads on top of major bands |
| display-md | Inter | 40 | 600 | 1.15 | -1px | — | Sub-section heads, CTA-band headlines |
| display-sm | Inter | 30 | 600 | 1.20 | -0.6px | — | Card titles, pricing tier prices |
| title-lg | Inter | 24 | 600 | 1.30 | -0.2px | — | Pricing plan names |
| title-md | Inter | 20 | 600 | 1.35 | 0 | — | Card titles |
| title-sm | Inter | 16 | 600 | 1.40 | 0 | — | Small card titles, list labels |
| body-lg | Inter | 18 | 400 | 1.60 | 0 | — | Hero subhead |
| body-md | Inter | 16 | 400 | 1.60 | 0 | — | Default running-text |
| body-sm | Inter | 14 | 400 | 1.55 | 0 | — | Footer body, fine-print |
| caption | Inter | 13 | 500 | 1.40 | 0 | — | Badge labels, captions |
| caption-uppercase | Inter | 11 | 600 | 1.40 | 1.5px | — | Section labels, eyebrows |
| stat-display | Inter | 56 | 700 | 1.0 | -1.5px | — | Stat callouts ("99.95% SLA") — purple or graphite |
| code-md | JetBrains Mono | 14 | 400 | 1.60 | 0 | — | Code blocks, Truss YAML |
| code-sm | JetBrains Mono | 12 | 400 | 1.50 | 0 | — | Inline code |
| button | Inter | 14 | 600 | 1.00 | 0 | — | Standard button labels |
| nav-link | Inter | 14 | 500 | 1.40 | 0 | — | Top-nav menu items |

### Principles
- **Display weights stay at 600–700.** 700 reserved for the homepage h1; 600 below.
- **Negative tracking is essential** for display sizes.
- **Body and labels stay at 400 / 500 / 600.**
- **Body line-height stays at 1.60.** Documentation-tall.
- **Mono everywhere code or YAML appears.** Truss config keys ("model_name", "python_version", "min_replicas") use mono inline.
- **Stat-display sizes carry credibility moments.** "99.95% SLA", "1000+ models deployed", "10ms cold-start" — always purple or graphite.
- **Caption-uppercase carries section structure.** 11px uppercase eyebrow at 1.5px tracking — "DEPLOYMENT", "AUTOSCALING", "TRUSS", "PRICING".
- **Deep-purple-graphite headlines, not black.** The `#1a1830` adds warmth that pure black lacks.

## 4. Component Stylings

### Buttons (4 variants)

**`button-primary`** — The signature purple CTA. Background `#6c5ce7`, text `#ffffff`, Inter 14px / 600, padding 12px × 22px, height 40px, radius 8px. Hover: `#5a48d3` over 120ms; subtle 1px lift.

**`button-secondary`** — White-bordered button. Background `#ffffff`, text `#1a1830`, 1px solid `#e4e4ec` border, same shape and padding.

**`button-dark`** — Dark CTA on white surface. Background `#1a1830`, text `#ffffff`. Used for "Talk to sales" or "View on GitHub".

**`button-text-link`** — Pure text link in `#6c5ce7` with hover-darken.

### Cards

**`card-feature`** — Standard white feature card. Background `#ffffff`, radius 12px, padding 32px, 1px solid `#e4e4ec` border.

**`card-pipeline`** — Model-to-endpoint pipeline diagram. Background `#fafaff` (slight purple tint), radius 12px, padding 32px. Four nodes drawn as `#ffffff` 8px-radius rectangles with 1px `#e4e4ec` borders ("Model file" → "Truss config" → "Container" → "Endpoint"); connecting arrows are 1.5px `#6c5ce7` lines with arrow heads. The brand's signature visual chrome.

**`card-product`** — Card showing actual Baseten dashboard / deployment console UI (deployment list, autoscaling graph, logs panel). Background `#fafaff`, radius 12px, padding 24px.

**`card-code-window`** — Dark card showing a Python or Truss YAML code block. Background `#1a1830` (deep-purple-tinted, not black), code in JetBrains Mono with syntax highlighting (keywords purple-shifted to `#a78bfa`, strings `#86efac`, comments `#9c98b6`, numbers `#fbbf24`, YAML keys purple, YAML strings green), radius 12px, padding 24px. Top-left "Python" / "config.yaml" tab indicator.

**`card-pricing-tier`** — Standard pricing tier card. Background `#ffffff`, radius 12px, padding 32px, 1px solid `#e4e4ec` border.

**`card-pricing-tier-featured`** — Featured tier marked by 2px solid `#6c5ce7` border.

### Badges & Pills

**`badge-pill`** — Small light pill. Background `#f5f5fa`, text `#1a1830`, caption typography, radius 9999.

**`badge-purple`** — Purple tinted pill for "NEW" or product callouts. Background `#ede9fe`, text `#352a8a`, caption-uppercase typography, radius 9999.

### Inputs / Forms

**`text-input`** — White text input. Background `#ffffff`, radius 8px, padding 10px × 14px, height 40px, 1px solid `#e4e4ec` border.

**`text-input-focused`** — 3px `rgba(108, 92, 231, 0.30)` ring with 1px solid `#6c5ce7` core.

### Navigation

**`top-nav`** — White nav bar pinned to top, 64px tall, background `#ffffff`. Logo + "Baseten" wordmark left, primary horizontal menu (Product, Solutions, Customers, Truss, Resources, Pricing) center, right-side: "Sign in" + purple `button-primary` ("Get started").

### Decorative

**`pipeline-arrow`** — Inline arrow chrome between pipeline nodes. 1.5px `#6c5ce7` stroke, arrow head at terminus.

**`stat-callout`** — Inline purple or graphite stat numbers ("99.95% SLA", "1000+ models", "10ms cold-start"). Stat-display typography (56px / 700 / -1.5px).

**`cta-band-dark`** — Pre-footer "Deploy your model" CTA band. `#1a1830` deep-purple-tinted surface, 64px padding. h2 in display-md white, body subhead in `#c8c5dd`, primary `#6c5ce7` CTA + ghost white text-link.

**`customer-logo-strip`** — Horizontal monochrome customer-logo strip. Background `#ffffff`, logos in `#6b6889`, padding 32px vertical.

## 5. Layout Principles

### Spacing System
Base unit **4px**. Tokens: `xxs:4 · xs:8 · sm:12 · md:16 · lg:24 · xl:32 · xxl:48 · section:96`. 96px section padding, 32px feature card padding, 24px code-window padding.

### Grid & Container
Max content width **1200px** centered. Editorial body uses a 12-column grid; hero often uses a 6/6 split (h1 + subhead left, code-window or pipeline diagram right). Feature card grids run 3-up at desktop, 2-up at tablet, 1-up at mobile.

### Whitespace Philosophy
Baseten uses balanced, friendly whitespace appropriate for an approachable ML-tooling brand. Generous enough to feel calm, tight enough to fit dense technical information.

### Section Cadence
White hero band → pipeline diagram or code-window → light feature card grid → softly-tinted band with stat callouts → product mockup band → customer-logo strip → pricing → light feature card → deep-purple-tinted `#1a1830` pre-footer CTA → dark footer.

## 6. Shapes & Radius Scale

| Tier | Token | Value | Use |
|---|---|---|---|
| Micro | micro | 2px | Reserved |
| XS | xs | 4px | Badge accents, syntax-highlight chips |
| Standard | sm | 6px | Small inline buttons, tight inputs |
| Comfortable | md | 8px | Standard CTA buttons, text inputs, pipeline node rectangles |
| Large | lg | 12px | Content cards, code-window cards, pricing tiers |
| Featured | xl | 16px | Hero shells |
| Pill | pill | 9999px | Badges, avatars |

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No shadow, no border | Body sections, top nav, hero text |
| 1 — Soft hairline | 1px `#e4e4ec` border | Standard feature cards, pricing tiers |
| 2 — Soft shadow | 1px border + ambient shadow | Cards on hover |
| 3 — Standard shadow | 1px border + standard shadow | Featured cards |
| 4 — Brand glow | 1px border + glow-purple | Hero CTA card (rare) |
| 5 — Featured | 2px solid `#6c5ce7` border | Featured pricing tier |
| 6 — Modal | Standard shadow + backdrop dim 60% | Dialogs, dropdowns |

### Shadow Philosophy
Baseten uses purple-tinted shadows at low alpha — graphite with subtle purple cast (`rgba(26, 24, 48, ...)`). Tying depth to brand subtly. Hover lifts are subtle (translateY(-2px) + shadow up one tier).

## 8. Interaction & Motion

### Easing Curves
- **Standard ease**: `cubic-bezier(0.4, 0, 0.2, 1)` — default.
- **Emphasized ease**: `cubic-bezier(0.2, 0, 0, 1)` — CTA hover, modal entrances.

### Duration Buckets
- **Fast (120ms)**: Color and opacity transitions.
- **Standard (200ms)**: Card hover lifts, dropdown opens.
- **Slow (320ms)**: Modal entrance, scroll reveals.

### Per-Component Micro-States
- **Button hover**: Purple CTAs darken `#6c5ce7` → `#5a48d3` over 120ms; 1px lift.
- **Card hover**: TranslateY(-2px) over 200ms; shadow intensifies one tier.
- **Pipeline diagram**: On scroll-into-view, arrows draw progressively (stroke-dashoffset cycles) suggesting "deployment flowing." 800ms total, with 200ms stagger between arrows.
- **Code-window hover**: No state change.
- **Link hover**: Color darkens.
- **Input focus**: 3px purple ring expands.

### Page Transitions
Standard browser navigation. Section-on-scroll reveals are 320ms fade-in-up.

### Reduced Motion
Honored — pipeline arrow draw animation skipped (arrows render statically), all transforms removed.

## 9. Accessibility & A11y

### Contrast Pairs
- **Text on bg**: `#1a1830` on `#ffffff` = **14.6** — AAA.
- **Body on bg**: `#3d3a5c` on `#ffffff` = **9.0** — AAA.
- **Muted on bg**: `#6b6889` on `#ffffff` = **4.6** — AA.
- **On-brand on brand**: `#ffffff` on `#6c5ce7` = **4.7** — AA at body sizes (large text AAA).
- **Brand-deep on brand-soft**: `#352a8a` on `#ede9fe` = **9.6** — AAA.

### Focus Indicators
3px `rgba(108, 92, 231, 0.30)` ring with 1px solid `#6c5ce7` core.

### ARIA Patterns
- **Buttons**: Native `<button>`; icon-only carry `aria-label`.
- **Code blocks**: `<pre><code>` with `aria-label="Truss config example"`.
- **Pipeline diagrams**: SVG with `<title>` and `<desc>`.
- **Navigation**: `<nav aria-label="Primary">`.
- **Dialog**: `role="dialog"` + `aria-labelledby`.

### Keyboard Navigation
Tab order follows reading order. Skip-link to `<main>`. Modal trap focus + Escape closes.

### Screen Reader Hints
Stat numbers use `aria-label` for full unit readout. Pipeline diagrams provide textual fallback ("Pipeline: model file → Truss config → container → endpoint").

### Reduced Motion Handling
Honored — pipeline arrow draw skipped, transforms removed.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Hamburger nav; hero h1 64→36px; code-window stacks below; feature grids 1-up |
| Tablet | 640–1024px | Top nav tightens; feature cards 2-up; hero h1 52px |
| Desktop | 1024–1440px | Full top-nav; 3-up feature cards; hero h1 64px |
| Wide | > 1440px | Same as desktop with more breathing room; max content 1200px |

### Touch Targets
Primary CTA min 40 × 40px. Icon-only button 36 × 36 with adequate hit area. Input height 40px.

### Collapsing Strategy
Top nav collapses to hamburger at < 768px. Hero 6/6 grid collapses to single-column. Pipeline diagram swaps from horizontal to vertical orientation on mobile.

### Image Behavior
Code blocks stay at fixed font-size; horizontal scroll on mobile. Customer logos retain native widths.

## 11. Content & Voice

### Tone
**Approachable, ML-fluent, capable.** Baseten writes for ML engineers and ML-curious developers who need to deploy models in production. The tone is warmer than corporate (closer to Modal or Hugging Face than to Snowflake) — emphasizes "we make ML deployment doable" rather than "we are an enterprise platform." Headlines state capabilities ("Deploy any ML model in production"); body copy supports with Truss config snippets, autoscaling details, and use-case examples.

### Microcopy Patterns
- **CTA verbs**: "Get started", "Deploy now", "Read the docs", "Talk to sales", "Try Baseten". Friendly without being whimsical.
- **Section labels**: Uppercase eyebrow — "DEPLOYMENT", "AUTOSCALING", "TRUSS", "GPUS", "PRICING".
- **Stat numbers**: Followed by qualifier — "1000+ models deployed", "99.95% SLA", "10ms cold-start", "20+ GPU types".
- **Feature copy**: Verb-first ("Deploy in seconds", "Scale to zero", "Choose your GPU").

### Empty States
Dashboard product UI: "No deployments yet — push your first model with `baseten deploy`" with purple link to docs. Welcoming and instructive.

### Error Messages
**Pattern**: `<icon-x in #ef4444> + "What went wrong" + "What to try next"`. Example: "Deployment failed — check your `config.yaml` for missing requirements."

### Success Confirmations
Toast in `text` over `surface` with success accent stripe. "Model deployed — endpoint live at https://..." Auto-dismiss 4s.

## 12. Dark Mode & Theming

Baseten marketing is **light-default**. The deployment console supports a dark theme on a deep-purple `#1a1830` canvas. Tokens map: `bg: #1a1830`, `surface: #28254a`, `border: #3d3a5c`, `text: #ffffff`, `text-body: #c8c5dd`, `brand: #6c5ce7` (unchanged), `link: #a78bfa` (lightened purple). Code-window cards retain `#1a1830` background in both themes.

## 13. Lineage & Influences

Baseten's marketing aesthetic descends from the **approachable ML-tooling** lineage that runs through Modal, Hugging Face, and Replicate — bright accent color, friendly type, and pipeline/diagram visual chrome. The signature `#6c5ce7` purple is calibrated to read warm and approachable rather than enterprise-stern.

The **deep-purple-tinted dark surface** (`#1a1830`, NOT pure black) is borrowed from Linear's discipline of keeping every surface brand-aligned. The **Truss YAML as code-window content** is Baseten's distinctive contribution — most dev brands show generic Python/JavaScript snippets; Baseten shows its own infrastructure (Truss is open-source, owned by Baseten). The pipeline-diagram-as-marketing-chrome borrows from Hashicorp's architecture-diagram tradition, but with a softer, more approachable rendering.

The 600-weight Inter with negative tracking tracks the modern dev-tool typographic discipline. The pre-footer dark-CTA-band-on-light pattern is Vercel's, but Baseten uses deep purple `#1a1830` instead of black.

- **Modal** — ML-deployment marketing register; pipeline-as-marketing-chrome lineage. https://modal.com
- **Vercel** — Single-accent dev-tool light-aesthetic baseline. https://vercel.com
- **Stripe** — Inter + negative-tracking display discipline; warm-purple chromatic register. https://stripe.com
- **Hugging Face** — Approachable ML community-friendly aesthetic. https://huggingface.co
- **Linear** — Deep-purple-tinted-not-pure-black dark surface treatment. https://linear.app

## 14. Do's and Don'ts

### Do
- Anchor every page on the white `#ffffff` canvas. Marketing is light-default.
- Reserve the purple (`#6c5ce7`) for primary CTAs, links, focus rings, pipeline-diagram accents, featured-tier border.
- Use Inter at weight 600 (display) with negative tracking on every headline.
- Show actual Truss YAML config inside dark code-window cards — Truss is the brand's own framework.
- Show model-to-endpoint pipeline diagrams as primary marketing chrome.
- Use deep-purple-tinted `#1a1830` (NOT pure black) for every dark surface.
- Use stat-callout numbers (56px / 700) for SLA and deployment-count credibility.
- Anchor every band with 96px vertical rhythm.
- Use a 2px solid `#6c5ce7` border to mark the featured pricing tier.
- Use purple-tinted shadows (`rgba(26, 24, 48, ...)`).

### Don't
- Don't switch the marketing canvas to pure black mid-page. Use deep-purple-tinted `#1a1830`.
- Don't introduce a second brand color in marketing. Baseten is purple + grayscale.
- Don't bold display weight beyond 700.
- Don't replace pipeline diagrams with abstract illustrations.
- Don't replace Truss YAML with generic code. The YAML IS the brand's distinctive marketing artifact.
- Don't use rounded-pill buttons for primary CTAs. Standard radius is 8px.
- Don't add gradient halos to the purple. Solid only — brand glow shadow is reserved for the hero CTA card.
- Don't use the purple for body text — only for actionable / accent moments.

## 15. Agent Prompt Guide

### Quick Color Reference
```
Bg / Canvas:     #ffffff (pure white)
Bg Soft:         #fafaff (slightly purple-tinted alternating band)
Surface Soft:    #f5f5fa (section divider)
Border:          #e4e4ec (1px hairline)
Text:            #1a1830 (deep-purple-graphite, not black)
Text Body:       #3d3a5c (running-text)
Text Muted:      #6b6889 (captions)
Brand:           #6c5ce7 (Baseten purple)
Brand Hover:     #5a48d3 (press state)
On-Brand:        #ffffff (white text on purple)
Surface Dark:    #1a1830 (deep-purple-tinted, NOT pure black)
```

### Example Component Prompts

1. "Create a Baseten hero band on `#ffffff` canvas, with an Inter 64px / 700 / -2px tracking `#1a1830` headline ('Deploy any ML model in production'), 18px / 400 `#3d3a5c` subhead, and a purple `#6c5ce7` primary CTA ('Get started') paired with a white-bordered secondary CTA ('Talk to sales'). Right side: a 12px-radius `#1a1830` deep-purple code-window card showing a Truss `config.yaml` snippet with purple keys and green strings."

2. "Design a model-to-endpoint pipeline card. `#fafaff` background, 12px radius, 32px padding. Four nodes drawn as `#ffffff` 8px-radius rectangles with 1px `#e4e4ec` borders ('Model file', 'Truss config', 'Container', 'Endpoint'); connecting arrows are 1.5px `#6c5ce7` lines with arrow heads."

3. "Build a 3-column feature card grid on `#ffffff`. Each card: `#ffffff` background, 1px solid `#e4e4ec` border, 12px radius, 32px padding, `#1a1830` 20px / 600 title, `#3d3a5c` 16px body, purple-tinted shadow. Each card carries a small 11px / 600 / 1.5px uppercase eyebrow ('DEPLOYMENT', 'AUTOSCALING', 'TRUSS')."

4. "Compose a stat-callout strip with three numbers ('1000+', '99.95%', '10ms') in Inter 56px / 700 / `#6c5ce7`, each with a `#6b6889` 11px / 600 uppercase label below ('MODELS DEPLOYED', 'SLA', 'COLD START'). 96px vertical padding."

5. "Compose a pricing grid with 3 tiers on `#ffffff`. Two standard `#ffffff` cards (12px radius, 32px padding, 1px solid `#e4e4ec` border) and one featured tier marked with a 2px solid `#6c5ce7` border."

6. "Design a pre-footer dark CTA band: full-bleed `#1a1830` deep-purple-tinted background (NOT black), 64px padding. Inter 40px / 600 / -1px tracking `#ffffff` headline ('Deploy your first model'), 16px / 400 `#c8c5dd` subhead, primary `#6c5ce7` CTA ('Get started') + ghost `#ffffff` text-link with arrow ('Read the docs')."

### Iteration Guide
1. Start with the white canvas. Marketing is light-default.
2. Pick one place per band where the purple appears.
3. Show the deployment pipeline as marketing chrome wherever you'd otherwise add an illustration.
4. Show Truss YAML in code-window cards. The YAML is the brand's distinctive code artifact.
5. Use deep-purple-tinted `#1a1830` for any dark surface. Pure black breaks the brand warmth.
6. Use purple-tinted shadows. Subtle but brand-aligned.
7. Use stat-callouts wherever you have a real SLA or deployment count to cite.
8. The pre-footer CTA is the page's one dramatic dark moment.
