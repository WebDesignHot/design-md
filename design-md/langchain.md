---
name: LangChain
tagline: Deep navy canvas with Inter precision and a quietly confident teal accent — agent orchestration dressed as engineering documentation.
updated_at: 2026-05-04T20:53:02+12:00
published_at: 2026-05-04T20:53:02+12:00
author: webdesignhot
source_url: https://www.langchain.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [ai, dev-tools]
tags: [dark, navy, sans, mono, technical, dense]
preview_swatch: ['#0f172a', '#1e90ff', '#ffffff']
related: [anthropic, openai, modal]
description: 'LangChain''s marketing surface reads like the spec sheet for an agent platform — a deep navy `#0f172a` canvas, Inter at weight 600 carrying every display headline, and a confident `#1e90ff`-style blue that handles primary CTAs, link state, and the orchestration-flow diagrams that LangChain turns into marketing chrome. JetBrains Mono on every code surface; Python and TypeScript snippets sit inside dark-on-dark cards as the brand''s primary visual artifact. The system rejects gradient halos and consumer-friendly motion in favor of a static, engineering-grade rhythm — a brand built for engineers reading docs, not browsing campaigns.'

colors:
  bg: '#0f172a'                  # canvas — slate-900-ish navy
  bg-deep: '#020617'              # near-black footer band
  surface-soft: '#111827'         # softer band tint
  surface: '#1e293b'              # default content card
  surface-elevated: '#334155'     # nested cards inside dark cards
  surface-light: '#f8fafc'        # rare light section ground
  text: '#f8fafc'                 # primary headlines + strong type
  text-body: '#cbd5e1'            # default running-text on dark
  text-strong: '#e2e8f0'          # emphasised paragraphs
  text-muted: '#94a3b8'           # captions, breadcrumbs
  text-faint: '#64748b'           # tertiary fine-print
  text-on-light: '#0f172a'        # navy text on rare light surfaces
  brand: '#1e90ff'                # signature LangChain blue
  brand-hover: '#1d4ed8'          # press / hover-darker variant
  brand-active: '#1e40af'         # deep blue for active state
  brand-soft: '#dbeafe'            # tinted surface for blue badges
  on-brand: '#ffffff'             # white text on blue CTAs
  on-dark: '#f8fafc'              # primary text on dark surfaces
  link: '#60a5fa'                 # inline links — slightly lighter than brand for legibility on dark
  link-hover: '#93c5fd'
  link-on-light: '#1e90ff'        # link color when on light surface
  border: '#1e293b'               # 1px hairline on cards
  border-strong: '#334155'        # divider on inputs / dropdown rows
  border-soft: '#1e293b'          # subtle separator
  border-blue: '#1e90ff'          # focus border
  shadow-color: 'rgba(2, 6, 23, 0.5)'
  shadow-glow-blue: 'rgba(30, 144, 255, 0.20)'
  accent-emerald: '#10b981'       # success states
  accent-rose: '#f43f5e'          # error states
  accent-amber: '#f59e0b'         # warning highlights
  accent-violet: '#8b5cf6'        # rare LangSmith accent for evals
  accent-cyan: '#06b6d4'          # rare LangGraph accent
  success: '#10b981'
  warning: '#f59e0b'
  danger: '#f43f5e'
  info: '#1e90ff'
  code-keyword: '#60a5fa'
  code-string: '#10b981'
  code-comment: '#64748b'
  code-symbol: '#f59e0b'

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
    weights: [400, 500, 600]
  scale:
    display-xl:        { size: 72, weight: 700, lineHeight: 1.05, tracking: '-2.5px',  family: display, opentype: "'ss01'" }
    display-lg:        { size: 56, weight: 700, lineHeight: 1.10, tracking: '-2px',    family: display }
    display-md:        { size: 44, weight: 600, lineHeight: 1.15, tracking: '-1.5px',  family: display }
    display-sm:        { size: 32, weight: 600, lineHeight: 1.20, tracking: '-0.8px',  family: display }
    title-lg:          { size: 24, weight: 600, lineHeight: 1.30, tracking: '-0.3px',  family: display }
    title-md:          { size: 20, weight: 600, lineHeight: 1.35, tracking: 0,         family: body }
    title-sm:          { size: 16, weight: 600, lineHeight: 1.40, tracking: 0,         family: body }
    body-lg:           { size: 18, weight: 400, lineHeight: 1.55, tracking: 0,         family: body }
    body-md:           { size: 16, weight: 400, lineHeight: 1.55, tracking: 0,         family: body }
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
    padding: '12px 20px'
    height: 40
    use: 'every primary CTA — Get Started, Talk to sales'
  button-secondary:
    backgroundColor: surface
    textColor: on-dark
    rounded: md
    padding: '12px 20px'
    height: 40
    use: 'paired secondary action next to brand CTA'
  button-ghost:
    backgroundColor: transparent
    textColor: on-dark
    rounded: md
    padding: '10px 16px'
    use: 'tertiary actions, nav inline links'
  button-text-link:
    backgroundColor: transparent
    textColor: link
    use: 'inline link CTAs with arrow glyph'
  card-feature:
    backgroundColor: surface
    textColor: on-dark
    rounded: lg
    padding: 32
    use: 'standard feature card on dark canvas'
  card-product:
    backgroundColor: surface-soft
    textColor: on-dark
    rounded: lg
    padding: 24
    use: 'shows LangSmith / LangGraph product chrome inside marketing context'
  card-code-window:
    backgroundColor: surface
    textColor: on-dark
    rounded: lg
    padding: 24
    use: 'embeds Python / TypeScript snippets via JetBrains Mono'
  card-pricing-tier:
    backgroundColor: surface
    rounded: lg
    padding: 32
  card-pricing-tier-featured:
    backgroundColor: surface-elevated
    rounded: lg
    padding: 32
    border: '1px solid #1e90ff'
    use: 'featured tier marked by blue hairline border'
  badge-pill:
    backgroundColor: surface
    textColor: on-dark
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
    textColor: on-dark
    rounded: md
    padding: '10px 14px'
    height: 40
  cta-band:
    backgroundColor: surface
    textColor: on-dark
    rounded: lg
    padding: 64
    use: 'pre-footer "Build with LangChain" CTA band'
  top-nav:
    backgroundColor: bg
    textColor: on-dark
    height: 64

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 120
  duration-standard: 200
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce — opacity-only transitions, no transforms'

