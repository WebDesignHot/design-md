---
name: Visa
tagline: Bright-blue + golden-yellow payment-rail confidence — saturated `#1434CB` primary, ceremonial `#FCC015` yellow on hero pill CTAs, pill geometry throughout, custom visa-font-latin in light/regular weights.
updated_at: 2026-05-28T12:00:00.000Z
published_at: 2026-05-28T12:00:00.000Z
author: webdesignhot
source_url: https://www.visa.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [fintech]
tags: [light, fintech, payments, global, bright-blue, golden-yellow, pill-geometry, cosmopolitan, infrastructure, trust]
preview_swatch: ['#FFFFFF', '#1434CB', '#FCC015']
related: [mastercard]
description: 'Visa''s live experience reads less like a sober annual report and more like a global signage system that has decided to be cheerful about it — bright primary blue, ceremonial yellow, and pill-shaped CTAs everywhere. The canvas is unwarmed white, but the chrome that sits on top of it is saturated and confident: a single load-bearing **Visa Blue** (`#1434CB`) — bright, mid-tone, slightly cobalt — carries the wordmark, the primary CTA, the active nav state, and every focus ring. The second voice is a **Visa Yellow** (`#FCC015`) — a clean golden-yellow on hero pill CTAs ("See the world", "Explore our products"), pairing only ever with black text. The shape language is decisively **pill** — buttons are 30px-radius stadium pills with `16px 24px 18px` padding (asymmetric vertical to balance the optical centre of the custom font), used in primary, secondary, and yellow ceremonial variants. The custom **visa-font-latin** typeface — engineered for multi-script reach across 200+ markets — does the typographic work in unusually light weights (100/light, 300/light, 400/regular, semi-bold), giving body copy a softer cosmopolitan voice at 16px / weight 300 / `#000` pure black. Headlines hit at 32px / weight 700, footer drops to a `#F7F7F7` light-gray rather than navy. Where Mastercard chose warm-cream editorial circles and Visa''s 2014 brand chose deep-navy rectangles, **today''s Visa chose bright-blue + yellow pills** — the visual register of a confident global utility that wants to feel less like a balance sheet and more like a passport.'

# Canonical 8-role aliases for Visa's bright-blue + yellow + white system.
# Hand-mapped: Visa's live VDS (Visa Design System) uses `vs-bg-primary`,
# `vs-btn-primary` etc.; mapping below preserves role intent — brand-blue is
# the primary action and chromatic anchor, brand-yellow is the ceremonial
# accent reserved for hero pill CTAs, text is the pure-black body stop,
# border-strong stands in for ring (focus rings reuse brand-blue).
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: brand-yellow
  muted: text-slate
  border: border
  ring: brand

colors:
  bg: '#FFFFFF'                    # canvas — pure unwarmed white, page floor
  bg-lifted: '#FAFAFA'             # one step warmer for nested raised sections
  surface: '#FFFFFF'
  surface-soft: '#F7F7F7'          # the live-site footer gray, used for nested modules and stat panels
  surface-card: '#FFFFFF'          # standard card surface — pills + 12px corners, low elevation
  surface-dark: '#1434CB'          # Visa Blue used as a structural dark surface (takeover hero, inverted feature cards)
  surface-deep: '#0F28A4'          # deeper blue for ultra-dark hero contrasts and pressed CTA states
  brand: '#1434CB'                 # Visa Blue — primary brand colour, CTA fill, focus ring, active nav (VDS `vs-bg-primary`)
  brand-yellow: '#FCC015'          # Visa Yellow — ceremonial pill CTA on hero ("See the world"); never paired with white text
  brand-hover: '#0F28A4'           # one step deeper blue for primary CTA :hover
  brand-pressed: '#0A1E84'         # deepest blue for primary CTA :active
  brand-yellow-hover: '#EAB000'    # subtly deeper yellow for the yellow-pill hover state
  text: '#000000'                  # primary body and headline text — pure black, the live-site default
  text-charcoal: '#1A1A1A'         # slightly softer near-black for long-form body
  text-slate: '#5B5B5B'            # muted secondary — eyebrow alt, helper text, disabled labels
  text-graphite: '#3D3D3D'         # deeper grey for inline body accents
  text-dust: '#9C9C9C'             # very muted gray for whisper text and disabled controls
  text-on-dark: '#FFFFFF'          # pure white text on Visa Blue surfaces
  text-on-brand: '#FFFFFF'         # pure white reverse on blue CTAs
  text-on-yellow: '#000000'        # pure black text on the yellow pill — never white on yellow
  link-blue: '#1434CB'             # inline links default to Visa Blue, underlined on hover
  link-hover: '#0F28A4'            # link hover state — same shift as CTA hover
  border: '#E1E1E1'                # default 1px hairline (neutral cool-gray)
  border-soft: '#EDEDED'           # editorial dividers between sections
  border-strong: '#1434CB'         # blue outlines on focus rings and select form borders
  border-on-dark: 'rgba(255,255,255,0.24)'  # hairlines inside the rare blue takeover hero
  scrim: 'rgba(0,0,0,0.55)'        # modal backdrop using pure-black tint
  shadow-subtle: 'rgba(0,0,0,0.04)'      # nav lift, very small elevation
  shadow-soft: 'rgba(0,0,0,0.08)'        # default card and dropdown shadow
  shadow-medium: 'rgba(0,0,0,0.14)'      # hero media frame and elevated panel
  shadow-strong: 'rgba(0,0,0,0.22)'      # rare deep modal / overlay
  on-brand: '#FFFFFF'
  success: '#1B7F4E'               # rare confirmation green
  warning: '#B86A00'               # advisory amber-brown — clearly distinct from Visa Yellow
  danger: '#B3261E'                # serious error red — distinct from any brand tone
  info: '#1434CB'                  # informational banners reuse Visa Blue

typography:
  display:
    family: '"visa-font-latin-regular", "Helvetica Neue", Arial, sans-serif'
    weights: [100, 300, 400, 600]
    opentype-features: []
  body:
    family: '"visa-font-latin-regular", "Helvetica Neue", Arial, sans-serif'
    weights: [100, 300, 400, 600]
  mono:
    family: '"SF Mono", Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 64, weight: 700, lineHeight: 1.05, tracking: '-0.02em',  family: display, notes: 'global takeover hero — used on flagship campaign pages' }
    display-lg:      { size: 48, weight: 700, lineHeight: 1.08, tracking: '-0.015em', family: display }
    h1:              { size: 32, weight: 700, lineHeight: 1.15, tracking: '-0.012em', family: display, notes: 'live-site default H1 — 32/700 visa-font-latin-regular' }
    h2-section:      { size: 28, weight: 600, lineHeight: 1.2,  tracking: '-0.008em', family: display }
    h3-card:         { size: 22, weight: 600, lineHeight: 1.25, tracking: '-0.005em', family: display }
    h4-subhead:      { size: 18, weight: 600, lineHeight: 1.3,  tracking: '0',        family: body }
    eyebrow:         { size: 12, weight: 600, lineHeight: 1.0,  tracking: '0.10em',   family: body, transform: uppercase, notes: 'Visa Blue or slate, never yellow' }
    body-lg:         { size: 18, weight: 300, lineHeight: 1.55, tracking: '0',        family: body, notes: 'lead paragraph — weight 300 light, cosmopolitan voice' }
    body:            { size: 16, weight: 300, lineHeight: 1.55, tracking: '0',        family: body, notes: 'live-site body — 16/300 light visa-font-latin on pure black' }
    body-sm:         { size: 14, weight: 300, lineHeight: 1.5,  tracking: '0',        family: body }
    nav-link:        { size: 15, weight: 400, lineHeight: 1.0,  tracking: '0',        family: body }
    button-label:    { size: 16, weight: 600, lineHeight: 1.0,  tracking: '0',        family: body, notes: 'semi-bold on pill CTAs for legibility' }
    label:           { size: 13, weight: 400, lineHeight: 1.4,  tracking: '0',        family: body }
    caption:         { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0.02em',   family: body }
    footer-link:     { size: 14, weight: 300, lineHeight: 1.5,  tracking: '0',        family: body, notes: 'black on `#F7F7F7` light-gray footer' }
    footer-header:   { size: 12, weight: 600, lineHeight: 1.0,  tracking: '0.10em',   family: body, transform: uppercase }
    legal-micro:     { size: 11, weight: 300, lineHeight: 1.45, tracking: '0',        family: body }

radius:
  micro: 4          # decorative chips, fine inputs
  sm: 8             # small chips, tag pills (cards step)
  md: 12            # cards, panels, content containers
  lg: 16            # hero media frame, large feature blocks
  pill: 30          # primary, secondary, and yellow CTAs — Visa's signature 30px pill radius
  full: 9999        # search input, large stadium media frame, badges

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 48, 64, 96, 128]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 72
  card-gutter: 24
  section-vertical: 96

