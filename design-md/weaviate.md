---
name: Weaviate
tagline: White canvas with Inter and a signature `#1cdb46` open-source green — modular vector database dressed in approachable engineering chrome.
updated_at: 2026-05-04T20:53:02+12:00
published_at: 2026-05-04T20:53:02+12:00
author: webdesignhot
source_url: https://weaviate.io
spec: design.md/v1.5
quality: curated
featured: false
categories: [ai, dev-tools]
tags: [light, green, sans, mono, technical, open-source]
preview_swatch: ['#ffffff', '#1cdb46', '#130c49']
related: [huggingface, anthropic, modal]
description: 'Weaviate''s marketing surface reads like an approachable open-source engineering site — a pure white canvas, Inter at weight 600 carrying every display headline, and a signature `#1cdb46` electric green that handles primary CTAs, link state, and the modular-component visual chrome that Weaviate turns into its primary marketing artifact. Embedded code blocks (Python, GraphQL queries) and modular-block diagrams suggesting composable retrieval pipelines establish the open-source engineering credibility; the green operates as cheerful brand voltage rather than corporate severity. Where Pinecone leans clinical-cyan and LangChain leans navy-engineering, Weaviate commits to a friendlier open-source aesthetic — bright, modular, and unmistakably community-first.'

colors:
  bg: '#ffffff'                  # canvas — pure white
  bg-soft: '#f8f9fb'              # softly tinted alternating band
  bg-deep: '#130c49'              # signature deep indigo footer / dark CTA band
  surface-soft: '#f1f3f7'         # softer section tint
  surface: '#ffffff'              # default content card
  surface-elevated: '#ffffff'     # featured card with stronger shadow
  surface-green: '#e6fae9'         # tinted green info surface
  surface-indigo: '#eaeaf5'        # tinted indigo info surface
  surface-dark: '#130c49'         # dark CTA band / footer (deep indigo, not black)
  surface-dark-card: '#1f1860'    # nested card on dark band
  text: '#0f0a3a'                 # primary headlines — deep indigo-leaning, not pure black
  text-body: '#3d3a6b'            # default running-text — softened indigo
  text-strong: '#1a1547'          # emphasised paragraphs
  text-muted: '#6e6b8c'           # captions, breadcrumbs
  text-faint: '#9a98b1'           # tertiary fine-print
  text-on-dark: '#ffffff'
  text-on-dark-muted: '#c4c2d6'
  brand: '#1cdb46'                # signature Weaviate electric green
  brand-hover: '#15b939'          # press / hover-darker variant
  brand-active: '#0f9e2f'         # deep green for active state
  brand-soft: '#e6fae9'            # tinted green surface for badges
  brand-deep: '#0a6b1f'            # darkest green for type on green-soft surface
  brand-indigo: '#130c49'         # secondary brand — deep indigo for footer + CTA bands
  on-brand: '#0f0a3a'             # deep indigo text on green CTAs (NOT white — green is too light for white type)
  on-light: '#0f0a3a'
  link: '#1cdb46'                 # inline links match brand
  link-hover: '#0f9e2f'
  border: '#e0e2eb'               # 1px hairline on cards
  border-strong: '#c5c8d4'        # divider on inputs
  border-soft: '#f1f3f7'          # subtle separator
  border-green: '#1cdb46'          # focus border on inputs
  shadow-color: 'rgba(19, 12, 73, 0.04)'
  shadow-color-md: 'rgba(19, 12, 73, 0.08)'
  shadow-color-lg: 'rgba(19, 12, 73, 0.12)'
  accent-amber: '#f59e0b'         # warning highlights
  accent-rose: '#ef4444'          # error states
  accent-cyan: '#06b6d4'          # rare hybrid-search accent
  accent-violet: '#8b5cf6'        # rare module accent
  success: '#1cdb46'              # success matches brand — green is already the success color
  warning: '#f59e0b'
  danger: '#ef4444'
  info: '#06b6d4'
  code-keyword: '#0f9e2f'
  code-string: '#0a6b1f'
  code-comment: '#9a98b1'
  code-number: '#f59e0b'

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
    display-sm:        { size: 30, weight: 600, lineHeight: 1.20, tracking: '-0.5px',  family: display }
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
    stat-display:      { size: 56, weight: 700, lineHeight: 1.0,  tracking: '-1.5px',  family: display, notes: 'always green or indigo' }

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
    use: 'every primary CTA — Get started, Try Cloud — green with deep indigo text (NOT white)'
  button-secondary:
    backgroundColor: surface
    textColor: text
    rounded: md
    padding: '12px 20px'
    height: 40
    border: '1px solid #e0e2eb'
    use: 'paired secondary action next to brand CTA'
  button-indigo:
    backgroundColor: brand-indigo
    textColor: text-on-dark
    rounded: md
    padding: '12px 20px'
    use: 'tertiary CTA on white surface — dark indigo authority'
  button-text-link:
    backgroundColor: transparent
    textColor: link
  card-feature:
    backgroundColor: surface
    textColor: text
    rounded: lg
    padding: 32
    border: '1px solid #e0e2eb'
    use: 'standard feature card on white canvas'
  card-module:
    backgroundColor: surface-soft
    textColor: text
    rounded: lg
    padding: 24
    use: 'modular block diagram showing composable Weaviate component'
  card-product:
    backgroundColor: surface-soft
    textColor: text
    rounded: lg
    padding: 24
    use: 'shows Weaviate Cloud / Console product chrome'
  card-code-window:
    backgroundColor: surface-dark
    textColor: text-on-dark
    rounded: lg
    padding: 24
    use: 'embeds Python / GraphQL queries — dark indigo card on light canvas'
  card-pricing-tier:
    backgroundColor: surface
    rounded: lg
    padding: 32
    border: '1px solid #e0e2eb'
  card-pricing-tier-featured:
    backgroundColor: surface
    rounded: lg
    padding: 32
    border: '2px solid #1cdb46'
    use: 'featured tier marked by 2px green border'
  badge-pill:
    backgroundColor: surface-soft
    textColor: text
    rounded: pill
    padding: '4px 12px'
  badge-green:
    backgroundColor: brand-soft
    textColor: brand-deep
    rounded: pill
    padding: '4px 12px'
    transform: uppercase
  badge-indigo:
    backgroundColor: surface-indigo
    textColor: brand-indigo
    rounded: pill
    padding: '4px 12px'
  text-input:
    backgroundColor: surface
    textColor: text
    rounded: md
    padding: '10px 14px'
    height: 40
    border: '1px solid #e0e2eb'
  cta-band-indigo:
    backgroundColor: surface-dark
    textColor: text-on-dark
    rounded: lg
    padding: 64
    use: 'pre-footer "Try Weaviate" CTA — deep indigo band, not black'
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
  ambient: 'rgba(19, 12, 73, 0.04) 0 1px 2px'
  standard: 'rgba(19, 12, 73, 0.08) 0 4px 12px'
  elevated: 'rgba(19, 12, 73, 0.12) 0 12px 32px -8px'
  deep: 'rgba(19, 12, 73, 0.16) 0 24px 48px -12px'
  ring: '0 0 0 3px rgba(28, 219, 70, 0.30)'

