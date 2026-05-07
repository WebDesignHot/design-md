---
name: LiveKit
tagline: Realtime audio-video infra — Public Sans 300 weight on near-black, signature cyan #1fd5f9 voltage, dev-tools confidence.
updated_at: 2026-05-05T20:30:27+12:00
published_at: 2026-05-05T20:30:27+12:00
author: webdesignhot
source_url: https://livekit.io
spec: design.md/v1.5
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [dark, sans, developer, infra, realtime, ai]
preview_swatch: ['#0a0a0a', '#1fd5f9', '#ffffff']
related: [vercel, stripe, mux]
description: 'LiveKit''s site reads as developer-tools editorial built on a dark-by-default near-black canvas — closer to the Vercel/Linear vocabulary than to Mux''s warm-cream typographic experiment. The base canvas is `#0a0a0a` near-black (warm, slight blue undertone — never pure black) carrying display headlines in pure white **Public Sans** at weight 300 with -1.2px tracking. The light-weight display is the brand signature — confident-luxury rather than bold-shouting, more in line with Stripe''s sohne-300 discipline than with consumer-tech 700-weight headlines. The single chromatic voltage is **LiveKit cyan `#1fd5f9`** — a vivid electric-cyan that signals "realtime, signal, voice" against the near-black ground. Cyan appears scarcely on primary CTA fills, the signature waveform/pulse decorative motifs, link colors, and selected interactive states. Inter-style geometric construction in Public Sans, sharp 4-10px corners, restrained shadow tiers. The brand voice is realtime-infrastructure confidence — physical AI agents, voice, video, robotics; the site treats the infra audience with technical respect.'

colors:
  bg: '#0a0a0a'                  # near-black canvas — warm, slight blue undertone
  bg-elevated: '#1a1a1a'         # surface variant on dark
  bg-soft: '#141414'              # very subtle near-black tier
  bg-light: '#ffffff'             # rare; product detail / docs surfaces
  surface: '#1a1a1a'              # canvas-elevated — card surface
  surface-hover: '#222222'        # hover state on dark surface
  surface-strong: '#2a2a2a'       # heavier panel on dark
  surface-on-light: '#f5f5f5'     # surface on light variants
  text: '#ffffff'                 # ink — display + body on dark canvas
  text-strong: '#ffffff'          # body-strong (same)
  text-body: '#a8a8a8'            # default running body copy on dark
  text-muted: '#7a7a7a'           # captions, metadata
  text-faint: '#5a5a5a'           # disabled, footer secondary
  text-on-light: '#0a0a0a'        # near-black on light surfaces
  brand: '#1fd5f9'                # LiveKit cyan — primary CTA fills, accent moments
  brand-hover: '#0fb8de'          # press state
  brand-active: '#0a9bbe'         # deeper press
  brand-soft: '#0a3742'           # softest tint — selected nav, badge bg on dark
  brand-glow: 'rgba(31, 213, 249, 0.25)'  # cyan glow for waveform/pulse decorative motifs
  on-brand: '#0a0a0a'             # near-black on cyan
  accent-magenta: '#ff45e6'       # rare magenta accent for AI-agent / physical-AI callouts
  accent-yellow: '#ffd000'        # rare yellow for warning/highlight contexts
  border: '#2a2a2a'               # 1px hairline on dark
  border-soft: '#1f1f1f'          # softer divider on dark
  border-on-light: '#e0e0e0'      # 1px hairline on light surface
  link: '#1fd5f9'                 # links inherit cyan
  link-hover: '#0fb8de'           # darker cyan on hover
  ring: '#1fd5f9'                 # focus ring — cyan
  success: '#10b981'              # confirmation
  warning: '#f59e0b'              # validation warnings
  danger: '#ef4444'               # form errors
  info: '#1fd5f9'                 # info badges (shares brand cyan)

typography:
  display:
    family: '"displayFont", "Public Sans", -apple-system, system-ui, ui-sans-serif, sans-serif'
    weights: [300, 400, 500]
    opentype-features: []
  body:
    family: '"Public Sans", "Public Sans Fallback", -apple-system, ui-sans-serif, system-ui, sans-serif'
    weights: [300, 400, 500, 600, 700]
    opentype-features: []
  mono:
    family: '"JetBrainsMono", "SF Mono", Menlo, monospace'
    weights: [400, 500]
    opentype-features: ['ss01']
  scale:
    display-mega:    { size: 72, weight: 300, lineHeight: 1.00, tracking: '-1.8px',  family: display, notes: 'Homepage hero h1 — "Build voice, video, and physical AI agents"' }
    display-xl:      { size: 56, weight: 300, lineHeight: 1.05, tracking: '-1.4px',  family: display, notes: 'Subsidiary heroes' }
    display-lg:      { size: 48, weight: 300, lineHeight: 1.10, tracking: '-1.2px',  family: display, notes: 'Section heads' }
    display-md:      { size: 32, weight: 300, lineHeight: 1.15, tracking: '-0.8px',  family: display, notes: 'Sub-section heads' }
    display-sm:      { size: 24, weight: 400, lineHeight: 1.25, tracking: '-0.4px',  family: display, notes: 'Card titles' }
    title-md:        { size: 18, weight: 600, lineHeight: 1.40, tracking: 'normal',  family: body,    notes: 'Component titles, list section labels' }
    title-sm:        { size: 16, weight: 600, lineHeight: 1.45, tracking: 'normal',  family: body,    notes: 'Small section titles' }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: 'normal',  family: body,    notes: 'Editorial body, intro paragraphs' }
    body:            { size: 16, weight: 400, lineHeight: 1.55, tracking: 'normal',  family: body,    notes: 'Default running text' }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.50, tracking: 'normal',  family: body,    notes: 'Footer body, fine print' }
    caption:         { size: 12, weight: 400, lineHeight: 1.45, tracking: 'normal',  family: body,    notes: 'Photo captions, metadata' }
    eyebrow:         { size: 12, weight: 500, lineHeight: 1.40, tracking: '0.6px',   family: body,    notes: 'Section eyebrows — uppercase' }
    button:          { size: 14, weight: 500, lineHeight: 1.00, tracking: 'normal',  family: body,    notes: 'CTA labels — sentence-case' }
    nav-link:        { size: 14, weight: 500, lineHeight: 1.40, tracking: 'normal',  family: body,    notes: 'Top-nav menu items' }
    code-display:    { size: 14, weight: 400, lineHeight: 1.60, tracking: 'normal',  family: mono,    notes: 'Code blocks, syntax samples' }
    code-inline:     { size: 14, weight: 400, lineHeight: 1.50, tracking: 'normal',  family: mono,    notes: 'Inline code spans' }
    metric-value:    { size: 56, weight: 300, lineHeight: 1.05, tracking: '-1.4px',  family: display, notes: 'Spec/metric values — light weight' }
    metric-label:    { size: 12, weight: 500, lineHeight: 1.40, tracking: '0.6px',   family: body,    notes: 'Spec metric labels — uppercase' }

