---
name: ClickHouse
tagline: Near-pure black canvas with electric yellow as the brand voltage — database performance dressed in voltmeter chrome.
author: webdesignhot
source_url: https://clickhouse.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [dev-tools, data]
tags: [dark, yellow, mono-accent, sans, dense, technical]
preview_swatch: ['#0a0a0a', '#faff69', '#ffffff']
related: [vercel, supabase, datadog]
description: 'ClickHouse''s marketing surface is the highest-contrast page in the data-platform category — a near-pure black canvas (#0a0a0a) carrying white type and one singular electric yellow (#faff69) that handles every primary CTA, every stat-callout number, every "GET STARTED" badge. Inter at weight 700 with -2.5px tracking gives the system its precise, engineered feel; SQL code blocks embedded inside dark cards do the marketing work that other brands hand to illustration. The yellow + black pairing is what makes ClickHouse instantly recognisable in a category dominated by cool blue gradients.'

colors:
  bg: '#0a0a0a'                # canvas — near-pure black
  bg-deep: '#000000'            # absolute black for terminal panes
  surface-soft: '#121212'       # very-soft band tint
  surface: '#1a1a1a'            # default content card
  surface-elevated: '#242424'   # nested cards inside dark cards
  surface-yellow-band: '#faff69' # full-bleed yellow CTA card fill
  text: '#ffffff'               # primary headlines + strong type
  text-body: '#cccccc'          # default running-text
  text-strong: '#e6e6e6'        # emphasised paragraphs
  text-muted: '#888888'         # footer links, captions, breadcrumbs
  text-faint: '#5a5a5a'         # tertiary fine-print
  brand: '#faff69'              # electric yellow — the brand voltage
  brand-active: '#e6eb52'        # press / hover-darker variant
  brand-disabled: '#3a3a1f'      # desaturated dark-yellow on dark canvas
  on-brand: '#0a0a0a'           # black text on yellow CTAs
  on-dark: '#ffffff'            # white text on dark surfaces
  link: '#faff69'               # inline links default to brand yellow
  link-hover: '#e6eb52'
  border: '#2a2a2a'             # 1px hairline on cards
  border-strong: '#3a3a3a'      # heavier divider on input underlines
  border-yellow: '#faff69'      # focus border on inputs
  shadow-color: 'rgba(0,0,0,0)' # ClickHouse uses no drop shadows
  shadow-glow-yellow: 'rgba(250,255,105,0.15)' # rare ambient glow on hero
  accent-emerald: '#22c55e'     # success states, "active" indicators
  accent-rose: '#ef4444'        # error states, "down" indicators
  accent-blue: '#3b82f6'        # info states, code-syntax highlighting
  success: '#22c55e'
  warning: '#f59e0b'
  danger: '#ef4444'
  info: '#3b82f6'

