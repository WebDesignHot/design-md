---
name: Affinity
tagline: An expressive all-in-one creative studio in near-black, oversized editorial type, and electric green actions.
updated_at: 2026-08-03T06:36:00.000Z
published_at: 2026-08-03T06:36:00.000Z
author: webdesignhot
source_url: https://www.affinity.studio/
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [design-tools]
tags: [design-tools, graphics, photo, publishing, dark, green, creative-suite]
preview_swatch: ['#0f1015', '#ffffff', '#a7f175']
related: [figma, adobe, rive-app]
description: 'Affinity presents a professional creative suite through a theatrical near-black canvas, oversized Affinity Serif Variable headlines, clean Canva Sans controls, electric-green download actions, and vivid examples of photo, vector, and page-layout work. The audited homepage uses a 112px desktop hero that drops to 42px on mobile, 12px action radii, pill-shaped mode selectors, and alternating black, white, and artwork-led bands.'

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: violet
  muted: text-muted
  border: border
  ring: brand

colors:
  bg: '#0f1015'
  bg-deep: '#000000'
  surface: '#211d1d'
  surface-light: '#ffffff'
  surface-translucent: 'rgba(255,255,255,0.90)'
  text: '#ffffff'
  text-dark: '#0e1318'
  text-muted: '#c4c4c4'
  text-faint: 'rgba(255,255,255,0.50)'
  brand: '#a7f175'
  brand-deep: '#78c84e'
  on-brand: '#0e1318'
  enterprise: '#e0dcd6'
  violet: '#9e9eff'
  border: '#5c5c5c'
  border-light: 'rgba(255,255,255,0.50)'
  scrim: 'rgba(15,16,21,0.70)'
  focus: '#a7f175'
  success: '#a7f175'
  warning: '#f5c451'
  danger: '#ff7474'

typography:
  display:
    family: '"Affinity Serif Variable", "Canva Sans", "Noto Sans", Arial, sans-serif'
    weights: [700]
  body:
    family: '"Canva Sans", "Noto Sans Variable", "Noto Sans", -apple-system, "Segoe UI", Arial, sans-serif'
    weights: [400, 600, 700]
  mono:
    family: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
    weights: [400, 600]
  scale:
    hero: { size: 112, weight: 700, lineHeight: 0.96, tracking: '0', family: display }
    hero-mobile: { size: 42, weight: 700, lineHeight: 0.96, tracking: '0', family: display }
    section: { size: 80, weight: 700, lineHeight: 0.98, tracking: '0', family: display }
    feature: { size: 56, weight: 700, lineHeight: 1, tracking: '0', family: display }
    platform: { size: 32, weight: 400, lineHeight: 1.25, tracking: '0', family: body }
    body: { size: 18, weight: 400, lineHeight: 1.55, tracking: '0', family: body }
    small: { size: 14, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    button: { size: 16, weight: 700, lineHeight: 1, tracking: '0', family: body }

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160]

radius:
  none: 0
  sm: 6
  md: 10
  lg: 12
  xl: 20
  pill: 9999
  circle: '50%'

layout:
  page-width: 1320
  prose-width: 760
  header-height: 80
  hero-min-height: 820
  showcase-min-height: 680
  grid-gap: 24
  section-gap: 128
  mobile-gutter: 20

components:
  primary-button:
    bg: '#a7f175'
    color: '#0e1318'
    height: 48
    radius: 12
    padding: '14px 24px'
    border: '1px solid #a7f175'
    shadow: 'none'
    use: 'Download Affinity or begin the primary individual acquisition flow.'
  enterprise-button:
    bg: '#e0dcd6'
    color: '#0e1318'
    height: 48
    radius: 12
    padding: '14px 24px'
    border: '1px solid #e0dcd6'
    use: 'Enterprise acquisition alongside, but visually below, the green individual action.'
  mode-control:
    bg: 'rgba(0,0,0,0)'
    color: '#ffffff'
    height: 48
    radius: 9999
    padding: '12px 20px'
    border: '1px solid #ffffff'
    use: 'Vector, pixel, layout, or AI mode selection in a compact segmented set.'
  showcase:
    bg: '#0f1015'
    color: '#ffffff'
    radius: 12
    border: '1px solid #5c5c5c'
    shadow: 'none'
    padding: 0
    use: 'Large inspectable artwork or interface demonstration for one creative discipline.'
  platform-card:
    bg: '#211d1d'
    color: '#ffffff'
    radius: 12
    border: '1px solid #5c5c5c'
    shadow: 'none'
    padding: '28px'
    use: 'Mac, Windows, or iPad download state with requirements and explicit action.'
  motion-toggle:
    bg: '#211d1d'
    color: '#ffffff'
    height: 32
    radius: 12
    border: '1px solid #5c5c5c'
    padding: '8px 12px'
    use: 'Explicitly enable or disable nonessential showcase motion.'

motion:
  duration-fast: 120
  duration-standard: 240
  duration-slow: 700
  ease-standard: 'cubic-bezier(0.22, 1, 0.36, 1)'
  showcase: 'Reveal creative work through controlled masks or crossfades while keeping an explicit motion toggle.'
  reduced-motion: 'Default to static finished work and remove parallax, auto-panning, and mask transitions.'

breakpoints:
  mobile: 640
  tablet: 900
  desktop: 1200
  wide: 1600

shadows:
  card: 'none'
  overlay: '0 16px 48px rgba(0,0,0,0.34)'
  dialog: '0 24px 64px rgba(0,0,0,0.50)'
  focus: '0 0 0 3px rgba(167,241,117,0.32)'

