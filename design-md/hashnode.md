---
name: Hashnode
tagline: Developer publishing platform — deep navy canvas, electric blue brand, Inter sans + JetBrains Mono code chrome.
updated_at: 2026-05-05T20:10:49+12:00
published_at: 2026-05-03T10:27:49+12:00
author: webdesignhot
source_url: https://hashnode.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [dev-tools, media, social]
tags: [dark, sans, mono, cool, structured, developer]
preview_swatch: ['#0f1117', '#2962ff', '#ffffff']
related: [vercel, linear, github]
description: 'Hashnode is what happens when a developer publishing platform refuses to look like Medium. Deep navy canvas (`#0f1117`) — softer than pure black, calibrated for long-form code reading — paired with electric Material Blue A700 (`#2962ff`) applied liberally to CTAs and link surfaces. Inter Variable carries the UI; JetBrains Mono carries code blocks, eyebrows, and metadata. Where Medium hides code blocks behind serif body and editorial restraint, Hashnode treats them as the *reason the platform exists* — code blocks render with `bg-elev-2` fills, syntax highlighting via Prism, and more vertical breathing room than the prose they document. The reading experience inverts the editorial hierarchy: prose serves the code, not the other way around. Brand blue gets applied generously where Linear and Vercel would withhold it — link surfaces, CTAs, focus rings, hover states — because Hashnode''s pitch is that developers should feel at home on a publishing platform that visually announces *this is for engineers, not for writers who happen to code*.'

colors:
  bg: '#0f1117'                  # navy-not-black canvas — softer than #000 for long-form code reading
  bg-soft: '#0a0c12'             # deepest tier, used for footer / extreme background
  bg-elev-1: '#161a23'           # first elevation tier — cards, sidebars, nav surfaces
  bg-elev-2: '#1f2937'           # second tier — code block fills, hover surfaces
  bg-elev-3: '#252b3a'           # popover / dropdown surface
  surface: '#161a23'             # default card surface
  surface-light: '#ffffff'       # rare light inversion — author profile photo frame
  text: '#ffffff'                # body, headlines — full white for max contrast on dark
  text-strong: '#ffffff'         # display copy, peak contrast
  text-body: '#e5e7eb'           # long-form article body — slightly softened white
  text-soft: '#a8b1bf'           # meta, post date, byline
  text-muted: '#6b7280'          # captions, very secondary metadata
  text-faint: '#4b5563'          # disabled, placeholder
  brand: '#2962ff'               # Hashnode blue — Material Design Blue A700, the brand voltage
  brand-hover: '#1d4ed8'         # darker blue, hover/active state
  brand-deep: '#1e40af'          # pressed, selected state
  brand-soft: 'rgba(41, 98, 255, 0.12)'  # soft blue wash — chip backgrounds, hover surfaces
  brand-glow: 'rgba(41, 98, 255, 0.32)'  # focus ring, glow effects
  brand-tint: 'rgba(41, 98, 255, 0.08)'  # subtlest blue tint — section accent
  on-brand: '#ffffff'            # white text on Hashnode blue
  link: '#2962ff'                # inline links — same as brand
  link-hover: '#3b82f6'          # link hover — slightly lighter for dark-canvas legibility
  cta-bg: '#2962ff'              # primary CTA fill
  cta-text: '#ffffff'            # CTA text, full white
  selected: '#2962ff'
  border: 'rgba(255, 255, 255, 0.08)'        # default hairline — translucent white
  border-soft: 'rgba(255, 255, 255, 0.04)'   # quietest separation
  border-strong: 'rgba(255, 255, 255, 0.15)' # outlined buttons, focused inputs
  border-brand: 'rgba(41, 98, 255, 0.40)'    # blue-tinted border for emphasis
  shadow-soft: 'rgba(0, 0, 0, 0.20)'          # subtle ambient shadow on dark
  shadow-elev: 'rgba(0, 0, 0, 0.40)'          # elevated dropdown shadow
  shadow-deep: 'rgba(0, 0, 0, 0.60)'          # modal shadow
  shadow-glow: 'rgba(41, 98, 255, 0.15)'      # blue-tinted glow on hover
  scrim: 'rgba(15, 17, 23, 0.80)'             # modal backdrop, navy-tinted
  success: '#10b981'             # confirmation green
  success-soft: 'rgba(16, 185, 129, 0.12)'
  warning: '#f59e0b'             # advisory amber
  warning-soft: 'rgba(245, 158, 11, 0.12)'
  danger: '#ef4444'              # error red
  danger-soft: 'rgba(239, 68, 68, 0.12)'
  info: '#2962ff'                # info reads as brand — Material convention
  info-soft: 'rgba(41, 98, 255, 0.12)'
  syntax-keyword: '#c084fc'      # Prism: purple for keywords (const, function)
  syntax-string: '#86efac'       # Prism: green for strings
  syntax-number: '#fbbf24'       # Prism: amber for numbers
  syntax-comment: '#6b7280'      # Prism: muted grey for comments
  syntax-fn: '#60a5fa'           # Prism: blue for function names

typography:
  display:
    family: 'Inter, "Inter Variable", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    weights: [400, 500, 600, 700, 800]
    opentype-features: ['kern', 'liga', 'cv11', 'ss01']
  body:
    family: 'Inter, "Inter Variable", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    weights: [400, 500, 600]
    opentype-features: ['kern', 'liga']
  mono:
    family: '"JetBrains Mono", "Fira Code", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
    weights: [400, 500, 600]
    opentype-features: ['liga', 'calt', 'zero']
  scale:
    display-hero:    { size: 72, weight: 800, lineHeight: 1.05, tracking: '-0.03em', family: display, opentype: ['cv11', 'ss01'] }
    display-xl:      { size: 64, weight: 800, lineHeight: 1.05, tracking: '-0.025em', family: display }
    display-lg:      { size: 48, weight: 700, lineHeight: 1.10, tracking: '-0.02em',  family: display }
    h1:              { size: 40, weight: 700, lineHeight: 1.15, tracking: '-0.02em',  family: display }
    h2:              { size: 32, weight: 700, lineHeight: 1.20, tracking: '-0.015em', family: display }
    h3:              { size: 24, weight: 600, lineHeight: 1.30, tracking: '-0.01em',  family: display }
    h4:              { size: 20, weight: 600, lineHeight: 1.35, tracking: '-0.005em', family: display }
    h5:              { size: 18, weight: 600, lineHeight: 1.40, tracking: '0',        family: display }
    eyebrow:         { size: 12, weight: 500, lineHeight: 1.40, tracking: '0.08em',   family: mono, transform: uppercase }
    section-label:   { size: 13, weight: 500, lineHeight: 1.40, tracking: '0.06em',   family: mono, transform: uppercase }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.65, tracking: '0',        family: body }
    body-md:         { size: 16, weight: 400, lineHeight: 1.60, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.50, tracking: '0',        family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.45, tracking: '0',        family: body }
    caption-mono:    { size: 12, weight: 500, lineHeight: 1.40, tracking: '0',        family: mono }
    label:           { size: 12, weight: 500, lineHeight: 1.30, tracking: '0.04em',   family: mono, transform: uppercase }
    button-md:       { size: 14, weight: 600, lineHeight: 1.20, tracking: '0',        family: body }
    button-sm:       { size: 13, weight: 600, lineHeight: 1.20, tracking: '0',        family: body }
    code-block:      { size: 14, weight: 400, lineHeight: 1.65, tracking: '0',        family: mono, opentype: ['liga', 'calt'] }
    code-inline:     { size: 14, weight: 500, lineHeight: 1.40, tracking: '0',        family: mono }
    code-micro:      { size: 12, weight: 500, lineHeight: 1.40, tracking: '0',        family: mono }
    quote-pull:      { size: 22, weight: 500, lineHeight: 1.40, tracking: '-0.005em', family: display }

radius:
  micro: 2
  sm: 6           # chips, badges, inline tags
  md: 8           # buttons, inputs, code blocks
  lg: 12          # cards, modals, article tiles
  xl: 16          # hero panels, large surfaces
  pill: 9999

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]

layout:
  page-width: 1280
  reading-width: 720
  prose-width: 720
  header-height: 72
  feed-card-min-width: 320
  toc-sidebar-width: 280