typography:
  display:
    family: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: "'cv11', 'ss01', 'ss03'"
  body:
    family: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'JetBrains Mono, ui-monospace, SF Mono, Menlo, Monaco, Consolas, monospace'
    weights: [400, 500]
  scale:
    display-xl:        { size: 72, weight: 700, lineHeight: 1.05, tracking: '-2.5px',  family: display, opentype: "'ss01'" }
    display-lg:        { size: 56, weight: 700, lineHeight: 1.1,  tracking: '-2px',    family: display }
    display-md:        { size: 40, weight: 700, lineHeight: 1.15, tracking: '-1.5px',  family: display }
    display-sm:        { size: 32, weight: 700, lineHeight: 1.2,  tracking: '-1px',    family: display }
    title-lg:          { size: 24, weight: 700, lineHeight: 1.3,  tracking: '-0.3px',  family: display }
    title-md:          { size: 18, weight: 600, lineHeight: 1.4,  tracking: 0,         family: body }
    title-sm:          { size: 16, weight: 600, lineHeight: 1.4,  tracking: 0,         family: body }
    stat-display:      { size: 56, weight: 700, lineHeight: 1.0,  tracking: '-1.5px',  family: display, notes: 'always yellow' }
    body-md:           { size: 16, weight: 400, lineHeight: 1.55, tracking: 0,         family: body }
    body-sm:           { size: 14, weight: 400, lineHeight: 1.55, tracking: 0,         family: body }
    caption:           { size: 13, weight: 500, lineHeight: 1.4,  tracking: 0,         family: body }
    caption-uppercase: { size: 12, weight: 600, lineHeight: 1.4,  tracking: '1.5px',   family: body, transform: uppercase }
    code-md:           { size: 14, weight: 400, lineHeight: 1.55, tracking: 0,         family: mono }
    code-sm:           { size: 12, weight: 400, lineHeight: 1.5,  tracking: 0,         family: mono }
    button:            { size: 14, weight: 600, lineHeight: 1.0,  tracking: 0,         family: body }
    nav-link:          { size: 14, weight: 500, lineHeight: 1.4,  tracking: 0,         family: body }

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
    use: 'every primary CTA — Get Started, Try Cloud'
  button-secondary:
    backgroundColor: surface
    textColor: on-dark
    rounded: md
    padding: '12px 20px'
    height: 40
    use: 'secondary action paired with yellow CTA'
  button-text-link:
    backgroundColor: transparent
    textColor: on-dark
    use: 'Sign in, inline link CTAs'
  button-icon-circular:
    backgroundColor: surface
    textColor: on-dark
    rounded: pill
    size: 36
    use: 'icon-only actions inside dark cards'
  card-feature-yellow:
    backgroundColor: brand
    textColor: on-brand
    rounded: lg
    padding: 32
    use: 'full-bleed yellow card — the visual emphasis moment'
  card-feature-dark:
    backgroundColor: surface
    textColor: on-dark
    rounded: lg
    padding: 32
    use: 'standard dark feature card'
  card-code-window:
    backgroundColor: surface
    textColor: on-dark
    rounded: lg
    padding: 24
    use: 'embeds SQL or terminal output via JetBrains Mono'
  card-product-mockup:
    backgroundColor: surface
    rounded: lg
    padding: 24
    use: 'shows actual product UI inside marketing context'
  card-pricing-tier:
    backgroundColor: surface
    rounded: lg
    padding: 32
    use: 'standard tier card'
  card-pricing-tier-featured:
    backgroundColor: brand
    textColor: on-brand
    rounded: lg
    padding: 32
    use: 'featured tier flips to yellow surface — the featured signal'
  badge-pill:
    backgroundColor: surface
    textColor: on-dark
    rounded: pill
    padding: '4px 12px'
  badge-yellow:
    backgroundColor: brand
    textColor: on-brand
    rounded: pill
    padding: '4px 12px'
    transform: uppercase
  text-input:
    backgroundColor: surface
    textColor: on-dark
    rounded: md
    padding: '10px 14px'
    height: 40
  cta-band-yellow:
    backgroundColor: brand
    textColor: on-brand
    rounded: lg
    padding: 64
    use: 'pre-footer "Deploy your way" CTA band'
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
  ambient: 'none — system runs flat'
  standard: 'none — depth comes from surface tone, not shadow'
  elevated: 'none — yellow surface IS the elevation'
  deep: 'none'
  ring: '0 0 0 2px #faff69'

accessibility:
  contrast-text-on-bg: 18.1                # AAA — white on #0a0a0a
  contrast-text-on-brand: 16.4             # AAA — black on #faff69
  contrast-body-on-bg: 12.6                # AAA — #cccccc on #0a0a0a
  contrast-muted-on-bg: 5.7                # AA at body sizes — #888888 on #0a0a0a
  focus-ring: '2px solid #faff69 with 2px offset'
  reduced-motion-honored: true

dark-mode: 'this IS the dark mode — ClickHouse ships no light marketing surface'
---

## 1. Visual Theme & Atmosphere

ClickHouse's marketing surface reads like the inside of a server cabinet — a near-pure black canvas (`#0a0a0a`) carrying confident white sans-serif type, with one singular electric yellow (`#faff69`) that handles every brand-critical moment. The yellow operates like voltage on an oscilloscope screen: it appears scarcely on individual elements (one yellow CTA per band, one stat-callout number per stat) but generously on full-bleed yellow CTA cards that flash through the page rhythm.

Where Snowflake reaches for cool blue gradients and Databricks picks red on slate, ClickHouse leans hard into a single electric yellow that does all the brand work. There is no secondary accent. Code blocks, terminal output, and product UI fragments embed directly inside dark `#1a1a1a` surface cards — a barely-lighter-than-canvas tone that signals "engineering panel" rather than "marketing card." The contrast is intentionally subtle; the page does not aspire to feel "elevated."

