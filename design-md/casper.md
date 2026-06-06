---
name: Casper
tagline: Cozy DTC sleep brand — Casper navy/indigo ink (`#1e306e`) on a pure-white canvas, deep-navy `#012169` pill CTAs at 32px radius, Calibre body under New Kansas friendly-serif display. Premium that tucks you in.
updated_at: 2026-05-28T23:13:13.385Z
published_at: 2026-05-28T23:13:13.385Z
author: webdesignhot
source_url: https://casper.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [retail]
tags: [light, friendly, sans, commerce, sleep, blue]
preview_swatch: ['#ffffff', '#012169', '#1e306e']
related: [lululemon]
description: 'Casper''s site is what a sleep brand looks like when it decides cozy and premium are the same thing. The canvas is pure white `#ffffff` — clean, airy, daytime-bright — and almost everything that isn''t a photograph is rendered in **Casper navy/indigo** `#1e306e` (`rgb(30, 48, 110)`): body copy, headlines, links, icons. Body text is set in **Calibre** (Klim Type Foundry) — a warm, humanist sans that reads friendly rather than corporate — while display copy is set in **New Kansas** (`NewKansas-Medium`), a soft contemporary serif that gives headlines an editorial, almost storybook warmth. The signature interactive element is the **pill CTA**: deep navy `#012169` fill with white label, or a navy-tinted outline button (navy text on a 10%-navy wash), both at a generous `32px` corner radius that reads rounded-friendly rather than sharp-corporate. The whole system runs in a single register — calm, reassuring, premium-but-approachable — the visual equivalent of a well-made bed. Navy is the brand; white is the breathing room; the rounded pills and the serif headlines are what make it cozy instead of clinical.'


# Canonical 8-role aliases (bg / text / brand / border / accent / muted / surface / danger).
# Maps role names to this entry's actual token names so role-aware
# downstream tools resolve `theme.background` → entry's `bg`, etc.
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent-tint
  muted: text-muted
  border: border
  ring: focus-ring

colors:
  # Page grounds — pure white, no warmth
  bg: '#ffffff'                  # pure-white canvas — clean, daytime-bright
  bg-soft: '#f6f7fa'             # faint navy-tinted off-white (alternating sections)
  bg-subtle: '#edeef3'           # subdued navy-wash panel ground
  # Surfaces & inverse
  surface: '#ffffff'             # cards lift on white, separated by hairline + soft shadow
  surface-tint: '#f6f7fa'        # tinted card / promo surface
  surface-inverse: '#1e306e'     # navy blocks — feature bands, footer, dark sections
  on-surface-inverse: '#ffffff'  # white text on navy surfaces
  # Brand — Casper navy/indigo + the deeper CTA navy
  brand: '#1e306e'               # Casper navy/indigo — text, icons, links, the brand itself
  brand-deep: '#012169'          # deeper navy — primary CTA fill (`rgb(1, 33, 105)`)
  brand-hover: '#011a54'         # CTA pressed/hover — a shade darker still
  on-brand: '#ffffff'            # white label on navy CTA
  accent-tint: '#e8eaf0'         # navy @10% over white — outline-CTA wash, soft highlight
  accent-tint-strong: '#dde0e9'  # navy @15% — pressed tint, selected chip
  # Text — navy, never gray-black
  text: '#1e306e'                # body + headlines — Casper navy `rgb(30, 48, 110)`
  text-strong: '#012169'         # emphasis / deepest navy
  text-muted: '#5a6488'          # desaturated navy-gray — meta, captions, helper copy
  text-faint: '#8b93ac'          # disabled / placeholder navy-gray
  text-on-brand: '#ffffff'       # label on navy CTA / navy surface
  link: '#1e306e'
  link-hover: '#012169'
  # Borders
  border: '#dde0e9'              # hairline — navy @ ~15% over white
  border-strong: '#1e306e'       # outlined-CTA / focused-input border
  border-soft: '#edeef3'         # faintest divider
  focus-ring: '#012169'          # deep-navy focus outline
  # Semantic
  success: '#1f7a4d'             # calm green
  success-bg: '#e8f3ed'
  warning: '#9a6212'             # muted amber
  warning-bg: '#f7efe1'
  danger: '#b3261e'              # restrained red
  danger-bg: '#f8e8e6'
  info: '#1e306e'                # info folds back into brand navy
  info-bg: '#edeef3'

