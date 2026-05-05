---
name: Pinecone
tagline: White canvas with Inter and a signature `#1cb0d0` cyan — vector database technical-marketing dressed in clean blueprint chrome.
author: webdesignhot
source_url: https://www.pinecone.io
spec: design.md/v1.5
quality: curated
featured: false
categories: [ai, dev-tools]
tags: [light, cyan, sans, mono, technical, vector-db]
preview_swatch: ['#ffffff', '#1cb0d0', '#030712']
related: [anthropic, openai, modal]
description: 'Pinecone''s marketing surface reads like a clean blueprint of a vector database — a pure white canvas, Inter at weight 600 carrying every display headline, and a signature `#1cb0d0` cyan-blue that handles primary CTAs, link state, and the vector-space-grid chrome that Pinecone turns into its primary marketing artifact. Embedded code blocks (Python, JavaScript) and dotted-grid backgrounds suggesting vector embeddings establish technical credibility; the brand commits to a quiet, engineering-grade rhythm where the cyan operates as a single brand voltage moment per band. Where competitors chase dark gradients, Pinecone stays clean, technical, and clearly scientific.'

colors:
  bg: '#ffffff'                  # canvas — pure white
  bg-soft: '#f9fafb'              # softly tinted alternating band
  bg-deep: '#030712'              # near-black footer / dark CTA band
  surface-soft: '#f3f4f6'         # softer band tint
  surface: '#ffffff'              # default content card
  surface-elevated: '#ffffff'     # featured card with stronger shadow
  surface-cyan: '#e0f7fc'          # tinted cyan info surface
  surface-dark: '#030712'         # dark CTA band / footer / dark code window
  surface-dark-card: '#111827'    # dark card on dark band
  text: '#030712'                 # primary headlines + strong type
  text-body: '#374151'            # default running-text
  text-strong: '#111827'          # emphasised paragraphs
  text-muted: '#6b7280'           # captions, breadcrumbs
  text-faint: '#9ca3af'           # tertiary fine-print
  text-on-dark: '#ffffff'
  text-on-dark-muted: '#d1d5db'
  brand: '#1cb0d0'                # signature Pinecone cyan-blue
  brand-hover: '#0e8fae'          # press / hover-darker variant
  brand-active: '#0c7691'         # deep cyan for active state
  brand-soft: '#e0f7fc'            # tinted cyan surface for badges
  brand-deep: '#0a3a4a'            # deep cyan for dark backgrounds
  on-brand: '#ffffff'             # white text on cyan CTAs
  on-light: '#030712'
  link: '#1cb0d0'                 # inline links match brand
  link-hover: '#0e8fae'
  border: '#e5e7eb'               # 1px hairline on cards
  border-strong: '#d1d5db'        # divider on inputs
  border-soft: '#f3f4f6'          # subtle separator
  border-cyan: '#1cb0d0'          # focus border
  shadow-color: 'rgba(15, 23, 42, 0.04)'
  shadow-color-md: 'rgba(15, 23, 42, 0.08)'
  shadow-color-lg: 'rgba(15, 23, 42, 0.12)'
  accent-emerald: '#10b981'       # success
  accent-rose: '#ef4444'          # error
  accent-violet: '#8b5cf6'        # rare hybrid-search accent
  accent-amber: '#f59e0b'         # warning highlights
  success: '#10b981'
  warning: '#f59e0b'
  danger: '#ef4444'
  info: '#1cb0d0'
  code-keyword: '#0c7691'
  code-string: '#10b981'
  code-comment: '#9ca3af'
  code-number: '#f59e0b'
  vector-grid: '#e5e7eb'          # dotted grid suggesting embedding space
  vector-point: '#1cb0d0'         # point on vector grid

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
    stat-display:      { size: 56, weight: 700, lineHeight: 1.0,  tracking: '-1.5px',  family: display, notes: 'always cyan or graphite' }

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
    padding: '12px 20px'
    height: 40
    use: 'every primary CTA — Get started, Sign up free'
  button-secondary:
    backgroundColor: surface
    textColor: text
    rounded: md
    padding: '12px 20px'
    height: 40
    border: '1px solid #e5e7eb'
    use: 'paired secondary action next to brand CTA'
  button-dark:
    backgroundColor: bg-deep
    textColor: text-on-dark
    rounded: md
    padding: '12px 20px'
    use: '"View on GitHub" or "Read whitepaper" — quiet authority CTA'
  button-text-link:
    backgroundColor: transparent
    textColor: link
  card-feature:
    backgroundColor: surface
    textColor: text
    rounded: lg
    padding: 32
    border: '1px solid #e5e7eb'
    use: 'standard feature card on white canvas'
  card-vector-grid:
    backgroundColor: surface
    textColor: text
    rounded: lg
    padding: 32
    use: 'card with embedded vector-space dotted grid as background pattern'
  card-product:
    backgroundColor: surface-soft
    textColor: text
    rounded: lg
    padding: 24
    use: 'shows Pinecone console / dashboard product chrome'
  card-code-window:
    backgroundColor: surface-dark
    textColor: text-on-dark
    rounded: lg
    padding: 24
    use: 'embeds Python / JavaScript snippets — dark card on light canvas'
  card-pricing-tier:
    backgroundColor: surface
    rounded: lg
    padding: 32
    border: '1px solid #e5e7eb'
  card-pricing-tier-featured:
    backgroundColor: surface
    rounded: lg
    padding: 32
    border: '2px solid #1cb0d0'
    use: 'featured tier marked by 2px cyan border'
  badge-pill:
    backgroundColor: surface-soft
    textColor: text
    rounded: pill
    padding: '4px 12px'
  badge-cyan:
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
    border: '1px solid #e5e7eb'
  cta-band-dark:
    backgroundColor: surface-dark
    textColor: text-on-dark
    rounded: lg
    padding: 64
    use: 'pre-footer "Get started with Pinecone" CTA — dark band'
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
  ambient: 'rgba(15, 23, 42, 0.04) 0 1px 2px'
  standard: 'rgba(15, 23, 42, 0.08) 0 4px 12px'
  elevated: 'rgba(15, 23, 42, 0.12) 0 12px 32px -8px'
  deep: 'rgba(15, 23, 42, 0.16) 0 24px 48px -12px'
  ring: '0 0 0 3px rgba(28, 176, 208, 0.30)'

