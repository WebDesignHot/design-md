---
name: Together AI
tagline: Deep navy on near-white with Inter sans — open-source LLM cloud rendered as developer-platform infrastructure.
author: webdesignhot
source_url: https://www.together.ai
spec: design.md/v1.5
quality: curated
featured: false
categories: [ai, dev-tools]
tags: [light, dark, ai, infrastructure, sans, mono, technical, open-source]
preview_swatch: ['#ffffff', '#0f1f3d', '#0070f3']
related: [anthropic, openai, cohere]
description: 'Together AI is the open-source LLM-cloud aesthetic — a deep navy `#0f1f3d` (rendered as the brand surface and footer) anchored against a near-white `#fafafa` canvas, Inter pulling display through body in the canonical developer-platform register, and JetBrains Mono carrying every code block in a generous 14px / 1.6 line-height. The brand''s argument is "we are the cloud where you run open models" — Llama, DeepSeek, Qwen, Mistral, Mixtral, Stable Diffusion, FLUX — and the visual language commits to the developer-platform conventions that Stripe, Vercel, Linear, and Anthropic established: confident single-blue (`#0070f3`) action colour, generous grayscale ramp, syntax-highlighted code blocks treated as first-class layout citizens, and pricing tables with tabular numerics where every model''s per-million-token rate sits on a baseline grid. Where OpenAI and Anthropic keep the API surface behind editorial chat-product framing, Together leans hard into infrastructure-platform — the homepage is benchmarks, latency charts, model pricing tables, and code samples. The brand''s personality is the senior infrastructure engineer who reads benchmarks for fun: technically dense, comfortable with numbers, allergic to marketing copy that doesn''t cite a source.'

themes:
  default: light
  available: [light, dark]
  switch-via: 'Marketing site default is light/cool-white; the navy brand surface and code-running consoles ship dark. Toggle persisted in localStorage on the playground.'

colors:
  light:
    bg: '#fafafa'                    # primary canvas — near-white off cool
    bg-pure: '#ffffff'                # pure white card / modal
    bg-surface: '#f4f5f7'             # subtle surface band
    bg-promo: '#e7f0ff'               # soft blue promo band
    surface: '#ffffff'                # default card
    surface-elevated: '#ffffff'        # modal floor
    surface-hover: '#f4f5f7'           # nav hover, list-row hover
    surface-soft: '#f9fafb'            # subtle secondary surface
    surface-strong: '#e5e7eb'          # divider band
    text: '#0f1f3d'                    # primary body — navy tonal harmony with brand
    text-strong: '#06091a'             # display headlines
    text-muted: '#5a627a'              # secondary metadata
    text-soft: '#7d839a'               # tertiary captions
    text-disabled: '#a8aebd'           # disabled state
    text-on-brand: '#ffffff'            # text on blue
    text-link: '#0070f3'               # inline link blue
    text-link-hover: '#0058c2'         # link pressed
    brand: '#0f1f3d'                   # Together navy — primary brand surface
    brand-hover: '#1a2d52'             # nav hover lift
    brand-soft: '#27314e'              # softer navy variant
    brand-deep: '#080f1f'              # deepest navy
    accent-blue: '#0070f3'             # action blue — primary CTA
    accent-blue-hover: '#0058c2'       # CTA hover
    accent-blue-active: '#003e8c'      # pressed
    accent-blue-soft: '#e7f0ff'        # soft blue promo bg
    accent-cyan: '#00d4ff'             # gradient stop, AI-product accent
    accent-purple: '#7c3aed'           # model badge purple
    accent-green: '#10b981'             # success / new-model badge
    accent-orange: '#f59e0b'           # warning / "popular" badge
    accent-red: '#ef4444'              # error
    border: '#e5e7eb'                  # default hairline
    border-soft: '#f0f1f3'             # subtle divider
    border-strong: '#cbd0d8'           # focused field outline
    border-focus: '#0070f3'            # focus ring
    on-brand: '#ffffff'
    code-bg-light: '#f4f5f7'           # inline-code bg
    code-bg-dark: '#1a1d29'            # block-code bg (always dark even on light pages)
    code-text: '#e5e7eb'
    code-comment: '#7d839a'
    code-keyword: '#c084fc'
    code-string: '#86efac'
    code-function: '#60a5fa'
    code-variable: '#fcd34d'
    code-punct: '#a4adc8'
    code-number: '#fb923c'
    shadow-card: 'rgba(15,31,61,0.06)'
    shadow-modal: 'rgba(15,31,61,0.2)'
    shadow-popover: 'rgba(15,31,61,0.12)'
    shadow-elevated: 'rgba(15,31,61,0.10)'
    success: '#10b981'
    success-soft: '#d1fae5'
    warning: '#f59e0b'
    warning-soft: '#fef3c7'
    danger: '#ef4444'
    danger-soft: '#fee2e2'
    info: '#0070f3'
    info-soft: '#e7f0ff'

  dark:
    bg: '#0f1f3d'                      # signature deep navy canvas
    bg-pure: '#080f1f'                 # deepest navy modal/dialog
    bg-surface: '#1a2440'              # subtle surface band
    bg-promo: 'rgba(0, 112, 243, 0.18)' # tinted promo on dark
    surface: '#1a2440'                 # default dark card on navy
    surface-elevated: '#27314e'        # raised dark card
    surface-hover: '#27314e'
    surface-soft: '#1f2a4a'
    surface-strong: '#2f3a5e'
    text: '#ffffff'                    # primary body on navy
    text-strong: '#ffffff'
    text-muted: '#a4adc8'              # muted on dark
    text-soft: '#727a98'               # soft on dark
    text-disabled: '#525a78'
    text-on-brand: '#ffffff'
    text-link: '#3a91ff'               # lifted link blue on dark
    text-link-hover: '#5cabff'
    brand: '#0070f3'                   # action blue takes brand role on dark (navy IS the canvas)
    brand-hover: '#3a91ff'
    brand-soft: 'rgba(0, 112, 243, 0.18)'
    brand-deep: '#0058c2'
    accent-blue: '#3a91ff'
    accent-blue-hover: '#5cabff'
    accent-blue-active: '#0070f3'
    accent-blue-soft: 'rgba(58, 145, 255, 0.18)'
    accent-cyan: '#00d4ff'
    accent-purple: '#a78bfa'
    accent-green: '#34d399'
    accent-orange: '#fbbf24'
    accent-red: '#f87171'
    border: '#27314e'                  # border on dark surfaces
    border-soft: '#1a2440'
    border-strong: '#3f4a6e'
    border-focus: '#3a91ff'
    on-brand: '#ffffff'
    code-bg-light: '#1a1d29'           # code block on dark stays code-themed
    code-bg-dark: '#080f1f'
    code-text: '#e5e7eb'
    code-comment: '#7d839a'
    code-keyword: '#c084fc'
    code-string: '#86efac'
    code-function: '#60a5fa'
    code-variable: '#fcd34d'
    code-punct: '#a4adc8'
    code-number: '#fb923c'
    shadow-card: 'rgba(0,0,0,0.40)'
    shadow-modal: 'rgba(0,0,0,0.60)'
    shadow-popover: 'rgba(0,0,0,0.50)'
    shadow-elevated: 'rgba(0,0,0,0.45)'
    success: '#34d399'
    success-soft: 'rgba(52, 211, 153, 0.18)'
    warning: '#fbbf24'
    warning-soft: 'rgba(251, 191, 36, 0.18)'
    danger: '#f87171'
    danger-soft: 'rgba(248, 113, 113, 0.18)'
    info: '#3a91ff'
    info-soft: 'rgba(58, 145, 255, 0.18)'

