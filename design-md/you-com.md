---
name: You.com
tagline: 'Crisp white developer-doc canvas, custom Lumen Sans, and the indigo `#5368EE` accent — a search API rebrand done as enterprise infrastructure.'
updated_at: 2026-05-05T20:18:33+12:00
published_at: 2026-05-03T16:32:19+12:00
author: webdesignhot
source_url: https://you.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [ai, dev-tools, saas]
tags: [light, sans, structured, cool, dense]
preview_swatch: ['#ffffff', '#5368ee', '#121212']
related: [vercel, supabase, mintlify]
description: 'You.com pivoted from consumer search to a developer-API platform and the marketing site reflects that institutional shift. The canvas is pure white, body and headings set in custom **Lumen Sans** at a calm 500 weight, and the brand accent is a saturated indigo-blue `#5368ee` reserved for benchmark bars and key data points. The aesthetic register is "Vercel + Stripe + a measured-data publication" — small radii (4px on benchmark chips), a 48px headline ladder, and an emphasis on accuracy charts and API documentation rather than a chatty hero. Where Perplexity wraps search-as-essay in cream paper, You.com presents search-as-infrastructure in clean white. The single most distinctive visual decision is the benchmark plot: indigo bars for "our data", neutral-grey bars for competitors, and that chromatic split does the persuasive work of the entire page.'

colors:
  # Primary
  bg: '#ffffff'                          # pure white developer-doc canvas
  bg-soft: '#f6f6f6'                     # competitor-bar grey on benchmark charts
  surface: '#ffffff'                     # default surface
  surface-alt: '#fafafa'                 # benchmark plot / module backdrop
  surface-strong: '#eef0f4'              # divider strength surface
  surface-hover: '#f8f8f8'               # interactive hover wash
  text: '#121212'                        # near-black body text rgb(18,18,18)
  text-strong: '#000000'                 # display-hero strong text (rare)
  text-medium: '#2a2b35'                 # secondary heading emphasis
  text-muted: '#5e5f6b'                  # secondary text rgb(94,95,107)
  text-soft: '#7c7d87'                   # supporting copy
  text-faint: '#a8a9b1'                  # disabled, microcopy
  on-brand: '#ffffff'                    # white label on indigo
  on-cta: '#ffffff'                      # white label on near-black CTA

  # Brand & Accent (indigo)
  brand: '#5368ee'                       # signature saturated indigo — benchmark bars, accents
  brand-hover: '#3a4ec8'                 # darker pressed indigo
  brand-strong: '#3a4ec8'                # alias of hover
  brand-deep: '#293b9a'                  # deepest accent on white
  brand-soft: '#e8ecff'                  # info surface tint
  brand-faint: '#f4f6ff'                 # quietest indigo tint
  brand-glow: 'rgba(83, 104, 238, 0.20)' # focus glow

  # CTA / Action chrome
  cta-bg: '#121212'                      # primary near-black rectangle
  cta-bg-hover: '#2a2b35'                # hover state
  cta-bg-active: '#000000'               # pressed
  cta-text: '#ffffff'                    # label

  # Interactive
  link: '#5368ee'                        # indigo links — the brand peeking through
  link-hover: '#3a4ec8'                  # pressed link
  selected-bg: '#e8ecff'                 # selected item / row tint
  disabled-bg: '#f6f6f6'                 # disabled control fill
  disabled-text: '#a8a9b1'               # disabled label

  # Borders
  border: 'rgba(18, 18, 18, 0.10)'       # default hairline
  border-strong: 'rgba(18, 18, 18, 0.18)' # emphasized rule (button-secondary)
  border-soft: 'rgba(18, 18, 18, 0.06)'  # quietest division
  border-focus: '#5368ee'                # focus-ring indigo

  # Semantic
  success-bg: '#dcfce7'
  success-text: '#15803d'
  warning-bg: '#fef3c7'
  warning-text: '#854d0e'
  danger-bg: '#fee2e2'
  danger-text: '#b91c1c'
  info-bg: '#e8ecff'
  info-text: '#293b9a'

  # Shadow tints
  shadow-rgb: '18, 18, 18'               # near-black tinted shadows
  shadow-blue: '83, 104, 238'            # rare indigo focus glow

  # Benchmark-specific
  benchmark-our: '#5368ee'               # our-data bar fill
  benchmark-them: '#d9d9df'              # competitor-data bar fill (slightly darker than bg-soft)
  benchmark-ground: '#fafafa'            # plot backdrop
  benchmark-axis: 'rgba(18, 18, 18, 0.12)' # axis line

typography:
  display:
    family: '"Lumen Sans", Arial, ui-sans-serif, system-ui, sans-serif'
    weights: [400, 500, 600]
    opentype-features: ['ss01', 'liga', 'kern']
  body:
    family: '"Lumen Sans", Arial, ui-sans-serif, system-ui, sans-serif'
    weights: [400, 500]
    opentype-features: ['kern']
  mono:
    family: '"JetBrains Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace'
    weights: [400, 500]
    opentype-features: ['tnum', 'zero']
  scale:
    display-hero:    { size: 72, weight: 500, lineHeight: 1.05, tracking: 'normal',  family: display, opentype: 'ss01' }
    display:         { size: 60, weight: 500, lineHeight: 1.08, tracking: 'normal',  family: display }
    h1:              { size: 48, weight: 500, lineHeight: 1.1,  tracking: 'normal',  family: display }
    h2:              { size: 30, weight: 500, lineHeight: 1.2,  tracking: 'normal',  family: display }
    h3:              { size: 24, weight: 500, lineHeight: 1.3,  tracking: 'normal',  family: display }
    h4:              { size: 18, weight: 500, lineHeight: 1.4,  family: display }
    h5:              { size: 16, weight: 500, lineHeight: 1.4,  family: display }
    eyebrow:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.06em',  family: display, transform: uppercase }
    body-large:      { size: 18, weight: 400, lineHeight: 1.55, family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.5,  family: body }
    body-small:      { size: 14, weight: 400, lineHeight: 1.5,  family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.4,  family: body }
    caption-tabular: { size: 13, weight: 500, lineHeight: 1.4,  family: mono, opentype: 'tnum' }
    label:           { size: 12, weight: 500, lineHeight: 1.3,  family: body }
    label-cta:       { size: 14, weight: 500, lineHeight: 1.2,  family: body }
    code:            { size: 13, weight: 400, lineHeight: 1.55, family: mono, opentype: 'tnum zero' }
    code-micro:      { size: 11, weight: 400, lineHeight: 1.4,  family: mono }
    benchmark:       { size: 13, weight: 500, lineHeight: 1.3,  family: mono, opentype: 'tnum' }