accessibility:
  contrast-text-on-bg: 19.2              # AAA — #030712 on #ffffff
  contrast-text-on-brand: 3.0            # AA at large only — #ffffff on #1cb0d0 (use ≥18px or ≥14px bold)
  contrast-body-on-bg: 9.7               # AAA — #374151 on #ffffff
  contrast-muted-on-bg: 4.8              # AA — #6b7280 on #ffffff
  focus-ring: '3px rgba(28, 176, 208, 0.30) ring with 1px solid #1cb0d0 core'
  reduced-motion-honored: true

dark-mode: 'optional — Pinecone marketing is light-default; the in-product console offers a dark theme that mirrors slate-950 (`#030712` canvas, `#d1d5db` text, same `#1cb0d0` brand)'

lineage:
  summary: |
    Pinecone's marketing surface descends from the modern dev-tool
    light-aesthetic — pure white canvas, Tailwind-gray scale type,
    hairline borders, and Inter at weight 600 carrying display
    headlines. The signature `#1cb0d0` cyan sits between the colder
    Stripe blue and Cloudflare's orange — it's specifically calibrated
    to read as "scientific instrument" rather than "tech brand." The
    cyan suggests vector spaces, mathematical visualizations,
    embedding plots — appropriate for a vector-database brand whose
    primary marketing artifact is the dotted grid suggesting
    high-dimensional space. Code blocks invert to dark `#030712` cards
    on the light canvas, mirroring GitHub-light's pattern. The
    pre-footer CTA flips the page to dark; the rest stays clinical
    white. Where LangChain commits to dark canvas and LlamaIndex
    commits to a slightly warmer GitHub-light, Pinecone commits to a
    cooler, more clinical white — the surface of a research
    laboratory rather than a developer documentation site.
  influences:
    - name: Stripe
      role: Inter + negative-tracking display discipline; trust-via-restraint chromatic strategy.
      url: https://stripe.com
    - name: Vercel
      role: Dark-CTA-band-on-light-page pattern; single-accent discipline.
      url: https://vercel.com
    - name: Tailwind CSS
      role: The gray-50/gray-100/gray-900 scale and Inter + JetBrains Mono recipe.
      url: https://tailwindcss.com
    - name: GitHub
      role: The dark-code-on-light-page pattern adopted in the code-window cards.
      url: https://github.com