breakpoints:
  mobile: 640
  tablet: 768
  desktop: 1024
  wide: 1440

shadows:
  ambient: 'rgba(2, 6, 23, 0.30) 0 1px 2px'
  standard: 'rgba(2, 6, 23, 0.40) 0 4px 12px'
  elevated: 'rgba(2, 6, 23, 0.50) 0 12px 32px -8px'
  deep: 'rgba(2, 6, 23, 0.60) 0 24px 48px -12px'
  ring: '0 0 0 2px #1e90ff'

accessibility:
  contrast-text-on-bg: 16.4              # AAA — #f8fafc on #0f172a
  contrast-text-on-brand: 4.6            # AA at body sizes — #ffffff on #1e90ff
  contrast-body-on-bg: 11.2              # AAA — #cbd5e1 on #0f172a
  contrast-muted-on-bg: 5.9              # AA — #94a3b8 on #0f172a
  focus-ring: '2px solid #1e90ff with 2px offset'
  reduced-motion-honored: true

dark-mode: 'this IS the marketing dark mode — LangChain ships docs in light theme, marketing in dark'

lineage:
  summary: |
    LangChain inherits its marketing surface from the developer-tooling
    lineage that runs through Stripe, Vercel, and the modern Linear
    docs aesthetic — a single confident blue (`#1e90ff`) for action,
    Inter at weight 600 carrying display headlines, and JetBrains Mono
    handling every code surface. The deep navy `#0f172a` canvas (Tailwind's
    slate-900) reads as engineering-grade rather than corporate-blue.
    The page operates as a documentation-meets-marketing hybrid:
    architecture diagrams, Python snippets, and orchestration flow
    visuals do the marketing work that consumer brands hand to
    illustration. Where Anthropic's Claude reaches for warm cream and
    Modal picks lime-green optimism, LangChain stays close to the
    "this is infrastructure, not a product" register — slate, blue,
    mono, and a quiet engineering tone.
  influences:
    - name: Vercel
      role: Dark-monolithic marketing rhythm with single-blue accent discipline.
      url: https://vercel.com
    - name: Stripe
      role: Inter-with-negative-tracking display headlines and trust-via-restraint chromatic strategy.
      url: https://stripe.com
    - name: Tailwind CSS (slate palette)
      role: The slate-900 canvas + slate-100 type pairing that ships every modern dev marketing site.
      url: https://tailwindcss.com
    - name: JetBrains
      role: JetBrains Mono as the credibility-via-IDE-typeface signal across every code block.
      url: https://www.jetbrains.com/lp/mono/
---

## 1. Visual Theme & Atmosphere

LangChain's marketing surface reads like the spec sheet of an agent platform — a deep navy `#0f172a` canvas (Tailwind's slate-900) carrying confident white sans-serif type, with one signature blue (`#1e90ff`-leaning) that handles every primary CTA, every link, every focus ring. The blue operates as the brand's voltage: it appears as buttons, as link underlines, as a hairline-border on the featured pricing tier, and as the inline accent inside architecture-diagram chrome. There is no decorative second accent. The system is monochromatic plus blue.

Where consumer AI brands reach for gradient halos and animated illustrations, LangChain stays austerely engineering-grade. Code blocks, architecture diagrams, and orchestration-flow visuals embed directly inside `#1e293b` surface cards — a barely-lighter-than-canvas tone that signals "engineering panel" rather than "marketing card." Python and TypeScript snippets do the marketing work; the page treats `from langchain_core.messages import HumanMessage` as a hero artifact equal in weight to a headline.