components:
  button-primary:
    bg: '#2962ff'
    color: '#ffffff'
    radius: 8
    padding: '10px 20px'
    height: 40
    font: 'Inter 14px / 600'
    hover-bg: '#1d4ed8'
    active-bg: '#1e40af'
    use: 'Solid blue CTA — Start writing, Sign up, Publish. The dominant action button across nav and hero.'
  button-secondary:
    bg: '#161a23'
    color: '#ffffff'
    border: '1px solid rgba(255, 255, 255, 0.15)'
    radius: 8
    padding: '10px 20px'
    height: 40
    font: 'Inter 14px / 600'
    hover-bg: '#1f2937'
    use: 'Outlined twin — Sign in, Learn more. Same shape as primary, no fill, hairline border.'
  button-ghost:
    bg: 'transparent'
    color: '#ffffff'
    radius: 8
    padding: '8px 12px'
    font: 'Inter 14px / 500'
    hover-bg: 'rgba(255, 255, 255, 0.06)'
    use: 'Quiet third action — nav links, footer secondaries, in-card actions.'
  button-icon:
    bg: 'transparent'
    color: '#a8b1bf'
    radius: 8
    size: 36
    hover-bg: 'rgba(255, 255, 255, 0.06)'
    hover-color: '#ffffff'
    use: 'Icon-only action — like, bookmark, share, copy-link.'
  card-article:
    bg: '#161a23'
    color: '#ffffff'
    border: '1px solid rgba(255, 255, 255, 0.08)'
    radius: 12
    padding: '24px'
    hover-border: 'rgba(255, 255, 255, 0.15)'
    hover-bg: '#1a1f2a'
    use: 'Article preview tile — cover image top-cropped 16:9, title 18px / 600, byline + meta in soft text. The feed unit.'
  card-feature:
    bg: '#161a23'
    border: '1px solid rgba(255, 255, 255, 0.08)'
    radius: 12
    padding: '32px'
    use: 'Marketing feature card — icon + heading + body. Slight elevation via tone over canvas.'
  code-block:
    bg: '#1f2937'
    color: '#ffffff'
    radius: 8
    padding: '20px 24px'
    border: '1px solid rgba(255, 255, 255, 0.08)'
    font: 'JetBrains Mono 14px / 400 / 1.65 line-height'
    use: 'The platform''s star component — Prism syntax-highlighted, copy-to-clipboard chip top-right, language label top-left, full-bleed inside reading column.'
  code-inline:
    bg: 'rgba(41, 98, 255, 0.12)'
    color: '#ffffff'
    radius: 4
    padding: '2px 6px'
    font: 'JetBrains Mono 14px / 500'
    use: 'Inline `code` references — blue-tinted background instead of grey, signalling brand even at micro scale.'
  badge-tag:
    bg: 'rgba(255, 255, 255, 0.06)'
    color: '#a8b1bf'
    radius: 9999
    padding: '4px 12px'
    font: 'Inter 12px / 500'
    hover-bg: 'rgba(41, 98, 255, 0.12)'
    hover-color: '#2962ff'
    use: 'Article tags — `#javascript`, `#nextjs`, `#design-systems`. Pill chip with brand-blue hover state.'
  badge-status:
    bg: 'rgba(41, 98, 255, 0.12)'
    color: '#3b82f6'
    radius: 6
    padding: '2px 8px'
    font: 'JetBrains Mono 11px / 500 / uppercase / 0.04em'
    use: 'Status pill — DRAFT, FEATURED, NEW. Mono caps in soft brand wash.'
  text-input:
    bg: '#161a23'
    color: '#ffffff'
    radius: 8
    height: 40
    padding: '10px 14px'
    border: '1px solid rgba(255, 255, 255, 0.15)'
    font: 'Inter 14px / 400'
    placeholder-color: '#6b7280'
    focus-border: '#2962ff'
    focus-ring: '0 0 0 3px rgba(41, 98, 255, 0.32)'
    use: 'Form fields, search bar, comment box — soft elevated tone, brand-blue focus.'
  nav-top:
    bg: 'rgba(15, 17, 23, 0.72)'
    backdrop-filter: 'blur(12px) saturate(180%)'
    height: 72
    border-bottom: '1px solid rgba(255, 255, 255, 0.08)'
    use: 'Sticky top nav — translucent dark fill, hairline divider on scroll. Wordmark + nav + search + auth CTAs.'
  toc-sidebar:
    bg: 'transparent'
    border-left: '1px solid rgba(255, 255, 255, 0.08)'
    width: 280
    use: 'Article table-of-contents — sticky right rail, current section highlighted in brand blue.'
  copy-chip:
    bg: 'rgba(255, 255, 255, 0.06)'
    color: '#a8b1bf'
    radius: 6
    padding: '6px 10px'
    font: 'JetBrains Mono 11px / 500'
    hover-bg: 'rgba(41, 98, 255, 0.12)'
    hover-color: '#3b82f6'
    use: 'Copy-to-clipboard button on code blocks — top-right corner, mono caps reading "COPY".'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-out-soft: 'cubic-bezier(0.0, 0, 0.2, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 300
  duration-page: 400
  link-hover: 'colour 100ms standard'
  button-hover: 'bg shift 200ms standard, no transform'
  card-hover: 'border lightens + bg tone shifts 200ms — no lift'
  code-copy: 'chip pulses brand blue 300ms on click'
  toc-highlight: 'active item slides 200ms ease-out-soft as scroll passes anchor'
  scroll-reveal: 'sections fade in 300ms ease-out-soft when entering viewport'
  reduced-motion: 'respects prefers-reduced-motion: reduce — all transforms suppress, opacity-only fades.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  none: 'none'
  ambient: 'rgba(0, 0, 0, 0.20) 0 1px 2px'
  card: 'rgba(0, 0, 0, 0.20) 0 4px 12px -2px'
  elevated: 'rgba(0, 0, 0, 0.40) 0 12px 32px -8px'
  popover: 'rgba(0, 0, 0, 0.50) 0 16px 40px -12px'
  modal: 'rgba(0, 0, 0, 0.60) 0 24px 64px -16px'
  glow-brand: 'rgba(41, 98, 255, 0.32) 0 0 0 4px'
  ring: '0 0 0 3px rgba(41, 98, 255, 0.32)'

accessibility:
  contrast-text-on-bg: 16.4              # #ffffff on #0f1117 — AAA at all sizes
  contrast-text-body-on-bg: 14.2         # #e5e7eb on #0f1117 — AAA
  contrast-text-soft-on-bg: 7.6          # #a8b1bf on #0f1117 — AAA at body sizes
  contrast-text-on-brand: 4.5            # #ffffff on #2962ff — AA body / AAA large
  contrast-link-on-bg: 4.4               # #2962ff on #0f1117 — AA at large; brand emphasized via weight + underline-on-hover for body links
  focus-ring: '3px solid rgba(41, 98, 255, 0.32) + 1px solid #2962ff inner — visible on dark canvas'
  reduced-motion-honored: true
  touch-target-min: 44
  prose-line-length: 'capped at 720px / ~70 characters'
  syntax-highlight-aa: true              # Prism token colours all pass AA on bg-elev-2

dark-mode: native                        # Hashnode IS dark mode — there is no light variant on the marketing surface

lineage:
  summary: 'Hashnode positioned itself against Medium''s editorial tradition by embracing **developer aesthetic**: deep navy canvas (`#0f1117`), electric `#2962ff` blue (Material Design''s blue-A700), Inter for UI, and JetBrains Mono for code. Where Medium hides code blocks behind serif body, Hashnode treats them as the reason the platform exists — code blocks render with `bg-elev-2` fills, syntax-highlighted with Prism, and given more vertical breathing room than the prose itself. Brand blue is applied liberally where Linear or Vercel withhold it: CTAs, link surfaces, focus rings, hover states. The result is a dev-publishing platform that visually announces *this is for developers, not for writers who happen to code*.'
  influences:
    - name: 'GitHub dark theme'
      role: 'Navy-not-black canvas with blue accent — the dev-tool dark default since 2020'
      url: 'https://primer.style/foundations/color'
    - name: 'JetBrains Mono'
      role: 'Mono of choice for code blocks — open-source, designed for IDEs with explicit ligature support'
      url: 'https://www.jetbrains.com/lp/mono/'
    - name: 'Material Design Blue A700'
      role: '`#2962ff` is Google Material''s vibrant blue — chosen for max signal on dark canvas'
      url: 'https://m2.material.io/design/color/the-color-system.html'
    - name: 'Inter (Rasmus Andersson)'
      role: 'The default UI face for dev tools post-2018 — Hashnode uses Inter Variable for hierarchy without loading multiple weights'
      url: 'https://rsms.me/inter/'
    - name: 'Vercel'
      role: 'Adjacent dev-tool peer — Hashnode shares the dense neutral hierarchy and brand-blue link discipline, but inverts the canvas to dark'
      url: 'https://vercel.com'
    - name: 'Stack Overflow / DEV Community'
      role: 'Dev-publishing competitors — Hashnode picks the dark-canvas third lane between dev.to''s light playfulness and Medium''s editorial serif'
      url: 'https://dev.to'
