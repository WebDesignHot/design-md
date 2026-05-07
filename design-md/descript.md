---
name: Descript
tagline: Cream-pink canvas, a custom Brett display serif, and a wine-dark CTA — an AI video editor that ships like a magazine.
updated_at: 2026-05-05T10:17:17+12:00
published_at: 2026-05-03T16:32:19+12:00
author: webdesignhot
source_url: https://www.descript.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [ai, media, saas]
tags: [light, editorial, sans, serif, warm, soft, playful]
preview_swatch: ['#fff7fa', '#651a39', '#ff5340']
related: [notion, substack, medium]
description: 'Descript''s marketing site replaces the typical AI-tool dark slab with a cream-pink canvas (`#fff7fa`), a custom Brett display serif, and a wine-dark `#651a39` primary button. Section headings glow in red-orange (`#f73b3b` / `#ff5340`) like editorial dingbats, while body copy in a custom Booton sans keeps the page calm. The result reads like a print magazine that happens to edit video. Where every other AI tool reaches for purple gradients or chrome-on-black, Descript ships cream-pink + serif display + sans body — closer to a Glossier ad or a perfume-counter splash than a SaaS landing. Section labels glow in red-orange like the dingbats that mark chapter starts in print magazines. The primary CTA is a wine-dark `#651a39`, an unusually saturated near-black that reads as "lipstick" — paired with the cream canvas, it makes the page feel like a beauty-editorial spread more than a video editor. This is editorial design as positioning: every chromatic move signals that Descript is a creative tool for storytellers, not a developer utility. The custom Brett-family serif is the display face here, not the editorial accent — inverting the Notion convention where serif is reserved for body or pull-quote.'

colors:
  # Primary
  bg: '#fff7fa'                          # warm cream-pink body bg (rgb 255,247,250)
  bg-soft: '#fffafc'                     # softer cream for nested panels
  bg-tertiary: '#fef0f4'                 # deeper pink for emphasis bands
  surface: '#ffffff'                     # raised white card
  surface-rose: '#f7e8ed'                # rose card surface for nested feature blocks
  text: '#1a1a1a'                        # primary body copy, near-black
  text-strong: '#26171d'                 # display copy, leans wine
  text-medium: '#4a3540'                 # secondary heading, wine-leaning
  text-soft: '#7a6770'                   # captions and metadata
  text-faint: '#a8949c'                  # eyebrows, helper
  text-muted: '#c9b9bf'                  # disabled microcopy
  # Brand
  brand: '#651a39'                       # primary CTA wine-dark (lipstick)
  brand-hover: '#4a1129'                 # pressed state
  brand-deep: '#3a0d20'                  # active / pressed wine
  brand-soft: '#fde2eb'                  # soft pink hover surface
  brand-tint: '#f5cdda'                  # mid-pink tint
  on-brand: '#ffffff'                    # white on wine
  # Accents
  accent-red: '#f73b3b'                  # H1 dingbat, "AI Video Editor" label
  accent-orange: '#ff5340'               # secondary section headers
  accent-orange-soft: '#ffd6cc'          # orange wash
  accent-coral: '#ff7a5c'                # softer coral variant
  accent-rose: '#ff4d7c'                 # rose-pink for highlights
  # Interactive
  link: '#651a39'                        # wine-dark links in body
  link-hover: '#4a1129'                  # deeper wine on hover
  selected-bg: '#fde2eb'                 # selected nav state, soft pink
  disabled: '#c9b9bf'
  # Borders
  border: '#0000001a'                    # ~10% black hairline
  border-strong: '#00000026'             # ~15% for outlined buttons
  border-subtle: '#00000010'             # ~6% quietest
  border-brand: 'rgba(101, 26, 57, 0.30)' # wine-tinted hairline
  # Semantic
  success-bg: '#d9eedb'                  # soft green wash
  success-text: '#1f4d2c'
  warning-bg: '#fff0d6'                  # warm amber wash
  warning-text: '#7a4a00'
  danger-bg: '#fde2eb'                   # soft pink (uses brand-soft)
  danger-text: '#651a39'                 # wine-dark for danger text — brand-coherent
  info-bg: '#e6e8f5'                     # soft slate-blue wash
  info-text: '#2a2a4a'

typography:
  display:
    family: '"Brett", "__brett_523e52", "Georgia", "Times New Roman", serif'
    weights: [400, 500]
    opentype-features: ['liga', 'kern', 'onum']
  serif:
    family: '"Brett", Georgia, "Times New Roman", serif'
    weights: [400]
    opentype-features: ['liga', 'kern', 'onum']
  body:
    family: '"Booton", "__booton_bab293", system-ui, Roboto, sans-serif'
    weights: [400, 500, 600]
    opentype-features: ['liga', 'kern']
  mono:
    family: '"JetBrains Mono", Menlo, Monaco, monospace'
    weights: [400, 500]
    opentype-features: ['tnum', 'zero']
  scale:
    display-hero:    { size: 96, weight: 400, lineHeight: 0.95, tracking: '-0.025em', family: display }
    display:         { size: 80, weight: 400, lineHeight: 0.98, tracking: '-0.02em', family: display }
    h1:              { size: 72, weight: 400, lineHeight: 1.0,  tracking: '-0.02em', family: display }
    h2:              { size: 48, weight: 400, lineHeight: 1.05, tracking: '-0.015em', family: display }
    h3:              { size: 32, weight: 400, lineHeight: 1.15, tracking: '-0.01em', family: display }
    h3-label:        { size: 18, weight: 400, lineHeight: 1.0,  tracking: '0.04em', family: display }
    h4:              { size: 22, weight: 500, lineHeight: 1.25, family: body }
    h5:              { size: 18, weight: 500, lineHeight: 1.35, family: body }
    eyebrow:         { size: 14, weight: 600, lineHeight: 1.4,  tracking: '0.06em', family: body, transform: uppercase }
    body-large:      { size: 20, weight: 400, lineHeight: 1.55, family: body }
    body:            { size: 17, weight: 400, lineHeight: 1.55, family: body }
    body-small:      { size: 15, weight: 400, lineHeight: 1.5,  family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.4,  family: body }
    caption-tabular: { size: 13, weight: 500, lineHeight: 1.4,  family: mono }
    label:           { size: 12, weight: 600, lineHeight: 1.3,  family: body, tracking: '0.06em' }
    button:          { size: 15, weight: 600, lineHeight: 1.0,  family: body }
    code:            { size: 14, weight: 400, lineHeight: 1.55, family: mono }
    code-micro:      { size: 12, weight: 400, lineHeight: 1.4,  family: mono }
    quote-pull:      { size: 36, weight: 400, lineHeight: 1.2,  tracking: '-0.015em', family: serif, style: italic }

