---
name: Fantastical
tagline: White paper, Effra geometric sans, full-round blue pills, and a rainbow of app-icon glass squares — a calendar app marketed like Apple''s Pro Apps.
author: webdesignhot
source_url: https://flexibits.com/fantastical
spec: design.md/v1
quality: curated
featured: false
categories: [saas]
tags: [light, minimal, sans, bright, soft, structured, cool]
preview_swatch: ['#ffffff', '#408fff', '#1d1e1f']
related: [apple, things-app, stripe]
description: 'Fantastical''s site is an Apple-pro promo spread for a calendar. White canvas, Effra sans throughout, a vivid `#408fff` Apple-system-blue CTA pill at 24px radius (fully round), and decorative glass-app-icon squares in cyan, magenta, green, and orange floating around the hero — borrowed directly from the way iOS shows app icons in the App Store. Body copy in near-black `#1d1e1f`, no custom display font, no editorial flourish — just precision and chromatic confetti.'

colors:
  bg: '#ffffff'              # paper-white canvas
  bg-soft: '#f7f8fa'          # subtle cool grey for nested sections
  surface: '#f0f2f6'          # cool card surface
  text: '#1d1e1f'             # primary body copy, near-black
  text-strong: '#000000'      # display copy
  text-muted: '#5e6166'       # captions
  brand: '#408fff'            # vivid Apple-system blue CTA
  brand-hover: '#1f73ec'      # pressed state
  brand-soft: 'rgba(116, 116, 128, 0.08)' # secondary button bg, system-style
  accent-cyan: '#5ac8fa'      # app-icon glass square accent
  accent-magenta: '#d94aff'   # app-icon glass square accent
  accent-green: '#34c759'     # app-icon glass square accent
  accent-orange: '#ff9500'    # app-icon glass square accent
  border: '#0000001a'         # 10% black hairline
  border-soft: '#00000010'

typography:
  display:
    family: 'Effra, "Helvetica Neue", Arial, Helvetica, sans-serif'
    weights: [400, 500, 700]
  body:
    family: 'Effra, "Helvetica Neue", Arial, Helvetica, sans-serif'
    weights: [400, 500]
  scale:
    h1:    { size: 64, weight: 500, lineHeight: 1.15, tracking: '-0.01em' }
    h2:    { size: 40, weight: 500, lineHeight: 1.20 }
    h3:    { size: 24, weight: 400, lineHeight: 1.40 }
    body:  { size: 18, weight: 400, lineHeight: 1.55 }
    label: { size: 14, weight: 500, tracking: '0.02em' }

radius:
  xs: 6
  sm: 12
  md: 16
  lg: 20
  pill: 24      # primary CTA radius (observed)
  app-icon: 22  # iOS app-icon squircle visual radius
  full: 9999

layout:
  container: 1200
  gutter: 32
  rhythm: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160]

components:
  - cta-blue-pill
  - app-icon-confetti
  - feature-card-cool
  - calendar-mockup
  - device-tab-selector

lineage:
  summary: |
    Flexibits ships Fantastical the way Apple ships its Pro Apps —
    white canvas, system-blue CTA, geometric sans throughout, no
    editorial flourish. The display face is **Effra**, Foundry
    Monotype''s humanist geometric sans with slightly-rounded
    terminals, used at every level from 14px label to 64px hero.
    The hero "Give Your Calendar Superpowers" sets at 40px Effra
    500 — the medium-weight choice (rather than bold) is what gives
    the page its precision-instrument feel rather than marketing
    impact. The action color is `#408fff`, identical to Apple''s
    system blue (`#007aff` adjusted slightly warmer for white
    backgrounds), and the CTA radius is 24px — fully round at the
    button''s height, the same pill shape used on
    iOS''s "Continue" affordances. The most distinctive move is
    the **app-icon confetti**: glass-effect rounded squares in
    cyan, magenta, green, and orange floating around the hero
    image of the calendar, borrowed from how iOS / iPadOS shows
    app icons drifting in the App Store''s Today tab. The result
    is that Fantastical reads as Apple''s own Calendar app
    marketing — same pixel discipline, same chromatic vocabulary.
  influences:
    - name: Apple iOS App Store / Pro Apps
      role: System blue CTA, fully-round pill radius, glass-app-icon decorative confetti.
      url: https://www.apple.com/app-store/
    - name: Stripe
      role: Confidence in a single saturated blue as the entire chromatic action layer.
      url: https://stripe.com
    - name: Calendly / Cron (defunct)
      role: Calendar-tool design conventions — soft cool greys, blue actions, rounded pill buttons.
      url: https://calendly.com
