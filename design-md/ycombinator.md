---
name: Y Combinator
tagline: Brutalist orange monolith — system-font sans on white canvas, signature `#f26625` orange-red blocks with hard 0px corners.
updated_at: 2026-05-06T08:44:32+12:00
published_at: 2026-05-03T10:27:49+12:00
author: webdesignhot
source_url: https://www.ycombinator.com
spec: design.md/v1.5
quality: curated
featured: true
categories: [saas, media]
tags: [light, brutalist, sans, bright, dense, warm]
preview_swatch: ['#ffffff', '#f26625', '#000000']
related: [vercel, medium, are-na]
description: 'Y Combinator is what design looks like when conviction outweighs polish. System fonts (Verlag display + Verdana / Helvetica body), pure white canvas, signature `#f26625` orange-red used as the primary action surface — and the entire site rendered with hard 0px corners, like a page printed in 1996. The orange-red is so canonical that the blocks themselves became the brand. Hacker News (`news.ycombinator.com`) shares the DNA: cream `#f6f6ef` paste-paper canvas, narrow column, default Verdana, classic `#000099` blue link / `#828282` visited-link pattern. The `#f26625` orange has been tuned across years from `#ff6600` to its current slightly-deeper shade — a more cinematic warm-orange that holds against modern displays without going red. The visual language reads as intentional anti-design — the site says "the founders here ship products, not Figma frames" and the audience that responds to that signal is exactly the audience YC wants. When the brand has 20 years of unicorn pedigree, restraint is the most expensive choice.'

colors:
  # Primary
  bg: '#ffffff'                          # pure white canvas, zero tint
  bg-paste: '#f6f6ef'                    # paste-paper cream — Hacker News canvas, also used on YC content blocks
  bg-warm-tint: '#fff6f0'                # faintest orange-cream tint behind selected content
  bg-cool: '#fafafa'                     # rare cool-grey panel for footer-like sections
  surface: '#ffffff'                     # card surface
  surface-elevated: '#ffffff'            # white card lift
  text: '#000000'                        # pure black, full contrast
  text-strong: '#000000'                 # display = body, full black
  text-medium: '#404040'                 # secondary heading
  text-soft: '#525252'                   # supporting copy, captions
  text-meta: '#828282'                   # meta text, HN visited-link grey
  text-faint: '#a0a0a0'                  # eyebrows, helper text
  text-muted: '#cccccc'                  # disabled label
  # Brand
  brand: '#f26625'                       # YC orange-red — the entire identity (slightly deeper than legacy #ff6600)
  brand-classic: '#ff6600'               # legacy YC orange — Hacker News header still uses this exact shade
  brand-hover: '#e85d00'                 # pressed/hover orange
  brand-deep: '#cc4f00'                  # active state, deep cinder
  brand-soft: 'rgba(242, 102, 37, 0.10)' # translucent orange tint
  on-brand: '#ffffff'                    # white label on orange block
  # Accent
  accent-startup-school: '#ff8c42'       # secondary warm-orange for Startup School branding
  accent-warm-cream: '#fff6f0'           # warm cream for tonal blocks
  # Interactive
  link: '#000099'                        # classic web-1.0 blue (HN tradition)
  link-hover: '#000066'                  # darker on hover
  link-visited: '#828282'                # HN's signature grey-visited
  link-yc: '#000000'                     # links on the YC marketing site default to black-underlined
  selected-bg: '#fff6f0'
  disabled: '#cccccc'
  cta-bg: '#f26625'
  cta-text: '#ffffff'
  # Neutral scale
  ink-100: '#000000'
  ink-200: '#404040'
  ink-300: '#525252'
  ink-400: '#828282'
  ink-500: '#a0a0a0'
  ink-600: '#cccccc'
  ink-700: '#e6e6e6'
  ink-800: '#f6f6ef'                     # paste-paper, the lightest "neutral" tier
  # Borders
  border: '#cccccc'                      # default hairline — structural, not decorative
  border-strong: '#828282'               # emphasised rule
  border-subtle: '#e6e6e6'               # quietest division
  border-orange: 'rgba(242, 102, 37, 0.40)' # rare orange-tinted border (focus, hover hint)
  # Shadow palette (rarely used — flat is the system)
  shadow-color: 'rgba(0, 0, 0, 0.06)'
  shadow-warm: 'rgba(242, 102, 37, 0.15)'
  # Semantic
  success-bg: '#e8f5e0'
  success-text: '#2d5016'
  warning-bg: '#fff4d6'
  warning-text: '#7a5e00'
  danger-bg: '#fde0d4'
  danger-text: '#8a2a0a'
  info-bg: '#e0e8f5'
  info-text: '#000099'                   # info uses the classic HN blue

typography:
  display:
    family: '"Verlag", "Verlag Bold", "Helvetica Neue", Helvetica, Arial, system-ui, sans-serif'
    weights: [700, 800, 900]
    opentype-features: ['kern', 'liga']
    note: 'YC marketing display is Verlag Heavy/Black — Hoefler & Co.''s signature geometric sans'
  display-fallback:
    family: '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif'
    weights: [400, 600, 700]
    note: 'When Verlag is unavailable, Helvetica Neue Bold carries display'
  body:
    family: 'Verdana, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 700]
    opentype-features: ['kern']
    note: 'Hacker News body — Verdana for screen-legible at small sizes'
  body-marketing:
    family: '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: ['kern']
    note: 'YC marketing body — Helvetica Neue, slightly more refined than HN'
  mono:
    family: 'Monaco, Menlo, Consolas, "Courier New", monospace'
    weights: [400, 700]
    opentype-features: ['tnum', 'zero']
  scale:
    display-hero:    { size: 80, weight: 900, lineHeight: 1.0,  tracking: '-0.03em', family: display, transform: uppercase, notes: 'Startup School / Demo Day banner — Verlag Black 900 uppercase' }
    display:         { size: 64, weight: 800, lineHeight: 1.05, tracking: '-0.025em', family: display, transform: uppercase }
    h1:              { size: 48, weight: 800, lineHeight: 1.10, tracking: '-0.02em', family: display, transform: uppercase, notes: 'Page hero on YC marketing' }
    h2:              { size: 32, weight: 700, lineHeight: 1.15, tracking: '-0.015em', family: display }
    h3:              { size: 24, weight: 700, lineHeight: 1.25, tracking: '-0.01em', family: display }
    h4:              { size: 20, weight: 700, lineHeight: 1.30, family: display }
    h5:              { size: 16, weight: 700, lineHeight: 1.35, family: body-marketing }
    eyebrow:         { size: 12, weight: 700, lineHeight: 1.3,  tracking: '0.08em', family: body-marketing, transform: uppercase }
    body-large:      { size: 18, weight: 400, lineHeight: 1.55, family: body-marketing }
    body:            { size: 16, weight: 400, lineHeight: 1.5,  family: body-marketing }
    body-small:      { size: 14, weight: 400, lineHeight: 1.45, family: body-marketing }
    body-hn:         { size: 13, weight: 400, lineHeight: 1.4,  family: body, notes: 'Hacker News body — Verdana 13/1.4 — the reference reading register' }
    caption:         { size: 13, weight: 400, lineHeight: 1.4,  family: body-marketing }
    caption-tabular: { size: 13, weight: 500, lineHeight: 1.4,  family: mono, opentype: 'tnum' }
    label:           { size: 11, weight: 700, lineHeight: 1.3,  family: body-marketing, transform: uppercase, tracking: '0.05em' }
    code:            { size: 14, weight: 400, lineHeight: 1.55, family: mono, opentype: 'tnum zero' }
    code-micro:      { size: 11, weight: 400, lineHeight: 1.4,  family: mono }
    link-hn:         { size: 13, weight: 400, lineHeight: 1.4,  family: body, notes: 'HN link — Verdana 13 / underlined / colour #000099' }
    button-label:    { size: 16, weight: 700, lineHeight: 1.0,  family: body-marketing }

