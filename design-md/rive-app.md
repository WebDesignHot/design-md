---
name: Rive
tagline: Chunky animated display type and saturated playful colour — interactive graphics platform that wears its motion design on its sleeve.
updated_at: 2026-05-06T08:15:13+12:00
published_at: 2026-05-03T16:32:19+12:00
author: webdesignhot
source_url: https://rive.app
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [design-tools, dev-tools]
tags: [light, playful, sans, bright, organic, structured]
preview_swatch: ['#fdfcf8', '#1d1d1b', '#ff5b37']
related: [figma, framer, tldraw]
description: 'Rive is a runtime for interactive graphics, and the marketing site treats motion as the primary brand asset. The canvas is a warm off-white (`#fdfcf8`), the display is a chunky high-x-height geometric sans set at extreme scale (140px+), and saturated accent hues — coral `#ff5b37`, mustard `#fcc24c`, and electric blue `#3a7bff` — appear as moving Rive animations rather than static fills. Type lockups frequently animate in place, weight-shifting from light to black mid-headline. The brand earns its playfulness by actually making it interactive: every illustration on the page is a live runtime, not a render.'

colors:
  bg: '#fdfcf8'                  # warm off-white canvas — nods to print not screen
  bg-strong: '#f5f3ec'           # slightly deeper neutral band
  bg-cream: '#f9f7f0'            # alternate cream band for sectional rhythm
  surface: '#ffffff'             # rare pure-white surface, used inside cards
  surface-soft: '#fdfcf8'        # cards on cream tint
  surface-dark: '#1d1d1b'        # dark band — used in inverted hero sections
  text: '#1d1d1b'                # near-black with warm undertone (rgb 29,29,27)
  text-strong: '#000000'         # max contrast for hero display
  text-muted: '#1d1d1b99'        # 60% — secondary copy
  text-soft: '#1d1d1b66'         # 40% — captions, faint counts
  text-on-dark: '#fdfcf8'        # cream-tinted text on dark bands
  text-on-dark-muted: '#fdfcf899'
  brand: '#ff5b37'               # signature coral — the primary accent
  brand-hover: '#e54a2a'         # deeper coral on hover
  brand-active: '#cc3f23'        # pressed
  brand-soft: '#ffe0d6'          # coral tint surface
  accent-yellow: '#fcc24c'       # mustard — animation accent
  accent-yellow-soft: '#fff1cf'  # mustard tint
  accent-blue: '#3a7bff'         # electric blue — motion accent
  accent-blue-soft: '#dbe7ff'    # blue tint
  accent-pink: '#ff6da6'         # pink-coral — animation accent
  accent-pink-soft: '#ffe0ec'    # pink tint
  accent-green: '#4cc38a'        # mint — animation accent
  accent-green-soft: '#d6f1e2'   # green tint
  cta-bg: '#1d1d1b'              # primary CTA — near-black pill
  cta-bg-hover: '#000000'        # hover deepens to pure black
  cta-text: '#fdfcf8'            # cream label, never pure white
  border: 'rgba(29, 29, 27, 0.10)'   # 10% near-black hairline
  border-soft: 'rgba(29, 29, 27, 0.06)'
  border-strong: 'rgba(29, 29, 27, 0.20)'
  border-dark: 'rgba(253, 252, 248, 0.12)'
  on-brand: '#ffffff'            # white on coral
  scrim: 'rgba(29, 29, 27, 0.45)'
  shadow-soft: 'rgba(29, 29, 27, 0.05)'
  shadow-medium: 'rgba(29, 29, 27, 0.10)'
  shadow-deep: 'rgba(29, 29, 27, 0.18)'
  success: '#4cc38a'             # mint — also used in animations
  warning: '#fcc24c'             # mustard
  danger: '#ff5b37'              # coral does double duty
  info: '#3a7bff'                # electric blue