radius:
  none: 0           # rare; tabular containers
  xs: 2             # tight chips
  sm: 4             # primary CTA radius
  md: 6             # secondary cards, compact UI
  lg: 8             # text inputs, dropdown
  xl: 10            # primary feature cards
  xxl: 16           # photo cards, code-block containers
  pill: 9999        # avatar plates only (rare)

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64
  hero-height: '720px on desktop'
  section-padding: 96
  card-grid-gutter: 24

components:
  top-nav:
    bg: 'rgba(10, 10, 10, 0.85)'
    backdrop-filter: 'blur(16px)'
    text: '#ffffff'
    typography: 'Public Sans 14/500'
    height: 64
    layout: 'LiveKit wordmark left + horizontal menu (Products / Solutions / Customers / Pricing / Docs) center + utilities (Sign in, Contact sales, Start building) right'
    border-bottom: '1px solid #1f1f1f'
    sticky: true
  livekit-wordmark:
    height: 24
    placement: 'top-left of nav, in #ffffff'
    notes: 'The "LiveKit" wordmark in white with cyan waveform mark — non-negotiable nav element'
  button-primary:
    bg: '#1fd5f9'
    text: '#0a0a0a'
    padding: '10px 20px'
    height: 40
    radius: 4
    border: 'none'
    font: 'Public Sans 14/500 sentence-case'
    transition: 'background-color 200ms ease'
    use: 'Start building, Get started, Sign up'
  button-primary-hover:
    bg: '#0fb8de'
    notes: 'Color-only hover, no transform'
  button-secondary:
    bg: '#0a0a0a'
    text: '#a8a8a8'
    border: '1px solid #2a2a2a'
    padding: '9px 19px'
    height: 40
    radius: 4
    font: 'Public Sans 14/500'
    use: 'Contact sales, secondary primary action'
    hover: 'border-color shifts to #1fd5f9, text shifts to #ffffff'
  button-text:
    bg: 'transparent'
    text: '#1fd5f9'
    font: 'Public Sans 14/500'
    decoration: 'arrow → indicator slides in on hover'
    use: 'Inline editorial actions (Read more, View documentation)'
  button-ghost:
    bg: 'transparent'
    text: '#ffffff'
    padding: '10px 20px'
    height: 40
    radius: 4
    use: 'Tertiary action with no border'
    hover: 'background fills to rgba(255,255,255,0.06)'
  hero-band-dark:
    bg: '#0a0a0a'
    text: '#ffffff'
    headline: 'Public Sans 72/300 -1.8px'
    cta-arrangement: 'one cyan primary + one outline-dark secondary'
    padding: '128px 48px'
    decorative: 'subtle cyan waveform/pulse animation behind headline (low-opacity)'
  feature-card:
    bg: '#1a1a1a'
    text: '#ffffff'
    radius: 10
    border: '1px solid #2a2a2a'
    padding: 32
    notes: 'Title display-md + body + button-text; icon top-left at 32×32 in cyan'
  feature-card-hover:
    border: '1px solid #1fd5f9'
    notes: 'Hover: border shifts to cyan, no transform, no shadow change'
  code-card:
    bg: '#0a0a0a'
    text: '#a8a8a8'
    radius: 16
    border: '1px solid #2a2a2a'
    padding: 32
    font: 'JetBrainsMono 14/400'
    syntax-highlight: 'cyan #1fd5f9 for keywords, magenta #ff45e6 for strings, muted for comments'
  metric-cell:
    bg: 'transparent'
    text: '#ffffff'
    typography: 'Public Sans 56/300 -1.4px'
    label: 'metric-label 12/500 0.6px uppercase muted'
    padding: '24px 0'
  text-input:
    bg: '#1a1a1a'
    text: '#ffffff'
    border: '1px solid #2a2a2a'
    radius: 8
    padding: '10px 14px'
    height: 40
    font: 'Public Sans 14/400'
    focus: 'border-color shifts to #1fd5f9; ring 2px solid #1fd5f9 at 2px offset'
  badge-pill:
    bg: '#0a3742'
    text: '#1fd5f9'
    radius: 9999
    padding: '4px 10px'
    font: 'eyebrow 12/500 0.6px uppercase'
  badge-magenta:
    bg: 'rgba(255, 69, 230, 0.15)'
    text: '#ff45e6'
    radius: 9999
    notes: 'For AI-agent / physical-AI sub-program callouts'
  cta-band:
    bg: '#0a0a0a'
    text: '#ffffff'
    typography: 'Public Sans 48/300 -1.2px'
    padding: 96
    cta: 'one cyan primary, centered'
    decorative: 'cyan waveform pulse beneath the CTA'
  footer-dark:
    bg: '#0a0a0a'
    text: '#7a7a7a'
    columns: 5
    padding: '64px 48px'
    border-top: '1px solid #1f1f1f'
  footer-link:
    text: '#a8a8a8'
    font: '14/400'
    hover: 'text shifts to #1fd5f9'