Type voice runs Inter at weight 600 for display headlines, with negative tracking (`-0.8px` to `-2.5px`). The negative tracking is essential — Inter at 600 without it reads too consumer-friendly. Tightened, it gives LangChain the precise, machined feel that matches its positioning as agent-orchestration infrastructure. JetBrains Mono carries every code surface; syntax highlighting stays muted (blue keywords, green strings, gray comments) so the snippet reads as legitimate code rather than as marketing-styled code.

The page rhythm is monolithic dark canvas top to bottom, broken open only by occasional light-band sections (rare) and the pre-footer CTA band. Section padding stays at 96px between major bands; card padding stays at 32px for feature cards and 24px for code-window cards. The whitespace is documentation-tight rather than marketing-soft — appropriate for a brand whose primary user already knows what RAG, vector stores, and tool-calling are.

**Key Characteristics:**
- Deep navy canvas (`#0f172a`) with slate-100 type. Marketing is dark-mode by default.
- Signature blue (`#1e90ff`) for primary CTAs, links, focus rings, and orchestration-diagram accents.
- Inter at weight 600 with negative tracking on every display headline.
- JetBrains Mono on every code surface; Python and TypeScript snippets embed directly inside dark cards.
- Architecture diagrams (graph nodes, edges, agent flows) treated as primary marketing chrome.
- Surface cards are barely lighter than canvas — color-block contrast is deliberately subtle.
- 8px radius on CTAs, 12px on cards, 9999px reserved for badges.
- 96px section rhythm between major bands.
- No gradient halos; depth comes from tonal surface stacking.
- Single brand color discipline — blue + slate, never a second accent in marketing.

## 2. Color Palette & Roles

### Primary
- **Bg / Canvas** (`#0f172a`): Slate-900 navy — runs every marketing page top to bottom.
- **Text** (`#f8fafc`): Slate-50 — all headlines and primary type on dark canvas.
- **Brand / Primary CTA** (`#1e90ff`): The LangChain blue — every primary CTA, every link, every brand-critical accent.

### Brand & Dark
- **Brand** (`#1e90ff`): Reserved for primary CTAs, link state, focus rings, featured-tier hairline borders.
- **Brand Hover** (`#1d4ed8`): Press / hover-darker variant.
- **Brand Active** (`#1e40af`): Deepest blue for pressed/active state.
- **Bg Deep** (`#020617`): Near-black footer band — slate-950.

### Accent
LangChain runs a deliberately constrained accent system. Decorative accents are reserved for product sub-brands (LangSmith, LangGraph) and almost never appear in marketing chrome.
- **Accent Violet** (`#8b5cf6`): Rare LangSmith accent — used inside product UI mockups for evaluation states.
- **Accent Cyan** (`#06b6d4`): Rare LangGraph accent — used inside product UI for graph visualization edges.
- **Accent Emerald** (`#10b981`): Inside product UI for "passed" eval indicators; in marketing only as success toast color.
- **Accent Amber** (`#f59e0b`): Inside product UI for warning indicators.
- **Accent Rose** (`#f43f5e`): Inside product UI for failed-eval indicators.

### Interactive
- **Link** (`#60a5fa`): Inline body links default to a slightly lighter blue than brand for legibility on dark — 5.4 contrast on bg.
- **Link Hover** (`#93c5fd`): Hover lightens the link further, never darker.
- **Selected** (`rgba(30, 144, 255, 0.20)`): Selected text background — blue tint over canvas.
- **Disabled** (`#64748b`): Disabled labels and tertiary text.

### Neutral Scale
- **Text** (`#f8fafc`): Slate-50 — headlines, primary type.
- **Text Strong** (`#e2e8f0`): Slate-200 — emphasised paragraphs.
- **Text Body** (`#cbd5e1`): Slate-300 — default running-text.
- **Text Muted** (`#94a3b8`): Slate-400 — captions, breadcrumbs.
- **Text Faint** (`#64748b`): Slate-500 — tertiary fine-print.

### Surface & Borders
- **Surface Soft** (`#111827`): Section dividers, very-soft band tints.
- **Surface** (`#1e293b`): Default content card — slate-800.
- **Surface Elevated** (`#334155`): Slate-700 — nested cards inside larger dark cards.
- **Surface Light** (`#f8fafc`): Rare light section ground for testimonial bands or whitepaper download sections.
- **Border** (`#1e293b`): 1px hairline matching surface — felt more than seen.
- **Border Strong** (`#334155`): Divider on input underlines, dropdown rows.
- **Border Blue** (`#1e90ff`): Focus border on inputs and featured pricing tier.

### Shadow Colors
LangChain leans flat. Shadow tokens are reserved for hover states on cards and modal entrances.
- **Shadow Color** (`rgba(2, 6, 23, 0.50)`): Deep slate-tinted shadow used at low intensity.
- **Shadow Glow Blue** (`rgba(30, 144, 255, 0.20)`): Rare ambient glow behind hero CTA on top-of-page.

