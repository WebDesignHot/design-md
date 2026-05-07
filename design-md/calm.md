---
name: Calm
tagline: Signature `#0066ff` deep blue + Aktiv Grotesk + meditation-deep cool atmospheric calm.
updated_at: 2026-05-05T14:31:15+12:00
published_at: 2026-05-05T14:31:15+12:00
author: webdesignhot
source_url: https://www.calm.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [media, saas]
tags: [dark, wellness, sans, atmospheric, photographic, meditation, calm, blue, contemplative]
preview_swatch: ['#0a1f3a', '#0066ff', '#ffffff']
related: [headspace, oura, apple-music]
description: 'Calm''s storefront is the canonical meditation-deep cool canvas — a deep navy ground (`#0a1f3a`) with off-white type (`#fafafa`) and the unmistakable **Calm blue** (`#0066ff`) that carries the wordmark, every primary CTA, the breathing-pulse animation, and link-hover. Type runs **Aktiv Grotesk** (Dalton Maag''s mid-century-rooted geometric sans) at modest 500–700 weights for hero display (40–72px), borrowed from clean Swiss-modernist tradition — large, confident, with negative tracking. Cards round at 12–16px, CTAs are 9999px full pills, and the entire surface is engineered to evoke twilight contemplation: full-bleed photographic nature scenes (forests at dusk, ocean at night, mountain ranges at sunset), star-field gradient overlays, breathing animations, and a signature cool-blue voltage that reads as the digital equivalent of looking at a still lake at twilight.'

colors:
  bg: '#0a1f3a'                  # deep navy canvas — Calm's signature ground
  bg-strong: '#040c1a'           # deepest navy for footer + dark bands
  bg-elev: '#13294a'             # elevated card surface
  bg-elev-strong: '#1c3458'      # elevated dropdown, modal
  bg-twilight: '#1a2c52'         # twilight gradient mid-stop
  bg-dawn: '#2a3d6e'             # dawn gradient lighter end
  surface: '#13294a'
  surface-soft: '#1c3458'        # disabled fields
  surface-strong: '#243d65'      # divider band
  surface-light: '#fafafa'       # rare light-mode storefront band (legal, careers)
  brand: '#0066ff'               # Calm blue — wordmark, primary CTA, focus ring
  brand-hover: '#0052d6'         # deeper blue on hover
  brand-active: '#003fa3'        # pressed state
  brand-pale: '#a8c8ff'          # disabled CTA tint
  brand-deep: '#001f5c'          # deepest blue for editorial accent
  brand-soft: '#0d2456'          # blue-tinted dark surface
  brand-glow: '#3380ff'          # softer blue for glow halos
  text: '#fafafa'                # primary off-white text — slightly warm cream-tint
  text-strong: '#ffffff'         # heading punch
  text-muted: '#a8b3c5'          # secondary metadata — cool muted
  text-soft: '#7d8a9e'           # caption text
  text-faint: '#5a6678'          # disabled, microcopy
  text-on-brand: '#ffffff'       # white on blue CTA
  text-on-light: '#0a1f3a'       # navy on rare light bands
  link: '#fafafa'                # default off-white link
  link-hover: '#0066ff'          # link hover flips to brand blue
  border: '#243d65'              # default 1px hairline on dark navy
  border-soft: '#1c3458'         # subtle dividers
  border-strong: '#365182'       # focus state hairline
  border-input: '#4a648a'        # form input outline
  star-white: '#ffffff'          # star-field decorative dots
  star-blue: '#a8c8ff'           # blue-tinted star variant
  twilight-purple: '#7c5fb8'     # twilight gradient purple stop
  dusk-pink: '#e88fa8'           # rare dusk-pink accent on certain photographic hero overlays
  scrim: 'rgba(4,12,26,0.8)'     # modal backdrop — deepest navy at 80%
  shadow-card: 'rgba(0,0,0,0.5)'
  shadow-elev: 'rgba(0,0,0,0.7)'
  shadow-blue-glow: 'rgba(0,102,255,0.25)'  # blue halo on featured/breathing
  success: '#42d68a'             # gentle teal-green for completion states
  warning: '#ffba43'             # warm amber, distinct from brand
  danger: '#ff6b6b'              # validation error coral
  info: '#0066ff'                # info matches brand blue