---

## 1. Visual Theme & Atmosphere

Pinecone's marketing surface reads like the clean blueprint of a vector database — a pure white `#ffffff` canvas carrying confident graphite-black sans-serif type, with one signature cyan (`#1cb0d0`) that handles every primary CTA, every link, every focus ring. The cyan is specifically tuned to suggest "scientific instrument": cooler than Stripe's blue, warmer than Cloudflare's orange, sitting in the "vector-math visualization" register. It reads as research laboratory chrome — appropriate for a brand whose product is high-dimensional similarity search.

The defining visual artifact is the **dotted vector grid** — a faint pattern of `#e5e7eb` dots on white that suggests embedding-space coordinates. Pinecone uses this grid as background chrome inside hero cards and feature cards, with `#1cb0d0` "vector points" placed deliberately to suggest similarity clusters. The grid is the visual metaphor: this database lives in vector space, and the marketing chrome makes that visible.

Where competitors chase dark gradients and glow halos, Pinecone stays austerely clinical. Code blocks invert to dark `#030712` cards on the light page — Python and JavaScript snippets show how to upsert and query vectors. The dark code surface on light canvas is the brand's signature contrast pattern.

Type voice runs Inter at weight 600 for display headlines (700 only at the largest hero size), with negative tracking (`-0.6px` to `-2px`). Body type runs Inter at 400 with 1.60 line-height — slightly taller, signaling "this is documentation-grade." JetBrains Mono carries every code surface; vector dimensions and namespace identifiers ("v1.embed_query", "namespace='customer-support'") embed inline in body copy.

The page rhythm is monolithic light canvas top to bottom, with a single dark `#030712` pre-footer CTA band as the dramatic contrast moment. Section padding stays at 96px; card padding at 32px for feature cards and 24px for code-window cards. The whitespace is laboratory-clean rather than marketing-soft.

**Key Characteristics:**
- Pure white `#ffffff` canvas with graphite-black `#030712` type. Marketing is light-mode by default.
- Signature `#1cb0d0` cyan-blue for primary CTAs, links, focus rings, and vector-grid points.
- Inter at weight 600 (display) with negative tracking on every headline.
- JetBrains Mono on every code surface; code-window cards are dark `#030712` on light canvas.
- Dotted vector-grid background pattern as the brand's signature visual artifact.
- 1px `#e5e7eb` hairline borders on every feature card.
- Pre-footer CTA flips the page to dark `#030712` for dramatic single-moment contrast.
- 8px radius on CTAs, 12px on cards, 9999px reserved for badges.
- 96px section rhythm; 32px feature card padding.
- Single brand color discipline — cyan + grayscale, no second accent in marketing.

## 2. Color Palette & Roles

### Primary
- **Bg / Canvas** (`#ffffff`): Pure white — runs every marketing page top to bottom.
- **Text** (`#030712`): Slate-950 graphite — the deepest near-black available without being pure black.
- **Brand / Primary CTA** (`#1cb0d0`): The Pinecone cyan — every primary CTA, every link, every brand-critical accent.

### Brand & Dark
- **Brand** (`#1cb0d0`): Reserved for primary CTAs, link state, focus rings, vector-grid points, featured-tier border.
- **Brand Hover** (`#0e8fae`): Press / hover-darker variant.
- **Brand Active** (`#0c7691`): Deep cyan for pressed/active state and badge text on `brand-soft` surface.
- **Brand Deep** (`#0a3a4a`): Deepest cyan used inside dark UI mockups for "selected vector" states.
- **Bg Deep** (`#030712`): Slate-950 — dark footer band, dark CTA band, code-window background.

### Accent
Pinecone runs a deliberately constrained accent system. Decorative accents are reserved for product UI sub-states.
- **Accent Violet** (`#8b5cf6`): Rare hybrid-search accent — used inside product UI mockups for the "sparse + dense" hybrid index.
- **Accent Emerald** (`#10b981`): Inside product UI for "indexed" status; in marketing only as success toast color.
- **Accent Amber** (`#f59e0b`): Inside product UI for warning indicators.

### Interactive
- **Link** (`#1cb0d0`): Inline body links match brand exactly. Underlined.
- **Link Hover** (`#0e8fae`): Hover darkens link 1 step.
- **Selected** (`rgba(28, 176, 208, 0.15)`): Selected text background — cyan tint.
- **Disabled** (`#9ca3af`): Disabled labels and tertiary text.