### Semantic
- **Success** (`#10b981`): Confirmation toasts, "passed" eval badges.
- **Warning** (`#f59e0b`): Caution states.
- **Danger** (`#f43f5e`): Destructive actions, validation errors.
- **Info** (`#1e90ff`): Informational notices.

## 3. Typography Rules

### Font Family
- **Primary**: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`. Inter handles every text role.
- **Mono**: `JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace`. Code blocks, terminal output, Python/TypeScript snippets.
- **OpenType features**: `'cv11'` for the alternative single-storey lowercase 'a', `'ss01'` for the disambiguated I/l. Toggled at display sizes for an engineered character.
- **No serif**: Deliberately. The single-family approach is the discipline.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display-xl | Inter | 72 | 700 | 1.05 | -2.5px | ss01 | Homepage h1 ("Build LLM apps that work") |
| display-lg | Inter | 56 | 700 | 1.10 | -2px | — | Section heads on top of major bands |
| display-md | Inter | 44 | 600 | 1.15 | -1.5px | — | Sub-section heads, CTA-band headlines |
| display-sm | Inter | 32 | 600 | 1.20 | -0.8px | — | Card titles, pricing tier prices |
| title-lg | Inter | 24 | 600 | 1.30 | -0.3px | — | Pricing plan names, larger feature titles |
| title-md | Inter | 20 | 600 | 1.35 | 0 | — | Card titles, intro paragraphs |
| title-sm | Inter | 16 | 600 | 1.40 | 0 | — | Small card titles, list labels |
| body-lg | Inter | 18 | 400 | 1.55 | 0 | — | Hero subhead, intro paragraphs |
| body-md | Inter | 16 | 400 | 1.55 | 0 | — | Default running-text |
| body-sm | Inter | 14 | 400 | 1.55 | 0 | — | Footer body, fine-print |
| caption | Inter | 13 | 500 | 1.40 | 0 | — | Badge labels, captions |
| caption-uppercase | Inter | 11 | 600 | 1.40 | 1.5px | — | Section labels, eyebrows ("FEATURES", "PRICING") |
| code-md | JetBrains Mono | 14 | 400 | 1.60 | 0 | — | Code blocks, Python/TS snippets |
| code-sm | JetBrains Mono | 12 | 400 | 1.50 | 0 | — | Inline code, terminal status |
| button | Inter | 14 | 600 | 1.00 | 0 | — | Standard button labels |
| nav-link | Inter | 14 | 500 | 1.40 | 0 | — | Top-nav menu items |

### Principles
- **Display weights stay at 600–700.** The hierarchy is built on size, not weight gradation. 700 for the homepage h1; 600 for everything below.
- **Negative tracking is essential** for display sizes. Inter at 600 without negative tracking reads as too consumer-marketing. The tightened tracking gives LangChain the engineering-grade feel.
- **Body and labels stay at 400 / 500 / 600.** Never bold body text for emphasis — use weight 600 for emphasis instead of 700.
- **Mono everywhere code appears.** No system-font fallback for code; JetBrains Mono is the credibility signal.
- **Caption-uppercase carries section structure.** Every major band is preceded by an 11px uppercase eyebrow at 1.5px tracking — the documentation-of-engineering rhythm.
- **Open-source first.** Inter and JetBrains Mono are both open-source and align with LangChain's open-source identity.
- **No italics.** The system uses weight + size + color for emphasis, never italics — italics read as too literary for an infrastructure brand.

## 4. Component Stylings

### Buttons (4 variants)

**`button-primary`** — The signature blue CTA. Background `#1e90ff`, text `#ffffff`, Inter 14px / 600, padding 12px × 20px, height 40px, radius 8px. Used on every primary action across every page. Hover: `#1d4ed8` over 120ms; no transform.

**`button-secondary`** — Dark surface card button. Background `#1e293b`, text `#f8fafc`, same shape and padding as primary. Used as the secondary action paired with the blue CTA. Hover: surface lightens to `#334155`.

**`button-ghost`** — Transparent text-with-arrow CTA. No background, text `#f8fafc`, `→` glyph after label. Used for tertiary actions and inline link CTAs in the hero subhead.

**`button-text-link`** — Pure text link in `#60a5fa` with hover-lighten to `#93c5fd`. Used inside body paragraphs.

### Cards

**`card-feature`** — Standard dark feature card. Background `#1e293b`, text `#f8fafc`, radius 12px, padding 32px. The default container for every product / feature / capability description.

**`card-product`** — Card showing actual LangSmith / LangGraph product UI. Background `#111827` (slightly darker than feature card), radius 12px, padding 24px. Includes embedded product chrome (sidebar, breadcrumbs, panel headers).

**`card-code-window`** — Dark card showing a Python or TypeScript code block. Background `#1e293b`, code in JetBrains Mono with syntax highlighting (keywords `#60a5fa`, strings `#10b981`, comments `#64748b`, symbols `#f59e0b`), radius 12px, padding 24px. Top-left "Python" or "TypeScript" tab indicator. Often the hero's right-side artifact.

