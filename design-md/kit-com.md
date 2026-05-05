---
name: Kit
tagline: A cream newsletter canvas with a custom KitSans display, a Libre Franklin secondary, and a pastel-rainbow chip set — the editorial register reborn from ConvertKit.
author: webdesignhot
source_url: https://kit.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [saas, media, social]
tags: [light, editorial, sans, spacious, warm, soft, multi-theme]
preview_swatch: ['#f9f7f4', '#1e1e1e', '#44b1ff']
related: [stripe, notion, linear]
description: 'Kit (formerly ConvertKit) is the editorial newsletter platform reborn with a publication-grade chrome. The canvas is a warm cream `#f9f7f4` and a slightly deeper `#f2efe9` for inset zones; display copy uses the custom **KitSansFont** at 80px, weight 500, and the secondary chrome runs **Libre Franklin**. The brand''s chromatic identity is a pastel-rainbow chip set — sky `#bce1fa`, peach `#ffd0ad`, mint `#b9e9c5`, lilac `#e7c9f1`, gold `#f2ba41` — anchored by a single confident sky-blue CTA `#44b1ff`. The result reads more like a literary magazine than an email tool. Where Substack runs orange + serif and Mailchimp runs yellow + cute-illustration, Kit splits the difference: a custom chunky-humanist display sans on cream, a sky-blue Stripe-discipline anchor, and a pastel chip set that signals creator-warmth without joining the bubblegum-illustration crowd. The 2024 ConvertKit-to-Kit rebrand traded a generic SaaS chrome for a magazine-grade editorial system; the chunky 80px headline at weight 500 with line-height < 1.0 is the brand''s typographic signature.'

colors:
  # Primary
  bg: '#f9f7f4'                          # warm cream canvas, ecru not white
  bg-alt: '#f2efe9'                      # deeper paper inset for feature bands
  bg-tertiary: '#ebe6dd'                 # deepest cream for emphasis
  surface: '#ffffff'                     # raised paper card
  surface-elev: '#fffdf9'                # subtle lift over cream
  text: '#1e1e1e'                        # near-black display copy
  text-strong: '#0f0f0f'                 # rare deepest black for hero
  text-medium: '#000000cc'               # 80% black caption
  text-soft: '#00000099'                 # 60% black metadata
  text-faint: '#00000066'                # 40% black helper
  text-muted: '#0000004d'                # 30% black disabled
  # Brand
  brand: '#44b1ff'                       # signature sky-blue CTA
  brand-soft: '#44b1ffd9'                # 85% sky for hover
  brand-deep: '#2c8fd6'                  # pressed-state sky
  brand-tint: '#bce1fa'                  # sky tint chip
  on-brand: '#1e1e1e'                    # near-black label on sky
  # Pastel chip set (the editorial palette)
  accent-sky: '#bce1fa'                  # sky chip — audience pillar
  accent-sky-deep: '#a2d1f1'             # deeper sky variant
  accent-peach: '#ffd0ad'                # peach chip — tools pillar
  accent-mint: '#b9e9c5'                 # mint chip — growth pillar
  accent-lilac: '#e7c9f1'                # lilac chip — community pillar
  accent-gold: '#f2ba41'                 # gold pricing/highlight
  accent-gold-soft: '#fce8b8'            # gold wash background
  accent-rose: '#f7c4cd'                 # rose chip (rarer)
  # Interactive
  link: '#44b1ff'                        # sky link in body copy
  link-hover: '#2c8fd6'                  # deeper sky on hover
  selected-bg: '#f2efe9'                 # selected nav state
  disabled: '#0000004d'
  # Borders
  border: '#0000000f'                    # ~6% black hairline
  border-strong: '#00000019'             # ~10% black for emphasis
  border-subtle: '#00000008'             # ~3% black quietest
  border-brand: 'rgba(68, 177, 255, 0.30)' # sky-tinted hairline
  # Semantic
  success-bg: '#b9e9c5'                  # mint chip
  success-text: '#1f4d2c'
  warning-bg: '#fce8b8'                  # gold-soft wash
  warning-text: '#7a5a00'
  danger-bg: '#f7c4cd'                   # rose chip
  danger-text: '#a8113a'
  info-bg: '#bce1fa'                     # sky chip
  info-text: '#1a3a7a'

typography:
  display:
    family: 'KitSansFont, "KitSansFont Fallback", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 700]
    opentype-features: ['liga', 'kern']
  body:
    family: '"Libre Franklin", "Libre Franklin Fallback", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    weights: [400, 500, 600]
    opentype-features: ['liga', 'kern']
  serif:
    family: '"Libre Caslon Text", Georgia, "Times New Roman", serif'
    weights: [400]
    opentype-features: ['liga', 'kern', 'onum']
  mono:
    family: 'ui-monospace, "SF Mono", "JetBrains Mono", monospace'
    weights: [400]
  scale:
    display-hero:    { size: 96, weight: 500, lineHeight: 0.92, tracking: '-0.01em', family: display }
    display:         { size: 80, weight: 500, lineHeight: 0.95, tracking: '0', family: display }
    h1:              { size: 64, weight: 500, lineHeight: 0.98, tracking: '0', family: display }
    h2:              { size: 48, weight: 500, lineHeight: 1.0,  tracking: '-0.01em', family: display }
    h3:              { size: 28, weight: 500, lineHeight: 1.15, tracking: '0', family: display }
    h4:              { size: 22, weight: 500, lineHeight: 1.25, family: display }
    h5:              { size: 18, weight: 600, lineHeight: 1.35, family: body }
    eyebrow:         { size: 12, weight: 600, lineHeight: 1.4,  tracking: '0.06em', family: body, transform: uppercase }
    body-large:      { size: 20, weight: 400, lineHeight: 1.5,  family: body }
    body:            { size: 18, weight: 400, lineHeight: 1.5,  family: body }
    body-small:      { size: 16, weight: 400, lineHeight: 1.5,  family: body }
    caption:         { size: 14, weight: 400, lineHeight: 1.4,  family: body }
    caption-tabular: { size: 13, weight: 500, lineHeight: 1.4,  family: mono }
    label:           { size: 12, weight: 600, lineHeight: 1.3,  family: body }
    button:          { size: 15, weight: 600, lineHeight: 1.0,  family: body }
    code:            { size: 14, weight: 400, lineHeight: 1.55, family: mono }
    code-micro:      { size: 12, weight: 400, lineHeight: 1.4,  family: mono }
    quote-pull:      { size: 28, weight: 400, lineHeight: 1.3,  family: serif, style: italic }