radius:
  micro: 2
  sm: 4                                  # observed benchmark chip radius
  md: 6
  lg: 8
  card: 12
  xl: 16
  pill: 9999

spacing:
  base: 4
  scale: [1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 48, 64, 80, 96, 128]

layout:
  page-width: 1200
  prose-width: 720
  hero-prose-width: 720
  site-gutter: 'clamp(24px, 5vw, 64px)'
  header-height: 64
  grid-columns: 12
  section-rhythm: '80-128px'

components:
  button-primary:
    background: '#121212'
    text: '#ffffff'
    padding: '10px 20px'
    radius: 8
    border: '1px solid #121212'
    font: 'Lumen Sans 500 / 14px'
    hover-bg: '#2a2b35'
    active-bg: '#000000'
    use: 'Get API key / Talk to sales — single near-black rectangle for primary developer conversion'
  button-secondary:
    background: '#ffffff'
    text: '#121212'
    padding: '10px 20px'
    radius: 8
    border: '1px solid rgba(18, 18, 18, 0.18)'
    font: 'Lumen Sans 500 / 14px'
    hover-bg: '#f8f8f8'
    use: 'View docs / Read benchmarks — outlined twin to the primary'
  button-indigo:
    background: '#5368ee'
    text: '#ffffff'
    padding: '10px 20px'
    radius: 8
    border: '1px solid #5368ee'
    font: 'Lumen Sans 500 / 14px'
    hover-bg: '#3a4ec8'
    use: 'Rare brand CTA — used at most once per page on the hero, signals "our data" path'
  button-ghost:
    background: 'transparent'
    text: '#121212'
    padding: '8px 12px'
    radius: 6
    border: 'none'
    font: 'Lumen Sans 500 / 14px'
    hover-bg: '#f6f6f6'
    use: 'Quiet third action — nav links, inline actions'
  card:
    background: '#ffffff'
    border: '1px solid rgba(18, 18, 18, 0.10)'
    radius: 12
    padding: '24px'
    use: 'Feature card — capability tile, pricing tier, doc link'
  card-code:
    background: '#fafafa'
    border: '1px solid rgba(18, 18, 18, 0.06)'
    radius: 12
    padding: '20px'
    use: 'Code sample card — JetBrains Mono on faint-grey plate'
  benchmark-chip:
    background: '#5368ee'
    text: '#ffffff'
    padding: '6px 10px'
    radius: 4
    font: 'Lumen Sans 500 / 12px'
    use: 'Bar segments and key-metric chips on the SimpleQA / FRAMES benchmark plots'
  benchmark-chip-grey:
    background: '#d9d9df'
    text: '#5e5f6b'
    padding: '6px 10px'
    radius: 4
    font: 'Lumen Sans 500 / 12px'
    use: 'Competitor data point — neutral grey, lower contrast'
  input:
    background: '#ffffff'
    border: '1px solid rgba(18, 18, 18, 0.18)'
    radius: 8
    padding: '10px 14px'
    font: 'Lumen Sans 400 / 16px'
    placeholder-color: '#a8a9b1'
    focus-ring: '0 0 0 2px #5368ee'
    use: 'Form fields, search, API key entry'
  badge-pill:
    background: '#e8ecff'
    text: '#293b9a'
    padding: '2px 10px'
    radius: 9999
    font: 'Lumen Sans 500 / 12px'
    use: 'Status pill — Beta / New / Live in nav'
  nav-link:
    background: 'transparent'
    text: '#121212'
    padding: '8px 12px'
    font: 'Lumen Sans 500 / 14px'
    hover-text: '#5e5f6b'
    use: 'Top nav links — quiet, near-black'
  benchmark-plot:
    background: '#fafafa'
    border: 'none'
    radius: 12
    padding: '32px'
    use: 'Horizontal-bar chart container — `#fafafa` ground, no border, indigo + grey bars at 4px radius'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-out: 'cubic-bezier(0.16, 1, 0.3, 1)'
  duration-instant: 80
  duration-fast: 120
  duration-standard: 200
  duration-slow: 320
  duration-page: 400
  duration-bar: 600
  reduced-motion: 'respects prefers-reduced-motion: reduce — bar-chart fill animations become opacity-only, durations halved, no parallax'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1440

shadows:
  none: 'none'
  ambient: 'rgba(18, 18, 18, 0.04) 0 1px 3px'
  standard: 'rgba(18, 18, 18, 0.06) 0 4px 12px'
  elevated: 'rgba(18, 18, 18, 0.08) 0 12px 28px -8px'
  dropdown: 'rgba(18, 18, 18, 0.10) 0 16px 32px -12px'
  modal: 'rgba(18, 18, 18, 0.16) 0 24px 48px -12px'
  ring: '0 0 0 2px #5368ee'
  ring-offset: '0 0 0 2px #ffffff, 0 0 0 4px #5368ee'

accessibility:
  contrast-text-on-bg: 17.4              # #121212 on #ffffff — AAA
  contrast-text-on-cta: 17.4             # #ffffff on #121212 — AAA
  contrast-text-on-brand: 4.7            # #ffffff on #5368ee — AA at body
  contrast-text-muted-on-bg: 6.2         # #5e5f6b on #ffffff — AAA
  contrast-link-on-bg: 4.7               # #5368ee on #ffffff — AA at body
  contrast-benchmark-our: 4.7            # #ffffff on indigo bar
  contrast-benchmark-them: 5.6           # #5e5f6b on grey-bar
  focus-ring: '2px solid #5368ee with 2px white offset'
  reduced-motion-honored: true
  keyboard-nav: 'visible focus on every interactive surface; benchmark chart bars are non-focusable decorative elements with adjacent data table for screen readers'
  prose-line-length: 'capped at 720px for hero copy'
  aria-patterns: 'benchmark chart wraps a properly-marked-up <table> for screen readers, with the visual chart marked role=img + aria-label summarising the result; comboboxes use aria-controls + aria-expanded; modals use aria-modal'

