---
name: Mintlify
tagline: Documentation-platform marketing — pure white canvas, mint-green accent, Inter at tight tracking, near-black pill CTAs.
updated_at: 2026-05-05T10:17:17+12:00
published_at: 2026-05-03T10:27:49+12:00
author: webdesignhot
source_url: https://mintlify.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [light, minimal, sans, spacious, soft, structured]
preview_swatch: ['#ffffff', '#0c8c5e', '#08090a']
related: [vercel, linear, anthropic]
description: 'Mintlify''s site is a study in restraint — a pure-white `#ffffff` canvas, near-black `#08090a` text (the same hex Linear uses), Inter at weight 600 with a tight `-0.02em` tracking, and a single mint-green `#0c8c5e` accent. The CTA pattern is a black pill with white text — Linear-style inversion in light mode. Where most docs-platform marketing sites lean on rainbow gradients or illustrated mascots to look "friendly," Mintlify refuses the entire vocabulary. The single mint-green accent does all the brand work — used sparingly (link color, accent dots, never CTA fills), it compounds. Warm-neutral grays for surfaces (`#f9f8f7`, `#e6e5e3`) keep the pure white from feeling sterile, while the 16.7M-pixel border-radius on buttons (effectively pill-9999) follows the Linear/Vercel convention. The whole system reads as documentation that happens to sell something — calm, structured, type-led, single-accent confidence. The mint hue is lab-defined as L=51.3, a=-41.6, b=15.4 — a forest-leaning mint that signals trust without joining the SaaS-green crowd.'

colors:
  # Primary
  bg: '#ffffff'                          # pure white page canvas
  bg-secondary: '#f9f8f7'                # warm-neutral subtle bg
  bg-tertiary: '#f4f2ef'                 # deeper warm-neutral for emphasis
  surface: '#ffffff'                     # card surface = page surface (flat)
  surface-elev: '#fafaf9'                # subtle lift over white
  text: '#08090a'                        # near-black (matches Linear's hex)
  text-strong: '#000000'                 # rare absolute-black for hero accent
  text-medium: '#3a3b3c'                 # secondary heading colour
  text-soft: 'rgba(8, 9, 10, 0.6)'       # supporting copy at 60%
  text-faint: 'rgba(8, 9, 10, 0.45)'     # captions, eyebrows
  text-muted: 'rgba(8, 9, 10, 0.3)'      # disabled microcopy
  # Brand
  brand: '#0c8c5e'                       # forest-leaning mint, the single accent
  brand-bright: '#10a370'                # hover-brightened mint
  brand-deep: '#085f3f'                  # pressed-state mint
  brand-soft: '#e6f4ed'                  # mint wash for backgrounds
  brand-tint: '#c5e6d5'                  # mint tint for chips
  on-brand: '#ffffff'                    # white label on mint
  cta-bg: '#08090a'                      # near-black pill CTA
  cta-text: '#ffffff'                    # white CTA text
  # Interactive
  link: '#0c8c5e'                        # mint link in body copy
  link-hover: '#085f3f'                  # deeper mint on hover
  selected-bg: '#f9f8f7'                 # warm-neutral selected state
  disabled: 'rgba(8, 9, 10, 0.3)'
  # Borders
  border: 'rgba(8, 9, 10, 0.07)'         # default hairline
  border-strong: 'rgba(8, 9, 10, 0.14)'  # outlined buttons
  border-subtle: 'rgba(8, 9, 10, 0.04)'  # quietest separation
  border-brand: 'rgba(12, 140, 94, 0.30)' # mint-tinted hairline
  # Semantic
  success-bg: '#e6f4ed'                  # mint wash
  success-text: '#085f3f'
  warning-bg: '#fef4e6'                  # warm-amber wash
  warning-text: '#7a4a00'
  danger-bg: '#fdeeee'                   # soft-red wash
  danger-text: '#a82020'
  info-bg: '#eef4fd'                     # soft-blue wash
  info-text: '#1a3a7a'

typography:
  display:
    family: 'Inter, "Inter Fallback", -apple-system, system-ui, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: ['ss01', 'ss02', 'cv11', 'liga', 'kern']
  body:
    family: 'Inter, "Inter Fallback", -apple-system, system-ui, sans-serif'
    weights: [400, 500]
    opentype-features: ['liga', 'kern']
  mono:
    family: 'ui-monospace, "SF Mono", "JetBrains Mono", Consolas, monospace'
    weights: [400, 500]
    opentype-features: ['tnum', 'zero']
  scale:
    display-hero:    { size: 64, weight: 600, lineHeight: 1.05, tracking: '-0.025em', family: display, opentype: 'ss01' }
    display:         { size: 56, weight: 600, lineHeight: 1.08, tracking: '-0.02em', family: display, opentype: 'ss01' }
    h1:              { size: 48, weight: 600, lineHeight: 1.15, tracking: '-0.02em', family: display }
    h2:              { size: 40, weight: 600, lineHeight: 1.10, tracking: '-0.02em', family: display }
    h3:              { size: 28, weight: 600, lineHeight: 1.25, tracking: '-0.015em', family: display }
    h4:              { size: 22, weight: 600, lineHeight: 1.30, tracking: '-0.01em', family: display }
    h5:              { size: 18, weight: 600, lineHeight: 1.40, family: display }
    eyebrow:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.06em', family: display, transform: uppercase }
    body-large:      { size: 18, weight: 400, lineHeight: 1.55, family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.5,  family: body }
    body-small:      { size: 14, weight: 400, lineHeight: 1.5,  family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.4,  family: body }
    caption-tabular: { size: 12, weight: 500, lineHeight: 1.4,  family: mono, opentype: 'tnum' }
    label:           { size: 11, weight: 500, lineHeight: 1.3,  family: mono, transform: uppercase }
    button:          { size: 15, weight: 500, lineHeight: 1.0,  family: body }
    code:            { size: 14, weight: 400, lineHeight: 1.55, family: mono }
    code-micro:      { size: 12, weight: 400, lineHeight: 1.4,  family: mono }
    quote-pull:      { size: 24, weight: 500, lineHeight: 1.35, tracking: '-0.01em', family: display }