lineage:
  summary: 'LiveKit''s digital surface is squarely in the Vercel/Linear/Stripe lineage of dev-tools editorial — near-black canvas, light-weight display typography, single-color brand voltage, sharp small-radius corners. The light 300-weight display is the most distinctive choice: where most dev-tools sites use 600-700 weights for headlines, LiveKit uses 300 with negative tracking for confident-luxury rather than bold-shouting. The cyan voltage `#1fd5f9` is electric-bright and signals "realtime, signal, voice" against the warm near-black ground. Cyan waveform/pulse decorative motifs reinforce the realtime-infra brand promise — these are subtle low-opacity animations behind hero text, not decorative noise. What it rejects: white SaaS canvas, bold-display headlines, pill CTAs, ornamental gradients, marketing-jargon, anything that competes with the cyan-on-black signal.'
  influences:
    - name: 'Stripe'
      role: 'Light-weight display (300) discipline, single-color brand voltage, dev-tools editorial pacing'
      url: 'https://stripe.com'
    - name: 'Vercel'
      role: 'Near-black canvas, dev-tools confident voice, sharp small-radius corners'
      url: 'https://vercel.com'
    - name: 'Linear'
      role: 'Typographic-precision developer-tools editorial confidence'
      url: 'https://linear.app'
    - name: 'Twilio'
      role: 'Voice/realtime communications brand vocabulary, signal-as-decoration'
      url: 'https://www.twilio.com'
    - name: 'Synthwave / cyberpunk-aesthetic'
      role: 'Electric cyan-on-near-black palette tradition, signal-glow visual language'
      url: 'https://en.wikipedia.org/wiki/Synthwave'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 150
  duration-standard: 200
  duration-slow: 300
  duration-pulse: 2000
  cyan-pulse: 'cyan glow opacity oscillates 0.15 → 0.35 → 0.15 over 2000ms ease-in-out — used on hero waveform decorations'
  card-hover-border: 'border-color shift from #2a2a2a to #1fd5f9 over 200ms on feature card hover'
  reduced-motion: 'respects prefers-reduced-motion: reduce — cyan-pulse static, all transitions to opacity-only'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  flat: 'none'
  card: 'none — borders carry the elevation'
  glow: '0 0 24px rgba(31, 213, 249, 0.25)'
  modal: 'rgba(0,0,0,0.6) 0 32px 64px -16px'
  ring: '0 0 0 2px #1fd5f9'
  notes: 'Restrained shadow tiers — depth comes from canvas brightness steps and border-color shifts. Cyan glow used decoratively on waveform motifs, not as card elevation.'

accessibility:
  contrast-text-on-bg: 19.2              # #ffffff on #0a0a0a — AAA
  contrast-body-on-bg: 7.0               # #a8a8a8 on #0a0a0a — AAA at body sizes
  contrast-text-on-brand: 12.5           # #0a0a0a on #1fd5f9 — AAA
  contrast-link-on-bg: 11.2              # #1fd5f9 on #0a0a0a — AAA
  focus-ring: '2px solid #1fd5f9 at 2px offset'
  reduced-motion-honored: true
  touch-target-min: 40                  # CTA height — at WCAG 44 minimum with padding; below that some CTAs use 32px size paired with 40px tap area

dark-mode: 'native — LiveKit is dark-by-default. Light surfaces appear only inside scoped contexts (docs viewer, certain customer-case-study pages). The site never inverts globally.'
---

## 1. Visual Theme & Atmosphere

LiveKit's website is what happens when a realtime-infrastructure company learns the dev-tools editorial vocabulary perfectly. The page opens onto a warm near-black canvas (`#0a0a0a` — slightly warm, slight blue undertone, never the pure-black of Mercedes/Ferrari) and the display headline appears at 72px in **Public Sans** at weight **300** with `-1.8px` tracking. The light-weight display is the brand's most distinctive choice: where most dev-tools sites use weight 600-700 for headlines, LiveKit follows the Stripe-sohne-300 discipline — confident-luxury rather than bold-shouting, the type so sure of itself it doesn't need to add visual mass.

The chromatic discipline is committed-monochrome with a single cyan voltage. White display type, grey body copy `#a8a8a8`, near-black canvas, and exactly one chromatic voltage: **LiveKit cyan `#1fd5f9`** — a vivid electric-cyan that signals "realtime, signal, voice" against the warm near-black ground. Cyan appears scarcely. Primary CTA fills, the waveform mark in the wordmark, link colors, focus rings, syntax-highlight keywords inside code blocks. Body text is never cyan; backgrounds are never cyan. When cyan does appear, it carries the signal-on-spectrum weight of an oscilloscope reading.

Decorative motion is minimal but deliberate. Subtle cyan waveform/pulse animations live behind hero text at low opacity (oscillating 0.15-0.35 alpha over 2000ms ease-in-out) — these aren't decorative noise; they're the realtime-infra brand promise made visible. The pulse is the heartbeat of the page; it tells you what LiveKit does before you read a word.

Typography stacks two families. **Public Sans** carries display, body, and CTA — a free, well-supported geometric sans that handles weight 300 display through 700 strong-display body across the entire interface. **JetBrainsMono** carries code blocks and inline code spans. There is no third typeface, no serif accent, no decorative type.

Sharp small-radius corners on every CTA, card, and band — radius `4px` on primary CTAs, `10px` on feature cards, `16px` on code blocks. The radius vocabulary is deliberate: enough corner to read as engineered, not so much that it reads as soft consumer-tech. The geometry is in the Vercel/Linear lineage rather than the Stripe-card or Notion-rounded lineage.

Section rhythm is generous editorial pacing. The hero band runs 720px. Body sections sit in 96px-padded layouts on near-black with disciplined density. Feature card grids (3-up at desktop) carry the bulk of marketing copy. Code cards (live syntax-highlighted samples in JetBrainsMono on `#0a0a0a` ground with cyan keywords and magenta strings) appear at key product-feature moments — they're the proof, not decoration.

**Key Characteristics:**
- Warm near-black `#0a0a0a` canvas — slight blue undertone, never pure black
- Single chromatic voltage: LiveKit cyan `#1fd5f9` — used scarcely (CTAs, waveform mark, links, syntax keywords)
- Public Sans at weight 300 for display headlines — confident-luxury, not bold-shouting
- Negative letter-spacing on display (-1.8px at 72px) — magazine-cover compression
- Sharp small-radius corners (4px CTAs, 10px cards) — engineered geometry, not soft
- Cyan waveform/pulse decorative animations — the realtime-infra brand promise made visible
- Two-family typography: Public Sans + JetBrainsMono
- Sentence-case CTAs in Public Sans 14/500 — friendly-developer, not flagship-loud
- Border-color elevation on cards (no drop shadows) — hover shifts border to cyan
- Magenta-tinted accents reserved for AI-agent / physical-AI sub-program callouts

## 2. Color Palette & Roles

### Primary
- **Near-Black Canvas** (`#0a0a0a`): The page floor. Warm near-black with slight blue undertone — never pure `#000000`.
- **Pure White** (`#ffffff`): Display text, ink, primary text on dark canvas — the voice rising through the dark.
- **LiveKit Cyan** (`#1fd5f9`): The single high-voltage chromatic moment. Primary CTA fill, waveform mark, link colors, focus ring, syntax-highlight keywords.

