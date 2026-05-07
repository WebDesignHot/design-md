---
name: Wise
tagline: 'A flexible bright-lime green on cream-white — money that travels in sans-serif and a single confident accent.'
updated_at: 2026-05-06T08:44:32+12:00
published_at: 2026-05-03T16:32:19+12:00
author: webdesignhot
source_url: https://wise.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [fintech, saas]
tags: [light, minimal, sans, structured, bright, warm]
preview_swatch: ['#fffbf5', '#9fe870', '#163300']
related: [stripe, mercury, plaid]
description: 'Wise stripped fintech to one chromatic decision: an unmistakable lime-green `#9fe870` painted onto a warm cream `#fffbf5` canvas. The brand is the colour; the colour is the brand. Where Mercury reaches for a quiet mint and Stripe orchestrates a chromatic dance, Wise commits to a single high-saturation green and lets the rest of the page recede into warm cream and forest text. Inter Display carries the display work and Inter (regular) the body — the system Vercel and Linear made standard, but Wise pairs it with full-pill buttons (radius 9999) that read as friendly rather than technical. The dark-forest `#163300` doubles as ink on the lime button and as the colour of inverted "money mode" hero bands, an inversion trick borrowed from Stripe''s brand-as-system playbook. The cream canvas is the move that separates Wise from cold neobanks: it suggests paper, ledger, and an everyday object — not the cold blues of legacy finance. Multi-currency banking is reduced to one font, one button shape, one colour — a chromatic restraint as the trust signal.'

colors:
  bg: '#fffbf5'                         # warm cream off-white canvas — the brand neutral
  bg-soft: '#fbf6ec'                    # softer cream tier
  bg-tan: '#f4f1eb'                     # quiet tan-grey panel tone for FAQ / comparison
  bg-cream-strong: '#f9f3e6'            # deeper cream for sectional emphasis
  bg-forest: '#163300'                  # dark-forest inverted "money mode" band
  bg-forest-deep: '#0c1d00'             # deepest forest for hero closer
  bg-lime-soft: '#dcf3c7'               # tonal lime wash for chips / illustration
  bg-lime-paler: '#ecf8db'              # palest lime wash for inline highlights
  surface: '#ffffff'                    # default card surface — pure white card on cream
  surface-soft: '#faf6ee'               # softer card alternative
  surface-tan: '#f4f1eb'                # quiet tan-grey panel surface
  surface-forest: '#163300'             # dark-forest card surface
  surface-forest-soft: '#1f4400'        # softer forest for elevated dark cards
  text: '#0e0f0c'                       # near-black warm body text
  text-strong: '#163300'                # forest-green for display headlines (the signature)
  text-body: '#1c1d18'                  # body paragraph slightly softer
  text-muted: '#37513e'                 # supporting muted forest
  text-muted-warm: '#677378'            # captions / metadata, warm grey
  text-soft: '#8a8a85'                  # tertiary, eyebrow secondary
  text-faint: '#b0b0a8'                 # placeholder, disabled
  text-on-forest: '#fffbf5'             # cream type on forest band
  text-on-forest-soft: '#a3b39a'        # secondary copy on forest band
  text-on-brand: '#163300'              # forest ink on the lime button — non-negotiable
  brand: '#9fe870'                      # signature Wise lime — CTA fill, illustration accent
  brand-strong: '#8edc60'               # pressed-state lime
  brand-hover: '#92e066'                # hover-state lime, slightly desaturated
  brand-deep: '#163300'                 # dark forest doubles as brand-deep
  brand-soft: '#dcf3c7'                 # tonal wash for chips
  brand-tint: 'rgba(159, 232, 112, 0.16)'  # subtle lime wash for hover states
  brand-glow: 'rgba(159, 232, 112, 0.32)'  # focus glow
  accent: '#37513e'                     # supporting deep-green accent
  accent-strong: '#1f4400'              # deeper supporting forest
  accent-warm: '#f1c84d'                # editorial yellow accent observed in illustration
  accent-warm-soft: 'rgba(241, 200, 77, 0.15)'  # warm yellow tonal wash
  on-brand: '#163300'                   # forest text on lime — the brand's signature contrast pair
  on-forest: '#fffbf5'                  # cream text on forest band
  link: '#163300'                       # links are forest with underline on hover
  link-hover: '#0c1d00'                 # deeper forest on hover
  border: 'rgba(22, 51, 0, 0.10)'       # 10% forest hairline — never a true grey
  border-soft: 'rgba(22, 51, 0, 0.06)'  # 6% forest divider
  border-strong: 'rgba(22, 51, 0, 0.18)' # 18% forest for focused inputs
  border-on-forest: 'rgba(255, 251, 245, 0.14)'  # cream hairline on forest band
  shadow-ambient: 'rgba(22, 51, 0, 0.04)'   # subtle forest-tinted ambient
  shadow-card: 'rgba(22, 51, 0, 0.06) 0 2px 8px'  # quiet card shadow
  shadow-elev: 'rgba(22, 51, 0, 0.10) 0 12px 32px -8px'  # elevated dropdown
  shadow-popover: 'rgba(22, 51, 0, 0.12) 0 16px 40px -16px'
  shadow-modal: 'rgba(22, 51, 0, 0.20) 0 24px 64px -16px'
  shadow-glow-lime: 'rgba(159, 232, 112, 0.32) 0 8px 24px -8px'  # lime glow under primary CTA
  scrim: 'rgba(22, 51, 0, 0.50)'        # modal backdrop, forest-tinted
  success: '#1a7f3a'                    # forest-green confirmation
  success-soft: 'rgba(26, 127, 58, 0.10)'
  warning: '#f1c84d'                    # the brand's warm-yellow doubles as warning
  warning-soft: 'rgba(241, 200, 77, 0.18)'
  danger: '#9a1f1f'                     # ink-red error, restrained
  danger-soft: 'rgba(154, 31, 31, 0.10)'
  info: '#163300'                       # info reads as plain forest with underline
  info-soft: 'rgba(22, 51, 0, 0.06)'