---

## 1. Visual Theme & Atmosphere

Hashnode's marketing site reads like a code editor that happens to host long-form prose. The canvas sits at `#0f1117` — a deep navy that's softer than pure black, calibrated for long-form code reading the way GitHub's dark theme is calibrated for hours of repository browsing. The typography stack is **Inter Variable** for UI and **JetBrains Mono** for code, with the latter doing structural double-duty as section eyebrows, status pills, and metadata captions. The single chromatic event on the page is the electric `#2962ff` brand blue — Material Design Blue A700 — applied generously where peers like Linear and Vercel withhold it.

What makes Hashnode distinctive is the *category positioning*. Medium owns the editorial-serif-on-white tradition; dev.to runs a brighter, more playful light canvas with multiple accent colours; Substack ships warm cream and a serif body. Hashnode picks the fourth lane: dark navy canvas, monospace-aware typography hierarchy, and a single bright blue that reads as *signal* rather than *aesthetic*. The platform reads as a GitHub-adjacent product more than a publishing-platform product. When you land on a Hashnode article, the visual register tells you immediately that this site assumes you read code blocks the way most readers read paragraphs — fluently, daily, expecting them to be foreground rather than ornament.

The third register is the **inversion of editorial hierarchy**. On Medium, the body paragraph is the primary citizen and the code block is an embedded artifact rendered in a muted grey container. On Hashnode, the code block lifts to the second elevation tier (`#1f2937`), gets its own copy-to-clipboard chip, displays its language label as a mono caption, and routinely runs taller than the prose paragraph that introduced it. The signal is unmistakable: Hashnode is a place where code is content, not embellishment. Inline `code` references render with a soft brand-blue tint instead of the conventional grey — a tiny detail that ports the developer-platform identity even into the most micro typographic moments.

The atmospheric vocabulary that captures Hashnode's feeling: *dev-editor, navy-not-black, signal-blue, mono-eyebrow, prism-tinted, code-as-content, GitHub-adjacent, Medium-rejection, IDE-grade, copy-chip-confident, Material-A700, Inter-default.* Every surface lands like it was designed by an engineering team that decided their publishing platform should feel like the rest of their tooling — terminal-comfortable, syntax-aware, dark-canvas-correct. The brand's pitch is that developers shouldn't have to switch register when they switch from coding to writing about code; Hashnode lives in the same visual language as their editor, their CI dashboard, and their package documentation.

**Key Characteristics**
- Deep navy `#0f1117` canvas — softer than `#000`, calibrated for long-form code legibility
- Three-tier surface stack: `#0f1117` → `#161a23` → `#1f2937` — tonal elevation, never shadow-only
- Electric Material Blue A700 (`#2962ff`) — applied liberally to CTAs, links, focus rings, hover states
- Inter Variable for UI typography — the post-2018 dev-tool default
- JetBrains Mono for code blocks, eyebrows, status pills, and metadata
- Code blocks lift to `#1f2937` with copy-to-clipboard chip + language label — the platform's star component
- Inline `code` renders with soft brand-blue tint instead of grey — micro-scale brand expression
- Article preview tiles with cover-image top-crop (16:9) + 18px / 600 title + soft-text byline
- 1280px max page width; 720px reading column for posts
- 72px sticky header with backdrop blur on scroll
- Two-column article layout with sticky table-of-contents sidebar at desktop
- No drop shadows for content cards — tonal layering carries elevation
- Prism syntax highlighting with Hashnode-tuned token colours

## 2. Color Palette & Roles

### Primary

- **Canvas** (`#0f1117`): the deep navy floor — softer than pure `#000`, calibrated for hours of code reading without the harsh contrast of true black. The choice is GitHub-lineage: navy-not-black is the dev-tool dark default.
- **Body Text** (`#ffffff`): full white for body and headlines, AAA contrast at 16.4:1 against the canvas. Hashnode does not soften white to `#f5f5f5` for body — full white is the brand signal.
- **Body Long-form** (`#e5e7eb`): article paragraphs use slightly softened white at 14.2:1 — eases extended reading without breaking the high-contrast code-editor register.
- **Brand Blue** (`#2962ff`): Material Design Blue A700. The single saturated colour, applied liberally to CTAs, link surfaces, focus rings, hover states, and inline-code tints.

### Brand & Sub-Brand

- **Brand Hover** (`#1d4ed8`): pressed/hover state — slightly darker, maintains contrast against canvas.
- **Brand Deep** (`#1e40af`): active/selected state — deepest blue, used for "current page" indicators in nav and TOC.
- **Brand Soft** (`rgba(41, 98, 255, 0.12)`): the soft-blue wash — chip backgrounds, code-inline tint, hover surfaces, info banner backgrounds.
- **Brand Glow** (`rgba(41, 98, 255, 0.32)`): focus ring colour — a 3px translucent ring that pulses around the focused element without obscuring the content.
- **Brand Tint** (`rgba(41, 98, 255, 0.08)`): the subtlest blue tint — used for section-level brand accents (e.g., "Featured" article banner), too soft to be a primary fill.

### Accent

There are no decorative accents. Hashnode runs a strict monochromatic-blue system — every "accent" use is the brand blue at varying alpha. The exception is **syntax highlighting** in code blocks, where Prism applies a measured palette: purple for keywords (`#c084fc`), green for strings (`#86efac`), amber for numbers (`#fbbf24`), muted grey for comments (`#6b7280`), and brand-adjacent blue for function names (`#60a5fa`). These colours appear *only* inside code blocks; they never leak into UI chrome.

### Interactive

- **Link** (`#2962ff`): inline body links — full brand blue, weight stays at body-default (400) so the colour carries the signal without weight-shouting. No underline at rest; hover reveals a 1px underline.
- **Link Hover** (`#3b82f6`): slightly lighter on hover for legibility — the hairline brightening is a dark-canvas-specific calibration (lighter blues read more clearly against the deep navy than the rest-state blue does at hover).
- **Selected** (`#2962ff`): selected state in lists, tabs, and TOC — full brand blue background or text colour depending on component.
- **Disabled** (`#4b5563`): disabled control text — drops into the muted neutral range to read as "unavailable" without using a colour cue.

### Neutral Scale

- **Text Strong** (`#ffffff`) — peak white for display copy and headlines, 16.4:1 contrast.
- **Text Body** (`#e5e7eb`) — long-form article body, 14.2:1.
- **Text Soft** (`#a8b1bf`) — meta, post date, byline, secondary nav, 7.6:1 — passes AAA for body sizes.
- **Text Muted** (`#6b7280`) — captions, very secondary metadata, 4.7:1 — AA at body sizes.
- **Text Faint** (`#4b5563`) — disabled, placeholder, decorative-only.

### Surface & Borders

- **Canvas** (`#0f1117`) — the deep navy floor.
- **Surface Soft** (`#0a0c12`) — the deepest tier, used for the footer band where contrast against the canvas is acceptable but the band needs to read as "below the page."
- **Elev 1** (`#161a23`) — first elevation tier; cards, sidebars, nav surface, default panels. The dominant non-canvas surface.
- **Elev 2** (`#1f2937`) — second tier; code blocks, hover surfaces on cards, secondary nested panels.
- **Elev 3** (`#252b3a`) — third tier; popovers, dropdowns, modal backgrounds. Rare in marketing copy; common in product UI.
- **Border Default** (`rgba(255, 255, 255, 0.08)`) — translucent white hairline. The default border tone — never a solid grey.
- **Border Soft** (`rgba(255, 255, 255, 0.04)`) — quietest separation between subtle nested elements.
- **Border Strong** (`rgba(255, 255, 255, 0.15)`) — outlined buttons, focused inputs, sidebar separations.
- **Border Brand** (`rgba(41, 98, 255, 0.40)`) — blue-tinted hairline for emphasis (featured article ring, brand-tier pricing card).

