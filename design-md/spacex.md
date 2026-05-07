---
name: SpaceX
tagline: Pure-black cinematic photography, D-DIN aerospace stencil type, ghost-button minimalism — the interface disappears.
updated_at: 2026-05-04T19:57:58+12:00
published_at: 2026-05-04T19:57:58+12:00
author: webdesignhot
source_url: https://www.spacex.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [media]
tags: [dark, cinematic, aerospace, photographic, minimalist, brutalist, uppercase, industrial]
preview_swatch: ['#000000', '#f0f0fa', 'rgba(240,240,250,0.35)']
related: [tesla, nvidia, apple]
description: 'SpaceX''s website is a full-screen cinematic exhibition disguised as a marketing site. The canvas is pure black (`#000000`) and the interface vanishes behind 100vh photographs of rockets, Mars, and the curved edge of Earth. Type runs **D-DIN** — a German industrial stencil heritage face — at 48px display weight with positive 0.96px letter-spacing and `text-transform: uppercase` applied to literally every text element on the page. Spectral white (`#f0f0fa`, not pure white — there''s a faint blue-violet starlight tint) reverses out the type. There are zero shadows, zero cards, zero containers; the only interactive surface is a single ghost button with `rgba(240,240,250,0.1)` fill and a 32px pill radius. Each section is exactly one viewport tall, creating a cinematic reel where each scroll-stop reveals a new mission frame. This is what brutalist minimalism looks like when the photography does all the emotional work and the chrome refuses to compete.'

colors:
  bg: '#000000'                            # space black — page floor, the void
  bg-overlay: 'rgba(0, 0, 0, 0.5)'         # gradient scrim over hero photography for legibility
  surface: '#000000'                       # no surface tier — only black + photography
  text: '#f0f0fa'                          # spectral white — note the faint blue-violet starlight tint
  text-on-bg: '#f0f0fa'                    # same — there's only one text colour
  text-mute: 'rgba(240, 240, 250, 0.7)'    # caption / meta text at 70% spectral
  text-faint: 'rgba(240, 240, 250, 0.4)'   # disabled / very low-emphasis labels
  brand: '#f0f0fa'                         # the brand "colour" is the same spectral white
  brand-deep: '#000000'                    # there is no deep brand colour — the void carries it
  ghost-fill: 'rgba(240, 240, 250, 0.1)'   # the only button fill — barely-visible spectral wash
  ghost-fill-hover: 'rgba(240, 240, 250, 0.18)'  # hover state — still barely-visible
  ghost-border: 'rgba(240, 240, 250, 0.35)'      # the only button border
  ghost-border-strong: 'rgba(240, 240, 250, 0.55)'  # focused state border
  link: '#f0f0fa'                          # link is the same spectral white — distinguished by underline only
  link-hover: '#ffffff'                    # hover steps up to pure white
  divider: 'rgba(240, 240, 250, 0.15)'     # rare hairline divider on legal lines
  rule-strong: 'rgba(240, 240, 250, 0.4)'  # heavier rule for nav separators
  on-brand: '#000000'                      # if the brand white were ever a fill, text would invert to black
  white-100: '#ffffff'                     # absolute white — used only on hover and pressed states
  border: 'rgba(240, 240, 250, 0.25)'      # default 1px border (rare)
  border-soft: 'rgba(240, 240, 250, 0.15)' # softer divider
  border-strong: 'rgba(240, 240, 250, 0.55)'  # focused-input border
  scrim-light: 'rgba(0, 0, 0, 0.3)'        # lighter scrim variant
  scrim-deep: 'rgba(0, 0, 0, 0.7)'         # deeper scrim used on text-heavy frames
  shadow-token: 'transparent'              # there are no shadows — token kept for spec compatibility
  success: '#5be38a'                       # the rare green telemetry callout
  warning: '#ffb84a'                       # extremely rare amber
  danger: '#ff4a4a'                        # never used in chrome — only on hypothetical error states
  info: '#7ab8ff'                          # cool-blue info tone, basically unused

typography:
  display:
    family: '"D-DIN-Bold", "D-DIN", Arial, Verdana, sans-serif'
    weights: [700]
    opentype-features: []
  body:
    family: '"D-DIN", Arial, Verdana, sans-serif'
    weights: [400, 700]
    opentype-features: []
  mono:
    family: '"D-DIN", Menlo, Monaco, Consolas, monospace'
    weights: [400, 700]
  scale:
    display-hero:    { size: 48, weight: 700, lineHeight: 1.0,  tracking: '0.96px',  family: display, transform: uppercase }
    display-large:   { size: 36, weight: 700, lineHeight: 1.05, tracking: '1.04px',  family: display, transform: uppercase }
    section-head:    { size: 24, weight: 700, lineHeight: 1.1,  tracking: '1.10px',  family: display, transform: uppercase }
    sub-section:     { size: 20, weight: 700, lineHeight: 1.15, tracking: '1.15px',  family: display, transform: uppercase }
    eyebrow:         { size: 14, weight: 700, lineHeight: 1.0,  tracking: '1.20px',  family: body,    transform: uppercase }
    nav-link-bold:   { size: 13, weight: 700, lineHeight: 0.94, tracking: '1.17px',  family: body,    transform: uppercase }
    nav-link:        { size: 12, weight: 400, lineHeight: 2.0,  tracking: '1.10px',  family: body,    transform: uppercase }
    body-md:         { size: 16, weight: 400, lineHeight: 1.6,  tracking: '0.50px',  family: body,    transform: uppercase }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0.50px',  family: body,    transform: uppercase }
    caption-bold:    { size: 13, weight: 700, lineHeight: 0.94, tracking: '1.17px',  family: body,    transform: uppercase }
    caption:         { size: 12, weight: 400, lineHeight: 1.0,  tracking: '0.60px',  family: body,    transform: uppercase }
    micro:           { size: 10, weight: 400, lineHeight: 0.94, tracking: '1.00px',  family: body,    transform: uppercase }
    button-cta:      { size: 13, weight: 700, lineHeight: 1.0,  tracking: '1.30px',  family: body,    transform: uppercase }
    countdown:       { size: 48, weight: 700, lineHeight: 1.0,  tracking: '2.00px',  family: display, transform: uppercase, opentype: ['tnum'] }
    telemetry:       { size: 18, weight: 700, lineHeight: 1.0,  tracking: '1.50px',  family: body,    transform: uppercase, opentype: ['tnum'] }
    legal:           { size: 10, weight: 400, lineHeight: 1.4,  tracking: '0.80px',  family: body,    transform: uppercase }

