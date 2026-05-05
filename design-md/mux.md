---
name: Mux
tagline: Video API for developers — Aeonik on light-cream, Rotonto display, JetBrainsMono CTAs, sharp 0px corners.
author: webdesignhot
source_url: https://www.mux.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [light, sans, mono, developer, infra, editorial]
preview_swatch: ['#e2e4dd', '#000000', '#ff5d00']
related: [stripe, vercel, cloudflare]
description: 'Mux''s site reads as a developer-tools editorial — closer to a typographic magazine than a typical SaaS marketing surface. The base canvas is **`#e2e4dd` warm light-cream** (a distinctive desaturated sage-green that distinguishes Mux from the white-canvas SaaS default), carrying display headlines in pure black `#000000` **Rotonto** — a humanist-display typeface with quirky letterforms that signals "design-aware tech company" rather than "enterprise SaaS." Body copy runs **Aeonik** (a geometric sans), and CTA labels render in **JetBrainsMono** — a developer-typographic stamp that ties the brand to the engineer audience. Sharp 0px corners on every CTA, card, and content block reinforce the typographic-precision identity. Section rhythm alternates light-cream editorial bands with rare dark zones for code-content. The signature **Mux orange `#ff5d00`** voltage appears on the wordmark, accent moments, and selected interactive states — used scarcely, the way a financial-broadsheet uses a single accent across an issue.'

colors:
  bg: '#e2e4dd'                  # warm light-cream canvas — the brand''s most distinctive color choice
  bg-paper: '#ffffff'            # pure white — used for inset cards on cream
  bg-dark: '#000000'             # rare dark band — code content, certain hero variants
  bg-dark-soft: '#1a1a1a'        # near-black for code blocks
  surface: '#d4d6cf'             # cream-elevated — card surface on cream
  surface-soft: '#ecebe7'        # softer cream variant
  surface-strong: '#c8caBF'      # heavier cream panel
  surface-on-dark: '#1a1a1a'     # card surface on dark
  text: '#000000'                # ink — primary text on cream
  text-strong: '#000000'         # body-strong (same hex)
  text-body: '#1a1a1a'           # default running body copy
  text-muted: '#5a5a5a'          # captions, metadata
  text-faint: '#8a8a8a'          # disabled, footer secondary
  text-on-dark: '#e2e4dd'        # cream text on dark bands (matches bg color)
  brand: '#ff5d00'               # Mux orange — wordmark, accent moments, selected states
  brand-hover: '#e54e00'         # press state
  brand-active: '#c54100'        # deeper press
  brand-soft: '#ffe5d4'          # softest tint — selected nav, badge bg
  on-brand: '#000000'            # black on orange for sufficient contrast
  accent-blue: '#0066ff'         # rare blue accent — info badges
  accent-green: '#00b364'        # rare green accent — success states
  border: '#000000'              # 1px hairline on cream — solid black
  border-soft: '#a0a29a'         # softer divider on cream
  border-on-dark: '#2a2a2a'      # 1px hairline on dark
  link: '#000000'                # links inherit ink, get underline
  link-hover: '#ff5d00'          # orange shift on hover
  ring: '#ff5d00'                # focus ring
  success: '#00b364'             # confirmation
  warning: '#ff8c00'             # validation warnings
  danger: '#e6483d'              # form errors
  info: '#0066ff'                # info badges

typography:
  display:
    family: 'Rotonto, "Rotonto Fallback", Helvetica, sans-serif'
    weights: [400, 500]
    opentype-features: []
  body:
    family: 'Aeonik, "Aeonik Fallback", Helvetica, sans-serif'
    weights: [400, 500, 700]
    opentype-features: []
  mono:
    family: 'JetBrainsMono, "JetBrainsMono Fallback", monaco, monospace'
    weights: [400, 500, 700]
    opentype-features: ['ss01', 'ss02']
  scale:
    display-mega:    { size: 96, weight: 400, lineHeight: 1.00, tracking: '-1.92px', family: display, notes: 'Homepage hero h1 — "Video for developers"' }
    display-xl:      { size: 66, weight: 400, lineHeight: 1.05, tracking: '-1.32px', family: display, notes: 'Subsidiary heroes' }
    display-lg:      { size: 48, weight: 400, lineHeight: 1.10, tracking: '-0.96px', family: display, notes: 'Section heads' }
    display-md:      { size: 36, weight: 400, lineHeight: 1.15, tracking: '-0.36px', family: display, notes: 'Sub-section heads, card titles' }
    display-sm:      { size: 24, weight: 500, lineHeight: 1.25, tracking: 'normal',  family: display, notes: 'Component titles' }
    title-md:        { size: 18, weight: 500, lineHeight: 1.35, tracking: 'normal',  family: body,    notes: 'Card titles, list section labels' }
    title-sm:        { size: 16, weight: 500, lineHeight: 1.45, tracking: 'normal',  family: body,    notes: 'Small section titles' }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: 'normal',  family: body,    notes: 'Editorial body, intro paragraphs' }
    body:            { size: 16, weight: 400, lineHeight: 1.55, tracking: 'normal',  family: body,    notes: 'Default running text' }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.50, tracking: 'normal',  family: body,    notes: 'Footer body, fine print' }
    caption:         { size: 12, weight: 400, lineHeight: 1.45, tracking: 'normal',  family: body,    notes: 'Photo captions, metadata' }
    eyebrow:         { size: 12, weight: 500, lineHeight: 1.40, tracking: '0.6px',   family: mono,    notes: 'Section eyebrows in JetBrainsMono — uppercase, code-stamp feel' }
    button:          { size: 14, weight: 500, lineHeight: 1.00, tracking: 'normal',  family: mono,    notes: 'CTA labels in JetBrainsMono — developer-typographic stamp' }
    nav-link:        { size: 14, weight: 500, lineHeight: 1.40, tracking: 'normal',  family: body,    notes: 'Top-nav menu items' }
    code-display:    { size: 14, weight: 400, lineHeight: 1.60, tracking: 'normal',  family: mono,    notes: 'Code blocks, syntax samples' }
    code-inline:     { size: 14, weight: 400, lineHeight: 1.50, tracking: 'normal',  family: mono,    notes: 'Inline code spans' }
    code-micro:      { size: 12, weight: 400, lineHeight: 1.40, tracking: 'normal',  family: mono,    notes: 'Tiny code annotations' }

