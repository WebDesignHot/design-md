---
name: Grafana
tagline: Dark observability canvas with the iconic `#f46800` orange — Inter for body, monospace everywhere a label hides, and chart series that look ripped straight from a real dashboard.
author: webdesignhot
source_url: https://grafana.com
spec: design.md/v1
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [dark, structured, sans, mono, dense, warm]
preview_swatch: ['#111217', '#f46800', '#ffffff']
related: [vercel, linear, posthog]
description: 'Grafana''s marketing site is a dark observability canvas with one electric `#f46800` orange that does almost all the brand work. The body bg is a near-black `#111217` with cool-grey hairlines, Inter handles body and headlines, and Roboto Mono carries every metric label and code sample. The signature gesture is the orange — used as the heart-icon mark, the primary CTA fill, the chart-series-one colour, and the link/hover state — paired with a saturated supporting palette of teals, magentas, and yellows that read as "real Grafana panels rendered at marketing scale."'

colors:
  bg: '#111217'                # body canvas, near-black with slight blue
  bg-elevated: '#181b1f'       # raised card surface
  bg-soft: '#0b0c0e'           # darker footer / nav strip
  surface: '#202226'            # secondary panel
  surface-hover: '#2a2d33'      # hover state
  text: '#ffffff'               # primary copy
  text-muted: '#ccccdc'         # body paragraphs (Grafana grey-1)
  text-soft: '#9090a0'          # captions, metadata
  brand: '#f46800'              # the iconic Grafana orange
  brand-hover: '#dc5e00'        # pressed state
  brand-soft: '#3d1e07'         # tinted brand surface for hero callouts
  link: '#f46800'
  on-brand: '#ffffff'
  # Multi-colour chart palette (Grafana panel default scheme)
  chart-orange: '#f46800'
  chart-teal: '#37c2ba'
  chart-blue: '#5794f2'
  chart-purple: '#9170db'
  chart-pink: '#f2495c'
  chart-yellow: '#fade2a'
  chart-green: '#73bf69'
  border: '#ffffff14'           # ~8% white hairline
  border-soft: '#ffffff0a'      # softer divider

typography:
  display:
    family: 'Inter, "Helvetica Neue", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [500, 600, 700]
  body:
    family: 'Inter, "Helvetica Neue", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"Roboto Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 64, weight: 700, lineHeight: 1.05, tracking: '-0.02em' }
    h2:    { size: 44, weight: 700, lineHeight: 1.1,  tracking: '-0.015em' }
    h3:    { size: 28, weight: 600, lineHeight: 1.25, tracking: '0' }
    body:  { size: 16, lineHeight: 1.6 }
    code:  { size: 14, family: mono, lineHeight: 1.55 }
    label: { size: 11, weight: 500, family: mono, tracking: '0.05em' }

radius:
  xs: 2
  sm: 4
  md: 6
  lg: 8
  card: 8
  button: 6
  pill: 9999

layout:
  container: 1280
  gutter: 24
  section: 96
  grid: 12
  density: 'high'

components:
  button-primary:
    bg: '#f46800'
    color: '#ffffff'
    radius: 6
    weight: 600
    padding: '12px 20px'
  button-secondary:
    bg: 'transparent'
    color: '#ffffff'
    radius: 6
    border: '1px solid #ffffff33'
  card:
    bg: '#181b1f'
    radius: 8
    border: '1px solid #ffffff14'
  panel-mock:
    bg: '#181b1f'
    border: '1px solid #ffffff14'
    radius: 4
    label-family: mono
    palette: [chart-orange, chart-teal, chart-blue, chart-purple, chart-pink, chart-yellow, chart-green]

lineage:
  summary: |
    Grafana''s marketing site is the in-product UI dressed for a
    landing page. The dark `#111217` canvas, the cool-grey hairlines,
    the 4–8px panel radii, and the multi-colour chart palette are all
    direct lifts from the real Grafana dashboard, which is the right
    move: the marketing surface earns trust by looking exactly like
    the tool you''re buying. The iconic `#f46800` orange — first used
    in the original 2014 release — has survived every brand refresh
    intact, and operates as a single-hue brand axis (CTA fill, link,
    chart-series-one, heart-icon mark). Inter handles every text role
    on the marketing page (the in-product UI uses its own custom font
    stack), with **Roboto Mono** reserved for labels, metric chips,
    code blocks, and dashboard tickers — the monospace presence is
    constant, which is what gives Grafana its "operator console" feel.
    Where Datadog uses a bright white canvas and a restrained purple,
    Grafana inverts: dark canvas, saturated orange, multi-colour chart
    palette in every panel mock. The combined effect is observability
    that looks like it was designed by people who run dashboards in
    production, not by people who only render them in screenshots.
  influences:
    - name: Prometheus
      role: Open-source observability lineage — dark dashboards, monospace tickers, multi-colour chart series.
      url: https://prometheus.io
    - name: Datadog
      role: Counterpoint reference — Grafana''s dark canvas + orange is the deliberate inverse of Datadog''s white canvas + purple.
      url: https://www.datadoghq.com
    - name: Bloomberg Terminal
      role: Deep-historical reference for monospace-everywhere data density on dark canvases.
      url: https://www.bloomberg.com/professional/products/bloomberg-terminal