radius:
  xs: 4
  sm: 8
  md: 12
  lg: 16
  xl: 24
  pill: 9999

spacing:
  base: 4
  scale: [1, 2, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160]

layout:
  page-width: 1280
  prose-width: 680
  site-gutter: 'clamp(24px, 5vw, 64px)'
  header-height: 72
  grid-columns: 12
  section-rhythm: '96-128px'

components:
  button-primary:
    background: '#651a39'
    text: '#ffffff'
    padding: '14px 28px'
    radius: 12
    border: 'none'
    font: 'Booton 600 / 15px'
    hover-bg: '#4a1129'
    active-bg: '#3a0d20'
    use: 'Primary action — wine-dark lipstick CTA, the brand''s defining button'
  button-secondary:
    background: 'transparent'
    text: '#651a39'
    padding: '14px 28px'
    radius: 8
    border: '1px solid #651a39'
    font: 'Booton 600 / 15px'
    hover-bg: '#fde2eb'
    use: 'Outlined twin — wine border + wine text, soft-pink hover wash'
  button-ghost:
    background: 'transparent'
    text: '#1a1a1a'
    padding: '8px 14px'
    font: 'Booton 500 / 15px'
    hover-text: '#651a39'
    use: 'Quiet third action — nav links, footer'
  card-cream:
    background: '#fffafc'
    border: '1px solid #00000010'
    radius: 16
    padding: '32px'
    use: 'Default soft cream feature card — barely lifted from canvas'
  card-rose:
    background: '#f7e8ed'
    border: '1px solid #00000010'
    radius: 16
    padding: '32px'
    use: 'Rose surface for nested feature blocks, testimonials'
  card-screenshot:
    background: '#fde2eb'
    border: 'none'
    radius: 24
    padding: '24px'
    use: 'Pink-shell wrapper for in-product screenshots — replaces neutral browser chrome with warm-pink editorial frame'
  input:
    background: '#ffffff'
    border: '1px solid #00000026'
    radius: 12
    padding: '12px 16px'
    font: 'Booton 400 / 16px'
    placeholder-color: '#a8949c'
    focus-ring: '0 0 0 2px #651a39'
    use: 'Form fields, search, email capture'
  badge-eyebrow:
    background: 'transparent'
    text: '#7a6770'
    padding: '0'
    font: 'Booton 600 / 14px / uppercase / 0.06em'
    use: 'Section eyebrow — no chrome, just type'
  badge-red-dingbat:
    background: 'transparent'
    text: '#f73b3b'
    padding: '0'
    font: 'Brett 18px / 0.04em tracking'
    use: 'H3-as-section-label — red-orange Brett serif, the magazine dingbat that marks chapter starts'
  pill-soft-pink:
    background: '#fde2eb'
    text: '#651a39'
    padding: '6px 14px'
    radius: 9999
    font: 'Booton 600 / 13px'
    use: 'Soft-pink chip for status / NEW labels'
  nav-link:
    background: 'transparent'
    text: '#1a1a1a'
    padding: '8px 14px'
    font: 'Booton 500 / 15px'
    hover-text: '#651a39'

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
  wide: 1440

shadows:
  none: 'none'
  ambient: 'rgba(101, 26, 57, 0.04) 0 1px 3px'
  standard: 'rgba(101, 26, 57, 0.06) 0 4px 12px'
  page-lift: 'rgba(101, 26, 57, 0.08) 0 12px 32px -12px'
  elevated: 'rgba(101, 26, 57, 0.10) 0 24px 48px -16px'
  ring: '0 0 0 2px #651a39'

accessibility:
  contrast-text-on-bg: 16.2                # #1a1a1a on #fff7fa — AAA at all sizes
  contrast-text-on-brand: 10.5             # #ffffff on #651a39 — AAA at body sizes
  contrast-text-soft-on-bg: 5.4            # #7a6770 on #fff7fa — AA at body sizes
  contrast-accent-red-on-bg: 4.6           # #f73b3b on #fff7fa — AA at body sizes (used for dingbats only)
  focus-ring: '2px solid #651a39 with 2px offset'
  reduced-motion-honored: true
  keyboard-nav: 'visible focus on every interactive surface; tab order matches visual'
  prose-line-length: 'capped at 680px for editorial readability'

dark-mode: null                            # marketing surface is light-only; the cream-pink canvas is the brand's defining choice
---

## 1. Visual Theme & Atmosphere

Descript's marketing site reads like a print magazine that ships software. The body bg is a warm cream-pink `#fff7fa`, headlines are set in a custom **Brett** serif at 72px, and section labels glow in red-orange like the dingbats that mark chapter openings in editorial layouts. Body copy sits in a custom **Booton** sans at 17px on a 1.55 line-height — the duet of serif display + sans body inverts the Notion convention (where Notion uses sans display + serif body). The action layer is a single wine-dark `#651a39` CTA pill at 12px radius — saturated enough to read as lipstick, dark enough to anchor a soft pink page. Secondary actions use a soft `#fde2eb` hover wash.

