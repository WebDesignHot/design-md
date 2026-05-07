---
name: WIRED
tagline: Newsstand-density editorial grid, sharp-corner buttons, mono ALL-CAPS kickers — Conde Nast meets engineering lab.
updated_at: 2026-05-04T19:57:58+12:00
published_at: 2026-05-04T19:57:58+12:00
author: webdesignhot
source_url: https://www.wired.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [media]
tags: [editorial, magazine, sharp, light, broadsheet, technology, journalism, mono]
preview_swatch: ['#ffffff', '#000000', '#057dbc']
related: [nytimes, theatlantic, theguardian]
description: 'WIRED''s homepage feels like a printed broadsheet that someone has plugged into a wall socket. The grid is dense, the rules are thin, the type is loud, and almost every surface is paper-white or pure black with no rounded corners and no decoration that doesn''t earn its place. Image rectangles butt directly against headlines, hairline dividers separate stories the way pica rules separate columns in a real magazine, and the only colours that aren''t grayscale come from the photography itself. There is no "card with shadow" anywhere — the entire layout is held together by typographic weight and the discipline of rules and whitespace, the same way a Conde Nast print page would be assembled in a paste-up room. The signature move is the typographic stack: a brutally large custom serif (WiredDisplay) for the main headline, a humanist serif (BreveText) for body and decks, a geometric sans (Apercu) for UI affordances, and a hard mono uppercase (WiredMono) for the kickers, eyebrows, and timestamps that mark every story. There is exactly one accent colour that matters: a saturated link blue (`#057dbc`) that lights up underlined hover states like a CRT scanline.'

colors:
  bg: '#ffffff'                        # paper white — the entire site canvas
  bg-dark: '#1a1a1a'                   # the only inverted region — footer ink
  surface: '#ffffff'
  surface-dark: '#1a1a1a'
  brand: '#000000'                     # pure ink — ribbons, button borders, headline rules
  brand-deep: '#000000'                # there is no deeper brand
  brand-accent: '#057dbc'              # link blue — the SINGLE editorial accent
  text: '#1a1a1a'                      # page ink — slightly softened so longform doesn't fatigue
  text-strong: '#000000'               # ribbons and section markers
  text-headline: '#1a1a1a'             # all H1/H2 display
  text-muted: '#757575'                # caption gray — bylines, timestamps, photo credits
  text-disabled: '#999999'              # disabled gray — inactive links
  text-on-dark: '#ffffff'              # paper white reversed on footer ink
  link: '#1a1a1a'                      # default link is ink with underline
  link-hover: '#057dbc'                # link hover swaps to brand blue (the only chrome colour)
  link-visited: '#5e2a8c'              # rare visited state
  border-hairline: '#e2e8f0'           # quiet section divider, almost invisible
  border-rule: '#000000'               # editorial column divider — printerly, structural
  border-strong: '#000000'             # 2px hard rule on buttons, ribbons
  border-on-dark: '#4a5568'            # rare divider inside footer ink
  scrim: 'rgba(0,0,0,0.6)'             # modal scrim
  shadow-token: 'transparent'          # WIRED ships zero shadows
  on-brand: '#ffffff'
  success: '#0e7c5b'                   # in-product green (rare)
  warning: '#a35316'                   # advisory amber-brown (rare)
  danger: '#e53e3e'                    # validation error red (Fides cookie overlay)
  info: '#057dbc'                      # info reuses brand blue
  cookie-red: '#e53e3e'                # the rare red used in cookie consent

typography:
  display:
    family: '"WiredDisplay", "helvetica", serif'
    weights: [400]
    opentype-features: []
  body:
    family: '"BreveText", "helvetica", serif'
    weights: [400, 700]
  ui:
    family: '"Apercu", "helvetica", sans-serif'
    weights: [400, 700]
  mono:
    family: '"WiredMono", "Monaco", "Courier New", "Courier", monospace'
    weights: [400, 700]
  legacy:
    family: '"ProximaNova", "helvetica", sans-serif'
    weights: [400]
  inter:
    family: '"Inter", system-ui, sans-serif'
    weights: [400, 600]
  scale:
    display-hero:        { size: 64, weight: 400, lineHeight: 0.93, tracking: '-0.5px',    family: display }
    display-mid:         { size: 26, weight: 400, lineHeight: 1.08, tracking: '0',         family: display }
    section-heading:     { size: 20, weight: 700, lineHeight: 1.20, tracking: '-0.28px',   family: ui }
    subheading:          { size: 17, weight: 700, lineHeight: 1.29, tracking: '-0.144px',  family: ui }
    article-deck:        { size: 19, weight: 400, lineHeight: 1.47, tracking: '0.108px',   family: body }
    article-body:        { size: 16, weight: 400, lineHeight: 1.50, tracking: '0.09px',    family: body }
    ui-heading:          { size: 16, weight: 700, lineHeight: 1.25, tracking: '0.30px',    family: ui }
    button-label:        { size: 16, weight: 700, lineHeight: 1.25, tracking: '0.30px',    family: ui }
    inline-link:         { size: 14, weight: 400, lineHeight: 1.29, tracking: '0.40px',    family: ui }
    eyebrow-kicker:      { size: 13, weight: 400, lineHeight: 1.23, tracking: '0.92px',    family: mono, transform: uppercase }
    eyebrow-bold:        { size: 13, weight: 700, lineHeight: 1.23, tracking: '0.92px',    family: mono, transform: uppercase }
    section-ribbon:      { size: 12, weight: 700, lineHeight: 1.0,  tracking: '1.20px',    family: mono, transform: uppercase }
    photo-caption:       { size: 12.73, weight: 700, lineHeight: 2.20, tracking: '0.108px', family: body }
    timestamp-meta:      { size: 12, weight: 400, lineHeight: 1.33, tracking: '1.10px',    family: mono, transform: uppercase }
    tertiary-footer:     { size: 11, weight: 400, lineHeight: 1.45, tracking: '0',         family: legacy }
    inter-ui-heading:    { size: 16, weight: 600, lineHeight: 1.23, tracking: '0.108px',   family: inter }
    inter-ui-caption:    { size: 14, weight: 600, lineHeight: 1.40, tracking: '0',         family: inter }