### Shadow Colors

Hashnode uses **black-tinted** shadows (`rgba(0, 0, 0, …)`) — on a dark canvas, blue-tinted shadows would brighten the page and break the editor-grade darkness. Shadow stacks are reserved for floating UI (dropdowns, modals, popovers); content cards lift via tonal elevation, not shadow.

- `rgba(0, 0, 0, 0.20) 0 1px 2px` — ambient (rare on dark canvas)
- `rgba(0, 0, 0, 0.20) 0 4px 12px -2px` — card shadow (used sparingly)
- `rgba(0, 0, 0, 0.40) 0 12px 32px -8px` — elevated dropdown
- `rgba(0, 0, 0, 0.50) 0 16px 40px -12px` — popover
- `rgba(0, 0, 0, 0.60) 0 24px 64px -16px` — modal
- `rgba(41, 98, 255, 0.32) 0 0 0 4px` — brand-blue glow, used on focus rings and hover-emphasis states

### Semantic

- **Success** (`#10b981` on `rgba(16, 185, 129, 0.12)`) — confirmation green, used for "Article published" toasts and inline success states.
- **Warning** (`#f59e0b` on `rgba(245, 158, 11, 0.12)`) — advisory amber, used for "Draft saved offline" and rate-limit notices.
- **Danger** (`#ef4444` on `rgba(239, 68, 68, 0.12)`) — error red, used for form validation failures and API errors.
- **Info** (`#2962ff` on `rgba(41, 98, 255, 0.12)`) — informational accent, intentionally identical to brand blue. Material's convention: info and brand share the same blue.

## 3. Typography Rules

### Font Family

**Primary**: `Inter, "Inter Variable", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`. Inter Variable is loaded via `font-display: swap` from Google Fonts or self-hosted; fallbacks are the system stacks. Inter became the default UI face for dev tools post-2018 — it's what Linear, Vercel, GitHub Primer, and Stripe Dashboard all converged on. Hashnode adopts it without modification.

**Mono companion**: `"JetBrains Mono", "Fira Code", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`. JetBrains Mono is the brand-defining mono — designed by JetBrains specifically for code editors, with explicit ligature support (the `=>`, `!=`, `>=`, `<=` ligatures render as composed glyphs) and weight balanced for on-screen legibility at small sizes. The mono does triple duty: code blocks, eyebrow labels, status pills, and caption metadata.

**OpenType features**: Inter renders with `kern` and `liga` always on; `cv11` and `ss01` enable on display sizes for the disambiguated `1` and the alternate `g` (cleaner descender). JetBrains Mono renders with `liga` and `calt` always on for code ligatures, and `zero` for the slashed zero in tabular contexts.

The mono-for-eyebrows convention is one of Hashnode's strongest type-discipline signals — a Dinamo-style trick that Linear and Vercel both use, but Hashnode pushes further by using mono caps for *every* section pre-label, status indicator, and metadata caption. The visual texture compounds: when you scroll a Hashnode article, the page is rhythmed by mono caps interrupting the Inter prose, creating an almost typewritten cadence inside an otherwise modern UI.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| display-hero | Inter | 72px | 800 | 1.05 | -0.03em | cv11, ss01 | Hero — landing-page H1 only |
| display-xl | Inter | 64px | 800 | 1.05 | -0.025em | — | Major section opener |
| display-lg | Inter | 48px | 700 | 1.10 | -0.02em | — | Sub-section opener |
| h1 | Inter | 40px | 700 | 1.15 | -0.02em | — | Article title |
| h2 | Inter | 32px | 700 | 1.20 | -0.015em | — | Article H2 |
| h3 | Inter | 24px | 600 | 1.30 | -0.01em | — | Article H3 |
| h4 | Inter | 20px | 600 | 1.35 | -0.005em | — | Article H4 |
| h5 | Inter | 18px | 600 | 1.40 | 0 | — | Article H5, card title |
| eyebrow | JetBrains Mono | 12px | 500 | 1.40 | 0.08em | uppercase | Section pre-label |
| section-label | JetBrains Mono | 13px | 500 | 1.40 | 0.06em | uppercase | Marketing section eyebrow |
| body-lg | Inter | 18px | 400 | 1.65 | 0 | — | Hero deck, lede paragraph |
| body-md | Inter | 16px | 400 | 1.60 | 0 | — | Default article body |
| body-sm | Inter | 14px | 400 | 1.50 | 0 | — | Card meta, sidebar text |
| caption | Inter | 13px | 400 | 1.45 | 0 | — | Image caption, footer micro |
| caption-mono | JetBrains Mono | 12px | 500 | 1.40 | 0 | — | Metadata: read time, post status |
| label | JetBrains Mono | 12px | 500 | 1.30 | 0.04em | uppercase | UI labels, form field labels |
| button-md | Inter | 14px | 600 | 1.20 | 0 | — | Default button |
| button-sm | Inter | 13px | 600 | 1.20 | 0 | — | Compact button |
| code-block | JetBrains Mono | 14px | 400 | 1.65 | 0 | liga, calt | Code block content — generous leading |
| code-inline | JetBrains Mono | 14px | 500 | 1.40 | 0 | — | Inline `code` — slightly heavier weight for inline visibility |
| code-micro | JetBrains Mono | 12px | 500 | 1.40 | 0 | — | Code copy chip, language label |
| quote-pull | Inter | 22px | 500 | 1.40 | -0.005em | — | Pull quote in long-form articles |

### Principles

- **Inter for UI, JetBrains Mono for code and metadata.** The two-family system is Hashnode's entire type vocabulary. Adding a serif or a third sans would dilute the developer-platform signal.
- **Weight 800 on Inter for display.** Most Inter-using sites cap at 700; Hashnode pushes to 800 for hero copy because the dark canvas absorbs weight — heavier strokes are needed to read as confident on `#0f1117` than on white.
- **Negative tracking compresses with size.** `-0.03em` at 72px, `-0.025em` at 64px, `-0.02em` at 40–48px, `-0.015em` at 32px, `-0.01em` at 24px, near-zero below.
- **Body holds at 16–18px on 1.60–1.65 line-height.** Generous leading is what makes long-form articles comfortable on the dark canvas; tight leading would compound the brightness of full-white text on deep navy into a strain.
- **JetBrains Mono caps at 12–13px / 0.06–0.08em tracking** for every eyebrow, status pill, and metadata caption. The mono register is the platform's identity tell.
- **Inline code is brand-tinted, not grey-tinted.** `bg: rgba(41, 98, 255, 0.12)` instead of grey — a tiny detail that ports the brand even into the smallest typographic moments.
- **Code blocks get more leading than prose.** 1.65 line-height on code, 1.60 on prose. The inversion is deliberate: code is the primary citizen, and primary citizens get the air.
- **No italic in display.** Headlines never italicise. Body italics carry quoted titles and emphasis only.

## 4. Component Stylings

### Buttons

**Primary (Solid Blue)** — `#2962ff` background, white text at 14px / 600, **8px radius**, 10×20px padding, 40px height. Hover deepens to `#1d4ed8` over 200ms standard. Active drops to `#1e40af`. Use case: *Start writing*, *Sign up*, *Publish*, *Subscribe* — the dominant action button across nav and hero. The blue is unambiguous against the navy canvas; no second action is needed at the same level.

**Secondary (Outlined)** — `#161a23` background (matching elev-1), white text, 1px border at `rgba(255, 255, 255, 0.15)`, same shape as primary. Hover deepens fill to `#1f2937` (elev-2) over 200ms. Use case: *Sign in*, *Learn more*, *Read documentation* — the twin to primary, paired adjacently in nav.

**Ghost (Quiet)** — Transparent background, white text at 14px / 500 (note: weight steps down from 600 — ghost is quieter), 8×12px padding, 8px radius. Hover fills with `rgba(255, 255, 255, 0.06)`. Use case: nav links, footer secondaries, in-card actions.

