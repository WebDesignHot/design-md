---
name: Astro
tagline: Cosmos navy canvas with violet-to-orange brand gradient — Mona Sans display, Inter body, Astro''s star-chart MPA framework dressed as an observatory dashboard.
author: webdesignhot
source_url: https://astro.build
spec: design.md/v1.5
quality: curated
featured: true
categories: [dev-tools, frameworks]
tags: [dark, structured, sans, spacious, cool, multi-theme, gradient]
preview_swatch: ['#060913', '#ff5d01', '#a374ff']
related: [vercel, vite, tailwindcss]
description: 'Astro''s marketing site behaves like an observatory dashboard. The canvas runs to `#060913` — deep cosmos navy, near-black but unmistakably blue under any reasonable display calibration — and the type stack leads with **Mona Sans**, GitHub''s open variable grotesk, used at heavy weights for an editorial-engineered register. The signature gesture is a violet-to-orange brand gradient: `#a374ff` flowing diagonally into `#ff5d01`, the same hue pair that lives in the Astro rocket glyph. Code surfaces are first-class — Inter for prose, IBM Plex Mono on a lifted `#0d1117` panel for `.astro` syntax — because Astro is sold to developers via its content-first MPA architecture, islands hydration, and zero-JS-by-default philosophy. The starfield motifs and rocket warmth temper the engineered grid; the underlying structure is dense, twelve-column, and 96px-rhythmed.'

colors:
  # Primary
  bg: '#060913'                          # deep cosmos navy — page canvas, near-black with intentional blue
  bg-soft: '#0d1117'                     # secondary surface (matches GitHub dark for code blocks)
  bg-deep: '#02040a'                     # darkest tier — footer, modal backdrop
  surface: '#11162a'                     # card panel, lifted from bg with subtle blue tint
  surface-strong: '#1a2040'              # hover/active surface
  surface-elevated: '#222850'            # popover, dropdown, tooltip surface
  text: '#f2f6fa'                        # primary text on dark — slight cool tint
  text-muted: '#bfc1c9'                  # secondary copy, nav links
  text-soft: '#8a8fa3'                   # captions, metadata, footer
  text-faint: '#5a5e72'                  # disabled, decorative
  # Brand & gradient
  brand: '#ff5d01'                       # signature Astro orange (rocket glyph)
  brand-hover: '#e54e00'                 # pressed state
  brand-deep: '#c43f00'                  # active/depressed
  accent: '#a374ff'                      # violet — partner in the brand gradient
  accent-hover: '#8e5dff'                # pressed accent
  accent-soft: '#7611a6'                 # deep purple background tint
  accent-deep: '#4c0c70'                 # darkest violet for backgrounds
  gradient-from: '#a374ff'               # violet start
  gradient-to: '#ff5d01'                 # orange end
  gradient-mid: '#d465a8'                # midpoint for radial halos
  on-brand: '#ffffff'                    # white text on orange/violet fills
  # Interactive
  link: '#bfc1c9'                        # default body link
  link-hover: '#ff5d01'                  # orange on hover
  selected-bg: '#1a2040'                 # selected surface
  disabled: '#5a5e72'                    # disabled control
  # Borders
  border: '#ffffff14'                    # 8% white hairline — never solid grey
  border-strong: '#ffffff26'             # ~15% white for emphasized rules
  border-subtle: '#ffffff0a'             # 4% white for quietest division
  border-brand: 'rgba(255, 93, 1, 0.40)' # orange-tinted hairline on hover cards
  # Semantic
  success: '#17c964'                     # green for shipped/passing
  success-bg: 'rgba(23, 201, 100, 0.12)' # tinted success ground
  warning: '#f5a524'                     # amber for caution
  warning-bg: 'rgba(245, 165, 36, 0.14)'
  danger: '#f31260'                      # red for error
  danger-bg: 'rgba(243, 18, 96, 0.14)'
  info: '#a374ff'                        # violet doubles as info
  info-bg: 'rgba(163, 116, 255, 0.14)'

typography:
  display:
    family: '"Mona Sans", "Mona Sans Variable", "Obviously", "obviously-fallback", system-ui, sans-serif'
    weights: [500, 600, 700, 800, 900]
    opentype-features: ['ss01', 'ss02', 'cv01', 'liga', 'kern']
  body:
    family: 'Inter, "Inter Variable", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'
    weights: [400, 500, 600, 700]
    opentype-features: ['cv11', 'ss03', 'liga', 'kern']
  mono:
    family: '"IBM Plex Mono", "JetBrains Mono", ui-monospace, "Cascadia Code", Menlo, Consolas, monospace'
    weights: [400, 500, 600]
    opentype-features: ['liga', 'tnum', 'zero']
  scale:
    display-hero:    { size: 96, weight: 800, lineHeight: 1.02, tracking: '-0.03em', family: display, opentype: 'ss01 ss02' }
    display:         { size: 80, weight: 800, lineHeight: 1.05, tracking: '-0.025em', family: display }
    h1:              { size: 64, weight: 700, lineHeight: 1.08, tracking: '-0.02em', family: display }
    h2:              { size: 48, weight: 700, lineHeight: 1.12, tracking: '-0.018em', family: display }
    h3:              { size: 32, weight: 700, lineHeight: 1.20, tracking: '-0.012em', family: display }
    h4:              { size: 24, weight: 600, lineHeight: 1.30, tracking: '-0.005em', family: display }
    h5:              { size: 20, weight: 600, lineHeight: 1.35, family: display }
    eyebrow:         { size: 13, weight: 600, lineHeight: 1.40, tracking: '0.08em', family: display, transform: uppercase }
    body-large:      { size: 20, weight: 400, lineHeight: 1.55, family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.60, family: body }
    body-small:      { size: 14, weight: 400, lineHeight: 1.55, family: body }
    caption:         { size: 13, weight: 500, lineHeight: 1.45, family: body }
    caption-tabular: { size: 13, weight: 500, lineHeight: 1.45, family: mono, opentype: 'tnum' }
    label:           { size: 13, weight: 600, lineHeight: 1.30, family: display, transform: uppercase, tracking: '0.05em' }
    code:            { size: 14, weight: 400, lineHeight: 1.65, family: mono, opentype: 'liga' }
    code-inline:     { size: 13, weight: 500, lineHeight: 1.50, family: mono }
    code-micro:      { size: 12, weight: 400, lineHeight: 1.40, family: mono }
    button:          { size: 15, weight: 600, lineHeight: 1.20, family: display }