radius:
  micro: 0
  sm: 0
  md: 0
  lg: 0
  xl: 0
  card: 0
  button: 0                              # observed: every button on the YC site is 0px radius
  input: 0
  pill: 0                                # there is no pill — the system has one shape

spacing:
  base: 4
  scale: [1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]

layout:
  page-width: 1280
  prose-width: 760
  site-gutter: 'clamp(16px, 3vw, 48px)'
  header-height: 64
  hn-content-width: 800                  # HN's signature narrow content column
  grid-columns: 12
  grid-gutter: 24
  section-rhythm: '64-96px'

components:
  button-primary:
    background: '#f26625'
    text: '#ffffff'
    padding: '12px 24px'
    radius: 0
    border: 'none'
    font: 'Helvetica Neue 700 / 16px'
    hover-bg: '#e85d00'
    active-bg: '#cc4f00'
    use: 'Apply, Submit, Read More — orange-red block on white'
  button-secondary:
    background: '#ffffff'
    text: '#000000'
    padding: '12px 24px'
    radius: 0
    border: '1px solid #000000'
    font: 'Helvetica Neue 700 / 16px'
    hover-bg: '#f6f6ef'
    use: 'Outlined twin to primary — same shape, no fill'
  button-tertiary:
    background: 'transparent'
    text: '#000000'
    padding: '12px 24px'
    radius: 0
    border: '1px solid #cccccc'
    font: 'Helvetica Neue 700 / 16px'
    hover-bg: '#f6f6ef'
    use: 'Quietest third action — repeated CTAs, footer links'
  button-orange-block:
    background: '#f26625'
    text: '#ffffff'
    padding: '20px 40px'
    radius: 0
    border: 'none'
    font: 'Verlag 800 / 20px / uppercase / 0.05em tracking'
    hover-bg: '#e85d00'
    use: 'Hero CTA — the canonical YC block; oversized, uppercase, the entire identity'
  card:
    background: '#ffffff'
    border: '1px solid #cccccc'
    radius: 0
    padding: '24px'
    use: 'Founder profile, news entry — flat block with hairline border'
  card-paste:
    background: '#f6f6ef'
    border: 'none'
    radius: 0
    padding: '24px'
    use: 'Paste-paper tonal block — quotes Hacker News canvas inside YC marketing'
  badge-eyebrow:
    background: 'transparent'
    text: '#525252'
    padding: '0'
    radius: 0
    font: 'Helvetica Neue 700 / 12px / uppercase / 0.08em tracking'
    use: 'Section pre-label — no chrome, just type'
  badge-orange:
    background: '#f26625'
    text: '#ffffff'
    padding: '4px 8px'
    radius: 0
    font: 'Helvetica Neue 700 / 11px / uppercase / 0.05em tracking'
    use: 'Marks batch number, "FEATURED", "NEW" — orange rectangle stamp'
  badge-batch:
    background: '#ffffff'
    text: '#f26625'
    padding: '2px 6px'
    radius: 0
    border: '1px solid #f26625'
    font: 'Helvetica Neue 700 / 11px / uppercase'
    use: 'Batch tag like "S24" / "W25" — outlined orange'
  input:
    background: '#ffffff'
    border: '1px solid #828282'
    radius: 0
    padding: '10px 12px'
    font: 'Helvetica Neue 400 / 16px'
    placeholder-color: '#a0a0a0'
    focus-border: '#f26625'
    focus-ring: '0 0 0 2px rgba(242, 102, 37, 0.40)'
    use: 'Form fields, application search — sharp-cornered to match the system'
  nav-link:
    background: 'transparent'
    text: '#000000'
    padding: '8px 12px'
    font: 'Helvetica Neue 600 / 15px'
    hover-text: '#f26625'
    active-underline: '2px solid #f26625'
  hn-link:
    background: 'transparent'
    text: '#000099'
    padding: '0'
    font: 'Verdana 400 / 13px'
    underline: '1px solid #000099'
    visited-color: '#828282'
    use: 'Hacker News link convention — classic web-1.0 blue, underlined, grey when visited'
  decorative-rule:
    color: '#cccccc'
    height: '1px'
    use: 'Section divider — single hairline, no shadow, no gradient'
  orange-strip:
    background: '#f26625'
    height: '64px'
    text: '#ffffff'
    use: 'Header strip on Hacker News (#ff6600 classic) and YC banner moments — solid orange band'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-linear: 'linear'
  duration-instant: 0
  duration-fast: 100
  duration-standard: 180
  duration-slow: 280
  reduced-motion: 'respects prefers-reduced-motion: reduce — most YC interactions are already instant or single-step; reduced-motion mostly affects the rare hover-lift on Demo Day cards'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1440

shadows:
  none: 'none'                           # default — flat is the system
  ambient: 'rgba(0, 0, 0, 0.04) 0 1px 2px'
  standard: 'rgba(0, 0, 0, 0.06) 0 2px 4px'
  elevated: 'rgba(0, 0, 0, 0.10) 0 8px 16px -4px'
  modal: 'rgba(0, 0, 0, 0.18) 0 24px 48px -12px'
  ring: '0 0 0 2px rgba(242, 102, 37, 0.40)'
  ring-blue: '0 0 0 2px rgba(0, 0, 153, 0.40)'

accessibility:
  contrast-text-on-bg: 21.0              # #000000 on #ffffff — AAA at all sizes (the maximum)
  contrast-text-on-brand: 4.6            # #ffffff on #f26625 — AA at body sizes
  contrast-text-soft-on-bg: 8.4          # #525252 on #ffffff — AAA
  contrast-text-meta-on-bg: 4.5          # #828282 on #ffffff — AA at large sizes
  contrast-link-on-bg: 12.6              # #000099 on #ffffff — AAA
  contrast-on-paste: 19.2                # #000000 on #f6f6ef — AAA
  focus-ring: '2px solid rgba(242, 102, 37, 0.40) with 2px offset on white; 2px solid rgba(0, 0, 153, 0.40) on orange surfaces'
  reduced-motion-honored: true
  keyboard-nav: 'visible focus on every interactive surface; tab order matches visual flow; HN supports keyboard shortcuts (j/k navigation on stories)'
  prose-line-length: 'capped at 760px on YC marketing; 800px on Hacker News (intentionally narrow)'