Type voice runs Inter at weight 700 for every display headline, with aggressive negative tracking (`-1px` to `-2.5px`). The negative tracking is essential — Inter at weight 700 without it reads as too wide, too consumer-marketing. Tightened, it gives ClickHouse the precise, machined feel that matches the database's performance-first positioning. JetBrains Mono carries every code surface; SQL syntax highlighted in muted blues, yellows, and grays reads like a debugger pane embedded in the marketing layer.

The page rhythm is monolithic dark canvas top to bottom, broken open at deliberate moments by full-bleed yellow CTA bands. Section padding stays at 96px between major bands; card padding stays at 32px for feature cards and 24px for code-window cards. The whitespace is engineering-tight rather than marketing-soft.

**Key Characteristics:**
- Near-pure black canvas (`#0a0a0a`) with white type. No light-mode marketing surface exists.
- Electric yellow (`#faff69`) primary used scarcely on elements, generously on bands.
- Inter at weight 700 with `-1` to `-2.5px` tracking for every display headline.
- JetBrains Mono on every code surface; embedded SQL snippets do the marketing.
- Stat-callout numbers in yellow + Inter 700 + 56px size carry credibility moments ("779+", "47k+").
- Dark surface cards barely lighter than canvas — color-block contrast is deliberately subtle.
- 8px radius on CTAs, 12px on cards, 9999px reserved for badges only.
- 96px section rhythm between major editorial bands.
- No drop shadows anywhere — depth comes from tonal stacking.
- Yellow + black is the brand contract — no second accent ever introduced.

## 2. Color Palette & Roles

### Primary
- **Bg / Canvas** (`#0a0a0a`): The default page floor — near-pure black. Runs every page top to bottom.
- **Text** (`#ffffff`): All headline and primary text on dark surfaces.
- **Brand / Primary CTA** (`#faff69`): Electric yellow — the brand voltage. Every primary CTA, every stat number, every yellow CTA band fill.

### Brand & Dark
- **Brand** (`#faff69`): Reserved for primary CTAs, stat-callout numbers, full-bleed yellow CTA bands, focus rings.
- **Brand Active** (`#e6eb52`): Press / hover-darker variant — the only state ever applied to the brand colour.
- **Brand Disabled** (`#3a3a1f`): Desaturated dark-yellow that sits quietly on dark canvas without competing.

### Accent
ClickHouse intentionally has **no decorative accent palette**. The accent slots below exist only for in-product status colours, never for marketing chrome.
- **Accent Emerald** (`#22c55e`): "Active" / "online" indicators inside product UI screenshots.
- **Accent Rose** (`#ef4444`): "Down" / "error" indicators inside product UI.
- **Accent Blue** (`#3b82f6`): Inline code-syntax highlighting (keywords).

### Interactive
- **Link** (`#faff69`): Inline body links default to brand yellow on dark surfaces. Underlined.
- **Link Hover** (`#e6eb52`): Press / hover-darker yellow.
- **Selected** (`#faff69` at 15% alpha): Selected text background — yellow tint over canvas.
- **Disabled** (`#5a5a5a`): Disabled labels and tertiary text.

### Neutral Scale
- **Text** (`#ffffff`): Headlines, primary type.
- **Text Strong** (`#e6e6e6`): Emphasised paragraphs.
- **Text Body** (`#cccccc`): Default running-text — soft white at 80%.
- **Text Muted** (`#888888`): Footer links, captions, breadcrumbs.
- **Text Faint** (`#5a5a5a`): Tertiary fine-print, disabled labels.

### Surface & Borders
- **Surface Soft** (`#121212`): Section dividers, very-soft band tints.
- **Surface** (`#1a1a1a`): Default content card — the engineering panel.
- **Surface Elevated** (`#242424`): Nested cards inside larger dark cards.
- **Surface Yellow Band** (`#faff69`): Same hex as brand — full-bleed yellow CTA card fill.
- **Border** (`#2a2a2a`): 1px hairline on cards, the divider that's felt more than seen.
- **Border Strong** (`#3a3a3a`): Heavier divider on input underlines, dropdown rows.

### Shadow Colors
ClickHouse runs flat. Shadow tokens exist only for specification completeness:
- **Shadow Color** (`rgba(0,0,0,0)`): No shadow ever applied.
- **Shadow Glow Yellow** (`rgba(250,255,105,0.15)`): Reserved for the rare ambient glow behind a hero stat-callout, used at most once per page.

### Semantic
- **Success** (`#22c55e`): Confirmation toasts, "active" badges.
- **Warning** (`#f59e0b`): Caution states.
- **Danger** (`#ef4444`): Destructive actions, validation errors.
- **Info** (`#3b82f6`): Informational notices.