radius:
  micro: 0      # everything sharp by default
  sm: 0
  md: 4         # the rare utility divider radius
  lg: 0
  xl: 0
  pill: 32      # the ONE rounded element — the ghost button — at 32px (effectively pill)

spacing:
  base: 4
  scale: [3, 5, 8, 12, 15, 18, 20, 24, 30, 40, 56, 80, 120, 160]

layout:
  page-width: 1920          # full-bleed at all sizes — no max-width container
  prose-width: 720
  header-height: 88
  section-height: '100vh'   # every section is exactly one viewport tall
  edge-padding: 40

components:
  button-ghost:
    bg: 'rgba(240, 240, 250, 0.1)'
    color: '#f0f0fa'
    radius: 32
    padding: '14px 28px'
    border: '1px solid rgba(240, 240, 250, 0.35)'
    height: 48
    font: button-cta
    use: 'The ONLY button — "LEARN MORE" CTAs floating over photography.'
  button-ghost-hover:
    bg: 'rgba(240, 240, 250, 0.18)'
    color: '#ffffff'
    border: '1px solid rgba(240, 240, 250, 0.55)'
    use: 'Hover state — barely brighter, transition over 250ms.'
  button-ghost-active:
    bg: 'rgba(240, 240, 250, 0.25)'
    color: '#ffffff'
    border: '1px solid rgba(240, 240, 250, 0.7)'
    use: 'Pressed state — slight inward 1px translation.'
  hero-frame:
    bg: '#000000'
    color: '#f0f0fa'
    radius: 0
    padding: '40px'
    use: '100vh full-viewport section with edge-to-edge background photography.'
  hero-overlay:
    bg: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)'
    use: 'Bottom-anchored gradient scrim over photography to lift text legibility.'
  nav-bar:
    bg: 'transparent'
    color: '#f0f0fa'
    height: 88
    padding: '0 40px'
    border: 'none'
    use: 'Transparent overlay nav floating on hero photography. Logo left, nav-link-bold links right.'
  nav-link:
    color: '#f0f0fa'
    font: nav-link-bold
    use: 'Top-bar links — uppercase D-DIN 13/700 with 1.17px tracking.'
  text-block:
    color: '#f0f0fa'
    bg: 'transparent'
    use: 'Left-aligned headline + sub-copy + ghost button stack — no surface, sits directly on photography.'
  countdown-display:
    color: '#f0f0fa'
    font: countdown
    use: 'Mission countdown timer — D-DIN-Bold 48px with tnum, uppercase.'
  telemetry-row:
    color: '#f0f0fa'
    font: telemetry
    use: 'Mission stats row — uppercase tabular numerals, evenly spaced.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-cinematic: 'cubic-bezier(0.16, 1, 0.3, 1)'
  duration-fast: 150
  duration-standard: 250
  duration-slow: 400
  duration-cinematic: 800
  ghost-button-hover: 'background opacity 0.1 → 0.18 over 250ms; border opacity 0.35 → 0.55 over 250ms'
  scroll-snap: 'sections snap-align: start so each scroll lands on a full 100vh frame'
  hero-image: 'subtle 1.0 → 1.04 ken-burns scale over 8000ms on enter, ease-cinematic'
  text-fade-in: 'translateY 16px and opacity 0 → 1 over 800ms when section enters viewport, ease-cinematic'
  reduced-motion: 'respects prefers-reduced-motion: reduce — ken-burns disabled, fade-in becomes opacity-only at 200ms'

breakpoints:
  mobile: 600
  mobile-large: 768
  tablet: 960
  desktop: 1280
  large: 1500
  ultra: 1920

shadows:
  ambient: 'none — SpaceX uses ZERO shadows'
  hover-card: 'none'
  modal: 'none'
  ring: '0 0 0 2px rgba(240, 240, 250, 0.55)'
  philosophy: 'In a design built entirely on photography, shadows are meaningless. Depth comes from the photographic content itself — receding curvature of Earth, diminishing rocket trail, atmospheric Mars haze.'

accessibility:
  contrast-text-on-bg: 17.4               # #f0f0fa on #000000 — AAA at all sizes
  contrast-ghost-text-on-image: 'photographic — relies on dark gradient overlay (rgba(0,0,0,0.5)) to guarantee 4.5+ ratio on text-over-photography'
  contrast-mute-on-bg: 11.5               # 70% spectral on black — AAA
  focus-ring: '2px solid rgba(240, 240, 250, 0.55) with 2px outline-offset'
  focus-visible: 'spectral-white outline ring — same as ghost-border-strong colour'
  reduced-motion-honored: true
  touch-target-min: 48
  keyboard-nav: 'Tab cycles nav-bar links → in-section ghost CTA → next-section nav. Arrow keys scroll-snap between full-viewport sections.'
  aria-patterns: 'each 100vh section uses role="region" with aria-label naming the mission frame; ghost button uses semantic <button> with aria-label when icon-only'
  screen-reader: 'photographs supply alt-text describing the mission scene (e.g., "Falcon 9 first-stage booster landing on droneship Of Course I Still Love You")'

dark-mode: 'native — SpaceX is dark by default, light mode does not exist. The site is the dark mode.'
---

## 1. Visual Theme & Atmosphere

SpaceX's website is a full-screen cinematic exhibition disguised as a marketing site. The canvas is pure black (`#000000`), and the interface disappears entirely behind 100vh photographs of rockets, Mars, planets, and the curved edge of Earth. There is no editorial chrome competing with the imagery — no cards, no panels, no shadows, no gradients (except for a thin scrim that lifts text legibility). The page is engineered to feel like watching a film: each section is a frame, each scroll-stop is a cut, and the viewer is positioned as someone looking through a viewport at a moment of aerospace history.

