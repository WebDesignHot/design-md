---
name: Axiom
tagline: Deep-navy observability with a cyan electric accent — Inter for body, JetBrains Mono for every event label, and a structural grid that reads as "logs at planet scale."
author: webdesignhot
source_url: https://axiom.co
spec: design.md/v1
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [dark, structured, sans, mono, cool, bright]
preview_swatch: ['#0a0e1a', '#1aaaff', '#ffffff']
related: [vercel, linear, supabase]
description: 'Axiom''s site is a deep-navy observability surface — a `#0a0e1a` near-black canvas with a slight blue tilt, a single electric `#1aaaff` cyan accent, and Inter + JetBrains Mono carrying the entire typographic load. The layout is structural and grid-disciplined, every code sample is mono, and product mocks lean into log-stream density (rows of timestamped events, JSON payloads, multi-series charts). The visual register is "infrastructure for serious teams" — closer to Linear''s structural rigour than Datadog''s enterprise density, with a colder palette than Grafana''s warm orange.'

colors:
  bg: '#0a0e1a'                # body canvas, deep navy with blue tilt
  bg-elevated: '#111729'       # raised card surface
  bg-soft: '#06080f'           # darker footer / nav band
  surface: '#161d33'            # secondary panel
  surface-hover: '#1d2540'      # subtle hover state
  text: '#ffffff'               # primary copy
  text-muted: '#b8c0d4'         # body paragraphs
  text-soft: '#7a86a3'          # captions, metadata
  brand: '#1aaaff'              # electric cyan accent
  brand-hover: '#0e8ed8'        # pressed state
  brand-soft: '#0a3050'         # tinted brand surface for callouts
  link: '#1aaaff'
  on-brand: '#ffffff'
  accent-cyan: '#1aaaff'        # primary brand accent
  accent-violet: '#9c5cff'      # secondary illustration accent
  accent-green: '#22c55e'       # status / success indicator
  accent-amber: '#f59e0b'       # warning indicator in log mocks
  accent-red: '#ef4444'         # error indicator in log mocks
  border: '#ffffff14'           # ~8% white hairline
  border-soft: '#ffffff0a'      # softer divider for code blocks

typography:
  display:
    family: 'Inter, "Inter Variable", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [500, 600, 700]
  body:
    family: 'Inter, "Inter Variable", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"JetBrains Mono", "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 72, weight: 600, lineHeight: 1.05, tracking: '-0.025em' }
    h2:    { size: 48, weight: 600, lineHeight: 1.1,  tracking: '-0.02em' }
    h3:    { size: 28, weight: 600, lineHeight: 1.25, tracking: '-0.01em' }
    body:  { size: 16, lineHeight: 1.6 }
    code:  { size: 13, family: mono, lineHeight: 1.6 }
    label: { size: 12, weight: 500, family: mono, tracking: '0.04em' }

radius:
  xs: 4
  sm: 6
  md: 8
  lg: 12
  card: 12
  button: 8
  pill: 9999

layout:
  container: 1240
  gutter: 24
  section: 96
  grid: 12
  density: 'high'

components:
  button-primary:
    bg: '#1aaaff'
    color: '#ffffff'
    radius: 8
    weight: 500
    padding: '10px 18px'
  button-secondary:
    bg: 'transparent'
    color: '#ffffff'
    radius: 8
    border: '1px solid #ffffff33'
  card:
    bg: '#111729'
    radius: 12
    border: '1px solid #ffffff14'
  log-row:
    bg: 'transparent'
    family: mono
    timestamp-color: '#7a86a3'
    level-palette:
      info: '#1aaaff'
      warn: '#f59e0b'
      error: '#ef4444'
      success: '#22c55e'

lineage:
  summary: |
    Axiom occupies the cold-blue end of the observability spectrum.
    Where Grafana is dark with warm orange and Datadog is bright with
    accent purple, Axiom is dark with electric cyan — the colour
    register signals "infrastructure for engineers who don''t want
    their dashboard to be friendly." The body canvas is `#0a0e1a`,
    a deep navy with a clear blue tilt that distinguishes it from
    the neutral near-blacks of Vercel and Linear. The single
    `#1aaaff` cyan accent is the brand''s wayfinding system: CTA
    fills, links, illustration highlights, and chart-series-one
    all resolve to it. Inter handles every text role, with **JetBrains
    Mono** carrying every log event, JSON payload, code sample, and
    metric label — the monospace presence is constant, which is the
    brand''s "log stream as marketing copy" gesture. Layout is
    structural and grid-disciplined, with 12px card radii and 8px
    buttons that sit between Linear''s tight Vercel-influenced
    geometry and Sentry''s pill-button friendliness. The lineage
    is clearly Linear-and-Vercel-adjacent, but Axiom pushes harder
    into log-stream density and operator-console aesthetics.
  influences:
    - name: Linear
      role: Structural rigour, near-black canvas, restrained accent palette.
      url: https://linear.app
    - name: Vercel
      role: Cool dark canvas with a single bright accent, monospace ubiquity for code.
      url: https://vercel.com
    - name: Grafana
      role: Operator-console aesthetic — log-stream density, monospace timestamps, multi-level severity colours.
      url: https://grafana.com