radius:
  none: 0           # dominant — every CTA, card, band, hero
  xs: 2             # tight chips (rare)
  sm: 4             # text inputs only
  md: 6             # compact UI (rare)
  lg: 8             # mobile-only collapse (rare)
  pill: 9999        # avatar plates only (very rare)

spacing:
  base: 4
  scale: [4, 8, 16, 24, 32, 48, 64, 96, 128]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64
  hero-height: '100vh on homepage'
  section-padding: 96
  card-grid-gutter: 24

components:
  top-nav:
    bg: '#e2e4dd'
    text: '#000000'
    typography: 'Aeonik 14/500'
    height: 64
    layout: 'Mux wordmark left + horizontal menu (Products / Solutions / Docs / Pricing / Resources) center + utilities (sign-in, get-started) right'
    border-bottom: '1px solid #000000'
    sticky: true
  mux-wordmark:
    height: 24
    placement: 'top-left of nav, in #000000 — orange period after "mux." as accent'
    notes: 'Lowercase "mux." with a Mux Orange period at the end — non-negotiable nav element'
  button-primary:
    bg: '#000000'
    text: '#e2e4dd'
    padding: '12px 24px'
    height: 44
    radius: 0
    border: 'none'
    font: 'JetBrainsMono 14/500 sentence-case'
    transition: 'background-color 200ms ease'
    use: 'Get started, Talk to us, Sign up'
  button-primary-hover:
    bg: '#1a1a1a'
    notes: 'Color-only hover'
  button-secondary:
    bg: 'transparent'
    text: '#000000'
    border: '1px solid #000000'
    padding: '11px 23px'
    height: 44
    radius: 0
    font: 'JetBrainsMono 14/500'
    use: 'Secondary action paired with primary'
  button-tertiary:
    bg: 'transparent'
    text: '#000000'
    font: 'JetBrainsMono 14/500'
    decoration: 'underline always-on; arrow → indicator on hover'
    use: 'Inline editorial actions (Read more, Try another video)'
  button-on-dark:
    bg: '#e2e4dd'
    text: '#000000'
    use: 'Primary CTA on dark hero band'
  hero-band-light:
    bg: '#e2e4dd'
    text: '#000000'
    headline: 'Rotonto 96/400 -1.92px'
    cta-arrangement: 'one black primary + one outline secondary'
    padding: '128px 48px'
  hero-band-dark:
    bg: '#000000'
    text: '#e2e4dd'
    headline: 'Rotonto 66/400 -1.32px'
    notes: 'Used for code-content heroes, certain product launches'
    padding: 96
  feature-card:
    bg: '#ffffff'
    text: '#000000'
    radius: 0
    border: '1px solid #000000'
    padding: 32
    notes: 'Inset white card on cream canvas — typographic editorial card'
  feature-card-cream:
    bg: '#d4d6cf'
    text: '#000000'
    radius: 0
    border: '1px solid #000000'
    padding: 32
  code-card:
    bg: '#000000'
    text: '#e2e4dd'
    radius: 0
    padding: 32
    font: 'JetBrainsMono 14/400'
    syntax-highlight: 'Mux orange `#ff5d00` for keywords, cream `#e2e4dd` for strings, muted for comments'
  text-input:
    bg: 'transparent'
    text: '#000000'
    border: '1px solid #000000'
    radius: 4
    padding: '12px 16px'
    height: 44
    font: 'Aeonik 16/400'
    focus: 'border-color shifts to #ff5d00; ring 2px solid #ff5d00 at 2px offset'
  badge:
    bg: 'transparent'
    text: '#000000'
    border: '1px solid #000000'
    radius: 0
    padding: '4px 8px'
    font: 'JetBrainsMono 12/500 0.6px uppercase'
  badge-orange:
    bg: '#ff5d00'
    text: '#000000'
    radius: 0
    padding: '4px 8px'
    font: 'JetBrainsMono 12/500 0.6px uppercase'
    notes: 'Orange-fill badge for emphasis'
  spec-cell:
    bg: 'transparent'
    text: '#000000'
    typography: 'Rotonto 64/400 -0.64px'
    label: 'eyebrow 12/500 0.6px uppercase JetBrainsMono'
    padding: '24px 0'
  cta-band:
    bg: '#000000'
    text: '#e2e4dd'
    typography: 'Rotonto 48/400 -0.96px'
    padding: 96
    cta: 'one cream primary on dark, centered'
  footer-light:
    bg: '#e2e4dd'
    text: '#5a5a5a'
    columns: 5
    padding: '64px 48px'
    border-top: '1px solid #000000'
  footer-link:
    text: '#000000'
    font: 'Aeonik 14/400'
    decoration: 'underline-offset 2px on hover'