## 3. Typography Rules

### Font Family
- **Primary**: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`. Inter handles every text role — display, body, navigation, buttons, captions.
- **Mono**: `JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace`. Code blocks, terminal output, SQL snippets.
- **OpenType features**: `'cv11'` for the alternative single-storey lowercase 'a', `'ss01'` for the disambiguated I/l, `'ss03'` for the curved-tail Q. These are toggled on display sizes for engineered character.
- **No serif**: Deliberately. The single-family approach is the discipline.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display-xl | Inter | 72 | 700 | 1.05 | -2.5px | ss01 | Homepage h1 ("The leading database for AI") |
| display-lg | Inter | 56 | 700 | 1.10 | -2px | — | Section heads |
| display-md | Inter | 40 | 700 | 1.15 | -1.5px | — | Sub-section heads, CTA-band heads |
| display-sm | Inter | 32 | 700 | 1.20 | -1px | — | Card titles, pricing tier prices |
| title-lg | Inter | 24 | 700 | 1.30 | -0.3px | — | Pricing plan names, larger feature titles |
| title-md | Inter | 18 | 600 | 1.40 | 0 | — | Card titles, intro paragraphs |
| title-sm | Inter | 16 | 600 | 1.40 | 0 | — | Small card titles, list labels |
| stat-display | Inter | 56 | 700 | 1.00 | -1.5px | — | Stat callouts ("779+", "47k+") — ALWAYS yellow |
| body-md | Inter | 16 | 400 | 1.55 | 0 | — | Default running-text |
| body-sm | Inter | 14 | 400 | 1.55 | 0 | — | Footer body, fine-print |
| caption | Inter | 13 | 500 | 1.40 | 0 | — | Badge labels, captions |
| caption-uppercase | Inter | 12 | 600 | 1.40 | 1.5px | — | Section labels, "NEW" badges, eyebrows |
| code-md | JetBrains Mono | 14 | 400 | 1.55 | 0 | — | Code blocks, SQL queries |
| code-sm | JetBrains Mono | 12 | 400 | 1.50 | 0 | — | Inline code, terminal status |
| button | Inter | 14 | 600 | 1.00 | 0 | — | Standard button labels |
| nav-link | Inter | 14 | 500 | 1.40 | 0 | — | Top-nav menu items |

### Principles
- **Display weights stay at 700.** The hierarchy is built on size, not on weight gradation.
- **Negative tracking is essential** for display sizes. Inter at 700 without negative tracking reads as too wide. The tightened tracking is what gives ClickHouse the precise, engineered feel.
- **Body and labels stay at 400 / 500 / 600.** Never bold body text for emphasis — use weight 600 for emphasis instead of 700.
- **Mono everywhere code appears.** No system-font fallback for code; JetBrains Mono is the credibility signal.
- **Caption-uppercase carries section structure.** Every major band is preceded by a 12px uppercase eyebrow at 1.5px tracking — the magazine-of-engineering rhythm.
- **Open-source first.** Inter and JetBrains Mono are both open-source — substitutes (Söhne, Geist) exist but are not required.

## 4. Component Stylings

### Buttons (4 variants)

**`button-primary`** — The signature yellow CTA. Background `#faff69`, text `#0a0a0a` (black), Inter 14px / 600, padding 12px × 20px, height 40px, radius 8px. The yellow + black combination is iconic; do not lighten the text or fade the background. Used on every primary action across every page.

**`button-secondary`** — Dark surface card button. Background `#1a1a1a`, text `#ffffff`, same shape and padding as primary. Used as the secondary action paired with a yellow CTA in any two-CTA cluster.

**`button-text-link`** — Inline text-only button. No background, text `#ffffff`, font same as button. Used for "Sign in" and inline link CTAs in the nav.

**`button-icon-circular`** — Circular icon button, 36×36px, background `#1a1a1a`, text/icon `#ffffff`, radius 9999. Used inside dark cards for icon-only actions (close, copy, expand).

### Cards

**`card-feature-yellow`** — Full-bleed yellow card ("Built for every modern data challenge"). Background `#faff69`, text `#0a0a0a`, radius 12px, padding 32px. The yellow card IS the visual emphasis — never use it as a "fancy" feature card; reserve it for one big claim per band.

