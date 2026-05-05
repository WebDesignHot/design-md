---
name: Resend
tagline: Pure-black canvas with Domaine Display serif at 96px and Commit Mono code chips — email infra that thinks in italics.
author: webdesignhot
source_url: https://resend.com
spec: design.md/v1
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [dark, editorial, serif, sans, mono, spacious]
preview_swatch: ['#000000', '#f0f0f0', '#3b9eff']
related: [linear, supabase, vercel]
description: 'Resend pairs a pure-`#000` canvas with **Domaine Display** for headlines and **Commit Mono** for code, then quietly hands the body to Inter. The result is dev-tool infrastructure dressed in a magazine — uncommon for the category, and the reason its API docs feel like an essay.'

colors:
  bg: '#000000'           # observed body bg, also --color-background
  bg-elevated: '#141517'  # --color-gray-1 — first surface stop
  surface: '#191b1e'      # --color-gray-2 — card panels
  surface-2: '#212629'    # --color-gray-3 — input fields, code blocks
  text: '#f0f0f0'         # --color-gray-12 — observed body color rgb(240,240,240)
  text-soft: '#a1a4a5'    # --color-gray-11
  text-muted: '#878d8f'   # --color-gray-10
  brand: '#f0f0f0'        # the brand voice is the type itself; primary accent stays neutral
  link-blue: '#3b9eff'    # --color-blue-10 (used for inline links in copy)
  accent-blue-soft: 'rgba(0,117,255,0.34)'  # --color-blue-4 — CTA wash
  border: '#212629'       # --color-gray-3 used as hairline
  border-soft: 'rgba(255,255,255,0.07)'      # observed faint divider
  on-brand: '#000000'

typography:
  display:
    family: '"domaine", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
    weights: [400]   # observed at weight 400 only — Domaine carries presence at regular
  body:
    family: 'inter, ui-sans-serif, system-ui, sans-serif'
    weights: [400, 500, 600]
  ui:
    family: '"aBCFavorit", ui-sans-serif, system-ui, sans-serif'
    weights: [400, 500]    # CTA / button voice observed at 500
  mono:
    family: '"commitMono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 96, weight: 400, lineHeight: 1.0,  tracking: '-0.01em' }   # observed -0.96px @ 96px (Domaine)
    h2:    { size: 56, weight: 400, lineHeight: 1.05, tracking: '-0.01em' }
    body:  { size: 16, lineHeight: 1.5 }
    code:  { size: 14, family: mono, lineHeight: 1.6 }
    label: { size: 11, weight: 500, family: ui }

radius:
  xs: 2          # --radius-xs 0.125rem
  sm: 4          # --radius-sm 0.25rem
  md: 6          # --radius-md 0.375rem
  lg: 8          # --radius-lg 0.5rem
  xl: 12         # --radius-xl 0.75rem
  xxl: 16        # --radius-2xl 1rem
  button: 9999   # observed CTA radius is effectively pill (1.67e7px)
  card: 12
  pill: 9999

lineage:
  summary: |
    Resend's homepage is the rare developer-infrastructure site that
    chooses a **serif display face**. Where Linear, Vercel, Supabase
    and Stripe all reach for Inter or a custom geometric sans, Resend
    drops a 96px **Domaine Display** as its hero — Domaine is the
    Klim Type Foundry serif used by The New Yorker, *Bloomberg
    Businessweek*, and several literary publishers. Pairing it with
    a pure-`#000` canvas turns the marketing into something closer
    to an essay opener than an SDK pitch. Body copy hands off to
    `Inter` at 16px (the dev-tool default), and inline code uses
    **Commit Mono**, the open-source mono designed for terminal
    legibility — together those three faces stake out three distinct
    voices: editorial display, neutral body, and functional code.
    The CTA uses `aBCFavorit` (a Lineto/ABC family) at weight 500
    on a faint-blue wash (`rgba(0,117,255,0.34)`) at full pill
    radius — that pill-shaped chip is conspicuously small (8/12px
    padding), which keeps the editorial typography in command of the
    composition. Where Stripe trusts a single saturated brand colour,
    Resend trusts neutral grays plus type — there's no signature hue,
    only a signature serif.
  influences:
    - name: Klim Type Foundry / Domaine Display
      role: The literary-magazine display serif at 96px gives Resend its essay-not-SDK feel.
      url: https://klim.co.nz
    - name: The New Yorker / Bloomberg Businessweek
      role: Editorial publishing's serif-on-black grammar, repurposed for developer infrastructure.
      url: https://www.newyorker.com
    - name: Commit Mono
      role: Open-source terminal-grade mono used for inline code chips and API examples.
      url: https://commitmono.com
---

## Overview

