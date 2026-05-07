---
name: Readwise
tagline: 'Pastel-orange book-club warmth — soft cream canvas, friendly Tiempos serif accents, and a tangerine that signals ''this is your library.'''
updated_at: 2026-05-06T01:20:47+12:00
published_at: 2026-05-03T16:32:19+12:00
author: webdesignhot
source_url: https://readwise.io
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [media, saas]
tags: [light, warm, soft, serif, sans, editorial, organic, reading]
preview_swatch: ['#fdf7ef', '#ff7a45', '#2c2418']
related: [substack, ghost, notion]
description: 'Readwise sits on a soft cream `#fdf7ef` book-club canvas with deep cocoa text (`#2c2418`), a tangerine action colour (`#ff7a45`) drawn from Penguin paperback spines and autumn foliage, and a Tiempos-flavoured serif paired with Inter for a reading-app marketing page that wants to feel like the inside cover of a paperback, not a productivity SaaS. The duet is serif-on-cream — the third quadrant beyond Ghost''s sans-on-cream and Substack''s serif-on-white — and the result is the only consumer reading-tool brand whose marketing surface visibly reads as ''book-club software.'''

colors:
  bg: '#fdf7ef'                  # warm cream canvas — book-paper
  bg-alt: '#ffffff'              # pure white inside reading surfaces
  bg-deep: '#f9f0e0'             # deeper cream banding
  surface: '#f5ecdf'             # warmer panel for feature cards
  surface-soft: '#fbf3e7'        # softest cream
  surface-warm: '#f5ecdf'        # alias of surface
  surface-deep: '#e8d9c2'        # deeper cream for accents and dividers
  surface-paper: '#ffffff'       # pure paper for highlight cards
  text: '#2c2418'                # cocoa-brown body — never pure black on cream
  text-strong: '#1a1308'         # deeper cocoa headlines
  text-muted: '#6b5e4a'          # warm grey-brown captions
  text-soft: '#9b8d75'            # tertiary
  text-faint: '#b6a888'          # quaternary, "5 days ago"
  text-on-brand: '#ffffff'       # white on tangerine
  text-on-dark: '#fdf7ef'        # cream on deep ink (rare footer band)
  brand: '#ff7a45'               # tangerine action colour
  brand-hover: '#e8602a'         # pressed/hovered
  brand-active: '#cc4a1a'        # deep autumn for active
  brand-deep: '#a83a14'          # deepest autumn for accent moments
  brand-soft: '#ffe4d4'          # tint for secondary buttons and hovers
  brand-paler: '#fff0e6'         # softest tangerine wash for highlight backgrounds
  accent: '#3d6b4a'              # bookish autumn-green for tags and progress
  accent-soft: '#dfeae0'         # soft green tint
  accent-deep: '#27432f'          # deepest green for accent text
  highlight-bg: '#fff4d6'        # the marquee yellow highlight wash (Readwise's signature)
  highlight-text: '#2c2418'      # cocoa text inside a highlight
  underline: '#ff7a45'            # tangerine underlines on links
  link: '#ff7a45'                # link is the brand
  link-hover: '#cc4a1a'          # deep autumn on hover
  link-visited: '#7d3c84'        # warm purple visited
  border: '#e5d9c4'              # warm hairline
  border-soft: '#f0e7d5'         # softest divider
  border-strong: '#d4c4a8'       # focus state hairline
  on-brand: '#ffffff'             # white on brand fill
  scrim: 'rgba(44,36,24,0.45)'   # warm cocoa modal backdrop
  shadow-warm: 'rgba(60,40,15,0.05)'
  shadow-card: 'rgba(60,40,15,0.10)'
  shadow-elev: 'rgba(60,40,15,0.18)'
  success: '#3d6b4a'             # autumn green
  warning: '#c97a1f'             # warm amber-brown
  warning-soft: '#fdf0d8'
  danger: '#b94326'              # warm red, sits in the same family as the tangerine
  info: '#4d6580'                # ink-blue for info, used sparingly

typography:
  display:
    family: '"Tiempos Headline", "Domaine Display", Georgia, "Times New Roman", serif'
    weights: [400, 500, 600]
    opentype-features: ['liga', 'kern']
  body:
    family: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
    opentype-features: ['cv11', 'ss01']
  serif:
    family: '"Tiempos Text", "Charter", Georgia, serif'
    weights: [400, 500]
    opentype-features: ['liga', 'kern']
  mono:
    family: '"JetBrains Mono", "iA Writer Mono", Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 68, weight: 500, lineHeight: 1.02, tracking: '-0.022em', family: serif, opentype: ['liga', 'kern'] }
    h1:              { size: 60, weight: 500, lineHeight: 1.05, tracking: '-0.018em', family: serif, opentype: ['liga'] }
    h2:              { size: 40, weight: 500, lineHeight: 1.15, tracking: '-0.012em', family: serif, opentype: ['liga'] }
    h3:              { size: 28, weight: 500, lineHeight: 1.25, tracking: '-0.008em', family: serif }
    h4:              { size: 22, weight: 600, lineHeight: 1.3,  tracking: '-0.005em', family: body }
    sub-section:     { size: 18, weight: 600, lineHeight: 1.35, tracking: '0',         family: body }
    body-large:      { size: 19, weight: 400, lineHeight: 1.6,  tracking: '0',         family: body }
    body:            { size: 17, weight: 400, lineHeight: 1.6,  tracking: '0',         family: body }
    body-small:      { size: 15, weight: 400, lineHeight: 1.55, tracking: '0',         family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.45, tracking: '0',         family: body }
    micro:           { size: 11, weight: 500, lineHeight: 1.3,  tracking: '0.03em',    family: body, transform: uppercase }
    quote:           { size: 24, weight: 400, lineHeight: 1.45, tracking: '-0.005em',  family: serif, style: italic }
    quote-large:     { size: 32, weight: 400, lineHeight: 1.35, tracking: '-0.008em',  family: serif, style: italic }
    button-cta:      { size: 16, weight: 500, lineHeight: 1.0,  tracking: '0',         family: body }
    nav-link:        { size: 15, weight: 500, lineHeight: 1.0,  tracking: '0',         family: body }
    label:           { size: 12, weight: 500, lineHeight: 1.3,  tracking: '0.04em',    family: mono, transform: uppercase }
    code:            { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',         family: mono }

radius:
  micro: 2
  sm: 6
  md: 10
  lg: 14
  card: 16
  xl: 20
  xxl: 28
  pill: 9999

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 110, 128]

layout:
  page-width: 1180
  prose-width: 680
  header-height: 72
  section-y: 110