**Icon-only** — Transparent background, soft-text colour (`#a8b1bf`), 36×36px square, 8px radius. Hover fills `rgba(255, 255, 255, 0.06)` and colour shifts to white. Use case: like, bookmark, share, copy-link. Always paired with `aria-label`.

### Cards

**Article Preview Tile** — `#161a23` (elev-1) fill, white text, 1px hairline border at `rgba(255, 255, 255, 0.08)`, **12px radius**, 24px padding. Cover image top-cropped to 16:9 with 12px-radius rounding on the top corners only. Title at 18px / 600. Byline + meta at 13px / 400 in soft text. Hover: border lightens to `rgba(255, 255, 255, 0.15)` and bg shifts subtly to `#1a1f2a` over 200ms. The feed unit — the core repeating card across the home feed, profile, and search results.

**Feature Card** — `#161a23` fill, hairline border, 12px radius, 32px padding. Used for marketing pages: icon at top, 24px / 600 heading, 16px / 400 body. No shadow — tonal elevation alone.

### Code Blocks (the signature component)

**Code Block** — `#1f2937` (elev-2) fill, white text, **8px radius**, 20×24px padding, 1px hairline border at `rgba(255, 255, 255, 0.08)`. Font: JetBrains Mono 14px / 400 / 1.65 line-height. Top-left: language label in mono caption (e.g., `JAVASCRIPT`, `BASH`, `JSX`). Top-right: copy-to-clipboard chip showing `COPY` in mono micro at 11px / 500. On click, chip pulses brand blue for 300ms and label changes to `COPIED`. Prism syntax highlighting applies the syntax-token palette. Code blocks run full-bleed inside the 720px reading column — they don't indent, they don't shrink, they take the full content width.

**Inline Code** — `rgba(41, 98, 255, 0.12)` brand-blue tint background (not grey!), white text at 14px / 500 in mono, 4px radius, 2×6px padding. The brand-tinted background is the single most identifying micro-detail of Hashnode prose — every other publishing platform tints inline code grey or amber.

### Badges, Tags, Pills

**Tag Chip** — `rgba(255, 255, 255, 0.06)` background, soft text at 12px / 500 in Inter, 9999px pill radius, 4×12px padding. Hover: bg fills to `rgba(41, 98, 255, 0.12)` and text colour shifts to brand blue. Use case: article tags (`#javascript`, `#nextjs`, `#design-systems`).

**Status Pill** — `rgba(41, 98, 255, 0.12)` brand-soft fill, brand-blue text at 11px / 500 in JetBrains Mono uppercase, 6px radius, 2×8px padding. Use case: `DRAFT`, `FEATURED`, `NEW`, `BETA`.

### Inputs / Forms

**Text Input** — `#161a23` (elev-1) fill, white text at 14px / 400 in Inter, 1px border at `rgba(255, 255, 255, 0.15)`, 8px radius, 40px height, 10×14px padding. Placeholder colour at `#6b7280` muted. On focus, border colour shifts to `#2962ff` and a 3px brand-glow ring appears (`rgba(41, 98, 255, 0.32) 0 0 0 3px`).

**Search Bar** — same as text-input but with a left-aligned search icon (16px) at `#a8b1bf` and a `kbd`-style chip on the right showing `⌘K` in mono micro.

### Navigation

**Top Nav** — Translucent dark fill (`rgba(15, 17, 23, 0.72)`) with `backdrop-filter: blur(12px) saturate(180%)`, 72px height, 1px bottom hairline at `rgba(255, 255, 255, 0.08)` that appears only after scroll > 8px. Wordmark flush left in Inter 18px / 700. Center: nav links (Read, Write, Hashnode AI, Discover) in Inter 14px / 500 ghost-button style. Right: search trigger + notification icon + auth CTAs (`Sign in` ghost + `Sign up` primary blue).

**TOC Sidebar** — Sticky right rail at desktop (≥1024px), 280px wide, transparent background, 1px left hairline. Section titles in 13px / 400 soft text. Current section highlighted with brand-blue colour shift + 2px brand-blue left rule. Scroll-linked: as the user scrolls past an anchor, the highlight slides to the new section over 200ms ease-out-soft.

### Optional / Decorative

**Pull Quote** — Inter 22px / 500 / -0.005em, white text on canvas, with a 4px brand-blue vertical rule on the left edge.

**Author Card** — Profile photo (40×40px circular) + name in Inter 14px / 600 + handle in JetBrains Mono 12px / 400 muted + Follow button (ghost or primary depending on follow state).

**Reaction Bar** — Floating left rail at desktop (≥1280px) with vertical stack of icon-buttons: heart (like), bookmark, share, comment. Each button shows count below in mono caption.

**Toast** — `#161a23` fill, hairline border, 8px radius, 12×16px padding. Icon + message in Inter 14px / 400 + dismiss button. Brand-blue accent for info, success-green for confirmations, danger-red for errors.

**Modal** — `#161a23` fill, 12px radius, 24px padding, modal shadow stack. Backdrop scrim at `rgba(15, 17, 23, 0.80)`. Max-width 520px for confirmations, 720px for editorial dialogs.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128`
- Section padding (vertical): 96–128px for major marketing bands; 48–64px between article sections; 24–32px between paragraphs and code blocks
- Card internal padding: 24px on article tiles; 32px on feature cards; 20–24px on code blocks
- Inter-card gutters: 24px between feed tiles in 2-up grid

### Grid & Container

- Max content width: **1280px** for marketing pages; **720px** reading column for article body
- 12-column grid with 24px gutters at desktop
- Two-column article layout above 1024px: 720px prose column + 280px TOC sidebar (separated by 64px gutter)
- Single-column article below 1024px (TOC collapses to a top-of-page disclosure)
- Hero treatment: full-bleed dark canvas, headline left-aligned, dual CTA pair (primary blue + secondary outlined) below deck

### Whitespace Philosophy

The page balances density (the home feed runs 2-up at desktop with 3 article tiles per row visible above the fold) with editorial breathing room (article body sits in a 720px column with 1.65 line-height, generous paragraph spacing). The dark canvas absorbs whitespace differently than a light canvas — pure-white prose on `#0f1117` reads as more legible at *higher* leading values than the same prose on white, which is why Hashnode body sits at 1.60–1.65 instead of the 1.5 SaaS norm.

### Section Cadence

A typical Hashnode marketing page runs:

1. **Dark hero band** — `#0f1117` canvas, 72px / 800 H1, 18px / 400 deck, dual CTA pair, optional code-block illustration on the right side (lifted to `#1f2937`)
2. **Feature grid** — `#161a23` cards in 3-up at desktop, each with icon (24px) + 24px / 600 title + 16px / 400 body
3. **Code-tour band** — `#0f1117` canvas with a centered code block at full reading width, prose paragraphs introducing the example
4. **Testimonial band** — `#161a23` panel with pull quote in 22px / 500, author info in mono caption
5. **Pricing or CTA closer** — pricing cards in 3-up with featured tier ringed in `border-brand`, or a single centered CTA on dark canvas
6. **Footer** — `#0a0c12` deepest tier, link columns in Inter 14px / 400 muted, mono-caps section labels

The "alternation" is *tonal* rather than light/dark — deeper navy → first elevation → second elevation → back to canvas. The page never breaks into a light band.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 2px | Decorative dividers, focus indicators inside chips |
| Small | 6px | Chips, badges, inline tags, status pills |
| Standard | 8px | Buttons, inputs, code blocks — the dominant button radius |
| Comfortable | 12px | Cards (article tiles, feature cards), modals |
| Featured | 16px | Hero panels, large surfaces |
| Pill | 9999px | Tag chips, follow-button on profile, notification badges |