### Brand & Dark
- **Cyan Hover** (`#0fb8de`): Press state — slight saturation drop.
- **Cyan Active** (`#0a9bbe`): Deep press feedback.
- **Cyan Soft** (`#0a3742`): Selected-tab background, badge tint on dark — a deep desaturated cyan that reads as "scoped to the brand family."
- **Cyan Glow** (`rgba(31, 213, 249, 0.25)`): Used decoratively for the waveform/pulse motifs and the focus ring shadow.

### Accent
- **Magenta** (`#ff45e6`): Reserved for AI-agent / physical-AI sub-program callouts. Used scarcely.
- **Yellow** (`#ffd000`): Reserved for warning/highlight contexts.
- No additional saturated brand colors. LiveKit deliberately refuses chromatic variety.

### Interactive
- **Link** (`#1fd5f9`): Inline body links inherit cyan.
- **Link Hover** (`#0fb8de`): Darker cyan on hover.
- **Button Primary** (`#1fd5f9`): Primary CTA fill — cyan-on-near-black.
- **Button Hover** (`#0fb8de`): Press state.
- **Disabled** (`#5a5a5a`): Faint — disabled CTAs and form fields.

### Neutral Scale
- **Ink White** `#ffffff` — display, headlines, primary text on dark canvas
- **Body** `#a8a8a8` — running paragraph text on dark canvas
- **Muted** `#7a7a7a` — captions, photo metadata, secondary list copy
- **Faint** `#5a5a5a` — disabled, footer secondary, form placeholder
- **Hairline** `#2a2a2a` — 1px divider on dark, default border
- **Border Soft** `#1f1f1f` — softer divider on dark
- **Surface Strong** `#2a2a2a` — heavier panel surface
- **Surface** `#1a1a1a` — feature card surface, elevated panels — one tier above canvas
- **Bg Soft** `#141414` — very subtle near-black tier
- **Bg Elevated** `#1a1a1a` — same as surface (LiveKit uses one elevation tier)

### Surface & Borders
- **bg** is `#0a0a0a` warm near-black — the canonical canvas.
- **bg-elevated** and **surface** share `#1a1a1a` — one tier above canvas.
- **bg-light** `#ffffff` for scoped docs viewer / certain customer pages.
- **border** is `#2a2a2a` 1px hairline default; `#1f1f1f` for soft dividers.
- **border-on-light** `#e0e0e0` 1px on light.

### Shadow Colors
LiveKit uses **restrained shadow tiers** — depth comes from canvas brightness steps and border-color shifts on hover, not from drop shadows:
- **Card default**: no shadow — the border + slight surface elevation IS the depth.
- **Glow** (decorative): `0 0 24px rgba(31, 213, 249, 0.25)` — used on waveform/pulse motifs, not as card elevation.
- **Modal**: `rgba(0,0,0,0.6) 0 32px 64px -16px` — single deep tier for dialogs.
- **Focus Ring**: `0 0 0 2px #1fd5f9`.

### Semantic
- **Success** (`#10b981`): Confirmation states.
- **Warning** (`#f59e0b`): Validation warnings.
- **Danger** (`#ef4444`): Form errors.
- **Info** (`#1fd5f9`): Info badges — shares brand cyan.

## 3. Typography Rules

### Font Family
- **Display**: Variable name `displayFont` in CSS — likely a custom-licensed display cut, with `Public Sans` as the primary fallback. Carries display sizes at weight 300.
- **Body**: `Public Sans` — a free, well-supported geometric sans (originally cut for the US Web Design System). Weight 300 for very-light contexts, 400 default, 500 for emphasis, 600 for titles, 700 for strong display.
- **Mono**: `JetBrainsMono` — for code blocks and inline code; `SF Mono`/`Menlo` fallback. OpenType `ss01` enabled for the alternate-glyph stylistic set.
- **Fallback chains**: `system-ui, ui-sans-serif, sans-serif` — graceful fallback across platforms.
- **No italics** — voice is always upright.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| Display Mega | displayFont/Public Sans | 72 | 300 | 1.00 | -1.8px | — | Homepage hero h1 |
| Display XL | displayFont/Public Sans | 56 | 300 | 1.05 | -1.4px | — | Subsidiary heroes |
| Display Lg | displayFont/Public Sans | 48 | 300 | 1.10 | -1.2px | — | Section heads |
| Display Md | displayFont/Public Sans | 32 | 300 | 1.15 | -0.8px | — | Sub-section heads |
| Display Sm | displayFont/Public Sans | 24 | 400 | 1.25 | -0.4px | — | Card titles |
| Title Md | Public Sans | 18 | 600 | 1.40 | normal | — | Component titles |
| Title Sm | Public Sans | 16 | 600 | 1.45 | normal | — | Small section titles |
| Body Lg | Public Sans | 18 | 400 | 1.55 | normal | — | Editorial body, intro paragraphs |
| Body | Public Sans | 16 | 400 | 1.55 | normal | — | Default running text |
| Body Sm | Public Sans | 14 | 400 | 1.50 | normal | — | Footer body, fine print |
| Caption | Public Sans | 12 | 400 | 1.45 | normal | — | Photo captions, metadata |
| Eyebrow | Public Sans | 12 | 500 | 1.40 | 0.6px | — | Section eyebrows — uppercase |
| Button | Public Sans | 14 | 500 | 1.00 | normal | — | CTA labels — sentence-case |
| Nav Link | Public Sans | 14 | 500 | 1.40 | normal | — | Top-nav menu items |
| Code Display | JetBrainsMono | 14 | 400 | 1.60 | normal | ss01 | Code blocks, syntax samples |
| Code Inline | JetBrainsMono | 14 | 400 | 1.50 | normal | ss01 | Inline code spans |
| Metric Value | displayFont/Public Sans | 56 | 300 | 1.05 | -1.4px | — | Spec/metric values — light weight |
| Metric Label | Public Sans | 12 | 500 | 1.40 | 0.6px | — | Spec metric labels — uppercase |

