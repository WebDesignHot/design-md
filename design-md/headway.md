---
name: Headway
tagline: 'Soft mint healthcare marketplace with green actions, calm serif-like display, and practical insurance search forms.'
updated_at: 2026-07-09T12:56:00+12:00
published_at: 2026-07-09T12:56:00+12:00
author: webdesignhot
source_url: https://headway.co
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [healthcare, saas]
tags: [light, soft, sans, healthcare, booking, insurance, calm]
preview_swatch: ['#f2fdf9', '#0b663d', '#212326']
related: [headspace, calm, classpass]
description: 'Headway turns mental-health booking into a calm insurance marketplace: pale mint backgrounds, deep green CTAs, PostGrotesk interface text, Honey display moments, white search inputs, and warm therapy photography balanced with practical zip-code and insurance fields.'
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: brand-bright
  muted: text-muted
  border: border
  ring: brand
colors:
  bg: '#f2fdf9'
  bg-mint: '#f0f9f5'
  bg-soft: '#f8f8f8'
  surface: '#ffffff'
  surface-muted: '#f8f8f8'
  surface-card: '#ffffff'
  text: '#212326'
  text-strong: '#000000'
  text-body: '#353535'
  text-muted: '#717171'
  text-soft: '#949494'
  brand: '#0b663d'
  brand-hover: '#084f30'
  brand-bright: '#13aa65'
  brand-soft: '#e7f7f0'
  mint-deep: '#46534d'
  accent-purple: '#7d3f98'
  accent-blue: '#0067a5'
  accent-sky: '#0982c6'
  accent-cyan: '#008bcc'
  border: '#dadce0'
  border-subtle: 'rgba(33, 36, 38, 0.07)'
  border-input: '#bebebe'
  focus: '#0b663d'
  success: '#13aa65'
  warning: '#d99524'
  danger: '#c94646'
  on-brand: '#ffffff'