lineage:
  summary: 'Mux''s digital surface is the closest a developer-tools company comes to a typographic magazine. The discipline is quirky-editorial filtered through a developer-aware sensibility: warm light-cream canvas (a distinctive choice in a sea of white-canvas SaaS), Rotonto display (humanist-display with quirky letterforms), Aeonik body (geometric clarity), JetBrainsMono CTAs (developer-typographic stamp), sharp 0px corners (typographic-precision discipline). The Mux orange `#ff5d00` voltage is used scarcely — the wordmark period, accent moments, syntax-highlight keywords. The cream-on-cream-on-cream surface variation (canvas → cream-elevated → cream-soft) creates depth without leaving the warm-tone family. What it rejects: white SaaS canvas, Inter-everywhere typography, pill CTAs, drop-shadow elevation, marketing-jargon, anything that competes with the typographic editorial atmosphere.'
  influences:
    - name: 'Stripe'
      role: 'Single-color brand voltage discipline (orange vs purple), developer-tools editorial pacing'
      url: 'https://stripe.com'
    - name: 'Linear'
      role: 'Typographic-precision sharp corners, developer-tools editorial confidence'
      url: 'https://linear.app'
    - name: 'It''s Nice That / The Type Directors Club'
      role: 'Editorial-typographic magazine influences, humanist-display approach'
      url: 'https://www.itsnicethat.com'
    - name: 'Werner Design Werks / Pentagram'
      role: 'Editorial design tradition, warm-tone canvas as differentiator'
      url: 'https://www.pentagram.com'
    - name: 'JetBrains'
      role: 'JetBrainsMono typeface — direct typographic alliance with the developer-tooling lineage'
      url: 'https://www.jetbrains.com/lp/mono/'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 150
  duration-standard: 200
  duration-slow: 300
  hero-text-reveal: 'staggered word-fade-in over 600ms on hero headline first paint'
  card-hover-shift: 'border-color shift to #ff5d00 over 200ms on hover'
  reduced-motion: 'respects prefers-reduced-motion: reduce — text-reveal becomes single fade, all transitions to opacity-only'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  flat: 'none'
  ring: '0 0 0 2px #ff5d00'
  notes: 'Mux refuses drop-shadow tiers — depth comes entirely from cream-tone variation, hairline borders, and dark-on-cream contrast. The single shadow is the focus ring.'

accessibility:
  contrast-text-on-bg: 16.2              # #000000 on #e2e4dd — AAA
  contrast-body-on-bg: 13.8              # #1a1a1a on #e2e4dd — AAA
  contrast-text-on-brand: 7.2            # #000000 on #ff5d00 — AAA
  contrast-text-on-dark: 16.0            # #e2e4dd on #000000 — AAA
  focus-ring: '2px solid #ff5d00 at 2px offset'
  reduced-motion-honored: true
  touch-target-min: 44                  # CTA height — meets WCAG 44

dark-mode: 'no global dark toggle — Mux is light-cream-by-default. Dark sections are scoped contextual surfaces (code blocks, code-content hero variants, certain CTA bands). Token swap is local: bg #e2e4dd → #000000, text #000000 → #e2e4dd, border #000000 → #e2e4dd. brand stays #ff5d00 unchanged.'
---

## 1. Visual Theme & Atmosphere

Mux's website is what happens when a developer-tools company hires a typographer instead of a brand agency. The page opens onto a warm light-cream canvas (`#e2e4dd` — a desaturated sage-green that distinguishes Mux from the white-canvas SaaS default within the first second of visual contact). The headline "Video for developers" appears at 96px in **Rotonto** at weight 400 — a humanist-display typeface with quirky terminals, generous bowls, and an editorial-typographic confidence that signals "design-aware tech company" rather than "enterprise SaaS." The negative tracking (`-1.92px` at 96px) compresses the text into magazine-cover geometry.

The chromatic discipline is committed-monochrome with a single orange voltage. Pure black `#000000` for ink, warm cream `#e2e4dd` for canvas, and **Mux orange `#ff5d00`** appearing scarcely — the wordmark period (`mux.`), syntax-highlight keywords inside code samples, accent moments on selected interactive states. The orange is so committed when it appears that you remember it; it is so withheld between appearances that you anticipate it.

Typography stacks three families with different roles. **Rotonto** carries display sizes — humanist-display, weight 400, never bold, generous negative tracking on display sizes. **Aeonik** carries body — geometric sans, weight 400 default, weight 500 for emphasis, weight 700 for strong-display body in marketing copy. **JetBrainsMono** carries CTAs, eyebrows, code, and stylistic-stamp moments — the developer-typographic alliance with the JetBrains tooling lineage. Using JetBrainsMono for CTA labels is the brand's signature move: the engineer audience reads the buttons in their daily editor's font.

Sharp 0px corners on every CTA, card, band, and hero. Mux refuses softened radius. The typographic-precision identity demands hard rectangles — closer to letterpress slab than to consumer-tech rounded buttons. Text inputs are 4px (functional), pills appear only on rare avatar plates. The dominant geometry is the rectangle.

Section rhythm alternates light-cream editorial bands with rare dark zones used for code-content (live syntax-highlighted code samples in JetBrainsMono on `#000000` ground) and certain product-launch heroes. Mux refuses drop-shadow tiers — depth comes entirely from cream-tone variation (canvas `#e2e4dd` → surface `#d4d6cf` → soft `#ecebe7`), hairline 1px solid black borders, and the dark-cream contrast of code-content bands.

**Key Characteristics:**
- Warm light-cream `#e2e4dd` canvas — the brand's most distinctive choice in a SaaS landscape of white canvases
- Single chromatic voltage: Mux orange `#ff5d00` — used scarcely (wordmark period, syntax keywords, selected states)
- Three-family typography: Rotonto (display) + Aeonik (body) + JetBrainsMono (CTAs/code)
- JetBrainsMono on CTAs — developer-typographic stamp, brand signature
- Sharp 0px corners on every CTA, card, band — typographic-precision identity
- Negative letter-spacing on display (-1.92px at 96px) — magazine-cover compression
- 1px solid black hairlines as border default — no soft greys
- No drop-shadow tiers — depth via cream-tone variation + hairlines + contrast
- Three-tier cream surface ladder (canvas → cream-elevated → cream-soft)
- Dark `#000000` zones used scarcely for code-content and certain heroes

## 2. Color Palette & Roles

### Primary
- **Cream Canvas** (`#e2e4dd`): The page floor. Warm light-cream — the brand's most distinctive color choice. Distinguishes Mux from the white-canvas SaaS default.
- **Pure Black** (`#000000`): Primary ink. Display headlines, body strong, hairline borders, button-primary fill. Mux uses pure black where competitors use charcoal.
- **Mux Orange** (`#ff5d00`): The single high-voltage chromatic moment. Wordmark period, syntax-highlight keywords, accent moments, focus ring.

### Brand & Dark
- **Orange Hover** (`#e54e00`): Press state.
- **Orange Active** (`#c54100`): Deep press feedback.
- **Orange Soft** (`#ffe5d4`): Selected-state background, badge tint.
- **Cinema Black** (`#000000`): Same hex as ink — used for code-content bands, dark hero variants, button-primary fill.
- **Dark Soft** (`#1a1a1a`): Code blocks; one tier above pure black.

