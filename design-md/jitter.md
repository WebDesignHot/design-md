---
name: Jitter
tagline: 'Minimal white motion-tool page with heavyweight black type and soft violet CTAs.'
updated_at: 2026-07-08T21:19:00+12:00
published_at: 2026-07-08T21:19:00+12:00
author: webdesignhot
source_url: https://jitter.video
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [design-tools, media]
tags: [light, playful, sans, motion, animation]
preview_swatch: ['#ffffff', '#b593ff', '#19171c']
related: [framer, lottiefiles, motion-app, rive-app]
description: 'Jitter keeps the interface almost completely white and black, then lets a soft violet CTA and motion-led product previews carry the playful energy. The system is useful for agents designing friendly motion-tool marketing pages.'
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: text
  accent: accent
  muted: text-muted
  border: border
  ring: accent
colors:
  bg: '#ffffff'
  surface: '#ffffff'
  surface-muted: '#f2f1f3'
  surface-strong: '#19171c'
  text: '#19171c'
  text-strong: '#0a0a0a'
  text-muted: '#6e6e73'
  brand: '#b593ff'
  brand-hover: '#a987f5'
  accent: '#7a40ed'
  accent-soft: '#f2ecff'
  border: '#e5e4e7'
  border-strong: '#19171c'
  cta-dark: '#19171c'
  on-dark: '#ffffff'
  success: '#1b8f5a'
  warning: '#f0a400'
  danger: '#d84f4f'
  on-brand: '#19171c'
