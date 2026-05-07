---
name: shadcn/ui
tagline: Copy-paste components in pure black-on-white — the most influential design system not actually shipped as a library.
updated_at: 2026-05-06T15:27:43+12:00
published_at: 2026-05-03T16:49:18+12:00
author: webdesignhot
source_url: https://ui.shadcn.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [dev-tools, design-tools]
tags: [light, dark, minimal, mono, sans, structured, multi-theme, cool]
preview_swatch: ['#ffffff', '#0a0a0a', '#71717a']
related: [vercel, tailwindcss, framer]
description: 'shadcn/ui''s site is the visual argument for its design philosophy: pure black-on-white minimalism, Geist Sans for everything except code, Geist Mono / JetBrains Mono for code, and components rendered as themselves. There''s no marketing chrome, no gradients, no illustration — the page is a documentation surface that doubles as the most-referenced component library of the 2020s. The chromatic posture is aggressively monochromatic — pure white `#ffffff` canvas, near-black `#0a0a0a` for primary action, and the zinc neutral family (`#fafafa` → `#f4f4f5` → `#e4e4e7` → `#a1a1aa` → `#71717a` → `#52525b` → `#3f3f46` → `#27272a` → `#18181b` → `#0a0a0a`) supplying every grey. The dark theme inverts the canvas to `#0a0a0a` and the button to `#fafafa`, with no other adjustment. The famous `--radius: 0.5rem` (8px) card radius and 6px button radii became the default look of New Web Software circa 2023–2025.'

themes:
  default: light
  available: [light, dark]
  switch-via: 'data-theme attribute on <html>; persisted in localStorage; system preference honored on first paint'

colors:
  light:
    bg: '#ffffff'                  # canvas — pure white
    surface: '#fafafa'             # zinc-50, muted background
    surface-strong: '#f4f4f5'      # zinc-100, accent / hover
    surface-muted: '#f4f4f5'       # alias for muted card background
    surface-accent: '#f4f4f5'      # accent surface for hover/select
    surface-elevated: '#ffffff'    # popover, dialog
    text: '#0a0a0a'                # primary body — near-black (the iconic 'foreground')
    text-strong: '#000000'         # display copy at full black, rare
    text-secondary: '#3f3f46'      # zinc-700, body emphasis
    text-muted: '#71717a'          # zinc-500 — the iconic muted-fg
    text-faint: '#a1a1aa'          # zinc-400, captions and disabled
    brand: '#0a0a0a'               # primary action — near-black solid button
    brand-hover: '#1a1a1a'         # hover-darker (subtle lift toward zinc-900)
    brand-active: '#27272a'        # zinc-800, pressed
    on-brand: '#fafafa'            # near-white text on the black button
    link: '#0a0a0a'                # links inherit foreground; underline for affordance
    link-hover: '#3f3f46'          # subtle darken
    destructive: '#ef4444'         # red-500, destructive actions
    destructive-hover: '#dc2626'   # red-600
    destructive-foreground: '#fafafa' # white on destructive
    border: '#e4e4e7'              # zinc-200 — the hairline, the structural rule
    border-soft: '#f4f4f5'         # zinc-100, subtle separator
    border-strong: '#d4d4d8'       # zinc-300, emphasized
    input: '#e4e4e7'               # alias for input border
    input-border: '#e4e4e7'
    ring: '#0a0a0a'                # focus ring color
    selection-bg: 'rgba(10, 10, 10, 0.1)' # text selection, near-black at 10%
    shadow-color: 'rgba(0, 0, 0, 0.05)' # ambient shadow at low alpha
    shadow-color-md: 'rgba(0, 0, 0, 0.1)' # standard popover shadow
    shadow-color-lg: 'rgba(0, 0, 0, 0.15)' # modal shadow
    success: '#10b981'             # emerald-500, sparingly used
    warning: '#f59e0b'             # amber-500
    info: '#3b82f6'                # blue-500
    chart-1: '#e76e50'             # chart palette (used in dashboard demos)
    chart-2: '#2a9d90'
    chart-3: '#274754'
    chart-4: '#e8c468'
    chart-5: '#f4a462'

  dark:
    bg: '#0a0a0a'                  # dark canvas (near-black, never pure)
    surface: '#171717'             # zinc-900, muted background
    surface-strong: '#18181b'      # zinc-900 card
    surface-muted: '#171717'       # zinc-900 muted
    surface-accent: '#27272a'      # zinc-800 accent surface
    surface-elevated: '#18181b'    # zinc-900 popover, dialog
    text: '#fafafa'                # primary body — near-white
    text-strong: '#ffffff'         # display copy
    text-secondary: '#d4d4d8'      # zinc-300, body emphasis
    text-muted: '#a1a1aa'          # zinc-400, the muted-fg in dark
    text-faint: '#71717a'          # zinc-500, captions and disabled
    brand: '#fafafa'               # inverted — light button on dark canvas
    brand-hover: '#e4e4e7'         # zinc-200 on hover
    brand-active: '#d4d4d8'        # zinc-300 pressed
    on-brand: '#0a0a0a'            # near-black text on the white-inverted button
    link: '#fafafa'                # links inherit foreground
    link-hover: '#d4d4d8'          # zinc-300 subtle softening
    destructive: '#7f1d1d'         # red-900, dark-mode destructive (matches shadcn defaults)
    destructive-hover: '#991b1b'   # red-800
    destructive-foreground: '#fafafa'
    border: '#27272a'              # zinc-800 hairline
    border-soft: '#18181b'         # zinc-900 subtle separator
    border-strong: '#3f3f46'       # zinc-700, emphasized
    input: '#27272a'
    input-border: '#27272a'
    ring: '#fafafa'                # focus ring color
    selection-bg: 'rgba(250, 250, 250, 0.12)' # text selection on dark
    shadow-color: 'rgba(0, 0, 0, 0.30)' # deeper ambient on dark
    shadow-color-md: 'rgba(0, 0, 0, 0.45)'
    shadow-color-lg: 'rgba(0, 0, 0, 0.60)'
    success: '#10b981'             # emerald, identical across themes
    warning: '#f59e0b'
    info: '#3b82f6'
    chart-1: '#e76e50'
    chart-2: '#2a9d90'
    chart-3: '#274754'
    chart-4: '#e8c468'
    chart-5: '#f4a462'

