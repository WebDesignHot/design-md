---
name: ProtoPie
tagline: High-fidelity prototyping explained through crisp white space, lavender product stages, and decisive purple actions.
updated_at: 2026-08-03T06:37:00.000Z
published_at: 2026-08-03T06:37:00.000Z
author: webdesignhot
source_url: https://www.protopie.io/
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [design-tools, saas]
tags: [design-tools, prototyping, interaction, teams, purple, product-demo, high-fidelity]
preview_swatch: ['#ffffff', '#181818', '#8169ff']
related: [figma, framer, rive-app]
description: 'ProtoPie explains advanced interaction design through a bright product-led system. The audited homepage uses white and pale-gray fields, lavender-purple calls to action, black Gilroy Bold headlines, Inter interface copy, direct product demonstrations, and restrained 4-12px geometry. A 62px desktop hero reduces to 32px on mobile, keeping the software proof and conversion controls visible without sacrificing hierarchy.'

aliases:
  background: bg
  foreground: text
  primary: brand-deep
  primary-foreground: text-inverse
  accent: brand-deep
  muted: text-muted
  border: border
  ring: brand-deep

colors:
  bg: '#ffffff'
  bg-soft: '#f5f5f5'
  surface: '#ffffff'
  surface-muted: '#e9e9e9'
  surface-lavender: '#f1efff'
  surface-inverse: '#181818'
  text: '#181818'
  text-soft: '#373737'
  text-muted: '#636363'
  text-faint: '#999999'
  text-inverse: '#ffffff'
  brand: '#8169ff'
  brand-deep: '#6d4ff0'
  brand-soft: 'rgba(122,100,255,0.35)'
  on-brand: '#181818'
  border: '#e9e9e9'
  border-strong: '#999999'
  focus: '#6d4ff0'
  success: '#247a52'
  warning: '#8a5a00'
  danger: '#b42318'

typography:
  display:
    family: '"Gilroy Bold", Gilroy, Inter, Arial, sans-serif'
    weights: [700]
  body:
    family: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif'
    weights: [400, 500, 600, 700]
  accent:
    family: '"Palmer Lake Print Regular", "Comic Sans MS", cursive'
    weights: [400]
  mono:
    family: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
    weights: [400, 600]
  scale:
    hero: { size: 62, weight: 700, lineHeight: 1.29, tracking: '0', family: display }
    hero-mobile: { size: 32, weight: 700, lineHeight: 1.25, tracking: '0', family: display }
    section: { size: 48, weight: 700, lineHeight: 1.3, tracking: '0', family: display }
    card-title: { size: 22, weight: 700, lineHeight: 1.3, tracking: '0', family: display }
    body: { size: 17, weight: 400, lineHeight: 1.55, tracking: '0', family: body }
    small: { size: 14, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    button: { size: 16, weight: 600, lineHeight: 1, tracking: '0', family: body }

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120]

radius:
  none: 0
  xs: 1
  sm: 4
  md: 12
  lg: 16
  xl: 20
  pill: 100

layout:
  page-width: 1240
  prose-width: 820
  header-height: 80
  hero-min-height: 720
  demo-min-height: 560
  feature-card-min: 280
  grid-gap: 24
  section-gap: 104
  mobile-gutter: 20

components:
  primary-button:
    bg: '#8169ff'
    color: '#181818'
    height: 53
    radius: 4
    padding: '16px 26px'
    border: '1px solid #6d4ff0'
    shadow: 'none'
    use: 'Start free, request a demo, or advance the principal acquisition path.'
  secondary-button:
    bg: '#ffffff'
    color: '#181818'
    height: 48
    radius: 4
    padding: '14px 24px'
    border: '1px solid #181818'
    use: 'Download, learn more, or explore a secondary product path.'
  product-demo:
    bg: '#f1efff'
    color: '#181818'
    radius: 12
    border: '1px solid #e9e9e9'
    shadow: '0 8px 30px rgba(109,79,240,0.14)'
    padding: '24px'
    use: 'Inspectable prototype, editor, hardware interaction, or connected-device demonstration.'
  feature-card:
    bg: '#ffffff'
    color: '#181818'
    radius: 12
    border: '1px solid #e9e9e9'
    shadow: 'none'
    padding: '28px'
    use: 'One high-fidelity capability with visual proof and a concise implementation outcome.'
  testimonial:
    bg: '#f5f5f5'
    color: '#181818'
    radius: 16
    border: '1px solid #e9e9e9'
    padding: '32px'
    use: 'Product-team result with person, company, role, and specific workflow evidence.'
  text-input:
    bg: '#ffffff'
    color: '#181818'
    height: 48
    radius: 4
    border: '1px solid #999999'
    padding: '12px 14px'
    use: 'Signup and demo-request fields with persistent labels.'

motion:
  duration-fast: 100
  duration-standard: 200
  duration-slow: 500
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  prototype-demo: 'Play a short user-triggered interaction with visible start, pause, replay, and state labels.'
  reduced-motion: 'Show keyframes or final states side by side and disable autoplay transitions.'

breakpoints:
  mobile: 640
  tablet: 900
  desktop: 1200
  wide: 1440

