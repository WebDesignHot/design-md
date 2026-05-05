---
name: Remix
tagline: 'Signature `#3992ff` blue on pure white with Inter — a nested-routes web framework dressed as a manifesto poster.'
author: webdesignhot
source_url: https://remix.run
spec: design.md/v1.5
quality: curated
featured: false
categories: [dev-tools]
tags: [light, brutalist, sans, structured, cool, minimal]
preview_swatch: ['#ffffff', '#000000', '#3992ff']
related: [vercel, vite, tailwindcss]
description: 'Remix''s site reads like a printed manifesto — pure white canvas, pure black type, a single confident `#3992ff` blue for action, and Founders Grotesk-style display set at billboard scale. Where most dev-tool sites layer gradients and dark mode flourishes, Remix strips everything back to type and grid: a nested-routes web framework that wants to be read like a thesis. The R-logo is monochrome; the discipline is the personality.'

colors:
  # Primary surfaces
  bg: '#ffffff'                    # pure paper-white canvas
  bg-invert: '#000000'             # campaign hero band, code surfaces
  surface: '#f7f7f7'               # subtle card lift on white
  surface-strong: '#ededed'        # emphasized panels
  surface-soft: '#fafafa'          # softer alternative
  bg-overlay: 'rgba(0, 0, 0, 0.5)' # modal scrim

  # Text scale
  text: '#121212'                  # primary near-black body — softened from pure black
  text-strong: '#000000'           # display headlines, full-weight
  text-muted: '#6b6b6b'            # nav, metadata, captions
  text-soft: '#8a8a8a'             # tertiary copy
  text-faint: '#bdbdbd'            # disabled, watermark
  text-on-bg-invert: '#ffffff'     # text on the inverse-black band

  # Brand — single confident blue
  brand: '#3992ff'                 # Remix blue — single action accent and wordmark
  brand-hover: '#1c6fd6'           # darker blue on hover
  brand-active: '#155ab0'          # pressed state
  brand-soft: 'rgba(57, 146, 255, 0.1)'   # tinted backgrounds, focus rings
  brand-tint: 'rgba(57, 146, 255, 0.15)'

  # Accent — sparing red for warnings/secondary
  accent: '#f44250'                # secondary warning red used in marketing
  accent-soft: 'rgba(244, 66, 80, 0.1)'

  # Borders
  border: 'rgba(0, 0, 0, 0.1)'     # 10% black hairline
  border-strong: 'rgba(0, 0, 0, 0.2)'
  border-subtle: 'rgba(0, 0, 0, 0.05)'
  border-brand: '#3992ff'
  border-focus: '#3992ff'
  border-on-invert: 'rgba(255, 255, 255, 0.15)'

  # Code surface (inverse)
  code-bg: '#000000'
  code-text: '#ffffff'
  code-border: 'rgba(255, 255, 255, 0.15)'
  code-keyword: '#3992ff'          # blue keywords
  code-string: '#a3eb8e'           # soft green strings
  code-comment: '#6b6b6b'
  code-fn: '#fbbf24'

  # Semantic
  success: '#10b981'
  success-bg: 'rgba(16, 185, 129, 0.1)'
  warning: '#f59e0b'
  warning-bg: 'rgba(245, 158, 11, 0.1)'
  danger: '#f44250'
  danger-bg: 'rgba(244, 66, 80, 0.1)'
  info: '#3992ff'
  info-bg: 'rgba(57, 146, 255, 0.1)'

  # On-color
  on-brand: '#ffffff'
  on-invert: '#ffffff'
  on-bg: '#121212'
  on-surface: '#121212'

typography:
  display:
    family: '"Founders Grotesk", "Inter Display", "Inter Variable", -apple-system, "system-ui", sans-serif'
    weights: [500, 600, 700]
    opentype-features: ['ss01', 'tnum']
  body:
    family: 'Inter, "Inter Variable", -apple-system, "system-ui", sans-serif'
    weights: [400, 500, 600]
    opentype-features: ['ss01', 'cv11']
  mono:
    family: '"JetBrains Mono", "Fira Code", ui-monospace, Menlo, Consolas, monospace'
    weights: [400, 500]
    opentype-features: ['zero', 'ss01']
  scale:
    display-hero:    { size: 128, weight: 700, lineHeight: 0.9, tracking: '-0.045em' }
    display:         { size: 96, weight: 700, lineHeight: 0.95, tracking: '-0.04em' }
    h1:              { size: 64, weight: 700, lineHeight: 1.0, tracking: '-0.03em' }
    h2:              { size: 48, weight: 700, lineHeight: 1.05, tracking: '-0.025em' }
    h3:              { size: 36, weight: 600, lineHeight: 1.15, tracking: '-0.015em' }
    h4:              { size: 22, weight: 600, lineHeight: 1.3, tracking: '0' }
    h5:              { size: 18, weight: 600, lineHeight: 1.35, tracking: '0' }
    body-large:      { size: 20, weight: 400, lineHeight: 1.6 }
    body:            { size: 18, weight: 400, lineHeight: 1.6 }
    body-small:      { size: 16, weight: 400, lineHeight: 1.55 }
    quote:           { size: 28, weight: 500, lineHeight: 1.35 }
    label:           { size: 13, weight: 600, lineHeight: 1.4, tracking: '0.02em' }
    caption:         { size: 13, weight: 400, lineHeight: 1.4 }
    overline:        { size: 12, weight: 600, lineHeight: 1.3, tracking: '0.08em', transform: 'uppercase' }
    code:            { size: 14, weight: 400, lineHeight: 1.6, family: mono }
    code-inline:     { size: 13, weight: 500, lineHeight: 1.4, family: mono }
    code-micro:      { size: 12, weight: 400, lineHeight: 1.5, family: mono }

radius:
  micro: 2
  xs: 2
  sm: 4
  md: 6
  lg: 8
  card: 8
  button: 6
  pill: 9999

spacing:
  base: 4
  scale: [0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160]

layout:
  page-width: 1200
  prose-width: 720
  container: 1200
  gutter: 24
  section-padding: 120
  header-height: 72
  grid: 12