accessibility:
  contrast-text-on-bg: 16.8              # AAA — #0f0a3a on #ffffff
  contrast-text-on-brand: 11.4           # AAA — #0f0a3a on #1cdb46 (deep indigo on green)
  contrast-body-on-bg: 9.0               # AAA — #3d3a6b on #ffffff
  contrast-muted-on-bg: 4.7              # AA — #6e6b8c on #ffffff
  focus-ring: '3px rgba(28, 219, 70, 0.30) ring with 1px solid #1cdb46 core'
  reduced-motion-honored: true

dark-mode: 'optional — Weaviate marketing is light-default; the in-product Weaviate Cloud Console offers a dark theme on a deep indigo `#130c49` canvas'

lineage:
  summary: |
    Weaviate's marketing aesthetic descends from the **open-source
    community-friendly** lineage — bright accent colour, approachable
    type, and modular visual chrome that suggests "you can build with
    these blocks." The signature `#1cdb46` electric green is unlike
    any color in the AI-infra category: it's friendly, it reads as
    growth/freshness, and it pairs with the secondary deep-indigo
    `#130c49` to create a confident two-tone identity. The green is
    too light to carry white text — Weaviate uses deep indigo
    `#0f0a3a` text on green CTAs, an unusual choice that distinguishes
    its buttons from every other green-CTA brand. The page rhythm uses
    Vercel/LangChain-style Inter + 12px-radius cards + 96px section
    breaks, but the indigo + green palette sets it apart. Where
    Pinecone leans clinical-cyan and LangChain leans navy-engineering,
    Weaviate commits to a friendlier register: open-source, modular,
    bright, community-first.
  influences:
    - name: Vercel
      role: Single-accent discipline; dark-CTA-band-on-light-page pattern.
      url: https://vercel.com
    - name: Hugging Face
      role: Bright friendly accent strategy; community-first marketing voice.
      url: https://huggingface.co
    - name: Stripe
      role: Inter + negative-tracking display discipline; trust-via-restraint chromatic strategy.
      url: https://stripe.com
    - name: Tailwind CSS
      role: The slate scale + Inter + JetBrains Mono recipe.
      url: https://tailwindcss.com
---

## 1. Visual Theme & Atmosphere

