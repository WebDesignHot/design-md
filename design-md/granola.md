---
name: Granola
tagline: White paper, a custom Quadrant book serif, and an olive-green CTA — an AI notepad that dresses like a stationery shop.
updated_at: 2026-05-05T10:17:17+12:00
published_at: 2026-05-03T16:32:19+12:00
author: webdesignhot
source_url: https://www.granola.ai
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [ai, saas]
tags: [light, editorial, serif, sans, warm, soft, organic, literary]
preview_swatch: ['#ffffff', '#5b6f00', '#292929']
related: [notion, substack, anthropic]
description: 'Granola''s site is a literary notebook in browser form — paper-white canvas (`#ffffff`), a custom Quadrant book serif at 68px on a 1.0 line-height for the hero, and a Melange humanist sans for body. The action layer is a single olive-green pill (`#5b6f00`) with a 9999px radius — closer to a Field Notes spec card than a SaaS button. Body copy in matching Melange sits in a warm `#292929`, secondary deck drops to weight 300 to read as handwritten. The whole page reads like a Moleskine that knows how to ship — stationery brand first, AI tool second.'

colors:
  bg: '#ffffff'                   # paper-white canvas — the notebook metaphor
  bg-soft: '#faf8f3'              # soft cream nested panel
  surface: '#f3f0e8'              # warmer card surface for product mockups
  surface-elev: '#e8e3d4'         # deeper cream for nested cards
  surface-paper: '#fdfbf5'        # softest cream for inset stationery
  text: '#292929'                 # primary body copy
  text-strong: '#0e0f0c'          # display copy, near-black with green tint
  text-body: '#3a3a37'            # secondary running-text inside long features
  text-muted: '#72726e'           # captions, body-large secondary
  text-soft: '#a09e95'            # disabled link text, sparingly used
  text-italic: '#5b6f00'          # italic emphasis word — uses brand olive
  brand: '#5b6f00'                # olive-green primary CTA — singular voltage
  brand-soft: '#e5eacd'           # secondary chip / hover surface
  brand-softer: '#f1f4e0'         # paler olive-cream for hover/announcement
  brand-hover: '#465800'          # pressed state — deeper olive
  brand-deep: '#2f3a00'           # deep olive used in long-form mark accents
  on-brand: '#ffffff'             # white text on olive
  accent-olive-bg: '#e5eacd'      # secondary "Download for iPhone" button bg
  accent-cream: '#f4ebd9'         # warm parchment illustration backdrop
  accent-warm-paper: '#f7f1de'    # paler parchment for inset highlights
  border: '#0000001a'             # 10% black hairline
  border-soft: '#00000010'        # 6% black for very subtle dividers
  border-strong: '#00000028'      # 16% black for focused inputs
  shadow-card: 'rgba(34,30,15,0.04)'   # warm-tinted ambient
  shadow-elev: 'rgba(34,30,15,0.08)'   # heavier hover lift
  shadow-paper: 'rgba(34,30,15,0.06)'  # gentle paper-lift on notebook mockup
  scrim: 'rgba(20,18,10,0.50)'    # modal backdrop, warm-tinted black
  success: '#3a7b3a'              # confirmation green (distinct from brand olive)
  success-soft: '#eaf3ea'
  warning: '#a35e0a'              # advisory amber
  warning-soft: '#fbf1de'
  danger: '#a8362f'               # form-error red
  danger-soft: '#f7e6e4'
  info: '#345897'                 # informational accent slate-blue
  info-soft: '#e6ecf5'