components:
  button-primary:
    bg: '#1434CB'
    color: '#FFFFFF'
    radius: 30
    padding: '16px 24px 18px'
    border: 'none'
    height: 52
    font: button-label
    use: 'Primary CTA — solid Visa Blue PILL with 30px radius and asymmetric `16px 24px 18px` padding (the 18px bottom balances the optical centre of visa-font-latin). Marketing actions ("Explore our products", "Get started", "Sign in"). Hover deepens to `#0F28A4`; pressed to `#0A1E84`. VDS class `vs-btn-primary`.'
  button-secondary:
    bg: '#FFFFFF'
    color: '#1434CB'
    radius: 30
    padding: '16px 24px 18px'
    border: '1.5px solid #1434CB'
    height: 52
    font: button-label
    use: 'Secondary outlined pill — white surface with Visa Blue text and 1.5px blue border, 30px pill radius. Used alongside a primary or as standalone utility CTA.'
  button-tertiary:
    bg: 'transparent'
    color: '#1434CB'
    radius: 30
    padding: '16px 16px 18px'
    border: 'none'
    height: 52
    font: button-label
    use: 'Inline text-style action with optional trailing arrow icon. No fill, no border — Visa Blue label, underlined on hover.'
  button-yellow:
    bg: '#FCC015'
    color: '#000000'
    radius: 30
    padding: '16px 24px 18px'
    border: 'none'
    height: 52
    font: button-label
    use: 'Ceremonial yellow CTA — the homepage hero "See the world" button. Pure-black label on Visa Yellow, NEVER white on yellow. Use as the single hero attention pill or for premium / flagship moments. Hover deepens to `#EAB000`.'
  button-on-dark:
    bg: '#FFFFFF'
    color: '#1434CB'
    radius: 30
    padding: '16px 24px 18px'
    border: 'none'
    height: 52
    font: button-label
    use: 'Primary CTA when sitting on the rare Visa Blue takeover hero — inverts to white pill with Visa Blue text.'
  card-feature:
    bg: '#FFFFFF'
    color: '#000000'
    radius: 12
    padding: '32px'
    border: '1px solid #E1E1E1'
    use: 'Standard feature card — white surface, hairline neutral-gray border, 12px radius (cards step down from the 30px CTA pill). Hover lifts with `shadow-soft`.'
  card-stat:
    bg: '#F7F7F7'
    color: '#000000'
    radius: 12
    padding: '32px'
    border: 'none'
    use: 'Stat / metric card on the light-gray `#F7F7F7` soft surface, used to visually group numeric proofs (volume processed, countries served). Same gray as the footer.'
  card-dark:
    bg: '#1434CB'
    color: '#FFFFFF'
    radius: 16
    padding: '40px'
    border: 'none'
    use: 'Inverted Visa Blue card used for cross-sell takeovers and high-emphasis CTAs inside otherwise-white sections. White text plus the inverted white-pill `button-on-dark` CTA.'
  input:
    bg: '#FFFFFF'
    color: '#000000'
    radius: 8
    padding: '14px 16px'
    border: '1px solid #E1E1E1'
    height: 48
    use: 'Standard text input — white surface, hairline neutral-gray border, 8px radius (form controls step down from CTAs). Focus replaces border with 2px Visa Blue and adds a 2px outline-offset ring of the same colour.'
  select:
    bg: '#FFFFFF'
    color: '#000000'
    radius: 8
    padding: '14px 40px 14px 16px'
    border: '1px solid #E1E1E1'
    height: 48
    use: 'Native select restyled with custom chevron — 8px radius matches inputs.'
  checkbox:
    bg: '#FFFFFF'
    color: '#1434CB'
    radius: 4
    width: 20
    height: 20
    border: '1.5px solid #5B5B5B'
    use: 'Square 20px checkbox with 4px radius. Checked state fills with Visa Blue and a white checkmark glyph.'
  chip-category:
    bg: '#F7F7F7'
    color: '#1434CB'
    radius: 9999
    padding: '6px 14px'
    border: 'none'
    use: 'Category / topic chip — full-pill geometry matches the CTA voice, Visa Blue label on the light-gray surface.'
  badge-yellow:
    bg: '#FCC015'
    color: '#000000'
    radius: 9999
    padding: '4px 12px'
    border: 'none'
    use: 'Yellow "Premium" / "New" badge — black text on yellow, full pill. Used at most once per card, never paired with white text.'
  nav-header:
    bg: '#FFFFFF'
    color: '#000000'
    radius: 0
    padding: '0 32px'
    border: 'border-bottom: 1px solid #E1E1E1'
    height: 72
    use: 'Top header: flush at y=0, full viewport width, 72px tall, white surface with a single hairline bottom border. Visa wordmark at left, primary nav links centred, sign-in / locale right. Hover state on active nav link shows a Visa Blue underline.'
  nav-utility-bar:
    bg: '#F7F7F7'
    color: '#000000'
    radius: 0
    padding: '0 32px'
    height: 36
    use: 'Optional light-gray utility strip above the main header — locale picker, audience switcher ("Individuals / Businesses / Partners"). Black text on the same `#F7F7F7` footer gray.'
  dropdown-mega-menu:
    bg: '#FFFFFF'
    color: '#000000'
    radius: 12
    padding: '32px 40px'
    border: '1px solid #E1E1E1'
    use: 'Full-width mega-menu dropdown — multi-column link grid, soft shadow, 12px corner radius matching cards (NOT the 30px CTA pill — dropdowns are containers, not actions).'
  hero-media-frame:
    bg: '#1434CB'
    color: '#FFFFFF'
    radius: 16
    padding: '0'
    border: 'none'
    use: 'Visa Blue takeover hero with optional video or photographic full-bleed content, 16px radius — calm rounded rectangle, never sharp-cornered. The yellow `button-yellow` typically sits as the ceremonial CTA inside this frame.'
  brand-wordmark:
    bg: 'transparent'
    color: '#1434CB'
    use: 'The Visa wordmark itself — set in the proprietary letterforms, Visa Blue (`#1434CB`) on white. The live-site logo does NOT pair with a gold flag glyph; the 2014-era flag/wing motif has been retired from the current brand.'
  footer:
    bg: '#F7F7F7'
    color: '#000000'
    radius: 0
    padding: '64px 32px 32px'
    use: 'Light-gray footer (`#F7F7F7`) with 4–5 column link grid, black text on gray, neutral hairlines at 16% black opacity. This is the single most visible departure from the 2014 navy-footer brand — Visa''s 2026 footer is calm and pale, not a deep authority block.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-entry: 'cubic-bezier(0.0, 0, 0.2, 1)'
  ease-exit: 'cubic-bezier(0.4, 0, 1, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  duration-cinematic: 600
  button-hover: 'background colour transition from `#1434CB` to `#0F28A4` over 150ms ease-standard; no scale, no shadow lift — the pill stays geometrically still'
  button-press: 'background steps to `#0A1E84` over 100ms; no transform — Visa pill CTAs do not bounce, they darken'
  card-hover: 'shadow-subtle → shadow-soft over 240ms ease-standard; no translateY — calm elevation only'
  link-underline: 'underline draws from left over 150ms; on exit it fades rather than retracting'
  dropdown-open: 'mega-menu fades in and translates 4px downward over 240ms ease-entry; closes 150ms ease-exit'
  modal-open: 'fade + 8px upward translate over 240ms with scrim fade in parallel'
  reduced-motion: 'respects prefers-reduced-motion: reduce — all translates become instant, opacity transitions preserved, shadow transitions preserved at full duration'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  subtle: 'rgba(0,0,0,0.04) 0 1px 2px 0'              # header lift, default low elevation
  soft: 'rgba(0,0,0,0.08) 0 8px 24px 0'               # card hover, dropdown
  medium: 'rgba(0,0,0,0.14) 0 16px 40px 0'            # hero media frame, elevated panel
  strong: 'rgba(0,0,0,0.22) 0 24px 56px 0'            # rare deep modal / takeover overlay
  ring: '0 0 0 2px #1434CB'
  philosophy: 'Visa uses shadows as functional elevation, not atmosphere. Shadows are tight (8–24px blur), low-opacity (4–14%), and pure-black-tinted so they sit neutrally against the bright blue palette without colour-bleeding. Cards default to a hairline border, then trade the border for a soft shadow on hover. There is no glow, no halo, no diffuse cushioning — the visual language is closer to print plates than to neumorphism, but the print plates are warmer and friendlier than the 2014 brand''s austere navy.'

accessibility:
  contrast-text-on-bg: 21.0          # #000000 on #FFFFFF — AAA (pure-black-on-white is the maximum)
  contrast-text-on-brand: 8.4        # #FFFFFF on #1434CB — AAA
  contrast-text-on-yellow: 14.9      # #000000 on #FCC015 — AAA (black-on-yellow; white-on-yellow is FORBIDDEN — fails AA at 1.7:1)
  contrast-link: 8.4                 # #1434CB on #FFFFFF — AAA
  contrast-mute: 6.6                 # #5B5B5B on #FFFFFF — AA at body
  focus-ring: '2px solid #1434CB with 2px outline-offset'
  reduced-motion-honored: true
  touch-target-min: 44
  keyboard-nav: 'Tab cycles utility bar → main nav links → mega-menu trigger (Enter opens) → sign-in CTA → hero CTAs (yellow pill before secondary) → content links → cards (focus surrounds whole card if clickable) → footer columns. Skip-link present.'
  aria-patterns: 'mega-menu uses aria-expanded on trigger and role="menu" on panel; cards that wrap a full link use a single anchor with descriptive aria-label rather than nested links; the Visa wordmark SVG carries an aria-label of "Visa" rather than being aria-hidden.'
  screen-reader: 'yellow badge text ("New", "Premium") is read inline with the card title; eyebrow labels are part of the heading group, not announced separately; the yellow pill CTA label is announced exactly as visible — no alternate phrasing.'

dark-mode: null   # Light-only — Visa's 2026 brand commits to the white canvas with bright-blue + yellow chrome. The light-gray footer (`#F7F7F7`) provides structural surface contrast, not a separate mode. The brand explicitly retired the dark-navy footer that previous brand books carried.