dark-mode: null                          # marketing surface is light-only; consumer search at you.com/search has its own theming

lineage:
  summary: 'You.com''s site documents the company''s strategic pivot from consumer search engine to developer-grade web-data API. Pure white canvas, custom Lumen Sans at weight 500 (open headlines, normal tracking — the brand''s most distinctive typographic move), 48px headlines, and near-black `#121212` rectangles for primary CTAs. The indigo `#5368ee` accent carries every benchmark bar — it is the "data is the proof" brand colour. Comparison surfaces use grey `#f6f6f6` chips at 4px radius (the densest, most spreadsheet-grade shape on the page). Lineage runs through Vercel''s clean enterprise canvas, Stripe''s data-as-marketing hero charts, and Mintlify''s developer-doc neutrality.'
  influences:
    - name: Vercel
      role: 'White canvas, near-black rectangle CTAs, and developer-doc neutrality'
      url: https://vercel.com
    - name: Stripe
      role: 'Data-as-marketing — accuracy bars and benchmark plots as the centrepiece; single-confident-action discipline'
      url: https://stripe.com
    - name: Mintlify
      role: 'Developer-doc register and the discipline of small radii on data chips'
      url: https://mintlify.com
    - name: Linear
      role: 'Custom-sans + restrained chromatic palette, though Linear runs warmer'
      url: https://linear.app
    - name: Notion
      role: 'Open headline tracking; humanist sans cadence'
      url: https://www.notion.com
    - name: JetBrains Mono
      role: 'Code sample type companion'
      url: https://www.jetbrains.com/mono/
---

## 1. Visual Theme & Atmosphere

You.com's marketing surface stages the company as **web-data infrastructure for AI builders**. The hero — "The Leading Web Search APIs for AI" — sits in custom **Lumen Sans** at 48px / 500 weight on pure white, with a measured benchmark plot below the fold showing SimpleQA and FRAMES accuracy. The indigo `#5368ee` brand accent fills the You.com bars; competitor bars get a neutral `#d9d9df` grey. That single chromatic decision — saturated indigo for our data, neutral grey for theirs — does most of the persuasive work on the page.

The visual register is *measured-data publication*. Lumen Sans (a humanist face with mild contrast and slightly rounded terminals, custom-designed for the company) reads as Inter's calmer cousin — open headlines, no negative tracking, generous body line-height. Where Stripe compresses headlines, where Linear tightens tracking, where Vercel goes near-Inter, You.com leaves headlines *open*. The lack of negative tracking is itself a brand choice: the type breathes, and the breath signals "we're confident in our numbers, we don't need typographic compression to demand attention."

The chromatic palette is narrow by design. White, near-black `#121212`, neutral grey `#f6f6f6`, and one saturated indigo `#5368ee`. The indigo never appears as a CTA fill (those are near-black rectangles); it appears as the colour of *proof* — benchmark bars, accuracy chips, citation links. The "our data is indigo, their data is grey" pattern propagates throughout the site.

The 4px benchmark-chip radius is the densest, most spreadsheet-grade shape on the page — most modern sites land at 6–8px minimum on chips. The 4px choice signals "this is data, not decoration." Cards round at 12px, buttons at 8px — both standard, neither expressive. The shape vocabulary is conservative on purpose; the data is the protagonist.

Atmospheric vocabulary: *developer-doc-white, Lumen-open, indigo-proof, near-black-rectangle-CTA, accuracy-bar, benchmark-publication, Vercel-cousin-Mintlify-cousin, search-as-infrastructure, our-data-vs-theirs.*

**Key Characteristics**
- Pure white `#ffffff` developer-doc canvas
- Custom **Lumen Sans** at weight 500 with **normal tracking** (open, not compressed)
- Saturated indigo `#5368ee` reserved for "our data" — never a CTA fill
- Near-black `#121212` rectangle CTAs at 8px radius
- 4px benchmark chip radius — densest shape on the page
- `#fafafa` plot backdrop with `#5368ee` + `#d9d9df` bar pair
- 12px cards with hairline borders — flat, no shadow
- Single-family type system (Lumen Sans + JetBrains Mono companion)
- 720px hero prose width — broadsheet narrow on a 1200px page
- Data-first hierarchy — the benchmark plot is the hero, not the headline

## 2. Color Palette & Roles

### Primary

- **bg** `#ffffff` — pure white developer-doc canvas, the defining surface.
- **text** `#121212` — near-black body text; warmer than pure `#000`.
- **bg-soft** `#f6f6f6` — competitor-bar grey on benchmark plots; also used for code-sample plates.
- **surface-alt** `#fafafa` — benchmark plot backdrop; one notch lighter than `#f6f6f6`.
- **cta-bg** `#121212` — primary CTA near-black rectangle.
- **on-cta** `#ffffff` — white label on near-black.

### Brand & Accent (indigo)

- **brand** `#5368ee` — signature indigo; benchmark bars, link colour, brand mark.
- **brand-hover** `#3a4ec8` — darker pressed indigo for buttons and links.
- **brand-deep** `#293b9a` — deepest accent on white (badge text, emphasis).
- **brand-soft** `#e8ecff` — info surface tint, status pill bg.
- **brand-faint** `#f4f6ff` — quietest indigo tint, used as section background in rare promotional bands.
- **brand-glow** `rgba(83, 104, 238, 0.20)` — focus glow effect.

### Interactive

- **link** `#5368ee` — saturated indigo, underline on hover.
- **link-hover** `#3a4ec8` — pressed state.
- **selected-bg** `#e8ecff` — selected nav item, selected row in spec tables.
- **disabled-bg** `#f6f6f6` — disabled fill.
- **disabled-text** `#a8a9b1` — disabled label.
- **focus-ring** `#5368ee` — 2px solid with 2px white offset.

### Neutral Scale