### Neutral Scale
- **Text** (`#030712`): Slate-950 — headlines, primary type.
- **Text Strong** (`#111827`): Slate-900 — emphasised paragraphs.
- **Text Body** (`#374151`): Slate-700 — default running-text.
- **Text Muted** (`#6b7280`): Slate-500 — captions, breadcrumbs.
- **Text Faint** (`#9ca3af`): Slate-400 — tertiary fine-print.

### Surface & Borders
- **Surface Soft** (`#f3f4f6`): Slate-100 — section dividers, very-soft band tints.
- **Bg Soft** (`#f9fafb`): Slate-50 — softly tinted band for editorial section alternation.
- **Surface** (`#ffffff`): Default content card on white canvas.
- **Surface Cyan** (`#e0f7fc`): Tinted cyan surface for info callouts and badge backgrounds.
- **Surface Dark** (`#030712`): Code-window background, dark CTA band, footer.
- **Surface Dark Card** (`#111827`): Slate-900 — nested card on dark band.
- **Border** (`#e5e7eb`): Slate-200 — 1px hairline on cards.
- **Border Strong** (`#d1d5db`): Slate-300 — divider on input underlines.
- **Border Cyan** (`#1cb0d0`): Focus border on inputs and 2px featured-tier border.

### Shadow Colors
Pinecone uses neutral graphite-tinted shadows at low alpha. The system feels "softly placed on a clean surface" rather than "floating."
- **Shadow Color** (`rgba(15, 23, 42, 0.04)`): Ambient shadow for subtle elevation.
- **Shadow Color Md** (`rgba(15, 23, 42, 0.08)`): Standard card shadow.
- **Shadow Color Lg** (`rgba(15, 23, 42, 0.12)`): Hover-state lift, modal entrance.

### Semantic
- **Success** (`#10b981`): Confirmation toasts.
- **Warning** (`#f59e0b`): Caution states.
- **Danger** (`#ef4444`): Destructive actions.
- **Info** (`#1cb0d0`): Informational notices — same as brand.

## 3. Typography Rules

### Font Family
- **Primary**: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`. Inter handles every text role.
- **Mono**: `JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace`. Code blocks, vector dimension labels, namespace identifiers.
- **OpenType features**: `'cv11'` for the alternative single-storey lowercase 'a', `'ss01'` for the disambiguated I/l. Toggled at display sizes.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display-xl | Inter | 64 | 700 | 1.05 | -2px | ss01 | Homepage h1 ("The vector database for AI") |
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
| stat-display | Inter | 56 | 700 | 1.0 | -1.5px | — | Stat callouts ("5B+", "99.99%") — cyan or graphite |
| code-md | JetBrains Mono | 14 | 400 | 1.60 | 0 | — | Code blocks (in dark code-window cards) |
| code-sm | JetBrains Mono | 12 | 400 | 1.50 | 0 | — | Inline code in body paragraphs |
| button | Inter | 14 | 600 | 1.00 | 0 | — | Standard button labels |
| nav-link | Inter | 14 | 500 | 1.40 | 0 | — | Top-nav menu items |

### Principles
- **Display weights stay at 600–700.** 700 reserved for the homepage h1; 600 for everything below.
- **Negative tracking is essential** for display sizes.
- **Body and labels stay at 400 / 500 / 600.** Never bold body text for emphasis — use weight 600.
- **Body line-height stays at 1.60.** Documentation-tall.
- **Mono everywhere code or vector identifiers appear.** Vector dimensions ("1536-d", "embedding=v1") use mono inline.
- **Stat-display sizes (56px / 700) carry credibility moments.** "5B+ vectors", "99.99% uptime" — always cyan or graphite, never another color.
- **Caption-uppercase carries section structure.** 11px uppercase eyebrow at 1.5px tracking on every band.

## 4. Component Stylings

### Buttons (4 variants)

**`button-primary`** — The signature cyan CTA. Background `#1cb0d0`, text `#ffffff`, Inter 14px / 600, padding 12px × 20px, height 40px, radius 8px. Hover: `#0e8fae` over 120ms; subtle 2px lift.