typography:
  display:
    family: '"Inter", "Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700, 800]
    opentype-features: ['kern', 'liga', 'cv01', 'cv02', 'cv11', 'ss03']
  body:
    family: '"Inter", "Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"JetBrains Mono", "Fira Code", "SF Mono", "Roboto Mono", Menlo, Consolas, monospace'
    weights: [400, 500, 700]
  scale:
    display-hero:    { size: 64, weight: 700, lineHeight: 1.05, tracking: '-0.03em', family: display, opentype: ['cv11','ss03'], notes: 'Marketing landing — "The AI Acceleration Cloud"' }
    display-xl:      { size: 48, weight: 700, lineHeight: 1.1,  tracking: '-0.025em', family: display, notes: 'Section hero, model page' }
    display-lg:      { size: 36, weight: 700, lineHeight: 1.15, tracking: '-0.02em', family: display, notes: 'Pricing page title, model card title' }
    display-md:      { size: 28, weight: 700, lineHeight: 1.2,  tracking: '-0.015em', family: display, notes: 'Section heading' }
    display-sm:      { size: 22, weight: 600, lineHeight: 1.3,  tracking: '-0.01em', family: display, notes: 'Subsection heading' }
    title-lg:        { size: 18, weight: 600, lineHeight: 1.4,  tracking: '-0.005em', family: display, notes: 'Card title, model name' }
    title-md:        { size: 16, weight: 600, lineHeight: 1.4,  tracking: '0',       family: display, notes: 'List item title' }
    title-sm:        { size: 14, weight: 600, lineHeight: 1.4,  tracking: '0',       family: display, notes: 'Sidebar nav, dropdown header' }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',       family: body, notes: 'Lead paragraph, hero subtitle' }
    body-md:         { size: 16, weight: 400, lineHeight: 1.6,  tracking: '0',       family: body, notes: 'Default body, description' }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body, notes: 'Secondary metadata, "Latency · 35 ms"' }
    button-lg:       { size: 16, weight: 600, lineHeight: 1.0,  tracking: '0',       family: display, notes: '"Start building" CTA' }
    button-md:       { size: 14, weight: 600, lineHeight: 1.0,  tracking: '0',       family: body, notes: 'Default button label' }
    eyebrow:         { size: 12, weight: 600, lineHeight: 1.0,  tracking: '0.08em',  family: body, notes: 'Uppercase eyebrow "DEDICATED ENDPOINTS"' }
    caption:         { size: 13, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body, notes: 'Disclosures, fine print' }
    metadata:        { size: 13, weight: 500, lineHeight: 1.3,  tracking: '0',       family: body, opentype: ['tnum','zero'], notes: 'Latency, throughput, token rate' }
    badge:           { size: 11, weight: 600, lineHeight: 1.0,  tracking: '0.04em',  family: body, notes: '"NEW", "FAST", "OPEN-SOURCE" tags' }
    code-inline:     { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',       family: mono, notes: 'Inline code in prose — `together.complete()`' }
    code-block:      { size: 14, weight: 400, lineHeight: 1.7,  tracking: '0',       family: mono, opentype: ['liga'], notes: 'Code block — Python / TypeScript samples' }
    price:           { size: 24, weight: 700, lineHeight: 1.2,  tracking: '-0.01em', family: display, opentype: ['tnum','zero'], notes: 'Pricing display "$0.30/M"' }
    benchmark:       { size: 14, weight: 500, lineHeight: 1.3,  tracking: '0',       family: body, opentype: ['tnum','zero'], notes: 'Latency / throughput numerics' }

radius:
  micro: 2          # tiny indicator
  sm: 4             # input, small button, badge
  md: 6             # tag, chip
  lg: 8             # card, button — Together's workhorse
  xl: 12            # large card, modal
  pill: 9999        # status pill, model badge

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160]

layout:
  page-width: 1440
  content-max: 1280
  prose-width: 720
  header-height: 64
  sidebar-width: 280       # docs sidebar
  card-min: 280
  card-max: 360
  hero-min-height: 600

components:
  button-primary:
    bg: '#0070f3'
    color: '#ffffff'
    radius: 8
    padding: '12px 20px'
    height: 44
    font: button-lg
    weight: 600
    use: '"Start building" / "Sign up free" — primary CTA, action blue.'
  button-primary-hover:
    bg: '#0058c2'
    color: '#ffffff'
    use: 'Hover — darker blue shift, no shadow lift.'
  button-primary-dark:
    bg: '#ffffff'
    color: '#0f1f3d'
    radius: 8
    padding: '12px 20px'
    height: 44
    use: 'White-on-dark variant — appears on the dark hero/footer surfaces.'
  button-secondary:
    bg: '#ffffff'
    color: '#0f1f3d'
    border: '1px solid #cbd0d8'
    radius: 8
    padding: '12px 20px'
    height: 44
    use: '"Read docs" outlined neutral secondary.'
  button-secondary-dark:
    bg: 'transparent'
    color: '#ffffff'
    border: '1px solid rgba(255,255,255,0.2)'
    radius: 8
    padding: '12px 20px'
    height: 44
    use: 'Outlined secondary on dark navy surface.'
  button-tertiary-text:
    bg: 'transparent'
    color: '#0070f3'
    radius: 4
    padding: '8px 12px'
    use: 'Inline text link with arrow glyph "→".'
  button-icon:
    bg: 'transparent'
    color: '#5a627a'
    radius: 4
    height: 32
    width: 32
    use: 'Copy code, share, more-options icon button.'
  button-copy:
    bg: 'rgba(255,255,255,0.05)'
    color: '#a4adc8'
    border: '1px solid rgba(255,255,255,0.1)'
    radius: 6
    padding: '6px 10px'
    height: 32
    use: 'Code-block copy button — top-right of every code sample.'
  card-model:
    bg: '#ffffff'
    color: '#0f1f3d'
    radius: 8
    padding: 20
    border: '1px solid #e5e7eb'
    shadow: 'none'
    use: 'Default model card — provider logo, model name 18px / 600, parameter count tag, latency + throughput metadata, price display, "Try" CTA.'
  card-model-hover:
    bg: '#ffffff'
    color: '#0f1f3d'
    radius: 8
    border: '1px solid #cbd0d8'
    shadow: '0 2px 8px rgba(15,31,61,0.06)'
    use: 'Hover lift — border darkens, light shadow appears.'
  card-feature:
    bg: '#ffffff'
    color: '#0f1f3d'
    radius: 12
    padding: 32
    border: '1px solid #e5e7eb'
    use: '"Inference / Fine-tuning / Dedicated endpoints" feature card — icon top, 22px / 600 title, 16px / 400 description, "Learn more →" tertiary link.'
  card-pricing:
    bg: '#ffffff'
    color: '#0f1f3d'
    radius: 12
    padding: 32
    border: '1px solid #e5e7eb'
    use: 'Pricing tier card — tier name 18px / 600 eyebrow, 36px / 700 price display "$0.30", 14px / 400 muted "/ million tokens", feature list, primary CTA.'
  card-benchmark:
    bg: '#0f1f3d'
    color: '#ffffff'
    radius: 12
    padding: 32
    use: '"3.4× faster than vLLM" benchmark callout card on dark navy bg with cyan accent gradient.'
  card-code-block:
    bg: '#1a1d29'
    color: '#e5e7eb'
    radius: 8
    padding: 20
    use: 'Code-block surface on light pages — JetBrains Mono 14px / 400, syntax-highlighted via Prism or Shiki.'
  badge-new:
    bg: '#d1fae5'
    color: '#065f46'
    radius: 4
    padding: '2px 8px'
    use: '"NEW" green tag for newly-launched models.'
  badge-fast:
    bg: '#e7f0ff'
    color: '#0058c2'
    radius: 4
    padding: '2px 8px'
    use: '"FAST" blue tag for low-latency models.'
  badge-open:
    bg: '#f3eaff'
    color: '#5b21b6'
    radius: 4
    padding: '2px 8px'
    use: '"OPEN-SOURCE" purple tag for open-weights models.'
  badge-popular:
    bg: '#fef3c7'
    color: '#92400e'
    radius: 4
    padding: '2px 8px'
    use: '"POPULAR" orange tag.'
  pill-status:
    bg: '#d1fae5'
    color: '#065f46'
    border: '1px solid #6ee7b7'
    radius: 9999
    padding: '4px 10px'
    use: '"All systems operational" status pill in nav — green dot + tnum-numerals.'
  pill-model-tag:
    bg: '#f4f5f7'
    color: '#0f1f3d'
    radius: 9999
    padding: '2px 10px'
    use: '"70B" parameter count or "Llama 3.3" model-family tag — pill with mono-leaning numeric.'
  input-search:
    bg: '#ffffff'
    color: '#0f1f3d'
    radius: 8
    height: 44
    padding: '10px 16px 10px 40px'
    border: '1px solid #cbd0d8'
    use: 'Top-bar search — magnifying-glass icon left, "Search docs / models" placeholder.'
  input-text:
    bg: '#ffffff'
    color: '#0f1f3d'
    radius: 8
    border: '1px solid #cbd0d8'
    height: 44
    padding: '10px 16px'
    use: 'Form input — sign-in, profile, API key fields.'
  filter-chip:
    bg: '#ffffff'
    color: '#0f1f3d'
    border: '1px solid #cbd0d8'
    radius: 9999
    padding: '6px 14px'
    use: 'Model filter pill — "Chat / Code / Vision / Embedding".'
  filter-chip-active:
    bg: '#0f1f3d'
    color: '#ffffff'
    border: '1px solid #0f1f3d'
    radius: 9999
    use: 'Applied filter — inverts to navy.'
  table-pricing:
    bg: '#ffffff'
    color: '#0f1f3d'
    border: '1px solid #e5e7eb'
    use: 'Model pricing table — sticky header, model name col, parameter count col, input price col, output price col, latency col. All numerics tnum.'
  nav-top-bar:
    bg: 'rgba(250,250,250,0.85)'
    color: '#0f1f3d'
    height: 64
    backdrop: 'blur(12px)'
    border-bottom: '1px solid #e5e7eb'
    use: 'Sticky top nav with backdrop blur — Together logo left, "Models / Solutions / Pricing / Docs / Blog" centre, "Sign in / Sign up free" right.'
  nav-top-bar-dark:
    bg: 'rgba(15,31,61,0.85)'
    color: '#ffffff'
    backdrop: 'blur(12px)'
    use: 'Dark variant on dark hero pages — same layout, navy bg.'
  sidebar-docs:
    bg: '#fafafa'
    color: '#0f1f3d'
    width: 280
    border-right: '1px solid #e5e7eb'
    use: 'Docs sidebar — collapsible chapter groups, current-page highlight in soft-blue `#e7f0ff`.'
  modal-dialog:
    bg: '#ffffff'
    color: '#0f1f3d'
    radius: 12
    shadow: '0 16px 48px rgba(15,31,61,0.2)'
    padding: 32
    use: 'Sign-up / preview / API key modal.'
  toast:
    bg: '#0f1f3d'
    color: '#ffffff'
    radius: 8
    padding: '12px 16px'
    use: 'Confirmation toast — "Code copied" — navy on white inversion.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-out: 'cubic-bezier(0, 0, 0.2, 1)'
  ease-spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  duration-fast: 150
  duration-standard: 200
  duration-slow: 300
  reduced-motion: 'respects prefers-reduced-motion: hover transitions collapse to instant, code-block-copy confirmation pulse becomes opacity-only, gradient hero animation pauses.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  none: 'none'
  card-rest: 'none'
  card-hover: '0 2px 8px rgba(15,31,61,0.06)'
  elevated: '0 4px 12px rgba(15,31,61,0.10)'
  popover: '0 8px 24px rgba(15,31,61,0.12)'
  modal: '0 16px 48px rgba(15,31,61,0.20)'
  ring: '0 0 0 3px rgba(0,112,243,0.4)'