radius:
  micro: 2
  sm: 4
  md: 8
  lg: 12
  xl: 16
  card: 16
  hero: 20
  pill: 9999

spacing:
  base: 4
  scale: [1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 48, 64, 96, 128, 160]

layout:
  page-width: 1280
  prose-width: 720
  site-gutter: 'clamp(20px, 4vw, 48px)'
  header-height: 64
  grid-columns: 12
  section-rhythm: '96-128px'

components:
  button-primary:
    background: '#ff5d01'
    text: '#ffffff'
    padding: '12px 22px'
    radius: 8
    border: 'none'
    font: 'Mona Sans 600 / 15px'
    hover-bg: '#e54e00'
    active-bg: '#c43f00'
    use: 'Solid orange CTA — primary actions: Get started, Read docs.'
  button-gradient:
    background: 'linear-gradient(135deg, #a374ff 0%, #ff5d01 100%)'
    text: '#ffffff'
    padding: '13px 24px'
    radius: 10
    font: 'Mona Sans 600 / 15px'
    use: 'Hero gradient CTA — the violet-to-orange signature gesture.'
  button-gradient-outline:
    background: 'transparent'
    text: '#f2f6fa'
    padding: '12px 22px'
    radius: 10
    border: '1.5px solid'
    border-image: 'linear-gradient(135deg, #a374ff, #ff5d01) 1'
    font: 'Mona Sans 600 / 15px'
    use: 'Hero outline variant — gradient border on transparent fill.'
  button-ghost:
    background: 'transparent'
    text: '#bfc1c9'
    padding: '12px 22px'
    radius: 8
    border: '1px solid #ffffff14'
    font: 'Mona Sans 500 / 15px'
    hover-bg: '#ffffff0a'
    hover-text: '#f2f6fa'
    use: 'Secondary action — quiet outline on dark canvas.'
  card:
    background: '#11162a'
    border: '1px solid #ffffff14'
    radius: 16
    padding: '28px'
    hover-border: '#ffffff26'
    use: 'Feature card — lifted surface, hairline divider, no shadow.'
  card-starfield:
    background: 'radial-gradient(ellipse at top, rgba(163, 116, 255, 0.18) 0%, #11162a 50%)'
    border: '1px solid rgba(163, 116, 255, 0.30)'
    radius: 20
    padding: '40px'
    use: 'Hero card with violet halo — the brand''s signature decorative surface.'
  input:
    background: '#0d1117'
    border: '1px solid #ffffff14'
    radius: 8
    padding: '12px 16px'
    font: 'Inter 400 / 15px'
    placeholder-color: '#8a8fa3'
    focus-ring: '0 0 0 2px #ff5d01'
    use: 'Form fields, search bar.'
  badge-eyebrow:
    background: 'rgba(255, 93, 1, 0.12)'
    text: '#ff5d01'
    padding: '4px 10px'
    radius: 4
    font: 'Mona Sans 600 / 12px / uppercase / 0.05em'
    use: 'Section eyebrow — orange tint on dark.'
  badge-violet:
    background: 'rgba(163, 116, 255, 0.14)'
    text: '#a374ff'
    padding: '4px 10px'
    radius: 4
    font: 'Mona Sans 600 / 12px / uppercase'
    use: 'Secondary tag — violet partner colour.'
  code-block:
    background: '#0d1117'
    border: '1px solid #ffffff0a'
    radius: 12
    padding: '20px 24px'
    font: 'IBM Plex Mono 400 / 14px / 1.65 line-height'
    use: '.astro code samples — first-class brand surface.'
  nav-link:
    background: 'transparent'
    text: '#bfc1c9'
    padding: '8px 14px'
    radius: 6
    font: 'Inter 500 / 15px'
    hover-text: '#f2f6fa'
    use: 'Top-nav primary link.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-launch: 'cubic-bezier(0.16, 1, 0.3, 1)'
  duration-instant: 80
  duration-fast: 150
  duration-standard: 220
  duration-slow: 360
  duration-page: 480
  reduced-motion: 'respects prefers-reduced-motion: reduce — all transitions become opacity-only, parallax disabled, durations halved.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  none: 'none'
  ambient: 'rgba(0, 0, 0, 0.30) 0 1px 3px'
  standard: 'rgba(0, 0, 0, 0.40) 0 8px 24px -8px'
  elevated: 'rgba(0, 0, 0, 0.50) 0 18px 48px -16px'
  glow-orange: '0 0 32px rgba(255, 93, 1, 0.28)'
  glow-violet: '0 0 48px rgba(163, 116, 255, 0.32)'
  ring: '0 0 0 2px #ff5d01'

accessibility:
  contrast-text-on-bg: 15.2              # #f2f6fa on #060913 — AAA at all sizes
  contrast-text-muted-on-bg: 9.4         # #bfc1c9 on #060913 — AAA at body sizes
  contrast-text-on-brand: 4.6            # #ffffff on #ff5d01 — AA at body sizes
  contrast-text-on-accent: 5.1           # #ffffff on #a374ff — AA at body sizes
  focus-ring: '2px solid #ff5d01 with 2px offset on dark canvas'
  reduced-motion-honored: true
  keyboard-nav: 'visible focus on every interactive surface; tab order matches visual flow; skip-link to main content.'
  aria-patterns: 'nav uses aria-label="Main"; theme toggle uses aria-pressed; code samples expose copy-to-clipboard via aria-label'

dark-mode: 'native'                      # Astro is dark-first — light mode is documented but the brand canvas is dark navy

lineage:
  summary: |
    Astro is a content-first MPA (multi-page application) framework built around
    islands architecture, ship-zero-JS-by-default, and `.astro` component syntax.
    The marketing site dresses that engineering thesis as an **observatory
    dashboard** — a deep cosmos-navy canvas, a violet-to-orange brand gradient
    quoting the rocket glyph, and code blocks treated as first-class brand
    surface rather than supporting chrome. Mona Sans (GitHub''s open variable
    grotesk) handles display weights with subtle negative tracking; Inter
    carries body and UI in a structured, restrained register; IBM Plex Mono
    holds every code sample on a lifted `#0d1117` panel that matches GitHub''s
    dark theme. The signature decorative gesture is a violet-tinted radial
    halo behind hero illustrations — a subtle bloom that reads as starlight
    rather than gradient mesh.
  influences:
    - name: Vercel
      role: Dark-canvas dev-tool template — near-black bg with restrained accents and tight type ladder.
      url: https://vercel.com
    - name: GitHub
      role: Mona Sans display family + #0d1117 code-panel ground; the dark IDE surface that Astro inherits visually.
      url: https://github.com
    - name: Stripe Docs
      role: Code-as-brand-surface treatment — mono panels foregrounded as primary identity rather than buried in chrome.
      url: https://stripe.com/docs
    - name: Wired Magazine
      role: Editorial display weight and confident, oversized headline rhythm at 80–96px.
      url: https://www.wired.com
    - name: Linear
      role: Tonal-blue layering for depth instead of explicit shadows.
      url: https://linear.app
