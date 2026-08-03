---
name: Chime
tagline: 'Dark green consumer banking hero with bright green actions, app-card product proof, and direct email capture.'
updated_at: 2026-07-09T13:16:00+12:00
published_at: 2026-07-09T13:16:00+12:00
author: webdesignhot
source_url: https://www.chime.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [fintech, saas]
tags: [dark, green, banking, app, conversion, sans]
preview_swatch: ['#003122', '#00d27b', '#ffffff']
related: [cash-app, monzo, robinhood]
description: 'Chime presents consumer banking as a confident app-first product: a deep green hero field, bright green signup buttons, large white sans typography, email capture in the first viewport, and phone/card product proof that turns financial features into visible outcomes.'
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: brand-bright
  muted: text-muted
  border: border
  ring: brand-bright
colors:
  bg: '#003122'
  bg-deep: '#002418'
  bg-hero: '#00452f'
  bg-panel: '#005d3e'
  surface: '#ffffff'
  surface-dark: 'rgba(255, 255, 255, 0.10)'
  surface-glass: 'rgba(255, 255, 255, 0.16)'
  text: '#ffffff'
  text-dark: '#003122'
  text-muted: '#e2f3eb'
  text-soft: 'rgba(255, 255, 255, 0.72)'
  brand: '#00d27b'
  brand-bright: '#1ee98f'
  brand-deep: '#005d3e'
  card-metal: '#d8d0c2'
  success: '#00d27b'
  warning: '#f8d867'
  danger: '#e34f55'
  border: 'rgba(255, 255, 255, 0.22)'
  border-strong: 'rgba(255, 255, 255, 0.34)'
  shadow: 'rgba(0, 0, 0, 0.20)'
  on-brand: '#003122'