accessibility:
  contrast-text-on-bg: 14.6              # #0f1f3d on #fafafa — AAA
  contrast-text-muted-on-bg: 5.7         # #5a627a on #fafafa — AA at body
  contrast-text-on-brand: 12.6           # white on #0f1f3d — AAA at all sizes
  contrast-text-on-blue: 4.6             # white on #0070f3 — AA at body
  contrast-link-on-bg: 4.6               # #0070f3 on white — AA at body
  contrast-text-on-dark: 15.6            # white on #080f1f — AAA
  focus-ring: '3px solid rgba(0,112,243,0.4) with 2px offset'
  reduced-motion-honored: true
  keyboard-nav: 'full keyboard navigation across docs sidebar, model browser, pricing table'

dark-mode: optional        # Brand has a partial dark mode for hero/footer surfaces; no full-page light/dark toggle yet
---

## 1. Visual Theme & Atmosphere

Together AI's site is the cleanest infrastructure-platform aesthetic in the LLM-cloud category. The canvas is near-white `#fafafa` (a faint cool tilt off pure white), the type is Inter pulling display through body in the canonical developer-platform register, and the chromatic event of the page is `#0070f3` — Vercel-blue exactly, the by-now-standard "this is the call to action" colour for any modern dev-tool surface. The brand surface and footer flip to deep navy `#0f1f3d` — the colour the wordmark is rendered in — and the hero on key marketing pages uses the navy as a full-bleed dark band with cyan-blue gradient accents. Where Anthropic leans into editorial-warmth and OpenAI leans into chat-product-as-product, Together commits hard to **infrastructure-platform**: this is the cloud where you run open models, and the homepage is benchmarks, latency charts, model pricing tables, and code samples.

The signature is the model card with embedded benchmarks. Walk into the Together model browser and you'll see a 4-across grid of model cards (Llama 3.3 70B, DeepSeek V3, Qwen 2.5 72B, FLUX.1 [pro], Mixtral 8x22B, Stable Diffusion 3.5) — each card a `8px`-radius white surface with a 1px hairline border, a provider logo top-left (Meta, DeepSeek, Alibaba, Black Forest Labs), the model name in 18px / 600 Inter, a parameter count pill ("70B"), three small badges ("FAST" / "OPEN-SOURCE" / "NEW"), then a metadata block with latency in tabular numerics ("Latency · 35 ms · Throughput 142 tok/s") and a price display ("$0.30 / M input · $0.30 / M output"), and a "Try" tertiary text link with right-arrow glyph. This is the workhorse component, and it's what every visitor sees within the first viewport: a sortable, filterable matrix of every open-weights model the cloud serves, with prices and benchmarks on the surface — no sales-call gating, no demo-request friction.

Code blocks are first-class layout citizens. Every model has a code sample inline showing the exact `together.chat.completions.create()` call to invoke it, rendered in JetBrains Mono 14px / 400 / 1.7 line-height on a `#1a1d29` deep-navy background with full Prism / Shiki syntax highlighting (purple for keywords, blue for function names, green for strings, yellow for variables, orange for numbers, soft grey for comments). The code block has a "Copy" button top-right that flashes a "Copied" confirmation when clicked. The brand treats code as the primary content type — articles, model docs, pricing pages, blog posts all anchor on at-least-one runnable code sample. This is the convention Stripe established in 2012 and Vercel popularized; Together executes it at maximum density.

Inter — Rasmus Andersson's open-source workhorse from 2017 — sets the entire site. Display sizes go up to 64px / 700 with `-0.03em` tracking, with Inter's optional stylistic alternates `cv11` (single-storey alternate `a`) and `ss03` (curved-tail `r`) enabled in display contexts to give the headlines a subtly distinctive flavour. Body is 16px / 400 / 1.6 line-height — generous for dense technical reading. JetBrains Mono carries every code block at 14px / 400 / 1.7, with `liga` enabled for the developer ligatures (`->`, `=>`, `!=`, `===`, `>=`, `<=`, `||`, `&&`, `==`). Two families, one register: pure developer-platform.

Pricing is the brand's secret weapon. The pricing page is a wide table with 5 columns (Model · Parameters · Input · Output · Latency) and 30+ rows, every cell aligned via tabular numerals (`tnum` + `zero` to disambiguate `0` from `O`). Prices are rendered as `$0.30/M` ("per million tokens") in 16px / 600 — small enough to fit dense rows, prominent enough to scan. The wide table is sortable and filterable. On a key marketing page, a "Compare to OpenAI / Anthropic" callout shows the per-million-token rate side-by-side, anchored on the open-source-models-are-cheaper argument. There are no discount stickers, no "save 50% with annual" — just the numbers.

Density is the third axis. Together's pages pack content. The homepage stacks: hero (with autoplaying gradient), a model-grid section showing 12+ models, a benchmarks section with 3 latency-vs-competitor charts, a code-sample band, a 6-up "Solutions" feature card grid, a pricing-table preview, a logos-of-customers band, and a footer. The argument is "we have a lot of capability and we're going to show it" — the developer-platform commitment to demonstrating range over selling vibe. Body line-height stays at 1.6 throughout for technical-reading comfort.

**Key Characteristics:**
- Near-white `#fafafa` canvas with `#ffffff` cards. Deep navy `#0f1f3d` for brand surfaces (footer, dark hero).
- Single confident `#0070f3` Vercel-blue for primary CTA, links, action colour.
- Inter pulling display through body — canonical developer-platform sans. Display weights up to 700 with `-0.03em` tracking.
- JetBrains Mono for code blocks at 14px / 400 / 1.7 line-height — developer ligatures enabled.
- Code blocks as first-class content — `#1a1d29` deep-navy bg with full syntax highlighting (Prism/Shiki palette).
- Model cards as the workhorse: 4-across grid, provider logo + model name + parameter pill + 3 badges + tabular latency/price metadata + "Try" CTA.
- Pricing table as the conversion surface — 5-column wide table with sortable rows, all numerics tnum + zero.
- Tabular numerals (`tnum`, `zero`) on every benchmark, latency, price, throughput — column alignment is brand-critical.
- Status pill in nav — "All systems operational" with green dot, signals operational transparency.
- 8px workhorse radius on cards and buttons; 9999px on status pills and model-family tags.
- Light-only canvas with deep-navy brand surfaces — partial dark mode (hero / footer) but no full-page light/dark toggle.
- 1px `#e5e7eb` border at rest on cards; light hover shadow `0 2px 8px rgba(15,31,61,0.06)` plus border darken to `#cbd0d8`.
- Backdrop-blurred translucent nav (Vercel/Linear convention) — `rgba(250,250,250,0.85)` + `blur(12px)`.

## 2. Color Palette & Roles