radius:
  xs: 4
  sm: 6
  md: 8
  lg: 12
  xl: 16
  card: 16
  pill: 9999

spacing:
  base: 4
  scale: [1, 2, 4, 6, 8, 12, 16, 20, 24, 32, 48, 64, 80, 96, 128, 160]

layout:
  page-width: 1320
  prose-width: 680
  site-gutter: 'clamp(24px, 5vw, 72px)'
  header-height: 72
  grid-columns: 12
  section-rhythm: '96-128px'

components:
  button-primary:
    background: '#44b1ff'
    text: '#1e1e1e'
    padding: '14px 28px'
    radius: 9999
    border: 'none'
    font: 'Libre Franklin 600 / 15px'
    hover-bg: '#2c8fd6'
    hover-text: '#ffffff'
    active-bg: '#1f6ca8'
    use: 'Primary action — sky-blue pill with near-black label, the Stripe-discipline anchor for the entire palette'
  button-secondary:
    background: 'transparent'
    text: '#1e1e1e'
    padding: '14px 28px'
    radius: 9999
    border: '1px solid #00000019'
    font: 'Libre Franklin 600 / 15px'
    hover-bg: '#00000008'
    use: 'Outlined twin — same pill shape, no fill'
  button-dark:
    background: '#1e1e1e'
    text: '#f9f7f4'
    padding: '14px 28px'
    radius: 9999
    font: 'Libre Franklin 600 / 15px'
    hover-bg: '#0f0f0f'
    use: 'Dark CTA — used on cream-light sections where the sky would feel out of place'
  button-ghost:
    background: 'transparent'
    text: '#1e1e1e'
    padding: '8px 14px'
    font: 'Libre Franklin 500 / 15px'
    hover-text: '#44b1ff'
    use: 'Quiet third action — nav links, footer, repeated CTAs'
  card:
    background: '#ffffff'
    border: '1px solid #0000000f'
    radius: 16
    padding: '32px'
    use: 'Default editorial card — white paper lift on cream'
  card-paper:
    background: '#f2efe9'
    border: '1px solid #0000000f'
    radius: 16
    padding: '32px'
    use: 'Deeper paper inset for testimonials, feature bands'
  card-pastel:
    background: 'var(--accent)'
    border: 'none'
    radius: 16
    padding: '40px 32px'
    use: 'Pastel chip card — peach for tools, mint for growth, sky for audience, lilac for community, gold for pricing'
  input:
    background: '#ffffff'
    border: '1px solid #00000019'
    radius: 9999
    padding: '14px 24px'
    font: 'Libre Franklin 400 / 16px'
    placeholder-color: '#00000066'
    focus-ring: '0 0 0 2px #44b1ff'
    use: 'Email-capture input — wide pill, often paired with sky CTA hard-right'
  input-rect:
    background: '#ffffff'
    border: '1px solid #00000019'
    radius: 8
    padding: '12px 16px'
    font: 'Libre Franklin 400 / 16px'
    placeholder-color: '#00000066'
    focus-ring: '0 0 0 2px #44b1ff'
    use: 'Form fields, search — rectangular variant'
  badge-eyebrow:
    background: 'transparent'
    text: '#00000099'
    padding: '0'
    font: 'Libre Franklin 600 / 12px / uppercase / 0.06em'
    use: 'Section eyebrow — no chrome, just type'
  pill-pastel:
    background: 'var(--accent)'
    text: '#1e1e1e'
    padding: '6px 14px'
    radius: 9999
    font: 'Libre Franklin 600 / 13px'
    use: 'Feature category chip — peach/mint/sky/lilac/gold backgrounds with near-black text'
  nav-link:
    background: 'transparent'
    text: '#1e1e1e'
    padding: '8px 14px'
    font: 'Libre Franklin 500 / 15px'
    hover-text: '#44b1ff'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-editorial: 'cubic-bezier(0.32, 0.72, 0, 1)'
  duration-fast: 120
  duration-standard: 220
  duration-slow: 320
  duration-page: 440
  reduced-motion: 'respects prefers-reduced-motion: reduce — all transitions become opacity-only, durations halved'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1320

shadows:
  none: 'none'
  ambient: 'rgba(30, 30, 30, 0.04) 0 1px 3px'
  standard: 'rgba(30, 30, 30, 0.06) 0 4px 12px'
  paper: 'rgba(30, 30, 30, 0.06) 0 12px 24px -8px'
  elevated: 'rgba(30, 30, 30, 0.08) 0 24px 48px -16px'
  ring: '0 0 0 2px #44b1ff'

accessibility:
  contrast-text-on-bg: 16.4                # #1e1e1e on #f9f7f4 — AAA at all sizes
  contrast-text-on-brand: 8.9              # #1e1e1e on #44b1ff — AAA at body sizes
  contrast-text-soft-on-bg: 7.8            # 60% black on cream — AAA
  contrast-on-pastel-mint: 12.1            # #1e1e1e on #b9e9c5 — AAA (pastel chips with near-black text)
  focus-ring: '2px solid #44b1ff with 2px offset'
  reduced-motion-honored: true
  keyboard-nav: 'visible focus on every interactive surface; tab order matches visual'
  prose-line-length: 'capped at 680px for editorial readability'

dark-mode: null                            # marketing surface is light-only; the cream + pastel system is light-only by design
---

## 1. Visual Theme & Atmosphere