radius:
  none: 0       # everything square — the default
  square: 0
  icon: 9999    # only on round icon buttons (50%) and avatars
  pill-text: 1920  # only inside text spans like "BREAKING"
  micro: 0
  sm: 0
  md: 0
  lg: 0
  xl: 0
  pill: 9999

spacing:
  base: 8
  scale: [1, 4, 8, 12, 16, 24, 32, 40, 48, 64]

layout:
  page-width: 1600
  prose-width: 720
  header-height: 72
  utility-bar-height: 36

components:
  button-subscribe:
    bg: '#ffffff'
    color: '#000000'
    radius: 0
    padding: '12px 24px'
    border: '2px solid #000000'
    height: 48
    font: button-label
    use: 'Primary CTA — printerly hard rule, square corners. Hover inverts to black bg + white text.'
  button-subscribe-hover:
    bg: '#000000'
    color: '#ffffff'
    radius: 0
    border: '2px solid #000000'
    use: 'Hover state — pure inversion in 150ms.'
  button-signin-inverted:
    bg: '#000000'
    color: '#ffffff'
    radius: 0
    padding: '12px 24px'
    border: '2px solid #ffffff'
    use: 'Sign-in / footer CTA — inverted version on dark zones.'
  button-tertiary-link:
    bg: 'transparent'
    color: '#1a1a1a'
    border: 'none'
    use: 'Underlined inline link — hover swaps colour to #057dbc.'
  button-icon-circle:
    bg: 'transparent'
    color: '#1a1a1a'
    radius: 9999
    border: '1px solid #757575'
    width: 40
    height: 40
    use: 'Header icon controls only — search, account, social.'
  story-tile:
    bg: '#ffffff'
    color: '#1a1a1a'
    radius: 0
    border: 'none'
    use: 'Story listing — image stacked above kicker + headline + deck. Separated by 1px hairline rules. NO surface, NO shadow, NO radius.'
  ribbon-section-marker:
    bg: '#000000'
    color: '#ffffff'
    radius: 0
    height: 36
    padding: '0 16px'
    font: section-ribbon
    use: 'Full-bleed black bar with white WiredMono uppercase label. "MOST POPULAR", "BACKCHANNEL", "GEAR".'
  pill-text-span:
    bg: '#000000'
    color: '#ffffff'
    radius: 1920
    padding: '2px 8px'
    use: 'Inline text span only — "BREAKING", "LIVE". Mono caps 11–12px.'
  numbered-list:
    color: '#1a1a1a'
    use: '"Most Popular" vertical list — WiredDisplay numerals 40–48px tight against headlines.'
  newsletter-input:
    bg: '#ffffff'
    color: '#1a1a1a'
    radius: 0
    padding: '12px 16px'
    border: '2px solid #000000'
    height: 48
    font: button-label
    use: 'Square 2px black border, no glow ring on focus.'
  utility-bar:
    bg: '#000000'
    color: '#ffffff'
    height: 36
    padding: '0 24px'
    border: 'none'
    font: timestamp-meta
    use: 'Top utility strip — mono caps links separated by hairline dividers.'
  main-nav:
    bg: '#ffffff'
    color: '#1a1a1a'
    height: 72
    padding: '0 32px'
    border-bottom: '1px solid #e2e8f0'
    use: 'Paper-white row beneath the bug logo. Apercu 14–16px regular.'
  hairline-rule:
    bg: '#000000'
    height: 1
    use: '1px solid black hairline — editorial column divider, printerly.'
  hairline-soft:
    bg: '#e2e8f0'
    height: 1
    use: '1px solid quiet hairline — section divider, almost invisible.'
  footer:
    bg: '#1a1a1a'
    color: '#ffffff'
    radius: 0
    padding: '64px 32px'
    use: 'Inverted dark zone — paper-white type on ink, only inversion in the entire site.'
  newsletter-form:
    bg: '#ffffff'
    color: '#1a1a1a'
    radius: 0
    use: 'Square 2px black input + inverted black submit button — printerly form.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 120
  duration-standard: 150
  duration-slow: 200
  button-invert: 'colour swap on background and text from white→black or black→white over 150ms — instant inversion, no easing animation on the rule itself'
  link-hover: 'text colour swap from #1a1a1a → #057dbc, instant or 120ms maximum, underline persists'
  story-tile-hover: 'headline link text shifts from #1a1a1a to #057dbc and underline appears; the image itself does not zoom, lift, or shadow'
  page-transition: 'instant page navigation — editorial restraint'
  reduced-motion: 'respects prefers-reduced-motion: reduce — colour transitions remain (they are functional feedback), no other transitions exist'

breakpoints:
  small-mobile: 375
  mobile: 767
  tablet: 1023
  desktop: 1599
  large-desktop: 1600

