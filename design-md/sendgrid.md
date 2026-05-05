---
name: SendGrid
tagline: Functional API-blue on white — the email-platform dashboard aesthetic, now folded under the Twilio umbrella.
author: webdesignhot
source_url: https://www.twilio.com/en-us/sendgrid
spec: design.md/v1
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [light, sans, structured, cool, dense]
preview_swatch: ['#ffffff', '#1f74ff', '#0d122b']
related: [twilio, postmark, mintlify]
description: 'SendGrid (now part of Twilio) lives in a functional dashboard palette — white canvas, cool navy text, a confident `#1f74ff` API-blue for action, and a residual SendGrid-blue accent that survives the Twilio merger. The aesthetic is workhorse rather than expressive: dense product cards, code-sample panels, deliverability metrics in tabular layouts, and Twilio Sans handling type duties across the consolidated brand.'

colors:
  bg: '#ffffff'                # white canvas
  bg-soft: '#f4f6f9'           # cool grey-blue panel
  bg-navy: '#0d122b'           # Twilio navy band (inherited)
  bg-blue: '#e1eeff'           # pale-blue API panel
  bg-codeblock: '#0a1228'       # dark code surface
  surface: '#f8f9fb'           # softer white panel
  surface-soft: '#fafbfd'
  text: '#0d122b'              # deep navy body
  text-strong: '#000000'
  text-muted: '#5b6079'
  text-soft: '#8b8e9e'
  brand: '#1f74ff'             # SendGrid API blue (functional CTA)
  brand-strong: '#0d5fe0'      # pressed
  brand-soft: '#dceeff'        # info wash
  accent: '#f22f46'             # Twilio-red retained for parent-brand callouts
  accent-soft: '#fde7eb'
  border: '#0d122b1f'           # 12% navy rule
  border-soft: '#0d122b10'
  on-brand: '#ffffff'

typography:
  display:
    family: '"Twilio Sans Display", "Twilio Sans", "Söhne", Inter, "Helvetica Neue", Arial, sans-serif'
    weights: [500, 600, 700]
  body:
    family: '"Twilio Sans Text", "Twilio Sans", Inter, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"Twilio Sans Mono", "JetBrains Mono", Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 56, weight: 700, lineHeight: 1.1, tracking: '-0.02em' }
    h2:    { size: 40, weight: 700, lineHeight: 1.15, tracking: '-0.015em' }
    h3:    { size: 22, weight: 600, lineHeight: 1.3 }
    body:  { size: 16, lineHeight: 1.5 }
    label: { size: 12, weight: 600, family: mono, tracking: '0.06em' }

radius:
  xs: 2
  sm: 4
  md: 6
  lg: 8
  card: 8
  xl: 12
  button: 4
  pill: 9999

layout:
  container: 1240
  gutter: 24
  section-y: 80
  rhythm: 8

components:
  button-primary:
    bg: '#1f74ff'
    color: '#ffffff'
    radius: 4
    weight: 600
    paddingX: 20
    paddingY: 12
  button-secondary:
    bg: '#ffffff'
    color: '#0d122b'
    border: '1px solid #0d122b'
    radius: 4
  card:
    bg: '#ffffff'
    border: '1px solid #0d122b1f'
    radius: 8
  code-block:
    bg: '#0a1228'
    color: '#e6e9f1'
    radius: 8

lineage:
  summary: |
    SendGrid spent over a decade as the email-API-platform default,
    establishing a workhorse blue-on-white aesthetic that emphasised
    deliverability metrics, code samples, and dashboards rather than
    editorial flourish. After Twilio's 2019 acquisition (and the
    2024+ migration to twilio.com/sendgrid), SendGrid's surface
    folded into the Twilio Sans / navy-text system but retained its
    own functional API-blue `#1f74ff` for the primary CTA. The
    result is a dual-brand artefact: Twilio's typography and navy
    structural ink, SendGrid's blue still doing the action work.
    Pages run denser than Twilio's parent marketing, with more
    tabular comparisons, code panels, and metric cards — the
    audience here is operations engineers and email marketers, not
    enterprise CFOs. The aesthetic descends from the SaaS-dashboard
    school of late-2010s developer tools (Datadog, New Relic) where
    information density was the point.
  influences:
    - name: Twilio (parent brand)
      role: Twilio Sans typography, deep-navy text, and 4-8px tight radii inherited post-merger.
      url: https://twilio.com
    - name: Datadog / New Relic
      role: Dashboard-density layout school — code panels, metric cards, deliverability tables.
      url: https://www.datadoghq.com
    - name: Stripe (early-2010s docs era)
      role: Pale-blue API panels and inline code sample patterns.
      url: https://stripe.com/docs