components:
  button-primary:
    bg: '#000000'
    color: '#ffffff'
    radius: 6
    weight: 600
    padding: '12px 24px'
    use: 'Black solid CTA — primary action, manifesto-grade'
  button-brand:
    bg: '#3992ff'
    color: '#ffffff'
    radius: 6
    weight: 600
    padding: '12px 24px'
    use: 'Blue brand button — wordmark-aligned chromatic CTA'
  button-secondary:
    bg: 'transparent'
    color: '#121212'
    border: '1px solid rgba(0, 0, 0, 0.2)'
    radius: 6
    weight: 600
    padding: '12px 24px'
    use: 'Ghost on white canvas — paired with primary'
  button-on-invert:
    bg: '#ffffff'
    color: '#000000'
    radius: 6
    weight: 600
    padding: '12px 24px'
    use: 'Inverted button on the black hero band'
  card:
    bg: '#ffffff'
    border: '1px solid rgba(0, 0, 0, 0.1)'
    radius: 8
    padding: '24px'
    use: 'Feature tile, doc preview — flat on white canvas'
  code-block:
    bg: '#000000'
    color: '#ffffff'
    border: '1px solid rgba(255, 255, 255, 0.15)'
    radius: 8
    font: 'JetBrains Mono 14px'
    padding: '20px 24px'
    use: 'Inverse-black code surface — JetBrains Mono'
  badge:
    bg: 'rgba(57, 146, 255, 0.1)'
    color: '#3992ff'
    border: '1px solid #3992ff'
    radius: 9999
    padding: '2px 10px'
    font: 'Inter 12px weight 600 uppercase 0.08em'
    use: 'Version chips, feature flags — blue pill'
  input:
    bg: '#ffffff'
    color: '#121212'
    border: '1px solid rgba(0, 0, 0, 0.2)'
    radius: 6
    padding: '12px 16px'
    focus-ring: '0 0 0 3px rgba(57, 146, 255, 0.3)'
    use: 'Newsletter, search — paper-grade input'
  inverse-band:
    bg: '#000000'
    color: '#ffffff'
    padding: '120px 0'
    use: 'Manifesto-grade inverse hero band — print-negative emphasis'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-decelerate: 'cubic-bezier(0, 0, 0.2, 1)'
  ease-accelerate: 'cubic-bezier(0.4, 0, 1, 1)'
  duration-instant: 80
  duration-fast: 150
  duration-standard: 250
  duration-slow: 400
  duration-deliberate: 600
  hover-shift: 'translateY(-1px) over 150ms ease-standard'
  reduced-motion: 'respects prefers-reduced-motion: reduce — all transitions to opacity-only at 80ms'

breakpoints:
  mobile: 640
  tablet: 768
  laptop: 1024
  desktop: 1280
  wide: 1536

shadows:
  none: 'none'
  ambient: '0 1px 2px rgba(0, 0, 0, 0.05)'
  standard: '0 4px 12px rgba(0, 0, 0, 0.08)'
  elevated: '0 12px 32px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06)'
  deep: '0 24px 48px rgba(0, 0, 0, 0.16), 0 8px 16px rgba(0, 0, 0, 0.08)'
  ring: '0 0 0 3px rgba(57, 146, 255, 0.3)'
  ring-strong: '0 0 0 3px #3992ff'

accessibility:
  contrast-text-on-bg: 17.4              # #121212 on #ffffff — AAA all sizes
  contrast-strong-on-bg: 21.0            # #000 on #fff — AAA all sizes
  contrast-muted-on-bg: 5.4              # #6b6b6b on #fff — AA body, AAA large
  contrast-text-on-brand: 4.5            # white on #3992ff — AA body, AAA large
  contrast-text-on-invert: 21.0          # white on black band — AAA all sizes
  contrast-brand-on-bg: 4.5              # #3992ff on #fff — AA body, AAA large
  focus-ring: '3px solid rgba(57, 146, 255, 0.3) with 2px offset'
  reduced-motion-honored: true
  keyboard-nav: 'tab order: skip link, logo, main nav, primary CTA, content, footer. Inverse-band sections preserve order via aria-label.'
  aria-patterns: 'docs nav uses [role=navigation] with aria-label="Docs". Code copy buttons announce "Copy code". Inverse-bands use a contrasting role announcement when entered.'

dark-mode: 'light-first by design — Remix is fundamentally an editorial, paper-white brand. Dark mode is offered for the docs surface only at /docs?theme=dark, where bg flips to #0a0a0a, text to #ffffff, and the brand blue stays at #3992ff. Marketing pages do not offer a dark variant; the inverse-black hero band IS the dark moment, and using full dark mode would dissolve that contrast strategy.'

lineage:
  summary: |
    Remix's marketing voice is manifesto-grade. The canvas is pure
    `#ffffff` paper-white, the type is pure `#121212` near-black, and
    the only chromatic intervention is a single Remix blue (`#3992ff`)
    used for action and the wordmark. Display type runs at billboard
    scale — H1 at 96px, 0.95 line-height, `-0.04em` tracking — closer
    to a Pentagram-era poster than a typical SaaS landing. Founders
    Grotesk (or Inter Display) supplies the wide, confident grotesk
    cut. The framework explicitly sells itself as a "return to the
    web platform," and the design embodies that thesis: no dark mode,
    no gradient backdrops, no soft pastels — just type, grid, and a
    deliberate use of pure-black hero bands that flip the page into
    inverse-print mode for emphasis. Where Next.js leans Vercel-cool,
    Remix leans editorial-print; where Astro leans cosmic, Remix
    leans civic. The closest analogues are Stripe Press and Apple's
    Pro Display marketing — sites that trust their typography to do
    the entire job. The R-logo is monochrome by design; the
    discipline is the personality.
  influences:
    - name: Stripe Press
      role: 'Editorial-print discipline; black-on-white as a serious-software signal.'
      url: https://press.stripe.com
    - name: Pentagram
      role: 'Billboard-scale display type as the primary expressive element; manifesto-poster aesthetic.'
      url: https://www.pentagram.com
    - name: Apple Pro Display
      role: 'Massive headline weight and confident, uncluttered grid.'
      url: https://www.apple.com/mac-pro
    - name: Founders Grotesk (Klim Type Foundry)
      role: 'Wide grotesk with rounded counters; editorial-poster register over Silicon-Valley-flat.'
      url: https://klim.co.nz/retail-fonts/founders-grotesk/
    - name: Swiss International Style
      role: 'Grid discipline and typographic confidence as the entire expressive system.'