typography:
  display:
    family: '"Aktiv Grotesk", "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: ['ss01']
  body:
    family: '"Aktiv Grotesk", "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"Aktiv Grotesk", monospace'
    weights: [500]
  scale:
    hero-display:    { size: 72, weight: 600, lineHeight: 1.0,  tracking: '-2.5px',   family: display, opentype: ['ss01'] }
    hero-display-md: { size: 56, weight: 600, lineHeight: 1.04, tracking: '-2px',     family: display, opentype: ['ss01'] }
    page-title:      { size: 48, weight: 600, lineHeight: 1.08, tracking: '-1.5px',   family: display, opentype: ['ss01'] }
    section-head:    { size: 36, weight: 600, lineHeight: 1.15, tracking: '-1px',     family: display, opentype: ['ss01'] }
    sub-section:     { size: 24, weight: 600, lineHeight: 1.2,  tracking: '-0.5px',   family: display }
    feature-title:   { size: 20, weight: 600, lineHeight: 1.3,  tracking: '-0.25px',  family: body }
    body-md:         { size: 16, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 500, lineHeight: 1.5,  tracking: '0',        family: body }
    caption:         { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0.02em',   family: body }
    micro:           { size: 11, weight: 600, lineHeight: 1.27, tracking: '0.1em',    family: body, transform: 'uppercase' }
    pull-quote:      { size: 32, weight: 500, lineHeight: 1.3,  tracking: '-0.5px',   family: display }
    button-cta:      { size: 16, weight: 600, lineHeight: 1.0,  tracking: '0',        family: body }
    button-cta-large: { size: 18, weight: 600, lineHeight: 1.0,  tracking: '0',        family: body }
    nav-link:        { size: 15, weight: 500, lineHeight: 1.0,  tracking: '0',        family: body }
    eyebrow:         { size: 12, weight: 600, lineHeight: 1.0,  tracking: '0.16em',   family: body, transform: 'uppercase' }
    duration-tag:    { size: 13, weight: 500, lineHeight: 1.0,  tracking: '0',        family: body }
    price-display:   { size: 36, weight: 700, lineHeight: 1.0,  tracking: '-0.75px',  family: body }
    sleep-story-attr: { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0.04em',   family: body, transform: 'uppercase' }

radius:
  micro: 4
  sm: 8
  md: 12        # form inputs
  lg: 16        # cards default
  xl: 24        # modals, hero promo bands
  pill: 9999    # CTAs, search bar

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160]

layout:
  page-width: 1200
  prose-width: 720
  header-height: 80
  masthead-height: 80

components:
  button-cta:
    bg: '#0066ff'
    color: '#ffffff'
    radius: 9999
    padding: '14px 32px'
    height: 48
    font: button-cta
    use: 'Try Calm Free, Start, Subscribe — every primary action.'
  button-cta-hover:
    bg: '#0052d6'
    color: '#ffffff'
    use: 'Hover state — deeper blue.'
  button-cta-large:
    bg: '#0066ff'
    color: '#ffffff'
    radius: 9999
    padding: '18px 36px'
    height: 56
    use: 'Hero CTAs — slightly larger 56px height for prominence.'
  button-secondary:
    bg: 'transparent'
    color: '#fafafa'
    border: '1px solid #fafafa'
    radius: 9999
    padding: '13px 31px'
    height: 48
    use: 'Learn More, See Plans — outline off-white-on-navy.'
  button-tertiary-text:
    bg: 'transparent'
    color: '#0066ff'
    use: 'Inline brand-blue links — underline on hover.'
  meditation-card:
    bg: '#13294a'
    color: '#fafafa'
    radius: 16
    padding: '0'
    use: 'Meditation/sleep tile — full-bleed photographic image (forest/ocean/sky), title + duration + new-tag in 16px padding bottom.'
  sleep-story-card:
    bg: '#13294a'
    color: '#fafafa'
    radius: 16
    padding: '0'
    use: 'Sleep story tile — celebrity-narrator photograph, title 18/600, narrator attribution in 13/500 uppercase, duration tag.'
  feature-card:
    bg: '#13294a'
    color: '#fafafa'
    radius: 16
    padding: '32px'
    use: 'Editorial feature tile with icon or photographic detail, 22/600 title, 16/400 body.'
  pricing-card:
    bg: '#13294a'
    color: '#fafafa'
    radius: 16
    padding: '40px'
    border: '1px solid #243d65'
    use: 'Membership tier card — tier name in 22/600, price in 36/700 tabular, feature list, primary blue pill CTA.'
  hero-photographic-band:
    bg: '#0a1f3a'
    color: '#fafafa'
    use: 'Full-bleed photographic hero (forest at dusk, ocean at night, mountain at sunset), navy gradient overlay bottom-up, headline 56–72/600 off-white, blue pill CTA.'
  breathing-pulse:
    bg: '#0066ff'
    color: '#ffffff'
    radius: 9999
    use: 'Animated breathing-pulse circle (scale 1.0 → 1.15 → 1.0 over 5s) — used on meditation features. Slower than Headspace breathing-circle (4s) — Calm trusts even more breath.'
  star-field-overlay:
    bg: 'transparent'
    use: 'Decorative star-field dot overlay on photographic hero scenes — small 2–4px white dots scattered in twilight gradients.'
  search-bar:
    bg: '#13294a'
    color: '#fafafa'
    radius: 9999
    height: 48
    border: '1px solid #4a648a'
    focus-ring: '2px solid #0066ff'
    use: 'Pill search bar — navy fill, brand-blue focus.'
  text-input:
    bg: '#13294a'
    color: '#fafafa'
    radius: 12
    height: 48
    padding: '14px 16px'
    border: '1px solid #4a648a'
    focus: '2px solid #0066ff'
    use: 'Form input — slim 12px radius, brand-blue focus.'
  duration-tag:
    bg: 'rgba(250,250,250,0.15)'
    color: '#fafafa'
    radius: 9999
    padding: '4px 12px'
    use: 'Meditation duration pill — semi-transparent off-white surface on dark, 13/500 off-white text.'
  testimonial-card:
    bg: '#13294a'
    color: '#fafafa'
    radius: 16
    padding: '40px'
    use: 'Pull-quote testimonial — large 32/500 quote, name + role in 13/500 muted, optional photographic background.'
  modal:
    bg: '#13294a'
    color: '#fafafa'
    radius: 24
    padding: '40px'
    use: 'Centered dialog over 80% deepest-navy scrim.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-breathing: 'cubic-bezier(0.65, 0, 0.35, 1)'   # breath-rhythm calm curve
  ease-tide: 'cubic-bezier(0.45, 0, 0.55, 1)'        # ocean-tide ease for slow background gradient shifts
  duration-fast: 240
  duration-standard: 400
  duration-slow: 600
  duration-breathing: 5000
  duration-tide: 12000
  cta-press: 'CTA bg deepens 0066ff → 003fa3 + scale 1.0 → 0.97 over 240ms on :active'
  card-hover: 'card border lightens 243d65 → 365182 + subtle blue-glow halo over 400ms'
  breathing-pulse: 'blue circle scales 1.0 → 1.15 → 1.0 with ease-breathing over 5000ms infinite — slower than Headspace (4s), Calm trusts more breath'
  twilight-shift: 'photographic hero background gradient shifts deep-navy → twilight-purple → dawn-blue over 12000ms tide ease infinite — the brand''s signature ambient motion'
  star-twinkle: 'individual stars in star-field opacity 0.3 → 1.0 → 0.3 over 2400ms randomly staggered'
  page-fade: 'navy ground fades opacity 0 → 1 + body translateY(8px → 0) over 400ms on page enter'
  reduced-motion: 'respects prefers-reduced-motion: reduce — breathing-pulse, twilight-shift, star-twinkle, page-fade suppress to opacity-only.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1200
  wide: 1440

shadows:
  ambient: 'rgba(0,0,0,0.3) 0 4px 12px'
  hover-card: 'rgba(0,0,0,0.5) 0 12px 32px'
  modal: 'rgba(0,0,0,0.7) 0 24px 64px'
  blue-glow: '0 0 32px rgba(0,102,255,0.25)'  # blue halo on featured/breathing/hover
  ring: '0 0 0 2px #0066ff'

accessibility:
  contrast-text-on-bg: 13.8          # #fafafa on #0a1f3a — AAA
  contrast-text-on-brand: 5.4        # #ffffff on #0066ff — AA at body sizes
  contrast-muted-on-bg: 6.8          # #a8b3c5 on #0a1f3a — AA
  contrast-link-hover: 4.5           # #0066ff on #0a1f3a — AA at body sizes
  focus-ring: '2px solid #0066ff + 2px outline offset (brand-blue ring)'
  reduced-motion-honored: true
  touch-target-min: 48
  keyboard-nav: 'Tab moves masthead → search → category nav → meditation grid → footer; arrow keys inside category mega-menu.'

dark-mode: 'native'   # Calm is dark-first across the storefront. Light bands appear scarcely on legal/careers/about pages.
---

## 1. Visual Theme & Atmosphere

Calm's storefront is the canonical meditation-deep cool canvas — a **deep navy** ground (`#0a1f3a`) with off-white type (`#fafafa`) and the unmistakable **Calm blue** (`#0066ff`) that carries the chromatic voltage of the brand. The navy is **specifically tuned to evoke twilight** — not the pure black of a void, not the warm ink of Headspace's enterprise bands, but the deep blue of a sky 30 minutes after sunset. Every page sits on this twilight ground; the only places where the canvas inverts to light are rare careers/legal/about pages.

The chromatic identity is **off-white on twilight-navy with a deep-blue voltage**. The Calm blue (`#0066ff`) is a saturated electric blue — closer to royal blue than to cobalt or sapphire. It carries the wordmark, every primary CTA, the breathing-pulse animation, link-hover, focus ring, and the blue-glow halos. Beyond the brand blue, Calm deploys a **twilight gradient palette** — deep navy → twilight purple (`#7c5fb8`) → dawn blue (`#2a3d6e`) — for ambient background gradients that slowly shift over 12-second tide cycles.

Type runs **Aktiv Grotesk** (Dalton Maag's 2010 geometric sans, descended from Akzidenz Grotesk and Helvetica's Swiss-modernist lineage) at modest 500–700 weights for hero display (40–72px) — borrowed straight from clean Swiss-modernist tradition. Where Headspace uses Apercu's humanist warmth, Calm uses Aktiv Grotesk's clean geometric precision — the difference between a friendly children's-book illustrator (Headspace) and a Scandinavian functionalist (Calm). The hero "Calm your mind. Change your life." runs Aktiv Grotesk 72/600 with `-2.5px` tracking — confident, precise, geometrically calm.

Photography is **the design**. Every page leans on full-bleed photographic nature scenes — forests at dusk, ocean at night, mountain ranges at sunset, twilight skies with subtle star fields. The photography is sourced from cinematographers who specialise in low-light landscape work; the imagery is colour-graded toward navy-purple twilight tones to match the brand canvas. Sleep stories are anchored on celebrity-narrator portraits (Matthew McConaughey, Idris Elba, Stephen Fry), shot with cinematic warm-rim-light against deep navy backgrounds.

Shape language is full-pill for CTAs (9999px) and **moderately soft** for cards (16px radius). Calm sits between Headspace (24px cards) and WHOOP (8px cards) — the 16px card radius signals "soft consumer-app, but not playful". Cards are 16px, modals at 24px, form inputs at 12px. Buttons are 48–56px tall pills, search bars are pills.

The **breathing-pulse** animation is the brand's signature motion. A blue circle scales 1.0 → 1.15 → 1.0 with ease-breathing over **5000ms** (slower than Headspace's 4-second loop — Calm trusts even more breath, mirroring deep-meditation breath rhythms). The **twilight-shift** ambient background gradient is the brand's most distinctive ambient motion — over a 12-second cycle, the photographic hero background slowly shifts through twilight tones, evoking the experience of watching the sky change at dusk.

