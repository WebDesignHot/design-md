---
name: Plain
tagline: B2B support tool with a Dinamo grotesk and a single radioactive `#1ad379` action — Linear-restraint applied to support.
author: webdesignhot
source_url: https://www.plain.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [saas, dev-tools]
tags: [light, minimal, sans, bright, dense, structured]
preview_swatch: ['#ffffff', '#1ad379', '#000000']
related: [linear, cal-com, vercel]
description: 'Plain is a Linear-style B2B support tool that pairs a custom Dinamo grotesk (`ABC Favorit`) at 80px against a single radioactive lime-green CTA. The whole identity rides on one typographic and one chromatic decision — Favorit on white with `#1ad379` accents. Where Intercom-style support tools dominate the category with colorful, illustrated, slightly cute pages, Plain refuses the entire vocabulary. The "BOOK A DEMO" button is set in all-caps, weight 700, on a radioactive green that looks more like a Linear keyboard chip than a SaaS marketing button. Combined with the Dinamo-licensed grotesk, the page reads as deeply intentional — the kind of restraint that signals to engineering buyers that the product itself will respect their attention. The headline lands at 80px in weight 400 (not 600 or 700) — the type''s confidence signal: the form has enough character to hold the page without leaning on weight. Black text on pure white, no warm tint, no off-white; the entire system runs on one type family (ABC Favorit), one accent color (`#1ad379`), one secondary tier (`#f5f5f5`) — and that''s the whole budget.'

colors:
  # Primary
  bg: '#ffffff'                          # pure white canvas, no warm tint
  bg-secondary: '#f5f5f5'                # the only secondary tier
  bg-tertiary: '#fafafa'                 # subtle inset / hover ground
  surface: '#ffffff'                     # cards = page surface (flat)
  surface-elev: '#fafafa'                # subtle lift over white
  text: '#000000'                        # pure black headlines and body
  text-strong: '#000000'                 # display / hero
  text-medium: '#1a1a1a'                 # secondary heading
  text-soft: '#5b5b5b'                   # captions, metadata, disabled
  text-faint: '#8a8a8a'                  # eyebrows, helper text
  text-muted: '#b8b8b8'                  # placeholder, disabled microcopy
  # Brand
  brand: '#1ad379'                       # radioactive lime-green CTA
  brand-hover: '#0fb866'                 # deeper green hover state
  brand-deep: '#0a8f4f'                  # pressed-state green
  brand-soft: '#e8faf0'                  # green wash for success bgs
  brand-tint: '#b8f0d2'                  # green tint for chips
  on-brand: '#000000'                    # black label on green (the signature)
  cta-bg: '#1ad379'                      # primary CTA fill
  cta-text: '#000000'                    # CTA text in black, all-caps
  # Interactive
  link: '#000000'                        # links default to black underlined
  link-hover: '#1ad379'                  # green on hover only
  selected-bg: '#f5f5f5'                 # selected nav state
  disabled: '#b8b8b8'
  # Borders
  border: 'rgba(0, 0, 0, 0.08)'          # default hairline
  border-strong: 'rgba(0, 0, 0, 0.16)'   # outlined buttons
  border-subtle: 'rgba(0, 0, 0, 0.04)'   # quietest separation
  border-brand: 'rgba(26, 211, 121, 0.30)' # green-tinted hairline
  # Semantic
  success-bg: '#e8faf0'                  # green wash
  success-text: '#0a8f4f'
  warning-bg: '#fff4e0'                  # warm-amber wash
  warning-text: '#7a4a00'
  danger-bg: '#fde6e6'                   # soft-red wash
  danger-text: '#a82020'
  info-bg: '#eef2f7'                     # cool-grey wash (info reads as quiet, not blue)
  info-text: '#1a1a1a'

typography:
  display:
    family: '"ABC Favorit", "ABC Favorit Regular", -apple-system, system-ui, sans-serif'
    weights: [400, 500, 700]
    opentype-features: ['liga', 'kern']
  body:
    family: '"ABC Favorit", -apple-system, system-ui, sans-serif'
    weights: [400, 500]
    opentype-features: ['liga', 'kern']
  mono:
    family: '"ABC Favorit Mono", ui-monospace, "SF Mono", monospace'
    weights: [400, 500]
    opentype-features: ['tnum', 'zero']
  scale:
    display-hero:    { size: 96, weight: 400, lineHeight: 0.92, tracking: '-0.025em', family: display }
    display:         { size: 80, weight: 400, lineHeight: 0.95, tracking: '-0.02em', family: display }
    h1:              { size: 64, weight: 400, lineHeight: 1.0,  tracking: '-0.02em', family: display }
    h2:              { size: 48, weight: 400, lineHeight: 1.05, tracking: '-0.015em', family: display }
    h3:              { size: 32, weight: 500, lineHeight: 1.15, tracking: '-0.01em', family: display }
    h4:              { size: 22, weight: 500, lineHeight: 1.25, family: display }
    h5:              { size: 18, weight: 500, lineHeight: 1.35, family: display }
    eyebrow:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.08em', family: mono, transform: uppercase }
    body-large:      { size: 20, weight: 400, lineHeight: 1.5,  family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.5,  family: body }
    body-small:      { size: 14, weight: 400, lineHeight: 1.5,  family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.4,  family: body }
    caption-tabular: { size: 12, weight: 500, lineHeight: 1.4,  family: mono, opentype: 'tnum' }
    label:           { size: 11, weight: 500, lineHeight: 1.3,  family: mono, transform: uppercase }
    button:          { size: 13, weight: 700, lineHeight: 1.0,  family: body, tracking: '0.06em', transform: uppercase }
    code:            { size: 14, weight: 400, lineHeight: 1.55, family: mono }
    code-micro:      { size: 11, weight: 400, lineHeight: 1.4,  family: mono }
    quote-pull:      { size: 28, weight: 400, lineHeight: 1.25, tracking: '-0.01em', family: display }