### Principles
- **Display weight stays at 300.** This is the brand's most distinctive choice — the Stripe-sohne-300 lineage. Light weight at display sizes signals confidence-without-volume; the type doesn't need to bold itself to be authoritative.
- **Negative letter-spacing on display only.** -0.4px to -1.8px on display sizes; body stays at normal. Magazine-cover compression.
- **Body weights step 400 → 500 → 600 → 700.** Body running text 400; titles 600; CTA buttons 500; strong-emphasis 700 (rare).
- **Sentence-case CTAs.** "Start building", "Get started", "Contact sales". Never uppercase. The voice is friendly-developer, not flagship-loud.
- **JetBrainsMono `ss01` enabled.** The alternate-glyph stylistic set gives JetBrainsMono its IDE character — distinctive `g`, `l`, `0` glyphs.
- **Two-family discipline.** Public Sans + JetBrainsMono. No serif accent, no third sans, no decorative type.
- **No italics.** Voice is always upright.
- **Public Sans is open-source.** Open-source substitute: keep Public Sans, or use **Inter** at weight 300 for closer geometric proportion.

## 4. Component Stylings

### Buttons

All primary/secondary buttons use **4px border-radius** — the engineered-small-corner discipline.

**Primary (Cyan)** — the singular high-voltage action:
- Background `#1fd5f9`, text `#0a0a0a` (near-black for contrast), font `Public Sans 14/500 sentence-case`
- Padding `10px 20px`, height `40px`, border-radius `4px`, no border
- Transition `background-color 200ms ease`
- Hover: background `#0fb8de` (color-only)
- Active: background `#0a9bbe`
- Use case: Start building, Get started, Sign up

**Secondary (Outline)** — alternative action paired with primary:
- Background `#0a0a0a` (near-black, matches canvas), text `#a8a8a8`, border `1px solid #2a2a2a`
- Padding `9px 19px` (1px less for border), height `40px`, radius `4px`
- Same `Public Sans 14/500 sentence-case` typography
- Hover: border-color shifts to `#1fd5f9`, text shifts to `#ffffff`
- Use case: Contact sales, secondary primary action

**Ghost (Text)** — tertiary action with no border:
- Background transparent, text `#ffffff`, padding `10px 20px`, height `40px`, radius `4px`
- Same typography
- Hover: background fills to `rgba(255,255,255,0.06)` over 150ms
- Use case: nav-utility actions, tertiary CTAs

**Text** — inline editorial actions:
- Background transparent, text `#1fd5f9`, no border
- Same `Public Sans 14/500`
- Decoration: arrow → indicator slides in on hover
- Use case: "Read more", "View documentation", "See pricing"

### Hero Bands

**Dark Hero (default)** — primary hero on every page:
- Background `#0a0a0a` near-black, text `#ffffff`
- Display headline in `Public Sans 72/300 -1.8px` pure white
- Subtle cyan waveform/pulse decoration behind the text at 0.15-0.35 alpha oscillating over 2000ms
- One cyan primary + one outline-secondary, side-by-side
- Padding `128px 48px`

### Cards

**Feature Card** — primary card on dark canvas:
- Background `#1a1a1a` surface, text `#ffffff`, radius `10px`, border `1px solid #2a2a2a`, padding `32px`
- Layout: icon top-left (32×32 in cyan), title in `display-md 32/300 -0.8px`, body in `body 16/400 #a8a8a8`, button-text below
- Hover: border-color shifts from `#2a2a2a` to `#1fd5f9` over 200ms (color-only, no transform, no shadow change)
- Use case: feature grid on homepage, product cards

**Code Card** — live syntax-highlighted code sample:
- Background `#0a0a0a` near-black, text `#a8a8a8`, radius `16px`, border `1px solid #2a2a2a`, padding `32px`
- Font `JetBrainsMono 14/400` with `1.6` line-height
- Syntax highlighting: cyan `#1fd5f9` for keywords, magenta `#ff45e6` for strings, muted grey for comments
- Use case: API code samples, agent-build code demonstrations

### Metric Surfaces

**Metric Cell** — engineering-spec callout:
- Transparent background
- Value in `Public Sans 56/300 -1.4px` pure white
- Label below in `metric-label 12/500 0.6px uppercase` muted
- Padding `24px 0`
- Use: latency stats, throughput numbers, customer metrics

### Forms & Inputs

**Text Input**:
- Background `#1a1a1a`, text `#ffffff`, border `1px solid #2a2a2a`, radius `8px`
- Padding `10px 14px`, height `40px`
- Font `Public Sans 14/400`
- Focus: border-color shifts to `#1fd5f9`; ring `2px solid #1fd5f9` at 2px offset

### Tags & Badges

**Badge Pill (Cyan)** — small uppercase pill on dark:
- Background `#0a3742` (cyan-soft, deep desaturated cyan), text `#1fd5f9`, radius `9999px`
- Padding `4px 10px`, font `eyebrow 12/500 0.6px uppercase`
- Use: "BETA", "NEW", "SOC 2 COMPLIANT" callouts

**Badge Pill (Magenta)** — for AI-agent / physical-AI callouts:
- Background `rgba(255, 69, 230, 0.15)`, text `#ff45e6`, radius `9999px`
- Same dimensions
- Use: "AI AGENTS", "PHYSICAL AI" sub-program callouts

### CTA Band

**CTA Band Dark** — pre-footer band:
- Background `#0a0a0a`, text `#ffffff`
- Centered display headline `Public Sans 48/300 -1.2px`
- Single cyan primary CTA centered below
- Cyan waveform pulse beneath the CTA at low opacity
- Padding `96px` vertical

### Navigation

**Top Nav** — default nav on every page:
- Background `rgba(10, 10, 10, 0.85)` near-black with backdrop-filter blur 16px, text `#ffffff`, height `64px`, border-bottom `1px solid #1f1f1f`, sticky
- Layout: LiveKit wordmark left + horizontal menu (Products / Solutions / Customers / Pricing / Docs) center + utilities (Sign in, Contact sales, Start building) right
- Menu items in `Public Sans 14/500`
- Hover: subtle cyan underline grows beneath active item over 150ms

### Footer

**Footer Dark** — closing footer on every page:
- Background `#0a0a0a`, text `#7a7a7a`, border-top `1px solid #1f1f1f`
- 5-column link list at desktop covering Products / Developers / Customers / Resources / Company
- Padding `64px 48px`
- Footer links hover to `#1fd5f9`

## 5. Layout Principles