**`card-feature-dark`** — Standard dark feature card. Background `#1a1a1a`, text `#ffffff`, radius 12px, padding 32px. The default container for every product / feature / capability description.

**`card-code-window`** — Dark card showing a SQL code block. Background `#1a1a1a`, code in JetBrains Mono with syntax highlighting (keywords `#3b82f6`, strings `#faff69` muted, comments `#888888`), radius 12px, padding 24px. Often the hero's right-side artifact.

**`card-product-mockup`** — Card showing actual ClickHouse product UI (query editor, dashboard, monitoring panel). Same shape as feature-card-dark but with embedded product chrome inside.

**`card-pricing-tier`** — Standard pricing tier card. Background `#1a1a1a`, radius 12px, padding 32px.

**`card-pricing-tier-featured`** — Featured tier flips to `#faff69`. The yellow surface IS the featured signal — no border, no badge required.

### Badges & Pills

**`badge-pill`** — Small dark pill label. Background `#1a1a1a`, text `#ffffff`, caption typography, radius 9999, padding 4px × 12px.

**`badge-yellow`** — Yellow pill for "NEW", "GET STARTED" emphasis. Background `#faff69`, text `#0a0a0a`, caption-uppercase typography, radius 9999, padding 4px × 12px.

### Inputs / Forms

**`text-input`** — Dark text input. Background `#1a1a1a`, text `#ffffff`, radius 8px, padding 10px × 14px, height 40px.

**`text-input-focused`** — Border thickens to 2px solid `#faff69` (yellow) for emphasis. No background change.

### Navigation

**`top-nav`** — Black nav bar pinned to top, 64px tall, background `#0a0a0a`. Logo + wordmark left, primary horizontal menu (Product, Use Cases, Pricing, Resources, Customers) center-left, right-side cluster: "Sign in" + yellow `button-primary`.

**`category-tab` / `category-tab-active`** — Dark tab navigation. Inactive: transparent + muted text. Active: surface-card background + on-dark text. Padding 8px × 14px, radius 8px.

### Decorative

**`stat-callout`** — Inline yellow stat numbers ("779+", "2.8k+", "47k+"). Transparent background, text `#faff69`, stat-display typography (56px / 700 / -1.5px). Used as a flat layout block, not a card.

**`cta-band-yellow`** — Pre-footer "Deploy your way" CTA band. Full yellow fill, black type, radius 12px, padding 64px. Carries an h2 in display-md and a CTA — usually a black-button on the yellow surface.

**`customer-logo-strip`** — Horizontal monochrome customer-logo strip. Background `#0a0a0a`, logos in `#888888`, padding 32px vertical.

## 5. Layout Principles

### Spacing System
Base unit **4px**. Tokens: `xxs:4 · xs:8 · sm:12 · md:16 · lg:24 · xl:32 · xxl:48 · section:96`. Section padding is 96px between major bands; card internal padding stays at 32px for feature cards, 24px for code-window cards. The system feels engineering-grade rather than marketing-soft because the intra-card density is always tighter than the inter-section air.

### Grid & Container
Max content width is 1280px centered. Editorial body uses a 12-column grid; hero often uses a 7/5 split (h1 left, code mockup right). Feature card grids run 3-up at desktop, 2-up at tablet, 1-up at mobile. Pricing grids run 3–4 up at desktop.

### Whitespace Philosophy
ClickHouse uses dense, slightly-compressed whitespace appropriate for a developer-tooling brand. Generous enough to read editorially, tight enough to feel "engineering-grade." The page never breathes the way a consumer brand breathes; it breathes the way a data sheet breathes.

### Section Cadence
Every page follows the same rhythm: black hero band → dark feature card grid → yellow CTA band or stat-callout strip → code-window card → dark feature card grid → yellow pre-footer CTA band → black footer. The yellow appears twice per page, never three times.

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

There are no compound radii. Every corner uses a single uniform value. The system avoids the "tab attached to card" pattern that requires asymmetric corners.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No shadow, no border | Body sections, top nav, hero |
| 1 — Soft hairline | 1px `#2a2a2a` border | Code-window cards, content cards needing edge definition |
| 2 — Surface | `#1a1a1a` background, no shadow | Feature cards, pricing tiers, event cards |
| 3 — Elevated | `#242424` background | Nested cards, hover states |
| 4 — Yellow band | `#faff69` background, no shadow | Full-bleed yellow CTA cards |
| 5 — Modal | `#1a1a1a` background + 1px `#3a3a3a` border + backdrop dim | Dialogs, dropdowns |