### Primary
- **Off-White Canvas** (`#fafafa`): The defining canvas. Faint cool tilt off pure white — the developer-platform default warmth.
- **Pure White Card** (`#ffffff`): Card surface, modal floor, primary content surface.
- **Surface Band** (`#f4f5f7`): Subtle alt section bg.
- **Display Navy** (`#0f1f3d`): Primary body text — same colour as the brand surface, creating tonal harmony.
- **Action Blue** (`#0070f3`): The brand's CTA blue. Identical to Vercel-blue and Stripe-purple-by-association — the canonical dev-platform action colour.

### Brand & Dark
- **Together Navy** (`#0f1f3d`): The brand's primary surface colour. Footer, dark hero, code-block bg.
- **Brand Hover** (`#1a2d52`): Nav-link hover lift on dark surfaces.
- **Brand Soft** (`#27314e`): Lifted dark card on navy.
- **Brand Deep** (`#080f1f`): Deepest navy, used in code-block bg on dark surfaces and footer-deep band.
- **Surface Dark** (`#1a2440`): Card surface on navy hero band.
- **Surface Dark Elevated** (`#27314e`): Raised card variant on dark.

### Accent
- **Cyan** (`#00d4ff`): Gradient stop for hero animations — paired with `#0070f3` to create the "AI cloud" gradient.
- **Purple** (`#7c3aed`): Secondary accent — open-source model badges, secondary CTA on rare surfaces.
- **Green** (`#10b981`): Success, "All systems operational" status pill, "NEW" model tag.
- **Orange** (`#f59e0b`): Warning, "POPULAR" model tag.
- **Red** (`#ef4444`): Error, rate-limit exceeded.

### Interactive
- **CTA Blue** (`#0070f3`): Primary action button.
- **Link Blue** (`#0070f3`): Inline links — same hue as CTA; brand discipline.
- **Outlined Neutral** (`1px solid #cbd0d8` on white): Secondary action.
- **Outlined White on Dark** (`1px solid rgba(255,255,255,0.2)` on navy): Secondary on dark hero.
- **Filter Chip Active** (`#0f1f3d` bg + white text): Inverts to navy.
- **Disabled** (`#a8aebd` text on `#f4f5f7` bg): Non-interactive control.

### Neutral Scale
- **Display Navy** (`#0f1f3d`): Body text — creates tonal harmony with brand surface.
- **Strong Black** (`#06091a`): Hero display only — slightly darker than body.
- **Muted** (`#5a627a`): Secondary metadata — "Latency · 35 ms", "Updated April 2024".
- **Soft** (`#7d839a`): Tertiary captions, breadcrumb text.
- **Disabled** (`#a8aebd`): Inactive form labels, disabled controls.
- **Border Default** (`#e5e7eb`): Card hairlines, dividers.
- **Border Soft** (`#f0f1f3`): Subtle table-row dividers.
- **Border Strong** (`#cbd0d8`): Focused field outline, hovered card border.
- **Text Dark Muted** (`#a4adc8`): Muted text on dark surfaces.
- **Text Dark Soft** (`#727a98`): Soft caption on dark.

### Surface & Borders
- **Surface Default** (`#ffffff`): Card.
- **Surface Hover** (`#f4f5f7`): Nav hover, list-row hover.
- **Surface Soft** (`#f9fafb`): Subtle secondary surface.
- **Surface Strong** (`#e5e7eb`): Divider band.
- **Surface Dark** (`#1a2440`): Dark card on navy hero.
- **Surface Dark Elevated** (`#27314e`): Raised dark card.
- **Promo Surface** (`#e7f0ff`): Soft-blue "Just announced" band.

### Code Syntax Palette (Prism / Shiki on `#1a1d29` bg)
- **Default text** (`#e5e7eb`): identifiers, default code text.
- **Comment** (`#7d839a`): `// comments`, `/* block comments */`.
- **Keyword** (`#c084fc`): `const`, `function`, `class`, `import`, `from`, `async`, `await`.
- **String** (`#86efac`): `"string literal"`, `'string'`.
- **Function name** (`#60a5fa`): `together.chat.completions.create()`.
- **Variable** (`#fcd34d`): variable identifiers in some themes.
- **Punctuation** (`#a4adc8`): `;`, `{`, `}`, `[`, `]`, `(`, `)`.
- **Number** (`#fb923c`): numeric literals, hex codes.

### Shadow Colors
- **Card Rest**: No shadow — Together's cards rely on the 1px `#e5e7eb` border at rest.
- **Card Hover** (`rgba(15,31,61,0.06)`): Hover-state shadow at `0 2px 8px`. Border also darkens to `#cbd0d8`.
- **Elevated** (`rgba(15,31,61,0.10)`): Elevated card surface, not hover.
- **Popover Shadow** (`rgba(15,31,61,0.12)`): Dropdown, tooltip.
- **Modal Shadow** (`rgba(15,31,61,0.20)`): Dialog floor.

### Semantic
- **Success** (`#10b981` text on `#d1fae5` soft bg): API call succeeded, deploy complete, "NEW" model tag.
- **Warning** (`#f59e0b` text on `#fef3c7` soft bg): Rate-limit warning, "POPULAR" model tag.
- **Danger** (`#ef4444` text on `#fee2e2` soft bg): Form validation error, payment failure, rate-limit exceeded.
- **Info** (`#0070f3` text on `#e7f0ff` soft bg): Reuses brand blue. "FAST" model tag.

## 3. Typography Rules

### Font Family
- **Primary**: `"Inter"` (or `"Inter var"` variable font when supported) — Rasmus Andersson's open-source humanist sans, version 4.0+. Fallback chain: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", Helvetica, Arial, sans-serif`.
- **Mono**: `"JetBrains Mono"` (open-source from JetBrains, optimized for code reading with ligatures). Fallback chain: `"Fira Code", "SF Mono", "Roboto Mono", Menlo, Consolas, monospace`.
- **OpenType Features**: `kern` and `liga` enabled site-wide. `cv01` (alt. `g`), `cv02` (alt. `l`), `cv11` (alt. `a` single-storey), `ss03` (curved-tail `r`) enabled in display contexts. `tnum` and `zero` enabled on benchmarks, prices, latency, throughput, and any tabular numeric. `liga` (developer ligatures) enabled in JetBrains Mono code blocks.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| Display Hero | Inter | 64px | 700 | 1.05 | -0.03em | kern,liga,cv11,ss03 | Marketing landing — "The AI Acceleration Cloud" |
| Display XL | Inter | 48px | 700 | 1.1 | -0.025em | kern,liga | Section hero, model page |
| Display LG | Inter | 36px | 700 | 1.15 | -0.02em | kern,liga | Pricing page title, model card title |
| Display MD | Inter | 28px | 700 | 1.2 | -0.015em | kern,liga | Section heading |
| Display SM | Inter | 22px | 600 | 1.3 | -0.01em | kern,liga | Subsection heading |
| Title LG | Inter | 18px | 600 | 1.4 | -0.005em | kern,liga | Card title, model name |
| Title MD | Inter | 16px | 600 | 1.4 | 0 | kern,liga | List item title |
| Title SM | Inter | 14px | 600 | 1.4 | 0 | kern,liga | Sidebar nav, dropdown header |
| Body LG | Inter | 18px | 400 | 1.55 | 0 | kern,liga | Lead paragraph, hero subtitle |
| Body MD | Inter | 16px | 400 | 1.6 | 0 | kern,liga | Default body, description |
| Body SM | Inter | 14px | 400 | 1.5 | 0 | kern,liga | Secondary metadata |
| Button LG | Inter | 16px | 600 | 1.0 | 0 | kern,liga | "Start building" CTA |
| Button MD | Inter | 14px | 600 | 1.0 | 0 | kern,liga | Default button label |
| Eyebrow | Inter | 12px | 600 | 1.0 | 0.08em | kern,liga | Uppercase "DEDICATED ENDPOINTS" |
| Caption | Inter | 13px | 400 | 1.5 | 0 | kern,liga | Disclosures, fine print |
| Metadata | Inter | 13px | 500 | 1.3 | 0 | tnum,zero | Latency, throughput, token rate |
| Badge | Inter | 11px | 600 | 1.0 | 0.04em | kern,liga | "NEW", "FAST", "OPEN-SOURCE" |
| Code Inline | JB Mono | 14px | 400 | 1.5 | 0 | -- | Inline code in prose |
| Code Block | JB Mono | 14px | 400 | 1.7 | 0 | liga | Code block — ligatures on |
| Price | Inter | 24px | 700 | 1.2 | -0.01em | tnum,zero | "$0.30/M" pricing display |
| Benchmark | Inter | 14px | 500 | 1.3 | 0 | tnum,zero | Latency / throughput numerics |