Weaviate's marketing surface reads like an approachable open-source engineering site — a pure white `#ffffff` canvas carrying confident deep-indigo `#0f0a3a` type, with one signature electric green (`#1cdb46`) that handles every primary CTA, every link, every focus ring. The green is unlike any color in the AI-infra category: it's friendly, it reads as growth and freshness, and it pairs with a secondary deep-indigo `#130c49` to create a confident two-tone identity that signals "open-source, modular, community-first."

The defining typographic move: green CTAs carry **deep-indigo text, not white**. Weaviate's green is too light to read white text legibly (contrast under 3:1), so the brand commits to deep indigo `#0f0a3a` on green — the highest-contrast pairing in the system at 11.4:1. This is unusual in the dev-tool category (most green-CTA brands force white text), and it gives Weaviate a distinctive, instantly recognizable button treatment.

The defining visual artifact is the **modular block diagram** — composable rectangles representing Weaviate's modules (Vectorizer, Generator, Reranker, Tokenizer) connected by arrows. The diagram suggests the brand's open-source identity: "these are the blocks; combine them however you like." Where Pinecone shows vector-grid clusters, Weaviate shows pluggable modules.

Type voice runs Inter at weight 600 for display headlines (700 only at the largest hero size), with negative tracking (`-0.5px` to `-2px`). Body type runs Inter at 400 with 1.60 line-height. JetBrains Mono carries every code surface; Python and GraphQL query examples ("Get { Article(nearText: ...) {...} }") show how the database speaks.

The page rhythm is monolithic light canvas top to bottom, with a single deep-indigo `#130c49` pre-footer CTA band as the dramatic contrast moment. The dark band is **indigo, not black** — Weaviate avoids the corporate-severity of pure black; even its dark surface stays warm and brand-aligned.

**Key Characteristics:**
- Pure white `#ffffff` canvas with deep-indigo `#0f0a3a` type. Marketing is light-mode by default.
- Signature `#1cdb46` electric green for primary CTAs, links, focus rings.
- Deep indigo `#0f0a3a` text on green CTAs (NOT white) — the brand's distinctive contrast move.
- Inter at weight 600 (display) with negative tracking on every headline.
- JetBrains Mono on every code surface; code-window cards on deep indigo `#130c49` background.
- Modular block diagrams as the brand's signature visual artifact.
- 1px `#e0e2eb` hairline borders on every feature card.
- Pre-footer CTA flips to deep indigo `#130c49` (NOT black) for warm contrast.
- 8px radius on CTAs, 12px on cards, 9999px reserved for badges.
- 96px section rhythm; 32px feature card padding.
- Two-tone brand discipline — green + deep indigo, supporting grayscale.

## 2. Color Palette & Roles

### Primary
- **Bg / Canvas** (`#ffffff`): Pure white — runs every marketing page top to bottom.
- **Text** (`#0f0a3a`): Deep indigo, not pure black — adds warmth and brand alignment to every text moment.
- **Brand / Primary CTA** (`#1cdb46`): The Weaviate electric green — every primary CTA, every link, every brand-critical accent.

### Brand & Dark
- **Brand** (`#1cdb46`): Reserved for primary CTAs, link state, focus rings, featured-tier border.
- **Brand Hover** (`#15b939`): Press / hover-darker variant.
- **Brand Active** (`#0f9e2f`): Deep green for pressed/active state.
- **Brand Deep** (`#0a6b1f`): Darkest green for type on `brand-soft` surface.
- **Brand Indigo** (`#130c49`): Secondary brand — deep indigo for footer, dark CTA band, dark surfaces.
- **Bg Deep** (`#130c49`): Same as brand-indigo — the dark surface ground.

### Accent
Weaviate runs a deliberately constrained accent system. Decorative accents are reserved for product UI sub-states.
- **Accent Cyan** (`#06b6d4`): Rare hybrid-search accent — used inside product UI mockups.
- **Accent Violet** (`#8b5cf6`): Rare module-system accent — used inside module-block diagrams to differentiate between module types.
- **Accent Amber** (`#f59e0b`): Inside product UI for warning indicators.
- **Accent Rose** (`#ef4444`): Inside product UI for error indicators.

### Interactive
- **Link** (`#1cdb46`): Inline body links match brand. Underlined.
- **Link Hover** (`#0f9e2f`): Hover darkens link 1 step.
- **Selected** (`rgba(28, 219, 70, 0.20)`): Selected text background — green tint.
- **Disabled** (`#9a98b1`): Disabled labels and tertiary text.

### Neutral Scale
- **Text** (`#0f0a3a`): Deep indigo — headlines, primary type.
- **Text Strong** (`#1a1547`): Emphasised paragraphs.
- **Text Body** (`#3d3a6b`): Default running-text — softened indigo.
- **Text Muted** (`#6e6b8c`): Captions, breadcrumbs.
- **Text Faint** (`#9a98b1`): Tertiary fine-print.
- **Text on Dark** (`#ffffff`): Headlines on dark indigo CTA band.
- **Text on Dark Muted** (`#c4c2d6`): Body text on dark indigo CTA band.