**`button-secondary`** — White-bordered button. Background `#ffffff`, text `#030712`, 1px solid `#e5e7eb` border, same padding/radius. Hover: background fades to `#f3f4f6`; border darkens.

**`button-dark`** — Dark CTA on white surface. Background `#030712`, text `#ffffff`. Used for "View on GitHub" or "Read whitepaper" — the quiet authority CTA.

**`button-text-link`** — Pure text link in `#1cb0d0` with hover-darken. Used inside body paragraphs.

### Cards

**`card-feature`** — Standard white feature card. Background `#ffffff`, radius 12px, padding 32px, 1px solid `#e5e7eb` border. Hover: shadow intensifies; border stays.

**`card-vector-grid`** — Card with embedded dotted vector-grid background. Background `#ffffff` with `#e5e7eb` 4px-spaced dots at 20% alpha; 5–10 `#1cb0d0` "vector points" placed across the grid suggesting an embedding cluster. Radius 12px, padding 32px, 1px solid `#e5e7eb` border. The brand's signature visual chrome.

**`card-product`** — Card showing actual Pinecone console UI (index list, query playground, namespace browser). Background `#f9fafb`, radius 12px, padding 24px, 1px solid `#e5e7eb` border.

**`card-code-window`** — Dark card showing a Python or JavaScript code block. Background `#030712`, code in JetBrains Mono with syntax highlighting (keywords cyan-shifted to `#67e8f9`, strings `#10b981`, comments `#6b7280`), radius 12px, padding 24px. Top-left "Python" or "JavaScript" tab indicator.

**`card-pricing-tier`** — Standard pricing tier card. Background `#ffffff`, radius 12px, padding 32px, 1px solid `#e5e7eb` border.

**`card-pricing-tier-featured`** — Featured tier marked by 2px solid `#1cb0d0` border. The thicker cyan border alone is the featured signal.

### Badges & Pills

**`badge-pill`** — Small light pill label. Background `#f3f4f6`, text `#030712`, caption typography, radius 9999.

**`badge-cyan`** — Cyan tinted pill for "NEW" or feature labels. Background `#e0f7fc`, text `#0c7691`, caption-uppercase typography, radius 9999.

### Inputs / Forms

**`text-input`** — White text input. Background `#ffffff`, radius 8px, padding 10px × 14px, height 40px, 1px solid `#e5e7eb` border.

**`text-input-focused`** — 3px `rgba(28, 176, 208, 0.30)` ring with 1px solid `#1cb0d0` core.

### Navigation

**`top-nav`** — White nav bar pinned to top, 64px tall, background `#ffffff`. Logo + "Pinecone" wordmark left, primary horizontal menu (Product, Solutions, Customers, Resources, Pricing) center, right-side: "Sign in" + cyan `button-primary` ("Sign up free").

### Decorative

**`vector-grid`** — Background pattern of `#e5e7eb` dots on 4px grid at 20% alpha, with deliberate `#1cb0d0` points placed to suggest a similarity cluster. Used as background chrome inside hero cards, feature cards, and full-page hero band.

**`stat-callout`** — Inline cyan or graphite stat numbers ("5B+ vectors", "99.99% uptime", "<10ms p95"). Stat-display typography (56px / 700 / -1.5px). Used flat, not in cards.

**`cta-band-dark`** — Pre-footer "Get started with Pinecone" CTA band. `#030712` surface, 64px padding. h2 in display-md white, body subhead in `#d1d5db`, primary `#1cb0d0` CTA + ghost white text-link.

**`customer-logo-strip`** — Horizontal monochrome customer-logo strip. Background `#ffffff`, logos in `#6b7280`, padding 32px vertical.

## 5. Layout Principles

### Spacing System
Base unit **4px**. Tokens: `xxs:4 · xs:8 · sm:12 · md:16 · lg:24 · xl:32 · xxl:48 · section:96`. 96px section padding, 32px feature card padding, 24px code-window card padding.

### Grid & Container
Max content width **1200px** centered. Editorial body uses a 12-column grid; hero often uses a 6/6 split. Feature card grids run 3-up at desktop, 2-up at tablet, 1-up at mobile. Pricing grids run 3-up at desktop.

### Whitespace Philosophy
Pinecone uses laboratory-clean whitespace. Cards breathe; sections breathe more; the page never feels cramped. The clinical air is the brand's voice.

