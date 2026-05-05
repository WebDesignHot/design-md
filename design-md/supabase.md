---
name: Supabase
tagline: Off-black canvas, signature emerald `#3ecf8e`, Circular as display, Postgres-grade type discipline.
author: webdesignhot
source_url: https://supabase.com
spec: design.md/v1
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [dark, mono, sans, dense, structured]
preview_swatch: ['#121212', '#3ecf8e', '#fafafa']
related: [vercel, linear, resend]
description: 'Supabase wraps a Postgres-grade product in a Postgres-grade design system — `#121212` canvas, the iconic `#3ecf8e` emerald reserved for action, Circular for display, and an HSL-token system that scales surface, foreground and brand on the same numeric ladder.'

colors:
  bg: '#121212'              # observed body bg rgb(18,18,18) ≈ --background-default hsl(0,0%,7.1%)
  bg-alt: '#0f0f0f'          # --background-alternative-default hsl(0,0%,5.9%)
  surface-75: '#171717'      # --background-surface-75 hsl(0,0%,9%)
  surface-200: '#212121'     # --background-surface-200 hsl(0,0%,12.9%)
  overlay: '#242424'         # --background-overlay-default hsl(0,0%,14.1%)
  overlay-hover: '#2e2e2e'   # --background-overlay-hover hsl(0,0%,18%)
  text: '#fafafa'            # --foreground-default hsl(0,0%,98%) — observed rgb(250,250,250)
  text-light: '#b4b4b4'      # --foreground-light hsl(0,0%,70.6%)
  text-lighter: '#898989'    # --foreground-lighter hsl(0,0%,53.7%)
  text-on-brand: '#161616'   # --foreground-contrast hsl(0,0%,8.6%)
  brand: '#3ecf8e'           # --brand-default hsl(153.1,60.2%,52.7%) — the signature Supabase emerald
  brand-link: '#00c46a'      # --brand-link hsl(155,100%,38.6%) — link / underline accent
  brand-deep: '#006239'      # --brand-500 hsl(154.9,100%,19.2%) — deep emerald for shadows
  brand-soft: '#a3e9c5'      # --brand-600 hsl(154.9,59.5%,70%) — hover/pressed lift
  border: '#2e2e2e'          # --border-default hsl(0,0%,18%)
  border-muted: '#242424'    # --border-muted hsl(0,0%,14.1%)
  border-strong: '#363636'   # --border-strong hsl(0,0%,21.2%)
  on-brand: '#161616'

typography:
  display:
    family: 'Circular, custom-font, "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 700]
  body:
    family: 'Circular, custom-font, "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500]
  mono:
    family: 'Office Code Pro, "Source Code Pro", Menlo, monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 72, weight: 400, lineHeight: 1.0,  tracking: '0' }      # observed 72/72 normal
    h2:    { size: 48, weight: 400, lineHeight: 1.05, tracking: '0' }
    body:  { size: 16, lineHeight: 1.5 }
    label: { size: 11, weight: 500, family: mono }

radius:
  xs: 2          # --borderradius-xs
  sm: 4          # --borderradius-sm / --radius-sm 0.25rem
  md: 6          # --radius-md 0.375rem
  lg: 8          # --borderradius-lg / --radius-lg 0.5rem
  xl: 16         # --borderradius-xl
  button: 6
  card: 8
  pill: 9999

lineage:
  summary: |
    Supabase's marketing surface is the rare dark site that aligns
    perfectly with its developer audience — the same `#121212` canvas
    you'd see in a terminal, the same Circular sans Vercel popularised
    for dev tools, and one piercing emerald `#3ecf8e` reserved entirely
    for action. The colour system is unusually disciplined: instead of
    defining colours, Supabase defines **HSL tuples** on a numeric
    ladder (`--background-default`, `--background-surface-75`,
    `--background-surface-200`, `--background-overlay-default`) where
    each tier is the same hue/saturation but a few steps deeper in
    lightness. This is how a database product thinks about a design
    system — schemas, not swatches. The brand emerald itself is
    observed at `hsl(153.1, 60.2%, 52.7%)` (`--brand-default`),
    flanked by a slightly more saturated `--brand-link` at 100%/38.6%
    for hyperlinks. Where Vercel goes pure black/white, Supabase
    pushes the canvas just one stop softer to `#121212`, which
    photographs better against the emerald and feels closer to a
    code editor's "Dimmed" mode than a marketing void. Circular's
    geometric humanism gives display copy the engineered confidence
    that suits a Postgres-as-a-platform pitch — never the literary
    flourish Notion reaches for.
  influences:
    - name: Vercel
      role: Off-black dev-tool canvas with Circular display sans and minimal chromatic noise.
      url: https://vercel.com
    - name: Stripe
      role: Single-accent brand discipline — one colour does all the action work.
      url: https://stripe.com
    - name: Postgres / SQL editor aesthetics
      role: HSL-tuple token system mirrors how DB products express schema — numeric ladder, not named swatches.
      url: https://www.postgresql.org