shadows:
  ambient: 'none — there is exactly ONE shadow token in the entire site (a default 0 0 0 transparent placeholder)'
  hover-card: 'none'
  modal: 'rgba(0,0,0,0.4) 0 8px 24px'
  ring: '2px solid #000000'
  philosophy: 'WIRED is flat by religion. Depth is communicated by rule weight (1px hairline → 2px hard rule → solid black ribbon), not by simulated lighting. The only "elevation" is the inverted footer block.'

accessibility:
  contrast-text-on-bg: 16.0           # #1a1a1a on #ffffff — AAA
  contrast-link-hover: 4.7            # #057dbc on #ffffff — AA at body, AAA at large
  contrast-mute-on-bg: 4.6            # #757575 on #ffffff — AA at body
  contrast-text-on-dark: 16.0         # #ffffff on #1a1a1a — AAA
  contrast-button-border: 21.0        # 2px #000000 on #ffffff — maximum
  focus-ring: '2px solid #000000 (matches the button border weight)'
  reduced-motion-honored: true
  touch-target-min: 44
  keyboard-nav: 'Tab cycles utility bar → main nav → bug logo → masthead search → primary section → article tiles → footer columns. Skip-link at very top.'
  aria-patterns: 'editorial articles use <article> with <header> containing eyebrow + headline; ribbons are aria-hidden="true" decorative'
  screen-reader: 'kickers are styled <p> not <h*>; headlines carry the heading semantics. Captions use <figcaption>.'
  known-gap: 'newsletter input focus uses caret only (no glow ring) — derivative work should add 2px outset for AAA keyboard accessibility'

dark-mode: null   # Light-only — WIRED has no dark mode variant. The footer is the only inverted region; the entire body of the site stays paper-white.
---

## 1. Visual Theme & Atmosphere

WIRED's homepage feels like a printed broadsheet that someone has plugged into a wall socket. The grid is dense, the rules are thin, the type is loud, and almost every surface is paper-white or pure black with no rounded corners and no decoration that doesn't earn its place. Image rectangles butt directly against headlines, hairline dividers separate stories the way pica rules separate columns in a real magazine, and the only colours that aren't grayscale come from the photography itself.

There is no "card with shadow" anywhere on the site. The entire layout is held together by typographic weight and the discipline of rules and whitespace, the same way a Conde Nast print page would be assembled in a paste-up room. Story tiles consist of an image rectangle stacked above a kicker, headline, and deck, separated from neighbouring tiles by 1px hairline rules or by raw whitespace. The closest thing to a "container" on the entire site is a black ribbon section header (e.g., "MOST POPULAR") — a full-bleed black bar with white WiredMono caps, no padding refinement, no rounded ends.

The signature move is the **typographic stack**: a brutally large custom serif (WiredDisplay) for the main headline, a humanist serif (BreveText) for body and decks, a geometric sans (Apercu) for UI affordances, and a hard mono uppercase (WiredMono) for the kickers, eyebrows, and timestamps that mark every story. That mono kicker — usually black caps with letter-spacing wide enough to read as a Geiger-counter tick — is what makes a WIRED page instantly recognisable from across the room. Without the kicker the page reads as a generic blog; with it, the page reads as WIRED.

There is exactly one accent colour that matters: a saturated link blue (`#057dbc`) that lights up underlined hover states like a CRT scanline. Everything else is black, paper white, and two grays — the design's confidence comes from refusing to invent more. The Fides cookie overlay borrows a `#e53e3e` red, but that's the only red on the site and it's third-party chrome, not editorial.

Buttons are a printerly hard rule: 2px solid black border, square corners, paper-white fill, hover inverts to black-fill-white-text in 150ms. There are no rounded buttons except round icon buttons (search, account, social) which use 50% radius — the only circular shape on the site. There are exactly **three radii** on the entire site: 0 (everything), 50% (icons and avatars), and 1920px (text-only pills like "BREAKING"). This is the strictest corner discipline of any major editorial property on the public web.

**Key Characteristics:**
- Newsstand-density editorial grid: rules and whitespace, never cards or shadows
- Custom serif display + technical mono kickers — the Conde-Nast-meets-engineering-lab voice
- Strictly square corners on every image, container, and ribbon (only icon buttons are circular)
- 2px hard black borders on buttons and inputs — printerly, not webby
- Mono ALL-CAPS eyebrows on every story with wide tracking (0.9–1.2px)
- Single ink-blue accent for links; everything else lives in pure grayscale
- Dark theme = the *footer*, not the page; the page itself is committed paper-white
- Black ribbon section markers ("MOST POPULAR", "BACKCHANNEL", "GEAR") with no rounded ends

## 2. Color Palette & Roles

### Primary (Editorial Ink)
- **WIRED Black** (`#000000`): pure ink for ribbons, section dividers, button borders, headline rules — the strongest hand on the page
- **Page Ink** (`#1a1a1a`): near-black used for headlines and body type. Slightly softened so long-form reading doesn't feel like staring at a power button
- **Paper White** (`#ffffff`): default canvas for the entire site. Treat it like newsprint stock — uninterrupted, never tinted

### Brand & Accent
- **Link Blue** (`#057dbc`): the single brand accent. Used for inline link hovers, breadcrumbs, the rare button — never for backgrounds, never decorated. Think of it as the only colour allowed in a black-and-white film.

### Surface & Background
- **Newsprint** (`#ffffff`): editorial pages, story grids, hero zones
- **Footer Ink** (`#1a1a1a`): the only inverted region on the homepage. Paper-white type sits on top
- **Hairline Tint** (`#e2e8f0`): reserved for `<hr>` elements between sections — barely visible, like a margin rule