typography:
  display:
    family: '"Quadrant", "__quadrant_2f05b1", "Tiempos Text", "Iowan Old Style", Georgia, serif'
    weights: [400]
    opentype-features: ['kern', 'liga', 'onum']
  serif:
    family: '"Quadrant", Georgia, serif'
    weights: [400]
  body:
    family: '"Melange", "__melange_3929d6", -apple-system, "system-ui", "Segoe UI", Roboto, sans-serif'
    weights: [300, 400, 500, 600]
    opentype-features: ['kern', 'liga']
  mono:
    family: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    weights: [400]
  scale:
    display-hero:    { size: 68, weight: 400, lineHeight: 1.00, tracking: '-0.005em', family: display, opentype: ['kern', 'liga'] }
    display-xl:      { size: 56, weight: 400, lineHeight: 1.05, tracking: '-0.005em', family: display }
    display-lg:      { size: 48, weight: 400, lineHeight: 1.05, tracking: '0',        family: display }
    display-md:      { size: 36, weight: 400, lineHeight: 1.10, tracking: '0',        family: display }
    display-sm:      { size: 28, weight: 400, lineHeight: 1.20, tracking: '0',        family: display }
    deck-lg:         { size: 24, weight: 300, lineHeight: 1.33, tracking: '0',        family: body }
    deck-md:         { size: 20, weight: 300, lineHeight: 1.40, tracking: '0',        family: body }
    title-lg:        { size: 22, weight: 500, lineHeight: 1.35, tracking: '0',        family: body }
    title-md:        { size: 18, weight: 500, lineHeight: 1.40, tracking: '0',        family: body }
    title-sm:        { size: 16, weight: 500, lineHeight: 1.40, tracking: '0',        family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-md:         { size: 17, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-sm:         { size: 15, weight: 400, lineHeight: 1.50, tracking: '0',        family: body }
    caption:         { size: 13, weight: 500, lineHeight: 1.40, tracking: '0.02em',   family: body }
    label:           { size: 12, weight: 500, lineHeight: 1.30, tracking: '0.04em',   family: body, transform: uppercase }
    overline:        { size: 11, weight: 600, lineHeight: 1.30, tracking: '0.06em',   family: body, transform: uppercase }
    button-lg:       { size: 16, weight: 500, lineHeight: 1.20, tracking: '0',        family: body }
    button-md:       { size: 14, weight: 500, lineHeight: 1.20, tracking: '0',        family: body }
    quote:           { size: 28, weight: 400, lineHeight: 1.40, tracking: '0',        family: display }
    code:            { size: 14, weight: 400, lineHeight: 1.50, tracking: '0',        family: mono }

radius:
  micro: 4
  sm: 8
  md: 12
  lg: 16
  xl: 24
  pill: 9999      # primary CTA — fully-round, the spec-card silhouette

spacing:
  base: 4
  scale: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]

layout:
  page-width: 1200
  prose-width: 680
  header-height: 72
  hero-band-height: 720
  notebook-mockup-width: 980

components:
  cta-olive-pill:
    bg: '#5b6f00'
    color: '#ffffff'
    radius: 9999
    padding: '14px 28px'
    height: 48
    font: button-lg
    use: 'Try Granola, Get started, primary signup — every primary action.'
  cta-olive-pill-hover:
    bg: '#465800'
    color: '#ffffff'
    radius: 9999
    use: 'Pointer hover — deeper olive, no transform, no shadow lift.'
  cta-soft-olive:
    bg: '#e5eacd'
    color: '#2f3a00'
    radius: 9999
    padding: '12px 24px'
    height: 44
    font: button-md
    use: 'Secondary "Download for iPhone" — paired with primary olive pill.'
  button-ghost:
    bg: 'transparent'
    color: '#292929'
    border: '1px solid #0000001a'
    radius: 9999
    padding: '12px 24px'
    use: 'Tertiary "Watch demo" or "Read docs" — fully-pill, transparent.'
  announcement-chip:
    bg: '#f1f4e0'
    color: '#2f3a00'
    radius: 9999
    padding: '6px 14px'
    border: '1px solid #5b6f0030'
    font: caption
    use: '"Announcing our Series C" hero pill — sits at top of hero, single instance.'
  notebook-mockup-card:
    bg: '#f3f0e8'
    color: '#292929'
    radius: 16
    padding: '32px'
    use: 'Two-up notebook mockup card — raw notes vs Granola-enhanced notes side by side. No shadow.'
  feature-card-cream:
    bg: '#faf8f3'
    color: '#292929'
    radius: 16
    border: '1px solid #00000010'
    padding: '32px'
    use: 'Cream feature panel — flat, hairline-bordered.'
  testimonial-quote:
    bg: '#ffffff'
    color: '#292929'
    radius: 16
    border: '1px solid #0000001a'
    padding: '32px 28px'
    use: 'Pull-quote card — Quadrant serif at 28px, byline beneath.'
  feature-spread:
    bg: '#ffffff'
    color: '#292929'
    radius: 0
    use: 'Full-bleed editorial spread — Quadrant headline, Melange body, no card chrome.'
  text-input:
    bg: '#ffffff'
    color: '#0e0f0c'
    radius: 12
    height: 48
    padding: '12px 16px'
    border: '1px solid #0000001a'
    focus: 'border thickens to 1.5px #5b6f00 + faint olive ring'
    use: 'Email signup field — paired with olive pill CTA.'
  badge-olive:
    bg: '#e5eacd'
    color: '#2f3a00'
    radius: 9999
    padding: '4px 10px'
    font: caption
    use: 'Inline category tag — "AI", "Notes" — paler olive on cream.'
  link-inline:
    color: '#5b6f00'
    underline: '1px solid currentColor'
    use: 'Inline body link — olive with hairline underline always present.'
  nav-link:
    color: '#292929'
    use: 'Top-nav item — ink with no underline; underline appears on hover.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-out-soft: 'cubic-bezier(0.0, 0, 0.2, 1)'
  duration-fast: 120
  duration-standard: 240
  duration-slow: 380
  button-hover: 'background 240ms standard — no transform, no shadow lift'
  card-hover: 'no lift; cream surface darkens fractionally over 240ms'
  notebook-flip: 'two-up notebook mockup cross-fades at 380ms emphasized between raw / enhanced views'
  scroll-reveal: 'sections fade in with 12px translate-up over 380ms ease-out-soft when entering viewport'
  reduced-motion: 'respects prefers-reduced-motion: reduce — all transforms suppressed, fade-only.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'rgba(34,30,15,0.04) 0 1px 2px 0'
  card: 'rgba(34,30,15,0.04) 0 4px 12px -2px'
  paper: 'rgba(34,30,15,0.06) 0 8px 16px -4px'
  elevated: 'rgba(34,30,15,0.08) 0 12px 24px -8px, rgba(34,30,15,0.04) 0 4px 8px -2px'
  ring: '0 0 0 2px #5b6f00'

accessibility:
  contrast-text-on-bg: 13.0          # #292929 on #ffffff — AAA
  contrast-text-strong-on-bg: 19.5   # #0e0f0c on #ffffff — AAA
  contrast-text-on-brand: 5.4        # #ffffff on #5b6f00 — AA body, AAA large
  contrast-muted-on-bg: 5.0          # #72726e on #ffffff — AA body
  contrast-text-on-soft: 11.8        # #2f3a00 on #e5eacd — AAA
  focus-ring: '2px solid #5b6f00 + 2px outline-offset on white'
  reduced-motion-honored: true
  touch-target-min: 44

dark-mode: null   # Light-only marketing surface. The product (Granola Mac/iPhone app) ships with both light and dark themes; the public site is paper-white only.
---

## 1. Visual Theme & Atmosphere

Granola's site is a literary notebook in browser form. The body bg stays paper-white at `#ffffff`, the hero "The AI notepad for people in back-to-back meetings" sets at **68px in a custom Quadrant book serif** on a 1.0 line-height (so the line breaks land tight as a title page), and the secondary deck drops to 24px Melange at **weight 300** — light enough to read as handwritten.

The atmosphere is the opposite of the Otter.ai / Fireflies template — instead of a dark navy + neon-blue AI-meeting-tool palette, the page is paper-white with a single olive-green accent. The action layer is a single olive-green pill (`#5b6f00`) at a fully-round 9999px radius, with a soft `#e5eacd` paired secondary for the iPhone download. The page treats AI as stationery rather than utility.

Where Notion sought editorial weight with Lyon Text, Granola pushes further into the literary lane. Where Substack uses orange as a single confident accent, Granola uses olive. The result is a stationery brand that happens to ship AI — Field Notes / Aesop / Apothecary positioning rather than indigo/blue productivity convention. The 9999px CTA radius is the most telling detail: it's so high it functions as fully round, referencing the rounded-rectangle "spec card" on the back of a Moleskine package rather than the tight 8px pill of a typical SaaS.

The cumulative effect is editorial calm. Body copy sits in a warm `#292929` (notably darker than Superhuman's `#292827` but with a similar warmth philosophy), and the secondary deck's weight 300 gives long passages a hand-set, almost letterpress feel. Cards lift via warm tonal layering (`#ffffff` → `#faf8f3` → `#f3f0e8`) and 10% black hairlines — never shadow stacks. Product screenshots — the notebook mockups — float on the cream surface without shadow; the warm tone alone reads as elevation.

**Key Characteristics:**
- Paper-white canvas (`#ffffff`) — never tinted, never grey
- Custom Quadrant book serif for display at 68px / 1.0 line-height — title-page leading
- Custom Melange humanist sans for body, weight 300 for secondary deck (handwritten feel)
- Single brand voltage: olive-green (`#5b6f00`) for primary CTAs only
- Soft olive (`#e5eacd`) for secondary chips and announcement badges
- Fully-round (9999px) primary CTA — the spec-card silhouette is intentional
- 17px body copy at 1.55 line-height — generous, magazine-readable
- Warm tonal layering for elevation (white → cream → warm cream); no shadow chrome
- Single-display-typeface discipline — Quadrant carries every serif moment, no second face
- Editorial spreads: hero, two-up notebook mockup, testimonials, feature stack, pricing
- 10% black hairlines (`#0000001a`) instead of solid grey borders

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#ffffff`): paper-white floor for every public page. The notebook metaphor.
- **Ink** (`#292929`): the dominant text colour — warm near-black, distinct from `#000`.
- **Ink Strong** (`#0e0f0c`): display copy with a faint green tint matching the brand olive.
- **Brand Olive** (`#5b6f00`): the singular voltage. Primary CTA backgrounds, italic emphasis text, inline body links.

### Brand & Dark
- **Brand Hover** (`#465800`): pressed/hover state — deeper olive.
- **Brand Deep** (`#2f3a00`): deep olive used as text colour on soft-olive secondary chips.
- **Brand Soft** (`#e5eacd`): soft olive-cream — the secondary chip surface.
- **Brand Softer** (`#f1f4e0`): paler olive-cream — used for hover-tints and announcement chips.

### Accent
- **Accent Cream** (`#f4ebd9`): warm parchment illustration backdrop — feature-card photography.
- **Accent Warm Paper** (`#f7f1de`): paler parchment for inset highlights.
- **Olive italic** (`#5b6f00`): italic emphasis word colour — same as brand olive, surfaces in display copy where one or two italic words gain colour.

### Interactive
- **Link** (`#5b6f00`): inline body links — olive with a 1px underline (always present).
- **Link Hover** (`#465800`): hover — slightly darker olive, underline thickens 1 → 1.5px.
- **Selected** (`#5b6f00` fill, `#ffffff` text on toggle pills).
- **Disabled** (`#a09e95` text, `#f3f0e8` fill): drained warm grey on cream.

### Neutral Scale
- **Ink Strong** (`#0e0f0c`) — peak display copy
- **Ink** (`#292929`) — body, primary nav
- **Body** (`#3a3a37`) — secondary running-text inside long testimonials
- **Muted** (`#72726e`) — captions, byline, timestamp
- **Soft** (`#a09e95`) — disabled link text

### Surface & Borders
- **Canvas** (`#ffffff`) — page floor
- **Surface Soft** (`#faf8f3`) — soft cream nested panel
- **Surface** (`#f3f0e8`) — warmer card surface for product mockups
- **Surface Elev** (`#e8e3d4`) — deeper cream for nested cards
- **Surface Paper** (`#fdfbf5`) — softest cream for inset stationery
- **Hairline** (`#0000001a`) — default 10% black border
- **Hairline Soft** (`#00000010`) — 6% black for subtle dividers
- **Hairline Strong** (`#00000028`) — 16% black for focused inputs

### Shadow Colors
Granola uses **warm-tinted** shadows — `rgba(34, 30, 15, …)` rather than pure black. The tint matches the page's warm ink temperature. There is no brand-tinted shadow (no olive glow on CTA hover) — the system trusts the colour shift alone to register interaction.

- `rgba(34,30,15,0.04) 0 1px 2px 0` — ambient
- `rgba(34,30,15,0.04) 0 4px 12px -2px` — card hover
- `rgba(34,30,15,0.06) 0 8px 16px -4px` — paper-lift on notebook mockup
- `rgba(34,30,15,0.08) 0 12px 24px -8px, rgba(34,30,15,0.04) 0 4px 8px -2px` — elevated dropdown

### Semantic
- **Success** (`#3a7b3a` on `#eaf3ea`) — confirmation; deliberately distinct from brand olive
- **Warning** (`#a35e0a` on `#fbf1de`) — advisory amber, ink-leaning
- **Danger** (`#a8362f` on `#f7e6e4`) — form-error red
- **Info** (`#345897` on `#e6ecf5`) — slate-blue informational

## 3. Typography Rules

### Font Family

**Display Primary**: `Quadrant` — Granola's custom book serif, loaded via the hashed bundle name `__quadrant_2f05b1`. Fallback chain: `"Tiempos Text", "Iowan Old Style", Georgia, serif`. Tiempos Text (Klim Type Foundry) is the closest commercial match — same humanist book-serif lineage. Quadrant is single-weight (400) only on the marketing site; weight contrast comes from family swap, not weight modulation.

**Body Primary**: `Melange` — Granola's custom humanist sans, loaded via `__melange_3929d6`. Fallback chain: `-apple-system, "system-ui", "Segoe UI", Roboto, sans-serif`. Melange ships four weights (300, 400, 500, 600) — the secondary deck pins to **300** (light) for handwritten feel.

**Mono companion**: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace` — used only for keyboard-shortcut callouts in feature copy (rare).

**OpenType features**: `kern` and `liga` always on. `onum` (oldstyle figures) enabled on Quadrant display copy — gives numerals a literary feel inside running serif text. There are no swash or smallcaps features.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| display-hero | Quadrant | 68 | 400 | 1.00 | -0.005em | kern, liga | Hero "The AI notepad for people in back-to-back meetings" — peak typographic moment |
| display-xl | Quadrant | 56 | 400 | 1.05 | -0.005em | — | Section opener on dark feature spread |
| display-lg | Quadrant | 48 | 400 | 1.05 | 0 | — | Feature spread h2 |
| display-md | Quadrant | 36 | 400 | 1.10 | 0 | — | Sub-feature opener |
| display-sm | Quadrant | 28 | 400 | 1.20 | 0 | — | Mid-page section head |
| deck-lg | Melange | 24 | 300 | 1.33 | 0 | — | Hero deck — handwritten-feel light weight |
| deck-md | Melange | 20 | 300 | 1.40 | 0 | — | Sub-section deck |
| title-lg | Melange | 22 | 500 | 1.35 | 0 | — | Card title on cream feature card |
| title-md | Melange | 18 | 500 | 1.40 | 0 | — | Sub-card title, footer column heads |
| title-sm | Melange | 16 | 500 | 1.40 | 0 | — | Inline emphasis title in body flow |
| body-lg | Melange | 18 | 400 | 1.55 | 0 | — | Long-form body inside testimonials |
| body-md | Melange | 17 | 400 | 1.55 | 0 | — | Default running-text — note 17px (not 16) for editorial feel |
| body-sm | Melange | 15 | 400 | 1.50 | 0 | — | Card meta, captions |
| caption | Melange | 13 | 500 | 1.40 | 0.02em | — | Timestamp, byline |
| label | Melange | 12 | 500 | 1.30 | 0.04em | uppercase | Section eyebrow above display copy |
| overline | Melange | 11 | 600 | 1.30 | 0.06em | uppercase | Top-of-section micro-label |
| button-lg | Melange | 16 | 500 | 1.20 | 0 | — | Primary olive pill label |
| button-md | Melange | 14 | 500 | 1.20 | 0 | — | Secondary chip / nav button |
| quote | Quadrant | 28 | 400 | 1.40 | 0 | — | Pull-quote inside testimonial card |
| code | mono | 14 | 400 | 1.50 | 0 | — | Keyboard-shortcut callout |

### Principles

- **The serif/sans duet is the brand voice.** Quadrant carries every display moment, Melange carries every body moment. Hierarchy comes from *family swap*, not weight modulation. Display copy is single-weight (400) on Quadrant; body modulates between 300, 400, 500.
- **Title-page leading at large sizes.** The 68px hero rides at exactly 1.0 line-height — the unusually tight leading is what gives the typography its title-page feel rather than marketing-deck.
- **Weight 300 for secondary deck is the handwritten signal.** The hero deck at 24px / 300 weight sits soft-light enough to read as a journal note — substituting Melange Regular (400) collapses the editorial feel.
- **17px body, not 16px.** Granola's body copy sits at 17px — a single-pixel uplift that, at 1.55 line-height, reads more editorial than the typical 16px SaaS standard.
- **Negative tracking only on Quadrant display.** The hero uses `-0.005em`; sub-displays sit at zero tracking. Melange body and caption sit at zero or slightly positive (0.02em) tracking — book-style measure.
- **Single-weight Quadrant discipline.** No bold Quadrant, no italic Quadrant. Emphasis inside Quadrant copy comes from *colour* (the olive italic word, surfaced in `#5b6f00`) rather than weight or slant.
- **Tiempos Text (Klim) is the closest commercial substitute** if Quadrant is unavailable. Inter Light (300) approximates Melange's handwritten secondary-deck feel — slightly tighter cap height, but the weight is the right starting point.

## 4. Component Stylings

### Buttons

**`cta-olive-pill`** — The signature primary. `#5b6f00` fill, white text at 16px / 500, **9999px radius (fully-pill)**, 14×28px padding, 48px height. Used for "Try Granola", "Get started", "Sign up". The fully-pill radius is non-negotiable — it's the spec-card silhouette that ties Granola to stationery rather than SaaS.

**`cta-olive-pill-hover`** — Pointer hover. Background flips to `#465800` over 240ms. **No transform, no shadow lift, no scale.** The hover is colour-only.

**`cta-soft-olive`** — Secondary "Download for iPhone" pill. `#e5eacd` fill, deep-olive `#2f3a00` text at 14px / 500, 9999px radius, 12×24px padding, 44px height. Pairs flush right of the primary olive pill in hero CTA stacks.

**`button-ghost`** — Tertiary. Transparent fill, ink text, 1px hairline border, 9999px radius, 12×24px padding. Used for "Watch demo" beside the primary CTA. Even tertiary buttons stay fully-pill on Granola.

### Cards

**`notebook-mockup-card`** — The signature card. `#f3f0e8` warmer cream surface, **16px radius**, 32px padding. Holds a two-up notebook mockup: raw meeting notes on the left, Granola-enhanced notes on the right. **No shadow** — the warm cream is the elevation. This is the page's most distinctive layout primitive.

**`feature-card-cream`** — Cream feature panel. `#faf8f3` fill, 16px radius, 6% black hairline, 32px padding. Flat. Used for feature blocks where the cream-on-cream stacking would benefit from a softer surface.

**`testimonial-quote`** — Pull-quote card. White fill, 16px radius, hairline border, 32×28px padding. Quote in 28px / 400 Quadrant, byline beneath in 13px / 500 Melange muted with a 40px circular avatar flush left.

**`feature-spread`** — Full-bleed editorial spread. No card chrome. Quadrant headline, Melange body, photography sits inline. Used for "How Granola works" walkthrough sections.

### Badges, Tags, Pills

**`announcement-chip`** — The hero "Announcing our Series C" pill. `#f1f4e0` fill, deep-olive text, 9999px radius, 6×14px padding, 1px olive-tinted border (`#5b6f0030`), 13px / 500 caption. Sits at the very top of the hero — single instance per page.

**`badge-olive`** — Inline category tag ("AI", "Notes"). `#e5eacd` fill, deep-olive text, 9999px radius, 4×10px padding.

### Inputs / Forms

**`text-input`** — White fill, 1px hairline (`#0000001a`), **12px radius**, 48px height, 12×16px padding. Body placeholder in 17px / 400 muted. On focus, border thickens to 1.5px olive (`#5b6f00`) and a faint olive ring appears (`rgba(91,111,0,0.12) 0 0 0 4px`). Note the input radius (12px) is *smaller* than the button radius (9999px) — it's the page's only radius asymmetry.

**`email-input-hero`** — Inline email signup. White fill, hairline, 12px radius, 48px height. The olive pill CTA sits flush right with no gap, forming a single combined affordance — the input is rectangular-rounded but the CTA is fully-pill, creating a visual stair-step that frames the conversion moment.

### Navigation

**`top-nav`** — White surface, 72px height, 1px bottom hairline. Wordmark flush left in display-sm Quadrant, three nav links centred (Product, Pricing, About) in 16px / 500 Melange ink, "Sign in" text + olive "Try Granola" pill flush right.

**`nav-link`** — Ink (`#292929`), no underline at rest. Hairline underline appears on hover. Active page gets an olive 1.5px underline.

### Decorative

**`paper-grain-texture`** — A 6% opacity paper-grain SVG overlay sometimes applied to feature spreads to add tactile warmth. Optional; appears at most once per page on the longest editorial spread.

**`pull-quote-flourish`** — A Quadrant `"` glyph in deep olive at 64px sometimes appears flush left of a pull-quote, decoratively.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`
- Section padding (vertical): 96–128px for major bands — generous editorial cadence
- Card internal padding: 32px on `notebook-mockup-card` and `feature-card-cream`; 24px on smaller nested panels
- Inter-card gutters: 24px between feature cards in 3-up grid; 16px in dense 4-up grids

### Grid & Container

- Max content width: ~1200px on the inner grid with 24px gutters
- Prose width: ~680px for long-form testimonial body — narrower than the page gutter so reading flow stays magazine-tight
- Notebook mockup width: ~980px — wider than prose but inside the page gutter; the two-up arrangement breathes
- Feature grid pattern: 3-up at desktop, 2-up at tablet, 1-up at mobile

### Whitespace Philosophy

The page is composed as a sequence of editorial spreads — each section gets 96–128px of vertical breathing room. The cadence is closer to a magazine than a scroll-tracked SaaS. White runs edge-to-edge between sections; cards lift via cream surface rather than shadow. The 24px gutters around the page's max-width container leave generous side margin even at desktop widths — the page never feels cramped against the viewport edge.

### Section Cadence

A typical Granola page runs:

1. White hero (68px Quadrant display, 24px / 300 Melange deck, olive pill CTA, soft-olive secondary)
2. Notebook-mockup-card spread (cream surface, two-up before/after notes)
3. Feature stack (3-up cream cards on white, with category badges)
4. Testimonial spread (white surface, 28px Quadrant pull-quotes, byline and avatars)
5. Pricing band (3-up cream cards, olive pill CTA inside the recommended tier)
6. Editorial closer ("Built for thoughtful people" — Quadrant headline, Melange deck, single olive pill CTA)
7. Footer (Melange title-md column heads, body-sm muted links)

There are no dark hero bands on Granola — the page stays paper-white throughout. Light/dark alternation is replaced with **white/cream alternation** (`#ffffff` and `#f3f0e8`).

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 4px | Inline tags, fine-grained badges |
| Small | 8px | Internal sub-elements inside cards |
| Standard | 12px | Text inputs, fine controls |
| Comfortable | 16px | Feature cards, notebook-mockup card, testimonial card |
| Featured | 24px | Hero shell, full-bleed feature spreads |
| Pill | 9999px | All buttons (primary, secondary, ghost), announcement chip, badge-olive |

Granola is unusual in that **every button is fully-pill** — primary, secondary, and tertiary all sit at 9999px. This is the spec-card silhouette: the rounded rectangle on the back of a Moleskine package, the chip on a Field Notes spec sheet. The contrast between rectangular cards (16px) and fully-pill buttons (9999px) is the page's defining shape tension.

There are no compound radii. Every shape rounds uniformly on all four corners.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Canvas, hero, feature spreads, notebook-mockup card (~95% of surfaces) |
| 1 — Ambient | `rgba(34,30,15,0.04) 0 1px 2px 0` | Top-nav at scroll, very subtle inputs |
| 2 — Card hover | `rgba(34,30,15,0.04) 0 4px 12px -2px` | Optional hover on testimonial cards (most stay flat) |
| 3 — Paper-lift | `rgba(34,30,15,0.06) 0 8px 16px -4px` | Notebook mockup on hover — the only "paper" shadow |
| 4 — Elevated | `rgba(34,30,15,0.08) 0 12px 24px -8px, rgba(34,30,15,0.04) 0 4px 8px -2px` | Dropdowns, popovers |
| 5 — Modal | scrim `rgba(20,18,10,0.50)` + dialog with elevated shadow | Sign-in modal |

### Shadow Philosophy

Granola is a **warm-tonal-elevation** system, not a shadow-elevation system. Depth comes almost entirely from warm tonal layering (`#ffffff` → `#faf8f3` → `#f3f0e8` → `#e8e3d4`) and 10% black hairlines. Shadows are reserved for: (1) the notebook-mockup card on hover (a gentle paper-lift, evoking a journal page lifted from its cover), and (2) elevated dropdowns and modals. The marketing chrome itself is flat. There is no brand-tinted (olive) shadow — Granola never glows. The tonal warmth is the elevation, full stop.

## 8. Interaction & Motion

### Easing

- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover state colour swaps, hairline transitions
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry, notebook-mockup cross-fade
- **Out-soft**: `cubic-bezier(0.0, 0, 0.2, 1)` — section reveals on scroll

### Durations

| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 120ms | Hairline tone swaps, focus-ring fades |
| Standard | 240ms | Button hover, link colour shifts, card surface deepening |
| Slow | 380ms | Modal entry, notebook-mockup before/after cross-fade, section scroll-reveal |

### Per-Component Recipes

- **Olive pill hover**: background `#5b6f00` → `#465800` over 240ms standard. **No transform, no scale, no glow.** The hover is colour-only — the pill stays grounded.
- **Soft-olive chip hover**: background `#e5eacd` → `#f1f4e0` over 240ms.
- **Notebook-mockup hover (paper-lift)**: shadow fades from flat to `paper` tier over 240ms. Card translates `0 → -2px` on Y axis. This is the only card-lift animation on the page.
- **Notebook-mockup before/after cross-fade**: when hovering the mockup, raw notes fade out (380ms emphasized) and Granola-enhanced notes fade in. The opacity cross-fade is the product demonstration moment.
- **Link hover**: olive colour darkens to `#465800` over 120ms. Underline thickens 1 → 1.5px over 240ms.
- **Scroll reveal**: sections fade in with a 12px translate-up over 380ms ease-out-soft when entering viewport (one-shot, then static).
- **Modal enter**: scrim fades in over 240ms, then dialog scales `0.96 → 1.0` and fades from `opacity 0 → 1` over 380ms emphasized.

### Page Transitions

Page-to-page navigation uses a 380ms cross-fade. The fixed top-nav stays static; only the body band fades. Smooth-scroll anchored links use 600ms emphasized easing.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. All `translate` and `scale` transforms suppress. The notebook-mockup cross-fade becomes an instant swap rather than fade. Scroll-reveal becomes an instant render. The paper-lift hover loses its translate — only the shadow remains.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #292929 ink on #ffffff canvas | 13.0 | AAA |
| #0e0f0c ink-strong on #ffffff | 19.5 | AAA |
| #ffffff on #5b6f00 olive | 5.4 | AA body / AAA large |
| #2f3a00 on #e5eacd soft-olive | 11.8 | AAA |
| #72726e muted on #ffffff | 5.0 | AA body |
| #292929 on #f3f0e8 cream surface | 11.5 | AAA |
| #292929 on #faf8f3 surface-soft | 12.4 | AAA |

### Focus Indicators

Focus ring is `2px solid #5b6f00` (brand olive) with 2px outline-offset. The 4px stand-off keeps the ring legible against the fully-pill button radius. Focus-visible suppresses the ring on mouse interactions and preserves it on keyboard navigation.

### ARIA Patterns

- **Top nav**: standard `<nav>` landmark with `aria-label="Primary"`. The "Try Granola" pill is a `<button>` triggering a sign-up modal.
- **Hero email signup**: `<form>` with `aria-label="Sign up for Granola"`. Inline email input + CTA pair render as separate elements for assistive tech.
- **Notebook-mockup card** (raw → enhanced cross-fade): `aria-live="polite"` on the cross-fade region, with the alternate state announced when activated. Hover-only states fall back to a tap-toggle on touch devices.
- **Modal** (sign-in): focus trap, Esc closes, click outside closes, focus returns to trigger.
- **Pricing tiers**: a `role="radiogroup"` for monthly/annual toggles, with `aria-checked` reflecting selection.

### Keyboard Navigation

- Top nav: Tab moves logo → nav links → Sign in → Try Granola pill
- Hero email signup: Tab focuses input then CTA. Enter from input submits.
- Pricing tier cards: Tab moves card → card; arrow keys do not navigate
- Notebook-mockup card: Tab focuses the card; Space/Enter toggles before/after view

### Screen Reader Hints

The notebook-mockup card carries a verbose `aria-label` describing the comparison ("Before: raw meeting transcript with timestamps. After: Granola-enhanced notes with action items, decisions, and follow-ups extracted"). The before/after cross-fade announces state changes via `aria-live`. The olive italic emphasis word in display copy carries no special semantic — it's purely visual; screen readers receive plain text.

### Reduced Motion

All transitions degrade to opacity-only. The notebook-mockup cross-fade becomes an instant swap. Scroll-reveal becomes static render-on-mount. Paper-lift hover loses translate; only the shadow tier remains.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Top nav collapses to logo + hamburger; hero h1 drops 68 → 40px; notebook-mockup stacks (raw on top, enhanced below); feature cards 1-up; CTAs stack vertically |
| Tablet | 640–1024px | Top nav keeps inline links; hero h1 settles at 56px; notebook-mockup stays two-up but tighter; feature cards 2-up |
| Desktop | 1024–1280px | Full top nav; hero h1 at 68px; notebook-mockup at 980px; feature cards 3-up |
| Wide | >1280px | Content width caps at 1200px; gutters absorb the rest |

### Touch Targets

- Olive pill CTA: 48px height — passes WCAG AAA at 14×28 padding
- Soft-olive secondary: 44px height — passes WCAG AA
- Email input field: 48px height
- Inline link tap-target: 44px row height even at 17px / 1.55 body type (line-height adds spacing)

### Collapsing Strategy

- Top nav links collapse into a hamburger sheet below 640px
- Hero CTA + secondary stack vertically on mobile
- Notebook-mockup card: side-by-side at desktop, stacked vertically at mobile (raw on top, enhanced below). The cross-fade demonstration becomes a swipe on touch
- Feature grids: 3 → 2 → 1 columns; never reflow rows

### Image Behavior

The notebook mockup is rendered as a layered SVG/PNG composition with the two states (raw / enhanced) as overlapping opacity layers. At all viewport widths the mockup respects its intrinsic 4:3 aspect ratio.

### Container Queries

Used on the notebook-mockup card to swap from side-by-side to stacked at the card's own ~720px width threshold (independent of viewport).

## 11. Content & Voice

### Tone

Thoughtful, calm, plainspoken. Granola positions itself as a tool for *people who think for a living* — the voice trusts the reader to understand the problem (back-to-back meetings, fragmented notes) without belabouring it. Headlines are full sentences ("The AI notepad for people in back-to-back meetings") rather than fragments. The tone borrows from literary editorial writing — restrained, observational, occasionally wry.

### Microcopy Patterns

- **Button verbs**: "Try Granola", "Get started", "Download for iPhone", "Sign in", "Continue" — direct, outcome-named, never "Submit" or "Click here"
- **Error message recipe**: `[What went wrong] + [What to try next]` — e.g., "We couldn't save that note. Try again, or check your connection."
- **Success confirmations**: short, personal — "Saved." or "Notes synced to your meeting." rather than generic "Success!"
- **Field labels**: full-sentence — "What's your work email?" not "Email"; the conversational labels reinforce the notebook metaphor

### Empty States

The empty meetings list: "No meetings on the calendar today. Granola will be here when you need it." — observational, never apologetic.

The empty notes state: "Your notes will appear here as your meetings begin." — future-tense, anticipatory.

### CTA Verb Conventions

- Primary action: **"Try Granola"** (top nav, hero), **"Get started"** (post-hero), **"Continue"** (multi-step onboarding)
- Secondary action: **"Download for iPhone"** / **"Download for Mac"** (paired with primary), **"Watch demo"** (tertiary)
- Tertiary text: **"Read the docs"**, **"See pricing"**, **"How it works"**
- Avoided: "Submit", "Click here", "Buy now", "Subscribe" — Granola frames the relationship as *trying* and *using*, not buying

## 12. Dark Mode & Theming

**Light-only marketing surface.** The product itself — the Granola Mac and iPhone app — ships with both light and dark themes (the dark theme is a near-black surface with the same olive accent). The public marketing site is paper-white only. The brand position: stationery is light, paper is white, notebooks are cream — a dark canvas would push Granola toward the dark-AI-tool category (Anthropic Console, OpenAI Playground), which is the wrong shelf.

The closest the page gets to dark surfaces is the deep-olive (`#2f3a00`) text on soft-olive chips — but this is a single component, not a theme.

## 13. Lineage & Influences

Granola's visual lineage runs through three traditions: **Notion's custom in-house typography** (Inter + Lyon Text for Notion; Quadrant + Melange for Granola — both pair humanist sans with book serif); **Field Notes / Moleskine's stationery-first positioning** (warm cream, olive-green, paper-white); and **Substack's single-confident-color action discipline** (orange for Substack, olive for Granola — both reject indigo/blue convention). The 9999px CTA radius is a direct borrowing from the rounded-rectangle "spec card" silhouette on the back of a Moleskine package — the brand reference is literal.

Where Notion sought editorial weight with Lyon Text but kept buttons in the standard 6–8px radius range, Granola pushes both further: the serif is more *literary* (book-weight Quadrant, single-weight only), and the buttons are more *stationery* (fully-round pills). The cumulative effect is that Granola reads as a stationery brand that ships AI rather than the inverse.

The olive choice is itself a borrowing — `#5b6f00` is closer to Aesop's apothecary green or Faber & Faber book-jacket olive than to the saturated brand greens of productivity tools (Evernote, Todoist). It signals craft, age, and warmth — not vibrancy.

What Granola rejects: dark mode on the marketing site, gradient washes, illustrated chrome, multi-colour brand systems, exclamation-mark microcopy, "Click here" CTAs. The brand is editorial-stationery: the page is a notebook, the type is a duet, the colour is one olive voltage.

**Influences:**
- Notion — custom in-house sans+serif duet (Quadrant + Melange mirrors Inter + Lyon Text), [notion.com](https://www.notion.com)
- Field Notes / Moleskine — stationery-first positioning, olive-green and warm cream over white, [fieldnotesbrand.com](https://fieldnotesbrand.com)
- Substack — single confident-color action discipline; orange there, olive here, [substack.com](https://substack.com)
- Aesop / Apothecary design — olive-green as warmth and craft signal, [aesop.com](https://www.aesop.com)
- Faber & Faber — book-jacket typography lineage; single-weight literary serif

## 14. Do's and Don'ts

**Do**
- Set display in Quadrant book serif on a tight 1.0 line-height — that title-page leading is the brand fingerprint
- Pin Quadrant to single-weight 400 — never load bold or italic Quadrant
- Drop the secondary deck to Melange weight 300 — the soft-light feel is what makes the page read as handwritten
- Keep the action color olive-green (`#5b6f00`); blue or indigo would collapse Granola back into the AI-tool template
- Use fully-round pills (9999px) for *all* buttons — the spec-card silhouette is intentional
- Layer surfaces tonally (white → cream → warm cream); never stack shadows
- Set body at 17px / 1.55 line-height — the editorial leading is non-negotiable
- Use 16px radius for cards, 24px for hero shells — the rectangular-card vs pill-button contrast is the shape voice
- Render numerals in oldstyle figures (`onum`) inside Quadrant display — the literary detail
- Compose the page as editorial spreads, 96–128px section padding
- Reserve italic emphasis colour (`#5b6f00`) for one or two words in display copy maximum

**Don't**
- Don't drop Melange below weight 300 for body deck — the soft-light feel collapses with thinner weights
- Don't mix Quadrant with a second serif — the single book-serif voice is the discipline
- Don't load bold or italic Quadrant — the typeface is single-weight on Granola; emphasis is colour, not slant
- Don't use square corners on buttons — every button is fully-pill, primary through tertiary
- Don't apply shadows to cards — warm tonal lift is the only elevation
- Don't introduce a dark mode for the marketing surface — stationery is light, full stop
- Don't introduce a second brand colour — olive carries every primary action
- Don't use exclamation marks in microcopy — the voice is observational, never giddy
- Don't use 16px body — Granola sits at 17px for editorial weight
- Don't break the rectangular-card / fully-pill-button contrast — the asymmetry is the brand
- Don't add gradient washes — paper-white and warm cream are the entire surface palette
- Don't use indigo or saturated AI-blue accents — olive is the entire chromatic palette

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:        #ffffff
Ink:           #292929
Ink-strong:    #0e0f0c
Brand:         #5b6f00
Brand-soft:    #e5eacd
Brand-hover:   #465800
Brand-deep:    #2f3a00
Surface-soft:  #faf8f3
Surface:       #f3f0e8
Hairline:      rgba(0,0,0,0.10)
Muted:         #72726e
Cream:         #f4ebd9
```

### Example Component Prompts

- "Create a Granola-style hero: paper-white canvas (#ffffff), 68px Quadrant book serif headline 'The AI notepad for people in back-to-back meetings' in #0e0f0c with 1.0 line-height and -0.005em tracking, 24px / 300 Melange deck beneath in #292929 at 1.33 line-height. Below: a fully-pill (9999px radius) olive CTA — #5b6f00 fill, white text, 14×28px padding, 48px height — labelled 'Try Granola'. Paired with a soft-olive secondary pill (#e5eacd fill, #2f3a00 text, 'Download for Mac')."
- "Design a Granola notebook-mockup card: warm cream surface (#f3f0e8), 16px radius, 32px padding, no shadow at rest. Inside: a two-up layout — left side shows raw meeting notes (Quadrant 17px / 400 Melange body, timestamps in muted #72726e), right side shows Granola-enhanced notes (same family, with action-items called out in deep olive #2f3a00). On hover, the card translates -2px Y and gains a soft paper-lift shadow (rgba(34,30,15,0.06) 0 8px 16px -4px)."
- "Build a Granola announcement chip: paler olive-cream (#f1f4e0) fill, deep-olive (#2f3a00) text, 9999px radius, 6×14px padding, 1px border at rgba(91,111,0,0.18). Label 'Announcing our Series C' at 13px / 500 Melange. Sits at the top of the hero, single instance only."
- "Create the Granola nav: 72px tall white surface, 1px bottom hairline at rgba(0,0,0,0.1). Wordmark left in 28px Quadrant 400. Three centred links (Product, Pricing, About) in 16px / 500 Melange ink. Right side: 'Sign in' text link in ink, then a fully-pill olive CTA (9999px radius, #5b6f00 fill, white text, 'Try Granola' label at 16px / 500, 14×28px padding, 48px height)."
- "Build a Granola testimonial: white card, 16px radius, 1px hairline border at rgba(0,0,0,0.1), 32×28px padding, no shadow. Inside: a 28px / 400 Quadrant pull-quote in #292929 with 1.40 line-height. Beneath: a 40px circular avatar flush left, with name in 16px / 500 Melange ink and role in 13px / 500 Melange muted (#72726e) stacked beside it."
- "Design a Granola feature spread (full-bleed editorial section): white canvas, no card chrome. Left column (50% width): a 36px Quadrant headline + 18px / 400 Melange body at 1.55 line-height + a single olive inline link (#5b6f00 with hairline underline). Right column: a single illustration on warm cream backdrop (#f4ebd9), no border, no shadow."

### Iteration Guide

1. **Canvas stays paper-white.** Anything other than `#ffffff` reads as a different brand. Cream surfaces (`#faf8f3`, `#f3f0e8`) are for cards, not the page.
2. **Quadrant 1.0 line-height for hero.** The unusually tight leading is the title-page signal — substituting 1.1 or 1.2 collapses the effect.
3. **Melange weight 300 for secondary deck.** Don't substitute weight 400 — the handwritten-soft feel is what differentiates Granola from generic editorial SaaS.
4. **Every button is fully-pill.** Primary, secondary, tertiary all sit at 9999px. The spec-card silhouette is invariant.
5. **Olive (`#5b6f00`) is the entire chromatic palette.** No second brand colour, no gradient, no saturated accent.
6. **17px body, 1.55 line-height.** The editorial weight is non-negotiable — 16px collapses the page back into SaaS standard.
7. **Cards rectangular-rounded (16px), buttons fully-pill (9999px).** The asymmetry is the brand.
8. **Tonal elevation only.** No shadows on cards. The warmth of `#f3f0e8` against `#ffffff` is the lift.