Hashnode's shape system sits squarely in **2026 SaaS-consensus** territory: 8px buttons, 12px cards, 9999px pills. The system avoids both the brutalist sharp corners of YC-era developer tools and the consumer-app-soft 16–20px card radii. There are no zero-radius elements except section dividers and full-bleed hero edges. Compound radii (`8px 8px 0 0` on top-of-card images) appear on article tiles where the cover image needs to round only with the card's top corners; everything else uses uniform radius.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow, canvas bg | Page canvas, body sections (~50% of surfaces) |
| 1 — Tonal | bg-elev-1 (`#161a23`) | Cards, sidebars, nav surface, default panels |
| 2 — Tonal Strong | bg-elev-2 (`#1f2937`) | Code blocks, hover surfaces, secondary nested panels |
| 3 — Tonal Peak | bg-elev-3 (`#252b3a`) | Popovers, dropdowns, modal bodies |
| 4 — Floating | tonal + `rgba(0, 0, 0, 0.40) 0 12px 32px -8px` | Dropdowns, command palette |
| 5 — Modal | scrim `rgba(15, 17, 23, 0.80)` + tonal-3 + modal shadow | Sign-in modal, confirmation dialogs |

### Shadow Philosophy

Hashnode's depth language is **tonal stacking, not shadow stacking**. On a dark canvas, shadows have to fight against the canvas itself — pure-black shadows on near-black ground are nearly invisible, and brightening the shadow with a blue tint would lift the whole page into a bluescreen register. The platform solves this by using **brightness-based elevation**: each tier is a slightly lighter navy than the canvas, and the eye reads the brightness shift as elevation. Shadow stacks are reserved for floating UI (dropdowns, modals, popovers) where the element needs to lift *off the page entirely* rather than just *above* a sibling card.

The single brand-blue shadow event is the **focus glow** — `rgba(41, 98, 255, 0.32) 0 0 0 3px`. This is the only blue-tinted shadow on the page; it appears only on focused elements and immediately re-anchors the brand identity at the moment of interaction.

## 8. Interaction & Motion

### Easing Curves

- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — Material-style; default for hover, focus, color transitions
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — punchier exit; modal entry, toast slide-in
- **Out-Soft**: `cubic-bezier(0.0, 0, 0.2, 1)` — gentle settle; dropdown reveal, TOC highlight slide

### Duration Buckets

| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 100ms | Link colour swaps, focus ring fades, icon-button hover |
| Standard | 200ms | Button hover, card border lighten, toast slide-in |
| Slow | 300ms | Code copy chip pulse, scroll-reveal fades |
| Page | 400ms | Route transitions, hero entry sequence |

### Per-Component Recipes

- **Brand-blue link hover**: colour `#2962ff` → `#3b82f6` over 100ms standard, then 1px underline appears over 100ms — the underline is the secondary signal because the colour shift is subtle.
- **Primary button hover**: bg `#2962ff` → `#1d4ed8` over 200ms standard. **No transform, no scale, no shadow change.** The colour shift carries the affordance.
- **Article card hover**: border lightens from `rgba(255, 255, 255, 0.08)` to `rgba(255, 255, 255, 0.15)` over 200ms; background tone shifts subtly from `#161a23` to `#1a1f2a`. **No translate, no lift.**
- **Code copy chip click**: chip background pulses `#2962ff` for 300ms ease-out-soft, label transitions `COPY` → `COPIED` (instant), then fades back to default state after 1.5s.
- **TOC highlight scroll**: as the page scrolls past an anchor, the active TOC item's left-rule slides from old position to new position over 200ms ease-out-soft. The colour transition is instant; the rule slide is the smooth event.
- **Hero entry**: H1 fades in over 400ms with 16px translate-up; deck follows 100ms later; CTA pair follows 200ms later. The cascade is one of the few page-transition animations on the site.
- **Scroll-reveal**: marketing-page sections fade in over 300ms ease-out-soft when entering viewport at 80% threshold. One-shot per section.
- **Toast slide-in**: from top-right with 16px translate-down + opacity 0→1 over 300ms ease-emphasized. Auto-dismisses after 4s with 200ms fade-out.

### Page Transitions

Page-to-page navigation uses a 400ms cross-fade with the sticky header staying static. Smooth-scroll for anchor links uses 600ms ease-emphasized. Article-to-article transitions (clicking an article from the feed) use a slightly longer 500ms cross-fade because the scroll position resets.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. All `translate`, `scale`, and `slide` transforms suppress entirely — replaced with instant render or opacity-only fades. Durations halve. The TOC scroll-highlight degrades to instant colour change (no rule slide). Scroll-reveal becomes instant on-mount. The hero entry cascade still happens but with opacity-only and 200ms total duration.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| `#ffffff` text on `#0f1117` canvas | 16.4 | AAA at all sizes |
| `#e5e7eb` body on `#0f1117` canvas | 14.2 | AAA at all sizes |
| `#a8b1bf` soft text on `#0f1117` canvas | 7.6 | AAA at body sizes |
| `#6b7280` muted text on `#0f1117` canvas | 4.7 | AA at body sizes |
| `#ffffff` text on `#2962ff` brand button | 4.5 | AA body / AAA large |
| `#2962ff` link on `#0f1117` canvas | 4.4 | AA at large; reinforced with hover-underline for body links |
| `#3b82f6` link-hover on `#0f1117` canvas | 5.6 | AA at body sizes |
| `#ffffff` text on `#1f2937` code block | 13.7 | AAA at all sizes |
| Prism token: `#86efac` string on `#1f2937` | 9.8 | AAA |
| Prism token: `#c084fc` keyword on `#1f2937` | 5.4 | AA at body sizes |

The brand link colour `#2962ff` sits at 4.4:1 against the canvas — just below WCAG AA at small sizes. Hashnode compensates with **hover-underline** and **weight context**: links inside sentences are surrounded by full-white prose at 16.4:1, so the colour-only signal at 4.4 is augmented by the brightness shift relative to surrounding text. For accessibility-strict deployments, increase link colour to `#3b82f6` (the hover state) for 5.6:1 AA-body compliance.

### Focus Indicators

Focus ring is a layered effect: 1px solid `#2962ff` inner border + 3px `rgba(41, 98, 255, 0.32)` translucent outer ring. The ring is offset by 2px from the element edge, which gives a clear visual separation between content and focus-state. The ring colour matches the brand exactly, reinforcing brand identity at every focus interaction.

### ARIA Patterns

- **Top nav**: `<nav aria-label="Primary">` landmark with skip-link to `<main>`.
- **Article feed**: `<section aria-label="Article feed">` containing `<article>` elements with `<h3>` titles and `<a aria-labelledby>` wrapping the entire tile.
- **Code blocks**: `<pre><code role="region" aria-label="JavaScript code example" tabindex="0">` — focusable for keyboard scrolling, labelled with the language.
- **Copy-to-clipboard chip**: `<button aria-label="Copy code">` with live `aria-live="polite"` announcement of "Code copied to clipboard" on success.
- **TOC sidebar**: `<nav aria-label="Article contents">` with `<a aria-current="location">` on the active section.
- **Modal**: `role="dialog" aria-modal="true" aria-labelledby` with focus trap and Esc-to-close.
- **Combobox / search**: `role="combobox" aria-expanded aria-autocomplete="list"`.
- **Toast notifications**: `aria-live="polite"` for non-critical, `aria-live="assertive"` for errors.

### Keyboard Navigation

- Tab order: skip-link → wordmark → primary nav → search → notifications → auth CTAs → main content (in document order) → footer
- Arrow keys navigate inside command palette (⌘K)
- `Esc` closes modals, command palette, and mobile menu
- Code blocks are focusable (`tabindex="0"`) — keyboard users can tab into them and arrow-scroll the overflow
- Reaction bar (heart, bookmark, share, comment) is keyboard-reachable with arrow-key navigation between actions

### Screen Reader Hints

- All-caps mono labels use `text-transform: uppercase` (CSS) so screen readers announce natural-case ("Draft" not "D-R-A-F-T")
- Icon-only buttons always carry `aria-label`
- Article cards label the entire tile with `aria-labelledby` pointing to the article title — screen readers announce the card as a single labelled link
- Code blocks announce their language ("JavaScript code example") on focus
- Brand-tinted inline code is announced normally; the colour is decorative-supportive only

### Reduced Motion

All transitions degrade to opacity-only or instant. Code copy chip pulses become instant colour-shift. TOC highlight slide becomes instant colour-shift. Scroll-reveal becomes static render-on-mount. Hero entry cascade compresses to a single 200ms opacity fade.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Top nav collapses to logo + search + hamburger; hero H1 drops 72→40px; feed cards 1-up; TOC collapses to top-of-article disclosure; reaction bar moves to bottom-fixed bar |
| Tablet | 640–1024px | Top nav keeps inline links; hero H1 at 56px; feed cards 2-up; TOC still collapsed |
| Desktop | 1024–1280px | Full top nav; hero H1 at 64px; feed cards 3-up; TOC sidebar appears at right rail |
| Wide | >1280px | Content width caps at 1280px; reaction bar appears as floating left rail outside content column |