typography:
  display:
    family: '"Geist", "Geist Sans", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: "'cv11', 'ss01', 'ss03'"
  body:
    family: '"Geist", "Geist Sans", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"Geist Mono", "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
    weights: [400, 500, 600]
  scale:
    display-hero:    { size: 56, weight: 600, lineHeight: 1.05, tracking: '-0.025em', family: display, opentype: "'ss01'" }
    display-h1:      { size: 48, weight: 600, lineHeight: 1.10, tracking: '-0.022em', family: display }
    display-h2:      { size: 32, weight: 600, lineHeight: 1.15, tracking: '-0.015em', family: display }
    display-h3:      { size: 24, weight: 600, lineHeight: 1.25, tracking: '-0.01em',  family: display }
    title-lg:        { size: 20, weight: 600, lineHeight: 1.30, tracking: '-0.005em', family: display }
    title-md:        { size: 18, weight: 600, lineHeight: 1.35, tracking: 0,          family: body }
    title-sm:        { size: 16, weight: 600, lineHeight: 1.40, tracking: 0,          family: body }
    lead:            { size: 18, weight: 400, lineHeight: 1.60, tracking: 0,          family: body, notes: 'subhead under hero' }
    body:            { size: 16, weight: 400, lineHeight: 1.60, tracking: 0,          family: body }
    body-small:      { size: 14, weight: 400, lineHeight: 1.50, tracking: 0,          family: body }
    label:           { size: 14, weight: 500, lineHeight: 1.40, tracking: 0,          family: body, notes: 'form labels and button text' }
    label-small:     { size: 13, weight: 500, lineHeight: 1.40, tracking: 0,          family: body }
    caption:         { size: 12, weight: 400, lineHeight: 1.40, tracking: 0,          family: body }
    button:          { size: 14, weight: 500, lineHeight: 1.0,  tracking: 0,          family: body }
    nav-link:        { size: 14, weight: 500, lineHeight: 1.40, tracking: 0,          family: body }
    code-block:      { size: 13.6, weight: 400, lineHeight: 1.55, tracking: 0,        family: mono, notes: '0.85rem — sized down inside content' }
    code-inline:     { size: 13.6, weight: 500, lineHeight: 1.50, tracking: 0,        family: mono, notes: 'with surface-muted background' }
    code-cli:        { size: 14, weight: 400, lineHeight: 1.55, tracking: 0,          family: mono }
    badge:           { size: 12, weight: 500, lineHeight: 1.0,  tracking: 0,          family: mono, notes: 'mono badges are part of the brand fingerprint' }
    kbd:             { size: 12, weight: 500, lineHeight: 1.0,  tracking: 0,          family: mono }

radius:
  micro: 2          # --radius - 6px (calc'd)
  xs: 4             # --radius - 4px
  sm: 6             # --radius - 2px (button, input)
  md: 8             # --radius (default), card
  lg: 12            # --radius + 4px (large surfaces)
  xl: 16            # --radius + 8px (rare, dialogs)
  pill: 9999

spacing:
  base: 4
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 24
  xl: 32
  xxl: 48
  section: 96
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]

layout:
  page-width: 1400
  prose-width: 720
  header-height: 56
  sidebar-width: 240
  toc-width: 240

components:
  button-primary:
    backgroundColor: brand
    textColor: on-brand
    rounded: sm
    padding: '8px 16px'
    height: 36
    use: 'Solid #0a0a0a near-black on white, 6px radius, Geist 500 weight; inverts on dark theme'
  button-secondary:
    backgroundColor: surface-strong
    textColor: text
    rounded: sm
    padding: '8px 16px'
    height: 36
    use: 'Subtle gray fill #f4f4f5; for paired secondary actions'
  button-outline:
    backgroundColor: bg
    textColor: text
    border: '1px solid #e4e4e7'
    rounded: sm
    padding: '8px 16px'
    height: 36
    use: 'Outlined alternative — 1px zinc-200 border on white'
  button-ghost:
    backgroundColor: transparent
    textColor: text
    rounded: sm
    padding: '8px 16px'
    height: 36
    use: 'No fill, no border; hovers to surface-strong; icon buttons in toolbars'
  button-destructive:
    backgroundColor: destructive
    textColor: destructive-foreground
    rounded: sm
    padding: '8px 16px'
    height: 36
    use: 'Red-500 fill for destructive confirmations only'
  button-link:
    backgroundColor: transparent
    textColor: text
    use: 'Pure text-link styled button with underline-on-hover'
  card:
    backgroundColor: bg
    border: '1px solid #e4e4e7'
    rounded: md
    padding: 24
    use: 'The famous 0.5rem card — flat-on-flat with hairline border, no shadow'
  card-elevated:
    backgroundColor: bg
    border: '1px solid #e4e4e7'
    rounded: md
    padding: 24
    shadow: ambient
    use: 'Card with subtle shadow for popovers and dialogs'
  input-text:
    backgroundColor: bg
    textColor: text
    rounded: sm
    padding: '8px 12px'
    height: 36
    border: '1px solid #e4e4e7'
    use: 'Text input — focuses to 2px ring of #0a0a0a'
  badge-default:
    backgroundColor: brand
    textColor: on-brand
    rounded: sm
    padding: '2px 8px'
    use: 'Solid near-black badge with mono font'
  badge-secondary:
    backgroundColor: surface-strong
    textColor: text
    rounded: sm
    padding: '2px 8px'
    use: 'Subtle gray badge — the most-copied shadcn component'
  badge-outline:
    backgroundColor: bg
    textColor: text
    border: '1px solid #e4e4e7'
    rounded: sm
    padding: '2px 8px'
  code-block:
    backgroundColor: surface
    textColor: text
    rounded: md
    padding: 16
    border: '1px solid #e4e4e7'
    font: mono
    use: 'Geist Mono on #fafafa with shiki/Tailwind syntax theme'
  separator:
    backgroundColor: border
    height: 1
  popover:
    backgroundColor: bg
    border: '1px solid #e4e4e7'
    rounded: md
    shadow: standard
    use: 'Dropdown menu, command palette popover'
  dialog:
    backgroundColor: bg
    border: '1px solid #e4e4e7'
    rounded: lg
    shadow: deep
    use: 'Modal dialog with backdrop dim'
  top-nav:
    backgroundColor: bg
    height: 56
    border: '1px solid #e4e4e7'
    use: 'Sticky header with bottom hairline; backdrop blur on scroll'
  sidebar:
    backgroundColor: bg
    width: 240
    border: '1px solid #e4e4e7'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.16, 1, 0.3, 1)'
  ease-out: 'cubic-bezier(0, 0, 0.2, 1)'
  duration-fast: 100
  duration-standard: 150
  duration-slow: 250
  duration-modal: 200
  reduced-motion: 'respects prefers-reduced-motion: reduce — opacity-only transitions; transforms removed'

breakpoints:
  mobile: 640
  tablet: 768
  desktop: 1024
  wide: 1280
  ultrawide: 1536

shadows:
  ambient: 'rgba(0, 0, 0, 0.05) 0 1px 2px'
  standard: 'rgba(0, 0, 0, 0.08) 0 4px 6px -1px, rgba(0, 0, 0, 0.04) 0 2px 4px -2px'
  elevated: 'rgba(0, 0, 0, 0.1) 0 10px 15px -3px, rgba(0, 0, 0, 0.05) 0 4px 6px -4px'
  deep: 'rgba(0, 0, 0, 0.15) 0 24px 48px -12px'
  ring: '0 0 0 2px #ffffff, 0 0 0 4px #0a0a0a'
  ring-dark: '0 0 0 2px #0a0a0a, 0 0 0 4px #fafafa'