### Shadow Philosophy
ClickHouse uses **no drop shadows**. Depth comes entirely from contrast between the black canvas and `#1a1a1a` surface card — a barely-lighter-than-canvas tone that produces a subtle "engineering-grade dim panel" effect rather than an "elevated card" effect. The yellow-on-black contrast does most of the elevation work for CTAs; tonal stacking does the rest. Code-window cards carry their own internal product chrome (line numbers, syntax highlighting, status bars) which adds visual density without external shadows.

## 8. Interaction & Motion

### Easing Curves
- **Standard ease**: `cubic-bezier(0.4, 0, 0.2, 1)` — the default for all transitions, equivalent to Material's standard.
- **Emphasized ease**: `cubic-bezier(0.2, 0, 0, 1)` — used on CTA hover and modal entrances for a slight overshoot into rest.

### Duration Buckets
- **Fast (120ms)**: Color and opacity transitions on hover.
- **Standard (200ms)**: Card hover lifts (none), button press feedback, dropdown opens.
- **Slow (320ms)**: Modal entrance, page-section reveals on scroll.

### Per-Component Micro-States
- **Button hover**: Yellow CTAs darken from `#faff69` → `#e6eb52` over 120ms; no transform, no shadow change.
- **Button press**: 1px translate-down via `transform: translateY(1px)` over 80ms.
- **Card hover**: Feature cards do not lift. Border color shifts from `#2a2a2a` → `#3a3a3a` over 200ms.
- **Code-window hover**: No state change — code is content, not an action.
- **Link hover**: Underline thickness goes from 1px → 2px over 120ms; color stays yellow.
- **Input focus**: 2px yellow ring expands from 0 → 2px over 120ms with standard ease.

### Page Transitions
ClickHouse uses standard browser navigation. Section-on-scroll reveals are a 320ms fade-in-up (12px offset) gated by `IntersectionObserver`. Hero stat numbers count up from 0 to final value over 800ms with `cubic-bezier(0.2, 0, 0, 1)` easing — the only "playful" animation in the system.

### Reduced Motion
`prefers-reduced-motion: reduce` honored: all transforms removed, all transitions reduced to opacity-only at 100ms. Stat-counter animations are skipped — final values render immediately.

## 9. Accessibility & A11y

### Contrast Pairs
- **Text on bg**: `#ffffff` on `#0a0a0a` = **18.1** — AAA at every size.
- **Body on bg**: `#cccccc` on `#0a0a0a` = **12.6** — AAA at every size.
- **Muted on bg**: `#888888` on `#0a0a0a` = **5.7** — AA at body sizes; do not use below 14px.
- **On-brand on brand**: `#0a0a0a` on `#faff69` = **16.4** — AAA. The yellow + black pairing is the strongest contrast pair in the system.
- **Body on surface**: `#cccccc` on `#1a1a1a` = **10.1** — AAA.

### Focus Indicators
Every focusable element shows a 2px solid `#faff69` ring with 2px offset from the element. The yellow ring is the same colour as the brand, ensuring focus is unmistakable on the dark canvas. No focus-visible polyfill required — the modern selector is used directly.

### ARIA Patterns
- **Buttons**: Use native `<button>` elements with `aria-label` only when icon-only.
- **Code blocks**: Wrap in `<pre><code>` with `aria-label="SQL query example"` for screen readers; copy buttons announce via `aria-live="polite"` toast.
- **Navigation**: Top-nav uses `<nav aria-label="Primary">`; mobile drawer uses `aria-expanded` on the hamburger.
- **Dialog**: Modal uses `role="dialog"` with `aria-labelledby` referencing the dialog title.

### Keyboard Navigation
Tab order follows visual reading order. Skip-link at top of every page jumps to `<main>`. All interactive elements respond to Enter and Space. Modal trap focus within dialog; Escape closes.

### Screen Reader Hints
Stat-callout numbers use `aria-label="779 plus contributors"` so the "+" doesn't read as "plus". Yellow CTA bands carry their headline as the accessible name; the CTA button announces its own action verb.

### Reduced Motion Handling
Honored via `@media (prefers-reduced-motion: reduce)` — all transforms removed, transitions reduced to 100ms opacity-only, stat-counter animations skipped. Cursor blink in code blocks pauses.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Hamburger nav; hero h1 72→40px; code-window-card stacks below; feature grids 1-up; pricing 1-up |
| Tablet | 640–1024px | Top nav tightens; feature cards 2-up; pricing 2-up; hero h1 56px |
| Desktop | 1024–1440px | Full top-nav; 3-up feature cards; 3–4-up pricing tiers; hero h1 72px |
| Wide | > 1440px | Same as desktop with more breathing room; max content 1280px |