What makes Descript visually distinctive is the *category positioning rejection*. The AI-tool category is dominated by dark slabs, purple gradients, neon accents, and chrome-on-black aesthetics — Descript refuses the entire vocabulary. The cream-pink canvas is closer to a Glossier ad or a perfume-counter splash than a SaaS landing; the wine-dark CTA reads as lipstick rather than enterprise; the Brett serif at 72px on cream-pink could be a beauty-magazine cover headline. This is editorial design as positioning: every chromatic move signals that Descript is a creative tool for storytellers, not a developer utility. The implicit pitch is "you, the podcaster / video creator / writer, deserve a tool that looks like the magazine you'd want your work in."

The third register is the **dingbat-like section labels**. H3 is rendered at 18px in Brett serif at 400 weight with `0.04em` tracking, in red-orange (`#f73b3b` or `#ff5340`) — a deliberate magazine-typography move. It's not an eyebrow; it's a chapter marker, the way *Vogue* or *The New Yorker* renders short-form section headers. The red-orange glow against the cream-pink canvas reinforces the editorial register and adds chromatic punctuation without ever competing with the wine-dark CTA. The two color layers (red-orange ornament + wine-dark action) are kept strictly separate; mixing them in the same module would crack the system.

Atmospheric vocabulary that captures the feeling: *cream-pink, beauty-editorial, lipstick-CTA, magazine-spread, Brett-serif, Booton-sans, dingbat-glow, perfume-counter, Glossier-software, AI-tool-rejection, creative-tool-for-storytellers, editorial-positioning.* Every surface lands like a print spread that has been ported to the screen by an art director who reads *Cabinet* and *Apartamento*.

**Key Characteristics**
- Cream-pink `#fff7fa` canvas — never pure white, never warm cream alone, always pink-tinted
- Custom **Brett** display serif at 72px / weight 400 — the brand's loudest move
- Custom **Booton** sans body at 17px / 1.55 — calm reading texture
- Wine-dark `#651a39` lipstick CTA — saturated near-black that reads as beauty-editorial
- Red-orange section dingbats (`#f73b3b` / `#ff5340`) — magazine chapter markers
- Soft pink hover wash `#fde2eb` for secondary action — never grey-neutral
- Pink-shell screenshot frames — replaces neutral browser chrome with editorial pink frame
- 12px primary CTA radius, 8px secondary, 16px cards — three-tier rounded ladder
- Inverted serif/sans duet — serif is the display, sans is the body (Notion-flip)
- 96–128px section gutters — magazine-pace cadence
- Cream-pink runs edge-to-edge — no dark-band breaks, no chromatic interruption
- AI-positioning via beauty register — software that reads as cosmetic-counter craft

## 2. Color Palette & Roles

### Primary

- **bg** `#fff7fa` — cream-pink canvas, the page's identity. RGB (255, 247, 250). Never substitute white or warm cream alone — the pink tint is the brand.
- **text** `#1a1a1a` — primary body copy, near-black. Warmer than `#000` so type doesn't fight the pink.
- **bg-soft** `#fffafc` — softer cream-pink for nested panels.
- **bg-tertiary** `#fef0f4` — slightly deeper pink for emphasis bands.
- **surface** `#ffffff` — raised white card lift over cream-pink.

### Brand & Accent

- **brand** `#651a39` — wine-dark primary CTA. Lipstick saturation. The defining chromatic move.
- **brand-hover** `#4a1129` — pressed/hover state, deeper wine.
- **brand-deep** `#3a0d20` — active state, deepest wine.
- **brand-soft** `#fde2eb` — soft pink hover wash for secondary buttons.
- **brand-tint** `#f5cdda` — mid-pink tint for chips and accent grounds.
- **on-brand** `#ffffff` — white label on wine CTA. The high-contrast pair.

### Accent (Red-Orange Dingbat Layer)

- **accent-red** `#f73b3b` — H1 dingbat, "AI Video Editor" label hue, primary chapter-marker glow.
- **accent-orange** `#ff5340` — secondary section header hue, alternate dingbat tone.
- **accent-orange-soft** `#ffd6cc` — orange wash background for highlight blocks.
- **accent-coral** `#ff7a5c` — softer coral variant for visual hierarchy.
- **accent-rose** `#ff4d7c` — rose-pink for highlights, occasionally used as a tertiary accent.

The red-orange layer is **strictly separate from the wine-dark action layer**. Section labels glow in red-orange; CTAs are always wine-dark. Mixing them in the same module breaks the system — the red-orange is ornament, the wine-dark is action. Maintaining the separation is the brand's typographic-chromatic discipline.

### Interactive

- **link** `#651a39` — wine-dark links in body copy. Underlined.
- **link-hover** `#4a1129` — deeper wine on hover.
- **selected-bg** `#fde2eb` — selected nav state, soft pink wash.
- **disabled** `#c9b9bf` — disabled control text, muted pink-grey.

### Neutral Scale

- **near-black** `#1a1a1a` — primary body text.
- **wine-near-black** `#26171d` — display copy, leans wine.
- **slate-medium** `#4a3540` — secondary heading, wine-leaning.
- **slate-soft** `#7a6770` — captions, metadata.
- **slate-faint** `#a8949c` — eyebrows, helper.
- **slate-muted** `#c9b9bf` — disabled microcopy.

The choice of *wine-leaning* slate scales (rather than neutral grey) is deliberate — every neutral on the page picks up a faint pink undertone, reinforcing the cream-pink canvas. Pure neutral grey would feel imported from a different system.

### Surface & Borders

- **surface-0 (page)** `#fff7fa` cream-pink.
- **surface-1 (panel)** `#fffafc` softer cream-pink.
- **surface-2 (card)** `#ffffff` white card lift.
- **surface-rose** `#f7e8ed` rose card surface for nested feature blocks.
- **surface-screenshot-shell** `#fde2eb` pink-shell frame for in-product screenshots.
- **border** `#0000001a` — 10% black hairline (notably stronger than Mintlify's 7% — Descript's borders read as soft pencil lines).
- **border-strong** `#00000026` — 15% for outlined buttons.
- **border-subtle** `#00000010` — 6% quietest separation.
- **border-brand** `rgba(101, 26, 57, 0.30)` — wine-tinted hairline for emphasis.