### Accent
- **Accent Blue** (`#0066ff`): Rare info-badge accent. Used scarcely.
- **Accent Green** (`#00b364`): Rare success accent. Used scarcely.
- No other saturated colors. Mux deliberately refuses chromatic variety.

### Interactive
- **Link** (`#000000`): Inline links inherit ink + underline.
- **Link Hover** (`#ff5d00`): Orange shift on hover for inline links.
- **Button Primary** (`#000000`): Primary CTA fill — pure black on cream.
- **Button Hover** (`#1a1a1a`): Subtle press state.
- **Disabled** (`#8a8a8a`): Faint — disabled CTAs and form fields.

### Neutral Scale
- **Ink** `#000000` — display, headlines, button-primary fill, hairline borders
- **Body** `#1a1a1a` — running paragraph text on cream canvas
- **Muted** `#5a5a5a` — captions, photo metadata
- **Faint** `#8a8a8a` — disabled, footer secondary, form placeholder
- **Border Soft** `#a0a29a` — softer divider on cream (rare; default border is solid black)
- **Surface** `#d4d6cf` — cream-elevated, one tier above canvas
- **Surface Soft** `#ecebe7` — softer cream variant
- **Surface Strong** `#c8caBF` — heavier cream panel
- **Cream Canvas** `#e2e4dd` — page floor

### Surface & Borders
- **bg** is `#e2e4dd` warm light-cream — the canonical canvas.
- **bg-paper** `#ffffff` — used only for inset cards on cream (the card-on-cream contrast IS the elevation).
- **bg-dark** `#000000` for scoped code-content bands, certain heroes.
- **surface** `#d4d6cf` — one tier above canvas in the cream family.
- **border** is `#000000` 1px solid — Mux uses solid black hairlines as default, not soft greys. The hairline IS the typographic discipline.
- **border-on-dark** `#2a2a2a` 1px on dark.

### Shadow Colors
Mux uses **no drop-shadow tiers**. Depth comes from:
- **Cream-tone variation** (`#e2e4dd` → `#d4d6cf` → `#ecebe7` → `#c8caBF`)
- **Hairlines** (1px solid black on cream, 1px `#2a2a2a` on dark)
- **Card-on-cream contrast** (white inset cards `#ffffff` against the cream canvas)
- **Dark-on-cream contrast** (code-content bands `#000000` against the cream canvas)
- **Focus ring** is the only chrome shadow: `0 0 0 2px #ff5d00`.

### Semantic
- **Success** (`#00b364`): Confirmation states.
- **Warning** (`#ff8c00`): Validation warnings.
- **Danger** (`#e6483d`): Form errors.
- **Info** (`#0066ff`): Info badges, callouts.

## 3. Typography Rules

### Font Family
- **Display**: `Rotonto` — humanist-display typeface with quirky terminals, generous bowls, and editorial-typographic confidence. Weight 400 carries display; weight 500 carries title-md component-title sizes.
- **Body**: `Aeonik` — geometric sans, more conventional than Rotonto, engineered for paragraph reading. Weight 400 default, 500 emphasis, 700 strong-display body.
- **Mono / CTA / Stamp**: `JetBrainsMono` — the developer-typographic stamp. CTA labels, eyebrows, code blocks, technical stamps. OpenType `ss01` and `ss02` enabled for the alternate-glyph stylistic sets that give JetBrainsMono its developer-IDE character.
- **Fallback chains**: `"Rotonto Fallback", Helvetica` / `"Aeonik Fallback", Helvetica` / `"JetBrainsMono Fallback", monaco, monospace`.
- **No italics** — Mux brand voice is always upright.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| Display Mega | Rotonto | 96 | 400 | 1.00 | -1.92px | — | Homepage hero h1 — "Video for developers" |
| Display XL | Rotonto | 66 | 400 | 1.05 | -1.32px | — | Subsidiary heroes |
| Display Lg | Rotonto | 48 | 400 | 1.10 | -0.96px | — | Section heads |
| Display Md | Rotonto | 36 | 400 | 1.15 | -0.36px | — | Sub-section heads, card titles |
| Display Sm | Rotonto | 24 | 500 | 1.25 | normal | — | Component titles |
| Title Md | Aeonik | 18 | 500 | 1.35 | normal | — | Card titles, list section labels |
| Title Sm | Aeonik | 16 | 500 | 1.45 | normal | — | Small section titles |
| Body Lg | Aeonik | 18 | 400 | 1.55 | normal | — | Editorial body, intro paragraphs |
| Body | Aeonik | 16 | 400 | 1.55 | normal | — | Default running text |
| Body Sm | Aeonik | 14 | 400 | 1.50 | normal | — | Footer body, fine print |
| Caption | Aeonik | 12 | 400 | 1.45 | normal | — | Photo captions, metadata |
| Eyebrow | JetBrainsMono | 12 | 500 | 1.40 | 0.6px | ss01 | Section eyebrows — uppercase, code-stamp feel |
| Button | JetBrainsMono | 14 | 500 | 1.00 | normal | ss01 | CTA labels — developer-typographic stamp |
| Nav Link | Aeonik | 14 | 500 | 1.40 | normal | — | Top-nav menu items |
| Code Display | JetBrainsMono | 14 | 400 | 1.60 | normal | ss01,ss02 | Code blocks, syntax samples |
| Code Inline | JetBrainsMono | 14 | 400 | 1.50 | normal | ss01 | Inline code spans |
| Code Micro | JetBrainsMono | 12 | 400 | 1.40 | normal | ss01 | Tiny code annotations |