### Spacing System
- **Base unit:** 4px.
- **Scale:** `4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128`.
- **Section padding:** 96px for major bands; 128px reserved for the homepage hero.
- **Card internal padding:** 32px for feature cards.
- **Gutters:** 24px between cards in 3-up grids.

### Grid & Container
- Max content width: **1280px** on editorial bands.
- Editorial body: 12-column grid.
- Feature card grids: 3-up at desktop, 2-up at tablet, 1-up at mobile.
- Footer: 5-column at desktop.

### Whitespace Philosophy
Generous dev-tools editorial pacing. The hero runs 720px. Body sections sit in 96px-padded layouts with disciplined density. The dark canvas reads denser than white at the same content count — LiveKit lets that work for it, packing more value-prop into each viewport without feeling cramped.

### Section Cadence
The homepage rhythm: hero (dark) → eyebrow + display headline → 3-up feature card grid → code-card demo → metric band → customer-logo strip → CTA-band → footer-dark. Code cards appear at every key product-feature moment as proof-by-syntax.

## 6. Shapes & Radius Scale

| Tier | Token | Value | Use |
|------|-------|-------|-----|
| None | `none` | 0 | Tabular containers (rare) |
| Tight | `xs` | 2 | Tight chips |
| CTA | `sm` | 4 | Primary/secondary CTA radius |
| Comfortable | `md` | 6 | Secondary cards, compact UI |
| Input | `lg` | 8 | Text inputs, dropdowns |
| Card | `xl` | 10 | Primary feature cards |
| Code/Photo | `xxl` | 16 | Code blocks, photo containers |
| Pill | `pill` | 9999 | Avatar plates, badge pills |

The **4px CTA radius** sits engineered-small. There is no compound-radius geometry on the site.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 (Flat) | `#0a0a0a` canvas, no shadow | Body bands, footer, content surfaces |
| 1 (Card) | `#1a1a1a` surface + `1px solid #2a2a2a` border, no shadow | Feature cards |
| 2 (Hover Card) | Border shifts to `#1fd5f9` cyan, no transform, no shadow | Hovered feature card |
| 3 (Elevated Surface) | `#1a1a1a` surface for nested cards | Inset content blocks |
| 4 (Modal) | `rgba(0,0,0,0.6) 0 32px 64px -16px` | Dialogs |
| 5 (Glow Decorative) | `0 0 24px rgba(31, 213, 249, 0.25)` | Cyan waveform pulse — decorative, not card chrome |

### Shadow Philosophy
LiveKit uses **restrained shadow tiers**. Cards rely on border-color elevation (default `#2a2a2a` → hover `#1fd5f9`) rather than drop shadows. The cyan glow is decorative — used on waveform/pulse motifs to reinforce the realtime-infra brand promise, not as card chrome. The single drop-shadow tier is the modal dialog. Surface brightness steps (`#0a0a0a` → `#141414` → `#1a1a1a` → `#2a2a2a`) carry most structural elevation.

### Decorative Depth
- **Cyan waveform/pulse** at low alpha (0.15-0.35) oscillating over 2000ms — the realtime-infra brand promise visualized.
- **Border-color hover** shifts from hairline grey to brand cyan — the elevation IS the brand.
- **Surface brightness steps** carry structural elevation.

## 8. Interaction & Motion

### Easing Curves
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — material-style ease for most micro-interactions
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — stronger entrance for hero band reveals

### Duration Buckets
- **Fast** (150ms): button background-color transitions, link hover shifts
- **Standard** (200ms): card border-color shift, hover state changes
- **Slow** (300ms): section entrance fades, modal entrance
- **Pulse** (2000ms): cyan waveform glow oscillation

### Per-Component Micro-States
- **Button Primary** — hover: background-color transitions to `#0fb8de` over 150ms. No transform. Active: background drops to `#0a9bbe`.
- **Button Secondary** — hover: border-color shifts to `#1fd5f9`, text shifts from `#a8a8a8` to `#ffffff` over 200ms.
- **Button Ghost** — hover: background fills to `rgba(255,255,255,0.06)` over 150ms.
- **Feature Card** — hover: border-color shifts from `#2a2a2a` to `#1fd5f9` over 200ms. No transform, no shadow.
- **Link** — hover: color shifts from `#1fd5f9` to `#0fb8de` over 150ms.
- **Cyan Waveform** — continuous: glow opacity oscillates `0.15 → 0.35 → 0.15` over 2000ms ease-in-out.
- **Top Nav** — scroll: backdrop-filter blur intensifies from 8px to 16px, border-bottom appears as page scrolls.

### Page Transitions
Page-to-page: 200ms cross-fade. Hero text fade-up entrance over 400ms emphasized.

### Reduced Motion Strategy
Respects `prefers-reduced-motion: reduce`. Under reduced motion:
- Cyan waveform pulse becomes static (no opacity oscillation)
- All scroll-triggered animations collapse to opacity transitions
- Hover states remain (color and border-color shifts are not motion-coded)

## 9. Accessibility & A11y

### Contrast Pairs (WCAG)
- **Text on Canvas**: `#ffffff` on `#0a0a0a` = 19.2:1 — AAA at all sizes
- **Body on Canvas**: `#a8a8a8` on `#0a0a0a` = 7.0:1 — AAA at body sizes
- **Text on Brand**: `#0a0a0a` on `#1fd5f9` = 12.5:1 — AAA
- **Link on Canvas**: `#1fd5f9` on `#0a0a0a` = 11.2:1 — AAA
- **Muted on Canvas**: `#7a7a7a` on `#0a0a0a` = 4.5:1 — AA Normal at body sizes

### Focus Indicators
- **Ring color**: `#1fd5f9` (LiveKit cyan)
- **Ring style**: `2px solid` at `2px` offset from element's outer edge
- **Focus-visible only**: ring appears only on keyboard focus, not mouse-click focus

### ARIA Patterns
- **Combobox** (search, select dropdowns): `role="combobox"` with `aria-expanded`, `aria-controls`, `aria-activedescendant`.
- **Listbox** (dropdown options): `role="listbox"` with `aria-selected`.
- **Dialog** (modals, sign-in, request-demo): `role="dialog"` with `aria-modal="true"`, `aria-labelledby`, focus trap.
- **Tabs** (docs navigation, pricing-tier toggle): `role="tablist"` with `aria-selected`. Arrow-key navigation.
- **Code block**: `<pre><code>` with `aria-label="Code sample"` and language attribute.
- **Live region** (waveform): decorative cyan-pulse marked `aria-hidden="true"` so screen readers don't try to announce it.