---

## 1. Visual Theme & Atmosphere

Astro''s marketing site is a star chart pretending to be a framework homepage. The canvas runs to `#060913` — deep cosmos navy, almost black but unmistakably blue under any reasonable display calibration — and the type stack leads with **Mona Sans**, GitHub''s open variable grotesk that reads as both editorial and engineered. The signature gradient runs from a violet `#a374ff` into the warm `#ff5d01` orange that lives in the Astro rocket glyph; that diagonal sweep is the identity, repeated on hero text outlines, the wordmark, and the primary brand-CTA pair.

Where Vercel''s dark mode is monochromatic and engineered (one warm accent against pure neutral), Astro''s dark mode is **astronomical** — there is intentional warmth in the orange accent, intentional whimsy in the starfield motifs, and intentional density in the documentation grid. The brand reads as "framework with a soul," distinct from the cooler Vite or Bun pages and from the corporate-restrained Next.js homepage. Astro is the only framework brand that ships emotional warmth without tipping into consumer-app territory.

The page composition behaves like an observatory: hero zones run tall (often 800px+) with violet radial halos behind illustrations, feature rails hold dense documentation cards on a 12-column grid, and code samples are foregrounded as primary brand surface — not tucked into a sidebar but elevated as the centre-stage proof that `.astro` syntax is the value proposition. Section rhythm is 96–128px; whitespace is generous but not Anthropic-magazine-loose; the cadence reads as "engineered with care."

Atmospheric vocabulary: *cosmos-navy, observatory-dashboard, star-chart, rocket-warmth, violet-halo, engineered-prose, mono-panel-as-brand, content-first, MPA-canvas, edge-island, dark-mode-native.* The page is what an open-source framework looks like when its design team treats the marketing site as a continuation of the developer experience rather than an unrelated brochure.

**Key Characteristics**

- Cosmos navy `#060913` canvas — never pure black, always intentional blue
- Violet-to-orange brand gradient `#a374ff → #ff5d01` — the diagonal signature
- Mona Sans display at 700–800 weight with negative tracking — engineered-editorial
- Inter for body — structured, calm, GitHub-adjacent
- IBM Plex Mono for code on lifted `#0d1117` panels — first-class brand surface
- 8% white hairline borders (`#ffffff14`) — never solid grey, never colour-tinted by default
- Tonal-blue layering for depth — value contrast instead of drop shadows
- Violet radial halos behind hero illustrations — starlight, not gradient mesh
- 96–128px section rhythm — engineered prose pacing
- Dark-mode-native marketing surface — light mode is documented, never default

## 2. Color Palette & Roles

### Primary

- **bg** `#060913` — deep cosmos navy; the defining canvas. Sits between pure black and Linear''s `#08090a`.
- **bg-soft** `#0d1117` — secondary surface for code blocks (matches GitHub dark exactly).
- **bg-deep** `#02040a` — darkest tier for footer and modal backdrop.
- **surface** `#11162a` — card panel, lifted from bg with subtle blue tint.
- **surface-strong** `#1a2040` — hover/active surface.
- **surface-elevated** `#222850` — popover, dropdown, tooltip.
- **text** `#f2f6fa` — primary text; near-white with slight cool tint.
- **text-muted** `#bfc1c9` — secondary copy, nav links.

### Brand & Gradient

- **brand** `#ff5d01` — the signature Astro orange. Used on rocket glyph, primary CTA fill, and link-hover. Sacred — never substituted with arbitrary warm hues.
- **brand-hover** `#e54e00` — pressed state for solid orange buttons.
- **brand-deep** `#c43f00` — active/depressed state.
- **accent** `#a374ff` — violet partner in the brand gradient.
- **accent-hover** `#8e5dff` — pressed violet.
- **accent-soft** `#7611a6` — deep purple background tint for halos.
- **gradient-from / gradient-mid / gradient-to** `#a374ff → #d465a8 → #ff5d01` — the diagonal violet-to-orange sweep, sometimes routed through a magenta midpoint for radial halos.

### Accent

The brand operates on a **single gradient axis**. Decorative violets and orange-pinks are reserved for hero halos and illustration accents; they are *never* introduced as standalone fills. Tags and badges that need colour reach for `rgba(255, 93, 1, 0.12)` or `rgba(163, 116, 255, 0.14)` — tinted versions of the two brand hues, never new colours.

### Interactive

- **link** `#bfc1c9` — default body link inherits muted text colour.
- **link-hover** `#ff5d01` — orange on hover; the brand''s only consistent colour-introducing interactive moment.
- **selected-bg** `#1a2040` — selected nav state, table row.
- **disabled** `#5a5e72` — disabled text and control.
- **focus-ring** orange `#ff5d01` at 2px with 2px offset.

### Neutral Scale

- `#f2f6fa` text — primary
- `#bfc1c9` text-muted — secondary
- `#8a8fa3` text-soft — captions
- `#5a5e72` text-faint — disabled
- `#222850` surface-elevated — popovers
- `#1a2040` surface-strong — hover
- `#11162a` surface — cards
- `#0d1117` bg-soft — code panels
- `#060913` bg — page canvas
- `#02040a` bg-deep — footer

A nine-step warm-blue ramp; transitions between steps are perceptually even rather than mathematically linear, tuned for OLED contrast ranges.

### Surface & Borders

- **border** `#ffffff14` — 8% white hairline; the default divider on every dark surface. Never substituted with solid grey.
- **border-strong** `#ffffff26` — 15% white for emphasised rules and outlined buttons.
- **border-subtle** `#ffffff0a` — 4% white for the quietest division (between table rows, inside code blocks).
- **border-brand** `rgba(255, 93, 1, 0.40)` — orange-tinted hairline for hover states on featured cards.

