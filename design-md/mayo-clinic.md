---
name: Mayo Clinic
tagline: 'Healthcare trust system with white institutional nav, cinematic care hero, blue service actions, and yellow notice band.'
updated_at: 2026-07-09T13:19:00+12:00
published_at: 2026-07-09T13:19:00+12:00
author: webdesignhot
source_url: https://www.mayoclinic.org
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [healthcare]
tags: [healthcare, trust, blue, editorial, video, accessibility]
preview_swatch: ['#ffffff', '#0057b8', '#0d0d33']
related: [headway, cvs, calm]
description: 'Mayo Clinic pairs institutional clarity with an editorial care hero: white navigation, Mayo display typography, blue service links, full-bleed medical innovation imagery, a yellow patient-information notice, and practical disease-search modules below the fold.'
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: notice
  muted: text-muted
  border: border
  ring: brand
colors:
  bg: '#ffffff'
  bg-page: '#ffffff'
  bg-navy: '#0d0d33'
  bg-blue-deep: '#012d61'
  surface: '#ffffff'
  surface-blue-soft: '#e1f0ff'
  surface-video: 'rgba(0, 0, 0, 0.56)'
  text: '#080808'
  text-strong: '#000000'
  text-muted: '#686868'
  text-on-dark: '#ffffff'
  brand: '#0057b8'
  brand-hover: '#004691'
  brand-light: '#8cc5ff'
  notice: '#ffc845'
  notice-text: '#080808'
  border: '#d6d6d6'
  border-blue: '#8cc5ff'
  overlay: 'rgba(0, 0, 0, 0.56)'
  success: '#1b7f55'
  warning: '#ffc845'
  danger: '#c0362c'
  on-brand: '#ffffff'