The typographic system is **D-DIN**, an industrial geometric face descended from DIN 1451 — the German engineering standard used since 1936 on road signage, factory floors, and military equipment. The proprietary D-DIN-Bold variant sets the display headlines, and the regular D-DIN handles every other text role. The defining systemic move is universal `text-transform: uppercase` paired with positive letter-spacing of 0.96–1.20px on virtually every text element on the page. There are no sentence-case treatments anywhere; even body copy, even captions, even nav links run as stenciled all-caps. This single rule converts every word into something that reads like it could be silkscreened onto a spacecraft hull or stamped onto a shipping crate at the Vandenberg launch facility.

The colour palette is radically constrained: pure black void plus a single near-white spectral tone (`#f0f0fa`) that carries a faint blue-violet starlight tint. The single chromatic move SpaceX makes — `#f0f0fa` instead of `#ffffff` — is what gives the site its cinematic feel: `#ffffff` would read as fluorescent UI white, while `#f0f0fa` reads as the colour of starlight reaching a camera sensor in deep space. Everything else lives inside the photography. There are no brand reds, no accent oranges, no semantic greens; the chromatic vocabulary refuses to invent more.

The single interactive element on the entire homepage is the **ghost button** — `rgba(240, 240, 250, 0.1)` fill with `rgba(240, 240, 250, 0.35)` border, 32px radius (effectively pill-shaped), and "LEARN MORE" set in 13px D-DIN-Bold uppercase. It floats over photography like a heads-up display element, barely visible, and the entire site is built around the discipline that this is the only chrome surface allowed. There are no secondary buttons, no tertiary links with backgrounds, no decorative icons, no badges, no tags. The page is photography + type + one button, repeated every 100vh down a scroll reel.

What makes SpaceX one of the most distinctive design systems on the public web is its commitment to negative-space radicalism. Most aerospace and tech brands fill their pages with stat blocks, capability lists, sub-feature cards, and animated decorative chrome. SpaceX sets a 48px headline, a single line of body copy, and one ghost button on top of a full-bleed photograph of a Mars sunrise — and then stops. The next section is another headline, another line, another button, on top of another photograph. The discipline is the design.

**Key Characteristics:**
- Pure black (`#000000`) canvas with full-viewport (100vh) cinematic photography — the interface is invisible
- D-DIN / D-DIN-Bold — industrial DIN-heritage typeface; no other faces appear in the system
- Universal `text-transform: uppercase` + positive 0.96–1.20px letter-spacing — aerospace stencil aesthetic
- Spectral near-white text (`#f0f0fa`) — not `#ffffff`, a faint blue-violet starlight tint
- Zero shadows, zero cards, zero containers — text floats directly on photography
- Single ghost button: `rgba(240,240,250,0.1)` fill + `rgba(240,240,250,0.35)` border + 32px pill radius
- Each section is exactly one viewport tall (100vh) with scroll-snap — cinematic frame pacing
- No decorative elements (icons, badges, dividers) — every pixel serves the photograph

## 2. Color Palette & Roles

### Primary
- **Space Black** (`#000000`): page background, the void of space — the only surface colour. Used at 50% opacity for the bottom-anchored gradient scrim that lifts text legibility on hero photography.
- **Spectral White** (`#f0f0fa`): the only text colour. Note that this is *not* `#ffffff`; the faint blue-violet hue mimics starlight reaching a CCD sensor, distinguishing the look from generic UI white.

### Brand & Dark
- The brand "colour" is the absence of colour. The wordmark, headlines, body copy, captions, nav links, and ghost-button labels are all `#f0f0fa`. There is no second brand hex.
- **Pure White** (`#ffffff`): used only on `:hover` and `:active` states of links and the ghost button — a single spectral notch up.

### Accent
- SpaceX has **no accent colour palette**. The system refuses to introduce orange, blue, green, or any chromatic accent. Where a normal brand would use an accent for a CTA or a callout, SpaceX uses spectral white at varying opacities (0.1 ghost-fill, 0.35 ghost-border, 0.7 mute, 1.0 emphasis).

### Interactive
- **Ghost Surface** (`rgba(240, 240, 250, 0.1)`): the only interactive surface fill — barely visible at 10% opacity.
- **Ghost Border** (`rgba(240, 240, 250, 0.35)`): the spectral hairline that defines the ghost button's silhouette.
- **Ghost Border Strong** (`rgba(240, 240, 250, 0.55)`): the focus-ring colour and hover-state border.
- **Hover White** (`#ffffff`): link / button text on `:hover` — the only escalation.
- **Disabled** (`rgba(240, 240, 250, 0.3)`): rare disabled state for nav links during section transitions.

### Neutral Scale
The neutral scale is built entirely from spectral-white opacity steps:
- **Spectral 100** (`#f0f0fa` / `rgba(240, 240, 250, 1.0)`): primary text
- **Spectral 70** (`rgba(240, 240, 250, 0.7)`): caption and meta text
- **Spectral 55** (`rgba(240, 240, 250, 0.55)`): focus rings, strong borders
- **Spectral 40** (`rgba(240, 240, 250, 0.4)`): disabled, faint labels
- **Spectral 35** (`rgba(240, 240, 250, 0.35)`): ghost-button border
- **Spectral 25** (`rgba(240, 240, 250, 0.25)`): rare 1px dividers
- **Spectral 15** (`rgba(240, 240, 250, 0.15)`): hairline dividers on legal lines
- **Spectral 10** (`rgba(240, 240, 250, 0.1)`): ghost-button fill

### Surface & Borders
- **Surface**: there is only one surface — `#000000`. Cards, modals, and panels do not exist on this site.
- **Border default**: `rgba(240, 240, 250, 0.25)` — used only on rare nav separators.
- **Border strong**: `rgba(240, 240, 250, 0.55)` — focus-state.
- **Border ghost**: `rgba(240, 240, 250, 0.35)` — the only "default" border in the system, on the ghost button.