### Shadow Colors

Shadows on dark canvases must be deeper-than-canvas — there is nothing darker than `#02040a` to lift toward, so Astro relies on **glow shadows** rather than drop shadows. The brand''s signature elevation is a violet or orange glow (`rgba(163, 116, 255, 0.32)` or `rgba(255, 93, 1, 0.28)` blurred at 32–48px), used sparingly behind hero illustrations to suggest starlight bloom. Drop shadows appear only on modals where they are tinted with `rgba(0, 0, 0, 0.50)` to read against the dark surrounding canvas.

### Semantic

- **success** `#17c964` text on `rgba(23, 201, 100, 0.12)` bg — passing tests, shipped state.
- **warning** `#f5a524` text on `rgba(245, 165, 36, 0.14)` bg — caution, deprecation.
- **danger** `#f31260` text on `rgba(243, 18, 96, 0.14)` bg — error, breaking change.
- **info** `#a374ff` text on `rgba(163, 116, 255, 0.14)` bg — note (info doubles as the brand violet, deliberately).

## 3. Typography Rules

### Font Family

- **Display & UI**: `"Mona Sans", system-ui, sans-serif` — GitHub''s open variable grotesk. Slightly wider than Inter, slightly narrower than Söhne. Used at weights 600–800 for display, 500–600 for UI labels.
- **Body**: `Inter, "Inter Variable", ui-sans-serif, system-ui, sans-serif` — the structured, calm, dev-tool default. Body sits at 16px / 1.6 line-height.
- **Mono**: `"IBM Plex Mono", "JetBrains Mono", ui-monospace` — for code samples, terminal output, tabular numerals. IBM Plex Mono is the brand''s mono of choice; JetBrains Mono is the production fallback.
- **OpenType features**: `ss01 ss02` for Mona Sans alternate `a` and `g` in display; `cv11 ss03` for Inter''s alternate single-storey `a` in body; `liga tnum zero` always on for mono.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| Display Hero | Mona Sans | 96px | 800 | 1.02 | -0.03em | ss01 ss02 | Homepage hero ceiling |
| Display | Mona Sans | 80px | 800 | 1.05 | -0.025em | ss01 | Section intro at scale |
| H1 | Mona Sans | 64px | 700 | 1.08 | -0.02em | liga | Page title |
| H2 | Mona Sans | 48px | 700 | 1.12 | -0.018em | liga | Major section |
| H3 | Mona Sans | 32px | 700 | 1.20 | -0.012em | — | Sub-section |
| H4 | Mona Sans | 24px | 600 | 1.30 | -0.005em | — | Card heading |
| H5 | Mona Sans | 20px | 600 | 1.35 | normal | — | Inline emphasis |
| Eyebrow | Mona Sans | 13px | 600 | 1.40 | 0.08em | uppercase | Section pre-label |
| Body Large | Inter | 20px | 400 | 1.55 | normal | cv11 | Lede paragraph |
| Body | Inter | 16px | 400 | 1.60 | normal | cv11 | Default body |
| Body Small | Inter | 14px | 400 | 1.55 | normal | — | Captions, sidebars |
| Caption | Inter | 13px | 500 | 1.45 | normal | — | Image captions, helper |
| Caption Tabular | IBM Plex Mono | 13px | 500 | 1.45 | normal | tnum | Stats, data labels |
| Label | Mona Sans | 13px | 600 | 1.30 | 0.05em | uppercase | UI labels, eyebrows |
| Code | IBM Plex Mono | 14px | 400 | 1.65 | normal | liga | Block code samples |
| Code Inline | IBM Plex Mono | 13px | 500 | 1.50 | normal | — | Inline `code` references |
| Code Micro | IBM Plex Mono | 12px | 400 | 1.40 | normal | — | Footnotes, micro labels |
| Button | Mona Sans | 15px | 600 | 1.20 | normal | — | All button variants |

### Principles

- **Mona Sans display, Inter body, IBM Plex Mono code.** Three roles, three families, no substitutions. Mona Sans is the brand voice; Inter is the prose register; mono is the developer credibility stamp.
- **Display weight is heavy.** 700–800 only on hero and headings. Lighter weights on display sizes look generic — Astro''s headlines earn impact through bulk plus negative tracking.
- **Negative tracking scales with size.** -0.03em at 96px, -0.025em at 80px, -0.02em at 64px, -0.018em at 48px, -0.012em at 32px, normal at 20px and below. Mirrors editorial broadsheet typography.
- **Body is calm and structured.** 16px / 1.6 line-height for body — generous for a dev-tool site, signalling "we expect you to read prose, not just scan."
- **Mono ubiquity in code.** Code samples never use proportional fallback. IBM Plex Mono on `#0d1117` is the brand''s typographic signature.
- **OpenType discipline.** `ss01 ss02` enabled for Mona Sans display alternates (single-storey `a`, looped `g`); `tnum zero` always on for mono so columns of numbers align.
- **Eyebrows are uppercase + tracked.** Section pre-labels use 13px / 600 / uppercase / 0.08em tracking — the GitHub-adjacent label register.

## 4. Component Stylings

### Buttons

**Primary (Solid Orange)**
- Background: `#ff5d01` Astro orange.
- Text: `#ffffff`, Mona Sans 600 / 15px.
- Padding: `12px 22px`. Radius: `8px`. Border: none.
- Hover: bg → `#e54e00`; transition `220ms ease-standard`.
- Active: bg → `#c43f00`.
- Use: Primary CTA — *Get started, Read the docs, View on GitHub.*

**Gradient (Brand)**
- Background: `linear-gradient(135deg, #a374ff 0%, #ff5d01 100%)`.
- Text: `#ffffff`, Mona Sans 600 / 15px.
- Padding: `13px 24px`. Radius: `10px`.
- Hover: brightness 1.08; transition `220ms ease-emphasized`.
- Use: Hero gradient CTA — the violet-to-orange signature gesture. Reserved for one beat per page.

**Gradient Outline**
- Background: transparent. Text: `#f2f6fa`.
- Border: `1.5px solid` with `border-image: linear-gradient(135deg, #a374ff, #ff5d01) 1`.
- Same padding as gradient solid; radius `10px`.
- Hover: bg → `rgba(255, 93, 1, 0.10)`; text colour holds.
- Use: Hero outline variant — gradient border on transparent fill, paired with the solid gradient as a CTA twin.