Kit's site reads like a literary newsletter that learned to sell. The canvas is a warm cream `#f9f7f4` (ecru, not white), and the display face is a custom **KitSansFont** set at 80px weight 500 on a 76px line-height. Headlines hit chunky-but-humanist — closer to a magazine title-card than a SaaS hero. Body copy switches register to **Libre Franklin**, the Google open-source workhorse, at 18px on 27px. The brand's chromatic identity is the **pastel-rainbow chip set** — peach, mint, sky, lilac, gold — used to mark feature categories, audience pillars, and creator-success stories. Anchoring it all is a single confident sky-blue `#44b1ff` for the primary CTA and link layer. The whole composition reads as the natural successor to the editorial-newsletter era Substack and Ghost opened.

What makes Kit visually distinctive is the *position between* — Kit isn't Substack (which leans full-serif and ink-dense), and it isn't Mailchimp (which leans bubblegum-illustrated and yellow). Kit takes Substack's editorial register, removes the serif from the chrome (relegating it to pull-quotes only), and adds a pastel chip set that signals creator-warmth without slipping into cute-illustration territory. The chunky 80px humanist display + the Stripe-discipline single-blue + the pastel chip set = a publication-grade editorial system that happens to sell email infrastructure.

The third register is the **pastel chip choreography**. Kit uses peach for tools, mint for growth, sky for audience, lilac for community, gold for pricing — and the choreography is *sequenced*. Within a section, only one or two pastels appear; the rainbow is never stacked. A feature ladder might run peach → mint → sky vertically, but never peach + mint + lilac in a single module. This sequencing keeps the palette feeling intentional, like a magazine spread where each spread gets its own colourway, rather than a Mailchimp-style decorative random-pastel.

Atmospheric vocabulary that captures the feeling: *cream-paper, ecru-canvas, magazine-titlecard, chunky-humanist, KitSans-signature, pastel-sequenced, sky-anchor, editorial-newsletter, Libre-Franklin-workhorse, line-height-tight, creator-warmth, publication-grade.* Every surface lands like a Substack publication that hired a magazine art director.

**Key Characteristics**
- Cream `#f9f7f4` canvas — ecru, not white, never pure white
- Custom **KitSansFont** display — chunky humanist at 80px weight 500
- Tight line-height (< 1.0) on hero — magazine title-card stack
- **Libre Franklin** body at 18px / 1.5 — Google workhorse for crisp body copy
- Single sky-blue `#44b1ff` for primary CTA — Stripe-discipline anchor
- Pastel chip palette — sky, peach, mint, lilac, gold — sequenced, not stacked
- Each pastel maps to a content pillar (audience / tools / growth / community / pricing)
- 16px card radius — soft editorial corners
- Pill (9999px) on email-capture inputs and primary CTAs
- Libre Caslon Text serif — used sparingly in pull-quotes only
- Deeper paper `#f2efe9` for feature bands — warm tonal layering
- 96–128px section gutters — magazine-pace cadence

## 2. Color Palette & Roles

### Primary

- **bg** `#f9f7f4` — warm cream canvas, ecru. Never pure white. Defining ground.
- **text** `#1e1e1e` — near-black display copy; warmer than `#000` so type doesn't fight cream.
- **bg-alt** `#f2efe9` — deeper paper for inset zones, feature bands, pricing emphasis.
- **bg-tertiary** `#ebe6dd` — deepest cream for testimonial blocks.
- **surface** `#ffffff` — raised paper card lift over cream.

### Brand & Accent

- **brand** `#44b1ff` — signature sky-blue. Primary CTA fill, body links, brand wordmark accent.
- **brand-soft** `#44b1ffd9` — 85% sky for hover-soft.
- **brand-deep** `#2c8fd6` — pressed-state sky.
- **brand-tint** `#bce1fa` — sky tint for chips (also doubles as `accent-sky`).
- **on-brand** `#1e1e1e` — near-black label on sky-blue CTA. The signature inversion — most blue CTAs use white text; Kit's near-black on sky reads more like a magazine cover blurb than a SaaS button.

### Pastel Chip Set (the editorial palette)

- **accent-sky** `#bce1fa` — audience pillar, info contexts.
- **accent-sky-deep** `#a2d1f1` — deeper sky variant for emphasis.
- **accent-peach** `#ffd0ad` — tools pillar, warm feature categories.
- **accent-mint** `#b9e9c5` — growth pillar, success contexts.
- **accent-lilac** `#e7c9f1` — community pillar, social features.
- **accent-gold** `#f2ba41` — pricing emphasis, premium tier highlights.
- **accent-gold-soft** `#fce8b8` — gold wash for warning bg.
- **accent-rose** `#f7c4cd` — rare rose chip for danger / removal contexts.

These six pastels are first-class design tokens. They appear as full-bleed section grounds on feature pages, as chip backgrounds on capability tiles, and as decorative dingbats. The choreography rule: one pastel per section, two if needed for a comparison; never three or more in a single module. Sequenced, not stacked.

### Interactive

- **link** `#44b1ff` — sky link in body copy. Underlined on hover only, not by default.
- **link-hover** `#2c8fd6` — deeper sky on hover.
- **selected-bg** `#f2efe9` — selected nav state, deeper paper.
- **disabled** `#0000004d` — disabled control text at 30% black.

### Neutral Scale

- **near-black** `#1e1e1e` — primary display and body text.
- **text-strong** `#0f0f0f` — rare deepest black for hero accent.
- **text-medium** `#000000cc` (80%) — secondary heading colour.
- **text-soft** `#00000099` (60%) — supporting copy, captions.
- **text-faint** `#00000066` (40%) — eyebrows, helper.
- **text-muted** `#0000004d` (30%) — disabled microcopy.

### Surface & Borders

- **surface-0 (page)** `#f9f7f4` cream.
- **surface-1 (panel)** `#f2efe9` deeper paper.
- **surface-2 (emphasis)** `#ebe6dd` deepest cream.
- **surface-3 (card)** `#ffffff` white paper lift.
- **border** `#0000000f` — ~6% black hairline.
- **border-strong** `#00000019` — ~10% black for outlined buttons.
- **border-subtle** `#00000008` — quietest separation.
- **border-brand** `rgba(68, 177, 255, 0.30)` — sky-tinted hairline.

### Shadow Colors