radius:
  micro: 2
  sm: 6
  md: 6
  lg: 8
  xl: 12
  pill: 9999

spacing:
  base: 4
  scale: [1, 2, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160]

layout:
  page-width: 1200
  prose-width: 680
  site-gutter: 'clamp(24px, 5vw, 64px)'
  header-height: 64
  grid-columns: 12
  section-rhythm: '96-128px'

components:
  button-primary:
    background: '#1ad379'
    text: '#000000'
    padding: '14px 24px'
    radius: 6
    border: 'none'
    font: 'ABC Favorit 700 / 13px / uppercase / 0.06em tracking'
    hover-bg: '#0fb866'
    active-bg: '#0a8f4f'
    use: 'Primary action — radioactive green pill rect with all-caps black label; the whole brand budget'
  button-secondary:
    background: 'transparent'
    text: '#000000'
    padding: '14px 24px'
    radius: 6
    border: '1px solid rgba(0, 0, 0, 0.16)'
    font: 'ABC Favorit 700 / 13px / uppercase / 0.06em tracking'
    hover-bg: 'rgba(0, 0, 0, 0.04)'
    use: 'Outlined twin — same shape, no fill, all-caps copy maintained'
  button-black:
    background: '#000000'
    text: '#ffffff'
    padding: '14px 24px'
    radius: 6
    font: 'ABC Favorit 700 / 13px / uppercase / 0.06em tracking'
    hover-bg: '#1a1a1a'
    use: 'Rare black CTA — alternate primary on green-emphasis pages where the green is already used elsewhere'
  button-ghost:
    background: 'transparent'
    text: '#000000'
    padding: '8px 12px'
    font: 'ABC Favorit 500 / 14px'
    hover-text: '#1ad379'
    use: 'Quiet third action — nav links, footer, repeated CTAs'
  card:
    background: '#ffffff'
    border: '1px solid rgba(0, 0, 0, 0.08)'
    radius: 8
    padding: '24px'
    use: 'Default feature card — flat panel, hairline border, no shadow'
  card-grey:
    background: '#f5f5f5'
    border: 'none'
    radius: 8
    padding: '32px'
    use: 'Inset card for testimonials, code blocks, quoted callouts'
  input:
    background: '#ffffff'
    border: '1px solid rgba(0, 0, 0, 0.16)'
    radius: 6
    padding: '12px 14px'
    font: 'ABC Favorit 400 / 16px'
    placeholder-color: '#8a8a8a'
    focus-ring: '0 0 0 2px #1ad379'
    use: 'Form fields, search, email capture'
  badge-eyebrow:
    background: 'transparent'
    text: '#5b5b5b'
    padding: '0'
    font: 'ABC Favorit Mono 500 / 12px / uppercase / 0.08em'
    use: 'Section eyebrow — mono caps, no chrome'
  badge-status:
    background: '#e8faf0'
    text: '#0a8f4f'
    padding: '4px 10px'
    radius: 4
    font: 'ABC Favorit 500 / 12px'
    use: 'Status pill — green wash for active, neutral for default'
  nav-link:
    background: 'transparent'
    text: '#000000'
    padding: '8px 12px'
    font: 'ABC Favorit 500 / 14px'
    hover-text: '#1ad379'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-out: 'cubic-bezier(0.0, 0, 0.2, 1)'
  duration-fast: 100
  duration-standard: 180
  duration-slow: 300
  duration-page: 400
  reduced-motion: 'respects prefers-reduced-motion: reduce — all transitions become opacity-only, durations halved'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1200
  wide: 1440

shadows:
  none: 'none'
  ambient: 'rgba(0, 0, 0, 0.04) 0 1px 3px'
  standard: 'rgba(0, 0, 0, 0.06) 0 4px 12px'
  elevated: 'rgba(0, 0, 0, 0.08) 0 12px 32px -8px'
  popover: 'rgba(0, 0, 0, 0.10) 0 16px 40px -16px'
  ring: '0 0 0 2px #1ad379'

accessibility:
  contrast-text-on-bg: 21.0                # #000000 on #ffffff — AAA at all sizes (theoretical max)
  contrast-text-on-brand: 9.5              # #000000 on #1ad379 — AAA at body sizes
  contrast-text-soft-on-bg: 7.4            # #5b5b5b on #ffffff — AAA at body sizes
  focus-ring: '2px solid #1ad379 with 2px offset'
  reduced-motion-honored: true
  keyboard-nav: 'visible focus on every interactive surface; tab order matches visual'
  prose-line-length: 'capped at 680px for readability'

dark-mode: null                            # marketing surface is light-only; the radioactive green is calibrated for white only

lineage:
  summary: 'Plain runs the Linear playbook on a white canvas. The same restraint, the same single-accent commitment, the same type-led layout — but ported from Linear''s dark Inter-Variable register into pure white + ABC Favorit + radioactive lime-green. Where Intercom-style support tools dominate the category with colorful, illustrated, slightly cute pages, Plain refuses the entire vocabulary. The "BOOK A DEMO" button is set in all-caps on a radioactive green that looks more like a Linear keyboard chip than a SaaS button. Combined with the Dinamo-licensed grotesk, the page reads as deeply intentional — the kind of restraint that signals to engineering buyers that the product itself will respect their attention. The headline lands at 80px in weight 400 (not 600 or 700) — the type''s confidence signal: the form has enough character to hold the page without leaning on weight.'
  influences:
    - name: 'Dinamo Typefaces (ABC Favorit)'
      role: 'The grotesk on the entire site; a design-conscious type choice that signals craft to the Linear-influenced audience'
      url: 'https://abcdinamo.com/typefaces/favorit'
    - name: 'Linear'
      role: 'Restrained-sans-plus-single-accent vocabulary; weight-400 headlines; minimalism as proof of product confidence — the direct visual ancestor'
      url: 'https://linear.app'
    - name: 'Vercel'
      role: 'White-canvas SaaS sibling; the modern reference for "type does the work, no illustration"'
      url: 'https://vercel.com'
    - name: 'Cal.com'
      role: 'Adjacent precedent for design-conscious B2B SaaS with single-accent discipline'
      url: 'https://cal.com'
    - name: 'Intercom'
      role: 'Direct competitor; Plain positions itself as the cleaner, more developer-shaped alternative. The visual differentiation is the entire pitch.'
      url: 'https://intercom.com'
    - name: 'Stripe'
      role: 'Hairline-border restraint, single-accent confidence on a neutral canvas'
      url: 'https://stripe.com'