accessibility:
  contrast-text-on-bg: 19.5            # AAA — #0a0a0a on #ffffff
  contrast-text-on-brand: 17.6         # AAA — #fafafa on #0a0a0a
  contrast-muted-on-bg: 4.6            # AA — #71717a on #ffffff
  contrast-secondary-on-bg: 11.6       # AAA — #3f3f46 on #ffffff
  contrast-text-on-surface: 18.2       # AAA — #0a0a0a on #fafafa
  focus-ring: '2px solid #0a0a0a with 2px offset (light); 2px solid #fafafa with 2px offset (dark)'
  reduced-motion-honored: true

dark-mode: 'first-class — shadcn/ui ships full dark theme via the next-themes pattern; the inversion is mathematical (canvas #ffffff ↔ #0a0a0a, brand #0a0a0a ↔ #fafafa) with the zinc neutral family adjusted but no chromatic shift'

lineage:
  summary: |
    shadcn/ui is the most influential design-system project of the
    2020s, and its marketing surface is the argument for its
    philosophy: components live in your codebase as code, styled with
    Tailwind, themed with CSS variables, copied not installed. The
    site is built on Next.js and uses its own components throughout —
    the entire page *is* the demo. Chromatically the whole system is
    near-monochrome: a pure white canvas (or `#0a0a0a` near-black in
    dark theme), with the zinc family (`#fafafa` → `#71717a` →
    `#0a0a0a`) supplying every neutral. The action colour is a near-
    black solid button that inverts in dark mode; there is no brand
    accent, no gradient, no chromatic identity beyond *the absence of
    a chromatic identity*. The type system is **Geist** (Vercel's
    family) for sans, and **Geist Mono** for code, which ties the
    library visually to the Vercel ecosystem where it most often
    runs. The famous `--radius: 0.5rem` (8px) card and 6px button
    radii became the default look of New Web Software circa 2023–
    2025 — copied so widely that "looks like shadcn" is now its own
    aesthetic category. The lineage runs through Radix UI's
    accessibility primitives (which shadcn wraps), Tailwind's
    utility philosophy, and Vercel's monochromatic discipline.
  influences:
    - name: Radix UI
      role: Provides the accessibility primitives shadcn wraps — the components are technically Radix + Tailwind.
      url: https://www.radix-ui.com
    - name: Tailwind CSS
      role: The styling layer and the zinc / neutral colour scales that supply shadcn's entire palette.
      url: https://tailwindcss.com
    - name: Vercel / Geist
      role: Provides the typeface (Geist Sans + Mono) and the monochromatic discipline shadcn extends.
      url: https://vercel.com/font
    - name: GitHub Primer
      role: Documentation-as-product discipline; semantic tokens with CSS-variable theming.
      url: https://primer.style
    - name: Stripe Documentation
      role: Sidebar + content + table-of-contents three-column docs layout reference.
      url: https://stripe.com/docs
---

## 1. Visual Theme & Atmosphere

shadcn/ui's site is the most accurate possible advertisement for its philosophy: it *is* the components. Every button, card, input, and badge on the page is rendered with the same source you would copy into your own codebase. The chromatic posture is **aggressively monochromatic** — pure white `#ffffff` canvas, near-black `#0a0a0a` for primary action, and the zinc neutral family supplying every grey. The dark theme inverts the canvas to `#0a0a0a` and the button to `#fafafa`, with no other adjustment.