**Key Characteristics:**
- Deep navy canvas (`#0a1f3a`) — twilight sky 30 minutes after sunset, not pure black
- Single brand voltage: Calm blue (`#0066ff`) — saturated royal blue, electric not muted
- Twilight gradient palette: deep-navy → twilight-purple → dawn-blue — ambient background shifts
- Aktiv Grotesk (Swiss-modernist geometric sans) at 500–700 weights — clean precision over Headspace's warmth
- Full-bleed photographic nature scenes (forests/ocean/mountains at twilight) with navy gradient overlays
- Star-field decorative overlays on photographic heroes — small 2–4px white dots scattered in twilight
- 16px card radius — between Headspace's 24px and fitness peers' 8px
- 9999px full-pill CTAs at 48–56px height with white-on-blue text
- Breathing-pulse at 5000ms scale loop — slower than Headspace (4s), trusts more breath
- Twilight-shift ambient gradient at 12s tide cycle — the brand's signature ambient motion
- Sleep stories anchored on celebrity-narrator portraits (McConaughey, Idris Elba, Stephen Fry)

## 2. Color Palette & Roles

### Primary
- **Twilight Navy** (`#0a1f3a`): default canvas — sky 30 minutes after sunset
- **Deepest Navy** (`#040c1a`): footer + dark bands
- **Card Surface** (`#13294a`): elevated cards
- **Card Strong** (`#1c3458`): elevated dropdowns, modals
- **Off-White** (`#fafafa`): primary text — slightly warm cream tint
- **White** (`#ffffff`): hero display max punch
- **Light Surface** (`#fafafa`): rare light-mode storefront band

### Brand
- **Calm Blue** (`#0066ff`): wordmark, every primary CTA, breathing-pulse, link hover, focus ring, blue-glow halos — the single brand voltage
- **Brand Hover** (`#0052d6`): deeper blue on hover
- **Brand Active** (`#003fa3`): pressed state
- **Brand Pale** (`#a8c8ff`): disabled CTA tint
- **Brand Deep** (`#001f5c`): deepest blue for editorial accent
- **Brand Soft** (`#0d2456`): blue-tinted dark surface
- **Brand Glow** (`#3380ff`): softer blue for glow halos

