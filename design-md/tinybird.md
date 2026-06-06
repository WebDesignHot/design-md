---
name: Tinybird
tagline: Near-black developer canvas lit by one bright mint-green — managed ClickHouse with sharp, zero-radius CTAs.
updated_at: 2026-05-29T21:44:26.874Z
published_at: 2026-05-29T21:44:26.874Z
author: webdesignhot
source_url: https://www.tinybird.co
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [dark, green, mono-accent, sans, technical, data]
preview_swatch: ['#0a0a0a', '#27f795', '#ffffff']
related: [clickhouse, vercel, supabase]
description: 'Tinybird''s marketing surface is a near-black developer canvas (#0a0a0a) carrying white Roboto type and one electric mint-green (#27f795) that handles every primary CTA, every accent label, and every "success" token in the embedded code. The mint reads like a live terminal cursor — it appears as a sharp zero-radius "Sign up" button, as bright bracketed eyebrow labels ([Real-Time Analytics]), and as the green that lights up query results inside dark code panels. A darker forest variant (#008060) carries secondary and "diff-added" states. Where ClickHouse paints with electric yellow, Tinybird paints with mint — the same near-black-plus-one-voltage discipline, tuned to the colour of a passing test.'

colors:
  bg: '#0a0a0a'                  # canvas — near-pure black, runs the whole page
  bg-deep: '#000000'            # absolute black for code-pane interiors and footer
  surface: '#151515'            # default content / feature card tone
  surface-soft: '#101010'       # very-soft band tint, barely above canvas
  surface-elevated: '#1e1e1e'   # nested cards, hover surfaces, dropdown rows
  surface-mint-tint: 'rgba(255,255,255,0.05)' # bracketed-label / chip fill (sampled oklab ≈ white @ 5%)
  text: '#ffffff'               # headlines + primary type on dark surfaces
  text-strong: '#e6e6e6'        # emphasised paragraphs
  text-body: '#b0b0b0'          # default running-text — soft grey at ~69%
  text-muted: '#888888'         # captions, footer links, breadcrumbs
  text-faint: '#5a5a5a'         # tertiary fine-print, disabled labels
  brand: '#27f795'              # electric mint-green — the brand voltage (--primary)
  brand-dark: '#008060'         # forest-green secondary + diff-added (--primary-dark)
  brand-active: '#1fd87f'       # press / hover-darker variant of mint
  brand-disabled: '#16402e'     # desaturated dark-mint that sits quietly on canvas
  on-brand: '#0a0a0a'           # near-black text on the mint CTA — the iconic pairing
  on-brand-dark: '#ffffff'      # white text on the forest-green secondary surface
  on-dark: '#ffffff'            # white text on dark surfaces
  link: '#27f795'               # inline links default to brand mint on dark
  link-hover: '#1fd87f'
  border: '#262626'             # 1px hairline on cards — felt more than seen
  border-strong: '#383838'      # heavier divider on inputs, dropdown rows
  border-mint: '#27f795'        # focus border / active outline on inputs
  shadow-color: 'rgba(0,0,0,0.6)' # used sparingly under floating panels only
  shadow-glow-mint: 'rgba(39,247,149,0.18)' # rare ambient glow behind a hero artifact
  code-text: '#ffffff'          # default code foreground (--color-code-white)
  code-invocation: '#27f795'    # prompt / invocation token (--color-code-invocation)
  code-success: '#27f795'       # passing / success output (--color-code-success)
  code-error: '#ff8389'         # error output in code panes (--color-code-error)
  code-identifier: '#00c1ff'    # identifiers / keys in code (--color-code-identifier)
  code-value: '#fc9f5b'         # string / numeric values in code (--color-code-value)
  code-diff-added: '#008060'    # added-line gutter in diffs (--color-code-diff-added)
  success: '#27f795'            # confirmation toasts, "active" badges (reuses brand)
  warning: '#fc9f5b'            # caution states — borrows the code-value amber
  danger: '#ff8389'             # destructive actions, validation errors
  info: '#00c1ff'               # informational notices — borrows code-identifier cyan

typography:
  display:
    family: 'Roboto, system-ui, -apple-system, "Segoe UI", sans-serif'
    weights: [400, 500, 700]
    notes: 'Hero h1 sampled at weight 400 — the size, not the weight, carries the display voice'
  body:
    family: 'Roboto, system-ui, -apple-system, "Segoe UI", sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 80, weight: 700, lineHeight: 1.0,  tracking: '-0.03em',  family: display, notes: 'reserved for largest splash heads' }
    h1:              { size: 64, weight: 400, lineHeight: 1.05, tracking: '-0.02em',  family: display, notes: 'homepage h1 — sampled 64px / 400, Roboto' }
    display-lg:      { size: 56, weight: 700, lineHeight: 1.05, tracking: '-0.02em',  family: display }
    h2:              { size: 44, weight: 700, lineHeight: 1.1,  tracking: '-0.018em', family: display }
    h3:              { size: 32, weight: 600, lineHeight: 1.2,  tracking: '-0.012em', family: display }
    h4:              { size: 24, weight: 600, lineHeight: 1.25, tracking: '-0.005em', family: display }
    h5:              { size: 20, weight: 600, lineHeight: 1.3,  tracking: '0',        family: body }
    title-md:        { size: 18, weight: 600, lineHeight: 1.4,  tracking: '0',        family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',        family: body, notes: 'sampled body default' }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    label:           { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0',        family: body }
    caption:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.02em',   family: body }
    eyebrow:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.04em',   family: mono, transform: none, notes: 'bracketed mint labels — [Real-Time Analytics]' }
    code-md:         { size: 14, weight: 400, lineHeight: 1.55, tracking: '0',        family: mono }
    code-sm:         { size: 13, weight: 400, lineHeight: 1.5,  tracking: '0',        family: mono }
    button:          { size: 14, weight: 500, lineHeight: 1.0,  tracking: '0',        family: body }
    nav-link:        { size: 14, weight: 500, lineHeight: 1.4,  tracking: '0',        family: body }