---

## 1. Visual Theme & Atmosphere

Remix treats its homepage like a printed broadside. The canvas is
pure white at `#ffffff`, the body type is `#121212` near-black, and
the display type runs at 96px with `-0.04em` tracking — closer to a
gallery poster than a software landing. The single chromatic accent
is the Remix blue (`#3992ff`), reserved for the wordmark and the
brand-aligned CTA; the rest of the page does its work in monochrome.

Where Next.js and Vercel use dark mode and gradient backdrops to
signal "modern infrastructure," Remix uses negative space and
editorial type to signal "we expect you to read." The brand wants to
be taken seriously, and the visual language refuses to apologize for
the seriousness. Pure-black inverse hero bands appear for high-stakes
sections — releases, manifestos, opinions — and then the page returns
to white. That black-band-on-white-page rhythm is the brand's depth
strategy: contrast through inversion, not through shadows.

The defining typographic move is the display headline at billboard
scale. Founders Grotesk (or Inter Display as fallback) at 96px+ with
hard `-0.04em` tracking and weight 700 reads like a Pentagram poster.
Founders Grotesk is *wider* than Inter, with rounder counters; it
reads less Silicon-Valley than Geist or pure Inter, and that wider
register is what makes the marketing read editorial rather than
SaaS. Body type is Inter at 18px on a 1.6 line-height — generous for
a landing surface, deliberately so. Remix expects you to read prose,
not skim feature bullets.

Code surfaces use **JetBrains Mono** at 14px on inverse-black panels.
The choice is loaded — JetBrains Mono signals "real engineering,"
distinct from the Geist Mono / Berkeley Mono crowd, and pairs
editorially with the broadside-poster display tone. The total effect
is a page that trusts its typography and grid to do the entire job,
with sparing use of blue and inverse-black for emphasis.

The atmosphere is **civic-editorial**: a framework that wants to be
taken as seriously as a Stripe Press book or an Apple Pro Display
marketing surface. The R-logo itself is monochrome — there is no
chromatic logo treatment, no animated wordmark, no gradient sweep.
The discipline is the personality.

**Key Characteristics**

- Pure white `#ffffff` canvas — paper-grade, never softened
- Near-black `#121212` body / pure black `#000000` display
- Single Remix blue `#3992ff` for action and wordmark
- Founders Grotesk (or Inter Display) at 96px+ for display
- Inter at 18px on 1.6 line-height — generous reading copy
- JetBrains Mono on inverse-black code surfaces
- Inverse-black hero bands as the brand's depth signal
- 6px button radii, 8px card radii — right-angled grid
- 120px section padding — magazine-spread breathing
- Light-first by design; no dark marketing mode

## 2. Color Palette & Roles

### Primary

- **Background** `#ffffff` — pure paper-white canvas. The primary surface across every section. Never softened to `#fafafa` or off-white — paper-grade pure is non-negotiable.
- **Text Primary** `#121212` — body copy, slightly softened from pure black for prose readability. The 1.4% softening prevents pure black from "vibrating" against paper-white at body sizes.
- **Text Strong** `#000000` — display headlines, full-weight pure black. Display copy doesn't suffer the same vibration issue and benefits from the maximum contrast.

### Brand

- **Brand Blue** `#3992ff` — the single confident chromatic action accent. Used on the wordmark, the brand-aligned CTA button, focus rings, and inline emphasis. There is no secondary brand color.
- **Brand Hover** `#1c6fd6` — darker blue on button hover.
- **Brand Active** `#155ab0` — pressed state.
- **Brand Soft** `rgba(57, 146, 255, 0.1)` — tinted background for chips, alerts, focus shadow halos.
- **Brand Tint** `rgba(57, 146, 255, 0.15)` — heavier tint for emphasis.

### Inverse Surface

- **BG Invert** `#000000` — pure black, used for inverse hero bands and code surfaces. The inverse band IS the depth strategy.
- **Text on Invert** `#ffffff` — body copy on the black band; inversion preserves AAA contrast.
- **Border on Invert** `rgba(255, 255, 255, 0.15)` — 15% white hairline on inverse panels.

### Accent — Sparing Red

- **Accent** `#f44250` — secondary warning red used very sparingly in marketing for warnings, deprecation notices, or highlighted release notes.
- **Accent Soft** `rgba(244, 66, 80, 0.1)` — tinted bg for warning panels.

### Interactive

- **Link** `#3992ff` — inline link color on white surfaces.
- **Link Hover** `#1c6fd6` — darker hover.
- **Focus Ring** `rgba(57, 146, 255, 0.3)` — 3px soft blue ring with 2px offset.
- **Selection** `rgba(57, 146, 255, 0.3)` — text-selection background.
- **Disabled** `#bdbdbd` — text-faint role for inactive elements.

### Neutral Scale

- **Text Strong** `#000000` — display headlines, wordmark fallback.
- **Text** `#121212` — body primary.
- **Text Muted** `#6b6b6b` — nav, metadata, captions.
- **Text Soft** `#8a8a8a` — tertiary copy.
- **Text Faint** `#bdbdbd` — disabled, watermark.
- **Background** `#ffffff` — canvas.
- **Surface Soft** `#fafafa` — alternative bg for grouped content.
- **Surface** `#f7f7f7` — subtle card lift (used sparingly; most cards stay on `#ffffff`).
- **Surface Strong** `#ededed` — emphasized panels.

### Surface & Borders

- **Border** `rgba(0, 0, 0, 0.1)` — 10% black hairline. The default divider.
- **Border Strong** `rgba(0, 0, 0, 0.2)` — emphasis dividers, ghost button outlines.
- **Border Subtle** `rgba(0, 0, 0, 0.05)` — barely-visible row separators.
- **Border Brand** `#3992ff` — full-saturation blue border on focused/branded chips.
- **Border Focus** `#3992ff` — focus ring solid color (paired with soft halo).

### Shadow Colors

Remix renders shadows almost never — depth comes from inverse-black bands and tonal contrast. When shadows do appear, they're pure black at very low alpha (5–16%):