### Surface & Borders
- **Surface Soft** (`#f1f3f7`): Section dividers, very-soft band tints.
- **Bg Soft** (`#f8f9fb`): Slightly tinted band for editorial alternation.
- **Surface** (`#ffffff`): Default content card on white canvas.
- **Surface Green** (`#e6fae9`): Tinted green surface for info callouts.
- **Surface Indigo** (`#eaeaf5`): Tinted indigo surface for info callouts.
- **Surface Dark** (`#130c49`): Code-window background, dark CTA band, footer.
- **Surface Dark Card** (`#1f1860`): Nested card on dark indigo band.
- **Border** (`#e0e2eb`): 1px hairline on cards.
- **Border Strong** (`#c5c8d4`): Divider on input underlines.
- **Border Soft** (`#f1f3f7`): Subtle separator inside dense lists.
- **Border Green** (`#1cdb46`): Focus border on inputs and 2px featured-tier border.

### Shadow Colors
Weaviate uses indigo-tinted shadows at low alpha — the shadows align with the brand's deep-indigo secondary color rather than reading as neutral graphite. This subtly ties depth to brand identity.
- **Shadow Color** (`rgba(19, 12, 73, 0.04)`): Ambient shadow for subtle elevation.
- **Shadow Color Md** (`rgba(19, 12, 73, 0.08)`): Standard card shadow.
- **Shadow Color Lg** (`rgba(19, 12, 73, 0.12)`): Hover-state lift, modal entrance.

### Semantic
- **Success** (`#1cdb46`): Confirmation toasts — same as brand. Green is already the success color.
- **Warning** (`#f59e0b`): Caution states.
- **Danger** (`#ef4444`): Destructive actions.
- **Info** (`#06b6d4`): Informational notices — accent cyan.

## 3. Typography Rules

### Font Family
- **Primary**: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`. Inter handles every text role.
- **Mono**: `JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace`. Code blocks, GraphQL queries, namespace identifiers.
- **OpenType features**: `'cv11'` and `'ss01'` toggled at display sizes.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display-xl | Inter | 64 | 700 | 1.05 | -2px | ss01 | Homepage h1 ("The AI-native database") |
| display-lg | Inter | 52 | 700 | 1.10 | -1.5px | — | Section heads on top of major bands |
| display-md | Inter | 40 | 600 | 1.15 | -1px | — | Sub-section heads, CTA-band headlines |
| display-sm | Inter | 30 | 600 | 1.20 | -0.5px | — | Card titles, pricing tier prices |
| title-lg | Inter | 24 | 600 | 1.30 | -0.2px | — | Pricing plan names |
| title-md | Inter | 20 | 600 | 1.35 | 0 | — | Card titles |
| title-sm | Inter | 16 | 600 | 1.40 | 0 | — | Small card titles, list labels |
| body-lg | Inter | 18 | 400 | 1.60 | 0 | — | Hero subhead |
| body-md | Inter | 16 | 400 | 1.60 | 0 | — | Default running-text |
| body-sm | Inter | 14 | 400 | 1.55 | 0 | — | Footer body, fine-print |
| caption | Inter | 13 | 500 | 1.40 | 0 | — | Badge labels, captions |
| caption-uppercase | Inter | 11 | 600 | 1.40 | 1.5px | — | Section labels, eyebrows |
| stat-display | Inter | 56 | 700 | 1.0 | -1.5px | — | Stat callouts ("13k+", "1.5M+") — green or indigo |
| code-md | JetBrains Mono | 14 | 400 | 1.60 | 0 | — | Code blocks (in dark code-window cards) |
| code-sm | JetBrains Mono | 12 | 400 | 1.50 | 0 | — | Inline code in body paragraphs |
| button | Inter | 14 | 600 | 1.00 | 0 | — | Standard button labels |
| nav-link | Inter | 14 | 500 | 1.40 | 0 | — | Top-nav menu items |

### Principles
- **Display weights stay at 600–700.** 700 reserved for the homepage h1; 600 below.
- **Negative tracking is essential** for display sizes.
- **Body and labels stay at 400 / 500 / 600.**
- **Body line-height stays at 1.60.** Documentation-tall.
- **Mono everywhere code or query identifiers appear.** GraphQL field names use mono inline.
- **Stat-display sizes carry credibility moments.** "13k+ stars", "1.5M+ downloads" — always green or deep indigo.
- **Caption-uppercase carries section structure.** 11px uppercase eyebrow at 1.5px tracking on every band.
- **Indigo headlines, not black.** The deep indigo `#0f0a3a` adds warmth that pure black lacks.

## 4. Component Stylings

### Buttons (4 variants)