### Principles
- **Display weight stays at 400.** Rotonto carries enough humanist-display character at regular weight; bolding it would lose the editorial confidence.
- **Negative letter-spacing on display only.** -0.36px to -1.92px on display sizes; body stays at 0. Magazine-cover compression.
- **JetBrainsMono on CTAs is the brand signature.** Using a developer-IDE typeface for CTA labels is the typographic alliance with the engineer audience. The CTA literally renders in their daily editor's font.
- **Three-family discipline.** Rotonto + Aeonik + JetBrainsMono — display + body + stamp. No second sans, no serif accent, no decorative type beyond these three.
- **OpenType `ss01`/`ss02` on JetBrainsMono.** The alternate-glyph stylistic sets give JetBrainsMono its IDE character — distinctive `g`, `l`, `0` glyphs that are non-negotiable.
- **Sentence-case CTAs.** "Get started", "Talk to us", "Sign up". Never uppercase; the JetBrainsMono is already doing the typographic stamping work.
- **No italics.** Voice is always upright.
- **Rotonto and Aeonik are licensed.** Open-source substitutes: **Inter** at 400 for body (closest to Aeonik), **Editorial New** for display (closest to Rotonto humanist-display), **JetBrainsMono** itself (open-source).

## 4. Component Stylings

### Buttons

All buttons use **0px sharp corners** — the typographic-precision identity.

**Primary (Black on Cream)** — the singular high-voltage action:
- Background `#000000`, text `#e2e4dd` (cream — the canvas color), font `JetBrainsMono 14/500 sentence-case`
- Padding `12px 24px`, height `44px`, border-radius `0`, no border
- Transition `background-color 200ms ease`
- Hover: background `#1a1a1a` (subtle, color-only)
- Active: background drops further
- Use case: Get started, Talk to us, Sign up

**Secondary (Outline)** — alternative action paired with primary:
- Background transparent, text `#000000`, border `1px solid #000000`
- Padding `11px 23px` (1px less for border), height `44px`, radius `0`
- Same `JetBrainsMono 14/500 sentence-case` typography
- Hover: background fills to `rgba(0,0,0,0.06)` (subtle)
- Use case: secondary CTA paired with primary

**Tertiary (Text)** — inline editorial actions:
- Background transparent, text `#000000`, no border
- Same `JetBrainsMono 14/500`
- Decoration: `underline-offset: 2px` underline always-on; arrow → indicator slides in on hover
- Use case: "Read more", "Try another video", "View documentation"

**Primary on Dark** — primary CTA on dark hero band:
- Background `#e2e4dd` cream, text `#000000`
- Same dimensions and typography
- Use case: primary CTA on code-content hero / dark band

### Hero Bands

**Light Hero** — primary hero on most pages:
- Background `#e2e4dd` cream, text `#000000`
- Display headline in `Rotonto 96/400 -1.92px` pure black
- Eyebrow above in JetBrainsMono 12/500 0.6px uppercase (e.g. "VIDEO API")
- One black primary CTA + one outline secondary, side-by-side
- Padding `128px 48px`

**Dark Hero** — code-content hero variant:
- Background `#000000`, text `#e2e4dd` cream
- Headline in `Rotonto 66/400 -1.32px` cream
- Used for code-content product launches, dev-tooling pages
- Padding `96px`

### Cards

**Feature Card (White Inset)** — primary card on cream canvas:
- Background `#ffffff` pure white, text `#000000`, radius `0`, border `1px solid #000000`, padding `32px`
- Title in `display-md 36/400 -0.36px` Rotonto + body in Aeonik 16/400 + button-tertiary text below
- Hover: border-color shifts to `#ff5d00` over 200ms (color-only, no transform, no shadow)
- Use case: feature grid on homepage, product cards

**Feature Card (Cream Elevated)** — variant in cream-only sections:
- Background `#d4d6cf` cream-elevated, text `#000000`, radius `0`, border `1px solid #000000`, padding `32px`
- Same content geometry as white inset variant

**Code Card** — live syntax-highlighted code sample:
- Background `#000000`, text `#e2e4dd` cream, radius `0`, padding `32px`
- Font `JetBrainsMono 14/400 1.6 line-height`
- Syntax highlighting: Mux orange `#ff5d00` for keywords, cream `#e2e4dd` for strings, muted grey for comments
- Use case: API code samples, embed code demonstrations

### Spec Surfaces

**Spec Cell** — engineering-spec callout:
- Transparent background
- Value in `Rotonto 64/400 -0.64px` pure black
- Label below in `eyebrow JetBrainsMono 12/500 0.6px uppercase`
- Padding `24px 0`
- Use: API metrics, latency stats, throughput numbers

### Forms & Inputs

**Text Input**:
- Background transparent, text `#000000`, border `1px solid #000000`, radius `4px`
- Padding `12px 16px`, height `44px`
- Font `Aeonik 16/400`
- Focus: border-color shifts to `#ff5d00`; ring `2px solid #ff5d00` at 2px offset

### Tags & Badges

**Badge (Outline)** — typographic-stamp badge:
- Background transparent, text `#000000`, border `1px solid #000000`, radius `0`
- Padding `4px 8px`, font `JetBrainsMono 12/500 0.6px uppercase`
- Use: "BETA", "NEW", category tags

**Badge (Orange)** — emphasis badge:
- Background `#ff5d00`, text `#000000`, radius `0`
- Same dimensions and typography
- Use: high-emphasis callouts ("FEATURED")

### CTA Band

**CTA Band Dark** — pre-footer band:
- Background `#000000`, text `#e2e4dd`
- Centered display headline `Rotonto 48/400 -0.96px`
- Single cream CTA centered below
- Padding `96px` vertical

### Navigation

**Top Nav** — default nav on every page:
- Background `#e2e4dd` cream (matches canvas), text `#000000`, height `64px`, border-bottom `1px solid #000000`, sticky
- Layout: Mux wordmark top-left ("mux." with orange period at the end) + horizontal menu (Products / Solutions / Docs / Pricing / Resources) center + utilities (Sign in, Get started) right
- Menu items in `Aeonik 14/500`
- Hover: subtle underline grows beneath active item over 150ms

### Footer

**Footer Light** — closing footer on every page:
- Background `#e2e4dd` cream, text `#5a5a5a`, border-top `1px solid #000000`
- 5-column link list at desktop covering Product / Developers / Company / Resources / Legal
- Padding `64px 48px`
- Mux wordmark bottom-left below link columns