**`card-architecture-diagram`** — Card showing an agent-orchestration flow diagram (nodes, edges, conditional branches). Background `#111827`, nodes drawn as `#1e293b` rounded rectangles with `#1e90ff` connecting edges. Radius 12px, padding 32px.

**`card-pricing-tier`** — Standard pricing tier card. Background `#1e293b`, radius 12px, padding 32px.

**`card-pricing-tier-featured`** — Featured tier marked by 1px solid `#1e90ff` hairline border. Same surface as standard tier — the blue border alone is the featured signal.

### Badges & Pills

**`badge-pill`** — Small dark pill label. Background `#1e293b`, text `#f8fafc`, caption typography, radius 9999, padding 4px × 12px.

**`badge-blue`** — Blue tinted pill for "NEW" or product-name labels. Background `#dbeafe` at 15% alpha (effectively `rgba(30, 144, 255, 0.15)`), text `#60a5fa`, caption-uppercase typography, radius 9999.

### Inputs / Forms

**`text-input`** — Dark text input. Background `#1e293b`, text `#f8fafc`, radius 8px, padding 10px × 14px, height 40px. Border `1px solid #334155` (subtle).

**`text-input-focused`** — Border thickens to 2px solid `#1e90ff` ring with 2px offset. No background change.

### Navigation

**`top-nav`** — Dark nav bar pinned to top, 64px tall, background `#0f172a`. Logo + wordmark left, primary horizontal menu (Products [LangChain, LangSmith, LangGraph], Solutions, Customers, Resources, Pricing) center, right-side cluster: "Sign in" + blue `button-primary` ("Get Started").

**`category-tab` / `category-tab-active`** — Dark tab navigation for Products dropdown. Inactive: transparent + muted text. Active: surface-card background + on-dark text. Padding 8px × 14px, radius 8px.

### Decorative

**`agent-flow-diagram`** — Architecture chrome showing agent → tool → LLM flow. Nodes are 12px-radius `#1e293b` boxes; edges are 1.5px `#1e90ff` lines with arrow heads. Transparent background; appears inside cards or as a standalone hero artifact.

**`cta-band`** — Pre-footer "Build with LangChain" CTA band. `#1e293b` surface, 12px radius, 64px padding. Carries an h2 in display-md, body subhead, and primary blue CTA + secondary dark-surface CTA.

**`customer-logo-strip`** — Horizontal monochrome customer-logo strip. Background `#0f172a`, logos in `#94a3b8`, padding 32px vertical. Names like Klarna, Replit, Elastic.

## 5. Layout Principles

### Spacing System
Base unit **4px**. Tokens: `xxs:4 · xs:8 · sm:12 · md:16 · lg:24 · xl:32 · xxl:48 · section:96`. Section padding is 96px between major bands; card internal padding stays at 32px for feature cards, 24px for code-window cards. The system feels documentation-grade rather than marketing-soft because the intra-card density is always tighter than the inter-section air.

### Grid & Container
Max content width is 1280px centered. Editorial body uses a 12-column grid; hero often uses a 6/6 split (h1 + subhead left, code-window or architecture diagram right). Feature card grids run 3-up at desktop, 2-up at tablet, 1-up at mobile. Pricing grids run 3-up at desktop.

### Whitespace Philosophy
LangChain uses dense, slightly-compressed whitespace appropriate for a developer-tooling brand. Generous enough to read editorially, tight enough to feel "engineering-grade." The page never breathes the way a consumer brand breathes; it breathes the way a documentation site breathes.

### Section Cadence
Every page follows the same rhythm: dark hero band → code-window or architecture diagram → dark feature card grid → product mockup band (LangSmith / LangGraph) → customer-logo strip → pricing → dark feature card → pre-footer CTA band → dark footer. The page never inverts to white in the middle; LangChain stays dark.

## 6. Shapes & Radius Scale

| Tier | Token | Value | Use |
|---|---|---|---|
| Micro | micro | 2px | Reserved — barely used |
| XS | xs | 4px | Badge accents, syntax-highlight chips inside code blocks |
| Standard | sm | 6px | Small inline buttons, tight inputs |
| Comfortable | md | 8px | Standard CTA buttons, text inputs — the default for actionables |
| Large | lg | 12px | Content cards, code-window cards, pricing tiers |
| Featured | xl | 16px | Hero shells, large CTA cards (rare) |
| Pill | pill | 9999px | Badges, avatars, icon-only circular buttons |

There are no compound radii. Every corner uses a single uniform value.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No shadow, no border | Body sections, top nav, hero text |
| 1 — Soft hairline | 1px `#1e293b` border | Code-window cards, content cards needing edge definition |
| 2 — Surface | `#1e293b` background, no shadow | Feature cards, pricing tiers, product mockups |
| 3 — Elevated | `#334155` background | Nested cards, hover states |
| 4 — Featured | `#1e293b` + 1px `#1e90ff` border | Featured pricing tier, primary CTA emphasis |
| 5 — Modal | `#1e293b` + 1px `#334155` + backdrop dim 80% | Dialogs, dropdowns |