### Shadow Colors

Descript's depth language is **soft tonal layering** with warm wine-tinted shadows. Cards rarely cast shadows; when they do, the shadow is wine-tinted and diffuse — `rgba(101, 26, 57, 0.06)` to `0.10` — more "page lift" than "elevation." The brand never uses cool blue-tinted shadows; that would crack the warm-pink temperature. Product screenshots are framed in soft pink shells rather than the typical neutral browser chrome — the screenshot itself sits inside a `#fde2eb` pink frame at 24px radius, treating the product UI like an artifact in a magazine layout.

### Semantic

- **success** — bg `#d9eedb` (soft green wash), text `#1f4d2c`, border `rgba(31, 77, 44, 0.20)`.
- **warning** — bg `#fff0d6` (warm amber wash), text `#7a4a00`, border `rgba(122, 74, 0, 0.20)`.
- **danger** — bg `#fde2eb` (uses brand-soft pink), text `#651a39` (uses brand wine-dark), border `rgba(101, 26, 57, 0.30)`. Note: danger is brand-coherent — it uses the same pink + wine pair as the CTA system, just at smaller scale.
- **info** — bg `#e6e8f5` (soft slate-blue wash), text `#2a2a4a`, border `rgba(42, 42, 74, 0.15)`.

The unusual choice: danger uses *the brand colors* (pink + wine) rather than a separate red ladder. This reinforces the single-brand-system discipline — there is no "danger red" separate from the brand wine; the brand color *is* the urgent color.

## 3. Typography Rules

### Font Family

- **Display & Serif**: `"Brett", "__brett_523e52", "Georgia", "Times New Roman", serif` — high-contrast custom serif loaded via the Next.js `__brett_523e52` font hash. Used at weight 400 / 500. The defining display face.
- **Body**: `"Booton", "__booton_bab293", system-ui, Roboto, sans-serif` — custom geometric sans loaded via `__booton_bab293` font hash. Used at 400 / 500 / 600.
- **Mono**: `"JetBrains Mono", Menlo, Monaco, monospace` — pragmatic mono fallback.
- **OpenType features**: `liga`, `kern`, `onum` (old-style figures) on serif; `liga` and `kern` on body; `tnum` and `zero` on mono.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| Display Hero | Brett | 96px | 400 | 0.95 | -0.025em | liga | Largest hero variant |
| Display | Brett | 80px | 400 | 0.98 | -0.02em | liga | Section intro at scale |
| H1 | Brett | 72px | 400 | 1.0 | -0.02em | liga | The canonical Descript hero |
| H2 | Brett | 48px | 400 | 1.05 | -0.015em | liga | Major section |
| H3 | Brett | 32px | 400 | 1.15 | -0.01em | — | Sub-section, in Brett serif |
| H3 Label | Brett | 18px | 400 | 1.0 | 0.04em | — | The red-orange dingbat — chapter-marker section label |
| H4 | Booton | 22px | 500 | 1.25 | normal | — | Card heading (switches to body face) |
| H5 | Booton | 18px | 500 | 1.35 | normal | — | Inline emphasis |
| Eyebrow | Booton | 14px | 600 | 1.4 | 0.06em | uppercase | Section pre-label |
| Body Large | Booton | 20px | 400 | 1.55 | normal | — | Lede paragraph |
| Body | Booton | 17px | 400 | 1.55 | normal | — | Default body copy (notably 17px, not 16px) |
| Body Small | Booton | 15px | 400 | 1.5 | normal | — | Captions, sidebars |
| Caption | Booton | 13px | 400 | 1.4 | normal | — | Image captions |
| Caption Tabular | Mono | 13px | 500 | 1.4 | normal | tnum | Stats, data labels |
| Label | Booton | 12px | 600 | 1.3 | 0.06em | — | UI labels |
| Button | Booton | 15px | 600 | 1.0 | normal | — | CTA copy |
| Pull Quote | Brett | 36px | 400 | 1.2 | -0.015em | italic | Editorial pull-quote in serif italic |
| Code | Mono | 14px | 400 | 1.55 | normal | — | Inline + block |

### Principles