- **Shadow Ambient** `0 1px 2px rgba(0, 0, 0, 0.05)` — input focus.
- **Shadow Standard** `0 4px 12px rgba(0, 0, 0, 0.08)` — popover lift.
- **Shadow Elevated** `0 12px 32px rgba(0, 0, 0, 0.12)` — dialog lift.
- **Shadow Deep** `0 24px 48px rgba(0, 0, 0, 0.16)` — modal occlusion.
- **Ring Soft** `0 0 0 3px rgba(57, 146, 255, 0.3)` — focus halo.

### Code Surface (Inverse)

- **Code BG** `#000000` — code blocks always render on inverse-black, even on the white canvas.
- **Code Text** `#ffffff` — primary code color.
- **Code Keyword** `#3992ff` — `import`, `export`, `function`, `const` — Remix blue.
- **Code String** `#a3eb8e` — `"hello"` — soft green.
- **Code Comment** `#6b6b6b` — `// notes` — text-muted on dark.
- **Code Function** `#fbbf24` — function names — warm amber.
- **Code Border** `rgba(255, 255, 255, 0.15)` — 15% white hairline.

### Semantic

- **Success** `#10b981` text on `rgba(16, 185, 129, 0.1)` background.
- **Warning** `#f59e0b` text on `rgba(245, 158, 11, 0.1)` background.
- **Danger** `#f44250` text on `rgba(244, 66, 80, 0.1)` background — overlaps the accent red.
- **Info** `#3992ff` text on `rgba(57, 146, 255, 0.1)` background — overlaps the brand blue.

## 3. Typography Rules

### Font Family

- **Display Primary**: `"Founders Grotesk", "Inter Display", "Inter Variable", -apple-system, system-ui, sans-serif` — Klim Type Foundry's Founders Grotesk is the editorial-poster cut Remix specs. Inter Display is the closest free fallback when Founders Grotesk isn't available.
- **Body**: `Inter, "Inter Variable", -apple-system, system-ui, sans-serif` — Inter handles all body copy (anywhere below display sizes).
- **Monospace**: `"JetBrains Mono", "Fira Code", ui-monospace, Menlo, Consolas, monospace` — JetBrains Mono on every code surface. The choice is loaded; substituting Geist Mono or Berkeley Mono shifts the brand toward Vercel/Modal cousins.
- **OpenType features**: `ss01` (alternate `g`), `cv11` (alternate `a`), `tnum` (tabular numerals), `zero` (slashed zero in mono).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| Display Hero | Founders Grotesk | 128 | 700 | 0.9 | -0.045em | ss01 | Manifesto-grade, reserved for major campaign moments |
| Display | Founders Grotesk | 96 | 700 | 0.95 | -0.04em | ss01 | Standard hero h1 — billboard scale |
| H1 | Founders Grotesk | 64 | 700 | 1.0 | -0.03em | ss01 | Section opener |
| H2 | Founders Grotesk | 48 | 700 | 1.05 | -0.025em | — | Sub-section |
| H3 | Founders Grotesk | 36 | 600 | 1.15 | -0.015em | — | Feature title |
| H4 | Inter | 22 | 600 | 1.3 | 0 | — | Card heading |
| H5 | Inter | 18 | 600 | 1.35 | 0 | — | Inline emphasis |
| Body Large | Inter | 20 | 400 | 1.6 | 0 | — | Hero subhead, intro paragraphs |
| Body | Inter | 18 | 400 | 1.6 | 0 | — | Default reading copy — generous |
| Body Small | Inter | 16 | 400 | 1.55 | 0 | — | Footnotes, secondary |
| Quote | Inter | 28 | 500 | 1.35 | 0 | — | Pull-quotes — magazine-grade |
| Label | Inter | 13 | 600 | 1.4 | 0.02em | — | Form labels, table headers |
| Caption | Inter | 13 | 400 | 1.4 | 0 | — | Image captions, meta |
| Overline | Inter | 12 | 600 | 1.3 | 0.08em UPPER | — | Section markers |
| Code | JetBrains Mono | 14 | 400 | 1.6 | 0 | zero | Block code on inverse-black |
| Code Inline | JetBrains Mono | 13 | 500 | 1.4 | 0 | zero | Inline ``code`` token |
| Code Micro | JetBrains Mono | 12 | 400 | 1.5 | 0 | zero | Tooltips, dense docs tables |
| Numeric Tabular | Inter | inherit | 500 | inherit | 0 | tnum | Versions, benchmarks |

### Principles

- **Display billboard scale is the brand voice.** H1 at 96px with `-0.04em` is the signature move. Anything below 64px loses the manifesto register.
- **Founders Grotesk is wider than Inter.** Substituting plain Inter for display shrinks the wide grotesk register and makes the page read SaaS-flat. Use Inter Display as the closest fallback.
- **Body is generous, not dense.** 18px on 1.6 LH. Remix expects readers, not skimmers.
- **Hard negative tracking on display only.** Tracking goes from `-0.045em` at 128px down to `-0.015em` at 36px. Body and labels stay at `0`.
- **JetBrains Mono is the engineering signal.** Substituting Geist Mono or Berkeley Mono moves the brand into Vercel/Modal territory.
- **Tabular numerals (`tnum`)** mandatory for version chips, benchmark figures, dates.
- **No italics in display.** Body italics are fine for editorial emphasis. Display italics break the engineered grotesk register.
- **Pull-quotes lift to 28px weight 500.** That's the magazine-grade typographic moment — used sparingly, deliberately.

## 4. Component Stylings

### Buttons

**Button Primary (Black Solid)** — manifesto-grade primary action.

- Background: `#000000`
- Text: `#ffffff`, Inter 14px weight 600
- Padding: `12px 24px`
- Radius: 6px
- Border: none
- Hover: background `#000000` → `#262626`, slight `translateY(-1px)`
- Active: scale `0.98`
- Focus: 3px soft-blue ring with 2px offset
- Use: every primary action — "Get started", "Read docs", "Install Remix"

**Button Brand (Blue)** — the single chromatic CTA.

- Background: `#3992ff`
- Text: `#ffffff`, Inter 14px weight 600
- Padding: `12px 24px`
- Radius: 6px
- Border: none
- Hover: background `#3992ff` → `#1c6fd6`
- Active: scale `0.98`
- Focus: 3px soft-blue ring with 2px offset
- Use: wordmark-aligned CTA — "Try Remix", "See the demo"