### Shadow Philosophy
LangChain uses minimal drop shadows. Depth comes from tonal contrast between the navy `#0f172a` canvas and `#1e293b` surface card — a barely-lighter-than-canvas tone that produces a subtle "engineering panel" effect. Shadows appear only on hover states (card lift to elevation 3) and modal entrances. The system rejects the "marketing card with prominent drop shadow" pattern that's common in consumer SaaS.

## 8. Interaction & Motion

### Easing Curves
- **Standard ease**: `cubic-bezier(0.4, 0, 0.2, 1)` — the default for all transitions.
- **Emphasized ease**: `cubic-bezier(0.2, 0, 0, 1)` — used on CTA hover and modal entrances.

### Duration Buckets
- **Fast (120ms)**: Color and opacity transitions on hover.
- **Standard (200ms)**: Card hover state changes, dropdown opens.
- **Slow (320ms)**: Modal entrance, page-section reveals on scroll.

### Per-Component Micro-States
- **Button hover**: Blue CTAs darken from `#1e90ff` → `#1d4ed8` over 120ms; no transform, no shadow change.
- **Button press**: 1px translate-down via `transform: translateY(1px)` over 80ms.
- **Card hover**: Feature cards do not lift visibly. Border color shifts from `#1e293b` → `#334155` over 200ms; a subtle 4px ambient shadow fades in.
- **Code-window hover**: No state change — code is content, not an action.
- **Link hover**: Color lightens from `#60a5fa` → `#93c5fd` over 120ms; underline thickens 1px → 1.5px.
- **Input focus**: 2px blue ring expands from 0 → 2px over 120ms with standard ease.
- **Architecture diagram**: Nodes do not animate on hover. Edges may pulse at 4s interval if the diagram is the hero artifact — a single edge's stroke-dashoffset cycles to suggest data flow.

### Page Transitions
LangChain uses standard browser navigation. Section-on-scroll reveals are a 320ms fade-in-up (12px offset) gated by `IntersectionObserver`. No parallax, no scroll-jacking.

### Reduced Motion
`prefers-reduced-motion: reduce` honored: all transforms removed, all transitions reduced to opacity-only at 100ms. Architecture-diagram edge pulse is paused. Stat-counter animations are skipped — final values render immediately.

## 9. Accessibility & A11y

### Contrast Pairs
- **Text on bg**: `#f8fafc` on `#0f172a` = **16.4** — AAA at every size.
- **Body on bg**: `#cbd5e1` on `#0f172a` = **11.2** — AAA at every size.
- **Muted on bg**: `#94a3b8` on `#0f172a` = **5.9** — AA at body sizes; do not use below 14px.
- **On-brand on brand**: `#ffffff` on `#1e90ff` = **4.6** — AA at body sizes (large text AAA).
- **Body on surface**: `#cbd5e1` on `#1e293b` = **9.8** — AAA.
- **Link on bg**: `#60a5fa` on `#0f172a` = **6.3** — AA.

### Focus Indicators
Every focusable element shows a 2px solid `#1e90ff` ring with 2px offset. The blue ring is the same hue as the brand, so focus is unmistakable on the dark canvas.

### ARIA Patterns
- **Buttons**: Use native `<button>` elements with `aria-label` only when icon-only.
- **Code blocks**: Wrap in `<pre><code>` with `aria-label="Python example"` for screen readers; copy buttons announce via `aria-live="polite"` toast.
- **Navigation**: Top-nav uses `<nav aria-label="Primary">`; mobile drawer uses `aria-expanded` on the hamburger.
- **Architecture diagrams**: Provided as SVG with `<title>` and `<desc>` describing the agent flow; each node carries a `role="img" aria-label="..."`.
- **Dialog**: Modal uses `role="dialog"` with `aria-labelledby` referencing the dialog title.

### Keyboard Navigation
Tab order follows visual reading order. Skip-link at top of every page jumps to `<main>`. All interactive elements respond to Enter and Space. Modal traps focus within dialog; Escape closes.

### Screen Reader Hints
Code blocks announce language ("Python example") so screen readers don't read SQL/Python keywords as English. Architecture diagrams provide a textual fallback ("Diagram: agent calls retriever, retriever returns documents, agent calls LLM with context").

### Reduced Motion Handling
Honored via `@media (prefers-reduced-motion: reduce)` — all transforms removed, transitions reduced to 100ms opacity-only, diagram edge animations paused.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Hamburger nav; hero h1 72→40px; code-window-card stacks below; feature grids 1-up; pricing 1-up |
| Tablet | 640–1024px | Top nav tightens; feature cards 2-up; pricing 2-up; hero h1 56px |
| Desktop | 1024–1440px | Full top-nav; 3-up feature cards; 3-up pricing tiers; hero h1 72px |
| Wide | > 1440px | Same as desktop with more breathing room; max content 1280px |

### Touch Targets
- Primary CTA at minimum 40 × 40px.
- Icon-only circular button at exactly 36 × 36 — slightly under WCAG 44, visually centered with adequate hit area via padding.
- Text input height is 40px.