**Ghost (Secondary)**
- Background: transparent. Text: `#bfc1c9`. Border: `1px solid #ffffff14`.
- Padding: `12px 22px`. Radius: `8px`. Font: Mona Sans 500 / 15px.
- Hover: bg → `#ffffff0a`; text → `#f2f6fa`; border → `#ffffff26`.
- Use: Secondary action — *Learn more, View example, Read the RFC.*

### Cards

**Feature Card**
- Background: `#11162a`. Border: `1px solid #ffffff14`. Radius: `16px`. Padding: `28px`.
- Shadow: none.
- Hover: border → `#ffffff26`; transition `220ms`.
- Use: Documentation card, capability tile, integration listing.

**Starfield Hero Card**
- Background: `radial-gradient(ellipse at top, rgba(163, 116, 255, 0.18) 0%, #11162a 50%)`.
- Border: `1px solid rgba(163, 116, 255, 0.30)`.
- Radius: `20px`. Padding: `40px`.
- Use: Hero card with violet halo — the brand''s signature decorative surface. Used once or twice per page maximum.

### Badges, Tags, Pills

**Eyebrow Tag (Orange)** — bg `rgba(255, 93, 1, 0.12)`, text `#ff5d01`, radius `4px`, padding `4px 10px`, font Mona Sans 600 / 12px / uppercase / 0.05em tracking. The GitHub-style version-stamp register.

**Eyebrow Tag (Violet)** — same shape, bg `rgba(163, 116, 255, 0.14)`, text `#a374ff`. Secondary tag colour.

**Status Pill (Semantic)** — bg from semantic palette tint, text from semantic colour, radius `4px`, padding `4px 10px`, font 12px / 600.

### Inputs / Forms

- Background: `#0d1117`. Border: `1px solid #ffffff14`. Radius: `8px`. Padding: `12px 16px`.
- Font: Inter 400 / 15px. Placeholder: `#8a8fa3`.
- Focus: `0 0 0 2px #ff5d01` ring; border → `#ffffff26`.
- Error: border → `#f31260`; ring → `rgba(243, 18, 96, 0.30)`.
- Helper: caption 13px text-soft below.

### Navigation

- Header height `64px`. Background `transparent` on hero, `#060913` with 8px backdrop-blur on scroll.
- Logo: Astro wordmark with brand gradient on the rocket glyph.
- Nav links: Inter 500 / 15px, colour `#bfc1c9`, padding `8px 14px`, radius `6px`. Hover → `#f2f6fa`; active gets bottom-border `2px solid #ff5d01`.
- Right-side: GitHub icon + Discord icon + theme toggle + primary "Open Docs" ghost button.
- Mobile: hamburger sheet, full-height drawer, links stack at 18px / 500.

### Optional Components

**Code Block** — IBM Plex Mono 14px, bg `#0d1117`, border `1px solid #ffffff0a`, radius `12px`, padding `20px 24px`. Language label top-right in 11px / 600 / uppercase Mona Sans. Copy-to-clipboard icon button on hover.

**Inline Code** — IBM Plex Mono 13px / 500, bg `rgba(255, 255, 255, 0.08)`, padding `2px 6px`, radius `4px`.

**Tooltip** — bg `#222850`, text `#f2f6fa`, radius `6px`, padding `8px 12px`, font Inter 13px / 500. Subtle border `1px solid #ffffff14`.

**Modal** — bg `#11162a`, radius `16px`, shadow `rgba(0,0,0,0.50) 0 18px 48px -16px`, max-width `560px`. Backdrop `rgba(2,4,10,0.70)` with 8px backdrop-blur.

**Decorative Halo** — `radial-gradient(ellipse at center, rgba(163, 116, 255, 0.24) 0%, transparent 70%)` placed behind hero illustration; size matches illustration bounding box ×1.4.

## 5. Layout Principles

### Spacing System

- **Base unit**: 4px.
- **Scale**: 1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 48, 64, 96, 128, 160 — Fibonacci-adjacent, with a deliberate jump at 96 to mark section gutters.
- **Density observation**: Astro is *medium-dense* — denser than Anthropic, looser than GitHub. Hero sections breathe at 96–128px section padding; feature rails sit at 64px; intra-card spacing uses 16–24px.

### Grid & Container

- **Page max width**: `1280px` — the dev-tool standard, matching Vercel and Tailwind.
- **Site gutter**: `clamp(20px, 4vw, 48px)` — slightly tighter than Anthropic''s magazine gutters.
- **Grid**: 12 columns with 24px gutters. Hero blocks span full width; capability rails span 8 columns with a 4-column screenshot beside; documentation cards run 3-up at 4-4-4 columns.
- **Hero treatment**: full-bleed cosmos navy with violet halo behind illustration; headline confined to 720px column anchored left of centre; gradient CTA pair below.

### Whitespace Philosophy

The whitespace establishes the cosmic register. Astro pages aren''t Anthropic-loose, but they''re consciously roomier than typical dev-tool sites — the deep navy canvas needs breathing room to read as "space" rather than "dark UI." Section gutters run 96–128px between major bands; minor blocks use 64–80px; intra-section uses 24–32px. The result is engineered-but-open, the same pacing GitHub uses on its docs.

### Section Cadence

- Hero (cosmos navy + violet halo) → Feature Rail (3-up cards on cosmos) → Code Showcase (`#0d1117` panel hero, `.astro` syntax centre-stage) → Integration Logo Wall (greyscale logos on cosmos) → Testimonial Block (lifted `#11162a` card grid) → Footer (deep `#02040a`).
- Section transitions are silent — no horizontal rule, no colour band — the rhythm comes from the 96–128px gap alone.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| Micro | 2px | Decorative dividers, micro-tags |
| Standard (sm) | 4px | Compact chips, inline tags, status pills |
| Comfortable (md) | 8px | Buttons, inputs, dropdowns — the dominant radius |
| Relaxed (lg) | 12px | Code blocks, callouts, popovers |
| Featured (xl) | 16px | Cards, capability tiles |
| Hero | 20px | Hero cards, starfield-halo surfaces |
| Pill | 9999px | Reserved for status badges and avatar rings only |