### Shadow Colors
**There are no shadows on this site.** Every shadow token is `transparent`. SpaceX's depth comes from the photography itself — the receding curvature of Earth, the atmospheric haze of Mars, the diminishing exhaust trail of a Falcon 9. CSS shadows would compete with this natural photographic depth.

### Semantic
SpaceX has no semantic palette in active use. There are no success greens, warning ambers, or danger reds in the marketing chrome. The hypothetical telemetry-display elements (countdown timers, mission stats) use the same `#f0f0fa` spectral white as the rest of the system; status is communicated through type weight and labels (e.g., "GO FOR LAUNCH"), not colour.

## 3. Typography Rules

### Font Family

- **Display**: `D-DIN-Bold` — the bold cut of D-DIN, an open-source DIN 1451 derivative. Industrial geometric heritage; minimal humanist warmth.
- **Body / UI**: `D-DIN` regular — the same family, regular weight.
- **Fallback chain**: `Arial, Verdana, sans-serif` — utilitarian fallbacks that maintain the geometric sans character.
- **Mono**: D-DIN doubles as the mono companion for tabular numerals; no separate monospace face is loaded.
- **OpenType features**: `tnum` (tabular numerals) is enabled on countdown timers and telemetry rows. No stylistic sets, no ligatures — the system relies on tracking and case discipline rather than glyph variation.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Transform | Notes |
|------|------|------|--------|-------------|----------------|-----------|-------|
| display-hero | D-DIN-Bold | 48 | 700 | 1.0 | 0.96px | UPPERCASE | Mission-frame headlines ("MARS", "STARSHIP", "DRAGON") |
| display-large | D-DIN-Bold | 36 | 700 | 1.05 | 1.04px | UPPERCASE | Section headlines on internal pages |
| section-head | D-DIN-Bold | 24 | 700 | 1.1 | 1.10px | UPPERCASE | Sub-section heads |
| sub-section | D-DIN-Bold | 20 | 700 | 1.15 | 1.15px | UPPERCASE | Tertiary heads |
| eyebrow | D-DIN | 14 | 700 | 1.0 | 1.20px | UPPERCASE | Section eyebrow labels — "MISSION", "VEHICLES" |
| nav-link-bold | D-DIN | 13 | 700 | 0.94 | 1.17px | UPPERCASE | Primary nav links |
| nav-link | D-DIN | 12 | 400 | 2.0 | 1.10px | UPPERCASE | Secondary nav links |
| body-md | D-DIN | 16 | 400 | 1.6 | 0.50px | UPPERCASE | Body copy — yes, even body is uppercase |
| body-sm | D-DIN | 14 | 400 | 1.5 | 0.50px | UPPERCASE | Smaller body |
| caption-bold | D-DIN | 13 | 700 | 0.94 | 1.17px | UPPERCASE | Bold captions, photo credits |
| caption | D-DIN | 12 | 400 | 1.0 | 0.60px | UPPERCASE | Default captions |
| micro | D-DIN | 10 | 400 | 0.94 | 1.00px | UPPERCASE | Footer legal, micro labels |
| button-cta | D-DIN | 13 | 700 | 1.0 | 1.30px | UPPERCASE | Ghost button label — "LEARN MORE" |
| countdown | D-DIN-Bold | 48 | 700 | 1.0 | 2.00px | UPPERCASE + tnum | Mission countdown — "T-00:01:24:36" |
| telemetry | D-DIN | 18 | 700 | 1.0 | 1.50px | UPPERCASE + tnum | Mission stats — "ALTITUDE: 142 KM" |
| legal | D-DIN | 10 | 400 | 1.4 | 0.80px | UPPERCASE | Footer legal copy |

### Principles

- **Universal uppercase.** Every single text element on the homepage carries `text-transform: uppercase`. There are no exceptions — even paragraph body copy is uppercase. This is the system's most distinctive rule and the single fastest way to break the SpaceX feel: drop a sentence-case headline onto the canvas and the page reads as a generic dark-mode marketing site.
- **Positive letter-spacing as identity.** 0.96px on display, 1.17–1.30px on nav and buttons, 0.50px on body. The wide tracking creates the stenciled, industrial feel that connects D-DIN to its German engineering heritage. Negative letter-spacing — common on display type elsewhere on the modern web — would feel completely wrong on this canvas.
- **Two weights, strict roles.** D-DIN-Bold (700) for display and emphasis, D-DIN (400) for body. There is no medium, no semibold, no extrabold. The system rejects weight-as-emphasis for size-and-tracking-as-emphasis.
- **Tight line-heights.** Display runs 1.0 (touching), nav runs 0.94, body runs 1.5–1.6. The compressed display leading creates the "mission briefing" density; the looser body leading prevents the all-caps body from feeling shouted.
- **No italics, no decorative variations.** The system has zero italic usage, zero coloured text, zero stroke or fill variations. Emphasis comes from size, weight, or position — never from chromatic or stylistic alternates.
- **Tabular numerals on every numeric display.** Countdown timers, altitude readouts, velocity readings, mass figures — all use `font-variant-numeric: tabular-nums` so digits don't shift width during a live launch broadcast.
- **D-DIN substitution.** When D-DIN cannot be loaded, **DIN 2014** (commercial), **DIN Next** (commercial), **Bahnschrift** (Microsoft system), or **Barlow Condensed** (Google Fonts, freer geometry but same DIN heritage) are the closest substitutes. Inter and Helvetica do *not* substitute well — they lack the squared corners and engineering-stencil character that defines D-DIN.

## 4. Component Stylings

### Buttons

**`button-ghost`** — the only button on the entire site
- Background: `rgba(240, 240, 250, 0.1)` (barely visible spectral wash at 10% opacity)
- Text: Spectral White (`#f0f0fa`), 13px D-DIN 700, 1.30px tracking, uppercase
- Padding: 14px vertical, 28px horizontal (or 18px uniform on smaller variants)
- Radius: 32px (effectively pill at typical button heights)
- Border: 1px solid `rgba(240, 240, 250, 0.35)`
- Height: 48px default
- Hover: background `rgba(240, 240, 250, 0.18)`, border `rgba(240, 240, 250, 0.55)`, text `#ffffff` — all over 250ms ease-out
- Active: background `rgba(240, 240, 250, 0.25)`, slight 1px inward translation
- Focus: 2px outline ring at `rgba(240, 240, 250, 0.55)` with 2px offset
- Disabled: opacity 0.4 — but disabled buttons are essentially never seen on the site
- Use: "LEARN MORE" CTAs floating over photography in every 100vh section