Kit's depth language is **paper-tonal layering**. Cream `#f9f7f4` ground → deeper paper `#f2efe9` inset → white `#ffffff` raised card. Hairlines are 6% black. Shadows are minimal — cards take a soft 12px blur at 6% near-black on hover only. The pastel chip set provides chromatic depth without ever spreading to the chrome itself. The brand never uses cool blue-tinted shadows — that would crack the warm temperature of the cream-paper canvas.

### Semantic

- **success** — bg `#b9e9c5` (mint chip), text `#1f4d2c` (deep forest), border `rgba(31, 77, 44, 0.20)`.
- **warning** — bg `#fce8b8` (gold-soft wash), text `#7a5a00`, border `rgba(122, 90, 0, 0.20)`.
- **danger** — bg `#f7c4cd` (rose chip), text `#a8113a`, border `rgba(168, 17, 58, 0.25)`.
- **info** — bg `#bce1fa` (sky chip), text `#1a3a7a`, border `rgba(26, 58, 122, 0.20)`.

The unusual choice: semantic colours come *from* the pastel chip palette, not from a separate Material/Tailwind ladder. Success isn't `green-500`; it's mint-chip. Info is sky-chip — not `blue-500`. The whole palette is one editorial system.

## 3. Typography Rules

### Font Family

- **Display**: `KitSansFont, "KitSansFont Fallback", "Helvetica Neue", Helvetica, Arial, sans-serif` — custom commissioned chunky humanist sans by Kit (post-rebrand 2024). Used at weight 400 / 500 / 700. The defining brand voice.
- **Body**: `"Libre Franklin", "Libre Franklin Fallback", -apple-system, system-ui, sans-serif` — Pablo Impallari's Google open-source companion. Crisp, readable, high-contrast humanist sans. Used at 400 / 500 / 600.
- **Serif**: `"Libre Caslon Text", Georgia, "Times New Roman", serif` — sparingly used in pull-quotes and creator testimonials only. Italic carries the editorial-magazine register.
- **Mono**: `ui-monospace, "SF Mono", "JetBrains Mono", monospace` — pragmatic system fallback chain. Rare on marketing chrome.
- **OpenType features**: `liga` and `kern` always on. `onum` (old-style figures) enabled in serif body for editorial reading.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| Display Hero | KitSansFont | 96px | 500 | 0.92 | -0.01em | liga | Largest hero variant |
| Display | KitSansFont | 80px | 500 | 0.95 | normal | liga | The canonical Kit hero — chunky stacked |
| H1 | KitSansFont | 64px | 500 | 0.98 | normal | liga | Page title |
| H2 | KitSansFont | 48px | 500 | 1.00 | -0.01em | liga | Major section |
| H3 | KitSansFont | 28px | 500 | 1.15 | normal | — | Sub-section |
| H4 | KitSansFont | 22px | 500 | 1.25 | normal | — | Card heading |
| H5 | Libre Franklin | 18px | 600 | 1.35 | normal | — | Inline emphasis (switches to body face) |
| Eyebrow | Libre Franklin | 12px | 600 | 1.40 | 0.06em | uppercase | Section pre-label |
| Body Large | Libre Franklin | 20px | 400 | 1.50 | normal | — | Lede paragraph |
| Body | Libre Franklin | 18px | 400 | 1.50 | normal | — | Default body copy (notably 18px, not 16px) |
| Body Small | Libre Franklin | 16px | 400 | 1.50 | normal | — | Captions, sidebars |
| Caption | Libre Franklin | 14px | 400 | 1.40 | normal | — | Image captions |
| Caption Tabular | Mono | 13px | 500 | 1.40 | normal | — | Stats, data labels |
| Label | Libre Franklin | 12px | 600 | 1.30 | normal | — | UI labels |
| Button | Libre Franklin | 15px | 600 | 1.00 | normal | — | CTA copy |
| Pull Quote | Libre Caslon Text | 28px | 400 | 1.30 | normal | italic | Editorial pull-quote in serif italic |
| Code | Mono | 14px | 400 | 1.55 | normal | — | Inline + block |

### Principles

- **Tight line-height on the display.** KitSansFont at 80px / 500 with `0.95` line-height — *line-height < 1.0* — is the brand's typographic signature. It stacks the headline tight, like a magazine cover title. Going to 1.1 or 1.2 (the standard SaaS heading line-height) collapses the brand into Substack/Mailchimp territory.
- **Two-family duet.** KitSansFont (display) + Libre Franklin (body). Every visible piece of chrome lands in one of the two faces. Adding a third sans breaks the system; the serif (Libre Caslon Text) is reserved for editorial pull-quotes only.
- **Body at 18px, not 16px.** Kit's default body is 18px / 1.5 — slightly larger than the SaaS-standard 16px / 1.5. The choice is editorial: 18px reads as magazine, 16px reads as web app.
- **Weight 500 only for KitSansFont display.** Headlines hit 500 — not 600 or 700. The face has enough character that 500 carries the weight; going heavier would feel shouty. Body switches to Libre Franklin at 400 / 500 / 600.
- **Eyebrows in Libre Franklin caps.** 12px / 600 / 0.06em uppercase tracking. The mono signal (which Plain or Anthropic uses for eyebrows) is rejected here — Kit keeps eyebrows in the body face for editorial cohesion.
- **Italics in serif body, never in display.** Libre Caslon Text italic carries quoted titles and pull-quotes; KitSansFont never italicises.
- **OpenType discipline**: `onum` (old-style figures) in serif body so numbers sit visually with letters; standard `liga` and `kern` everywhere.
- **Sentence case for headlines.** Kit writes "Build your audience" not "Build Your Audience" — a creator-direct-address convention.

## 4. Component Stylings

### Buttons

**Primary (Sky Pill)**
- Background: `#44b1ff`. Text: `#1e1e1e` near-black, Libre Franklin 600 / 15px.
- Padding: `14px 28px`. Radius: `9999px` (full pill). No border.
- Hover: bg → `#2c8fd6`; text → `#ffffff`; transition `220ms ease-standard`.
- Active: bg → `#1f6ca8`.
- Use: Primary CTA — *Get started free, Start your newsletter, Try Kit.*

