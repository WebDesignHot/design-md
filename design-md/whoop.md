---
name: WHOOP
tagline: Lime `#a0d10b` voltage on jet-black, Inter precision, recovery-data athlete-grade aesthetic.
updated_at: 2026-05-05T10:17:17+12:00
published_at: 2026-05-05T10:17:17+12:00
author: webdesignhot
source_url: https://www.whoop.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [media, marketplace]
tags: [dark, fitness, sans, athletic, data-driven, photographic, recovery, performance]
preview_swatch: ['#000000', '#a0d10b', '#ffffff']
related: [oura, peloton, strava]
description: 'WHOOP''s storefront is the canonical recovery-data athlete-grade canvas — a jet-black ground (`#000000`) with white type and the unmistakable **WHOOP lime** (`#a0d10b`) voltage that carries the wordmark, every primary CTA, the Recovery score-ring stroke, the Strain calibration arc, the focus ring, and selected nav state. Type runs **Inter** at 600–800 weights for hero display (40–72px) with broadcast-grade negative tracking and uppercase chrome — pulled directly from professional-sport data telemetry conventions. Cards round at 8px (utility-grade), CTAs are 4–8px small-radius rectangles, and the entire surface is engineered to evoke a strap-on biometric device delivering daily Recovery / Strain / Sleep diagnostics: full-bleed strap product photography, score rings rendered as concentric arcs in lime/red/blue, leaderboard-grade tabular numerals on every metric, and the brand''s relentless data-first information design.'

colors:
  bg: '#000000'                  # jet-black canvas
  bg-elev: '#0a0a0a'             # subtle card lift
  bg-elev-strong: '#141414'      # elevated card, dropdown
  bg-light: '#ffffff'            # rare light-mode shop band (apparel)
  surface: '#0a0a0a'
  surface-soft: '#141414'
  surface-strong: '#1f1f1f'
  brand: '#a0d10b'               # WHOOP lime — voltage colour
  brand-hover: '#88b609'         # deeper lime on hover
  brand-active: '#739707'        # pressed state
  brand-pale: '#e8f3c6'          # light lime tint (rare)
  brand-deep: '#476005'          # deepest lime for editorial
  brand-soft: '#0c1102'          # lime-tinted dark surface
  text: '#ffffff'                # primary white text on dark canvas
  text-strong: '#ffffff'         # heading punch
  text-muted: '#b5b5b5'          # secondary metadata
  text-soft: '#8a8a8a'           # caption text, faint counts
  text-faint: '#5e5e5e'           # disabled, microcopy
  text-on-brand: '#000000'       # black on lime CTA — high contrast
  link: '#ffffff'                # default white link with underline
  link-hover: '#a0d10b'          # link hover flips to lime
  border: '#1f1f1f'              # default 1px hairline on dark
  border-soft: '#141414'         # subtle dividers
  border-strong: '#2e2e2e'       # focus state hairline
  border-input: '#3d3d3d'        # form input outline
  recovery-green: '#16ec06'      # high-recovery (67-100%) — saturated green
  recovery-yellow: '#ffde00'     # medium-recovery (34-66%) — yellow
  recovery-red: '#ff0026'        # low-recovery (0-33%) — saturated red
  strain-blue: '#0093e7'         # Strain score colour
  sleep-blue: '#7eb8d9'          # Sleep score colour
  hrv-purple: '#9c7ed9'          # HRV trend purple
  scrim: 'rgba(0,0,0,0.85)'      # modal backdrop on dark
  shadow-card: 'rgba(0,0,0,0.6)'
  shadow-elev: 'rgba(0,0,0,0.8)'
  success: '#16ec06'             # recovery-green
  warning: '#ffde00'             # recovery-yellow
  danger: '#ff0026'              # recovery-red, error red
  info: '#0093e7'                # strain-blue, info blue

