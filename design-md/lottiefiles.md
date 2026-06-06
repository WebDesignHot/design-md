---
name: LottieFiles
tagline: 'White-canvas animation studio — DM Sans display at 96px, Inter body, near-black text, one signature teal #019d91.'
updated_at: 2026-05-29T21:44:51.485Z
published_at: 2026-05-29T21:44:51.485Z
author: webdesignhot
source_url: https://lottiefiles.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [design-tools]
tags: [light, sans, playful]
preview_swatch: ['#ffffff', '#019d91', '#00c1a2']
related: []
description: 'LottieFiles is the animation platform dressed as a calm, white-canvas studio. The page is built on a shadcn-grade zinc neutral system — pure white ground, near-black #09090b text — with DM Sans set as the display voice at a heroic 96px/500 and Inter carrying every line of body copy. One color does all the brand work: a deep teal #019d91 (rgb 1,157,145) that owns the "Sign up" CTA and nothing else. Corners sit at a tight 6px on actions, framing animated thumbnails that loop in a quiet, generous grid. It reads as a design tool that trusts its content — the motion happens inside the canvas, not in the chrome.'

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent
  muted: text-muted
  border: border
  ring: brand

colors:
  bg: '#ffffff'
  bg-subtle: '#fafafa'
  surface: '#ffffff'
  surface-muted: '#f4f4f5'
  text: '#09090b'
  text-muted: '#71717a'
  text-soft: '#a1a1aa'
  brand: '#019d91'
  brand-hover: '#017a71'
  brand-secondary: '#00c1a2'
  on-brand: '#fafafa'
  accent: '#f4f4f5'
  accent-foreground: '#18181b'
  border: '#e4e4e7'
  border-strong: '#d4d4d8'
  success: '#16a34a'
  warning: '#f59e0b'
  danger: '#dc2626'
  info: '#019d91'