### Principles
- **Two families, two registers.** Inter for everything text. JetBrains Mono for everything code. The duet is the developer-platform convention.
- **Aggressive negative tracking on display.** Display sizes use `-0.025em` to `-0.03em`. Inter at large sizes wants negative tracking; Together commits to it.
- **Inter stylistic alternates in display.** `cv11` (single-storey `a`) and `ss03` (curved-tail `r`) give headlines a slightly distinctive Inter cut. Body keeps the default forms.
- **JetBrains Mono ligatures enabled.** Developer ligatures (`->`, `=>`, `!=`, `===`, `>=`, `<=`, `||`, `&&`, `==`) appear in code blocks. The convention signals "we are infrastructure for engineers."
- **Tabular + zero on numerics.** Every benchmark, latency, price, throughput uses `tnum` (tabular numbers) + `zero` (slashed zero) so columns align and `0` doesn't read as `O`. Critical for pricing tables.
- **0.08em tracking on eyebrows.** Uppercase eyebrows ("DEDICATED ENDPOINTS", "INFERENCE", "FINE-TUNING") use 12px / 600 / `0.08em` — the developer-platform convention.
- **0.04em tracking on badges.** Tiny 11px badges ("NEW", "FAST", "OPEN-SOURCE") use 600 weight + slight positive tracking.
- **1.6 body line-height for technical reading.** Generous breathing room — developers read densely, and this brand is comfortable with that density.
- **600 (semibold) for titles, not 500.** Titles use 600 weight to push the type toward "engineering documentation" register rather than "magazine article" register.
- **Code at 14px / 1.7.** JetBrains Mono inline code stays at 14px to fit prose; block code grows line-height to 1.7 for readability.

## 4. Component Stylings

### Buttons

**Primary (Action Blue)**
- Background: `#0070f3`. Text: `#ffffff`. Radius: `8px`. Padding: `12px 20px`. Height: `44px`. Font: Inter 16px / 600.
- Hover: `#0058c2`. No shadow lift, no scale.
- Active: `#003e8c`.
- Use: "Start building", "Sign up free", "Try this model". One per viewport. Action blue is rationed.

**Primary (White on Dark)**
- Background: `#ffffff`. Text: `#0f1f3d`. Radius: `8px`. Padding: `12px 20px`. Height: `44px`.
- Hover: bg `rgba(255,255,255,0.9)`.
- Use: Primary CTA on dark navy hero/footer surfaces.

**Secondary (Outlined Neutral)**
- Background: `#ffffff`. Text: `#0f1f3d`. Border: `1px solid #cbd0d8`. Radius: `8px`. Padding: `12px 20px`.
- Hover: bg `#f4f5f7`.
- Use: "Read docs", "View pricing".

**Secondary (Outlined White on Dark)**
- Background: `transparent`. Text: `#ffffff`. Border: `1px solid rgba(255,255,255,0.2)`. Radius: `8px`.
- Hover: bg `rgba(255,255,255,0.1)`.
- Use: Secondary CTA on dark hero.

**Tertiary Text (with Arrow)**
- Background: `transparent`. Color: `#0070f3`. Padding: `8px 12px`. Font: 14px / 600.
- Format: "Learn more →" with right-arrow glyph.
- Hover: arrow translates 2px right.
- Use: Inline action, card-foot link.

**Code Copy Button**
- Background: `rgba(255,255,255,0.05)`. Color: `#a4adc8`. Border: `1px solid rgba(255,255,255,0.1)`. Radius: `6px`. Height: `32px`.
- Sits absolute top-right inside every code-block.
- On click: text swaps from "Copy" to "Copied" with `#10b981` green for 1500ms.

### Cards & Tiles

**Model Card**
- Background: `#ffffff`. Color: `#0f1f3d`. Radius: `8px`. Padding: `20px`. Border: `1px solid #e5e7eb`.
- Layout: provider logo top-left (24px square), model family pill top-right ("Llama 3.3"), 8px gap, 18px / 600 model name "Meta Llama 3.3 70B", 4px gap, 14px / 400 muted description (max 2 lines), 12px gap, 3 small badges in a row ("FAST", "OPEN-SOURCE", "NEW"), 16px gap, metadata row "Latency · 35 ms · Throughput 142 tok/s" in 13px / 500 tnum, 4px gap, price "$0.30 / M" in 16px / 600 tnum, 16px gap, "Try this model →" tertiary blue link.
- Rest shadow: none.
- Use: Default model in browse grid.

**Model Card (Hover)**
- Border darkens to `#cbd0d8`. Light shadow `0 2px 8px rgba(15,31,61,0.06)` appears.
- No scale, no translate.

**Feature Card**
- Background: `#ffffff`. Color: `#0f1f3d`. Radius: `12px`. Padding: `32px`. Border: `1px solid #e5e7eb`.
- Layout: 32px icon top, 16px gap, 22px / 600 title "Inference / Fine-tuning / Dedicated endpoints", 8px gap, 16px / 400 description (max 4 lines), 16px gap, "Learn more →" link.
- Use: Solutions section feature grid.

**Pricing Tier Card**
- Background: `#ffffff`. Color: `#0f1f3d`. Radius: `12px`. Padding: `32px`. Border: `1px solid #e5e7eb`.
- Layout: tier name uppercase eyebrow "PAY AS YOU GO" 12px / 600 / `0.08em`, 12px gap, 36px / 700 price "$0.30" with 14px / 400 muted "/ million tokens" inline, 24px gap, feature list (5–8 items with check icons), 24px gap, primary blue CTA.
- Highlighted-tier variant: 2px navy border, "MOST POPULAR" navy ribbon top-right.
- Use: Pricing page tier comparison.

**Benchmark Card (Dark)**
- Background: `#0f1f3d`. Color: `#ffffff`. Radius: `12px`. Padding: `32px`.
- Layout: 14px / 600 cyan eyebrow "BENCHMARK", 8px gap, 36px / 700 white headline "3.4× faster than vLLM", 16px gap, latency chart, 16px gap, "Read the benchmark →" cyan link.
- Use: Performance-claims section.

**Code-Block Card**
- Background: `#1a1d29`. Color: `#e5e7eb`. Radius: `8px`. Padding: `20px`.
- Layout: language tag top-left ("python" / "typescript" / "curl" in 12px / 500 muted), copy button top-right, then JetBrains Mono 14px / 400 / 1.7 syntax-highlighted code.
- Optional file path eyebrow above: "// app/api/chat/route.ts" in 13px / 400 muted.

### Badges, Tags, Indicators

**NEW (Green)**
- Background: `#d1fae5`. Color: `#065f46`. Radius: `4px`. Padding: `2px 8px`. Font: 11px / 600 / `0.04em` uppercase.
- Use: Newly-launched models.

**FAST (Blue)**
- Background: `#e7f0ff`. Color: `#0058c2`. Radius: `4px`.
- Use: Low-latency models.

**OPEN-SOURCE (Purple)**
- Background: `#f3eaff`. Color: `#5b21b6`. Radius: `4px`.
- Use: Open-weights models.

**POPULAR (Orange)**
- Background: `#fef3c7`. Color: `#92400e`. Radius: `4px`.
- Use: Most-used models.

**Status Pill**
- Background: `#d1fae5`. Color: `#065f46`. Border: `1px solid #6ee7b7`. Radius: `9999px`. Padding: `4px 10px`. Font: 12px / 500.
- Format: green dot + "All systems operational".
- Use: Top of nav (or in footer) — operational transparency.

**Model Family Tag**
- Background: `#f4f5f7`. Color: `#0f1f3d`. Radius: `9999px`. Padding: `2px 10px`. Font: 12px / 500.
- Use: "Llama 3.3" or "70B" parameter tag inside model card.

### Inputs & Forms

**Search**
- Background: `#ffffff`. Color: `#0f1f3d`. Border: `1px solid #cbd0d8`. Radius: `8px`. Height: `44px`. Padding: `10px 16px 10px 40px`.
- Magnifying-glass icon left in `#5a627a`.
- Placeholder: "Search docs / models" with `⌘K` shortcut hint right.
- Focus: border `#0070f3`, ring `0 0 0 3px rgba(0,112,243,0.4)`.

**Text Input**
- Background: `#ffffff`. Color: `#0f1f3d`. Border: `1px solid #cbd0d8`. Radius: `8px`. Height: `44px`. Padding: `10px 16px`.
- Label sits above, 14px / 600 `#0f1f3d`. Hint below, 13px / 400 `#5a627a`.
- Focus: border `#0070f3`, ring `0 0 0 3px rgba(0,112,243,0.4)`.

**API Key Input (Mono)**
- Same as text input but font is JetBrains Mono 14px / 400 — for displaying API keys, model IDs, hex tokens.
- Reveal/hide eye icon right.

**Filter Chip**
- Default: bg `#ffffff`, color `#0f1f3d`, border `1px solid #cbd0d8`, radius `9999px`, padding `6px 14px`.
- Active: bg `#0f1f3d`, color `#ffffff`, border `#0f1f3d`. Inverts to navy.
- Use: Model filter — "Chat / Code / Vision / Embedding / Image".