typography:
  display:
    family: '"Inter Display", "Inter", -apple-system, "system-ui", sans-serif'
    weights: [400, 500, 600, 700, 800, 900]
    opentype-features: ['ss01', 'cv11']
  body:
    family: '"Inter", -apple-system, "system-ui", "Segoe UI", Roboto, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"JetBrains Mono", "Fira Code", ui-monospace, Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 140, weight: 800, lineHeight: 0.95, tracking: '-0.04em', family: display, opentype: ['ss01'] }
    display-large:   { size: 96,  weight: 800, lineHeight: 0.98, tracking: '-0.035em', family: display, opentype: ['ss01'] }
    h1:              { size: 72,  weight: 700, lineHeight: 1.0,  tracking: '-0.03em',  family: display }
    h2:              { size: 48,  weight: 700, lineHeight: 1.05, tracking: '-0.025em', family: display }
    h3:              { size: 32,  weight: 600, lineHeight: 1.2,  tracking: '-0.015em', family: display }
    h4:              { size: 24,  weight: 600, lineHeight: 1.25, tracking: '-0.01em',  family: display }
    h5:              { size: 20,  weight: 600, lineHeight: 1.3,  tracking: '0',        family: display }
    body-large:      { size: 19,  weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body:            { size: 17,  weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    body-small:      { size: 15,  weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    label:           { size: 14,  weight: 500, lineHeight: 1.3,  tracking: '0',        family: body }
    caption:         { size: 13,  weight: 400, lineHeight: 1.4,  tracking: '0',        family: body }
    micro:           { size: 11,  weight: 500, lineHeight: 1.3,  tracking: '0.04em',   family: body, transform: uppercase }
    button-cta:      { size: 16,  weight: 600, lineHeight: 1.0,  tracking: '0',        family: body }
    nav-link:        { size: 15,  weight: 500, lineHeight: 1.0,  tracking: '0',        family: body }
    code-inline:     { size: 14,  weight: 400, lineHeight: 1.5,  tracking: '0',        family: mono }
    code-block:      { size: 14,  weight: 400, lineHeight: 1.6,  tracking: '0',        family: mono }
    eyebrow-mono:    { size: 12,  weight: 500, lineHeight: 1.2,  tracking: '0.06em',   family: mono, transform: uppercase }

radius:
  micro: 2
  sm: 8
  md: 12
  lg: 16
  xl: 20         # default card
  xxl: 24        # animation containers
  featured: 32   # large feature cards
  pill: 9999

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 72
  hero-min-height: 720

components:
  button-primary:
    bg: '#1d1d1b'
    color: '#fdfcf8'
    radius: 9999
    padding: '14px 28px'
    height: 48
    font: button-cta
    use: 'Get Started, Try Rive Free, Start Building — near-black pill with animated arrow on hover.'
  button-primary-hover:
    bg: '#000000'
    color: '#fdfcf8'
    radius: 9999
    use: 'Hover state — deepens to pure black, arrow slides 4px right.'
  button-secondary:
    bg: 'transparent'
    color: '#1d1d1b'
    border: '1.5px solid #1d1d1b'
    radius: 9999
    padding: '12.5px 26.5px'
    height: 48
    use: 'Secondary actions — Watch demo, View docs, See examples.'
  button-tertiary-text:
    bg: 'transparent'
    color: '#1d1d1b'
    use: 'Inline link with animated underline that grows from left on hover.'
  card-demo:
    bg: '#ffffff'
    color: '#1d1d1b'
    radius: 20
    border: '1px solid rgba(29, 29, 27, 0.10)'
    padding: '32px'
    use: 'Demo card — wraps an embedded interactive Rive scene with hairline border.'
  card-feature:
    bg: '#fdfcf8'
    color: '#1d1d1b'
    radius: 24
    padding: '40px'
    border: '1px solid rgba(29, 29, 27, 0.06)'
    use: 'Feature tile — quiet container that lets the embedded animation carry the visual weight.'
  card-animation-container:
    bg: 'transparent'
    radius: 24
    use: 'Bleed container for embedded Rive runtime — softens the boundary between motion and page.'
  hero-lockup:
    bg: '#fdfcf8'
    use: 'Full-bleed hero — single oversized animated character anchors right column, display type runs left.'
  badge:
    bg: 'rgba(29, 29, 27, 0.06)'
    color: '#1d1d1b'
    radius: 9999
    padding: '6px 12px'
    font: micro
    use: 'Small pill labels — "NEW", "BETA", section eyebrows.'
  badge-coral:
    bg: '#ffe0d6'
    color: '#cc3f23'
    radius: 9999
    padding: '6px 12px'
    use: 'Coral-tinted pill for "Featured" or "Trending" callouts.'
  text-input:
    bg: '#ffffff'
    color: '#1d1d1b'
    border: '1px solid rgba(29, 29, 27, 0.20)'
    radius: 12
    height: 48
    padding: '12px 16px'
    focus-ring: '2px solid #ff5b37'
    use: 'Form input — newsletter signup, contact, search.'
  nav-link:
    color: '#1d1d1b'
    font: nav-link
    use: 'Top-bar navigation — quiet 15/500 with no underline; coral underline grows on hover.'
  modal:
    bg: '#fdfcf8'
    color: '#1d1d1b'
    radius: 24
    border: '1px solid rgba(29, 29, 27, 0.10)'
    use: 'Dialogs — cream surface preserves brand warmth even in modal context.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)'  # spring overshoot for character bounces
  ease-rive-default: 'cubic-bezier(0.4, 0, 0.2, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 400
  duration-runtime: 'variable — driven by individual Rive scenes'
  hero-character: 'Embedded Rive runtime loops a 6–8s animation; pauses on prefers-reduced-motion'
  weight-shift: 'Display type animates weight 400 → 800 over 800ms with bounce easing on first paint'
  cta-arrow-slide: 'arrow translateX 0 → 4px over 200ms standard'
  card-hover: 'Embedded Rive scene activates ambient idle animation; container scales 1.0 → 1.01 over 240ms'
  link-underline: 'coral underline scaleX 0 → 1 from left over 200ms'
  reduced-motion: 'respects prefers-reduced-motion: reduce — Rive runtimes pause on first frame, weight-shift becomes instant, all transitions to opacity-only'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'none — Rive stays mostly flat; depth comes from animation'
  soft: 'rgba(29, 29, 27, 0.05) 0 4px 12px'
  medium: 'rgba(29, 29, 27, 0.10) 0 8px 24px'
  deep: 'rgba(29, 29, 27, 0.18) 0 16px 40px'
  contact-shadow: 'rgba(29, 29, 27, 0.12) 0 2px 8px — soft contact shadow under animated characters, updated by runtime'
  ring: '0 0 0 2px #ff5b37'

accessibility:
  contrast-text-on-bg: 15.9          # #1d1d1b on #fdfcf8 — AAA
  contrast-text-on-dark: 15.9        # #fdfcf8 on #1d1d1b — AAA
  contrast-on-cta: 14.2              # #fdfcf8 on #1d1d1b CTA — AAA
  contrast-coral-on-bg: 4.6          # #ff5b37 on #fdfcf8 — AA at body sizes, used sparingly outside animations
  contrast-coral-deep-on-bg: 5.8     # #cc3f23 on #fdfcf8 — AA+
  contrast-muted-on-bg: 8.1          # 60% opacity ink on cream — AAA
  focus-ring: '2px solid #ff5b37 + 2px outline offset'
  reduced-motion-honored: true
  touch-target-min: 44
  keyboard-nav: 'Tab moves logo → primary nav → CTA → main content (with skip-link to section-1) → demo cards → footer; arrow keys inside example carousel.'
  rive-runtime-a11y: 'each embedded Rive scene exposes role="img" with descriptive aria-label; pauses on prefers-reduced-motion'

dark-mode: optional   # Rive ships dark inverted bands within the light marketing site, but no full dark-mode toggle. Inverted bands swap to bg #1d1d1b with text #fdfcf8.

colors-dark:
  bg: '#1d1d1b'
  bg-strong: '#000000'
  surface: '#272725'
  text: '#fdfcf8'
  text-muted: '#fdfcf899'
  brand: '#ff7a5c'                # slightly lifted coral for dark contrast
  cta-bg: '#fdfcf8'
  cta-text: '#1d1d1b'
  border: 'rgba(253, 252, 248, 0.12)'
  on-brand: '#1d1d1b'
---

## 1. Visual Theme & Atmosphere

Rive's marketing surface is one of the rare landing pages where **motion is the primary type-setting tool**. Headlines weight-shift from 400 to 900 mid-render, characters bounce on hover, and embedded Rive runtimes drive almost every illustration on the page. The static record of all this is a chunky **InterDisplay 800** at 140px with `-0.04em` tracking on a warm off-white canvas — but the live page is animated end to end. Static screenshots fundamentally undersell what Rive *is*; the brand earns its playfulness by actually making it interactive.

The canvas is a deliberately warm off-white (`#fdfcf8`) that nods to print rather than screen. It's the same chromatic move that Anthropic, Notion, and Perplexity make — pulling the body backdrop slightly warm to read as paper rather than UI — but Rive applies it under saturated, playful animation rather than under quiet AI prose. The contrast between cream-paper canvas and electric-saturated motion characters is exactly what makes the brand legible: the surface is calm, the *content* moves.

The four-colour accent palette — coral `#ff5b37`, mustard `#fcc24c`, electric blue `#3a7bff`, pink-coral `#ff6da6` — appears almost exclusively inside animated assets, never as static fills behind type. This is the discipline that prevents Rive from reading as cartoon-design: the saturated hues are *content*, not chrome. Cards stay cream, buttons stay near-black, type stays warm-charcoal, and the colour energy lives inside the embedded Rive scenes themselves.

Typography is set in InterDisplay (with full weight axis 400 → 900) for the heroic moves and standard Inter for body. The trick is that many headlines actually animate weight in place — rendering as 400 on entry and morphing to 800 — which the static type system has to accommodate by sharing the same family across the full weight axis. Inter Display's optical sizing makes this transition read smoothly at 140px display.

Visually the brand sits between **Linear's discipline** (single accent per surface, quiet container chrome) and the playful cartoon energy of **Tldraw / Excalidraw**. But where Tldraw earns playfulness through hand-drawn aesthetic, Rive earns it through actual interactivity — every cartoon character on the page is a live runtime that responds to scroll, hover, and click. That's the conceptual hinge: motion isn't decoration here, it's the demo.

**Key Characteristics:**
- Warm off-white canvas (`#fdfcf8`) — paper-tinted, not pure white
- Display type at extreme scale (140px+) in InterDisplay 800/900 with `-0.04em` tracking
- Four-colour saturated accent palette (coral, mustard, electric blue, pink) lives *inside animations only*
- Near-black pill CTA (`#1d1d1b`, 9999px) — restraint that lets animations carry the energy
- Embedded Rive runtimes drive every illustration on the page — characters bounce, headlines weight-shift, cards animate idle
- Generous radii: cards at 20px, buttons full pill, animation containers up to 32px
- Static type held to a quiet near-black-on-cream pairing — colour reserved for motion
- Hairline borders (10% near-black) instead of shadows — depth is animated, not static

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#fdfcf8`): warm off-white body backdrop — the defining cream-paper backdrop that distinguishes Rive from cool-white peers
- **Canvas Deeper** (`#f5f3ec`): slightly deeper neutral band for sectional rhythm
- **Cream Alt** (`#f9f7f0`): alternate cream band — used between coral hero and feature grid
- **Ink** (`#1d1d1b`): primary text colour — warm near-black with green undertone, never pure `#000`
- **Ink Max** (`#000000`): reserved for hero display copy where Rive wants maximum chromatic punch

### Brand & Dark
- **Coral** (`#ff5b37`): signature accent — the primary brand colour, but used inside animated assets and brand mark only, not as static button fill
- **Coral Hover** (`#e54a2a`): deeper coral on hover where the colour does appear statically
- **Coral Active** (`#cc3f23`): pressed state, used on accent badges
- **Coral Soft** (`#ffe0d6`): coral-tinted surface for "Featured" pills and accent badges
- **Dark Surface** (`#1d1d1b`): inverted hero bands and primary CTA — the near-black pill that anchors action
- **Dark Black** (`#000000`): pressed CTA state, max-contrast hero variants

### Accent (animation-only)
- **Mustard** (`#fcc24c`): animation accent — appears in character clothing, prop fills, ambient particles
- **Mustard Soft** (`#fff1cf`): tint for warm-light section grounds
- **Electric Blue** (`#3a7bff`): motion accent — sky highlights, sparkle effects, motion trails
- **Blue Soft** (`#dbe7ff`): cool tint for feature tile backdrops
- **Pink-Coral** (`#ff6da6`): playful accent — character cheeks, heart shapes, soft glow
- **Pink Soft** (`#ffe0ec`): blush-tinted surface for warm-feature backdrops
- **Mint** (`#4cc38a`): success/positive accent — leaves, growth metaphors, "go" states
- **Mint Soft** (`#d6f1e2`): mint-tinted surface for feature tiles

### Interactive
- **Link** (`#1d1d1b`): default text link — distinguished by underline state, never colour
- **Link Hover**: ink stays, but a coral underline (`#ff5b37`) grows from left over 200ms
- **Visited** (`#1d1d1b66`): visited state fades to 40% opacity ink
- **Disabled** (`#1d1d1b66`): disabled state — same 40% ink
- **Selected** (`#ff5b37`): radio/checkbox/toggle fill flips to coral

### Neutral Scale
- **Ink** (`#1d1d1b`) — primary text, full strength
- **Ink 60** (`#1d1d1b99`) — secondary text, captions
- **Ink 40** (`#1d1d1b66`) — tertiary, disabled, visited
- **Ink 20** (`#1d1d1b33`) — borders, dividers
- **Ink 10** (`#1d1d1b1a`) — hairline borders, the most common border value
- **Ink 6** (`#1d1d1b0f`) — soft dividers between sections

### Surface & Borders
- **Canvas** (`#fdfcf8`) — default
- **Surface White** (`#ffffff`) — pure white, used inside cards on cream
- **Surface Soft** (`#fdfcf8`) — cards on cream tint, when inside cream sections
- **Surface Dark** (`#1d1d1b`) — dark band ground on inverted hero sections
- **Border** (`rgba(29, 29, 27, 0.10)`) — default 10% hairline
- **Border Soft** (`rgba(29, 29, 27, 0.06)`) — softer 6% for editorial dividers
- **Border Strong** (`rgba(29, 29, 27, 0.20)`) — input outlines, focus precursors
- **Border Dark** (`rgba(253, 252, 248, 0.12)`) — borders on dark inverted bands

### Shadow Colors
Rive stays almost entirely flat. The only shadow that consistently appears is a **soft contact shadow under animated characters** (`rgba(29, 29, 27, 0.12) 0 2px 8px`) — and that shadow is rendered by the Rive runtime itself, not by CSS. Static cards use hairline borders, not drop shadows.

- `rgba(29, 29, 27, 0.05) 0 4px 12px` — soft hover lift (rare)
- `rgba(29, 29, 27, 0.10) 0 8px 24px` — medium card lift (modal-adjacent)
- `rgba(29, 29, 27, 0.18) 0 16px 40px` — deep modal/popover

### Semantic
- **Success Mint** (`#4cc38a`): "Saved", "Published", "Up to date" — same mint that appears in animations
- **Warning Mustard** (`#fcc24c`): advisory banners — warm yellow that doesn't break the warm palette
- **Danger Coral** (`#ff5b37`): error states do double duty with the brand coral — Rive intentionally lets the brand colour carry destructive meaning where it appears statically
- **Info Blue** (`#3a7bff`): informational banners — used sparingly because cool blue feels off-brand against the warm canvas

## 3. Typography Rules

### Font Family

**Primary Display**: `"Inter Display"`. Fallback chain: `"Inter", -apple-system, "system-ui", sans-serif`. Inter Display is the optical-display variant of Rasmus Andersson's Inter family — slightly tighter spacing and refined letterforms at sizes ≥32px. Rive uses it across the full 400 → 900 weight axis because so many headlines animate weight in place.

**Body**: `"Inter"` — the standard Inter for sizes <32px, where the optical-display variant becomes too tight. Body type runs at 400 with occasional 500 for emphasis.

**Mono**: `"JetBrains Mono"` for code samples and runtime parameters. Fallback chain: `"Fira Code", ui-monospace, Menlo, Consolas, monospace`. JetBrains Mono is the workhorse for the Rive editor and docs; it appears on the marketing site in code-sample sections and runtime parameter labels.

**OpenType features**: `ss01` (alternate single-storey `a`) and `cv11` (curved `l` tail) are enabled on display sizes — these stylistic alternates give Rive's display type its slightly playful, geometric feel without losing Inter's neutrality.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| display-hero | Inter Display | 140 | 800 | 0.95 | -0.04em | ss01 | Homepage hero — often weight-animates 400→800 on first paint |
| display-large | Inter Display | 96 | 800 | 0.98 | -0.035em | ss01 | Section opener — feature page hero |
| h1 | Inter Display | 72 | 700 | 1.0 | -0.03em | — | Secondary section heads |
| h2 | Inter Display | 48 | 700 | 1.05 | -0.025em | — | Feature row heads |
| h3 | Inter Display | 32 | 600 | 1.2 | -0.015em | — | Card titles, sub-section heads |
| h4 | Inter Display | 24 | 600 | 1.25 | -0.01em | — | Feature card headlines |
| h5 | Inter Display | 20 | 600 | 1.3 | 0 | — | Tile heads, eyebrow + title pairs |
| body-large | Inter | 19 | 400 | 1.55 | 0 | — | Lead paragraphs, hero sub-copy |
| body | Inter | 17 | 400 | 1.5 | 0 | — | Default body — slightly larger than typical |
| body-small | Inter | 15 | 400 | 1.5 | 0 | — | Card descriptions, captions |
| label | Inter | 14 | 500 | 1.3 | 0 | — | Form labels, small UI text |
| caption | Inter | 13 | 400 | 1.4 | 0 | — | Footer, fine print |
| micro | Inter | 11 | 500 | 1.3 | 0.04em | uppercase | "NEW", "BETA" badges |
| button-cta | Inter | 16 | 600 | 1.0 | 0 | — | Primary CTA labels |
| nav-link | Inter | 15 | 500 | 1.0 | 0 | — | Top-bar navigation |
| code-inline | JetBrains Mono | 14 | 400 | 1.5 | 0 | — | Inline `<code>` in body |
| code-block | JetBrains Mono | 14 | 400 | 1.6 | 0 | — | Code samples, runtime parameters |
| eyebrow-mono | JetBrains Mono | 12 | 500 | 1.2 | 0.06em | uppercase | Mono section eyebrows — "INTERACTIVE GRAPHICS" |

### Principles

- **Inter Display, not Inter, for display sizes.** The optical-display variant has tighter spacing and is calibrated for ≥32px — Rive switches families at the 24/32 boundary.
- **Full weight axis (400 → 900) is non-negotiable.** Many headlines animate weight in place; the brand needs every weight in the family to render the transition smoothly.
- **`-0.04em` tracking at 140px display.** Display-hero scale needs aggressive negative tracking to read as a unified word-mark rather than as spaced letters.
- **Weight-shift as a typographic device.** Display headlines often animate from 400 on entry to 800 over 800ms with bounce easing — a typographic "wake up" gesture unique to Rive.
- **Body at 17/24 (slightly larger than 16/24).** Rive nudges body slightly up to make the page read more leisurely-editorial, less compact-utility.
- **JetBrains Mono for eyebrows and code.** The mono eyebrows (`12/500/uppercase/0.06em`) read as developer-tools-coded — they remind you Rive is technical product, not just a creative-coding toy.
- **Inter is the closest open-source substitute.** When licensing Inter Display isn't possible, default Inter at the same weights with `-0.005em` extra negative tracking compensates adequately.

## 4. Component Stylings

### Buttons

**`button-primary`** — near-black (`#1d1d1b`) fill, cream (`#fdfcf8`) text in 16/600, 9999px pill, 14×28px padding, 48px height. The primary CTA across the entire marketing site: "Get Started", "Try Rive Free", "Start Building". Frequently includes an arrow icon that slides 4px right on hover. Hover deepens to pure black; active goes slightly smaller (scale 0.98) for 100ms.

**`button-secondary`** — transparent fill, 1.5px ink (`#1d1d1b`) outline, ink text in 16/600, same pill, same 48px height. Used for secondary actions: "Watch demo", "View docs", "See examples". Hover fills the button with ink and flips text to cream.

**`button-tertiary-text`** — plain ink text, no surface, no border. The hover treatment is signature: a coral (`#ff5b37`) underline grows from left over 200ms — the only place coral appears statically in interactive UI. Used for inline links and "Learn more" callouts.

### Cards

**`card-demo`** — pure white (`#ffffff`) surface, 20px radius, 1px 10% near-black hairline, 32px padding. The defining card type — wraps an embedded interactive Rive scene with quiet container chrome that lets the animation be the visual content. On hover the embedded Rive scene activates an ambient idle animation; the card itself scales 1.0 → 1.01 over 240ms.

**`card-feature`** — cream (`#fdfcf8`) surface, 24px radius, 1px 6% near-black hairline (softer than demo card), 40px padding. Used for marketing feature tiles where the photography or illustration is decorative rather than interactive. The softer 6% border emphasises that this is a calmer container than the demo card.

**`card-animation-container`** — transparent surface, 24px radius. A bleed container for embedded Rive runtime — softens the boundary between motion and page. Used in the hero where a single oversized character anchors the right column with no visible card chrome.

### Hero Lockup

The defining homepage move: full-bleed hero on cream canvas, single oversized animated character anchoring the right column (~50% viewport width), display type running across the left column at 140/800. The character is a Rive runtime that loops a 6–8s animation; the type often animates weight from 400 to 800 mid-render. Entry sequence: type fades in at 400 weight, then morphs to 800 over 800ms with bounce easing; the character begins its loop ~200ms after type settles.

### Badges, Tags, Pills

**`badge`** — 6% near-black surface, ink text in 11/500/uppercase/0.04em, 9999px pill, 6×12px padding. Used for "NEW", "BETA", section eyebrows. Quiet, utility-flavoured.

**`badge-coral`** — coral-soft (`#ffe0d6`) surface, deep-coral (`#cc3f23`) text. Same pill, same padding. Used sparingly for "Featured" or "Trending" callouts — the only place coral appears outside animations.

**`badge-mono-eyebrow`** — transparent fill, ink text in 12/500/uppercase JetBrains Mono with 0.06em tracking. Section eyebrow above feature heads — "INTERACTIVE GRAPHICS", "REAL-TIME RUNTIME". The mono treatment signals technical product.

### Inputs / Forms

**`text-input`** — pure white surface, 1px 20% near-black border, 12px radius (slightly less rounded than the 20px cards to read more utilitarian), 48px height, 12×16px padding. On focus the border thickens to 2px coral.

**`form-label`** — stacked above input in 14/500 ink. Required-field marker is a small coral asterisk.

### Navigation

**`top-bar`** — full-width cream bar with no border, 72px height. Logo flush left in custom Rive wordmark (the "Rive" lockup is animated on first paint — characters bounce in sequence). Primary nav centred ("Product", "Examples", "Docs", "Community", "Pricing"). Sign in + Get Started CTAs flush right.

**`nav-link`** — 15/500 ink with `:hover` growing a coral underline from left over 200ms. The underline animation is the Rive flourish — it reads as "this is a motion company".

**`nav-active`** — current page indicated by a coral underline at full width (no animation needed — already at scaleX(1)).

**`mobile-nav-drawer`** — full-screen takeover at <640px. Cream fill, large 32/600 nav links stacked, animated character peeking from the bottom-right corner.

### Modals & Toasts

**`modal`** — cream (`#fdfcf8`) surface (preserves brand warmth even in dialog context), 24px radius, 1px 10% border. Centred over a 45%-opacity ink scrim. Dialog enters with a translateY(8px → 0) + opacity(0 → 1) over 240ms emphasized.

**`toast`** — bottom-centre. Cream fill, 16px radius, 1px 10% border, ink text in 15/500. Duration 4s with progress bar that drains in coral.

### Decorative

**`scroll-character-park`** — recurring motif: animated character "parks" at the right edge of the viewport on scroll, follows the user down the page, and waves when scroll velocity drops. Pure motion-design flourish — the brand's signature "the page is alive" gesture.

**`weight-shift-headline`** — display headline that animates weight 400 → 800 on first paint or on scroll-into-view. Used sparingly (2–3 times per page max) so the device doesn't overstay its welcome.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128 · 160`
- Section padding (vertical): **96–160px** between major bands; **160px** on the hero band — Rive gives editorial bands generous breath
- Card internal padding: **32–40px** (cards are spacious)
- Gutters: **24–32px** between feature tiles in grid view

### Grid & Container

- Max content width: **1280px** centred — moderate, not overly generous
- Reading prose width: **720px** for blog and docs surfaces
- Hero: 50/50 split — display type left, animated character right (collapses to stack at <1024px)
- Feature grids: 2- or 3-column at desktop, with each tile holding an embedded Rive scene
- Footer: 4-column link list at desktop on cream canvas

### Whitespace Philosophy

The grid is **loose and editorial**, with hero blocks claiming the full viewport width and headlines breaking across multiple lines as a deliberate compositional choice. Sections often feature a single oversized animated character anchoring the right column with display type running across the left. The whitespace serves the animation — embedded Rive scenes need breathing room to feel alive rather than crowded. Where Linear's whitespace reads as "premium restraint," Rive's reads as "stage for motion."

### Section Cadence

Rive alternates between **cream-canvas bands** (default body, demo cards) and **inverted dark bands** (`#1d1d1b` ground, cream type) on roughly a 3:1 rhythm — every fourth section flips to dark to create visual punctuation. The dark bands typically house pricing tables or developer-focused content (API features, deployment), while cream bands carry the playful character animations and feature grids. Occasional **coral-tinted bands** (`#ffe0d6` ground) appear for "Featured Examples" or "Community Spotlight" sections.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 2px | Code-block corners, dense table cells |
| Small | 8px | Form-input internal elements, tight chips |
| Standard | 12px | Form inputs, secondary cards |
| Medium | 16px | Modal sub-components, internal panels |
| Comfortable | 20px | Default card (demo card) |
| Relaxed | 24px | Feature card, animation container, modal |
| Featured | 32px | Large feature tiles, hero card frames |
| Pill | 9999px | All CTAs, badges, search inputs |

There are **no compound radii** in mainline UI — every interactive element rounds uniformly. Animation containers occasionally bleed past their card edges (the embedded Rive scene is allowed to extend slightly beyond the rounded clip), creating an organic boundary between motion and page.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Body, cards, masthead, footer (~95% of surfaces) |
| 1 — Hairline | 1px 10% near-black border | Cards, panels, inputs |
| 2 — Soft Lift | `rgba(29, 29, 27, 0.05) 0 4px 12px` | Hover-card subtle lift (rare) |
| 3 — Contact Shadow | `rgba(29, 29, 27, 0.12) 0 2px 8px` | Under animated characters — rendered by Rive runtime, not CSS |
| 4 — Modal | `rgba(29, 29, 27, 0.10) 0 8px 24px` | Centred dialogs, popovers |
| 5 — Deep | `rgba(29, 29, 27, 0.18) 0 16px 40px` | Floating overlay, full-screen takeover scrim |

### Shadow Philosophy

**Depth is animated rather than shadowed.** Characters cast soft contact shadows that update with their movement — but those shadows are rendered by the Rive runtime, not by CSS box-shadow. Static cards stay flat with hairline borders. The brand position: in a system where everything moves, a static drop shadow reads as dead weight; the elevation that matters is the kinetic kind. Where Stripe stacks five blue-tinted shadow layers for atmospheric depth, Rive renders one neutral contact shadow under a character that's actively moving — and that shadow updates every frame. The discipline is total: nothing on the page sits on a fake atmospheric Z-axis. Either it's flat with a hairline, or it's a Rive runtime casting a real shadow.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, focus, opacity transitions
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry, mega-menu, page-section reveals
- **Bounce**: `cubic-bezier(0.34, 1.56, 0.64, 1)` — spring overshoot for character entrance, weight-shift animations
- **Rive runtime**: each embedded Rive scene runs its own easing — the brand intentionally avoids prescribing a single curve to live runtimes

### Durations

| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 150ms | Hover colour swap, focus ring fade-in |
| Standard | 240ms | Card hover, modal enter, link underline grow |
| Slow | 400ms | Section reveal on scroll, larger transitions |
| Display Animation | 800ms | Weight-shift on display headlines |
| Runtime | variable | Rive runtimes loop 6–8s by default |

### Per-Component Recipes

- **CTA hover**: background transitions from `#1d1d1b` to `#000000` over 150ms; arrow icon slides translateX 0 → 4px over 200ms with standard easing.
- **CTA press**: scale 1.0 → 0.98 over 100ms; reverts on release.
- **Card hover**: embedded Rive scene activates ambient idle animation (each card has its own); container scales 1.0 → 1.01 over 240ms; hairline border holds.
- **Link underline**: coral underline scaleX 0 → 1 from `transform-origin: left` over 200ms standard.
- **Hero character**: embedded Rive runtime loops a 6–8s animation indefinitely; pauses on `prefers-reduced-motion: reduce`. On hover, character may transition to "interactive" state machine (e.g. waves at the cursor).
- **Weight-shift display**: type animates `font-variation-settings: "wght" 400` → `"wght" 800` over 800ms with bounce easing on first paint or scroll-into-view.
- **Scroll-character-park**: animated character translateX into the right viewport edge over 600ms emphasized when scroll-into-view fires; character waves when scroll velocity < threshold.
- **Section reveal**: large feature blocks fade-in + translateY(16px → 0) over 400ms emphasized when entering the viewport.
- **Modal enter**: scrim fades in over 200ms; dialog translates `translateY(8px) opacity(0)` → `0 / 1` over 240ms emphasized.

### Page Transitions

Page-to-page navigation uses **no transition** — links fire a hard navigation. Rive prioritises perceived speed and doesn't impose a transition on top of the user's expectation that links work. The animations live within pages, not between them.

### Reduced Motion

Respects `prefers-reduced-motion: reduce` aggressively because Rive *is* a motion company — getting this right is brand-coherence. All Rive runtimes pause on first frame (the static "neutral" pose). Weight-shift becomes instant. Card hover scale suppresses. Link underline fades in over 100ms instead of growing from left. Hero character holds at first frame. The reduced-motion experience still reads as a Rive page — the cream canvas, near-black pills, chunky InterDisplay are all preserved — but the kinetic energy is fully muted.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #1d1d1b ink on #fdfcf8 canvas | 15.9 | AAA |
| #fdfcf8 cream on #1d1d1b dark bg | 15.9 | AAA |
| #fdfcf8 on #1d1d1b CTA | 14.2 | AAA |
| #ff5b37 coral on #fdfcf8 (when used statically) | 4.6 | AA at body sizes |
| #cc3f23 deep coral on #fdfcf8 | 5.8 | AA+ |
| #cc3f23 deep coral on #ffe0d6 coral-soft | 7.0 | AAA |
| 60% ink on #fdfcf8 cream | 8.1 | AAA |
| #fdfcf899 60% cream on #1d1d1b dark | 9.5 | AAA |

The static palette is overwhelmingly AAA. The one borderline is brand coral at body sizes — and Rive solves this by reserving coral for animation contexts (where the runtime drives the contrast through motion) and using deep-coral (`#cc3f23`) anywhere the colour appears statically as text.

### Focus Indicators

Focus ring is **2px solid `#ff5b37`** (coral) with 2px outline-offset. Buttons, inputs, links, and interactive Rive runtimes all gain the brand-coral ring on `:focus-visible`. The coral ring on cream backdrop has 4.6 contrast — sufficient for visible focus indication. On dark bands, the focus ring switches to the lifted coral (`#ff7a5c`) for contrast.

### ARIA Patterns

- **Embedded Rive runtime**: each scene exposes `role="img"` with descriptive `aria-label` ("Animated character waving hello"). Scenes that have interactive state machines additionally expose `aria-pressed` or `aria-expanded`.
- **Hero character**: `aria-label="Interactive Rive character — wave on hover"` for screen readers.
- **CTA with arrow**: `aria-label` includes the destination ("Get started — opens sign-up flow").
- **Demo cards**: wrapped in `<a>` with `aria-label` describing the example ("Open Bouncing Ball example — interactive Rive demo of state machines").
- **Mobile drawer**: `role="dialog"` with `aria-modal="true"`, focus trap, Escape to close.
- **Code samples**: `<pre>` with `role="region"` and `aria-label="Code sample — runtime initialization"`.

### Keyboard Navigation

- Tab moves: skip-link → logo → primary nav (5 items) → CTA → main content → demo cards (each card is a single tab stop with internal `aria-describedby`) → footer
- Demo cards: Enter activates the demo's primary interaction (e.g. plays the animation, opens the example)
- Arrow keys inside the example carousel cycle through examples
- Escape closes the mobile drawer or any modal
- All interactive Rive runtimes are keyboard-activatable via Enter/Space

### Screen Reader Hints

Verbose `aria-label` on every embedded Rive scene. Animated characters that don't carry semantic meaning use `aria-hidden="true"` to avoid screen-reader noise. The hero character is announced as "Animated illustration — decorative" if it doesn't have an interactive state machine.

### Reduced Motion

All Rive runtimes pause on first frame (static neutral pose). Weight-shift, card scale, scroll-character-park, link underline grow — all degrade to opacity-only or instant. The reduced-motion experience preserves the brand's typographic identity (cream canvas, chunky InterDisplay, near-black pills) while removing kinetic energy. This is mission-critical: a motion-company brand that ignores `prefers-reduced-motion` would read as tone-deaf.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Hero collapses to vertical stack; display drops to 64/800; nav becomes full-screen drawer; demo cards stack 1-up |
| Tablet | 640–1024px | Hero stays vertical but display lifts to 88/800; demo cards 2-up |
| Desktop | 1024–1280px | Full 50/50 hero with character right; demo cards 2- or 3-up |
| Wide | 1280–1536px | Content caps at 1280px; demo cards 3-up |

### Touch Targets

- Primary CTAs: 48px height — meets AAA
- Secondary buttons: 48px
- Nav links: 44px tap area (with extra padding around the visible 28px text)
- Demo cards: entire 320×400 tile is tappable
- Embedded Rive scenes are pointer-event aware — touch events drive state machines

### Collapsing Strategy

- **Hero**: 50/50 split → vertical stack at <1024px; character moves below display type at <1024px
- **Display scale**: 140 → 96 → 64 across desktop → tablet → mobile
- **Feature grids**: 3-up → 2-up → 1-up at desktop → tablet → mobile
- **Top-bar nav**: hides primary nav and shows hamburger at <640px
- **Mobile drawer**: full-screen takeover with stacked nav, animated character peeking from bottom-right

### Image Behavior

Embedded Rive runtimes use `aspect-ratio` containers and scale to fit. SVG illustrations (where used outside Rive scenes) maintain native aspect ratio. The runtime resamples gracefully to retina displays without bitmap blur.

### Container Queries

Used inside demo cards: when the card narrows below ~280px, the card metadata (title, description) shifts beneath the embedded scene instead of beside it.

## 11. Content & Voice

### Tone

Playful, technical, confident. Rive's voice is "the design-tool team that ships an actual runtime" — warm and creative-coded but with the technical credibility of a runtime engineer. Headlines lean toward direct outcome statements ("Build interactive graphics", "Ship animations to any platform") rather than abstract aspiration. The brand consistently positions Rive as **the bridge between design tools and code** — Figma made the static, Rive makes the moving.

### Microcopy Patterns

- **Button verbs**: "Get Started", "Try Rive Free", "Start Building", "Watch Demo", "View Docs", "Open in Editor" — direct and outcome-named
- **Error message recipe**: short + technical — "Couldn't load this scene. Check your network and try again."
- **Success confirmations**: brief — "Saved", "Published to runtime", "Exported"
- **Field labels**: minimal — "Email", "Password", "Project name"
- **Empty states**: instructive — "No examples yet — create your first scene to see it here"

### Empty States

Empty workspace: "Start with a template or open a blank canvas." — names two destinations.

Empty examples: "No examples yet. Browse the community gallery for inspiration or watch the getting-started tour." — names two next steps.

Empty search: "We didn't find anything matching '[query]'. Try different keywords or browse by category." — explains + offers alternative.

### CTA Verb Conventions

- Primary: **"Get Started"** (default, used on hero), **"Try Rive Free"** (pricing-adjacent), **"Start Building"** (developer-focused), **"Open in Editor"** (existing-user)
- Secondary: **"Watch Demo"**, **"View Docs"**, **"See Examples"**, **"Learn More"**
- Tertiary text: **"Explore"**, **"Browse"**, **"Discover"** — used inline with a coral underline-grow on hover

The brand intentionally avoids "Sign Up" (too transactional) and "Buy Now" (too commerce). Even the pricing CTA reads "Try Rive Free" rather than "Subscribe" — emphasising trial over purchase commitment.

## 12. Dark Mode & Theming

Rive does **not** offer a full site-wide dark mode toggle, but the marketing surface includes inverted dark bands (`#1d1d1b` ground, cream `#fdfcf8` type) interspersed with the cream-default sections. These inverted bands typically house developer-focused content (pricing tables, API features, deployment specs) and create visual punctuation across the page.

### Inverted Band Token Swap

When a section flips to the dark band, the tokens swap as follows:

- **bg**: `#fdfcf8` → `#1d1d1b`
- **text**: `#1d1d1b` → `#fdfcf8`
- **text-muted**: `#1d1d1b99` → `#fdfcf899`
- **brand**: `#ff5b37` → `#ff7a5c` (slightly lifted for dark contrast)
- **cta-bg**: `#1d1d1b` → `#fdfcf8` (CTA inverts to cream pill)
- **cta-text**: `#fdfcf8` → `#1d1d1b` (CTA text inverts to ink)
- **border**: 10% near-black → 12% cream
- **on-brand**: `#ffffff` → `#1d1d1b`

The Rive editor application itself ships a full dark mode (default for the working surface). The marketing site's inverted bands signal the editor's dark surface in the marketing context without requiring a global theme swap.

## 13. Lineage & Influences

Rive's marketing surface is the rare landing page where motion is the primary type-setting tool. The brand position is technically distinctive: rather than describe an interactive graphics runtime through marketing copy and screenshots, the homepage simply *is* the demonstration. Almost every visual asset is an embedded Rive file. This stance — "the page is the demo" — descends most directly from the After Effects-era brand systems where motion was content, not chrome. Rive updates that lineage with web-native runtimes that respond to user input.

The chromatic identity — warm off-white canvas, near-black ink, four-colour saturated accents reserved for animations — pulls from **Tldraw / Excalidraw** (permission to be playful in a developer-tools landing page) and **Linear** (quiet container chrome and tonal restraint outside the animated lockups). The hybrid makes Rive distinctive: more disciplined than Tldraw's everything-is-cartoon approach, more playful than Linear's premium-grey restraint. Where competitors tend to pick a side — either polished-developer (Linear, Vercel) or fully-cartoon (Tldraw, Excalidraw) — Rive sits in the productive middle.

Typographically, the chunky InterDisplay 800 at 140px with `-0.04em` tracking nods to the **Figma-era** of generous display scale; the trick is that Rive headlines actually animate weight in place, which lets the static record overlap with the live experience. The fact that the same Inter family covers 400 → 900 makes this animation possible without a typeface swap. The animation-aware approach to type-setting is something Rive shares with **Lottie / LottieFiles** — but Rive's runtime is web-native and interactive, where Lottie is fundamentally a playback format.

**Influences:**

- **Tldraw / Excalidraw** — permission to be playful in a developer-tools landing page; chunky display type and saturated accent palette as evidence of "we make creative tools, not enterprise software"
  https://tldraw.com
- **Linear** — quiet container chrome and tonal restraint outside the animated lockups; the discipline that prevents Rive from reading as cartoon-design
  https://linear.app
- **Lottie / LottieFiles** — animation-aware brand vocabulary; the cultural permission to put motion at the centre of a marketing surface
  https://lottiefiles.com
- **After Effects-era brand systems** — the entire layout assumes motion is content, a stance borrowed from motion-graphics tradition
- **Figma** — generous display scale and editorial layout tradition for design-tool marketing
  https://figma.com

What Rive **rejects**: clean-tech grey palettes, drop-shadow elevation systems, static screenshots as the dominant marketing asset, and generic Inter at 700 / 16 body / 60px hero scale (the SaaS default). The rejection is brand-functional: it earns Rive the right to be playful without reading as unserious.

## 14. Do's and Don'ts

### Do

- **Do** make motion a primary asset. Static screenshots and renders should be the exception, not the rule. The point of the brand is interactivity.
- **Do** use the warm off-white canvas (`#fdfcf8`) rather than pure white. It grounds the saturated animated accents and reads as paper, not screen.
- **Do** hold static type to a quiet pairing: near-black on cream. The colour energy belongs *inside* the Rive files.
- **Do** reserve the saturated accents (coral, mustard, electric blue, pink) for animated assets and brand mark only. Static UI should stay in the warm-neutral palette.
- **Do** use InterDisplay (not standard Inter) at sizes ≥32px. The optical-display variant is calibrated for that scale.
- **Do** ship the full weight axis (400 → 900). Display headlines that animate weight in place need every weight to render smoothly.
- **Do** include `prefers-reduced-motion: reduce` from the start. A motion-company brand that ignores this reads as tone-deaf.
- **Do** keep cards quiet — hairline borders (10% near-black) instead of drop shadows. Depth is animated, not static.

### Don't

- **Don't** apply the coral or mustard accents to static buttons. Those hues live inside animations only — the brand discipline is total.
- **Don't** crowd the hero with multiple animated assets. One oversized character per viewport is the discipline. The page should breathe.
- **Don't** drop the chunky 800-weight display in favour of a standard 600. The weight is what carries the playful confidence.
- **Don't** swap to pure white canvas. The cream is non-negotiable — it's what makes the saturated animation accents read as warm rather than neon.
- **Don't** add multi-layer atmospheric drop shadows. The brand's elevation system is hairline-and-flat plus runtime-rendered contact shadows under live characters.
- **Don't** introduce a new accent colour outside the four-hue palette. Coral / mustard / electric blue / pink-coral plus mint = the entire animation accent system.
- **Don't** use CSS `box-shadow` to fake character contact shadows. The runtime renders those — let the runtime do its job.
- **Don't** weight-shift more than 2–3 headlines per page. The device is signature precisely because it's used sparingly.

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas: #fdfcf8
Canvas Deeper: #f5f3ec
Ink: #1d1d1b
Ink Max: #000000
Coral (animation/brand): #ff5b37
Coral Deep: #cc3f23
Mustard (animation only): #fcc24c
Electric Blue (animation only): #3a7bff
Pink-Coral (animation only): #ff6da6
Mint (animation only): #4cc38a
CTA bg: #1d1d1b
CTA text: #fdfcf8
Border: rgba(29, 29, 27, 0.10)
```

### Example Component Prompts

1. **"Create a Rive-style hero with a 140px InterDisplay 800 headline that weight-animates from 400 to 800 over 800ms with bounce easing on first paint. Background is `#fdfcf8` cream. Right column holds a placeholder for an embedded animated character (50% width). Left column has the headline and a near-black pill CTA `Get Started` (`#1d1d1b` bg, `#fdfcf8` text, 9999px radius, 14×28px padding, 48px height). Layout collapses to vertical stack at <1024px."**

2. **"Design a Rive demo card: pure white surface (`#ffffff`), 20px radius, 1px hairline border at 10% near-black. 32px padding. Title in InterDisplay 24/600/`-0.01em` ink. Description in Inter 15/400 at 60% ink. Embedded scene placeholder takes the top 60% of the card with a 16px radius. On hover, the card scales 1.0 → 1.01 over 240ms standard easing."**

3. **"Build a Rive feature row eyebrow + headline pair: eyebrow in JetBrains Mono 12/500/uppercase/0.06em ink, headline in InterDisplay 48/700/`-0.025em` ink. 24px gap between them. Below: 19/400 Inter body in 60% ink, max-width 720px. Background is cream `#fdfcf8`. Section padding 96px vertical."**

4. **"Create a Rive nav-link with coral underline-grow on hover: 15/500 Inter ink. Underline is 1.5px coral (`#ff5b37`), positioned at the baseline +4px, scaleX 0 with `transform-origin: left`. On `:hover`, scaleX animates to 1 over 200ms standard easing. Active state holds scaleX(1)."**

5. **"Design a Rive inverted dark-band section: full-bleed `#1d1d1b` background, `#fdfcf8` cream type. Headline in InterDisplay 72/700/`-0.03em` cream. Body in Inter 17/400 at 60% cream opacity. Pill CTA inverts to cream fill (`#fdfcf8`) with ink (`#1d1d1b`) text. Section padding 128px vertical."**

6. **"Style a Rive form: text-input is white surface, 1px 20% near-black border, 12px radius, 48px height, 12×16px padding. Label above in Inter 14/500 ink. On focus, border becomes 2px coral (`#ff5b37`). Below the input, a near-black pill submit button (`#1d1d1b` bg, `#fdfcf8` text, 9999px) with arrow icon that slides 4px right on hover."**

### Iteration Guide

1. **Start cream, not white.** If the canvas reads as "tech-clean" rather than "warm-paper," shift the bg from `#ffffff` to `#fdfcf8`. The warmth is what makes the saturated animation accents read as playful rather than neon.

2. **If it doesn't move, it's not Rive.** A static page that uses cream canvas + chunky InterDisplay + near-black pills is generic — what makes it Rive is the embedded animation. Add at least one animated element (weight-shift display, hover-active card, scroll-parking character) before considering the design "done."

3. **Pull saturated accents back into animations.** If coral, mustard, or electric blue is appearing as a static button fill, move it inside an animation context. The discipline is what makes the brand legible.

4. **Push display weight to 800 with `-0.04em` tracking.** If the display reads as "modern sans" rather than "Rive chunky," check that you're using InterDisplay (not standard Inter) at weight 800 (not 700) with `-0.04em` (not `-0.02em`) tracking. Those three settings are the typographic signature.

5. **Hairline borders, not drop shadows.** If cards are reading as "polished SaaS" rather than "alive Rive page," replace drop shadows with 10% near-black 1px borders. The brand position is hairline-and-flat plus runtime-rendered motion shadows.

6. **Keep CTAs near-black, not coral.** Primary CTAs are always `#1d1d1b` pills. If you've made the CTA coral, revert. Coral lives inside animations and the brand mark.

7. **Use the full weight axis.** Inter Display ships 100 → 900. If you're only using 400 / 700 / 800, you're missing the family's range — ship the full axis even if you don't animate weight, because the visual character of the typeface comes from its weight ladder.

8. **Honor `prefers-reduced-motion: reduce`.** This isn't optional for a motion-company brand. All Rive runtimes pause on first frame, weight-shifts become instant, hover scales suppress. The reduced-motion page should still read as Rive — cream canvas, chunky display, near-black pills — just with the kinetic layer muted.