typography:
  display:
    family: '"Inter Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [500, 600, 700]
    opentype-features: ['kern', 'liga', 'cv11']
  body:
    family: 'Inter, "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
    opentype-features: ['kern', 'liga']
  mono:
    family: '"IBM Plex Mono", "JetBrains Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace'
    weights: [400, 500]
    opentype-features: ['liga', 'tnum', 'zero']
  scale:
    display-hero:    { size: 88, weight: 600, lineHeight: 0.98, tracking: '-0.03em',  family: display, opentype: ['cv11'] }
    display-xl:      { size: 72, weight: 600, lineHeight: 1.05, tracking: '-0.025em', family: display }
    display-lg:      { size: 56, weight: 600, lineHeight: 1.08, tracking: '-0.02em',  family: display }
    h1:              { size: 48, weight: 600, lineHeight: 1.10, tracking: '-0.02em',  family: display }
    h2:              { size: 36, weight: 600, lineHeight: 1.15, tracking: '-0.015em', family: display }
    h3:              { size: 28, weight: 600, lineHeight: 1.20, tracking: '-0.01em',  family: display }
    h4:              { size: 22, weight: 500, lineHeight: 1.30, tracking: '-0.005em', family: display }
    h5:              { size: 18, weight: 500, lineHeight: 1.40, tracking: '0',        family: display }
    eyebrow:         { size: 13, weight: 500, lineHeight: 1.40, tracking: '0.02em',   family: mono, transform: uppercase }
    section-label:   { size: 14, weight: 500, lineHeight: 1.40, tracking: '0.02em',   family: mono, transform: uppercase }
    body-lg:         { size: 20, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-md:         { size: 17, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.50, tracking: '0',        family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.40, tracking: '0',        family: body }
    caption-mono:    { size: 13, weight: 500, lineHeight: 1.40, tracking: '0',        family: mono, opentype: ['tnum'] }
    label:           { size: 13, weight: 500, lineHeight: 1.30, tracking: '0',        family: body }
    label-mono:      { size: 12, weight: 500, lineHeight: 1.30, tracking: '0.02em',   family: mono, transform: uppercase }
    button-md:       { size: 16, weight: 600, lineHeight: 1.20, tracking: '0',        family: body }
    button-sm:       { size: 14, weight: 600, lineHeight: 1.20, tracking: '0',        family: body }
    fx-display:      { size: 56, weight: 500, lineHeight: 1.0,  tracking: '-0.02em',  family: mono, opentype: ['tnum', 'zero'] }
    fx-display-sm:   { size: 32, weight: 500, lineHeight: 1.0,  tracking: '-0.015em', family: mono, opentype: ['tnum', 'zero'] }
    quote-pull:      { size: 28, weight: 500, lineHeight: 1.30, tracking: '-0.01em',  family: display }
    code-inline:     { size: 14, weight: 500, lineHeight: 1.40, tracking: '0',        family: mono }

radius:
  micro: 4
  xs: 6             # status badges, tags
  sm: 8             # small chips
  md: 12            # secondary cards, inputs
  lg: 16            # primary cards — the brand default
  xl: 20            # hero shells, comparison cards
  hero: 24          # major hero panels
  pill: 9999        # buttons, all CTA — non-negotiable

spacing:
  base: 4
  scale: [4, 8, 12, 16, 24, 32, 40, 48, 64, 96, 128, 160, 192]

layout:
  page-width: 1200
  prose-width: 720
  container-gutter: 24
  section-y: 96
  rhythm: 8
  header-height: 64
  hero-min-height: 680

components:
  button-primary:
    bg: '#9fe870'
    color: '#163300'
    radius: 9999
    padding: '14px 24px'
    height: 48
    font: 'Inter 16px / 600'
    hover-bg: '#92e066'
    pressed-bg: '#8edc60'
    use: 'The signature lime pill — Send money, Get started, Open account. Forest text on lime — the brand''s contrast pair.'
  button-secondary:
    bg: 'transparent'
    color: '#163300'
    border: '1px solid #163300'
    radius: 9999
    padding: '14px 24px'
    height: 48
    font: 'Inter 16px / 600'
    hover-bg: 'rgba(22, 51, 0, 0.04)'
    use: 'Outlined twin — Sign in, Watch demo. Cream fill, full forest hairline border.'
  button-ghost:
    bg: 'transparent'
    color: '#163300'
    radius: 9999
    padding: '10px 16px'
    font: 'Inter 16px / 500'
    hover-bg: 'rgba(22, 51, 0, 0.04)'
    use: 'Quiet third action — nav links, footer secondaries, in-card actions.'
  button-on-forest:
    bg: '#9fe870'
    color: '#163300'
    radius: 9999
    padding: '14px 24px'
    height: 48
    font: 'Inter 16px / 600'
    use: 'Lime pill on the dark-forest band — the same fill / text pair, the chroma carries through inversion.'
  card:
    bg: '#ffffff'
    border: '1px solid rgba(22, 51, 0, 0.10)'
    radius: 16
    padding: '32px'
    shadow: 'rgba(22, 51, 0, 0.06) 0 2px 8px'
    use: 'Default feature card — white fill on cream canvas, 10% forest hairline, quiet shadow.'
  card-tan:
    bg: '#f4f1eb'
    border: 'none'
    radius: 16
    padding: '32px'
    use: 'Tan-grey inset card — FAQ, comparison tables, code-tour blocks.'
  card-forest:
    bg: '#163300'
    color: '#fffbf5'
    border: '1px solid rgba(255, 251, 245, 0.10)'
    radius: 16
    padding: '32px'
    use: 'Dark-forest card — used on inverted "money mode" hero band for testimonials and featured stats.'
  card-fx:
    bg: '#ffffff'
    border: '1px solid rgba(22, 51, 0, 0.10)'
    radius: 20
    padding: '32px'
    use: 'FX rate card — mono numerals, currency code chips, real-time rate display.'
  text-input:
    bg: '#ffffff'
    color: '#0e0f0c'
    radius: 12
    height: 48
    padding: '14px 16px'
    border: '1px solid rgba(22, 51, 0, 0.18)'
    font: 'Inter 16px / 400'
    placeholder-color: '#677378'
    focus-border: '#9fe870'
    focus-ring: '0 0 0 3px rgba(159, 232, 112, 0.32)'
    use: 'Form fields — cream canvas, 12px radius (slightly softer than the 16px card), lime focus ring.'
  badge-status:
    bg: '#dcf3c7'
    color: '#163300'
    radius: 6
    padding: '4px 10px'
    font: 'IBM Plex Mono 12px / 500 / uppercase / 0.02em'
    use: 'Status pill — NEW, FEATURED, BETA. Soft lime wash with forest ink.'
  badge-currency:
    bg: '#ffffff'
    color: '#163300'
    border: '1px solid rgba(22, 51, 0, 0.10)'
    radius: 9999
    padding: '4px 12px'
    font: 'IBM Plex Mono 13px / 500'
    use: 'Currency code chip — USD, GBP, EUR. Hairline border, mono caps, full pill radius.'
  pill-eyebrow:
    bg: 'transparent'
    color: '#37513e'
    padding: '0'
    font: 'IBM Plex Mono 13px / 500 / uppercase / 0.02em'
    use: 'Section eyebrow — mono caps in muted forest, sits above the H1.'
  nav-top:
    bg: 'rgba(255, 251, 245, 0.92)'
    backdrop-filter: 'blur(12px)'
    height: 64
    border-bottom: '1px solid rgba(22, 51, 0, 0.10)'
    use: 'Sticky top nav — translucent cream fill with light blur, hairline divider on scroll.'
  comparison-table:
    bg: '#ffffff'
    border: '1px solid rgba(22, 51, 0, 0.10)'
    radius: 20
    striped-row: '#faf6ee'
    use: 'FX comparison table — cream and white striping, mono numerals with tnum, hairline rows.'
  pull-quote:
    bg: '#163300'
    color: '#fffbf5'
    padding: '64px 32px'
    font: 'Inter Display 28px / 500 / -0.01em'
    use: 'Forest band testimonial — cream type on dark-forest ground, the chromatic inversion moment.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-out-soft: 'cubic-bezier(0.0, 0, 0.2, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 300
  duration-page: 400
  duration-fx-tick: 800
  link-hover: 'colour deepens forest-green over 100ms standard'
  button-hover: 'background lime shifts to brand-hover, slight 1px translate-up over 200ms standard'
  card-hover: 'shadow lifts from 0 2px 8px to 0 8px 24px, subtle 2px translate-up over 200ms'
  fx-tick: 'currency rate digits roll over 800ms when rate updates — tnum-aligned mono digits'
  scroll-reveal: 'sections fade in over 300ms ease-out-soft when entering viewport'
  reduced-motion: 'respects prefers-reduced-motion: reduce — fx-tick freezes, transforms suppress, opacity-only fades.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1200
  wide: 1440
  ultra: 1600

shadows:
  none: 'none'
  ambient: 'rgba(22, 51, 0, 0.04) 0 1px 2px'
  card: 'rgba(22, 51, 0, 0.06) 0 2px 8px'
  card-hover: 'rgba(22, 51, 0, 0.10) 0 8px 24px -4px'
  elevated: 'rgba(22, 51, 0, 0.10) 0 12px 32px -8px'
  popover: 'rgba(22, 51, 0, 0.12) 0 16px 40px -16px'
  modal: 'rgba(22, 51, 0, 0.20) 0 24px 64px -16px'
  brand-glow: 'rgba(159, 232, 112, 0.32) 0 8px 24px -8px'
  ring: '0 0 0 3px rgba(159, 232, 112, 0.32)'

accessibility:
  contrast-text-on-bg: 18.2                   # #0e0f0c on #fffbf5 — AAA at all sizes
  contrast-forest-on-bg: 14.6                 # #163300 on #fffbf5 — AAA at all sizes
  contrast-text-on-bg-tan: 16.4               # #0e0f0c on #f4f1eb — AAA at all sizes
  contrast-text-muted-on-bg: 7.8              # #37513e on #fffbf5 — AAA at body sizes
  contrast-text-on-brand: 11.2                # #163300 on #9fe870 — AAA at all sizes (the contrast pair)
  contrast-cream-on-forest: 14.6              # #fffbf5 on #163300 — AAA at all sizes
  contrast-link-on-bg: 14.6                   # #163300 underlined on #fffbf5 — AAA
  focus-ring: '3px solid rgba(159, 232, 112, 0.32) + 2px outline-offset; lime translucent ring'
  reduced-motion-honored: true
  touch-target-min: 48
  prose-line-length: 'capped at 720px / ~70 characters'
  brand-on-bg-policy: 'lime is never used as foreground type colour on cream — only as a fill (button, illustration, chip)'

dark-mode: optional

colors-dark:
  bg: '#0c1d00'                         # deepest forest canvas
  bg-soft: '#163300'                    # default forest panel
  bg-tan: '#1f4400'                     # softer forest panel
  bg-forest-deep: '#091400'             # peak forest for footer
  bg-lime-soft: 'rgba(159, 232, 112, 0.16)'  # tonal lime wash on forest
  surface: '#163300'                    # default forest card surface
  surface-soft: '#1f4400'
  text: '#fffbf5'                       # cream body — the canvas tone promoted to type
  text-strong: '#ffffff'
  text-body: '#f4f1eb'
  text-muted: '#a3b39a'
  text-soft: '#7a8a76'
  text-on-brand: '#163300'              # the contrast pair preserved exactly
  brand: '#9fe870'                      # unchanged — passes contrast on both grounds
  brand-hover: '#92e066'
  brand-soft: 'rgba(159, 232, 112, 0.16)'
  on-brand: '#163300'                   # forest ink on lime — preserved
  border: 'rgba(255, 251, 245, 0.12)'
  border-soft: 'rgba(255, 251, 245, 0.06)'
  border-strong: 'rgba(255, 251, 245, 0.20)'

lineage:
  summary: 'Wise stripped fintech to one decision: a fluorescent-leaning lime `#9fe870` against a cream `#fffbf5` canvas. The brand is the colour; the colour is the brand. Where Mercury reaches for a quiet mint and Stripe orchestrates a chromatic dance, Wise commits to a single high-saturation green and lets the rest of the page recede into warm cream and forest text. Inter Display carries the display work and Inter (regular) the body — the system Vercel and Linear made standard, but Wise pairs it with full-pill buttons (radius 9999) that read as friendly rather than technical. The dark-forest `#163300` doubles as ink on the lime button and as the colour of inverted "money mode" hero bands, an inversion trick borrowed from Stripe''s brand-as-system playbook. The cream canvas is the move that separates Wise from cold neobanks: it suggests paper, ledger, and an everyday object — not the cold blues of legacy finance.'
  influences:
    - name: 'Stripe (brand-as-system era)'
      role: 'Brand-as-singular-accent discipline; chromatic inversion (light + inverted dark band) as a fintech-modern signal. Wise inherits the inversion trick.'
      url: 'https://stripe.com'
    - name: 'Monzo / Revolut neobank palette'
      role: 'Bright-on-quiet neobank colour pairings, but Wise pushes the neutral toward warm cream rather than pure white.'
      url: 'https://monzo.com'
    - name: 'IBM Plex / IDEO'
      role: 'Mono micro-labels (IBM Plex Mono) and friendly humanist sans inform the typographic voice. Currency codes and FX values use Plex Mono.'
      url: 'https://www.ibm.com/plex'
    - name: 'Inter / rsms.me'
      role: 'Inter Display + Inter is the Wise typographic foundation — the system Vercel and Linear made standard.'
      url: 'https://rsms.me/inter'
    - name: 'Mercury'
      role: 'Adjacent fintech competitor — Mercury picks a serif headline + mint band; Wise picks Inter + lime. Both commit to chromatic restraint.'
      url: 'https://mercury.com'
    - name: 'Klarna'
      role: 'Pink fintech precedent for committing to a single high-saturation accent. Wise adopts the discipline but rotates the colour to lime.'
      url: 'https://klarna.com'
    - name: 'Plaid'
      role: 'Reference for fintech-with-restraint-in-blue. Wise rejects Plaid''s cold blues and picks warm cream instead.'
      url: 'https://plaid.com'
---

## 1. Visual Theme & Atmosphere

Wise's marketing surface answers "international banking" with a single chromatic gesture: a bright lime green `#9fe870` painted onto a cream `#fffbf5` canvas. There's no second accent, no chromatic system, no secondary brand colour to manage. Every primary CTA is the same rounded green pill; every headline is forest-green Inter Display at 600; every illustration borrows the same lime as a fill, never as decoration. The discipline is total — and the brand reads, paradoxically, as more confident *because* of the restraint. A multi-stop palette would dilute the chromatic impact; a single colour at full saturation, used everywhere it should be and nowhere it shouldn't, becomes the brand's most recognisable asset.

The cream canvas is the move that separates Wise from cold neobanks. Pure white reads as Plaid or Stripe — clean, technical, slightly cold. Cool grey reads as Brex or Linear — modern, neutral, but distant. Cream `#fffbf5` reads as **paper**: a ledger page, a bank statement, an everyday physical object that carries trust through tactility. The cream canvas is what makes Wise feel like an extension of the analogue financial world rather than a replacement for it. It signals approachable-and-friendly without sliding into consumer-app aesthetics; it signals trustworthy-and-stable without the corporate iciness of legacy banking.

The result is a site that reads more like a **product manual** than a campaign — restrained, almost stubborn, in its commitment to one colour. Compared to legacy banking blues or fintech purple-gradients, Wise's cream-and-lime feels like an everyday object: a green pen on a ledger page. The forest-green type (`#163300`) is the third decision: dark enough to read as type-grade, green enough to harmonise with the lime accent, warm enough to belong on the cream canvas. The colour-only commitment compounds: cream + lime + forest text creates a chromatic system in which everything belongs because everything is green, even the dark — only the saturation and luminance differ.

The atmospheric vocabulary that captures Wise's feeling: *cream-and-lime, ledger-paper, multi-currency-native, Inter-Display-tracked-warm, forest-text-not-black, full-pill-friendly, mono-caps-currency, banking-as-everyday-object, Stripe-restraint-in-green, neobank-without-blue, brand-as-single-colour, FX-rate-as-product-feature.* Every surface lands like it was designed by an in-house brand team that decided the brand differentiator would be *one colour, used with extreme discipline*, on a canvas that signalled *paper, not screen*.

The fourth register is the **discipline of the cream canvas + lime pill + forest text triad**. The brand is mathematically constrained to three colours plus a tan-grey panel and a dark-forest inverted band. There is no fourth colour. The yellow accent (`#f1c84d`) appears only inside illustrations as an editorial highlight; it is not a brand colour. The chromatic tightness is what gives Wise its instantly-recognisable quality — when a Wise page appears in your peripheral vision, you know it's Wise from the colour pair alone, the way you might recognise a Penguin Classics book cover from across a bookstore.

**Key Characteristics**

- Warm cream `#fffbf5` canvas — the brand neutral, not pure white
- Signature lime green `#9fe870` — used only as CTA fill, illustration accent, never as type
- Dark-forest `#163300` — display headline colour and inverted hero-band ground
- Tan-grey `#f4f1eb` — quiet panel for FAQ, comparison tables, supporting blocks
- Inter Display at 600 weight — display copy, slightly softer than Linear's 700
- Inter regular at 17px / 1.55 line-height — body bumped up half a step from default 16
- IBM Plex Mono — currency codes, FX rate displays, status pills
- Full-pill button radius (9999) — non-negotiable, the friendliness signal
- 16px primary card radius — softer than Brex's 16 + harder than Mercury's 18
- 1200px max page width with 24px container gutters
- 96px section padding for major bands — generous but not extreme
- 48px button height — slightly taller than the 44px SaaS-consensus, signals approachable-and-confident
- Lime focus ring — the brand chroma extends into every focus event
- Optional dark mode — forest canvas with cream type, lime button preserved exactly

## 2. Color Palette & Roles

### Primary

- **Canvas** (`#fffbf5`): warm cream off-white. The brand neutral — distances Wise from cold neobanks. The whole brand sits on this ground.
- **Cream Soft** (`#fbf6ec`): softer cream tier for elevated panels.
- **Tan Panel** (`#f4f1eb`): quiet tan-grey panel tone — used for FAQ blocks, comparison tables, supporting blocks. The third tier in the warm-neutral system.
- **Cream Strong** (`#f9f3e6`): deeper cream for sectional emphasis (newsletter, dense blocks).
- **Text** (`#0e0f0c`): near-black warm body text — slight green-warmth in the deep, harmonises with forest headlines.
- **Text Strong (Forest)** (`#163300`): the brand's signature display colour. Forest-green at this saturation reads as type-grade rather than decorative. Used for all display headlines, links, and ink on the lime button.

### Brand & Sub-Brand

- **Brand Lime** (`#9fe870`): the signature accent — fluorescent-leaning lime green. Used only as CTA fill, illustration accent, status pill ground. Never as a foreground colour.
- **Brand Strong** (`#8edc60`): pressed-state lime, slightly desaturated.
- **Brand Hover** (`#92e066`): hover-state lime, between brand and brand-strong.
- **Brand Deep (Forest)** (`#163300`): the dark forest doubles as the ink on the lime button and as the inverted-band ground. The pair is the brand's full chromatic system.
- **Brand Soft** (`#dcf3c7`): tonal wash for chips, illustration backgrounds.
- **Brand Tint** (`rgba(159, 232, 112, 0.16)`): subtle lime wash for hover states, selected nav.
- **Brand Glow** (`rgba(159, 232, 112, 0.32)`): focus glow colour, lime translucent ring.

### Accent (Supporting)

- **Accent (Deep Green)** (`#37513e`): supporting deep-green accent. Used for muted text, secondary chips. Not a brand colour, but a darker tier of the green family.
- **Accent Strong (Deeper Forest)** (`#1f4400`): deeper supporting forest, used for elevated dark cards.
- **Accent Warm (Yellow)** (`#f1c84d`): editorial yellow accent observed in illustration only. Not a brand colour, never a CTA, never type. Appears as a fill inside illustration vignettes.

The accent system is **disciplined**. The yellow appears only inside illustration; it never becomes a brand colour. The deep forest is a darker tier of the lime family; it doesn't introduce a new chromatic axis. The whole palette stays within green, with a single warm-yellow editorial flourish reserved for illustration only.

### Interactive

- **Link** (`#163300` with optional underline): inline body links use forest-green at the same colour as headlines. Hover deepens to `#0c1d00` and underline appears (or thickens if already present).
- **Link Hover**: deeper forest `#0c1d00` with underline.
- **Selected** (`#163300` text on `rgba(159, 232, 112, 0.16)` background): selected nav, active filter chip — lime tint with forest text.
- **Disabled** (`#b0b0a8`): faint warm-grey for disabled controls.
- **Focus** (3px `rgba(159, 232, 112, 0.32)` ring + 2px outline-offset): lime translucent ring. The brand chroma extends into every focus event.

### Neutral Scale

The neutral ramp is warm-cream-to-forest:

- **Cream Canvas** (`#fffbf5`) — page background
- **Cream Soft** (`#fbf6ec`) — elevated panel
- **Tan Panel** (`#f4f1eb`) — quiet panel for FAQ, comparison
- **Cream Strong** (`#f9f3e6`) — sectional emphasis
- **Border Soft** (`rgba(22, 51, 0, 0.06)`) — quiet divider, forest-tinted
- **Border Default** (`rgba(22, 51, 0, 0.10)`) — 10% forest hairline (never grey)
- **Border Strong** (`rgba(22, 51, 0, 0.18)`) — focused inputs
- **Text Faint** (`#b0b0a8`) — placeholder, disabled
- **Text Soft** (`#8a8a85`) — eyebrow secondary
- **Text Muted Warm** (`#677378`) — captions / metadata, warm grey
- **Text Muted (Forest)** (`#37513e`) — supporting muted forest
- **Text Body** (`#1c1d18`) — body paragraph
- **Text** (`#0e0f0c`) — primary body
- **Text Strong (Forest)** (`#163300`) — display headlines

The neutral ramp's distinguishing feature is that **borders are forest-tinted rather than grey**. A 10% forest hairline at `rgba(22, 51, 0, 0.10)` reads warmer than a neutral grey would, and harmonises with the cream canvas. This is the brand's most considered chromatic detail — every divider belongs to the green family.

### Surface & Borders

- **Cream Canvas** (`#fffbf5`) — page background
- **White Surface** (`#ffffff`) — default card surface (pure white card on cream canvas)
- **Surface Soft** (`#faf6ee`) — softer card alternative
- **Tan Panel** (`#f4f1eb`) — quiet tan-grey panel surface
- **Forest Surface** (`#163300`) — dark-forest card surface for inversion
- **Forest Soft** (`#1f4400`) — softer forest for elevated dark cards
- **Border Default** (`rgba(22, 51, 0, 0.10)`) — 10% forest hairline rule
- **Border Soft** (`rgba(22, 51, 0, 0.06)`) — quieter separation
- **Border Strong** (`rgba(22, 51, 0, 0.18)`) — focused inputs
- **Border On-Forest** (`rgba(255, 251, 245, 0.14)`) — cream hairline on forest band

### Shadow Colors

Wise uses **forest-tinted shadows** (`rgba(22, 51, 0, …)`) — the brand chroma extends into the shadow tones, keeping the page coherent. The signature card shadow is `rgba(22, 51, 0, 0.06) 0 2px 8px` — a quiet 2px drop with 8px blur, low opacity, intentionally subtle. It gives feature cards a slight float without stepping into consumer-app territory. On primary CTAs, the shadow gets a **lime-glow** treatment: `rgba(159, 232, 112, 0.32) 0 8px 24px -8px` — lime-tinted, used under the primary lime button to extend the brand chroma into the surrounding negative space.

- `rgba(22, 51, 0, 0.04) 0 1px 2px` — ambient
- `rgba(22, 51, 0, 0.06) 0 2px 8px` — card (the signature quiet drop)
- `rgba(22, 51, 0, 0.10) 0 8px 24px -4px` — card-hover (lifts on hover)
- `rgba(22, 51, 0, 0.10) 0 12px 32px -8px` — elevated dropdown
- `rgba(22, 51, 0, 0.12) 0 16px 40px -16px` — popover
- `rgba(22, 51, 0, 0.20) 0 24px 64px -16px` — modal
- `rgba(159, 232, 112, 0.32) 0 8px 24px -8px` — brand glow under primary CTA

### Semantic

- **Success** (`#1a7f3a` on `rgba(26, 127, 58, 0.10)`): forest-green confirmation — naturally harmonises with the brand lime. *"Transfer complete"*.
- **Warning** (`#f1c84d` on `rgba(241, 200, 77, 0.18)`): the brand's editorial yellow doubles as warning — used for FX rate volatility, expiring offers.
- **Danger** (`#9a1f1f` on `rgba(154, 31, 31, 0.10)`): ink-red error, restrained.
- **Info** (`#163300` on `rgba(22, 51, 0, 0.06)`): info reads as plain forest with optional underline — the same convention as inline links.

The semantic palette stays disciplined: success is forest (the brand family), warning is the editorial yellow (the only non-green accent, used only here and inside illustrations), danger is a restrained ink-red. The semantic colours never clash with the brand chroma because they all belong either to the green family or to a single non-green editorial accent.

## 3. Typography Rules

### Font Family

**Primary**: `"Inter Display", "Helvetica Neue", Helvetica, Arial, sans-serif`. **Inter Display** is the variable-font display variant of Inter, designed by Rasmus Andersson — a humanist sans-serif optimised for screen rendering. Used at weight 600 for display copy with `-0.025em` letter-spacing. The slightly more open weight (vs. 700) plus mild negative tracking gives Wise a friendlier, more humanist tone than Linear's denser headlines. The fallback chain runs Helvetica Neue → Helvetica → Arial; Inter is the default in modern browsers.

**Body**: `Inter, "Helvetica Neue", Helvetica, Arial, sans-serif`. Inter regular (the same family as Inter Display, but optimised for body sizes) carries paragraph copy at 17px with 1.55 line-height. The body type is bumped up half a step from the typical 16px to make legibility the dominant sensation — Wise's audience reads dense financial copy (FX rates, fee schedules, transfer details), and the larger body size signals *we expect you to read this carefully*.

**Mono companion**: `"IBM Plex Mono", "JetBrains Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace`. **IBM Plex Mono** is the brand's mono companion — used for currency codes (USD, GBP, EUR), FX rate displays, status pills, and developer-facing copy. The choice of Plex Mono over JetBrains Mono is deliberate: Plex is the slightly more humanist mono (designed by IBM with Bold Monday), reading as approachable-mono rather than dev-tool-mono. The fallback chain runs JetBrains Mono → ui-monospace → SF Mono → Menlo.

**OpenType features**: Inter renders with `kern` and `liga` always on. `cv11` enables the alternate single-storey `a` for slightly friendlier display copy. Plex Mono adds `liga`, `tnum` (tabular figures for FX rate column alignment), and `zero` (slashed zero for code clarity).

The discipline: weight 600 across all display copy, weight 400 for body, weight 500–600 split for nav and labels. The display + body family share the same tonal warmth (Inter Display is the same humanist proportions as Inter, just optimised for larger sizes). This single-family system is what makes Wise read as cohesive — the brand doesn't manage two type families like Mercury's serif/sans split.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| display-hero | Inter Display | 88px | 600 | 0.98 | -0.03em | cv11 | The largest hero variant — landing page only |
| display-xl | Inter Display | 72px | 600 | 1.05 | -0.025em | — | The canonical Wise H1 — most pages |
| display-lg | Inter Display | 56px | 600 | 1.08 | -0.02em | — | Section opener |
| h1 | Inter Display | 48px | 600 | 1.10 | -0.02em | — | Sub-page title |
| h2 | Inter Display | 36px | 600 | 1.15 | -0.015em | — | Marketing section H2 |
| h3 | Inter Display | 28px | 600 | 1.20 | -0.01em | — | Card heading, sub-section |
| h4 | Inter Display | 22px | 500 | 1.30 | -0.005em | — | Sub-card heading — note weight drops to 500 |
| h5 | Inter Display | 18px | 500 | 1.40 | 0 | — | Inline emphasis |
| eyebrow | IBM Plex Mono | 13px | 500 | 1.40 | 0.02em | uppercase | Section pre-label |
| section-label | IBM Plex Mono | 14px | 500 | 1.40 | 0.02em | uppercase | Marketing section eyebrow |
| body-lg | Inter | 20px | 400 | 1.55 | 0 | — | Hero deck, lede paragraph |
| body-md | Inter | 17px | 400 | 1.55 | 0 | — | Default body — note the bump from 16 |
| body-sm | Inter | 14px | 400 | 1.50 | 0 | — | Card body, dense rows |
| caption | Inter | 13px | 400 | 1.40 | 0 | — | Image caption, footer micro |
| caption-mono | IBM Plex Mono | 13px | 500 | 1.40 | 0 | tnum | FX values, dashboard meta |
| label | Inter | 13px | 500 | 1.30 | 0 | — | Form field label |
| label-mono | IBM Plex Mono | 12px | 500 | 1.30 | 0.02em | uppercase | Mono caps label |
| button-md | Inter | 16px | 600 | 1.20 | 0 | — | Default CTA copy |
| button-sm | Inter | 14px | 600 | 1.20 | 0 | — | Compact button |
| fx-display | IBM Plex Mono | 56px | 500 | 1.0 | -0.02em | tnum, zero | FX rate hero display |
| fx-display-sm | IBM Plex Mono | 32px | 500 | 1.0 | -0.015em | tnum, zero | FX rate inside card |
| quote-pull | Inter Display | 28px | 500 | 1.30 | -0.01em | — | Pull quote inside forest band |
| code-inline | IBM Plex Mono | 14px | 500 | 1.40 | 0 | — | Inline `code` reference |

### Principles

- **Weight 600 + `-0.025em` tracking is the brand voice.** Inter Display at 600 with mild negative tracking is the canonical Wise display. Drop to 500 and the page reads as Vercel-restraint; push to 700 and it reads as Linear-density. The 600/`-0.025em` pair is the precise sweet spot.
- **Single-family system with mono companion.** Inter Display + Inter (body) + IBM Plex Mono cover everything. Adding a serif (Mercury territory) breaks the brand's humanist-sans commitment.
- **Body holds at weight 400.** Body never goes 500 except for nav links and labels. The 400-vs-600 split is the brand's hierarchy logic.
- **17px body, 1.55 line-height.** Slightly larger than the typical 16px and optimised for reading dense financial copy. The body-bump is a discipline detail.
- **Negative tracking compresses with size.** `-0.03em` at 88px, `-0.025em` at 72px, `-0.02em` at 48–56px, `-0.015em` at 36px, `-0.01em` at 28px, near-zero below 22px.
- **Mono caps for eyebrows, currency codes, FX values.** IBM Plex Mono at 12–14px / 0.02em tracking is the brand's secondary-identity tell. The slight mono tracking (0.02em vs. Brex's 0.06em) reads as approachable rather than industrial.
- **`tnum` enabled in FX displays.** Tabular numerals make FX rate columns align column-wise — a polish detail that signals corporate-grade attention. The slashed `zero` adds clarity in code references.
- **Forest text, not black.** Display headlines are `#163300` forest-green, not pure black. The forest tone harmonises with the brand lime; pure black would feel out of family.
- **Inter (not Söhne) is the discipline.** Inter Display + Inter is the system Vercel and Linear made standard; Wise inherits it. Söhne (Brex / Ramp signal) would shift the brand toward neo-grotesque coldness.

## 4. Component Stylings

### Buttons

**Primary Lime Pill** — The signature button. Background: `#9fe870` brand lime. Text: forest `#163300` at 16px / 600 in Inter, **9999px radius (full pill)**, 14×24px padding, **48px height** (taller than the 44px SaaS consensus — the brand reads as approachable-and-confident). Brand-glow shadow optional: `rgba(159, 232, 112, 0.32) 0 8px 24px -8px`. On hover: background shifts to `#92e066` and button translates 1px upward over 200ms standard. Use case: *Send money*, *Get started*, *Open account*, *Sign up* — the brand-defining element.

**Secondary Outlined Pill** — `transparent` fill, forest text at 16px / 600, 1px solid `#163300` border (full forest, not a soft grey), 9999px radius, 48px height, 14×24px padding. Hover: background fills `rgba(22, 51, 0, 0.04)` cream-tint, border colour unchanged. Use case: *Sign in*, *Watch demo*, *See pricing* — paired adjacently with the primary.

**Ghost Pill** — Transparent background, forest text at 16px / 500, 9999px radius, 10×16px padding. Hover fills `rgba(22, 51, 0, 0.04)`. Use case: nav links, footer secondaries, in-card secondary actions.

**Pill on Forest Band** — Same `#9fe870` fill / `#163300` text as primary, used inside the dark-forest inverted band. The chroma carries through inversion — the lime stands out *more* on the dark ground than on the cream canvas.

### Cards

**Default Feature Card** — `#ffffff` pure white fill on the cream canvas, 1px hairline border at `rgba(22, 51, 0, 0.10)` (10% forest), **16px radius**, 32px padding, signature quiet shadow `rgba(22, 51, 0, 0.06) 0 2px 8px`. The dominant card across feature grids, customer logos, partner directories. Hover: shadow lifts to `0 8px 24px -4px` and translates 2px upward over 200ms.

**Tan Inset Card** — `#f4f1eb` tan-grey fill, no border, 16px radius, 32px padding. Used for FAQ blocks, comparison tables, code-tour callouts. The tan-grey fill provides separation from the cream canvas without needing a border.

**Forest Card (Dark)** — `#163300` dark-forest fill, cream `#fffbf5` text, 1px border at `rgba(255, 251, 245, 0.10)`, 16px radius, 32px padding. Used on inverted "money mode" hero band for testimonials and featured stats. The forest card is a *moment*, not a pattern.

**FX Rate Card** — `#ffffff` fill, 1px hairline border, **20px radius** (slightly relaxed for emphasis), 32px padding. Inside: currency code chips (USD, GBP, EUR) in IBM Plex Mono with `tnum`, FX rate in 32px Plex Mono `tnum`, real-time tick animation when rate updates.

### Pricing Cards

**Default Tier** — Default card geometry (white fill, hairline border, soft shadow, 16px radius, 32px padding). Tier name in Inter Display 22px / 500. Pricing display in IBM Plex Mono 32px / 500 with `tnum`. Feature list with lime checkmarks. Outlined secondary CTA at the bottom.

**Featured Tier** — Replaces default with a thicker lime-soft `#dcf3c7` background tint and a `#9fe870` 1px border at half opacity. "MOST POPULAR" mono-caps eyebrow at the top in IBM Plex Mono 12px / 500 / 0.02em / uppercase in forest text. Lime pill CTA at the bottom.

### Badges, Tags, Pills

**Status Pill (Lime Soft)** — `#dcf3c7` brand-soft fill, forest text at 12px / 500 in IBM Plex Mono uppercase with `0.02em` tracking, 6px radius, 4×10px padding. Use case: `NEW`, `FEATURED`, `BETA`.

**Currency Code Chip** — `#ffffff` white fill, forest text at 13px / 500 in IBM Plex Mono, 1px `rgba(22, 51, 0, 0.10)` hairline border, **9999px radius (full pill)**, 4×12px padding. Use case: USD, GBP, EUR, AUD, JPY currency code labels. The full-pill chip + mono caps is the FX-product-page signature.

**Mono Caps Eyebrow** — No chrome, just type. IBM Plex Mono 13px / 500 / uppercase / `0.02em` in `#37513e` muted forest. Sits above section headlines.

### Inputs / Forms

**Text Input** — `#ffffff` fill, near-black text at 16px / 400 in Inter, 1px border at `rgba(22, 51, 0, 0.18)`, **12px radius** (slightly softer than the 16px card to signal *interactive surface*), 48px height, 14×16px padding. Placeholder colour at `#677378` warm-muted. On focus: border shifts to `#9fe870` brand lime and a 3px translucent lime ring appears (`rgba(159, 232, 112, 0.32) 0 0 0 3px`).

**Currency Select** — Same shape as text-input with a chevron icon at right and the currency code chip embedded inside (`USD ▾`).

**Amount Input** — Larger variant: 64px height, 24px / 600 Inter mono-aligned (`tnum` enabled) for currency amount entry, 16px radius. Used in the hero send-money widget.

### Navigation

**Top Nav** — `rgba(255, 251, 245, 0.92)` translucent cream fill with `backdrop-filter: blur(12px)`, **64px height**, 1px bottom hairline at `rgba(22, 51, 0, 0.10)` that appears after scroll > 8px. Wise wordmark left in Inter Display 20px / 600 forest. Center: nav links (Personal, Business, About, Help) at 16px / 500 ghost-button style. Right: ghost `Sign in` + primary lime `Get started` button.

**Footer** — `#163300` forest inversion band — the brand commits to forest as the closing-emphasis colour. 96px top padding, multi-column link grid in Inter 14px / 400 in `#a3b39a` soft-on-forest. Wordmark + social icons + legal links at the bottom.

### Optional / Decorative

**Send Money Widget** — Hero feature: cream canvas with white card, 16px radius, 32px padding. Inside: from-currency input (large 64px amount field + currency chip select), to-currency input, FX rate display in Plex Mono 32px / 500 `tnum`, lime pill *Send money* CTA at the bottom.

**Comparison Table** — White cream-stripe-cream alternating rows. Headers in IBM Plex Mono 12px / 500 / 0.02em / uppercase forest. Pricing values in IBM Plex Mono 16px / 500 with `tnum` enabled. Lime checkmarks for available features, muted dashes for unavailable.

**Pull Quote (Forest Band)** — `#163300` background, cream text in Inter Display 28px / 500 / `-0.01em`, max-width 920px, centred. The chromatic inversion moment.

**Modal** — `#ffffff` fill, 16px radius, 32px padding, modal shadow stack. Backdrop scrim at `rgba(22, 51, 0, 0.50)` (forest-tinted). Max-width 520px for confirmations, 720px for transfer dialogs.

**Toast** — `#ffffff` fill, hairline border, 12px radius, 12×16px padding. Icon + message in Inter 14px / 400 + dismiss button. Brand-lime accent for info, success-forest for confirmations, danger-red for errors.

## 5. Layout Principles

### Spacing System

- Base unit: **4px** (with 8px rhythm enforced for major spacing)
- Scale: `4 · 8 · 12 · 16 · 24 · 32 · 40 · 48 · 64 · 96 · 128 · 160 · 192`
- Section padding (vertical): **96px** for major marketing bands; 64px between minor sections; 24–32px between content blocks
- Card internal padding: **32px** on default cards; 40px on featured pricing cards; 24px on compact tiles
- Inter-card gutters: 24px between cards in 3-up; 16px in dense 4-up
- Forest band padding: **96px vertical** — generous breathing on the chromatic inversion

### Grid & Container

- Max content width: **1200px** with 24px gutters — slightly tighter than Brex's 1280
- 12-column grid; hero blocks span full width inside the container; feature grids span 4-3-2-1 columns by breakpoint
- Reading column caps at **720px** for prose-heavy content (case studies, blog posts)
- Hero treatment: cream canvas with 72–88px / 600 H1 left-aligned, deck below at 20px / 400, dual CTA pair (lime primary + outlined secondary), product imagery (often a phone mockup) on the right

### Whitespace Philosophy

The page breathes — 96px section padding is generous by SaaS standards but slightly tighter than Ramp's 128px. The whitespace is part of the brand's "everyday object" pitch — Wise wants to feel approachable-and-considered, not crowded-and-busy nor distant-and-institutional. The cream canvas amplifies the breathing room: the warmth of the cream makes the negative space feel comfortable rather than clinical. A pure-white canvas with the same 96px padding would read as colder.

### Section Cadence

A typical Wise page runs:

1. **Hero** — `#fffbf5` cream canvas with mono-caps eyebrow, 72–88px / 600 forest H1 left-aligned, 20px / 400 body deck, dual CTA pair (lime pill primary + outlined secondary), Send Money widget or product imagery on the right
2. **Feature Grid** — `#fffbf5` cream band with white feature cards in 3-up, hairline borders, quiet shadows, 28px / 600 card titles + 17px / 400 body
3. **Forest Band (Inversion)** — `#163300` full-bleed dark-forest band with cream type, customer testimonial in Inter Display 28px / 500, lime pill CTA inside
4. **FX Comparison Table** — `#fffbf5` cream canvas with comparison table card (20px radius, hairline border), mono numerals, lime checkmarks
5. **Tan Panel (FAQ)** — `#f4f1eb` tan-grey panel with FAQ accordion, soft and approachable
6. **Customer Logo Grid** — `#fffbf5` cream band with monochrome customer logos (12 logos, 4-up at desktop)
7. **Pricing Cards** — 3-up white cards on cream canvas; featured tier highlighted with lime-soft tint
8. **Closing CTA** — Centered lime pill on cream canvas, single dominant action
9. **Footer** — `#163300` forest inversion, multi-column link grid in 14px / 400 cream-soft on forest

The "alternation" is *cream + cream + forest moment + cream + tan + cream + forest footer*. The cream is the dominant ground; the forest provides chromatic inversion at strategic moments; the tan provides a third quieter ground.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 4px | Decorative dividers, focus indicators inside chips |
| XS | 6px | Status badges, tag chips |
| SM | 8px | Small chips, code blocks |
| MD | 12px | Inputs, secondary cards |
| LG | 16px | Primary cards — the brand default |
| XL | 20px | FX rate cards, comparison cards |
| Hero | 24px | Major hero panels, send-money widgets |
| Pill | 9999px | All buttons, currency chips — non-negotiable |

Wise's signature pairing is **16px primary cards + 12px inputs + 9999px buttons**. The radius differential (cards rounder than inputs) is a deliberate signal: cards are *content surfaces* (rounder for warmth); inputs are *interactive surfaces* (slightly tighter for precision); buttons are *call-to-action moments* (full pill for friendliness). The full-pill button is non-negotiable — square or 8px-radius CTAs would shift Wise into Plaid (cool enterprise) territory.

The radius ladder is friendlier than Brex's (which lands at 8/16) and slightly tighter than Mercury's (which lands at 18/24). Wise occupies the *humanist-modern* middle: rounded enough to read approachable, tight enough to read structured. The 24px hero radius is reserved for the largest hero panels and send-money widgets — major sectional shells.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow, hairline only | Page canvas, body sections, dense data |
| 1 — Hairline | 1px `rgba(22, 51, 0, 0.10)` border | Pricing cards, dense data tiles |
| 2 — Quiet Card | hairline + `rgba(22, 51, 0, 0.06) 0 2px 8px` | Default feature cards (the signature) |
| 3 — Card Hover | hairline + `rgba(22, 51, 0, 0.10) 0 8px 24px -4px` + 2px translate-up | Hover state on cards |
| 4 — Brand Glow | `rgba(159, 232, 112, 0.32) 0 8px 24px -8px` | Under primary lime CTAs |
| 5 — Elevated | `rgba(22, 51, 0, 0.10) 0 12px 32px -8px` | Dropdowns, popover menus |
| 6 — Modal | scrim `rgba(22, 51, 0, 0.50)` + `rgba(22, 51, 0, 0.20) 0 24px 64px -16px` | Transfer dialogs, confirmation modals |

### Shadow Philosophy

Wise uses **two distinct shadow languages**: the *forest-tinted neutral* shadow (`rgba(22, 51, 0, 0.06) 0 2px 8px`) for content cards, and the *lime brand-glow* (`rgba(159, 232, 112, 0.32) 0 8px 24px -8px`) for primary CTAs. The neutral shadow is intentionally quiet — low opacity, modest spread, no aggressive multi-layer lift. It gives cards a sense of *floating slightly* without the consumer-app heavy lift.

The lime brand-glow is the ambitious move. By tinting the shadow under the primary CTA with the brand lime, Wise extends the chroma into the negative space below the button. The effect is subtle but compounding: the CTA doesn't just sit on the page; it *radiates* lime into its surroundings. Most fintech brands use neutral shadows under CTAs; Wise's lime-tinted glow is one of its most distinctive micro-moves.

The shadow philosophy also reinforces the warm-and-cohesive palette. The forest-tinted neutral shadow harmonises with the cream canvas (rather than introducing a cold grey-tinted shadow that would clash chromatically). Every shadow tone belongs to the green family — the lime glow for action, the forest-tint for content, the deeper forest for modal scrim.

## 8. Interaction & Motion

### Easing Curves

- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — Material-style; default for hover, focus, color transitions
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — punchier exit; modal entry, hero reveal
- **Out-Soft**: `cubic-bezier(0.0, 0, 0.2, 1)` — gentle settle; dropdown reveal, FX rate tick

### Duration Buckets

| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 100ms | Link colour swaps, focus ring fade-in |
| Standard | 200ms | Button hover (background shift + 1px translate), card hover |
| Slow | 300ms | Modal entry, dropdown reveal, scroll-reveal |
| Page | 400ms | Route transitions |
| FX Tick | 800ms | Currency rate digits roll over when rate updates (mono-aligned, tnum) |

### Per-Component Recipes

- **Link hover**: colour `#163300` → `#0c1d00` over 100ms standard; underline appears in 100ms (or thickens if already present).
- **Primary lime CTA hover**: background `#9fe870` → `#92e066` and button translates 1px upward over 200ms standard. Brand-glow shadow intensifies from `0.32` to `0.48` opacity. The lime stays the lime — the *light around it* changes.
- **Secondary outlined button hover**: background fills `rgba(22, 51, 0, 0.04)` cream-tint over 200ms; border colour unchanged.
- **Card hover**: shadow lifts from `0 2px 8px` to `0 8px 24px -4px` and card translates 2px upward over 200ms standard.
- **FX rate tick**: when the FX rate updates from a backend feed, individual digits roll over 800ms ease-out-soft using `font-variant-numeric: tabular-nums` for column-perfect alignment. The rolling digit animation is a brand-signature interaction — it makes FX rates feel *live* and *real-time*.
- **Scroll-reveal**: marketing-page sections fade in over 300ms ease-out-soft when entering viewport at 80% threshold.
- **Modal entry**: backdrop scrim fades in over 200ms; modal content fades + scales from 0.96 to 1.0 over 300ms ease-emphasized.
- **Dropdown reveal**: fades in over 200ms ease-out-soft from `translateY(-4px)` to `translateY(0)`.

### Page Transitions

Page-to-page navigation uses a 400ms cross-fade with the sticky header staying static. Anchor smooth-scroll uses 600ms ease-emphasized.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. The FX rate tick freezes — digits update instantly without rolling. All `translate` and `scale` transforms suppress entirely — replaced with instant render or opacity-only fades. Durations halve where they remain. Card hover loses the 2px lift; only the shadow change remains. Button hover loses the 1px translate. Modal scale-in becomes instant render. Scroll-reveal becomes static on-mount.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| `#0e0f0c` text on `#fffbf5` cream | 18.2 | AAA at all sizes |
| `#163300` forest text on `#fffbf5` cream | 14.6 | AAA at all sizes |
| `#0e0f0c` text on `#f4f1eb` tan | 16.4 | AAA at all sizes |
| `#37513e` muted forest on `#fffbf5` | 7.8 | AAA at body sizes |
| `#677378` muted-warm on `#fffbf5` | 4.9 | AA at body sizes |
| `#163300` forest on `#9fe870` lime (the brand pair) | 11.2 | AAA at all sizes |
| `#fffbf5` cream on `#163300` forest | 14.6 | AAA at all sizes |
| `#163300` link underlined on `#fffbf5` | 14.6 | AAA at all sizes |
| `#1a7f3a` success on `#fffbf5` | 5.6 | AA at body sizes |
| `#9a1f1f` danger on `#fffbf5` | 6.5 | AA at body sizes |

The contrast pairs are uniformly excellent. The brand's signature pair — forest `#163300` text on lime `#9fe870` — lands at 11.2:1 AAA, which is exceptional for a fintech CTA. Most fintech brands have CTA text-on-fill contrast in the 4.5–5.0 range (just passing AA); Wise's forest-on-lime exceeds that by a wide margin and reads as deeply legible at all sizes. This is a deliberate accessibility win.

### Focus Indicators

Focus ring is `3px solid rgba(159, 232, 112, 0.32)` brand-lime translucent ring with 2px outline-offset. The ring colour ports the brand identity into every focus interaction — it's the same lime as the primary button, so users see the brand chroma at every keyboard event. On the dark-forest band, the ring intensifies to `3px solid rgba(159, 232, 112, 0.50)` for visibility against the deep ground.

### ARIA Patterns

- **Top nav**: `<nav aria-label="Primary">` landmark with skip-link.
- **Send Money widget**: form with proper `<label>` elements for amount and currency selectors. Currency code chips use `aria-label="USD"` since visual text is the code itself.
- **FX rate display**: live region with `aria-live="polite"` so screen readers announce rate updates without interrupting flow.
- **Pricing tier toggle**: `role="radiogroup"` with `<input type="radio">` for monthly/annual switching.
- **Modal**: `role="dialog" aria-modal="true" aria-labelledby` with focus trap and Esc-to-close.
- **Combobox / search**: `role="combobox" aria-expanded aria-autocomplete="list"`.
- **Toast notifications**: `aria-live="polite"` for non-critical; `aria-live="assertive"` for errors and transfer failures.
- **FAQ accordion**: `aria-expanded` toggle on each header, `aria-controls` linking to the answer panel.

### Keyboard Navigation

- Tab order: skip-link → wordmark → primary nav → search → auth CTAs → main content → footer
- Send Money widget: from-amount → from-currency → to-amount → to-currency → Send button
- FAQ accordion: Tab to header, Enter / Space to toggle
- Modal focus trap: Tab cycles within modal; Esc dismisses
- Currency selector dropdown: Up/Down arrows navigate, Enter selects, Esc closes

### Screen Reader Hints

- Mono caps eyebrows use CSS `text-transform: uppercase` so screen readers announce natural-case
- Wise wordmark uses `aria-label="Wise"`
- FX rates announce with currency unit despite tabular-numeral mono visual: *"One US dollar equals zero point seven nine British pounds"*
- Currency code chips announce as the country (`USD` → "US dollar") via `aria-label`
- Send Money widget announces transfer summary on submit: *"Sending one hundred US dollars to Marcus, who will receive seventy-eight pounds, fee three pounds"*

### Reduced Motion

All transitions degrade to opacity-only or instant. FX rate tick freezes — digits update instantly without rolling. Card and button hover translates suppress; only shadow/colour changes remain. Modal scale-in becomes instant. Scroll-reveal becomes static on-mount.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Top nav collapses to logo + Get Started + hamburger; hero H1 drops 88→44px; cards 1-up; Send Money widget stacks vertically; comparison table scrolls horizontally |
| Tablet | 640–1024px | Top nav keeps inline links; hero H1 at 56–64px; cards 2-up; Send Money widget remains horizontal |
| Desktop | 1024–1200px | Full nav with mega-menu; hero H1 at 72–88px; cards 3-up; pricing tiers 3-up |
| Wide | 1200–1440px | Content width caps at 1200; gutters absorb the rest |
| Ultra | >1440px | Page locks to 1200; gutters expand to 64px |

### Touch Targets

- Buttons: **48px minimum height** across all sizes — taller than Apple HIG's 44px, signals approachable-and-confident
- Top-nav links: 44×44px tap area even at 16px text
- Currency code chips: 32px visual but 12px vertical padding for 44px effective
- FAQ accordion headers: 48px height
- Pricing tier toggle: 48×48px segmented-control thumb

### Collapsing Strategy

- **Top nav** at <1024px: primary nav links collapse into hamburger sheet; lime *Get started* CTA stays visible
- **Hero CTA pair** at <640px: stacks vertically (lime primary above, outlined secondary below)
- **Send Money widget** at <640px: from-row + to-row stack vertically; FX rate display moves below
- **Card grids**: 4 → 3 → 2 → 1 columns
- **Pricing cards** at <1024px: stack vertically; featured tier remains prominent
- **Comparison table** at <1024px: horizontal scroll with sticky first column
- **Customer logo grid**: 4 → 3 → 2 columns; logos render monochrome at all sizes

### Image Behavior

Customer logos use SVG with `currentColor` (forest tint). Product imagery (phone mockups, dashboard previews) uses `aspect-ratio` to prevent layout shift. Marketing illustrations use `srcset` with 1x/2x/3x. Country flags inside currency selectors use SVG flags rendered at 24×16 with rounded 2px corners.

### Container Queries

Used inside the Send Money widget: when widget width crosses 480px, from-currency and to-currency rows render side-by-side; below that, they stack vertically. Used in pricing cards: when card width crosses 320px, feature list moves below the CTA; at narrower widths, content stacks.

## 11. Content & Voice

### Tone

**Friendly, direct, multi-currency-fluent.** Wise writes like a fintech that has resolved the global-banking complexity behind the scenes and presents the simple human result. Headlines speak in plain, often imperative sentences ("Send money in 70+ currencies"); subheads explain the *because* in a single calm clause; product copy treats foreign exchange as a normal everyday operation rather than a complex financial subject. The voice is *warmer than Plaid's* (Plaid stays technical-cool), *more approachable than Mercury's* (Mercury maintains editorial register), *more direct than Stripe's* (Stripe rewards developer audiences with longer copy).

### Microcopy Patterns

- **Button verbs**: *Send money*, *Get started*, *Open account*, *Sign up*, *Learn more*, *Sign in*. Direct, action-led, multi-currency-aware.
- **Error messages**: *"We couldn't process your transfer. Please check your bank details and try again."* — specific, accountable, never *"Oops!"* or *"Something went wrong."*
- **Success confirmations**: *"Transfer sent. Marcus will receive £78.42 in your bank account in about 2 hours."* — outcome-focused, includes recipient name + amount + timing.
- **Empty states**: *"No transfers yet. Send your first money to start tracking."* — instruction-led, includes the next action.
- **Field labels**: *You send*, *They receive*, *To recipient*, *From account*, *Currency*. Specific, plain-English, no friendly framing.
- **Loading states**: *"Calculating exchange rate…"*, *"Verifying recipient…"*, *"Processing transfer…"* — context-specific and trust-building. The loading copy mirrors the *actual operation* in progress.

### Empty States

The dashboard empty state for new accounts: *"Welcome to Wise. Send your first money to a recipient anywhere in the world."* — instruction-led, points at the next action, builds momentum. The transactions empty state: *"No transfers yet. Try sending money to test the waters."* — describes the state and offers the next path forward in friendly tone.

### CTA Verb Conventions

- Primary on hero: *Send money*, *Get started*, *Open account*, *Sign up*
- Secondary: *Watch demo*, *See pricing*, *Read customer stories*, *Sign in*
- Tertiary text: *Learn more*, *See all currencies*, *View documentation*, *Read our blog*
- Avoided: *Click here*, *Submit*, exclamation-mark-heavy enthusiasm. Wise uses imperative verbs without urgency.

### Multi-Currency Voice

Wise's voice is shaped by the multi-currency reality. Pricing copy, FX rate displays, and transfer details all reference real-world currencies (USD, GBP, EUR, AUD, CAD, JPY, INR) and amounts. The brand never abstracts currency away — *"The cheapest way to send money internationally"* over *"The cheapest way to make payments"*, because the *internationally* is the brand's whole differentiator. The mono-aligned currency display, the rolling FX rate digits, and the country-specific copy all reinforce that Wise is *fluent* in many currencies, not abstracted away from them.

### Headline Conventions

Headlines use **plain imperative sentences** — never marketing-template construction. Examples:

- *"Send money in 70+ currencies."*
- *"Save up to 6× when you send money abroad."*
- *"The world's most international account."*
- *"Multi-currency banking, simplified."*

The sentence rhythm is short, declarative, with periods preferred over exclamation marks. The brand voice never asks rhetorical questions in headlines and never uses sentence-fragment marketing copy.

## 12. Dark Mode & Theming

**Optional dark mode on certain product pages.** The marketing surface is primarily light-canvas (cream), but Wise ships dark variants on specific dashboard preview pages and case-study pages where dark mode demonstrates the in-product experience. The dark mode is a complete token swap with the **lime brand colour preserved exactly** — `#9fe870` reads strongly on both cream and dark-forest grounds, and the contrast pair (forest text on lime button) is preserved across both modes.

Dark-mode token swap:

- **canvas**: `#fffbf5` → `#0c1d00` (deepest forest)
- **bg-soft**: `#fbf6ec` → `#163300` (default forest panel)
- **bg-tan**: `#f4f1eb` → `#1f4400` (softer forest panel)
- **bg-forest**: `#163300` → unchanged (the inverted band stays as the same forest)
- **text**: `#0e0f0c` → `#fffbf5` (cream — the canvas tone promoted to type)
- **text-strong**: `#163300` → `#ffffff` (peak white for headline emphasis)
- **text-body**: `#1c1d18` → `#f4f1eb`
- **text-muted**: `#37513e` → `#a3b39a`
- **text-soft**: `#8a8a85` → `#7a8a76`
- **brand**: `#9fe870` (unchanged — passes contrast on both grounds)
- **brand-hover**: `#92e066` (unchanged)
- **on-brand**: `#163300` (the contrast pair preserved exactly — forest ink on lime button stays)
- **brand-soft**: `#dcf3c7` → `rgba(159, 232, 112, 0.16)`
- **border**: `rgba(22, 51, 0, 0.10)` → `rgba(255, 251, 245, 0.12)`
- **border-strong**: `rgba(22, 51, 0, 0.18)` → `rgba(255, 251, 245, 0.20)`
- **shadow opacities**: deepened with full-black tone in dark mode for visibility
- **brand-glow**: unchanged at `rgba(159, 232, 112, 0.32)` — the lime glow remains brand-coherent on dark canvas

The chromatic inversion in Wise's dark mode is unusually elegant because the dark-mode canvas uses the *forest band colour* that already appears in light mode. The brand doesn't introduce a new dark colour — it promotes the existing inverted-band colour to the default. The lime CTA, the forest text on cream → cream text on forest, the tan-grey panel → softer forest panel: every dark-mode token has a counterpart in the light-mode chromatic system.

The lime brand-glow under the primary CTA is one of the few dark-mode-improved details: on dark forest, the `rgba(159, 232, 112, 0.32)` lime glow reads more vividly than on cream, making the CTA radiate even more strongly. The lime button is the brand's most cross-mode-resilient asset; it never needs reformulation across light and dark.

## 13. Lineage & Influences

Wise's design DNA traces three lineages: **Stripe's brand-as-system era** — the discipline of brand-as-singular-accent and the chromatic-inversion trick (light canvas + inverted dark band) that signals "money mode" inside a primarily-light marketing surface; **Inter / rsms.me** — the humanist sans-serif that powers the typographic foundation, the same family Vercel and Linear made standard but used here with a friendlier display weight; and **IBM Plex Mono / IDEO** — the friendly humanist mono used for currency codes and FX rate displays, and the IDEO-school approachable-design influence that shapes Wise's voice. The combination produces a register no peer fully occupies: cream canvas + lime accent + forest text + Inter Display + Plex Mono + full-pill button — the *everyday-object banking* identity.

The choice to commit to **one colour at full saturation** is the brand's most considered decision. A typical fintech with a green brand colour (Cash App, Robinhood) treats green as a primary brand identity but pairs it with secondary accents (Cash App adds black; Robinhood adds purple gradients). Wise commits to lime alone. There is no second saturated colour. The yellow editorial accent (`#f1c84d`) appears only inside illustration. This restraint compounds: the lime becomes more recognisable *because* it's the only colour. When a Wise page appears in your peripheral vision, you know it's Wise from the colour pair alone.

The cream canvas is the second most considered decision. Pure white (Stripe, Plaid) reads as technical-cold; cool grey (Brex, Linear) reads as modern-distant; warm cream (Wise) reads as *paper, ledger, everyday object*. The cream canvas is what makes Wise feel approachable to a global audience that includes people who have never used a banking app before. It signals trust through tactility — the page feels like an extension of physical financial documents rather than a replacement for them.

The forest-text-not-black detail is the third considered decision. Display headlines are `#163300` forest-green, not pure black. The forest tone harmonises with the brand lime; pure black would feel out of family. This is the brand's most subtle chromatic discipline — the type belongs to the green family, even when it's the dark.

What Wise rejects: **cool blues** (Plaid signal — too cold), **multi-stop gradients** (Brex / Stripe-2020 signal — too chromatic), **serif headlines** (Mercury signal — too editorial), **pure-white canvas** (Plaid / Stripe signal — too technical), **secondary saturated accents** (Cash App / Robinhood signal — too consumer), **square button radii** (Plaid / enterprise signal — too cold), **Söhne / neo-grotesque type** (Brex / Ramp signal — too declarative). The brand position is engineered to be *the most approachable global banking site possible* — and that requires every chromatic and typographic decision to support warmth-and-clarity.

**Influences:**

- **Stripe (brand-as-system era)** — Brand-as-singular-accent discipline; chromatic inversion (light + inverted dark band) as a fintech-modern signal. *https://stripe.com*
- **Inter / rsms.me** — Inter Display + Inter is the Wise typographic foundation. Humanist sans optimised for screens. *https://rsms.me/inter*
- **IBM Plex / Bold Monday** — Plex Mono carries currency codes and FX values. The friendlier mono companion. *https://www.ibm.com/plex*
- **Monzo / Revolut neobank palette** — Bright-on-quiet neobank colour pairings; Wise pushes the neutral toward warm cream rather than pure white. *https://monzo.com*
- **Mercury** — Adjacent fintech competitor — Mercury picks a serif headline + mint band; Wise picks Inter + lime. *https://mercury.com*
- **Klarna** — Pink fintech precedent for committing to a single high-saturation accent. Wise adopts the discipline but rotates the colour to lime. *https://klarna.com*
- **Plaid** — Reference for fintech-with-restraint-in-blue. Wise rejects Plaid's cold blues and picks warm cream instead — the differentiating move. *https://plaid.com*
- **Cash App** — Green-fintech precedent for committing to lime/green at scale. Wise refines the chromatic discipline by committing to a single tone of green. *https://cash.app*

## 14. Do's and Don'ts

### Do

- **Do** keep the action palette to the **single lime `#9fe870`**. Secondary actions are outline-on-cream, never a different hue.
- **Do** use the **cream `#fffbf5`** canvas — pure white reads as a different brand (Plaid, Stripe).
- **Do** ink the lime button with **forest `#163300`**, never with white. The contrast pair is the brand's signature; it lands at 11.2:1 AAA.
- **Do** ship Inter Display at **weight 600** with `-0.025em` tracking for display copy. The 600 + mild negative tracking is the brand voice.
- **Do** keep buttons at **full-pill radius (9999)** and **48px height**. Square or short buttons read as a different brand entirely.
- **Do** use **forest-green (`#163300`)** for display headlines — never pure black. The forest belongs to the brand chromatic family.
- **Do** use **IBM Plex Mono** for currency codes, FX rate displays, and status pills. The mono companion is the brand's secondary identity.
- **Do** enable **`tnum`** on FX rate displays and pricing values for column-aligned numerals.
- **Do** apply the **lime brand-glow shadow** (`rgba(159, 232, 112, 0.32) 0 8px 24px -8px`) under primary CTAs for the chromatic radiation effect.
- **Do** alternate cream + tan + forest sections — the rhythm is the macro brand voice.
- **Do** use **forest-tinted hairlines** (`rgba(22, 51, 0, 0.10)`) instead of cool grey borders. Every divider belongs to the green family.
- **Do** invert the footer to **`#163300` forest** for closing emphasis and consistency with the inverted-band motif.

### Don't

- **Don't** **square the buttons**. The full-pill radius (9999) is non-negotiable and carries the friendly tone.
- **Don't** introduce a **secondary accent** (no purple, no orange). Wise's chromatic discipline is its differentiator; the editorial yellow appears only in illustration.
- **Don't** reach for **cold greys**. Warm cream-and-tan neutrals are the rule, even on data-dense surfaces.
- **Don't** use **lime as a foreground colour**. The lime is always a *fill* (button, illustration, chip) — never type, never icon.
- **Don't** use **pure black** for type. Forest green `#163300` is the headline colour; near-black `#0e0f0c` (with green warmth) is the body colour.
- **Don't** drop body size to 16px. Wise uses **17px / 1.55 line-height** as the default — the body bump is a discipline detail.
- **Don't** swap Inter for **Söhne** or another neo-grotesque. Inter's humanist proportions are part of the brand's approachable register.
- **Don't** **tint the cream canvas cooler**. The cream is warm-leaning (`#fffbf5`); pulling it toward `#fafafa` or `#f8f8f6` shifts the brand toward Mercury / Stripe territory.
- **Don't** apply **gradients** to the lime CTA. The flat lime is the brand; a gradient lime reads as Brex / Klarna territory.
- **Don't** widen the page beyond **1200px**. Wise reads as *cosy and considered*, not data-dense.
- **Don't** use exclamation marks in marketing copy. The voice is plain-imperative, not consumer-enthusiasm.
- **Don't** abstract away currency. Wise's voice is multi-currency-native — *internationally*, *abroad*, *USD*, *GBP* are required vocabulary, not optional.

## 15. Agent Prompt Guide

### Quick Color Reference

```
Cream Canvas:     #fffbf5
Cream Soft:       #fbf6ec
Tan Panel:        #f4f1eb
Forest Band:      #163300
Lime Brand:       #9fe870
Lime Soft:        #dcf3c7
Text:             #0e0f0c
Text Forest:      #163300
Text Muted:       #37513e
On Brand:         #163300
On Forest:        #fffbf5
Border:           rgba(22, 51, 0, 0.10)
Border Soft:      rgba(22, 51, 0, 0.06)
Border Strong:    rgba(22, 51, 0, 0.18)
Card Shadow:      rgba(22, 51, 0, 0.06) 0 2px 8px
Brand Glow:       rgba(159, 232, 112, 0.32) 0 8px 24px -8px
```

### Example Component Prompts

1. **"Create a Wise-style hero: warm cream `#fffbf5` canvas, no decoration. Mono caps eyebrow above the headline in IBM Plex Mono 13px / 500 / `0.02em` uppercase in `#37513e` muted forest. 72–88px / 600 Inter Display H1 with `-0.025em` tracking in `#163300` forest-green, left-aligned, max-width 920px. 20px / 400 Inter body deck below at 1.55 line-height in `#1c1d18`. Dual CTA pair below — primary lime pill (`#9fe870` fill, forest `#163300` text 16px / 600, full pill radius 9999, 14×24 padding, **48px height**, lime brand-glow shadow `rgba(159, 232, 112, 0.32) 0 8px 24px -8px`) + secondary outlined pill (`transparent` fill, forest text, 1px solid `#163300` border, full pill radius). Send Money widget on the right side: white card with from-currency input + to-currency input + FX rate display."**

2. **"Design a Wise feature card: pure white `#ffffff` background on cream canvas, 16px radius, 1px `rgba(22, 51, 0, 0.10)` 10% forest hairline border, 32px padding, signature quiet shadow `rgba(22, 51, 0, 0.06) 0 2px 8px`. Inside: 28×28 lime icon at top, 28px / 600 Inter Display heading in `#163300` forest, 17px / 400 Inter body in `#1c1d18` at 1.55 line-height. Hover lifts shadow to `0 8px 24px -4px` and translates 2px upward over 200ms."**

3. **"Build a Wise FX comparison card: pure white fill, 20px radius (slightly relaxed for emphasis), hairline border. Currency code chips at top: USD / GBP / EUR in IBM Plex Mono 13px / 500 with hairline border and full pill radius. FX rate display in IBM Plex Mono **32px / 500** with `tnum` and `zero` enabled — `1 USD = 0.79 GBP`. Below: lime pill *Send money* CTA with forest text. The rate digits roll over 800ms ease-out-soft when the rate updates from the backend (or freeze under reduced-motion)."**

4. **"Compose a Wise top nav: 64px height, `rgba(255, 251, 245, 0.92)` translucent cream fill with `backdrop-filter: blur(12px)`, 1px bottom hairline `rgba(22, 51, 0, 0.10)` that appears after scroll > 8px. Wise wordmark left in Inter Display 20px / 600 forest. Center nav links (Personal, Business, About, Help) in Inter 16px / 500 ghost-button style. Right: ghost `Sign in` + primary lime-pill `Get started` button (full pill, 14×24 padding, 48px height, lime brand-glow)."**

5. **"Render a Wise forest inversion band: full-bleed `#163300` dark-forest background, 96px vertical padding, max-width 920px content. Cream eyebrow above in IBM Plex Mono 13px / 500 / `0.02em` uppercase in `#a3b39a` cream-muted. Centred testimonial in Inter Display 28px / 500 / `-0.01em` tracking, cream `#fffbf5` text. Below the quote: customer name in Inter 16px / 600 cream + role/company in Inter 14px / 400 cream-muted. Lime pill CTA inside the band — the lime stands out *more* on the dark forest than on the cream canvas."**

6. **"Build a Wise pricing tier card: pure white fill, 16px radius, hairline border, 32px padding, quiet shadow. Tier name in Inter Display 22px / 500. Pricing display in IBM Plex Mono 32px / 500 with `tnum` enabled — `£0` or `0.41% fee`. Feature list with lime checkmarks at 16px in forest text. At bottom: outlined pill secondary CTA (transparent fill, forest text, full pill border). Featured tier replaces background with `#dcf3c7` lime-soft tint, adds `MOST POPULAR` mono caps eyebrow at top, replaces secondary CTA with primary lime pill."**

### Iteration Guide

1. **Check the canvas + accent pair.** Wise is `#fffbf5` cream + `#9fe870` lime + `#163300` forest text. If your canvas is pure white or cool grey, you've drifted to Plaid/Stripe or Brex territory.
2. **Switch to Inter Display at weight 600.** Söhne / Inter Display weight 700 collapses the brand into Brex/Linear territory. Inter Display at 600 with `-0.025em` is the precise voice.
3. **Push the H1 to 72px with `-0.025em` tracking.** 48–56px reads as restrained-modern (Mercury); 88–96px reads as ad-grade (Brex). 72px at 600 with mild negative tracking is the canonical Wise.
4. **Apply the lime to the CTA only.** A flat lime CTA fill is required; ink it with forest text. Lime as a type colour or icon fill loses the brand discipline.
5. **Use full-pill radius (9999) on every button.** Square or 8px CTAs read as cold-enterprise (Plaid). The full pill is the friendliness signal — non-negotiable.
6. **Keep button height at 48px.** Taller than the 44px SaaS consensus signals approachable-and-confident; the brand's CTA reads as a *moment*, not a control.
7. **Use forest-tinted hairlines.** `rgba(22, 51, 0, 0.10)` rather than cool grey. Every divider belongs to the green family.
8. **Apply the lime brand-glow under primary CTAs.** `rgba(159, 232, 112, 0.32) 0 8px 24px -8px` extends the chroma into the negative space — one of Wise's most distinctive micro-moves.