### Touch Targets

- Buttons: 40px height minimum on desktop, 44px minimum on mobile (Apple HIG)
- Tag chips: 28px visual height but with 12px vertical padding for 44px effective tap area
- Code copy chip: 32×32px tap area minimum despite smaller visual size
- TOC links: 36px tap height even on desktop
- Reaction bar icons: 44×44px tap area each

### Collapsing Strategy

- **Top nav** at <1024px: primary nav links (Read, Write, AI, Discover) collapse into a hamburger sheet; search and auth CTAs stay visible
- **TOC sidebar** at <1024px: collapses into a top-of-article `<details>` disclosure
- **Reaction bar** at <1280px: moves from floating left rail to a bottom-fixed horizontal bar
- **Article feed** at breakpoints: 3 → 2 → 1 columns; cover-image aspect ratios maintain 16:9 across all sizes
- **Code blocks**: maintain full content width but allow horizontal scroll for long lines (no line-wrapping in code, ever)

### Image Behavior

Article cover images use `aspect-ratio: 16/9` to prevent layout shift. Profile photos render as `<img>` with `object-fit: cover` inside a 40×40px circular container. Markdown-embedded images inside articles render at full reading-column width (720px max) with `lazy` loading and a soft fade-in on viewport entry.

### Container Queries

Used inside article preview cards: when the card width crosses 280px, the cover image switches from top-positioned (16:9 above title) to left-positioned (4:3 to the left of title). At 320px+, the cover always sits on top; below, it sits left-of-title for compact density.

## 11. Content & Voice

### Tone

**Technical, peer-to-peer, lightly enthusiastic.** Hashnode writes like a senior developer giving a conference talk — knowledgeable, friendly, willing to use the word "you" without a marketing-template sterility. The voice is the inverse of Medium's editorial-essayist register and the inverse of dev.to's playful-emoji-heavy register. It sits between them: technical enough to assume the reader knows what JSX is, friendly enough that a junior developer reading their first long-form article doesn't feel locked out.

### Microcopy Patterns

- **Button verbs**: *Start writing*, *Publish*, *Sign up*, *Sign in*, *Read article*, *Subscribe*, *Follow*. Direct verbs, never "Click here" or "Get started" (too generic for a dev audience).
- **Error messages**: *"We couldn't publish your draft. Check your network connection and try again."* — specific, accountable, no hype, no apology emoji.
- **Success confirmations**: *"Article published."* / *"Draft saved."* — Brief, declarative, single-sentence.
- **Empty states**: *"No drafts yet. Click 'Start writing' to begin your first article."* — Explain the state, offer the next step, no shame.
- **Field labels in mono caps**: `EMAIL`, `URL`, `TAGS` — the mono-cap register signals "this is a developer-platform input field, not a generic web form."
- **Loading states**: *"Loading articles…"* — descriptive, never just "Loading…"

### Empty States

The home feed empty state for new users: *"Welcome to Hashnode. Follow some tags to start your feed."* — observational, points the user at the next action. The drafts empty state: *"No drafts yet. Click 'Start writing' to begin."* — declarative, no apology. The search no-results state: *"No articles match `[query]`. Try a different keyword or [browse trending tags]."* — offers escape paths.

### CTA Verb Conventions

- Primary action: **Start writing**, **Publish**, **Sign up free**, **Subscribe**, **Follow**
- Secondary action: **Sign in**, **Read article**, **View profile**, **Bookmark**
- Tertiary text: **See more**, **Browse tags**, **Read documentation**, **Open API docs**
- Avoided: *Click here*, *Submit*, *Get started* (too generic), *Buy now* (Hashnode is free; the verb implies wrong product), exclamation-mark-heavy enthusiasm

The verbs match the developer-peer voice — direct, outcome-focused, never marketing-template.

## 12. Dark Mode & Theming

**Hashnode IS dark mode.** The marketing surface is dark-only — there is no light variant. The product UI (the editor, the dashboard, the reader) supports a system-controlled light theme as a per-user preference, but the brand's visual identity is anchored on the deep navy canvas. The brand position: dark canvas signals "developer-grade publishing platform"; switching to light would shift the brand into Medium-adjacent territory and dilute the "this is for engineers" positioning.

If a light variant ever ships (e.g., for embedded widgets on third-party light-canvas sites), the token swap would be:

- canvas: `#0f1117` → `#ffffff`
- text: `#ffffff` → `#0f1117`
- text-body: `#e5e7eb` → `#1f2937`
- elev-1: `#161a23` → `#f8fafc`
- elev-2: `#1f2937` → `#f1f5f9` (code block bg in light mode)
- border: `rgba(255, 255, 255, 0.08)` → `rgba(0, 0, 0, 0.08)`
- brand: `#2962ff` (unchanged — Material Blue A700 passes contrast on both grounds)
- on-brand: `#ffffff` (unchanged)
- shadow tones: black-tinted at lower opacity (5–10% instead of 20–60%)

The brand-blue `#2962ff` sits at 4.5:1 against white as well as on dark — Material Design's A700 colour was specifically calibrated for cross-mode use. The code-block syntax-highlighting palette would need a separate light-mode tuning (deeper, lower-saturation Prism tokens). For now: dark only, by design.

## 13. Lineage & Influences

Hashnode's design DNA traces three lineages: **GitHub's dark theme** (the dev-tool dark default since 2020 — navy-not-black canvas with blue accent, tonal stacking instead of shadow), **Material Design's Blue A700** (the `#2962ff` brand colour is precisely Google's Blue A700, chosen for max signal on dark canvas), and **the Inter + JetBrains Mono pair** that Linear, Vercel, GitHub Primer, and Stripe Dashboard all converged on post-2018. The platform reads as a deliberately developer-shaped publishing surface — the visual register is `~/.config/dev-tools-aesthetic`.

The choice of `#0f1117` over pure `#000` is the brand's most considered decision. Pure black creates harsh contrast against full-white text that becomes uncomfortable for long-form code reading; the deep navy softens the contrast just enough to make 30-minute deep-reads comfortable while preserving the dark-canvas brand. GitHub made the same calculation in 2020 with their dark theme (`#0d1117` — Hashnode is one digit off, almost certainly homage). The IDE-grade darkness is what tells the developer reader: *this site assumes you read code blocks the way you read prose.*

Brand blue applied liberally (CTAs, links, focus rings, hover states, inline-code tints) is Hashnode's deliberate departure from the Linear/Vercel restraint convention — those peers use brand blue only for links and the occasional gradient stop, never as a primary button fill. Hashnode goes the other way: blue is the brand voltage, and it should appear wherever the user is being asked to act. The reasoning is publishing-platform-specific: writers and readers are constantly making micro-decisions (subscribe? bookmark? follow? share?), and a single recognizable colour cue at every action point reduces decision friction.

What Hashnode rejects: serif body type (Medium signal), warm cream surfaces (Substack signal), playful illustrated heros (dev.to signal), pure-black canvas (TextEdit signal), low-saturation muted-blue accents (corporate-SaaS signal). The brand position is engineered to look like an extension of the developer's tool chain, not like an editorial product.

**Influences:**

- **GitHub Dark Theme** — Navy-not-black canvas (`#0d1117`), translucent-white borders, tonal-stacking elevation. The dev-tool dark default. *https://primer.style/foundations/color*
- **JetBrains Mono** — Mono of choice for code blocks; designed by JetBrains for code editors with explicit ligature support. The IDE-grade signal. *https://www.jetbrains.com/lp/mono/*
- **Material Design Blue A700** — `#2962ff` is Google Material's vibrant blue. Calibrated for max signal on dark canvas; the brand voltage. *https://m2.material.io/design/color/the-color-system.html*
- **Inter (Rasmus Andersson)** — The default UI face for dev tools post-2018. Hashnode uses Inter Variable for hierarchy without loading multiple weights. *https://rsms.me/inter/*
- **Vercel** — Adjacent dev-tool peer. Hashnode shares the dense neutral hierarchy and brand-blue link discipline, but inverts the canvas to dark. *https://vercel.com*
- **Linear** — Adjacent peer for the brand-blue-as-link discipline and the mono-eyebrow convention. *https://linear.app*
- **dev.to / DEV Community** — Direct competitor; Hashnode positions itself as the cleaner, more developer-shaped alternative. *https://dev.to*
- **Stack Overflow** — Adjacent precedent for mono-aware developer-publishing UI. *https://stackoverflow.com*
- **GitHub Primer** — Open dev-tool design system; Hashnode borrows the navy-canvas, blue-accent, mono-discipline patterns. *https://primer.style*