shadows:
  card: '0 2px 8px rgba(24,24,24,0.08)'
  demo: '0 8px 30px rgba(109,79,240,0.14)'
  dialog: '0 18px 48px rgba(24,24,24,0.24)'
  focus: '0 0 0 3px rgba(109,79,240,0.28)'

accessibility:
  focus-ring: '3px solid #6d4ff0 with 2px offset'
  touch-target-min: 44
  reduced-motion-honored: true
  demos: 'Provide play, pause, replay, state description, and a static equivalent for every interaction proof.'
  hardware: 'Name required device, permissions, connection state, and recovery path in text.'

lineage:
  summary: 'Recorded from the current ProtoPie public homepage at desktop and mobile widths on 2026-08-03.'
  influences:
    - name: ProtoPie homepage
      role: 'Primary source for Gilroy typography, lavender actions, product demonstrations, compact geometry, and responsive acquisition hierarchy.'
      url: https://www.protopie.io/
---

## 1. Visual Theme and Atmosphere

ProtoPie is bright, technical, and product-led. White space and black type create a clear base, while lavender stages draw attention to advanced interaction demonstrations. The experience should feel capable and approachable rather than like a dense engineering console.

Purple belongs to conversion and product emphasis. The actual prototype, connected hardware, and editor state provide the visual evidence behind each claim.

## 2. Color System

Use white for the main page, `#f5f5f5` for neutral bands, and `#f1efff` for product stages. Primary lavender is `#8169ff`, with `#6d4ff0` for borders, focus, and stronger emphasis. Text is `#181818`; secondary copy remains no lighter than `#636363` on white.

Avoid generic browser blue for styled links. Use underlines and the purple system while preserving standard link semantics.

## 3. Typography

Gilroy Bold drives the audited 62px/80px hero and 48px/62px section headings. The mobile hero becomes 32px/40px. Inter supports body, navigation, controls, and product metadata.

Palmer Lake Print may add a brief human annotation, but never carries instructions or critical labels. Keep normal tracking and rely on weight and spacing for hierarchy.

## 4. Component Styling

Primary acquisition controls are 53px lavender rectangles with 4px corners and a darker purple border. Product demos use 12px pale-lavender stages with a restrained purple shadow. Feature cards use the same radius but generally remain flat.

Every demo includes visible controls, state labels, and a static equivalent. Testimonials identify a real workflow outcome rather than offering only a logo wall.

## 5. Layout Principles

Center content around 1240px with a broad 820px headline measure. Alternate text-led claims with large product demonstrations at least 560px high. Use 24px feature-grid gaps and roughly 104px between major sections.

Keep the primary interactive scene unframed within the page band or on a functional lavender stage, not inside nested decorative cards.

## 6. Shapes and Radius

Use 4px for controls, 12px for product demos and feature cards, and 16-20px for isolated testimonial or media surfaces. Pills are suitable only for short filters or badges. Product controls should retain precise rectangular geometry.

## 7. Depth and Elevation

Most cards are border-defined and flat. The central product demonstration may use `0 8px 30px rgba(109,79,240,0.14)` to separate it from lavender. Avoid shadows around every screenshot or feature tile.

## 8. Interaction and Motion

Interface feedback should complete in 100-200ms. A prototype demonstration can run over 500ms or longer because motion is the subject, but it must start by user action and expose pause and replay. Do not autoplay multiple demos simultaneously.

Reduced motion presents labeled keyframes or final states side by side and disables autoplay transitions.

## 9. Responsive Behavior

The 62px hero becomes 32px and feature layouts stack with 20px gutters. Product demos should preserve the device or editor aspect ratio and allow users to inspect states without tiny embedded text. Move captions below media rather than overlaying them on narrow screens.

Keep acquisition actions at least 44px high and group free-start and demo-request choices without changing their meaning.

## 10. Accessibility

Use a visible deep-purple focus ring on white and lavender surfaces. Every animation or interaction proof needs a keyboard-operable play state, pause, replay, and textual description. Do not rely on cursor movement alone to explain cause and effect.

Connected hardware flows must name permissions, device state, failures, and recovery paths. Product screenshots require readable labels at their rendered size.

## 11. Imagery and Media

Show actual prototypes, editor panels, device interactions, sensors, and cross-screen experiences. Media must reveal the interaction model rather than provide abstract motion. Use short, focused demonstrations with stable framing.

## 12. Content Voice

Write around fidelity, behavior, and outcomes: test an interaction, connect hardware, validate a flow, or collaborate with a team. Avoid claiming "advanced" without showing the relevant behavior and setup.

## 13. Reusable Patterns

The strongest pattern is claim plus playable evidence. It works for design tools and technical SaaS products whose advantage is difficult to communicate with static feature lists.

A second pattern is a pale product stage that separates software chrome from the white marketing page without imitating a decorative device frame.

## 14. Agent Implementation Notes

Build each demo as a semantic state machine with static initial and final states before adding animation. Keep visible controls outside the animated canvas, preserve focus, and ensure media has intrinsic dimensions. Use the purple primary only for acquisition and selected product emphasis.

Treat 62px and 32px as explicit breakpoint values. Do not use viewport-width font scaling.

## 15. Anti-Patterns

Do not use gradient orbs, autoplaying motion walls, floating screenshot cards, or purple on every surface. Avoid illegible embedded product text, demos without controls, and claims unsupported by inspectable behavior. Never make motion the only way to understand an interaction.