### Twilight Gradient Palette
Used for ambient background gradients and photographic hero overlays.

- **Twilight Navy** (`#0a1f3a`): canvas / cycle start
- **Twilight Mid** (`#1a2c52`): twilight mid-stop
- **Twilight Purple** (`#7c5fb8`): twilight purple stop (rare, used in dramatic skies)
- **Dawn Blue** (`#2a3d6e`): dawn lighter end
- **Dusk Pink** (`#e88fa8`): rare dusk-pink accent on certain photographic hero overlays

### Star-Field Decorative Palette
- **Star White** (`#ffffff`): default star
- **Star Blue** (`#a8c8ff`): blue-tinted star variant

### Interactive
- **Link** (`#fafafa`): default off-white link with underline
- **Link Hover** (`#0066ff`): hover flips off-white to brand blue
- **Disabled** (`#5a6678`): disabled text and outline
- **Focus** (`#0066ff`): 2px brand-blue ring with 2px offset

### Neutral Scale
- **Off-White** (`#fafafa`) — primary text
- **White** (`#ffffff`) — heading punch
- **Muted** (`#a8b3c5`) — secondary metadata, body sub-copy (cool muted)
- **Soft** (`#7d8a9e`) — caption, faint counts
- **Faint** (`#5a6678`) — disabled, microcopy
- **Border** (`#243d65`) — default 1px hairline on dark navy
- **Border Soft** (`#1c3458`) — subtle dividers
- **Border Strong** (`#365182`) — focus state hairline
- **Border Input** (`#4a648a`) — form-input outline

### Surface & Borders
- **Twilight Navy** (`#0a1f3a`) — default canvas
- **Card** (`#13294a`) — elevated cards
- **Card Strong** (`#1c3458`) — elevated dropdowns, modals
- **Strong** (`#243d65`) — divider band
- **Brand Soft** (`#0d2456`) — blue-tinted dark surface
- **Light** (`#fafafa`) — rare light-mode band

### Shadow Colors
Calm uses **deep dark shadows** with a signature **blue-glow halo** on featured cards, breathing-pulse, and hover states.

- `rgba(0,0,0,0.3) 0 4px 12px` — ambient
- `rgba(0,0,0,0.5) 0 12px 32px` — hover card
- `rgba(0,0,0,0.7) 0 24px 64px` — modal
- `0 0 32px rgba(0,102,255,0.25)` — blue halo on featured/breathing/hover

### Semantic
- **Success Teal** (`#42d68a`): "Session complete", "Streak +1" — gentle teal-green
- **Warning Amber** (`#ffba43`): warm advisory, distinct from cool brand
- **Danger Coral** (`#ff6b6b`): validation error coral
- **Info Blue** (`#0066ff`): doubles as brand blue

## 3. Typography Rules

### Font Family

**Primary**: `Aktiv Grotesk` (Dalton Maag, 2010). Fallback chain: `"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif`. Aktiv Grotesk is a contemporary geometric sans descended from Akzidenz Grotesk and Helvetica's Swiss-modernist lineage. The typeface carries the entire Calm scale.

**Fallback**: `Inter` is the closest open-source substitute, with no letter-spacing adjustment needed — Aktiv Grotesk and Inter share similar proportions.

**Mono**: not a distinct family.

**OpenType features**: `ss01` enabled on display headlines.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| hero-display | Aktiv Grotesk | 72 | 600 | 1.0 | -2.5px | ss01 | "Calm your mind. Change your life." |
| hero-display-md | Aktiv Grotesk | 56 | 600 | 1.04 | -2px | ss01 | Sub-hero |
| page-title | Aktiv Grotesk | 48 | 600 | 1.08 | -1.5px | ss01 | "Sleep Stories", "Meditate" page H1 |
| section-head | Aktiv Grotesk | 36 | 600 | 1.15 | -1px | ss01 | "Featured collections", "Today's pick" |
| sub-section | Aktiv Grotesk | 24 | 600 | 1.2 | -0.5px | — | Sub-section heads |
| feature-title | Aktiv Grotesk | 20 | 600 | 1.3 | -0.25px | — | Card title |
| body-md | Aktiv Grotesk | 16 | 400 | 1.6 | 0 | — | Default body — generous leading for calm rhythm |
| body-lg | Aktiv Grotesk | 18 | 400 | 1.6 | 0 | — | Lead paragraphs |
| body-sm | Aktiv Grotesk | 14 | 500 | 1.5 | 0 | — | Secondary metadata |
| caption | Aktiv Grotesk | 13 | 500 | 1.4 | 0.02em | — | Footer micro-text |
| micro | Aktiv Grotesk | 11 | 600 | 1.27 | 0.1em | uppercase | "FEATURED", "SLEEP STORIES" |
| pull-quote | Aktiv Grotesk | 32 | 500 | 1.3 | -0.5px | — | Testimonial quote |
| button-cta | Aktiv Grotesk | 16 | 600 | 1.0 | 0 | — | "Try Calm Free", "Start" |
| button-cta-large | Aktiv Grotesk | 18 | 600 | 1.0 | 0 | — | Hero CTAs |
| nav-link | Aktiv Grotesk | 15 | 500 | 1.0 | 0 | — | Masthead — "Meditate", "Sleep", "Music", "Body" |
| eyebrow | Aktiv Grotesk | 12 | 600 | 1.0 | 0.16em | uppercase | "FEATURED COLLECTION" — wide tracking signature |
| duration-tag | Aktiv Grotesk | 13 | 500 | 1.0 | 0 | — | "10 MIN", "5 MIN" duration pills |
| price-display | Aktiv Grotesk | 36 | 700 | 1.0 | -0.75px | — | "$69.99/yr" pricing |
| sleep-story-attr | Aktiv Grotesk | 13 | 500 | 1.4 | 0.04em | uppercase | "NARRATED BY MATTHEW MCCONAUGHEY" |

### Principles