### Navigation

**Top Bar (Sticky, Glass)**
- Background: `rgba(250,250,250,0.85)` with `backdrop-filter: blur(12px)`. Color: `#0f1f3d`. Border-bottom: `1px solid #e5e7eb`. Height: `64px`.
- Layout: Together logo left (T-mark + wordmark), nav links centre ("Models / Solutions / Pricing / Docs / Blog"), "Sign in" + primary blue "Sign up free" right.
- On dark hero pages: bg shifts to `rgba(15,31,61,0.85)` with white text.
- Mobile: collapses to hamburger + Sign-up CTA.

**Docs Sidebar**
- Background: `#fafafa`. Width: `280px`. Padding: `24px 16px`. Border-right: `1px solid #e5e7eb`.
- Collapsible chapter groups (Getting Started, Inference, Fine-tuning, Models, API Reference, Examples).
- Current page: bg `#e7f0ff`, text `#0070f3`, font weight 600.
- Sticky on scroll.

**Pricing Table**
- Background: `#ffffff`. Border: `1px solid #e5e7eb`. Radius: `12px`.
- Sticky header row, 5 columns (Model · Parameters · Input · Output · Latency).
- All numerics use `tnum` + `zero`. Sortable on click of header. Filterable by model family chip above table.

### Modals & Toasts

**Modal Dialog**
- Background: `#ffffff`. Color: `#0f1f3d`. Radius: `12px`. Padding: `32px`.
- Shadow: `0 16px 48px rgba(15,31,61,0.20)`.
- Backdrop: `rgba(15,31,61,0.5)`.
- Use: Sign-up, API-key generation, payment.

**Toast**
- Background: `#0f1f3d`. Color: `#ffffff`. Radius: `8px`. Padding: `12px 16px`.
- Use: "Code copied", "API key generated", "Settings saved" — bottom-right, auto-dismiss 3s.

## 5. Layout Principles

### Spacing System
- Base: 4px. Scale: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128 / 160.
- Card-to-card gap: 16px on desktop, 12px on tablet, 8px on mobile.
- Section gap (major modules): 96–128px.
- Grid gutter: 24px.
- Code-block to surrounding text: 24px.

### Grid & Container
- Page width: 1440px max.
- Content max within page: 1280px centred.
- Docs page: 280px sidebar + 720px prose-width content.
- Hero: full-bleed with content centred at 1280px, often dark navy with cyan-blue gradient.

### Whitespace Philosophy
Together is a content-density product disguised as a marketing site. Sections breathe at 96–128px, but within sections the layout packs: 4 model cards across at 16px gaps, pricing tables with 30+ rows, code blocks at 1.7 line-height. The hero gets 128px top/bottom — generous because that's the brand promise. Below the fold, density wins. Body line-height stays at 1.6 throughout for technical-reading comfort.

### Section Cadence
- Top bar (sticky, glass)
- Hero (full-bleed gradient, 64px display headline, 18px lead, "Start building" CTA + "Read docs" outlined)
- "Run any open-source model" model-grid section (12+ model cards in a 4-across responsive grid)
- Benchmarks band (3 latency-vs-vLLM charts on dark navy bg with cyan accent)
- Code-sample band — runnable Python / TypeScript / cURL samples in three tabs
- "Solutions" feature card grid (Inference / Fine-tuning / Dedicated endpoints / Open-source models / Image gen / RAG infrastructure)
- Pricing-table preview
- "Trusted by" customer logos (Anthropic, Pinterest, Salesforce, Zoom, etc. — desaturated to muted grey)
- Blog/docs CTA band
- Footer (5-column dark `#080f1f` band — Models / Solutions / Resources / Company / Legal)

Light/dark alternation: light canvas with periodic dark navy bands for benchmarks, code samples, and footer.

## 6. Shapes & Radius Scale

- **Micro** (`2px`): Tiny indicator dot.
- **Standard** (`4px`): Input, dropdown, badge, small button.
- **Comfortable** (`6px`): Tag chip, copy-button.
- **Relaxed** (`8px`): Card, button, code-block — the workhorse radius.
- **Featured** (`12px`): Feature card, pricing tier, modal.
- **Pill** (`9999px`): Status pill, model-family tag, filter chip.

The 8px workhorse + 12px featured pairing is the geometric signature. Pills are reserved for status and filter — never primary buttons. This places Together squarely in the modern-developer-platform tradition (Vercel, Linear, Stripe) where rounded-corner discipline signals "we are software, not retail."

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 (flat) | No shadow, no border | Section background, hero band |
| 1 (border) | `1px solid #e5e7eb` | Card rest, input field, divider |
| 2 (hover lift) | `0 2px 8px rgba(15,31,61,0.06)` + border darkens to `#cbd0d8` | Model card hover |
| 3 (elevated) | `0 4px 12px rgba(15,31,61,0.10)` | Persistently elevated card (rare) |
| 4 (popover) | `0 8px 24px rgba(15,31,61,0.12)` | Dropdown, tooltip, mega menu |
| 5 (modal) | `0 16px 48px rgba(15,31,61,0.20)` | Dialog, sign-up modal |

### Shadow Philosophy
Shadows are warm-grey-tinted (using the `#0f1f3d` navy as base, not neutral black). At rest, cards have no shadow — just the 1px `#e5e7eb` border. On hover, a subtle lift appears combined with a border darken — the dual cue (shadow + border) is more accessible than shadow-alone. Modals get the deepest shadow at 0.20 opacity. The brand never uses brand-tinted shadows in the blue or cyan range — accent colours stay on action and gradient hero, not on elevation.

## 8. Interaction & Motion

### Easing Curves
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — Material standard ease.
- **Out**: `cubic-bezier(0, 0, 0.2, 1)` — incoming elements.
- **Spring**: `cubic-bezier(0.34, 1.56, 0.64, 1)` — copy-button confirmation pulse, "Copied" feedback.

### Duration Buckets
- **Fast**: 150ms — colour shifts, hover transitions.
- **Standard**: 200ms — modal open, dropdown.
- **Slow**: 300ms — accordion expand, mega-menu reveal.

### Per-Component Recipes
- **Model card hover**: Border `#e5e7eb → #cbd0d8` + shadow `none → 0 2px 8px rgba(15,31,61,0.06)` over 200ms ease-standard. No scale.
- **Primary CTA hover**: Background `#0070f3 → #0058c2` over 150ms ease-standard.
- **Code copy**: Click "Copy" → text swaps to "Copied" with green over 150ms ease-spring; reverts after 1500ms.
- **Tertiary arrow link hover**: Arrow glyph translates 2px right over 200ms ease-out.
- **Hero gradient**: Subtle slow-loop (8s) gradient shift between `#0070f3` and `#00d4ff` on dark hero band. Pauses on `prefers-reduced-motion`.
- **Modal open**: 200ms ease-out, opacity `0 → 1` + scale `0.96 → 1`.
- **Toast in**: slide up 6px + opacity over 200ms; auto-dismiss after 3s.
- **Filter chip toggle**: bg + text + border swap together over 150ms.
- **Status pill green dot**: 2-second slow pulse `opacity 1 → 0.7 → 1`.

### Page Transitions
Together uses Next.js client-side routing. Page changes within the docs trigger a 100ms opacity fade. Marketing pages use full reload for SEO. Sidebar persists across docs page changes.

### Reduced Motion
`prefers-reduced-motion: reduce` collapses:
- Hover transitions → instant.
- Code-copy confirmation pulse → opacity-only.
- Hero gradient shift → static (single colour).
- Status-pill green-dot pulse → static.
- Modal scale-in → opacity-only.
- Toast slide → instant.

## 9. Accessibility & A11y

### Contrast Pairs
- Display Navy `#0f1f3d` on Off-white `#fafafa`: **14.6:1** — AAA at all sizes.
- Muted `#5a627a` on Off-white: **5.7:1** — AA at body sizes.
- White `#ffffff` on Action Blue `#0070f3`: **4.6:1** — AA at body. Used at 16px / 600 (large-text bracket).
- Action Blue `#0070f3` on White: **4.6:1** — AA at body. Inline links benefit from underline-on-hover for additional cue.
- White on Together Navy `#0f1f3d`: **12.6:1** — AAA.
- White on Brand Deep `#080f1f`: **15.6:1** — AAA.
- Disabled `#a8aebd` on White: **2.6:1** — fails AA, used for `aria-disabled` only.

### Focus Indicators
- Default focus: `3px solid rgba(0,112,243,0.4)` outline with `2px` offset.
- Form fields: border lifts to `#0070f3` on focus, plus the 3px ring outside.
- Tab order: top nav → search → main content top-to-bottom → docs sidebar → footer.