---

## Overview

Grafana''s marketing site renders the in-product UI at landing-page
scale. The body canvas is a near-black `#111217` with a slight blue
tilt, headlines hit 64px at 700 weight in Inter with `-0.02em`
tracking, and the iconic `#f46800` orange — the same hue since the
original 2014 release — does almost all the brand work as CTA fill,
link colour, chart-series-one, and heart-icon mark.

The signature gesture is the multi-colour chart palette in every
panel mock: orange/teal/blue/purple/pink/yellow/green appear together
on a single dashboard tile, proving the platform is built for the
case where you''re looking at fifteen series at once. Roboto Mono
carries every metric label, axis tick, and code sample — the
monospace ubiquity is what makes Grafana feel like an operator
console rather than a SaaS marketing site.

## Colors

- **bg** `#111217` — near-black canvas with a slight blue tilt
- **bg-elevated** `#181b1f` — raised panel / card surface
- **bg-soft** `#0b0c0e` — darker footer / nav band
- **brand** `#f46800` — the iconic Grafana orange, single-hue brand axis
- **brand-hover** `#dc5e00` — pressed state
- **chart-palette** orange/teal/blue/purple/pink/yellow/green — the seven-series default panel scheme
- **text** `#ffffff` — primary copy
- **text-muted** `#ccccdc` — Grafana grey-1, body paragraphs
- **border** `#ffffff14` — ~8% white hairline, the cool-grey panel divider

## Typography

Display and body are both **Inter** at weights 400/500/600/700,
sized 64px on a 67px line-height (1.05) for the hero with `-0.02em`
tracking. Inter is the safe, structured sans for observability — it''s
also what the in-product UI ships, so marketing and product feel
continuous.

The monospace presence is constant: **Roboto Mono** at 400 and 500
carries every metric label, axis tick, dashboard tile title, code
sample, and small-cap label (11px with `0.05em` tracking). This
mono ubiquity is what distinguishes Grafana from Datadog (which
hides its mono in dashboard chrome) — Grafana puts the operator
console in front of you on the homepage.

## Layout

A 1280px max container with 24px gutters and 96px vertical rhythm
between feature bands. Cards use 8px radii, panel mocks use 4px
(matching the in-product Grafana panel chrome), and buttons use 6px.
The grid runs 12 columns and is densely subdivided in feature-table
and integration-logo bands.

## Elevation & Depth

Depth is built from cool-grey tonal layering on a dark canvas:
`#0b0c0e` → `#111217` → `#181b1f` → `#202226` form a four-step ladder,
separated by an 8% white hairline (`#ffffff14`). Shadows are absent;
the contrast comes from the colour-temperature shift between layers
and from the orange brand-pop against the near-black.

## Shapes

Radii ladder is 2/4/6/8, with panel mocks at 4px and buttons at 6px.
The tight radii match the in-product Grafana dashboard chrome and
signal the engineering rigour of the platform. Pills (`9999px`) appear
only for tags, metric chips, and status indicators inside panel mocks.

## Components

The defining components are the **orange CTA** (`#f46800` fill, white
text, 6px radius, Inter 600), the **dashboard panel mock** (`#181b1f`
bg, 4px radius, hairline border, monospace labels, multi-colour chart
series), and the **monospace metric chip** (Roboto Mono, 11px,
`0.05em` tracking, used as labels in every illustration). Cards are
elevated `#181b1f` panels with 8px radii and the 8% white hairline.

## Do''s and Don''ts

- **Do** keep the orange `#f46800` as the only brand-axis colour; the chart palette (teal/blue/purple/pink/yellow/green) is for data series, not for marketing decoration.
- **Do** use Roboto Mono for every metric label, axis tick, and code sample — the monospace ubiquity is the brand''s operator-console signature.
- **Do** render multi-colour chart panels in hero illustrations; the seven-series default scheme is the strongest density signal Grafana owns.
- **Don''t** lighten the canvas to grey or off-white — the near-black `#111217` is what makes Grafana read as observability instead of SaaS.
- **Don''t** round panel mocks above 4px radii; the tight corner is what ties marketing illustrations to the real in-product dashboard.
- **Don''t** swap Inter for a more expressive display sans — Grafana''s typography earns trust through restraint, not personality.