- **Aktiv Grotesk's geometric precision.** The Swiss-modernist proportions give Calm its clean, contemplative voice. Where Headspace's HS Apercu has humanist warmth, Aktiv Grotesk has geometric calm.
- **Modest weight at display.** Hero 600, never 800+. Headlines are confident but contemplative.
- **Wide tracking on eyebrows.** Eyebrows use `+0.16em` letter-spacing on uppercase 12/600 — wider than typical, the brand's signature spaciousness applied to typography.
- **Generous body leading at 1.6.** Same as Headspace — both meditation brands trust extra breath in body type to support calm reading rhythm.
- **Mixed-case button labels.** "Try Calm Free", "Start" — sentence-case, never uppercase. Soft conversational voice.
- **Negative tracking on display.** Hero 72/600/-2.5px. Compresses headlines into confident type-blocks.
- **Sleep-story attribution in uppercase.** Sleep stories use uppercase 13/500 with `+0.04em` tracking for the narrator credit — the cinematic-credit aesthetic borrowed from film posters.

## 4. Component Stylings

### Buttons

**`button-cta`** — Calm-blue (`#0066ff`) fill, white text in 16/600 sentence-case, **9999px full-pill** radius, 14×32px padding, 48px height. The most common CTA: "Try Calm Free", "Start", "Subscribe", "Begin". Hover deepens to `#0052d6`. Active to `#003fa3` with press scale 1.0 → 0.97.

**`button-cta-large`** — same as button-cta but at 56px height, 18px text, 18×36px padding. Used for hero CTAs.

**`button-secondary`** — transparent fill, 1px off-white outline, off-white text in 16/600. Same 9999px pill, same 48px height. Used for "Learn More", "See Plans".

**`button-tertiary-text`** — plain brand-blue text, no surface. Underline on hover.

### Cards

**`meditation-card`** — meditation/sleep tile. Card surface (`#13294a`), 16px radius, no internal padding around the photographic image, 16px padding for metadata. Stack: full-bleed photographic nature image (forest/ocean/sky/mountain at twilight) with rounded corners following the card radius, title in 18/600 off-white ("10 minutes of evening calm"), duration tag pill ("10 MIN") + optional NEW tag, optional teacher attribution.

**`sleep-story-card`** — sleep story tile. Card surface (`#13294a`), 16px radius. Stack: celebrity-narrator photograph (warm-rim-lit cinematic portrait, e.g., McConaughey, Idris Elba) with the duration overlaid bottom-right of the photo, title in 18/600 off-white ("Wonder of the World"), narrator attribution in 13/500 uppercase off-white with `+0.04em` tracking ("NARRATED BY MATTHEW MCCONAUGHEY"), 14/500 muted body description.

**`feature-card`** — editorial feature tile. Card surface (`#13294a`), 16px radius, 32px padding. Stack: icon or photographic detail, title in 22/600 off-white, body in 16/400, optional inline brand-blue link.

**`pricing-card`** — membership tier card. Card surface (`#13294a`), 16px radius, 40px padding, 1px `#243d65` border. Tier name in 22/600, price in 36/700 ("$69.99/yr"), feature checklist with brand-blue checkmarks, primary blue pill CTA pinned at the bottom.

**`hero-photographic-band`** — full-bleed photographic hero. Underlying photo (forest at dusk, ocean at night) with navy gradient overlay bottom-up to 60% opacity. Hero headline 56–72/600 off-white anchored centre or bottom-left, blue pill CTA pinned beneath. Optional decorative star-field overlay.

**`testimonial-card`** — pull-quote testimonial. Card surface (`#13294a`), 16px radius, 40px padding. Pull quote in 32/500 off-white. Name + role in 13/500 muted. Optional photographic background.

**`breathing-pulse`** — blue breathing-pulse circle. 240px diameter at default, scales 1.0 → 1.15 → 1.0 over 5000ms with breathing-rhythm easing — slower than Headspace's 4-second loop. Used on meditation features and "Take a deep breath" callouts.

**`star-field-overlay`** — decorative star-field of small 2–4px white dots scattered in a twilight gradient. Each star slowly twinkles (opacity 0.3 → 1.0 → 0.3 over 2400ms randomly staggered).

### Badges, Tags, Pills

**`duration-tag`** — meditation duration pill. Semi-transparent off-white surface (`rgba(250,250,250,0.15)`), off-white text in 13/500, 9999px radius, 4×12px padding. "10 MIN", "5 MIN".

**`new-tag`** — brand-blue pill (9999px, 2×8px padding) with "NEW" in 13/500 white.

**`eyebrow`** — uppercase 12/600 off-white with `+0.16em` tracking. No surface.

**`featured-tag`** — uppercase 11/600 brand-blue text on transparent surface, signals editorial featured content.

### Inputs / Forms

**`text-input`** — card surface (`#13294a`), 1px `#4a648a` hairline, 12px radius (slim utility), 48px height, 14×16px padding, off-white text in 16/400. Stacked label above in 12/600 uppercase muted. On focus the border thickens to 2px brand blue.

**`search-bar`** — pill (9999px) search bar. Card surface, 1px `#4a648a` hairline, 48px height, magnifier icon flush left in muted, brand-blue focus ring on `:focus-visible`.

### Navigation