- **near-black** `#121212` — primary text.
- **slate-medium** `#2a2b35` — secondary heading emphasis.
- **slate-muted** `#5e5f6b` — secondary copy, the most-used muted tone.
- **slate-soft** `#7c7d87` — supporting copy.
- **slate-faint** `#a8a9b1` — disabled, microcopy.
- **slate-line** `#d9d9df` — competitor bar fill (also a strong divider).

### Surface & Borders

- **surface-0 (page)** — `#ffffff` pure white.
- **surface-1 (panel)** — `#fafafa` benchmark plot backdrop.
- **surface-2 (chip-grey)** — `#f6f6f6` for code samples and competitor data.
- **surface-3 (hover)** — `#f8f8f8` interactive hover state.
- **border** `rgba(18, 18, 18, 0.10)` — default hairline.
- **border-strong** `rgba(18, 18, 18, 0.18)` — emphasized rule, used on button-secondary.
- **border-soft** `rgba(18, 18, 18, 0.06)` — quietest division.

### Shadow Colors

You.com is **flat-first**. Marketing surface uses tonal layering and hairline borders for 95% of depth. The single place a real shadow appears is the navigation dropdown (`rgba(18, 18, 18, 0.10) 0 16px 32px -12px`) and the rare modal. Shadows are **near-black tinted**, never indigo-tinted.

### Semantic

- **success** — `#dcfce7` / `#15803d`. Used for "API key generated", "Account active".
- **warning** — `#fef3c7` / `#854d0e`. Used for rate-limit warnings.
- **danger** — `#fee2e2` / `#b91c1c`. Used for failed requests, account issues.
- **info** — `#e8ecff` / `#293b9a`. Reuses brand-indigo pair; signals "You.com info" tone.

### Benchmark-specific

The chart pair is doctrinal:
- **benchmark-our** `#5368ee` — saturated indigo, "our number".
- **benchmark-them** `#d9d9df` — neutral grey, "their number". Slightly darker than `#f6f6f6` to remain visible on `#fafafa` plot ground.
- **benchmark-ground** `#fafafa` — plot backdrop.
- **benchmark-axis** `rgba(18, 18, 18, 0.12)` — axis lines, gridlines.

## 3. Typography Rules

### Font Family

- **Display & Body**: **Lumen Sans**, a custom humanist sans with mild contrast and modestly rounded terminals. Loaded with weights 400 / 500 / 600. Lumen reads as Inter's calmer, more-rounded cousin — slightly warmer, slightly more open. Fallback chain: `Arial → ui-sans-serif → system-ui → sans-serif`.
- **Mono**: **JetBrains Mono** for code samples and rare benchmark numerals. Fallback to `ui-monospace, "SF Mono", Menlo, Consolas, monospace`.
- **OpenType features**: `kern` always; `ss01` on display headlines (cleaner alt-glyphs); `tnum` + `zero` mandatory on mono for legible numerics in code samples.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display-hero | Lumen Sans | 72 | 500 | 1.05 | normal | ss01 | Rare hero — major page openers |
| display | Lumen Sans | 60 | 500 | 1.08 | normal | — | Section openers |
| h1 | Lumen Sans | 48 | 500 | 1.1 | normal | — | Standard hero ("The Leading Web Search APIs for AI") |
| h2 | Lumen Sans | 30 | 500 | 1.2 | normal | — | Section heading |
| h3 | Lumen Sans | 24 | 500 | 1.3 | normal | — | Subsection |
| h4 | Lumen Sans | 18 | 500 | 1.4 | normal | — | Card heading |
| h5 | Lumen Sans | 16 | 500 | 1.4 | normal | — | Inline heading |
| eyebrow | Lumen Sans | 12 | 500 | 1.4 | 0.06em | uppercase | Section label |
| body-large | Lumen Sans | 18 | 400 | 1.55 | normal | — | Lede |
| body | Lumen Sans | 16 | 400 | 1.5 | normal | — | Default body |
| body-small | Lumen Sans | 14 | 400 | 1.5 | normal | — | Secondary copy |
| caption | Lumen Sans | 13 | 400 | 1.4 | normal | — | Helper text |
| caption-tabular | JetBrains Mono | 13 | 500 | 1.4 | normal | tnum | Spec-row data |
| label | Lumen Sans | 12 | 500 | 1.3 | normal | — | Form labels, tags |
| label-cta | Lumen Sans | 14 | 500 | 1.2 | normal | — | Button text |
| code | JetBrains Mono | 13 | 400 | 1.55 | normal | tnum zero | API code samples |
| code-micro | JetBrains Mono | 11 | 400 | 1.4 | normal | — | Footnote, citation |
| benchmark | JetBrains Mono | 13 | 500 | 1.3 | normal | tnum | Accuracy values, chart labels |

### Principles

- **Normal tracking on display.** Lumen Sans headlines hold at `tracking: normal` — no `-0.02em` compression. The open headline tone is the brand's most distinctive typographic move.
- **500 is the heading weight.** Never 600 or 700 on display; never 400 on h1-h3. The single weight stripe gives the page a calm authority.
- **Single-family type system.** No serif counterpoint, no editorial italic. Lumen Sans + JetBrains Mono is the entire vocabulary.
- **Body line-height of 1.5–1.55.** Slightly more leading than developer-doc default (1.4–1.5). Reads as comfortable rather than dense.
- **Mono for code only — and benchmark labels.** JetBrains Mono surfaces only inside code samples or chart-axis labels. The marketing prose stays sans throughout.
- **Numbers in mono with `tnum`.** Tabular numerals are mandatory on benchmark values and code samples — every chart aligns numerically.
- **No italic body emphasis.** Use weight 500 on body for emphasis; italic is reserved for citation captions.

## 4. Component Stylings

### Buttons

**Primary (near-black rectangle)** — `#121212` bg, `#ffffff` text, 8px radius, Lumen Sans 500 / 14px, padding `10px 20px`. Hover lifts to `#2a2b35`; active drops to `#000`. Used for: "Get API key", "Talk to sales", "Create account".

**Secondary (outlined rectangle)** — `#ffffff` bg, `#121212` text, `1px rgba(18, 18, 18, 0.18)` border, 8px radius, identical typography to primary. Hover wash `#f8f8f8`. Used for: "View docs", "Read benchmarks", "Contact us".