typography:
  display:
    family: '"New Kansas", "NewKansas-Medium", Georgia, "Times New Roman", serif'
    weights: [500, 600, 700]
  body:
    family: '"Calibre", "Helvetica Neue", system-ui, -apple-system, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 80, weight: 700, lineHeight: 1.0,  tracking: '-0.02em',  family: display }
    display-lg:      { size: 56, weight: 600, lineHeight: 1.05, tracking: '-0.015em', family: display }
    h1:              { size: 40, weight: 600, lineHeight: 1.1,  tracking: '-0.012em', family: display }
    h2:              { size: 32, weight: 600, lineHeight: 1.2,  tracking: '-0.008em', family: display }
    h3:              { size: 24, weight: 500, lineHeight: 1.25, tracking: '-0.004em', family: display }
    h4:              { size: 20, weight: 600, lineHeight: 1.3,  tracking: '0',        family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    button:          { size: 16, weight: 500, lineHeight: 1.0,  tracking: '0',        family: body }
    label:           { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0',        family: body }
    caption:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.02em',   family: body }
    eyebrow:         { size: 12, weight: 600, lineHeight: 1.4,  tracking: '0.08em',   family: body }

radius:
  micro: 2
  sm: 4
  md: 8
  lg: 12
  xl: 16
  cta: 32        # the signature CTA pill radius
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  card: '0 1px 3px rgba(30, 48, 110, 0.08)'
  card-hover: '0 8px 24px rgba(30, 48, 110, 0.12)'
  modal: '0 24px 64px rgba(30, 48, 110, 0.20)'

accessibility:
  contrast-text-on-bg: 12.33     # #1e306e on #ffffff
  contrast-on-brand: 14.76       # #ffffff on #012169
  contrast-text-on-tint: 10.34   # #1e306e on #e8eaf0
  focus-ring: '2px solid #012169 + 2px outset gap'
  reduced-motion-honored: true

components:
  button-primary:   { bg: brand-deep, text: on-brand, padding: '14px 28px', radius: 32, font: button, hover-bg: brand-hover }
  button-outline:   { bg: accent-tint, text: text, border: '1px solid border-strong', padding: '14px 28px', radius: 32, font: button }
  button-ghost:     { bg: transparent, text: text, padding: '14px 28px', radius: 32, font: button, hover-bg: accent-tint }
  button-link:      { bg: transparent, text: brand, padding: '0', underline: 'on-hover', font: button }
  card:             { bg: surface, border: '1px solid border', radius: 16, padding: 24, shadow: card }
  card-tint:        { bg: surface-tint, radius: 16, padding: 24, border: 'none' }
  input:            { bg: bg, border: '1px solid border', text: text, radius: 8, padding: '12px 16px', focus-border: border-strong }
  badge:            { bg: accent-tint, text: brand, radius: pill, padding: '4px 12px', font: caption }
  badge-navy:       { bg: surface-inverse, text: on-surface-inverse, radius: pill, padding: '4px 12px', font: caption }
  nav:              { bg: bg, text: text, height: 64, border-bottom: '1px solid border-soft' }

lineage:
  summary: 'Casper launched in 2014 as the original bed-in-a-box DTC brand, and its visual identity has always leaned cozy-premium rather than clinical-tech. The current site runs a single-hue navy system: **Casper navy/indigo** `#1e306e` is the brand — it carries body copy, headlines, icons, and links against a pure-white `#ffffff` canvas, with a deeper `#012169` reserved for the filled pill CTAs. The type pairing does the heavy lifting on personality: **Calibre** (Klim Type Foundry) sets body copy with a warm humanist-sans warmth, while **New Kansas** (a contemporary soft serif) sets display headlines with an editorial, almost storybook friendliness — a serif on a commerce site is the deliberate cozy signal. The signature structural move is the **32px-radius pill CTA** — generous, rounded, reassuring — the visual register of "we want you to relax." Casper sits tonally near other premium-friendly DTC brands (Away, Brooklinen, Parachute) and apart from the cold blue-gray of tech mattresses; navy is the warmth that keeps it from going corporate.'
  influences:
    - { name: 'Calibre (Klim Type Foundry, 2011)', role: 'humanist-sans body typeface — warm, friendly, the readable workhorse', url: 'https://klim.co.nz/retail-fonts/calibre/' }
    - { name: 'New Kansas (NaN / Optimo lineage soft serif)', role: 'contemporary soft serif for display headlines — the editorial cozy signal', url: 'https://fonts.google.com/' }
    - { name: 'Away (DTC travel goods)', role: 'premium-friendly DTC peer — clean white canvas, single confident hue, rounded warmth', url: 'https://www.awaytravel.com' }
    - { name: 'Brooklinen (DTC bedding)', role: 'sleep-adjacent contemporary — cozy editorial register, serif-meets-sans pairing', url: 'https://www.brooklinen.com' }
    - { name: 'Parachute (DTC home / bedding)', role: 'calm premium home aesthetic — restrained palette, generous whitespace, soft corners', url: 'https://www.parachutehome.com' }
    - { name: 'Klim Type Foundry', role: 'type foundry behind Calibre — defines the humanist-sans tone of the body register', url: 'https://klim.co.nz' }
---


## 1. Visual Theme & Atmosphere

Casper's site is what a sleep brand looks like when it decides that *cozy* and *premium* are the same thing. The canvas is **pure white** `#ffffff` — not bone, not warm-cream, but bright, airy, daytime-clean — and almost everything that isn't a product photograph is rendered in a single color: **Casper navy/indigo** `#1e306e` (`rgb(30, 48, 110)`). Body copy is navy. Headlines are navy. Icons, links, dividers, the wordmark — navy. This is a near-monochrome system where one confident hue does the work of an entire palette, and the white space around it is doing just as much.

The personality lives in the type pairing. Body copy is set in **Calibre** (Klim Type Foundry, 2011) — a humanist sans-serif that reads warm and friendly rather than corporate or technical, with just enough roundness in the letterforms to feel approachable. Display headlines are set in **New Kansas** (`NewKansas-Medium`), a contemporary soft serif. A serif on a direct-to-consumer commerce site is a deliberate choice: it gives headlines an editorial, almost storybook quality that says "settle in," not "convert now." The serif-display / sans-body contrast is the engine of Casper's friendly-premium register.

The signature interactive element is the **pill CTA** at a generous `32px` corner radius. The primary button is a deep-navy `#012169` fill with a crisp white label; the secondary is a navy-tinted outline — navy text floating on a ~10%-navy wash (`rgba(30, 48, 110, 0.1)`). Those big soft corners are not incidental; a 32px radius on a button reads as *relaxed*, the geometric opposite of a sharp-cornered enterprise CTA. Hardware is soft because the whole brand promise is comfort.

Atmospherically, the site runs in one calm, reassuring register from top to bottom. There's no urgency-red, no countdown timers, no shouting. Sections breathe with white space; navy headlines anchor each band; warm photography of beds, bedrooms, and rested people carries the lifestyle. It's the visual equivalent of a well-made bed — clean lines, soft edges, nothing jarring. Premium, but the kind of premium that tucks you in.

Navy is the brand. White is the breathing room. The serif headlines and the rounded pills are what keep it cozy instead of clinical — strip either away and Casper would tip into cold-tech-mattress territory, which is exactly the register it's built to avoid.

**Key Characteristics:**
- Pure-white canvas `#ffffff` — bright and airy, never warm-cream or bone
- Near-monochrome **Casper navy/indigo** `#1e306e` (`rgb(30, 48, 110)`) carries text, headlines, icons, links
- Deeper navy `#012169` (`rgb(1, 33, 105)`) reserved for filled primary CTAs
- **Calibre** humanist-sans body — warm and friendly, not corporate
- **New Kansas** soft-serif display — editorial, storybook headline warmth
- **32px-radius pill CTAs** — generous soft corners signal "relax," not "convert"
- Navy-tint outline CTA (navy text on a ~10%-navy wash) as the secondary action
- White label on navy fill; navy label on white/tint everywhere else
- Calm single-register tone — no urgency-red, no countdown pressure
- Generous white space and section breathing room — the bed-in-a-box calm
- Soft navy-tinted shadows (`rgba(30, 48, 110, 0.x)`) — even depth is on-brand
- Light-only system — white canvas *is* the daytime-bright identity


## 2. Color Palette & Roles

### Canvas / Grounds
- **Background** `#ffffff`: the pure-white canvas. Bright, airy, daytime-clean — not bone, not cream.
- **Bg Soft** `#f6f7fa`: a faint navy-tinted off-white for alternating sections — barely-there separation.
- **Bg Subtle** `#edeef3`: a subdued navy-wash panel ground for grouped content.

### Surfaces
- **Surface** `#ffffff`: cards sit on white, separated by a hairline border plus a soft navy-tinted shadow.
- **Surface Tint** `#f6f7fa`: tinted card / promo surface for gentle grouping.
- **Surface Inverse** `#1e306e`: full navy blocks — feature bands, footer, dark sections — white text on top.

### Brand — Casper Navy + the Deeper CTA Navy
- **Brand** `#1e306e`: Casper navy/indigo (`rgb(30, 48, 110)`). The brand itself — text, icons, links, accents.
- **Brand Deep** `#012169`: the deeper navy (`rgb(1, 33, 105)`) reserved for the filled primary CTA.
- **Brand Hover** `#011a54`: a shade darker still — CTA pressed / hover state.
- **On-Brand** `#ffffff`: white label on any navy fill or surface.

### Accent / Interactive Wash
- **Accent Tint** `#e8eaf0`: Casper navy at ~10% over white (`rgba(30, 48, 110, 0.1)`). The outline-CTA wash, soft highlight, badge ground.
- **Accent Tint Strong** `#dde0e9`: navy at ~15% — pressed tint, selected chip, hover on tinted surfaces.

### Text — Navy, Never Gray-Black
- **Text** `#1e306e`: body copy and headlines. Casper navy — never a gray or near-black.
- **Text Strong** `#012169`: emphasis / deepest-navy headline weight.
- **Text Muted** `#5a6488`: desaturated navy-gray — meta, captions, helper copy.
- **Text Faint** `#8b93ac`: disabled / placeholder navy-gray.
- **On-Brand / On-Surface-Inverse** `#ffffff`: white label on navy.

### Borders
- **Border** `#dde0e9`: the default hairline — navy at ~15% over white.
- **Border Strong** `#1e306e`: outlined-CTA border, focused-input border.
- **Border Soft** `#edeef3`: faintest divider between dense rows.
- **Focus Ring** `#012169`: deep-navy focus outline.

### Semantic
- **Success** `#1f7a4d` on **Success Bg** `#e8f3ed`: calm confirmation green.
- **Warning** `#9a6212` on **Warning Bg** `#f7efe1`: muted amber.
- **Danger** `#b3261e` on **Danger Bg** `#f8e8e6`: restrained red — used sparingly, never as urgency theater.
- **Info** `#1e306e` on **Info Bg** `#edeef3`: info folds straight back into brand navy.


## 3. Typography Rules

### Font Family

**Calibre** (Klim Type Foundry, 2011) is the body typeface — a humanist sans-serif with subtly rounded, low-contrast letterforms that reads warm and friendly rather than neutral-corporate. It carries all running copy, UI labels, captions, and form text. Weights in use: `400` (regular body), `500` (labels, buttons), `600` (emphasis).

**New Kansas** (`NewKansas-Medium`) is the display typeface — a contemporary soft serif. It sets every headline and large display statement. The serif-on-commerce choice is the deliberate cozy signal: it lends headlines an editorial, almost storybook warmth that a sans would flatten. Weights: `500` / `600` / `700`, with `500`–`600` doing most of the work.

**Mono** is a system fallback only — it does not appear in the live brand system and is included strictly for any technical or code content that might surface.

```
display: "New Kansas", "NewKansas-Medium", Georgia, "Times New Roman", serif
body:    "Calibre", "Helvetica Neue", system-ui, -apple-system, sans-serif
mono:    ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace   (fallback only)
```

The pairing rule is simple and load-bearing: **serif for display, sans for everything else.** Put body copy in the serif and it turns precious; put headlines in the sans and Casper loses its warmth.

### Hierarchy

| Token | Size | Weight | Tracking | LH | Family | Use |
|-------|------|--------|----------|-----|--------|-----|
| `display-hero` | 80 | 700 | -0.02em | 1.0 | New Kansas | hero brand statement |
| `display-lg` | 56 | 600 | -0.015em | 1.05 | New Kansas | landing-page headlines |
| `h1` | 40 | 600 | -0.012em | 1.1 | New Kansas | page titles |
| `h2` | 32 | 600 | -0.008em | 1.2 | New Kansas | section titles |
| `h3` | 24 | 500 | -0.004em | 1.25 | New Kansas | sub-sections, card titles |
| `h4` | 20 | 600 | 0 | 1.3 | Calibre | small headings, UI group labels |
| `body-lg` | 18 | 400 | 0 | 1.55 | Calibre | intro / lead paragraphs |
| `body` | 16 | 400 | 0 | 1.55 | Calibre | default running copy |
| `body-sm` | 14 | 400 | 0 | 1.5 | Calibre | secondary copy, helper text |
| `button` | 16 | 500 | 0 | 1.0 | Calibre | CTA labels |
| `label` | 13 | 500 | 0 | 1.4 | Calibre | form labels, UI labels |
| `caption` | 12 | 500 | 0.02em | 1.4 | Calibre | captions, fine print |
| `eyebrow` | 12 | 600 | 0.08em | 1.4 | Calibre | UPPERCASE micro-labels above headlines |
| `link` | inherit | 500 | 0 | inherit | Calibre | inline links — navy, underline on hover |
| `price` | 20 | 600 | 0 | 1.2 | Calibre | product prices |
| `nav-item` | 15 | 500 | 0 | 1.0 | Calibre | top-nav items |

### The Tracking Curve

Display serif headlines get modest negative tracking (`-0.02em` at hero, easing to `0` by `h4`) so big New Kansas type sets tight and confident. Body Calibre stays at `0` tracking with a comfortable `1.55` line-height — generous, readable, restful. Eyebrows and captions get *positive* tracking (`+0.08em` / `+0.02em`) to space out the small uppercase labels.

### Principles

- **Serif display, sans body — never the reverse.** This single rule defines the friendly-premium register.
- Hold **New Kansas** for headlines at weight `500`–`600`; reserve `700` for the largest hero statement only.
- Body copy is **Calibre `400` at `1.55` line-height** — restful and roomy, not dense.
- Headlines are **sentence case**, not ALL-CAPS. Casper reassures; it does not shout.
- Use the **eyebrow** (`12px / 600 / +0.08em` uppercase) sparingly to label sections above a serif headline.
- Keep all text in **navy `#1e306e`** on light grounds; only invert to white on navy surfaces.
- Don't introduce a third typeface. The serif/sans pairing carries the entire personality.


## 4. Component Stylings

### Buttons — The 32px Pill System

Every button shares the signature `32px` corner radius. The system has four variants:

```css
/* 1. Primary — deep-navy fill, white label */
.btn-primary {
  background: #012169;            /* deeper navy CTA fill */
  color: #ffffff;
  padding: 14px 28px;
  border-radius: 32px;           /* the signature rounded pill */
  font: 500 16px/1 Calibre;
  text-transform: none;          /* sentence case */
  transition: background 240ms cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-primary:hover  { background: #011a54; }
.btn-primary:active { background: #011a54; }

/* 2. Outline / Tint — navy text on a navy wash */
.btn-outline {
  background: rgba(30, 48, 110, 0.1);   /* navy @10% — `#e8eaf0` over white */
  color: #1e306e;
  border: 1px solid #1e306e;
  padding: 14px 28px;
  border-radius: 32px;
  font: 500 16px/1 Calibre;
}
.btn-outline:hover { background: rgba(30, 48, 110, 0.15); }

/* 3. Ghost — transparent, fills with tint on hover */
.btn-ghost {
  background: transparent;
  color: #1e306e;
  padding: 14px 28px;
  border-radius: 32px;
  font: 500 16px/1 Calibre;
}
.btn-ghost:hover { background: rgba(30, 48, 110, 0.1); }

/* 4. Link — inline navy, underline on hover */
.btn-link {
  background: none;
  color: #1e306e;
  padding: 0;
  font: 500 16px/1 Calibre;
  text-decoration: none;
}
.btn-link:hover { text-decoration: underline; }
```

Buttons are **always rounded pills at 32px** — Casper never uses sharp-cornered or small-radius (4–8px) buttons for actions. Padding runs generous (`14px 28px`); the deep-navy fill plus white label is the unmistakable primary, and the navy-tint outline is the reassuring secondary.

### Cards

```css
.card {
  background: #ffffff;
  border: 1px solid #dde0e9;     /* navy-tinted hairline */
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(30, 48, 110, 0.08);
  transition: box-shadow 240ms, transform 240ms;
}
.card:hover {
  box-shadow: 0 8px 24px rgba(30, 48, 110, 0.12);
  transform: translateY(-2px);
}

.card--tint {
  background: #f6f7fa;           /* tinted promo / grouped card */
  border: none;
  box-shadow: none;
}
```

Cards round at `16px` — softer than the inputs, gentler than the 32px pills. The shadow is always navy-tinted (`rgba(30, 48, 110, ...)`), never neutral-gray, so depth stays on-brand. Hover lifts the card 2px with a deeper soft shadow.

### Inputs / Forms

```css
.input {
  background: #ffffff;
  border: 1px solid #dde0e9;
  color: #1e306e;
  border-radius: 8px;            /* gentle, not pill */
  padding: 12px 16px;
  font: 400 16px/1.5 Calibre;
}
.input::placeholder { color: #8b93ac; }
.input:focus {
  border-color: #1e306e;
  outline: 2px solid #012169;
  outline-offset: 2px;
}
.label { font: 500 13px/1.4 Calibre; color: #1e306e; }
```

Inputs round at `8px` — a quieter radius than CTAs so fields read as functional rather than decorative. Focus draws the navy border plus a deep-navy outline ring with a 2px gap. Placeholder copy uses the faint navy-gray `#8b93ac`.

### Badges / Tags / Pills

```css
.badge {
  background: rgba(30, 48, 110, 0.1);   /* navy tint */
  color: #1e306e;
  border-radius: 9999px;
  padding: 4px 12px;
  font: 500 12px/1.4 Calibre;
}
.badge--navy {
  background: #1e306e;          /* inverse — navy fill, white label */
  color: #ffffff;
}
```

Badges and chips are fully pill (`9999px`). The default is a navy-tint chip with navy label; the inverse is a solid-navy badge with white label for "New," "Best Seller," and similar callouts.

### Navigation

```css
.nav {
  background: #ffffff;
  height: 64px;
  border-bottom: 1px solid #edeef3;   /* faintest divider */
}
.nav__item {
  color: #1e306e;
  font: 500 15px/1 Calibre;
  text-decoration: none;
}
.nav__item:hover { text-decoration: underline; text-underline-offset: 4px; }
.nav__cta {
  /* the primary 32px pill, scaled to nav height */
  background: #012169; color: #ffffff; border-radius: 32px;
  padding: 8px 20px;
}
```

The header is a clean 64px white bar with a barely-there bottom divider, navy nav items, and the deep-navy pill CTA pinned to the right. Underline-on-hover keeps nav interactions calm and legible.


## 5. Layout Principles

### Spacing System
Base unit is `4px`; the working rhythm is `8px`. Scale: `0, 4, 8, 12, 16, 24, 32, 48, 64, 96` px. Section padding leans toward the upper end (`64`–`96px` vertical) to keep the airy, breathing feel.

### Grid & Container
Page max-width is **1280px**, centered, with generous side gutters. Editorial / prose content caps at a `720px` reading column for comfortable line lengths. The header is a fixed `64px`. Content centers within the max-width while full-bleed navy bands and photography extend to the viewport edges.

### Whitespace Philosophy
White space *is* the product. Casper sells calm, and the layout earns it with roomy section padding, comfortable `1.55` body line-height, and uncrowded card grids. When in doubt, add space rather than content — density reads as pressure, and pressure is off-brand for a sleep company.

### Section Cadence
Sections alternate between pure-white `#ffffff` and faint-tint `#f6f7fa` grounds, punctuated occasionally by a full-navy `#1e306e` feature band (white text, white-or-tint CTAs) for emphasis. Each section pairs a New Kansas serif headline with a short Calibre lede and a single clear CTA — one idea, one action, then breathing room.


## 6. Shapes & Radius Scale

| Tier | Token | Value | Use |
|------|-------|-------|-----|
| Micro | `micro` | 2 | tiny indicators, inner clips |
| Small | `sm` | 4 | rare — fine chips, tag corners |
| Standard | `md` | 8 | **form inputs, small controls** |
| Comfortable | `lg` | 12 | nested panels, tooltips |
| Relaxed | `xl` | 16 | **cards, promo surfaces** |
| Featured | `cta` | 32 | **all CTAs / pill buttons — the signature** |
| Pill | `pill` | 9999 | badges, chips, fully-round tags |

### The Radius Story

Casper's radius scale climbs steadily toward soft. The two load-bearing tiers are **`16px` for cards** (relaxed, friendly surfaces) and **`32px` for CTAs** (the signature pill that makes the brand feel cozy). Inputs sit lower at `8px` so fields stay functional. There are essentially no sharp corners in the system — even the smallest controls round at least slightly. **If a button isn't rounded at 32px, it isn't a Casper button.**


## 7. Depth & Elevation

Casper is mostly flat, with soft navy-tinted shadows reserved for genuine lift. Crucially, every shadow is tinted with the brand navy (`rgba(30, 48, 110, ...)`), never neutral gray — so depth reinforces the palette instead of muddying it.

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | flat — no shadow | default sections, navy bands, inputs |
| 1 | `0 1px 3px rgba(30, 48, 110, 0.08)` | resting cards |
| 2 | `0 8px 24px rgba(30, 48, 110, 0.12)` | card hover, raised panels |
| 3 | `0 24px 64px rgba(30, 48, 110, 0.20)` | modals, dialogs, dropdown menus |

### Shadow Philosophy

Elevation is gentle and purposeful. Resting cards barely lift (`0.08` alpha); hover deepens the shadow and nudges the card up 2px. Modals get the only pronounced shadow. Because every shadow carries the navy tint, even the depth model reads as "warm premium" rather than "material-design gray." White-space separation does most of the heavy lifting; shadows are the accent, not the structure.


## 8. Interaction & Motion

- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` standard for nearly everything — a smooth, calm material-style ease.
- **Durations:** fast `150ms` (hovers, tint shifts), standard `240ms` (card lift, color transitions), slow `320ms` (section reveals, overlays).
- **Button hover:** background tone shift only — `#012169` → `#011a54` on primary; tint deepens `0.1` → `0.15` on outline/ghost. No transform on buttons; the pill stays put.
- **Card hover:** `translateY(-2px)` plus a deeper navy-tinted shadow over `240ms`. The signature "lift toward you" gesture.
- **Link hover:** underline appears with a `4px` underline-offset; navy stays navy.
- **Section reveals:** scroll-triggered fade-in with a slight Y translation over `320ms` — gentle, never bouncy.
- **Reduced motion:** `prefers-reduced-motion: reduce` honored — fade-ins become instant, card-lift transforms drop to opacity/shadow only.

The motion register matches the brand: nothing snaps, nothing bounces, nothing demands. Transitions are soft and confident — the interaction equivalent of a calm voice.


## 9. Accessibility & A11y

Computed against the live tokens (`bg #ffffff`, `text #1e306e`, brand-deep `#012169`):

- **Navy text on white** — `#1e306e` on `#ffffff` = **12.33:1** — AAA. The core reading pair clears AAA comfortably at any size.
- **White on navy CTA** — `#ffffff` on `#012169` = **14.76:1** — AAA. The filled primary button is unambiguously legible.
- **Navy on navy-tint** — `#1e306e` on `#e8eaf0` (outline-CTA wash) = **10.34:1** — AAA. Outline buttons and tint chips clear AAA.
- **White on navy surface** — `#ffffff` on `#1e306e` (feature bands, footer) = **12.33:1** — AAA.
- **Muted navy-gray on white** — `#5a6488` on `#ffffff` = **5.81:1** — AA for body, AAA for large text. Safe for meta/helper copy.
- **Faint navy-gray** — `#8b93ac` on `#ffffff` ≈ **3.0:1** — use for disabled/placeholder only, never for primary content.

### Focus, Keyboard, ARIA
- **Focus ring:** `2px solid #012169` with a `2px` outset gap — deep navy, distinct from the resting navy so focus reads clearly even on navy-adjacent elements.
- **Keyboard nav:** all CTAs, nav items, inputs, and cards are reachable in DOM order; the pill CTAs expose a visible focus ring, not just a hover state.
- **Touch targets:** CTAs run `~48px` tall via `14px 28px` padding — above the 44×44 minimum.
- **ARIA:** label icon-only buttons (cart, search, menu) with `aria-label`; mark the active nav item with `aria-current="page"`; modals trap focus and restore it on close.
- **Reduced motion:** honored — fade-ins instant, transforms suppressed.


## 10. Responsive Behavior

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Mobile | <640 | single-column; nav collapses to hamburger; hero serif 80→40px; CTAs full-width pills |
| Tablet | 640–1024 | 2-up card grids; nav still condensed; hero 80→56px |
| Desktop | 1024–1280 | 3-up grids; inline navy nav with right-pinned CTA |
| Wide | 1280–1536+ | content centers within 1280px; navy bands + photography bleed to viewport edges |

- **Touch targets** stay `≥48px` tall across all breakpoints; pill padding scales but never drops below comfortable.
- **Per-component collapse:** multi-column card grids stack to single-column on mobile; the outline + primary CTA pair stacks vertically and goes full-width.
- **Type:** the New Kansas hero scales down aggressively (80→40px) while Calibre body holds at `16px` for readability.
- **Images:** product/lifestyle photography is responsive and edge-to-edge on mobile feature bands; cards keep their `16px` radius at every size.


## 11. Content & Voice

### Tone
**Calm, warm, reassuring — premium without pretension.** Casper speaks like a knowledgeable friend who wants you to sleep better, not a salesperson closing a deal. Sentence case throughout, friendly and plainspoken, occasionally playful about sleep but never gimmicky. The voice matches the visuals: soft edges, no pressure.

### Microcopy Patterns
- Primary CTA: **"Shop now"** / **"Add to cart"** / **"Find your match"**
- Secondary: **"Learn more"** / **"Compare mattresses"** / **"Take the quiz"**
- Reassurance copy near CTAs: **"100-night risk-free trial"** / **"Free shipping & returns"**
- Section headers: warm declaratives or gentle questions ("Sleep, perfected." / "Not sure where to start?")
- Errors: **"Something went wrong. Please try again."** — plain, no blame
- Empty state: **"Your cart is empty."** with a soft nudge to keep browsing

### CTA Verb Conventions
- **Use:** Shop / Find / Discover / Learn / Compare / Take (the quiz) / Sleep
- **Avoid:** ALL-CAPS verbs, urgency language ("Hurry," "Last chance," "Don't miss"), exclamation-point pressure. Urgency theater is off-brand for a sleep company.


## 12. Dark Mode & Theming

**Light-only on web.** The pure-white `#ffffff` canvas is the brand's daytime-bright identity — clean, airy, awake. Casper does use navy `#1e306e` as an inverse *surface* (feature bands, footer, dark sections with white text), but never as a global dark theme. Inverting the whole system would lose the white-space calm and the navy-on-white clarity that define the brand. The navy is meant to sit *on* white, not replace it.


## 13. Lineage & Influences

Casper launched in 2014 as the original bed-in-a-box DTC brand, and its identity has always leaned cozy-premium rather than clinical-tech. The current site runs a disciplined single-hue navy system: **Casper navy/indigo** `#1e306e` *is* the brand — it carries body copy, headlines, icons, and links against a pure-white `#ffffff` canvas — with a deeper `#012169` reserved for the filled pill CTAs. Restricting nearly the entire interface to one hue plus white is what makes the system feel calm and confident; the photography supplies the color, the UI supplies the quiet.

The personality comes from the type pairing. **Calibre** (Klim Type Foundry) sets body copy with a humanist, friendly warmth, while **New Kansas** — a contemporary soft serif — sets display headlines with an editorial, almost storybook quality. A serif on a commerce site is the deliberate cozy signal, and the `32px`-radius pill CTAs complete the register: generous, rounded, reassuring. Casper sits tonally alongside other premium-friendly DTC brands — Away, Brooklinen, Parachute — and pointedly apart from the cold blue-gray of tech-mattress competitors. Navy is the warmth that keeps it from going corporate; white space is the calm that keeps it from going loud.

**Named influences:**
- **Calibre (Klim Type Foundry, 2011)** — humanist-sans body face; the warm, readable workhorse of the system.
- **New Kansas (soft serif)** — contemporary display serif; the editorial cozy signal on headlines.
- **Away (DTC travel)** — premium-friendly peer: clean white canvas, single confident hue, rounded warmth.
- **Brooklinen (DTC bedding)** — sleep-adjacent contemporary; cozy editorial register, serif-meets-sans pairing.
- **Parachute (DTC home)** — calm premium home aesthetic; restrained palette, generous whitespace, soft corners.
- **Klim Type Foundry** — the foundry behind Calibre; defines the humanist-sans tone of Casper's body register.


## 14. Do's and Don'ts

### Do
- Use **`#ffffff`** for the page canvas — pure, bright white. It's the daytime-awake identity.
- Use **`#1e306e`** (Casper navy/indigo, `rgb(30, 48, 110)`) for body text, headlines, icons, and links — the brand is the navy.
- Use **`#012169`** (deeper navy, `rgb(1, 33, 105)`) for the filled primary CTA, with a white label.
- Make every CTA a **32px-radius pill** with generous `14px 28px` padding.
- Use the **navy-tint outline** button (navy text on `rgba(30, 48, 110, 0.1)`) as the secondary action.
- Set headlines in **New Kansas** soft serif; set body and UI in **Calibre** humanist sans.
- Keep headlines **sentence case** — calm and reassuring, never shouting.
- Round **cards at 16px** and **inputs at 8px** — soft, but quieter than the CTA pills.
- Tint every shadow with **brand navy** (`rgba(30, 48, 110, ...)`), never neutral gray.
- Lean on **generous white space** — `64`–`96px` section padding, `1.55` body line-height.
- Let **photography carry the color**; keep the UI near-monochrome navy-on-white.

### Don't
- **Don't** use warm-cream or bone for the canvas — Casper's white is pure `#ffffff`, not off-white.
- **Don't** render text in gray or near-black — body and headlines are navy `#1e306e`.
- **Don't** use sharp-cornered or small-radius (4–8px) buttons. CTAs are **32px pills**, always.
- **Don't** set headlines in the body sans — the serif/sans pairing is the whole personality; serif goes on display.
- **Don't** set body copy in New Kansas serif — it turns precious. Serif is for headlines only.
- **Don't** ALL-CAPS headlines or use urgency language ("Hurry," "Last chance"). It's a sleep brand; stay calm.
- **Don't** use neutral-gray shadows — depth is navy-tinted to stay on-brand.
- **Don't** add a third typeface. Calibre + New Kansas carry everything.
- **Don't** crowd sections — density reads as pressure, which is off-brand.
- **Don't** invert the whole site to a dark theme. Navy is a surface, not a global mode; it sits *on* white.


## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas (bg):          #ffffff   (pure white)
Brand / text:         #1e306e   (Casper navy/indigo, rgb(30,48,110))
CTA fill (brand-deep):#012169   (deeper navy, rgb(1,33,105))
CTA hover:            #011a54
On-brand (label):     #ffffff
Accent tint:          #e8eaf0   (navy @10% over white)
Text muted:           #5a6488   (navy-gray)
Border:               #dde0e9   (navy hairline)
Surface inverse:      #1e306e   (navy bands / footer)
Focus ring:           #012169
```

### Example Component Prompts

> **Hero:** "Create a Casper-style landing hero on a pure-white `#ffffff` canvas. Set the headline in New Kansas soft serif, weight 600, sentence case, navy `#1e306e` — a calm, reassuring sleep declarative like 'Sleep, perfected.' Beneath it, one short Calibre lede in navy, then a deep-navy `#012169` pill CTA at `32px` radius with a white label ('Shop mattresses') and a navy-tint outline secondary CTA beside it. Lots of white space. No urgency language."

> **Product card:** "Design a Casper product card — white surface, `16px` radius, navy hairline border `#dde0e9`, soft navy-tinted shadow `0 1px 3px rgba(30,48,110,0.08)`. Lifestyle photo on top, New Kansas serif product name in navy, Calibre price at 20px/600, and a 32px-radius deep-navy pill 'Add to cart' CTA. Hover lifts the card 2px with a deeper navy shadow."

> **CTA pair:** "Build a Casper CTA pair: primary is a `32px`-radius pill, `#012169` fill, white `#ffffff` label, `14px 28px` padding, hover to `#011a54`. Secondary is a 32px outline pill — navy `#1e306e` text and border on a `rgba(30,48,110,0.1)` wash. Sentence-case labels, Calibre 16px/500."

> **Navy feature band:** "Create a full-bleed navy `#1e306e` feature band with white text. New Kansas serif headline, Calibre body, and a white-or-tint 32px pill CTA. White space above and below; this is the emphasis section between two white bands."

> **Form:** "Design a Casper email-capture form on white — Calibre `13px/500` navy label, an `8px`-radius input with a `#dde0e9` border and `#8b93ac` placeholder, focus to a navy `#1e306e` border plus a `2px #012169` outline ring, and a deep-navy 32px pill submit button."

> **Quiz card:** "Build a 'Take the sleep quiz' tint card — `f6f7fa` surface, `16px` radius, no border, New Kansas serif heading in navy, friendly Calibre body, and a navy-tint outline 32px pill CTA ('Take the quiz')."

### Iteration Guide

1. **Check the canvas first.** If it isn't pure `#ffffff`, fix it — no cream, no bone, no gray.
2. **Make text navy.** Body and headlines should be `#1e306e`, never gray or near-black. This is the fastest way to read "Casper."
3. **Round the CTAs to 32px.** If buttons have sharp or small-radius corners, they're wrong — every Casper button is a 32px pill.
4. **Confirm the type split.** Headlines in New Kansas serif, body/UI in Calibre sans. If headlines look like the body, swap them to the serif.
5. **Use the two-navy rule.** `#1e306e` for the brand/text everywhere; `#012169` only for the filled primary CTA and focus ring.
6. **Tint the shadows navy.** Replace any gray shadows with `rgba(30, 48, 110, ...)` so depth stays on-brand.
7. **Add white space.** If it feels crowded or urgent, increase section padding and line-height — calm is the brand.
8. **Strip the pressure.** Remove ALL-CAPS, exclamation points, and urgency copy; Casper reassures, it doesn't push.