---

## 1. Visual Theme & Atmosphere

Plain runs the Linear playbook on a white canvas. The headline "Build support your way" is set in **ABC Favorit** (a Dinamo Typefaces grotesk) at 80px / weight 400 with `-0.02em` tracking — the same kind of typographic confidence Linear shows on its dark canvas, ported into B2B support software. The single chromatic event on the page is the lime-green `#1ad379` CTA — radioactive enough to stop the eye, restrained enough that nothing else competes with it. The "BOOK A DEMO" label sits in all-caps, weight 700, with `0.06em` letter-spacing — a deliberate enterprise-B2B register that reads more like a band poster than a SaaS marketing button.

What makes Plain distinctive is the *category positioning*. The customer-support tool category is dominated by Intercom-style colorful, illustrated, slightly cute pages: cartoon avatars, gradient hero sections, mascot illustrations, multiple brand colors. Plain refuses the entire vocabulary. The "BOOK A DEMO" button is set in all-caps on a radioactive green that looks more like a Linear keyboard chip than a SaaS button. Combined with the Dinamo-licensed grotesk, the page reads as deeply intentional — the kind of restraint that signals to engineering buyers that the product itself will respect their attention. Plain is targeting *Linear customers and similar developer-shaped support buyers*, and the marketing chrome is a self-selection filter.

The third register is the **discipline of weight 400 at 80px**. Most type-confident SaaS sites lean on weight 600 or 700 for hero copy — that's the Vercel/Mintlify/Linear convention. Plain pushes the headline to 80px (genuinely large, larger than Linear or Vercel's 48–64px hero) but keeps it at *weight 400*. The choice is the type's confidence signal: ABC Favorit has enough character — humanist proportions, the curved lowercase `g`, the angled stroke endings — to hold the page without leaning on weight. Going to 600 or 700 at 80px would feel shouty; staying at 400 reads as "the form alone is enough."

Atmospheric vocabulary that captures the feeling: *radioactive-green, all-caps-CTA, Dinamo-licensed, weight-400-confident, white-canvas-restraint, Linear-cousin, Intercom-rejection, support-for-engineers, type-does-the-work, no-illustration, single-accent-budget.* Every surface lands like it was designed by an engineering-design partnership that has read their Brian Eno and decided that subtraction is the move.

**Key Characteristics**
- Pure white `#ffffff` canvas — no warm tint, no off-white, no cream
- Custom **ABC Favorit** by Dinamo — humanist grotesk on the entire surface
- Single radioactive-green `#1ad379` accent — the whole chromatic budget
- All-caps, weight-700, `0.06em` letter-spacing CTAs — band-poster register
- Black text on green button — the signature inversion (most green CTAs use white text)
- Headline at 80px weight 400 — type confidence signal
- Two-tier surface (white + `#f5f5f5`) — minimal palette
- 6px button radius — smaller than the SaaS-pill convention
- ABC Favorit Mono cousin — code blocks share the parent family proportions
- 96–128px section gutters — generous, Linear-paced spacing
- No gradients, no illustrations, no mascots — pure type + accent + restraint
- Single-family discipline — display, body, mono all from the Favorit ecosystem

## 2. Color Palette & Roles

### Primary

- **bg** `#ffffff` — pure white canvas. No warm tint, no off-white, no cream.
- **text** `#000000` — pure black for headlines and body. Maximum contrast at 21:1.
- **bg-secondary** `#f5f5f5` — the *only* secondary surface tier. Used for code blocks, inset testimonials, quoted callouts.
- **bg-tertiary** `#fafafa` — subtle hover ground for nav, list rows.
- **on-brand** `#000000` — black label on green CTA. The signature inversion — most green CTAs in SaaS use white text; Plain's black text on radioactive green is what makes the button look like a Linear keyboard chip.

### Brand & Accent

- **brand** `#1ad379` — radioactive lime-green CTA. The whole chromatic budget. Reserved for the primary action and the brand wordmark; never spread to backgrounds, never used for non-action emphasis.
- **brand-hover** `#0fb866` — deeper green for hover state.
- **brand-deep** `#0a8f4f` — pressed-state and "success-text" colour.
- **brand-soft** `#e8faf0` — green wash for success backgrounds.
- **brand-tint** `#b8f0d2` — green tint for status chips.

### Interactive

- **link** `#000000` — body links default to black, underlined. Plain trusts that black-with-underline reads as a link.
- **link-hover** `#1ad379` — green on hover; the only chromatic transition.
- **selected-bg** `#f5f5f5` — selected nav state.
- **disabled** `#b8b8b8` — disabled control text.

### Neutral Scale

- **black** `#000000` — primary text and headlines.
- **near-black** `#1a1a1a` — secondary heading colour.
- **slate-soft** `#5b5b5b` — captions, metadata.
- **slate-faint** `#8a8a8a` — eyebrows, helper text, placeholder.
- **slate-muted** `#b8b8b8` — disabled microcopy.

The choice to use fixed hex values (rather than opacity-based scales like Mintlify) is deliberate: Plain is high-contrast-only, and the fixed neutrals never become ambiguous against tinted surfaces.

### Surface & Borders

- **surface-0 (page)** `#ffffff` pure white.
- **surface-1 (panel)** `#f5f5f5` light grey.
- **surface-2 (subtle)** `#fafafa` very light grey.
- **border** `rgba(0, 0, 0, 0.08)` — default hairline.
- **border-strong** `rgba(0, 0, 0, 0.16)` — outlined buttons.
- **border-subtle** `rgba(0, 0, 0, 0.04)` — quietest separation.
- **border-brand** `rgba(26, 211, 121, 0.30)` — green-tinted rule for brand emphasis.