radius:
  none: 0
  micro: 2
  sm: 4
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
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64

components:
  button-primary:   { bg: brand, text: on-brand, padding: '10px 16px', radius: 0, use: 'every primary CTA — Sign up, Start building' }
  button-secondary: { bg: brand-dark, text: on-brand-dark, padding: '10px 16px', radius: 0, use: 'secondary action paired with mint CTA' }
  button-ghost:     { bg: transparent, text: text, border: border-strong, padding: '10px 16px', radius: 0, use: 'tertiary / outline action on dark' }
  button-text:      { bg: transparent, text: text, padding: '10px 8px', radius: 0, use: 'Log in / inline nav link CTA' }
  card:             { bg: surface, border: border, radius: 12, padding: 24, use: 'standard dark feature / content card' }
  card-code:        { bg: bg-deep, border: border, radius: 12, padding: 20, use: 'embedded terminal / SQL / pipe code pane' }
  badge-bracket:    { bg: surface-mint-tint, text: brand, radius: 4, padding: '4px 10px', use: 'bracketed mint eyebrow label' }
  badge-pill:       { bg: surface-elevated, text: text, radius: 9999, padding: '4px 12px', use: 'neutral status / category pill' }
  input:            { bg: bg, border: border-strong, text: text, radius: 0, padding: '8px 12px', use: 'text field — sharp corners match CTA' }
  top-nav:          { bg: bg, text: on-dark, height: 64, use: 'pinned black nav bar' }

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce — opacity-only transitions, no transforms'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'none — system runs flat across editorial bands'
  standard: 'none — depth comes from surface tone, not shadow'
  elevated: '0 8px 24px rgba(0,0,0,0.6) — floating panels / dropdowns only'
  deep: '0 16px 48px rgba(0,0,0,0.7) — modals'
  ring: '0 0 0 2px #27f795'
  glow-mint: '0 0 0 1px rgba(39,247,149,0.18) — rare ambient halo behind hero code artifact'

accessibility:
  contrast-text-on-bg: 19.8                 # AAA — white on #0a0a0a
  contrast-brand-on-bg: 14.0                # AAA — mint #27f795 on #0a0a0a
  contrast-on-brand-on-brand: 14.0          # AAA — near-black #0a0a0a on mint #27f795
  contrast-body-on-bg: 9.1                  # AAA — #b0b0b0 on #0a0a0a
  contrast-muted-on-bg: 5.6                 # AA at body sizes — #888888 on #0a0a0a
  contrast-brand-dark-on-bg: 4.0            # AA large only — #008060 on #0a0a0a
  contrast-on-brand-dark-on-brand-dark: 4.9 # AA — white on #008060
  focus-ring: '2px solid #27f795 with 2px offset'
  reduced-motion-honored: true

dark-mode: 'this IS the dark mode — Tinybird ships a near-black marketing surface with no light variant'
---

## 1. Visual Theme & Atmosphere

Tinybird's marketing surface reads like a developer's terminal at full focus — a near-pure black canvas (`#0a0a0a`) carrying clean white Roboto type, with one electric mint-green (`#27f795`) that does all the brand work. The mint is the colour of a passing test, a live cursor, a query that just returned. It appears scarcely on individual elements — one sharp "Sign up" button, one bracketed eyebrow label per band — and the scarcity is exactly what gives it voltage. On a page this dark, the mint doesn't decorate; it signals.