dark-mode: null                          # YC marketing and Hacker News are deliberately light-only — the white-canvas-orange-block heritage is the brand

lineage:
  summary: |
    Y Combinator's identity is the inverse of design fashion. The
    company that funded Stripe, Airbnb, Dropbox, and OpenAI runs its
    public site on **Verlag display + Helvetica/Verdana body, system
    colours, and hard zero radius corners** — a deliberate refusal to
    perform. The orange-red is the entire visual identity. It appears
    as solid blocks, button fills, header strips, the YC logo itself.
    The contemporary marketing site uses a slightly-deeper `#f26625`
    while Hacker News (`news.ycombinator.com`) keeps the legacy
    `#ff6600` — the original web-1.0 traffic-cone orange — alongside
    cream `#f6f6ef` paste-paper background, narrow column, default
    Verdana, classic `#000099` blue / `#828282` visited-link pattern.
    The visual language reads as intentional anti-design — the site
    says "the founders here ship products, not Figma frames" and the
    audience that responds to that signal is exactly the audience YC
    wants. Hard 0px corners are the most aggressive design decision:
    they make every block feel like a printed-paper element, refusing
    the soft polish of modern SaaS marketing. When the brand has 20
    years of unicorn pedigree, restraint is the most expensive choice.
  influences:
    - name: Hacker News (news.ycombinator.com)
      role: Sister site — same `#ff6600` legacy orange header, paste-paper canvas, plain Verdana, narrow column.
      url: https://news.ycombinator.com
    - name: Paul Graham essays (paulgraham.com)
      role: Plain-text Verdana-on-white reading tradition that defines YC voice.
      url: http://paulgraham.com
    - name: Craigslist
      role: Information-density-over-aesthetic ethos and orange-link inheritance.
      url: https://craigslist.org
    - name: Verlag (Hoefler & Co.)
      role: Geometric sans cut for the Guggenheim Museum wayfinding; YC's display voice at 700–900 weight uppercase.
      url: https://www.typography.com/fonts/verlag/overview
    - name: Helvetica / Verdana system stack
      role: System-font discipline as anti-luxury signal in tech-luxury market.
      url: https://en.wikipedia.org/wiki/Helvetica
    - name: Matthew Carter's Verdana (1996)
      role: Screen-legible-at-small-sizes typeface still carrying Hacker News today.
      url: https://en.wikipedia.org/wiki/Verdana
    - name: Newspaper classifieds
      role: Visual register of dense, readable, unstyled rows that HN treats as a design system.
---

## 1. Visual Theme & Atmosphere

Y Combinator's marketing site is anti-design as design strategy. While the rest of SaaS chases gradient meshes, custom typefaces, and 16px radius glass-morphism, YC ships a site that could've been rendered in 2002: hard corners, pure white, signature orange-red `#f26625`. The system isn't lazy — it's *deliberately* restrained, and the restraint is the brand asset. Every founder who lands here understands the signal: this isn't a brand company, it's a portfolio company. And the portfolio is Stripe, Airbnb, Dropbox, OpenAI, Coinbase — there's nothing left to prove with a Figma frame.

The defining geometric move is the **orange-red rectangle**. Every primary CTA — *Apply, Read more, Watch the announcement, Submit your application* — is the same hard `#f26625` block with white Verlag-or-Helvetica-Bold text, 0px radius, no border, no shadow. The sharpness is so unusual in 2026 that it functions as a signature: the moment you see a `#f26625` block with sharp corners and uppercase white type, you know which brand it is. There is no pill variant. There is no rounded twin. The system has one shape — the rectangle — and it holds the line absolutely.

The orange itself has a history. The legacy YC orange `#ff6600` (still live on the Hacker News header) is the original web-1.0 saturated traffic-cone orange, set against pure white at maximum value contrast. The contemporary YC marketing site has subtly tuned the brand to a slightly deeper, more cinematic `#f26625` — warmer, less neon, holding better against modern wide-gamut displays without going red. Both shades coexist across the YC ecosystem. Use `#ff6600` on Hacker News surfaces and any retro-leaning context; use `#f26625` on the contemporary marketing site, Startup School, and Demo Day pages. The orange-red is so canonical that the blocks themselves became the brand — the colour stamps "Y Combinator" without any wordmark ever appearing.