## 14. Do's and Don'ts

### Do

- **Do** use deep navy `#0f1117` for the canvas — the GitHub-lineage dev-tool dark default. Pure `#000` breaks long-form readability.
- **Do** apply brand blue `#2962ff` liberally on CTAs, links, focus rings, and inline-code tints. The Hashnode pitch is that blue is the brand voltage; withholding it loses the platform identity.
- **Do** use Inter Variable for UI and JetBrains Mono for code, eyebrows, and metadata. The two-family system is the entire type vocabulary.
- **Do** lift code blocks to `bg-elev-2` (`#1f2937`) — they're the platform's primary citizen and deserve the elevation tier.
- **Do** tint inline code with `rgba(41, 98, 255, 0.12)` brand-blue, not grey — micro-scale brand expression.
- **Do** include a copy-to-clipboard chip + language label on every code block. The signature component.
- **Do** cap reading width at 720px even on 1280px pages; the column is calibrated for ~70-character line length.
- **Do** use 16–18px body on 1.60–1.65 line-height — generous leading for dark-canvas long-form reading.
- **Do** ship hairline borders at `rgba(255, 255, 255, 0.08)` for cards. Tonal elevation alone — no shadow on content cards.
- **Do** use weight 800 on Inter for hero display copy. Dark canvas absorbs weight.
- **Do** apply brand-blue glow `rgba(41, 98, 255, 0.32) 0 0 0 3px` for focus rings — visible and brand-reinforcing.
- **Do** use mono caps for every section eyebrow, status pill, and metadata caption. The mono register is the platform identity tell.

### Don't

- **Don't** drop to pure `#000` for the canvas. The navy is calibrated for long-form code legibility.
- **Don't** mix serif body into the reading view. Hashnode's identity is sans + mono, not editorial-serif. Adding a serif breaks the developer-platform signal.
- **Don't** use heavy drop shadows on content cards. Tonal layering carries the elevation.
- **Don't** withhold brand blue from CTAs. Linear's accent-only philosophy doesn't apply here — Hashnode is more permissive on purpose.
- **Don't** tint inline code grey. The brand-blue tint is the micro-scale identity signal.
- **Don't** drop body line-height below 1.60. Tight leading on dark canvas compounds the brightness of full-white text into reader strain.
- **Don't** use warm cream or off-white surfaces. The brand neutrals are cool navy at every elevation.
- **Don't** introduce a second accent colour. The system is monochromatic-blue at varying alpha.
- **Don't** widen the reading column beyond 720px. The ~70-character line length is optimised for code block readability.
- **Don't** skip the language label on code blocks. The mono caption ports brand even on technical artifacts.
- **Don't** use saturated colours for syntax-highlight tokens. The Prism palette is muted-pastel; loud syntax tokens fight the brand blue for attention.

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:           #0f1117
Elev-1:           #161a23
Elev-2 (code):    #1f2937
Text:             #ffffff
Text-body:        #e5e7eb
Text-soft:        #a8b1bf
Brand-blue:       #2962ff
Brand-hover:      #1d4ed8
Brand-soft:       rgba(41, 98, 255, 0.12)
Border:           rgba(255, 255, 255, 0.08)
Border-strong:    rgba(255, 255, 255, 0.15)
Focus-ring:       rgba(41, 98, 255, 0.32) 0 0 0 3px
```

### Example Component Prompts

1. **"Create a Hashnode-style hero: deep navy `#0f1117` canvas, 72px / 800 Inter H1 with `-0.03em` tracking in pure white, 18px / 400 Inter deck in `#e5e7eb` at 1.65 line-height, dual CTA pair below — primary `#2962ff` blue button (white text, 14px / 600, 8px radius, 10×20 padding) and secondary outlined button (`#161a23` fill, white text, 1px `rgba(255, 255, 255, 0.15)` border). Optional: code-block illustration on the right side at `#1f2937` fill with JetBrains Mono 14px JavaScript example."**

2. **"Design an article preview tile: `#161a23` background, 12px radius, 1px `rgba(255, 255, 255, 0.08)` hairline border, 24px padding. Cover image top-cropped to 16:9 with rounded top corners. Title at 18px / 600 Inter in white. Byline + read-time + tag chips at 13px / 400 in `#a8b1bf` soft text. Hover lightens border to 0.15 opacity and bg to `#1a1f2a` over 200ms — no transform, no lift."**

3. **"Build a code block in Hashnode style: `#1f2937` fill, 8px radius, 1px `rgba(255, 255, 255, 0.08)` border, 20×24 padding. JetBrains Mono 14px / 400 / 1.65 line-height code content with Prism syntax highlighting (purple keywords, green strings, amber numbers, muted-grey comments). Top-left: language label in mono caption uppercase at 11px / 500 / `#a8b1bf`. Top-right: copy-to-clipboard chip showing `COPY` in mono micro at 11px / 500. On click, chip pulses `#2962ff` for 300ms and label shifts to `COPIED`."**

4. **"Compose Hashnode top nav: 72px height, `rgba(15, 17, 23, 0.72)` translucent fill with `backdrop-filter: blur(12px) saturate(180%)`, hairline bottom border that appears on scroll. Wordmark left in Inter 18px / 700. Center: nav links (Read, Write, Hashnode AI, Discover) at 14px / 500 ghost-button style. Right: search trigger (with `⌘K` mono kbd chip) + notification icon + ghost `Sign in` + primary `#2962ff` blue `Sign up` button."**

5. **"Render a tag chip cluster: 4-6 tag chips in a horizontal row with 8px gaps. Each chip: `rgba(255, 255, 255, 0.06)` fill, 12px / 500 Inter `#a8b1bf` text, 9999px pill radius, 4×12px padding. Hover: bg fills `rgba(41, 98, 255, 0.12)` brand-blue tint and text shifts to `#2962ff`. Tags read like `#javascript`, `#nextjs`, `#design-systems`."**

6. **"Build a Hashnode form input: `#161a23` (elev-1) fill, 1px `rgba(255, 255, 255, 0.15)` border, 8px radius, 40px height, 10×14px padding. White text at 14px / 400 Inter. Placeholder at `#6b7280`. On focus: border shifts to `#2962ff` and a 3px `rgba(41, 98, 255, 0.32)` brand-glow ring appears over 100ms. Above the input: mono-caps label `EMAIL` at 12px / 500 / `0.04em` tracking in `#a8b1bf`."**

### Iteration Guide

1. **Check the canvas value.** If it's `#000` or `#111`, you've drifted to TextEdit territory. Hashnode is `#0f1117` — softer than pure black, GitHub-lineage navy-grade.
2. **Use Inter + JetBrains Mono only.** Adding a serif (Medium signal) or a third sans (Substack signal) breaks the developer-platform identity. The two-family system is the entire vocabulary.
3. **Apply brand blue liberally.** If your CTA is `#161a23` outlined or grey-filled, you've gone Linear/Vercel-restraint instead of Hashnode-permissive. The blue is the platform voltage; use it.
4. **Lift code blocks.** Code blocks live at `#1f2937` (elev-2), not on canvas. Add the language label and copy chip. They're the platform's primary citizen.
5. **Tint inline code blue.** `rgba(41, 98, 255, 0.12)` background, not grey. This single micro-detail is one of the most identifying brand signals.
6. **Generous body leading.** 1.60–1.65 line-height on body, never below 1.50. Dark-canvas full-white text needs the air.
7. **Tonal stacking, not shadow.** Cards lift via brightness, not via shadow. Reserve shadows for floating UI (dropdowns, modals).
8. **Mono for eyebrows and metadata.** Every section pre-label, status pill, and metadata caption should be JetBrains Mono caps with `0.06–0.08em` tracking. The mono register compounds across the page.