**Button Secondary (Ghost)** — paired with primary.

- Background: transparent
- Text: `#121212`, Inter 14px weight 600
- Padding: `12px 24px`
- Border: `1px solid rgba(0, 0, 0, 0.2)`
- Radius: 6px
- Hover: border to `rgba(0, 0, 0, 0.4)`, bg `rgba(0, 0, 0, 0.03)`
- Use: "Read docs", "GitHub", "View source"

**Button On-Invert (White on Black Band)** — inverse paired button.

- Background: `#ffffff`
- Text: `#000000`, Inter 14px weight 600
- Padding: `12px 24px`
- Radius: 6px
- Border: none
- Hover: background `#ffffff` → `#ededed`
- Use: inside an inverse-black hero band, where the white solid is the visual primary

### Cards

- Background: `#ffffff`
- Border: `1px solid rgba(0, 0, 0, 0.1)`
- Radius: 8px
- Padding: 24px
- Hover: border to `rgba(0, 0, 0, 0.2)`, no shadow
- Use: feature tiles, doc previews, release notes

There is **no card drop shadow** — depth is purely tonal and grid-aligned. Shadows on cards undermine the print aesthetic.

### Badges / Chips / Pills

**Brand Badge (Blue Pill)**

- Background: `rgba(57, 146, 255, 0.1)`
- Text: `#3992ff`, Inter 12px weight 600 uppercase `0.08em` tracking
- Border: `1px solid #3992ff`
- Radius: 9999 (pill)
- Padding: `2px 10px`
- Use: "v2.0", "BETA", "NEW"

**Neutral Badge**

- Background: `#f7f7f7`
- Text: `#6b6b6b`, Inter 12px weight 600 uppercase
- Border: `1px solid rgba(0, 0, 0, 0.1)`
- Use: tag pills, category markers without brand semantics

**Warning Badge**

- Background: `rgba(244, 66, 80, 0.1)`
- Text: `#f44250`, Inter 12px weight 600 uppercase
- Border: `1px solid #f44250`
- Use: "DEPRECATED", "BREAKING"

### Inputs / Forms

- Background: `#ffffff`
- Text: `#121212`, Inter 16px
- Placeholder: `#8a8a8a`
- Border: `1px solid rgba(0, 0, 0, 0.2)`
- Radius: 6px
- Padding: `12px 16px`
- Focus: border to `#3992ff`, ring `0 0 0 3px rgba(57, 146, 255, 0.3)`
- Error: border to `#f44250`, ring `rgba(244, 66, 80, 0.3)`
- Use: newsletter, search, login

### Code Block (Inverse)

- Background: `#000000`
- Text: `#ffffff`
- Border: `1px solid rgba(255, 255, 255, 0.15)`
- Radius: 8px
- Padding: `20px 24px`
- Font: JetBrains Mono 14px / 1.6
- Line numbers: `rgba(255, 255, 255, 0.4)`, JetBrains Mono 12px
- Syntax: keywords blue `#3992ff`, strings green `#a3eb8e`, comments `#6b6b6b`, functions amber `#fbbf24`
- Copy button: top-right, hover-revealed, JetBrains Mono 12px

### Navigation