### Shadow Colors

Plain uses **almost no shadows**. The two-tier surface system (white + `#f5f5f5`) provides all the depth — there are no shadows on cards, no drop-shadow on the hero, nothing that mimics a layered UI. The only "elevation" event on the page is the green CTA, and it elevates by colour, not by shadow. When shadows do appear (modals, popovers), they're tinted with low-opacity black at 6–10%, never blue-tinted. The brand reads as completely flat.

### Semantic

- **success** — bg `#e8faf0` (green wash), text `#0a8f4f` (deep green), border `rgba(26, 211, 121, 0.30)`. Note: success uses the brand green — single-accent discipline maintained.
- **warning** — bg `#fff4e0` (warm-amber wash), text `#7a4a00`, border `rgba(122, 74, 0, 0.25)`.
- **danger** — bg `#fde6e6` (soft-red wash), text `#a82020`, border `rgba(168, 32, 32, 0.30)`.
- **info** — bg `#eef2f7` (cool-grey wash), text `#1a1a1a` near-black. Note: info reads as *quiet* (grey), not blue — Plain rejects the info-blue convention because blue would be a second brand color.

## 3. Typography Rules

### Font Family

- **Display & Body**: `"ABC Favorit", "ABC Favorit Regular", -apple-system, system-ui, sans-serif` — Dinamo Typefaces' humanist grotesk. Used at 400 / 500 / 700. The defining type choice.
- **Mono**: `"ABC Favorit Mono", ui-monospace, "SF Mono", monospace` — the matched monospace cousin from the same Favorit ecosystem. Shares the parent family's proportions, keeping page texture consistent.
- **OpenType features**: `liga` and `kern` always on. `tnum` and `zero` enabled in mono for code tabular alignment.
- **The "ABC Favorit Regular" placeholder** is loaded as a fallback during font swap, signalling careful FOUT/FOIT engineering — a brand discipline tell for design-conscious developer buyers.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| Display Hero | ABC Favorit | 96px | 400 | 0.92 | -0.025em | liga | Largest hero variant |
| Display | ABC Favorit | 80px | 400 | 0.95 | -0.02em | liga | The canonical Plain hero |
| H1 | ABC Favorit | 64px | 400 | 1.00 | -0.02em | liga | Page title |
| H2 | ABC Favorit | 48px | 400 | 1.05 | -0.015em | liga | Major section |
| H3 | ABC Favorit | 32px | 500 | 1.15 | -0.01em | — | Sub-section, weight steps to 500 |
| H4 | ABC Favorit | 22px | 500 | 1.25 | normal | — | Card heading |
| H5 | ABC Favorit | 18px | 500 | 1.35 | normal | — | Inline emphasis |
| Eyebrow | ABC Favorit Mono | 12px | 500 | 1.40 | 0.08em | uppercase | Section pre-label |
| Body Large | ABC Favorit | 20px | 400 | 1.50 | normal | — | Lede paragraph |
| Body | ABC Favorit | 16px | 400 | 1.50 | normal | — | Default paragraph copy |
| Body Small | ABC Favorit | 14px | 400 | 1.50 | normal | — | Captions, sidebars |
| Caption | ABC Favorit | 13px | 400 | 1.40 | normal | — | Image captions |
| Caption Tabular | ABC Favorit Mono | 12px | 500 | 1.40 | normal | tnum | Stats, data labels |
| Label | ABC Favorit Mono | 11px | 500 | 1.30 | uppercase | — | UI labels, mono caps |
| Button | ABC Favorit | 13px | 700 | 1.00 | 0.06em | uppercase | The all-caps CTA register |
| Pull Quote | ABC Favorit | 28px | 400 | 1.25 | -0.01em | — | Editorial pull-quote |
| Code | ABC Favorit Mono | 14px | 400 | 1.55 | normal | — | Inline + block |
| Code Micro | ABC Favorit Mono | 11px | 400 | 1.40 | normal | — | Footnote refs |

### Principles

- **Weight 400 at 80px is the brand's confidence signal.** ABC Favorit at 80px / 400 / `-0.02em` is the canonical Plain hero. Going to 600 or 700 at that size would feel shouty; 400 lets the form do the work.
- **Single-family discipline.** ABC Favorit and ABC Favorit Mono cover display, body, navigation, captions, code, eyebrows. Adding a serif or a second sans breaks the system entirely.
- **All-caps + 700 + `0.06em` for CTA copy only.** The "BOOK A DEMO" / "GET STARTED" register is reserved for primary action labels; body copy never goes all-caps.
- **Negative tracking compresses with size.** `-0.025em` at 96px, `-0.02em` at 64–80px, `-0.015em` at 48px, `-0.01em` at 28–32px, normal at 22px and below.
- **Hierarchy by size and color, not weight.** Body and headlines both default to 400; H3 steps to 500 only when the size doesn't carry enough difference.
- **Mono for eyebrows, not just code.** ABC Favorit Mono caps at 12px / `0.08em` tracking are Plain's section pre-labels — a Dinamo-signed signal of type discipline.
- **No italic in display.** Headlines never italicise. Body italics carry quoted titles only.
- **Self-hosted Favorit Variable.** The "ABC Favorit Regular" fallback shim is an engineering signal — Dinamo-licensed type, FOUT-prevented, served by the brand directly.

## 4. Component Stylings

### Buttons

**Primary (Radioactive Green)**
- Background: `#1ad379`. Text: `#000000`, ABC Favorit 700 / 13px / uppercase / `0.06em` tracking.
- Padding: `14px 24px`. Radius: `6px` — distinctly *not* a pill. Plain's CTA shape is a soft rectangle, distinguishing it from Linear's pill chips.
- Hover: bg → `#0fb866` (deeper green); transition `180ms ease-standard`. No lift, no scale.
- Active: bg → `#0a8f4f`.
- Use: Primary CTA — *BOOK A DEMO, GET STARTED, CONTACT SALES.* The whole brand budget — this is the only place radioactive green appears as a fill.