### Cards & Containers

- **None.** SpaceX does not use cards, panels, modals, or containers in any traditional sense. Every content block sits directly on full-viewport photography. The absence of containers IS the design language.
- The closest thing to a "card" is a left-aligned text-block stack (eyebrow + headline + body + ghost button) positioned absolutely over a hero photograph — but it has no surface, no border, no radius, no shadow.

### Inputs & Forms

- The marketing homepage exposes essentially no form inputs. The site is a presentational reel.
- Where forms appear (career-application page, supplier-portal), they follow the system's discipline:
  - Background: transparent or `rgba(240, 240, 250, 0.05)`
  - Border: 1px solid `rgba(240, 240, 250, 0.35)`
  - Text: `#f0f0fa` 16px D-DIN 400 uppercase
  - Padding: 14px 16px
  - Radius: 0 (sharp corners — only the ghost button rounds)
  - Focus: 2px solid `rgba(240, 240, 250, 0.55)`

### Navigation

**Top bar (`nav-bar`)**
- Background: transparent — sits directly over hero photography
- Height: 88px desktop, 64px mobile
- Logo: SpaceX wordmark, 147×19px, spectral white SVG
- Links: D-DIN 13/700 uppercase with 1.17px tracking, spectral white, no underline at rest
- Hover: text fades to `#ffffff` over 200ms; no underline animation
- Mobile: collapses to a hamburger icon (3 horizontal spectral lines), opens a full-screen overlay menu

**Mobile menu overlay**
- Background: `rgba(0, 0, 0, 0.95)` — near-opaque black scrim
- Links: stacked vertically, 24/700 uppercase D-DIN, 30px row gap
- Close: spectral X icon in upper-right

### Image Treatment

- Full-viewport (100vh) photography — every section background
- `background-size: cover`, `background-position: center`
- Aerospace photography only: rockets, Mars, Earth-from-orbit, droneship landings, internal hangar shots, crew portraits in launch suits
- Bottom-anchored linear gradient scrim: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)` — applies the lower half of the frame to lift text legibility
- No border radius, no frames, no captions overlaid — edge-to-edge imagery
- Subtle ken-burns (`scale: 1.0 → 1.04`) over 8 seconds when section enters viewport, ease-cinematic
- Lazy loading: standard `loading="lazy"` on below-fold imagery; hero is `eager` with high-priority preload

### Telemetry & Countdown Display

When a launch is upcoming, the homepage features a live mission countdown:
- Background: transparent (over hero photography)
- Type: D-DIN-Bold 48px uppercase, 2.00px tracking, `tnum`
- Format: "T-00:01:24:36" (days:hours:minutes:seconds)
- Updates every second via JS; transitions are instant (no ease — the digits flip cleanly)

### Decorative Elements

- **There are none.** No icons (except the hamburger), no badges, no tags, no decorative dividers, no SVG illustrations, no animated chrome. The system rejects every flourish that isn't structural.

## 5. Layout Principles

### Spacing System

- Base unit: **4px** (with 3px and 5px micro-tokens as exceptions)
- Scale: `3 · 5 · 8 · 12 · 15 · 18 · 20 · 24 · 30 · 40 · 56 · 80 · 120 · 160`
- The scale is intentionally minimal — spacing is not the organising principle, photography is.
- Section vertical: each section is exactly **100vh**, so traditional vertical padding doesn't apply between sections (they snap-align)
- In-section padding: 40px edge padding desktop, 24px mobile
- Text-block to ghost-button gap: 24–40px depending on hero density

### Grid & Container

- **No traditional grid.** Each section is a full-viewport cinematic frame.
- Text is positioned absolutely with generous left/bottom padding (typically `40px 40px 80px 40px`) over photography.
- No max-width container — content bleeds to viewport edges.
- Left-aligned text blocks; centred treatments are rare.
- Multi-column layouts essentially do not exist on the homepage.

### Whitespace Philosophy

- **Photography IS the whitespace.** Empty space in the design is never empty — it's filled with the dark expanse of space, the curve of a planet, or the flame of a rocket engine. Traditional whitespace concepts don't apply.
- **Vertical pacing through viewport.** Each section is exactly one viewport tall, creating a rhythmic scroll where each "page" reveals a new scene. The pacing is editorial-cinematic, not blog-editorial.

### Section Cadence

The homepage scroll is a sequence of mission frames:
1. Hero — current mission (e.g., "STARSHIP")
2. Vehicles — Falcon 9 frame
3. Vehicles — Falcon Heavy frame
4. Vehicles — Dragon frame
5. Vehicles — Starship frame
6. Mission — Mars frame
7. Footer band — minimal legal + social link strip

Each section follows the identical recipe: photography → eyebrow → 48px headline → 16px body → ghost button. The discipline is the rhythm.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| micro | 0 | Default — every container, every image, every input |
| sm | 0 | (not used) |
| md | 4 | Rare utility dividers and corner cuts (e.g., status badges in Crew Dragon documentation) |
| lg | 0 | (not used) |
| xl | 0 | (not used) |
| pill | 32 | The ONE rounded element — the ghost button |

There are exactly two radius values on the entire site: **0 and 32px**. There are no `4px / 8px / 12px / 16px` graduations. Every corner is either sharp (because it's part of the photographic / typographic substrate) or fully softened (because it's the single ghost button). This is the strictest corner discipline on the public web — even WIRED, which famously commits to sharp corners, has more nuance.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Photography | Full-viewport imagery with ken-burns scale | Background layer — always present in every section |
| 1 — Overlay scrim | `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)` | Bottom-half gradient for text legibility |
| 2 — Text | Spectral white text, no shadow, no surface | Content layer — type floats directly on image |
| 3 — Ghost button | `rgba(240, 240, 250, 0.1)` fill with spectral hairline | The only interactive surface — barely-visible HUD element |
| 4 — Modal (rare) | `rgba(0, 0, 0, 0.95)` near-opaque scrim | Mobile menu overlay |

### Shadow Philosophy

**SpaceX uses ZERO box-shadows.** In a design built entirely on photography, shadows are meaningless — every surface is already a photograph with natural lighting baked into the bytes. Depth comes from the photographic content itself: the receding curvature of Earth in a Dragon-window shot, the diminishing rocket trail in a launch frame, the atmospheric haze around Mars on a HiRISE-style image. Adding `box-shadow` would compete with this natural photographic depth and break the cinematic illusion.

### Decorative Depth

- **Ken-burns scale** on hero photography (1.0 → 1.04 over 8 seconds) — the only "motion depth" cue in the system
- **Bottom gradient scrim** — supplies functional contrast for text-on-image, also reads as the natural shadow of the photograph against the next frame
- **Section snap-align** — each scroll-stop creates a "cut" depth, like a film transition

## 8. Interaction & Motion

### Easing Curves

- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — used on most colour and opacity transitions
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — used on the ghost button hover lift
- **Cinematic**: `cubic-bezier(0.16, 1, 0.3, 1)` — used on text fade-ins and ken-burns scale; long, anticipatory ease-out

### Duration Buckets

- **Fast** (150ms): colour changes on the ghost button, link-hover swaps
- **Standard** (250ms): button hover-state transitions (background + border opacity)
- **Slow** (400ms): section-enter text reveals
- **Cinematic** (800ms): full text-block fade-in with translateY 16 → 0
- **Atmospheric** (8000ms): ken-burns scale on hero photography

### Per-Component Motion

**Ghost button hover**
- Background opacity: `0.1 → 0.18` over 250ms ease-standard
- Border opacity: `0.35 → 0.55` over 250ms ease-standard
- Text colour: `#f0f0fa → #ffffff` over 200ms
- No transform — no lift, no scale, no shadow change. The button stays exactly where it is; only the colour values intensify.