---

## Overview

Axiom''s site is the cold-blue end of observability marketing. The
canvas is a deep navy `#0a0e1a` with a clear blue tilt — neither
the neutral near-black of Linear nor the warm aubergine of Sentry.
Headlines hit 72px at weight 600 in Inter with `-0.025em` tracking,
the single `#1aaaff` electric cyan does all the brand work as CTA
fill / link / accent stamp, and **JetBrains Mono** carries every
log event, JSON payload, and code sample shown on the page.

The signature gesture is the **log-stream mock**: rows of timestamped
events with monospace severity tags (info/warn/error/success) rendered
at marketing scale, often as the hero illustration itself. It says
"this is what the product looks like at 2am during an incident" — and
it does that without apology.

## Colors

- **bg** `#0a0e1a` — deep navy canvas with clear blue tilt
- **bg-elevated** `#111729` — raised card / panel surface
- **bg-soft** `#06080f` — darker footer / nav band
- **brand** `#1aaaff` — the electric cyan, single-hue brand axis
- **brand-hover** `#0e8ed8` — pressed state
- **accent-violet** `#9c5cff` — secondary illustration accent
- **status palette** info/warn/error/success — cyan/amber/red/green for log-level mocks
- **text** `#ffffff` — primary copy
- **text-muted** `#b8c0d4` — body paragraphs
- **border** `#ffffff14` — ~8% white hairline divider

## Typography

Display and body are both **Inter** at weights 400/500/600/700, sized
72px on a 75.6px line-height (1.05) for the hero with `-0.025em`
tracking. Inter is the structurally-correct sans for cold-infra
marketing — the same lineage as Linear, Vercel, and Supabase.

The monospace presence is the brand''s typographic signature:
**JetBrains Mono** at 400 and 500 carries every code sample, log
row timestamp, JSON payload, severity tag, and small-cap label
(12px with `0.04em` tracking). The mono ubiquity reads as "the
operator console is the marketing site" — closer to Grafana than
to the SaaS-sans norm.

## Layout

A 1240px max container with 24px gutters and 96px vertical rhythm.
Cards use 12px radii, log-row mocks use no radius (tabular density),
and buttons use 8px (between Linear''s 6px tightness and Sentry''s
full pill). The 12-column grid is densely subdivided in event-volume
charts and integration-logo bands.

## Elevation & Depth

Depth is built from cool-blue tonal layering: `#06080f` → `#0a0e1a` →
`#111729` → `#161d33` form a four-step ladder, separated by an 8%
white hairline (`#ffffff14`). Shadows are absent; the contrast
comes from the colour-temperature shift between layers and the cyan
brand-pop against the deep navy. Hero log-stream mocks sit on the
elevated tier; code blocks drop to the deepest tier.

## Shapes

Radii ladder is 4/6/8/12, with cards at 12px and buttons at 8px.
The 8px button sits squarely in the modern dev-infra norm (Vercel,
Supabase, Resend). Pills (`9999px`) appear for tags, severity chips,
and status badges inside log-row mocks.

## Components

The defining components are the **cyan CTA** (`#1aaaff` fill, white
text, 8px radius, Inter 500), the **log-stream mock** (monospace
rows with timestamped events, severity-colour tags, JSON expansion),
and the **JetBrains Mono code block** with the deepest `#06080f`
background. Cards are elevated `#111729` panels with 12px radii
and an 8% white hairline.

## Do''s and Don''ts

- **Do** keep `#1aaaff` as the single brand-axis colour; the violet/amber/red/green accents are status-only, never structural.
- **Do** render log-stream mocks as hero illustrations — the monospace event row is Axiom''s most distinctive marketing asset.
- **Do** use JetBrains Mono for every code sample, JSON payload, and severity tag; the mono ubiquity is the operator-console signature.
- **Don''t** warm the canvas toward aubergine or near-black — the deep navy with blue tilt is what gives Axiom its cold, structural register.
- **Don''t** soften buttons to full pills; the 8px radius keeps the system in the dev-infra geometry of Vercel and Supabase.
- **Don''t** introduce a display sans or editorial serif — Inter + JetBrains Mono is the entire typographic system, and the restraint is the brand.