components:
  button-cta:
    bg: '#ff7a45'
    color: '#ffffff'
    radius: 9999
    padding: '14px 28px'
    height: 48
    font: 'Inter 500 / 16px'
    use: 'Get Started Free, Try Readwise — every primary action.'
  button-cta-hover:
    bg: '#e8602a'
    color: '#ffffff'
    radius: 9999
    use: 'Hover on primary CTA — pressed deeper tangerine.'
  button-secondary:
    bg: 'transparent'
    color: '#2c2418'
    border: '1px solid #e5d9c4'
    radius: 9999
    padding: '13px 27px'
    height: 48
    use: 'See how it works, Watch demo — outlined twin to primary.'
  button-tertiary-text:
    bg: 'transparent'
    color: '#ff7a45'
    use: 'Inline text links and "Learn more" — tangerine with underline on hover.'
  button-soft:
    bg: '#ffe4d4'
    color: '#cc4a1a'
    radius: 9999
    padding: '8px 16px'
    use: 'Inline pill chips for "New" / "Beta" callouts.'
  feature-card:
    bg: '#f5ecdf'
    color: '#2c2418'
    radius: 16
    padding: '28px'
    border: '1px solid #e5d9c4'
    shadow: '0 4px 12px rgba(60,40,15,0.05)'
    use: 'Cream feature panel with hairline border and soft warm shadow.'
  highlight-card:
    bg: '#ffffff'
    color: '#2c2418'
    radius: 14
    padding: '24px 28px'
    border: '1px solid #e5d9c4'
    accent: '2px solid #ff7a45'
    use: 'Pull-quote / highlight card — white inside cream, with a 2px tangerine left rule.'
  book-cover-stack:
    bg: 'transparent'
    shadow: '0 16px 40px rgba(60,40,15,0.12)'
    rotation: '-4deg, 0deg, +4deg'
    use: 'Three Readwise covers floating slightly tilted — the marketing motif.'
  pull-quote:
    bg: 'transparent'
    color: '#2c2418'
    font: 'Tiempos Text 400 italic 24/1.45'
    accent: '2px solid #ff7a45 on left'
    padding: '0 0 0 24px'
    use: 'Serif italic pull-quote with tangerine left rule.'
  text-input:
    bg: '#ffffff'
    color: '#2c2418'
    radius: 6
    height: 44
    padding: '12px 14px'
    border: '1px solid #d4c4a8'
    focus: '2px solid #ff7a45'
    use: 'Form input — slim 6px radius, cream-warm hairline.'
  highlight-marquee:
    bg: '#fff4d6'
    color: '#2c2418'
    padding: '2px 4px'
    radius: 2
    use: 'Yellow highlight wash on inline phrases — Readwise''s signature reading-highlight motif.'
  daily-review-card:
    bg: '#ffffff'
    color: '#2c2418'
    radius: 16
    padding: '24px'
    shadow: '0 8px 24px rgba(60,40,15,0.10)'
    border: '1px solid #e5d9c4'
    use: 'Phone-frame mockup card showing the Readwise daily highlight surface.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-warm: 'cubic-bezier(0.32, 0.72, 0, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 380
  cta-press: 'CTA bg deepens #ff7a45 → #cc4a1a over 150ms on :active'
  card-hover: 'shadow elevates from 0 4px 12px to 0 10px 24px and translateY(-2px) over 240ms'
  highlight-reveal: 'highlight wash fades in over 320ms (paint-on-paper feel) on first viewport intersection'
  book-stack-tilt: 'subtle parallax tilt on hover — covers rotate ±2 degrees over 380ms warm easing'
  reduced-motion: 'respects prefers-reduced-motion: reduce — translate and rotate suppressed; opacity transitions remain.'

breakpoints:
  mobile: 600
  tablet: 960
  desktop: 1180
  wide: 1440

shadows:
  ambient: 'rgba(60,40,15,0.04) 0 1px 2px'
  card: 'rgba(60,40,15,0.05) 0 4px 12px'
  hover: 'rgba(60,40,15,0.10) 0 10px 24px'
  book-stack: 'rgba(60,40,15,0.12) 0 16px 40px'
  modal: 'rgba(60,40,15,0.18) 0 24px 60px'
  ring: '0 0 0 2px #ff7a45'

accessibility:
  contrast-text-on-bg: 13.4         # #2c2418 on #fdf7ef — AAA at body sizes
  contrast-text-on-brand: 3.2       # #ffffff on #ff7a45 — fails AA at body sizes; passes AA-large at 18+/600
  contrast-link-on-bg: 3.5          # #ff7a45 on #fdf7ef — AA-large only; full-text links underlined to compensate
  contrast-muted-on-bg: 6.4         # #6b5e4a on #fdf7ef — AAA
  contrast-deep-on-soft: 7.1        # #cc4a1a on #ffe4d4 — AAA
  focus-ring: '2px solid #ff7a45 with 2px outline-offset'
  reduced-motion-honored: true
  touch-target-min: 44
  keyboard-nav: 'Tab: nav → hero CTA → feature cards (each focusable card is its own stop) → footer; Esc closes modal/menu.'

dark-mode: optional

colors-dark:
  bg: '#1c1610'                   # deep cocoa night
  bg-alt: '#221b14'
  surface: '#2a2218'
  surface-soft: '#221b14'
  surface-deep: '#33291c'
  text: '#f3e9d6'
  text-strong: '#ffffff'
  text-muted: '#b8a98c'
  text-soft: '#9b8d75'
  brand: '#ff8c5a'                # slightly lighter tangerine for night legibility
  brand-hover: '#ffa57a'
  brand-soft: '#3a2418'
  accent: '#7faa84'
  highlight-bg: '#5c4a1a'         # darker amber wash for highlights at night
  border: '#3a3024'
  border-soft: '#2a2218'
  on-brand: '#1c1610'
  link: '#ff8c5a'

lineage:
  summary: |
    Readwise's marketing system reads like a paperback that learned how
    to sell software. The canvas is a deliberate book-paper cream
    (`#fdf7ef`), the text is cocoa-brown (`#2c2418`) rather than black
    so it never bites against the warm bg, and the action colour is a
    tangerine `#ff7a45` that pulls from sunset / autumn-foliage rather
    than tech-orange. Display type is a Tiempos-style book serif at
    60–68px / 500 weight with negative tracking, while body is plain
    Inter at 17/27 — the two play a quiet duet rather than a competing
    battle. Where Ghost goes sans-on-cream and Substack goes
    serif-on-white, Readwise lands in the third quadrant: serif-on-cream.
    The closest spiritual sibling is Stripe Press, but where Stripe
    Press is publishing-as-art, Readwise is publishing-as-utility —
    softer, rounder, with full pill buttons and a friendlier tone. The
    accent green (`#3d6b4a`) shows up as a secondary autumn-vegetable
    note for tags and progress indicators. The signature interaction
    motif is the *yellow highlight wash* (`#fff4d6`) that fades in over
    individual phrases — a literal rendering of the highlight pen
    that powers Readwise's underlying product.
  influences:
    - name: Stripe Press
      role: Book-cream canvas treated as a serious typographic surface.
      url: https://press.stripe.com
    - name: Substack
      role: Serif-led reading-tool aesthetic.
      url: https://substack.com
    - name: Penguin / Pelican paperbacks
      role: Cream-cover book-club inheritance — orange spine, serif title, cocoa rule.
      url: https://www.penguin.co.uk
    - name: Klim Type Foundry — Tiempos
      role: Tiempos Headline + Tiempos Text — the typeface duet that anchors Readwise's editorial register.
      url: https://klim.co.nz
    - name: Rauno Freiberg / Linear marketing era
      role: Soft-warm card density paired with disciplined motion easing.
      url: https://rauno.me
---

## 1. Visual Theme & Atmosphere

Readwise's marketing surface looks the way a well-loved Penguin paperback feels. The canvas is a soft book-paper cream (`#fdf7ef`), text is cocoa-brown (`#2c2418`) rather than the harsh `#000` you would expect on a SaaS site, and a tangerine `#ff7a45` carries every action — a colour pulled from autumn leaves and Penguin spines, not from the saturated tech-orange spectrum that powers HubSpot or SoundCloud. Walk onto the page from a typical SaaS marketing site and the temperature shift is immediate: warm-paper-warm, not blue-glass-cool.

Display type is a Tiempos-flavoured book serif at 60–68px / 500 weight with `-0.018em` to `-0.022em` tracking. Body type is plain Inter at 17/27 — the larger reading size signals "we are a reading app, take your time." Pull quotes use the serif again, set in italic at 24px on a generous 1.45 line-height, anchored by a 2px tangerine left rule. The duet of Tiempos display and Inter body is the typographic signature — and Readwise leans into it without ever letting the serif drop below 22px, where its character would dissolve into Georgia.

The chromatic identity is essentially monochromatic plus one accent — **tangerine on cream**. Readwise resists every other "reading-tool" colour temptation: no neon-yellow highlight everywhere, no Notion grey, no Apple Notes white. The single tangerine does all the brand work, occasionally joined by a bookish autumn-green (`#3d6b4a`) on tags and progress indicators. Where the brand really shows itself is in the **yellow highlight wash** (`#fff4d6`) painted under specific marketing phrases — a literal rendering of the highlight-pen that powers the underlying product. It feels like reading.

Shape language is fully-pill for CTAs (9999px) and softly rounded for cards (16px). Buttons are 48px tall, the masthead is 72px, and the page caps at a tight 1180px (narrower than typical SaaS 1280) to match a paperback reading width. The shape vocabulary has no hard corners except the slim 6px form inputs — every interactive element rounds.

Photography is sparing. Readwise leans on **abstract book-cover stacks** (three brand covers floating slightly tilted, drop-shadowed to read as physical paper), **phone mockups** (clean device frames showing the daily-review surface), and **occasional handwriting-style underlines** (tangerine, scribbled rather than ruler-straight) as illustration. There are no stock photos of people-reading-on-couches; the brand stays typographically led.

**Key Characteristics:**
- Single brand colour: tangerine (`#ff7a45`) for CTAs, the wordmark, link hover, and accent rules
- Cream canvas (`#fdf7ef`) — warmer than Substack, softer than Stripe Press
- Tiempos serif on display + Inter on body — serif-on-cream is the third typographic quadrant
- Yellow highlight wash (`#fff4d6`) painted under marketing phrases — the product made visible
- Pill CTAs at 9999px / 48px height with white-on-tangerine 16/500
- Cards at 16px radius with warm-tinted hairline `#e5d9c4` and soft `0 4px 12px rgba(60,40,15,0.05)` shadows
- Cocoa-brown body text (`#2c2418`) instead of black — never bite the cream
- Generous 110px vertical section rhythm — paperback breath, not SaaS density

## 2. Color Palette & Roles

### Primary
- **Canvas Cream** (`#fdf7ef`): default page floor; the entire site sits on this warm paper white
- **Bg Alt White** (`#ffffff`): pure white inside reading surfaces and highlight cards
- **Bg Deep** (`#f9f0e0`): deeper cream banding for alternating sections
- **Cocoa Ink** (`#2c2418`): primary body text — warm near-black, a 30/24/18 RGB shift away from pure black
- **Heading Cocoa** (`#1a1308`): deeper cocoa for hero serif headlines

### Brand
- **Tangerine** (`#ff7a45`): the action colour — CTA fill, wordmark, link, accent rules, focus ring, star fill on testimonials
- **Brand Hover** (`#e8602a`): pressed/hovered tangerine
- **Brand Active** (`#cc4a1a`): deep autumn for `:active` and link hover
- **Brand Deep** (`#a83a14`): deepest autumn for accent text on soft-tangerine surfaces
- **Brand Soft** (`#ffe4d4`): tint for soft-pill chips and hovers
- **Brand Paler** (`#fff0e6`): softest tangerine wash used as feature-card backing on a single section

### Accent
- **Bookish Green** (`#3d6b4a`): tags and progress indicators — the autumn-vegetable counterpart to the tangerine
- **Accent Soft** (`#dfeae0`): soft green tint for green-pill chips
- **Accent Deep** (`#27432f`): deepest green for accent text
- **Highlight Yellow** (`#fff4d6`): the marquee yellow highlight wash — Readwise's signature paint-on-paper colour

### Interactive
- **Link** (`#ff7a45`): every text link is the brand tangerine
- **Link Hover** (`#cc4a1a`): hover deepens to autumn
- **Visited** (`#7d3c84`): warm purple visited-link state — chosen because cool blue would clash with the cream
- **Focus Ring**: `2px solid #ff7a45` with 2px offset
- **Selected** (`#ff7a45`): selected radio / checkbox / tab fill

### Neutral Scale
- **Cocoa Ink** (`#2c2418`): primary text
- **Heading Cocoa** (`#1a1308`): hero
- **Muted** (`#6b5e4a`): secondary metadata, "5 days ago"
- **Soft** (`#9b8d75`): tertiary, sub-captions
- **Faint** (`#b6a888`): quaternary; rarely used
- **Border Default** (`#e5d9c4`): warm hairline — the brand's universal divider
- **Border Soft** (`#f0e7d5`): softest divider, between body paragraphs
- **Border Strong** (`#d4c4a8`): focus-state hairline, form input outline

### Surface & Borders
- **Cream Canvas** (`#fdf7ef`): default
- **Surface Warm** (`#f5ecdf`): feature card panel — Readwise's signature "card on cream"
- **Surface Soft** (`#fbf3e7`): softest cream, alternating bands
- **Surface Deep** (`#e8d9c2`): deeper cream for accent strips and footer top
- **Surface Paper White** (`#ffffff`): white inside highlight cards and modals
- **Hairline** (`#e5d9c4`): used everywhere a divider is needed; never grey

### Shadow Colors
Readwise's shadows are warm-tinted — every drop-shadow uses cocoa (`rgba(60,40,15,...)`) rather than neutral black, so the elevation reads as paper-on-paper rather than glass-on-glass. The book-cover stack motif uses the deepest shadow (`0 16px 40px rgba(60,40,15,0.12)`) to read as physical objects.

- `rgba(60,40,15,0.04) 0 1px 2px` — ambient
- `rgba(60,40,15,0.05) 0 4px 12px` — card default
- `rgba(60,40,15,0.10) 0 10px 24px` — card hover
- `rgba(60,40,15,0.12) 0 16px 40px` — book-stack
- `rgba(60,40,15,0.18) 0 24px 60px` — modal

### Semantic
- **Success Green** (`#3d6b4a`): "Imported", "Synced", "Saved" — uses the same bookish autumn green as the accent
- **Warning Amber** (`#c97a1f`): warm amber-brown — caution copy, not bright marketing yellow
- **Danger Red** (`#b94326`): warm red, sits in the same family as the tangerine — error states only
- **Info Blue** (`#4d6580`): ink-blue for info banners; used sparingly because cool blue feels off-brand on cream

## 3. Typography Rules

### Font Family

**Display**: `Tiempos Headline` (Klim Type Foundry). Fallback chain: `"Domaine Display", Georgia, "Times New Roman", serif`. Tiempos is the serif that anchors major editorial brands (FT, Stripe Press, MIT Tech Review) and Readwise uses it almost identically — at 60–68px / 500 weight with negative tracking, deployed for hero, h1, h2 and pull-quote.

**Body**: `Inter` (Rasmus Andersson). Fallback through `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto`. Inter at 17px / 1.6 line-height — slightly larger than the 16px norm because Readwise is specifically a reading product. The `cv11` and `ss01` OpenType variants are enabled to swap in the more humanist single-storey `a` and tabular zero.

**Serif (alternate)**: `Tiempos Text` for italic pull-quotes and long-form body in editorial sections. Tiempos Text is the running-text companion to Tiempos Headline, with shorter ascenders and a slightly heavier optical mass for paragraph use.

**Mono**: `JetBrains Mono` for "highlight count" badges, kbd shortcuts, and developer-facing meta labels.

**OpenType features**: `liga` and `kern` everywhere; `cv11` and `ss01` on Inter body to surface the humanist alphabet; `tnum` is enabled on numeric badges (highlight counts, day-streak numerals).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| display-hero | Tiempos Headline | 68 | 500 | 1.02 | -0.022em | liga, kern | Hero headline, single line ("Read smarter, not just faster") |
| h1 | Tiempos Headline | 60 | 500 | 1.05 | -0.018em | liga | Major page titles |
| h2 | Tiempos Headline | 40 | 500 | 1.15 | -0.012em | liga | Section openers |
| h3 | Tiempos Headline | 28 | 500 | 1.25 | -0.008em | — | Sub-section heads on long pages |
| h4 | Inter | 22 | 600 | 1.3 | -0.005em | — | Feature card titles — Inter, not Tiempos |
| sub-section | Inter | 18 | 600 | 1.35 | 0 | — | Sub-section heads in feature blocks |
| body-large | Inter | 19 | 400 | 1.6 | 0 | cv11, ss01 | Hero sub-copy under display |
| body | Inter | 17 | 400 | 1.6 | 0 | cv11, ss01 | Default paragraph — slightly larger than 16px norm |
| body-small | Inter | 15 | 400 | 1.55 | 0 | — | Secondary metadata |
| caption | Inter | 13 | 400 | 1.45 | 0 | — | Footer caption, "Made by [team]" |
| micro | Inter | 11 | 500 | 1.3 | 0.03em | uppercase | Eyebrow labels |
| quote | Tiempos Text Italic | 24 | 400 | 1.45 | -0.005em | liga | Pull-quote default |
| quote-large | Tiempos Text Italic | 32 | 400 | 1.35 | -0.008em | liga | Hero pull-quote in testimonials |
| button-cta | Inter | 16 | 500 | 1.0 | 0 | — | Primary CTA label — medium weight, not bold |
| nav-link | Inter | 15 | 500 | 1.0 | 0 | — | Masthead nav |
| label | JetBrains Mono | 12 | 500 | 1.3 | 0.04em | uppercase | Highlight-count badges, "BETA" tags |
| code | JetBrains Mono | 14 | 400 | 1.5 | 0 | — | Inline code in developer docs |

### Principles

- **Tiempos display + Inter body** is the typographic signature. Substituting either without the other collapses the brand into Substack (serif-only) or Notion (Inter-only).
- **Display weight stays at 500.** Most editorial brands run 700+ for display; Readwise's 500 weight gives the headline a slightly lighter, more book-club feel — closer to a Penguin Classic title than a magazine cover.
- **Body type at 17px / 1.6** signals "reading app." 16px is the SaaS default; Readwise's +1px is a deliberate signal that this is software for readers.
- **Negative tracking on display.** `-0.018em` at h1 60px, `-0.022em` at hero 68px. Required to keep the wide Tiempos letterforms from feeling spacy.
- **`cv11` / `ss01` on Inter body** — surfaces the single-storey `a` and humanist alphabet, slightly warming Inter to match the warm cream surround.
- **Tabular numerals on counts.** Highlight totals, day streaks, year-in-review numbers — `tnum` everywhere.
- **Pull-quotes go italic Tiempos.** Pull-quotes never use Inter; the italic serif at 24/1.45 with a 2px tangerine left rule is the signature decoration.
- **Mono is JetBrains Mono only on the marketing surface.** Used sparingly — kbd shortcuts, developer doc snippets, count badges. The product UI uses iA Writer Mono in some surfaces; marketing stays single-mono.

## 4. Component Stylings

### Buttons

**`button-cta`** — tangerine (`#ff7a45`) fill, white text in 16/500, 9999px pill, 14×28px padding, 48px height. The most common CTA: "Get started free", "Try Readwise", "Start free trial". Hover deepens to `#e8602a`; active to `#cc4a1a`. No drop-shadow — Readwise resists making the CTA feel glossy.

**`button-secondary`** — transparent fill, 1px `#e5d9c4` warm hairline, cocoa text in 16/500. Same pill, same 48px height. Used for "See how it works", "Watch demo", inverse CTAs over tangerine surfaces.

**`button-tertiary-text`** — plain tangerine text, no surface. Underlined on hover. The text-link CTA: "Learn more →", "Read the blog →".

**`button-soft`** — soft tangerine (`#ffe4d4`) fill, deep tangerine (`#cc4a1a`) text in 14/500. 9999px pill, 8×16px padding, 32px height. Used for inline "New" / "Beta" pill chips beside section titles.

### Cards

**`feature-card`** — warm cream `#f5ecdf` panel, 16px radius, 1px `#e5d9c4` hairline, 28px padding, soft `0 4px 12px rgba(60,40,15,0.05)` shadow. Holds an icon, h4 title, body-small description. Hover lifts shadow to `0 10px 24px rgba(60,40,15,0.10)` and translates the card up 2px.

**`highlight-card`** — pure white `#ffffff` surface, 14px radius, 1px hairline, 24×28px padding, 2px tangerine left rule. Holds a serif italic pull-quote (Tiempos Text 24px) followed by a small Inter 13px attribution line. The brand's signature highlight motif rendered as a real card.

**`book-cover-stack`** — three book-cover thumbnails arranged in a tilted stack (rotated -4°, 0°, +4°). Each cover is a 320×480 illustration with a deep `0 16px 40px rgba(60,40,15,0.12)` shadow. On hover the stack subtly parallaxes — covers rotate ±2°. The marketing motif Readwise uses to represent its library across the homepage and the year-in-review pages.

**`pull-quote`** — transparent surface, Tiempos Text 24/400 italic in cocoa, with a 2px tangerine left rule and 24px left padding. Below the quote, an Inter 14/500 attribution in muted cocoa — "— Maria Popova, The Marginalian". Long-form testimonials use this pattern.

**`daily-review-card`** — phone-frame mockup card. White surface, 16px radius, hairline, deeper card shadow `0 8px 24px rgba(60,40,15,0.10)`. Inside, a stacked list of highlights with the yellow `#fff4d6` highlight-marquee wash painted under select phrases. The literal product surface, embedded in marketing.

### Badges, Tags, Pills

**`highlight-marquee`** — yellow (`#fff4d6`) wash painted under inline phrases, 2px radius, 2×4px padding. Inserted as `<mark>` over key marketing phrases ("never lose what you read", "your second brain"). The signature paint-on-paper effect.

**`tag-pill`** — soft cream `#f5ecdf` surface, 1px hairline, 11/500 mono uppercase label in cocoa, 6×12px padding. Used for category tags on blog index ("Reading", "Highlights", "Year in Review").

**`accent-pill`** — soft green `#dfeae0` surface, deep green `#27432f` text in 12/500, 6×12px padding, 9999px radius. Used on "Free" or "Save 20%" plan callouts — the only place green appears.

**`new-pill`** — soft tangerine `#ffe4d4` surface, deep tangerine `#cc4a1a` text in 11/500 uppercase, 4×8px padding. "NEW" beside a feature title.

### Inputs / Forms

**`text-input`** — white `#ffffff` surface, 1px `#d4c4a8` warm hairline (darker than default border to read as a form edge), 6px radius (slimmer than the 16px cards to keep utility), 44px height, 12×14px padding. Stacked label above in `caption` muted. On focus the border thickens to 2px tangerine.

**`email-signup`** — 9999px pill, white fill, 1px hairline, with an inset tangerine "Subscribe" pill on the right. Used in the footer to capture newsletter sign-ups.

**`textarea`** — same hairline + radius as text-input, 120px min-height, resize: vertical. Used in feedback widgets.

### Navigation

**`masthead`** — full-width cream bar with no bottom border (the page floor flows up into the masthead), 72px height. Wordmark flush left in cocoa with a small tangerine highlight beneath the mark. Nav links centred ("Product", "Pricing", "Blog", "Help") in 15/500 cocoa with `:hover` flipping to tangerine. "Sign in" outline pill + "Get started" tangerine pill flush right.

**`mobile-menu-overlay`** — full-screen cream overlay on mobile, with a stacked nav list in serif Tiempos 28/500. Closing X anchored top-right.

**`footer`** — warm `#e8d9c2` deeper cream surface, 96px top padding. Multi-column link list in 14/400 cocoa, with the wordmark flush left and the email-signup pill on the right. Bottom band in micro 11/500 mono uppercase: "Made for readers".

### Tooltips & Toasts

**`tooltip`** — cocoa `#2c2418` fill, cream `#fdf7ef` text in 13/500, 6px radius, 6×10px padding. Inverted from the page so the tooltip reads as ink-on-paper.

**`toast`** — white surface, 12px radius, hairline, modal-shadow, cocoa text in 14/400. Bottom-centre on save / sync confirmations.

### Modals

**`modal`** — centred dialog over 45%-opacity cocoa scrim. White surface, 20px radius, 1px hairline, modal shadow. Close X anchored top-right in muted cocoa. Used for sign-up captures and demo embed.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 110 · 128`
- Section padding (vertical): **110px** between major bands — wider than typical SaaS 80–96px, signalling reading rhythm
- Card internal padding: **28px** for feature cards, **24px** for highlight cards
- Gutters: **32px** between columns at desktop, compressing to 20px at tablet, 16px at mobile

### Grid & Container

- Max content width: **1180px** centred — narrower than the SaaS 1280 norm to match a paperback reading width
- Prose width inside long-form: **680px** — the canonical reading column
- Hero: full-width band at 110–128px vertical padding, content constrained to 1180
- Feature grid: typically 3-up at desktop, 2-up at tablet, 1-up at mobile
- Book-cover stack: anchored to the hero right column, ~480px width

### Whitespace Philosophy

Readwise gives each section more breath than its peers. The 110px vertical rhythm between sections, combined with the 17px body type and 1.6 line-height, produces a marketing surface that paces like an essay. Inside each section, density stays moderate — feature grids run 3-up with comfortable card padding, and the hero column rarely fills more than 60% of the viewport width. The visual rhythm is **open hero → moderate-density feature grid → open editorial → quote → CTA** — closer to a printed essay than a SaaS landing page.

### Section Cadence

Readwise alternates between **cream bands** (`#fdf7ef` default, `#fbf3e7` softest) and **deeper cream bands** (`#f5ecdf` warmer, `#e8d9c2` deepest). The deepest cream appears only at the footer top and the occasional pull-quote band — Readwise resists alternating to white because pure white reads as Apple Notes, not as a reading app. Section dividers use the warm `#e5d9c4` hairline; never grey.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 2px | Highlight-marquee wash |
| Small | 6px | Form inputs, kbd shortcut chips |
| Medium | 10px | Toast, small mockups |
| Large | 14px | Highlight cards, daily-review card |
| Card | 16px | Feature cards |
| XL | 20px | Modals, hero shells |
| XXL | 28px | Large illustration shells |
| Pill | 9999px | CTAs, nav pills, tags, email signup, accent pills |

Form inputs at 6px are the only "off-system" radius — chosen to read slightly more utilitarian than the 14–16px cards and pill CTAs. There are no compound radii.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Body, masthead, footer (~85% of surfaces) |
| 1 — Ambient | `rgba(60,40,15,0.04) 0 1px 2px` | Default card resting state |
| 2 — Card | `rgba(60,40,15,0.05) 0 4px 12px` | Feature cards |
| 3 — Hover | `rgba(60,40,15,0.10) 0 10px 24px` | Card on hover |
| 4 — Book Stack | `rgba(60,40,15,0.12) 0 16px 40px` | Book-cover stack motif |
| 5 — Modal | `rgba(60,40,15,0.18) 0 24px 60px` | Centred dialog |

### Shadow Philosophy

Every shadow is warm-tinted (`rgba(60,40,15,...)`) rather than neutral black. This is the brand's signature elevation choice: shadows that read as **paper-on-paper** rather than **glass-on-glass**. The book-cover stack motif uses the deepest shadow to read as physical objects, while feature cards use a soft single-layer drop that lifts them off the cream without ever feeling glossy. There are no multi-layer Stripe-style atmospheric shadows — Readwise stays single-layer.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, focus, and colour transitions
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry, mega-menu
- **Warm**: `cubic-bezier(0.32, 0.72, 0, 1)` — book-stack tilt, highlight-reveal — slightly slower start for an organic feel

### Durations
| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 150ms | CTA colour swap, focus ring fade-in, link hover |
| Standard | 240ms | Card hover lift, feature transitions |
| Slow | 380ms | Book-stack parallax tilt, highlight-marquee paint reveal |

### Per-Component Recipes

- **CTA hover**: tangerine deepens `#ff7a45` → `#e8602a` over 150ms standard easing.
- **CTA press**: deepens further to `#cc4a1a` for 150ms on `:active`.
- **Feature card hover**: shadow elevates from `0 4px 12px` to `0 10px 24px` and the card translates `translateY(0 → -2px)` over 240ms standard.
- **Book-stack tilt**: on hover, the three covers parallax tilt ±2 degrees over 380ms warm easing — gives the stack a paper-on-table feel.
- **Highlight-marquee reveal**: when the marketing phrase intersects the viewport, the yellow wash fades in `opacity 0 → 1` over 320ms warm easing — paint-on-paper rather than swipe-on-screen.
- **Link hover**: text colour transitions ink → tangerine over 150ms; underline thickness grows from 1px to 2px over the same duration.
- **Modal enter**: scrim fades in over 200ms, dialog translates from `translateY(8px) opacity(0)` to `0/1` over 240ms emphasized.
- **Page transitions**: no full-page transition — links fire hard navigation. Readwise prioritises perceived speed.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. Card translateY and book-stack tilt suppress to opacity-only. Highlight-marquee paint becomes an instant fill. Modal slide degrades to pure opacity fade. CTA colour transitions remain because they communicate state, not motion.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #2c2418 cocoa on #fdf7ef cream canvas | 13.4 | AAA |
| #1a1308 heading on #fdf7ef | 17.1 | AAA |
| #6b5e4a muted on #fdf7ef | 6.4 | AAA |
| #ffffff on #ff7a45 CTA | 3.2 | Fails AA at body sizes — passes AA-large at 18+/600 |
| #ffffff on #e8602a CTA hover | 4.1 | AA-large only |
| #ffffff on #cc4a1a CTA active | 5.5 | AA at body sizes |
| #ff7a45 link on #fdf7ef | 3.5 | AA-large only — full-text links are underlined to compensate |
| #cc4a1a deep tangerine on #ffe4d4 soft | 6.1 | AAA |
| #2c2418 on #f5ecdf surface | 12.1 | AAA |

The white-on-tangerine CTA pair sits at **3.2 — fails AA at body sizes**. Readwise compensates two ways: (1) all CTA labels are 16px / 500 weight, pushing the type into the borderline of "AA large at 18px+ bold," and (2) every CTA gets a 2px tangerine focus ring on `:focus-visible` for keyboard users. Critically, **all text-only links are underlined by default** so users can identify links without relying solely on the brand colour.

### Focus Indicators

Focus ring is **2px solid `#ff7a45`** (tangerine) with 2px outline-offset, applied to buttons, inputs, and links via `:focus-visible`. The ring sits on the cream canvas with a 2px transparent gap before the tangerine ring lands, giving the focus state breathing room and ensuring the ring reads against both cream and white card surfaces.

### ARIA Patterns

- **Highlight-marquee**: rendered as `<mark>` with no extra ARIA — the semantic element is sufficient.
- **Book-cover stack**: `role="img"` with a single `aria-label="A stack of three Readwise book covers — your library, illustrated"`. Decorative, not announced as separate items.
- **Daily-review mockup**: `role="img"` with `aria-label` describing the surface ("Phone screen showing today's Readwise daily review with three highlights").
- **Newsletter signup**: `<form role="form">` with explicit `aria-label="Newsletter signup"` on the form and `aria-describedby` linking the disclaimer below.
- **Modal**: `role="dialog"` + `aria-modal="true"` + `aria-labelledby` referencing the modal title. Focus trapped inside; Esc closes.
- **Pricing toggle**: `role="radiogroup"` with monthly/annual radios; arrow keys navigate.

### Keyboard Navigation

- Masthead: Tab moves logo → nav links (left to right) → Sign in → Get started CTA
- Hero: Tab moves into hero CTA, then secondary CTA, then continues to feature grid
- Feature cards: each focusable card is its own tab stop with the entire card wrapped in an `<a>`
- Footer: Tab moves through link columns by row, then into newsletter input → subscribe button
- Modal: Esc closes; focus returns to the trigger element

### Screen Reader Hints

Verbose `aria-label` on icon-only buttons (the close-X on modals announces "Close dialog"). The wordmark in the masthead announces "Readwise — home". Decorative book-cover illustrations that don't communicate content carry `aria-hidden="true"`.

### Reduced Motion

All translate/rotate transitions degrade to opacity-only. Highlight-marquee paint reveal becomes an instant fill. Book-stack tilt suppresses entirely.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | Masthead collapses to logo + hamburger; hero headline drops to 38/500; feature grid stacks 1-up; book-cover stack centred and scaled to 280px |
| Tablet | 600–960px | Full masthead with nav, no Get-started pill; feature grid 2-up; hero headline at 48/500 |
| Desktop | 960–1180px | Full masthead including CTAs; feature grid 3-up; hero headline at 60/500 |
| Wide | 1180–1440px | Content caps at 1180; book-cover stack at 480px |

### Touch Targets

- Primary CTAs: 48px height — meets AAA
- Secondary CTAs: 48px height
- Nav links: 44px tall hit area (text is 24px high, padded to 44)
- Newsletter input: 48px tall
- Form inputs: 44px

### Collapsing Strategy

- Masthead: nav links collapse to hamburger at <960px; "Sign in" and "Get started" pills hide first
- Hero: headline scales 60 → 48 → 38px across desktop → tablet → mobile
- Feature grid: 3 → 2 → 1 columns
- Book-cover stack: keeps its three-cover tilt across all breakpoints; only scales
- Footer: 4-column link list collapses to 2-column at tablet, 1-column at mobile

### Image Behavior

Book-cover illustrations use `aspect-ratio: 2/3` with `object-fit: contain`. The daily-review phone mockup keeps its 9:19.5 phone ratio. All illustration uses `loading="lazy"` for off-screen art.

### Container Queries

Feature cards use container queries to switch their internal layout from "icon left / text right" to "icon top / text below" when the card narrows below 320px — keeping the card legible inside narrow sidebars.

## 11. Content & Voice

### Tone

Warm, literary, slightly playful, never giddy. Readwise's voice reads like a librarian who genuinely believes you'll love this book — confident in its recommendation, never pushy. Headlines lead with the reader benefit ("Read smarter, not just faster", "Never lose what you read") rather than feature spec. The brand actively avoids productivity-bro language ("crush your reading goals") in favour of slower, more book-coded phrasing ("come back to the ideas that mattered").

### Microcopy Patterns

- **Button verbs**: "Get started free", "Try Readwise", "Start your library", "Save this highlight", "Send to Kindle"
- **Error message recipe**: gentle + instructive — "We couldn't sync your Kindle this time. Check your Amazon login and try again."
- **Success confirmations**: warm — "Saved to your library", "Synced 247 highlights from your Kindle"
- **Field labels**: short and friendly — "Your email", "Library name", "Daily review time"
- **Empty states**: invitation, not absence — "Your library is empty for now. Import your first book to get started."

### Empty States

Empty library: "Your library is empty for now. Import from Kindle, Apple Books, Pocket, or paste an article." — names four next destinations.

Empty highlight feed: "No highlights yet. As you read, we'll save what matters here." — implicitly defines the product.

Empty search: "We couldn't find any highlights matching '[query]'. Try a different word or browse by tag."

### CTA Verb Conventions

- Primary: **"Get started free"** (default), **"Try Readwise"** (alternative), **"Start your library"** (year-in-review pages)
- Newsletter: **"Subscribe"** (terse) or **"Send me this"** (warmer)
- Tertiary: **"Read the blog"**, **"See pricing"**, **"Learn more"**
- Avoided: "Sign up", "Click here", "Get instant access" (Readwise prefers gentler verbs)

## 12. Dark Mode & Theming

**Optional dark mode supported** with a tightly-scoped token swap. The web marketing site is light-only by default, but the Readwise reading app and the iOS / Android apps respect system dark mode. The dark palette inverts to a deep cocoa night canvas (`#1c1610`) with cream text (`#f3e9d6`); the brand tangerine lifts slightly to `#ff8c5a` for night legibility (the original `#ff7a45` reads slightly hot at low ambient light); and the highlight-marquee yellow wash darkens to `#5c4a1a` with cream text overlaid.

The dark mode keeps the same warm-tinted shadows (`rgba(0,0,0,0.4)` rather than `rgba(60,40,15,...)` because the night canvas already absorbs warmth). Cards lift to `#2a2218` with `#3a3024` hairlines. The autumn green stays close to the light variant — `#7faa84` lighter for night.

The brand position: dark mode is for the reading product, not the marketing surface. The cream canvas is the brand identity, and inverting it on the marketing site would lose the small-batch warmth that distinguishes Readwise from cool-tone competitors.

## 13. Lineage & Influences

Readwise's visual lineage runs through three traditions: **mid-century paperback covers** (Penguin, Pelican, Picador — cream paper, serif title, orange spine accent), **mid-2010s independent typography brands** (Klim Type Foundry's Tiempos, Commercial Type's Graphik, GT America), and **the post-Stripe-Press editorial-software wave** (Stripe Press treated long-form essays as art objects, and Readwise borrowed the cream-canvas-plus-serif-headline model and dialled it warmer).

Three contemporaries share the same neighbourhood. **Substack** went serif-on-white, optimising for newsletter familiarity; Readwise diverges by tinting the canvas warmer and pushing the brand colour to a more saturated tangerine. **Ghost** went sans-on-cream, optimising for editorial quietness; Readwise diverges by adding the Tiempos serif and the highlight-marquee motif. **Notion** went humanist sans on warm white; Readwise diverges by leaning fully into book-cream and serif display. The closest spiritual sibling outside this trio is **Stripe Press** — the cream paper, the serif headline, the disciplined chromatic restraint — but where Stripe Press is publishing-as-art (a closed catalogue of curated titles), Readwise is publishing-as-utility (a tool that helps you build your own library). The result is softer, rounder, more pill-CTA, and friendlier in tone.

What Readwise rejects: pure white canvases, neutral grey palettes, expressive display typefaces beyond Tiempos, dark-mode-as-marketing-default, gradient meshes, hero animations that distract from the type, and any saturation pulled from the SaaS-tech-orange spectrum. The brand position is **calm warmth** — Readwise wants to feel like the inside cover of a paperback, not a productivity SaaS.

**Influences:**
- Klim Type Foundry — Tiempos Headline + Tiempos Text duet, [klim.co.nz](https://klim.co.nz)
- Stripe Press — cream-canvas + serif-headline editorial register, [press.stripe.com](https://press.stripe.com)
- Penguin / Pelican paperbacks — orange spine + cream cover + serif title heritage, [penguin.co.uk](https://www.penguin.co.uk)
- Substack — serif-led reading-tool aesthetic, [substack.com](https://substack.com)
- Rasmus Andersson / Inter — humanist sans for the body voice, [rsms.me/inter](https://rsms.me/inter)
- Linear marketing era — disciplined card density and motion, [linear.app](https://linear.app)
- The New Yorker / The Marginalian — long-form reading register

## 14. Do's and Don'ts

**Do**
- Anchor the canvas on cream (`#fdf7ef`) — pure white reads as Apple Notes, not as a reading app
- Use cocoa-brown (`#2c2418`) for body text — black on cream looks harsh and cheapens the paperback effect
- Reach for Tiempos Headline at 60–68/500 with negative tracking on every hero — the Tiempos+Inter duet is the entire brand
- Use the tangerine (`#ff7a45`) for CTAs, the wordmark, link hover, and accent rules — single-brand-colour discipline
- Paint the highlight-marquee yellow (`#fff4d6`) under select marketing phrases — the product made visible
- Use 9999px pill CTAs at 48px height with white-on-tangerine 16/500 — never bolder, never brighter
- Use warm-tinted shadows `rgba(60,40,15,...)` — every drop should read as paper-on-paper
- Lean into 110px vertical section rhythm — Readwise paces like an essay
- Keep body type at 17px / 1.6 — the +1px over 16 is the "we are a reading app" signal
- Underline links by default — the tangerine alone fails AA contrast and underline guarantees identifiability

**Don't**
- Don't use the serif below 22px — it loses character and reads as Georgia
- Don't apply the brand orange to body text or backgrounds — it lives on CTAs, the logo, links, and small accent rules only
- Don't swap the tangerine for a redder or yellower orange — `#ff7a45` is the autumn-foliage exact and any drift kills the brand
- Don't stack heavy multi-layer drop shadows — Readwise stays single-layer warm-tinted
- Don't introduce neutral grey hairlines — every divider uses the warm `#e5d9c4`
- Don't centre body paragraphs — Readwise reads as left-aligned long-form
- Don't pair Tiempos with another serif — it's the only display face
- Don't render the masthead with a hard bottom border — the cream floor flows up
- Don't use exclamation marks gratuitously — the voice is warm, never giddy
- Don't say "Sign up" or "Click here" — Readwise prefers "Get started free" and outcome-named verbs

## 15. Agent Prompt Guide

### Quick Color Reference

```
Cream Canvas:    #fdf7ef
Surface Warm:    #f5ecdf
Surface Soft:    #fbf3e7
Surface Deep:    #e8d9c2
Cocoa Ink:       #2c2418
Heading Cocoa:   #1a1308
Muted:           #6b5e4a
Tangerine:       #ff7a45
Brand Hover:     #e8602a
Brand Active:    #cc4a1a
Brand Soft:      #ffe4d4
Highlight Wash:  #fff4d6
Bookish Green:   #3d6b4a
Hairline:        #e5d9c4
```

### Example Component Prompts

- "Create a Readwise-style Get-Started CTA: a 48px-tall pill (9999px radius) with tangerine (`#ff7a45`) fill, white text in Inter 16/500, 14×28px padding. Hover deepens to `#e8602a`. No drop-shadow."
- "Build a Readwise hero band: cream canvas (`#fdf7ef`) at 110px vertical padding, content capped at 1180px. Display headline in Tiempos Headline 68/500 with -0.022em tracking — 'Read smarter, not just faster'. Sub-copy in Inter 19/400 cocoa. Tangerine pill CTA + outline secondary pill side-by-side. Right column: a tilted three-book stack (rotated -4°/0°/+4°) with `0 16px 40px rgba(60,40,15,0.12)` shadow."
- "Design a Readwise feature card: warm cream (`#f5ecdf`) panel, 16px radius, 1px `#e5d9c4` hairline, 28px padding, soft `0 4px 12px rgba(60,40,15,0.05)` shadow. Stack: 32px tangerine icon, h4 in Inter 22/600 cocoa, body-small in Inter 15/400 muted cocoa. Hover lifts shadow to `0 10px 24px rgba(60,40,15,0.10)` and translates the card up 2px over 240ms."
- "Build a Readwise pull-quote card: pure white surface, 14px radius, 1px hairline, 24×28px padding, with a 2px tangerine left rule. Quote in Tiempos Text 24/400 italic cocoa. Below the quote, an Inter 14/500 attribution line in muted cocoa — '— Maria Popova, The Marginalian'."
- "Render a Readwise highlight-marquee effect: paint a yellow `#fff4d6` wash with 2px radius and 2×4px padding under specific inline phrases inside a body paragraph. The wash should fade in over 320ms with a warm easing curve when the phrase intersects the viewport."
- "Create a Readwise newsletter signup: 9999px pill, white fill, 1px `#d4c4a8` hairline, 48px height, with an inset tangerine 'Subscribe' pill on the right at 8×16px padding. Below the pill, a 13/400 muted disclaimer line in cocoa — 'No spam. Unsubscribe in one click.'"

### Iteration Guide

1. **Cream canvas first.** If your page has pure white, it isn't Readwise. `#fdf7ef` is the brand's foundation — every surface tier sits warmer than it.
2. **Cocoa ink, not black.** Body text is `#2c2418`. Substituting `#000` cheapens the paperback effect.
3. **Tiempos at 60–68/500 with negative tracking on display.** The 500 weight (not 700) is what gives Readwise its Penguin-Classic-not-magazine-cover feel.
4. **One brand colour: tangerine `#ff7a45`.** No secondary brand. Bookish green is an accent for tags only.
5. **Pill CTAs at 48px / 16/500.** 9999px radius, medium weight (not bold), 14×28px padding. White text. No drop-shadow.
6. **Highlight-marquee is the product motif.** Paint the yellow wash under select marketing phrases — it's the literal rendering of the highlight pen and the brand's most distinctive surface decoration.
7. **Warm-tinted shadows everywhere.** `rgba(60,40,15,...)` for every drop — never neutral black. Reads as paper-on-paper.
8. **110px section rhythm.** Generous vertical breath. If the page feels cramped, it is — Readwise paces like an essay.