lineage:
  summary: |
    Visa's 2026 design language sits at the intersection of three
    lineages: the bright-primary fintech vocabulary of companies like
    Wise and Revolut (saturated mid-blue + accent yellow, pill CTAs,
    light-weight body type), the multi-script global-signage tradition
    of brands like IATA (custom multi-script type families engineered
    for legibility across writing systems), and the
    infrastructure-utility restraint of legacy payment-network design
    (chromatic discipline, no gradients, functional shadows). The
    result is a brand that reads as both modern (the pills, the
    lightweight body, the yellow CTA) and institutional (the white
    canvas, the chromatic restraint, the multi-script type system).
    Where the 2014-era Visa brand chose deep-navy rectangles and
    weight-400 body on a white canvas with a gold flag glyph, the
    2026 Visa chose bright cobalt-blue pills, weight-300 light body,
    a retired flag glyph, and a light-gray footer.
  influences:
    - name: Mastercard
      role: Direct peer and chromatic counterpoint — Visa defines itself partly by NOT being Mastercard. Mastercard chose warm cream + circles + MarkForMC 450; Visa chose bright white + pills + visa-font-latin 300.
      url: https://www.mastercard.com
    - name: American Express
      role: Deep-navy peer in the payment-network space; Visa shares the blue palette family but has moved markedly brighter and rejects the aspirational luxury register.
      url: https://www.americanexpress.com
    - name: Wise
      role: Modern fintech that demonstrates the bright-primary-blue + pill-CTA + light-weight-body vocabulary at scale; Visa's 2026 brand absorbs the same register and adds the yellow ceremonial accent.
      url: https://wise.com
    - name: Revolut
      role: Another modern fintech peer working in the bright-blue + pill-CTA register; demonstrates that the visual vocabulary scales across payments, banking, and consumer finance.
      url: https://www.revolut.com
    - name: Chase
      role: US issuing-bank peer; navy + serifed-sans corporate-banking register. Visa shares the blue palette family but uses a brighter, more cosmopolitan tone and a humanist sans rather than a serif.
      url: https://www.chase.com
    - name: Stripe
      role: Modern fintech counterpoint; Visa rejects Stripe's gradient density and purple palette but absorbs its commitment to a single-family typographic system and to functional soft elevation shadows.
      url: https://stripe.com
    - name: IATA
      role: International airline trade body whose signage and typographic systems exemplify multi-script global-utility design — same lineage as Visa's custom visa-font-latin multi-script approach.
      url: https://www.iata.org
    - name: Pentagram
      role: General reference for the approach of restrained chromatic systems anchored by one or two brand colours.
      url: https://www.pentagram.com
---

## 1. Visual Theme & Atmosphere

Visa's live experience reads less like a sober annual report and more like a global signage system that has decided to be **cheerful about it**. The canvas is unwarmed white, but the chrome that sits on top of it is saturated and confident — a single load-bearing **Visa Blue** (`#1434CB`), bright and mid-tone, slightly cobalt rather than indigo, carries the wordmark, every primary CTA, the active nav state, every focus ring, and every inline link. The second voice is a clean **Visa Yellow** (`#FCC015`) — appearing on hero pill CTAs like "See the world" on the homepage, pairing only ever with pure-black text, and reserved for the single most attention-seeking action on a flagship page. The third voice is a calm light-gray (`#F7F7F7`) on the footer and on stat-card surfaces — a deliberate retreat from the navy-footer brand of years past. The whole system, in 2026, is brighter and friendlier than the 2014-era Visa brand book that many designers still carry in their heads.

The dominant geometric gesture is **the pill**. Primary CTAs are 30px-radius stadium pills with `16px 24px 18px` padding (the asymmetric 18px bottom balances the optical centre of the custom visa-font-latin typeface — a detail you only notice when you change it). The secondary outlined CTA is a pill. The yellow ceremonial CTA is a pill. The category chip is a pill. The badge is a pill. Even the standalone search input on the homepage is a full pill. Cards step down to 12px-radius rectangles, hero media frames sit at 16px, and form controls hover at 8px — but anything that takes a click, anything that is unambiguously *an action*, lives at 30px or full-pill radius. This is the brand's strongest geometric signal: Visa wants its interactive surfaces to feel **rounded and approachable**, not orthogonal and austere.

Typography is rendered in **visa-font-latin-regular**, Visa's proprietary multi-script type family engineered for the brand's global remit (200+ markets, multiple writing systems). The letterforms have open apertures, balanced stroke contrast, and a quality of "designed to look the same in Latin, Cyrillic, Devanagari, and CJK" — clearly engineered for signage and consumer recognition as much as for screen. The weight that does most of the body work is **300 (light)** at 16px / 1.55 line-height on pure-black `#000` text — an unusually light reading weight that gives long-form prose a softer cosmopolitan voice without losing legibility against the white canvas. Headlines step up to H1 at 32px / weight 700, which is markedly smaller than the navy 40–80px display sizes that the previous brand book described. The page is read at human scale, not at signage scale.

The supporting chromatic restraint: there are **no gradients in the core UI**. Visa Blue is flat. Visa Yellow is flat. White is flat. Photography brings warmth and texture (cards in markets, contactless taps, people travelling, the iconic "See the world" travel imagery), but the chrome — the buttons, the cards, the navigation, the footer — is engineered to feel like ink on paper. Where the 2014 brand chose deep navy as the band of authority, today's Visa chose **bright blue as the colour of confidence** and yellow as the colour of welcome.

**Key Characteristics:**
- Pure white canvas (`#FFFFFF`) — never tinted, never warmed, the default page background
- **Visa Blue** (`#1434CB`) as the load-bearing chromatic anchor — CTA fill, headline accent, focus ring, inline link, active nav state (VDS class `vs-bg-primary`)
- **Visa Yellow** (`#FCC015`) reserved for hero pill CTAs ("See the world") and at most one ceremonial pill per page — always paired with pure-black text
- **Pill geometry throughout interactive surfaces**: 30px radius on all CTAs, full-pill on chips/badges/search, with asymmetric `16px 24px 18px` padding for optical balance with the custom font
- **visa-font-latin-regular** custom multi-script family across all text — body at 300 (light) weight, headlines at 600/700
- Body text in pure black `#000` at 16/300 — a brighter, friendlier reading register than the 2014 brand's heavy near-black ink
- Light-gray footer `#F7F7F7` (NOT navy) — the single biggest departure from the previous brand book
- Flat surfaces throughout — no gradients in chrome; photography carries the warmth
- Tight low-opacity pure-black shadows (4–14%) — functional elevation, not atmospheric halo
- The Visa wordmark stands alone — the 2014-era gold flag / wing glyph has been retired

## 2. Color Palette & Roles

### Primary
- **Visa Blue** (`#1434CB`) [→ `--brand`]: the bright mid-tone blue that does almost every job — primary CTA fill, wordmark, active nav indicator, headline accent, focus ring, inline link colour. VDS class `vs-bg-primary` / `vs-btn-primary`. The single most identifying colour in the system. Slightly cobalt rather than indigo — saturated and confident, never sombre
- **Visa Yellow** (`#FCC015`) [→ `--brand-yellow`]: the ceremonial yellow pill that hosts the homepage hero CTA ("See the world") and the rare flagship-product CTA. Clean golden-yellow with no orange bias and no amber depth — must read as "sun" not "mustard"
- **White** (`#FFFFFF`) [→ `--bg`]: the canvas. Pure, unwarmed, the default surface for every page

### Brand & Dark
- **Visa Blue** (`#1434CB`): also serves as the structural dark surface when needed — the rare Visa Blue takeover hero, the inverted dark card. The brand's "single band of confidence" rhythm comes from white canvas + blue chrome, not from a navy footer
- **Deeper Blue** (`#0F28A4`) [→ `--surface-deep`]: a step deeper than Visa Blue for pressed-state CTAs and ultra-dark hero contrasts. Used structurally, not as a brand colour

### Accent
- **Visa Yellow** (`#FCC015`): the single accent colour in the chrome. Used ceremonially — the hero pill, the rare premium badge, at most one yellow CTA per flagship page
- **Yellow Hover** (`#EAB000`) [→ `--brand-yellow-hover`]: a subtly deeper yellow for the yellow-CTA hover state. Same hue, ~6% darker
- **Note**: Visa never uses yellow for inline links, body accent, or eyebrow colour. Eyebrows are Visa Blue or Slate. Treating yellow as a body-text accent reads as a different brand altogether (more crypto-fintech-poster than payments network)

### Surface & Background
- **White** (`#FFFFFF`): the page canvas
- **Lifted White** (`#FAFAFA`) [→ `--bg-lifted`]: one step warmer for nested raised sections. Almost imperceptible difference — preserves "feels like white" while implying layering
- **Surface Soft** (`#F7F7F7`) [→ `--surface-soft`]: the light-gray surface used for the footer, stat panels, the optional utility bar, and any "facts and figures" zone. This is the same `#F7F7F7` that the live-site footer uses — gray, not navy
- **Surface Dark** (`#1434CB`) [→ `--surface-dark`]: Visa Blue used structurally as a dark surface — rare takeover hero, inverted feature cards

### Interactive
- **Link Blue** (`#1434CB`) [→ `--link-blue`]: inline links default to Visa Blue. Underlined on hover, not by default — the chromatic distinction is the link signal
- **Link Hover** (`#0F28A4`) [→ `--link-hover`]: hover state deepens the blue by one step. Same shift used for the primary CTA hover
- **Link Visited**: rare on marketing surfaces; the site largely suppresses visited state to maintain chromatic uniformity. On documentation pages, visited links pick up a slight desaturation