Astro''s signature radius is **8px on buttons** and **16px on cards** — consistent with the broader dev-tool register. The hero card lands at `20px` to read as more decorative than functional. Compound radii are rare (no `0 0 12px 12px` half-rounded surfaces); the system prefers a clean uniform ladder.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat — no shadow | Default page surface, hero, body sections |
| 1 | Tonal layering (`#11162a` on `#060913`) | Cards, capability tiles |
| 2 | `rgba(0,0,0,0.30) 0 1px 3px` | Sticky nav on scroll |
| 3 | Tonal lift to `#1a2040` | Hover-lifted cards |
| 4 | Glow `0 0 32px rgba(255, 93, 1, 0.28)` | Brand-CTA hover, focused element |
| 5 | `rgba(0,0,0,0.50) 0 18px 48px -16px` | Modals, dialogs |

### Shadow Philosophy

Astro''s depth is **value-contrast first, glow second, drop-shadow last**. Cards sit one tonal step above the canvas (`#11162a` on `#060913`); hover deepens by another step (`#1a2040`). Where elevation needs to read as "spotlight" — primary CTA hover, focused input — the brand reaches for **glow shadows** in orange or violet (`0 0 32px` at 28–32% opacity). Drop shadows are reserved exclusively for modals that need to read against potentially-illustrated backgrounds; they''re tinted with deep black `rgba(0,0,0,0.50)` rather than blue-tinted, because on cosmos navy nothing reads as "black-tinted shadow," only as void.

## 8. Interaction & Motion

### Easing Curves

- `ease-standard`: `cubic-bezier(0.4, 0, 0.2, 1)` — Material-style; default for hover, focus, colour transitions.
- `ease-emphasized`: `cubic-bezier(0.2, 0, 0, 1)` — punchier exit; used on modal enter, gradient CTA hover, hero reveal.
- `ease-launch`: `cubic-bezier(0.16, 1, 0.3, 1)` — Astro''s signature easing for rocket-launch sequences; slow start, fast end.

### Duration Buckets

- **Instant (80ms)** — focus rings, tab switches.
- **Fast (150ms)** — colour transitions, link hovers, ghost-button bg fades.
- **Standard (220ms)** — button hover, card hover, dropdown reveal.
- **Slow (360ms)** — modal enter/exit, section fade-in.
- **Page (480ms)** — route transitions, hero reveal sequences with rocket-launch easing.

### Per-Component Micro-States

- **Solid orange button hover**: bg colour shift only — no lift, no scale. `transition: background-color 220ms ease-standard`.
- **Gradient button hover**: `filter: brightness(1.08)` over 220ms; underlying gradient stops do not animate.
- **Card hover**: border deepens from `#ffffff14` to `#ffffff26`; no shadow, no translate.
- **Link hover**: colour `#bfc1c9` → `#ff5d01` over 150ms; no underline change (Astro links are bare).
- **Input focus**: 2px orange ring fades in over 80ms; border darkens to `#ffffff26`.
- **Nav link active**: `2px solid #ff5d01` bottom border animates in left-to-right over 220ms.
- **Code block copy-button**: appears on parent hover at 150ms opacity fade; checkmark replaces icon for 1500ms after copy.

### Page Transitions

Astro''s rocket reveal: hero gradient text fades in over 480ms with 32px translate-up using `ease-launch`; below-fold sections use `IntersectionObserver` to fade in at 75% viewport, 360ms duration, no translate. Code samples use a syntax-highlight stagger reveal — tokens animate in over 480ms with 50ms stagger.

### Reduced Motion

`@media (prefers-reduced-motion: reduce)` — all transitions become opacity-only, durations halved. Translate animations are disabled entirely; rocket-launch easing collapses to linear; scroll-linked reveals snap to final state. Glow shadows are preserved (they''re visual, not motion).

## 9. Accessibility & A11y

### Contrast Pairs

- **`#f2f6fa` text on `#060913` bg**: 15.2:1 — AAA at all sizes.
- **`#bfc1c9` text on `#060913` bg**: 9.4:1 — AAA at body sizes.
- **`#8a8fa3` text on `#060913` bg**: 4.6:1 — AA at body sizes.
- **`#ffffff` text on `#ff5d01` brand**: 4.6:1 — AA at body sizes; safe for buttons but not for body copy.
- **`#ffffff` text on `#a374ff` accent**: 5.1:1 — AA at body sizes.
- **`#ff5d01` link on `#060913` bg**: 6.8:1 — AAA at body sizes.

### Focus Indicators

- Default focus ring: `0 0 0 2px #ff5d01` with 2px offset on cosmos canvas.
- On lifted card surfaces: `0 0 0 2px #ff5d01` with 2px offset (still readable).
- On orange/violet fills: `0 0 0 2px #ffffff` inverted.
- All interactive surfaces must have visible focus state — no `outline: none` without replacement.

### ARIA Patterns

- **Navigation**: `<nav aria-label="Main">` with skip-link to main content.
- **Theme toggle**: `<button aria-pressed aria-label="Toggle theme">`.
- **Code samples**: copy-to-clipboard exposes `aria-label="Copy code"` and uses `aria-live="polite"` to announce "Copied" state.
- **Disclosure**: `<button aria-expanded aria-controls>` for collapsible documentation sections.
- **Dialog**: `role="dialog" aria-modal="true" aria-labelledby` with focus trap and Esc-to-close.
- **Tabs**: ARIA tab pattern for the multi-framework code samples (React/Vue/Svelte/Solid).

### Keyboard Navigation

- Tab order matches visual flow: skip-link → top-nav → hero CTA pair → main content → footer.
- All buttons, links, inputs, code-copy controls reachable via Tab.
- `Esc` closes modals, dropdowns, search overlay.
- Arrow keys navigate within tab groups (framework switcher) and listboxes (search results).
- `Cmd+K` / `Ctrl+K` opens docs search overlay (Algolia DocSearch convention).

### Screen Reader Hints

- Decorative halos and starfield illustrations have `aria-hidden="true"`.
- Icon-only buttons (GitHub, Discord, theme toggle) have `aria-label`.
- Code-language eyebrows expose `<span class="sr-only">Language:</span>` before the visible label.
- Gradient CTAs include the verb in accessible name: `aria-label="Get started — read the docs"`.

### Reduced Motion