**`button-primary`** — The signature green CTA. Background `#1cdb46`, **text `#0f0a3a` (deep indigo, not white)**, Inter 14px / 600, padding 12px × 20px, height 40px, radius 8px. The deep-indigo-on-green is the brand's signature button treatment. Hover: `#15b939` over 120ms; subtle 2px lift.

**`button-secondary`** — White-bordered button. Background `#ffffff`, text `#0f0a3a`, 1px solid `#e0e2eb` border, same padding/radius as primary. Hover: background fades to `#f1f3f7`.

**`button-indigo`** — Dark indigo CTA on white surface. Background `#130c49`, text `#ffffff`. Used for "View on GitHub" or "Read whitepaper" — the dark authority CTA.

**`button-text-link`** — Pure text link in `#1cdb46` with hover-darken to `#0f9e2f`. Used inside body paragraphs.

### Cards

**`card-feature`** — Standard white feature card. Background `#ffffff`, radius 12px, padding 32px, 1px solid `#e0e2eb` border. Hover: shadow intensifies; border stays.

**`card-module`** — Modular block diagram showing a Weaviate component (Vectorizer, Generator, Reranker, Tokenizer). Background `#f1f3f7`, contains 8px-radius `#ffffff` rectangles representing modules connected by 1.5px `#1cdb46` arrow lines. Radius 12px, padding 24px. The brand's signature visual chrome.

**`card-product`** — Card showing actual Weaviate Cloud Console UI (collection list, query playground, schema browser). Background `#f8f9fb`, radius 12px, padding 24px.

**`card-code-window`** — Dark card showing a Python or GraphQL code block. Background `#130c49` (deep indigo, not black), code in JetBrains Mono with syntax highlighting (keywords green-shifted to `#86efac`, strings `#fde68a`, comments `#9a98b1`), radius 12px, padding 24px. Top-left "Python" or "GraphQL" tab indicator.

**`card-pricing-tier`** — Standard pricing tier card. Background `#ffffff`, radius 12px, padding 32px, 1px solid `#e0e2eb` border.

**`card-pricing-tier-featured`** — Featured tier marked by 2px solid `#1cdb46` border. The thicker green border alone is the featured signal.

### Badges & Pills

**`badge-pill`** — Small light pill label. Background `#f1f3f7`, text `#0f0a3a`, caption typography, radius 9999.

**`badge-green`** — Green tinted pill for "NEW" or open-source labels. Background `#e6fae9`, text `#0a6b1f`, caption-uppercase typography, radius 9999.

**`badge-indigo`** — Indigo tinted pill for "ENTERPRISE" or product-tier labels. Background `#eaeaf5`, text `#130c49`, caption typography, radius 9999.

### Inputs / Forms

**`text-input`** — White text input. Background `#ffffff`, radius 8px, padding 10px × 14px, height 40px, 1px solid `#e0e2eb` border.

**`text-input-focused`** — 3px `rgba(28, 219, 70, 0.30)` ring with 1px solid `#1cdb46` core.

### Navigation

**`top-nav`** — White nav bar pinned to top, 64px tall, background `#ffffff`. Logo + "Weaviate" wordmark left, primary horizontal menu (Product, Use Cases, Customers, Resources, Pricing, Open Source) center, right-side: "Sign in" + green `button-primary` ("Try Cloud").

### Decorative

**`module-arrow`** — Inline arrow chrome between modular blocks. 1.5px `#1cdb46` stroke, arrow head at terminus.

**`stat-callout`** — Inline green or indigo stat numbers ("13k+ stars", "1.5M+ downloads", "200+ contributors"). Stat-display typography (56px / 700 / -1.5px). Used flat, not in cards.

**`cta-band-indigo`** — Pre-footer "Try Weaviate today" CTA band. `#130c49` surface (NOT black), 64px padding. h2 in display-md white, body subhead in `#c4c2d6`, primary `#1cdb46` CTA + ghost white text-link.

**`customer-logo-strip`** — Horizontal monochrome customer-logo strip. Background `#ffffff`, logos in `#6e6b8c`, padding 32px vertical.

## 5. Layout Principles

### Spacing System
Base unit **4px**. Tokens: `xxs:4 · xs:8 · sm:12 · md:16 · lg:24 · xl:32 · xxl:48 · section:96`. 96px section padding, 32px feature card padding, 24px code-window card padding.

### Grid & Container
Max content width **1200px** centered. Editorial body uses a 12-column grid; hero often uses a 6/6 split (h1 left, code-window or module-diagram right). Feature card grids run 3-up at desktop, 2-up at tablet, 1-up at mobile. Pricing grids run 3-up at desktop.

### Whitespace Philosophy
Weaviate uses balanced, friendly whitespace appropriate for an open-source community-facing brand. Generous enough to feel calm, tight enough to fit dense technical information. The rhythm feels welcoming rather than corporate.