radius:
  micro: 2
  sm: 6
  md: 8
  lg: 12
  xl: 16
  pill: 9999

spacing:
  base: 4
  scale: [1, 2, 4, 6, 8, 12, 16, 20, 24, 32, 48, 64, 96, 128, 160]

layout:
  page-width: 1280
  prose-width: 720
  site-gutter: 'clamp(24px, 5vw, 64px)'
  header-height: 64
  grid-columns: 12
  section-rhythm: '96-128px'

components:
  button-primary:
    background: '#08090a'
    text: '#ffffff'
    padding: '10px 20px'
    radius: 9999
    border: 'none'
    font: 'Inter 500 / 15px'
    hover-bg: '#1a1c1e'
    active-bg: '#000000'
    use: 'Primary action — near-black pill with white label, the Linear/Vercel inversion pattern in light mode'
  button-secondary:
    background: 'transparent'
    text: '#08090a'
    padding: '10px 20px'
    radius: 9999
    border: '1px solid rgba(8, 9, 10, 0.14)'
    font: 'Inter 500 / 15px'
    hover-bg: 'rgba(8, 9, 10, 0.04)'
    use: 'Outlined twin — same pill shape, no fill'
  button-mint:
    background: '#0c8c5e'
    text: '#ffffff'
    padding: '10px 20px'
    radius: 9999
    font: 'Inter 500 / 15px'
    hover-bg: '#10a370'
    active-bg: '#085f3f'
    use: 'Rare mint CTA — used only when the page needs a brand colour stamp; the near-black pill is the default'
  button-ghost:
    background: 'transparent'
    text: '#08090a'
    padding: '8px 16px'
    font: 'Inter 500 / 15px'
    hover-text: '#0c8c5e'
    use: 'Quiet third action — nav links, footer, repeated CTAs'
  card:
    background: '#ffffff'
    border: '1px solid rgba(8, 9, 10, 0.07)'
    radius: 12
    padding: '24px'
    use: 'Default feature card — flat panel with hairline border, no shadow'
  card-warm:
    background: '#f9f8f7'
    border: '1px solid rgba(8, 9, 10, 0.07)'
    radius: 12
    padding: '32px'
    use: 'Warm-neutral inset card — used for testimonial and code-tour blocks'
  card-mint-soft:
    background: '#e6f4ed'
    border: 'none'
    radius: 12
    padding: '24px'
    use: 'Mint-wash card for success / brand-emphasis modules'
  input:
    background: '#ffffff'
    border: '1px solid rgba(8, 9, 10, 0.14)'
    radius: 8
    padding: '10px 14px'
    font: 'Inter 400 / 15px'
    placeholder-color: 'rgba(8, 9, 10, 0.45)'
    focus-ring: '0 0 0 2px #0c8c5e'
    use: 'Form fields, search, email capture'
  badge-eyebrow:
    background: 'transparent'
    text: 'rgba(8, 9, 10, 0.6)'
    padding: '0'
    font: 'Inter 500 / 12px / uppercase / 0.06em'
    use: 'Section eyebrow — no chrome, just type'
  badge-mint:
    background: '#e6f4ed'
    text: '#085f3f'
    padding: '4px 10px'
    radius: 9999
    font: 'Inter 500 / 12px'
    use: 'Mint-tinted pill for status / NEW labels'
  nav-link:
    background: 'transparent'
    text: '#08090a'
    padding: '8px 12px'
    font: 'Inter 500 / 14px'
    hover-text: '#0c8c5e'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-out: 'cubic-bezier(0.0, 0, 0.2, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 300
  duration-page: 400
  reduced-motion: 'respects prefers-reduced-motion: reduce — all transitions become opacity-only, durations halved'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1440

shadows:
  none: 'none'
  ambient: 'rgba(8, 9, 10, 0.04) 0 1px 3px'
  standard: 'rgba(8, 9, 10, 0.06) 0 4px 12px'
  elevated: 'rgba(8, 9, 10, 0.08) 0 12px 32px -8px, rgba(8, 9, 10, 0.04) 0 4px 8px'
  popover: 'rgba(8, 9, 10, 0.10) 0 16px 40px -16px'
  ring: '0 0 0 2px #0c8c5e'

accessibility:
  contrast-text-on-bg: 19.5                # #08090a on #ffffff — AAA at all sizes
  contrast-text-on-brand: 4.6              # #ffffff on #0c8c5e — AA at body sizes
  contrast-text-on-cta: 19.5               # #ffffff on #08090a — AAA
  contrast-text-soft-on-bg: 8.4            # 60% black on white — AAA
  focus-ring: '2px solid #0c8c5e with 2px offset'
  reduced-motion-honored: true
  keyboard-nav: 'visible focus on every interactive surface; tab order matches visual'
  prose-line-length: 'capped at 720px (~70 characters) for readability'

dark-mode: optional                        # docs surface ships a dark variant; marketing chrome is light-canonical
---

## 1. Visual Theme & Atmosphere

Mintlify's marketing site is a study in restraint — a pure-white `#ffffff` canvas, near-black `#08090a` text (the same hex Linear uses, no coincidence — it's the "warmest possible black" calibration), Inter at weight 600 with a tight `-0.02em` tracking, and a single mint-green `#0c8c5e` accent doing all the brand work. The hero "The Intelligent Knowledge Platform" runs at 47.4px — generously sized, but the pure-white ambient space lets it breathe rather than dominate. CTAs flip to the now-canonical "near-black pill on light canvas" pattern (Linear, Vercel, and now Mintlify all converge on this), and the mint accent is reserved for link colour, accent dots, the brand wordmark — never a CTA fill.