typography:
  display:
    family: 'TWK Lausanne, Inter, system-ui, -apple-system, sans-serif'
    weights: [700, 800]
  body:
    family: 'Inter, system-ui, -apple-system, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero: { size: 96, weight: 800, lineHeight: 0.95, tracking: '-0.04em', family: display }
    display: { size: 72, weight: 800, lineHeight: 1, tracking: '-0.035em', family: display }
    h1: { size: 56, weight: 800, lineHeight: 1.05, tracking: '-0.03em', family: display }
    h2: { size: 40, weight: 800, lineHeight: 1.1, tracking: '-0.02em', family: display }
    h3: { size: 24, weight: 800, lineHeight: 1.15, tracking: '-0.01em', family: display }
    body-lg: { size: 20, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body: { size: 16, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body-sm: { size: 14, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    nav: { size: 16, weight: 600, lineHeight: 1.5, tracking: '0', family: body }
    button: { size: 20, weight: 700, lineHeight: 1.2, tracking: '0', family: body }
radius:
  micro: 2
  sm: 8
  md: 14
  lg: 24
  xl: 32
  cta: 9999
  pill: 9999
spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 72, 96, 128]
layout:
  page-width: 1224
  prose-width: 680
  header-height: 118
  hero-max-width: 860
  logo-row-gap: 56
motion:
  ease-standard: 'cubic-bezier(0.22, 1, 0.36, 1)'
  ease-playful: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  duration-fast: 120
  duration-standard: 240
  duration-slow: 520
  reduced-motion: 'show static frames for motion previews'
breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536
components:
  button-primary:
    bg: brand
    text: text
    radius: pill
    padding: '20px 48px'
    use: 'large central trial CTA'
  button-dark:
    bg: cta-dark
    text: on-dark
    radius: pill
    padding: '18px 38px'
    use: 'header trial CTA'
  badge:
    bg: surface-muted
    text: text
    radius: pill
    padding: '8px 22px'
    use: 'AI announcement pill'
  card:
    bg: surface
    border: border
    radius: 24
    padding: 24
lineage:
  summary: 'Jitter uses a stripped-back software landing page as a stage for motion. The page is almost editorial in its restraint: big black type, empty white space, a few violet accents, and brand proof rows that let animated product work be the visual payload.'
  influences:
    - { name: 'Motion design reels', role: 'animated examples become the main proof' }
    - { name: 'Swiss poster spacing', role: 'large center-aligned type and generous white space' }
    - { name: 'Figma-era design tools', role: 'simple nav, friendly trial CTA, product-led proof' }
---

## 1. Visual Theme & Atmosphere

Jitter is intentionally sparse. The page opens with a white field, centered navigation, a huge black motion headline, and a soft violet CTA. The design holds back so that animated examples can become the spectacle.

The system feels friendly but not childish. Rounded pills and violet accents soften the black typography, while the broad white space keeps the brand precise and tool-like.

**Key Characteristics**
- Pure white page canvas.
- Heavy black headline type.
- Violet CTA as the single warm accent.
- Inter navigation and body copy.
- TWK Lausanne for bold display moments.
- Fully pill-shaped primary actions.
- Thin gray dividers and muted proof rows.
- Motion examples should carry color and energy.

## 2. Color Palette & Roles

Background: `#ffffff` is the dominant canvas.

Text: `#19171c` is the main foreground. Use `#0a0a0a` only for the strongest headline or logo treatment.

Brand: `#b593ff` is the soft violet CTA fill. `#7a40ed` is the sharper link accent used for AI and learn-more moments.

Neutral surfaces: `#f2f1f3` works for announcement pills; `#e5e4e7` provides hairlines and separators.

Dark inverse: `#19171c` with `#ffffff` supports the header CTA and any dark product preview controls.

## 3. Typography Rules

| Role | Font | Size | Weight | Notes |
| --- | --- | ---: | ---: | --- |
| Hero | TWK Lausanne | 96 | 800 | stacked, centered, very tight |
| Display | TWK Lausanne | 72 | 800 | campaign sections |
| H1 | TWK Lausanne | 56 | 800 | page titles |
| H2 | TWK Lausanne | 40 | 800 | feature sections |
| H3 | TWK Lausanne | 24 | 800 | preview cards |
| Body large | Inter | 20 | 400 | proof statements |
| Body | Inter | 16 | 400 | default copy |
| Nav | Inter | 16 | 600 | simple top navigation |
| Button | Inter | 20 | 700 | large CTA text |

Keep tracking tight only on display roles. Body and nav should remain neutral and highly readable.

## 4. Component Stylings

Primary CTA: large violet pill, black text, generous horizontal padding. It should look soft and approachable.

Header CTA: black pill with white text. This anchors the top-right corner without stealing the hero color.

Announcement badge: pale gray pill with inline violet link. Use it above the headline.

Cards: keep white with thin gray borders unless the card contains a colorful motion preview.

Navigation: centered, spacious, and text-only. Avoid icons unless they identify a product feature.

## 5. Layout Principles

Jitter works from a centered editorial stack: nav, announcement pill, hero headline, CTA, proof line, logo row. Each element has room to breathe.

Below the hero, motion previews can become denser, but the top of the page should remain almost poster-like.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
| --- | ---: | --- |
| Small | 8 | minor controls |
| Medium | 14 | small cards |
| Large | 24 | content cards |
| Extra large | 32 | feature blocks |
| Pill | 9999 | badges and CTAs |

The pill is the signature shape. Use rectangles sparingly.

## 7. Depth & Elevation

Jitter does not rely on layered depth. Most separation is handled by whitespace, borders, and motion content.

| Level | Treatment | Use |
| --- | --- | --- |
| 0 | white canvas | page base |
| 1 | gray badge fill | announcement |
| 2 | thin border | cards and separators |
| 3 | dark inverse pill | header CTA |

## 8. Interaction & Motion

Motion should feel smooth and elastic. Use 120ms for simple hover feedback, 240ms for color and scale transitions, and 520ms for preview animations.

Violet CTAs can brighten on hover and compress slightly on press. Product previews should animate transforms and opacity, not layout dimensions.

## 9. Accessibility & A11y

Black text on white has excellent contrast. Violet text should be reserved for large or medium-weight labels, or paired with black text in mixed badges.

Keep focus rings visible with `#7a40ed`. Animated previews need pause controls or reduced-motion fallbacks when used in production.

## 10. Responsive Behavior

On mobile, hero type should reduce to 52-60px and the CTA should remain full-width or nearly full-width. Keep the centered stack, but shorten vertical gaps.

Logo rows can wrap into a two-column grid. Motion previews should become swipeable or stacked with static first frames.

## 11. Content & Voice

The voice is concise and creative-tool oriented. Prefer phrases about designing, animating, templates, teams, and motion.

Copy should sound fast and practical. Avoid heavy technical explanations in the hero; save detail for feature sections.

## 12. Dark Mode & Theming

The audited homepage is light-first. A dark variant can invert the canvas to `#19171c`, preserve white type, and keep violet as the interactive accent.

Do not turn every section dark. Jitter's brand strength comes from restraint and white space.

## 13. Lineage & Influences

Jitter borrows from motion portfolios, design-tool homepages, and Swiss poster composition. The large centered headline behaves like a campaign poster, while the product proof rows keep it grounded in software.

The violet accent is intentionally soft. It makes the call to action feel creative without turning the whole system purple.

## 14. Do's and Don'ts

Do keep the page mostly white. Do use one large headline. Do make primary actions pill-shaped. Do let animated content carry visual richness. Do use violet sparingly.

Do not add gradient backgrounds behind the hero. Do not use many accent colors in static UI. Do not make nav dense. Do not replace the large type with small SaaS copy blocks.

## 15. Agent Prompt Guide

### Quick Color Reference

Background: `#ffffff`; text: `#19171c`; strong text: `#0a0a0a`; violet CTA: `#b593ff`; violet link: `#7a40ed`; muted surface: `#f2f1f3`; border: `#e5e4e7`; inverse surface: `#19171c`.

### Example Component Prompts

- Create a Jitter-style hero with huge black centered type, white background, and one soft violet CTA.
- Design a gray announcement pill with a violet inline link.
- Build a logo proof row with thin dividers and restrained spacing.
- Create a motion-preview card that uses color in the content, not in the surrounding chrome.

### Iteration Guide

1. Remove decorative background before adding more elements.
2. Make type bigger and bolder before adding imagery.
3. Keep violet limited to CTA and emphasis states.
4. Use pills for the interaction language.
5. Let product motion be the main visual asset.