- Height: 72px sticky (taller than typical to give Remix's logo breathing room)
- Background: `rgba(255, 255, 255, 0.85)` with `backdrop-filter: blur(8px)` on scroll
- Border-bottom: `1px solid rgba(0, 0, 0, 0.1)` on scroll
- Logo: monochrome R-icon at 28px + "remix" wordmark in Founders Grotesk 22px weight 600
- Nav links: 16px weight 500 `#121212`, hover underlines via `text-decoration` grow
- CTA cluster: ghost + black solid OR blue brand, right-aligned

### Inverse Hero Band

The defining structural component.

- Background: `#000000`
- Text: `#ffffff` (display + body)
- Padding: `120px 0` vertical, container constrained
- Use: manifesto sections, release announcements, opinionated marketing
- Treatment: full-bleed bg with content constrained; CTA inside is white-on-black solid (button-on-invert variant)

### Tooltip

- Background: `#000000`
- Text: `#ffffff`, Inter 13px weight 500
- Border: `1px solid rgba(255, 255, 255, 0.15)`
- Radius: 6px
- Padding: `6px 10px`
- Shadow: `0 4px 12px rgba(0, 0, 0, 0.16)`

### Modal Dialog

- Background: `#ffffff` panel on `rgba(0, 0, 0, 0.5)` scrim
- Border: `1px solid rgba(0, 0, 0, 0.1)`
- Radius: 8px
- Padding: `32px`
- Shadow: deep
- Header: H3 (36px Founders Grotesk weight 600)

## 5. Layout Principles

### Spacing System

- **Base unit**: 4px
- **Scale**: 0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160
- **Density observation**: Remix uses generous spacing throughout — 24px gutters between cards, 64px gaps between feature blocks, 120px section padding. The page reads *spacious* compared to dev-tool peers. The density ratio is closer to 1:5 (intra-card to section-level) — that ratio is the editorial-print signal.

### Grid & Container

- Container: 1200px max-width with 24px gutters.
- Reading column: 720px for long-form prose (manifestos, release notes, tutorials).
- Grid: 12-column with 24px gaps.
- Hero treatment: full-bleed white canvas; content constrained to ~900px center-aligned, with the Founders Grotesk display headline at 96px+ taking the visual center.
- Feature grid: 3-column at desktop, 2-column at tablet, 1-column at mobile.
- Magazine-spread variants: 6-column or 8-column constrained inside the 12-column grid, leaving deliberate negative space — the way a print spread leaves a gutter beside a pull-quote.

### Whitespace Philosophy

Remix uses negative space as part of the message. Section padding is 120px (vs Stripe's 96px), and the page actively *resists* the dev-tool tendency toward dense feature-grid layouts. Manifesto sections sit alone with generous side margins. Pull-quotes get a full 6-column gutter to the right. The result is a page that reads slowly and rewards reading.

### Section Cadence

The brand's signature rhythm is **white → inverse-black → white**:

- **Section 1 (Hero)**: pure white canvas, Founders Grotesk billboard headline, blue brand CTA.
- **Section 2 (Feature highlights)**: 3-column card grid on white.
- **Section 3 (Inverse manifesto band)**: full-bleed `#000000`, white display headline, white-on-black solid CTA — "Why Remix" or "What changed in v2".
- **Section 4 (Code preview)**: white canvas wrapping a black code block — the code block IS the inverse moment for this section.
- **Section 5 (Pull-quote / testimonial)**: white canvas, Inter 28px weight 500 quote, magazine-grade.
- **Section 6 (Final CTA)**: another inverse-black band, OR a white canvas with the blue brand button.

The white/inverse-black alternation is the brand's depth strategy — far more important than shadows or gradients.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| Micro | 2px | Hairline tag chips |
| XS | 2px | Inline code chips, micro-pills |
| SM | 4px | Tooltips edge case |
| MD | 6px | Buttons, inputs |
| LG | 8px | Cards, code blocks, modal panels |
| Pill | 9999px | Status badges, brand chips |

The defining radii are **6px on buttons** and **8px on cards** — sharper than Stripe (8/12), gentler than full-brutalist (0). The geometry is right-angled and grid-aligned; nothing rounds beyond 8px except pills. This is a deliberate refusal of the "soft rounded everything" Bootstrap-era default — the right-angled grid is part of the manifesto.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat on `#ffffff` | Default — most page surfaces |
| 1 | Inverse-black band | Manifesto sections, release announcements — the brand's primary depth move |
| 2 | Card on `#ffffff` with hairline | Feature tiles — flat with 10% black border |
| 3 | Card on `#f7f7f7` surface | Grouped emphasis — subtle tonal lift |
| 4 | Standard shadow | Popovers, tooltips |
| 5 | Deep shadow | Modal overlays |

### Shadow Philosophy

Remix's depth strategy is **inversion-through-contrast, not occlusion-through-shadow**. The brand's primary depth move is the pure-black hero band on the white canvas — print-style dimensionality that creates more visual impact than any shadow could. Shadows render only at level 4+ (popovers, tooltips, modals) and use pure black at very low alpha (5–16%). Cards never carry shadows.

The contrast between paper-white and pure-black creates the same visual weight as a heavy drop shadow but with zero pixels of blur — that's the print-aesthetic discipline.

## 8. Interaction & Motion

### Easing Curves

- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, fade.
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal open, page enter.
- **Decelerate**: `cubic-bezier(0, 0, 0.2, 1)` — entering elements.
- **Accelerate**: `cubic-bezier(0.4, 0, 1, 1)` — exiting elements.

### Duration Buckets

- **Instant**: 80ms — tooltip show.
- **Fast**: 150ms — button hover, link hover, card hover.
- **Standard**: 250ms — dropdown open, modal open initial.
- **Slow**: 400ms — page section reveal, scroll-triggered animations.
- **Deliberate**: 600ms — hero illustration entrance, marquee logo strip.

### Per-Component Micro-States

- **Button hover (black)**: `translateY(-1px)` + bg `#000000 → #262626` over 150ms ease-standard.
- **Button hover (blue brand)**: bg `#3992ff → #1c6fd6` over 150ms; no `translateY`.
- **Card hover**: border `0.1 → 0.2` alpha over 150ms; no shadow add, no `translateY`.
- **Link hover**: underline grows from 0% width to 100% width via `text-underline-offset` and `text-decoration-thickness` over 150ms.
- **Inverse band entrance** (when scrolled into view): content fades up `translateY(20px) → 0` over 600ms ease-emphasized — the only deliberate scroll-triggered moment.
- **Code copy button**: opacity `0 → 1` on card hover over 150ms; success state shows inline "Copied" for 1.5s.

### Page Transitions

Remix (the framework, used by remix.run itself) supports built-in view transitions. The site uses them sparingly: route changes inside the docs surface fade content over 250ms; marketing page transitions are instant (no animation).

### Reduced-Motion Strategy

Respects `prefers-reduced-motion: reduce`:

- All hover lifts collapse to opacity-only at 80ms.
- Inverse band scroll-triggered entrance disables (content renders at final position).
- Page transitions fall back to instant.
- Underline grow on link hover replaces with full-underline on focus.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | WCAG Level |
|---|---|---|
| `#000000` on `#ffffff` | 21.0 | AAA all sizes |
| `#121212` on `#ffffff` | 17.4 | AAA all sizes |
| `#6b6b6b` on `#ffffff` | 5.4 | AA body, AAA large |
| `#3992ff` on `#ffffff` | 4.5 | AA body, AAA large |
| `#ffffff` on `#3992ff` | 4.5 | AA body, AAA large |
| `#ffffff` on `#000000` | 21.0 | AAA all sizes (inverse band) |
| `#a3eb8e` on `#000000` | 13.4 | AAA all sizes (code strings) |
| `#fbbf24` on `#000000` | 11.4 | AAA all sizes (code functions) |

### Focus Indicators

- All interactive elements: `3px solid rgba(57, 146, 255, 0.3)` ring with 2px offset (soft halo).
- Inputs: border swap to `#3992ff` plus the soft halo ring.
- On inverse-black bands: focus ring switches to `3px solid rgba(255, 255, 255, 0.6)` for contrast.
- Focus-visible only — keyboard navigation surfaces ring; mouse clicks don't.

### ARIA Pattern Recommendations

- Navigation: `<nav role="navigation" aria-label="Main">`.
- Inverse-band sections: announce via `<section aria-label="Manifesto">` so screen readers announce the contrast shift.
- Code blocks: `<pre>` with `<code>` and copy buttons announcing "Copy <language> snippet to clipboard".
- Wordmark: `<a aria-label="Remix home">` since the visible text is the SVG R-logo + "remix" treatment.
- Modal dialogs: `role="dialog"`, `aria-modal="true"`, focus trap on open, return focus on close.

### Keyboard Navigation

Tab order: skip link → logo → main nav → utility nav → primary CTA → main content (h1) → feature cards → inverse-band content → footer. Skip-link to `#main` always present at top of page. Inverse-band sections preserve tab order via `aria-label` to the screen reader.

### Screen Reader Hints

- R-logo SVG uses `<title>Remix</title>` for SR pronunciation.
- Inverse-black bands announce content as part of the same flow; no special role.
- Pull-quotes use `<blockquote>` semantics.
- Code copy buttons announce success via live region.

### Reduced Motion

Respected via `@media (prefers-reduced-motion: reduce)` — all transitions opacity-only at 80ms; inverse-band scroll entrance disables; underline grow replaces with full underline on focus.

## 10. Responsive Behavior

### Breakpoints

| Name | Min Width | Use |
|---|---|---|
| Mobile | 0–639px | Single-column, 16px gutters |
| Tablet | 640–767px | 2-column cards, 20px gutters |
| Laptop | 768–1023px | 3-column cards, full nav |
| Desktop | 1024–1279px | 1200px container, full grid |
| Wide | 1280–1535px | 1200px container, more padding |
| 4K | 1536+ | 1200px container caps |

### Touch Targets

Minimum 44x44px. Buttons render at `12px 24px` padding around 14px text → ~40px tall — bumped to 44px on mobile via increased vertical padding (`14px 24px`).

### Collapsing Strategy

- **Hero display**: 96px → 64px → 48px at progressively smaller breakpoints. Tracking adjusts proportionally (`-0.04em → -0.03em → -0.025em`).
- **Section padding**: 120px → 80px → 56px on mobile.
- **Feature cards**: 3-col → 2-col at 640–767px → 1-col at < 640px.
- **Inverse-band**: full-bleed at all sizes; padding reduces from `120px 0` to `64px 0` on mobile.
- **Code blocks**: full-width at all sizes; horizontal scroll for long lines, font drops to `13px` on mobile.
- **Nav**: hamburger menu below 768px; CTA buttons stack vertically in mobile menu.

### Image Behavior

Hero illustrations use `srcset` + `<picture>` with `media` queries. Marketing illustrations are typically vector (SVG) and scale infinitely.

### Container Queries

Used inside the docs sidebar for nav-list density: when sidebar narrows below 240px, list items collapse padding from `8px 16px` to `4px 12px`.

## 11. Content & Voice

### Tone

Civic-editorial. Sentences are full and confident. The voice assumes a thoughtful reader who values prose over feature bullets. Remix reads more like a Stripe Press book or an Apple Pro Display marketing surface than a typical SaaS landing. Never apologetic, never overly clever. The brand sells a *return to the web platform* and the writing embodies that thesis — declarative, deliberate, slightly literary.

### Microcopy Patterns

**Button verbs (in order of confidence)**:

- **Primary**: "Get started", "Read the docs", "Install Remix"
- **Brand (blue)**: "Try Remix", "See the demo", "Run the example"
- **Secondary**: "Learn more", "View source", "GitHub"

**Error message recipe**: `<verb> failed.` followed by reason in plain prose, with a link to docs. Example: "Build failed. Missing `loader` export in `routes/dashboard.tsx`. [View docs →]". Errors render with red `#f44250` label chip and inline accent border.

**Success confirmation**: minimal, declarative. "Saved.", "Deployed.", "Test passed."

**Pull-quotes**: editorial-grade attribution. Quote in 28px weight 500, attribution in 16px weight 400 `#6b6b6b` muted. Example: *"Remix taught me to ship the platform, not work around it."* — Senior Engineer, Etsy.

### Empty States

Empty states focus on next action with a sentence of context. "No projects yet. Start by creating your first route in `app/routes/`." That balance of action plus brief explanation is the editorial voice.

### CTA Verb Conventions

Remix's verbs are platform-grade verbs: **Get, Read, Install, Try, See, Run, Learn, Build, Ship**. Avoid SaaS verbs like "Sign up", "Register", "Subscribe", "Create your account". Remix is a framework; verbs are framework verbs — get-started, learn, run, ship.

## 12. Dark Mode & Theming

Remix is **light-first by design**. The pure-white canvas + inverse-black hero band rhythm is the brand's identity, and offering a full dark variant would dissolve the contrast strategy. The inverse-black band IS the dark moment.

A dark theme is offered for the **docs surface only** at `/docs?theme=dark`:

- `bg`: `#ffffff` → `#0a0a0a`
- `text`: `#121212` → `#ffffff`
- `text-muted`: `#6b6b6b` → `#a3a3a3`
- `surface`: `#f7f7f7` → `#1c1c1c`
- `border`: `rgba(0, 0, 0, 0.1)` → `rgba(255, 255, 255, 0.1)`
- `brand`: `#3992ff` (preserved — works on both backgrounds)
- Code block `bg-invert`: stays `#000000` on both themes; in dark mode it lifts to `#0a0a0a` for tonal continuity.

Marketing pages do not offer a dark variant. The hero, manifesto bands, feature grids, and final CTA always render light. This is enforced by design.

## 13. Lineage & Influences

Remix's design language is **manifesto-grade editorial-print**. The lineage is explicit: Stripe Press editorial discipline, Pentagram billboard-poster scale, Apple Pro Display confident-grid marketing, and the Swiss International Style trust in typography and grid as the entire expressive system. Remix takes that lineage and applies it to a developer-tool surface — using Founders Grotesk at 96px+ where peers use Geist or Inter at 56px, using inverse-black hero bands where peers use gradient backdrops, using JetBrains Mono on inverse-black where peers use lighter syntax-highlighted code blocks.

The closest contemporary cousin in dev-tool branding is **Stripe Press** — Stripe's book-publishing imprint that shares the editorial-print aesthetic. Where Stripe (the product) leans toward chromatic gradients and pastel marketing, Stripe Press leans toward black-on-white with single-color accents — exactly Remix's register. The framework is *opinionated*, and the design language refuses to apologize for the opinion.

What Remix rejects: dark-mode default (Vercel, Linear), gradient backdrops (Stripe, Turbo), soft pastels (Notion), brutalist mono-everything (Modal), and the "spacious SaaS" feature-bullet density. Remix is the *manifesto piece* in the dev-tool category, and the design language enforces that positioning.

The R-logo is monochrome by design — there is no chromatic logo treatment, no animated wordmark, no gradient sweep. Even the brand's most chromatic moment (the blue button) is a single solid fill at `#3992ff`. The discipline is the personality.

**Named influences**:

- **Stripe Press** — editorial-print discipline; black-on-white as a serious-software signal.
- **Pentagram** — billboard-scale display type as the primary expressive element.
- **Apple Pro Display** — massive headline weight and confident, uncluttered grid.
- **Founders Grotesk (Klim Type Foundry)** — wide grotesk with rounded counters; editorial-poster register.
- **Swiss International Style** — grid discipline and typographic confidence as the entire expressive system.

## 14. Do's and Don'ts

### Do

- **Do** trust the type. Headlines at 96px with `-0.04em` tracking are the brand's primary expressive tool — anything smaller reads as generic.
- **Do** keep the action palette to the single Remix blue (`#3992ff`); secondary actions go to the black button, not a different hue.
- **Do** flip to inverse-black hero bands for emphasis — the contrast against `#ffffff` is the brand's depth strategy.
- **Do** use Founders Grotesk (or Inter Display) for display copy; substituting Inter alone shrinks the wide grotesk register.
- **Do** use JetBrains Mono for code surfaces — it pairs editorially with the broadside-poster display tone.
- **Do** keep section padding at 120px and reading-column width at 720px — the spacious magazine-spread breathing is part of the message.
- **Do** preserve the right-angled 6px button radius and 8px card radius — the geometry is the manifesto's grid.
- **Do** use pull-quotes at 28px weight 500 for editorial-grade emphasis — magazine-style.
- **Do** use tabular numerals (`tnum`) for version chips and dates.
- **Do** preserve the monochrome R-logo treatment.

### Don't

- **Don't** introduce dark mode as the default. Remix's identity is light-mode editorial; a dark canvas reads as Vercel or Linear.
- **Don't** add drop shadows to cards. Depth here is purely tonal (black-on-white inversion); shadows undermine the print aesthetic.
- **Don't** soften corners past 8px. The right-angled grid is part of the manifesto; rounded everything reads as Bootstrap-era default.
- **Don't** use Inter alone for display — Founders Grotesk is wider and rounder. Inter Display is the closest fallback.
- **Don't** substitute Geist Mono or Berkeley Mono for code. JetBrains Mono is the engineering-print signal.
- **Don't** add gradients to the brand blue. The flat fill is the brand. Gradient blue reads as Stripe.
- **Don't** lighten the canvas to off-white or cream. Pure paper-white `#ffffff` is the manifesto's ground.
- **Don't** pile on chromatic accents. The blue + sparing red is the entire palette. A green success or amber warning is fine; a third "brand" is not.
- **Don't** crowd the page. 120px section padding is the editorial breathing minimum.
- **Don't** use SaaS-flavored verbs ("Subscribe", "Register"). Use platform-grade verbs ("Install", "Run", "Ship").
- **Don't** animate the inverse-band content beyond a deliberate scroll-triggered fade-up. Excess motion contradicts the manifesto-poster tone.
- **Don't** chromatically theme the R-logo. The monochrome treatment is the brand discipline.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #ffffff
bg-invert: #000000
text: #121212
text-strong: #000000
text-muted: #6b6b6b
brand: #3992ff
on-brand: #ffffff
border: rgba(0, 0, 0, 0.1)
focus: rgba(57, 146, 255, 0.3)
code-bg: #000000
code-string: #a3eb8e
code-keyword: #3992ff
```

### Example Component Prompts

1. **"Create a hero section in Remix's design language. Pure white `#ffffff` canvas, Founders Grotesk 96px display headline at weight 700 with `-0.04em` tracking and 0.95 line-height, 20px Inter body subhead in `#6b6b6b`, blue brand CTA `#3992ff` paired with a black solid secondary. No gradients, no shadows."**

2. **"Design a feature card for Remix. White `#ffffff` background, 10% black hairline border, 8px radius, 24px padding. Heading in Founders Grotesk 22px weight 600, body in Inter 18px regular `#121212`. Hover lifts border to 20% black; no shadow add, no `translateY`."**

3. **"Build an inverse-black manifesto band. Full-bleed `#000000` background, 120px vertical padding, content constrained to 1200px container. Founders Grotesk 64px weight 700 white headline, 18px Inter body in white, white-on-black solid CTA right-aligned. Treat as a print-negative emphasis section."**

4. **"Render a Remix nav bar. 72px height sticky, backdrop-blur on scroll, 10% black hairline bottom border. Monochrome R-logo + 'remix' wordmark in Founders Grotesk 22px weight 600. Nav links in Inter 16px weight 500 `#121212`, with `text-decoration` underline-grow on hover. CTA cluster: ghost + black solid OR blue brand, right-aligned."**

5. **"Create a code block in Remix's style. Inverse-black `#000000` background, JetBrains Mono 14px on 1.6 line-height. Syntax: keywords blue `#3992ff`, strings green `#a3eb8e`, comments `#6b6b6b` muted, function names amber `#fbbf24`. Line numbers in 40% white. Top-right copy button revealed on card hover."**

6. **"Design a pull-quote block. White canvas, Inter 28px weight 500 quote in `#121212`, attribution below in 16px weight 400 `#6b6b6b`. 6-column constrained inside the 12-column grid, leaving deliberate negative space to the right — magazine-spread."**

### Iteration Guide

1. **If the page reads too "Vercel-clone"**: scale up display headlines. Founders Grotesk at 96px+ with hard `-0.04em` tracking is the brand's primary differentiator. Anything under 64px loses the manifesto register.

2. **If the page feels too "SaaS"**: reduce feature-bullet density and lean into prose paragraphs. Increase section padding to 120px, reading-column width to 720px. Remix expects readers, not skimmers.

3. **If the page lacks emphasis**: insert an inverse-black hero band. The black-on-white inversion is more powerful than any shadow or gradient. Use it for manifesto sections, release announcements, opinionated marketing.

4. **If the brand blue feels overused**: pull it back to wordmark + one CTA per section. Blue should appear maybe 3 times per page — wordmark, primary brand CTA, inline link emphasis. Never as a fill behind feature cards.

5. **If contrast fails on the blue button**: keep white text at weight 600 minimum. The blue passes AA at body sizes; bold weight ensures readability.

6. **If Founders Grotesk isn't available**: use Inter Display as the closest free fallback. Don't substitute plain Inter — the wide grotesk register collapses.

7. **If dark mode is requested for marketing**: refuse. The brand is light-first by design; the inverse-black band IS the dark moment. Offer a dark docs theme only.

8. **If shadows are suggested for cards**: refuse. Depth is purely tonal — inverse-black bands and 10% black hairlines do all the work. Shadows undermine the print aesthetic.