### Section Cadence
White hero band → modular block diagram or code-window → light feature card grid → softly-tinted band with stat callouts → product mockup band → customer-logo strip → pricing → light feature card → deep-indigo `#130c49` pre-footer CTA → indigo footer.

## 6. Shapes & Radius Scale

| Tier | Token | Value | Use |
|---|---|---|---|
| Micro | micro | 2px | Reserved |
| XS | xs | 4px | Badge accents, syntax-highlight chips |
| Standard | sm | 6px | Small inline buttons, tight inputs |
| Comfortable | md | 8px | Standard CTA buttons, text inputs, module rectangles |
| Large | lg | 12px | Content cards, code-window cards, pricing tiers |
| Featured | xl | 16px | Hero shells |
| Pill | pill | 9999px | Badges, avatars |

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No shadow, no border | Body sections, top nav, hero text |
| 1 — Soft hairline | 1px `#e0e2eb` border | Standard feature cards, pricing tiers |
| 2 — Soft shadow | 1px border + ambient indigo shadow | Cards on hover |
| 3 — Standard shadow | 1px border + standard indigo shadow | Featured cards |
| 4 — Featured | 2px solid `#1cdb46` border | Featured pricing tier |
| 5 — Modal | Standard shadow + backdrop dim 60% | Dialogs, dropdowns |

### Shadow Philosophy
Weaviate uses indigo-tinted shadows at low alpha — `rgba(19, 12, 73, ...)`. Tying depth subtly to the secondary brand indigo distinguishes it from generic graphite shadows. Hover lifts are subtle (translateY(-2px) + shadow up one tier).

## 8. Interaction & Motion

### Easing Curves
- **Standard ease**: `cubic-bezier(0.4, 0, 0.2, 1)` — default.
- **Emphasized ease**: `cubic-bezier(0.2, 0, 0, 1)` — CTA hover, modal entrances.

### Duration Buckets
- **Fast (120ms)**: Color and opacity transitions.
- **Standard (200ms)**: Card hover lifts, dropdown opens.
- **Slow (320ms)**: Modal entrance, scroll reveals.

### Per-Component Micro-States
- **Button hover**: Green CTAs darken `#1cdb46` → `#15b939` over 120ms; lift 1px via translateY(-1px).
- **Card hover**: Translate Y(-2px) over 200ms; shadow intensifies one tier.
- **Module-block diagram**: Modules pulse subtly on scroll-into-view (opacity 0.7→1.0 stagger by 100ms across blocks) — suggests "blocks coming online."
- **Code-window hover**: No state change.
- **Link hover**: Color darkens `#1cdb46` → `#0f9e2f`; underline thickens 1px → 2px.
- **Input focus**: 3px green ring expands.

### Page Transitions
Standard browser navigation. Section-on-scroll reveals are 320ms fade-in-up. No parallax.

### Reduced Motion
Honored — module-block stagger animation skipped, transforms removed, transitions to 100ms opacity-only.

## 9. Accessibility & A11y

### Contrast Pairs
- **Text on bg**: `#0f0a3a` on `#ffffff` = **16.8** — AAA.
- **Body on bg**: `#3d3a6b` on `#ffffff` = **9.0** — AAA.
- **Muted on bg**: `#6e6b8c` on `#ffffff` = **4.7** — AA.
- **On-brand on brand**: `#0f0a3a` on `#1cdb46` = **11.4** — AAA. The deep-indigo-on-green is the strongest contrast pair in the system. Note: white text on green would be only 2.4 — that's why Weaviate commits to indigo on green.
- **Brand-deep on brand-soft**: `#0a6b1f` on `#e6fae9` = **6.8** — AAA.
- **Text-on-dark on surface-dark**: `#ffffff` on `#130c49` = **15.5** — AAA.

### Focus Indicators
3px `rgba(28, 219, 70, 0.30)` ring with 1px solid `#1cdb46` core. The double-ring is unmistakable on white canvas.

### ARIA Patterns
- **Buttons**: Native `<button>`; icon-only carries `aria-label`.
- **Code blocks**: `<pre><code>` with `aria-label="Python example"`.
- **Module diagrams**: SVG with `<title>` and `<desc>`; each block carries `role="img" aria-label="..."`.
- **Navigation**: `<nav aria-label="Primary">`.
- **Dialog**: `role="dialog"` + `aria-labelledby`.

### Keyboard Navigation
Tab order follows reading order. Skip-link to `<main>`. Modal trap focus + Escape closes.

### Screen Reader Hints
Module-block diagrams provide textual fallback. Stat numbers like "13k+ stars" use `aria-label="13 thousand plus stars"`.

### Reduced Motion Handling
Honored — module-stagger animation skipped, all transforms removed.

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
Top nav collapses to hamburger at < 768px. Hero 6/6 grid collapses to single-column on mobile. Module-block diagrams swap from horizontal to vertical orientation on mobile.