typography:
  display:
    family: '"Honey Regular", Georgia, "Times New Roman", serif'
    weights: [400]
  body:
    family: 'PostGrotesk, ui-sans-serif, system-ui, -apple-system, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    hero-display: { size: 52, weight: 400, lineHeight: 1.12, tracking: '-0.02em', family: display }
    display: { size: 44, weight: 400, lineHeight: 1.15, tracking: '-0.015em', family: display }
    h1: { size: 38, weight: 400, lineHeight: 1.16, tracking: '-0.01em', family: display }
    h2: { size: 30, weight: 400, lineHeight: 1.2, tracking: '-0.005em', family: display }
    h3: { size: 20, weight: 500, lineHeight: 1.3, tracking: '0', family: body }
    body-lg: { size: 18, weight: 400, lineHeight: 1.55, tracking: '0', family: body }
    body: { size: 16, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body-sm: { size: 14, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    nav: { size: 16, weight: 400, lineHeight: 1.4, tracking: '0', family: body }
    button: { size: 16, weight: 500, lineHeight: 1.2, tracking: '0', family: body }
radius:
  micro: 4
  sm: 8
  md: 10
  lg: 14
  xl: 20
  image: 8
  pill: 9999
spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 80, 112]
layout:
  page-width: 1180
  prose-width: 680
  header-height: 80
  hero-max-width: 1160
  form-width: 600
motion:
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 140
  duration-standard: 220
  duration-slow: 360
  reduced-motion: 'disable provider-card drift and image parallax'
breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536
components:
  button-primary:
    bg: brand
    text: on-brand
    radius: 4
    padding: '14px 28px'
    use: 'Find care and Join as a provider'
  button-secondary:
    bg: surface
    text: text-body
    border: border
    radius: 4
    padding: '12px 24px'
    use: 'My portal and quiet account actions'
  search-input:
    bg: surface
    text: text-body
    border: border-input
    radius: 4
    padding: '14px 16px'
    use: 'Zip code and insurance fields'
  hero-photo:
    bg: surface-card
    radius: 8
    use: 'warm therapy-session photography'
  cost-card:
    bg: surface-muted
    border: border-subtle
    radius: 4
    padding: 28
    use: 'cost estimate and insurance education blocks'
lineage:
  summary: 'Headway combines healthcare trust, insurance form pragmatism, and wellness calm. It avoids the overly playful meditation-app style by grounding the hero in concrete search fields and provider counts.'
  influences:
    - { name: 'Healthcare marketplaces', role: 'zip-code, insurance, provider search, booking flow' }
    - { name: 'Wellness brands', role: 'mint background and calm photography' }
    - { name: 'Insurance portals', role: 'cost-estimate and plan-selection modules' }
---

## 1. Visual Theme & Atmosphere

Headway feels calm without becoming decorative. The pale mint background, deep green logo/action color, and therapy-session photography create warmth, while the zip-code and insurance fields keep the page practical.

The hero is a marketplace search interface first. The brand promise is emotional, but the UI immediately asks for the information needed to find covered care.

**Key Characteristics**
- Pale mint page background.
- Deep green brand and CTA color.
- Soft black/charcoal text.
- PostGrotesk for interface and navigation.
- Honey-style display for large calm headlines.
- White inputs with restrained borders.
- Warm therapy photography in small-radius frames.
- Cost-estimate cards and insurance education blocks below the hero.

## 2. Color Palette & Roles

Use `bg #f2fdf9` or `bg-mint #f0f9f5` as the main page base. Keep `surface #ffffff` for inputs and provider/cost cards.

Text is `text #212326` with `text-body #353535` for form labels and body copy. Muted copy uses `#717171` or `#949494`.

The brand green is `brand #0b663d`, observed on the key `Find care` and provider CTA language. `brand-bright #13aa65` can be used for supportive highlights.

Healthcare accents include `accent-purple #7d3f98`, `accent-blue #0067a5`, and `accent-sky #0982c6`, but these should stay secondary.

## 3. Typography Rules

| Role | Font | Size | Weight | Notes |
| --- | --- | ---: | ---: | --- |
| Hero | Honey Regular | 52 | 400 | Calm, large, editorial health statement |
| Display | Honey Regular | 44 | 400 | Section introductions |
| H1 | Honey Regular | 38 | 400 | Detail titles |
| H2 | Honey Regular | 30 | 400 | Support sections |
| H3 | PostGrotesk | 20 | 500 | Cards and form modules |
| Body large | PostGrotesk | 18 | 400 | Hero subcopy |
| Body | PostGrotesk | 16 | 400 | Default copy |
| Button | PostGrotesk | 16 | 500 | Search and provider actions |

The display voice should feel calm and human. Do not use a sharp enterprise grotesk for the main headline.

## 4. Component Stylings

Search form: zip code and insurance fields sit on white, use compact 4px radius, and align horizontally on desktop. The green Find care button is the strongest shape in the hero.

Navigation: keep links simple and low contrast. Provider and portal actions can sit on the right as compact buttons.

Cards: cost and insurance modules should be pale, flat, and practical. Use minimal shadow; trust comes from clarity.

Photography: keep image corners modest. The photo is warm and human, but it should not turn into a lifestyle hero.

## 5. Layout Principles

Use a two-column hero: copy and search form on the left, photography on the right. Keep the top nav airy but not oversized.

The first supporting card should peek below the fold, reinforcing that Headway is about cost, insurance, and access rather than only brand emotion.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
| --- | ---: | --- |
| Micro | 4 | buttons, inputs, cards |
| Small | 8 | images and compact panels |
| Medium | 10 | larger fields |
| Large | 14 | provider cards |
| Extra large | 20 | rare soft sections |
| Pill | 9999 | avoid except tiny status tags |

Headway is softer than an insurance portal but less rounded than a meditation app. The small radius keeps the search flow credible.

## 7. Depth & Elevation

Use flat surfaces and subtle borders. Inputs need clear outlines; cards can sit on `surface-muted` without heavy shadow.

The hero photo can rely on image contrast and whitespace rather than elevation.

## 8. Interaction & Motion

Forms should respond quickly and calmly. Hover states on green buttons can darken to `brand-hover #084f30`; inputs should use a visible green focus ring.

Avoid playful bouncing motion. Healthcare booking should feel stable and predictable.

## 9. Accessibility & A11y

Deep green on white and white on deep green both read clearly. Muted gray labels should be checked for size and contrast, especially in forms.

Every input needs a persistent label: zip code, insurance, and provider search cannot rely on placeholder-only UI.

## 10. Responsive Behavior

On mobile, stack the photo below the search form or hide it after the initial proof card. The search button should become full width.

Keep fields large enough for touch entry, and preserve labels above or inside each field.

## 11. Content & Voice

Headway's voice is calm, concrete, and access-oriented. It talks about covered care, therapists, psychiatrists, insurance, cost estimates, and finding the right provider.

Avoid vague wellness slogans. The best copy connects emotional support to practical access.

## 12. Dark Mode & Theming

The audited homepage is light and mint. A dark variant should be rare, using deep green-black with white text and brand green actions.

Do not invert to a neon health-tech palette. Headway's trust comes from calm brightness.

## 13. Lineage & Influences

Headway sits between a healthcare marketplace and a wellness brand. It uses the practical patterns of insurance search, but it borrows softness from mental-health consumer products.

The result is credible because the form arrives early. The design does not ask users to trust an abstract brand before showing them the path to care.

## 14. Do's and Don'ts

Do use pale mint backgrounds. Do keep green for primary actions. Do include concrete form fields. Do use warm human photography. Do keep insurance and cost modules visible.

Do not make it look like a generic telehealth dashboard. Do not over-round every control. Do not replace provider search with vague wellness content. Do not use saturated blues as the primary action color.

## 15. Agent Prompt Guide

When generating Headway-like UI, ask for a pale mint healthcare marketplace with deep green CTAs, calm serif-like display type, PostGrotesk form labels, white zip-code and insurance inputs, and warm therapy photography.

The screen should feel reassuring, but it must also look ready to help someone find covered care immediately.