accessibility:
  focus-ring: '3px solid #a7f175 with 2px offset; use black on green and white surfaces'
  touch-target-min: 44
  reduced-motion-honored: true
  creative-media: 'Name the medium, visible technique, and relevant product mode; omit purely decorative crops.'
  compatibility: 'Expose platform, version, hardware, file format, and export constraints as text.'

lineage:
  summary: 'Recorded from the current Affinity public homepage at desktop and mobile widths on 2026-08-03.'
  influences:
    - name: Affinity homepage
      role: 'Primary source for Affinity Serif and Canva Sans typography, near-black canvas, electric-green acquisition actions, mode controls, and creative showcases.'
      url: https://www.affinity.studio/
---

## 1. Visual Theme and Atmosphere

Affinity behaves like a confident creative exhibition. A near-black field, oversized editorial statements, and large finished-work demonstrations position the software as a professional studio rather than a utility dashboard. Electric green makes the free download unmistakable.

White sections and colorful artwork periodically interrupt the dark sequence. The page should feel expressive, but the actual product and created work remain inspectable.

## 2. Color System

Use `#0f1015` and black for the main canvas, white for type and inverse bands, and `#a7f175` for the primary acquisition action. Warm gray `#e0dcd6` distinguishes enterprise. Violet `#9e9eff` can annotate product modes or artwork but should not compete with green.

Creative media supplies the broad palette. Interface chrome should stay neutral around it. Do not turn electric green into a background for long reading sections.

## 3. Typography

Affinity Serif Variable is the dominant display face. The audited hero is 112px/108px at 700, dropping to 42px/40px on mobile. Major statements use 80px/78px and feature headings use 56px/56px.

Canva Sans carries controls, platform labels, and body copy. Keep tracking at zero and use breakpoint-specific sizes. The heavy display face requires generous line breaks rather than viewport-scaled compression.

## 4. Component Styling

The primary download control is 48px high, green, dark-text, and 12px rounded. Enterprise uses the same geometry in warm gray. Vector, pixel, layout, and AI modes use 48px outlined pills as a true option set.

Creative showcases are large media regions with modest 12px corners and little or no elevation. Platform cards expose requirements and download state instead of presenting only a logo.

## 5. Layout Principles

Use a wide 1320px canvas and large 128px section intervals. The hero may occupy 820px or more with a controlled artwork sequence behind or below its statement. Feature bands can alternate full-width black, white, and media fields.

Do not place the primary creative scene inside a decorative browser card. Let artwork span the available area while keeping labels and actions in stable text regions.

## 6. Shapes and Radius

Use 12px for acquisition controls, showcases, and platform modules. Reserve full pills for actual mode selection. Most typography and image edges remain rectangular, balancing the soft controls with an editorial composition.

## 7. Depth and Elevation

Affinity relies on contrast and artwork, not card shadows. Keep showcases and platform panels flat with visible borders. Use shadows only for overlays and dialogs that must separate from the near-black page.

## 8. Interaction and Motion

Navigation and controls respond within 120-240ms. Creative demonstrations may reveal over 700ms through masks or crossfades, but users need an explicit motion toggle. Finished work must remain visible without animation.

Honor reduced motion by defaulting to static compositions and removing parallax, auto-panning, and repeated looping transitions.

## 9. Responsive Behavior

Use a hard type breakpoint from 112px desktop to 42px mobile. Stack download actions and platform choices with 20px gutters. Crop creative work to preserve the design subject and include a stable aspect ratio so animated assets do not move surrounding copy.

Mode pills can wrap as a labeled segmented group. Do not shrink labels below readable size or create a horizontally inaccessible selector.

## 10. Accessibility

Use green focus on dark surfaces and black focus on green or white. Every motion sequence needs pause or disable control and an equivalent static state. Ensure creative media descriptions explain relevant medium and technique rather than aesthetic praise.

Platform and format compatibility must be text, not icon-only. Download actions should include operating system and version context when ambiguity exists.

## 11. Imagery and Media

Show actual vector illustration, photo editing, typography, page layout, and product interface states. Use high-resolution work that reveals detail. Avoid generic studio desks or abstract color clouds when users need to evaluate the software.

Before-and-after demonstrations should label each state and work with keyboard or static side-by-side presentation.

## 12. Content Voice

Affinity's voice is confident, concise, and craft-aware. Name concrete capabilities and compatible formats. Bold lines can be playful, but acquisition and compatibility copy must remain literal: download, platform, version, and enterprise.

## 13. Reusable Patterns

The core reusable pattern is oversized editorial type paired with a full-width product proof. It suits creative tools where the output can validate the claim better than feature prose.

A second pattern is mode switching as a true segmented control, allowing one canvas to demonstrate vector, pixel, layout, and AI workflows without duplicating sections.

## 14. Agent Implementation Notes

Build static showcases first, then layer motion behind an explicit toggle. Define fixed hero and section sizes at breakpoints, preload only the first visible media, and use responsive image sources. Model platform and mode choices semantically.

Keep the free-download green action consistent across the page. Do not infer availability from device detection without offering every supported platform.

## 15. Anti-Patterns

Do not add gradient blobs, glass panels, tiny floating tool screenshots, or shadows around every example. Avoid using green for unrelated decoration, making animations mandatory, or collapsing compatibility into logos. Never let oversized type cover the product proof or push all useful content below the first viewport.