typography:
  display:
    family: 'mayo-display, Georgia, "Times New Roman", serif'
    weights: [300, 400]
  body:
    family: 'mayo-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
    weights: [400, 500]
  scale:
    hero-display: { size: 76, weight: 300, lineHeight: 1.05, tracking: '0', family: display }
    display: { size: 56, weight: 300, lineHeight: 1.12, tracking: '0', family: display }
    h1: { size: 44, weight: 300, lineHeight: 1.15, tracking: '0', family: display }
    h2: { size: 32, weight: 400, lineHeight: 1.25, tracking: '0', family: display }
    h3: { size: 22, weight: 600, lineHeight: 1.3, tracking: '0', family: body }
    body-lg: { size: 20, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    body: { size: 16, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body-sm: { size: 14, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    nav: { size: 16, weight: 400, lineHeight: 1.35, tracking: '0', family: body }
    button: { size: 20, weight: 400, lineHeight: 1.2, tracking: '0', family: body }
radius:
  micro: 4
  sm: 6
  md: 10
  lg: 16
  circle: 1000
  pill: 9999
spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 80, 112]
layout:
  page-width: 1280
  prose-width: 720
  header-height: 104
  hero-height: 630
  content-width: 1280
motion:
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 140
  duration-standard: 240
  duration-slow: 480
  reduced-motion: 'replace hero video motion with still imagery'
breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536
components:
  institutional-nav:
    bg: surface
    text: text
    radius: 0
    padding: '24px 0'
    use: 'care, health library, professionals, research, giving'
  hero-media:
    bg: bg-navy
    text: text-on-dark
    radius: 0
    use: 'full-bleed medical innovation image or video'
  button-outline-light:
    bg: transparent
    text: text-on-dark
    border: text-on-dark
    radius: 24
    padding: '12px 24px'
    use: 'Request appointment in hero'
  notice-band:
    bg: notice
    text: notice-text
    radius: 0
    padding: '20px 0'
    use: 'patient information disclosure notices'
lineage:
  summary: 'Mayo Clinic balances hospital authority with editorial care storytelling. The first viewport is visually rich, but the navigation and below-fold modules remain service-oriented and accessible.'
  influences:
    - { name: 'Hospital service portals', role: 'appointment, account, search, and health-library navigation' }
    - { name: 'Editorial healthcare storytelling', role: 'large display type over medical innovation imagery' }
    - { name: 'Public information systems', role: 'yellow notices and alphabetical disease search' }
---

## 1. Visual Theme & Atmosphere

Mayo Clinic combines institutional trust with cinematic care storytelling. The header is white, structured, and service-oriented; the hero is a full-bleed medical innovation image with large display type.

The page feels authoritative because service actions remain visible: request appointment, account access, search, health library, and disease lookup.

**Key Characteristics**
- White institutional header.
- Mayo display type over hero media.
- Blue service links and actions.
- Full-bleed hero image or video.
- Yellow patient-information notice band.
- Disease and condition search below the fold.
- Circular alphabetical filters.
- Clear appointment and login paths.

## 2. Color Palette & Roles

Use `bg #ffffff` for navigation and content sections. The medical-service brand color is `brand #0057b8`, supported by `brand-light #8cc5ff`.

Hero text is white over a dark overlay. Use `overlay rgba(0, 0, 0, 0.56)` when imagery needs readability.

The notice band uses `notice #ffc845` with dark text. It should be unmistakable but not styled like a marketing banner.

## 3. Typography Rules

| Role | Font | Size | Weight | Notes |
| --- | --- | ---: | ---: | --- |
| Hero | mayo-display | 76 | 300 | Editorial, calm, high trust |
| Display | mayo-display | 56 | 300 | Major service stories |
| H1 | mayo-display | 44 | 300 | Page titles |
| H2 | mayo-display | 32 | 400 | Health-library modules |
| H3 | mayo-sans | 22 | 600 | Cards and search labels |
| Body large | mayo-sans | 20 | 400 | Service links |
| Body | mayo-sans | 16 | 400 | Default information |
| Button | mayo-sans | 20 | 400 | Appointment actions |

Keep display type light and legible. It should feel human, not decorative.

## 4. Component Stylings

The institutional nav is text-first. Menu labels can include small chevrons, but the layout should stay open and predictable.

Hero buttons can be outline treatments over media, with white text and a rounded border. The appointment action should remain easy to see.

Alphabetical disease filters use circular buttons with pale blue borders. They are service utilities, not decorative badges.

## 5. Layout Principles

Use a tall media hero below the white header. Position hero text toward the lower left so the image remains visible and readable.

Place the yellow notice band directly after the hero when required. Below that, move quickly into practical health-library search.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
| --- | ---: | --- |
| Micro | 4 | small icons |
| Small | 6 | inputs |
| Medium | 10 | search modules |
| Large | 16 | content cards |
| Circle | 1000 | alphabet and video controls |
| Pill | 9999 | rare status labels |

Most structural surfaces stay square. Rounded shapes are reserved for controls that need a clear target.

## 7. Depth & Elevation

The hero gets depth from media and overlay, not from cards. Header and content modules should use spacing and borders rather than shadows.

Video controls can sit on a dark translucent circle so they remain visible over the image.

## 8. Interaction & Motion

Menus must be predictable and keyboard accessible. Healthcare navigation should not surprise users with complex hover-only behavior.

Video motion should respect reduced motion preferences. Provide a still fallback and a clear play button.

## 9. Content Voice

Use clear service language: care, health library, appointment, research, medical professionals, diseases and conditions. Avoid vague wellness copy.

Hero copy can be emotional, but supporting actions should be practical and direct.

## 10. Navigation Pattern

The header groups care, health library, professionals, research, and giving. Keep the logo and service links visible on desktop.

Appointment, account, and search actions belong on the right. They are primary utilities, not secondary footer links.

## 11. Search & Service Flows

Health-library search should appear early below the hero. Users may arrive with urgent information needs, so search cannot be buried.

Alphabetical disease filters should be large enough to tap and visually distinct from normal links.

## 12. Media Treatment

Use real medical or research imagery with strong contrast and restrained overlay. Avoid generic smiling stock photos.

If using video, provide a visible play control and do not autoplay distracting motion for users who prefer reduced motion.

## 13. Accessibility Notes

Healthcare UI needs high contrast, keyboard support, and predictable labels. Do not rely on icon-only navigation unless labels are present.

The yellow notice band should be readable by screen readers and not dismissed as decorative content.

## 14. Anti-Patterns

Do not turn the homepage into a wellness lifestyle page. Mayo Clinic's credibility depends on medical specificity.

Do not hide appointment and search actions behind a hamburger menu on desktop.

Avoid blue-on-image text without overlay. The hero must remain readable.

## 15. Implementation Checklist

- Use a white institutional header.
- Keep appointment, account, and search visible.
- Place a full-bleed hero media block below nav.
- Use light display type over a dark overlay.
- Use Mayo blue for service actions.
- Include a yellow notice band when needed.
- Provide health-library search below the hero.
- Respect reduced motion for hero video.