---

## Overview

Fantastical''s site is an Apple Pro Apps promo for a calendar.
White canvas, **Effra** sans throughout, a vivid `#408fff`
Apple-system-blue pill CTA at fully-round 24px radius, and a
confetti of glass app-icon squares in cyan, magenta, green, and
orange floating around the hero. The H1 sets at 40px Effra 500,
the body deck at 24px Effra 400, all on a near-black `#1d1e1f`.

There is no editorial flourish, no serif moment, no warm cream.
The page is pure precision — every chromatic, typographic, and
spatial decision is borrowed from Apple''s own Calendar / Notes /
Reminders marketing.

## Colors

- **bg** `#ffffff` — paper-white canvas
- **bg-soft** `#f7f8fa` — subtle cool grey for nested sections
- **surface** `#f0f2f6` — cool card surface
- **text** `#1d1e1f` — primary body copy, near-black
- **text-muted** `#5e6166` — captions
- **brand** `#408fff` — vivid Apple-system blue CTA
- **brand-hover** `#1f73ec` — pressed state
- **brand-soft** `rgba(116, 116, 128, 0.08)` — secondary button bg, iOS-style
- **accent-cyan / magenta / green / orange** — app-icon confetti hues
- **border** `#0000001a` — 10% black hairline

## Typography

Display is **Effra**, Foundry Monotype''s humanist geometric
sans with slightly-rounded terminals. The H1 sets at 64px
weight 500, sub-displays at 40px Effra 500, decks at 24px
weight 400. The medium weight (not bold) at large size gives
the page its precision-instrument feel rather than marketing
impact.

Body is the same Effra family at 400/500, sized 18px on a 1.55
line-height. There is no second face — Effra carries every
type role, the way Helvetica Neue used to on Apple''s site
before SF Pro.

## Layout

Container is roughly 1200px with a 32px gutter. The page
follows a clean single-column rhythm — hero with confetti,
feature spread, device-tab calendar mockup, pricing, FAQ.
White runs edge-to-edge; cool grey nested sections only appear
for pricing.

## Elevation & Depth

Depth comes from soft drop shadows on the calendar mockups
(Apple-style blurred shadows around the device chrome) and
glass-effect on the app-icon confetti — translucent fills with
inner highlights, mimicking iOS 17 / iOS 26 glass icons.
Marketing chrome itself is flat with hairline borders.

## Shapes

Primary CTA radius is 24px — fully-round at the button height,
matching iOS''s "Continue" pill. Cards use 16px, feature shells
20px. The app-icon confetti uses iOS''s 22px squircle radius.
The mix of moderate and fully-round radii is what gives the
page its iOS-native feel.

## Components

The signature primitives are the **blue pill CTA**
(`#408fff` bg, white text, 24px radius — pure iOS lift), the
**app-icon confetti** (glass-effect squares in cyan / magenta /
green / orange floating around the hero), the **device tab
selector** for switching between Mac / iPhone / iPad / Apple
Watch screenshots, and the **soft-grey secondary button**
(`rgba(116,116,128,0.08)` bg, blue text — iOS''s tinted button
style).

## Do''s and Don''ts

- **Do** use Effra at every level — loading a second display face would break the "single typographic voice" discipline.
- **Do** ship the primary CTA as a fully-round 24px blue pill — anything less round reads as generic SaaS, not iOS-native.
- **Do** scatter glass app-icon confetti around hero modules; that ornament is the brand''s playful counterweight to its precision.
- **Don''t** introduce warm tones — Fantastical''s cool grey + system blue is the entire palette; a cream surface would tip the page toward Bear / Things'' editorial-Mac aesthetic.
- **Don''t** raise body weight above 500; the medium-weight Effra is what gives the page its instrument-grade feel.
- **Don''t** use a serif anywhere — even for emphasis. Effra sans carries the brand alone.