### Keyboard Nav Order
Tab order: skip-to-content → LiveKit wordmark (home) → primary nav (Products, Solutions, Customers, Pricing, Docs) → utilities (Sign in, Contact sales, Start building) → hero CTAs → editorial body content → footer columns.

### Screen Reader Hints
- LiveKit wordmark: `aria-label="LiveKit home"`.
- Code samples: wrapped in `<pre><code>` with `aria-label` describing language.
- Decorative cyan pulse / waveform: `aria-hidden="true"`.
- Metric values: `aria-label="50 milliseconds, latency"` for full unit context.

### Reduced Motion Handling
`@media (prefers-reduced-motion: reduce)` overrides cyan-pulse, scroll-triggered transitions. Documented in §8.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | < 640px | Hero h1 72→32px; feature card grid 1-up; nav collapses to hamburger |
| Tablet | 640–1024px | Hero h1 56px; feature card grid 2-up; nav still hamburger |
| Desktop | 1024–1280px | Hero h1 72px; feature card grid 3-up; horizontal nav appears |
| Wide | > 1280px | Editorial body content caps at 1280px |

### Touch Targets
- Primary CTA at 40px height — meets WCAG 44 with 4px padding extending tap area.
- Nav items render with 20px vertical padding for an effective 48px tap area on mobile hamburger.

### Collapsing Strategy
- **Top nav** switches to hamburger below 1024px.
- **Hero text**: maintains aspect ratio with proportional size reduction.
- **Feature card grid**: 3-up → 2-up → 1-up.
- **Code card**: full-width at all breakpoints; horizontal scroll preserved for wide code samples.
- **Footer**: 5-column at desktop, accordion-collapsed at mobile.

### Image Behavior
- LiveKit uses minimal photography — most depth is typographic.
- Customer logos and case-study screenshots use AVIF + WebP fallback + JPEG floor.

### Container Queries
Used selectively on docs-sidebar layouts.

## 11. Content & Voice

### Tone
**Realtime-infrastructure confident, technical, slightly cool.** The voice reads like a senior systems engineer who's shipped real-time voice and video at scale — direct, technical, occasionally dry-witty. There is no marketing-jargon, no "innovative" or "revolutionary." LiveKit talks about specific concerns: latency, codec selection, agent orchestration, physical AI integration. The tone respects the reader's technical literacy — this is infra for engineers who already know what infra is.

### Microcopy Patterns
- **Buttons**: action-verb + noun, sentence-case. "Start building", "Get started", "Contact sales", "Read the docs". Never uppercase.
- **Eyebrows**: uppercase context cue. "VOICE AI", "LIVE STREAMING", "PHYSICAL AI", "BETA".
- **Error message recipe**: `[What went wrong]. [What to do.]` — direct and technical. "Couldn't connect to room. Check your token signing and try again."
- **Success confirmations**: terse and dry. "Connection established." "Agent deployed." No exclamation marks.
- **Form labels**: capitalized noun phrases. "Email", "Project name", "Workspace".

### Empty States
- **No projects**: "Create your first project to start building."
- **No agents**: "Deploy an agent to see realtime sessions here."
- **API errors**: "API request failed. Check your auth token."