### Touch Targets
- Primary CTA at minimum 40 × 40px.
- Icon-only circular button at exactly 36 × 36 — slightly under WCAG 44, visually centered with adequate hit area via padding.
- Text input height is 40px.

### Collapsing Strategy
Top nav collapses to hamburger at < 768px. Hero 7/5 grid collapses to single-column on mobile with code-window stacking below the headline. Feature card grids reduce columns rather than scaling type. Code-window cards retain font-size; horizontal scroll inside the card on mobile rather than wrapping.

### Image Behavior
Code blocks inside dark mockups stay at fixed font-size; horizontal scroll on mobile rather than wrapping. Customer logos in monochrome strip retain native widths; row wraps on mobile. Product mockups inside cards scale proportionally; no aspect-ratio change.

## 11. Content & Voice

### Tone
**Technical, performance-led, confident.** ClickHouse writes for engineers who already know what a column-oriented database is. There is no hand-holding, no "imagine if…" framing. Headlines state benefits as facts ("100x faster than traditional databases"); body copy supports with benchmarks and architecture details.

### Microcopy Patterns
- **CTA verbs**: "Get Started", "Try ClickHouse Cloud", "View Documentation", "Talk to an expert". Never "Sign up free" or "Learn more" — both read as too consumer-marketing.
- **Section labels**: Uppercase eyebrow (12px / 600 / 1.5px tracking) labels every band — "PERFORMANCE", "PRICING", "INTEGRATIONS", "OPEN SOURCE".
- **Stat numbers**: Always followed by a "+" symbol — "779+", "2.8k+", "47k+". The "+" implies "and growing" without words.

### Empty States
ClickHouse marketing rarely has empty states. Where they appear (search results inside docs), the recipe is: a single line in `text-muted` ("No results for 'foo' — try a broader term") with a yellow link to docs home.

### Error Messages
**Pattern**: `<icon-x in #ef4444> + "What went wrong" + "What to try next"`. Example: "Query failed — check your CREATE TABLE statement for column type mismatches." Never apologetic ("Oops!"), never blaming the user.