### Image Behavior
Code blocks stay at fixed font-size; horizontal scroll on mobile. Customer logos retain native widths; row wraps.

## 11. Content & Voice

### Tone
**Open-source-friendly, technically confident, community-first.** Weaviate writes for engineers who care about modularity, transparency, and the open-source ecosystem. The tone is warmer than corporate-tech (closer to Hugging Face than to Snowflake) — emphasizes "you can run this yourself, you can extend this, you can read the source." Headlines state capabilities ("The AI-native database for AI agents"); body copy supports with module names, GitHub references, and community metrics.

### Microcopy Patterns
- **CTA verbs**: "Try Cloud", "Get started", "Read the docs", "View on GitHub", "Talk to sales", "Star us on GitHub". The "Star us on GitHub" is particularly Weaviate — community participation as a CTA.
- **Section labels**: Uppercase eyebrow — "OPEN SOURCE", "MODULES", "INTEGRATIONS", "COMMUNITY", "PRICING".
- **Stat numbers**: Followed by qualifier — "13k+ stars", "1.5M+ downloads", "200+ contributors", "60+ integrations".
- **Feature copy**: Verb-first ("Vectorize any data", "Combine search modes", "Deploy anywhere").

### Empty States
Console product UI: "No collections yet — create your first to start indexing data" with green link to docs. Community-friendly without being whimsical.

### Error Messages
**Pattern**: `<icon-x in #ef4444> + "What went wrong" + "What to try next"`. Example: "Schema validation failed — verify your property types match the collection definition."

### Success Confirmations
Toast in `text` over `surface` with green accent stripe. "Collection created — schema applied to 'Products'." Auto-dismiss 4s.

## 12. Dark Mode & Theming

Weaviate marketing is **light-default**. The Weaviate Cloud Console supports a dark theme on a deep indigo `#130c49` canvas (NOT black) — keeping the brand's secondary indigo as the dark-mode ground. Tokens map: `bg: #130c49`, `surface: #1f1860`, `border: #2d2474`, `text: #ffffff`, `text-body: #c4c2d6`, `brand: #1cdb46` (unchanged), `link: #4ade80` (lightened green for contrast). Code-window cards retain their `#130c49` background in both themes — code is always shown on the deep-indigo surface.

## 13. Lineage & Influences

Weaviate's marketing aesthetic descends from the **open-source community-facing** lineage that runs through Hugging Face, Postgres, and the broader open-database tradition — bright accent color, approachable type, modular visual chrome that suggests "you can build with these blocks." The signature `#1cdb46` electric green is unlike any color in the AI-infra category: it reads as growth, freshness, and open-source community rather than corporate severity.

The **deep-indigo-on-green button treatment** is the brand's distinctive contrast move. Most green-CTA brands force white text on green; Weaviate's green is too light for that, so the brand commits to indigo `#0f0a3a` on green — a 11.4:1 contrast ratio that's both technically AAA-compliant and visually distinctive. This unusual choice makes Weaviate buttons instantly recognizable.

The modular block diagram as marketing chrome borrows from Hashicorp's architecture-diagram tradition but with a softer, more approachable rendering. The 600-weight Inter with negative tracking tracks the Stripe / Vercel display discipline. The pre-footer dark-CTA-band-on-light pattern is Vercel's, but Weaviate uses deep indigo `#130c49` instead of black — keeping the dark surface warm and brand-aligned.

- **Hugging Face** — Bright friendly accent strategy; community-first marketing voice; open-source-as-brand-identity. https://huggingface.co
- **Vercel** — Single-accent discipline; dark-CTA-band-on-light-page pattern. https://vercel.com
- **Stripe** — Inter + negative-tracking display discipline. https://stripe.com
- **Hashicorp** — Architecture-diagram-as-marketing-chrome lineage. https://www.hashicorp.com
- **Tailwind CSS** — The slate scale + Inter + JetBrains Mono recipe. https://tailwindcss.com

## 14. Do's and Don'ts

### Do
- Anchor every page on the white `#ffffff` canvas. Marketing is light-default.
- Use deep-indigo `#0f0a3a` text on green `#1cdb46` CTAs — the brand's signature button treatment. White on green fails contrast.
- Reserve the green for primary CTAs, links, focus rings, featured-tier border, and module-arrow chrome.
- Use Inter at weight 600 (display) with negative tracking on every headline.
- Use modular block diagrams as primary marketing chrome — Vectorizer, Generator, Reranker visualized as composable blocks.
- Show actual Python or GraphQL queries inside dark indigo `#130c49` code-window cards.
- Use deep indigo `#130c49` as the dark surface (NOT pure black) — keeps the dark band warm and brand-aligned.
- Use stat-callout numbers (13k+ stars, 1.5M+ downloads) to establish open-source community credibility.
- Anchor every band with 96px vertical rhythm.
- Use indigo-tinted shadows (`rgba(19, 12, 73, ...)`) rather than neutral graphite shadows.