Below the orange CTAs, the system stack does the rest of the work. **Verlag** (Hoefler & Co.'s signature geometric sans) carries display headlines at heavy weights — 700, 800, 900 — frequently in uppercase with negative tracking; this is the typeface that makes the YC marketing register feel like a 1960s Demo Day poster reproduced at web scale. Body type is **Helvetica Neue** on the marketing site and **Verdana** on Hacker News (the latter chosen decades ago for screen-legibility at small sizes and never replaced). Mono is Monaco/Menlo. Everything is system-stack-or-licensed-classics; nothing is bespoke; the loadout is small and ergonomic.

The atmospheric vocabulary: *paste-paper, classified-ad, founders-not-Figma, brutalist-startup-school, Verlag-poster, web-1.0-blue, hard-rectangle, orange-monolith, anti-luxury, 1996-print, conviction-over-polish.* Every surface lands as if someone made it in HTML by hand at 2am — and that read is the brand asset. When the brand has 20 years of unicorn pedigree, restraint is the most expensive choice.

**Key Characteristics**

- Pure white `#ffffff` canvas — zero tint, no warm-cream substitution
- Signature orange-red `#f26625` (with legacy `#ff6600` on Hacker News) — the entire visual identity
- Hard 0px corners on every interactive surface — buttons, cards, inputs, modals
- **Verlag** display at 700–900 weight (often uppercase) for hero typography
- Helvetica Neue body on YC; Verdana body on Hacker News
- Web-1.0 link convention: `#000099` blue, `#828282` visited (HN tradition)
- Paste-paper `#f6f6ef` cream as the only secondary surface — quotes Hacker News
- No drop shadows, no gradients, no blur — flat is the entire elevation system
- 1px `#cccccc` hairline borders — structural, not decorative
- Sticky `64px` header with the orange brand block — no shadow, no blur, just the rectangle

## 2. Color Palette & Roles

### Primary

- **bg** `#ffffff` — pure white canvas, zero tint. The defining ground.
- **text** `#000000` — pure black, full contrast. Display and body share this colour.
- **bg-paste** `#f6f6ef` — Hacker News paste-paper cream; appears on YC marketing in tonal blocks and quote panels.
- **brand-cta-bg** `#f26625` — primary CTA orange-red.
- **on-cta** `#ffffff` — pure white label on the orange rectangle.

### Brand & Accent

- **brand** `#f26625` — contemporary YC marketing orange-red. Slightly deeper than legacy `#ff6600`, holding better on wide-gamut displays.
- **brand-classic** `#ff6600` — the original Hacker News header orange. Live on `news.ycombinator.com` to this day. Use for retro-leaning surfaces and HN-adjacent contexts.
- **brand-hover** `#e85d00` — pressed/hover orange.
- **brand-deep** `#cc4f00` — active state, deep cinder.
- **brand-soft** `rgba(242, 102, 37, 0.10)` — translucent orange tint for hover overlays.
- **accent-startup-school** `#ff8c42` — secondary warm-orange for Startup School branding bands.
- **accent-warm-cream** `#fff6f0` — faintest orange-cream tint behind selected content.

### Interactive

- **link-hn** `#000099` — classic web-1.0 blue. Used on Hacker News and on inline links across the YC marketing site for an explicit retro signal.
- **link-yc** `#000000` — black-underlined links on the YC marketing site (the more contemporary register).
- **link-hover** `#000066` — darker blue on hover.
- **link-visited** `#828282` — Hacker News' signature grey-visited convention. Functional and elegant: visited stories visibly fade to grey.
- **selected-bg** `#fff6f0` — selected nav state, active row highlight.
- **disabled** `#cccccc` — grey-light disabled control text.

### Neutral Scale

- **ink-100** `#000000` — primary text and full-contrast labels.
- **ink-200** `#404040` — secondary heading colour, body emphasis.
- **ink-300** `#525252` — supporting copy, captions, eyebrow text.
- **ink-400** `#828282` — meta text, HN visited-link grey, secondary metadata.
- **ink-500** `#a0a0a0` — eyebrows, helper text, faint metadata.
- **ink-600** `#cccccc` — disabled labels, default border colour.
- **ink-700** `#e6e6e6` — quietest division, decorative dividers.
- **ink-800** `#f6f6ef` — paste-paper, the lightest "neutral" tier.

### Surface & Borders

- **surface-0 (page)** — `#ffffff` white.
- **surface-1 (panel)** — `#f6f6ef` paste-paper cream.
- **surface-2 (warm-tint)** — `#fff6f0` faint orange-cream.
- **border** `#cccccc` — default hairline. Structural — appears around cards, between rows, under headers. Never decorative.
- **border-strong** `#828282` — emphasised rule for inputs and outlined buttons.
- **border-subtle** `#e6e6e6` — quietest division; row separators inside dense lists.
- **border-orange** `rgba(242, 102, 37, 0.40)` — rare orange-tinted border; used on focus rings and outlined batch tags.

### Shadow Colors

YC's depth is **flat** by default. Shadows are an exception, not a system. When they appear (on Demo Day cards, the rare modal), they're tinted with low-opacity black `rgba(0, 0, 0, 0.04)` to `0.18`, never coloured, never blue, never orange. The brand reads as printed paper — and printed paper does not drop-shadow against printed paper. Hacker News uses **zero** shadows anywhere in its UI; the YC marketing site uses two or three across an entire scroll.

### Semantic

- **success** — bg `#e8f5e0`, text `#2d5016`, border `rgba(60, 100, 40, 0.30)`. Conventional warm-green.
- **warning** — bg `#fff4d6`, text `#7a5e00`, border `rgba(212, 162, 50, 0.40)`. Sunlight yellow.
- **danger** — bg `#fde0d4`, text `#8a2a0a`, border `rgba(196, 80, 50, 0.30)`. Warm coral, sympathetic to the orange brand.
- **info** — bg `#e0e8f5`, text `#000099`, border `rgba(0, 0, 153, 0.30)`. Info uses the classic HN blue — quiet but unmistakably YC-coded.

The semantic palette is unusual only in that **info** explicitly inherits the Hacker News blue. That choice ties the entire ecosystem together: error/warning/success are conventional, but info-coloured callouts on the marketing site (form validation, helper banners) immediately read as "Hacker News blue" to anyone who's used the sister site.

## 3. Typography Rules

### Font Family

- **Display**: `"Verlag", "Verlag Bold", "Helvetica Neue", Helvetica, Arial, system-ui, sans-serif` — Verlag Heavy/Black is the YC display signature, used at 700–900 weight, frequently uppercase. Hoefler & Co.'s geometric sans, originally cut for the Guggenheim wayfinding system. When Verlag is unavailable, Helvetica Neue Bold carries the load.
- **Body (YC marketing)**: `"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif` — slightly more refined than Verdana for marketing prose.
- **Body (Hacker News)**: `Verdana, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif` — Matthew Carter's Verdana, designed for screen-legibility at small sizes, used on HN since launch and never replaced.
- **Mono**: `Monaco, Menlo, Consolas, "Courier New", monospace` — system stack for code excerpts in essays and the occasional terminal block in Startup School content.
- **OpenType features**: `kern` and `liga` always on; `tnum` and `zero` enabled in mono. No stylistic sets — the brand register depends on the absence of typographic ornament.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| Display Hero | Verlag | 80px | 900 | 1.0 | -0.03em | uppercase | Startup School / Demo Day banner — the brand's loudest moment |
| Display | Verlag | 64px | 800 | 1.05 | -0.025em | uppercase | Section intro at scale |
| H1 | Verlag | 48px | 800 | 1.10 | -0.02em | uppercase | YC marketing page hero |
| H2 | Verlag | 32px | 700 | 1.15 | -0.015em | kern | Major section |
| H3 | Verlag | 24px | 700 | 1.25 | -0.01em | kern | Sub-section |
| H4 | Verlag | 20px | 700 | 1.30 | normal | kern | Card heading |
| H5 | Helvetica Neue | 16px | 700 | 1.35 | normal | kern | Inline emphasis |
| Eyebrow | Helvetica Neue | 12px | 700 | 1.30 | 0.08em | uppercase | Section pre-label |
| Body Large | Helvetica Neue | 18px | 400 | 1.55 | normal | kern | Lede paragraph on essays |
| Body | Helvetica Neue | 16px | 400 | 1.50 | normal | kern | Default YC marketing body |
| Body Small | Helvetica Neue | 14px | 400 | 1.45 | normal | kern | Secondary text |
| Body HN | Verdana | 13px | 400 | 1.40 | normal | kern | Hacker News body — the reference reading register |
| Caption | Helvetica Neue | 13px | 400 | 1.40 | normal | kern | Image captions, helper text |
| Caption Tabular | Monaco | 13px | 500 | 1.40 | normal | tnum | Stats, batch numbers, version stamps |
| Label | Helvetica Neue | 11px | 700 | 1.30 | 0.05em | uppercase | UI labels, batch tags |
| Code | Monaco | 14px | 400 | 1.55 | normal | tnum zero | Inline + block code |
| Code Micro | Monaco | 11px | 400 | 1.40 | normal | — | Footnote refs |
| Link HN | Verdana | 13px | 400 | 1.40 | normal | kern | Hacker News link — underlined, blue-or-grey |
| Button Label | Helvetica Neue | 16px | 700 | 1.0 | normal | kern | CTA rectangle label |

### Principles

- **Verlag display is the YC marketing voice.** Hero headlines run 700–900 weight, frequently uppercase, with negative tracking. The geometric heaviness reads as "1960s Demo Day poster" — the visual register YC self-references.
- **Verdana on Hacker News, Helvetica Neue on YC marketing.** The split is intentional and historical: Verdana's screen-legibility at 13px is unmatched and HN has never had reason to migrate. The marketing site uses Helvetica Neue for slightly more refined long-form prose.
- **Body weight stays 400.** Hierarchy comes from size and family, not from weight on body type. The brand never asks weight to do shouting work outside of display.
- **Negative tracking scales with size.** -0.03em at 80px, -0.025em at 64px, -0.02em at 48px, -0.015em at 32px, -0.01em at 24px, normal at 20px and below. Compression mirrors poster typography.
- **Uppercase is reserved for display and tags.** H1–H3 and badge labels run uppercase; H4 and below stay sentence-case. The 80px / Verlag 900 / uppercase combination is the brand's loudest typographic move and is used sparingly — once or twice per page maximum.
- **Hacker News at 13px / Verdana / 1.4 line-height** is the reference reading metric. When YC marketing wants to feel HN-coded (essay archives, batch lists), it switches body to Verdana 13.
- **OpenType discipline**: `kern` and `liga` always; `tnum` and `zero` only in mono. Display fonts don't ship stylistic sets and the brand doesn't need them.
- **No italic on display.** Italics appear only in body copy, used sparingly for quoted titles.
- **System-stack ergonomics.** Verdana, Helvetica Neue, Monaco — all available without web-font requests on most platforms. The performance is part of the brand story.

## 4. Component Stylings

### Buttons

**Primary (Orange Block)**
- Background: `#f26625` orange-red.
- Text: `#ffffff` pure white, Helvetica Neue 700 / 16px.
- Padding: `12px 24px`. Radius: `0`. Border: none.
- Hover: bg → `#e85d00`; transition `180ms ease-standard`.
- Active: bg → `#cc4f00` (deep cinder).
- Use: Primary action — *Apply, Submit, Read More, Watch the announcement.* The canonical YC block.

**Hero Orange Block**
- Background: `#f26625`. Text: `#ffffff`. Padding: `20px 40px`. Radius: `0`.
- Font: Verlag 800 / 20px / uppercase / 0.05em tracking.
- Hover: bg → `#e85d00`.
- Use: Hero CTA on Startup School, Demo Day, Apply pages — oversized, uppercase, the entire identity.

**Secondary (Outlined Black)**
- Background: `#ffffff`. Text: `#000000`. Border: `1px solid #000000`.
- Same padding, radius, font as primary.
- Hover: bg → `#f6f6ef` (paste-paper).
- Use: Twin to primary — *Read more, Watch the keynote.*

**Tertiary (Hairline)**
- Background: transparent. Text: `#000000`. Border: `1px solid #cccccc`.
- Same padding and radius.
- Hover: bg → `#f6f6ef`.
- Use: Quietest third action — repeated CTAs, footer links.

### Cards

**White Card with Hairline**
- Background: `#ffffff`. Border: `1px solid #cccccc`. Radius: `0`. Padding: `24px`.
- Shadow: none — value-contrast and the hairline border alone separate the card from the page.
- Hover: border → `#828282`; transition `180ms`.
- Use: Founder profile, news entry, batch company tile, Startup School lecture card.

**Paste-Paper Block**
- Background: `#f6f6ef`. Border: none. Radius: `0`. Padding: `24px`.
- Use: Paste-paper tonal block — quotes Hacker News canvas inside YC marketing for editorial rhythm.

### Badges, Tags, Pills

**Eyebrow Label** — no chrome, just type. Helvetica Neue 700 / 12px / uppercase / 0.08em tracking, colour `#525252`. Sits above section headlines.

**Orange Stamp** — bg `#f26625`, text `#ffffff`, padding `4px 8px`, radius `0`, font Helvetica Neue 700 / 11px / uppercase / 0.05em tracking. Marks "FEATURED", "NEW", "BATCH X".

**Outlined Batch Tag** — bg `#ffffff`, text `#f26625`, border `1px solid #f26625`, padding `2px 6px`, radius `0`. Marks batch number ("S24", "W25").

**Black Tag** — bg `#000000`, text `#ffffff`, padding `4px 8px`, radius `0`. Used on category filters in essay archives.

There is no pill anywhere. The system has one shape and the badges hold the line.

### Inputs / Forms

- Background: `#ffffff`. Border: `1px solid #828282`. Radius: `0`. Padding: `10px 12px`.
- Font: Helvetica Neue 400 / 16px. Placeholder: `#a0a0a0`.
- Focus: border → `#f26625`; ring → `0 0 0 2px rgba(242, 102, 37, 0.40)`.
- Error: border → `#8a2a0a`, ring → `rgba(196, 80, 50, 0.30)`, helper text in `#8a2a0a`.
- Helper: caption 13px in `#525252` below.
- Application forms (`/apply`) use larger padding (`14px 16px`) and tighter labels (uppercase 11px / 700 above each input).

### Navigation

- Header height `64px`. Background `#ffffff` (transparent on hero, solid on scroll).
- Logo: YC orange wordmark on white, or white wordmark on a `#f26625` orange strip on certain pages.
- Nav links: Helvetica Neue 600 / 15px, colour `#000000`, padding `8px 12px`. Hover → `#f26625` orange; active gets `2px` orange underline.
- Right-side CTA pair: tertiary "Log in" + primary orange "Apply" rectangle.
- Mobile: full-screen sheet from the right, links stack at 24px / 700, background `#ffffff`, hairline dividers between rows.

### Hacker News-Specific

**HN Header Strip** — full-width band of `#ff6600` (legacy orange) at 24px height, white wordmark left, navigation links right. The single most recognisable web header in tech.

**HN Story Row** — white background, Verdana 13px black title with `#000099` link colour, `#828282` meta line below ("47 points by user 3 hours ago | flag | 18 comments"). Visited links fade to `#828282` grey. No hover state beyond the underline being already present.

**HN Comment Block** — same Verdana 13 typography, indented by `40px` per nesting level, faint grey `#cccccc` left rule on each level, no card chrome.

### Optional Components

**Modal** — bg `#ffffff`, radius `0`, shadow `rgba(0,0,0,0.18) 0 24px 48px -12px`, max-width `560px`, white backdrop overlay at 70% opacity.

**Tooltip** — bg `#000000`, text `#ffffff`, radius `0`, padding `6px 10px`, font Helvetica Neue 13px / 500. No arrow caret.

**Code Block** — Monaco 14px on `#f6f6ef` paste-paper ground, padding `12px 16px`, border `1px solid #cccccc`, radius `0`.

**Quote Block** — Helvetica Neue 18px italic, indent `24px` from left, 2px solid `#f26625` left rule.

## 5. Layout Principles

### Spacing System

- **Base unit**: 4px.
- **Scale**: 4, 8, 16, 24, 32, 48, 64, 80, 96, 128 — denser than Anthropic's editorial whitespace, sparser than Are.na's information-density.
- **Density observation**: YC marketing is *moderate density*. Hacker News is *high density* — short rows, narrow gutters, content-as-text-on-paper. The marketing site loosens to 64–96px section gutters; HN rows sit on 6–8px vertical spacing.

### Grid & Container

- **Page max width (YC marketing)**: `1280px` — generous edges with a 760px reading column for essays.
- **Page max width (Hacker News)**: `800px` — intentionally narrow, zero responsive scaling above this width. The narrow column is part of HN's identity.
- **Site gutter**: `clamp(16px, 3vw, 48px)` on YC marketing; `8px` minimum on HN.
- **Grid**: 12 columns with 24px gutters on YC marketing. HN uses no grid — it's a single-column document layout.
- **Hero treatment**: full-bleed white or full-bleed `#f26625` orange band, 48–80px Verlag headline, single primary orange CTA below.

### Whitespace Philosophy

YC's whitespace philosophy is *content-first, chrome-last*. The marketing site lets headlines breathe at 64–96px section gutters but doesn't waste space the way an editorial publication would. Hacker News goes the opposite direction — content density is the brand. Both reads share a discipline: spacing is functional, never decorative. There are no empty hero sections, no oversized illustration vignettes, no breathing-room-for-its-own-sake. Whitespace is allocated where it makes content readable, and nowhere else.

### Section Cadence

- **YC marketing**: Hero (white or orange-banner) → Capability Rail (white cards on white with hairline border) → Editorial Essay (paste-paper background, 760px column) → Stats Block (white, large Verlag numbers) → Footer (paste-paper).
- **Hacker News**: Header (`#ff6600` orange strip 24px tall) → Story List (paste-paper background, narrow column, dense rows) → Footer (single line of links).
- The orange band — appearing as the HN header, the YC site nav strip on certain pages, or a full-bleed CTA section — is the chromatic event. Used once or twice per scroll-stop maximum.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| Micro | 0px | All micro surfaces — there is no micro radius |
| Standard (sm) | 0px | All chips, status pills, batch tags |
| Comfortable (md) | 0px | All buttons, inputs, dropdowns |
| Relaxed (lg) | 0px | All modals, code blocks, callouts |
| Featured (xl) | 0px | All cards, hero blocks, editorial pull-boxes |
| Pill | 0px | The system has no pill |

The radii ladder is `0` everywhere. Every interactive surface is a hard rectangle. The discipline is total — a single rounded surface anywhere on the YC ecosystem (marketing, HN, Demo Day, Startup School) would crack the manifesto.

There are no compound radii. There are no per-corner asymmetries. There is the rectangle, and there is nothing else. This is the most aggressive single design decision in the YC system — and it functions as the brand's most recognisable signature.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat — no shadow | Default page surface, hero, body sections, every flat block on HN, 95% of the marketing site |
| 1 | 1px hairline border | Cards, inputs, table rows — structure via line, not depth |
| 2 | `rgba(0, 0, 0, 0.04) 0 1px 2px` | Sticky nav background on scroll (rare) |
| 3 | `rgba(0, 0, 0, 0.06) 0 2px 4px` | Hover-lifted Demo Day cards (rare) |
| 4 | `rgba(0, 0, 0, 0.10) 0 8px 16px -4px` | Dropdown menus, popovers |
| 5 | `rgba(0, 0, 0, 0.18) 0 24px 48px -12px` | Modals, dialogs (rare) |

### Shadow Philosophy

YC's depth is **flat by default**. Hacker News uses zero shadows across its entire UI. The YC marketing site uses two or three across an entire scroll — only on overlay UI (modals, dropdowns) where shadow is functionally necessary to disambiguate layering. Cards lift off white by **hairline border alone** — `1px #cccccc` provides separation without explicit shadow.

When shadows do appear, they're tinted with low-opacity neutral black `rgba(0, 0, 0, 0.04)` to `0.18`, never coloured, never blue, never orange. The brand reads as printed paper — and printed paper does not drop-shadow against printed paper. The orange `#f26625` block never carries a shadow — its colour and weight are the elevation.

## 8. Interaction & Motion

### Easing Curves

- `ease-standard`: `cubic-bezier(0.4, 0, 0.2, 1)` — Material-style; default for hover, focus, colour transitions.
- `ease-emphasized`: `cubic-bezier(0.2, 0, 0, 1)` — punchier exit; used on the rare modal enter and dropdown reveal.
- `ease-linear`: `linear` — for instant-feeling colour swaps where curve smoothing reads as too soft.

### Duration Buckets

- **Instant (0ms)** — Hacker News interactions are mostly server-rendered page reloads, not client transitions. The site is a document, not an app, and behaves like one.
- **Fast (100ms)** — colour transitions, focus rings, link hovers on the YC marketing site.
- **Standard (180ms)** — button hover, card hover, dropdown reveal.
- **Slow (280ms)** — modal enter/exit, full-screen mobile nav sheet.

### Per-Component Micro-States

- **Primary button hover**: bg colour shift `#f26625` → `#e85d00` only — no lift, no scale, no shadow change. `transition: background-color 180ms ease-standard`.
- **Card hover**: border deepens from `#cccccc` to `#828282`; no lift, no shadow change.
- **Link hover (YC marketing)**: colour `#000000` → `#f26625` over 100ms; underline already present, doesn't change.
- **Link hover (HN)**: zero hover effect — links are already underlined and the visited-grey state carries the only colour change.
- **Input focus**: 2px orange ring fades in over 100ms; border darkens to `#f26625`.
- **Nav link active**: 2px orange underline animates in left-to-right over 180ms.
- **Demo Day card hover (rare)**: border darkens + 1px upward translate over 180ms — the only "lift" in the entire system, used sparingly on YC's batch-listing pages.

### Page Transitions

YC marketing: zero client-side route transitions. Pages reload server-side. The hero text appears with a single 280ms fade from white — no translate, no choreographed reveal sequence.

Hacker News: zero transitions of any kind. Pages reload, content renders, done. The site is intentionally instant and document-like.

### Reduced Motion

`@media (prefers-reduced-motion: reduce)` — all transitions become opacity-only, durations halved. Most of the YC ecosystem already meets the reduced-motion bar by default; the only motion to suppress is the rare hover-lift on Demo Day cards (which becomes a colour-only state) and the mobile nav sheet (which becomes an instant fade rather than a slide).

## 9. Accessibility & A11y

### Contrast Pairs

- **`#000000` text on `#ffffff` bg**: 21.0:1 — AAA at all sizes (the maximum contrast available).
- **`#525252` text on `#ffffff` bg**: 8.4:1 — AAA at all sizes.
- **`#828282` meta on `#ffffff` bg**: 4.5:1 — AA at large sizes only (≥18px).
- **`#000099` link on `#ffffff` bg**: 12.6:1 — AAA.
- **`#ffffff` text on `#f26625` orange button**: 4.6:1 — AA at body sizes, safe for buttons. Brand-honest at the edge of compliance.
- **`#000000` text on `#f6f6ef` paste-paper**: 19.2:1 — AAA.
- **`#000000` text on `#fff6f0` warm-tint**: 20.0:1 — AAA.

The white-canvas + black-text combination is the highest-contrast pairing available on the modern web. Accessibility is an emergent property of the brand discipline. The single contrast risk is white-on-orange button labels, which sits at AA (4.6:1) — comfortable for buttons and ≥18px text but not large enough for body copy on orange grounds. This is honoured: the orange surface only carries button labels, never long-form text.

### Focus Indicators

- Default focus ring: `0 0 0 2px rgba(242, 102, 37, 0.40)` with 2px offset on white pages.
- On orange surfaces (white-on-orange buttons): `0 0 0 2px rgba(0, 0, 153, 0.40)` — classic HN blue ring as the only blue appearance on UI surfaces.
- All interactive surfaces must have a visible focus state — no `outline: none` without a replacement. Hacker News inherits the browser default focus ring entirely (which is acceptable and historically appropriate).

### ARIA Patterns

- **Navigation**: `<nav aria-label="Main">` with skip-link to main content.
- **Disclosure**: `<button aria-expanded aria-controls>` for collapsible sections (accordions on YC application FAQ).
- **Dialog**: `role="dialog" aria-modal="true" aria-labelledby` with focus trap and Esc-to-close.
- **List of stories (HN)**: `<ol>` semantic list with `aria-label="Top stories"` and rank metadata.
- **Live regions**: `aria-live="polite"` for form validation messages on `/apply`.

### Keyboard Navigation

- Tab order matches visual flow: skip-link → nav → hero CTA → main content → footer.
- All buttons, links, inputs reachable via Tab; modals trap focus inside until dismissed.
- `Esc` closes modals and dropdowns.
- **Hacker News** historically supports `j`/`k` keyboard shortcuts to navigate stories on listing pages — a developer-flavoured affordance that survives in the contemporary site.

### Screen Reader Hints

- Decorative orange strips have `aria-hidden="true"` if purely visual; if branded (the HN header) they carry the wordmark with `aria-label="Hacker News"`.
- Icon-only nav buttons (mobile hamburger) have `aria-label="Open menu"` / `"Close menu"`.
- Visited-link `#828282` colour change is *visual only* — screen readers receive the same link semantics regardless.

### Reduced Motion

Honoured via the global media query. Most YC interactions are already instant or single-step; reduced-motion mostly affects the rare hover-lift on Demo Day cards and the mobile nav sheet.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Use |
|---|---|---|
| Mobile | < 640px | Single column, full-bleed sections, stacked CTAs |
| Tablet | 640–1024px | 2-column rails, narrower gutters |
| Desktop | 1024–1280px | Full 12-col grid, 760px prose, hero at 80px |
| Wide | > 1280px | Page locks to 1280px, gutters expand |

**Hacker News** is famously near-non-responsive: the site is fixed-width at 800px maximum and degrades to fluid below. A separate `m.ycombinator.com` historically existed; modern browsers handle the desktop site adequately at mobile widths.

### Touch Targets

- Minimum tap target: 44×44px (WCAG AAA).
- Buttons: 48px minimum height on mobile (12px vertical padding × 2 + 16px line-height + buffer).
- Hero orange block: 64px minimum height — generous touch surface.
- Nav link tap area: 44×44px even when visual padding is smaller.

### Collapsing Strategy

- **Header**: full nav at ≥1024px; hamburger sheet below — sheet slides from right, full-screen white, 24px / 700 stacked links.
- **Hero**: 80px Verlag display → 56px → 36px across desktop/tablet/mobile.
- **Capability grid**: 4-up at desktop, 2-up at tablet, 1-up at mobile.
- **Body width**: 760px → fluid 90vw at mobile.
- **Section spacing**: 96px → 64px → 48px across sizes.
- **Hacker News**: stays narrow on all viewports; the brand identity *is* the narrow column.

### Image Behavior

- Founder photos use `srcset` with 1x/2x for crisp rendering on Retina displays.
- Batch company logos render as inline SVG when possible for crisp scaling.
- Hero illustrations (rare on YC) use `aspect-ratio` to prevent layout shift.
- Hacker News uses zero images apart from the small wordmark in the header — the entire site is text.

### Container Queries

Used on YC marketing inside batch-company tiles to switch layout at 280px width (logo-left vs. logo-top). Not used on Hacker News.

## 11. Content & Voice

### Tone

**Direct, unsentimental, founder-flavoured.** YC writes the way a senior YC partner writes — short sentences, specific verbs, no marketing softening. Headlines state plainly: "Apply to YC" / "Make something people want" / "Demo Day". Subheads explain mechanics: "We invest $500K in startups twice a year." There is no emotional appeal, no "join the journey" register. The brand sounds like a partner who has read 8000 application forms and knows what works.

### Microcopy Patterns

- **Button verbs**: "Apply", "Submit", "Read more", "Watch the keynote", "View batch", "See pricing". Never "Sign up now!", never "Get started for free →".
- **Error messages**: "Application incomplete. Required: company description, founder bios." Specific, actionable, no apology.
- **Success confirmations**: "Application submitted. We'll review and respond within 4 weeks." Honest about timeline.
- **Loading states**: rare — most YC interactions are instant page-reloads. When loading does appear: "Loading…" with no spinner ornament.

### Empty States

What they say: explain the empty state and offer the next step. *"No batches yet. The next application window opens on March 15."*
What they don't say: "Oops!", "Whoops!", apologetic exclamations. Empty states are normal information, not emotional moments.

### CTA Verb Conventions

- Primary on hero: "Apply", "Submit your application", "Read the announcement", "Watch Demo Day".
- Secondary: "Read the essay", "Browse the batch", "Watch the keynote", "View library".
- Footer: "Read essays", "Browse Hacker News", "View pricing".

The brand never uses "Sign up free!" or "Get started today!" — the tone is invitational, deliberate, never urgent. YC does not trade in scarcity. The verbs read more like a museum's wall labels than a SaaS landing page. The Hacker News convention extends this register to its limit: most actions on HN are single verbs ("flag", "vouch", "reply", "submit") with no decoration.

## 12. Dark Mode & Theming

**Light-only — white canvas is the brand. No dark variant offered on YC marketing or Hacker News.** The white-canvas + orange-block + black-text combination is the brand's defining choice; a dark mode would require re-keying the entire palette and would collapse the printed-paper register that distinguishes YC from every other accelerator and VC site.

A handful of community-built browser extensions ship dark themes for Hacker News (HN Notify, Dark HN). YC has never officially endorsed or shipped one; the canonical brand surface is light-only across all viewports and times of day.

If a downstream surface ever needs a dark companion, the rule would be: keep the orange `#f26625` at full saturation, swap white for `#0d0d0d` (warm slate-deep), paste-paper for `#1a1a17` (slate-cream-deep), black text for `#f0f0eb` (paper as ink), and inherit the Hacker News blue `#3399ff` (lifted) for links — but this is not currently shipped, and no YC surface uses these values. Use them only as a research starting point if extending the system.

## 13. Lineage & Influences

YC's design DNA is **anti-design as design strategy** — a deliberate refusal of the SaaS marketing register that says *the founders here ship products, not Figma frames*. The lineage is explicit: Hacker News (`news.ycombinator.com`) shares the DNA with cream `#f6f6ef` background, narrow column, default browser sans, classic blue visited-link pattern. Paul Graham's essays on `paulgraham.com` extend the register — plain Verdana on white, no chrome, just the sentences.

What it inherits: the **classified-ad** typographic tradition (Verdana 13 / dense rows / underlined blue links — Craigslist, eBay listing pages, early-2000s text-first commerce), the **printed-paper** information-architecture register (newsprint columns, hairline rules, no shadows), and the **system-stack ergonomics** of the early web (load fast, work everywhere, don't fight the platform). Verlag display is the one licensed-classic indulgence — Hoefler & Co.'s geometric sans cut for the Guggenheim, used at heavy weights to project Demo Day poster confidence.

What it borrows from contemporaries: nothing, intentionally. Where Stripe runs cool-white + light Söhne, where Linear runs near-black + Inter, where Anthropic runs cream + serif body, YC runs *white + system-sans + orange block* and refuses to update. The refusal is the brand. What it rejects: gradient meshes, neon accents, hero animations, custom typefaces (Verlag aside), mascots, illustrations, "AI tech" iconography, and the entire register of Bay Area startup marketing — even though YC funded most of the companies that defined that register.

**Named influences:**

- **Hacker News (`news.ycombinator.com`)** — sister site; same `#ff6600` legacy orange, paste-paper canvas, plain Verdana, narrow column.
- **Paul Graham essays (`paulgraham.com`)** — plain-text Verdana-on-white reading tradition that defines YC voice.
- **Craigslist** — classified-ad information-density-over-aesthetic ethos and orange-link inheritance.
- **Helvetica / Verdana system stack** — system-font discipline as anti-luxury signal in a tech-luxury market.
- **Verlag (Hoefler & Co.)** — geometric sans cut for the Guggenheim Museum wayfinding; YC's display voice.
- **Matthew Carter's Verdana (1996)** — screen-legible-at-small-sizes typeface still carrying Hacker News today.
- **Newspaper classifieds** — visual register of dense, readable, unstyled rows that HN treats as a design system.

## 14. Do's and Don'ts

### Do

- **Do** keep all corners hard at 0px. There are no exceptions across the entire YC ecosystem.
- **Do** use the orange `#f26625` (or legacy `#ff6600` on HN-coded surfaces) as a primary fill — block, button, header strip. It's the identity.
- **Do** stick to system fonts (Verdana on HN, Helvetica Neue on YC marketing). Verlag is the one licensed-classic indulgence for display.
- **Do** ship dense Hacker News rows at Verdana 13 / 1.4 line-height — that is the reference reading register.
- **Do** use classic web-1.0 link conventions: `#000099` blue with underline, `#828282` for visited.
- **Do** invert the canvas for hero CTAs — orange block on white, or white text on orange band.
- **Do** use 1px `#cccccc` hairline borders for structure — never decorative shadows.
- **Do** invest in **Verlag** at 700–900 weight uppercase for hero display moments. The Demo Day-poster register is unmistakably YC.
- **Do** lean on whitespace at 64–96px section gutters on YC marketing.
- **Do** preserve the Hacker News narrow-column layout on every viewport — it is the brand.

### Don't

- **Don't** add gradients. The site is solid colour, all the way down.
- **Don't** add shadows or blur. Flat is the entire elevation system. Hacker News has zero shadows across its entire UI.
- **Don't** soften the visual chrome to feel modern. The dated look is the credibility signal.
- **Don't** introduce a custom typeface on body. Verdana on HN and Helvetica Neue on marketing are non-negotiable.
- **Don't** swap orange for purple or blue. The orange-red is the entire identity.
- **Don't** round any corner. The rectangle is the brand's geometric primitive.
- **Don't** add a mascot, illustration character, or 3D render. The brand has no character art.
- **Don't** ship marketing copy with exclamation marks. The tone is direct, never breathless.
- **Don't** redesign Hacker News. The 800px column and Verdana 13 are the brand asset; updating them would erase YC's most valuable design heirloom.
- **Don't** add a dark mode to YC marketing or HN. White canvas is the brand.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #ffffff
bg-paste: #f6f6ef
text: #000000
text-soft: #525252
text-meta: #828282
brand-orange: #f26625
brand-classic-hn: #ff6600
on-cta: #ffffff
link-hn: #000099
link-visited-hn: #828282
border: #cccccc
```

### Example Component Prompts

1. **"Create a hero in Y Combinator style — pure white `#ffffff` canvas, 80px headline in Verlag 800 uppercase with -0.025em tracking, 18px Helvetica Neue 400 lede, single primary CTA as a `#f26625` orange-red rectangle at 0px radius with white Helvetica Neue 700 16px label and 12×24 padding, no gradient, no animation. Reading column capped at 760px."**

2. **"Design a Hacker News story row — paste-paper `#f6f6ef` background, Verdana 13px black title with `#000099` underline link colour, second line of meta in `#828282` ('47 points by user 3 hours ago | flag | 18 comments'), 6px vertical row padding, no card chrome, no shadow. Visited links fade to `#828282` grey."**

3. **"Build a YC primary CTA button — `#f26625` orange-red background, pure white Helvetica Neue 700 16px label, 12×24 padding, 0px radius, no border, no shadow. Hover bg darkens to `#e85d00`, active to `#cc4f00`. 180ms ease-standard transition on background-color only."**

4. **"Compose a batch company tile — white `#ffffff` background, 1px `#cccccc` border, 0px radius, 24px interior padding, 20px Verlag 700 company name, 14px Helvetica Neue 400 description, outlined orange batch tag (1px `#f26625` border, 2×6 padding, 11px uppercase label) in the top-right corner, no shadow."**

5. **"Render the YC primary nav — 64px header height, white `#ffffff` background, YC orange-on-white wordmark left-aligned, links 15px Helvetica Neue 600 in `#000000` with `#f26625` hover and 2px orange underline on active, right-aligned tertiary 'Log in' button + primary `#f26625` orange rectangle 'Apply' button (12×24 padding, white 16px / 700 label, 0px radius)."**

6. **"Create a Demo Day banner — full-bleed `#f26625` orange-red band, 200px tall, white Verlag 900 80px uppercase headline 'DEMO DAY' centred, 18px white Helvetica Neue 400 subheading below ('Watch live at 9am PT, March 15'), single white-outlined hero CTA 'Watch live' (transparent bg, 1px white border, white 700 16px label, 0px radius, 16×32 padding)."**

### Iteration Guide

1. **Start with white, not cream.** Pure `#ffffff` is the YC marketing entry ticket. Paste-paper `#f6f6ef` is reserved for HN and tonal blocks.
2. **Switch the typeface to Verdana (HN) or Helvetica Neue (marketing).** If the body is Inter, Geist, or Source Sans, change it. System-stack-or-Verlag is non-negotiable.
3. **Reach for the orange `#f26625`.** If the brand colour is purple, blue, or green, swap it. The orange-red is the entire identity.
4. **Zero out every radius.** Buttons, cards, inputs, modals — all to 0px. A single rounded corner anywhere breaks the manifesto.
5. **Strip the gradient.** Any mesh, conic, or radial gradient is wrong — replace with flat white, paste-paper, or an orange band.
6. **Drop the shadows.** Replace box-shadows with 1px `#cccccc` hairline borders or value-contrast alone.
7. **Use uppercase Verlag at hero scale.** If the hero is sentence-case Inter, change it to UPPERCASE Verlag (or Helvetica Bold) at 80px / 800–900 weight with -0.025em tracking. The Demo Day poster register is the recognisable signature.
8. **Calm the verbs.** Replace "Sign up free!" with "Apply"; replace "Learn more →" with "Read more". The voice is direct, never urgent. YC doesn't trade in scarcity.