---

## Overview

SendGrid's surface (now hosted on twilio.com/sendgrid) is a
workhorse dashboard aesthetic — white canvas, deep-navy type, a
confident API-blue `#1f74ff` for action, and dense product layouts
with code samples, deliverability charts, and pricing tables. The
Twilio merger means typography is now Twilio Sans, but the
SendGrid blue survives as the primary CTA fill — a deliberate
preservation of the legacy brand colour.

Where Postmark plays yellow-and-black playful, SendGrid plays cool,
dense, and informational. The H1 lands at a relatively restrained
56px / 700 — smaller than Brex or Deel — because the brand voice
is "deliver email at scale," not "campaign moment."

## Colors

- **bg** `#ffffff` — white canvas
- **bg-soft** `#f4f6f9` — cool grey-blue surface for product tiles
- **bg-blue** `#e1eeff` — pale API-blue band
- **bg-navy** `#0d122b` — inherited Twilio navy band, rare
- **bg-codeblock** `#0a1228` — dark code surface
- **brand** `#1f74ff` — SendGrid functional API-blue, primary CTA
- **accent** `#f22f46` — Twilio red, retained for parent-brand callouts
- **text** `#0d122b` — deep navy body type
- **border** `#0d122b1f` — 12% navy hairline

## Typography

Display is **Twilio Sans Display** at 700 weight, sized 56px / 62px
line height with `-0.02em` tracking. The smaller H1 (vs Twilio
parent's 64px) reflects SendGrid's denser, dashboard-grade pacing.
Body is **Twilio Sans Text** at 16px / 24px. Mono labels at 12px
handle code samples, endpoint paths, and deliverability metrics.

## Layout

Container is 1240px with a tighter 80px section padding — denser
than Twilio's parent rhythm. The grid is classical 12-column.
Cards round at 8px, buttons at 4px (Twilio inheritance). Code
panels and metric cards dominate the layout; full-bleed bands are
rare. The page reads more like documentation than campaign copy.

## Elevation & Depth

Depth is hairline-only with the rare 1px shadow under code blocks.
The code panels themselves are dark (`#0a1228`) inside otherwise
white surfaces, creating a strong dashboard contrast moment.
Deliverability charts use the SendGrid blue as the data colour with
muted grey gridlines.

## Shapes

Radii ladder: 2 / 4 / 6 / 8 / 12. Cards at 8, buttons at 4 —
inherited from Twilio. Pills (9999) reserved for status chips
("Delivered", "Bounced", "Opened"). The system holds tight corners
across every component; soft radii would shift the brand toward
consumer marketing rather than developer infrastructure.

## Components

The defining components are the **API-blue button** (`#1f74ff` /
white / radius 4), the **dark code panel** (`#0a1228` with
syntax-highlighted Twilio Sans Mono), the **deliverability metric
card** (white with the API-blue stat number and a grey trendline),
and the **pricing tier table** (cool-grey alternating rows with
hairline rules). Status chips appear in pill form (Delivered, Bounced)
with subtle coloured fills.

## Do's and Don'ts

- **Do** keep the SendGrid blue `#1f74ff` as the action colour even though Twilio red is technically the parent brand — the blue is what users recognise.
- **Do** show code panels prominently — SendGrid's audience is integrators, and the dark code block is the brand's strongest visual anchor.
- **Do** stay denser than Twilio's parent marketing; tighter section padding (80px) and smaller H1 (56px) are part of the brand voice.
- **Don't** drop the SendGrid blue in favour of Twilio red on the CTA — the blue is the legacy continuity signal.
- **Don't** soften card or button radii beyond Twilio's 4-8px range — looser radii break the dashboard tone.
- **Don't** introduce gradients or glow — SendGrid's voice is flat, hairline, and functional.