typography:
  display:
    family: '"DM Sans", "Inter", system-ui, -apple-system, sans-serif'
    weights: [400, 500, 600, 700]
  body:
    family: '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 96, weight: 500, lineHeight: 1.0,  tracking: '-0.03em',  family: display }
    display-lg:      { size: 64, weight: 500, lineHeight: 1.05, tracking: '-0.025em', family: display }
    h1:              { size: 48, weight: 500, lineHeight: 1.1,  tracking: '-0.02em',  family: display }
    h2:              { size: 36, weight: 500, lineHeight: 1.15, tracking: '-0.015em', family: display }
    h3:              { size: 28, weight: 600, lineHeight: 1.2,  tracking: '-0.01em',  family: display }
    h4:              { size: 22, weight: 600, lineHeight: 1.3,  tracking: '-0.005em', family: display }
    h5:              { size: 18, weight: 600, lineHeight: 1.35, tracking: '0',        family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    label:           { size: 14, weight: 500, lineHeight: 1.4,  tracking: '0',        family: body }
    button:          { size: 14, weight: 500, lineHeight: 1.0,  tracking: '0',        family: body }
    caption:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.01em',   family: body }
    eyebrow:         { size: 12, weight: 600, lineHeight: 1.4,  tracking: '0.06em',   family: body }
    code:            { size: 13, weight: 400, lineHeight: 1.6,  tracking: '0',        family: mono }

radius:
  micro: 2
  sm: 4
  md: 6
  lg: 8
  xl: 12
  xxl: 16
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64
  section-y: 96

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce — looping animation previews pause to a poster frame'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

components:
  button-primary: { bg: brand, text: on-brand, padding: '10px 16px', radius: 6 }
  button-secondary: { bg: accent, text: accent-foreground, padding: '10px 16px', radius: 6 }
  button-ghost:   { bg: transparent, text: text, padding: '10px 16px', radius: 6 }
  button-outline: { bg: bg, text: text, border: border, padding: '10px 16px', radius: 6 }
  card:           { bg: surface, border: border, radius: 12, padding: 24 }
  input:          { bg: bg, border: border, text: text, radius: 6, padding: '8px 12px' }
  badge:          { bg: accent, text: accent-foreground, radius: 9999, padding: '2px 10px' }

shadows:
  none: 'none'
  ambient: '0 1px 2px rgba(9, 9, 11, 0.04)'
  standard: '0 4px 12px rgba(9, 9, 11, 0.06)'
  elevated: '0 12px 32px rgba(9, 9, 11, 0.08), 0 2px 6px rgba(9, 9, 11, 0.04)'
  ring: '0 0 0 2px rgba(1, 157, 145, 0.4)'

accessibility:
  contrast-text-on-bg: 19.9           # AAA — #09090b on #ffffff
  contrast-text-on-accent: 18.1       # AAA — #09090b on #f4f4f5
  contrast-on-brand: 3.23             # white-ish #fafafa on teal #019d91 — large-text only
  contrast-brand-on-bg: 3.37          # teal #019d91 on white — large-text / UI-component only
  contrast-muted-on-bg: 4.83          # AA body — #71717a on #ffffff
  focus-ring: '2px solid #019d91 with 2px offset'
  reduced-motion-honored: true
  keyboard-nav: 'visible focus on every interactive; tab order matches DOM source'

dark-mode: light-only-marketing       # product app ships a dark canvas; marketing site is white-only
---

## 1. Visual Theme & Atmosphere

LottieFiles presents the calmest possible frame around the loudest possible content. The chrome is a pure-white canvas (`#ffffff`) with near-black text (`#09090b`), the exact zinc-950-on-white pairing you get from a disciplined shadcn/Tailwind build. Nothing in the layout competes for attention — because the attention is reserved for the animations themselves, which loop inside thumbnails and hero panels. The site is a museum wall: white, quiet, well-lit, with the art doing the moving.

The display voice is **DM Sans**, set heroically at 96px in a medium 500 weight with tight `-0.03em` tracking. This is a deliberate, slightly unusual choice — most animation and dev-tool sites reach for a 700 Inter Display hammer. LottieFiles instead uses DM Sans's geometric warmth at a 500 weight, which reads as confident-but-friendly rather than aggressive. Body copy is **Inter** at a comfortable 16/1.6, the universal neutral, so the personality lives entirely in the headline font and the single brand color.

That single color is a deep teal-green, `#019d91` (rgb 1,157,145). It is the only saturated hue on the page and it does exactly one job: it fills the primary **"Sign up"** CTA. Everything else — secondary buttons, badges, navigation, cards — runs on the zinc neutral scale (`#f4f4f5` accent surfaces, `#e4e4e7` hairlines, `#71717a` muted text). The restraint is the brand. When teal appears, it means *act now*; the eye is trained to find it instantly precisely because it is rationed.

The shape language is tight and modern. Action surfaces round at **6px** — small enough to feel crisp and software-like, not a soft pill, not a hard square. Cards and content panels relax to 12–16px to frame the animated previews. The grid is generous and even, with the marketing rhythm built around full-bleed hero bands of looping motion over white feature sections. The atmosphere is **studio-clean**: a creator tool that respects the work it hosts by getting out of its way.

Where Framer floods gradients edge-to-edge and Linear leans on dark glass, LottieFiles plays the opposite hand — maximum content motion, minimum chrome motion. The page itself barely animates; the animations *on* the page never stop.

**Key Characteristics**

- Pure white canvas (`#ffffff`) with near-black `#09090b` text — zinc-950 discipline
- DM Sans display at 96px / weight 500, tight `-0.03em` tracking
- Inter body at neutral 16/1.6 — personality lives in headline + brand color
- One signature teal `#019d91`, rationed to the primary CTA only
- 6px action radius — crisp, software-grade, not pill, not square
- Cards relax to 12–16px to frame looping animation previews
- Zinc neutral scale for all chrome (accent `#f4f4f5`, border `#e4e4e7`, muted `#71717a`)
- Content-first: motion happens inside thumbnails, not in the page chrome
- Generous, even grid with full-bleed motion bands over white feature rows
- Light, friendly, studio-clean — a tool that gets out of the work's way

## 2. Color Palette & Roles

### Canvas / Surface

- **bg** (`#ffffff`) [→ `--background` / `oklch(100% 0 0)`]: the white studio canvas, no warm tilt
- **bg-subtle** (`#fafafa`) [→ `--sidebar-background` / `oklch(98.5% 0 0)`]: faint off-white for sidebars and recessed panels
- **surface** (`#ffffff`): default card body on white
- **surface-muted** (`#f4f4f5`): recessed thumbnail wells and tag chips

### Text

- **text** (`#09090b`) [→ `--foreground` / `oklch(14.1% .005 285.823)`]: body and display — near-black with a barely-there cool tilt (zinc-950)
- **text-muted** (`#71717a`): captions, metadata, helper copy (zinc-500)
- **text-soft** (`#a1a1aa`): tertiary, placeholders, disabled labels (zinc-400)

### Brand & Action

- **brand** (`#019d91`) [→ `--primary` / `oklch(62.6% .11 185.333)` = rgb 1,157,145]: the signature teal — primary "Sign up" CTA fill, focus ring, active links
- **brand-hover** (`#017a71`): darkened teal for pressed/hover on the primary CTA
- **brand-secondary** (`#00c1a2`) [→ `--brand-secondary` / `oklch(72.4% .136 175.603)`]: a lighter, brighter teal for illustration accents and subtle gradients — not an action color
- **on-brand** (`#fafafa`) [→ `--primary-foreground` / `oklch(98.5% 0 0)`]: near-white label sitting on the teal CTA

### Accent (Neutral)

- **accent** (`#f4f4f5`) [→ `--accent` / `oklch(96.7% .001 286.375)`]: secondary-button fill, hover wash, selected-row background
- **accent-foreground** (`#18181b`) [→ `--accent-foreground` / `oklch(21% .006 285.885)`]: text on accent surfaces (zinc-900)

### Borders

- **border** (`#e4e4e7`): default hairline for cards, inputs, dividers (zinc-200)
- **border-strong** (`#d4d4d8`): emphasized border on hover/focus of neutral controls (zinc-300)

### Shadow

Shadows are neutral-tinted and intentionally light — depth comes from the white-on-white card-vs-canvas separation and hairline borders, not from heavy drop shadows. The teal never tints a shadow.

- **shadow-ambient** `rgba(9, 9, 11, 0.04)` — resting card
- **shadow-standard** `rgba(9, 9, 11, 0.06)` — hovered card
- **ring** `rgba(1, 157, 145, 0.4)` — teal focus halo, the only colored shadow

### Semantic

- **success** (`#16a34a`): upload complete, export success
- **warning** (`#f59e0b`): quota / file-size advisories
- **danger** (`#dc2626`): destructive actions, delete confirmation
- **info** (`#019d91`): informational banners reuse the brand teal

> Note on cookie chrome: the live probe surfaced a `--cc-*` variable set (`--cc-footer-bg: #0c0e0f`, `--cc-btn-primary-bg: #30363c`, etc.). Those belong to the third-party cookie-consent widget, not the LottieFiles design system, and are deliberately excluded from the roles above.

## 3. Typography Rules

### Font Family

- **Display**: DM Sans (`"DM Sans", "Inter", system-ui, sans-serif`) — weights 400/500/600/700. The brand voice lives here; headlines run at the 500 medium weight, not 700, for a friendly-confident read.
- **Body**: Inter (`"Inter", system-ui, "Segoe UI", Roboto, sans-serif`) — weights 400/500/600. Every paragraph, label, caption, and button word.
- **Mono**: system mono (`ui-monospace, SFMono-Regular, "SF Mono", Menlo`) — used sparingly for code snippets, JSON file references, and version strings in docs.

### Hierarchy

| Role | Font | Size | Weight | Line H | Tracking | Notes |
|---|---|---|---|---|---|---|
| display-hero | DM Sans | 96 | 500 | 1.0 | -0.03em | Above-the-fold hero (probed live) |
| display-lg | DM Sans | 64 | 500 | 1.05 | -0.025em | Section opener |
| h1 | DM Sans | 48 | 500 | 1.1 | -0.02em | Page title |
| h2 | DM Sans | 36 | 500 | 1.15 | -0.015em | Feature header |
| h3 | DM Sans | 28 | 600 | 1.2 | -0.01em | Card / block header |
| h4 | DM Sans | 22 | 600 | 1.3 | -0.005em | Subsection title |
| h5 | Inter | 18 | 600 | 1.35 | 0 | Inline label heading |
| body-lg | Inter | 18 | 400 | 1.6 | 0 | Hero subhead, lead paragraph |
| body | Inter | 16 | 400 | 1.6 | 0 | Default paragraph (probed live) |
| body-sm | Inter | 14 | 400 | 1.5 | 0 | Secondary copy, captions |
| label | Inter | 14 | 500 | 1.4 | 0 | Form labels, nav items |
| button | Inter | 14 | 500 | 1.0 | 0 | All button text |
| caption | Inter | 12 | 500 | 1.4 | 0.01em | Meta below cards, file stats |
| eyebrow | Inter | 12 | 600 | 1.4 | 0.06em | Section taglines, ALL CAPS |
| code | Mono | 13 | 400 | 1.6 | 0 | Inline code, file names |

### Principles

- **DM Sans carries the brand; Inter carries the information.** The split is strict — display goes DM Sans, everything functional goes Inter.
- **Display weight is 500, not 700.** The friendly geometric medium weight is the signature. Bumping to 700 reads as a different, harder brand.
- **Negative tracking scales with size** — `-0.03em` at the 96px hero, easing to `-0.01em` by 28px, and `0` for all body text.
- **Body never goes below 400 or above 600.** Inter mid-weights only; no light, no black.
- **Line-height is generous for body** — 1.6 at reading sizes keeps the white-canvas calm; display compresses to 1.0–1.15.
- **One eyebrow style** — 12px Inter 600, ALL CAPS, `+0.06em` tracking, usually in `text-muted`. The only positive-tracking move in the system.
- **No serif anywhere.** The editorial moments are carried by motion previews, not by typographic contrast.
- **Mono is rare and small** — file names, JSON keys, version tags only; never running text, to avoid drifting into a dev-tool aesthetic.

## 4. Component Stylings

### Buttons

All buttons share **6px radius**, 14px Inter 500 label, and a `~10px 16px` padding box.

**Primary CTA** — the signature teal, the one place color appears
- bg `#019d91`, text `#fafafa`, radius `6px`
- padding `10px 16px`, Inter 500 14px
- hover: bg `#017a71` (darkened teal)
- focus: 2px ring `rgba(1,157,145,0.4)` + 2px offset
- use: the single most important action per view — "Sign up", "Get started", "Upload"

**Secondary Button** — neutral fill
- bg `#f4f4f5` (accent), text `#18181b`, radius `6px`
- hover: bg `#e4e4e7`
- use: paired alternative — "Log in", "Browse", "Learn more"

**Outline Button**
- bg `#ffffff`, text `#09090b`, border `1px solid #e4e4e7`, radius `6px`
- hover: bg `#fafafa` + border `#d4d4d8`
- use: low-emphasis actions inside cards and toolbars

**Ghost Button**
- bg transparent, text `#09090b`, radius `6px`
- hover: bg `#f4f4f5`
- use: nav items, icon+label toolbar actions, tertiary actions

### Cards

**Content Card** (animation preview)
- bg `#ffffff`, radius `12px`, padding `0` on the media well, `16px` on the meta footer
- border `1px solid #e4e4e7`, shadow ambient `0 1px 2px rgba(9,9,11,0.04)`
- the top is a `#f4f4f5` thumbnail well holding a looping animation; meta footer shows title (Inter 14/500), author, and file stats in `text-muted`
- hover: shadow standard + animation begins/continues looping

**Feature Card**
- bg `#ffffff`, radius `16px`, padding `24px`
- border `1px solid #e4e4e7`, no shadow at rest
- DM Sans 22/600 title, Inter 16 body in `text-muted`

**Panel / Well**
- bg `#fafafa` or `#f4f4f5`, radius `12px`, padding `24px`
- borderless recessed container for code samples and stat blocks

### Badges & Tags

**Badge Default**
- bg `#f4f4f5`, text `#18181b`, radius `9999px` (pill), padding `2px 10px`, Inter 500 12px
- use: format tags ("JSON", "GIF", "dotLottie"), category chips

**Badge Brand**
- bg `rgba(1,157,145,0.12)`, text `#017a71`, radius `9999px`, padding `2px 10px`
- use: "New", "Pro", "Featured" markers

**Tag Mono** (file format / version)
- bg `#f4f4f5`, text `#71717a`, radius `4px`, padding `2px 6px`, mono 12px

### Inputs & Forms

**Text Input**
- bg `#ffffff`, border `1px solid #e4e4e7`, radius `6px`
- padding `8px 12px`, Inter 400 14–16px, text `#09090b`
- placeholder `#a1a1aa`
- focus: border `#019d91` + ring `2px rgba(1,157,145,0.4)`

**Search Input**
- bg `#f4f4f5`, no border at rest, radius `6px`
- inline magnifier icon left, padding `8px 12px 8px 36px`
- focus: bg `#ffffff` + teal ring

**Select / Dropdown**
- matches text input; chevron right in `text-muted`; menu is a white card, radius `8px`, ambient shadow, hovered row `#f4f4f5`

### Navigation

**Top Nav**
- bg `#ffffff`, height `64px`, sticky on scroll
- logo left (LottieFiles wordmark, black), nav items center in Inter 14/500 `text` with `text-muted` on rest
- right cluster: ghost "Log in" + teal pill-radius-6 "Sign up"
- hairline `#e4e4e7` bottom border appears on scroll

**Sidebar** (app / dashboard)
- bg `#fafafa`, items in Inter 14/500
- active item: bg `#f4f4f5` + `text` foreground; rest in `text-muted`
- hover: bg `#f4f4f5`

**Footer**
- bg `#ffffff` with top hairline `#e4e4e7`, generous multi-column link grid
- links in `text-muted`, hover to `text`; wordmark + social icons in a final row

## 5. Layout Principles

### Spacing System

- **base** `4px`; scale `[0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96]`
- Density philosophy: **calm-generous**. The white canvas is given room; cards and previews breathe. Vertical section rhythm runs ~96px on desktop — relaxed but not cinematic-extreme.

### Grid & Container

- **page-width** `1280px` with comfortable gutters
- **prose-width** `720px` for docs and long-form reading
- The animation gallery uses an even, responsive card grid (typically 3–4 columns desktop, 2 tablet, 1 mobile) with consistent gaps — the regularity is what makes the moving thumbnails feel orderly rather than chaotic
- Hero bands bleed full-width; content resets to 1280

### Whitespace Philosophy

Whitespace is the brand's load-bearing element. Because every animation moves, the still white space around each preview is what lets the eye rest. LottieFiles never packs the grid tight; gaps stay generous (24px+) so each looping thumbnail reads as its own object. White is not emptiness here — it is the frame that makes motion legible.

### Section Cadence

A typical marketing page alternates:
1. White hero with DM Sans 96px headline + one teal CTA, a large looping animation beside it
2. White feature row — three-up cards, each with a preview well
3. Full-bleed motion band — a wide looping composition over subtle off-white
4. White format/integration grid (badges for JSON, GIF, dotLottie, Lottie)
5. White testimonial / logo wall
6. White footer

The cadence is mostly white-on-white with motion as the rhythmic accent — the inverse of dark-band sites.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| Micro | 2px | Inner clips, tiny indicators |
| Small | 4px | Mono tags, inline code, small chips |
| Medium | 6px | **Buttons, inputs, selects** — the action default (probed live) |
| Large | 8px | Dropdown menus, popovers, segmented controls |
| XL | 12px | Content & preview cards |
| XXL | 16px | Feature cards, large panels, hero shells |
| Pill | 9999px | Badges, format tags, avatar rings |

The signature action radius is **6px** — crisp and software-grade. It is the value the live probe returned for both the "Products" nav control and the "Sign up" CTA. Cards step up to 12–16px to frame motion; only badges go fully round. Compound radii are not used.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat — no shadow, no border | Text on canvas, section backgrounds |
| 1 | 1px hairline `#e4e4e7` | Resting cards, inputs, dividers |
| 2 | shadow-ambient `0 1px 2px rgba(9,9,11,0.04)` | Lifted preview cards |
| 3 | shadow-standard `0 4px 12px rgba(9,9,11,0.06)` | Hovered cards, dropdown menus |
| 4 | shadow-elevated `0 12px 32px rgba(9,9,11,0.08)` | Popovers, command palette, modals |
| 5 | shadow-elevated + teal ring | Focused interactive element |

### Shadow Philosophy

LottieFiles keeps elevation **whisper-light and neutral-tinted**. On a white canvas, separation comes primarily from hairline borders and the contrast between a white card and a faint `#fafafa`/`#f4f4f5` well — not from heavy drops. When a shadow is used, it stays under 12px blur at rest so it never competes with the animations it surrounds. The only colored shadow in the system is the teal focus ring (`rgba(1,157,145,0.4)`). The visual energy budget is spent on motion, so depth deliberately stays modest.

## 8. Interaction & Motion

### Easing Curves

- **ease-standard** `cubic-bezier(0.4, 0, 0.2, 1)` — most UI state transitions
- **ease-emphasized** `cubic-bezier(0.2, 0, 0, 1)` — modal/popover entry, hero reveals

### Duration Buckets

- **fast** `150ms` — button/link hover, focus ring
- **standard** `240ms` — card hover, dropdown reveal, tab switch
- **slow** `320ms` — modal entry, section reveal on scroll

### Per-Component Recipes

- **Button hover**: bg darken (teal `#019d91` → `#017a71`, or accent `#f4f4f5` → `#e4e4e7`), 150ms ease-standard
- **Card hover**: shadow ambient → standard, looping animation continues/restarts, 240ms
- **Animation preview**: thumbnails autoplay-loop on the marketing grid; in denser galleries, loop starts on hover and pauses to a poster frame off-hover
- **Link hover**: color shift to `#019d91` or underline-grow, 150ms
- **Focus**: 2px teal ring with 2px offset, instant

### Page Transitions

- Section reveals on scroll: fade-up 12–16px, 320ms ease-emphasized
- Hero animation: large Lottie composition autoplays on load, loops indefinitely

### Reduced Motion Strategy

LottieFiles respects `prefers-reduced-motion: reduce`. Under reduced motion:
- Looping animation previews pause to a single poster frame
- Hero compositions show their first/key frame statically
- Scroll-triggered fade-ups become opacity-only (no translate)
- Hover micro-lifts disable; only color and border changes remain

## 9. Accessibility & A11y

### Contrast Pairs (computed from live tokens)

- text `#09090b` on bg `#ffffff`: **19.9** — AAA at every size
- text `#09090b` on accent `#f4f4f5`: **18.1** — AAA
- text-muted `#71717a` on bg `#ffffff`: **4.83** — AA at body sizes
- brand `#019d91` on bg `#ffffff`: **3.37** — passes AA for large text (≥18.66px bold / 24px) and UI components only; do **not** use teal for small body text on white
- on-brand `#fafafa` on brand `#019d91`: **3.23** — the teal CTA label is large-text-grade; keep the button label at 14px/500 minimum and prefer 16px+ for comfort, or darken the teal toward `#017a71` (improves to ~4.5) where small-text AA is required
- border `#e4e4e7` on bg `#ffffff`: 1.27 — decorative hairline only, never relied on as the sole boundary cue

### Focus Indicators

- 2px solid `#019d91` ring with 2px offset on all interactive elements
- Never `outline: none` without a ring replacement
- Visible on buttons, links, inputs, cards-as-links, and gallery tiles

### ARIA Patterns

- Animation preview: `role="img"` with `aria-label` describing the animation (e.g. "Loading spinner animation, looping"); decorative loops get `aria-hidden="true"`
- Dialog / modal: `role="dialog"` + `aria-modal="true"` + `aria-labelledby` + focus trap
- Search combobox: `role="combobox"` + `aria-expanded` + `aria-controls` + `aria-activedescendant`
- Gallery grid: `role="list"` / `role="listitem"` for the card grid

### Keyboard Nav

- Tab order follows DOM source order
- All buttons, links, and gallery tiles reachable in the tab cycle
- ESC closes any open modal, dropdown, or command palette
- ARROW keys navigate within tab groups, listboxes, and the gallery grid
- ENTER/SPACE activate buttons; SPACE never scrolls inside a focused control

### Screen Reader Hints

- Logo SVG carries `<title>LottieFiles</title>`
- Autoplaying hero animation has a descriptive `aria-label` and is pausable / honors reduced motion
- Decorative looping thumbnails marked `aria-hidden="true"`

### Reduced Motion

- `prefers-reduced-motion: reduce` honored sitewide
- Looping previews freeze to a poster frame
- Scroll reveals become opacity-only; parallax disabled

## 10. Responsive Behavior

### Breakpoints

| Tier | Min-width | Use |
|---|---|---|
| mobile | 0–639px | Single-column stack, 1-up gallery |
| tablet | 640–1023px | 2-column feature + gallery grids |
| desktop | 1024–1279px | 3-up grids, full nav bar |
| wide | 1280px+ | Container caps at 1280, 4-up gallery, generous gutters |

### Touch Targets

Minimum 44×44px on mobile. The 6px-radius CTA grows its padding from `10px 16px` (desktop) toward `12px 18px` on mobile to clear a 44px+ tap target. Gallery tiles get larger tap zones with the whole card linkable.

### Collapsing Strategy

- **Hero display**: 96px → 64px → 48px → 36px down the cascade
- **Gallery grid**: 4-up → 3-up → 2-up → 1-up
- **Top nav**: full link bar → hamburger drawer at <1024px; "Sign up" teal CTA stays visible in the collapsed bar
- **Section rhythm**: 96px → 64px → 48px

### Image / Animation Behavior

- Animation previews: scale fluidly inside their card well; on mobile they pause to poster frames by default to save battery and data
- Hero composition: `object-fit: contain`, capped max-height so it never crowds the headline
- Lottie/dotLottie assets are vector — they scale infinitely without rasterization

### Container Queries

Where the gallery card appears in both wide and narrow contexts (e.g. sidebar vs main column), container queries collapse the card's inline meta layout to stacked below ~360px container width.

## 11. Content & Voice

### Tone

**Maker-friendly and plain-spoken.** LottieFiles talks to designers and developers who want to ship motion without friction. The voice is direct and warm — "Download free lightweight animations" not "Unlock the power of motion design". It states the benefit, names the format, and gets out of the way. No buzzwords, no "leverage", no hype adjectives on the chrome — the animations are the hype.

### Microcopy Patterns

- **Button verbs**: "Sign up", "Log in", "Upload", "Download", "Get started", "Browse animations"
- **Empty states**: "No animations yet — upload your first Lottie to get started." (Direct, action-pointing.)
- **Errors**: "We couldn't upload that file. Check the format (JSON or dotLottie) and try again." (Plain, format-aware.)
- **Success**: "Uploaded." / "Copied to clipboard." (One word where possible.)
- **Loading**: a Lottie spinner — the product demonstrating itself, no copy needed

### CTA Verb Conventions

The primary teal CTA is almost always **"Sign up"** (the live-probed CTA) on marketing, **"Upload"** or **"Get started"** in-app. Secondary actions use neutral fills: "Log in", "Browse", "Learn more". File actions are literal: "Download", "Copy URL", "Get the code".

### Empty States

LottieFiles favors an inviting empty state with a small looping illustration and one clear next step ("Upload your first animation"), rather than a wall of skeleton ghosts — the product's own medium becomes the empty-state art.

## 12. Dark Mode & Theming

The **marketing site is white-only** — the entire brand experience leans on the white-canvas-as-gallery-wall metaphor, and there is no global light/dark toggle on the marketing pages. The product application (editor, dashboard) does ship a dark canvas for working with animations, but that is an app theme, not part of this marketing token set.

The live probe did surface an inverse background token (`--background-inverse: oklch(14.1% .005 285.823)` ≈ `#09090b`) and a dark footer in the cookie-widget chrome (`--cc-footer-bg: #0c0e0f`) — but these are utility/overlay values, not a published dark theme for the page. For any agent reproducing this brand, default to light and treat dark as an app-only mode.

If a dark variant is needed for app surfaces, the natural inversion keeps the teal fixed and swaps the neutral scale:

```yaml
colors-dark:
  bg: '#09090b'          # zinc-950 canvas — matches --background-inverse
  surface: '#18181b'     # zinc-900 card
  surface-muted: '#27272a' # zinc-800 well
  text: '#fafafa'        # near-white body
  text-muted: '#a1a1aa'  # zinc-400 captions
  brand: '#019d91'       # teal stays fixed across modes
  brand-secondary: '#00c1a2'
  on-brand: '#fafafa'
  accent: '#27272a'
  border: '#27272a'      # zinc-800 hairline
```

## 13. Lineage & Influences

LottieFiles inherits the **shadcn / Tailwind zinc neutral system** wholesale — the exact `oklch(14.1% .005 285.823)` text on `oklch(100% 0 0)` white, the `#f4f4f5` accent surfaces, the 6px action radius, and the `--primary` / `--primary-foreground` token naming are all signatures of that 2024–2026 React component-library lineage. On top of that neutral chassis it grafts a single custom brand hue (the teal `#019d91`), which is the modern playbook: take a disciplined, accessible neutral base and spend all your color budget on one ownable accent.

The white-canvas-as-gallery posture descends from creator-platform marketing — Dribbble, Behance, and the broader design-asset-marketplace tradition where the host chrome stays neutral so user-generated work can shine. The Lottie format itself is an Airbnb open-source heritage (the original Lottie animation format came out of Airbnb's design engineering), and the platform's clean, developer-friendly framing echoes that origin. Typographically, the DM Sans 500 display choice nods to the friendly-geometric school that Google Fonts popularized — warmer and less corporate than the Inter-700 hammer most dev tools reach for.

**Named Influences**

- **shadcn/ui** ([ui.shadcn.com](https://ui.shadcn.com)) — zinc neutral token system, oklch palette, 6px radius, `--primary`/`--primary-foreground` naming
- **Tailwind CSS** ([tailwindcss.com](https://tailwindcss.com)) — the zinc color scale (`#09090b`, `#f4f4f5`, `#e4e4e7`, `#71717a`) underpinning every neutral role
- **DM Sans** ([fonts.google.com/specimen/DM+Sans](https://fonts.google.com/specimen/DM+Sans)) — the friendly-geometric display voice at weight 500
- **Lottie (Airbnb)** ([airbnb.io/lottie](https://airbnb.io/lottie)) — the open-source animation format and developer-first heritage the platform is built around
- **Dribbble** ([dribbble.com](https://dribbble.com)) — neutral-host, creator-work-forward gallery marketing posture
- **Inter** ([rsms.me/inter](https://rsms.me/inter)) — the body workhorse carrying all functional text

## 14. Do's and Don'ts

### Do

- Keep the canvas pure white `#ffffff` with near-black `#09090b` text — the zinc-950 pairing is the foundation
- Set headlines in DM Sans at weight 500, not 700 — the friendly medium weight is the brand voice
- Ration the teal `#019d91` to the single primary CTA per view; let the eye learn that teal = act
- Use the zinc neutral scale (`#f4f4f5`, `#e4e4e7`, `#71717a`) for all secondary chrome
- Hold the action radius at 6px — crisp and software-grade, matching the live probe
- Relax card radius to 12–16px to frame looping animation previews
- Keep grid gaps generous (24px+) so each moving thumbnail reads as its own object
- Let the animations move while the page chrome stays still — content motion, not chrome motion
- Honor `prefers-reduced-motion` by pausing previews to poster frames
- Keep elevation whisper-light and neutral-tinted; lean on hairlines and white-vs-`#fafafa` separation

### Don't

- Don't use the teal for small body text on white — at 3.37 contrast it only passes for large text and UI components
- Don't add a second saturated brand color; the system is one teal plus neutrals, full stop
- Don't bump display to 700 weight — it reads as a harder, different brand
- Don't switch the display font away from DM Sans, or the body away from Inter
- Don't round buttons into full pills; 6px is the action signature, not 9999px
- Don't pack the gallery tight — crowded looping thumbnails become visual noise
- Don't introduce a serif anywhere on the marketing chrome
- Don't tint shadows with teal; the only colored shadow is the focus ring
- Don't treat the `--cc-*` cookie-widget colors as brand tokens — they're third-party chrome
- Don't ship a dark marketing page; the white-canvas-gallery metaphor is the brand (dark is app-only)
- Don't animate the page chrome heavily — the budget is reserved for the content previews
- Don't drop muted text below `#71717a` on white; that's the AA floor (4.83)

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg:               #ffffff
bg-subtle:        #fafafa
text:             #09090b
text-muted:       #71717a
brand (teal):     #019d91
brand-hover:      #017a71
brand-secondary:  #00c1a2
on-brand:         #fafafa
accent:           #f4f4f5
accent-fg:        #18181b
border:           #e4e4e7
```

### Example Component Prompts

1. *"Create a hero in LottieFiles style: pure white background, DM Sans 500 headline at 96px reading 'Free animations for websites and apps' tracked at -0.03em, Inter 18 body in #71717a below, a single teal #019d91 primary button with #fafafa label saying 'Sign up' at 6px radius, and a large looping Lottie composition to the right."*
2. *"Design an animation preview card in LottieFiles style: white card, 12px radius, 1px #e4e4e7 border, a #f4f4f5 thumbnail well on top holding a looping animation, and a 16px meta footer with an Inter 14/500 title, author in #71717a, and a small pill format badge reading 'dotLottie' in #f4f4f5."*
3. *"Build a top nav in LottieFiles style: white bar, 64px tall, black wordmark left, Inter 14/500 nav items center in #71717a, and a right cluster with a ghost 'Log in' plus a teal #019d91 'Sign up' button at 6px radius."*
4. *"Compose a three-up feature grid on white: each cell a 16px-radius card with a DM Sans 22/600 title, Inter 16 body in #71717a, and a small looping icon animation; generous 24px gaps; no heavy shadows, just 1px #e4e4e7 borders."*
5. *"Create a format/integration row: white section, ALL-CAPS Inter 12/600 eyebrow in #71717a, DM Sans 36/500 heading, and a row of pill badges (#f4f4f5 bg, #18181b text) reading 'JSON', 'GIF', 'Lottie', 'dotLottie'."*
6. *"Design a search + filter bar: a #f4f4f5 search input with inline magnifier and 6px radius that turns white with a teal #019d91 focus ring, beside neutral outline filter buttons (#ffffff bg, 1px #e4e4e7 border, 6px radius)."*

### Iteration Guide

1. **Start by removing color.** If the design feels busy, strip every hue except one teal CTA. LottieFiles is neutrals + one teal — the restraint is the look.
2. **Check the teal contrast.** If teal touches small body text on white, that's wrong — it's a large-text / CTA-fill / UI-component color only. Move small accents to `#017a71` or to neutral.
3. **Confirm the display font and weight.** If headlines look generic, set them in DM Sans at weight 500 (not 700) and tighten tracking to `-0.03em` at hero size.
4. **Hold the 6px radius on actions.** If buttons drift toward pills or hard squares, force them back to 6px — it's the probed signature.
5. **Add white space, not density.** If the gallery feels cramped, widen the gaps before shrinking the cards. White is the frame that makes motion legible.
6. **Lighten the shadows.** If cards feel heavy, replace big drop shadows with a 1px `#e4e4e7` hairline and a faint ambient shadow.
7. **Let the content move, keep the chrome still.** If the page itself is animating a lot, pull the motion back into the preview thumbnails where it belongs.
8. **Honor reduced motion.** Once loops are in, add the `prefers-reduced-motion` fallback that freezes previews to poster frames.
