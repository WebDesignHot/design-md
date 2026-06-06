---
name: Prisma
tagline: 'White-paper canvas, navy ink, a single confident teal — the type-safe data layer dressed as documentation.'
updated_at: 2026-05-29T21:44:11.907Z
published_at: 2026-05-29T21:44:11.907Z
author: webdesignhot
source_url: https://www.prisma.io
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [dev-tools]
tags: [light, sans, developer, clean, structured]
preview_swatch: ['#ffffff', '#14b8a6', '#6366f1']
related: [planetscale, supabase, vercel]
description: 'Prisma runs a bright white canvas (`#ffffff`) with navy body ink (`#1d242f`) and near-black headings (`#111827`), then spends its entire color budget on one signature teal (`#14b8a6`) for the primary "Get started" CTA. Mona Sans sets the display voice — a wide variable grotesque pulled tight at 64px hero scale — while Inter carries the body. A secondary indigo (`#6366f1`) marks the ORM product line, teal marks Prisma Postgres, and the marketing surface stays paper-light even though the docs theme ships dark. The result reads like a well-typeset technical white paper: calm, legible, type-safe.'

colors:
  bg: '#ffffff'
  surface: '#f9fafb'
  text: '#1d242f'
  brand: '#14b8a6'
  on-brand: '#ffffff'
  border: '#e2e8f0'