**Secondary (Outlined Pill)**
- Background: transparent. Text: `#1e1e1e`. Border: `1px solid #00000019`. Radius: `9999px`.
- Same padding (14×28), font (Libre Franklin 600 / 15px) as primary.
- Hover: bg → `#00000008`.
- Use: Twin to primary — *Watch the demo, Read the docs.*

**Dark (Cream-Section Alternate)**
- Background: `#1e1e1e`. Text: `#f9f7f4`. No border. Pill radius.
- Same shape as primary.
- Hover: bg → `#0f0f0f`.
- Use: Used on cream-light sections where the sky would feel out of place; rare alternate primary.

**Ghost (Quiet)**
- Background: transparent. Text: `#1e1e1e`. No border.
- Padding: `8px 14px`. Libre Franklin 500 / 15px.
- Hover: text → `#44b1ff` sky.
- Use: Nav links, footer secondary actions.

### Cards

**Editorial Card (White Paper)**
- Background: `#ffffff`. Border: `1px solid #0000000f`. Radius: `16px`. Padding: `32px`.
- Shadow: none — value-contrast separates white from cream.
- Hover: border → `#00000019`; gentle 12px shadow at 6% black; transition `220ms`.
- Use: Feature tile, capability rail entry, integration card.

**Paper Inset Card**
- Background: `#f2efe9` deeper paper. Border: `1px solid #0000000f`. Radius: `16px`. Padding: `32px`.
- Use: Testimonial block, feature band, pricing-tier emphasis.

**Pastel Chip Card**
- Background: any pastel chip token (peach, mint, sky, lilac, gold). Border: none. Radius: `16px`. Padding: `40px 32px`.
- Use: Feature category card — peach for tools, mint for growth, sky for audience, lilac for community, gold for pricing.

### Badges, Tags, Pills

**Eyebrow Label** — no chrome, just type. Libre Franklin 600 / 12px / uppercase / 0.06em tracking, colour `#00000099`. Sits above section headlines.

**Pastel Pill** — bg from the chip set (peach / mint / sky / lilac / gold), text `#1e1e1e` near-black, radius `9999px`, padding `6px 14px`. Feature category chips on capability tiles.

### Inputs / Forms

**Email-Capture (Pill)**
- Background: `#ffffff`. Border: `1px solid #00000019`. Radius: `9999px` full pill. Padding: `14px 24px`.
- Font: Libre Franklin 400 / 16px. Placeholder: `#00000066`.
- Focus: `0 0 0 2px #44b1ff` sky ring, border → `#44b1ff`.
- Often paired with sky-blue CTA button hard-right; the email-capture pair is the most-used Kit component on the marketing site.

**Standard (Rectangular)**
- Background: `#ffffff`. Border: `1px solid #00000019`. Radius: `8px`. Padding: `12px 16px`.
- Font: Libre Franklin 400 / 16px. Placeholder: `#00000066`.
- Focus: `0 0 0 2px #44b1ff` sky ring.
- Use: Form fields, search.

### Navigation

- Header height `72px`. Background `#f9f7f4` cream (becomes opaque-cream-blur on scroll).
- Logo: Kit wordmark in custom KitSansFont, near-black with a sky accent stroke.
- Nav links: Libre Franklin 500 / 15px, colour `#1e1e1e`, padding `8px 14px`. Hover → `#44b1ff` sky.
- Right-side CTA pair: ghost "Sign in" + sky pill "Get started free".
- Mobile: full-screen sheet, links stack at 28px / KitSansFont 500.

### Optional Components

**Pull Quote** — Libre Caslon Text 28px / 400 / italic, near-black `#1e1e1e` text, with a 4px sky vertical rule on the left edge or a pastel-chip block surrounding.

**Footnote** — Libre Franklin 14px / 400, text-soft; sits on a thin border-subtle rule.

**Code Block** — Mono 14px, bg `#f2efe9` deeper paper, radius `8px`, padding `16px 20px`, no border (paper fill provides separation). Inline code: same font, bg `rgba(0, 0, 0, 0.05)`, padding `2px 6px`, radius `4px`.

**Tooltip** — bg `#1e1e1e`, text `#f9f7f4`, radius `6px`, padding `8px 12px`, font `13px / Libre Franklin 500`.

**Modal** — bg `#ffffff`, radius `16px`, shadow `rgba(30, 30, 30, 0.08) 0 24px 48px -16px`, max-width `560px`. Cream backdrop overlay at 60% opacity.

## 5. Layout Principles

### Spacing System

- **Base unit**: 4px.
- **Scale**: 4, 8, 12, 16, 20, 24, 32, 48, 64, 80, 96, 128, 160 — Fibonacci-adjacent.
- **Density observation**: Kit pages run wide with generous gutters. The cream canvas extends edge-to-edge, and the 18px body sits in 24–32px line gaps.

### Grid & Container

- **Page max width**: `1320px` — slightly wider than the SaaS-standard 1280, accommodating the chunky hero scale.
- **Site gutter**: `clamp(24px, 5vw, 72px)`.
- **Grid**: 12 columns with 24px gutters. Hero blocks float a large display headline left with a creator photo or screenshot right, often overlaid with a pastel feature chip.
- **Hero treatment**: full-bleed cream, 80px KitSansFont headline anchored left, sky pill CTA below, creator photograph or product screenshot right.

### Whitespace Philosophy

The cream canvas *is* the whitespace. Kit deliberately under-fills sections so the warm ground reads as a continuous magazine spread. Section gutters run **96–128px** between major editorial blocks; minor blocks sit on 64–80px gaps; intra-section spacing uses 24–48px. Pricing and conversion zones tend to land on the deeper `#f2efe9` paper for emphasis.

### Section Cadence