### Don't
- Don't put white text on green CTAs. Weaviate's green is too light — use deep indigo `#0f0a3a` instead.
- Don't switch the marketing canvas to black mid-page. Use deep indigo `#130c49` for dark surfaces.
- Don't introduce a third brand color. Weaviate is green + indigo + grayscale.
- Don't bold display weight beyond 700.
- Don't replace module-block diagrams with abstract illustrations.
- Don't use rounded-pill buttons for primary CTAs. Standard radius is 8px.
- Don't use the green for body text — only for actionable / accent moments.
- Don't add gradient halos to the green. Solid only.
- Don't use consumer-marketing CTA verbs like "Sign up free" only — pair with community CTAs like "Star us on GitHub".

## 15. Agent Prompt Guide

### Quick Color Reference
```
Bg / Canvas:     #ffffff (pure white)
Bg Soft:         #f8f9fb (alternating band)
Surface Soft:    #f1f3f7 (section divider tint)
Border:          #e0e2eb (1px hairline)
Text:            #0f0a3a (deep indigo, not black)
Text Body:       #3d3a6b (running-text)
Text Muted:      #6e6b8c (captions)
Brand:           #1cdb46 (Weaviate electric green)
Brand Hover:     #15b939 (press state)
On-Brand:        #0f0a3a (DEEP INDIGO on green, NOT white)
Surface Dark:    #130c49 (deep indigo — code-window, footer, pre-footer CTA)
```

### Example Component Prompts

1. "Create a Weaviate hero band on `#ffffff` canvas, with an Inter 64px / 700 / -2px tracking `#0f0a3a` deep-indigo headline ('The AI-native database'), 18px / 400 `#3d3a6b` subhead, and a green `#1cdb46` primary CTA with **deep-indigo `#0f0a3a` text** ('Try Cloud') paired with a white-bordered secondary CTA ('Star on GitHub'). Right side: a 12px-radius `#130c49` deep-indigo code-window card containing a JetBrains Mono GraphQL query."

2. "Design a modular block diagram card showing four Weaviate modules (Vectorizer, Generator, Reranker, Tokenizer). `#f1f3f7` background, 12px radius, 24px padding. Each module drawn as `#ffffff` 8px-radius rectangle with `#0f0a3a` label; connecting arrows are 1.5px `#1cdb46` lines."

3. "Build a 3-column feature card grid on `#ffffff`. Each card: `#ffffff` background, 1px solid `#e0e2eb` border, 12px radius, 32px padding, `#0f0a3a` 20px / 600 title, `#3d3a6b` 16px body, indigo-tinted shadow. Each card carries a small 11px / 600 / 1.5px uppercase eyebrow ('OPEN SOURCE', 'MODULES', 'INTEGRATIONS')."

4. "Compose a stat-callout strip with three numbers ('13k+', '1.5M+', '200+') in Inter 56px / 700 / `#1cdb46`, each with a `#6e6b8c` 11px / 600 uppercase label below ('GITHUB STARS', 'DOWNLOADS', 'CONTRIBUTORS'). 96px vertical padding."

5. "Compose a pricing grid with 3 tiers on `#ffffff`. Two standard `#ffffff` cards (12px radius, 32px padding, 1px solid `#e0e2eb` border) and one featured tier marked with a 2px solid `#1cdb46` border."

6. "Design a pre-footer dark CTA band: full-bleed `#130c49` deep-indigo background (NOT black), 64px padding. Inter 40px / 600 / -1px tracking `#ffffff` headline ('Try Weaviate today'), 16px / 400 `#c4c2d6` subhead, primary `#1cdb46` CTA with **deep-indigo text** ('Get Started') + ghost `#ffffff` text-link with arrow ('View on GitHub')."

### Iteration Guide
1. Start with the white canvas. The brand commits to bright friendly white — open-source community register.
2. Always use deep indigo `#0f0a3a` text on green CTAs. White text on green fails contrast and breaks the brand.
3. Pick one place per band where the green appears. Two greens competing is too many.
4. Keep display headlines at Inter 600 (or 700 for the homepage h1) with negative tracking.
5. Use deep indigo `#130c49` for any dark surface. Pure black breaks the brand warmth.
6. Code always lives on dark indigo `#130c49`. Light-on-light code blocks break the brand idiom.
7. Use modular block diagrams wherever you'd otherwise use abstract illustration. The blocks ARE the brand's marketing.
8. Use indigo-tinted shadows (`rgba(19, 12, 73, ...)`) — not neutral graphite. Subtle but brand-aligned.
9. The pre-footer CTA is the page's one dramatic moment — full-bleed deep indigo, single CTA.