**Secondary (Outlined)**
- Background: transparent. Text: `#000000`. Border: `1px solid rgba(0, 0, 0, 0.16)`. Radius: `6px`.
- Same padding (14×24), font (ABC Favorit 700 / 13px / uppercase / 0.06em).
- Hover: bg → `rgba(0, 0, 0, 0.04)`.
- Use: Twin to primary — *WATCH THE DEMO, READ THE DOCS.* All-caps maintained.

**Black (Alternate Primary)**
- Background: `#000000`. Text: `#ffffff`. No border. 6px radius.
- Same shape and font as primary.
- Hover: bg → `#1a1a1a`.
- Use: Alternate primary on pages where the green is already used elsewhere (e.g. green logo lockup, green status indicator). Rare.

**Ghost (Quiet)**
- Background: transparent. Text: `#000000`. No border.
- Padding: `8px 12px`. ABC Favorit 500 / 14px (sentence case, not uppercase).
- Hover: text → `#1ad379` green.
- Use: Nav links, footer secondary actions.

### Cards

**Default Card (Flat)**
- Background: `#ffffff`. Border: `1px solid rgba(0, 0, 0, 0.08)`. Radius: `8px`. Padding: `24px`.
- Shadow: none.
- Hover: border → `rgba(0, 0, 0, 0.16)`; transition `180ms`.
- Use: Feature tile, capability rail, integration card.

**Grey Inset Card**
- Background: `#f5f5f5`. Border: none. Radius: `8px`. Padding: `32px`.
- Use: Testimonial block, code-tour container, quoted callout.

### Badges, Tags, Pills

**Eyebrow Label** — no chrome, just type. ABC Favorit Mono 500 / 12px / uppercase / 0.08em tracking, colour `#5b5b5b`. Sits above section headlines.

**Status Pill (Green)** — bg `#e8faf0`, text `#0a8f4f`, radius `4px`, padding `4px 10px`. Active / live / online status.

**Status Pill (Neutral)** — bg `#f5f5f5`, text `#1a1a1a`, radius `4px`, padding `4px 10px`. Default / inactive status.

### Inputs / Forms

- Background: `#ffffff`. Border: `1px solid rgba(0, 0, 0, 0.16)`. Radius: `6px`. Padding: `12px 14px`.
- Font: ABC Favorit 400 / 16px. Placeholder: `#8a8a8a`.
- Focus: `0 0 0 2px #1ad379` green ring, border → `#000000`.
- Error: border → `#a82020`, ring → `rgba(168, 32, 32, 0.30)`.
- Helper: caption 13px slate-soft below.

### Navigation

- Header height `64px`. Background `#ffffff` (becomes `rgba(255,255,255,0.85)` blur on scroll).
- Logo: Plain wordmark, pure black, no decorative mark.
- Nav links: ABC Favorit 500 / 14px, colour `#000000`, padding `8px 12px`. Hover → `#1ad379` green.
- Right-side CTA: ghost "SIGN IN" + primary green pill rect "BOOK A DEMO". Both all-caps, both ABC Favorit 700.
- Mobile: full-screen sheet, links stack at 28px / ABC Favorit 500 (sentence case for legibility on mobile).

### Optional Components

**Pull Quote** — ABC Favorit 28px / 400 / -0.01em tracking, near-black `#1a1a1a` text, with a 4px green vertical rule on the left edge.

**Footnote** — ABC Favorit 13px / 400, slate-soft; sits on a thin border-subtle rule.

**Code Block** — ABC Favorit Mono 14px, bg `#f5f5f5` light grey, radius `8px`, padding `16px 20px`, no border (the grey fill is the separation). Inline code: same font, bg `rgba(0, 0, 0, 0.06)`, padding `2px 6px`, radius `4px`. Syntax highlighting uses muted black + green + warm-amber tokens.

**Tooltip** — bg `#000000`, text `#ffffff`, radius `4px`, padding `8px 12px`, font `13px / ABC Favorit 500`.

**Modal** — bg `#ffffff`, radius `12px`, shadow `rgba(0, 0, 0, 0.10) 0 16px 40px -16px`, max-width `560px`. Black backdrop overlay at 50% opacity.

## 5. Layout Principles

### Spacing System

- **Base unit**: 4px.
- **Scale**: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160 — Fibonacci-adjacent.
- **Density observation**: Plain is *generously spaced*. There is more whitespace than content above the fold, and that ratio is preserved as the user scrolls. Headlines float in 96–128px of margin; body paragraphs sit on 24px line gaps.

### Grid & Container

- **Page max width**: `1200px` — narrower than Mintlify's 1280, signalling content-density restraint.
- **Site gutter**: `clamp(24px, 5vw, 64px)`.
- **Grid**: 12 columns with 24px gutters. Hero blocks span full width; capability rails span 4 columns; sidebars span 3.
- **Hero treatment**: full-bleed white, 80px headline anchored left, single all-caps green CTA below.

### Whitespace Philosophy

The page breathes — there is more whitespace than content above the fold, and that ratio is preserved as the user scrolls. Section gutters run **96–128px** between major editorial blocks; minor blocks sit on 64–80px gaps; intra-section spacing uses 24–48px. The deliberate emptiness reinforces the brand's "respect your attention" pitch.

### Section Cadence

- Hero (white, 80px hero) → Capability Rail (white card grid, hairline borders) → Code-Tour Block (`#f5f5f5` inset with mono code) → Testimonials (`#f5f5f5` inset with pull-quotes) → Pricing (white card grid, green emphasis on featured tier) → Footer (white ground, slate-soft micro-text).
- The grey inset blocks alternate with white, providing tonal rhythm without breaking into dark bands or color zones.
- White-on-white sections separated by 1px border-subtle hairlines or by spacing alone.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| Micro | 2px | Decorative dividers, inline chip corners |
| Standard (sm) | 6px | Buttons, inputs, dropdowns — the dominant `--radius--button` |
| Comfortable (md) | 6px | Same as sm — Plain doesn't differentiate |
| Relaxed (lg) | 8px | Cards, code blocks |
| Featured (xl) | 12px | Modals, popovers |
| Pill | 9999px | Reserved for status chips and the rare badge |