Honoured globally. All translate, scale, parallax animations become opacity-only; durations halved; rocket-launch easing collapses to standard.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Use |
|---|---|---|
| Mobile | < 640px | Single column, full-bleed cards, hamburger nav |
| Tablet | 640–1024px | 2-up feature grids, side-by-side hero |
| Desktop | 1024–1280px | Full 12-col grid, 8+4 hero composition |
| Wide | 1280–1536px | Site max width hits at 1280; gutters expand |
| Ultra | > 1536px | Page locks to 1280, gutters absorb extra width |

### Touch Targets

- Minimum tap target: 44×44px (WCAG AAA).
- Buttons: 48px minimum height on mobile (12px vertical padding × 2 + line-height).
- Nav link tap area: 44×44px minimum even when visual padding is smaller.
- Code-block copy button: 32×32px (acceptable for low-frequency action).

### Collapsing Strategy

- **Header**: full nav at ≥1024px; hamburger sheet below with full-height drawer.
- **Hero**: 96px headline → 64px → 48px across desktop/tablet/mobile.
- **Feature grid**: 3-up at desktop, 2-up at tablet, 1-up at mobile.
- **Code panels**: maintain `#0d1117` ground at all sizes; horizontal scroll preserves long lines on mobile rather than wrapping.
- **Section spacing**: 128px → 96px → 64px across sizes.
- **Gradient CTA**: stays inline at desktop, stacks above ghost button on mobile.

### Image Behavior

- Illustrations use `srcset` 1x/2x/3x for crisp glyphs.
- Hero rocket / starfield use `aspect-ratio` lock to prevent layout shift.
- Lazy-loading on below-fold; eager on hero.
- Code-screenshot images use `loading="lazy"` with explicit `width`/`height`.

### Container Queries

Used inside feature cards to switch layout at 320px container width (icon-left → icon-top); used inside code blocks to toggle line-numbers visibility at 480px.

## 11. Content & Voice

### Tone

**Engineered, warm, content-first.** Astro writes like a framework that respects its audience''s time — direct verbs, concrete benefits, no marketing hyperbole. The voice borrows GitHub''s plain-spoken register and Linear''s confidence without either''s coolness. Hero copy is declarative ("The web framework for content-driven websites"); subheads explain mechanism ("Less JavaScript. More content."); features are listed with verbs ("Ship," "Hydrate," "Render").

### Microcopy Patterns

- **Button verbs**: "Get started," "Read the docs," "View on GitHub," "Try in Stackblitz," "Open Discord." Never "Sign up free!", never "Get started today →".
- **Error messages**: "Build failed: [file]:[line] — [reason]. See [docs link]." Specific, actionable, links to the fix.
- **Success confirmations**: "Built in 84ms." "Copied to clipboard." Brief, factual, often with a number.
- **Loading states**: "Building…" "Fetching content…" — present continuous, no anthropomorphism.

### Empty States

What they say: explain what would appear and offer the next step. *"No integrations yet. Browse the catalog to add one."*
What they don''t say: "Whoops!", "Oops!", any apologetic exclamation. Empty states are normal, not failures.

### CTA Verb Conventions

- Primary on hero: "Get started," "Read the docs"
- Secondary: "View on GitHub," "Try in Stackblitz," "Watch the talk"
- Footer: "Browse integrations," "Read the blog," "Join Discord"

The brand uses *imperative* verbs almost exclusively — "Get," "Read," "View," "Try," "Open." It avoids gerunds ("Getting started"), avoids urgency ("now!", "today!"), and avoids feature-naming CTAs ("Try Astro Studio" only when shipping a named product).

## 12. Dark Mode & Theming

**Dark-mode-native.** The cosmos navy `#060913` canvas IS the brand. Astro ships a documented light theme for documentation pages that prefer it, but the marketing surface is dark by default and the brand''s identity is built around the dark canvas — switching to light collapses the observatory metaphor entirely.

The light variant (when used in docs) keys to a near-white `#fafbfc` canvas with `#0d1117` text, preserves the orange `#ff5d01` brand and violet `#a374ff` accent at full saturation, and lifts cards to `#ffffff` over the cream-white ground. Borders shift to `rgba(0, 0, 0, 0.12)`; code blocks invert to a `#f6f8fa` panel with light-theme syntax highlighting (matching GitHub light). Marketing pages should never default to light without explicit user preference.

```yaml
# Light-theme key swaps (documentation pages only)
bg: '#fafbfc'
bg-soft: '#f6f8fa'
surface: '#ffffff'
surface-strong: '#f6f8fa'
text: '#0d1117'
text-muted: '#57606a'
text-soft: '#6e7781'
border: 'rgba(0, 0, 0, 0.12)'
border-strong: 'rgba(0, 0, 0, 0.20)'
# Brand orange / violet hold at full saturation across both modes
brand: '#ff5d01'
accent: '#a374ff'
```

## 13. Lineage & Influences

Astro''s design DNA is **dark-canvas dev-tool meets editorial broadsheet**. The cosmos navy + violet halo + Mona Sans display register quotes Vercel''s engineered restraint and GitHub''s dark-IDE warmth, but pushes the palette toward cosmic warmth via the orange-violet brand axis — a temperature shift that no other framework brand operates in. Where Vite ships near-pure-purple Marketing-as-Manifesto, where Bun ships terminal-cream brutalism, where Next.js ships corporate-restrained black-and-white, Astro ships **observatory-warm cosmos**.

What it inherits: GitHub''s `#0d1117` code-panel ground (Astro''s code blocks are visually identical to GitHub''s dark-theme code), Vercel''s 1280px container and 12-column grid, Stripe Docs'' code-as-brand-surface treatment, and Wired Magazine''s display-weight headline rhythm. What it borrows from contemporaries: Linear''s tonal-blue layering for depth, Tailwind''s OKLCH-conscious palette discipline, and Anthropic''s confidence in restraint. What it rejects: gradient-mesh backgrounds, glassmorphism (frosted blur), lime-green or neon accents, "AI tech" iconography, and the SF Symbols / iOS-aesthetic register.

**Named influences:**

- **Vercel** — dark-canvas dev-tool template; near-black bg with restrained accents and tight type ladder. *https://vercel.com*
- **GitHub** — Mona Sans display family + `#0d1117` code-panel ground; dark-IDE surface that Astro inherits visually. *https://github.com*
- **Stripe Docs** — code-as-brand-surface treatment; mono panels foregrounded as primary identity. *https://stripe.com/docs*
- **Wired Magazine** — editorial display weight and confident, oversized headline rhythm at 80–96px. *https://www.wired.com*
- **Linear** — tonal-blue layering for depth instead of explicit drop shadows. *https://linear.app*
- **OH no Type Co. Obviously** — DNA reference for the wide-grotesk display register Mona Sans evolved.
- **JetBrains Mono / IBM Plex Mono** — developer-IDE typographic register; Astro picks Plex for its institutional warmth.