**Section enter**
- Text-block opacity: `0 → 1` over 800ms ease-cinematic, with a 100ms stagger between eyebrow / headline / body / button
- Text-block translateY: `16px → 0` over 800ms ease-cinematic
- Photography ken-burns: `scale(1.0) → scale(1.04)` over 8000ms ease-cinematic, starts on enter

**Scroll behaviour**
- `scroll-snap-type: y mandatory` on the scroll container
- `scroll-snap-align: start` on each 100vh section
- The result: every scroll gesture lands cleanly on a full mission frame

### Reduced Motion Strategy

`@media (prefers-reduced-motion: reduce)`:
- Ken-burns scale: disabled (image stays at scale 1.0)
- Text fade-in: opacity-only, 200ms (no translateY)
- Scroll snap: preserved (it's an accessibility feature for users who want predictable section landing)
- Ghost button hover: opacity transitions preserved at 150ms

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | WCAG Level |
|------|-------|------------|
| `#f0f0fa` text on `#000000` bg | 17.4:1 | AAA at all sizes |
| `#f0f0fa` text on photography (with 0.5 scrim) | ~10:1 typical | AAA — the bottom scrim is the legibility guarantee |
| `rgba(240,240,250,0.7)` mute on `#000000` | 11.5:1 | AAA |
| Ghost button text `#f0f0fa` on `rgba(240,240,250,0.1)` over photography | ~6:1 typical | AA — relies on photography behind being mid-tone |
| Focus ring `rgba(240,240,250,0.55)` on photography | ~4.5:1 typical | AA |

### Focus Indicators

- 2px outline ring in `rgba(240, 240, 250, 0.55)` with 2px outline-offset
- Applied to ghost button, nav links, and all focusable elements
- The ring is intentionally spectral white (matching the brand palette) rather than the conventional accessibility blue — SpaceX preserves chromatic discipline even in focus states

### ARIA Patterns

- Each 100vh section uses `role="region"` with `aria-label` naming the mission frame (e.g., `aria-label="Starship Mission"`)
- The ghost button uses semantic `<button>` element with `aria-label` when icon-only ("LEARN MORE" is text, but icon-only variants supply aria-label)
- Mobile menu trigger uses `aria-expanded` and `aria-controls` to announce its state
- Photographs supply meaningful `alt` text describing the mission scene (e.g., "Falcon 9 first-stage booster landing on droneship Of Course I Still Love You")

### Keyboard Navigation

- Tab cycles: nav-bar logo → nav links → in-section ghost CTA → next-section nav
- Arrow keys: scroll-snap between full-viewport sections (when keyboard scroll is enabled)
- Escape: closes the mobile menu overlay
- No skip-link is exposed; the SpaceX implementation could improve here — derivative work should add a "Skip to main content" link before the nav

### Screen Reader Hints

- `alt` text on photography is descriptive ("Crew Dragon spacecraft docking at the International Space Station, view from the Russian segment Earth window")
- Decorative-only photography (rare on this site) uses `alt=""`
- Eyebrow labels are not announced as headings — they're styled spans; section headlines (`<h2>`) carry the heading semantics

### Reduced Motion Handling

Detailed in §8. The system respects `prefers-reduced-motion: reduce` and disables ken-burns, ambient text translation, and atmospheric scale animations while preserving structural transitions (focus rings, section snap, button colour changes).

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | Headlines drop to ~36px; ghost button stays 48px height; nav collapses to hamburger; section padding 24px edges |
| Mobile Large | 600–767px | Headlines 40px; layout still stacked single-column |
| Tablet | 768–959px | Headlines 44px; nav re-expands to inline links if room permits |
| Tablet Large | 960–1279px | Standard scaling — headlines 48px |
| Desktop | 1280–1499px | Full layout |
| Large Desktop | 1500–1919px | Expanded — text blocks shift toward 1/3 horizontal positioning |
| Ultra-wide | ≥1920px | Maximum viewport — content remains full-bleed; whitespace expands at edges |

### Touch Targets

- Ghost button: 48px height with 14px vertical padding — comfortably exceeds WCAG AAA (44px)
- Nav links: 44px tappable hit area (visible 24px height + invisible padding)
- Hamburger menu: 48×48px tap target

### Collapsing Strategy

- **Photography**: maintains full-viewport at every breakpoint; subject-positioning shifts via `background-position` to keep focal point in frame (e.g., a rocket photographed in landscape may shift toward left-third on portrait mobile)
- **Hero text**: 48px display steps down through 44 → 40 → 36px on mobile
- **Navigation**: horizontal links collapse to hamburger at 768px; logo stays centred or left-aligned
- **Text blocks**: reposition but maintain "left-aligned over photography" pattern; on mobile, text shifts toward bottom-third of the frame to clear the rocket-photography focal subject
- **Full-viewport sections**: maintained on mobile — no breakpoint shrinks below 100vh per section
- **Ghost button**: stays 48px height at every breakpoint; padding may compress 14×28 → 12×24 on smallest widths

### Image Behavior

- Edge-to-edge photography at all viewport sizes
- `background-size: cover` with `background-position: center` (with art-direction overrides per breakpoint)
- Bottom gradient scrim adapts to content position
- Same source photographs at every breakpoint; SpaceX does not art-direct different crops per device — the responsiveness is in scrim positioning and text placement
- Hero-image priority: `<link rel="preload" as="image">` with `fetchpriority="high"` for above-fold imagery

### Container Queries

Not used. The system is simple enough that media-query breakpoints handle every responsive case.

## 11. Content & Voice

### Tone

The voice is **mission-briefing serious**. Every word reads like it could appear in a NASA flight readiness review or a SpaceX launch-control transcript. There are no playful asides, no second-person marketing copy ("You'll love this"), no exclamation points. The brand tone is technical, declarative, slightly understated — letting the photography and the engineering achievements carry the emotional weight.

### Microcopy Patterns

- **Button verbs**: "LEARN MORE" is the dominant CTA. Variations include "WATCH" (for video), "READ FULL MISSION SUMMARY" (longform), "VIEW LIVE STREAM" (during launches). The verbs are imperative, technical, and never softened ("Discover more" or "Get started" would feel completely off-brand).
- **Headline structure**: noun-only or verb-noun pairs in uppercase. Examples: "STARSHIP", "MARS", "MAKING HUMANITY MULTIPLANETARY", "LANDING THE FIRST-STAGE BOOSTER".
- **Body copy**: short declarative sentences. Three to five lines maximum. Reads like flight-readiness documentation, not marketing.
- **Error messages** (rare): "MISSION DATA UNAVAILABLE" (not "Sorry, something went wrong"). The brand voice persists even into edge-case copy.
- **Success confirmations** (rare): "RESERVATION CONFIRMED" (e.g., on the Mars colonisation hypothetical sign-up form).

### Empty States

When data is missing (e.g., the launches feed is empty), the system says "NO UPCOMING MISSIONS" or "ALL SYSTEMS NOMINAL" — never "Nothing here yet" or "Check back later". The brand never breaks character.

### CTA Verb Conventions

The brand uses imperative technical verbs:
- LEARN MORE
- WATCH
- VIEW
- READ
- DOWNLOAD MISSION KIT
- VIEW LIVE STREAM

It does *not* use:
- Get started (too SaaS-marketing)
- Sign up (consumer-friendly)
- Try free (trial-product language)
- Discover (too ambiguous)
- Explore (too travel-marketing)

### Numbers & Telemetry

Mission numbers always use:
- Tabular numerals (`tnum`)
- Uppercase units ("142 KM", "2,847 KG", "T-00:01:24:36")
- Comma thousands separators in payload mass figures
- Metric units (the brand is internationalist; no imperial fallback)

## 12. Dark Mode & Theming

**SpaceX is dark by default. There is no light mode.** The brand commits absolutely to the black canvas — every page, every breakpoint, every state. There is no `prefers-color-scheme: light` override. The site does not respect the user's OS preference for light mode because the brand identity *is* darkness; offering a light variant would break the cinematic-photography illusion and convert the page into a generic marketing site.

This is one of the few major brand sites on the public web that ships dark-only and does not apologise for it. (Apple's Apple TV+ marketing also ships dark-only; SpaceX is in that elite company.)

### Theming Notes for Derivatives

If you are adapting this system for a brand that needs a light-mode option:
- Swap `#000000` → `#fafafa` (very pale grey, never `#ffffff` — the spectral system breaks against pure white)
- Swap `#f0f0fa` → `#1a1a1f` (dark spectral — preserves the blue-violet tint inverted)
- Ghost button: `rgba(0, 0, 0, 0.05)` fill, `rgba(0, 0, 0, 0.35)` border
- Photography: shift to bright-aerospace imagery (sun-side launch shots, daylight Mars panoramas) rather than night-launch and deep-space frames
- The all-uppercase + positive tracking discipline is preserved unchanged

## 13. Lineage & Influences

SpaceX's design language draws from:

- **DIN 1451** (1936, Ludwig Goller) — the German engineering and signage standard whose geometry D-DIN inherits. The all-caps + positive tracking treatment is a direct reference to industrial labelling aesthetics. https://en.wikipedia.org/wiki/DIN_1451
- **NASA "worm" wordmark and 1970s mission-graphics design** — the muscular aerospace lettering tradition. https://www.nasa.gov/headquarters/library/find/bibliographies/the-worm/
- **Stanley Kubrick's *2001: A Space Odyssey* (1968)** — the cinematic dark-space aesthetic with stark white type on black, anticipating SpaceX's chromatic discipline by 50 years.
- **Apple's product-photography pages** (iPhone, AirPods marketing) — full-bleed photography with edge-to-edge typography is an Apple gesture that SpaceX absorbs and intensifies.
- **Tesla.com** (sister-company aesthetic) — also full-bleed photography over dark canvas, but with sentence-case body copy. SpaceX is the more disciplined sibling.
- **Brutalist web design** — the rejection of decorative chrome (no shadows, no cards, no gradients) traces to Read.cv and brutalist movements, though SpaceX predates and exceeds them.

What SpaceX rejects:
- Stripe-like layered illustrations
- Linear/Vercel-style developer-tool minimalism (those are dense; SpaceX is empty)
- Material Design elevation tiers
- Apple's softer typographic warmth (Apple's headlines are sentence-case; SpaceX's are uppercase-only)

### Named Influences
- DIN 1451 / D-DIN typeface heritage — https://en.wikipedia.org/wiki/DIN_1451
- NASA Worm wordmark — https://www.nasa.gov/headquarters/library/find/bibliographies/the-worm/
- Tesla.com cinematic photography — https://www.tesla.com
- Apple TV+ dark canvas — https://tv.apple.com
- 2001: A Space Odyssey title-card aesthetics

## 14. Do's and Don'ts

### Do

- Use full-viewport (100vh) photography as the primary design element — every section is a scene
- Apply `text-transform: uppercase` to ALL text — the aerospace stencil voice is non-negotiable
- Use D-DIN exclusively — no other fonts exist in the system
- Keep the colour palette to black + spectral white (`#f0f0fa`) only — no greens, blues, oranges, reds
- Use the ghost button (`rgba(240,240,250,0.1)` fill) as the sole interactive element
- Apply dark gradient overlays (bottom-anchored, 0% → 50%) for text legibility on photographs
- Let photography carry the emotional weight — the type system is functional, not expressive
- Use positive letter-spacing (0.96–1.30px) on every text element
- Set headlines tight (line-height 1.0) — display type touches itself, body opens up to 1.5–1.6
- Lock section heights to 100vh — every scroll-stop is a cinematic frame
- Use tabular numerals (`tnum`) on every numeric display (countdowns, telemetry, payload mass)
- Honor `prefers-reduced-motion: reduce` — disable ken-burns and translateY animations

### Don't

- Don't add cards, panels, or containers — text sits directly on photography
- Don't use shadows — they have no meaning in a photographic context and break the visual illusion
- Don't introduce colours — the palette is strictly achromatic with spectral tint
- Don't use sentence case — everything is uppercase, no exceptions, even body copy
- Don't use negative letter-spacing — all tracking is positive (0.96px–1.30px)
- Don't reduce photography to thumbnails — every image is full-viewport
- Don't add decorative elements (icons, badges, dividers) — the design is photography + type + one button
- Don't introduce a second button variant — the ghost button is the entire interactive surface
- Don't soften the corner discipline — sharp everywhere except the 32px ghost button radius
- Don't break section pacing — each scroll-stop must be a full 100vh frame
- Don't use `#ffffff` for text — the spectral `#f0f0fa` is structurally important to the cinematic feel
- Don't add hover-lift transforms — the ghost button stays exactly where it is; only colour values intensify

## 15. Agent Prompt Guide

### Quick Color Reference

- Background: Space Black (`#000000`)
- Text: Spectral White (`#f0f0fa`)
- Button background: Ghost (`rgba(240, 240, 250, 0.1)`)
- Button border: Ghost Border (`rgba(240, 240, 250, 0.35)`)
- Hover white: Pure White (`#ffffff`)
- Overlay scrim: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)`
- Focus ring: `rgba(240, 240, 250, 0.55)`

### Example Component Prompts

- "Create a full-viewport hero: 100vh height, background-image covering with `background-size: cover`, bottom-anchored gradient overlay `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)`. Headline at 48px D-DIN-Bold, uppercase, letter-spacing 0.96px, spectral white (#f0f0fa) text. Body at 16px D-DIN regular, uppercase, letter-spacing 0.5px. Ghost CTA button: rgba(240,240,250,0.1) bg, 1px solid rgba(240,240,250,0.35) border, 32px radius, 14px vertical 28px horizontal padding, 13px D-DIN bold uppercase 1.30px tracking 'LEARN MORE' label."
- "Design a navigation: transparent background over photography, 88px height. SpaceX wordmark left-aligned at 147×19px in spectral white. Nav links right-aligned: D-DIN 13px weight 700, uppercase, letter-spacing 1.17px, spectral white text. No underline at rest, hover fades text to pure white over 200ms."
- "Build a content section: 100vh height with `scroll-snap-align: start`, full-viewport background photography, bottom gradient scrim. Left-aligned text block positioned at 40px from left edge and 80px from bottom: eyebrow at 14px D-DIN bold uppercase 1.20px tracking, headline at 48px D-DIN-Bold uppercase 0.96px tracking, body at 16px D-DIN uppercase, ghost button anchored beneath."
- "Create a mission countdown display: D-DIN-Bold 48px, uppercase, letter-spacing 2.00px, tabular numerals enabled, format 'T-00:01:24:36'. Position centered or top-anchored over hero photography. No background, no border."
- "Create a micro label: D-DIN 10px weight 400, uppercase, letter-spacing 1.00px, spectral white at 70% opacity, line-height 0.94."
- "Design a mobile menu overlay: rgba(0,0,0,0.95) full-screen scrim. Stacked nav links centered: D-DIN-Bold 24px, uppercase, letter-spacing 1.20px, 30px row gap. Close X icon in upper-right at 24×24px in spectral white."

### Iteration Guide

1. **Start with photography.** The image IS the design. Generate or source a 100vh aerospace photograph before writing any markup.
2. **All text is uppercase with positive letter-spacing.** No exceptions. If a headline reads in sentence case, the SpaceX feel is broken instantly.
3. **Only two colours: black and spectral white (`#f0f0fa`).** If your design has a green button or a blue link, you've left the system.
4. **Ghost buttons are the only interactive element.** Transparent fill, spectral border, 32px radius. No solid CTAs, no coloured pills.
5. **Zero shadows, zero cards, zero decorative elements.** If you find yourself reaching for `box-shadow`, stop and remove it. Photography supplies the depth.
6. **Every section is full-viewport (100vh).** Scroll-snap-align: start on each section. The cinematic pacing is structural.
7. **D-DIN with positive tracking is non-negotiable.** Substitutes (DIN Next, Bahnschrift, Barlow Condensed) work in fallback chains; Helvetica and Inter do not — they read too humanist.
8. **Honour the discipline of emptiness.** Most pages have only one headline + one body line + one button per 100vh. Resist the urge to add stat blocks, feature lists, or testimonials.