### Collapsing Strategy
Top nav collapses to hamburger at < 768px. Hero 6/6 grid collapses to single-column on mobile with code-window stacking below the headline. Feature card grids reduce columns rather than scaling type. Architecture diagrams swap to a stacked vertical orientation on mobile (3-node columns become 3-node rows).

### Image Behavior
Code blocks inside dark mockups stay at fixed font-size; horizontal scroll on mobile rather than wrapping. Customer logos in monochrome strip retain native widths; row wraps on mobile. Product mockups inside cards scale proportionally.

## 11. Content & Voice

### Tone
**Technical, infrastructure-first, confident.** LangChain writes for engineers building production agent systems. There is no hand-holding, no "imagine if…" framing. Headlines state capabilities as facts ("Build LLM apps with composable building blocks"); body copy supports with framework primitives, integration counts, and architecture details.

### Microcopy Patterns
- **CTA verbs**: "Get Started", "Read the docs", "Talk to sales", "View on GitHub", "Try LangSmith". Never "Sign up free" or "Learn more" — both read as too consumer-marketing.
- **Section labels**: Uppercase eyebrow (11px / 600 / 1.5px tracking) labels every band — "FRAMEWORK", "OBSERVABILITY", "DEPLOY", "PRICING", "INTEGRATIONS".
- **Stat numbers**: Followed by qualifier — "1M+ developers", "50k+ integrations", "1B+ traces logged".

### Empty States
LangSmith product UI empty states use a single line in `text-muted` ("No traces yet — run an agent to see them appear here") with a blue link to docs.

### Error Messages
**Pattern**: `<icon-x in #f43f5e> + "What went wrong" + "What to try next"`. Example: "Trace ingestion failed — check your `LANGCHAIN_TRACING_V2=true` environment variable." Never apologetic ("Oops!"), never blaming the user.