### Section Cadence
White hero band (with vector-grid chrome) → feature card grid → softly-tinted band with stat callouts → product mockup band → customer-logo strip → pricing → light feature card → dark `#030712` pre-footer CTA → dark footer.

## 6. Shapes & Radius Scale

| Tier | Token | Value | Use |
|---|---|---|---|
| Micro | micro | 2px | Reserved |
| XS | xs | 4px | Badge accents, syntax-highlight chips |
| Standard | sm | 6px | Small inline buttons, tight inputs |
| Comfortable | md | 8px | Standard CTA buttons, text inputs |
| Large | lg | 12px | Content cards, code-window cards, pricing tiers |
| Featured | xl | 16px | Hero shells |
| Pill | pill | 9999px | Badges, avatars |

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No shadow, no border | Body sections, top nav, hero text |
| 1 — Soft hairline | 1px `#e5e7eb` border | Standard feature cards, pricing tiers |
| 2 — Soft shadow | 1px border + ambient shadow | Cards on hover |
| 3 — Standard shadow | 1px border + standard shadow | Featured cards, modal entrance start |
| 4 — Featured | 2px solid `#1cb0d0` border | Featured pricing tier |
| 5 — Modal | Standard shadow + backdrop dim 60% | Dialogs, dropdowns |

### Shadow Philosophy
Pinecone uses neutral graphite-tinted shadows at low alpha. The shadows feel "softly placed" rather than "floating." Hover lifts are subtle (translateY(-2px) + shadow up one tier).

## 8. Interaction & Motion

### Easing Curves
- **Standard ease**: `cubic-bezier(0.4, 0, 0.2, 1)` — default.
- **Emphasized ease**: `cubic-bezier(0.2, 0, 0, 1)` — CTA hover, modal entrances.

### Duration Buckets
- **Fast (120ms)**: Color and opacity transitions.
- **Standard (200ms)**: Card hover lifts, dropdown opens.
- **Slow (320ms)**: Modal entrance, scroll reveals.

### Per-Component Micro-States
- **Button hover**: Cyan CTAs darken `#1cb0d0` → `#0e8fae` over 120ms; lift 1px.
- **Card hover**: Translate Y(-2px) over 200ms; shadow intensifies one tier.
- **Code-window hover**: No state change.
- **Link hover**: Color darkens; underline thickens.
- **Input focus**: 3px cyan ring expands.
- **Vector grid**: Cyan points pulse subtly (4s cycle, opacity 0.7→1.0) when hero is in view — the only "playful" animation.

### Page Transitions
Standard browser navigation. Section-on-scroll reveals are 320ms fade-in-up.

### Reduced Motion
Honored — vector-grid pulse paused, transforms removed, transitions to opacity-only at 100ms.

## 9. Accessibility & A11y

### Contrast Pairs
- **Text on bg**: `#030712` on `#ffffff` = **19.2** — AAA.
- **Body on bg**: `#374151` on `#ffffff` = **9.7** — AAA.
- **Muted on bg**: `#6b7280` on `#ffffff` = **4.8** — AA.
- **On-brand on brand**: `#ffffff` on `#1cb0d0` = **3.0** — AA at large only. Buttons use 14px/600 (qualifies).
- **Brand-active on brand-soft**: `#0c7691` on `#e0f7fc` = **6.2** — AAA.

### Focus Indicators
3px `rgba(28, 176, 208, 0.30)` ring with 1px solid `#1cb0d0` core. The double-ring is unmistakable on white canvas.

### ARIA Patterns
- **Buttons**: Native `<button>`; icon-only buttons carry `aria-label`.
- **Code blocks**: `<pre><code>` with `aria-label="Python example"`.
- **Vector-grid diagrams**: SVG with `<title>` and `<desc>`.
- **Navigation**: `<nav aria-label="Primary">`; mobile drawer uses `aria-expanded`.
- **Dialog**: `role="dialog"` + `aria-labelledby`.

### Keyboard Navigation
Tab order follows reading order. Skip-link to `<main>`. Modal trap focus + Escape closes.

### Screen Reader Hints
Vector-grid background marked `aria-hidden="true"` (decorative). Stat numbers like "5B+" use `aria-label="5 billion plus"`.

### Reduced Motion Handling
Honored — vector-grid pulse paused, all transforms removed.

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
Top nav collapses to hamburger at < 768px. Hero 6/6 grid collapses to single-column on mobile. Vector-grid background scales proportionally (fewer dots visible on mobile).