typography:
  display:
    family: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700, 800, 900]
    opentype-features: ['ss01', 'tnum', 'cv11']
  body:
    family: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: '"Inter", "SF Mono", Menlo, Monaco, monospace'
    weights: [500, 700]
  scale:
    hero-display:    { size: 72, weight: 800, lineHeight: 1.0,  tracking: '-2px',     family: display, opentype: ['ss01'], transform: 'uppercase' }
    hero-display-md: { size: 56, weight: 800, lineHeight: 1.04, tracking: '-1.5px',   family: display, opentype: ['ss01'], transform: 'uppercase' }
    page-title:      { size: 40, weight: 800, lineHeight: 1.1,  tracking: '-1px',     family: display, opentype: ['ss01'], transform: 'uppercase' }
    section-head:    { size: 28, weight: 700, lineHeight: 1.15, tracking: '-0.5px',   family: display, opentype: ['ss01'], transform: 'uppercase' }
    sub-section:     { size: 22, weight: 700, lineHeight: 1.2,  tracking: '-0.25px',  family: display }
    body-md:         { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 500, lineHeight: 1.43, tracking: '0',        family: body }
    caption:         { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0.02em',   family: body }
    micro:           { size: 11, weight: 700, lineHeight: 1.27, tracking: '0.1em',    family: body, transform: 'uppercase' }
    score-display:   { size: 96, weight: 800, lineHeight: 1.0,  tracking: '-3px',     family: body, opentype: ['tnum'] }
    score-md:        { size: 64, weight: 700, lineHeight: 1.0,  tracking: '-2px',     family: body, opentype: ['tnum'] }
    score-label:     { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0.16em',   family: body, transform: 'uppercase' }
    metric-display:  { size: 32, weight: 700, lineHeight: 1.0,  tracking: '-0.5px',   family: body, opentype: ['tnum'] }
    metric-tabular:  { size: 18, weight: 600, lineHeight: 1.0,  tracking: '0',        family: body, opentype: ['tnum'] }
    metric-label:    { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0.1em',    family: body, transform: 'uppercase' }
    button-cta:      { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0.08em',   family: body, transform: 'uppercase' }
    nav-link:        { size: 12, weight: 700, lineHeight: 1.0,  tracking: '0.1em',    family: body, transform: 'uppercase' }
    eyebrow:         { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0.18em',   family: body, transform: 'uppercase' }
    price-display:   { size: 24, weight: 700, lineHeight: 1.0,  tracking: '-0.25px',  family: body, opentype: ['tnum'] }

radius:
  micro: 0
  sm: 4
  md: 8        # CTAs, buttons, cards — utility-grade
  lg: 12
  xl: 16
  pill: 9999   # avatars, score-ring SVG, recovery-band pill

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160]

layout:
  page-width: 1440
  prose-width: 720
  header-height: 72
  masthead-height: 72

components:
  button-cta:
    bg: '#a0d10b'
    color: '#000000'
    radius: 8
    padding: '14px 28px'
    height: 48
    font: button-cta
    use: 'Join WHOOP, Get Started, Subscribe — every primary action.'
  button-cta-hover:
    bg: '#88b609'
    color: '#000000'
    use: 'Hover state — deeper lime, subtle scale 1.0 → 1.02.'
  button-secondary:
    bg: 'transparent'
    color: '#ffffff'
    border: '2px solid #ffffff'
    radius: 8
    padding: '13px 27px'
    height: 48
    use: 'Learn More, Watch Trailer, Sign In — outline white-on-dark.'
  button-tertiary-text:
    bg: 'transparent'
    color: '#a0d10b'
    use: 'Inline lime links — underline on hover.'
  recovery-ring-card:
    bg: '#0a0a0a'
    color: '#ffffff'
    radius: 8
    padding: '24px'
    use: 'Recovery score ring card — circular SVG ring in green/yellow/red based on score band, score in 96/800 tnum at centre, RECOVERY label beneath.'
  strain-arc-card:
    bg: '#0a0a0a'
    color: '#ffffff'
    radius: 8
    padding: '24px'
    use: 'Strain calibration arc card — semi-circular gauge with strain blue stroke, score in 64/700 tnum, scale 0–21.'
  metric-tile:
    bg: '#0a0a0a'
    color: '#ffffff'
    radius: 8
    padding: '20px'
    border: '1px solid #141414'
    use: 'Health metric tile — uppercase label + tabular value + sparkline + variance caption.'
  hero-product-band:
    bg: '#000000'
    color: '#ffffff'
    use: 'Full-bleed strap product hero, oversized uppercase headline 56–72/800, lime CTA pinned beneath.'
  athlete-card:
    bg: '#0a0a0a'
    color: '#ffffff'
    radius: 8
    padding: '0'
    use: 'Athlete partner card — full-bleed athlete photo, name overlay 22/700 uppercase, sport tag, optional Recovery score badge.'
  testimonial-card:
    bg: '#0a0a0a'
    color: '#ffffff'
    radius: 8
    padding: '32px'
    use: 'Editorial testimonial — pull quote 22/500, athlete avatar (40px pill), name + role + sport in 13/500.'
  text-input:
    bg: '#0a0a0a'
    color: '#ffffff'
    radius: 8
    height: 48
    padding: '14px 16px'
    border: '1px solid #3d3d3d'
    focus: '2px solid #a0d10b'
    use: 'Form input on dark — slim utility radius, lime focus ring.'
  recovery-band-pill:
    bg-green: '#16ec06'
    bg-yellow: '#ffde00'
    bg-red: '#ff0026'
    color: '#000000'
    radius: 9999
    padding: '4px 12px'
    use: 'Recovery band pill — coloured by score band, black text, uppercase 11/700.'
  modal:
    bg: '#0a0a0a'
    color: '#ffffff'
    radius: 8
    padding: '32px'
    use: 'Centered dialog over 85% black scrim.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-precise: 'cubic-bezier(0.65, 0, 0.35, 1)'   # data-grade smoothness for ring fills
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  duration-score-fill: 1500
  cta-press: 'CTA bg deepens a0d10b → 739707 + scale 1.0 → 0.98 over 150ms on :active'
  card-hover: 'card border lightens 141414 → 2e2e2e + subtle lime-glow over 240ms'
  recovery-ring-fill: 'circular SVG ring stroke-dashoffset animates 0 → score% over 1500ms with ease-precise on mount, simultaneous with score count-up'
  strain-arc-fill: 'semi-circular arc fills 0 → strain/21 over 1500ms ease-precise'
  metric-sparkline-draw: 'sparkline path-length animates 0 → 100% over 1200ms on viewport intersect'
  reduced-motion: 'respects prefers-reduced-motion: reduce — ring-fill, arc-fill, sparkline-draw suppress to instant; colour transitions remain.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1440

shadows:
  ambient: 'rgba(0,0,0,0.6) 0 4px 12px'
  hover-card: 'rgba(0,0,0,0.8) 0 8px 24px'
  modal: 'rgba(0,0,0,0.9) 0 16px 48px'
  lime-glow: '0 0 24px rgba(160,209,11,0.25)'  # subtle lime halo on hover/featured
  ring: '0 0 0 2px #a0d10b'

accessibility:
  contrast-text-on-bg: 21.0          # #ffffff on #000000 — AAA (maximum)
  contrast-text-on-brand: 13.6       # #000000 on #a0d10b — AAA
  contrast-muted-on-bg: 8.2          # #b5b5b5 on #000000 — AAA
  contrast-link-hover: 12.5          # #a0d10b on #000000 — AAA
  focus-ring: '2px solid #a0d10b + 2px outline offset (lime ring)'
  reduced-motion-honored: true
  touch-target-min: 48
  keyboard-nav: 'Tab moves masthead → recovery card → strain card → metric tiles → testimonial → footer; arrow keys inside metric trends and recovery bands.'

dark-mode: 'native'   # WHOOP is dark-only by brand. No light variant offered on the marketing site.
---

## 1. Visual Theme & Atmosphere

WHOOP's storefront is the canonical recovery-data athlete-grade canvas — a **jet-black** ground (`#000000`) with hard white type and the unmistakable **WHOOP lime** (`#a0d10b`) voltage that does the entire chromatic work of the brand. The black is uncompromising — true `#000000`, deeper than Peloton's `#0d0d0d`, the same depth as Oura — but where Oura whispers in champagne, WHOOP shouts in lime. The lime is electric, oxidised-metal-bright, closer to Mountain-Dew-can or radioactive-tracer than to commercial green. It's the most identifiable single colour in athlete-data wearables.

The chromatic identity is **white on jet-black with a lime voltage**. The lime carries the wordmark, every primary CTA, link-hover, focus ring, lime-glow halos, and selected nav state. Beyond the lime, WHOOP uses a strict **traffic-light recovery palette** — `#16ec06` saturated green for high-recovery (67-100%), `#ffde00` electric yellow for medium-recovery (34-66%), `#ff0026` warning red for low-recovery (0-33%) — and a **strain-blue** (`#0093e7`) for the Strain score arc. These are functional state colours, never decorative.

Type runs **Inter** at heavy 700–800 weights for hero display (40–72px) — uppercase, tightly negative-tracked (`-2px` at 72px), broadcast-grade typography pulled directly from professional-sport data telemetry. The hero "OPTIMISE EVERY EFFORT" runs Inter 72/800 uppercase with `-2px` tracking — the polar opposite of Oura's whisper-300. WHOOP commits weight as performance signal, the way ESPN sports graphics do. Score values render in 96/800 tabular at the centre of every Recovery ring.

The **Recovery ring** is the brand's signature data-viz. Every Recovery score renders as a circular SVG progress ring with the numeric score in 96/800 tabular at the centre, the ring stroke coloured by recovery band (green/yellow/red), and a "RECOVERY" label in 11/700 uppercase beneath. The ring fills from 0 to score% over 1500ms with ease-precise on mount. The **Strain arc** is a semi-circular gauge in strain-blue, scaling 0–21 (the Strain scale).

Shape language is utility-grade rectangular — 8px CTAs, 8px cards (the same radius for both — WHOOP rejects the card-rounder-than-button distinction other brands maintain). Recovery band pills are 9999px (the only true pill on the page). Strap product photography is the design's gravity — every hero image is the WHOOP strap on an athlete's wrist, shot in saturated studio light with subtle lime accent.

**Key Characteristics:**
- Jet-black canvas (`#000000`) — same depth as Oura, more aggressive product photography
- Single brand voltage: WHOOP lime (`#a0d10b`) — electric, oxidised-bright, never desaturated
- Three-band recovery palette: green/yellow/red — functional state colours, never decorative
- Inter at heavy 700–800 weights uppercase with broadcast-grade negative tracking — hero 72/800/-2px
- Score values in 96/800 tabular — the polar opposite of Oura's whisper-300
- Recovery ring + Strain arc are the brand's signature data-viz — concentric coloured arcs
- 8px utility-rectangular geometry for both buttons AND cards — radius parity, athlete-equipment grade
- Uppercase chrome with `+0.08–0.18em` positive tracking — sport-broadcast-graphics discipline
- Tabular numerals (`tnum`) on every score, metric, leaderboard rank
- Saturated lime-glow halos (`0 0 24px rgba(160,209,11,0.25)`) on featured cards and hover

## 2. Color Palette & Roles

### Primary
- **Jet Black** (`#000000`): default canvas — same depth as Oura
- **Card Surface** (`#0a0a0a`): elevated cards, score-ring cards, testimonial surfaces
- **Card Strong** (`#141414`): metric tiles, alt rows
- **White** (`#ffffff`): primary text, hero display

### Brand
- **WHOOP Lime** (`#a0d10b`): wordmark, every primary CTA, focus ring, link hover, lime-glow halo, selected nav state — the single brand voltage
- **Brand Hover** (`#88b609`): deeper lime on hover
- **Brand Active** (`#739707`): pressed state
- **Brand Pale** (`#e8f3c6`): light lime tint — rare, used in light-mode bands only
- **Brand Deep** (`#476005`): deepest lime for editorial accent
- **Brand Soft** (`#0c1102`): lime-tinted dark surface for selected-row tints

### Recovery Band Palette
- **Recovery High Green** (`#16ec06`): 67–100% recovery — saturated green, traffic-light intensity
- **Recovery Medium Yellow** (`#ffde00`): 34–66% recovery — electric yellow
- **Recovery Low Red** (`#ff0026`): 0–33% recovery — saturated red

These three colours are the brand's functional state palette — never used decoratively.

### Score Component Palette
- **Strain Blue** (`#0093e7`): Strain score (0–21) arc stroke
- **Sleep Blue** (`#7eb8d9`): Sleep score
- **HRV Purple** (`#9c7ed9`): HRV trend

### Interactive
- **Link** (`#ffffff`): default inline link with underline
- **Link Hover** (`#a0d10b`): hover flips white to lime
- **Disabled** (`#5e5e5e`): disabled text and outline
- **Focus** (`#a0d10b`): 2px lime ring with 2px offset

### Neutral Scale
- **White** (`#ffffff`) — primary text
- **Muted** (`#b5b5b5`) — secondary metadata, body sub-copy
- **Soft** (`#8a8a8a`) — caption, faint counts
- **Faint** (`#5e5e5e`) — disabled, microcopy, footer legal
- **Border** (`#1f1f1f`) — default 1px hairline on dark
- **Border Soft** (`#141414`) — subtle dividers
- **Border Strong** (`#2e2e2e`) — focus state hairline
- **Border Input** (`#3d3d3d`) — form-input outline

### Surface & Borders
- **Black** (`#000000`) — default canvas
- **Card** (`#0a0a0a`) — elevated cards
- **Card Strong** (`#141414`) — metric tiles
- **Strong** (`#1f1f1f`) — divider band
- **White** (`#ffffff`) — rare light-mode shop band

### Shadow Colors
WHOOP uses dark-on-dark shadows with the **lime-glow** halo on hover and featured states.

- `rgba(0,0,0,0.6) 0 4px 12px` — ambient
- `rgba(0,0,0,0.8) 0 8px 24px` — hover
- `rgba(0,0,0,0.9) 0 16px 48px` — modal
- `0 0 24px rgba(160,209,11,0.25)` — lime-glow on featured/hover

### Semantic
- **Success Green** (`#16ec06`): doubles as Recovery High
- **Warning Yellow** (`#ffde00`): doubles as Recovery Medium
- **Danger Red** (`#ff0026`): doubles as Recovery Low; validation errors
- **Info Blue** (`#0093e7`): doubles as Strain blue

## 3. Typography Rules

### Font Family

**Primary**: `Inter`. Fallback chain: `"Helvetica Neue", Helvetica, Arial, sans-serif`. Inter carries the entire scale.

**Mono**: tabular numerals via Inter `tnum`.

**OpenType features**: `tnum` is enabled on every score, metric, leaderboard rank, price. `ss01` on display headlines.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| hero-display | Inter | 72 | 800 | 1.0 | -2px | ss01 + uppercase | "OPTIMISE EVERY EFFORT" |
| hero-display-md | Inter | 56 | 800 | 1.04 | -1.5px | ss01 + uppercase | Sub-hero |
| page-title | Inter | 40 | 800 | 1.1 | -1px | ss01 + uppercase | "WHOOP 5.0", "MEMBERSHIP" page H1 |
| section-head | Inter | 28 | 700 | 1.15 | -0.5px | ss01 + uppercase | "WHAT IT MEASURES" |
| sub-section | Inter | 22 | 700 | 1.2 | -0.25px | — | Sub-section heads (mixed-case allowed) |
| body-md | Inter | 16 | 400 | 1.5 | 0 | — | Default body |
| body-lg | Inter | 18 | 400 | 1.5 | 0 | — | Lead paragraphs |
| body-sm | Inter | 14 | 500 | 1.43 | 0 | — | Secondary metadata |
| caption | Inter | 13 | 500 | 1.4 | 0.02em | — | Score trend captions |
| micro | Inter | 11 | 700 | 1.27 | 0.1em | uppercase | "FEATURED ATHLETE", "NEW" |
| score-display | Inter | 96 | 800 | 1.0 | -3px | tnum | Recovery score centre value |
| score-md | Inter | 64 | 700 | 1.0 | -2px | tnum | Strain centre value |
| score-label | Inter | 11 | 700 | 1.0 | 0.16em | uppercase | "RECOVERY", "STRAIN", "SLEEP" |
| metric-display | Inter | 32 | 700 | 1.0 | -0.5px | tnum | Sub-metric values |
| metric-tabular | Inter | 18 | 600 | 1.0 | 0 | tnum | Metric tile values |
| metric-label | Inter | 11 | 700 | 1.0 | 0.1em | uppercase | "HRV", "RHR", "SLEEP DEBT" |
| button-cta | Inter | 14 | 700 | 1.0 | 0.08em | uppercase | "JOIN WHOOP", "GET STARTED" |
| nav-link | Inter | 12 | 700 | 1.0 | 0.1em | uppercase | "WHOOP 5.0", "MEMBERSHIP", "RESEARCH" |
| eyebrow | Inter | 11 | 700 | 1.0 | 0.18em | uppercase | "ATHLETES TRUST WHOOP" |
| price-display | Inter | 24 | 700 | 1.0 | -0.25px | tnum | Membership price display |

### Principles

- **Heavy-weight conviction.** Inter 700–800 across the display scale is WHOOP's signature typographic choice. Where Oura whispers at 300, WHOOP commits at 800. The discipline mirrors broadcast-sport graphics.
- **Uppercase everywhere chrome.** Hero, page titles, section heads, nav, CTAs, eyebrows, score labels, metric labels — all uppercase. Mixed-case appears only in body and sub-section heads.
- **Positive tracking on uppercase.** `+0.08–0.18em` letter-spacing on uppercase chrome — pulls the type toward broadcast-graphic readability.
- **Negative tracking on display.** Hero 72/800/-2px. Headlines compress while body breathes.
- **Tabular numerals on every metric.** `tnum` on every score, metric, leaderboard rank — the dashboard demands precise vertical alignment.
- **Score values at 96/800 tnum.** The polar opposite of Oura's 96/300. WHOOP wants the score to read as athlete-data telemetry, not as luxury whisper.

## 4. Component Stylings

### Buttons

**`button-cta`** — WHOOP-lime (`#a0d10b`) fill, **black** text in 14/700 uppercase with `+0.08em` tracking, 8px radius, 14×28px padding, 48px height. Black-on-lime gives 13.6 contrast — AAA. Hover deepens to `#88b609` and scales 1.0 → 1.02. Active to `#739707` with press scale 1.0 → 0.98.

**`button-secondary`** — transparent fill, 2px white outline, white text in 14/700 uppercase. Same 8px radius, same 48px height. Used for "LEARN MORE", "SIGN IN", "WATCH TRAILER".

**`button-tertiary-text`** — plain lime (`#a0d10b`) text, no surface. Underline on hover.

### Cards

**`recovery-ring-card`** — Recovery score centrepiece. Card surface (`#0a0a0a`), 8px radius, 24px padding. Centre: large circular SVG progress ring (~240px diameter, 14px stroke). Background ring `#1f1f1f`. Foreground ring stroke uses recovery-band colour: `#16ec06` (high), `#ffde00` (medium), `#ff0026` (low). Animate stroke-dashoffset from 0 → score% over 1500ms ease-precise on mount. Centre numeric in 96/800 tabular ("87%"). Beneath: "RECOVERY" label in 11/700 uppercase white with `+0.16em` tracking.

**`strain-arc-card`** — Strain score gauge. Card surface (`#0a0a0a`), 8px radius, 24px padding. Centre: semi-circular SVG arc (180° gauge), strain-blue (`#0093e7`) stroke, scale 0–21. Numeric in 64/700 tabular. "STRAIN" label in 11/700 uppercase.

**`metric-tile`** — health metric tile. Card surface (`#0a0a0a`), 8px radius, 20px padding, 1px `#141414` border. Stack: metric-label in 11/700 uppercase ("HRV"), metric-tabular value in 18/600 ("48 ms"), 24px sparkline showing trend, variance caption in 13/500 muted ("+4 ms vs your 7-day avg").

**`hero-product-band`** — full-bleed product hero. Black ground, oversized uppercase headline 56–72/800 tightly tracked, sub-copy, primary lime CTA + secondary white-outline CTA.

**`athlete-card`** — athlete partner card (LeBron, Patrick Mahomes, Cristiano Ronaldo). Card surface (`#0a0a0a`), 8px radius, full-bleed athlete photo with rim-light, name overlay in 22/700 uppercase white at the bottom, sport tag in 11/700 uppercase muted, optional Recovery score badge top-right.

**`testimonial-card`** — editorial testimonial. Card surface (`#0a0a0a`), 8px radius, 32px padding. Pull quote in 22/500 white. Athlete avatar (40px pill), name + role + sport in 13/500 muted.

### Badges, Tags, Pills

**`recovery-band-pill`** — coloured pill (9999px, 4×12px padding) with black text in 11/700 uppercase. Three variants: green (`#16ec06`) "HIGH", yellow (`#ffde00`) "MEDIUM", red (`#ff0026`) "LOW".

**`new-tag`** — small lime pill (4px radius, 4×8px padding) with "NEW" in 11/700 uppercase black.

**`featured-eyebrow`** — uppercase 11/700 white with `+0.18em` tracking. No surface.

### Inputs / Forms

**`text-input`** — card surface (`#0a0a0a`), 1px `#3d3d3d` hairline, 8px radius, 48px height, 14×16px padding, white text in 16/400. Stacked label above in 11/700 uppercase muted. On focus the border thickens to 2px lime.

**`search-bar`** — dark surface, 8px radius, 48px height, 1px `#2e2e2e` hairline, magnifier icon flush left in muted, lime focus ring on `:focus-visible`.

### Navigation

**`masthead`** — full-width black bar, 72px height, 1px `#1f1f1f` bottom border. Wordmark flush left in lime (the "WHOOP" wordmark in lime is the brand's most iconic chrome). Nav links centred in 12/700 uppercase white with `+0.1em` tracking. Account / CTA flush right.

**`mega-menu-flyout`** — opens from category dropdown; card surface (`#0a0a0a`), 8px radius, 1px `#1f1f1f` hairline, hover shadow.

### Modals & Toasts

**`modal`** — centred dialog over an 85%-opacity black scrim. Card surface, 8px radius, 32px padding, modal shadow.

**`toast`** — bottom-centre. Card fill, 8px radius, 1px `#1f1f1f` hairline, white text, lime icon for celebration toasts.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128 · 160`
- Section padding (vertical): **96–160px** between major bands; **160px** on the hero
- Card internal padding: **20–32px** for content cards; **0** for full-bleed athlete portraits
- Gutters: **16–24px** between cards in grid view

### Grid & Container

- Max content width: **1440px** centred
- Homepage: full-bleed product hero → Recovery ring + Strain arc 2-up centrepiece → metric tile 4-up grid → athlete partner band 3-up → testimonial → research band → footer
- Membership page: tiered pricing 3-up grid

### Whitespace Philosophy

WHOOP balances **bold-headline density** (oversized 72/800 uppercase headlines that fill the upper third) with **data-tile density** (4-up metric grids at 16px gutters). The discipline is broadcast-sport-graphics — bold headlines, dense telemetry beneath.

### Section Cadence

Stays on jet-black almost everywhere. Rhythm comes from **content-density alternation**: full-bleed hero with oversized headline → tight Recovery/Strain centrepiece → 4-up metric grid → athlete photo band → testimonial.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Square | 0px | Score ring background, strain arc background |
| Small | 4px | NEW tag, dense badges |
| Default | 8px | CTAs, buttons, cards, modals — radius parity (athlete-equipment grade) |
| Card-Featured | 12px | Rare hero promo bands |
| Hero | 16px | Hero promo bands |
| Pill | 9999px | Recovery band pills, avatars, score-ring SVG |

WHOOP's most signature shape decision is **8px radius parity between buttons AND cards**. Most brands distinguish (4–8px buttons + 12px cards). WHOOP refuses the distinction — every utility-grade surface rounds the same 8px, signalling athlete-equipment-grade chrome.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Body, masthead, footer |
| 1 — Ambient | `rgba(0,0,0,0.6) 0 4px 12px` | Default cards |
| 2 — Hover | `rgba(0,0,0,0.8) 0 8px 24px` | Cards on hover, dropdowns |
| 3 — Modal | `rgba(0,0,0,0.9) 0 16px 48px` | Centred dialogs |
| 4 — Lime Glow | `0 0 24px rgba(160,209,11,0.25)` | Featured cards, hover state |
| 5 — Scrim | `rgba(0,0,0,0.85)` | Modal backdrop |

### Shadow Philosophy

WHOOP's depth strategy is **dark-on-dark with lime-glow voltage** on featured cards and hover. The glow is set at 25% opacity — louder than Oura's restrained gold-glow because the brand voice is louder. The brand position: depth comes from photo contrast and selective lime-glow, never atmospheric multi-layer.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry
- **Precise**: `cubic-bezier(0.65, 0, 0.35, 1)` — Recovery ring fill, Strain arc fill (data-grade smoothness)

### Durations
| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 150ms | Hover colour swap, focus ring, CTA press |
| Standard | 240ms | Card hover, modal enter |
| Slow | 320ms | Page transitions |
| Score Fill | 1500ms | Recovery ring + Strain arc fill on mount |
| Sparkline | 1200ms | Sparkline path-length draw |

### Per-Component Recipes

- **CTA hover**: bg `#a0d10b` → `#88b609` over 150ms + scale 1.0 → 1.02.
- **CTA press**: bg → `#739707` + scale 1.0 → 0.98 over 150ms on `:active`.
- **Card hover**: border lightens `#141414` → `#2e2e2e` + lime-glow halo fades in over 240ms.
- **Recovery ring fill**: SVG `stroke-dashoffset` animates from 0 → score% over 1500ms ease-precise. Centre numeric counts up in sync.
- **Strain arc fill**: semi-circular arc fills 0 → strain/21 over 1500ms ease-precise.
- **Sparkline draw**: SVG path-length animates 0 → 100% over 1200ms on viewport intersect.
- **Modal enter**: scrim fades in over 200ms, dialog translates from `translateY(8px) opacity(0)` to `0/1` over 240ms emphasized.

### Page Transitions

Page-to-page uses no transition — links fire hard navigation. Hero product images fade-in over 320ms.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. Ring fill, arc fill, sparkline draw suppress to instant.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #ffffff white on #000000 canvas | 21.0 | AAA (maximum) |
| #000000 black on #a0d10b lime CTA | 13.6 | AAA |
| #b5b5b5 muted on #000000 | 8.2 | AAA |
| #a0d10b link hover on #000000 | 12.5 | AAA |
| #16ec06 Recovery green on #000000 | 13.4 | AAA |
| #ffde00 Recovery yellow on #000000 | 16.5 | AAA |
| #ff0026 Recovery red on #000000 | 4.8 | AA |

Black-on-lime CTA at 13.6 — AAA. WHOOP uses black text on lime for the same reason Oura uses black on gold: white-on-lime would fail; black-on-lime passes maximally.

### Focus Indicators

Focus ring is **2px solid `#a0d10b`** (lime) with 2px outline-offset. The dark canvas gives the lime ring high luminance contrast (~12.5).

### ARIA Patterns

- **Recovery ring**: `role="meter"` with `aria-valuenow` (0–100), `aria-label="Recovery score 87% out of 100, High recovery band"`.
- **Strain arc**: `role="meter"` with `aria-valuemax="21"`, `aria-label="Strain 14.2 out of 21"`.
- **Recovery band pill**: `aria-label="High recovery"` / "Medium recovery" / "Low recovery".
- **Athlete card**: entire card is `<a>` with verbose `aria-label` — "LeBron James, Basketball, View athlete profile."
- **Mega-menu**: `role="menu"` with arrow keys, Escape closes.

### Keyboard Navigation

- Masthead: Tab moves wordmark → nav → account → CTA
- Recovery centrepiece: Tab through Recovery card → Strain card
- Metric grid: Tab through tiles in document order; sparklines are decorative (skipped)
- Modal: Tab is trapped; Esc closes

### Screen Reader Hints

Verbose `aria-label` on score rings — meter announces both score and band. Decorative SVG sparklines are `aria-hidden="true"`.

### Reduced Motion

All transitions degrade to opacity-only. Ring, arc, sparkline fills suppress to instant.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Masthead collapses to wordmark + hamburger; Recovery + Strain stack 1-up; metric grid 2-up |
| Tablet | 640–1024px | Masthead with collapsed nav; metric grid 3-up |
| Desktop | 1024–1280px | Full nav; metric grid 4-up |
| Wide | 1280–1440px | Content caps at 1440px |

### Touch Targets

- Primary CTAs: 48px height — AAA
- Recovery / Strain centrepiece tappable for detail expansion
- Account / Cart icons: 48×48px

### Collapsing Strategy

- Masthead: nav hides first; only wordmark + hamburger remain at <640px
- Recovery + Strain: 2-up → 1-up at <640px
- Metric grid: 4 → 3 → 2 → 1; ring diameter compresses 240px → 200px → 160px
- Hero typography: 72px → 56px → 40px display compression

### Image Behavior

Athlete portraits use `aspect-ratio: 4/5` with `object-fit: cover`. Strap product photos use `aspect-ratio: 1/1` with `object-fit: contain`.

### Container Queries

Used in Recovery card: when card narrows below ~280px, the trend-strip beneath the ring collapses to a horizontal-scrollable row.

## 11. Content & Voice

### Tone

Direct, performance-coded, scientifically-precise. WHOOP's voice is "the sport scientist on the team's training staff" — measured but motivational, second-person ("Optimise every effort", "You crushed your strain target"), and obsessively data-grounded. Never sells "fitness" — sells **performance and recovery**.

### Microcopy Patterns

- **Button verbs**: "JOIN WHOOP", "GET STARTED", "SUBSCRIBE", "LEARN MORE" — uppercase
- **Error message recipe**: clinical — "Your strap couldn't sync. Tap retry or check your connection."
- **Success confirmations**: data-aware — "Recovery score: 87%. You're ready to train hard today."
- **Score interpretation**: "High recovery — your body is primed. Push the strain target."
- **Weekly insights**: "Your sleep consistency improved 14% this week."

### Empty States

Empty Recovery: "Wear your strap for 4 nights to see your first Recovery score."

Empty insights: "Insights appear after 14 days of wear. Keep training."

### CTA Verb Conventions

- Primary: **JOIN WHOOP**, **GET STARTED**, **SUBSCRIBE**, **TRY FREE**
- Secondary: **LEARN MORE**, **WATCH TRAILER**, **READ RESEARCH**
- Tertiary: "View score detail", "See research"
- Avoided: "Click here", "Submit", "Buy now"

## 12. Dark Mode & Theming

**Dark-only.** WHOOP's storefront is dark-only by brand. The base canvas is `#000000` jet-black, every text element is white, every CTA is lime. There is no light-mode toggle on the marketing site — the dark ground IS the brand.

**Light-mode bands appear only in the apparel shop** — WHOOP Body apparel ships on white-canvas product photography pages with the same lime CTA. This single-band light-mode is reserved for white-seamless apparel shots.

The WHOOP iOS / Android app ships dark-only by default. The web is a faithful mirror of the dark-app experience.

## 13. Lineage & Influences

WHOOP's visual lineage runs through three traditions: **professional-sport telemetry interfaces** (NFL Next Gen Stats, NBA tracking dashboards, Formula 1 driver-data overlays — uppercase chrome, broadcast-grade tabular numerals, traffic-light recovery palette), **athlete-equipment industrial design** (Nike Pro, Under Armour HOVR, performance training apparel — utility-grade rectangles, no rounded-pill consumer-app aesthetic, bold conviction headlines), and **sport-medicine clinical interfaces** (heart-rate variability training, recovery science journals — the data discipline that makes WHOOP feel like wearing a clinical instrument rather than a smart watch).

The 2012 founding aesthetic was much more sport-academic. The 2018 launch of the WHOOP 3.0 strap and membership model introduced the lime brand voltage. The 2022 WHOOP 4.0 refresh consolidated the dark-canvas-with-lime treatment to its current form, with the Recovery ring + Strain arc as centrepiece visualisations.

What WHOOP rejects: light-mode marketing, pill CTAs (utility-rectangles only), multi-colour brand systems, expressive display typefaces, soft-focus lifestyle photography (every athlete shot is hard-rim-lit studio with subtle lime accent), and gamification visuals beyond the Recovery / Strain / Sleep trio.

**Influences:**
- NFL Next Gen Stats / NBA tracking — broadcast-sport telemetry, [nextgenstats.nfl.com](https://nextgenstats.nfl.com)
- Nike Pro — athlete-equipment industrial design lineage, [nike.com](https://www.nike.com)
- Oura — wellness-data wearable adjacency (different brand position), [ouraring.com](https://ouraring.com)
- Apple — product photography lineage (deep canvas + product hero)
- Inter typeface (Rasmus Andersson) — workhorse uppercase chrome, [rsms.me/inter](https://rsms.me/inter)
- ESPN broadcast graphics — uppercase + tabular numeral discipline, [espn.com](https://www.espn.com)

## 14. Do's and Don'ts

**Do**
- Anchor on the jet-black canvas (`#000000`) — WHOOP's signature deep ground
- Use a single brand voltage: WHOOP lime (`#a0d10b`) — electric, oxidised-bright, never desaturated
- Run Inter at heavy 700–800 weights uppercase with negative tracking on display
- Keep the radius parity at 8px for both buttons AND cards — athlete-equipment grade
- Render Recovery scores with the traffic-light band palette (green/yellow/red)
- Use **black** text on lime CTAs — black-on-lime is 13.6 AAA; white-on-lime fails
- Apply uppercase chrome with `+0.08–0.18em` positive tracking — broadcast-graphic discipline
- Use tabular numerals (`tnum`) on every score, metric, and leaderboard rank
- Render score values in 96/800 tnum — heavy-weight conviction, never light-weight whisper
- Add the lime-glow halo (`0 0 24px rgba(160,209,11,0.25)`) on featured cards and hover

**Don't**
- Don't introduce a second brand colour beyond the recovery-band traffic-light palette
- Don't use white-on-lime CTAs — the contrast fails AAA. Always invert to black
- Don't run Inter below 600 weight in the display scale — heavy weight is conviction
- Don't desaturate the lime — it's electric, not olive
- Don't break the radius parity — 8px for both buttons AND cards
- Don't use lifestyle soft-focus photography — every athlete shot is hard-rim-lit studio
- Don't add multi-layer atmospheric shadows — single-layer with selective lime-glow
- Don't say "Click here" or use exclamation marks — the voice is direct sport-scientist
- Don't compress section padding below 96px — the breath supports the bold headlines
- Don't pill the CTAs — utility-grade rectangles only

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:        #000000
Card:          #0a0a0a
White:         #ffffff
WHOOP Lime:    #a0d10b
Lime Hover:    #88b609
Lime Active:   #739707
Recovery Hi:   #16ec06
Recovery Med:  #ffde00
Recovery Lo:   #ff0026
Strain Blue:   #0093e7
Muted:         #b5b5b5
Border:        #1f1f1f
Border Strong: #2e2e2e
Lime Glow:     rgba(160,209,11,0.25)
```

### Example Component Prompts

- "Create a WHOOP-style Join CTA: 48px-tall rectangular button (8px radius — same as cards) with WHOOP-lime `#a0d10b` fill and **BLACK** text in Inter 14/700 uppercase with `+0.08em` tracking, 14×28px padding. Hover deepens to `#88b609` and scales 1.0 → 1.02. Active to `#739707` with press scale 1.0 → 0.98. Black-on-lime passes AAA at 13.6 contrast."
- "Build a WHOOP Recovery ring card: card surface (`#0a0a0a`), 8px radius, 24px padding. Centre: 240px-diameter circular SVG progress ring with 14px stroke. Background ring stroke `#1f1f1f`. Foreground ring stroke uses recovery-band colour: `#16ec06` for high (67-100%), `#ffde00` for medium (34-66%), `#ff0026` for low (0-33%). Animate `stroke-dashoffset` from 0 → score% over 1500ms with `cubic-bezier(0.65, 0, 0.35, 1)` ease-precise on mount. Centre numeric in Inter 96/800 tabular ('87%'). Beneath the ring: 'RECOVERY' label in 11/700 uppercase white with `+0.16em` tracking."
- "Design a WHOOP hero band: pure-black (`#000000`) full-bleed band, 160px vertical padding, oversized uppercase headline in Inter 72/800 white with `-2px` tracking and `ss01` enabled — 'OPTIMISE EVERY EFFORT'. Sub-copy beneath in Inter 18/400 muted (`#b5b5b5`). Primary lime rectangular CTA 'JOIN WHOOP' (8px radius, 48px height, Inter 14/700 uppercase black text) + secondary 2px white-outline rectangular CTA 'LEARN MORE'. Optional full-bleed background photo of athlete with strap on wrist, hard rim-light, subtle lime glow accent."
- "Create a WHOOP metric tile: card surface (`#0a0a0a`), 8px radius, 20px padding, 1px `#141414` border. Stack: metric label in Inter 11/700 uppercase white with `+0.1em` tracking — 'HRV'. Tabular value in 18/600 white — '48 ms'. 24px sparkline beneath in muted with last point in lime. Variance caption in 13/500 muted — '+4 ms vs 7-day avg'."
- "Build a WHOOP athlete card: card surface (`#0a0a0a`), 8px radius, full-bleed athlete photo (e.g., LeBron James) with `aspect-ratio: 4/5` and `object-fit: cover`. Black gradient overlay bottom-up. Name overlay in Inter 22/700 uppercase white at the bottom — 'LEBRON JAMES'. Sport tag in 11/700 uppercase muted (`#b5b5b5`) with `+0.1em` tracking — 'BASKETBALL'. Optional Recovery score badge top-right: small lime pill with 'REC: 92%' in 11/700 uppercase black."
- "Design a WHOOP Strain arc card: card surface (`#0a0a0a`), 8px radius, 24px padding. Centre: 180° semi-circular SVG arc gauge, strain-blue (`#0093e7`) stroke, scale 0–21. Animate fill 0 → strain/21 over 1500ms ease-precise. Numeric in Inter 64/700 tabular at the bottom of the gauge ('14.2'). 'STRAIN' label in 11/700 uppercase white with `+0.16em` tracking beneath the arc."

### Iteration Guide

1. **Start with jet-black canvas.** `#000000` — same depth as Oura, more aggressive product photography.
2. **One brand voltage: lime.** `#a0d10b` electric oxidised lime. Never olive, never desaturated.
3. **Inter at 700–800 uppercase.** Hero 72/800/-2px. Score 96/800/tnum. Heavy-weight conviction, opposite of Oura's whisper.
4. **Black on lime, never white.** Black-on-lime = 13.6 AAA. White-on-lime fails.
5. **Radius parity at 8px.** Buttons AND cards. Athlete-equipment-grade chrome.
6. **Traffic-light recovery palette.** Green/yellow/red — functional state, never decorative.
7. **`tnum` everywhere.** Score, metric, leaderboard, sparkline labels — broadcast-graphic precision.
8. **Lime-glow on hover and featured.** `0 0 24px rgba(160,209,11,0.25)` — louder than Oura's gold-glow because the brand voice is louder.