typography:
  display:
    family: 'ui-sans-serif, Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    weights: [600, 700, 800]
  body:
    family: 'ui-sans-serif, Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
    weights: [400, 500]
  scale:
    hero-display: { size: 80, weight: 700, lineHeight: 1.05, tracking: '0', family: display }
    display: { size: 56, weight: 700, lineHeight: 1.08, tracking: '0', family: display }
    h1: { size: 44, weight: 700, lineHeight: 1.12, tracking: '0', family: display }
    h2: { size: 32, weight: 700, lineHeight: 1.18, tracking: '0', family: display }
    h3: { size: 22, weight: 700, lineHeight: 1.25, tracking: '0', family: body }
    body-lg: { size: 18, weight: 500, lineHeight: 1.45, tracking: '0', family: body }
    body: { size: 16, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body-sm: { size: 14, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    nav: { size: 16, weight: 600, lineHeight: 1.35, tracking: '0', family: body }
    button: { size: 16, weight: 700, lineHeight: 1.2, tracking: '0', family: body }
radius:
  micro: 4
  sm: 6
  md: 10
  lg: 16
  xl: 24
  device: 36
  pill: 9999
spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
layout:
  page-width: 1280
  prose-width: 680
  header-height: 72
  hero-max-width: 1290
  form-width: 640
motion:
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 140
  duration-standard: 220
  duration-slow: 420
  reduced-motion: 'freeze phone-card float and cash-back badge drift'
breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536
components:
  button-primary:
    bg: brand
    text: on-brand
    radius: 6
    padding: '12px 28px'
    use: 'Get started conversion actions'
  email-input:
    bg: surface-dark
    text: text
    border: border
    radius: 6
    padding: '13px 16px'
    use: 'Hero email capture'
  hero-device:
    bg: surface
    radius: 36
    use: 'phone mockup showing app balances, savings, direct deposit, and deals'
  proof-badge:
    bg: surface-glass
    text: text
    radius: 12
    padding: '18px 24px'
    use: 'cash-back and benefit callouts'
lineage:
  summary: 'Chime uses a saturated fintech green system to make banking feel immediate and app-native. The hero is dark and confident, but the signup path is simple: email field plus one bright action.'
  influences:
    - { name: 'Mobile banking apps', role: 'phone-first proof and balance UI fragments' }
    - { name: 'Consumer fintech', role: 'high-contrast green action color and benefit bullets' }
    - { name: 'Direct-response landing pages', role: 'email capture in the hero instead of a long pricing path' }
---

## 1. Visual Theme & Atmosphere

Chime is a dark green fintech landing page that behaves like an app preview, not a bank brochure. The first viewport is almost entirely a deep green field with a large white headline, short benefit bullets, and product imagery.

The mood is confident and direct. Trust comes from the visible app balance, card, APY, cash-back, and direct-deposit details rather than from dense institutional copy.

**Key Characteristics**
- Deep green full-bleed hero.
- Bright green primary CTA.
- Large white geometric sans headline.
- Email capture in the first viewport.
- Phone and card product proof on the right.
- Small checkmark benefit bullets.
- Minimal navigation with menu, logo, signup, and login.
- First supporting content peeks from below the fold.

## 2. Color Palette & Roles

Use `bg #003122` as the primary page atmosphere and `bg-hero #00452f` for brighter hero gradients or panels. The action color is `brand #00d27b`, strong enough to stand apart from the dark green base.

Text on dark surfaces is `text #ffffff`. Secondary copy can use `text-muted #e2f3eb` or `text-soft rgba(255, 255, 255, 0.72)`.

Inputs use translucent surfaces rather than pure white. The email field is readable because its border and placeholder contrast against the hero field.

## 3. Typography Rules

| Role | Font | Size | Weight | Notes |
| --- | --- | ---: | ---: | --- |
| Hero | UI sans / Inter fallback | 80 | 700 | Large, stacked, direct |
| Display | UI sans / Inter fallback | 56 | 700 | Section openers |
| H1 | UI sans / Inter fallback | 44 | 700 | Product story headings |
| H2 | UI sans / Inter fallback | 32 | 700 | Feature groups |
| H3 | UI sans / Inter fallback | 22 | 700 | Cards and app labels |
| Body large | UI sans / Inter fallback | 18 | 500 | Benefit bullets |
| Body | UI sans / Inter fallback | 16 | 400 | Legal and explanatory copy |
| Button | UI sans / Inter fallback | 16 | 700 | Signup actions |

The hero headline should be heavy and clean. Avoid decorative finance typography; Chime reads as mobile-product first.

## 4. Component Stylings

Primary buttons are bright green rectangles with modest 6px radius. They should feel tappable without becoming pill-shaped.

The hero email input is translucent, bordered, and horizontally paired with the CTA on desktop. Keep it wide enough to look like a real form, not a newsletter afterthought.

Product proof should use a realistic device mockup and card object. Supporting badges can be translucent green panels with white copy and bright green numbers.

## 5. Layout Principles

Use a two-column first viewport: text/form on the left, device proof on the right. The headline can occupy multiple lines and should dominate the composition.

Keep navigation thin. The hero needs room to breathe, and the top bar should not compete with the app mockup.

Let the next section peek below the hero so the page feels scrollable, but keep the hero itself as the primary conversion frame.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
| --- | ---: | --- |
| Micro | 4 | icons and checkmarks |
| Small | 6 | buttons and inputs |
| Medium | 10 | badges and compact panels |
| Large | 16 | lower content cards |
| Extra large | 24 | large feature panels |
| Device | 36 | phone mockup corners |
| Pill | 9999 | tiny status indicators only |

Most UI corners stay modest. The phone can be much rounder because it represents hardware.

## 7. Depth & Elevation

Depth comes from the phone and card layers, not from a stack of marketing cards. Use soft shadow `shadow rgba(0, 0, 0, 0.20)` behind the device and card.

Avoid heavy card shadows on the green background. The hero is strongest when objects look embedded in a single product scene.

## 8. Interaction & Motion

Primary CTA hover can brighten to `brand-bright #1ee98f`. Inputs should increase border contrast and keep the background translucent.

Motion should be restrained: small device float, badge drift, or balance-card parallax is enough. Do not animate banking numbers in a way that feels gimmicky.

## 9. Content Voice

Lead with consumer outcomes: fee-free banking, early pay, savings APY, credit building, and cash back. Keep sentences short and concrete.

Legal or banking-disclosure copy can sit under the form in small text. It should not interrupt the conversion path but must remain visible.

## 10. Navigation Pattern

The header can use a hamburger menu, compact logo, and right-aligned signup/login actions. This keeps the main product claim centered in the page body.

Use the same bright green for the header `Get started` button and the hero CTA to reinforce a single action.

## 11. Forms & Conversion

The email field is part of the hero, not a separate lead form. Pair it with a single CTA and avoid extra fields in the first viewport.

Place trust/disclosure text below the form. The disclosure copy should be small, light, and aligned with the form width.

## 12. Imagery & Product Proof

Show actual app UI elements: balance, savings, cash back, pay, direct deposit, and profile navigation. These details make the promise measurable.

The card object adds real-world banking context. Keep it secondary to the phone so the app remains the focal point.

## 13. Accessibility Notes

Green-on-green combinations need deliberate contrast. Use white text for hero copy and dark text on bright green buttons.

Inputs must show a visible focus ring that is not only color-dependent. Pair border contrast with a subtle outer glow.

## 14. Anti-Patterns

Do not add banking-office photography or corporate stock imagery. It weakens the mobile-first promise.

Do not turn every benefit into a separate card. The hero works because it groups proof tightly around one phone.

Avoid pale fintech gradients as the primary surface. Chime's identity is strongest when the page commits to dark green.

## 15. Implementation Checklist

- Use a dark green hero with white text.
- Make the CTA bright green with dark text.
- Include email capture in the hero.
- Pair bullets with checkmarks.
- Show app UI inside a phone mockup.
- Keep navigation compact.
- Use modest radius on buttons and inputs.
- Preserve disclosure copy under the form.