Plain's signature shape is the **6px button** — distinctly *not* a pill. The system favours soft-rectangle over pill, distinguishing it from Linear's keyboard-chip aesthetic and the Vercel/Mintlify pill convention. There is no `0px` sharp-edge except section dividers. Cards run 8px. The pill (9999px) is reserved for status chips and the rare badge — never the primary action.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat — no shadow | Default page surface, hero, body sections |
| 1 | Surface tier (`#f5f5f5` on white) | Inset cards, code blocks |
| 2 | Hairline border (`rgba(0, 0, 0, 0.08)`) | Default cards |
| 3 | `rgba(0, 0, 0, 0.06) 0 4px 12px` | Hover-lifted cards (rare) |
| 4 | `rgba(0, 0, 0, 0.08) 0 12px 32px -8px` | Overlay menus, popovers |
| 5 | `rgba(0, 0, 0, 0.10) 0 16px 40px -16px` | Modals |

### Shadow Philosophy

Plain's depth language is **completely flat**. Cards lift off white by hairline border alone (`rgba(0, 0, 0, 0.08)`); inset blocks lift by switching to the `#f5f5f5` surface tier. There are no shadows on cards. The only "elevation" event on the page is the green CTA, and it elevates by colour, not by shadow. When shadows do appear (modals, popovers), they're tinted with low-opacity black, never blue-tinted. The brand reads as paper-flat — the same reason heavy drop-shadows would feel wrong: Plain's pitch is "we don't add what you don't need," and a layered hero would betray it.

## 8. Interaction & Motion

### Easing Curves

- `ease-standard`: `cubic-bezier(0.4, 0, 0.2, 1)` — Material-style; default for hover, focus, color transitions.
- `ease-emphasized`: `cubic-bezier(0.2, 0, 0, 1)` — punchier exit; modal enter, hero reveal.
- `ease-out`: `cubic-bezier(0.0, 0, 0.2, 1)` — gentle settle; dropdown reveal.

### Duration Buckets

- **Fast (100ms)** — colour transitions, focus rings, link hovers.
- **Standard (180ms)** — button hover, card hover, dropdown reveal.
- **Slow (300ms)** — modal enter/exit, page section fade-in.
- **Page (400ms)** — route transitions, hero reveal sequences.

### Per-Component Micro-States

- **Button hover (green)**: bg `#1ad379` → `#0fb866`; transition `180ms ease-standard`. No lift, no scale, no shadow.
- **Button hover (outlined)**: bg transparent → `rgba(0, 0, 0, 0.04)`.
- **Card hover**: border deepens from `rgba(0, 0, 0, 0.08)` to `rgba(0, 0, 0, 0.16)`; no shadow change.
- **Link hover**: colour `#000000` → `#1ad379` over 100ms. Underline thickness stays at 1px.
- **Input focus**: 2px green ring fades in over 100ms; border darkens to pure black.

### Page Transitions

Hero text fades in over 400ms with 16px translate-up; below-fold sections use `IntersectionObserver` to fade in at 80% viewport, 300ms duration, no translate. The brand does not use scroll-pinned animations.

### Reduced Motion

`@media (prefers-reduced-motion: reduce)` — all transitions become opacity-only, durations halved. Translate animations are disabled entirely; scroll-linked reveals snap to final state.

## 9. Accessibility & A11y

### Contrast Pairs

- **`#000000` text on `#ffffff` bg**: 21.0:1 — AAA at all sizes (theoretical maximum).
- **`#5b5b5b` text on `#ffffff` bg**: 7.4:1 — AAA at body sizes.
- **`#8a8a8a` text on `#ffffff` bg**: 4.5:1 — AA at large sizes only (≥18px or ≥14px bold).
- **`#000000` text on `#1ad379` button**: 9.5:1 — AAA at body sizes; safe for buttons.
- **`#0a8f4f` text on `#e8faf0` chip**: 6.8:1 — AAA.

The black-on-radioactive-green CTA is unusual but contrast-safe — most green CTAs in SaaS use white text, which on `#1ad379` would be only 2.4:1 (failing AA). Plain's choice of black-on-green is *both* the brand signature and the accessibility-correct decision.

### Focus Indicators

- Default focus ring: `0 0 0 2px #1ad379` green with 2px offset on white pages.
- On dark surfaces (rare): `0 0 0 2px #ffffff`.
- All interactive surfaces must have a visible focus state — no `outline: none` without a replacement.

### ARIA Patterns

- **Navigation**: `<nav aria-label="Main">` with skip-link to main content.
- **Disclosure**: `<button aria-expanded aria-controls>` for collapsible sections.
- **Dialog**: `role="dialog" aria-modal="true" aria-labelledby` with focus trap and Esc-to-close.
- **Combobox**: `role="combobox" aria-expanded aria-autocomplete="list"` for any inline search/select.
- **Live regions**: `aria-live="polite"` for form validation messages.

### Keyboard Navigation

- Tab order matches visual flow: skip-link → nav → hero CTA → main content → footer.
- All buttons, links, inputs reachable via Tab; modals trap focus inside until dismissed.
- `Esc` closes modals and the mobile menu sheet.
- Arrow keys navigate within tab groups.

### Screen Reader Hints

- All-caps button copy is set with `text-transform: uppercase` (CSS), not capital letters in markup, so screen readers announce the natural-case word ("Book a demo" not "B-O-O-K-A-D-E-M-O").
- Icon-only buttons have `aria-label`.
- The Plain wordmark uses `aria-label="Plain"`.

### Reduced Motion