**Indigo (brand CTA)** — `#5368ee` bg, `#ffffff` text, 8px radius. Hover `#3a4ec8`. Reserved for the rare brand-hero CTA — appears at most once per page, signals "try our data" path.

**Ghost** — transparent, `#121212` text, 6px radius, `8px 12px` padding. Hover wash `#f6f6f6`. Used for nav links, inline actions.

### Cards

**Feature card** — `#ffffff` bg, `1px rgba(18, 18, 18, 0.10)` border, 12px radius, `24px` padding, no shadow. Used for capability tiles, doc links, pricing tiers.

**Code sample card** — `#fafafa` bg, `1px rgba(18, 18, 18, 0.06)` border, 12px radius, `20px` padding. JetBrains Mono content inside. Copy button at top-right.

**Benchmark card** — `#fafafa` bg, no border, 12px radius, `32px` padding. Contains a single horizontal-bar chart with You.com indigo + competitor grey bars.

### Badges, Tags, Pills

**Benchmark chip (indigo)** — `#5368ee` bg, `#ffffff` text, Lumen Sans 500 / 12px, **4px radius**. The signature data shape — used on bar segments and key-metric chips.

**Benchmark chip (grey)** — `#d9d9df` bg, `#5e5f6b` text, same typography, 4px radius. The competitor counterpart.

**Status pill (indigo soft)** — `#e8ecff` bg, `#293b9a` text, Lumen Sans 500 / 12px, pill radius (9999). Used for nav `Beta`, `New`, `Live` indicators.

### Inputs & Forms

**Default input** — `#ffffff` bg, `1px rgba(18, 18, 18, 0.18)` border, 8px radius, `10px 14px` padding, Lumen Sans 400 / 16px, `#a8a9b1` placeholder. Focus ring `0 0 0 2px #5368ee` with 2px white offset.

**Form labels** — Lumen Sans 500 / 14px, `#121212`, `4px` margin-bottom from input.

**Helper text** — Lumen Sans 400 / 13px, `#5e5f6b`, `4px` margin-top from input.

**Error state** — border `#fee2e2`; helper text flips to `#b91c1c`.

### Navigation

**Top nav** — 64px header height, `#ffffff` bg with `1px rgba(18, 18, 18, 0.06)` bottom border (only on scroll), Lumen Sans 500 / 14px / `#121212` links. Hover lightens to `#5e5f6b`. Right cluster: "Sign in" ghost link + "Get API key" near-black rectangle CTA.

**Footer nav** — Lumen Sans 400 / 14px / `#5e5f6b`, 4-column grid on desktop.

### Benchmark Plot (the signature module)

**Chart container** — `#fafafa` bg, no border, 12px radius, `32px` padding. Chart title in Lumen Sans 500 / 24px above. Source caption in JetBrains Mono 11px / `#7c7d87` below.

**Bar (our)** — `#5368ee` fill, 4px radius, height ~24px. Bar label inside-end if fits, else outside-end. Label in Lumen Sans 500 / 13px / `#ffffff` (inside) or `#121212` (outside).

**Bar (their)** — `#d9d9df` fill, 4px radius, same height. Label `#5e5f6b`.

**Axis** — `rgba(18, 18, 18, 0.12)` line, JetBrains Mono 11px tick labels.

### Tooltips

**Tooltip** — `#121212` bg, `#ffffff` text, 6px radius, Lumen Sans 400 / 13px, `8px 12px` padding, `200ms` fade.

### Toasts

**Toast** — `#ffffff` bg, `1px rgba(18, 18, 18, 0.10)` border, 8px radius, ambient shadow, `12px 16px` padding. Slides up from bottom-right.

### Modals

**Modal** — `#ffffff` panel, 12px radius, modal shadow, `40px` padding. Backdrop `rgba(18, 18, 18, 0.5)`.

## 5. Layout Principles

### Spacing System

Base unit **4px**. Scale: `1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 48, 64, 80, 96, 128`. Component padding lives in 8–24; section padding 80–128. The system reads as developer-doc dense — slightly tighter than Anthropic, slightly looser than Stripe.

### Grid & Container

- **Page max-width**: 1200px, centred, `clamp(24px, 5vw, 64px)` site gutter.
- **Hero prose-width**: 720px max — broadsheet narrow.
- **Grid columns**: 12, 24px gutter.
- **Feature grid**: 3-up cards on desktop with equal-width columns.
- **Benchmark plot**: full-width within container.

### Whitespace Philosophy

Between sections: 80–128px on desktop, 48px on mobile. Within sections: 24–48px between groups. The page is organised as **hero + benchmark plot + accuracy claim + 3-up capability rail + API code sample + pricing/contact**. The benchmark plot lives near the top of the fold — it's the proof, not the conclusion.

### Section Cadence

The page alternates **white** and **`#fafafa` faint-grey** bands every 2–3 sections. The benchmark plot uses the `#fafafa` band so the chart's plot backdrop continues seamlessly into the section. There is no dark-mode brand band — light throughout.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| Micro | 2px | Hairline indicators, focus inner-stroke |
| Small | 4px | **Benchmark chips, bar segments** — the signature dense shape |
| Medium | 6px | Ghost buttons, dropdown items |
| Standard | 8px | Buttons (primary, secondary, indigo), inputs |
| Card | 12px | Feature cards, code sample cards, benchmark plot container |
| Featured | 16px | Reserved (rare hero modules) |
| Pill | 9999px | Status pills, nav badges |

The 4px benchmark-chip radius is the densest shape on the page and the most distinctive — most modern sites land at 6–8px minimum on chips and pills. The tighter radius signals "data, not decoration." Cards hold at 12px (matching Stripe and Notion); buttons at 8px (matching Vercel and Linear).

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow, no border | Page bg, hero copy |
| 1 (hairline) | `1px rgba(18, 18, 18, 0.10)` border | Default cards |
| 2 (tonal) | `#fafafa` bg tint, no shadow | Code panels, benchmark plot section |
| 3 (ambient) | `rgba(18, 18, 18, 0.04) 0 1px 3px` | Toast, light hover |
| 4 (dropdown) | `rgba(18, 18, 18, 0.10) 0 16px 32px -12px` | Nav dropdown menu |
| 5 (modal) | `rgba(18, 18, 18, 0.16) 0 24px 48px -12px` | Modal panel |