- Hero (cream + creator photograph) → Feature Ladder (3-up white cards on cream at 16px radius) → Pastel Feature Block (full-bleed peach / mint / sky / lilac / gold) → Editorial Pull-Quote (deeper paper inset with serif italic) → Pricing (cream → deeper paper transition for emphasis) → Footer (cream ground, slate-soft micro-text).
- Pastel feature blocks appear once or twice per page as chromatic punctuation; never spread to the chrome.
- Cream-on-cream sections separated by 1px border-subtle hairlines or by spacing alone.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| Micro (xs) | 4px | Inline chip corners, decorative dividers |
| Standard (sm) | 6px | Compact pills, chip emphasis |
| Comfortable (md) | 8px | Inputs (rectangular), code blocks, dropdowns |
| Relaxed (lg) | 12px | Image masks, soft popover containers |
| Featured (xl / card) | 16px | Cards, pastel chip cards, modals |
| Pill | 9999px | Email-capture inputs, primary/secondary CTAs, status chips |

Kit's signature shape is the **16px card** paired with the **full pill** on actions and email-capture. Cards default to 16px, buttons to full pills, image masks often round to 12px to match the editorial register. The system favours soft-rounded over sharp-rectangle, mirroring the chunky-humanist KitSansFont's own corner geometry.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat — no shadow | Default page surface, hero, body sections |
| 1 | Paper tier (`#f2efe9` inset on cream) | Inset feature bands, deeper paper sections |
| 2 | Hairline + white card on cream | Editorial cards |
| 3 | `rgba(30, 30, 30, 0.06) 0 12px 24px -8px` | Hover-lifted cards |
| 4 | `rgba(30, 30, 30, 0.06) 0 4px 12px` | Sticky nav, dropdowns |
| 5 | `rgba(30, 30, 30, 0.08) 0 24px 48px -16px` | Modals, popovers |

### Shadow Philosophy

Kit's depth is **paper-tonal**. Cream `#f9f7f4` ground → deeper paper `#f2efe9` inset → white `#ffffff` raised card. The three-tier surface ladder provides most of the elevation; explicit shadows are reserved for hover states and overlays. When shadows do appear, they're warm-tinted at low opacity (`rgba(30, 30, 30, 0.06)` to `0.08`) — never neutral grey, never blue-tinted. The pastel chip set provides chromatic depth without ever spreading to the chrome itself, keeping the system's elevation language tonal-warm.

## 8. Interaction & Motion

### Easing Curves

- `ease-standard`: `cubic-bezier(0.4, 0, 0.2, 1)` — Material-style; default for hover, focus, color transitions.
- `ease-emphasized`: `cubic-bezier(0.2, 0, 0, 1)` — punchier exit; modal enter, hero reveal.
- `ease-editorial`: `cubic-bezier(0.32, 0.72, 0, 1)` — slow-out, fast-settle; used on page transitions and editorial reveals.

### Duration Buckets

- **Fast (120ms)** — colour transitions, focus rings, link hovers.
- **Standard (220ms)** — button hover, card hover, dropdown reveal.
- **Slow (320ms)** — modal enter/exit, page section fade-in.
- **Page (440ms)** — route transitions, hero reveal sequences.

### Per-Component Micro-States

- **Button hover (sky pill)**: bg `#44b1ff` → `#2c8fd6`; text `#1e1e1e` → `#ffffff`; transition `220ms ease-standard`. No lift, no scale.
- **Button hover (outlined)**: bg transparent → `#00000008`.
- **Card hover**: border deepens from `#0000000f` to `#00000019`; gentle 12px shadow at 6% black appears.
- **Link hover**: colour `#44b1ff` → `#2c8fd6` over 120ms; underline thickens 1px → 2px.
- **Input focus**: 2px sky ring fades in over 120ms; border darkens from 0.10 to full sky-blue.
- **Pastel chip hover**: brightness shifts +5% (CSS filter); transition `220ms ease-standard`.

### Page Transitions

Editorial reveal: hero text fades in over 440ms with 24px translate-up; below-fold sections use `IntersectionObserver` to fade in at 80% viewport, 320ms duration, no translate. Pastel feature blocks reveal with a gentle scale-in (0.97 → 1.0) over 320ms ease-editorial.

### Reduced Motion

`@media (prefers-reduced-motion: reduce)` — all transitions become opacity-only, durations halved. Translate animations and pastel scale-ins are disabled entirely; scroll-linked reveals snap to final state.

## 9. Accessibility & A11y

### Contrast Pairs

- **`#1e1e1e` text on `#f9f7f4` bg**: 16.4:1 — AAA at all sizes.
- **`#00000099` text on `#f9f7f4` bg**: 7.8:1 — AAA at body sizes.
- **`#00000066` text on `#f9f7f4` bg**: 4.6:1 — AA at body sizes.
- **`#1e1e1e` text on `#44b1ff` sky button**: 8.9:1 — AAA at body sizes.
- **`#1e1e1e` text on `#b9e9c5` mint chip**: 12.1:1 — AAA.
- **`#1e1e1e` text on `#ffd0ad` peach chip**: 13.4:1 — AAA.

The near-black-on-pastel contrast is uniformly AAA across the chip set — the choice of light pastels (rather than saturated mid-pastels) keeps the chip cards accessibility-safe by default.

### Focus Indicators

- Default focus ring: `0 0 0 2px #44b1ff` sky-blue with 2px offset on cream pages.
- On dark surfaces (rare): `0 0 0 2px #f9f7f4` cream.
- All interactive surfaces must have a visible focus state — no `outline: none` without a replacement.

### ARIA Patterns

- **Navigation**: `<nav aria-label="Main">` with skip-link to main content.
- **Disclosure**: `<button aria-expanded aria-controls>` for collapsible feature sections.
- **Dialog**: `role="dialog" aria-modal="true" aria-labelledby` with focus trap and Esc-to-close.
- **Email-capture form**: `<form aria-label="Subscribe">` with inline error message via `aria-describedby`.
- **Live regions**: `aria-live="polite"` for form validation messages.

### Keyboard Navigation

- Tab order matches visual flow: skip-link → nav → hero CTA → main content → footer.
- All buttons, links, inputs reachable via Tab; modals trap focus inside until dismissed.
- `Esc` closes modals and the mobile menu sheet.
- Email-capture input + adjacent CTA share keyboard tab order — Tab from input lands on Submit.

### Screen Reader Hints

- Decorative pastel chip illustrations have `aria-hidden="true"`.
- Icon-only buttons have `aria-label`.
- Creator photographs include alt text describing the creator and context.
- The Kit wordmark uses `aria-label="Kit"` and visually hides decorative inner strokes.