### CTA Verb Conventions
- **Start building** — primary verb on signup CTAs (the brand's signature action-verb)
- **Get started** — alternative primary on landing pages
- **Contact sales** — for enterprise contact (LiveKit uses "Contact sales" rather than "Talk to us")
- **Read the docs** — for documentation
- **View pricing** — for pricing page
- **Sign in** — for returning users (never "Login")

## 12. Dark Mode & Theming

LiveKit is **dark-by-default and rarely renders light**. Light surfaces appear only inside scoped contexts — docs viewer (some sub-routes), certain customer case-study pages where photographs require light grounds. The site never offers a user-facing light/dark toggle.

When light surfaces appear, the token swap is local:
- `bg`: `#0a0a0a` → `#ffffff`
- `text`: `#ffffff` → `#0a0a0a`
- `text-body`: `#a8a8a8` → `#5a5a5a`
- `border`: `#2a2a2a` → `#e0e0e0`
- `surface`: `#1a1a1a` → `#f5f5f5`
- `brand` and `on-brand` stay unchanged: cyan voltage renders identically. (Note: `#1fd5f9` on white is 2.4:1, fails AA; on light surfaces, primary CTAs use `#0fb8de` darker cyan to maintain AA contrast.)

The site never inverts globally; dark is the canonical canvas.

## 13. Lineage & Influences

LiveKit's digital surface is squarely in the Vercel/Linear/Stripe lineage of dev-tools editorial — near-black canvas, light-weight display typography, single-color brand voltage, sharp small-radius corners. The light 300-weight display is the most distinctive choice: where most dev-tools sites use weight 600-700 for headlines, LiveKit follows the Stripe-sohne-300 discipline.

The cyan voltage `#1fd5f9` is electric-bright and signals "realtime, signal, voice" against the warm near-black ground. Cyan waveform/pulse decorative motifs reinforce the realtime-infra brand promise. The synthwave-aesthetic cyan-on-near-black palette tradition is the visual heritage; the dev-tools-editorial discipline is the contemporary adaptation.

What it rejects: white SaaS canvas, bold-display headlines, pill CTAs, ornamental gradients, marketing-jargon, anything that competes with the cyan-on-black signal.

**Named influences:**
- Stripe — light-weight display (300) discipline, single-color brand voltage (https://stripe.com)
- Vercel — near-black canvas, dev-tools confident voice, sharp small-radius corners (https://vercel.com)
- Linear — typographic-precision developer-tools editorial confidence (https://linear.app)
- Twilio — voice/realtime communications brand vocabulary, signal-as-decoration (https://www.twilio.com)
- Synthwave / cyberpunk-aesthetic — electric cyan-on-near-black palette tradition

## 14. Do's and Don'ts

### Do
- Use warm near-black `#0a0a0a` as canvas — slight blue undertone, never pure black.
- Reserve LiveKit cyan `#1fd5f9` for primary CTAs, the waveform mark, link colors, focus rings, syntax-highlight keywords — used scarcely.
- Use Public Sans at weight 300 for display sizes — the brand's light-weight signature.
- Apply -1.8px to -0.4px negative tracking on display sizes only.
- Use sentence-case CTAs in Public Sans 14/500 — friendly-developer voice.
- Set primary CTAs at 4px corners; feature cards at 10px; code blocks at 16px.
- Use border-color elevation on cards (default `#2a2a2a` → hover `#1fd5f9`) — no drop shadows.
- Place subtle cyan waveform/pulse decoration behind hero text — the realtime-infra brand made visible.
- Use JetBrainsMono for code with `ss01` enabled for IDE-character glyphs.
- Sandwich code-card demos at every key product-feature moment — proof by syntax.

### Don't
- Don't use pure black canvas. LiveKit uses `#0a0a0a` warm near-black.
- Don't bold display copy. Public Sans at 300 is the confident-light signature.
- Don't use uppercase CTA labels. Sentence-case is the voice.
- Don't introduce a saturated brand color other than cyan, scoped magenta (AI/physical-AI), and yellow (warning).
- Don't use pill CTAs. Sharp 4px corners are the brand button.
- Don't add drop-shadow tiers under cards. Border-color elevation is the discipline.
- Don't use Inter as body. Public Sans is the brand sans.
- Don't add ornamental gradients. The site is near-black + cyan + occasional magenta.
- Don't compress the cyan waveform pulse to be loud. Low alpha (0.15-0.35) is the brand signature.
- Don't use exclamation marks. LiveKit is dry.
- Don't add italic display copy. Public Sans is always upright.

## 15. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / Brand / Links: `#1fd5f9` (LiveKit Cyan)
- Background: `#0a0a0a` (Near-Black Canvas)
- Surface: `#1a1a1a` (Canvas-Elevated)
- Headings: `#ffffff` (Ink White)
- Body text: `#a8a8a8` (Body Default)
- Muted: `#7a7a7a`
- Border: `#2a2a2a` (Hairline on dark)
- CTA hover: `#0fb8de`
- Cyan glow: `rgba(31, 213, 249, 0.25)`
- Magenta accent: `#ff45e6` (AI/physical-AI scoped)
- Focus ring: `#1fd5f9` 2px

### Example Component Prompts
- "Create a LiveKit hero band on warm near-black `#0a0a0a` canvas, 720px tall. Above the headline, an uppercase cyan-soft eyebrow 'VOICE AI' in Public Sans 12/500 with 0.6px tracking. The headline 'Build voice, video, and physical AI agents' renders in Public Sans 72px weight 300 with -1.8px letter-spacing in pure white. Behind the text, a subtle cyan `#1fd5f9` waveform/pulse decoration oscillates at 0.15-0.35 alpha over 2000ms ease-in-out. Below the headline, two side-by-side CTAs: a cyan `#1fd5f9` 'Start building' button (Public Sans 14/500 sentence-case, 10×20 padding, 40px tall, 4px corners, near-black `#0a0a0a` text) and a near-black outline 'Contact sales' button (1px solid `#2a2a2a` border, muted text `#a8a8a8`, same dimensions). On hover of the secondary, border-color shifts to cyan and text shifts to white."
- "Design a LiveKit feature card on `#1a1a1a` surface inside a dark band: 10px radius, 1px solid `#2a2a2a` border, 32px padding. Top-left a 32×32 cyan icon. Title in Public Sans 32/300 -0.8px white, 16px gap, body copy in Public Sans 16/400 `#a8a8a8`, 24px gap, and a 'Read more →' text button in Public Sans 14/500 cyan with arrow indicator sliding in on hover. On card hover: border-color shifts from `#2a2a2a` to cyan `#1fd5f9` over 200ms — no transform, no shadow."
- "Build a LiveKit code card: pure near-black `#0a0a0a` background, 16px radius, 1px solid `#2a2a2a` border, 32px padding. Code rendered in JetBrainsMono 14/400 with 1.6 line-height and `ss01` OpenType enabled. Syntax highlighting: keywords (`const`, `function`, `await`) in cyan `#1fd5f9`, strings in magenta `#ff45e6`, comments in muted grey `#7a7a7a`. Display a working LiveKit Agents code sample (Voice agent setup in TypeScript)."
- "Create a LiveKit metric cell: transparent background, 24px vertical padding, value in Public Sans 56/300 with -1.4px tracking pure white ('50ms'), label below in Public Sans 12/500 with 0.6px uppercase tracking muted ('GLOBAL LATENCY'). Group four metric cells in a 4-up row at desktop on a dark band."
- "Build a LiveKit top nav: 64px tall on `rgba(10, 10, 10, 0.85)` translucent near-black with backdrop-filter blur 16px, sticky. LiveKit wordmark left in white at 24px height (with cyan waveform mark to the left of the wordmark). Horizontal menu (Products / Solutions / Customers / Pricing / Docs) center in Public Sans 14/500 white. Right side: 'Sign in' (ghost button), 'Contact sales' (outline secondary), 'Start building' (cyan primary CTA, 4px corners, 40px tall). On scroll, backdrop blur intensifies and 1px solid `#1f1f1f` border-bottom appears."
- "Design a LiveKit pre-footer CTA band: near-black `#0a0a0a` background, centered display headline 'Start building today.' in Public Sans 48/300 -1.2px white, 96px vertical padding. Beneath the headline, a subtle cyan waveform pulse decoration. Single cyan primary 'Start building' CTA centered below in 4px corners, 40px tall."

### Iteration Guide
1. Focus on ONE component at a time. Reference its YAML key (`button-primary`, `feature-card`, `code-card`).
2. Variants live as separate entries inside `components:`.
3. CTAs default to 4px corners. Cards 10px. Code blocks 16px. Inputs 8px. Use the explicit ladder.
4. Use color tokens (`brand`, `text`, `surface`) — never inline hex on multiple components.
5. Hover states on cards shift border-color from grey to cyan — no transform, no drop shadow.
6. Public Sans at weight 300 for display (the signature), 400 for body, 500 for CTAs/eyebrows, 600 for titles.
7. LiveKit cyan stays scarce — primary CTAs, waveform mark, links, syntax keywords, focus rings only.
8. Use the explicit spacing ladder (4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128). Section padding 96px; hero 128px.
9. Place subtle cyan waveform/pulse decorations behind hero text — low-alpha, oscillating, the realtime-infra brand made visible.
10. Code cards appear at every key product-feature moment — proof by syntax over marketing copy.