## 5. Layout Principles

### Spacing System
- **Base unit:** 4px.
- **Scale:** `4 / 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128`.
- **Section padding:** 96px for major bands; 128px for the homepage hero.
- **Card internal padding:** 32px for feature cards.
- **Gutters:** 24px between cards in 3-up grids; 32px in 2-up hero splits.

### Grid & Container
- Max content width: **1280px** on editorial bands.
- Editorial body: 12-column grid.
- Feature card grids: 2-up at desktop for hero splits, 3-up for benefit grids.
- Footer: 5-column at desktop.

### Whitespace Philosophy
Generous editorial-typographic pacing. The hero band runs at viewport-height (100vh) on the homepage. Body sections sit in tighter editorial layouts with 96px section padding — enough to let typography breathe, not so much that the page feels empty. The cream canvas reads warmer than white, allowing tighter content density without feeling cramped.

### Section Cadence
The homepage rhythm: light hero → editorial-band (cream) → feature-grid (white inset cards) → code-card hero (dark) → spec-band → CTA-band-dark → footer-light. Each section's role is signalled by its background color.

## 6. Shapes & Radius Scale

| Tier | Token | Value | Use |
|------|-------|-------|-----|
| None | `none` | 0 | Every CTA, card, band, hero — dominant radius |
| Tight | `xs` | 2 | Tight chips (rare) |
| Standard | `sm` | 4 | Text inputs only |
| Comfortable | `md` | 6 | Compact UI (rare) |
| Relaxed | `lg` | 8 | Mobile-only collapse cards (rare) |
| Pill | `pill` | 9999 | Avatar plates only (very rare) |

The radius vocabulary is **sharp by default**. 0px corners are the brand button shape. There is no compound-radius geometry on the site.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 (Flat) | `#e2e4dd` cream canvas, no shadow | Body bands, footer, content surfaces |
| 1 (Cream-Elevated) | `#d4d6cf` background, no shadow | Cream-elevated cards inside cream sections |
| 2 (White Inset) | `#ffffff` white background on cream canvas, 1px solid black border | Feature cards — the contrast IS the elevation |
| 3 (Dark Inset) | `#000000` background on cream canvas | Code-content cards, dark hero zones |
| 4 (Hairline) | 1px solid `#000000` borders | All card borders, dividers |
| 5 (Photographic) | — | Mux uses minimal photography; depth is typographic |

### Shadow Philosophy
Mux refuses drop-shadow tiers. The system uses **typographic depth + cream-tone variation + hairlines + dark-on-cream contrast**. White inset cards on the cream canvas are the primary card depth treatment; dark inset cards (`#000000` on cream) are the secondary. There are no soft drop shadows under cards. The single chrome shadow is the focus ring (`0 0 0 2px #ff5d00`).

### Decorative Depth
- **White inset cards on cream** — the brand's primary card depth.
- **Dark inset zones** — code-content bands `#000000` on the cream canvas.
- **Cream-tone variation** (`#e2e4dd` → `#d4d6cf` → `#ecebe7`) carries structural elevation.
- **No gradients.** The brand refuses gradient backgrounds.

## 8. Interaction & Motion

### Easing Curves
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default ease for most micro-interactions
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — stronger entrance for hero text reveals

### Duration Buckets
- **Fast** (150ms): button background-color transitions, link underline-grow
- **Standard** (200ms): card border-color shift, hover state changes
- **Slow** (300ms): section entrance fades, modal entrance
- **Hero Reveal** (600ms): staggered word-fade-in on hero headline

### Per-Component Micro-States
- **Button Primary** — hover: background-color transitions to `#1a1a1a` over 150ms (subtle, almost imperceptible). No transform.
- **Button Secondary** — hover: background fills to `rgba(0,0,0,0.06)` over 150ms.
- **Button Tertiary (Text)** — hover: arrow → indicator slides in from the right over 200ms.
- **Feature Card** — hover: border-color shifts from `#000000` to `#ff5d00` over 200ms (color-only, no transform, no shadow).
- **Link** — hover: color shifts from `#000000` to `#ff5d00` over 150ms.
- **Hero Headline** — first paint: words stagger-fade-in from invisible to visible over 600ms emphasized ease, 80ms delay between words.

### Page Transitions
Page-to-page: 200ms cross-fade. No parallax — Mux is typographic, not cinematic.

### Reduced Motion Strategy
Respects `prefers-reduced-motion: reduce`. Under reduced motion:
- Hero stagger-fade collapses to single fade-in over 200ms
- All transitions become opacity-only
- Hover states remain (color shifts are not motion-coded)

## 9. Accessibility & A11y

### Contrast Pairs (WCAG)
- **Text on Cream**: `#000000` on `#e2e4dd` = 16.2:1 — AAA at all sizes
- **Body on Cream**: `#1a1a1a` on `#e2e4dd` = 13.8:1 — AAA at all sizes
- **Text on Brand**: `#000000` on `#ff5d00` = 7.2:1 — AAA
- **Text on Dark**: `#e2e4dd` on `#000000` = 16.0:1 — AAA
- **Muted on Cream**: `#5a5a5a` on `#e2e4dd` = 5.7:1 — AA Normal
- **Faint on Cream**: `#8a8a8a` on `#e2e4dd` = 3.0:1 — fails AA at body sizes; reserved for caption-uppercase 12px+ where AA Large applies, or non-essential metadata

### Focus Indicators
- **Ring color**: `#ff5d00` (Mux orange)
- **Ring style**: `2px solid` at `2px` offset from element's outer edge
- **Focus-visible only**: ring appears only on keyboard focus, not mouse-click focus
- **0px rectangles** receive a square ring (no pill-corner softening)

### ARIA Patterns
- **Combobox** (search, select dropdowns): `role="combobox"` with `aria-expanded`, `aria-controls`, `aria-activedescendant`.
- **Listbox** (dropdown options): `role="listbox"` with `aria-selected`.
- **Dialog** (modals): `role="dialog"` with `aria-modal="true"`, `aria-labelledby`, focus trap.
- **Tabs** (docs navigation, pricing-tier toggle): `role="tablist"` with `aria-selected`. Arrow-key navigation.
- **Code block**: `<pre><code>` with `aria-label="Code sample, JavaScript"` for syntax-highlighted examples.