### Image Behavior
Code blocks stay at fixed font-size; horizontal scroll on mobile. Customer logos retain native widths; row wraps.

## 11. Content & Voice

### Tone
**Technical, scientifically precise, confident.** Pinecone writes for ML engineers building production retrieval systems. Headlines state capabilities as benchmarks ("Search billions of vectors in milliseconds"); body copy supports with metrics, architecture details, and SDK examples.

### Microcopy Patterns
- **CTA verbs**: "Sign up free", "Get started", "Talk to sales", "Read the docs", "View on GitHub". The "Sign up free" is allowed (Pinecone has a free tier as a real product offering).
- **Section labels**: Uppercase eyebrow — "VECTOR DATABASE", "RETRIEVAL", "CUSTOMERS", "PRICING".
- **Stat numbers**: Always paired with a unit or qualifier — "5B+ vectors", "<10ms p95 latency", "99.99% SLA".
- **Feature copy**: Verb-first ("Search billions of vectors", "Scale to production", "Index in seconds").

### Empty States
Console product UI: "No indexes yet — create one to start storing vectors" with cyan link to docs.

### Error Messages
**Pattern**: `<icon-x in #ef4444> + "What went wrong" + "What to try next"`. Example: "Index creation failed — verify your API key has write permissions."

### Success Confirmations
Toast in `text` over `surface` with success accent stripe. "Index created — namespace 'production' is ready." Auto-dismiss 4s.

## 12. Dark Mode & Theming

Pinecone marketing is **light-default**. The in-product console (out of scope for marketing spec) supports a dark theme: `bg: #030712`, `surface: #111827`, `border: #1f2937`, `text: #d1d5db`, `brand: #1cb0d0` (unchanged), `link: #67e8f9` (lightened for contrast). Code-window cards retain their `#030712` background in both themes.

## 13. Lineage & Influences

Pinecone's marketing aesthetic descends from the **modern dev-tool light-aesthetic** that runs through Stripe, Vercel, and Tailwind's own marketing — pure white canvas, slate-gray scale, hairline borders, Inter at weight 600 with negative tracking. The signature `#1cb0d0` cyan is calibrated to read as "scientific instrument": cooler than Stripe's blue, warmer than Cloudflare's orange, sitting in the mathematical-visualization register.

The dotted vector-grid as marketing chrome is borrowed from **scientific data-visualization tradition** (matplotlib scatter plots, t-SNE projections, embedding visualization tools) translated into brand chrome. This is what distinguishes Pinecone from generic dev-tool light-aesthetic — the brand makes its underlying data structure (vectors in high-dimensional space) visible as a signature visual artifact.

The dark-code-on-light-page pattern comes from GitHub. The single-cyan + grayscale discipline comes from the trust-via-restraint chromatic strategy that Stripe codified. The pre-footer dark-CTA-band-on-light-page is the Vercel pattern.

- **Stripe** — Inter + negative-tracking display discipline; trust-via-restraint chromatic strategy. https://stripe.com
- **Vercel** — Dark-CTA-band-on-light-page pattern; single-accent discipline. https://vercel.com
- **Tailwind CSS** — The slate scale + Inter + JetBrains Mono recipe. https://tailwindcss.com
- **GitHub** — Dark-code-on-light-page pattern. https://github.com
- **matplotlib / t-SNE visualizations** — The dotted-grid-suggesting-vector-space lineage that Pinecone translates into marketing chrome.

## 14. Do's and Don'ts

### Do
- Anchor every page on the white `#ffffff` canvas. Marketing is light-default.
- Reserve the cyan (`#1cb0d0`) for primary CTAs, links, focus rings, and vector-grid points.
- Use Inter at weight 600 (display-md and below) or 700 (display-xl/lg only) with negative tracking.
- Use the dotted vector-grid as background chrome inside hero cards and feature cards — it's the brand's signature.
- Show actual Python or JavaScript code inside dark `#030712` code-window cards.
- Use stat-callout numbers (56px / 700) to establish credibility ("5B+ vectors", "<10ms p95").
- Anchor every band with 96px vertical rhythm.
- Use a 2px solid `#1cb0d0` border to mark the featured pricing tier.
- Use the dark `#030712` pre-footer CTA band as the single high-contrast moment.