There is no marketing band, no hero illustration, no gradient, no decorative accent color. The page reads as documentation that happens to be beautifully typeset, which is precisely the strategic message: *if you copy these components, your app will look like this — calm, monochromatic, professional.* The absence of brand color is itself the brand. Where every other design system tries to assert chromatic identity (Stripe's purple, Vercel's blue, Linear's indigo), shadcn refuses — the system is meant to be re-themed downstream, so its native state is the chromatic null.

Type runs **Geist Sans** (Vercel's commissioned family) at 400–600 for everything except code, where **Geist Mono** takes over with its distinctive zero, ligatures, and visible terminals. The mono is everywhere: code blocks, inline `code` references, badge components, CLI snippets, and most kbd shortcuts. Geist's slightly geometric letterforms with humanist details keep large headlines calm rather than aggressive — exactly the posture shadcn projects.

The structural rule is the **0.5rem radius** card with the **zinc-200 hairline border** and **no shadow**. Cards are flat-on-flat with a 1px `#e4e4e7` border. Depth comes from the surface ladder (`#ffffff` → `#fafafa` → `#f4f4f5`) plus that hairline. Shadows appear only on overlay UI: popovers, dropdowns, dialogs. The ambient shadow on cards in marketing surfaces is essentially zero.

The container caps at 1400px with 24px gutters and a sidebar-content-toc three-column documentation layout — left sidebar for component navigation (240px), central content column for prose and live demos, right sidebar for in-page anchors (240px). Component-demo blocks alternate between rendered preview and source code, both rendered with the same tokens. The 4px micro-rhythm comes directly from Tailwind's spacing scale.

**Key Characteristics:**
- Pure white `#ffffff` canvas (light) inverting to `#0a0a0a` near-black (dark) — never pure black.
- Near-black `#0a0a0a` solid button as primary action; inverts to near-white on dark theme.
- Zinc neutral family (`#fafafa` → `#71717a` → `#0a0a0a`) supplying every grey.
- Geist Sans for everything except code; Geist Mono for code, badges, and kbd.
- 0.5rem (8px) `--radius` token controls all radii: buttons at 6px, cards at 8px, large at 12px.
- 1px `#e4e4e7` hairline border on every card — no shadow.
- Surface ladder (bg → muted → accent) does the depth work, not shadows.
- Three-column documentation layout: 240px sidebar + content + 240px TOC.
- Mono badges, mono kbd, mono inline code — part of the brand fingerprint.
- No brand color. The absence of color *is* the brand.

## 2. Color Palette & Roles

### Primary
- **Bg / Canvas** (`#ffffff` light, `#0a0a0a` dark): Pure white inverts to near-black. The single most-load-bearing token.
- **Text / Foreground** (`#0a0a0a` light, `#fafafa` dark): Near-black inverts to near-white. Body and headlines.
- **Brand / Primary CTA** (`#0a0a0a` light, `#fafafa` dark): Near-black solid button inverts to near-white. The action-color discipline.

### Brand & Dark
- **Brand** (`#0a0a0a` light): Near-black solid button. Foreground inverted on dark theme.
- **Brand Hover** (`#1a1a1a` light): Hover-darker — actually subtly *lighter* than `#0a0a0a` for the lift signal.
- **Brand Active** (`#27272a` light): Pressed/active zinc-800.
- **Brand on Dark** (`#fafafa` dark): The inverted button.
- **Brand on Dark Hover** (`#e4e4e7` dark): Zinc-200 hover state.
- **On-brand** (`#fafafa`): Near-white text on the black button.
- **On-brand Dark** (`#0a0a0a`): Near-black text on the white-inverted button.

### Accent
shadcn explicitly avoids accent colors. The only chromatic exceptions:
- **Destructive** (`#ef4444`): Red-500. Reserved strictly for destructive confirmations.
- **Success** (`#10b981`): Emerald-500. Used in toast confirmations and form-validation success states.
- **Warning** (`#f59e0b`): Amber-500. Sparing — caution states.
- **Info** (`#3b82f6`): Blue-500. Reserved for informational toasts.

### Interactive
- **Link** (`#0a0a0a`): Inline links inherit foreground. Underlined for affordance.
- **Link Hover** (`#3f3f46`): Subtle darken (well, lighten on light theme — to zinc-700).
- **Selected** (`rgba(10, 10, 10, 0.1)`): Text selection at 10% near-black.
- **Disabled** (`#a1a1aa`): Zinc-400 disabled labels.

### Neutral Scale (the Zinc Family)
shadcn's entire neutral palette is Tailwind's `zinc` scale — slightly warmer than `slate`, slightly cooler than `gray`. The progression is the system's expressive range.
- **Bg** (`#ffffff`): Light canvas.
- **Surface / zinc-50** (`#fafafa`): Muted background, table headers, code-block bg.
- **Surface Strong / zinc-100** (`#f4f4f5`): Hover surfaces, secondary button bg, badge bg.
- **Border / zinc-200** (`#e4e4e7`): The hairline. The structural rule.
- **Border Strong / zinc-300** (`#d4d4d8`): Emphasized divider.
- **Text Faint / zinc-400** (`#a1a1aa`): Disabled labels, placeholder text.
- **Text Muted / zinc-500** (`#71717a`): The iconic muted-foreground — captions, hint text, secondary copy. Used everywhere documentation needs a softer voice.
- **zinc-600** (`#52525b`): Mid-tone, rare in shadcn proper but available.
- **Text Secondary / zinc-700** (`#3f3f46`): Body emphasis on dark, labels on light.
- **zinc-800** (`#27272a`): Brand-active, dark border.
- **Surface Dark Card / zinc-900** (`#18181b`): Dark theme card surface.
- **Text / zinc-950** (`#0a0a0a`): The near-black foreground.

### Surface & Borders
- **Bg** (`#ffffff`): Default canvas.
- **Surface** (`#fafafa`): Muted card background, code-block, table-header.
- **Surface Strong** (`#f4f4f5`): Hover and accent surfaces, secondary-button fill.
- **Surface Elevated** (`#ffffff`): Popover, dialog (same as bg, lifted via shadow).
- **Border** (`#e4e4e7`): 1px zinc-200 hairline. The structural rule across the entire system.
- **Border Soft** (`#f4f4f5`): Subtle separator, table-row dividers.
- **Border Strong** (`#d4d4d8`): Emphasized divider.

### Shadow Colors
- **Shadow / Ambient** (`rgba(0, 0, 0, 0.05)`): Almost imperceptible — used on subtle card lift only.
- **Shadow / Standard** (`rgba(0, 0, 0, 0.08)`): Popover, dropdown.
- **Shadow / Elevated** (`rgba(0, 0, 0, 0.1)`): Hover-state surfaces.
- **Shadow / Deep** (`rgba(0, 0, 0, 0.15)`): Modal dialog.

shadcn's shadows are **neutral black at low alpha**, never colored, never tinted. The ring on focus inputs is the pure brand color (`#0a0a0a` on light, `#fafafa` on dark) at 2px with a 2px offset.

### Semantic
- **Success** (`#10b981`): Emerald-500 — confirmation toasts.
- **Warning** (`#f59e0b`): Amber-500 — caution states.
- **Destructive / Danger** (`#ef4444`): Red-500 — destructive confirmations.
- **Info** (`#3b82f6`): Blue-500 — informational toasts.

## 3. Typography Rules

### Font Family
- **Primary**: Geist Sans (`"Geist", "Geist Sans", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif`). Vercel's commissioned sans — humanist details on a slightly geometric grid. Handles every text role except code.
- **Mono**: Geist Mono (`"Geist Mono", "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`). The code companion — distinctive zero, dotted i, visible terminals.
- **OpenType features**: `'cv11'`, `'ss01'`, `'ss03'` toggled at display sizes for stylistic alternates. Tabular numbers (`'tnum'`) on data tables.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display-hero | Geist | 56 | 600 | 1.05 | -0.025em | ss01 | Marketing landing h1 |
| display-h1 | Geist | 48 | 600 | 1.10 | -0.022em | — | Page heading on docs |
| display-h2 | Geist | 32 | 600 | 1.15 | -0.015em | — | Section heading |
| display-h3 | Geist | 24 | 600 | 1.25 | -0.01em | — | Sub-section heading |
| title-lg | Geist | 20 | 600 | 1.30 | -0.005em | — | Card titles |
| title-md | Geist | 18 | 600 | 1.35 | 0 | — | Component name |
| title-sm | Geist | 16 | 600 | 1.40 | 0 | — | Form section heading |
| lead | Geist | 18 | 400 | 1.60 | 0 | — | Subhead under hero, opening paragraph |
| body | Geist | 16 | 400 | 1.60 | 0 | — | Default running-text |
| body-small | Geist | 14 | 400 | 1.50 | 0 | — | Secondary body, callout copy |
| label | Geist | 14 | 500 | 1.40 | 0 | — | Form labels and button text |
| label-small | Geist | 13 | 500 | 1.40 | 0 | — | Tight UI labels |
| caption | Geist | 12 | 400 | 1.40 | 0 | — | Muted captions |
| button | Geist | 14 | 500 | 1.0 | 0 | — | Standard button text |
| nav-link | Geist | 14 | 500 | 1.40 | 0 | — | Sidebar, top-nav |
| code-block | Geist Mono | 13.6 | 400 | 1.55 | 0 | — | 0.85rem in code blocks (sized down) |
| code-inline | Geist Mono | 13.6 | 500 | 1.50 | 0 | — | Inline `code` with surface bg |
| code-cli | Geist Mono | 14 | 400 | 1.55 | 0 | — | CLI command snippets |
| badge | Geist Mono | 12 | 500 | 1.0 | 0 | — | Mono badges — brand fingerprint |
| kbd | Geist Mono | 12 | 500 | 1.0 | 0 | — | Keyboard shortcut display |

### Principles
- **Geist + Geist Mono is the brand fingerprint.** Substituting Inter or system-ui breaks the typographic signal.
- **Display sits at 600 weight.** 700 is rare; 500 is too soft for headlines. The 600 is the system's display anchor.
- **Negative tracking on display only.** Ladder runs `-0.025em` → `-0.005em` from hero to title; body sits at 0.
- **Body line-height stays at 1.60.** Documentation-tall — the page is meant to be read end-to-end.
- **Code sizes are deliberately small.** 0.85rem (~13.6px) so inline code reads as a chrome detail, not a body interruption.
- **Mono is identity.** Badges, kbd, inline code, CLI snippets — the mono is everywhere it can plausibly fit. This is the second half of the typographic posture.
- **Tabular numbers on data tables.** `font-variant-numeric: tabular-nums` for any numeric column.
- **Capitalization stays sentence-case.** No uppercase eyebrows, no all-caps section labels. The system trusts hierarchy, not casing.

## 4. Component Stylings

### Buttons (6 variants — the canonical shadcn ladder)

**`button-primary` (default)** — The defining shadcn CTA. Background `#0a0a0a` near-black, text `#fafafa`, Geist 14px / 500, padding 8px × 16px, height 36px, radius 6px (`--radius - 2px`). Hover: `#1a1a1a` over 150ms. The most-copied component in the library.

**`button-secondary`** — Subtle gray fill. Background `#f4f4f5` (zinc-100), text `#0a0a0a`, same shape. Used for paired secondary actions.

**`button-outline`** — Outlined alternative. Background `#ffffff`, text `#0a0a0a`, 1px solid `#e4e4e7` border. Hover lifts background to `#f4f4f5`.

**`button-ghost`** — No fill, no border. Text `#0a0a0a`, hover lifts background to `#f4f4f5`. Used for icon buttons in toolbars and nav.

**`button-destructive`** — Red-500 fill. Background `#ef4444`, text `#fafafa`. Reserved strictly for destructive confirmations ("Delete account", "Remove member").

**`button-link`** — Pure text-link styled button. Text `#0a0a0a` with underline-on-hover. Used for tertiary navigation actions.

### Cards

**`card`** — The famous **0.5rem card**. Background `#ffffff`, 1px solid `#e4e4e7` border, 8px radius (`--radius`), padding 24px. **No shadow** by default. Cards are flat-on-flat with a hairline.

**`card-elevated`** — Card with subtle ambient shadow. Used for popover and dialog. Same border, radius 12px (`--radius + 4px`), shadow `rgba(0,0,0,0.08) 0 4px 6px -1px`.

### Badges & Pills

**`badge-default`** — Solid near-black. Background `#0a0a0a`, text `#fafafa`, Geist Mono 12px / 500, padding 2px × 8px, radius 6px.

**`badge-secondary`** — Subtle gray. Background `#f4f4f5`, text `#0a0a0a`. The most-copied shadcn primitive.

**`badge-outline`** — Outlined. Background `#ffffff`, text `#0a0a0a`, 1px `#e4e4e7` border.

**`badge-destructive`** — Red. Background `#ef4444`, text `#fafafa`.

### Inputs / Forms

**`input-text`** — 36px tall, 6px radius, padding 8px × 12px, 1px `#e4e4e7` border. Focus shifts border to `#0a0a0a` and adds a 2px ring at 2px offset.

**`textarea`** — Same border and radius, 4-line min-height, vertical resize.

**`select`** — Custom Radix select. Same height and border as input. Trigger renders chevron-down icon at 16px.

**`checkbox` / `radio`** — 16px square (or circle), 1px `#e4e4e7` border, 4px micro-radius, checked state fills with `#0a0a0a`.

**`switch`** — Track 24×40px, thumb 20×20px circle, off state `#e4e4e7`, on state `#0a0a0a`.

### Navigation

**`top-nav`** — Sticky 56px-tall bar. Background `#ffffff`, 1px `#e4e4e7` bottom border. Logo + wordmark left, primary nav center, theme toggle + GitHub link + command-palette trigger right. Backdrop-blur kicks in on scroll.

**`sidebar`** — 240px-wide left rail. Component navigation grouped by category, Geist 14px / 500 nav links. Active link gets `#f4f4f5` background and `#0a0a0a` text.

**`toc`** — 240px-wide right rail. Page anchors as a nested list. Active anchor gets `#0a0a0a` text-color; others sit at `#71717a`.

### Selectors / Tabs / Tooltips / Toasts / Dialogs

**`tabs`** — Underline-style tabs. 1px `#e4e4e7` baseline, active tab has 2px `#0a0a0a` underline. Tab labels in Geist 14px / 500.

**`tooltip`** — Solid `#0a0a0a` background, `#fafafa` text, Geist 12px / 500, 6px padding, 4px micro-radius. Standard shadow.

**`toast` / `sonner`** — Card-style notification at viewport corner. Background `#ffffff`, 1px border, 8px radius, soft shadow. Icon + message + optional action.

**`dialog`** — Modal with backdrop dim at 50% black. Card has 12px radius (`lg`), deep shadow, border. Centered on viewport with focus trap.

**`popover`** / **`dropdown-menu`** / **`command-palette`** — Border + shadow + 8px radius. Command palette is the canonical shadcn surface — `Cmd-K` everywhere.

### Decorative

**`separator`** — 1px `#e4e4e7` horizontal or vertical rule. Standard documentation divider.

**`code-block`** — Geist Mono on `#fafafa` (light) or `#171717` (dark), with the standard shiki syntax theme. 1px `#e4e4e7` border, 8px radius, 16px padding. Top-right copy button on hover.

**`kbd`** — Single-key indicator. Background `#f4f4f5`, 1px `#e4e4e7` border, 4px radius, Geist Mono 12px / 500, padding 2px × 6px.

## 5. Layout Principles

### Spacing System
Base unit **4px**, derived from Tailwind's spacing scale. Tokens follow Tailwind precisely: `0.5 = 2px, 1 = 4px, 2 = 8px, 3 = 12px, 4 = 16px, 5 = 20px, 6 = 24px, 8 = 32px, 10 = 40px, 12 = 48px, 16 = 64px, 20 = 80px, 24 = 96px, 32 = 128px`. The 4px micro-rhythm controls every density decision in the system.

### Grid & Container
The container caps at **1400px** with 24px gutters. The site uses a **sidebar-and-content documentation layout**: 240px left sidebar (component navigation) + central content column (prose + live demos) + 240px right sidebar (in-page anchors). Marketing pages collapse to a single content column at 720px prose width.

### Whitespace Philosophy
Documentation-density. Component examples have generous 24–48px vertical padding so each demo reads as a discrete artifact. Section padding sits at 64–96px between major content blocks. Inline density (badge gaps, button gaps in toolbars) is tight — 8px is the canonical button-group gap.

### Section Cadence
Hero → component preview grid → install instructions → component catalog (paginated) → footer. Marketing surfaces have minimal band-alternation — the canvas mostly stays white with rare `#fafafa` muted backgrounds for code blocks or feature callouts.

## 6. Shapes & Radius Scale

| Tier | Token | Value | Use |
|---|---|---|---|
| Micro | micro | 2px | Checkbox tick, very-tight indicators |
| XS | xs | 4px | Tooltip, kbd, small inline chips |
| Standard | sm | 6px | **Buttons (`--radius - 2px`)**, inputs, badges |
| Comfortable | md | 8px | **Cards (`--radius`)**, code blocks, popover |
| Large | lg | 12px | Dialog, large surfaces, modals (`--radius + 4px`) |
| XL | xl | 16px | Rare — full-screen dialogs |
| Pill | pill | 9999px | Avatars, status indicators (rare) |

The radii ladder is **parameterised through a single `--radius` token** (default `0.5rem` / 8px). Buttons sit at 6px (`--radius - 2px`), cards at 8px (`--radius`), and larger surfaces at 12px (`--radius + 4px`). This single-token shape language is the structural innovation that made shadcn copyable: change `--radius` and every component scales together.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No shadow, no border | Body sections, table cells |
| 1 — Hairline | 1px `#e4e4e7` border | Default card, input, separator |
| 2 — Surface lift | Surface tone shift to `#fafafa` | Code blocks, table headers, hover states |
| 3 — Soft shadow | Border + ambient shadow | Hover-elevated cards, command palette |
| 4 — Standard | Border + standard shadow | Popover, dropdown, tooltip |
| 5 — Modal | Border + deep shadow + backdrop dim | Dialog, sheet, alert-dialog |

### Shadow Philosophy
shadcn's depth philosophy is **hairline-and-tone, not shadow**. Cards in the marketing surface sit on the white canvas with a 1px `#e4e4e7` border and **no shadow**. The surface ladder (`#ffffff` → `#fafafa` → `#f4f4f5`) creates the depth perception — no drop shadows are needed.

Shadows kick in only on overlay UI: popovers, dropdowns, tooltips, and dialogs. Even there, the shadows are **neutral black at low alpha** (`rgba(0,0,0,0.05–0.15)`), never tinted, never colored. The ring on focused inputs is the pure brand color — `#0a0a0a` on light, `#fafafa` on dark — at 2px with a 2px offset, doubled by a 2px white inner halo for separation.

## 8. Interaction & Motion

### Easing Curves
- **Standard ease**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for color and opacity transitions.
- **Emphasized ease**: `cubic-bezier(0.16, 1, 0.3, 1)` — Radix's signature ease for popovers and dialog entrances. Slightly bouncy, satisfying.
- **Out ease**: `cubic-bezier(0, 0, 0.2, 1)` — exit animations.

### Duration Buckets
- **Fast (100ms)**: Color shifts on hover, focus-ring fades.
- **Standard (150ms)**: Button hover, card hover, tab transitions.
- **Slow (250ms)**: Dropdown opens, tooltip reveals.
- **Modal (200ms)**: Dialog and sheet entrance with backdrop fade.

### Per-Component Micro-States
- **Button hover**: Background tone shifts (e.g., `#0a0a0a` → `#1a1a1a`) over 150ms. No translateY, no shadow add.
- **Card hover**: Optional subtle background tone-shift to `#fafafa` over 150ms — used in component-grid demos.
- **Input focus**: Border tone shifts to `#0a0a0a`, then 2px ring fades in at 2px offset over 100ms.
- **Tab change**: Underline bar slides between active tabs over 150ms with standard ease.
- **Dialog entrance**: Backdrop fades 0 → 50% black over 200ms; dialog scales 95% → 100% with opacity 0 → 1 over 200ms with emphasized ease.
- **Popover / dropdown**: Origin-aware scale (depends on side: top/bottom/left/right) with fade. 150ms emphasized ease.
- **Toast**: Slide-up from bottom-right corner with fade, 250ms emphasized ease. Auto-dismiss after 4s; hover to pause.
- **Switch toggle**: Thumb slides 16px over 150ms; track background shifts simultaneously.

### Page Transitions
Standard browser navigation. View Transitions API supported on Chromium for cross-page demos. Sidebar nav highlights the active route immediately on click; content swaps without visible delay.

### Reduced Motion
Honored — `prefers-reduced-motion: reduce` removes:
- All scale transforms (dialogs appear at 100%).
- All translateY animations (toasts appear in place).
- Origin-aware popover scales (just fade).
- Switch thumb slide (snaps).

Color and opacity transitions remain at standard duration to preserve affordance feedback.

## 9. Accessibility & A11y

### Contrast Pairs
- **Text on bg**: `#0a0a0a` on `#ffffff` = **19.5** — AAA at all sizes.
- **On-brand on brand**: `#fafafa` on `#0a0a0a` = **17.6** — AAA at all sizes.
- **Muted on bg**: `#71717a` on `#ffffff` = **4.6** — AA at body sizes.
- **Secondary on bg**: `#3f3f46` on `#ffffff` = **11.6** — AAA.
- **Text on surface**: `#0a0a0a` on `#fafafa` = **18.2** — AAA.
- **Faint on bg**: `#a1a1aa` on `#ffffff` = **2.8** — decorative-only per WCAG.
- **Destructive on bg**: `#ef4444` on `#ffffff` = **4.5** — AA at body sizes.

### Focus Indicators
**2px solid `#0a0a0a`** outer ring with **2px offset** and **2px white inner halo** on light theme. On dark theme: 2px `#fafafa` outer ring with 2px offset and 2px `#0a0a0a` inner halo. The double-ring approach guarantees visibility on any background. Applied via `:focus-visible` only — keyboard navigation reveals the ring; mouse clicks do not.

### ARIA Patterns
shadcn wraps **Radix UI** primitives, which provide best-in-class ARIA implementation out of the box:
- **Dialog**: `role="dialog"`, `aria-modal="true"`, `aria-labelledby` + `aria-describedby`, focus trap, Escape closes.
- **Popover / Dropdown**: `role="menu"` for dropdowns, `role="dialog"` for popovers; trigger pattern with `aria-expanded`, `aria-controls`, `aria-haspopup`.
- **Combobox / Command**: `role="combobox"` with `aria-expanded`, `aria-controls`, `aria-activedescendant`. Listbox of results uses `role="listbox"` with `role="option"` items.
- **Tabs**: `role="tablist"`, `role="tab"` with `aria-selected`, `aria-controls`, `role="tabpanel"`.
- **Tooltip**: `role="tooltip"` with `aria-describedby` link from the trigger.
- **Toast**: `role="status"` (low-priority) or `role="alert"` (high-priority) with `aria-live="polite"` / `aria-live="assertive"`.
- **Switch**: `role="switch"` with `aria-checked`.
- **Checkbox** / **Radio**: Native semantic form controls preferred; Radix custom variants carry full ARIA.

### Keyboard Navigation
- All interactive elements reachable by Tab in document order.
- Modals trap focus; Escape closes; focus restores to the trigger.
- Dropdowns and command palettes navigate with Arrow keys; Enter selects; Escape closes.
- Tabs navigate with Arrow keys (Left/Right or Up/Down depending on orientation).
- Combobox: typing filters; Arrow keys move highlight; Enter selects.
- Cmd-K opens the command palette globally on docs.

### Screen Reader Hints
- Icon-only buttons carry `aria-label`. Visible text always describes the action.
- Decorative icons get `aria-hidden="true"`.
- Loading states use `aria-busy="true"` on the parent region.
- Code blocks: `<pre>` + `<code>` with optional `aria-label="Code example, JavaScript"` for the language.

### Reduced Motion Handling
Honored — see §8.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Hamburger nav; sidebar collapses to drawer; TOC hidden; hero h1 56→32px |
| Tablet | 640–768px | Top nav simplified; sidebar still collapsed to drawer; content full-width |
| Desktop | 768–1024px | Sidebar visible; TOC hidden; content column expands |
| Wide | 1024–1280px | Full three-column layout: sidebar + content + TOC |
| Ultrawide | > 1280px | Same as wide with more side-margin breathing |

### Touch Targets
Buttons run 36px tall by default. Touch targets meet 44 × 44 minimum at the `lg` button variant. Icon-only buttons sit at 36 × 36 minimum, padded internally to feel comfortable.

### Collapsing Strategy
- **Three-column layout** collapses to two-column at wide → desktop, then single-column at mobile.
- **Sidebar** becomes a slide-out drawer triggered by hamburger at < 768px.
- **TOC** is hidden below wide breakpoint.
- **Component-demo blocks** stack vertically on mobile (preview above source).
- **Tables** scroll horizontally on mobile; primary key stays fixed.
- **Command palette** goes full-screen on mobile.

### Image Behavior
Documentation rarely uses imagery — most "images" are component renderings. Component preview boxes maintain aspect ratio with intrinsic sizing.

### Container Queries
Cards and component demos use `@container` queries to adapt internal layout when nested in different parent widths (e.g., a card in a 2-up grid vs. a 4-up grid).

## 11. Content & Voice

### Tone
**Calm, technical, precise.** shadcn writes for engineers shipping products. The voice is documentation-grade: declarative ("Use the Button component to trigger an action"), never marketing-y, never apologetic. Component descriptions state the behavior; props tables state the API.

### Microcopy Patterns
- **CTA verbs**: "Get Started", "Documentation", "Components", "Themes", "Examples", "Browse" — calm and structural.
- **Section labels**: Sentence-case, never uppercase. "Components", "Examples", "Charts", "Themes".
- **Install instructions**: `npm install` / `pnpm add` / `bun add` — multi-package-manager tabs (npm, yarn, pnpm, bun) on every install snippet.
- **Component descriptions**: Single declarative sentence + optional API note. "A masked input that obscures characters as the user types. Built on top of the native HTML input element."
- **Empty states**: Direct ("No results found"), with optional next-step button.

### Empty States
- **No search results**: "No results found." Single line, centered, muted gray.
- **No items in list**: "No items yet." Optional secondary CTA to add first item.
- **No notifications**: "You're all caught up." Sentence-case, centered.

### Error Messages
**Pattern**: `<icon-x in #ef4444> + plain-language statement + suggested next step`. Errors render via `Alert` component or inline below the form field. Messages are concise: "This email address is invalid." not "Validation error: must match RFC 5322."

### Success Confirmations
Toast via Sonner. Background `#ffffff`, 1px border, soft shadow, sentence-case message ("Account created", "Settings saved"). Auto-dismiss 4s.

### CTA Verb Conventions
The brand uses **"Get Started"**, **"Documentation"**, **"Components"**, **"Examples"** as primary nav. **"Copy"** for code-block copy buttons. **"Install"** for package manager copy buttons. Notably absent: "Try it free", "Sign up now", "Subscribe" — shadcn is not a SaaS, so it doesn't borrow SaaS verbs.

## 12. Dark Mode & Theming

shadcn ships **first-class dark mode** via the `next-themes` pattern. The dark theme is a mathematical inversion of the light theme — same shapes, same spacing, same typography, with the canvas and brand swapped:

- `bg: #0a0a0a` (was `#ffffff`)
- `surface: #171717` (was `#fafafa`)
- `surface-strong: #27272a` (was `#f4f4f5`)
- `text: #fafafa` (was `#0a0a0a`)
- `text-secondary: #d4d4d8` (zinc-300)
- `text-muted: #a1a1aa` (zinc-400)
- `text-faint: #71717a` (zinc-500)
- `brand: #fafafa` (was `#0a0a0a`)
- `brand-hover: #e4e4e7`
- `on-brand: #0a0a0a` (was `#fafafa`)
- `border: #27272a` (was `#e4e4e7`)
- `border-strong: #3f3f46`
- `input: #27272a`
- `ring: #fafafa` (was `#0a0a0a`)

Destructive, success, warning, and info colors **remain identical** across themes — Tailwind's red-500, emerald-500, amber-500, blue-500. Code blocks invert from `#fafafa` to `#171717` background.

Theme toggle lives in the top-nav as a sun/moon icon button. The site respects `prefers-color-scheme` on first load. Theme choice persists in localStorage across sessions.

The mathematical inversion is the system's most copyable feature: any product that adopts shadcn inherits a working dark theme on day one, with no additional design work.

## 13. Lineage & Influences

shadcn/ui is the most influential design-system project of the 2020s, and its lineage runs through three primary sources:

**Radix UI** provides the accessibility primitives shadcn wraps. Every interactive component (Dialog, Popover, Dropdown, Tabs, Combobox, Tooltip) is technically Radix + Tailwind styling. Radix's commitment to ARIA correctness, focus management, and keyboard interaction is the structural foundation.

**Tailwind CSS** provides the styling layer and the zinc / neutral color scales. The 4px spacing scale, the 0.85rem code sizing, the zinc neutral progression — all directly inherit from Tailwind's defaults. shadcn is in many ways "Tailwind made into components."

**Vercel / Geist** provides the typeface and the monochromatic discipline. shadcn extends Vercel's near-monochrome aesthetic — the same near-black canvas inversion, the same minimal accent vocabulary, the same restrained shadow philosophy. The Geist Sans + Mono pair ties shadcn visually to the Vercel ecosystem where it most often runs.

The system **rejects**: chromatic accents in core components, decorative gradients, soft drop-shadows on cards, and the "filled illustration" aesthetic of mid-2010s SaaS. It is the post-illustration, post-gradient, post-color design system.

The **most-copied** elements are the 0.5rem card with hairline border, the 6px near-black solid button, the mono badge, and the input with 2px focus ring. Together these comprise roughly 80% of any shadcn-styled application, which is why thousands of sites look identical.

- **Radix UI** — Accessibility primitives shadcn wraps. https://www.radix-ui.com
- **Tailwind CSS** — Styling layer and zinc neutral scales. https://tailwindcss.com
- **Vercel / Geist** — Typeface and monochromatic discipline. https://vercel.com/font
- **GitHub Primer** — Documentation-as-product discipline; semantic tokens with CSS-variable theming. https://primer.style
- **Stripe Documentation** — Sidebar + content + table-of-contents three-column docs layout reference. https://stripe.com/docs

## 14. Do's and Don'ts

### Do
- Keep the action vocabulary monochromatic — solid near-black on light, inverted near-white on dark. A coloured primary CTA breaks the system's "calm professional" posture.
- Parameterise everything through `--radius` and the zinc scale — the system's power comes from a single token controlling shape across all components.
- Use Geist Sans + Geist Mono together; substituting Inter or system-ui breaks the typographic fingerprint.
- Use mono on every badge, kbd, inline-code, and CLI snippet — the mono is half the typographic identity.
- Apply 1px `#e4e4e7` borders to cards. The hairline is the structural rule.
- Use the surface ladder (`#ffffff` → `#fafafa` → `#f4f4f5`) for depth, not shadows. Shadows are reserved for overlay UI.
- Apply 2px `#0a0a0a` focus rings with 2px offset and 2px white inner halo. The double-ring guarantees visibility.
- Keep section headers in sentence-case. No uppercase eyebrows.
- Show component preview + source code together. The page IS the demo.
- Ship dark theme as a mathematical inversion — same shapes, swapped canvas and brand.

### Don't
- Don't add a brand colour to the components themselves — shadcn is meant to be re-themed downstream. The site uses near-black precisely *because* there's no shadcn brand colour.
- Don't apply shadows to cards on the marketing surface; depth here is hairline-and-tone.
- Don't mix radius values arbitrarily — buttons should always sit two pixels tighter than cards, derived from the same `--radius` token.
- Don't substitute Geist with Inter, IBM Plex, or system-ui. The typeface is part of the brand.
- Don't use pure black `#000000` as canvas in dark mode. shadcn dark theme is `#0a0a0a` near-black, never pure.
- Don't add gradients or decorative illustrations. The system rejects illustration.
- Don't use destructive red for cancel buttons — destructive red is reserved for actions that delete data.
- Don't override the zinc neutral family with cooler `slate` or warmer `stone` casually. The zinc warmth is part of the brand.
- Don't write all-caps section eyebrows. Sentence-case throughout.
- Don't introduce a third typeface. Geist + Geist Mono is the duo.

## 15. Agent Prompt Guide

### Quick Color Reference
```
Bg / Canvas (light):    #ffffff
Bg / Canvas (dark):     #0a0a0a (near-black, never pure)
Surface (muted):        #fafafa (light) / #171717 (dark)
Surface Strong:         #f4f4f5 (light) / #27272a (dark)
Border (hairline):      #e4e4e7 (light) / #27272a (dark)
Text:                   #0a0a0a (light) / #fafafa (dark)
Text Muted (zinc-500):  #71717a — the iconic muted-foreground
Brand / Primary:        #0a0a0a (light) / #fafafa (dark)
On-Brand:               #fafafa (light) / #0a0a0a (dark)
Destructive:            #ef4444 (red-500)
Ring (focus):           #0a0a0a (light) / #fafafa (dark)
```

### Example Component Prompts

1. "Create a shadcn-style hero. Pure white `#ffffff` canvas. Geist 56px / 600 / -0.025em headline ('Build your component library'). Geist 18px / 400 / 1.60 lead paragraph in `#71717a` muted gray. Primary CTA: `#0a0a0a` near-black solid, 36px tall, 6px radius, white text 'Get Started'. Secondary outline CTA: `#ffffff` background, 1px `#e4e4e7` border, `#0a0a0a` text 'Documentation'. No shadow on either button."

2. "Build a shadcn card component. Background `#ffffff`, 1px `#e4e4e7` border, 8px radius, 24px padding. Inside: Geist 18px / 600 title, Geist 14px / 400 description in `#71717a`. **No shadow** — depth is hairline-and-tone only."

3. "Design a shadcn button group. Three buttons in a horizontal row with 8px gap. First: `button-primary` (`#0a0a0a` solid, white text, 'Save'). Second: `button-outline` (white bg, 1px `#e4e4e7` border, near-black text, 'Cancel'). Third: `button-ghost` (transparent, near-black text, hovers to `#f4f4f5`, 'More options' with chevron icon). All 36px tall, 6px radius, Geist 14px / 500."

4. "Create a shadcn input + label pair. Geist 14px / 500 label `#0a0a0a` (e.g., 'Email'). Below: 36px input with 6px radius, 1px `#e4e4e7` border, 8px × 12px padding. Focus state shifts border to `#0a0a0a` with 2px outer ring and 2px white inner halo."

5. "Compose a shadcn code-block. Background `#fafafa` (light) or `#171717` (dark). 1px `#e4e4e7` border, 8px radius, 16px padding. Geist Mono 13.6px / 1.55 line-height. Top-right copy button on hover. Syntax highlighting via shiki — neutral grayscale highlights, no chromatic accent."

6. "Build a shadcn dialog. Backdrop dim at 50% black, fade-in 200ms. Dialog card: `#ffffff` background, 12px radius, 1px border, deep shadow `rgba(0,0,0,0.15) 0 24px 48px -12px`. Centered on viewport. Inside: Geist 24px / 600 title, Geist 14px / 400 description, primary + ghost button row at footer. Focus trapped; Escape closes."

### Iteration Guide
1. Start with pure white `#ffffff` canvas (or `#0a0a0a` for dark theme). The chromatic null is the brand.
2. Build with the zinc neutral family. `#fafafa` → `#f4f4f5` → `#e4e4e7` → `#71717a` → `#0a0a0a` is the structural progression.
3. Apply Geist Sans for everything except code. Geist Mono for code, badges, and kbd. The dual-typeface fingerprint is the brand half.
4. Use the 0.5rem card with 1px `#e4e4e7` hairline and **no shadow**. Depth is hairline-and-tone, not drop-shadow.
5. Set buttons at 6px radius (`--radius - 2px`); cards at 8px (`--radius`). The two-pixel-tighter rule is structural.
6. Apply 2px `#0a0a0a` focus rings with 2px offset and 2px inner halo. The double-ring is the focus signal.
7. Reserve destructive red `#ef4444` for actions that delete data. Never for cancel.
8. Ship dark theme as a mathematical inversion. Same shapes, swapped canvas and brand. Day-one dark theme is the system's most copyable feature.