### Shadow Philosophy

You.com is **flat-first**, like Cartesia and Vercel. Marketing surface depth comes from tonal layering plus hairline borders. The benchmark plot — the most data-dense module — has *no border, no shadow*; it relies on the `#fafafa` plot ground to define its boundaries against the white page. Real shadows live only on dropdowns and modals, both **near-black tinted at low opacity**. The indigo brand accent never appears in shadow — it's reserved for fill and focus-ring.

## 8. Interaction & Motion

### Easing curves

- **Standard** — `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, focus.
- **Emphasized** — `cubic-bezier(0.2, 0, 0, 1)` — incoming elements, modals.
- **Out** — `cubic-bezier(0.16, 1, 0.3, 1)` — overshoot-free decelerate for benchmark-bar fill animations.

### Duration buckets

- **Instant** — 80ms — focus ring, micro-state.
- **Fast** — 120ms — hover bg shift.
- **Standard** — 200ms — default transitions.
- **Slow** — 320ms — modal opens, dropdowns.
- **Page** — 400ms — route transitions.
- **Bar** — 600ms — benchmark bar fill animation (the signature page-scroll moment).

### Per-component micro-states

- **Button hover** — bg shifts via `120ms ease-standard`. No translate, no scale.
- **Card hover** — border-soft brightens from `rgba(18, 18, 18, 0.10)` to `rgba(18, 18, 18, 0.18)` over `200ms`.
- **Link hover** — colour stays indigo, underline reveals via `text-decoration` over `120ms`.
- **Input focus** — focus-ring fades in `80ms`; border swaps to `#5368ee`.
- **Benchmark bar fill** — bars animate width `0 → final` over `600ms ease-out` when scrolled into view via IntersectionObserver. This is the page's signature moment — the data resolves before the user's eyes.
- **Toast** — slides up 8px and fades 0 → 1 over `320ms`.
- **Modal** — backdrop fades 0 → 0.5 over `200ms`; panel scales `0.98 → 1` simultaneously.

### Page transitions

Marketing pages use SPA-style transitions with `400ms ease-standard` fade-through. Section anchors use `scroll-behavior: smooth`.

### Reduced-motion strategy

`prefers-reduced-motion: reduce` is fully honoured. The benchmark bar fill animation **disables entirely** — bars render at final width with no animation (this is the most consequential reduced-motion override). Translate transforms become opacity fades. Smooth scroll disables.

## 9. Accessibility & A11y

### Contrast pairs (computed)

| Pair | Ratio | WCAG |
|---|---|---|
| `#121212` on `#ffffff` (body) | 17.4:1 | AAA |
| `#ffffff` on `#121212` (CTA) | 17.4:1 | AAA |
| `#5e5f6b` on `#ffffff` (muted) | 6.2:1 | AAA |
| `#5368ee` on `#ffffff` (link / indigo CTA) | 4.7:1 | AA at body |
| `#ffffff` on `#5368ee` (indigo bar label) | 4.7:1 | AA at body |
| `#293b9a` on `#e8ecff` (badge) | 7.5:1 | AAA |
| `#5e5f6b` on `#d9d9df` (competitor bar label) | 5.6:1 | AA |

### Focus indicators

**2px solid `#5368ee`** with **2px white offset** on every interactive surface. Inputs additionally swap their border to `#5368ee` on focus. The indigo focus is visually distinct from any neutral UI colour.

### ARIA patterns

- **Benchmark chart** — wraps a properly-marked-up `<table>` for screen readers (rows: model name, accuracy, p-value); the visual chart is `role="img"` + `aria-label="Benchmark chart: You.com 86% accuracy on SimpleQA versus competitors at 78%, 71%, 65%"`. Keyboard users tab into the table; visual users see the chart.
- **Combobox** — `role="combobox"` + `aria-controls` + `aria-expanded` + `aria-activedescendant`.
- **Modal** — `role="dialog"` + `aria-modal="true"` + `aria-labelledby` + `aria-describedby`. Initial focus on first input; ESC dismisses.
- **Tooltip** — `role="tooltip"` + `aria-describedby` from trigger.
- **Tabs** — `role="tablist"` + `role="tab"` + `aria-selected` + arrow-key navigation.

### Keyboard navigation

- Tab order matches reading order — header, hero CTA, benchmark plot (skipped, links to data table), feature cards, footer.
- ESC closes modals, dropdowns.
- Arrow keys move within tab-lists, dropdowns, comboboxes.
- Skip-to-content link on first Tab.

### Screen reader hints

- Benchmark chart announces full data via the adjacent `<table>` markup; users hear "You.com: 86 percent accuracy. Competitor A: 78 percent..."
- The 4px-radius benchmark chip uses `aria-label` describing the metric ("Indigo chip indicating You.com's 86% accuracy on SimpleQA").
- All decorative SVG illustrations are `aria-hidden="true"`.
- Code samples wrap in `<pre><code>` with `aria-label="Python example using You.com Search API"`.

### Reduced motion

Honoured globally. The benchmark bar fill animation is the most affected — bars render at final width with no animation when `prefers-reduced-motion: reduce` is set.

## 10. Responsive Behavior

### Breakpoints

| Name | Min-width | Notes |
|---|---|---|
| mobile | 0 | Single column, 24px gutter, hero at 32px |
| tablet | 640px | 2-up feature grid, hero at 36px |
| desktop | 1024px | 3-up grid, hero at 48px |
| wide | 1280px | Full 12-column grid, hero at 60px on landing |
| max | 1440px | Container caps at 1200px, gutter expands |

### Touch targets

All interactive elements honour **44×44px minimum**. Primary CTAs at `10px 20px` padding render at ~40px tall — paired with extended tap padding via `::before` pseudo-element on mobile.

### Collapsing strategy