### Keyboard Nav Order
Tab order: skip-to-content → Mux wordmark (home) → primary nav (Products, Solutions, Docs, Pricing, Resources) → utilities (Sign in, Get started) → hero CTAs → editorial body content → footer columns.

### Screen Reader Hints
- Mux wordmark: `aria-label="Mux home"`.
- Code samples: wrapped in `<pre><code>` with appropriate `aria-label` describing language.
- Decorative typographic elements use `aria-hidden="true"`.

### Reduced Motion Handling
`@media (prefers-reduced-motion: reduce)` overrides the hero stagger-fade and all scroll-triggered transitions. Documented in §8.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | < 640px | Hero h1 96→40px; feature card grid 1-up; nav collapses to hamburger |
| Tablet | 640–1024px | Hero h1 66px; feature card grid 2-up; nav still hamburger |
| Desktop | 1024–1280px | Hero h1 96px; feature card grid 3-up; horizontal nav appears |
| Wide | > 1280px | Editorial body content caps at 1280px |

### Touch Targets
- Primary CTA at 44px height — meets WCAG 44 × 44.
- Nav items render with 20px vertical padding for an effective 48px tap area.

### Collapsing Strategy
- **Top nav** switches to hamburger below 1024px.
- **Feature card grid**: 3-up → 2-up → 1-up.
- **Footer**: 5-column at desktop, accordion-collapsed at mobile.
- **Hero text**: maintains aspect ratio with proportional size reduction.

### Image Behavior
- Mux uses minimal photography. Any imagery (case-study screenshots, customer logos) uses AVIF + WebP fallback + JPEG floor with `loading="lazy"` except above-the-fold.

### Container Queries
Used selectively on docs-sidebar layouts where the sidebar reflows based on container width.

## 11. Content & Voice

### Tone
**Developer-confident, typographic, slightly playful.** The voice reads like a senior engineer who genuinely enjoys their craft — direct, technical, occasionally witty. There is no marketing-jargon, no "innovative" or "revolutionary." Mux talks about specific technical concerns: latency, encoding profiles, real-world video delivery edge cases. The tone respects the reader's technical literacy.

### Microcopy Patterns
- **Buttons**: action-verb + noun, sentence-case in JetBrainsMono. "Get started", "Talk to us", "Sign up", "Read the docs", "Try another video". Never uppercase, never "Click here."
- **Eyebrows**: uppercase context cue in JetBrainsMono. "VIDEO API", "MUX DATA", "LIVE STREAMING".
- **Error message recipe**: `[What went wrong]. [What to do.]` — direct and technical. "Couldn't fetch playback ID. Check your environment variables and try again."
- **Success confirmations**: terse and dry. "Asset created." "Stream is live." No exclamation marks — Mux is too dry for them.
- **Form labels**: lowercase technical-style labels above pill inputs in some contexts; capitalized noun phrases in others. Both work; the brand voice is direct.

### Empty States
- **No assets**: "No assets yet. Create your first one to get started."
- **API errors**: "Mux API returned an error. Check your auth token and try again."
- **Empty search**: "No results — try a different query."

### CTA Verb Conventions
- **Get started** — primary verb on signup CTAs (sentence-case)
- **Talk to us** — for sales/contact (Mux uses "Talk to us" rather than "Contact sales" — friendlier)
- **Read the docs** — for documentation (not "View docs" — Mux uses "Read")
- **Try another video** — interactive demos (the "another" implies the demo is already running)
- **Sign in** — for returning users (never "Login")

## 12. Dark Mode & Theming

Mux has **no global user-facing dark/light toggle**. The site is light-cream-by-default. Dark sections are scoped contextual surfaces — code-content bands at `#000000`, code blocks, certain hero variants for product launches. The token swap is local and predictable:

- `bg`: `#e2e4dd` → `#000000`
- `text`: `#000000` → `#e2e4dd`
- `text-body`: `#1a1a1a` → `#e2e4dd`
- `border`: `#000000` → `#e2e4dd`
- `surface`: `#d4d6cf` → `#1a1a1a`
- `brand` and `on-brand` stay unchanged: orange voltage renders identically on both grounds.

When dark zones appear, they're scoped — code samples, code-content product launches, certain CTA bands. The site never inverts globally.

## 13. Lineage & Influences

Mux's digital surface is the closest a developer-tools company comes to a typographic magazine. The discipline is quirky-editorial filtered through a developer-aware sensibility: warm light-cream canvas, Rotonto humanist-display, Aeonik geometric body, JetBrainsMono CTAs, sharp 0px corners. The cream canvas is the boldest brand choice — a distinctive choice in a sea of white-canvas SaaS that distinguishes Mux from competitors within the first second of visual contact.

Influences run from Stripe's single-color brand voltage discipline to Linear's typographic-precision sharp corners, with editorial roots in the It's Nice That / Pentagram / Werner Design Werks tradition. The JetBrainsMono CTA usage is a direct typographic alliance with the JetBrains tooling lineage — engineers reading their own daily editor's font on the marketing buttons.

What it rejects: white SaaS canvas, Inter-everywhere typography, pill CTAs, drop-shadow elevation, marketing-jargon, anything that competes with the typographic editorial atmosphere.