---

## Overview

Supabase's website lives at `#121212` — one stop softer than pure black,
calibrated so the signature `#3ecf8e` emerald photographs cleanly against
it. The H1 arrives at 72px / 400 / 1.0 line-height in **Circular**, with
no tracking adjustment — the geometry of the typeface is the design.
Body type is the same Circular at 16px on a 1.5 rhythm; the mono voice
appears for code blocks and IDs.

The detail that separates Supabase from peer dark dev-tool sites is its
HSL-tuple token system: surfaces are defined as `hsl(0deg, 0%, X%)`
where X marches up the ladder (5.9 → 7.1 → 9 → 12.9 → 14.1 → 18 →
21.2). That means surfaces, borders, and overlays all sit on the same
hue, just at different lightness stops. It reads as a schema, not a
palette — fitting for a Postgres product.

## Colors

- **bg** `#121212` — the canvas, off-black at hsl(0,0%,7.1%), softer than pure black to flatter the emerald
- **surface-75** `#171717` — first elevation stop for cards and panels
- **overlay** `#242424` — popovers, tooltips, dropdowns
- **text** `#fafafa` — primary copy at near-pure white
- **text-light** `#b4b4b4` — secondary descriptive copy
- **brand** `#3ecf8e` — the signature emerald, used only for action and key affordances
- **brand-link** `#00c46a` — saturated underline / inline link variant
- **brand-deep** `#006239` — shadow / glow halo around emerald CTAs
- **border** `#2e2e2e` — default hairline at hsl(0,0%,18%)
- **on-brand** `#161616` — text on emerald surface, near-black for legibility

## Typography

Display is **Circular**, the geometric humanist sans whose flat-cut
terminals make it feel both engineered and warm. The H1 sits at 72px /
weight 400 / 1.0 line-height with no tracking adjustment — the type
geometry carries the weight, no negative tracking required. This is a
deliberate departure from the Inter-with-tight-tracking pattern used by
Linear/Vercel; Circular is rounder, and Supabase lets the roundness
breathe.

Body copy is Circular at 16px / 400 / 24px line-height. Weights cap at
700 for emphasis; the system never reaches for ExtraBold.

The tertiary mono voice is Office Code Pro / Source Code Pro for
inline code, IDs, and SQL snippets — appropriate for a database
platform where code samples are the primary marketing visual.

## Layout

Containers are dense but not crowded — the dashboard-influenced layout
uses 8px (`--radius-lg`) as its baseline corner radius, and surface
elevation steps in 2–4% lightness increments. The line-height ladder
runs from 1rem to 5rem, mapping to the typography scale rather than a
fixed step.

## Elevation & Depth

Depth is HSL tonal lift: surfaces run `bg-alt → bg → surface-75 →
surface-200 → overlay → overlay-hover` in 1–4 percentage-point
lightness increments. Borders are graded as `--border-muted →
--border-default → --border-strong` (14.1% → 18% → 21.2% lightness),
giving cards three stops of edge weight. There are essentially no
drop-shadows on the marketing surface — depth is pure tonal grammar.

## Shapes

Radii ladder: 2 (`xs`) / 4 (`sm`) / 6 (`md`) / 8 (`lg`) / 16 (`xl`).
Buttons land at 6, cards at 8, the largest hero containers reach 16.
The discipline is tight — radii are small, almost dashboard-grade,
which is what gives the marketing its product-not-poster feel.

## Components

The signature primitive is the **emerald CTA**: `#3ecf8e` background,
`#161616` text, 6px radius, with a `#006239` deep-emerald glow halo on
hover. Cards are flat panels at `surface-75` with a `border-default`
hairline. The navigation is a thin bar — emerald reserved for the
"Start your project" CTA, never decorating links. Code blocks use
mono with subtle `surface-200` background, mimicking the Supabase
SQL editor itself.

## Do's and Don'ts

- **Do** define surfaces as **HSL lightness stops** on the same hue (5.9 / 7.1 / 9 / 12.9 / 14.1 / 18) — it's how the system stays coherent.
- **Do** reserve `#3ecf8e` exclusively for primary action, brand wordmark, and active state — never as a decorative fill.
- **Do** use Circular at weight 400 for display; the geometry is what carries the line, not extra weight.
- **Don't** introduce a second accent colour. The brand is monochrome-plus-emerald; adding blue or purple breaks the database-grade discipline.
- **Don't** apply drop-shadows for elevation — depth here is HSL tonal lift, period.
- **Don't** photograph emerald against pure `#000`; the calibrated `#121212` canvas is what makes `#3ecf8e` read as alive rather than radioactive.