### Neutrals & Text
- **Headline Black** (`#1a1a1a`): all H1/H2 display type
- **Body Gray** (`#1a1a1a`): long-form body text — same ink as headlines for unity
- **Caption Gray** (`#757575`): secondary metadata — bylines, timestamps, photo credits
- **Disabled Gray** (`#999999`): inactive links, low-priority labels
- **Hairline Border** (`#e2e8f0`): subtle separators only

### Semantic & Accent
- **Brand Hover Blue** (`#057dbc`): link rollover state — also serves as the only "interactive" cue
- **Cookie Red** (`#e53e3e`): the rare red used in the Fides cookie consent overlay — third-party chrome
- *(WIRED's homepage intentionally omits semantic success/error/warning palettes — this is editorial, not a SaaS dashboard)*

### Gradient System
None. WIRED uses zero gradients. The closest thing to a gradient on the page is the tonal range inside a photograph — gradients live *in the imagery*, not in the chrome.

## 3. Typography Rules

### Font Family

- **WiredDisplay** (custom serif, fallback `helvetica`) — display headlines and feature titles
- **BreveText** (humanist serif, fallback `helvetica`) — article body, decks, longer captions
- **Apercu** (geometric sans, fallback `helvetica`) — UI labels, buttons, navigation, mid-weight headings
- **WiredMono** (custom monospace, fallback `Monaco, "Courier New", Courier`) — eyebrows, kickers, timestamps, section labels — ALL CAPS
- **Inter** (sans, system fallback) — utility UI in newer modules
- **ProximaNova** (sans, fallback `helvetica`) — legacy UI surfaces (newsletter footer)

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| display-hero | WiredDisplay | 64 | 400 | 0.93 | -0.5px | Tight, almost-touching descenders — newsstand presence |
| display-mid | WiredDisplay | 26 | 400 | 1.08 | 0 | Same face, scaled for grid blocks |
| section-heading | Apercu | 20 | 700 | 1.20 | -0.28px | Module titles ("Most Popular", "Featured") |
| subheading | Apercu | 17 | 700 | 1.29 | -0.144px | Story decks within feature blocks |
| article-deck | BreveText | 19 | 400 | 1.47 | 0.108px | Long-form lead paragraphs |
| article-body | BreveText | 16 | 400 | 1.50 | 0.09px | Standard paragraph text |
| ui-heading | Apercu | 16 | 700 | 1.25 | 0.30px | Inline UI labels, button captions |
| button-label | Apercu | 16 | 700 | 1.25 | 0.30px | All caps optional depending on placement |
| inline-link | Apercu | 14 | 400 | 1.29 | 0.40px | Footer links, secondary nav |
| eyebrow-kicker | WiredMono | 13 | 400 | 1.23 | 0.92px | UPPERCASE — story category above headline |
| eyebrow-bold | WiredMono | 13 | 700 | 1.23 | 0.92px | UPPERCASE — featured story marker |
| section-ribbon | WiredMono | 12 | 700 | 1.0 | 1.20px | UPPERCASE — black-bar section labels |
| photo-caption | BreveText | 12.73 | 700 | 2.20 | 0.108px | Generous leading — print-photo treatment |
| timestamp-meta | WiredMono | 12 | 400 | 1.33 | 1.10px | UPPERCASE — "X HOURS AGO" markers |
| tertiary-footer | ProximaNova | 11 | 400 | 1.45 | 0 | Newsletter footer, legal links |
| inter-ui-heading | Inter | 16 | 600 | 1.23 | 0.108px | Newer module headers |
| inter-ui-caption | Inter | 14 | 600 | 1.40 | 0 | Compact UI metadata |

### Principles

- **Four faces, four jobs.** WiredDisplay is for shouting, BreveText is for reading, Apercu is for clicking, WiredMono is for labelling. They never trade roles. This separation is what keeps the page from feeling like a typography sample.
- **Tight headlines, generous body.** Display type runs as low as 0.93 line-height (nearly touching), while body BreveText opens out to 1.47–1.50. The contrast is the editorial fingerprint.
- **Mono is always uppercase.** Every WiredMono usage carries `text-transform: uppercase` and 0.9–1.2px letter-spacing. Treat lowercase mono as broken — it should not appear on a WIRED page.
- **Bold is rare.** Apercu uses weight 700 only for UI emphasis; the editorial layer (Display + BreveText) leans entirely on size and ink colour, never on bolding.
- **Letter-spacing has two registers.** Positive (0.9–1.2px) for ALL-CAPS mono, negative (-0.144 to -0.5px) for large display serif. Never neutral on the largest type.

### Note on Font Substitutes

The line-height values in the hierarchy table (especially the 0.93 on the 64px hero) assume the **proprietary WiredDisplay and BreveText faces**, which have tight metrics with short ascenders/descenders. If you substitute these with wide-metric open-source fonts like **Playfair Display** or **Libre Caslon**, loosen display line-heights by ~+0.10 to +0.12 to prevent ascender/descender collisions on wrapping lines (e.g., 0.93 → 1.05, 1.08 → 1.18). Apercu substitutes (Inter, Work Sans, Manrope) work at the token values without adjustment. BreveText body substitutes (Lora, Source Serif 4) also work without adjustment because body leading is already generous. WiredMono substitutes: **JetBrains Mono**, **IBM Plex Mono**, or **Space Mono** — all carry the engineering-lab character without losing geometry.

## 4. Component Stylings

### Buttons

**`button-subscribe`** — Primary CTA — Black Outline ("Subscribe")
- Background: `#ffffff` (Paper White)
- Text: `#000000` (WIRED Black), Apercu 16/700 with 0.30px tracking
- Border: 2px solid `#000000` — the printerly hard rule, not a 1px UI border
- Border radius: 0 (square corners)
- Padding: vertical ~12–14px, horizontal ~24px
- Hover: background flips to `#000000`, text flips to `#ffffff` — pure inversion, no easing on the rule
- Transition: ~150ms colour/background only

**`button-signin-inverted`** — Secondary, in dark zones
- Background: `#000000`
- Text: `#ffffff`
- Border: 2px solid `#ffffff`
- Same square corners, same inversion-on-hover behaviour

**`button-tertiary-link`** — Underlined Inline Link
- Treated as a button when wrapped in nav: text `#1a1a1a`, underline always present, hover swaps colour to `#057dbc` while keeping the underline
- No padding, no border, no background — this is editorial linking, not UI

**`button-icon-circle`** — Pill / Round Icon Button
- Border radius: 50% (the only circular shape on the site)
- Used exclusively for icon controls (search, account, social) in the header
- Border: 1px solid `#757575` or no border depending on placement
- Size: ~32–40px square footprint

**`pill-text-span`** — Tag / Span Pill
- Border radius: 1920px (effectively a full pill — only used inside text spans like "BREAKING")
- Background: solid black or red accent depending on context
- Text: white, mono 11–12px caps

### Cards & Containers

- **Cards do not exist.** WIRED's homepage has no rounded boxes, no shadows, no surface elevation.
- A "story tile" is just an image rectangle stacked above a kicker + headline + deck, separated from neighbours by **1px hairline rules** (`#000000` or `#4a5568`) or by raw whitespace.
- The closest thing to a "container" is the black ribbon section header (e.g., "MOST POPULAR") — a full-bleed black bar with white WiredMono caps, no padding refinement, no rounded ends.
- Hover behaviour on a story tile: the headline link text shifts from `#1a1a1a` to `#057dbc` and the underline appears. The image itself does not zoom, lift, or shadow.

### Inputs & Forms

- **`newsletter-input`**: rectangular, 2px solid `#000000` border, 0 radius, white background, Apercu 16px placeholder
- **Focus**: border stays 2px black, no glow ring, no colour change — focus is signalled by the blinking caret only. (Add a 2px outset for accessibility if you ship this — WIRED's own implementation under-serves keyboard users here)
- **Error**: text label below in `#e53e3e` (Fides cookie overlay borrows this red)
- **Disabled**: text drops to `#a0aec0`, border softens to `#757575`

### Navigation

- **Top utility bar**: black (`#000000`) full-bleed strip, ~32–40px tall, mono caps links separated by hairline dividers, `#ffffff` text, hover → `#057dbc`
- **Main nav**: paper-white (`#ffffff`) row beneath the bug logo, Apercu 14–16px regular, hover → `#057dbc` underline
- **Logo**: WIRED bug, ~209×42px, centred or left-aligned, never recoloured, always pure black on white
- **Mobile**: nav collapses to a hamburger left of the bug logo. Section nav becomes a slide-down drawer of mono caps links.
- **Transition**: hover colour swaps are instant or ~120ms; no bouncy easing — editorial restraint

### Image Treatment

- **Aspect ratios**: predominantly 16:9 for hero images, 4:3 for grid story tiles, 1:1 for smaller "Most Popular" thumbnails
- **Corners**: ALWAYS 0 radius. Square. The only rounded image is a circular author avatar (50%)
- **Full-bleed**: hero photographs run edge-to-edge of the column they occupy; no inset, no border
- **Captions**: BreveText 12.73px / 700 with relaxed 2.20 line-height — placed directly under the image, italicised in some templates
- **Hover**: no zoom, no opacity dip — only the headline below the image responds
- **Lazy loading**: standard `loading="lazy"` on all below-the-fold imagery

### Editorial Ribbons & Section Markers

- Black bar (`#000000`) full-bleed with white WiredMono uppercase label inside (e.g., "MOST POPULAR", "BACKCHANNEL", "GEAR")
- Height ~32–40px, no padding refinement, no rounded ends
- Sometimes a thin 2px black rule sits directly above or below to double-frame the bar

### Numbered Lists ("Most Popular")

- A vertical list of stories prefixed with WiredDisplay numerals (01, 02, 03…) at ~40–48px, sitting tight against the headline they label
- Hairline rule between each item, no other decoration

## 5. Layout Principles

### Spacing System

- **Base unit**: 8px
- **Scale**: 1px (hairline), 4px, 8px, 12px, 14.11px, 15px, 16px, 24px, 25.46px, 29.66px, 32px, 40px, 48px, 64px
- **Section padding**: typically 32–48px vertical between major editorial blocks
- **Card padding**: there are no cards; the gutter between story tiles is 24–32px horizontally and 16–24px vertically
- **Inline spacing**: kickers sit ~4–8px above headlines; decks sit ~8–12px below headlines; bylines/timestamps another 8–12px below the deck

### Grid & Container

- **Max width**: ~1280–1600px on desktop (the dembrandt sweep detected breakpoints up to 1600px), centred with generous outer margins
- **Column patterns**: 12-column grid that resolves into 2/3/4 column story arrangements depending on module — feature blocks often run a "1 large + 2 small" pattern with hairline rules between each
- **Column gutters**: ~24–32px, separated by hairline `#000000` or `#4a5568` 1px rules where the editorial logic demands a "page-fold" feel

### Whitespace Philosophy

WIRED treats whitespace the way a magazine art director treats margin: it's the silence around the type, not a styling choice. The page never breathes excessively (this is not Stripe or Apple); it breathes *editorially* — enough room to keep adjacent stories from arguing, never enough to suggest there's nothing on the page. If an empty area looks like it could fit another headline, that empty area is doing its job.

### Section Cadence

The homepage scroll sequence:
1. Top utility black bar (mono caps links)
2. Paper-white masthead with bug logo and main nav
3. Hero feature (1 large + 2 small grid with 1px black hairlines)
4. "Most Popular" black ribbon + numbered list
5. Section ribbon ("BACKCHANNEL") + 4-up story grid
6. Section ribbon ("GEAR") + 3-up + sidebar
7. Newsletter form (square 2px black input + inverted submit)
8. Footer (only inverted region — 1a1a1a ink with paper-white type)

## 6. Shapes & Radius Scale

- **0** — every container, every image, every button, every input. The default.
- **1920px** — only inside text spans that need to look like a full pill ("BREAKING", "LIVE")
- **50%** — only on round icon buttons and circular author avatars

There are exactly three radii on the entire site, and two of them are reserved for non-rectangular shapes. This is the **strictest** corner discipline of any major editorial property.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | No shadow, no border | Default editorial surface — text on paper |
| 1 | 1px solid `#e2e8f0` hairline `<hr>` | Quiet section divider, almost invisible |
| 2 | 1px solid `#000000` hairline rule | Editorial column divider — printerly, structural |
| 3 | 2px solid `#000000` border | Buttons, inputs, ribbons — interactive emphasis |
| 4 | Black ribbon bar (`#000000` fill) | Section labels — the most "elevated" surface on the page |
| 5 | Inverted footer block | Dark `#1a1a1a` zone with white type — the only inversion |

WIRED's depth philosophy is **flat by religion**. There is exactly one shadow token in the entire site (a default `0 0 0 transparent` placeholder) and no `box-shadow` is applied to story tiles, headers, modals, or cards. Depth is communicated by **rule weight** (1px hairline → 2px hard rule → solid black ribbon), not by simulated lighting.

### Decorative Depth

None. No gradients, no glow, no halos, no scrim overlays beyond the standard photo-caption gradient. WIRED earns its visual interest from photography and typographic contrast, not from chrome.

## 8. Interaction & Motion

### Easing Curves

- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — used on the rare colour transition
- **Emphasized**: rarely deployed; WIRED's motion is functional, not expressive

### Duration Buckets

- **Fast** (120ms): link colour swap on hover
- **Standard** (150ms): button background + text inversion on hover (subscribe → black bg)
- **Slow** (200ms): rare modal entry / exit

### Per-Component Motion

**Subscribe button hover (the signature interaction)**
- Background: `#ffffff → #000000` over 150ms
- Text colour: `#000000 → #ffffff` over 150ms
- No transform, no border change — pure inversion, no easing animation on the rule itself

**Inline link hover**
- Text colour: `#1a1a1a → #057dbc` over 120ms
- Underline persists (already underlined at rest)

**Story-tile hover**
- Headline link text: `#1a1a1a → #057dbc` over 120ms
- Underline appears
- Image: no zoom, no opacity dip — only the headline below the image responds. This is the system's strongest "the chrome doesn't move" rule.

**Page transition**
- Instant page navigation — editorial restraint. WIRED does not animate route changes; clicks land cleanly on the new page.

### Reduced Motion Strategy

`@media (prefers-reduced-motion: reduce)`:
- Colour transitions: preserved (they are functional feedback signals, not decoration)
- The site has so few animations that reduced-motion users barely notice a difference — this is the system's accessibility advantage

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | WCAG Level |
|------|-------|------------|
| `#1a1a1a` text on `#ffffff` bg | 16.0:1 | AAA |
| `#057dbc` link on `#ffffff` bg | 4.7:1 | AA at body, AAA at large |
| `#757575` mute on `#ffffff` bg | 4.6:1 | AA at body |
| `#ffffff` text on `#1a1a1a` footer | 16.0:1 | AAA |
| 2px `#000000` button border on `#ffffff` | 21.0:1 | maximum |

### Focus Indicators

- 2px solid `#000000` outline matches the button border weight
- Newsletter input focus uses caret only — **derivative work should add a 2px outset** for AAA keyboard accessibility (this is a documented gap in WIRED's own implementation)
- Round icon buttons get a 2px black outline ring on `:focus-visible`

### ARIA Patterns

- Editorial articles use `<article>` with `<header>` containing eyebrow + headline
- Ribbons are decorative — `aria-hidden="true"` so screen readers skip them
- Numbered list "Most Popular" uses `<ol>` with the WiredDisplay numerals as styling, not as content
- Mobile menu trigger uses `aria-expanded` and `aria-controls`

### Keyboard Navigation

- Tab cycles: utility bar → main nav → bug logo → masthead search → primary section → article tiles → footer columns
- Skip-link at very top: "Skip to main content"
- Mono caps links in the utility bar are smaller (~32px tall) — WIRED's own implementation undershoots WCAG. **For derivative work, pad mono nav links to 44px**

### Screen Reader Hints

- Kickers are styled `<p>` not `<h*>`; headlines carry the heading semantics
- Captions use `<figcaption>` inside `<figure>` with the photograph
- Photo credits are `<small>` with WiredMono styling
- The "BREAKING" pill text-span uses `<strong>` plus `aria-label="Breaking news"` for context

### Reduced Motion Handling

Detailed in §8. The site has so few animations that the `prefers-reduced-motion: reduce` query is essentially a no-op — editorial restraint is its own accessibility feature.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Small Mobile | <375px | Single column, hamburger nav, all hero modules collapse to stacked image-headline-deck |
| Mobile | 375–767px | Single column, story grid becomes vertical scroll, "Most Popular" numbers shrink to 32px |
| Tablet | 768–1023px | 2-column story grid, sidebar collapses below main feed, nav becomes condensed |
| Desktop | 1024–1599px | Full editorial 3–4 column grid, sidebar restored, max headline scale active |
| Large Desktop | ≥1600px | Page caps at ~1600px container, whitespace expands at the margins, no further scaling |

The dembrandt sweep detected an unusual range of intermediate breakpoints (1280, 1025, 1024, 1023, 768, 767, 667, 599, 570, 569, 480, 425, 375, 320, 319) — WIRED's grid micro-tunes at almost every common viewport, especially around the iPad portrait/landscape boundary.

### Touch Targets

- Primary button: ~44×44px minimum (16px text + 12–14px vertical padding satisfies WCAG AAA)
- Mono caps links in the utility bar are smaller (~32px tall) — WIRED's own implementation undershoots WCAG here. **For derivative work, pad mono nav links to 44px.**
- Round icon buttons in the header are ~40px circles, comfortably touch-friendly

### Collapsing Strategy

- **Nav**: utility bar drops below 768px; main nav collapses into hamburger drawer. Bug logo recentres on mobile
- **Grid**: 4-col → 3-col → 2-col → 1-col as viewport tightens. Hairline rules persist between every column count, so the printerly feel survives the collapse
- **Spacing**: vertical rhythm tightens from 48 → 32 → 24px between modules on mobile. Horizontal page padding shrinks from 64 → 24 → 16px
- **Type**: WiredDisplay hero scales from 64px to ~36–42px on mobile, headlines from 26px to ~22px, kickers stay locked at 12–13px (mono caps don't scale down further or they become unreadable)

### Image Behavior

- All images are responsive raster (`srcset`-driven), aspect ratios preserved: 16:9 hero, 4:3 mid, 1:1 thumbnails
- No art-direction swaps — the same crop scales across breakpoints
- `loading="lazy"` on all below-the-fold imagery, `eager` on the hero only

## 11. Content & Voice

### Tone

The voice is **technical-editorial**. WIRED writes like a magazine that shipped a print edition the same day Tim Berners-Lee released the WorldWideWeb browser — confident, slightly skeptical, deeply technical, and willing to call something out as bullshit when it is. The brand never condescends and never marketing-fluffs. Headlines read like Conde Nast print covers (declarative, sometimes provocative); body copy reads like the tech section of a serious daily.

### Microcopy Patterns

- **Button verbs**: "Subscribe", "Sign in", "Save story", "Read more" — short, imperative, never softened ("Get started" or "Sign up free" would feel completely off-brand)
- **Headline structure**: declarative sentences, often with strong verbs and numerical specifics. Examples: "How OpenAI's Sora Will Change Filmmaking", "The Inside Story of the Bored Apes Hack"
- **Body copy**: medium-length sentences, occasional dependent clauses, technical precision. The Pulitzer-style cadence is the editorial standard
- **Error messages**: clinical and brief. "We couldn't process your subscription. Please try again." — no emoji, no apology framing
- **Success confirmations**: "You're subscribed to the WIRED Daily" — terse, professional

### Empty States

Empty story feeds say "No stories match this filter" rather than "Nothing here yet" or "Try again". The brand never breaks character with friendly empty-state copy.

### CTA Verb Conventions

The brand uses editorial-imperative verbs:
- Subscribe
- Sign in
- Save story
- Read full story
- Watch
- Listen

It does *not* use:
- Get started
- Sign up free (too SaaS)
- Try now
- Discover (too travel-marketing)
- Join us! (too excited; punctuation rejected)

## 12. Dark Mode & Theming

**WIRED is light-only — no dark mode variant.** The footer block (`#1a1a1a` ink with paper-white type) is the only inverted region on the site, and it's a structural editorial choice (the footer is a different "voice register"), not a theming decision. The body of the site stays paper-white at every breakpoint, every state, every page.

This is a brand commitment: WIRED is a magazine, magazines are printed on paper, and paper is white. A "dark mode toggle" would convert the site into a generic content-management product and break the broadsheet identity.

### Theming Notes for Derivatives

If you are adapting this system for a brand that needs a true dark mode:
- Swap `#ffffff` → `#0a0a0a`
- Swap `#1a1a1a` text → `#f5f5f5`
- Link blue `#057dbc` → `#4ab3e8` (lighter to maintain 4.5+ contrast on dark)
- Hairline `#e2e8f0` → `#2a2e35`
- 2px black borders → 2px white borders (preserve the printerly hard-rule weight)
- Photography: shift to lighter exposures so dynamic range survives the inversion
- The all-square-corner discipline is preserved

## 13. Lineage & Influences

WIRED's design language draws from:

- **Conde Nast print magazine art direction** — Vanity Fair, The New Yorker, Vogue. The dense column grid, hairline rules, and four-typeface stack are direct print inheritances. https://www.condenast.com
- **The Whole Earth Catalog and Stewart Brand's editorial** — the engineering-meets-counterculture voice that founded WIRED in 1993. https://en.wikipedia.org/wiki/Whole_Earth_Catalog
- **David Carson's Ray Gun magazine** — the bold typography experimentation of the early 1990s, though WIRED is the more disciplined sibling
- **The Economist's broadsheet typography** — the use of mono caps for kickers and economy of decoration
- **Walker Art Center's institutional design system** — sharp corners, mono caps, no shadows

What WIRED rejects:
- Material Design's rounded corners and elevation tiers
- Apple's soft humanist warmth
- Stripe-style layered illustration aesthetics
- Glassmorphism and frosted-glass effects
- Animated page transitions and hover-lift micro-interactions

### Named Influences
- Conde Nast print art direction — https://www.condenast.com
- The New Yorker editorial design — https://www.newyorker.com
- The Economist typographic system — https://www.economist.com
- Stewart Brand / Whole Earth Catalog editorial heritage — https://en.wikipedia.org/wiki/Whole_Earth_Catalog
- Walker Art Center identity — https://walkerart.org

## 14. Do's and Don'ts

### Do

- Use 2px hard black borders on every primary button — no 1px softness, no rounded edges
- Put a WiredMono ALL-CAPS kicker above every story headline (4–8px above, 0.9–1.2px tracking)
- Use BreveText for any paragraph longer than two lines — Apercu is for UI, not reading
- Keep images square-cornered, edge-to-edge, with the caption hugging the bottom edge
- Separate story tiles with hairline rules or whitespace, never with cards or shadows
- Invert (black background, white type) only for footers, ribbons, and the utility nav strip
- Use `#057dbc` link blue exclusively for hover states — never as a background or button fill
- Scale headlines aggressively: 64px on hero, 26px on grid blocks, never 32px "safe middle ground"
- Use mono caps timestamps with positive 1.10px tracking — the Geiger-counter tick voice
- Default text colour to `#1a1a1a`, never pure `#000000` (which is reserved for ribbons and structural rules)

### Don't

- Don't add `box-shadow` to anything. Ever. WIRED doesn't ship shadows.
- Don't round corners on rectangular containers — `border-radius: 0` is law
- Don't mix typefaces inside one role: WiredDisplay never sets body, BreveText never sets buttons
- Don't use colour outside grayscale + `#057dbc`. No orange CTAs, no green success pills
- Don't use Apercu in lowercase for kickers — that's WiredMono's job, and it must be UPPERCASE
- Don't use gradients, blurs, glassmorphism, or atmospheric effects — they break the printerly contract
- Don't rely on hover-lift effects. WIRED's hover is a colour swap on text, nothing more
- Don't invent new pill shapes. Round = icons only. Pill = inline text spans only. Everything else is square
- Don't animate page transitions — instant navigation is the editorial standard
- Don't use exclamation points in CTA copy — the brand voice rejects manufactured excitement

## 15. Agent Prompt Guide

### Quick Color Reference

- Primary Ink (text + ribbons): WIRED Black (`#000000`)
- Page Canvas: Paper White (`#ffffff`)
- Headline / Body Text: Page Ink (`#1a1a1a`)
- Caption / Metadata: Caption Gray (`#757575`)
- Hairline / Quiet Border: Hairline Tint (`#e2e8f0`)
- Link Hover Accent (the only colour): Link Blue (`#057dbc`)
- Footer Inversion: Footer Ink (`#1a1a1a`)

### Example Component Prompts

1. "Create an editorial story tile with a 16:9 image (square corners), an UPPERCASE WiredMono kicker in `#1a1a1a` above a 26px WiredDisplay headline. Separate the tile from its neighbour with a 1px black hairline rule. No card, no shadow, no border-radius."
2. "Design a primary subscribe button with a 2px solid `#000000` border, square corners, `#ffffff` background, Apercu 16px / 700 / 0.30px tracking text in `#000000`. Hover state inverts to black background with white text in 150ms."
3. "Build a 'Most Popular' module: full-bleed black ribbon header with WiredMono uppercase label in white, followed by a numbered list (01–05) using 40px WiredDisplay numerals and 17px Apercu 700 headlines, separated by hairline rules."
4. "Create a newsletter signup form with a 2px solid black input border, no radius, Apercu 16px placeholder in `#757575`, and an inverted black submit button beside it."
5. "Design a footer in `#1a1a1a` with paper-white tertiary navigation in ProximaNova 11px, hover colour `#057dbc`, and a centred WIRED bug logo at the top of the block."
6. "Create a section ribbon: full-bleed `#000000` strip, 36px tall, white WiredMono caps label with 1.20px positive tracking. No padding refinement, no rounded ends."

### Iteration Guide

When refining existing screens generated with this design system:
1. **Audit corners first.** If you see any `border-radius` other than 0, 50% (icons/avatars), or 1920px (text pills), flatten it. Round corners are the single most common mistake.
2. **Audit shadows.** Strip every `box-shadow`. If a tile needs to feel "lifted", use a 2px black border or a hairline rule instead.
3. **Audit typeface roles.** Make sure WiredDisplay only sets headlines, BreveText only sets reading body, Apercu only sets UI, WiredMono only sets ALL-CAPS labels. Swapping roles breaks the voice instantly.
4. **Audit colour sprawl.** If a colour outside `#000`, `#1a1a1a`, `#757575`, `#e2e8f0`, `#ffffff`, `#057dbc` appears in chrome (not photography), remove it. WIRED's restraint is non-negotiable.
5. **Audit kickers.** Every story should have an UPPERCASE mono kicker. Without it, the page reads as a generic blog, not WIRED.
6. **Audit rules.** Add hairline `1px solid #000` dividers wherever two stories or modules meet without a clear visual break. Rules are the connective tissue.
7. **Audit hover behaviour.** If anything lifts, scales, or shadows on hover, remove the transform — WIRED hover is text colour swap only.