**`masthead`** — full-width navy bar (matches canvas) with no bottom border, 80px height. Wordmark flush left in off-white (the lowercase "calm." with the period — Calm's iconic punctuation choice). Nav links centred in 15/500 off-white. Account / Sign In / Try Free pill CTA flush right.

**`mega-menu-flyout`** — opens from category dropdown; card surface, 16px radius, 1px `#243d65` hairline, hover shadow.

### Modals & Toasts

**`modal`** — centred dialog over an 80%-opacity deepest-navy scrim. Card surface, 24px radius, 40px padding, modal shadow.

**`toast`** — bottom-centre. Card fill, 16px radius, 1px `#243d65` hairline, off-white text, brand-blue icon for celebration toasts.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128 · 160`
- Section padding (vertical): **96–160px** between major bands — Calm gives the most breath of any meditation peer
- Card internal padding: **0** around photographic images; **32–40px** for editorial feature cards
- Gutters: **24–32px** between cards in grid view

### Grid & Container

- Max content width: **1200px** centred
- Homepage: full-bleed photographic hero with twilight-shift gradient → 4-up meditation-card grid → 3-up sleep-story-card grid → testimonial band → pricing 3-up → footer with starfield
- Sleep library: 4-column grid at desktop with 24px gutters

### Whitespace Philosophy

Calm trusts even more breath than Headspace. Hero sections run 96–160px vertical padding; feature cards round at 16px with 32–40px internal padding. The discipline mirrors the meditation experience itself — slow, deliberate, unhurried.

### Section Cadence

Pages stay on the deep-navy canvas across the entire experience. Rhythm comes from **photographic-density alternation**: full-bleed photographic hero with twilight-shift → 4-up meditation grid (each tile its own photographic mini-scene) → editorial feature cards → testimonial band → pricing.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 4px | Dense table corners |
| Small | 8px | Inline pills, dense badges |
| Form | 12px | Form inputs |
| Card | 16px | Default cards — meditation, sleep story, feature, pricing, testimonial |
| Hero | 24px | Hero promo bands, modals |
| Pill | 9999px | CTAs, search bar, duration tags, NEW tags, breathing-pulse |

The 16px card radius positions Calm between Headspace (24px playful) and fitness peers (8px utility) — soft consumer-app, not athlete-equipment, but not full-playful.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Body, masthead, footer |
| 1 — Ambient | `rgba(0,0,0,0.3) 0 4px 12px` | Default cards |
| 2 — Hover | `rgba(0,0,0,0.5) 0 12px 32px` | Cards on hover, dropdowns |
| 3 — Modal | `rgba(0,0,0,0.7) 0 24px 64px` | Centred dialogs |
| 4 — Blue Glow | `0 0 32px rgba(0,102,255,0.25)` | Featured cards, breathing-pulse, hover |
| 5 — Scrim | `rgba(4,12,26,0.8)` | Modal backdrop in deepest navy |

### Shadow Philosophy

Calm's depth strategy is **dark-on-dark with brand-blue glow** halos on featured cards, the breathing-pulse, and hover states. The blue-glow is set at 25% opacity — louder than Oura's gold-glow because the brand voice is more electric. The brand position: depth comes from photographic contrast and selective blue-glow, never atmospheric multi-layer.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry
- **Breathing**: `cubic-bezier(0.65, 0, 0.35, 1)` — breath-rhythm calm curve
- **Tide**: `cubic-bezier(0.45, 0, 0.55, 1)` — ocean-tide ease for slow gradient shifts

### Durations
| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 240ms | Hover colour swap, focus ring |
| Standard | 400ms | Card hover, modal enter |
| Slow | 600ms | Page transitions |
| Breathing | 5000ms | Breathing-pulse scale loop (5-second deep-breath rhythm) |
| Tide | 12000ms | Twilight-shift ambient gradient cycle |
| Star Twinkle | 2400ms | Individual star opacity fade |

### Per-Component Recipes

- **CTA hover**: bg `#0066ff` → `#0052d6` over 240ms.
- **CTA press**: bg → `#003fa3` + scale 1.0 → 0.97 over 240ms on `:active`.
- **Card hover**: card border lightens `#243d65` → `#365182` + subtle blue-glow halo over 400ms.
- **Breathing pulse**: blue circle scales 1.0 → 1.15 → 1.0 with ease-breathing over 5000ms infinite — slower than Headspace, supports deeper breath rhythm.
- **Twilight shift**: photographic hero background gradient slowly cycles through deep-navy → twilight-purple → dawn-blue over 12000ms tide ease infinite — Calm's signature ambient motion.
- **Star twinkle**: individual stars in star-field opacity 0.3 → 1.0 → 0.3 over 2400ms randomly staggered.
- **Page enter**: navy ground fades opacity 0 → 1 + body translateY(8px → 0) over 400ms.
- **Modal enter**: scrim fades over 240ms, dialog scales from 0.96 → 1.0 + opacity over 400ms emphasized.

### Page Transitions

Page-to-page navigation uses gentle navy-fade transitions over 400ms. Twilight-shift ambient animations continue across pages for visual continuity.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. Breathing-pulse, twilight-shift, star-twinkle, and page-fade all suppress to opacity-only or static.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #fafafa off-white on #0a1f3a navy | 13.8 | AAA |
| #ffffff white on #0066ff blue CTA | 5.4 | AA at body sizes |
| #a8b3c5 muted on #0a1f3a | 6.8 | AA |
| #0066ff link hover on #0a1f3a | 4.5 | AA at body sizes |
| #fafafa on #13294a card | 12.3 | AAA |
| #fafafa on #1c3458 card-strong | 11.1 | AAA |

The white-on-blue CTA pair sits at 5.4 — AA at body sizes. Calm uses 16/600 button text, comfortably above the AA threshold.

### Focus Indicators

Focus ring is **2px solid `#0066ff`** with 2px outline-offset. The deep-navy canvas gives the brand-blue ring high luminance contrast (~4.5+).

### ARIA Patterns

- **Meditation card**: entire card is `<a>` with verbose `aria-label` — "10 minutes of evening calm meditation, 10 minutes, with Tamara Levitt."
- **Sleep story card**: `aria-label` includes narrator — "Wonder of the World sleep story, narrated by Matthew McConaughey, 30 minutes."
- **Breathing pulse**: `role="img"` with `aria-label="Breathing exercise visualization"`, `aria-live="off"`.
- **Star-field overlay**: `aria-hidden="true"` (purely decorative).
- **Mega-menu**: `role="menu"` with arrow keys, Escape closes.

### Keyboard Navigation

- Masthead: Tab moves wordmark → nav → account → CTA
- Meditation grid: Tab through tiles in document order
- Modal: Tab is trapped; Esc closes
- Mega-menu: arrow keys navigate

### Screen Reader Hints

Verbose `aria-label` on icon-only buttons. Decorative star-fields and ambient gradients are `aria-hidden="true"`.

### Reduced Motion

All transitions degrade to opacity-only or static. Breathing-pulse, twilight-shift, and star-twinkle suppress to static.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Masthead collapses to wordmark + Try Free pill + hamburger; meditation grid 2-up; pricing stacks |
| Tablet | 640–1024px | Full masthead nav (collapsed mega-menu); meditation grid 3-up |
| Desktop | 1024–1200px | Full nav with mega-menu; meditation grid 4-up |
| Wide | 1200–1440px | Content caps at 1200px |

### Touch Targets

- Primary CTAs: 48px (regular) / 56px (large) height — meets AAA
- Meditation tile: entire ~280×320 tile is tappable
- Search bar: 48×48

### Collapsing Strategy

- Masthead: nav hides first; only wordmark + Try Free + hamburger remain at <640px
- Meditation grid: 4 → 3 → 2; gutters compress 32px → 24px → 16px
- Hero typography: 72px → 56px → 40px display compression
- Pricing: 3-up stacks to 1-up at <1024px

### Image Behavior

Photographic nature scenes use `aspect-ratio: 16/9` with `object-fit: cover`. Sleep-story celebrity portraits use `aspect-ratio: 4/5` with `object-fit: cover`.

### Container Queries

Used in meditation card: when narrows below ~240px, the duration tag wraps to a second line.

## 11. Content & Voice

### Tone

Quiet, reassuring, contemplative. Calm's voice is "the gentle teacher who speaks softly because they don't need to raise their voice" — second-person ("Calm your mind", "Take a deep breath"), measured ("In just 10 minutes a day"), and never urgent. The brand consistently positions Calm as **the deepest meditation partner** — more contemplative than Headspace, more atmospheric than its peers.

### Microcopy Patterns

- **Button verbs**: "Try Calm Free", "Start", "Begin", "Listen", "Subscribe" — sentence-case, gentle
- **Error message recipe**: reassuring — "Something didn't quite work. Take a breath and try again."
- **Success confirmations**: peaceful — "Session complete. Notice how you feel."
- **Empty states**: inviting — "Your meditations will appear here once you begin."
- **Sleep story copy**: cinematic — "Drift off as Matthew McConaughey reads the wonder of nightfall in the desert."

### Empty States

Empty meditation history: "Your sessions will appear here. Try the 'Daily Calm' to begin →"

Empty favorites: "Tap the heart on any session to save it."

Empty progress: "Your meditation patterns will appear after a few days."

### CTA Verb Conventions

- Primary: **Try Calm Free**, **Start**, **Begin**, **Listen**, **Subscribe**
- Secondary: **Learn More**, **See Plans**, **Watch**
- Tertiary: "View all collections", "See more sessions"
- Avoided: "Submit", "Click here", "Buy" (Calm prefers gentle invitation verbs)

## 12. Dark Mode & Theming

**Dark-native.** Calm's storefront is dark-first across the entire experience. The base canvas is twilight-navy `#0a1f3a`, every text element is off-white, every CTA is brand blue. There is no "light mode toggle" on the marketing site — the dark ground IS the brand.

**Light bands appear scarcely on legal/careers/about pages** (`#fafafa` ground with navy text) — these signal "operational page", not brand experience.

The Calm mobile app is dark-first and supports an even-deeper "Sleep mode" with reduced blue-light emission. The web is a faithful mirror of the dark-app experience.

## 13. Lineage & Influences

Calm's visual lineage runs through three traditions: **Apple Music's deep-canvas photographic aesthetic** (full-bleed nature photography, deep navy backgrounds, the discipline of letting cinematic imagery carry the design), **Swiss-modernist functionalist typography** (Aktiv Grotesk's geometric precision descended from Akzidenz Grotesk and Helvetica, applied to digital meditation), and **cinematographic landscape photography** (the photographers Calm commissions specialise in low-light landscape work — Arctic dawn, Pacific Northwest forest at dusk, Sahara at twilight — with imagery colour-graded toward navy-purple twilight tones).

The 2012 founding aesthetic was much more standard tech-startup. The 2017 onwards rebrand introduced the deep-navy + brand-blue + photographic-nature treatment. The 2020 pandemic-era refresh refined the breathing-pulse and twilight-shift as the brand's signature ambient motions.

What Calm rejects: light marketing canvas (the navy IS the brand), multi-colour brand systems (single voltage discipline), playful illustration warmth (Headspace's territory — Calm is photographic, not illustrative), uppercase aggressive typography, and clinical app interfaces. The brand position is **atmospheric contemplation** — Calm wants to feel like sitting beside a still lake at twilight, not like browsing a meditation app.

**Influences:**
- Apple Music — deep-canvas photographic aesthetic, [music.apple.com](https://music.apple.com)
- Aktiv Grotesk (Dalton Maag, 2010) — Swiss-modernist geometric sans, [daltonmaag.com](https://www.daltonmaag.com)
- Headspace — adjacent meditation peer (different chromatic position), [headspace.com](https://headspace.com)
- Arctic / cinematographic landscape photography — twilight nature aesthetic
- Akzidenz Grotesk / Helvetica — typographic ancestry
- Apple TV — atmospheric photographic UI lineage, [apple.com/apple-tv](https://www.apple.com/apple-tv)

## 14. Do's and Don'ts

**Do**
- Anchor on the deep-navy canvas (`#0a1f3a`) — twilight sky 30 minutes after sunset
- Use the single brand voltage: Calm blue (`#0066ff`) — saturated electric royal blue
- Run Aktiv Grotesk (or Inter as fallback) at 500–700 weights with negative tracking on display
- Use 16px card radius — between Headspace's 24px playful and fitness peers' 8px utility
- Use full-pill (9999px) CTAs at 48–56px height with sentence-case white-on-blue text
- Apply twilight gradient palette (navy → purple → dawn-blue) for ambient gradients
- Use full-bleed photographic nature scenes (forests/ocean/mountains at twilight) with navy gradient overlays
- Add decorative star-field overlays with 2–4px white dots that twinkle
- Use 1.6 body line-height — generous breath supports calm reading rhythm
- Add the breathing-pulse (5000ms scale loop) — slower than Headspace, deeper breath rhythm
- Apply `+0.16em` letter-spacing on uppercase eyebrows — wider than typical for spaciousness
- Add the twilight-shift ambient gradient (12000ms tide cycle) on photographic heroes

**Don't**
- Don't use pure black canvas — `#0a1f3a` twilight-navy is the brand, not void-black
- Don't introduce a second brand colour — Calm blue is the only true brand voltage
- Don't use playful character illustrations — Calm is photographic, not illustrative (Headspace's territory)
- Don't run cards at 8–12px utility radius — 16px is signature
- Don't use uppercase on CTAs or headlines (eyebrows are the only uppercase exception)
- Don't use atmospheric multi-layer shadows — single-layer with selective blue-glow
- Don't use saturated bright colours — the chromatic discipline is twilight-cool
- Don't compress body line-height below 1.6 — calm rhythm depends on the breath
- Don't use lifestyle stock photography — every photo is colour-graded to navy-purple twilight
- Don't say "Click here" or use exclamation marks — voice is gentle reassuring
- Don't accelerate breathing-pulse below 5 seconds — meditation breath rhythm is foundational

## 15. Agent Prompt Guide

### Quick Color Reference

```
Twilight Navy:   #0a1f3a
Deepest Navy:    #040c1a
Card Surface:    #13294a
Card Strong:     #1c3458
Off-White:       #fafafa
Calm Blue:       #0066ff
Blue Hover:      #0052d6
Blue Active:     #003fa3
Twilight Purple: #7c5fb8
Dawn Blue:       #2a3d6e
Muted:           #a8b3c5
Border:          #243d65
Border Strong:   #365182
Blue Glow:       rgba(0,102,255,0.25)
```

### Example Component Prompts

- "Create a Calm-style Try Calm Free CTA: 48px-tall **full-pill** button (9999px radius) with brand blue `#0066ff` fill and **white** text in Aktiv Grotesk (or Inter fallback) 16/600 sentence-case ('Try Calm Free'), 14×32px padding. Hover deepens to `#0052d6`. Active to `#003fa3` with press scale 1.0 → 0.97."
- "Build a Calm meditation card: card surface (`#13294a`), 16px radius, no internal padding around the photographic image, 16px padding for metadata. Stack: full-bleed photographic nature image (e.g., forest at dusk colour-graded to navy-purple twilight tones, `aspect-ratio: 16/9`, `object-fit: cover`) with rounded corners following the card radius, title in Aktiv Grotesk 18/600 off-white (`#fafafa`) ('Evening Wind Down'), then horizontal row with duration-tag pill ('10 MIN' in Aktiv Grotesk 13/500 off-white on `rgba(250,250,250,0.15)` semi-transparent surface, 9999px radius) + optional NEW tag, optional teacher attribution in 14/500 muted (`#a8b3c5`)."
- "Design a Calm breathing-pulse component: 240px diameter circle in brand blue (`#0066ff`), 9999px radius, centred on twilight-navy ground. Animate scale 1.0 → 1.15 → 1.0 with `cubic-bezier(0.65, 0, 0.35, 1)` ease over **5000ms** infinite — slower than Headspace's 4-second loop because Calm trusts deeper breath rhythms. Optional white text 'Inhale' / 'Exhale' fades in/out in sync. Pause animation on `prefers-reduced-motion: reduce` and keep static at neutral scale."
- "Create a Calm hero photographic band: full-bleed photographic image (e.g., ocean at night with subtle moonlight, mountain range at sunset, twilight forest) — colour-graded toward navy-purple twilight tones with `aspect-ratio: 21/9`. Navy gradient overlay bottom-up (`rgba(10,31,58,0)` → `rgba(10,31,58,0.7)`) at 60% mid-stop. Hero headline anchored centre-bottom in Aktiv Grotesk 72/600 off-white (`#fafafa`) with `-2.5px` tracking and `ss01` enabled — 'Calm your mind. Change your life.' Sub-copy beneath in Aktiv Grotesk 18/400 muted (`#a8b3c5`). Primary brand-blue pill CTA 'Try Calm Free' (9999px, 56px height, Aktiv Grotesk 18/600 white) + secondary 1px off-white outline pill CTA 'Learn More'. Optional decorative star-field overlay with 2–4px white dots scattered, each twinkling opacity 0.3 → 1.0 → 0.3 over 2400ms randomly. Optional twilight-shift ambient gradient cycling through deep-navy → twilight-purple → dawn-blue over 12000ms tide ease infinite."
- "Build a Calm sleep story card: card surface (`#13294a`), 16px radius. Top: celebrity-narrator photograph (e.g., Matthew McConaughey shot in warm-rim-lit cinematic portrait against deep navy, `aspect-ratio: 4/5`, `object-fit: cover`) with duration overlaid bottom-right of the photo (semi-transparent off-white pill: '30 MIN'). Beneath: title in Aktiv Grotesk 18/600 off-white ('Wonder of the World'), narrator attribution in Aktiv Grotesk 13/500 uppercase off-white with `+0.04em` tracking ('NARRATED BY MATTHEW MCCONAUGHEY'), short body description in 14/500 muted (`#a8b3c5`)."
- "Design a Calm pricing card: card surface (`#13294a`), 16px radius, 40px padding, 1px `#243d65` border. Stack: tier name in Aktiv Grotesk 22/600 off-white ('Calm Premium'), price in Aktiv Grotesk 36/700 off-white ('$69.99/yr'), 5-row feature checklist with brand-blue (`#0066ff`) checkmark icons + 16/400 off-white feature text, primary blue pill CTA 'Start Free Trial' pinned at the bottom (9999px, 48px height)."

### Iteration Guide

1. **Start with twilight-navy and off-white.** If your canvas is pure black or pure white, it isn't Calm. `#0a1f3a` twilight-navy is the sky 30 minutes after sunset.
2. **One brand voltage: Calm blue.** `#0066ff` saturated electric royal blue. No secondary colour.
3. **Aktiv Grotesk (or Inter fallback) at 500–700.** Hero 72/600/-2.5px. Body 16/400 at 1.6 line-height. Geometric calm over humanist warmth.
4. **16px card radius — between Headspace's 24px and fitness peers' 8px.** Soft consumer-app, not playful, not utility.
5. **Full-pill CTAs (9999px) at 48–56px height.** Sentence-case white text on blue. Never uppercase.
6. **Photographic nature scenes with twilight colour-grade.** Forest/ocean/mountain at dusk — never bright lifestyle stock.
7. **5000ms breathing-pulse (slower than Headspace).** Deeper breath rhythm.
8. **Twilight-shift ambient gradient (12000ms tide cycle).** The brand's signature ambient motion.