### Don't
- Don't switch the marketing canvas to dark mid-page. Stay light until the pre-footer CTA.
- Don't introduce a second brand color in marketing. Pinecone is grayscale + cyan.
- Don't replace the vector-grid chrome with abstract illustrations. The grid IS the brand's marketing voltage.
- Don't bold display weight beyond 700.
- Don't replace dark code-window cards with light-on-light code blocks.
- Don't use prominent drop shadows; the system is softly elevated, not floating.
- Don't use rounded-pill buttons for primary CTAs. Standard radius is 8px.
- Don't use cyan for body text — only for actionable / accent moments.
- Don't add gradient halos or glow effects to the cyan. Solid only.

## 15. Agent Prompt Guide

### Quick Color Reference
```
Bg / Canvas:     #ffffff (pure white)
Bg Soft:         #f9fafb (alternating band)
Surface Soft:    #f3f4f6 (section divider tint)
Border:          #e5e7eb (1px hairline)
Text:            #030712 (slate-950 graphite)
Text Body:       #374151 (slate-700 running-text)
Text Muted:      #6b7280 (slate-500 captions)
Brand:           #1cb0d0 (Pinecone cyan)
Brand Hover:     #0e8fae (press state)
On-Brand:        #ffffff (white text on cyan)
Surface Dark:    #030712 (code-window, footer, pre-footer CTA)
Vector Grid:     #e5e7eb dots / #1cb0d0 points
```

### Example Component Prompts

1. "Create a Pinecone hero band on `#ffffff` canvas, with a faint dotted-grid background pattern (`#e5e7eb` dots on 4px grid at 20% alpha) and 8 cyan `#1cb0d0` 'vector points' scattered to suggest a similarity cluster. Inter 64px / 700 / -2px tracking `#030712` headline ('The vector database for AI'), 18px / 400 `#374151` subhead, cyan primary CTA ('Sign up free') paired with a white-bordered secondary CTA ('Talk to sales')."

2. "Design a feature card with embedded vector-grid chrome. `#ffffff` background, 1px solid `#e5e7eb` border, 12px radius, 32px padding. Background carries faint dotted grid; foreground has Inter 20px / 600 title, 16px body, and a 24px cyan icon top-left."

3. "Build a 3-column feature card grid on `#ffffff`. Each card: `#ffffff` background, 1px solid `#e5e7eb` border, 12px radius, 32px padding, `#030712` 20px / 600 title, `#374151` 16px body, soft graphite shadow. Each card carries a small 11px / 600 / 1.5px uppercase eyebrow ('VECTOR DATABASE', 'RETRIEVAL', 'SCALE')."

4. "Compose a stat-callout strip with three numbers ('5B+', '99.99%', '<10ms') in Inter 56px / 700 / `#1cb0d0`, each with a `#6b7280` 11px / 600 uppercase label below ('VECTORS INDEXED', 'UPTIME SLA', 'P95 LATENCY'). 96px vertical padding."

5. "Compose a pricing grid with 3 tiers on `#ffffff`. Two standard `#ffffff` cards (12px radius, 32px padding, 1px solid `#e5e7eb` border) and one featured tier marked with a 2px solid `#1cb0d0` border."

6. "Design a pre-footer dark CTA band: full-bleed `#030712` background, 64px padding. Inter 40px / 600 / -1px tracking `#ffffff` headline ('Get started with Pinecone'), 16px / 400 `#d1d5db` subhead, primary `#1cb0d0` CTA ('Sign up free') + ghost `#ffffff` text-link with arrow ('Read the docs')."

### Iteration Guide
1. Start with the white canvas. The brand commits to clinical white as its surface.
2. Add the dotted vector-grid where you'd otherwise add an illustration. The grid is the brand's marketing voltage.
3. Pick one place per band where the cyan appears. Two cyan elements in a band is too many.
4. Keep display headlines at Inter 600 (or 700 for the homepage h1) with negative tracking.
5. Code always lives on dark `#030712`. Light-on-light code blocks break the brand idiom.
6. Use stat-callout numbers wherever you have a real benchmark ("5B+", "<10ms p95"). Pinecone's credibility is in measurable performance.
7. Use 1px hairline borders rather than shadows for card definition.
8. The pre-footer CTA is the page's one dramatic moment — full-bleed dark, single CTA.