### Neutral Scale
- **Black** (`#000000`) [→ `--text`]: primary body and headline text on white. **Pure black, not a navy-tinted near-black** — the live site commits to maximum contrast and lets the bright blue carry the chromatic identity
- **Charcoal** (`#1A1A1A`) [→ `--text-charcoal`]: slightly softer near-black for long-form body copy
- **Graphite** (`#3D3D3D`) [→ `--text-graphite`]: deeper grey for inline body accents, breadcrumb separators
- **Slate** (`#5B5B5B`) [→ `--text-slate`]: muted secondary text — eyebrow alternative, helper text, disabled labels, metadata
- **Dust** (`#9C9C9C`) [→ `--text-dust`]: very muted gray for whisper text, disabled controls, low-priority labels

### Surface & Borders
- **Border** (`#E1E1E1`) [→ `--border`]: standard 1px hairline (neutral cool-gray). Used on cards by default, on inputs, on footer dividers
- **Border Soft** (`#EDEDED`) [→ `--border-soft`]: editorial dividers between sections — barely visible, the lightest delineation possible
- **Border Strong** (`#1434CB`) [→ `--border-strong`]: Visa Blue used on focus rings and select form borders
- **Border on Dark** (`rgba(255,255,255,0.24)`) [→ `--border-on-dark`]: white-at-low-opacity hairlines inside the rare blue takeover hero

### Shadow Colors
Visa shadows are **pure-black-tinted** (`rgba(0,0,0,...)`) rather than colour-biased. Against the bright Visa Blue palette, a navy-tinted shadow would colour-bleed and look like a halo; the pure-black at low opacity stays neutral and reads as honest elevation. Opacities sit at 4% / 8% / 14% / 22% across the four elevation levels.

### Semantic
- **Success** (`#1B7F4E`): rare confirmation green — used for "Application received" and similar terminal positive states. Deeply saturated forest green, never a bright tech-green
- **Warning** (`#B86A00`): advisory amber-brown — distinct from Visa Yellow by being noticeably darker and oranger. Used for "Action needed" banners. Critically, warning is NOT yellow — confusing the two would break the brand's chromatic discipline (a yellow warning would read as "look, here's a ceremonial CTA", which is the opposite of the intended signal)
- **Danger** (`#B3261E`): serious error red — distinct from any brand tone, used for blocking errors and security-sensitive states (e.g., "Card declined")
- **Info** (`#1434CB`): informational banners reuse Visa Blue — the same colour as links and primary CTAs, signalling "this is a Visa system message"

### Gradient System
Visa uses **no programmatic gradients in the core UI chrome**. The visual impression of depth comes from:
- **Photography** on hero frames and feature cards — full-bleed imagery of cards, contactless taps, travel, and global commerce
- **Soft elevation shadows** at 8–14% opacity that imply layering without ambient glow
- **The blue-pill-on-white contrast** itself — at `#1434CB` saturation, the pill reads as having its own weight against the white canvas, without needing a gradient to suggest dimension

## 3. Typography Rules

### Font Family
- **Primary**: `visa-font-latin-regular` — Visa's proprietary multi-script geometric sans, engineered for Latin, Cyrillic, Devanagari, CJK, and other writing systems used across Visa's 200+ markets. Used for every headline, body paragraph, button, nav link, and footer link on the page
- **Weight variants**: `visa-font-latin-light` (100), the same family at weight 300 (light), at 400 (regular), and at 600 (semi-bold)
- **Fallback stack**: `"Helvetica Neue", Arial, sans-serif` — Helvetica Neue is the closest commercial stand-in; Arial is the universal web-safe fallback
- **Mono fallback**: `"SF Mono", Menlo, Consolas, monospace` — used only in technical documentation contexts (developer portal), never in marketing chrome

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| Display hero | 64 | 700 | 1.05 (~67px) | -0.02em (-2%) | Global takeover hero — flagship campaign pages only |
| Display large | 48 | 700 | 1.08 (~52px) | -0.015em (-1.5%) | Section hero on dense product pages |
| H1 | 32 | 700 | 1.15 (~37px) | -0.012em (-1.2%) | **Live-site default H1** — 32/700 visa-font-latin-regular |
| H2 (section) | 28 | 600 | 1.2 (~34px) | -0.008em (-0.8%) | Section titles throughout body |
| H3 (card) | 22 | 600 | 1.25 (~27px) | -0.005em (-0.5%) | Titles inside feature and stat cards |
| H4 (subhead) | 18 | 600 | 1.3 (~23px) | 0 | Sub-section headers, large list item labels |
| Eyebrow | 12 | 600 | 1.0 | 0.10em (+10%) | Uppercase, Visa Blue or slate — paired ABOVE H1/H2 |
| Body lead | 18 | 300 | 1.55 (~28px) | 0 | Lead paragraph immediately following H1; light-weight cosmopolitan voice |
| Body | 16 | 300 | 1.55 (~25px) | 0 | **Live-site body** — 16/300 light visa-font-latin on pure black `#000` |
| Body small | 14 | 300 | 1.5 (21px) | 0 | Compact body, sidebars, dense info zones |
| Nav link | 15 | 400 | 1.0 | 0 | Regular weight, compact, no text-transform |
| Button label | 16 | 600 | 1.0 | 0 | Semi-bold on pill CTAs — heavy enough to balance the optical centre of the pill |
| Label | 13 | 400 | 1.4 (~18px) | 0 | Form field labels, small inline labels |
| Caption | 12 | 400 | 1.4 (~17px) | 0.02em (+2%) | Image captions, metadata strings |
| Footer link | 14 | 300 | 1.5 (21px) | 0 | Black-on-light-gray, light weight matches body |
| Footer header | 12 | 600 | 1.0 | 0.10em (+10%) | Uppercase column headers inside the gray footer |
| Legal micro | 11 | 300 | 1.45 (16px) | 0 | Footer legal small-print and disclosures |

### Principles

- **Body weight is 300 (light) — this is the load-bearing signature weight.** The previous Visa brand book described a 400-weight body; the live site does not. Body text runs at the light weight (300), which gives prose a softer, more cosmopolitan reading tone that fits the global-passport voice. Replacing 300 with 400 makes the page feel heavier and more bureaucratic — the wrong register for the 2026 brand
- **Headline tracking is mildly negative (-0.8% to -2%).** Tight enough to read as confident display type, loose enough to never feel cramped. The 64px hero takes -2% tracking; the 32px H1 takes -1.2%
- **Eyebrows are uppercase 12px at +10% tracking, and they are Visa Blue or Slate — never yellow.** Treating yellow as eyebrow colour pulls the page into "promotional flyer" territory; eyebrows should anchor visually to the blue CTAs, not to the ceremonial accent
- **One-family system, multiple weights.** No serif accent, no script, no secondary display family. The contrast comes from scale and weight (100 / 300 / 400 / 600), not from family mixing. The brand's "global passport" feel depends on this single-family discipline
- **Line-height ratio drops with size.** Display hero is 1.05, H1 is 1.15, H3 is 1.25, body is 1.55. Tight display, comfortable reading — same shape of curve as most editorial systems, but with markedly less aggression at the top end
- **Uppercase only on eyebrows, footer column headers, and captions.** No shouty section titles, no all-caps button labels, no all-caps tabs. The +10% tracking on uppercase is wide and confident; never compress it
- **Pill CTAs use button-label weight 600 (semi-bold) at 16px.** Slightly heavier than body for visual hierarchy, and heavy enough to optically centre inside the asymmetric `16px 24px 18px` padding. Pure-black on yellow, pure-white on blue

### Note on Font Substitutes

`visa-font-latin-regular` is proprietary and licensed for Visa's first-party use. When rebuilding without access to the originals:
- **Inter** (Google Fonts) at weights 300/400/500/600/700 is the closest open-source match — same humanist geometric proportions, multi-script support, similar x-height
- **Manrope** at weight 300 for body is a warmer alternative with similar metrics; works well for the cosmopolitan voice
- **Noto Sans** is the closest match for the multi-script breadth — Google's superfamily covers the same writing systems Visa's custom face targets
- **Helvetica Neue** is in Visa's declared fallback stack; usable but feels heavier than the live 300-weight body, missing the lightness
- Whichever substitute is used, preserve the **300-weight body** and the **mild negative letter-spacing on headlines** (-0.8% to -2%) — these are the load-bearing typographic decisions

## 4. Component Stylings

### Buttons