- **Hero** — single-column on mobile (copy → primary CTA → secondary CTA stacked).
- **Benchmark plot** — horizontal-bar chart stays horizontal at all sizes; bar labels reflow under bars on mobile.
- **Feature grid** — 3-up desktop → 2-up tablet → 1-up mobile.
- **Top nav** — links collapse into a hamburger drawer at <1024px; primary CTA stays visible.
- **Code samples** — desktop fits the full sample horizontally; mobile uses a horizontal scroll within the card.

### Image behaviour

- All product images SVG or AVIF with WebP fallback.
- `loading="lazy"` below the fold.
- `aspect-ratio` to prevent CLS.

### Container queries

Used on the benchmark card — at `@container (max-width: 480px)` the chart switches from horizontal-bar to a stacked label / value pair layout for mobile readability.

## 11. Content & Voice

### Tone

**Measured, factual, developer-direct.** You.com speaks the way a research-grade SaaS speaks to engineers — claims are quantified ("86% accuracy on SimpleQA"), the audience is assumed to be technical, and there is no consumer-marketing exuberance. The tone shares vocabulary with Stripe's developer pages and Vercel's framework documentation.

### Microcopy patterns

- **Button verbs** — "Get API key", "View docs", "Read benchmarks", "Talk to sales", "See pricing". Concrete actions, no abstract verbs.
- **Error messages** — `[Field/Operation]: [problem]. [Resolution].` Example: "API key: invalid. Generate a new key in your dashboard."
- **Success confirmations** — minimal: "API key copied", "Account created". No celebratory language.
- **Empty states** — "No requests yet. [Get started with the API →]"
- **Citation copy** — "Source: SimpleQA benchmark, May 2024". JetBrains Mono 11px, `#7c7d87`.

### CTA verb conventions

The brand uses **specific, technical** verbs:

1. **Get API key** — top hero CTA, the canonical conversion path.
2. **View docs** — secondary, for evaluators.
3. **Read benchmarks** — for proof-driven readers.
4. **Talk to sales** — for enterprise.
5. **See pricing** — for budget-driven evaluators.

Avoided: *Sign up* (too consumer), *Discover*, *Unlock*, *Get started* (too vague), *Try free* (too SaaS-template).

### Empty states

- Empty dashboard: "No API requests yet. [Read the quickstart →]"
- Empty benchmark filter: "No models match those filters. Try removing one filter."
- Empty search: "Nothing here yet. Try a different query."

### Tone anchors

- Cite. Every accuracy claim links to source.
- Quantify. "86%" beats "industry-leading".
- Use second person ("you", "your") sparingly — addresses the developer directly when discussing developer experience, but stays third-person when discussing data ("the model achieves 86%").
- Avoid superlatives. "Leading" is the strongest claim You.com makes about itself; "the best" is absent.
- Never apologise. There is no "We know AI is hard, but…" register.

## 12. Dark Mode & Theming

The marketing surface is **light-only** by design. The consumer search surface at `you.com/search` ships its own theming (with light + dark modes) but the developer-API marketing site holds light throughout.

If a dark mode were ever shipped for the marketing surface, it would need to:

- Swap canvas to `#0a0a14` (deep cool near-black with mild indigo undertone).
- Elevate text to `#f6f6f6` (matching the light-mode chip-grey but flipped for hierarchy).
- Drop the indigo saturation to `#7282f0` for body-level contrast on dark.
- Replace `#fafafa` benchmark ground with `#1a1b25`; competitor bar grey becomes `#3a3b45`.
- Keep indigo bar fill — the brand colour holds across modes.
- Replace `#121212` CTA with `#f6f6f6` CTA (inverts the chrome).

But none of this is shipped on the marketing surface. **Light-only — no dark variant offered for `you.com` marketing pages.**

## 13. Lineage & Influences

You.com's site documents the company's strategic pivot from consumer search engine to developer-grade web-data API. The visual language reflects that shift wholesale: where the consumer product (still live at `you.com/search`) leans on chatty hero surfaces and chip-led personalisation, the developer marketing page runs a measured-data register that quotes Vercel and Stripe in equal measure. Pure white canvas, custom **Lumen Sans** at 500 weight (a humanist face with mild contrast and slightly rounded terminals), 48px headlines with normal tracking, and near-black `#121212` rectangles for primary CTAs — none of which is novel on its own, but the *consistency* is the point.

The indigo accent `#5368ee` carries every benchmark bar and metric chip — it is the "data is the proof" brand colour, deployed only where accuracy claims are being made. Comparison surfaces use grey `#f6f6f6` chips at 4px radius (the densest, most spreadsheet-grade shape on the page). The lineage runs through Vercel's clean enterprise canvas, Stripe's data-as-marketing hero charts, and Mintlify's developer-doc neutrality. The most distinctive brand decision — keeping headline tracking at `normal` rather than the `-0.02em` default of every modern SaaS — places You.com slightly outside the Stripe/Linear cluster and closer to Notion's open headline cadence.

The brand also rejects two adjacent registers. You.com is *not* the consumer search register (no chip-led hero, no chat input, no citation cards on the landing page), and it is *not* the academic-paper register (no mono headlines, no preprint conventions). The market position — web search infrastructure for AI builders — demands the developer-doc-meets-data-publication register.