Resend's marketing site lives at pure `#000` and lets a 96px **Domaine
Display** serif do the heavy lifting. The hero "Email for / developers"
arrives at weight 400 with `-0.96px` tracking — Domaine's organic
counters and pronounced ball terminals turn the line into a magazine
opener, not a typical SaaS hero. The body voice is `Inter` at 16px;
inline code drops to `Commit Mono`. The visual register is Bloomberg
Businessweek wearing developer-tool clothing.

Where peer dev-infra sites (Vercel, Supabase, Linear) commit to
geometric sans systems, Resend's serif-led identity is what carries
the brand: there's no signature accent colour, no chromatic gimmick.
The canvas is `#000`, the type is editorial, and the link blue
(`#3b9eff`) is borrowed from Radix UI's blue-10 — neutral enough not
to compete with the typography.

## Colors

- **bg** `#000000` — pure black canvas, no off-black calibration; the serif needs maximum contrast
- **bg-elevated** `#141517` — first surface stop for cards (`--color-gray-1`)
- **surface** `#191b1e` — panel backgrounds (`--color-gray-2`)
- **surface-2** `#212629` — code blocks, input fields (`--color-gray-3`)
- **text** `#f0f0f0` — primary copy, slightly off-white to soften against pure black
- **text-soft** `#a1a4a5` — secondary copy
- **text-muted** `#878d8f` — captions, metadata
- **link-blue** `#3b9eff` — sole chromatic accent, used sparingly for inline links and CTA washes
- **border** `#212629` — hairline divider (same as surface-2)

## Typography

Display is **Domaine Display** (Klim Type Foundry), a literary book
serif used by *The New Yorker* and *Bloomberg Businessweek*. The H1
arrives at 96px / weight 400 / 1.0 line-height with `-0.96px`
(`-0.01em`) tracking — the negative tracking is restrained because
Domaine's metrics are already tight. This is the only place on the
site Domaine appears; it's a hero-only voice.

Body type is **Inter** at 16px / 400 / 24px — the dev-tool default,
chosen for legibility in long-form documentation.

Buttons and UI chips switch to **aBCFavorit**, a Lineto-style
contemporary sans, at 14px / weight 500. It's a deliberate third
register — neither serif (Domaine's drama) nor body (Inter's neutrality)
— giving the action surface its own typographic stamp.

The mono voice is **Commit Mono**, an open-source terminal-grade
mono with intentionally over-equalised stem widths so code chips read
clean at small sizes. It appears wherever an API key, endpoint, or
inline code sample lives.

## Layout

Containers are loose and editorial — there's no fixed 1200px frame
the way Stripe enforces. Spacing tokens follow a Tailwind-aligned
ladder (0.25 / 0.5 / 0.75 / 1 / 1.5 / 2 rem) but the 96px display
type and surrounding 80–120px vertical padding give the page the
proportions of a magazine spread, not a SaaS column.

## Elevation & Depth

Depth is achieved through three near-imperceptible gray stops
(`#141517 → #191b1e → #212629`) — each just 4–6 lightness units
apart — plus a faint `rgba(255,255,255,0.07)` border on cards.
There are no shadows; the editorial typography is the figure, the
gray ladder is just the ground.

## Shapes

Radii ladder: 2 (`xs`) / 4 (`sm`) / 6 (`md`) / 8 (`lg`) / 12 (`xl`) / 16 (`2xl`),
with full pill (9999) reserved for the primary CTA chip and avatars.
The CTA's pill shape is intentionally small — its compactness keeps
the eye on Domaine, not on the chip.

## Components

The signature primitives are the **Domaine hero line** (96px / 400 /
serif, sentence-case, line-broken on slash) and the **pill CTA chip**
(`aBCFavorit` 500 / 14px on a `rgba(0,117,255,0.34)` blue wash, fully
rounded). Code blocks live in `surface-2` panels with Commit Mono;
they read like clipped terminal output, not styled examples. Cards
are flat with the gray-1 → gray-3 ladder; borders are `rgba(255,255,255,0.07)`.

## Do's and Don'ts

- **Do** reserve **Domaine Display** for hero/H1 only — its presence is what defines the brand, and over-use would dilute it.
- **Do** use **Commit Mono** for every code chip and inline API token; it's the third voice the system depends on.
- **Do** keep the canvas at pure `#000` — Domaine's contrast curve was designed for high-contrast print, and off-black backgrounds dull its serifs.
- **Don't** introduce a saturated brand accent; the system depends on neutral-plus-serif for its editorial register.
- **Don't** weight Domaine at 600+ for headlines; the regular cut is what gives the type its bookish authority.
- **Don't** mix Inter into the hero — body Inter at H1 size reads as a different brand entirely (Linear / Vercel territory).