- **Inverted serif/sans duet — serif is the display, sans is the body.** Where Notion uses sans display + serif body (NotionInter + Lyon Text), Descript flips the polarity — Brett serif as display, Booton sans as body. This is the brand's defining typographic move and what makes the page read as "magazine-spread" rather than "AI-utility."
- **Brett at weight 400 only.** Headlines hit 400 — not 500, not 700. The serif's high-contrast strokes carry the weight; going heavier would feel shouty against the cream-pink.
- **The H3 dingbat is the brand signature.** Brett at 18px / 400 / `0.04em` tracking in red-orange — a magazine chapter marker that lives in the typography ladder. It's not an eyebrow; it's a section label that has been promoted to brand-typographic status.
- **Booton fills 400 / 500 / 600 — Brett never collides on weight.** The two faces never compete: Brett stays at 400 (occasionally 500 for H4 if it's set in Brett), Booton fills the body weight range. Hierarchy is typeface-driven, not weight-driven.
- **Body at 17px, not 16px.** Descript's default body is 17px / 1.55 — between the SaaS-standard 16px and the editorial 18px (Kit, Notion). The 17px lands the brand right between web-app and magazine.
- **Negative tracking compresses with size.** -0.025em at 96px, -0.02em at 72–80px, -0.015em at 48px, -0.01em at 32px, normal at 22px and below.
- **Italics in serif body, never in display H1.** Brett italic carries quoted titles and pull-quotes; the Brett display H1 stays roman.
- **OpenType discipline**: `onum` (old-style figures) in Brett serif so numbers integrate with letters; `tnum` and `zero` in mono for code blocks.

## 4. Component Stylings

### Buttons

**Primary (Wine-Dark Lipstick)**
- Background: `#651a39`. Text: `#ffffff`, Booton 600 / 15px.
- Padding: `14px 28px`. Radius: `12px`. No border.
- Hover: bg → `#4a1129`; transition `220ms ease-standard`.
- Active: bg → `#3a0d20`.
- Use: Primary CTA — *Try Descript free, Start editing, Get started.*

**Secondary (Wine Outlined)**
- Background: transparent. Text: `#651a39` wine. Border: `1px solid #651a39`. Radius: `8px` (notably tighter than primary).
- Same padding (14×28), font (Booton 600 / 15px) as primary.
- Hover: bg → `#fde2eb` soft pink wash.
- Use: Twin to primary — *Watch the demo, Read more.*

**Ghost (Quiet)**
- Background: transparent. Text: `#1a1a1a`. No border.
- Padding: `8px 14px`. Booton 500 / 15px.
- Hover: text → `#651a39` wine.
- Use: Nav links, footer secondary actions.

### Cards

**Cream Card (Default)**
- Background: `#fffafc` softer cream-pink. Border: `1px solid #00000010`. Radius: `16px`. Padding: `32px`.
- Shadow: none.
- Hover: border → `#0000001a`; gentle wine-tinted 12px shadow at 6% wine.
- Use: Default feature card — barely lifted from the cream-pink canvas.

**Rose Inset Card**
- Background: `#f7e8ed` rose surface. Border: `1px solid #00000010`. Radius: `16px`. Padding: `32px`.
- Use: Nested feature blocks, testimonials, capability detail cards.

**Pink-Shell Screenshot Card**
- Background: `#fde2eb` soft pink. Border: none. Radius: `24px`. Padding: `24px`.
- Inner: in-product screenshot at original aspect ratio, no neutral browser chrome.
- Use: Wraps in-product screenshots in a warm-pink editorial frame instead of the typical neutral chrome.

### Badges, Tags, Pills

**Eyebrow Label** — no chrome, just type. Booton 600 / 14px / uppercase / 0.06em tracking, colour `#7a6770`. Sits above section headlines.

**Red-Orange Dingbat (H3-as-label)** — no chrome, Brett serif at 18px / 400 / 0.04em tracking, colour `#f73b3b` or `#ff5340`. The brand's defining chapter-marker label.

**Soft-Pink Pill** — bg `#fde2eb`, text `#651a39` wine, radius `9999px`, padding `6px 14px`. Status / NEW / FEATURED labels.

### Inputs / Forms

- Background: `#ffffff`. Border: `1px solid #00000026`. Radius: `12px`. Padding: `12px 16px`.
- Font: Booton 400 / 16px. Placeholder: `#a8949c`.
- Focus: `0 0 0 2px #651a39` wine ring, border → `#651a39`.
- Error: border → `#651a39` (uses brand wine for danger), bg → `#fde2eb`.
- Helper: caption 13px slate-soft below.

### Navigation

- Header height `72px`. Background `#fff7fa` cream-pink (becomes opaque-pink-blur on scroll).
- Logo: Descript wordmark in Brett serif, near-black with subtle wine accent.
- Nav links: Booton 500 / 15px, colour `#1a1a1a`, padding `8px 14px`. Hover → `#651a39` wine.
- Right-side CTA pair: ghost "Sign in" + wine-dark pill "Try Descript free".
- Mobile: full-screen sheet, links stack at 28px / Brett 400 (italic for headings).

### Optional Components

**Pull Quote** — Brett 36px / 400 / italic with `-0.015em` tracking, near-black `#1a1a1a` text, with a 4px wine vertical rule on the left edge or a rose-pink block surrounding.

**Footnote** — Booton 13px / 400, slate-soft; sits on a thin border-subtle rule.

**Code Block** — Mono 14px, bg `#fffafc` softer cream-pink, radius `8px`, padding `16px 20px`, border `#00000010`. Inline code: same font, bg `rgba(101, 26, 57, 0.06)`, padding `2px 6px`, radius `4px`.

**Tooltip** — bg `#26171d` wine-near-black, text `#ffffff`, radius `6px`, padding `8px 12px`, font `13px / Booton 500`.

**Modal** — bg `#ffffff`, radius `16px`, shadow `rgba(101, 26, 57, 0.10) 0 24px 48px -16px`, max-width `560px`. Cream-pink backdrop overlay at 70% opacity.

## 5. Layout Principles

### Spacing System

- **Base unit**: 4px.
- **Scale**: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160 — Fibonacci-adjacent.
- **Density observation**: Descript runs generous magazine-pace spacing. Headlines float in 96–128px of margin; body paragraphs sit on 24px line gaps.

### Grid & Container

- **Page max width**: `1280px`. Standard SaaS width but feels editorial because the cream-pink extends edge-to-edge.
- **Site gutter**: `clamp(24px, 5vw, 64px)`.
- **Grid**: 12 columns with 24px gutters. Hero blocks span full width; capability rails span 6–8 columns; sidebars span 4.
- **Hero treatment**: full-bleed cream-pink, 72px Brett H1 anchored left, wine-dark CTA pill below, in-product screenshot in pink-shell frame to the right.

### Whitespace Philosophy

The cream-pink canvas runs edge to edge without breaking into a dark band or color zone — the consistency of canvas is the design. Section gutters run **96–128px** between major editorial blocks; minor blocks sit on 64–80px gaps; intra-section spacing uses 24–48px. The page is structured as a sequence of editorial spreads: hero, feature spread, testimonial, product walkthrough, FAQ — each spread sitting on the same cream-pink, with rose insets and pink shells providing tonal punctuation.

### Section Cadence

- Hero (cream-pink + Brett H1 + pink-shell screenshot) → Feature Spread (3-up cream-soft cards) → Testimonial (rose inset block with Brett italic pull-quote) → Product Walkthrough (cream-pink with red-orange H3 dingbats marking chapters) → FAQ (cream-pink, Booton sans throughout) → Footer (cream-pink ground, slate-soft micro-text).
- Cream-pink runs edge-to-edge. There are no dark bands, no chromatic interruptions, no gradient transitions.
- Pink-shell screenshot frames appear once or twice per page as visual anchors.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| Micro (xs) | 4px | Inline chip corners, decorative dividers |
| Standard (sm) | 8px | Secondary buttons, code blocks, dropdowns |
| Comfortable (md) | 12px | Primary CTA, inputs |
| Relaxed (lg) | 16px | Cards, modals, feature blocks |
| Featured (xl) | 24px | Hero shells, pink-shell screenshot frames |
| Pill | 9999px | Soft-pink chips, status pills |

Descript's signature radii: **12px primary CTA / 8px secondary / 16px cards / 24px screenshot shells**. Mixed radii within a primitive are avoided (a single button is one radius; a card is one radius). The asymmetry between primary and secondary buttons (12px vs 8px) is intentional — secondary actions read as slightly more compact, less prominent.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat — no shadow | Default page surface, hero, body sections |
| 1 | Tonal layering (`#fffafc` on `#fff7fa`) | Cream-soft cards, nested panels |
| 2 | Hairline + tonal | Default cards |
| 3 | `rgba(101, 26, 57, 0.06) 0 4px 12px` | Sticky nav, dropdowns |
| 4 | `rgba(101, 26, 57, 0.08) 0 12px 32px -12px` | Hover-lifted cards, popovers |
| 5 | `rgba(101, 26, 57, 0.10) 0 24px 48px -16px` | Modals, dialogs |

### Shadow Philosophy

Descript's depth comes from **soft tonal layering** (`#fff7fa` → `#fffafc` → `#f7e8ed`) and 10% black hairlines. Cards rarely cast shadows; when they do, the shadow is warm and diffuse, more "page lift" than "elevation." Product screenshots are framed in soft pink shells (`#fde2eb` at 24px radius) rather than the typical neutral browser chrome — the shell *is* the elevation device, treating the product UI like a magazine artifact rather than a layered interface element. The brand never uses cool blue-tinted shadows or hard drop-shadows; that would crack the warm-pink temperature and the editorial register.

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

- **Button hover (wine pill)**: bg `#651a39` → `#4a1129`; transition `220ms ease-standard`. No lift, no scale.
- **Button hover (outlined)**: bg transparent → `#fde2eb` soft-pink wash.
- **Card hover**: border deepens from `#00000010` to `#0000001a`; gentle wine-tinted shadow appears.
- **Link hover**: colour `#651a39` → `#4a1129` over 120ms; underline thickens 1px → 2px.
- **Input focus**: 2px wine ring fades in over 120ms; border darkens to wine.
- **Pink-shell screenshot hover**: gentle 1px lift + shadow intensification; transition `320ms ease-editorial`.

### Page Transitions

Editorial reveal: hero text fades in over 440ms with 24px translate-up; below-fold sections use `IntersectionObserver` to fade in at 80% viewport, 320ms duration, no translate. Product walkthroughs use scroll-pinned reveals where each red-orange H3 dingbat fades in with the section's first paragraph.

### Reduced Motion

`@media (prefers-reduced-motion: reduce)` — all transitions become opacity-only, durations halved. Translate animations, scale-ins, and scroll-pinned reveals are disabled entirely; sections snap to final state.

## 9. Accessibility & A11y

### Contrast Pairs

- **`#1a1a1a` text on `#fff7fa` bg**: 16.2:1 — AAA at all sizes.
- **`#7a6770` text on `#fff7fa` bg**: 5.4:1 — AA at body sizes.
- **`#a8949c` text on `#fff7fa` bg**: 3.0:1 — AA only at large sizes (≥18px or ≥14px bold). Used for eyebrows and helper.
- **`#ffffff` text on `#651a39` wine button**: 10.5:1 — AAA.
- **`#651a39` text on `#fde2eb` soft-pink chip**: 9.4:1 — AAA.
- **`#f73b3b` red dingbat on `#fff7fa` bg**: 4.6:1 — AA at large sizes (≥18px); the H3 dingbat sits at 18px so it's contrast-safe.

### Focus Indicators

- Default focus ring: `0 0 0 2px #651a39` wine with 2px offset on cream-pink pages.
- On dark surfaces (rare): `0 0 0 2px #fff7fa` cream-pink.
- All interactive surfaces must have a visible focus state — no `outline: none` without a replacement.

### ARIA Patterns

- **Navigation**: `<nav aria-label="Main">` with skip-link to main content.
- **Disclosure**: `<button aria-expanded aria-controls>` for collapsible feature sections.
- **Dialog**: `role="dialog" aria-modal="true" aria-labelledby` with focus trap and Esc-to-close.
- **Combobox** (search): `role="combobox" aria-expanded aria-autocomplete="list"`.
- **Live regions**: `aria-live="polite"` for form validation messages.
- **Pink-shell screenshots**: include detailed alt text or `<figcaption>` explaining the in-product UI shown.

### Keyboard Navigation

- Tab order matches visual flow: skip-link → nav → hero CTA → main content → footer.
- All buttons, links, inputs reachable via Tab; modals trap focus inside until dismissed.
- `Esc` closes modals and the mobile menu sheet.
- Arrow keys navigate within tab groups (FAQ accordions, walkthrough chapters).

### Screen Reader Hints

- Decorative red-orange H3 dingbats announce as standard headings; the colour is ornamental but the text is functional.
- Pink-shell screenshot frames have `<figure>` + `<figcaption>` for context.
- Icon-only buttons have `aria-label`.
- The Descript wordmark uses `aria-label="Descript"`.

### Reduced Motion

Honoured via the global media query. All translate/scale animations become opacity-only; durations halve. Scroll-pinned reveals and pink-shell hover lifts are disabled entirely.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Use |
|---|---|---|
| Mobile | < 640px | Single column, full-bleed sections, 40px H1 |
| Tablet | 640–1024px | 2-column rails, 56px H1 |
| Desktop | 1024–1280px | Full 12-col grid, 72px hero, 680px prose |
| Wide | 1280–1440px | Site max width hits |
| Ultra | > 1440px | Page locks to 1280, gutters expand |

### Touch Targets

- Minimum tap target: 44×44px (WCAG AAA).
- Buttons: 48px minimum height on mobile (14px vertical padding × 2 + line-height).
- Nav link tap area: 44×44px even when visual padding is smaller.

### Collapsing Strategy

- **Header**: full nav at ≥1024px; hamburger sheet below.
- **Hero**: 96px display → 72px H1 → 56px → 48px → 40px across breakpoints. Brett serif scales down but never switches to sans.
- **Capability grid**: 3-up at desktop, 2-up at tablet, 1-up at mobile.
- **Body width**: 680px → fluid 90vw at mobile.
- **Pink-shell screenshots**: full-width on mobile; preserve 24px radius and 24px interior padding.
- **Section spacing**: 128px → 96px → 64px across sizes.

### Image Behavior

- In-product screenshots use `srcset` with 1x/2x/3x; aspect-ratio enforced to prevent layout shift.
- Hero imagery uses `aspect-ratio` to prevent layout shift.
- Lazy-loading on below-fold images; eager on hero.
- Pink-shell frames use CSS `background-color` (no images) so they render instantly around the lazy-loaded screenshot.

### Container Queries

Used inside capability cards to switch icon position when card width crosses 320px (icon-left vs. icon-top). Used inside FAQ accordions to switch from inline-meta to stacked.

## 11. Content & Voice

### Tone

**Creative, warm, storyteller-direct.** Descript writes the way a magazine art director writes to creative professionals — direct address ("Edit video like a doc"), aware that the reader is themselves a creator (podcaster, video maker, writer). The voice is the inverse of "AI utility" — it sounds like a tool that has been used by storytellers and shaped by their feedback.

### Microcopy Patterns

- **Button verbs**: "Try Descript free," "Start editing," "Get started," "Watch the demo," "See examples." Sentence case, never all-caps, never urgent.
- **Error messages**: "Something didn't quite work — try uploading again, or [contact support]." Conversational, low-stakes.
- **Success confirmations**: "Saved." "We'll be in touch soon." Brief, warm.
- **Loading states**: "Transcribing your audio…" "Generating overdub…" — context-specific where possible, AI-aware language.

### Empty States

What they say: explain the state and offer the next step. *"No projects yet. Upload an audio file or record directly to get started."*
What they don't say: "Oops!", "Whoops!", any apologetic exclamation. Empty states are normal, not failures.

### CTA Verb Conventions

- Primary on hero: "Try Descript free," "Start editing," "Get started"
- Secondary: "Watch the demo," "See examples," "View pricing"
- Footer: "Read the blog," "Browse templates," "Sign in," "Help center"

The brand never uses "Sign up now!" or "Get started today!" — the tone is invitational and creative, never urgent. Descript trades on creative-craft credibility, not scarcity.

## 12. Dark Mode & Theming

**Light-only — no dark variant offered on the marketing surface.** The cream-pink canvas is the brand's defining choice; a dark mode would collapse the editorial-magazine register that distinguishes Descript from every other AI tool. The cream-pink `#fff7fa` is non-negotiable, even for code-heavy product walkthroughs. The wine-dark CTA, the red-orange dingbats, and the pink-shell screenshot frames are all calibrated against the cream-pink ground; porting them to a dark canvas would require re-keying the entire chromatic system.

The product UI (Descript's video/audio editing workspace) handles its own theming separately and ships a dark variant for in-product use — that variant is documented at the product layer, not on the marketing surface. Inside the marketing site at `descript.com`, when product screenshots show the in-product dark UI, the screenshots sit inside the pink-shell frame so the cream-pink canvas is preserved as the page-level background. The marketing site is intentionally light-only across all viewports and times of day.

If a downstream surface ever needs a dark companion, the rule would be: keep the wine-dark and red-orange accents at full saturation, swap cream-pink for `#1a1416` (warm-deep), and lift cards to `#26181e` — but this is not currently shipped.

## 13. Lineage & Influences

Descript's design DNA is **beauty-editorial software**. The cream-pink canvas, custom serif display, wine-dark lipstick CTA, and pink-shell screenshot frames quote Glossier, *The Wing*, and beauty-counter editorial design directly. Where every other AI tool reaches for purple gradients (early OpenAI), butter-yellow brutalism (Mistral), pure-white minimalism (current OpenAI), or chrome-on-black slabs (Pika, Runway), Descript reaches for the visual language of beauty publications and adopts it for software.

What it inherits: Glossier and The Wing's cream-pink editorial canvas + lipstick-dark accents (a beauty-editorial colorway adopted by software); Notion's custom in-house sans+serif duet, but with the serif elevated to display rather than editorial accent; Substack's confidence in a single saturated brand color over a warm canvas. What it borrows from contemporaries: Stripe's hairline-border restraint, Anthropic's eyebrow + body + section-rhythm cadence. What it rejects: dark canvases, purple gradients, neon accents, illustrated mascots, "AI tech" iconography — the entire AI-tool category register.

**Named influences:**

- **Glossier / The Wing** — Cream-pink editorial canvas + lipstick-dark accents as a beauty-editorial colorway adopted by software. *https://www.glossier.com*
- **Notion** — Custom in-house sans+serif duet, but with the serif elevated to display rather than editorial accent. *https://www.notion.com*
- **Substack** — Confidence in a single saturated brand color (Substack's orange, Descript's wine) over a warm canvas. *https://substack.com*
- **Vogue / The New Yorker** — Magazine chapter-marker dingbat conventions; H3-as-label typography.
- **Cabinet / Apartamento** — Independent magazine layout conventions; cream-pink + serif + warm typography.
- **Brett (custom serif via Next.js)** — Display face proprietary to Descript.
- **Booton (custom geometric sans via Next.js)** — Body face proprietary to Descript.
- **The Descript in-house brand team** — Inverted serif/sans duet, lipstick-dark CTA discipline, pink-shell screenshot frames.

## 14. Do's and Don'ts

### Do

- **Do** keep the canvas warm — `#fff7fa` cream-pink, not white. The warmth is what differentiates Descript from every other AI tool.
- **Do** pair Brett (serif display) with Booton (sans body); the inverted sans+serif duet is the brand fingerprint.
- **Do** treat red-orange as ornament, not action — section labels glow red, but CTAs are always wine-dark.
- **Do** ship the H3 dingbat — Brett serif at 18px / 0.04em / red-orange — as a chapter marker. It's the brand's typographic signature.
- **Do** keep Brett at weight 400 only. The serif's contrast carries the weight; going heavier feels shouty.
- **Do** wrap in-product screenshots in pink shells (`#fde2eb` bg, 24px radius) instead of neutral browser chrome.
- **Do** use wine-dark `#651a39` for primary CTAs. The lipstick saturation is the beauty-editorial register.
- **Do** scale body to 17px (not 16px). The slightly larger body reads as editorial.
- **Do** use slate scales that lean wine (`#7a6770`, `#a8949c`) rather than neutral grey. Pink-undertone neutrals are part of the brand.
- **Do** prefer soft tonal layering (cream → cream-soft → rose) over drop shadows for elevation.

### Don't

- **Don't** introduce a dark canvas mode; the cream-pink is non-negotiable, even for code-heavy product walkthroughs.
- **Don't** mix the red label color with the wine CTA color in the same module — they belong to different layers.
- **Don't** apply hard drop-shadows; warm diffuse lift is the elevation language.
- **Don't** use sans for display. Brett serif at 72px is the brand's loudest move.
- **Don't** use white or warm cream alone. The pink tint in `#fff7fa` is the brand differentiator.
- **Don't** use neutral grey shadows. Wine-tinted at low opacity is the depth language.
- **Don't** ship pure-neutral browser chrome on screenshots. The pink-shell frame is the editorial signal.
- **Don't** introduce a third type family. Brett + Booton + Mono is the system.
- **Don't** use weight 600 or 700 on Brett. Weight 400 is the brand discipline.
- **Don't** mix tech-startup verbs ("Sign up free!", "Get started today!") with the brand voice. The tone is creative-direct.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #fff7fa
bg-soft: #fffafc
surface: #ffffff
surface-rose: #f7e8ed
text: #1a1a1a
brand-wine: #651a39
brand-wine-hover: #4a1129
brand-soft-pink: #fde2eb
accent-red: #f73b3b
accent-orange: #ff5340
border: #0000001a
```

### Example Component Prompts

1. **"Create a hero in Descript style — cream-pink `#fff7fa` canvas, 72px H1 in Brett serif at weight 400 with `-0.02em` tracking, 17px Booton body in near-black at 1.55 line-height, single primary CTA in wine-dark `#651a39` pill at 12px radius with white label, no gradient, no animation. Reading column capped at 680px."**

2. **"Design a feature card in Descript style — `#fffafc` softer cream-pink background, 16px radius, 1px `#00000010` hairline border, 32px interior padding, 22px Booton 500 heading, 17px Booton 400 body in near-black, no shadow, hover deepens border to `#0000001a` and adds wine-tinted 12px shadow."**

3. **"Build a red-orange H3 dingbat — Brett serif at 18px / 400 / `0.04em` tracking in `#f73b3b` red, sits as a section-chapter label above the H2 heading, no chrome, treats the colour as ornament not action."**

4. **"Compose a pink-shell screenshot frame — `#fde2eb` soft-pink background, 24px radius, 24px interior padding wrapping the in-product screenshot. Replaces neutral browser chrome with a warm-pink editorial frame that treats the product UI like a magazine artifact."**

5. **"Render an editorial pull-quote — Brett serif 36px / 400 / italic with `-0.015em` tracking, near-black text, 4px wine-dark vertical rule on the left edge, sits in a `#f7e8ed` rose surface block at 16px radius, 48px interior padding."**

6. **"Create the primary nav — 72px header height, cream-pink `#fff7fa` background (becomes opaque-pink-blur on scroll), Descript wordmark in Brett serif near-black, links 15px Booton 500 with wine-on-hover, right-aligned ghost 'Sign in' + wine-dark pill 'Try Descript free' pair."**

### Iteration Guide

1. **Start with cream-pink, not white or warm-cream-alone.** If the bg is `#ffffff` or `#fff8dc`, you've drifted toward Mintlify or Anthropic territory. The pink tint in `#fff7fa` is the entry ticket.
2. **Switch the headline to Brett serif at 72px / weight 400.** Sans display at the same size collapses the brand into AI-tool territory. The serif is the differentiator.
3. **Body to Booton sans at 17px.** Not 16px (web app) and not 18px (Kit, Notion). 17px lands the brand right between web-app and magazine.
4. **Wine-dark CTA, never coloured.** `#651a39` lipstick saturation is the action layer. Don't try to make the CTA red, orange, or pink — those colors belong to the ornament layer.
5. **Add red-orange H3 dingbats.** Brett serif at 18px / 0.04em / `#f73b3b` between major sections. The dingbat is the brand's typographic signature.
6. **Wrap screenshots in pink shells.** Replace neutral browser-chrome frames with `#fde2eb` 24px-radius shells.
7. **Drop the shadows; use tonal layering.** Cream → cream-soft (`#fffafc`) → rose (`#f7e8ed`) — the three-tier surface ladder provides elevation without explicit shadows.
8. **Calm the verbs.** Replace "Sign up free!" with "Try Descript free"; replace "Learn more →" with "Watch the demo". The voice is creative-direct.