**Named influences**:
- **Vercel** ([https://vercel.com](https://vercel.com)) — White canvas, near-black rectangle CTAs, and developer-doc neutrality.
- **Stripe** ([https://stripe.com](https://stripe.com)) — Data-as-marketing — accuracy bars and benchmark plots as the centrepiece; single-confident-action discipline.
- **Mintlify** ([https://mintlify.com](https://mintlify.com)) — Developer-doc register and the discipline of small radii on data chips.
- **Linear** ([https://linear.app](https://linear.app)) — Custom-sans + restrained chromatic palette; though Linear runs warmer.
- **Notion** ([https://www.notion.com](https://www.notion.com)) — Open headline tracking; humanist sans cadence.
- **JetBrains Mono** ([https://www.jetbrains.com/mono/](https://www.jetbrains.com/mono/)) — Code sample type companion.
- **Tailwind UI / Headless UI** — The 8px button radius + 12px card radius vocabulary.

## 14. Do's and Don'ts

### Do

- **Reserve the indigo `#5368ee` for "our data".** Benchmark bars, key metric chips, the brand mark — and let competitor data sit in zinc grey.
- **Use Lumen Sans at 500 with normal tracking.** The open headline tone is part of the developer-doc register.
- **Keep CTAs as near-black rectangles at 8px.** Pill or rounded-soft buttons collapse the enterprise posture.
- **Use 4px radius on benchmark chips.** That density is the data-publication signature.
- **Show data as the hero**, not the headline. The benchmark plot lives near the top of the fold.
- **Cite every accuracy claim** with a JetBrains Mono 11px source caption.
- **Animate benchmark bars on scroll** (600ms ease-out fill). It's the page's signature moment.
- **Use the `#fafafa` plot backdrop** to define benchmark sections; let the plot bleed into the section bg.
- **Set focus ring as 2px `#5368ee` with 2px white offset.**
- **Honour `prefers-reduced-motion`** — disable benchmark bar fill animation entirely when set.

### Don't

- **Don't import the chatty hero language of `you.com/search` consumer surface.** The API marketing page is a different brand voice.
- **Don't drop shadows on benchmark plots.** Data should read as raw, not designed-on.
- **Don't introduce a second saturated colour.** The page is white, near-black, zinc, and one indigo — that discipline is the brand.
- **Don't compress headline tracking.** Lumen Sans holds at `tracking: normal`. `-0.02em` collapses you into the Stripe register.
- **Don't pill-radius buttons.** The 8px corner is essential.
- **Don't use indigo as a CTA fill.** Indigo signals proof, not action; near-black `#121212` is the action colour.
- **Don't show competitor bars in any colour other than `#d9d9df`.** Coloured competitor bars suggest equality — the chromatic split is doing the persuasion.
- **Don't use Inter or system-sans fallback first.** Lumen Sans is the brand; the fallback chain runs through Arial.
- **Don't increase chip radius above 4px.** The dense shape is the data-publication signal.
- **Don't write CTAs in marketing voice** ("Discover", "Unlock", "Sign up free"). Developer-direct verbs only.
- **Don't add a third action variant.** Primary near-black + secondary outlined + rare brand-indigo is the entire ladder.
- **Don't auto-play any video on the marketing page.** Static charts and code samples carry the demo.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg:                #ffffff
bg-soft:           #f6f6f6
surface-alt:       #fafafa
text:              #121212
text-muted:        #5e5f6b
brand:             #5368ee
brand-soft:        #e8ecff
cta-bg:            #121212
benchmark-our:     #5368ee
benchmark-them:    #d9d9df
border:            rgba(18, 18, 18, 0.10)
```

### Example Component Prompts

1. *"Create a You.com-style API hero: pure white canvas, headline 'The Leading Web Search APIs for AI' in Lumen Sans 500 / 48px / normal tracking / `#121212`. Lede in Lumen Sans 400 / 18px / 1.55 line-height / `#5e5f6b`, capped at 720px width. Primary CTA 'Get API key' as a `#121212` rectangle at 8px radius / 10px 20px padding / Lumen Sans 500 / 14px / `#ffffff` text. Secondary CTA 'View docs' as outlined `1px rgba(18, 18, 18, 0.18)` at the same 8px radius."*

2. *"Design a You.com-style benchmark plot: `#fafafa` bg / 12px radius / no border / 32px padding. Chart title 'SimpleQA Accuracy' in Lumen Sans 500 / 24px above. Horizontal bar chart with 4 rows. Top row 'You.com' uses `#5368ee` fill at 4px radius with white label '86%' inside the bar. Other rows use `#d9d9df` fill at 4px radius with `#5e5f6b` label. Source caption below in JetBrains Mono 11px / `#7c7d87`."*

3. *"Build a You.com-style API code sample card: `#fafafa` bg, 12px radius, `1px rgba(18, 18, 18, 0.06)` border, 20px padding. JetBrains Mono 13px / 1.55 line-height code with minimal syntax highlighting (keywords in `#5368ee`, strings in `#15803d`, comments in `#7c7d87`). Copy button at top-right — ghost style, transparent bg, hover `#f6f6f6`."*

4. *"Create a You.com-style feature card: `#ffffff` bg, 12px radius, `1px rgba(18, 18, 18, 0.10)` border, 24px padding, no shadow. Icon at top in `#5368ee` (SVG, 24px). Card title in Lumen Sans 500 / 18px / `#121212`. Description in Lumen Sans 400 / 15px / 1.5 line-height / `#5e5f6b`. Optional learn-more link at bottom in `#5368ee`."*

5. *"Build a You.com-style nav bar: 64px height, white bg, no border (until scroll). Wordmark left in Lumen Sans 600 / 18px. Nav links right at Lumen Sans 500 / 14px / `#121212`. Right cluster: 'Sign in' ghost button + 'Get API key' near-black rectangle at 8px radius."*

6. *"Design a You.com-style 3-up capability rail: 3-column grid on desktop (1200px container), 24px gutter. Above the rail: section eyebrow 'Capabilities' in Lumen Sans 500 / 12px uppercase / 0.06em tracking / `#5e5f6b`, then heading 'Built for AI builders' in Lumen Sans 500 / 30px / `#121212`. Each cell is a feature card."*

### Iteration Guide

1. **Verify headline tracking is `normal`, not `-0.02em`.** Lumen Sans's open headline cadence is the brand's most distinctive typographic move.
2. **Audit indigo usage — it's "our data", never CTA fill.** If you find an indigo button on the page, it should be the rare brand-CTA exception (max 1 per page).
3. **Check benchmark chip radius is 4px.** Larger radii collapse the data-publication register.
4. **Confirm `#d9d9df` for competitor bars, never coloured.** The chromatic split is the persuasion.
5. **Verify CTA copy uses developer-direct verbs** ("Get API key", "View docs"). Replace any consumer-SaaS verbs.
6. **Add `tnum` to all benchmark numerals.** Tabular alignment is mandatory.
7. **Strip any drop shadows from cards and benchmark plots.** Hairline borders only.
8. **Ensure benchmark bar fill animation is `ease-out` over 600ms** — and disabled under `prefers-reduced-motion`.