Where ClickHouse (Tinybird's underlying engine and closest visual cousin) reaches for electric yellow, Tinybird reaches for mint, and the discipline is the same: near-black plus a single high-chroma accent, no second decorative colour invited to the party. A darker forest-green (`#008060`) carries the supporting cast — secondary buttons, the "diff-added" gutter in code panes — but it never competes for attention with the bright mint. The two greens read as a single idea at two energy levels: the bright one is "now," the dark one is "done."

The most telling detail is the radius: the primary CTA is **sharp — zero radius**. No rounded "friendly SaaS" pill here. The square mint button is engineering-blunt, a key on a mechanical keyboard rather than a soft consumer chiclet. That sharpness is a deliberate counterpoint to the brightness of the green — it keeps the brand from tipping into cheerful and holds it in the register of infrastructure tooling. Cards and code panes carry a gentle 12px radius, but anything you *press* is square.

Type runs Roboto across the whole system. The homepage h1 was sampled at 64px / weight **400** — Tinybird builds its display voice on size and tracking, not on heavy weight. Big, light, tightly-tracked Roboto reads precise and unhurried, like documentation written by people who are confident in the numbers. Code is everywhere, and it's colour-coded with its own deliberate palette: white default text, mint for invocations and success, cyan (`#00c1ff`) for identifiers, amber (`#fc9f5b`) for values, coral (`#ff8389`) for errors. The code panes are where the marketing actually happens — Tinybird is a data platform, so it shows you data flowing, lit up in those exact terminal colours.

The page rhythm is monolithic black top to bottom, sectioned by bracketed mint eyebrows and broken open by dark code panes that drop to absolute black (`#000000`) interiors. There are almost no shadows; depth is tonal, the surface card (`#151515`) sitting just barely above the canvas. The whitespace is engineering-tight rather than marketing-airy — generous enough to read, dense enough to feel like a tool.

**Key Characteristics:**
- Near-pure black canvas (`#0a0a0a`) with white Roboto type — a true dark-only surface, no light variant.
- One electric mint-green (`#27f795`, `--primary`) carries every primary CTA, accent label, and code-success token.
- Forest-green (`#008060`, `--primary-dark`) is the only secondary — used for secondary buttons and diff-added states, never as a third decorative colour.
- **Primary CTA is sharp: 0px radius.** The square mint button is the signature — engineering-blunt, never a soft pill.
- Roboto everywhere; homepage h1 sampled at 64px / weight 400 — display voice built on size + tracking, not weight.
- Bracketed mint eyebrows (`[Real-Time Analytics]`) on a faint 5%-white tint, 4px radius, label every major band.
- Code panes are the marketing — terminal palette: white text, mint success, cyan identifiers, amber values, coral errors.
- Code-pane interiors drop to absolute black (`#000000`) against the `#0a0a0a` canvas.
- Flat by default — depth comes from the `#151515` surface tone, not from drop shadows.
- Mint + near-black is the brand contract; the page reads like a live terminal, not a brochure.

## 2. Color Palette & Roles

### Primary
- **Bg / Canvas** (`#0a0a0a`): The default page floor — near-pure black. Runs every band top to bottom.
- **Text** (`#ffffff`): All headlines and primary type on dark surfaces.
- **Brand** (`#27f795` → `--primary`): Electric mint-green — the brand voltage. Every primary CTA, every accent label, every code-success token.

### Brand & Greens
- **Brand** (`#27f795`): Reserved for primary CTAs (sharp `#0a0a0a` text on mint), bracketed eyebrow labels, links, focus rings, and code-success/invocation tokens.
- **Brand Dark** (`#008060` → `--primary-dark`): Forest-green secondary — secondary buttons (white text), diff-added gutter, quieter "done" states. Never a decorative third colour.
- **Brand Active** (`#1fd87f`): Press / hover-darker variant of mint — the only state ever applied to the bright brand.
- **Brand Disabled** (`#16402e`): Desaturated dark-mint that sits quietly on the canvas without competing.

### Accent
Tinybird has **no decorative accent palette** outside its code colours. The accent slots below exist for syntax-highlighting and status inside code panes, never for free-floating marketing chrome.
- **Code Identifier** (`#00c1ff` → `--color-code-identifier`): Cyan — identifiers, keys, column names inside code panes.
- **Code Value** (`#fc9f5b` → `--color-code-value`): Amber — string and numeric values inside code panes.
- **Code Error** (`#ff8389` → `--color-code-error`): Coral — error output inside code panes.

### Interactive
- **Link** (`#27f795`): Inline body links default to brand mint on dark surfaces.
- **Link Hover** (`#1fd87f`): Press / hover-darker mint.
- **On-Brand** (`#0a0a0a`): Near-black text sitting on the mint CTA — the iconic pairing; never lighten it.
- **On-Brand-Dark** (`#ffffff`): White text on the forest-green secondary surface.
- **Disabled** (`#5a5a5a`): Disabled labels and tertiary text.

### Neutral Scale
- **Text** (`#ffffff`): Headlines, primary type.
- **Text Strong** (`#e6e6e6`): Emphasised paragraphs.
- **Text Body** (`#b0b0b0`): Default running-text — soft grey at ~69%.
- **Text Muted** (`#888888`): Captions, footer links, breadcrumbs.
- **Text Faint** (`#5a5a5a`): Tertiary fine-print, disabled labels.

### Surface & Borders
- **Bg Deep** (`#000000`): Absolute black for code-pane interiors and the footer.
- **Surface Soft** (`#101010`): Very-soft band tint, barely above canvas — section dividers.
- **Surface** (`#151515`): Default content / feature card tone — the engineering panel.
- **Surface Elevated** (`#1e1e1e`): Nested cards, hover surfaces, dropdown rows.
- **Surface Mint Tint** (`rgba(255,255,255,0.05)`): Faint near-white wash behind bracketed mint labels (sampled as oklab ≈ white at 5% alpha).
- **Border** (`#262626`): 1px hairline on cards — the divider felt more than seen.
- **Border Strong** (`#383838`): Heavier divider on input edges, dropdown rows.
- **Border Mint** (`#27f795`): Focus / active outline on inputs.

### Shadow Colors
Tinybird runs mostly flat; shadow tokens apply only to floating chrome:
- **Shadow Color** (`rgba(0,0,0,0.6)`): Under floating panels and dropdowns only.
- **Shadow Glow Mint** (`rgba(39,247,149,0.18)`): Reserved for a rare ambient halo behind a hero code artifact — used at most once per page.

### Semantic
- **Success** (`#27f795`): Confirmation toasts, "active" badges — reuses the brand mint (success *is* the brand here).
- **Warning** (`#fc9f5b`): Caution states — borrows the code-value amber.
- **Danger** (`#ff8389`): Destructive actions, validation errors — the code-error coral.
- **Info** (`#00c1ff`): Informational notices — the code-identifier cyan.

## 3. Typography Rules

### Font Family
- **Primary**: `Roboto, system-ui, -apple-system, "Segoe UI", sans-serif`. Roboto handles every text role — display, body, navigation, buttons, captions. The single-family approach is the discipline.
- **Mono**: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, monospace`. Code panes, terminal output, SQL/pipe snippets, and the bracketed eyebrow labels.
- **No serif**: Deliberately. Roboto's neutral grotesque + a system mono is the whole type system.
- **Display voice is size + tracking, not weight.** The sampled homepage h1 is 64px at weight **400** — large, light, tightly-tracked Roboto reads precise rather than loud.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---|---|---|---|---|
| display-hero | Roboto | 80 | 700 | 1.00 | -0.03em | Largest splash heads (rare) |
| h1 | Roboto | 64 | 400 | 1.05 | -0.02em | **Homepage h1 — sampled 64px / 400** |
| display-lg | Roboto | 56 | 700 | 1.05 | -0.02em | Heavy section openers |
| h2 | Roboto | 44 | 700 | 1.10 | -0.018em | Section heads |
| h3 | Roboto | 32 | 600 | 1.20 | -0.012em | Sub-section heads |
| h4 | Roboto | 24 | 600 | 1.25 | -0.005em | Card titles, larger feature titles |
| h5 | Roboto | 20 | 600 | 1.30 | 0 | Small card titles |
| title-md | Roboto | 18 | 600 | 1.40 | 0 | Intro paragraphs, list labels |
| body-lg | Roboto | 18 | 400 | 1.55 | 0 | Lead paragraphs |
| body | Roboto | 16 | 400 | 1.55 | 0 | Default running-text (sampled) |
| body-sm | Roboto | 14 | 400 | 1.50 | 0 | Footer body, fine-print |
| label | Roboto | 13 | 500 | 1.40 | 0 | Form labels, list labels |
| caption | Roboto | 12 | 500 | 1.40 | 0.02em | Captions, footnotes |
| eyebrow | Mono | 12 | 500 | 1.40 | 0.04em | Bracketed mint labels — `[Real-Time Analytics]` |
| code-md | Mono | 14 | 400 | 1.55 | 0 | Code panes, SQL, pipes |
| code-sm | Mono | 13 | 400 | 1.50 | 0 | Inline code, terminal status |
| button | Roboto | 14 | 500 | 1.00 | 0 | Standard button labels |
| nav-link | Roboto | 14 | 500 | 1.40 | 0 | Top-nav menu items |

### Principles
- **Display is light, not heavy.** The hero h1 ships at weight 400 — let size and negative tracking carry the hierarchy. Don't reflexively bold a big headline.
- **Negative tracking on display sizes.** Roboto at large sizes needs `-0.02em` to `-0.03em` to read tight and engineered rather than wide and consumer.
- **Body stays at 400 / 500 / 600.** Use weight 600 for emphasis, never a jump to 700 inside running text.
- **Mono for code and eyebrows.** The bracketed labels (`[Real-Time Analytics]`) are mono, not sans — they read as a token, not a tagline.
- **Code is colour-coded, always.** Never render a code sample as flat white; apply the terminal palette (mint success, cyan identifiers, amber values, coral errors) — the colour *is* the content.
- **One family, two registers.** Roboto for prose and chrome, the system mono for anything machine-spoken. No third typeface.

## 4. Component Stylings

### Buttons (4 variants)

**`button-primary`** — The signature mint CTA. Background `#27f795`, text `#0a0a0a` (near-black), Roboto 14px / 500, padding 10px × 16px, **radius 0px (sharp)**. This square mint button is the brand's single most recognisable element; do not round it, do not lighten the text, do not fade the green. Used on every primary action ("Sign up", "Start building").

**`button-secondary`** — Forest-green secondary. Background `#008060`, text `#ffffff`, same sharp 0px corners and 10px × 16px padding as primary. The paired action next to a mint CTA — quieter, darker, "the other option."

**`button-ghost`** — Outline action on dark. Transparent background, text `#ffffff`, 1px `#383838` border, sharp 0px corners. Used for tertiary actions where neither green is warranted (e.g. "View docs").

**`button-text`** — Inline text-only button. No background or border, text `#ffffff`, padding 10px × 8px. Used for "Log in" and inline nav CTAs.

### Cards

**`card`** — Standard dark feature / content card. Background `#151515`, 1px `#262626` border, radius 12px, padding 24px. The default container for every feature, capability, and integration description. Note the contrast with buttons: cards are gently rounded, buttons are square.

**`card-code`** — Embedded code / terminal pane. Background drops to absolute black `#000000` against the canvas, 1px `#262626` border, radius 12px, padding 20px. Carries SQL queries, Tinybird pipe definitions, or terminal output in the mono code palette. This is where the marketing work happens — show real data flowing.

**`card-elevated`** — Hover / nested variant. Background steps to `#1e1e1e`; no shadow unless floating. Used for nested cards and the hover state of an interactive card.

### Badges & Pills

**`badge-bracket`** — The bracketed mint eyebrow. Background `rgba(255,255,255,0.05)` (faint near-white tint), text `#27f795`, mono 12px, radius **4px**, padding 4px × 10px. Renders content in literal brackets — `[Real-Time Analytics]`, `[Observability]`. Labels every major band. Note: this is the one mint-on-dark element allowed to repeat, because its tint container keeps it from competing with the CTA.

**`badge-pill`** — Neutral status / category pill. Background `#1e1e1e`, text `#ffffff`, radius 9999px, padding 4px × 12px. Used for non-accent metadata (versions, categories).

**`badge-status`** — Live-status dot + label. Mint `#27f795` dot for "operational / live", coral `#ff8389` for "error", inside a `#1e1e1e` pill.

### Inputs / Forms

**`input`** — Text field. Background `#0a0a0a` (canvas), 1px `#383838` border, text `#ffffff`, **radius 0px (sharp, matching the CTA)**, padding 8px × 12px. The square corners keep forms consistent with buttons.

**`input-focused`** — Border switches to `#27f795` (mint) with a 2px ring; no background change. The mint focus ring is the same colour as the brand, unmistakable on the dark canvas.

### Navigation

**`top-nav`** — Black nav bar pinned to top, 64px tall, background `#0a0a0a`. Logo + wordmark left, horizontal menu (Product, Use Cases, Docs, Pricing, Customers) center-left, right cluster: "Log in" (`button-text`) + a sharp mint "Sign up" (`button-primary`). No bottom border by default; a 1px `#262626` hairline appears on scroll.

**`nav-dropdown`** — Mega-menu panel on `#151515` with `#1e1e1e` hover rows, 1px `#262626` border, the only place a soft `rgba(0,0,0,0.6)` shadow appears.

## 5. Layout Principles

### Spacing System
Base unit **4px**. Tokens: `xxs:4 · xs:8 · sm:12 · md:16 · lg:24 · xl:32 · xxl:48 · section:96`. Section padding is 96px between major bands; card internal padding sits at 24px, code-pane padding at 20px. The intra-card density is always tighter than the inter-section air — the page feels engineering-grade rather than marketing-soft.

### Grid & Container
Max content width is 1280px centered, prose capped at 720px for readability. The editorial body uses a 12-column grid; the hero typically runs a split layout (headline + CTA left, a code pane right showing a live query). Feature card grids run 3-up at desktop, 2-up at tablet, 1-up at mobile.

### Whitespace Philosophy
Tinybird uses dense, slightly-compressed whitespace appropriate for a developer-data brand. Generous enough to read editorially, tight enough to feel like a tool. The page breathes the way a well-instrumented dashboard breathes — calm, but information-dense.

### Section Cadence
Every page follows a consistent rhythm: black hero band (headline + code pane) → bracketed-eyebrow feature band → dark feature card grid → code-pane demonstration → another eyebrow band → pre-footer CTA → absolute-black footer. Each major band opens with a bracketed mint eyebrow; the mint CTA appears at most twice per page (hero + pre-footer).

## 6. Shapes & Radius Scale

| Tier | Token | Value | Use |
|---|---|---|---|
| None | none | 0px | **Primary/secondary buttons, inputs** — the signature sharp edge |
| Micro | micro | 2px | Reserved — barely used |
| Standard | sm | 4px | Bracketed eyebrow chips, syntax-highlight chips inside code |
| Comfortable | md | 8px | Small inline controls, tight nested elements |
| Large | lg | 12px | Content cards, code panes — the default for *containers* |
| Featured | xl | 16px | Hero shells, large mega-menu panels (rare) |
| Pill | pill | 9999px | Neutral status pills, avatars only |

The defining tension of the system: **actionables are square (0px), containers are rounded (12px).** A pressable mint button is sharp; the card it sits in is soft. This is the inverse of the typical SaaS instinct (rounded buttons, sharp cards) and it's exactly what gives Tinybird its engineering-tool feel. There are no compound radii — every corner uses a single uniform value.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No shadow, no border | Body sections, top nav, hero |
| 1 — Soft hairline | 1px `#262626` border | Content cards, code panes needing edge definition |
| 2 — Surface | `#151515` background, no shadow | Feature cards |
| 3 — Code pane | `#000000` background, 1px `#262626` border | Embedded terminal / SQL panes — darker than canvas |
| 4 — Elevated | `#1e1e1e` background | Nested cards, hover states |
| 5 — Floating | `#151515` + `0 8px 24px rgba(0,0,0,0.6)` | Dropdowns, mega-menus, tooltips |
| 6 — Modal | `#151515` + `0 16px 48px rgba(0,0,0,0.7)` + backdrop dim | Dialogs |

### Shadow Philosophy
Tinybird is **mostly flat**. Across editorial bands, depth comes entirely from contrast between the black canvas (`#0a0a0a`), the surface card (`#151515`), and the *darker* code-pane interior (`#000000`) — a three-step tonal stack that reads as depth without a single shadow. The inverted move is notable: the code pane goes *darker* than the canvas rather than lighter, which makes it recede like a window cut into the page. Shadows appear only on genuinely floating chrome — dropdowns, mega-menus, modals — where they cue "this is above the page." The mint CTA does its own elevation work through pure contrast; it never needs a shadow.

## 8. Interaction & Motion

### Easing Curves
- **Standard ease**: `cubic-bezier(0.4, 0, 0.2, 1)` — the default for all transitions, Material's standard curve.
- **Emphasized ease**: `cubic-bezier(0.2, 0, 0, 1)` — used on CTA hover and modal entrances for a slight settle into rest.

### Duration Buckets
- **Fast (150ms)**: Colour and opacity transitions on hover.
- **Standard (240ms)**: Dropdown opens, card hover surface shifts, button press feedback.
- **Slow (320ms)**: Modal entrance, page-section reveals on scroll.

### Per-Component Micro-States
- **Button hover (primary)**: Mint darkens from `#27f795` → `#1fd87f` over 150ms; no transform, no radius change (it stays sharp).
- **Button press**: 1px `translateY(1px)` over 80ms — a mechanical-key feel suited to the square shape.
- **Button hover (secondary)**: Forest-green lightens slightly toward the mint; same 150ms.
- **Card hover**: Surface shifts `#151515` → `#1e1e1e` over 240ms; border holds. Cards do not lift.
- **Code-pane hover**: No state change — code is content, not an action. A copy button appears top-right on hover with a 150ms fade.
- **Link hover**: Underline goes 1px → 2px over 150ms; colour stays mint.
- **Input focus**: 2px mint ring expands 0 → 2px over 150ms with standard ease.

### Page Transitions
Standard browser navigation. Section-on-scroll reveals are a 320ms fade-in-up (12px offset) gated by `IntersectionObserver`. Code panes may animate a typed-query effect on first view (cursor blink in mint), the one "playful" motion in the system — and it's skipped under reduced motion.

### Reduced Motion
`prefers-reduced-motion: reduce` honored: all transforms removed, transitions reduced to opacity-only at ~100ms, typed-query and cursor-blink animations skipped — final query state renders immediately.

## 9. Accessibility & A11y

### Contrast Pairs (computed from live tokens)
- **Text on bg**: `#ffffff` on `#0a0a0a` = **19.8** — AAA at every size. The core pairing is maximally legible.
- **Brand on bg**: `#27f795` on `#0a0a0a` = **14.0** — AAA. Mint reads strongly on black at any size.
- **On-brand on brand**: `#0a0a0a` on `#27f795` = **14.0** — AAA. The near-black-on-mint CTA is the strongest button pairing in the system.
- **Body on bg**: `#b0b0b0` on `#0a0a0a` = **9.1** — AAA at every size.
- **Muted on bg**: `#888888` on `#0a0a0a` = **5.6** — AA at body sizes; do not use below 14px.
- **Brand-dark on bg**: `#008060` on `#0a0a0a` = **4.0** — AA for large text only. Never set forest-green text below 24px on the canvas; use it as a surface fill instead.
- **On-brand-dark on brand-dark**: `#ffffff` on `#008060` = **4.9** — AA at body sizes. Safe for secondary-button labels.

### Focus Indicators
Every focusable element shows a 2px solid `#27f795` ring with 2px offset. The mint ring matches the brand, making focus unmistakable on the dark canvas. Use the native `:focus-visible` selector — no polyfill required.

### ARIA Patterns
- **Buttons**: Native `<button>` elements; `aria-label` only when icon-only.
- **Code panes**: Wrap in `<pre><code>` with `aria-label` describing the snippet ("Tinybird pipe definition"); copy buttons announce via `aria-live="polite"`.
- **Navigation**: Top-nav uses `<nav aria-label="Primary">`; mega-menus use `aria-expanded` and `aria-controls` on their triggers.
- **Status badges**: The live-status dot carries a text label (not colour alone) — `aria-label="Operational"` so the mint dot isn't the only signal.
- **Dialog**: `role="dialog"` with `aria-labelledby` referencing the dialog title; focus trapped, Escape closes.

### Keyboard Navigation
Tab order follows visual reading order. Skip-link at the top of every page jumps to `<main>`. All interactive elements respond to Enter and Space. Mega-menus open on focus and close on Escape; modals trap focus.

### Screen Reader Hints
Code-success/error colour is never the sole signal — pair the mint/coral with a text token ("PASS" / "FAIL") or an icon. Bracketed eyebrow labels read their inner text without the literal brackets where possible (`aria-label="Real-Time Analytics"`).

### Reduced Motion
Honored via `@media (prefers-reduced-motion: reduce)` — transforms removed, transitions reduced to ~100ms opacity-only, typed-query and cursor-blink animations skipped.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Hamburger nav; hero h1 64→36px; code pane stacks below headline; feature grids 1-up |
| Tablet | 640–1024px | Top nav tightens; feature cards 2-up; hero h1 ~48px; code pane may stack |
| Desktop | 1024–1280px | Full top-nav; 3-up feature cards; hero split layout; h1 64px |
| Wide | > 1280px | Same as desktop with more breathing room; max content 1280px |

### Touch Targets
- Primary CTA at minimum 40px tall (10px × 16px padding on a 14px label clears the WCAG hit area via vertical padding).
- Icon-only controls padded to a 44 × 44px minimum hit area even when the glyph is smaller.
- Inputs at minimum 40px tall.

### Collapsing Strategy
Top nav collapses to a hamburger at < 768px. The hero split collapses to single-column on mobile, code pane stacking below the headline. Feature card grids reduce columns rather than scaling type. Code panes retain font-size and scroll horizontally inside the pane on mobile rather than wrapping — a wrapped query is a misleading query.

### Image / Code Behavior
Code panes keep a fixed mono font-size and scroll horizontally on narrow screens. Customer / integration logos render monochrome and wrap to new rows on mobile. Product screenshots inside cards scale proportionally with no aspect-ratio change.

## 11. Content & Voice

### Tone
**Technical, fast, confident.** Tinybird writes for engineers who already know what real-time analytics and ClickHouse are. Headlines state outcomes as facts ("Ship faster with Managed ClickHouse"); body copy supports with architecture, latency numbers, and code. No hand-holding, no "imagine if…" framing.

### Microcopy Patterns
- **CTA verbs**: "Sign up", "Start building", "Read the docs", "Talk to us". Energetic and direct; never "Sign up free" or a vague "Learn more".
- **Eyebrow labels**: Bracketed mono tokens label every band — `[Real-Time Analytics]`, `[Observability]`, `[Developer Experience]`. The brackets signal "this is a thing the platform does," like a tag.
- **Numbers up front**: Latency, throughput, and scale figures lead — Tinybird sells speed, so the proof is quantitative.

### Empty States
A single line in `text-muted` ("No pipes yet — create your first to start querying") with a sharp mint CTA. Never apologetic.

### Error Messages
**Pattern**: coral `#ff8389` icon + "What went wrong" + "What to try next". Example: "Query failed — check your datasource schema for a type mismatch." Never "Oops!", never blaming the user. In code panes, errors render in the coral `--color-code-error` token.

### Success Confirmations
Single-line toast in `#ffffff` over `#151515` with a mint `#27f795` accent stripe at the left. "Pipe published." not "Yay! 🎉". Auto-dismiss after 4s.

## 12. Dark Mode & Theming

Tinybird is **dark-only**. The marketing surface ships a near-black canvas (`#0a0a0a`) with no light-mode toggle and no light variant of any component. The dark canvas is the brand's natural state — it's what makes the mint voltage and the colour-coded code panes work. Switching to white would erase the terminal aesthetic that anchors the whole identity.

If a light surface ever became necessary (an in-product setting, a printed doc), the safe mapping is: `#fafafa` canvas, `#0a0a0a` text, the same `#27f795` brand for accents but darkened to `#008060` for any mint-on-white text (the bright mint fails contrast on white). The sharp 0px CTA radius and Roboto type carry across unchanged. But the marketing surface stays dark.

## 13. Lineage & Influences

Tinybird's aesthetic descends from **developer-terminal culture** — the look of a focused shell session, a status page that's all green, a query editor returning rows. It shares its closest DNA with ClickHouse, the engine Tinybird manages: the same near-black-plus-one-voltage discipline, the same flat tonal depth, the same code-panes-as-marketing instinct. Where ClickHouse picks electric yellow, Tinybird picks mint — and tunes the colour to the exact green of a passing test, the most reassuring colour in a developer's day.

The signature move — a **sharp, zero-radius CTA** in a high-chroma colour — places Tinybird in the lineage of engineering-blunt interfaces (Vercel's stark dark marketing, Linear's precision) rather than the rounded-pill consumer-SaaS school. The colour-coded code palette (cyan identifiers, amber values, coral errors) borrows directly from modern terminal and editor themes. Roboto, kept light at display sizes, lends a documentation-grade neutrality — confident in the numbers, uninterested in decoration.

- **ClickHouse** — The underlying engine and closest visual cousin: near-black + one accent voltage, flat depth, code as marketing. https://clickhouse.com
- **Vercel** — Stark dark-monolithic developer marketing without gradient noise. https://vercel.com
- **Linear** — Engineering-precision dark UI; restraint as a brand signal. https://linear.app
- **Roboto (Christian Robertson)** — The neutral grotesque that ships across the modern web, kept light for a documentation feel. https://fonts.google.com/specimen/Roboto
- **One Dark / terminal editor themes** — The colour-coded code palette (cyan identifiers, amber values, coral errors). https://github.com/atom/one-dark-syntax

## 14. Do's and Don'ts

### Do
- Anchor every page on the near-black canvas (`#0a0a0a`). Mint plus black is the brand voltage.
- Keep the primary CTA **sharp — 0px radius**. The square mint button is the single most recognisable element.
- Reserve the bright mint (`#27f795`) for primary CTAs, links, focus rings, bracketed eyebrows, and code-success — its scarcity is its power.
- Use the forest-green (`#008060`) for secondary actions and "done" states, and nowhere else.
- Open every major band with a bracketed mono eyebrow (`[Real-Time Analytics]`) on the faint white tint.
- Show real code in code panes — SQL queries, Tinybird pipes, terminal output — coloured with the terminal palette. The code is the marketing.
- Drop code-pane interiors to absolute black (`#000000`) so they recede like a window into the page.
- Keep display headlines light (Roboto 400 at 64px) with `-0.02em` tracking — let size carry the hierarchy.

### Don't
- Don't round the buttons. A rounded mint pill reads consumer-SaaS and breaks the brand instantly.
- Don't introduce a second decorative brand colour. The system is near-black + mint, with forest-green as the only support.
- Don't use the bright mint for body text or large surface fills — it belongs on CTAs, accents, and code-success only.
- Don't set forest-green (`#008060`) as small text on the canvas — it only clears AA at large sizes; use it as a fill.
- Don't render code as flat white. Always apply the colour-coded terminal palette.
- Don't reach for heavy display weights by default — the hero is weight 400, not 700.
- Don't add drop shadows to editorial cards. Depth is tonal (`#0a0a0a` → `#151515` → `#000000` pane); shadows are for floating chrome only.
- Don't make the code panes lighter than the canvas — they go darker, not lighter.

## 15. Agent Prompt Guide

### Quick Color Reference
```
Bg / Canvas:     #0a0a0a (near-pure black)
Code-pane bg:    #000000 (absolute black, darker than canvas)
Surface:         #151515 (feature card)
Surface Elev:    #1e1e1e (nested / hover)
Border:          #262626 (1px hairline)
Text:            #ffffff (headlines, body)
Text Body:       #b0b0b0 (running-text)
Text Muted:      #888888 (captions)
Brand:           #27f795 (mint — CTAs, accents, code-success)
On-Brand:        #0a0a0a (near-black text on mint, SHARP 0px)
Brand Dark:      #008060 (forest secondary, diff-added)
Code accents:    #00c1ff cyan · #fc9f5b amber · #ff8389 coral
```

### Example Component Prompts

1. "Create a hero band on `#0a0a0a`. Left: a bracketed mono mint eyebrow `[Real-Time Analytics]` (text `#27f795` on `rgba(255,255,255,0.05)`, 4px radius), a Roboto 64px / 400 / -0.02em white headline ('Ship faster with Managed ClickHouse'), an 18px `#b0b0b0` subhead, and a **sharp 0px-radius mint `#27f795` 'Sign up' button with `#0a0a0a` text** beside a forest-green `#008060` secondary. Right: a 12px-radius `#000000` code pane showing a Tinybird pipe in mono, with mint success tokens and cyan identifiers."

2. "Design a code-pane card: background `#000000` (darker than the page), 1px `#262626` border, 12px radius, 20px padding, mono 14px. Render a SQL query with identifiers in `#00c1ff`, string values in `#fc9f5b`, the result row in mint `#27f795`, and an error line in coral `#ff8389`."

3. "Build a 3-column feature grid on `#0a0a0a`. Each card: `#151515` background, 1px `#262626` border, 12px radius, 24px padding, Roboto 24px / 600 white title, 16px `#b0b0b0` body, no shadow. Lead the band with a bracketed mint eyebrow."

4. "Compose a pre-footer CTA band on `#0a0a0a`: Roboto 44px / 700 / -0.018em white headline ('Start building in minutes'), a `#b0b0b0` supporting line, and a **sharp 0px mint `#27f795` 'Sign up' button** ( `#0a0a0a` text) next to a `#383838`-bordered ghost button. No rounded corners on either button."

5. "Design a top nav: 64px `#0a0a0a` bar, white wordmark left, Roboto 14px / 500 `#ffffff` menu center, a 'Log in' text link and a **sharp mint `#27f795` 'Sign up'** button right. Add a 1px `#262626` bottom hairline only when scrolled."

6. "Create a live-status badge: a mint `#27f795` dot + 'Operational' label in a `#1e1e1e` pill (9999px radius), Roboto 12px. For an error state swap the dot to coral `#ff8389` and label 'Degraded'."

### Iteration Guide
1. Start with the near-black canvas (`#0a0a0a`) and white Roboto. That decision frames everything else.
2. Make the primary CTA square first — set radius to 0px. If it looks like a rounded SaaS pill, you've lost the brand; sharpen it.
3. Place the mint scarcely: one CTA per band, one bracketed eyebrow per band. Two bright-mint elements competing in one band is too many.
4. Put real code in a `#000000` pane and colour it — mint success, cyan identifiers, amber values, coral errors. Flat-white code reads dead.
5. Keep the headline light (Roboto 400) and tighten tracking to `-0.02em` before reaching for a heavier weight.
6. When you need separation between cards, use the `#262626` border or step the surface to `#1e1e1e` — not a shadow.
7. If you need a second action, reach for forest-green `#008060` (secondary) before any new colour. The palette is two greens, full stop.
8. Remember the inversion: actionables are sharp (0px), containers are soft (12px). Check both before you call it done.

---

*Theme-toggle audit: score=2, signals=[tailwind-dark-class]*