Honoured via the global media query. All translate/scale animations become opacity-only; durations halve.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Use |
|---|---|---|
| Mobile | < 640px | Single column, full-bleed sections, 40px H1 |
| Tablet | 640–1024px | 2-column rails, 56px H1 |
| Desktop | 1024–1200px | Full 12-col grid, 80px hero, 680px prose |
| Wide | 1200–1440px | Site max width hits |
| Ultra | > 1440px | Page locks to 1200, gutters expand |

### Touch Targets

- Minimum tap target: 44×44px (WCAG AAA).
- Buttons: 48px minimum height on mobile (14px vertical padding × 2 + line-height).
- Nav link tap area: 44×44px even when visual padding is smaller.

### Collapsing Strategy

- **Header**: full nav at ≥1024px; hamburger sheet below.
- **Hero**: 96px display → 80px hero → 64px → 48px → 40px across breakpoints.
- **Capability grid**: 4-up at desktop, 2-up at tablet, 1-up at mobile.
- **Body width**: 680px → fluid 90vw at mobile.
- **Section spacing**: 128px → 96px → 64px across sizes.
- **All-caps CTA**: maintains uppercase + 0.06em tracking on mobile (font size scales down to 12px to compensate).

### Image Behavior

- Capability illustrations use `srcset` with 1x/2x/3x.
- Browser-screenshot imagery uses `aspect-ratio` to prevent layout shift.
- Lazy-loading on below-fold images; eager on hero.

### Container Queries

Used inside capability cards to switch icon position when card width crosses 280px (icon-left vs. icon-top).

## 11. Content & Voice

### Tone

**Restrained, technical, deliberately confident.** Plain writes like a product team that has decided their value proposition is "fewer features, deeper craft." Headlines pose plain claims ("Build support your way"); subheads explain what the product does without selling around it; product copy uses developer vocabulary ("API," "webhooks," "integrations") without code-bro hostility. The voice is the inverse of Intercom's friendly-cute register.

### Microcopy Patterns

- **Button verbs (all-caps)**: "BOOK A DEMO," "GET STARTED," "CONTACT SALES," "WATCH THE DEMO," "READ THE DOCS." The all-caps register is reserved for primary CTAs only.
- **Button verbs (sentence case, ghost)**: "Sign in," "Learn more," "View pricing." Used for nav and quiet third actions.
- **Error messages**: "We couldn't reach the API. Check your connection and try again." Specific, calm, no shame.
- **Success confirmations**: "Saved." "Thanks — we'll be in touch within a day." Brief, accountable.
- **Loading states**: "Loading…" "Connecting…" — context-specific where possible.

### Empty States

What they say: explain the state and offer the next step. *"No conversations yet. Connect a Slack workspace or import from your existing tool to get started."*
What they don't say: "Oops!", "Whoops!", any apologetic exclamation. Empty states are normal, not failures.

### CTA Verb Conventions

- Primary on hero: "BOOK A DEMO," "GET STARTED," "CONTACT SALES"
- Secondary: "WATCH THE DEMO," "READ THE DOCS"
- Footer: "Read our blog," "Browse changelog," "View pricing," "Contact us"

The all-caps register is the brand's deliberate B2B-enterprise signal; it sets Plain apart from Notion/Linear/Vercel's sentence-case register. Plain doesn't trade on consumer-friendly approachability — it trades on enterprise-developer credibility.

## 12. Dark Mode & Theming

**Light-only — no dark variant offered on the marketing surface.** Plain's white canvas, black text, and radioactive green are calibrated for white only — the green `#1ad379` would clip and look neon on a dark canvas, and the brand's black-on-green inversion only works against a high-contrast light background. A dark mode would require re-keying the entire palette, and the current chromatic discipline (pure white + black + one green) is the brand's defining choice.