### ARIA Patterns
- Model cards: `role="article" aria-label="[Model name], [Parameter count], [Latency], price [Input]/[Output] per million tokens"`.
- Status pill: `role="status" aria-live="polite"` with text "All systems operational".
- Code blocks: `role="region" aria-label="Code sample, [language]"`. Copy button: `aria-label="Copy code"`.
- Pricing table: `role="table"` with proper `<caption>`, `<thead>`, `<tbody>`. Sortable headers: `aria-sort="ascending|descending|none"`.
- Modal: `role="dialog" aria-modal="true"` with focus trap.
- Filter chips: `role="button" aria-pressed="true|false"`.
- Search: `role="search"` with `aria-label="Search docs and models"`.

### Keyboard Navigation
- Tab: move forward through controls; Shift+Tab reverses.
- Enter / Space: activate focused button or card.
- Cmd-K / Ctrl-K: opens command palette / search.
- ESC: close modal, dropdown, command palette.
- Arrow keys: navigate within model grid (roving tabindex), move between sortable pricing-table rows.

### Screen Reader Hints
- Model cards' aria-label packs name + params + latency + price for fast scanning.
- Code blocks: `aria-label` includes language and a brief description.
- Status pill announces operational changes via `aria-live`.
- Pricing table: each cell has explicit `<th>` association via `headers` attribute.

### Reduced Motion
Honoured. See §8.

## 10. Responsive Behavior

### Breakpoints
| Token | Min | Use |
|-------|-----|-----|
| mobile | 0px | 1 model card per row, sidebar collapses |
| tablet | 640px | 2 cards per row, sidebar drawer |
| desktop | 1024px | 3 cards per row, sidebar visible |
| wide | 1280px | 4 cards per row |
| xl | 1536px | content max 1280px centred |

### Touch Targets
- 44×44 minimum on all interactive controls (Apple-aligned). Card tap targets fill the entire card body.
- Code-block copy button at 32×32 visual but 44×44 tap target via padding.

### Collapsing Strategy
- **Top nav**: collapses to hamburger + Sign-up CTA on `< 1024px`.
- **Docs sidebar**: collapses to drawer on `< 1024px`.
- **Model grid**: 4 → 3 → 2 → 1 across the breakpoint cascade.
- **Pricing table**: stacks columns vertically on mobile (each row becomes a card).
- **Hero**: 64px display scales 64 → 48 → 36 → 28 across breakpoints.

### Image Behavior
- Provider logos: SVG with `currentColor` for tint adjustability.
- Customer logos: SVG, desaturated to `#5a627a` muted grey.
- Hero gradient: rendered as canvas/WebGL or SVG-animated for performance.
- Benchmark charts: Recharts / D3 SVG, responsive width.

### Container Queries
Used on the docs sidebar — chapter group titles collapse to icon-only at narrow widths; on the model card — metadata row stacks 2-line on narrow widths.

## 11. Content & Voice

### Tone
Together's voice is **technically dense, comfortable with numbers, allergic to marketing copy that doesn't cite a source**. Marketing copy reads like a release note crossed with a benchmark report. Headlines ("The AI Acceleration Cloud", "Run any open-source model") set the stage; everything below is benchmarks, latencies, prices, and code samples. The brand never assumes the reader needs the basics explained; it does assume the reader can read a latency-vs-throughput chart. The voice is closer to AWS or Vercel than to OpenAI.

### Microcopy Patterns
- **Primary CTA**: "Start building", "Sign up free", "Try this model", "Get an API key".
- **Secondary CTA**: "Read docs", "View pricing", "See benchmarks".
- **Tertiary**: "Learn more →", "Compare →", "Read the benchmark →".
- **Confirmation toast**: "Code copied", "API key generated", "Settings saved".
- **Status**: "All systems operational" / "Degraded performance" / "Major outage".
- **Empty states**: "Run your first model. Generate an API key to begin."
- **Rate limit**: "You've hit your rate limit. Upgrade to Scale tier for higher throughput."
- **Error**: "Request failed. Check the API reference and try again."
- **Performance claim**: "3.4× faster than vLLM" (always with a "Read the benchmark →" link beside it).

### Empty States
- Empty model list: "No models match your filter. Clear filters or browse all models."
- Empty API keys: "You haven't generated an API key yet. Generate one to start building."
- Empty docs search: "No results for [query]. Try one of these:" + curated docs links.
- Rate-limit: "Rate limit hit. Upgrade your plan for higher throughput."

### CTA Verb Conventions
- "Start building" — primary onboarding verb.
- "Sign up free" — alternative primary, emphasizes free-tier availability.
- "Try" — model-card-level CTA. "Try this model".
- "Get an API key" — generate-credential CTA.
- "Read" — docs / blog. "Read docs", "Read the benchmark", "Read the changelog".
- "Run" — execute action. "Run inference", "Run a benchmark".
- "Compare" — competitive callout. "Compare to OpenAI".
- "Deploy" — fine-tuned model deploy verb.

The brand explicitly avoids: "Buy", "Add to cart", "Subscribe" (most actions are pay-as-you-go API), "Learn" (replaced with "Read docs"), "Click here", "Free trial" (replaced with "Sign up free" — free tier is permanent, not trial).

## 12. Dark Mode & Theming

Together has a **partial dark mode** — the brand surface (`#0f1f3d` navy) appears as a full-bleed dark band on the hero of marketing pages, the footer, and benchmark callouts. Code blocks render dark by default on light pages. But there's no full-page light/dark toggle yet; the canvas stays `#fafafa` near-white throughout the site.

If a user's system prefers dark mode, the docs site flips to a full dark theme (canvas `#080f1f`, body text `#e5e7eb`, action blue brightens to `#3b82f6` for AAA contrast, navy cards lift to `#1a2440`). The marketing site does not currently respect `prefers-color-scheme`.