### Reduced Motion

Honoured via the global media query. All translate/scale animations become opacity-only; durations halve. Pastel scale-in reveals become pure fades.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Use |
|---|---|---|
| Mobile | < 640px | Single column, full-bleed sections, 40px H1 |
| Tablet | 640–1024px | 2-column rails, 56px H1 |
| Desktop | 1024–1280px | Full 12-col grid, 80px hero, 680px prose |
| Wide | 1280–1320px | Site max width hits |
| Ultra | > 1320px | Page locks to 1320, gutters expand |

### Touch Targets

- Minimum tap target: 44×44px (WCAG AAA).
- Pill buttons: 48px minimum height on mobile (14px vertical padding × 2 + line-height).
- Email-capture pill: 52px minimum height to comfortably accommodate 16px input text + 14px vertical padding.

### Collapsing Strategy

- **Header**: full nav at ≥1024px; hamburger sheet below.
- **Hero**: 96px display → 80px hero → 64px → 48px → 40px across breakpoints.
- **Capability grid**: 3-up at desktop, 2-up at tablet, 1-up at mobile.
- **Body width**: 680px → fluid 90vw at mobile.
- **Email-capture pair**: side-by-side at desktop, stacked at mobile.
- **Section spacing**: 128px → 96px → 64px across sizes.

### Image Behavior

- Creator photographs use `srcset` with 1x/2x/3x; aspect-ratio enforced to prevent layout shift.
- Pastel chip cards use CSS `background-color` (no images) so they render instantly.
- Lazy-loading on below-fold images; eager on hero.

### Container Queries

Used inside capability cards to switch layout when card width crosses 320px (icon-left vs. icon-top). Used inside pricing tier cards to switch from horizontal to vertical feature lists.

## 11. Content & Voice

### Tone

**Creator-direct, warm, editorial.** Kit writes the way an indie publisher writes to other publishers — direct address ("Build your audience"), no corporate hedging, an awareness that the reader is themselves a creator with their own brand. The voice sits between Substack's literary register and Mailchimp's friendly marketing register — direct without being cute, warm without being precious.

### Microcopy Patterns

- **Button verbs**: "Get started free," "Start your newsletter," "Try Kit," "Watch the demo," "See pricing." Sentence case, never all-caps.
- **Error messages**: "Couldn't subscribe — that email looks invalid. Try again?" Direct, friendly, low-stakes.
- **Success confirmations**: "You're in. Check your inbox for confirmation." Conversational.
- **Loading states**: "Subscribing…" "Saving your draft…" — context-specific where possible.

### Empty States

What they say: explain the state and offer the next step. *"No subscribers yet. Share your sign-up link to get started."*
What they don't say: "Oops!", "Whoops!", any apologetic exclamation. Empty states are normal, not failures.

### CTA Verb Conventions

- Primary on hero: "Get started free," "Start your newsletter," "Try Kit"
- Secondary: "See pricing," "Watch the demo," "See examples"
- Footer: "Read the blog," "Browse creators," "Sign in," "Help center"

The brand never uses "Sign up now!" or "Get started today!" — the tone is invitational and creator-direct, never urgent. Kit trades on creator credibility, not scarcity.

## 12. Dark Mode & Theming

**Light-only — no dark variant offered on the marketing surface.** The cream-paper canvas, pastel chip set, and chunky-humanist display are calibrated for light only. The pastels would lose their warmth on a dark canvas — peach `#ffd0ad` and mint `#b9e9c5` against a `#0a0a0a` ground would clip and look fluorescent rather than editorial. A dark mode would require re-keying the entire system, and the cream + pastel combination is the brand's defining choice.