### Success Confirmations
Single-line toast in `text` colour over `surface` background with a `success` (#10b981) accent stripe at the left. Auto-dismiss after 4s. "Project deployed to production." not "Yay! Your project is live 🎉".

## 12. Dark Mode & Theming

LangChain marketing is **dark-only**. The marketing site has no light mode toggle; the brand's natural state is the navy `#0f172a` canvas. The in-product LangSmith console supports a light theme for users who request it; tokens map to a `#fafafa` canvas, `#0f172a` text, same `#1e90ff` brand. The docs site (`docs.langchain.com`) uses a separate light-default theme — the marketing dark theme and docs light theme operate as two distinct surfaces, both equally branded.

When implementing a light variant of LangChain marketing chrome (rare, for partner microsites): swap `bg` to `#ffffff`, `text` to `#0f172a`, `surface` to `#f8fafc`, `border` to `#e2e8f0`. Keep `brand: #1e90ff` unchanged. Code blocks invert: dark canvas on light surface (`#0f172a` background, `#f8fafc` text) — code-window cards stay dark even on a light page.

## 13. Lineage & Influences

LangChain's marketing aesthetic descends from the **modern developer-tooling lineage** that runs through Stripe, Vercel, and Linear's docs site. The deep navy + single-blue + Inter + JetBrains Mono recipe is the lingua franca of post-2022 dev marketing — what Tailwind's slate palette enabled.

Where Anthropic's Claude reaches for warm cream (cool, premium AI), Modal picks lime-green (developer optimism), and Hugging Face leans yellow (community-first), LangChain stays close to the "this is infrastructure" register — slate, blue, mono. The aesthetic communicates: this is plumbing for production systems, not a product to play with.

The architecture-diagram-as-marketing-chrome move is borrowed from Hashicorp and CloudFlare — both brands that turn system diagrams into hero artifacts. LangChain pushes harder on the orchestration-flow visual specifically (showing the agent → tool → LLM cycle as the brand's primary illustration). The 600-weight Inter with negative tracking tracks Stripe's display discipline, but at a slightly more approachable weight than Stripe's signature 300.

- **Stripe** — Inter + negative tracking display discipline; trust-via-restraint chromatic strategy. https://stripe.com
- **Vercel** — Dark-monolithic marketing rhythm with single-blue accent. https://vercel.com
- **Hashicorp** — Architecture-diagram-as-marketing-chrome. https://www.hashicorp.com
- **Tailwind CSS** — The slate-900 + slate-100 + Inter + JetBrains Mono recipe. https://tailwindcss.com
- **JetBrains** — JetBrains Mono as the credibility-via-IDE-typeface signal. https://www.jetbrains.com/lp/mono/

## 14. Do's and Don'ts

### Do
- Anchor every page on the deep navy `#0f172a` canvas. Marketing is dark-mode by default.
- Reserve the blue (`#1e90ff`) for primary CTAs, links, focus rings, and orchestration-diagram accents — the blue is the brand's voltage.
- Use Inter at weight 600 (display-md and below) or 700 (display-xl/lg only) with negative tracking on every display headline.
- Show actual Python or TypeScript code inside code-window cards. LangChain is a framework; show the import, don't paint marketing illustrations of imports.
- Use architecture diagrams (agent → tool → LLM) as primary marketing chrome rather than abstract illustrations.
- Anchor every band with 96px vertical rhythm.
- Run JetBrains Mono on every code surface — system-font fallback for code is forbidden.
- Use the uppercase eyebrow label (11px / 600 / 1.5px tracking) at the top of every major band.
- Use a single-blue hairline border to mark the featured pricing tier; no background fill change.
- Pair a blue primary CTA with a dark-surface secondary CTA in every two-CTA cluster.

### Don't
- Don't introduce a second brand color in marketing. LangChain is monochromatic + blue.
- Don't bold display weight beyond 700 or use weight 500 for headlines. Hierarchy depends on size, not on weight gradation.
- Don't use the blue as a gradient or glow background. Solid only.
- Don't replace Python/TypeScript code mockups with abstract illustrations. The code IS the marketing.
- Don't use rounded-pill buttons for primary CTAs. Standard button radius is 8px.
- Don't add prominent drop shadows to feature cards. The system is mostly flat — depth is tonal.
- Don't switch to a light marketing band in the middle of the page. LangChain stays dark canvas top to bottom.
- Don't use italics for emphasis. Use weight 600 instead.
- Don't use consumer-marketing CTA verbs like "Sign up free" or "Learn more". Use "Get Started", "Read the docs", "Talk to sales".

## 15. Agent Prompt Guide

### Quick Color Reference
```
Bg / Canvas:     #0f172a (slate-900 navy)
Surface:         #1e293b (slate-800 — engineering panel)
Surface Soft:    #111827 (slate-900-deeper for product cards)
Border:          #1e293b (1px hairline)
Text:            #f8fafc (slate-50 — headlines)
Text Body:       #cbd5e1 (slate-300 — running-text)
Text Muted:      #94a3b8 (slate-400 — captions)
Brand:           #1e90ff (LangChain blue — CTAs, links, focus)
Link:            #60a5fa (lighter blue for legibility on dark)
On-Brand:        #ffffff (white text on blue)
Brand Hover:     #1d4ed8 (press state)
```

### Example Component Prompts

1. "Create a LangChain hero band on `#0f172a` canvas, with an Inter 72px / 700 / -2.5px tracking white headline ('Build context-aware reasoning apps'), 18px / 400 `#cbd5e1` subhead, and a blue `#1e90ff` primary CTA ('Get Started') paired with a dark `#1e293b` secondary CTA ('Read the docs'). Right side: a 12px-radius `#1e293b` card containing a JetBrains Mono Python snippet (`from langchain_core.messages import HumanMessage`) with syntax highlighting in muted blue keywords."

2. "Design an architecture-diagram card showing an agent → retriever → LLM flow. `#111827` background, 12px radius, 32px padding. Three nodes drawn as `#1e293b` 12px-radius rectangles with white labels; connecting edges are 1.5px `#1e90ff` lines with arrow heads."

3. "Build a 3-column feature card grid on `#0f172a`. Each card: `#1e293b` background, 12px radius, 32px padding, white 20px / 600 title, `#cbd5e1` 16px body, no shadow. Each card carries a small 11px / 600 / 1.5px uppercase eyebrow ('FRAMEWORK', 'OBSERVABILITY', 'DEPLOY')."

4. "Compose a pricing grid with 3 tiers on `#0f172a`. Two standard `#1e293b` cards (12px radius, 32px padding) and one featured tier marked with a 1px solid `#1e90ff` hairline border — the blue border alone is the featured signal, no badge required."

5. "Create a top nav: 64px tall `#0f172a` bar with a white wordmark left, horizontal menu in Inter 14px / 500 / `#f8fafc` center ('Products', 'Solutions', 'Customers', 'Resources', 'Pricing'), a 'Sign in' text link and a blue `#1e90ff` `button-primary` ('Get Started') right."

6. "Design a pre-footer CTA band: `#1e293b` background, 12px radius, 64px padding. Inter 44px / 600 / -1.5px tracking white headline ('Build with LangChain'), 16px / 400 `#cbd5e1` subhead, primary `#1e90ff` CTA + ghost `#f8fafc` text-link with arrow."

### Iteration Guide
1. Start with the navy canvas. Every page lives on `#0f172a` — that decision frames everything else.
2. Pick one place per band where the blue appears. Two blue elements competing for attention is too many.
3. Keep display headlines at Inter 600 (or 700 for the homepage h1) with negative tracking. If it reads "marketing-friendly," tighten the tracking 0.5px.
4. Use mono everywhere code appears — including inline code spans inside body paragraphs.
5. When in doubt about emphasis, scale the type up before adding color. Size is the primary lever.
6. Cards are containers, not "elevations." Minimize shadows. If you need separation, use a 1px hairline `#1e293b` border or step the surface to `#334155`.
7. Architecture diagrams are first-class marketing chrome. If you have a system to explain, draw it as a node-edge graph rather than describing it in copy.