typography:
  display:
    family: '"Mona Sans VF", system-ui, -apple-system, sans-serif'
    weights: [500, 600, 700, 900]
  body:
    family: 'Inter, system-ui, -apple-system, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 80, weight: 700, lineHeight: 1.0,  tracking: '-0.03em',  family: display }
    display-lg:      { size: 64, weight: 700, lineHeight: 1.05, tracking: '-0.025em', family: display }
    h1:              { size: 64, weight: 700, lineHeight: 1.05, tracking: '-0.022em', family: display }
    h2:              { size: 36, weight: 900, lineHeight: 1.15, tracking: '-0.015em', family: display }
    h3:              { size: 24, weight: 600, lineHeight: 1.25, tracking: '-0.005em', family: display }
    h4:              { size: 20, weight: 600, lineHeight: 1.3,  tracking: '0',        family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    label:           { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0',        family: body }
    caption:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.02em',   family: body }
    button:          { size: 15, weight: 600, lineHeight: 1.0,  tracking: '0',        family: body }
    code:            { size: 14, weight: 400, lineHeight: 1.6,  tracking: '0',        family: mono }
    code-inline:     { size: 14, weight: 500, lineHeight: 1.5,  tracking: '0',        family: mono }
    eyebrow:         { size: 13, weight: 600, lineHeight: 1.3,  tracking: '0.06em',   family: body }

radius:
  micro: 2
  sm: 4
  md: 6
  lg: 8
  xl: 12
  featured: 16
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce — parallax data-flow illustrations freeze, hover lifts drop to color-only, scroll-reveals show final state immediately.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'rgba(17,24,39,0.04) 0 1px 2px'
  standard: 'rgba(17,24,39,0.08) 0 4px 12px -2px'
  elevated: 'rgba(17,24,39,0.12) 0 12px 28px -6px'
  ring-brand: '0 0 0 3px rgba(20,184,166,0.35)'

accessibility:
  contrast-text-on-bg: 13.6        # AAA — #1d242f navy on #ffffff
  contrast-heading-on-bg: 16.1     # AAA — #111827 on #ffffff
  contrast-on-brand: 2.4           # white on #14b8a6 — large/bold only; see §9
  contrast-brand-text-on-bg: 2.9   # #14b8a6 on white — never body text; use #0d9488
  focus-ring: '3px solid rgba(20,184,166,0.35), offset 2px'
  reduced-motion-honored: true
  keyboard-nav: 'standard tab order; teal focus ring on all interactive controls'

components:
  button-primary: { bg: '#14b8a6', text: '#ffffff', padding: '10px 18px', radius: 6, font: 'button (15/600)', hover: 'bg → #0d9488' }
  button-secondary: { bg: '#f3f4f6', text: '#111827', padding: '10px 18px', radius: 6, font: 'button (15/600)', hover: 'bg → #e5e7eb' }
  button-ghost: { bg: transparent, text: '#1d242f', border: '1px solid #e2e8f0', padding: '10px 18px', radius: 6, hover: 'border → #cbd5e1; bg → #f9fafb' }
  button-link: { bg: transparent, text: '#0d9488', padding: '0', hover: 'underline' }
  card: { bg: '#ffffff', border: '1px solid #e2e8f0', radius: 12, padding: 24, shadow: ambient }
  card-tinted: { bg: '#f9fafb', border: '1px solid #e2e8f0', radius: 12, padding: 24 }
  input: { bg: '#ffffff', border: '1px solid #e2e8f0', text: '#1d242f', radius: 6, padding: '10px 12px', focus: 'border → #14b8a6; ring 3px rgba(20,184,166,0.35)' }
  badge: { bg: '#d9f9f6', text: '#154f47', padding: '2px 10px', radius: 9999, font: 'caption (12/500)' }
  code-chip: { bg: '#f3f4f6', text: '#111827', padding: '8px 14px', radius: 6, font: 'code-inline (14/500 mono)' }

lineage:
  summary: |
    Prisma's marketing surface is a deliberate counter-move to the
    dark-terminal aesthetic that dominates developer tooling. Where
    PlanetScale and Vercel run near-black canvases, Prisma keeps the
    page paper-white (`#ffffff`) with navy body ink (`#1d242f`) and
    near-black headings (`#111827`) — the visual language of a
    well-typeset technical white paper rather than a CLI session. The
    type pairing reinforces it: Mona Sans, GitHub's wide variable
    grotesque, sets the display voice (pulled tight to a 64px hero),
    and Inter carries the body — a combination that reads as
    open-source-native and documentation-first. The entire color
    budget is spent on a single confident teal (`#14b8a6`, Tailwind
    teal-500) reserved for the primary "Get started" CTA and product
    accents; a secondary indigo (`#6366f1`) tags the ORM product line
    while teal tags Prisma Postgres. The system is built on Tailwind's
    palette tokens — the `--color-background-*` and `--color-foreground-*`
    variables are Tailwind hues renamed to semantic, product-scoped
    roles (`ppg` = Prisma Postgres green, `orm` = ORM indigo). Radii
    are restrained (6px CTAs, 12px cards), shadows are soft and
    near-colorless, and whitespace is generous. The lineage is
    "open-source documentation site that grew a marketing budget" —
    calm, type-safe, and legible before it is loud.
  influences:
    - name: 'Mona Sans (GitHub)'
      role: 'The wide variable grotesque that sets Prisma''s entire display voice — open-source-native, documentation-first.'
      url: https://github.com/mona-sans
    - name: 'Tailwind CSS'
      role: 'The underlying color palette — teal-500, indigo-500, gray-900 — renamed into Prisma''s semantic, product-scoped design tokens.'
      url: https://tailwindcss.com
    - name: 'Stripe'
      role: 'Light-canvas developer marketing with a single confident accent and white-paper legibility over dark-terminal drama.'
      url: https://stripe.com
    - name: 'Vercel'
      role: 'Tight type-led developer hero pattern and restrained component vocabulary — Prisma keeps the structure but flips the canvas to white.'
      url: https://vercel.com
    - name: 'Inter (Rasmus Andersson)'
      role: 'The neutral, screen-optimized body workhorse that keeps dense technical copy and code-adjacent prose highly legible.'
      url: https://rsms.me/inter/

dark-mode: docs-only    # marketing surface is light-only; the Fumadocs --color-fd-* dark theme applies only to the documentation app
---

## 1. Visual Theme & Atmosphere

Prisma's home page reads like a technical white paper that hired a
typographer. The canvas is bright `#ffffff`, the body copy is set in
navy `#1d242f` Inter, the headlines run near-black `#111827` in Mona
Sans, and the whole surface is unapologetically light. In a category
where almost every database and ORM brand has migrated to a near-black
terminal aesthetic — PlanetScale's zinc-950, Vercel's pure black,
Supabase's graphite — Prisma's choice to stay paper-white is the most
defining move in the brand. It signals *documentation-first*: this is a
tool you read, not a console you stare into.

The color discipline is severe in the best way. Across an entire
marketing page, the saturated color budget is spent on essentially one
hue: a confident teal `#14b8a6` (Tailwind teal-500) that owns the
primary "Get started" CTA and the Prisma Postgres product accents.
There is no second loud color competing for attention. A secondary
indigo `#6366f1` exists, but it is product-scoped — it tags the ORM
product line the way teal tags Prisma Postgres — rather than fighting
the teal for primary status. Everything else is neutral: white canvas,
gray surfaces, gray borders, navy ink.

The typography is where the brand earns its personality. Mona Sans —
GitHub's wide variable grotesque — sets the display voice. At hero
scale it runs 64px and gets pulled tight (-0.022em tracking) so the
wide letterforms close up into a dense, confident headline. Inter
carries the body at a comfortable 16px / 1.55 line-height. The pairing
is quietly opinionated: both are open-source, screen-native typefaces,
and choosing Mona Sans over a bespoke commercial display face is itself
a statement about who Prisma is for.

The mood is **calm, legible, and structured**. Whitespace is generous,
radii are gentle (6px on CTAs, 12px on cards), and shadows are soft and
near-colorless — `rgba(17,24,39,0.04)` ambient lifts rather than dramatic
drop shadows. Code samples sit in light gray chips (`#f3f4f6`) with the
familiar `$ npx prisma init` invocation rendered as a tappable element.
The page never shouts; it explains. The teal CTA is the one place the
brand raises its voice, and because it is the only saturated thing on
the page, it lands with disproportionate force.

It is worth noting explicitly: the documentation app ships a *dark*
theme (the `--color-fd-*` Fumadocs variables, `#121212` background), but
that is a docs-reading accommodation, not the marketing identity. The
brand surface — the thing this entry describes — is light.

**Key Characteristics**

- Bright white canvas (`#ffffff`) — a deliberate counter to the dark-terminal category norm
- Navy body ink (`#1d242f`) and near-black headings (`#111827`) for white-paper legibility
- Single signature teal (`#14b8a6`, Tailwind teal-500) carries the entire saturated color budget
- Secondary indigo (`#6366f1`) is product-scoped to the ORM line, never competing for primary status
- Mona Sans display (GitHub's wide variable grotesque) pulled tight at 64px hero scale
- Inter body at 16px / 1.55 — neutral, screen-native, code-adjacent legible
- Restrained radii: 6px CTAs, 12px cards, 16px featured panels
- Soft near-colorless shadows — gentle lifts, never dramatic drops
- Tailwind palette renamed into semantic, product-scoped tokens (`ppg`, `orm`)
- Code chips (`#f3f4f6`) treat the `npx prisma init` invocation as a first-class UI element
- Marketing is light-only; the dark theme is a docs-reading concern, not brand identity

## 2. Color Palette & Roles

### Primary

- **Background** (`#ffffff`) [→ `--background`]: the bright white canvas — the brand's foundational counter-move to dark-terminal tooling
- **Surface** (`#f9fafb`): Tailwind gray-50, the faintest tonal step for tinted cards and alternating sections
- **Body Text** (`#1d242f`): navy ink — the default copy color, slightly warmer than pure gray
- **Heading Text** (`#111827`) [→ `--color-foreground-neutral` reverse]: Tailwind gray-900 near-black for headlines

### Brand

- **Brand Teal** (`#14b8a6`) [→ `--color-foreground-ppg`, `--color-background-ppg-reverse`]: the signature Prisma Postgres teal — owns the primary "Get started" CTA
- **Brand Teal Strong** (`#2dd4bf`) [→ `--color-foreground-ppg-strong`]: brighter teal for hover-glow and emphasized accents
- **Brand Teal Deep** (`#0d9488`) [→ `--color-foreground-ppg-weak`]: deeper teal-600, used for teal *text on white* (passes AA where the 500 fails) and CTA hover fills
- **Brand Teal Alt** (`#16a394`) [→ `--primary`]: the docs/app primary teal — a near-twin of `#14b8a6` used in the documentation surface
- **On-Brand Text** (`#ffffff`) [→ `--primary-foreground`]: white on teal — bold/large only (see §9)

### Accent

- **ORM Indigo** (`#6366f1`) [→ `--color-foreground-orm`, `--color-background-orm-reverse`]: product-scoped accent for the ORM line
- **ORM Indigo Strong** (`#818cf8`) [→ `--color-foreground-orm-strong`]: lighter indigo-400 for highlights and gradients
- **ORM Indigo Deep** (`#4f46e5`) [→ `--color-foreground-orm-weak`]: indigo-600 for indigo text on white
- **Accent Wash** (`#d9f9f6`) [→ `--accent`]: pale teal tint for badge backgrounds and soft callouts
- **Accent Wash Text** (`#154f47`) [→ `--accent-foreground`]: deep teal ink that sits on the accent wash

### Interactive

- **Link** (`#0d9488`): teal-600 for inline links — chosen over the 500 so link text passes contrast
- **Link Hover** (`#0f766e`): teal-700, darkens on hover
- **Selection**: teal wash `rgba(20,184,166,0.18)` for text selection
- **Disabled** (`#9ca3af`) [→ `--color-foreground-neutral-weak`]: gray-400 disabled text
- **Disabled Bg** (`#f3f4f6`): gray-100 disabled fill

### Neutral Scale

- **Foreground Neutral** (`#111827`): near-black headings (gray-900)
- **Foreground Neutral Weak** (`#9ca3af`) [→ `--color-foreground-neutral-weak`]: gray-400 captions and muted labels
- **Foreground Neutral Weaker** (`#6b7280`) [→ `--color-foreground-neutral-weaker`]: gray-500 secondary copy
- **Gray 200** (`#e5e7eb`): hairline / divider on white
- **Gray 100** (`#f3f4f6`): code chip and secondary button fill
- **Gray 50** (`#f9fafb`): tinted card / alternating section

### Surface & Borders

- **Border** (`#e2e8f0`): slate-200 default hairline on white — card and input borders
- **Border Strong** (`#cbd5e1`): slate-300 for hover/emphasized borders
- **Border Soft** (`#f1f5f9`): slate-100 faint internal dividers
- **Surface** (`#f9fafb`): one tonal step above canvas for tinted blocks

### Shadow Colors

Shadows are tinted with the heading navy at very low alpha — never pure black, never brand-colored (except the focus ring). They produce a soft lift appropriate to a light canvas:

- **Ambient** (`rgba(17,24,39,0.04)`): resting card lift
- **Standard** (`rgba(17,24,39,0.08)`): hover / floating card
- **Elevated** (`rgba(17,24,39,0.12)`): popover, dropdown, modal
- **Focus Ring** (`rgba(20,184,166,0.35)`): the one brand-tinted shadow — teal focus glow

### Semantic

- **Success** (`#14b8a6`) [→ `--color-foreground-success`]: teal doubles as success (Prisma's success and brand are the same hue)
- **Success Strong** (`#2dd4bf`) [→ `--color-foreground-success-strong`]
- **Warning** (`#f97316`) [→ `--color-foreground-warning`]: orange-500
- **Warning Strong** (`#fb923c`) [→ `--color-foreground-warning-strong`]: orange-400
- **Error** (`#ef4444`) [→ `--color-foreground-error`]: red-500
- **Error Strong** (`#f87171`) [→ `--color-foreground-error-strong`]: red-400 for dark surfaces
- **Info** (`#60a5fa`) [→ `--color-foreground-blue`]: blue-400

## 3. Typography Rules

### Font Family

- **Display**: `"Mona Sans VF", system-ui, -apple-system, sans-serif` — GitHub's wide variable grotesque; weights 500–900
- **Body**: `Inter, system-ui, -apple-system, sans-serif` — neutral screen-optimized workhorse; weights 400–600
- **Mono**: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace` — system mono stack for code chips and samples; weights 400–500

Mona Sans is a variable font, so the brand exploits its width and weight axes: headlines run heavy (700–900) and the wide default is pulled in with negative tracking so large type closes into a dense block. Inter handles everything from body-large hero subheads down to 12px captions.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | Notes |
|------|------|------|--------|-------------|----------|-------|
| display-hero | display | 80 | 700 | 1.0 | -0.03em | landing splash only |
| display-lg | display | 64 | 700 | 1.05 | -0.025em | major section opener |
| h1 | display | 64 | 700 | 1.05 | -0.022em | page hero headline (live-probed 64px) |
| h2 | display | 36 | 900 | 1.15 | -0.015em | section heading — note the 900 weight jump |
| h3 | display | 24 | 600 | 1.25 | -0.005em | sub-feature |
| h4 | body | 20 | 600 | 1.3 | 0 | card title (shifts to Inter) |
| body-lg | body | 18 | 400 | 1.55 | 0 | hero supporting copy |
| body | body | 16 | 400 | 1.55 | 0 | default paragraph (live-probed 16px) |
| body-sm | body | 14 | 400 | 1.5 | 0 | dense lists, table cells |
| label | body | 13 | 500 | 1.4 | 0 | form labels, meta |
| caption | body | 12 | 500 | 1.4 | 0.02em | footnotes, badge text |
| button | body | 15 | 600 | 1.0 | 0 | CTA label |
| eyebrow | body | 13 | 600 | 1.3 | 0.06em | uppercase section kicker |
| code | mono | 14 | 400 | 1.6 | 0 | code block body |
| code-inline | mono | 14 | 500 | 1.5 | 0 | `npx prisma init` chip, inline code |

### Principles

- **Mona Sans for display, Inter for body** — the open-source pairing is the brand's typographic signature; never substitute a generic system grotesque for the headline
- **Pull display tracking tight** — Mona Sans is wide by default; -0.022em to -0.03em closes it into a confident headline block at large sizes
- **The h2 900-weight jump is intentional** — section headings hit Mona Sans's heaviest weight for punch against the calm body
- **h4 shifts to Inter** — small headings (20px and below) drop the display face for legibility at body-adjacent sizes
- **16px body, 1.55 line-height** — generous leading for white-paper readability, not the dense 15px tooling norm
- **Mono is system, not custom** — code uses the platform mono stack; the brand doesn't ship a bespoke code face
- **Teal text must use the 600 (`#0d9488`), not the 500** — teal-500 fails contrast on white; the deeper teal is the legible variant
- **Weight ladder**: 900/700 display, 600 buttons/labels, 500 captions/inline-code, 400 body

## 4. Component Stylings

### Buttons

**button-primary** — Teal (the signature)
- Background: `#14b8a6`
- Text: `#ffffff` at 15/600
- Padding: 10px 18px
- Radius: 6
- Border: none
- Hover: bg → `#0d9488` (teal-600)
- Focus: 3px `rgba(20,184,166,0.35)` ring, 2px offset
- Use: primary CTA — "Get started", "Start now"

**button-secondary** — Gray fill
- Background: `#f3f4f6` (gray-100)
- Text: `#111827` at 15/600
- Padding: 10px 18px
- Radius: 6
- Hover: bg → `#e5e7eb` (gray-200)
- Use: secondary action; also the visual basis for the `$ npx prisma init` code chip

**button-ghost** — Outlined
- Background: transparent
- Text: `#1d242f` at 15/600
- Padding: 10px 18px
- Radius: 6
- Border: 1px solid `#e2e8f0`
- Hover: border → `#cbd5e1`, bg → `#f9fafb`
- Use: tertiary action — "Docs", "Sign in"

**button-link** — Bare
- Background: transparent
- Text: `#0d9488` (teal-600, for contrast) at 15/600
- Padding: 0
- Hover: underline
- Use: inline navigation, "Learn more →"

### Cards

**card-default**
- Background: `#ffffff`
- Padding: 24px
- Radius: 12
- Border: 1px solid `#e2e8f0`
- Shadow: ambient (`rgba(17,24,39,0.04)`)
- Hover: shadow → standard, border → `#cbd5e1`
- Use: feature card, doc link card

**card-tinted**
- Background: `#f9fafb` (gray-50)
- Padding: 24px
- Radius: 12
- Border: 1px solid `#e2e8f0`
- Use: alternating sections, quiet callouts, comparison panels

**card-product** — Teal/indigo accented
- Background: `#ffffff`
- Border: 1px solid `#e2e8f0`, with a top accent rule in `#14b8a6` (Postgres) or `#6366f1` (ORM)
- Radius: 12
- Use: product-line cards where teal/indigo distinguishes Prisma Postgres from the ORM

### Badges / Tags / Pills

**badge-accent** — Teal wash
- Background: `#d9f9f6` (`--accent`)
- Text: `#154f47` (`--accent-foreground`) at 12/500
- Padding: 2px 10px
- Radius: 9999 (pill)
- Use: "New", "Beta", feature tags, Prisma Postgres labels

**badge-neutral** — Gray
- Background: `#f3f4f6`
- Text: `#6b7280` at 12/500
- Padding: 2px 10px
- Radius: 9999
- Use: version tags, neutral metadata

**badge-orm** — Indigo wash
- Background: `rgba(99,102,241,0.12)`
- Text: `#4f46e5` at 12/500
- Padding: 2px 10px
- Radius: 9999
- Use: ORM product-line tags

### Inputs / Forms

**input-text**
- Background: `#ffffff`
- Text: `#1d242f` at 16/400
- Placeholder: `#9ca3af` (gray-400)
- Padding: 10px 12px
- Radius: 6
- Border: 1px solid `#e2e8f0`
- Focus: border → `#14b8a6`, ring 3px `rgba(20,184,166,0.35)`
- Use: newsletter, search, form fields

### Navigation

**nav-link**
- Background: transparent
- Text: `#1d242f` at 15/500
- Padding: 8px 12px
- Hover: text → `#0d9488` (teal-600)
- Active: text → `#111827` with subtle teal underline
- Use: top-nav items

**nav-cta** — primary teal button pinned right (see button-primary)

### Decorative

**code-chip** — The `npx prisma init` invocation
- Background: `#f3f4f6`
- Text: `#111827` at 14/500 mono
- Padding: 8px 14px
- Radius: 6
- Leading `$` rendered in muted `#9ca3af`
- Behaves as a click-to-copy element

**code-block** — Schema / sample
- Background: `#f9fafb` (light) or `#121212` (when embedding the dark docs theme)
- Text: 14/400 mono, syntax-highlighted
- Padding: 16px 20px
- Radius: 8
- Border: 1px solid `#e2e8f0`

## 5. Layout Principles

### Spacing System

- **Base unit**: 4px
- **Scale**: 0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128
- **Density observation**: Prisma's grid is **generous**, not dense — section gaps run 96–128px, card interiors 24px, and the page breathes far more than terminal-aesthetic peers like PlanetScale. The whitespace is part of the white-paper legibility argument.

### Grid & Container

- **Page width**: 1280px max
- **Prose width**: 720px for documentation and marketing body copy
- **Hero**: centered, type-led, content constrained to ~960px with the code-chip CTA pairing below the headline
- **Feature grid**: 3-col at desktop, 2-col at tablet, 1-col at mobile

### Whitespace Philosophy

- Whitespace is **structural** — it separates the document into readable sections the way headings separate a paper
- Generous section padding (96–128px) makes the long technical narrative scannable
- Cards sit apart with comfortable gutters rather than packed comparison grids

### Section Cadence

- White hero → white feature grid → gray-50 tinted callout band → white product cards → gray-50 footer
- Tonal rhythm alternates `#ffffff` ↔ `#f9fafb` to break long pages without introducing a second color
- The teal never anchors a full section background — it stays foreground for CTAs and product accents

## 6. Shapes & Radius Scale

| Tier | Px | Use |
|------|----|----|
| Micro | 2 | inline chips, tight tags, the cookie-banner button |
| Standard | 4 | small badges, inline pills |
| Comfortable | 6 | buttons, inputs, code chips (live-probed 6px on "Get started") |
| Relaxed | 8 | code blocks, larger inputs |
| Featured | 12 | cards |
| Large | 16 | hero shells, signature illustrative panels |
| Pill | 9999 | badges, status pills, avatar shapes |

The 6px CTA radius is the brand signature — gentle but not pillowy. It sits between the hard-edged terminal look (2–4px) and the soft consumer-SaaS pill, matching Prisma's "approachable but serious" positioning. Cards step up to 12px for a friendlier, document-card feel.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|----|
| 0 | flat on white | hero copy, body text |
| 1 | 1px `#e2e8f0` border, no shadow | inline cards, code blocks |
| 2 | 1px border + ambient shadow | resting feature cards |
| 3 | standard shadow | card hover, floating elements |
| 4 | elevated shadow | popover, dropdown, modal |

**Shadow Philosophy**: On a white canvas, depth comes primarily from the 1px slate border (`#e2e8f0`) plus a very soft navy-tinted shadow (`rgba(17,24,39,0.04–0.12)`). Shadows are never pure black (too harsh on white) and never brand-tinted — the one exception is the teal focus ring. Elevation is subtle; Prisma prefers borders and tonal surface shifts (`#ffffff` ↔ `#f9fafb`) over heavy drop shadows. The result is flat-but-defined, appropriate to a documentation aesthetic.

## 8. Interaction & Motion

### Easing

- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, color, and transform transitions
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal/popover enter, scroll-reveals

### Durations

- **Fast** (150ms): hover color shifts, focus ring
- **Standard** (240ms): card lift, dropdown open
- **Slow** (320ms): modal enter, scroll-reveal sequences

### Per-Component Recipes

- **Button hover**: bg `#14b8a6` → `#0d9488` over 150ms; no scale (calm, not bouncy)
- **Card hover**: shadow ambient → standard, border `#e2e8f0` → `#cbd5e1`, optional 2px upward translate over 240ms
- **Link hover**: teal text darkens `#0d9488` → `#0f766e`; underline appears over 150ms
- **Code chip**: click-to-copy flips label to "Copied!" with a brief teal tick, 150ms
- **Data-flow illustrations**: hero/feature diagrams animate query/result flow along connectors on scroll-into-view, ~320ms, emphasized easing

### Page Transitions

- Sections reveal with a short fade + 8px rise on scroll-into-view, emphasized easing, staggered ~60ms per item

### Reduced Motion

When `prefers-reduced-motion: reduce` is set:

- Parallax and data-flow connector animations freeze at their final state
- Card hover lifts drop to color/border-only (no translate)
- Scroll-reveals show their final state immediately (no fade or rise)
- Copy-confirmation tick appears without animation

## 9. Accessibility & A11y

### Contrast Pairs

- **Navy `#1d242f` on `#ffffff`**: 13.6:1 (AAA) — body copy
- **Heading `#111827` on `#ffffff`**: 16.1:1 (AAA) — headlines
- **Muted `#6b7280` on `#ffffff`**: 4.8:1 (AA) — secondary copy
- **Gray-400 `#9ca3af` on `#ffffff`**: 2.5:1 — placeholder/disabled only, never body text
- **White on teal `#14b8a6`**: 2.4:1 — **fails AA for normal text**; acceptable only for large/bold button labels at 15px+/600. Prefer the deeper teal for any small-text-on-teal need.
- **Teal `#14b8a6` text on `#ffffff`**: 2.9:1 — **never use as text color**; switch to teal-600 `#0d9488` (3.4:1 large / use 700 for body)
- **Teal-600 `#0d9488` on `#ffffff`**: 3.4:1 (AA Large) — links and teal text use this, not the 500
- **Accent text `#154f47` on wash `#d9f9f6`**: 7.9:1 (AAA) — badge text

The single biggest a11y trap in this system is teal-on-white text. The brand teal-500 is a CTA *fill* color, not a *text* color. Any teal text on white must drop to the 600 or 700.

### Focus Indicators

- Default: 3px solid `rgba(20,184,166,0.35)` ring, 2px offset
- Inputs: focus border → `#14b8a6` + 3px teal ring
- Always visible; never `outline: none` without a replacement

### ARIA Patterns

- **Code chip**: `role="button"`, `aria-label="Copy npx prisma init"`, `aria-live="polite"` confirmation
- **Dialog**: `aria-labelledby` + `aria-describedby`; focus trap; ESC to close
- **Tabs** (product switcher Postgres/ORM): `role="tablist"` with `aria-selected`
- **Badges**: decorative badges marked `aria-hidden`; meaningful ones get text alternatives

### Keyboard Navigation

- Logical tab order following visual flow; skip-link at page top
- Enter/Space activates buttons and the copy chip
- Arrow keys move within the product tab switcher
- Escape closes modals and dropdowns

### Screen Reader Hints

- Decorative data-flow diagrams are `aria-hidden`; their meaning is conveyed in adjacent prose
- Code samples use semantic `<pre><code>`
- Product-line color coding (teal vs indigo) is always paired with text labels

### Reduced Motion

`prefers-reduced-motion: reduce` honored throughout — see §8.

## 10. Responsive Behavior

### Breakpoints

| Name | Min Width | Use |
|------|-----------|----|
| Mobile | — | default, 1-col |
| Tablet | 640 | 2-col grids |
| Desktop | 1024 | 3-col grids |
| Wide | 1280 | max page width |
| Ultra | 1536 | wide hero, expanded gutters |

### Touch Targets

- Minimum 44×44px for primary controls
- CTA buttons at 10px 18px padding + 15px label clear the target comfortably
- Code chip expands hit-area to full chip width

### Collapsing Strategy

- **Nav**: collapses to hamburger ≤ 768px; teal "Get started" CTA stays visible in the collapsed bar
- **Feature grid**: 3-col → 2-col @ 1024 → 1-col @ 640
- **Hero headline**: 64px reduces to ~40px @ 640; tracking loosens slightly as size drops
- **Code blocks**: scroll horizontally on overflow; never wrap schema syntax
- **Product cards**: stack vertically on mobile, retaining the teal/indigo top rule

### Image Behavior

- UI screenshots and schema diagrams are SVG/PNG, served responsive
- Illustrative data-flow graphics scale fluidly and lock minimum legible sizes
- Icons lock at 16–20px

## 11. Content & Voice

### Tone

Clear, technical, and reassuring — Prisma writes like good documentation that happens to be marketing. Sentences are full and precise, the value prop ("type-safe", "serverless Postgres", "the ORM developers trust") is stated plainly, and the copy assumes a developer reader who wants substance over hype. Confident but never loud — the same calm the visual system projects.

### Microcopy Patterns

- **Button verbs**: "Get started", "Start now", "Read the docs", "Talk to sales" — direct, two-word maximum
- **Code-first CTA**: the `$ npx prisma init` chip *is* a CTA — the brand leads with the literal command
- **Feature framing**: benefit-led headline + technical clarification ("Type-safe database access" → "Auto-generated and type-safe query builder")
- **Empty states**: instructive and command-oriented — point the user at the next CLI step

### CTA Verb Conventions

- Primary: "Get started" (the live-probed teal CTA), "Start now"
- Product: "Try Prisma Postgres", "Explore the ORM"
- Docs: "Read the docs", "View on GitHub"
- Sales: "Talk to sales"

## 12. Dark Mode & Theming

The **marketing surface is light-only** — the white canvas is the brand identity and there is no dark-mode toggle on the home page. However, Prisma's **documentation app ships a dark theme** built on Fumadocs tokens (`--color-fd-background: #121212`, `--color-fd-foreground: #ebebeb`, `--color-fd-card: #191919`). That dark theme is a *reading accommodation* for the docs app, not part of the marketing identity — which is exactly why this entry's tokens describe the light surface and treat the `--color-fd-*` variables as out of scope.

The design system itself is theme-aware in a different sense: the `--color-background-*` / `--color-foreground-*` tokens ship in matched pairs (`ppg` / `ppg-reverse`, `neutral` / `neutral-reverse`) so a component can be rendered on light or dark backgrounds by swapping to the reverse token. This is how teal stays correct in both contexts: `--color-foreground-ppg` (`#14b8a6`) on light, `--color-foreground-ppg-strong` (`#2dd4bf`) brightened for dark.

If a dark marketing variant were ever built, the path is already laid: canvas → `#030712` (`--color-background-default`), body → `#f9fafb`, teal brightens to `#2dd4bf` for contrast, indigo to `#818cf8`. The reverse-token architecture means the brand could go dark without re-picking a single hue.

## 13. Lineage & Influences

Prisma's marketing surface is a deliberate counter-move to the dark-terminal aesthetic that dominates developer tooling. Where PlanetScale runs zinc-950 and Vercel runs pure black, Prisma keeps the page paper-white with navy ink and near-black headings — the visual language of a well-typeset technical white paper rather than a CLI session. The typographic pairing reinforces it: Mona Sans, GitHub's wide variable grotesque, sets the display voice (pulled tight to a 64px hero), and Inter carries the body — a combination that reads as open-source-native and documentation-first.

The system is built on Tailwind's palette: the `--color-background-*` and `--color-foreground-*` variables are Tailwind hues renamed into semantic, product-scoped roles, where `ppg` is the Prisma Postgres teal and `orm` is the ORM indigo. The entire saturated color budget goes to one confident teal (`#14b8a6`) for the primary "Get started" CTA, with indigo kept product-scoped rather than competing for primary status. Radii are restrained, shadows soft and near-colorless, whitespace generous. The lineage is "open-source documentation site that grew a marketing budget" — calm, type-safe, legible before it is loud.

- **Mona Sans (GitHub)** — https://github.com/mona-sans — the wide variable grotesque that sets Prisma's display voice
- **Tailwind CSS** — https://tailwindcss.com — the underlying palette (teal-500, indigo-500, gray-900) renamed into Prisma's semantic tokens
- **Stripe** — https://stripe.com — light-canvas developer marketing with a single confident accent
- **Vercel** — https://vercel.com — tight type-led developer hero pattern (Prisma flips the canvas to white)
- **Inter (Rasmus Andersson)** — https://rsms.me/inter/ — the neutral screen-optimized body workhorse

## 14. Do's and Don'ts

### Do

- **Do** keep the canvas bright white (`#ffffff`) — the light surface is the brand's defining counter-move
- **Do** reserve teal `#14b8a6` for the primary CTA and product accents — it's the entire saturated budget
- **Do** use teal-600 `#0d9488` for any teal *text* on white — the 500 fails contrast
- **Do** set headings in Mona Sans pulled tight (-0.022em+) so the wide letterforms close up
- **Do** keep the h2 at the 900 weight — it's the intended punch against the calm body
- **Do** set body in Inter at 16px / 1.55 for white-paper readability
- **Do** keep the ORM indigo `#6366f1` product-scoped, never competing with teal for primary
- **Do** treat the `npx prisma init` code chip as a first-class, copyable CTA element
- **Do** use 6px button radius and 12px card radius
- **Do** keep shadows soft and navy-tinted (`rgba(17,24,39,0.04–0.12)`), never pure black
- **Do** pair product color-coding (teal/indigo) with text labels for accessibility

### Don't

- **Don't** flip the marketing surface to dark — the dark theme belongs to the docs app only
- **Don't** use teal-500 as text on white — it fails AA; drop to 600/700
- **Don't** introduce a second loud accent — the single-teal discipline is the brand
- **Don't** let indigo compete with teal for the primary CTA; indigo is product-scoped
- **Don't** substitute a generic system sans for Mona Sans in headlines — the GitHub grotesque is the voice
- **Don't** use pure-black drop shadows on white; they read as harsh and off-brand
- **Don't** harden radii toward 2–4px terminal corners — Prisma is approachable (6px CTAs, 12px cards)
- **Don't** crowd the layout — the generous 96–128px section rhythm is part of the legibility argument
- **Don't** set body type below 16px or with tight leading — Prisma reads like a paper, not a dashboard
- **Don't** anchor a full section background in teal — it stays foreground for action
- **Don't** confuse `--primary` (`#16a394`, docs/app) with the marketing CTA teal (`#14b8a6`) — use the 500 on marketing

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #ffffff
surface: #f9fafb
text: #1d242f          (navy body)
heading: #111827       (near-black)
brand: #14b8a6         (teal-500 — CTA fill)
brand-text: #0d9488    (teal-600 — teal text on white)
brand-strong: #2dd4bf  (teal-400 — hover/dark)
accent-orm: #6366f1    (indigo — ORM line)
accent-wash: #d9f9f6   (pale teal badge bg)
accent-wash-text: #154f47
border: #e2e8f0
on-brand: #ffffff
```

### Example Component Prompts

1. "Create a hero section on a white `#ffffff` canvas: a 64px Mona Sans headline at 700 weight with -0.022em tracking in near-black `#111827`, an 18px Inter subhead in navy `#1d242f` below. Pair a primary teal button (`#14b8a6` fill, white text, 6px radius, 10px 18px padding, 15/600 label) saying 'Get started' with a gray code chip (`#f3f4f6` bg, `#111827` mono text, 6px radius) reading '$ npx prisma init'."

2. "Design a 3-card feature grid on white: each card `#ffffff` bg, 24px padding, 12px radius, 1px `#e2e8f0` border, ambient `rgba(17,24,39,0.04)` shadow. Card title in 20px Inter 600 `#111827`, body in 16px Inter 400 `#1d242f`. On hover, border → `#cbd5e1` and shadow lifts to standard. No saturated color except a small teal `#d9f9f6` 'New' pill where relevant."

3. "Build a product-line switcher: two tabs, 'Prisma Postgres' accented teal `#14b8a6` and 'ORM' accented indigo `#6366f1`. Selected tab shows a 2px bottom rule in its accent color; cards below carry a matching top accent rule. Tab labels in 15px Inter 600, navy `#1d242f` when inactive."

4. "Create a teal CTA band: white `#ffffff` background, centered 36px Mona Sans 900 heading `#111827`, 18px Inter subhead `#6b7280`, and a single primary teal button (`#14b8a6`, white text, 6px radius) 'Start now'. Keep it flat — soft navy-tinted shadow only, no gradients."

5. "Design a code block: `#f9fafb` background, 1px `#e2e8f0` border, 8px radius, 14px mono `#1d242f` body at 1.6 line-height, syntax-highlighted. Inline code in surrounding prose renders in 14px mono at 500 weight. Add a copy button in the top-right that confirms with a brief teal tick."

6. "Build a newsletter input row on white: text input `#ffffff` bg, 1px `#e2e8f0` border, 6px radius, 10px 12px padding, `#9ca3af` placeholder, navy `#1d242f` value. On focus, border → `#14b8a6` with a 3px `rgba(20,184,166,0.35)` ring. Submit button is primary teal."

### Iteration Guide

1. **Start white** — `#ffffff` canvas with navy `#1d242f` body and `#111827` headings. If you're on a dark canvas, you've built the docs theme, not the marketing brand.
2. **Spend all saturated color on teal** — `#14b8a6` for the CTA, nothing else competing. One loud color, everywhere else neutral.
3. **Teal text needs the 600** — any teal-colored text or link uses `#0d9488`, not `#14b8a6`. Verify contrast.
4. **Mona Sans display, pulled tight** — wide grotesque at -0.022em+ tracking; the h2 hits 900 weight. Inter for body.
5. **Gentle radii** — 6px buttons, 12px cards. Not 2–4px terminal corners, not pillowy consumer pills.
6. **Soft navy shadows** — `rgba(17,24,39,0.04–0.12)`, never pure black, never teal (except the focus ring).
7. **Lead with the command** — the `npx prisma init` code chip is a CTA; treat it as a first-class element.
8. **Breathe** — 96–128px section rhythm, 16px body, generous leading. Prisma reads like a paper.

---

*Theme-toggle audit: score=2, signals=[tailwind-dark-class] — dark signal is the Fumadocs docs theme; marketing surface is light.*