**Named influences:**
- Stripe — single-color brand voltage discipline (https://stripe.com)
- Linear — typographic-precision sharp corners, developer-tools editorial confidence (https://linear.app)
- It's Nice That / The Type Directors Club — editorial-typographic magazine influences (https://www.itsnicethat.com)
- Werner Design Werks / Pentagram — editorial design tradition (https://www.pentagram.com)
- JetBrains — JetBrainsMono typeface, direct typographic alliance (https://www.jetbrains.com/lp/mono/)

## 14. Do's and Don'ts

### Do
- Use warm light-cream `#e2e4dd` as the canvas — the brand's most distinctive choice. Refuse white SaaS canvas.
- Reserve Mux orange `#ff5d00` for the wordmark period, syntax-highlight keywords, accent moments, focus ring — used scarcely.
- Use JetBrainsMono on every CTA label — the developer-typographic stamp is the brand signature.
- Use Rotonto for display sizes at weight 400 with negative tracking — humanist-display character.
- Use Aeonik for body at 16/400 normal tracking.
- Set every CTA at 0px sharp corners — the typographic-precision identity.
- Use 1px solid black hairlines as the default border — never soft greys.
- Place white inset cards on cream canvas as the primary card treatment — the contrast IS the elevation.
- Render the Mux wordmark with the orange period after "mux." — non-negotiable.
- Use sentence-case CTAs ("Get started", "Talk to us").

### Don't
- Don't use white as the primary canvas. Cream `#e2e4dd` is the brand voice.
- Don't introduce a saturated brand color other than Mux orange.
- Don't bold display copy. Rotonto at 400 is the editorial-humanist confidence.
- Don't use pill CTAs. Sharp 0px corners are the brand button.
- Don't use drop-shadow tiers. Depth comes from cream-tone variation + hairlines + contrast.
- Don't use uppercase CTA labels. JetBrainsMono is doing the typographic-stamp work; uppercase would over-stamp.
- Don't use Inter or system-ui for body. Aeonik is the brand sans.
- Don't use ornamental gradients. The site is cream + black + orange.
- Don't translate "Talk to us" to "Contact Sales" — too transactional.
- Don't use exclamation marks in microcopy. Mux is dry.
- Don't add italic display copy. Rotonto is always upright.
- Don't use soft-grey hairlines `#e0e0e0`-style. Mux uses solid black hairlines as the default.

## 15. Agent Prompt Guide

### Quick Color Reference
- Background: `#e2e4dd` (Cream Canvas — distinctive)
- Inset card bg: `#ffffff` (Paper White)
- Dark band bg: `#000000` (Cinema Black)
- Headings / Ink / Borders: `#000000` (Pure Black)
- Body text: `#1a1a1a`
- Muted: `#5a5a5a`
- Brand accent: `#ff5d00` (Mux Orange — used scarcely)
- Surface elevated: `#d4d6cf`
- CTA hover: `#1a1a1a`
- Focus ring: `#ff5d00` 2px

### Example Component Prompts
- "Create a Mux hero band on warm light-cream `#e2e4dd` canvas, 100vh tall. Above the headline, an uppercase JetBrainsMono eyebrow 'VIDEO API' in 12/500 with 0.6px tracking. The headline 'Video for developers' renders in Rotonto 96px weight 400 with -1.92px letter-spacing in pure black `#000000`. Words stagger-fade-in over 600ms on first paint. Below the headline, two side-by-side CTAs: a black `#000000` 'Get started' button (JetBrainsMono 14/500 sentence-case, 12×24 padding, 44px tall, 0px corners, cream `#e2e4dd` text) and a transparent outline 'Talk to us' button (1px solid black border, black text, same dimensions)."
- "Design a Mux feature card: white `#ffffff` paper background inset on the cream `#e2e4dd` canvas, 0px sharp corners, 1px solid `#000000` border, 32px padding. Title in Rotonto 36px weight 400 with -0.36px tracking pure black, 16px gap, body copy in Aeonik 16/400 black, 24px gap, and a 'Read more →' tertiary text button in JetBrainsMono 14/500 with always-on underline-offset 2px. Hover: border-color shifts from black to Mux orange `#ff5d00` over 200ms — color-only, no transform, no shadow."
- "Build a Mux code card: pure black `#000000` background, 0px sharp corners, 32px padding. Code rendered in JetBrainsMono 14/400 with 1.6 line-height. Syntax highlighting: keywords (`const`, `function`, `return`) in Mux orange `#ff5d00`, strings in cream `#e2e4dd`, comments in muted grey `#5a5a5a`. Display a working API code sample (Mux Asset creation in JavaScript)."
- "Create a Mux outline badge: transparent background, 1px solid `#000000` border, 0px corners, black text in JetBrainsMono 12/500 with 0.6px uppercase tracking ('BETA'), 4×8 padding."
- "Build a Mux top nav: 64px tall on `#e2e4dd` cream (matches canvas), 1px solid `#000000` border-bottom, sticky. Wordmark top-left rendered as 'mux.' in Aeonik 18/700 black with the period in Mux orange `#ff5d00` (the period is the only orange element in the wordmark). Horizontal menu (Products / Solutions / Docs / Pricing / Resources) center in Aeonik 14/500 black. Right side: 'Sign in' (text button) and 'Get started' (black primary CTA, 44px tall, 0px corners)."
- "Design a Mux pre-footer CTA band: pure black `#000000` background, centered display headline 'Build with Mux.' in Rotonto 48/400 -0.96px cream `#e2e4dd`, 96px vertical padding. Single cream-on-dark CTA centered below: cream `#e2e4dd` background, black text in JetBrainsMono 14/500 ('Get started'), 12×24 padding, 44px tall, 0px corners."

### Iteration Guide
1. Focus on ONE component at a time. Reference its YAML key (`button-primary`, `feature-card`, `code-card`).
2. Variants live as separate entries inside `components:`.
3. CTAs default to 0px sharp corners — typographic-precision identity. Never pill, never softened.
4. Use color tokens (`brand`, `text`, `surface`) — never inline hex on multiple components.
5. Hover states change color only — feature cards shift border-color from black to Mux orange.
6. Three-family typography discipline: Rotonto (display) + Aeonik (body) + JetBrainsMono (CTAs/code/eyebrows). Never substitute.
7. Mux orange stays scarce — wordmark period, syntax keywords, focus ring, hover-border-shift only.
8. Use the explicit spacing ladder (4 / 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128). Section padding 96px; hero 128px.
9. Cream canvas + white inset cards is the primary card pattern — the contrast IS the elevation.
10. Solid black hairlines (1px solid #000000) are the default border — never soft greys.