## 14. Do's and Don'ts

### Do

- **Do** lean on the violet-to-orange gradient `#a374ff → #ff5d01` for hero accents and the wordmark — it is the single most recognisable Astro element.
- **Do** treat code blocks as brand surface — IBM Plex Mono on `#0d1117` signals Astro more strongly than any logo placement.
- **Do** keep the canvas at `#060913` cosmos navy — pure black flattens the page; lighter navy reads like Linear.
- **Do** use Mona Sans at 700–800 weight for headlines — its character lives in the heavy display cuts.
- **Do** apply 8% white hairlines (`#ffffff14`) for borders — never solid grey, never colour-tinted by default.
- **Do** use violet radial halos behind hero illustrations — starlight bloom, not gradient mesh.
- **Do** reserve the gradient CTA for one beat per page — it loses impact when repeated.
- **Do** ship code samples with a language eyebrow (uppercase / 0.05em / 11px / Mona Sans 600) and a copy-to-clipboard button.
- **Do** use 96–128px section padding — the engineered-roomy rhythm.
- **Do** honour dark-mode-native — the marketing surface defaults to dark, never light.

### Don't

- **Don''t** mix the brand orange (`#ff5d01`) with arbitrary warm hues; the orange pairs only with the violet `#a374ff`.
- **Don''t** use Mona Sans below 500 weight for headlines — its character lives in the heavy display cuts; lighter weights look generic.
- **Don''t** apply heavy or coloured drop shadows to cards. Astro''s depth is tonal-blue layering plus an 8% white hairline.
- **Don''t** introduce lime-green, neon-magenta, or chrome accents — the orange-violet axis is non-negotiable.
- **Don''t** use pure black `#000000` for the canvas. Cosmos navy `#060913` is the warmer, intentional alternative.
- **Don''t** swap IBM Plex Mono for proportional fallback in code samples — the mono ubiquity is the brand''s typographic stamp.
- **Don''t** use frosted-glass / backdrop-blur effects beyond the sticky nav — the brand reads as flat-tonal, not glassmorphic.
- **Don''t** crowd code blocks with line-number columns by default — line numbers appear only when explicitly opted in.
- **Don''t** ship marketing copy with exclamation marks or urgency verbs ("now!", "today!"). The voice is engineered-calm.
- **Don''t** abandon the violet-orange gradient in favour of single-hue brand discipline — the gradient *is* the brand.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #060913
bg-soft: #0d1117
surface: #11162a
surface-strong: #1a2040
text: #f2f6fa
text-muted: #bfc1c9
brand-orange: #ff5d01
brand-violet: #a374ff
gradient: linear-gradient(135deg, #a374ff 0%, #ff5d01 100%)
border: rgba(255, 255, 255, 0.08)
```

### Example Component Prompts

1. **"Create a hero in Astro style — cosmos navy `#060913` canvas with a violet radial halo `rgba(163, 116, 255, 0.18)` behind the illustration. Headline at 96px Mona Sans 800 with -0.03em tracking, white text. Lede at 20px Inter 400 / 1.55 line-height in `#bfc1c9`. Primary CTA pair: solid orange `#ff5d01` button + ghost button with `#ffffff14` hairline border, both at 8px radius."**

2. **"Design a feature card — `#11162a` background, 16px radius, 1px `rgba(255, 255, 255, 0.08)` hairline border, 28px interior padding. Mona Sans 600 / 24px heading, Inter 400 / 16px body, eyebrow tag in `rgba(255, 93, 1, 0.12)` orange tint. Hover: border deepens to `rgba(255, 255, 255, 0.15)`."**

3. **"Build a code-showcase block — `#0d1117` background panel (matching GitHub dark), 12px radius, IBM Plex Mono 14px / 1.65 line-height for syntax. Language eyebrow top-right at 11px Mona Sans 600 / uppercase / 0.05em tracking. Copy-to-clipboard icon button revealed on hover at 32×32px tap target."**

4. **"Render a gradient CTA — `linear-gradient(135deg, #a374ff 0%, #ff5d01 100%)` background, white Mona Sans 600 / 15px text, 13px / 24px padding, 10px radius. Pair with a gradient-outline twin: transparent fill, gradient border-image `1.5px solid`. Hover: brightness 1.08, no transform."**

5. **"Compose a starfield decorative panel — `radial-gradient(ellipse at top, rgba(163, 116, 255, 0.18) 0%, #11162a 50%)` background, `rgba(163, 116, 255, 0.30)` violet hairline, 20px radius, 40px padding. Used for hero capability cards — one per page maximum."**

6. **"Create the primary nav — 64px header height, transparent background on hero / `#060913` with 8px backdrop-blur on scroll. Astro wordmark left with gradient rocket glyph. Inter 500 / 15px nav links in `#bfc1c9` with `#f2f6fa` hover. Right-side: GitHub icon + Discord icon + theme toggle + ghost-button `Open Docs` CTA."**

### Iteration Guide

1. **Start with cosmos navy `#060913`, not pure black.** Pure black flattens the page; the slight blue tilt is what reads as "intentional dark canvas."
2. **Reach for the gradient.** If the hero feels generic, the violet-to-orange brand gradient on the wordmark, headline outline, or primary CTA is the brand''s most recognisable gesture.
3. **Switch headline type to Mona Sans 700–800.** If headlines look generic, heavy weight + negative tracking gives Astro''s engineered-editorial register.
4. **Code blocks ARE the marketing.** If `.astro` syntax isn''t centre-stage on the hero, you''re missing the value proposition.
5. **Use 8% white hairlines, not grey.** `#ffffff14` is the only divider colour — solid grey breaks the cosmos illusion.
6. **Add violet halos to hero illustrations.** A subtle `radial-gradient` at `rgba(163, 116, 255, 0.18)` reads as starlight bloom rather than gradient mesh.
7. **Drop the shadow, lift the tone.** Replace box-shadows with the `#11162a` → `#1a2040` tonal step-up.
8. **Calm the verbs.** Replace "Sign up free!" with "Get started"; replace "Learn more →" with "Read the docs". The voice is engineered-calm.