What makes this design distinctive vs. nearby alternatives: most docs-platform marketing sites lean on rainbow gradients or illustrated mascots to look "friendly." Mintlify refuses the entire vocabulary. The single mint-green accent does all the brand work — and because it's used sparingly, it compounds. The warm-neutral grays for surfaces (`#f9f8f7`, `#f4f2ef`) keep the pure-white from feeling sterile; they lean ever-so-slightly warm, the way Vercel's surfaces lean cool. Both choices are deliberate temperature signals — Mintlify reads as approachable-warm-confident rather than icy-tech-confident.

The third register is the **content-density-as-design-language** approach: Mintlify, being a documentation platform, ships marketing pages whose information density mirrors the documentation it sells. Code blocks, capability rails, capability comparison tables — all rendered with the same hairline-border + warm-neutral-bg + Inter-at-weight-500 register that defines well-built developer documentation. The marketing site looks like a sample chapter of the product. That conceit is the deepest brand signal: Mintlify's value proposition (documentation that respects developers) is performed at the marketing layer.

Atmospheric vocabulary that captures the feeling: *pure-white-broadsheet, mint-restraint, near-black-pill, warm-neutral-surfaces, type-led, hairline-bordered, documentation-as-marketing, calm-confident, Linear-adjacent, Vercel-cousin, single-accent-discipline.* Every surface lands like it was designed by an engineer who reads The New York Times type-of-times column and respects the reader's attention.

**Key Characteristics**
- Pure white `#ffffff` canvas — never warm, never off-white
- Near-black `#08090a` text — the Linear hex, the warmest possible black
- Inter at weight 600 with `-0.02em` tracking — the Vercel/Linear marketing convention
- Single mint-green `#0c8c5e` accent — used as link, dot, wordmark; never CTA fill
- Near-black pill CTAs — full 9999px radius, white label, Linear-style inversion
- Warm-neutral surface grays (`#f9f8f7`, `#f4f2ef`) — soften the pure white
- Hairline borders at 7% black — flat depth language, no drop shadows
- Documentation-density chrome — code blocks, hairline tables, tight type ladder
- Self-hosted Inter Variable — pragmatic FOUT/FOIT engineering
- 96–128px section gutters — generous magazine-pace spacing
- Pill geometry on actions, 12px radius on cards — two-tier shape system
- Mint-on-mint subtle backgrounds (`#e6f4ed`) for success / brand emphasis

## 2. Color Palette & Roles

### Primary