**`button-primary`** — Primary Visa Blue pill
- Background: Visa Blue (`#1434CB`)
- Text: White (`#FFFFFF`)
- Border: none
- Radius: **30px (pill)**
- Padding: **`16px 24px 18px`** — note the asymmetric 18px bottom that balances the optical centre of visa-font-latin
- Height: 52px (taller than the 2014 brand's 44px rectangle — pills want vertical room)
- Font: visa-font-latin-regular 16/600
- Default: solid Visa Blue stadium pill, no shadow
- Hover: background transitions to `#0F28A4` (one step deeper blue) over 150ms; no scale, no shadow lift
- Pressed: background steps to `#0A1E84`; no transform — Visa pills stay geometrically still
- Focus: 2px Visa Blue outline at 2px offset
- VDS class: `vs-btn-primary` (paired with `vs-bg-primary` for the fill colour)
- Use: every primary marketing CTA ("Explore our products", "Get started", "Sign in"), every "submit" or "continue" in forms

**`button-secondary`** — Outlined blue pill
- Background: White (`#FFFFFF`)
- Text: Visa Blue (`#1434CB`)
- Border: 1.5px solid Visa Blue
- Radius: 30px (pill)
- Padding: `16px 24px 18px`
- Height: 52px
- Font: visa-font-latin-regular 16/600
- Default: white surface with blue border and blue label
- Hover: background fills with `#F7F7F7` (the footer light-gray) over 150ms; border stays
- Pressed: background fills with `#E1E1E1`
- Use: secondary actions paired with a primary, or standalone utility CTAs

**`button-tertiary`** — Inline text-style action
- Background: transparent
- Text: Visa Blue (`#1434CB`)
- Border: none
- Padding: `16px 16px 18px`
- Font: visa-font-latin-regular 16/600
- Default: blue label with optional trailing arrow icon (`→`)
- Hover: label gains an underline that draws from the left over 150ms
- Use: inline "Read more", "See details", "View all" — never as the only CTA on a fold

**`button-yellow`** — Ceremonial yellow pill
- Background: Visa Yellow (`#FCC015`)
- Text: **Pure Black (`#000000`)** — NEVER white
- Border: none
- Radius: 30px (pill)
- Padding: `16px 24px 18px`
- Height: 52px
- Font: visa-font-latin-regular 16/600
- Hover: background deepens to `#EAB000`
- Use: the homepage hero "See the world" CTA, and at most one ceremonial yellow pill per flagship page (e.g., a premium-card promo, a flagship campaign action)
- **Critical**: white text on yellow reads at ~1.7:1 contrast and FAILS AA. Always black on yellow

**`button-on-dark`** — Inverted pill for Visa Blue surfaces
- Background: White (`#FFFFFF`)
- Text: Visa Blue (`#1434CB`)
- Border: none
- Radius: 30px (pill)
- Padding: `16px 24px 18px`
- Height: 52px
- Default: white pill with blue label on the rare blue takeover hero
- Hover: background fills with `#F7F7F7`; label stays Visa Blue
- Use: primary CTA when sitting on the blue takeover hero or inside a blue feature card

### Cards & Containers

**`card-feature`** — Standard white feature card
- Background: White (`#FFFFFF`)
- Border: 1px solid `#E1E1E1` (neutral cool-gray hairline)
- Radius: 12px (cards step DOWN from the 30px CTA pill — containers are calmer than actions)
- Padding: 32px desktop / 24px mobile
- Shadow: none by default
- Hover: border fades to transparent and `shadow-soft` (`rgba(0,0,0,0.08) 0 8px 24px 0`) appears over 240ms — calm elevation, no translate
- Content: usually an icon or small badge at top, H3 title, body copy at 16/300, and an optional tertiary CTA at bottom

**`card-stat`** — Stat / metric card
- Background: Surface Soft (`#F7F7F7`) — the same light-gray as the footer
- Border: none
- Radius: 12px
- Padding: 32px
- Content: large display number (32–48px weight 700 in Visa Blue), short descriptor below at 14/300 in slate
- Use: "facts and figures" panels showing volume processed, countries served, transactions per second

**`card-dark`** — Inverted blue card
- Background: Visa Blue (`#1434CB`)
- Text: White
- Border: none
- Radius: 16px
- Padding: 40px
- Content: white H2/H3, white body at 16/300, white-on-blue `button-on-dark` pill CTA
- Use: cross-sell takeovers and high-emphasis CTAs inside otherwise-white sections — provides a single saturated-blue beat in a long scroll

**`hero-media-frame`**
- Background: Visa Blue (`#1434CB`) or full-bleed photography
- Radius: 16px on all corners — calm rounded rectangle (the frame itself is a container, so it doesn't pill; the CTAs *inside* the frame do)
- Width: full content width (~1280px max) with ~32px gutters on either side
- Height: ~520–680px desktop
- Shadow: `shadow-medium` (`rgba(0,0,0,0.14) 0 16px 40px 0`) only when on a busy section — otherwise no shadow
- Content: H1 headline at 32/700 (or display-lg 48/700 on flagship) at left ~60%, hero imagery / video right; the ceremonial yellow pill CTA sits inline beneath H1

### Badges, Chips & Pills

**`chip-category`**
- Background: Surface Soft (`#F7F7F7`)
- Text: Visa Blue
- Radius: 9999px (**full pill** — chips inherit the brand's pill voice)
- Padding: 6px 14px
- Font: visa-font-latin-regular 13/500
- Use: category / topic chip on article cards, filter tags

**`badge-yellow`**
- Background: Visa Yellow (`#FCC015`)
- Text: Pure Black (NEVER white)
- Radius: 9999px (full pill)
- Padding: 4px 12px
- Font: visa-font-latin-regular 11/600 uppercase +10% tracking
- Use: "New", "Premium", "Featured" badges — at most one per card

**`badge-status`**
- Background: transparent or surface-soft
- Text: semantic colour (success/warning/danger)
- Radius: 9999px (full pill)
- Padding: 4px 12px
- Use: dashboard status indicators ("Active", "Pending", "Blocked")

### Inputs & Forms

**`input`** (text field)
- Background: White
- Text: Pure Black (`#000000`)
- Border: 1px solid `#E1E1E1`
- Radius: **8px** — form controls step down from the 30px CTA pill (inputs are surfaces for content, not actions, and the 8px keeps them visually anchored on the line of the page)
- Padding: 14px 16px
- Height: 48px
- Default: white surface with neutral-gray hairline border
- Focus: border becomes 2px Visa Blue and a 2px outline-offset ring of the same colour appears
- Error: border becomes 2px `#B3261E` (danger) and an inline error message appears below at 13/400
- Label: placed ABOVE the field, 13/400 in slate, never floating inside

**`input-search-hero`** (the standalone homepage search input)
- Same metrics as `input` but with `border-radius: 9999px` (full pill) — Visa's homepage search is a pill, matching the CTA voice
- Trailing magnifier icon, 48px diameter

**`select`**
- Same metrics as `input` but with right padding bumped to 40px to accommodate a chevron icon
- Native `<select>` restyled — custom chevron is decorative

**`checkbox`**
- Background: White (unchecked) / Visa Blue (checked)
- Border: 1.5px solid Slate (`#5B5B5B`) unchecked / 1.5px solid Visa Blue checked
- Radius: 4px (square-leaning — checkboxes resist the pill voice; their job is to clearly read as "checked / unchecked", and the square shape is part of that affordance)
- Size: 20×20px
- Checked: blue fill with white checkmark glyph
- Focus: same 2px blue ring at 2px offset

**`radio`**
- Same as checkbox but with full circular geometry
- Checked: 1.5px blue border with an 8px blue dot centred

### Navigation

**Header (default)**
- Container: full-width white surface flush at y=0
- Height: **72px** (slightly taller than the 2014 64px to give the pill CTAs vertical breathing room when they appear in the header)
- Border: `border-bottom: 1px solid #E1E1E1`
- Shadow: `shadow-subtle` (`rgba(0,0,0,0.04) 0 1px 2px 0`) on scroll only — flush by default
- Content: Visa wordmark at left (**no flag glyph — the wordmark stands alone**), primary nav links centred ("Personal", "Business", "Partners", "Visa Innovation"), sign-in pill CTA and locale selector at right
- Link spacing: ~32px gap between primary links
- Link style: pure black, weight 400, 15px, no underline, no pill surround until hover. Active state shows a Visa Blue underline below the link

**Utility Bar (optional, above header)**
- Background: Surface Soft (`#F7F7F7`) — the light-gray, NOT Visa Blue
- Text: pure black
- Height: 36px
- Content: locale picker on right, audience switcher ("Individuals / Businesses / Partners") on left
- Use: applied site-wide on global navigation, often suppressed on flagship campaign templates

**Mega Menu (dropdown)**
- Background: White
- Border: 1px solid `#E1E1E1`
- Radius: 12px corners (matches cards — dropdowns are containers, not pills)
- Padding: 32px 40px
- Shadow: `shadow-soft`
- Content: multi-column link grid — typically 3–4 columns of categorised links with an optional featured promotional panel on the right
- Open: fades in and translates 4px downward over 240ms ease-entry
- Close: 150ms ease-exit

**Mobile Nav**
- Header collapses to: Visa wordmark + hamburger
- Tap hamburger: full-screen white overlay with primary links stacked vertically at 20px each, locale picker at bottom

### Image Treatment

- **Aspect ratios used**: 16:9 (hero video / photography), 4:3 (article thumbnails), 3:2 (product card imagery), 1:1 (icon and avatar)
- **Full-bleed vs padded**: hero media frame is content-width with 32px gutters; feature card imagery is contained within the card padding; footer imagery is rare
- **Masking**: rounded rectangles with 12px radius matching the card it sits in, or 16px to match the hero frame. **No circular cropping** of feature imagery — circles read as Mastercard's territory, not Visa's
- **Lazy loading**: standard `loading="lazy"` with a white-tinted placeholder; no blur-up effect (the brand's flat-surface discipline rejects diffuse loading states)

### Footer

- Background: **Surface Soft (`#F7F7F7`)** — light gray, NOT Visa Blue (this is the single most visible departure from the 2014-era brand)
- Text: pure black `#000000`
- Padding: 64px horizontal / 64px top / 32px bottom
- Structure: 4–5 column link grid, each column with an uppercase header at 12/600 +10% tracking in pure black
- Column headers: pure black, uppercase, semi-bold
- Link rows: pure black, weight 300, 14px, ~12px vertical spacing
- Brand block: Visa wordmark in Visa Blue at the top-left of the footer (the wordmark stands alone — no flag/wing glyph)
- Bottom row (below 1px black-at-16%-opacity divider): copyright, privacy small-print, accessibility statement link, locale picker pill, four social icons (LinkedIn, X, Facebook, YouTube)
- No deeper-navy base strip — the footer is a single light-gray surface

## 5. Layout Principles

### Spacing System
- **Base unit**: 4px (tight grid — supports the dense pill-and-card cadence of the live site)
- **Scale**: 0 / 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 64 / 96 / 128
- **Section vertical padding**: ~96–128px between major sections on desktop; ~48–64px on mobile
- **Card internal padding**: 32px on desktop, 24px on mobile
- **Header**: flush at y=0, no floating margin — Visa commits to the structural top edge rather than the floating-pill nav gesture (the pills live *inside* the header, not as the header itself)

### Grid & Container
- **Max content width**: ~1280px centred with ~32px horizontal gutters minimum
- **Column pattern**: 12-column grid implied; practical layouts use 2-up (50/50), 3-up (33/33/33) for feature cards, 4-up (25/25/25/25) for stat panels, and asymmetric 8/4 for hero (headline + media)
- **Footer grid**: 4–5 equal columns on desktop, collapsing to single-column accordion on mobile

### Whitespace Philosophy

Visa treats whitespace as **structural padding**, not editorial silence. Sections are generously padded (96–128px vertical), cards are generously padded (32px internal), and the grid does not crowd. But the whitespace is not "magazine empty" — it's "global signage breathing room". You can always count the elements on screen; nothing is hidden behind atmosphere. The lightness comes from the body type (300-weight) and the light-gray surfaces, not from absence of content.

A typical section has:
- Eyebrow label (12/600 uppercase, Visa Blue) at top
- H2 section title immediately below at 28/600
- Lead body paragraph at body-lg (18/300)
- Grid of 3 feature cards or a hero media frame
- Optional inline tertiary CTA ("View all", "Learn more") or a primary pill CTA

The page reads in **declarative beats** rather than in narrative flow.

### Section Cadence

The homepage scroll pattern:
1. (Optional) Light-gray utility bar
2. White header with Visa wordmark (flush at top, 72px)
3. Hero — typically a Visa Blue takeover hero with H1 + ceremonial **yellow pill CTA** ("See the world") on photography, or a white hero with H1 + hero media frame
4. Stat panel — 3-up or 4-up cards on `#F7F7F7` light-gray with large display numerals in Visa Blue
5. Feature grid — 3-up white cards with hairline borders and 12px corners
6. Cross-sell — a single Visa Blue `card-dark` taking full content width, with an inline white-pill `button-on-dark` CTA
7. Editorial / content row — article cards with category pill chips
8. Light-gray footer (`#F7F7F7`) with 4–5 column grid

## 6. Shapes & Radius Scale

| Tier | Radius | Use |
|------|--------|-----|
| Micro | 4px | Checkboxes, decorative chips, fine inline controls (square-leaning affordances) |
| Small | 8px | Form inputs, selects — controls that hold *content*, not actions |
| Standard | 12px | Cards, panels, content containers, dropdown menus |
| Relaxed | 16px | Hero media frames, large feature blocks, `card-dark` |
| **Pill** | **30px** | **Primary, secondary, tertiary, yellow CTAs — Visa's signature pill radius with `16px 24px 18px` padding** |
| Full pill | 9999px | Chips, badges, search input, locale selector — the brand's full-pill voice |

The scale is **action-vs-container split**: anything you click is a pill (30px or full), anything that contains content is a calm rounded rectangle (12 or 16). The middle ground of 20px / 24px is absent — Visa doesn't reach for "slightly rounded" because it dilutes the pill voice. Compare to Mastercard's 6 / 20 / 40 / circle scale (editorial-stadium voice) and the 2014 Visa brand's 8 / 12 / 16 / pill scale (austere-rectangular voice); today's Visa lives at the **pill-and-card** intersection, where actions speak loudly and surfaces stay calm.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | No shadow | Default — 80% of surfaces sit directly on the white canvas |
| 1 | `rgba(0,0,0,0.04) 0 1px 2px 0` | Header on scroll, default tight elevation |
| 2 | `rgba(0,0,0,0.08) 0 8px 24px 0` | Card hover, dropdown, popover |
| 3 | `rgba(0,0,0,0.14) 0 16px 40px 0` | Hero media frame, elevated panel |
| 4 | `rgba(0,0,0,0.22) 0 24px 56px 0` | Rare; deep modal / takeover overlay |

### Shadow Philosophy

Visa uses shadows as **functional elevation**, not atmosphere. Shadows are tight (8–24px blur), low-opacity (4–22%), and **pure-black-tinted** (`rgba(0,0,0,...)`) — against the bright Visa Blue, a navy-tinted shadow would colour-bleed and read as a halo around the pill. The brand prefers hairline borders for default delineation and trades the border for a soft shadow on hover — this gives feature cards a "wakes up when you hover" quality without animating any geometry. There is no glow, no halo, no diffuse cushioning, no neumorphic inset. The visual language is closer to print plates than to skeuomorphic UI, but warmer and friendlier than the 2014 brand's austere navy treatment.

### Decorative Depth
- **The yellow pill CTA on the blue takeover hero** is the single piece of high-contrast attention — yellow on blue is the brand's loudest combination, and it does its work without any shadow or glow
- **Photography** on hero frames carries warmth and softness that the chrome refuses to imitate
- **The white-canvas / light-gray-footer transition** at the page base reads as a calm horizontal seam rather than a colour drop — the footer is gray, not dark

## 8. Interaction & Motion

### Easing Curves
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — colour, opacity, and shadow transitions
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal and overlay entries
- **Entry**: `cubic-bezier(0.0, 0, 0.2, 1)` — dropdown / mega-menu open
- **Exit**: `cubic-bezier(0.4, 0, 1, 1)` — dropdown / overlay close

### Duration Buckets
- **Fast** (150ms): button hover colour shift, link underline draw
- **Standard** (240ms): card hover shadow, dropdown open, modal open
- **Slow** (320ms): hero media subtle parallax, page-section reveal
- **Cinematic** (600ms): rare hero crossfade on campaign templates

### Per-Component Motion

**Primary pill button**
- Hover: background colour transitions from `#1434CB` to `#0F28A4` over 150ms ease-standard; no scale, no shadow lift
- Pressed: background steps to `#0A1E84` over 100ms; no transform — Visa pills stay geometrically still
- Focus: 2px Visa Blue outline at 2px offset (instant, no animation)

**Yellow pill button**
- Hover: background transitions from `#FCC015` to `#EAB000` over 150ms ease-standard; no scale
- Pressed: background steps to a deeper amber `#D49A00` briefly; no transform
- Focus: 2px Visa Blue outline at 2px offset — note the focus ring is blue, not yellow, to preserve the brand's primary focus colour

**Feature card**
- Hover: hairline border fades to transparent and `shadow-soft` appears over 240ms ease-standard
- No translateY, no scale — calm elevation only
- Click: brief inward compression to 99% scale over 100ms, then settle

**Inline link**
- Hover: underline draws from the left over 150ms ease-standard
- On exit: underline fades over 150ms rather than retracting from the right

**Mega-menu dropdown**
- Open: fades in and translates 4px downward over 240ms ease-entry
- Close: 150ms ease-exit (faster than open — standard motion practice)

**Modal**
- Open: fade + 8px upward translate over 240ms ease-emphasized; scrim fades in parallel
- Close: same in reverse over 150ms

**Hero media frame**
- No hover transform — the 16px-radius container stays put
- Video controls fade in over 200ms on hover

**Page navigation**
- Standard browser navigation, no page-transition framework
- Section reveals on scroll use `IntersectionObserver` + opacity fade (200ms) — never translate, never stagger-cascade

### Reduced Motion Strategy

`@media (prefers-reduced-motion: reduce)`:
- All translates become instant (modal entry, dropdown entry, section reveal)
- Opacity transitions preserved at full duration
- Shadow transitions preserved at full duration (functional, not decorative)
- Link underline animation becomes instant
- Hero parallax (if used) suppressed entirely

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | WCAG Level |
|------|-------|------------|
| `#000000` black on `#FFFFFF` white | 21.0:1 | AAA (maximum) |
| `#FFFFFF` white on `#1434CB` Visa Blue | 8.4:1 | AAA |
| `#000000` black on `#FCC015` Visa Yellow | 14.9:1 | AAA (black-on-yellow is the ONLY permitted combo) |
| `#FFFFFF` white on `#FCC015` Visa Yellow | 1.7:1 | **FAILS — forbidden** |
| `#1434CB` link on `#FFFFFF` | 8.4:1 | AAA |
| `#5B5B5B` slate on `#FFFFFF` | 6.6:1 | AAA at large, AA at body |
| `#000000` on `#F7F7F7` light-gray footer | 19.0:1 | AAA |

### Focus Indicators
- 2px solid `#1434CB` (Visa Blue) outline ring with 2px outline-offset
- Applied to all focusable: nav links, search input, primary/secondary/tertiary/yellow CTAs, cards, form fields, footer links
- The ring uses Visa Blue rather than the browser-default blue — preserves chromatic discipline
- On Visa Blue surfaces (takeover hero), focus ring switches to white at the same metrics
- On the yellow pill, focus ring remains Visa Blue (not yellow on yellow) for clarity

### ARIA Patterns
- Mega-menu trigger uses `aria-expanded` on the trigger button and `role="menu"` on the panel
- Cards that wrap a full link use a single anchor with descriptive `aria-label` rather than nested links
- The Visa wordmark SVG carries `aria-label="Visa"` rather than being aria-hidden — the wordmark is meaningful brand identification, not decoration
- Stat-card display numerals use `aria-label` that spells out the value ("3.4 billion transactions") to avoid screen reader misreading large numerals
- Yellow "New" / "Premium" badges are announced inline with the card title
- Eyebrow labels are part of the heading group, announced as part of the heading

### Keyboard Navigation
- Tab cycles: utility bar (if present) → main nav links → mega-menu trigger (Enter opens) → sign-in CTA → hero yellow pill (announced first, before secondary pills) → content links → cards (focus surrounds whole card if clickable) → footer columns
- Skip-link present at very top: "Skip to main content"
- Mega-menu: Escape closes; arrow keys navigate within the open menu
- Modal: focus-trap until dismissed; Escape closes
- Form: Enter submits when focus is on a button; Tab cycles fields in DOM order

### Screen Reader Hints
- Photography supplies meaningful `alt` (e.g., "Person paying with contactless Visa card at a market in Bangkok")
- Decorative-only photography uses `alt=""`
- Card-link `aria-label` describes the destination, not the image content
- The yellow pill CTA label ("See the world") is announced exactly as visible — no alternate phrasing or extra context
- Stat numerals are spelled out in `aria-label` to avoid screen reader number parsing issues

### Reduced Motion Handling
Detailed in §8. The system respects `prefers-reduced-motion: reduce` and disables translates while preserving opacity and shadow transitions for functional clarity.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | ≤640px | Header collapses to logo + hamburger; utility bar (if present) hides; hero stacks (headline above media); yellow pill CTA goes full-width below H1; feature cards stack 1-up; stat cards stack 1-up at full width; footer columns collapse to single-column accordion with chevron toggles |
| Tablet | 641–1023px | Header shows logo + 2–3 primary links + sign-in pill; hero remains 2-up but narrower; feature cards become 2-up; stat cards 2-up |
| Desktop | 1024–1279px | Full header with 4–5 primary nav links centred; hero 8/4 split (headline left, media right) with the yellow pill inline beneath H1; feature cards 3-up; stat cards 4-up |
| Wide | ≥1280px | Content max-width caps at ~1280px; gutters grow symmetrically; footer stretches to full viewport with content centred |

### Touch Targets
All interactive elements meet or exceed 44×44px. Pill CTAs are 52px tall by default — comfortably above the minimum. Form fields are 48px tall. The hamburger and mobile search icons are 48×48px. No link or button drops below 40px in any breakpoint. Footer links have generous vertical padding (~12px) to ensure tap accuracy on dense column grids.

### Collapsing Strategy
- **Header**: full nav → compact nav with hamburger. Header height remains 72px across breakpoints
- **Hero**: 8/4 split → stacked (headline above media frame); the yellow pill CTA goes full-width on mobile
- **Feature grid**: 3-up → 2-up → 1-up. Card padding compresses from 32px to 24px
- **Stat grid**: 4-up → 2-up → 1-up. Numeral size drops from 48px display to 32px H1
- **Footer**: 4–5 columns → single-column accordion. Each column header becomes a tap-toggle row

### Image Behavior
Hero media frames maintain their 16px radius at every breakpoint. Card imagery maintains the card's 12px radius. Photography uses `srcset` for resolution adaptation; `object-fit: cover` ensures consistent crop. No art direction crops — Visa uses the same image at every breakpoint, trusting the content composition.

### Container Queries
Used selectively for card grids — feature cards self-adjust their internal layout (icon-above-text vs icon-beside-text) based on container width rather than viewport width, allowing the same card to render densely in a sidebar and spaciously in a main column.

## 11. Content & Voice

### Tone

The voice is **cosmopolitan-but-functional**. Visa writes like a global payments infrastructure that has decided to be a friendly travel companion — present, capable, multilingual, and quietly proud of its 200+ market reach. Where Mastercard chose institutional-but-warm (a 60-year payments network with editorial polish), Visa chose **infrastructural-but-welcoming** (a 67-year payments network that wants to feel like a passport stamp, not a balance sheet). The 300-weight body type translates into prose that breathes — declarative but not heavy, confident but not corporate-grim. The brand voice has moved noticeably away from the 2014-era register; today's Visa is more "See the world" and less "Trusted by billions".

### Microcopy Patterns
- **Button verbs**: "See the world", "Explore our products", "Get started", "Sign in", "Continue", "Learn more" — institutional verbs softened by the occasional travel/discovery register
- **Headline structure**: declarative statements that mix scale with human invitation ("Everywhere you want to be", "See the world", "Powering connections across 200+ markets"); present-tense, often imperative-as-invitation
- **Body copy**: confident assertions backed by data, but lighter on weight and shorter on sentence; the 16/300 type encourages prose that doesn't fight its weight
- **Error messages**: precise and never apologetic — "Your card details could not be verified. Please check the card number and try again." Action-oriented, never "Oops!"
- **Success confirmations**: terse and professional — "Application received. We'll be in touch within 5 business days."
- **Security messaging**: explicit and reassuring without softening — "Your information is encrypted and protected by Visa's security standards"

### Empty States
Empty content blocks read formally with a touch of warmth: "There are no transactions to display yet." rather than "Nothing here yet!" or "Oh no, empty!" The brand has loosened slightly from the 2014 register but still resists playful empty-state copy — the voice has no comedic register.

### CTA Verb Conventions

Visa uses a mix of **institutional-imperative and travel-invitation verbs**:
- See the world *(hero invitation)*
- Explore our products
- Get started
- Sign in
- Apply now
- Learn more
- Continue
- View details
- Get in touch

It does *not* use:
- Sign up free (too trial-product)
- Try now (too aggressive)
- Join us! (too excited; punctuation rejected)
- Let's go! (too informal)
- Click here (too 2002)

## 12. Dark Mode & Theming

**Visa is light-only — no dark mode variant.** The brand commits to the white canvas as the primary surface; the rare Visa Blue takeover hero provides structural surface contrast within the light theme, not a separate mode. The chromatic identity *requires* the bright blue + yellow combination to read against white — inverting the system to dark mode would mute the bright blue (which only reads as "bright" on white) and the yellow CTA would shift from "ceremonial pill" to "highlighter colour".

### Theming Notes for Derivatives

If you are adapting this system for a brand that needs a true dark mode:
- Swap `#FFFFFF` white → `#0A0E2E` (a deep blue-black — preserves the cobalt bias)
- Swap `#000000` body text → `#FFFFFF` (white becomes body text)
- Swap `#FAFAFA` lifted white → `#141A3D` (slightly raised dark)
- Swap `#F7F7F7` light-gray footer → `#1A1D2E` (a calm dark-gray-blue)
- Visa Blue (`#1434CB`) shifts to `#4A5EFF` (a brightened version) for CTAs to maintain visibility on the dark surface
- Visa Yellow (`#FCC015`) holds — it reads on dark, and the contrast against the brightened blue is preserved
- Photography: shift toward darker-tone subjects (urban night commerce, evening contactless taps) so the inversion preserves chromatic balance
- Caution: the brand will not feel like Visa in dark mode — it will feel like a blue-and-yellow corporate template. Reserve dark-mode adaptation for non-Visa derivative projects only

## 13. Lineage & Influences

Visa's 2026 design language sits at the intersection of three lineages: the **bright-primary fintech vocabulary** of companies like Wise and Revolut (saturated mid-blue + accent yellow, pill CTAs, light-weight body type), the **multi-script global-signage tradition** of brands like IATA and the International Olympic Committee (custom multi-script type families engineered for legibility across writing systems), and the **infrastructure-utility restraint** of legacy payment-network design (chromatic discipline, no gradients, functional shadows). The result is a brand that reads as both *modern* (the pills, the lightweight body, the yellow CTA) and *institutional* (the white canvas, the chromatic restraint, the multi-script type system).

The peer payments network, Mastercard, holds a deliberately opposite position. Mastercard chose warm cream canvas + circular portraits + MarkForMC weight-450 body — an editorial-magazine register. Visa chose bright white canvas + pill CTAs + visa-font-latin weight-300 body — a global-signage register. Where Mastercard wants you to feel like you're reading a beautifully typeset annual report, Visa wants you to feel like you're navigating an international airport — clear, calm, multilingual, and slightly cheerful.

American Express, by contrast, occupies the **luxury-card** pole — deep blue with metallic accents, aspirational photography, "Membership has its privileges" voice. Visa shares the blue palette family but rejects the luxury-aspirational register entirely. Today's Visa Blue is brighter and more saturated than Amex's deep navy; the difference reads at a glance. Visa is the network *behind* the cards, not the card brand itself, and the design language reflects that infrastructural positioning. Stripe represents the modern payment-developer pole — purple gradients, rounded sans, developer-tool density; Visa rejects the gradients and the developer-density but absorbs Stripe's commitment to a single-family typographic system and to soft elevated shadows.

What Visa rejects:
- Mastercard-style circular portraits and orbital arcs (would dilute the brand's pill-and-card discipline)
- American Express-style deep-navy luxury aspiration (Visa is infrastructure, not status symbol — and today's Visa is markedly brighter than Amex's blue)
- Stripe-style purple gradients and developer-tool density (Visa serves consumers and merchants, not just developers)
- Cream / warm-tinted canvases (would break the bright-blue + yellow chromatic clarity)
- The 2014-era navy-rectangle Visa brand (rectangles read as austere now — the live brand has decisively moved to pill geometry)
- Material Design elevation tiers (shadows are functional, not lighting)
- Glassmorphism / frosted-glass effects
- Trendy gradient-heavy SaaS aesthetics

### Named Influences

- **Mastercard** — the direct peer and chromatic counterpoint. Visa defines itself partly by NOT being Mastercard: bright white vs warm cream, pills vs circles, visa-font-latin weight-300 body vs MarkForMC weight-450 body. https://www.mastercard.com
- **American Express** — the deep-navy peer in the payment-network space; Visa shares the blue palette family but has moved markedly brighter and rejects the aspirational luxury register. https://www.americanexpress.com
- **Wise** (formerly TransferWise) — a modern fintech that demonstrates the bright-primary-blue + pill-CTA + light-weight-body vocabulary at scale; Visa's 2026 brand absorbs the same register and adds the yellow ceremonial accent. https://wise.com
- **Revolut** — another modern fintech peer working in the bright-blue + pill-CTA register; demonstrates that the visual vocabulary scales across payments, banking, and consumer finance. https://www.revolut.com
- **Chase** — the US issuing-bank peer; navy + serifed-sans corporate-banking register. Visa shares the blue palette family but uses a brighter, more cosmopolitan tone and a humanist sans rather than a serif. https://www.chase.com
- **Stripe** — the modern fintech counterpoint; Visa rejects Stripe's gradient density and purple palette but absorbs its commitment to a single-family typographic system and to functional soft elevation shadows. https://stripe.com
- **IATA** — the international airline trade body whose signage and typographic systems exemplify multi-script global-utility design — same lineage as Visa's custom visa-font-latin multi-script approach. https://www.iata.org
- **Pentagram corporate identity work** — general reference for the approach of restrained chromatic systems anchored by one or two brand colours. https://www.pentagram.com

## 14. Do's and Don'ts

### Do

- Use pure white (`#FFFFFF`) as the default body background — never tinted, never warmed
- Anchor every page chromatically with **Visa Blue (`#1434CB`)** — wordmark, primary CTA, footer wordmark, focus ring, inline link, active nav indicator
- Reserve **Visa Yellow (`#FCC015`)** for the hero ceremonial pill ("See the world") and at most one yellow pill per page — always with pure-black text
- Set primary CTAs as **30px-radius pills** with `16px 24px 18px` padding, 52px tall, white text in visa-font-latin-regular 16/600 (VDS `vs-btn-primary`)
- Use **12px radius for cards**, **16px for hero media frames**, **8px for form inputs** — surfaces step DOWN from the 30px CTA pill
- Set body copy at **weight 300 (light)** in pure black `#000` — this is the load-bearing signature weight, not 400
- Set H1 at **32px / weight 700** — markedly smaller than the 2014 brand's 40–80px display sizes, in line with the live site
- Apply mild negative letter-spacing on headlines (-0.8% to -2%) for confident display density
- Use uppercase + 10% tracking only on 12px eyebrows and footer column headers
- Pair the Visa wordmark with **nothing else** — the gold flag / wing glyph has been retired; the wordmark stands alone
- Use a single `visa-font-latin-regular` family across the entire system — no serif accent, no script, no display family
- Default hover states to colour transitions (no scale, no shadow lift) — Visa pills stay geometrically still
- Build page rhythm with three surface tones: white canvas → light-gray (`#F7F7F7`) → Visa Blue takeover
- Use **pure-black text on the yellow pill** — `#000000` on `#FCC015` is the ONLY permitted combination
- Apply shadows tightly (8–24px blur, 4–14% opacity, **pure-black-tinted**) for functional elevation
- Anchor the footer in a single **light-gray** `#F7F7F7` surface — NOT navy

### Don't

- Don't use cream or warmed white as the page canvas — that's Mastercard's territory
- Don't use rectangular CTAs (radius ≤16px) — Visa CTAs are pills at 30px or full-pill, not rectangles. **The 2014-era 8px-radius rectangle is obsolete**
- Don't use deep navy `#1A1F71` as the brand colour — the live brand colour is the brighter `#1434CB`. The deep navy reads as the previous decade's Visa
- Don't use a navy footer — the live footer is light-gray `#F7F7F7`. A navy footer reads as the 2014 brand
- Don't pair the wordmark with a gold flag / wing glyph — the flag has been retired from the live brand
- Don't crop service / feature imagery into circles — circular portraits read as Mastercard
- Don't draw orbital arcs or connective lines between cards — Visa's grid is orthogonal, not constellation
- Don't use yellow for inline links, body accent, eyebrow text, or as a "second brand colour" in the chrome — yellow is ceremonial only
- Don't place white text on the yellow pill — it fails AA contrast at 1.7:1; black text only
- Don't use gradient fills in chrome — buttons, cards, navigation, footer all stay flat
- Don't mix typefaces — no serif accent, no script, no secondary display family
- Don't use body weight 400 or 450 — Visa's live brand uses **300 (light)**; the previous 400 weight reads heavier than the current voice
- Don't drop hard shadows or glow effects — all elevation uses tight blur with low opacity, pure-black-tinted
- Don't use the yellow colour for warning / advisory states — warning is `#B86A00` (a distinctly darker amber-brown); a yellow warning would read as "look, here's a ceremonial CTA"
- Don't crowd the yellow accent — at most one yellow pill per page, at most one yellow badge per card
- Don't shrink primary pill CTAs below 52px height — the asymmetric `16px 24px 18px` padding requires the vertical room
- Don't use `border-radius: 8px` or `12px` on CTAs — those radii belong to inputs and cards, not actions

## 15. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: **Visa Blue (`#1434CB`)** — bright saturated mid-tone blue, slightly cobalt, the load-bearing chromatic anchor (VDS `vs-bg-primary`)
- Yellow ceremonial CTA: **Visa Yellow (`#FCC015`)** — clean golden-yellow, paired only with pure-black text, used for the hero pill
- Background: **White (`#FFFFFF`)** — pure, unwarmed, the default canvas
- Lifted surface: Lifted White (`#FAFAFA`) — barely-perceptible warmer step for nested sections
- Light-gray surface: Surface Soft (`#F7F7F7`) — used for the footer, stat panels, and the optional utility bar
- Heading text: **Pure Black (`#000000`)**
- Body text: **Pure Black (`#000000`)** at weight 300 (light)
- Muted text: Slate (`#5B5B5B`)
- Inline link: Visa Blue (`#1434CB`) with hover at `#0F28A4`
- Border / Outline: neutral-gray (`#E1E1E1`) at 1px on cards and inputs
- Focus ring: Visa Blue (`#1434CB`) at 2px with 2px offset
- Footer: **Light-gray (`#F7F7F7`)** with pure-black text — NOT navy

### Example Component Prompts

- "Create a primary Visa pill CTA: Visa Blue (`#1434CB`) background, white text, **30px border-radius**, **`16px 24px 18px` padding** (asymmetric — the 18px bottom balances the optical centre of visa-font-latin), 52px tall, visa-font-latin-regular 16/600. Hover transitions background to `#0F28A4` over 150ms with no scale or shadow lift. Focus shows a 2px Visa Blue outline at 2px offset."
- "Create the ceremonial yellow pill CTA: Visa Yellow (`#FCC015`) background, **pure-black (`#000000`)** text, 30px border-radius, `16px 24px 18px` padding, 52px tall. Used for the hero 'See the world' button. Hover deepens to `#EAB000`. NEVER white text on yellow — contrast fails AA at 1.7:1."
- "Design a feature card: white background, 1px solid `#E1E1E1` hairline border, 12px border-radius, 32px internal padding. On hover, fade the border to transparent and apply `rgba(0,0,0,0.08) 0 8px 24px 0` shadow over 240ms. Contains an icon at top, H3 title (22/600 pure black), body paragraph (16/300 pure black), and an optional tertiary text-link CTA at bottom."
- "Build a flush header: 72px tall, full viewport width, white background, 1px solid `#E1E1E1` bottom border. Visa wordmark **standing alone** at left (no flag glyph), primary nav links centred (Personal / Business / Partners / Visa Innovation) with 32px gap, sign-in pill CTA + locale selector at right. Links are 15/400 pure black with no underline; hover draws an underline from the left over 150ms in Visa Blue."
- "Create a Visa Blue takeover hero: full content-width container (~1280px max), 16px border-radius, Visa Blue (`#1434CB`) background, ~600px tall. H1 headline at 32/700 white at left (~60% width), full-bleed photography or video at right. Yellow pill CTA (`button-yellow`) sits inline beneath H1 with the ceremonial label (e.g., 'See the world')."
- "Design a stat card: light-gray surface (`#F7F7F7`), no border, 12px border-radius, 32px padding. Large display numeral at top (48/700 Visa Blue), short descriptor below at 14/300 Slate (`#5B5B5B`). Use `aria-label` to spell out the value for screen readers (e.g., '3.4 billion transactions')."
- "Create the Visa footer: **light-gray (`#F7F7F7`)** background — NOT navy — with pure-black text, 64px top and horizontal padding. 4-column link grid with uppercase column headers at 12/600 +10% tracking. Visa wordmark in Visa Blue at top-left of the footer (wordmark alone, no flag glyph). 1px black-at-16%-opacity divider above the bottom row, which contains copyright, privacy links, accessibility statement, locale picker pill, and four social icons."

### Iteration Guide

When refining existing screens generated with this design system:
1. Focus on ONE component at a time — Visa's chromatic discipline punishes parallel surface changes
2. Reference specific colour names AND hex codes from this document — "Visa Blue" alone is ambiguous, "Visa Blue (`#1434CB`)" is exact
3. Use natural language ("bright cobalt blue pill", "ceremonial yellow", "light-gray footer breath") alongside technical values
4. Default backgrounds to pure white (`#FFFFFF`), not cream or off-white — this single change separates Visa from Mastercard
5. **Default CTAs to pill geometry at 30px radius with `16px 24px 18px` padding** — this single decision separates 2026 Visa from 2014 Visa
6. Use weight **300** for body — resist the urge to weight 400 or 450 even if the text feels slightly light. The 300 is the load-bearing signature
7. Reserve Visa Yellow for the single hero ceremonial pill and at most one yellow badge per card — count yellow elements; if more than two appear per fold, demote the lower-priority one to Visa Blue
8. When in doubt about a hover state, change colour without changing geometry — Visa pills stay geometrically still
9. Set inline links to Visa Blue (`#1434CB`) with underline-on-hover; never use yellow for links
10. Use the **light-gray footer (`#F7F7F7`)** — if you find yourself reaching for navy, you're rebuilding the 2014 brand, not the 2026 brand

---

*Theme-toggle audit: score=0, signals=[none]*