The product UI (Plain's customer-support workspace) handles its own theming separately and does ship a dark variant for in-product use; that variant is documented at the product layer, not on the marketing surface. The marketing site at `plain.com` is intentionally light-only across all viewports and times of day.

If a downstream surface ever needs a dark companion, the rule would be: keep the green at full saturation, swap white for `#0f0f0f` (warm-deep), lift cards to `#1a1a1a`, and shift on-brand text from black to white for the dark canvas — but this is not currently shipped.

## 13. Lineage & Influences

Plain's design DNA is **Linear-restraint applied to customer-support tooling**. The white-canvas, single-accent, type-led layout quotes Linear's marketing chrome directly, then ports it from dark to light and from indigo to radioactive green. Where Linear runs near-black canvas + Inter Variable + indigo accent, Plain runs pure white + ABC Favorit + lime-green — same vocabulary, different polarity, same audience.

What it inherits: Linear's restrained-sans-plus-single-accent vocabulary, Linear's weight-400 headlines (rare in SaaS), Linear's "minimalism as proof of product confidence" pitch. What it borrows from contemporaries: Vercel's white-canvas SaaS-sibling register, Cal.com's "the modern reference for type does the work, no illustration" template, Stripe's hairline-border restraint. What it rejects: the Intercom-style colorful-illustrated-cute register that dominates the support-tool category — which is the entire visual differentiation pitch.

**Named influences:**

- **Dinamo Typefaces (ABC Favorit)** — The grotesk on the entire site; a design-conscious type choice that signals craft to the Linear-influenced audience. *https://abcdinamo.com/typefaces/favorit*
- **Linear** — Restrained-sans-plus-single-accent vocabulary; weight-400 headlines; minimalism as proof of product confidence. *https://linear.app*
- **Vercel** — White-canvas SaaS sibling; the modern reference for "type does the work, no illustration." *https://vercel.com*
- **Cal.com** — Adjacent precedent for design-conscious B2B SaaS with single-accent discipline. *https://cal.com*
- **Intercom** — Direct competitor; Plain positions itself as the cleaner, more developer-shaped alternative. The visual differentiation is the entire pitch. *https://intercom.com*
- **Stripe** — Hairline-border restraint, single-accent confidence on a neutral canvas. *https://stripe.com*
- **The Plain in-house brand team** — Discipline of weight 400 at 80px, all-caps CTA register, single-family commitment.

## 14. Do's and Don'ts

### Do

- **Do** commit to a single licensed grotesk for the entire surface. ABC Favorit (or Söhne, or Söhne Mono) on every element is the move; mixing families breaks the discipline.
- **Do** treat the brand color as a single radioactive event. One CTA, one brand wordmark — that's the whole chromatic budget.
- **Do** scale the headline aggressively (80px+) at weight 400. The type carries it; weight 600/700 at that size would feel shouty.
- **Do** use all-caps + 700 + `0.06em` letter-spacing for primary CTA copy. The "BOOK A DEMO" register is the brand's enterprise-B2B signal.
- **Do** keep black text on the green button. White-on-green would fail contrast and break the Linear-keyboard-chip aesthetic.
- **Do** use 6px button radius — not the SaaS-pill convention. The soft-rectangle shape is part of the brand.
- **Do** use the `#f5f5f5` surface tier for inset blocks. It's the only secondary surface — keep it disciplined.
- **Do** ship hairline borders at 8% black for cards. No shadow, no warm-neutral fill — flat is the depth language.
- **Do** use sentence case for non-CTA copy (nav, body, captions). Reserve all-caps for the CTA register only.
- **Do** prefer flat depth (hairline borders, surface tier swaps) over layered elevation.

### Don't

- **Don't** add gradients or hero illustrations. Plain's restraint is the differentiator.
- **Don't** use system Inter as a Favorit substitute — the humanist details (the curved lowercase `g`, the angled stroke endings) are what make the page feel licensed and specific.
- **Don't** introduce a second accent color. The green is the budget; info uses cool-grey, not blue.
- **Don't** spread the green to backgrounds or non-action emphasis. Reserve it for the CTA fill, brand wordmark, and success bg.
- **Don't** drop the all-caps + `0.06em` tracking from CTAs. Going to sentence-case erases the enterprise-B2B differentiation.
- **Don't** use a pill (9999px) on action buttons. The 6px soft-rectangle is the brand shape.
- **Don't** apply heavy drop-shadows. Plain's depth language is hairline borders and surface tier swaps.
- **Don't** ship a warm-neutral or cream canvas. Pure white `#ffffff` is the entry ticket.
- **Don't** introduce a serif or a second sans. The Favorit ecosystem is the system.
- **Don't** crowd the page. The whitespace ratio is part of the brand.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #ffffff
bg-secondary: #f5f5f5
text: #000000
text-soft: #5b5b5b
brand-green: #1ad379
brand-green-hover: #0fb866
on-brand: #000000 (black on green is the signature)
cta-bg: #1ad379
cta-text: #000000
border: rgba(0, 0, 0, 0.08)
border-strong: rgba(0, 0, 0, 0.16)
```

### Example Component Prompts

1. **"Create a hero in Plain style — pure white `#ffffff` canvas, 80px headline in ABC Favorit weight 400 with `-0.02em` tracking, 20px Favorit body in pure black, single primary CTA in radioactive green `#1ad379` with all-caps black label `'BOOK A DEMO'` (Favorit 700 / 13px / `0.06em` tracking), 6px radius, no gradient, no animation. Reading column capped at 680px."**

2. **"Design a capability card in Plain style — white `#ffffff` background, 8px radius, 1px `rgba(0, 0, 0, 0.08)` hairline border, 24px interior padding, 22px ABC Favorit 500 heading, 16px Favorit 400 body in pure black, no shadow, hover deepens border to 0.16 opacity."**

3. **"Build an inset code-tour block — `#f5f5f5` light-grey background, 8px radius, no border, 32px interior padding, ABC Favorit Mono code at 14px in pure black, single mono caption above at 12px / 0.08em / `#5b5b5b`."**

4. **"Compose a pricing card with featured tier — white background, 8px radius, hairline border. Featured tier replaces border with green `#1ad379` 2px outline + green `BOOK A DEMO` button at the bottom. Other tiers use outlined secondary buttons (transparent + 1px black 0.16 border, all-caps copy)."**

5. **"Render an eyebrow + section header pair — ABC Favorit Mono caps at 12px / `0.08em` tracking / `#5b5b5b`, 8px gap, then ABC Favorit 48px / 400 / `-0.015em` in pure black on white."**

6. **"Create the primary nav — 64px header height, white `#ffffff` background (becomes white-blur on scroll), Plain wordmark in pure black, links 14px Favorit 500 (sentence case) with green-on-hover, right-aligned ghost 'Sign in' + green pill rect 'BOOK A DEMO' (all-caps, 6px radius, black label) pair."**

### Iteration Guide

1. **Start with pure white, not warm.** If the bg is `#fafafa` or warmer, you've drifted toward Mintlify territory. `#ffffff` is the entry ticket.
2. **Switch to ABC Favorit at weight 400.** Inter or system-ui at the same size collapses the brand into Vercel/Mintlify territory. The Dinamo grotesk is the differentiator.
3. **Push the headline to 80px.** Plain's confidence signal is large size at light weight — 48–64px reads as Vercel/Mintlify; 80px+ at weight 400 reads as Plain.
4. **Switch the CTA to all-caps.** "Book a Demo" → "BOOK A DEMO" with `0.06em` tracking, weight 700, 13px. The register flip is the enterprise-B2B signal.
5. **Use black text on the green button.** White-on-green is the SaaS default; black-on-green is the Plain-specific inversion that looks like a Linear keyboard chip.
6. **Strip everything else.** Remove gradients, illustrations, mascots, second accent colours, drop-shadows, off-white surfaces. The minimalism is the brand.
7. **Drop the shadows; tier the surface.** Replace box-shadows with `#f5f5f5` inset blocks or hairline borders.
8. **Calm the verbs in non-CTA copy, but keep CTAs all-caps.** "Learn more" stays sentence case; "READ THE DOCS" goes all-caps. The register split is part of the system.