- **bg** `#ffffff` — pure white page canvas. The defining ground; never substituted with off-white or cream.
- **text** `#08090a` — near-black (Linear's hex). Warmer than `#000` so type doesn't feel surgical against the white.
- **bg-secondary** `#f9f8f7` — warm-neutral subtle bg for inset cards and section grounds.
- **bg-tertiary** `#f4f2ef` — slightly deeper warm-neutral for emphasis blocks.
- **cta-bg** `#08090a` — primary CTA inverts the canvas exactly (near-black on white).
- **cta-text** `#ffffff` — white label on near-black pill.

### Brand & Accent

- **brand** `#0c8c5e` — forest-leaning mint-green; the single brand accent. Lab-defined L=51.3, a=-41.6, b=15.4 — leans warm and forest-grounded rather than clinical.
- **brand-bright** `#10a370` — hover-brightened mint for link-hover states.
- **brand-deep** `#085f3f` — pressed-state mint, also used as success-text on light grounds.
- **brand-soft** `#e6f4ed` — mint wash for success backgrounds and emphasis modules.
- **brand-tint** `#c5e6d5` — mint tint for chips and decorative dots.

### Interactive

- **link** `#0c8c5e` — mint link in body copy, often without underline (relies on colour alone for differentiation).
- **link-hover** `#085f3f` — deeper mint on hover; the only chromatic transition.
- **selected-bg** `#f9f8f7` — warm-neutral selected state for nav and sidebar.
- **disabled** `rgba(8, 9, 10, 0.3)` — disabled control text.

### Neutral Scale

- **near-black** `#08090a` — primary text and headlines.
- **slate-medium** `#3a3b3c` — secondary heading colour.
- **slate-soft** `rgba(8, 9, 10, 0.6)` — supporting copy at 60% opacity.
- **slate-faint** `rgba(8, 9, 10, 0.45)` — eyebrows, helper text.
- **slate-muted** `rgba(8, 9, 10, 0.3)` — disabled microcopy.

The choice to use opacity-based slate scales rather than fixed hex values is deliberate: it lets the same text colour adapt to surface tint (the same `0.6` on white reads slightly cooler than on `#f9f8f7`, which is the right behaviour for warm-neutral surface tinting).

### Surface & Borders

- **surface-0 (page)** `#ffffff` pure white.
- **surface-1 (panel)** `#f9f8f7` warm-neutral.
- **surface-2 (emphasis)** `#f4f2ef` deeper warm-neutral.
- **border** `rgba(8, 9, 10, 0.07)` — default hairline (notably lighter than Vercel's 0.10).
- **border-strong** `rgba(8, 9, 10, 0.14)` — outlined buttons, dividers.
- **border-subtle** `rgba(8, 9, 10, 0.04)` — quietest separation.
- **border-brand** `rgba(12, 140, 94, 0.30)` — mint-tinted rule for brand emphasis.

### Shadow Colors

Mintlify shadows are **almost absent**. Cards use a 1px border at 7% black plus the warm-neutral subtle-bg `#f9f8f7` for elevation. Floating UI primitives (popovers, the docs-search widget) introduce a soft 4-stack shadow tinted with low-opacity slate (`rgba(8, 9, 10, 0.06)` to `0.10`), but hero and section cards stay flat. The brand reads as paper-thin, not stacked-layered — a deliberate signal that the docs platform respects the reader's screen real estate.

### Semantic

- **success** — bg `#e6f4ed` (mint wash), text `#085f3f` (deep mint), border `rgba(12, 140, 94, 0.30)`. Note: success is *the brand color*, not a separate green-500.
- **warning** — bg `#fef4e6` (warm-amber wash), text `#7a4a00`, border `rgba(122, 74, 0, 0.25)`.
- **danger** — bg `#fdeeee` (soft-red wash), text `#a82020`, border `rgba(168, 32, 32, 0.30)`.
- **info** — bg `#eef4fd` (soft-blue wash), text `#1a3a7a`, border `rgba(26, 58, 122, 0.25)`.

The unusual choice: success colour is *the same* mint as the brand. This reinforces the single-accent discipline — Mintlify never breaks into a separate semantic-green ladder.

## 3. Typography Rules

### Font Family

- **Display & Body**: `Inter, "Inter Fallback", -apple-system, system-ui, sans-serif` — Rasmus Andersson's Inter Variable, self-hosted (not Google Fonts). Used at 400 / 500 / 600 / 700 across the entire surface.
- **Mono**: `ui-monospace, "SF Mono", "JetBrains Mono", Consolas, monospace` — pragmatic system mono fallback chain. Mintlify does not license a proprietary mono.
- **OpenType features**: `ss01` (alternate single-storey `a`), `ss02` (alternate dotted `0`), `cv11` (alternate `g`) for Inter display sizes; `liga` and `kern` always on; `tnum` and `zero` enabled in mono for code tabular alignment.
- **"Inter Fallback"** is the loading-state shim that ships with self-hosted Inter Variable to prevent FOUT — a deliberate engineering signal.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| Display Hero | Inter | 64px | 600 | 1.05 | -0.025em | ss01 liga | Homepage hero ceiling |
| Display | Inter | 56px | 600 | 1.08 | -0.02em | ss01 | Section intro at scale |
| H1 | Inter | 48px | 600 | 1.15 | -0.02em | liga | Page title — the canonical Mintlify hero |
| H2 | Inter | 40px | 600 | 1.10 | -0.02em | liga | Major section |
| H3 | Inter | 28px | 600 | 1.25 | -0.015em | — | Sub-section |
| H4 | Inter | 22px | 600 | 1.30 | -0.01em | — | Card heading |
| H5 | Inter | 18px | 600 | 1.40 | normal | — | Inline emphasis |
| Eyebrow | Inter | 12px | 500 | 1.40 | 0.06em | uppercase | Section pre-label |
| Body Large | Inter | 18px | 400 | 1.55 | normal | — | Lede paragraph |
| Body | Inter | 16px | 400 | 1.50 | normal | — | Default paragraph copy |
| Body Small | Inter | 14px | 400 | 1.50 | normal | — | Captions, sidebars |
| Caption | Inter | 13px | 400 | 1.40 | normal | — | Image captions |
| Caption Tabular | Mono | 12px | 500 | 1.40 | normal | tnum | Stats, data labels |
| Label | Mono | 11px | 500 | 1.30 | uppercase | — | UI labels, mono caps |
| Button | Inter | 15px | 500 | 1.00 | normal | — | CTA copy |
| Pull Quote | Inter | 24px | 500 | 1.35 | -0.01em | — | Editorial pull-quote |
| Code | Mono | 14px | 400 | 1.55 | normal | — | Inline + block |
| Code Micro | Mono | 12px | 400 | 1.40 | normal | — | Footnote refs |

### Principles

- **Inter at weight 600 with `-0.02em` tracking** is the Mintlify hero setting. The exact same setting works for Vercel — calibrated for marketing-page legibility on light canvas.
- **Single family discipline.** Inter handles display, body, navigation, captions. Mono falls back to system. Adding a serif breaks the system; Mintlify deliberately avoids the Notion-style sans+serif duet.
- **Negative tracking compresses with size.** `-0.025em` at 56–64px, `-0.02em` at 40–48px, `-0.015em` at 28px, `-0.01em` at 22px, normal at 18px and below.
- **Weight 600 only for display.** Headlines hit 600; body holds at 400; UI labels at 500. The brand never uses 700 — that would feel shouty against the calm canvas.
- **OpenType discipline**: `ss01` (alternate `a`), `ss02` (alternate `0`), `cv11` (alternate `g`) enabled at display sizes for the slightly-more-humanist-feeling Inter cut. `tnum` and `zero` in mono for code blocks.
- **Sentence case for headlines.** Mintlify writes "The intelligent knowledge platform" not "The Intelligent Knowledge Platform" — a developer-doc convention that keeps the page approachable.
- **Body width capped at 720px** even when the page is 1280px wide — readability column.
- **Self-hosted Inter Variable.** Mintlify does not load Google Fonts; the "Inter Fallback" shim is a deliberate FOUT-prevention engineering signal that aligns with the brand's "respects developer experience" pitch.

## 4. Component Stylings

### Buttons

**Primary (Near-Black Pill)**
- Background: `#08090a`. Text: `#ffffff`, Inter 500 / 15px.
- Padding: `10px 20px`. Radius: `9999px` (full pill). No border.
- Hover: bg → `#1a1c1e`; transition `200ms ease-standard`.
- Active: bg → `#000000` (rare absolute-black for the pressed beat).
- Use: Primary CTA — *Get started, Book a demo, Sign up free.*

**Secondary (Outlined Pill)**
- Background: transparent. Text: `#08090a`. Border: `1px solid rgba(8, 9, 10, 0.14)`. Radius: `9999px`.
- Same padding (10×20), font (Inter 500 / 15px) as primary.
- Hover: bg → `rgba(8, 9, 10, 0.04)`.
- Use: Twin to primary — *Watch the demo, Read the docs.*

**Mint (Brand Stamp)**
- Background: `#0c8c5e`. Text: `#ffffff`. No border. Pill radius.
- Same shape as primary.
- Hover: bg → `#10a370`. Active: `#085f3f`.
- Use: Reserved for one beat per page — wordmark stamp, hero accent CTA. Rare; the near-black pill is the default.

**Ghost (Quiet)**
- Background: transparent. Text: `#08090a`. No border.
- Padding: `8px 16px`. Inter 500 / 15px.
- Hover: text → `#0c8c5e` mint.
- Use: Nav links, footer secondary actions, repeated CTAs in long pages.

### Cards

**Default Card (Flat)**
- Background: `#ffffff`. Border: `1px solid rgba(8, 9, 10, 0.07)`. Radius: `12px`. Padding: `24px`.
- Shadow: none.
- Hover: border → `rgba(8, 9, 10, 0.14)`; transition `200ms`.
- Use: Feature tile, capability rail, pricing card.

**Warm Inset Card**
- Background: `#f9f8f7` warm-neutral. Border: `1px solid rgba(8, 9, 10, 0.07)`. Radius: `12px`. Padding: `32px`.
- Use: Testimonial block, code-tour container, integration callout.

**Mint-Soft Card**
- Background: `#e6f4ed` mint wash. Border: none. Radius: `12px`. Padding: `24px`.
- Use: Success callout, brand-emphasis module, "what's new" highlight.

### Badges, Tags, Pills

**Eyebrow Label** — no chrome, just type. Inter 500 / 12px / uppercase / 0.06em tracking, colour `rgba(8, 9, 10, 0.6)`. Sits above section headlines.

**Mint Pill** — bg `#e6f4ed`, text `#085f3f`, radius `9999px`, padding `4px 10px`. Status / NEW / BETA labels.

**Inline Tag** — bg `#f9f8f7`, text `#08090a`, border `1px solid rgba(8, 9, 10, 0.07)`, radius `4px`, padding `4px 8px`. Capability chip in feature lists.

### Inputs / Forms

- Background: `#ffffff`. Border: `1px solid rgba(8, 9, 10, 0.14)`. Radius: `8px`. Padding: `10px 14px`.
- Font: Inter 400 / 15px. Placeholder: `rgba(8, 9, 10, 0.45)`.
- Focus: `0 0 0 2px #0c8c5e` mint ring, border → `#08090a`.
- Error: border → `#a82020`, ring → `rgba(168, 32, 32, 0.30)`.
- Helper: caption 13px slate-soft below.

### Navigation

- Header height `64px`. Background `#ffffff` (becomes `rgba(255,255,255,0.85)` blur on scroll).
- Logo: Mintlify wordmark, near-black with mint accent dot.
- Nav links: Inter 500 / 14px, colour `#08090a`, padding `8px 12px`. Hover → `#0c8c5e` mint.
- Right-side CTA pair: ghost "Sign in" + primary near-black pill "Get started".
- Mobile: full-screen sheet, links stack at 22px / Inter 500.

### Optional Components

**Pull Quote** — Inter 24px / 500 / -0.01em tracking, slate-medium `#3a3b3c` text, with a 4px mint vertical rule on the left edge.

**Footnote** — Inter 13px / 400, slate-soft; sits on a thin border-subtle rule.

**Code Block** — Mono 14px, bg `#f9f8f7` warm-neutral, radius `8px`, padding `16px 20px`, border `rgba(8, 9, 10, 0.07)`. Inline code: same font, bg `rgba(8, 9, 10, 0.06)`, padding `2px 6px`, radius `4px`. Syntax highlighting uses muted near-black + mint + warm-amber tokens (no neon).

**Tooltip** — bg `#08090a`, text `#ffffff`, radius `6px`, padding `8px 12px`, font `13px / Inter 500`.

**Modal** — bg `#ffffff`, radius `16px`, shadow `rgba(8, 9, 10, 0.10) 0 16px 40px -16px`, max-width `560px`. White backdrop overlay at 50% opacity (with subtle blur).

**Doc-Search Widget** — popover with full 8-stack shadow, 12px radius, 24px padding, Inter 14px result list, mint-tinted hover row. The most-shadowed component in the system.

## 5. Layout Principles

### Spacing System

- **Base unit**: 4px.
- **Scale**: 4, 8, 12, 16, 20, 24, 32, 48, 64, 96, 128, 160 — Fibonacci-adjacent.
- **Density observation**: Mintlify is *generously spaced* by SaaS standards. Headlines float in 96–128px of margin; body paragraphs sit on 24px line gaps; sections separate at 96–128px.

### Grid & Container

- **Page max width**: `1280px` — standard B2B SaaS width.
- **Site gutter**: `clamp(24px, 5vw, 64px)` — accommodating across viewports.
- **Grid**: 12 columns with 24px gutters. Hero blocks span full width; capability rails span 4 columns; sidebars span 3.
- **Hero treatment**: full-bleed white, 47–48px headline, body confined to a 720px column anchored left of centre.

### Whitespace Philosophy

The whitespace *is* the brand asset. Mintlify deliberately under-fills pages so headlines have room to breathe. The visual density is closer to a research-tech blog than a SaaS landing — and that's the point. Section gutters run **96–128px** between major editorial blocks; minor blocks sit on 64–80px gaps; intra-section spacing uses 24–48px.

### Section Cadence

- Hero (pure white) → Capability Rail (white card grid on white, hairline-bordered) → Code Tour (warm-neutral inset block) → Integrations (white cards with mint-dot accents) → Testimonials (mint-soft card) → Pricing (white card grid) → Footer (warm-neutral ground).
- The mint-soft block appears once or twice per page as chromatic punctuation; never spreads to the chrome.
- Cream-on-cream sections separated by 1px border-subtle hairlines or by spacing alone.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| Micro | 2px | Decorative dividers, inline chip corners |
| Standard (sm) | 6px | Compact pills, code-block corners (when not 8) |
| Comfortable (md) | 8px | Inputs, dropdowns, modal action buttons |
| Relaxed (lg) | 12px | Cards, callouts — the dominant `--radius--card` |
| Featured (xl) | 16px | Modals, popover containers, doc-search widget |
| Pill | 9999px | Buttons (primary, secondary, mint), status pills |

Mintlify's signature shape is the **full pill** on actions (`9999px`) paired with the **12px card**. The pill geometry mirrors Linear's keyboard-shortcut chips and Vercel's hero CTA pattern — all three converge on pills as the primary action shape. There are no zero-radius surfaces except editorial section dividers (1px hairlines).

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat — no shadow | Default page surface, hero, body sections |
| 1 | Hairline + warm-bg | Cards (border + warm-neutral fill alternative) |
| 2 | `rgba(8, 9, 10, 0.04) 0 1px 3px` | Sticky nav |
| 3 | `rgba(8, 9, 10, 0.06) 0 4px 12px` | Hover-lifted cards |
| 4 | `rgba(8, 9, 10, 0.08) 0 12px 32px -8px` | Overlay menus, popovers |
| 5 | `rgba(8, 9, 10, 0.10) 0 16px 40px -16px` | Modals, doc-search widget |

### Shadow Philosophy

Mintlify's depth is **almost absent**. Cards lift off white by hairline border alone (`rgba(8, 9, 10, 0.07)`) — no shadow, no fill change. When shadows do appear (modals, popovers, doc-search), they're tinted with low-opacity slate-dark, never neutral grey, and never blue-tinted. The brand reads as flat, type-led, paper-thin — the same reason heavy drop-shadows would feel wrong: the docs-platform pitch is "respect the reader's screen," and a heavily layered hero would betray it.

## 8. Interaction & Motion

### Easing Curves

- `ease-standard`: `cubic-bezier(0.4, 0, 0.2, 1)` — Material-style; default for hover, focus, color transitions.
- `ease-emphasized`: `cubic-bezier(0.2, 0, 0, 1)` — punchier exit; used on modal enter, hero reveal.
- `ease-out`: `cubic-bezier(0.0, 0, 0.2, 1)` — gentle settle; used on dropdown reveal, doc-search opening.

### Duration Buckets

- **Fast (100ms)** — colour transitions, focus rings, link hovers.
- **Standard (200ms)** — button hover, card hover, dropdown reveal.
- **Slow (300ms)** — modal enter/exit, page section fade-in.
- **Page (400ms)** — route transitions, hero reveal sequences.

### Per-Component Micro-States

- **Button hover (near-black pill)**: bg `#08090a` → `#1a1c1e`; transition `200ms ease-standard`. No lift, no scale.
- **Button hover (outlined)**: bg transparent → `rgba(8, 9, 10, 0.04)`.
- **Card hover**: border deepens from `rgba(8, 9, 10, 0.07)` to `rgba(8, 9, 10, 0.14)`; no shadow change.
- **Link hover**: colour `#0c8c5e` → `#085f3f` over 100ms.
- **Input focus**: 2px mint ring fades in over 100ms; border darkens.
- **Doc-search reveal**: popover scales from 0.97 to 1.0 with opacity 0 to 1 over 200ms ease-out.

### Page Transitions

Hero text fades in over 400ms with 16px translate-up; below-fold sections use `IntersectionObserver` to fade in at 80% viewport, 300ms duration, no translate. The brand does not use scroll-pinned animations — every section is independently navigable.

### Reduced Motion

`@media (prefers-reduced-motion: reduce)` — all transitions become opacity-only, durations halved. Translate animations are disabled entirely; scroll-linked reveals snap to final state. The doc-search popover scale animation is replaced with a pure fade.

## 9. Accessibility & A11y

### Contrast Pairs

- **`#08090a` text on `#ffffff` bg**: 19.5:1 — AAA at all sizes.
- **`rgba(8, 9, 10, 0.6)` text on `#ffffff` bg**: 8.4:1 — AAA at body sizes.
- **`rgba(8, 9, 10, 0.45)` text on `#ffffff` bg**: 5.6:1 — AAA at body sizes.
- **`#ffffff` text on `#08090a` button**: 19.5:1 — AAA.
- **`#ffffff` text on `#0c8c5e` mint button**: 4.6:1 — AA at body sizes; safe for buttons.
- **`#085f3f` text on `#e6f4ed` mint chip**: 7.8:1 — AAA.

### Focus Indicators

- Default focus ring: `0 0 0 2px #0c8c5e` mint with 2px offset on white pages.
- On near-black surfaces (rare): `0 0 0 2px #ffffff`.
- All interactive surfaces must have a visible focus state — no `outline: none` without a replacement.

### ARIA Patterns

- **Navigation**: `<nav aria-label="Main">` with skip-link to main content.
- **Disclosure**: `<button aria-expanded aria-controls>` for collapsible sections.
- **Dialog**: `role="dialog" aria-modal="true" aria-labelledby` with focus trap and Esc-to-close.
- **Combobox** (doc-search widget): `role="combobox" aria-expanded aria-autocomplete="list"` with arrow-key navigation through results.
- **Live regions**: `aria-live="polite"` for form validation messages.

### Keyboard Navigation

- Tab order matches visual flow: skip-link → nav → hero CTA → main content → footer.
- All buttons, links, inputs reachable via Tab; modals trap focus inside until dismissed.
- `Esc` closes modals, doc-search, mobile menu sheet.
- Cmd/Ctrl + K opens doc-search from anywhere on the marketing surface.
- Arrow keys navigate within doc-search results and tab groups.

### Screen Reader Hints

- Decorative mint accent dots have `aria-hidden="true"`.
- Icon-only buttons have `aria-label`.
- Code blocks include `<pre><code>` with optional `aria-label="Code example: …"` for context.
- The Mintlify wordmark uses `aria-label="Mintlify"` and visually hides the decorative inner mark.

### Reduced Motion

Honoured via the global media query. All translate/scale animations become opacity-only; durations halve. Doc-search popover scale becomes fade.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Use |
|---|---|---|
| Mobile | < 640px | Single column, full-bleed sections, 32px H1 |
| Tablet | 640–1024px | 2-column rails, 40px H1 |
| Desktop | 1024–1280px | Full 12-col grid, 48px H1, 720px prose |
| Wide | 1280–1440px | Site max width hits |
| Ultra | > 1440px | Page locks to 1280, gutters expand |

### Touch Targets

- Minimum tap target: 44×44px (WCAG AAA).
- Pill buttons: 40px minimum height on desktop, 44px on mobile (10px vertical padding × 2 + line-height).
- Nav link tap area: 44×44px even when visual padding is smaller.

### Collapsing Strategy

- **Header**: full nav at ≥1024px; hamburger sheet below. Doc-search shortcut visible at all sizes.
- **Hero**: 64px display → 48px H1 → 40px → 32px across desktop/tablet/mobile.
- **Capability grid**: 4-up at desktop, 2-up at tablet, 1-up at mobile.
- **Body width**: 720px → fluid 90vw at mobile.
- **Section spacing**: 128px → 96px → 64px across sizes.
- **Code blocks**: horizontal scroll on mobile, never wrap.

### Image Behavior

- Capability illustrations use `srcset` with 1x/2x/3x.
- Browser-screenshot imagery uses `aspect-ratio` to prevent layout shift.
- Lazy-loading on below-fold images; eager on hero.
- Mint accent dots are CSS shapes (no images) so they render instantly.

### Container Queries

Used inside capability cards to switch icon position when card width crosses 280px (icon-left vs. icon-top). Used inside code-tour blocks to switch from side-by-side to stacked layout.

## 11. Content & Voice

### Tone

**Calm, structured, technical-but-warm.** Mintlify writes like a developer-experience team that respects the reader's time. Headlines pose plain claims ("The intelligent knowledge platform"); subheads explain rather than sell; product copy uses developer vocabulary without code-bro hostility. The voice is invitational, never breathless — the inverse of "growth marketing."

### Microcopy Patterns

- **Button verbs**: "Get started," "Book a demo," "Read the docs," "Watch the demo," "Sign up free." Never "Sign up now!" never "Get started today →".
- **Error messages**: "We couldn't connect to that integration. Check your API key or [contact support]." Specific, calm, no shame.
- **Success confirmations**: "Saved." "Thanks — we'll be in touch within a day." Brief, accountable.
- **Loading states**: "Loading…" "Indexing your docs…" — context-specific where possible.

### Empty States

What they say: explain the state and offer the next step. *"No pages yet. Connect a GitHub repo or paste your first markdown file to get started."*
What they don't say: "Oops!", "Whoops!", any apologetic exclamation. Empty states are normal, not failures.

### CTA Verb Conventions

- Primary on hero: "Get started," "Book a demo," "Sign up free"
- Secondary: "Watch the demo," "Read the docs," "View the changelog"
- Footer: "Read our blog," "Browse integrations," "View pricing," "Join the community"

The brand never uses "Sign up now!" or "Get started today!" — the tone is invitational, never urgent. Mintlify trades on credibility and developer respect, not scarcity.

## 12. Dark Mode & Theming

**Marketing surface is light-canonical; the docs surface ships a dark variant.** The Mintlify marketing chrome at `mintlify.com` is intentionally light-only — the pure-white canvas, near-black text, and mint accent are the brand's defining choices, and a dark mode would dilute the calm-confident register that distinguishes Mintlify from Linear (whose marketing site *is* dark) and from Vercel (whose marketing site is also light-only).

The product UI (the documentation pages Mintlify generates for customers) ships a dark variant by default, and customers can theme their docs in either mode. That dark variant uses:
- bg: `#0a0b0c` (Linear-esque near-black, slightly cooler)
- surface: `#16171a`
- text: `#ededed`
- brand: `#10a370` (the bright mint variant — better contrast on dark)
- border: `rgba(255, 255, 255, 0.10)`

But that's a product-layer decision, not a marketing-layer decision. The marketing site is intentionally light-only across all viewports and times of day. If a downstream surface ever needs a dark companion for a specific marketing moment (a launch keynote, a product announcement), it would inherit the docs dark tokens above.

## 13. Lineage & Influences

Mintlify's design DNA is **developer documentation as marketing canvas**. The pure-white, hairline-bordered, type-led layout quotes Vercel and Linear marketing-site conventions directly, then reorganises them around a single mint accent and warm-neutral surface palette. Where Linear runs dark + Inter + indigo accent, where Vercel runs white + Geist + Vercel-blue, Mintlify runs white + Inter + mint — three convergent type-led B2B SaaS sites that share the same hairline-bordered, single-accent, pill-CTA register.

What it inherits: the Vercel marketing convention of Inter at weight 600 / `-0.02em` tracking, the Linear convention of `#08090a` near-black and pill-9999 actions, and the broader B2B SaaS convention of warm-neutral surfaces softening pure white. What it borrows from contemporaries: Notion's off-white-paper register (recoded slightly cooler here), Stripe's hairline-border restraint, Anthropic's eyebrow-label discipline. What it rejects: rainbow gradients (early Stripe, current Replit), illustrated mascots (Mailchimp, MeshyAI), neon brand accents (Replit, Mistral early), and the Bay Area "AI startup with purple gradient" register.

**Named influences:**

- **Inter (Rasmus Andersson)** — Display + body type, weight 600 with tight tracking. *https://rsms.me/inter*
- **Linear** — Adjacent precedent for the `#08090a` near-black + pill CTA pattern. *https://linear.app*
- **Vercel** — Adjacent precedent for tight Inter-weight-600 headings on light canvas. *https://vercel.com*
- **Stripe** — Hairline-border restraint, single-accent confidence on a neutral canvas. *https://stripe.com*
- **Anthropic** — Eyebrow + body + section-rhythm cadence. *https://anthropic.com*
- **Notion** — Adjacent precedent for warm-neutral surface tinting on a light canvas. *https://notion.com*
- **GitHub Pages / GitBook** — Documentation-density-as-design-language; the docs-as-marketing register.

## 14. Do's and Don'ts

### Do

- **Do** keep the canvas pure white `#ffffff`. Off-white or cream collapses the brand into a warmer-but-different register (Notion, Anthropic).
- **Do** use Inter at weight 600 with `-0.02em` tracking for hero copy. The exact same setting works for both Vercel and Mintlify — calibrated for marketing-page legibility.
- **Do** invert primary CTAs to near-black `#08090a` pills with white text. The mint-green is a punctuation accent, not an action fill.
- **Do** lean on warm-neutral grays for surfaces. `#f9f8f7` and `#f4f2ef` prevent the pure white from feeling sterile.
- **Do** use the mint `#0c8c5e` sparingly — link colour, accent dots, brand wordmark, success bg. Reserve for one beat per viewport.
- **Do** drop the pill geometry on action elements (`9999px`). The full pill is the second-most-recognisable feature after the green.
- **Do** ship hairline borders at 7% black for cards. Heavier borders break the calm-confident register.
- **Do** use sentence case for headlines ("The intelligent knowledge platform"). Title case reads as marketing, not as a doc.
- **Do** self-host Inter Variable. The "Inter Fallback" shim is an engineering signal that aligns with the brand pitch.
- **Do** prefer flat depth (hairline borders, no shadow) over layered elevation.

### Don't

- **Don't** introduce a second brand color. The single mint-green `#0c8c5e` is the system's compounding asset.
- **Don't** use rainbow gradients or illustrated mascots — they break the documentation-platform credibility signal.
- **Don't** drop the pill geometry on action elements. The 9999px radius is the second-most-recognisable feature after the green.
- **Don't** apply heavy drop-shadows. Mintlify's depth language is hairline borders and warm-neutral fills, not stacked shadows.
- **Don't** use mint `#0c8c5e` as a primary CTA fill. Near-black pill is the primary; mint is accent.
- **Don't** introduce a serif. Mintlify is single-family Inter; adding a serif breaks the documentation register.
- **Don't** ship marketing copy with exclamation marks. The tone is calm, never breathless.
- **Don't** use pure black `#000000` for text. Near-black `#08090a` is warmer and matches the warm-neutral surface palette.
- **Don't** crowd the page. 96–128px section gutters are part of the brand.
- **Don't** mix tech-startup verbs ("Sign up now!", "Get started today!") with the brand voice.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #ffffff
bg-secondary: #f9f8f7
bg-tertiary: #f4f2ef
text: #08090a
text-soft: rgba(8, 9, 10, 0.6)
brand-mint: #0c8c5e
brand-mint-soft: #e6f4ed
cta-bg: #08090a
cta-text: #ffffff
border: rgba(8, 9, 10, 0.07)
border-strong: rgba(8, 9, 10, 0.14)
```

### Example Component Prompts

1. **"Create a hero in Mintlify style — pure white `#ffffff` canvas, 48px headline in Inter 600 with `-0.02em` tracking, 18px Inter 400 lede at 60% near-black, single primary CTA in near-black `#08090a` pill (9999px radius) with white label, no gradient, no animation. Reading column capped at 720px."**

2. **"Design a capability card in Mintlify style — white `#ffffff` background, 12px radius, 1px `rgba(8, 9, 10, 0.07)` hairline border, 24px interior padding, 22px Inter 600 heading at -0.01em tracking, 16px Inter 400 body at 60% near-black, no shadow, hover deepens border to 0.14 opacity."**

3. **"Build a code-tour block — warm-neutral `#f9f8f7` background, 12px radius, 1px hairline border, 32px interior padding, mono code at 14px in `#08090a`, mint accent dot for the active step, no shadow."**

4. **"Compose a mint-soft callout — `#e6f4ed` mint wash background, no border, 12px radius, 24px padding, 22px Inter 600 heading in deep mint `#085f3f`, 16px Inter 400 body in near-black."**

5. **"Render an eyebrow + section header pair — Inter caps at 12px / 0.06em tracking / 60% near-black, 8px gap, then Inter 40px / 600 / -0.02em in near-black on white."**

6. **"Create the primary nav — 64px header height, white `#ffffff` background (becomes white-blur on scroll), Mintlify wordmark with mint accent dot, links 14px Inter 500 with mint-on-hover, right-aligned ghost 'Sign in' + near-black-pill 'Get started' pair, Cmd-K shortcut chip visible."**

### Iteration Guide

1. **Start with pure white, not cream.** If the bg is `#fefefe` or warmer, you've drifted toward Notion/Anthropic territory. `#ffffff` is the entry ticket.
2. **Switch the headline to Inter 600 / `-0.02em`.** This is the same setting Vercel uses; if you're on Geist or SF Pro, the brand will read as Vercel/Apple, not Mintlify.
3. **Invert the CTA.** Near-black pill with white label on a white canvas is the Mintlify/Linear/Vercel CTA pattern. Don't fill it with mint.
4. **Strip gradients.** Any mesh, conic, or radial gradient is wrong — replace with flat white or a warm-neutral surface.
5. **Reach for one mint, not a green ladder.** `#0c8c5e` for the brand; `#e6f4ed` for the soft wash. Don't introduce green-500 / green-700 gradients.
6. **Add warm-neutral surface tinting.** If the page feels sterile, drop in `#f9f8f7` for inset cards or section grounds — it's the warmth signal that distinguishes Mintlify from Vercel.
7. **Drop the shadows.** Replace box-shadows with hairline borders (`rgba(8, 9, 10, 0.07)`).
8. **Calm the verbs.** Replace "Sign up now!" with "Get started"; replace "Learn more →" with "Read the docs". The voice is calm and invitational.