### Dark Surface Treatment (Hero / Footer / Benchmark Bands)
When a section ships with `#0f1f3d` navy bg:
- Body text: `#ffffff` or `#a4adc8` muted.
- Display: same Inter scale.
- Borders: `#27314e` for card hairlines.
- Buttons: white-on-dark primary (`#ffffff` bg + `#0f1f3d` text) or outlined-white secondary.
- Code blocks deepen further to `#080f1f`.
- Cyan accent `#00d4ff` becomes the active hue (replaces blue's role on dark).

## 13. Lineage & Influences

Together AI's visual lineage is three-streamed.

**The modern developer-platform aesthetic.** Together launched in 2022 and adopted the visual language Stripe pioneered in 2012, Vercel codified in 2019, and Linear refined through 2021–2024: confident single-blue action colour (`#0070f3` is literally Vercel-blue), Inter for everything, JetBrains Mono for code, code blocks as first-class content, pricing tables with tabular numerics, glass nav with backdrop blur, light canvas with dark hero accents. The convention is so well-established that any deviation reads as off-brand for the category — and Together commits fully to the genre rather than trying to differentiate within it.

**The cloud-infrastructure conventions.** AWS (light grey + orange accent), Vercel (white + blue), Cloudflare (white + orange), Fly.io (light + purple) all share a layout grammar: model/service cards in a grid, pricing tables, code samples, status pages with operational pills, docs sidebars. Together adopts this grammar wholesale and adapts it for LLM cloud — model cards instead of compute-instance cards, latency / throughput / token-rate metadata instead of CPU / memory / network, syntax-highlighted SDK call samples instead of `aws ec2 run-instances`. The argument structure is identical: "here is what we offer, here is how much it costs, here is the code to invoke it."

**The open-source / academic-paper visual register.** The benchmarks-on-the-marketing-page move (3.4× faster than vLLM, comparison tables of latency across providers) borrows from arXiv preprint conventions and ML-conference paper supplementary materials. Together's brand argument is "the open-source community is the best research lab" — and the visual surface treats every claim as a citation-needed artifact, with "Read the benchmark →" links beside performance numbers and links out to the underlying GitHub repos for every model. This is the deepest reason the brand commits to tabular numerics, citation-link aesthetic, and JetBrains Mono ligatures: the brand wants to read as research-grade infrastructure, not as marketing-grade product.

What Together rejects: editorial-warmth photography, celebrity testimonials, "transform your business" marketing-speak, gated pricing (you-have-to-talk-to-sales), discount stickers, modal pop-overs.

**Influences:**
- **Vercel** — light canvas + `#0070f3` action blue, Inter typography, glass nav, code-blocks-as-content. https://vercel.com
- **Stripe** — pricing-table-as-conversion-surface, citation-grade benchmark culture, single-blue action discipline. https://stripe.com
- **Linear** — backdrop-blurred nav, sharp 8px radius card grammar, tabular numerics on metadata. https://linear.app
- **Anthropic** — peer LLM provider with similar Inter + light-canvas palette but warmer editorial register. https://anthropic.com
- **OpenAI** — peer LLM provider with chat-product-as-product framing rather than infrastructure-platform; Together explicitly contrasts. https://openai.com
- **JetBrains** — JetBrains Mono ligatures and developer-tooling typography. https://jetbrains.com/mono
- **AWS / Cloudflare / Fly.io** — cloud-infrastructure layout grammar. https://aws.amazon.com

## 14. Do's and Don'ts

**Do:**
- Use `#0070f3` for primary CTA, inline links, and accent — and `#0f1f3d` deep navy for the brand surface (footer, dark hero, code-block bg).
- Pair primary CTA with white text — at 16px / 600 the contrast is AA at body (large-text bracket).
- Round cards and buttons to `8px`; pricing tier cards and modals to `12px`. Pills (`9999px`) only for status indicators, model-family tags, and filter chips.
- Skip card shadows at rest — use the 1px `#e5e7eb` border. On hover, deepen border to `#cbd0d8` and add light `0 2px 8px rgba(15,31,61,0.06)` shadow.
- Render code blocks on `#1a1d29` deep-navy bg with full Prism / Shiki syntax highlighting; enable JetBrains Mono ligatures.
- Use tabular numerals (`tnum` + `zero`) on every benchmark, latency, price, throughput, and pricing-table cell.
- Render the "All systems operational" status pill in nav with a green dot — operational transparency is a brand commitment.
- Set body type at 16px / 400 / 1.6 line-height — generous for technical reading.
- Use Inter stylistic alternates (`cv11`, `ss03`) in display sizes for a slightly distinctive Inter cut.
- Anchor every performance claim with "Read the benchmark →" link — citation culture is brand-critical.
- Use backdrop-blurred translucent nav (`rgba(250,250,250,0.85)` + `blur(12px)`) — Vercel/Linear convention.
- Render model cards as 4-across grid with provider logo + model name + parameter pill + 3 badges + tnum metadata + "Try" CTA.
- Use JetBrains Mono for inline code (`together.complete()`) at 14px — never fall back to system mono.

**Don't:**
- Don't use `#0070f3` decoratively (decorative backgrounds, dividers) — it's reserved for action and brand accent.
- Don't add discount stickers, "X% off", or sale-banner energy — Together's pricing transparency is the marketing.
- Don't use celebrity-instructor testimonials or photographic hero images — code samples are the hero.
- Don't tighten display tracking past `-0.03em` — Inter wants negative tracking but Together caps at -0.03.
- Don't introduce a serif companion font — Inter + JetBrains Mono is the brand discipline.
- Don't pair brand blue with multiple saturated secondary colours — green, orange, purple appear only on functional badges.
- Don't apply heavy shadows on cards (`> 0.15` opacity) — the elevation is whisper-soft.
- Don't render code blocks on light backgrounds — dark navy `#1a1d29` is the brand commitment.
- Don't gate pricing behind "talk to sales" — every model's per-million-token rate is on the public pricing page.
- Don't omit the "Copy" button on code blocks — the convention signals "we expect you to run this."
- Don't use Helvetica's tight default tracking for body — body sits at 16px / 400 / 1.6 with default tracking.
- Don't use proportional numerals in pricing tables — `tnum` + `zero` is non-negotiable.
- Don't use scale transforms on hover — model cards lift via shadow + border-darken combo, never translation.

## 15. Agent Prompt Guide

### Quick Color Reference
- Canvas: `#fafafa`
- Card: `#ffffff`
- Brand Navy: `#0f1f3d`
- Action Blue: `#0070f3`
- Display Text: `#0f1f3d`
- Muted: `#5a627a`
- Border: `#e5e7eb`
- Code Block BG: `#1a1d29`
- Status Green: `#10b981`
- Cyan Accent: `#00d4ff`
- Open-Source Purple: `#7c3aed`

### Example Component Prompts
1. "Create a Together AI model card — `#ffffff` background, `8px` radius, `1px solid #e5e7eb` border, no rest shadow, `20px` padding; top row: 24px Meta provider logo left + `9999px` pill `#f4f5f7` bg / `#0f1f3d` text 'Llama 3.3' family tag right; 8px gap; 18px / 600 Inter `#0f1f3d` 'Meta Llama 3.3 70B Instruct'; 4px gap; 14px / 400 `#5a627a` description max 2 lines; 12px gap; 3 badges in a row — `#e7f0ff`/`#0058c2` 'FAST' + `#f3eaff`/`#5b21b6` 'OPEN-SOURCE' + `#d1fae5`/`#065f46` 'NEW' all 11px / 600 / `0.04em` uppercase; 16px gap; metadata row '⚡ 142 tok/s · 35 ms latency' in 13px / 500 with `tnum` + `zero` numerals; 4px gap; price '$0.30 / M input · $0.30 / M output' 16px / 600 tnum; 16px gap; 'Try this model →' tertiary blue link 14px / 600 with right-arrow glyph that translates 2px on hover. On hover: border darkens to `#cbd0d8`, shadow `0 2px 8px rgba(15,31,61,0.06)` appears."
2. "Design a Together AI primary CTA — `8px` radius, `#0070f3` background, white 16px / 600 'Start building' label, `12px 20px` padding, `44px` height, hover bg `#0058c2`."
3. "Build a Together AI hero — full-bleed `#0f1f3d` navy with subtle 8s-loop gradient between `#0070f3` and `#00d4ff` cyan accents, 64px Inter 700-weight headline 'The AI Acceleration Cloud' in `#ffffff` with `-0.03em` tracking + `cv11` + `ss03` stylistic alternates, 18px / 400 `#a4adc8` lead 'Run any open-source AI model. Fast, scalable, and reliable.', primary white-on-navy CTA 'Start building' + outlined-white secondary 'Read docs' inline below."
4. "Render a Together AI code block — `#1a1d29` deep-navy background, `8px` radius, `20px` padding; top-left language tag 'python' in 12px / 500 `#7d839a` muted; top-right copy button on `rgba(255,255,255,0.05)` bg `1px solid rgba(255,255,255,0.1)` `6px` radius `#a4adc8` 'Copy' label; below: JetBrains Mono 14px / 400 / 1.7 syntax-highlighted code with `liga` enabled — `from together import Together` (purple keyword + default identifier), `client = Together()` (blue function name + bracket punctuation), `response = client.chat.completions.create(...)` with green strings and orange numbers."
5. "Create a Together AI pricing table — `#ffffff` background, `12px` radius, `1px solid #e5e7eb` border, sticky `#f9fafb` header row with 5 columns 'Model | Parameters | Input | Output | Latency' in 14px / 600; 30 model rows below at 14px / 400 with all numerics tabular-numeral + slashed-zero; sortable headers with `aria-sort` semantics; row hover bg `#f9fafb`. Above the table: filter chip row — 'All / Chat / Code / Vision / Embedding / Image' in pill chips, default white with grey border, active inverts to `#0f1f3d` navy."
6. "Build a Together AI sticky top nav — 64px tall, `rgba(250,250,250,0.85)` bg with `backdrop-filter: blur(12px)`, `1px solid #e5e7eb` border-bottom; left: T-mark logo + 'Together' wordmark in 18px / 600; centre: nav links 'Models / Solutions / Pricing / Docs / Blog' in 14px / 500 navy `#0f1f3d`, 32px gaps; right: status pill `#d1fae5`/`#065f46` 'All systems operational' with green dot, 'Sign in' tertiary text link, primary blue `#0070f3` `8px`-radius 'Sign up free' CTA. On scroll past hero into dark band: nav bg shifts to `rgba(15,31,61,0.85)` with white text via `prefers-color-scheme`-style intersection observer."

### Iteration Guide
1. **Commit to tnum + zero.** If pricing tables or benchmark cards have wobbly numerals, force `font-variant-numeric: tabular-nums slashed-zero` everywhere numbers appear in columns.
2. **Two-family discipline.** Inter + JetBrains Mono. If a serif appears, audit and remove.
3. **Code blocks on dark.** If code samples render on light backgrounds, force `#1a1d29` deep-navy bg with full syntax highlighting. Together commits to dark code blocks even on light pages.
4. **Border-not-shadow at rest.** If cards feel floaty, drop the rest shadow, use the 1px `#e5e7eb` border. Hover gets the shadow + border-darken combo.
5. **Vercel-blue discipline.** If primary CTAs drift to teal or cyan, force `#0070f3`. The blue is the brand commitment.
6. **Citation links beside benchmarks.** Every "3.4× faster" claim needs "Read the benchmark →" beside it. Citation culture is brand-critical.
7. **Glass nav.** If nav feels heavy, switch to `rgba(250,250,250,0.85)` + `backdrop-filter: blur(12px)`. The Vercel/Linear glass convention is the modern dev-platform standard.
8. **Status-pill in nav.** If the brand feels closed-off, add the "All systems operational" green-dot pill in the top nav. Operational transparency is the brand commitment.