### Success Confirmations
Single-line toast in `text` colour over `surface` background with a `success` (#22c55e) accent stripe at the left. Auto-dismiss after 4s. "Cluster deployed in eu-west-1." not "Yay! Your cluster is ready 🎉".

## 12. Dark Mode & Theming

ClickHouse is **dark-only**. The marketing site has no light mode toggle and ships no light variant of any component. The black canvas is the brand's natural state — switching to white would erase the engineering-panel aesthetic that makes the yellow voltage work.

The in-product cloud console (out of scope for this spec) does support a light theme for users who request it; tokens map to a `#fafafa` canvas, `#0a0a0a` text, same `#faff69` brand. But the marketing surface stays dark.

## 13. Lineage & Influences

ClickHouse's marketing aesthetic descends from **bulletin-board engineering culture** — the look of a well-instrumented status page, an oscilloscope screen, a DEC VT220 terminal phosphor. Where Snowflake and Databricks reach for cloud-friendly gradients, ClickHouse stays close to the metal. The single-yellow accent recalls Roboto Mono terminals and electrical-panel warning labels — yellow as caution, yellow as voltage, yellow as "this thing is on."

The 700-weight Inter with negative tracking is borrowed from Stripe's display discipline, but ClickHouse pushes it harder (Stripe runs at -1.5px max; ClickHouse goes to -2.5px). The dark-monolithic page rhythm tracks Vercel's recent dark-marketing turn but rejects Vercel's gradient halos for flat surfaces only.

- **Stripe** — Inter + negative tracking display discipline. https://stripe.com
- **Vercel** — Dark-monolithic marketing rhythm (without the gradient halos). https://vercel.com
- **DEC VT terminals** — The yellow-on-black phosphor lineage. (no URL)
- **JetBrains Mono** — The credibility-via-IDE-typeface signal. https://www.jetbrains.com/lp/mono/
- **Inter (Rasmus Andersson)** — The geometric humanist sans that ships every modern dev tool. https://rsms.me/inter/

## 14. Do's and Don'ts

### Do
- Anchor every page on the black canvas. The yellow + black pairing is the brand voltage.
- Reserve the yellow for primary CTAs, stat-callout numbers, and full-bleed yellow CTA bands — yellow's scarcity at the element level + abundance at the band level is what makes it powerful.
- Use Inter at weight 700 with -1 to -2.5px letter-spacing on every display headline.
- Show actual SQL code blocks inside code-window cards. ClickHouse is a database; show the query, don't paint marketing illustrations of queries.
- Use stat-callout numbers in yellow to establish credibility (community size, contributors, performance benchmarks).
- Anchor every band with 96px vertical rhythm.
- Run JetBrains Mono on every code surface — system-font fallback for code is forbidden.
- Use the uppercase eyebrow label (12px / 600 / 1.5px tracking) at the top of every major band.

### Don't
- Don't introduce a second brand color. ClickHouse is monochromatic + yellow.
- Don't bold display weight beyond 700 or use weight 500 for headlines. Hierarchy depends on size, not on weight gradation.
- Don't use yellow for body text or large surface fills outside of intentional yellow CTA cards.
- Don't use rounded buttons or pills outside of small badges. Standard button radius is 8px.
- Don't repeat the same surface mode in two consecutive bands. Black canvas → dark feature card → yellow CTA card → black canvas → code-window card.
- Don't replace SQL code mockups with abstract illustrations. The code IS the marketing voltage.
- Don't add drop shadows. The system is flat — depth is tonal.
- Don't apply the yellow as a gradient or glow. Solid only.

## 15. Agent Prompt Guide

### Quick Color Reference
```
Bg / Canvas:     #0a0a0a (near-pure black)
Surface:         #1a1a1a (engineering panel)
Surface Elev:    #242424 (nested card)
Border:          #2a2a2a (1px hairline)
Text:            #ffffff (headlines)
Text Body:       #cccccc (running-text)
Text Muted:      #888888 (captions, breadcrumbs)
Brand:           #faff69 (electric yellow — CTAs, stats, bands)
On-Brand:        #0a0a0a (black text on yellow)
Brand Active:    #e6eb52 (press state)
```

### Example Component Prompts

1. "Create a hero band with `#0a0a0a` background, an Inter 72px / 700 / -2.5px tracking white headline ('The fastest analytics database'), 16px / 400 `#cccccc` subhead, and a yellow `#faff69` primary CTA with black text + a dark `#1a1a1a` secondary CTA. Right side: a 12px-radius `#1a1a1a` card containing a JetBrains Mono SQL query with syntax highlighting."

2. "Design a stat-callout strip with three numbers ('779+', '2.8k+', '47k+') in Inter 56px / 700 / yellow `#faff69`, each with a `#888888` 12px uppercase label below ('CONTRIBUTORS', 'STARS', 'COMMUNITY'). 96px vertical padding."

3. "Build a 3-column feature card grid on `#0a0a0a`. Each card: `#1a1a1a` background, 12px radius, 32px padding, white 18px / 600 title, `#cccccc` 16px body, no shadow."

4. "Compose a yellow CTA band: full-bleed `#faff69`, 12px radius, 64px padding, Inter 40px / 700 / -1.5px tracking black headline ('Deploy your way'), and a black `#0a0a0a` button with white text labeled 'Get Started'."

5. "Create a pricing grid with 3 tiers — two standard `#1a1a1a` cards (12px radius, 32px padding) and one featured `#faff69` card with black text. The yellow surface alone marks the featured tier — no badge required."

6. "Design a top nav: 64px tall `#0a0a0a` bar with a white wordmark left, horizontal menu in Inter 14px / 500 / `#ffffff` center, a 'Sign in' text link and a yellow `button-primary` ('Get Started') right."

### Iteration Guide
1. Start with the black canvas. Every page lives on `#0a0a0a` — that decision frames everything else.
2. Pick one place per band where the yellow appears. Two yellow elements in one band is too many.
3. Keep display headlines at Inter 700 with negative tracking. If it reads "marketing-friendly," tighten the tracking 0.5px.
4. Use mono everywhere code appears — including inline code spans inside body paragraphs.
5. When in doubt about emphasis, scale the type up before adding color. Size is the primary lever.
6. Cards are containers, not "elevations." No shadows. If you need separation, use the `#2a2a2a` border or step the surface to `#242424`.
7. Stat-callout numbers are the brand's credibility lever — use them whenever you have a real number to cite.