The product UI (Kit's email-builder workspace) handles its own theming separately and ships a dark variant for in-product use; that variant is documented at the product layer, not on the marketing surface. The marketing site at `kit.com` is intentionally light-only across all viewports and times of day.

If a downstream surface ever needs a dark companion, the rule would be: keep the sky-blue at full saturation, swap cream for `#1a1a1a` (warm slate-deep), and *desaturate* the pastel chip set (peach drops to `#8c6b50`, mint to `#4a7558`, etc.) — but this is not currently shipped, and any future dark surface would be a deliberate brand decision, not an automatic theme swap.

## 13. Lineage & Influences

Kit's design DNA is **literary-newsletter platform reborn with magazine-grade chrome**. The cream paper-canvas, custom chunky humanist display, and pastel-rainbow chip set quote independent magazines and newsletter platforms directly, then anchor the whole composition with a Stripe-discipline single sky-blue. Where Substack runs cream + serif + orange and Mailchimp runs yellow + cute-illustration, Kit takes the editorial register from Substack, removes the serif from chrome (relegating it to pull-quotes only), and adds the pastel chip set without slipping into Mailchimp territory.

What it inherits: Substack's cream paper-canvas convention, Stripe's confidence in a singular brand color, Mailchimp's pastel category-marking convention (softened and refined). What it borrows from contemporaries: Notion's off-white-paper register, Anthropic's eyebrow + body + section-rhythm cadence, Linear's hairline-border restraint. What it rejects: pure white SaaS canvases (Vercel, Mintlify), generic SaaS gradient hero sections, mascot illustrations (early Mailchimp), serif-everything chrome (early Substack).

**Named influences:**

- **Substack** — Cream paper canvas + serif-and-sans editorial duet for newsletters. *https://substack.com*
- **Stripe** — Confident single sky-blue for primary action; trust-via-restraint chromatic strategy. *https://stripe.com*
- **Mailchimp (early)** — The friendly-pastel chip set for feature categories — softened and refined. *https://mailchimp.com*
- **Notion** — Adjacent precedent for cream-paper canvas with custom-sans editorial register. *https://notion.com*
- **Anthropic** — Eyebrow + body + magazine-pace cadence; cream-canvas sibling. *https://anthropic.com*
- **Libre Franklin (Pablo Impallari)** — Open-source body workhorse, crisp humanist sans. *https://fonts.google.com/specimen/Libre+Franklin*
- **Libre Caslon Text** — Editorial pull-quote serif. *https://fonts.google.com/specimen/Libre+Caslon+Text*
- **The Kit in-house brand team** — Custom KitSansFont commission, pastel chip choreography, sky-blue Stripe discipline.

## 14. Do's and Don'ts

### Do

- **Do** typeset display in KitSansFont with leading below 1.0 (e.g. `0.95`); the chunky stacked headline is the brand voice.
- **Do** use the pastel chip set for feature categories — peach for tools, mint for growth, sky for audience, lilac for community, gold for pricing.
- **Do** keep the canvas warm-cream `#f9f7f4`; pure white reads as a different product (Mailchimp, current ConvertKit competitors).
- **Do** anchor the palette with a single sky-blue `#44b1ff` for primary CTA and link layer. Stripe-discipline is the trust signal.
- **Do** use near-black `#1e1e1e` text on the sky-blue button. The inversion (most blue CTAs use white text) is part of the brand.
- **Do** typeset body in Libre Franklin at 18px / 1.5 — slightly larger than the SaaS-standard 16px to read as editorial.
- **Do** use deeper paper `#f2efe9` for inset feature bands and pricing emphasis. Three-tier paper layering is the depth language.
- **Do** reserve serif (Libre Caslon Text) for pull-quotes only — italic, magazine-register.
- **Do** use eyebrow caps in Libre Franklin (not mono) at 12px / 0.06em tracking.
- **Do** ship full pills (9999px) on email-capture inputs and primary CTAs.

### Don't

- **Don't** mix more than two pastel chips in a single module — the rainbow is sequenced, not stacked.
- **Don't** spread `#44b1ff` beyond primary action and link — the singular-blue discipline is the trust signal.
- **Don't** drop the body face below Libre Franklin 400; the editorial crispness depends on it.
- **Don't** use white text on the sky-blue CTA. Near-black on sky is the brand inversion.
- **Don't** introduce a third sans family. KitSansFont + Libre Franklin is the system.
- **Don't** use serif on body or chrome. Libre Caslon Text is for pull-quotes only.
- **Don't** apply heavy drop-shadows. Kit's depth language is paper-tonal layering.
- **Don't** ship a pure white canvas. Cream `#f9f7f4` is the entry ticket.
- **Don't** crowd the page. The cream space is part of the brand.
- **Don't** use saturated mid-pastels. The chip set is intentionally light — peach is `#ffd0ad`, not `#ff9966`. The lightness is what keeps the chips editorial rather than juvenile.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #f9f7f4
bg-alt: #f2efe9
surface: #ffffff
text: #1e1e1e
brand-sky: #44b1ff
on-brand: #1e1e1e (near-black on sky is the signature)
accent-peach: #ffd0ad
accent-mint: #b9e9c5
accent-sky: #bce1fa
accent-lilac: #e7c9f1
accent-gold: #f2ba41
border: #0000000f
```

### Example Component Prompts

1. **"Create a hero in Kit style — cream `#f9f7f4` canvas, 80px headline in KitSansFont 500 with `0.95` line-height (line-height < 1.0 is the signature) and tracking 0, 18px Libre Franklin 400 lede in near-black, single primary CTA in sky-blue `#44b1ff` pill (9999px radius) with near-black `#1e1e1e` label, no gradient, no animation. Reading column capped at 680px."**

2. **"Design a capability card in Kit style — white `#ffffff` background, 16px radius, 1px `#0000000f` hairline border, 32px interior padding, 22px KitSansFont 500 heading, 18px Libre Franklin 400 body in 80% black, no shadow, hover deepens border to `#00000019` and adds 12px shadow at 6% black."**

3. **"Build a pastel feature block — full-bleed peach `#ffd0ad` background (or mint, sky, lilac, gold — one only), 64px vertical padding, 48px KitSansFont 500 heading in near-black, 18px Libre Franklin body in 80% black, single secondary outlined button (transparent + 1px black 0.10 border, pill radius)."**

4. **"Compose an email-capture pair — wide pill input (`#ffffff` bg, 1px black 0.10 border, 9999px radius, 14×24 padding, Libre Franklin 400 / 16px placeholder), and adjacent sky-blue pill CTA (`#44b1ff` bg, near-black `Get started free` label) hard-right. The pair is the most-used Kit component on the marketing site."**

5. **"Render an editorial pull-quote — Libre Caslon Text 28px / 400 / italic, near-black text, 4px sky-blue vertical rule on the left edge, sits in a deeper paper `#f2efe9` inset block at 16px radius, 48px interior padding."**

6. **"Create the primary nav — 72px header height, cream `#f9f7f4` background (becomes opaque-cream-blur on scroll), Kit wordmark in custom KitSansFont with sky accent stroke, links 15px Libre Franklin 500 with sky-on-hover, right-aligned ghost 'Sign in' + sky-blue pill 'Get started free' pair."**

### Iteration Guide

1. **Start with cream, not white.** If the bg is `#ffffff`, you're in Mintlify/Vercel territory. Cream `#f9f7f4` is the entry ticket.
2. **Switch the headline to KitSansFont with line-height < 1.0.** Inter or system-ui at 1.1 line-height collapses the brand into generic-SaaS territory. The chunky-stacked humanist hero is the signature.
3. **Body to Libre Franklin at 18px.** 16px reads as web-app; 18px reads as editorial-magazine. The size is part of the brand.
4. **Anchor with one sky-blue.** `#44b1ff` for primary CTA, link, brand wordmark accent. Don't introduce a second blue or a different brand color.
5. **Add one pastel chip per section, not three.** The rainbow is sequenced — peach for tools, mint for growth, sky for audience, lilac for community, gold for pricing. One per module.
6. **Use near-black on the sky CTA.** White-on-sky is the SaaS default; near-black-on-sky is the Kit-specific inversion.
7. **Drop the shadows; tier the paper.** Replace box-shadows with deeper paper `#f2efe9` insets; cards use hairline borders.
8. **Calm the verbs.** Replace "Sign up now!" with "Get started free"; replace "Learn more →" with "See pricing". The voice is creator-direct, never urgent.
