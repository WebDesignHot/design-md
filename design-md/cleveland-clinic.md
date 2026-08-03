---
name: Cleveland Clinic
tagline: Hospital-grade navigation and health guidance in open white space, authoritative blue, and highly readable type.
updated_at: 2026-08-03T06:33:00.000Z
published_at: 2026-08-03T06:33:00.000Z
author: webdesignhot
source_url: https://my.clevelandclinic.org/
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [healthcare]
tags: [healthcare, hospital, editorial, trust, blue, appointments, information]
preview_swatch: ['#ffffff', '#555555', '#0078bf']
related: [mayo-clinic, zocdoc, teladoc]
description: 'Cleveland Clinic organizes a large hospital ecosystem through direct navigation, authoritative blue links, white content fields, and substantial Source Sans Pro typography. The audited homepage uses a 51px extra-bold hero over healthcare photography, 42.5px section headings, compact 3px utility controls, and larger 10px care actions. Provider, location, appointment, and health-library routes are surfaced before institutional storytelling.'

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: brand-deep
  muted: text-muted
  border: border
  ring: brand

colors:
  bg: '#ffffff'
  bg-soft: '#f1faff'
  surface: '#ffffff'
  surface-muted: '#f1f5f8'
  surface-strong: '#e6e6e6'
  text: '#363636'
  text-body: '#555555'
  text-muted: '#808080'
  text-inverse: '#ffffff'
  brand: '#0078bf'
  brand-link: '#007bc2'
  brand-deep: '#005688'
  brand-bright: '#0088d9'
  on-brand: '#ffffff'
  support: '#249c3d'
  border: '#dddddd'
  border-strong: '#808080'
  scrim: 'rgba(0,70,110,0.58)'
  focus: '#005688'
  success: '#249c3d'
  warning: '#8a5a00'
  danger: '#b42318'

typography:
  display:
    family: '"Source Sans Pro", Roboto, Arial, sans-serif'
    weights: [700, 900]
  body:
    family: '"Source Sans Pro", Roboto, Arial, sans-serif'
    weights: [400, 600, 700]
  mono:
    family: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
    weights: [400, 600]
  scale:
    hero: { size: 51, weight: 900, lineHeight: 1.083, tracking: '0', family: display }
    hero-mobile: { size: 40, weight: 900, lineHeight: 1.1, tracking: '0', family: display }
    section: { size: 42.5, weight: 700, lineHeight: 1.1, tracking: '0', family: display }
    card-title: { size: 21.25, weight: 700, lineHeight: 1.13, tracking: '0', family: display }
    body: { size: 20.4, weight: 400, lineHeight: 1.365, tracking: '0', family: body }
    compact-body: { size: 17, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    small: { size: 15, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    button: { size: 17, weight: 700, lineHeight: 1, tracking: '0', family: body }

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96]

radius:
  none: 0
  sm: 3
  md: 10
  circle: '50%'

layout:
  page-width: 1296
  prose-width: 780
  header-height: 104
  utility-height: 52
  care-card-min: 320
  grid-gap: 24
  section-gap: 80
  mobile-gutter: 20

components:
  primary-button:
    bg: '#0078bf'
    color: '#ffffff'
    height: 58
    radius: 10
    padding: '16px 28px'
    border: '1px solid #0078bf'
    shadow: 'none'
    use: 'Get care, route selection, and other major patient actions.'
  compact-button:
    bg: '#0078bf'
    color: '#ffffff'
    height: 42
    radius: 3
    padding: '10px 20px'
    border: '1px solid #0078bf'
    use: 'Provider, directions, and appointment actions in compact utility groups.'
  secondary-button:
    bg: '#ffffff'
    color: '#0078bf'
    height: 52
    radius: 3
    padding: '12px 20px'
    border: '1px solid #0078bf'
    use: 'Secondary patient and health-library navigation.'
  care-card:
    bg: '#ffffff'
    color: '#363636'
    radius: 0
    border: '1px solid #e6e6e6'
    shadow: 'none'
    padding: '28px 32px'
    use: 'Provider, location, appointment, or service route with one compact action.'
  search:
    bg: '#f1f5f8'
    color: '#005688'
    height: 44
    radius: 3
    border: '1px solid #dddddd'
    padding: '10px 14px'
    use: 'Site and health-library search with an explicit label and submit control.'
  alert:
    bg: '#f1faff'
    color: '#363636'
    radius: 0
    border: '4px solid #0078bf'
    padding: '20px 24px'
    use: 'Time-sensitive care guidance with a heading, consequence, and next action.'

motion:
  duration-fast: 100
  duration-standard: 180
  duration-slow: 280
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  disclosure: 'Expand navigation and care details without moving the initiating control.'
  reduced-motion: 'Remove hero and carousel motion while preserving disclosure and status updates.'

breakpoints:
  mobile: 640
  tablet: 900
  desktop: 1200
  wide: 1440

shadows:
  card: 'none'
  dropdown: '0 8px 24px rgba(54,54,54,0.16)'
  dialog: '0 18px 48px rgba(54,54,54,0.24)'
  focus: '0 0 0 3px rgba(0,86,136,0.28)'

accessibility:
  focus-ring: '3px solid #005688 with 2px offset; use white against blue'
  touch-target-min: 44
  reduced-motion-honored: true
  health-content: 'Identify review dates, medical reviewers, emergency limits, and source context.'
  navigation: 'Keep provider, location, appointment, and emergency routes text-labeled and keyboard reachable.'

lineage:
  summary: 'Recorded from the current Cleveland Clinic public homepage at desktop and mobile widths on 2026-08-03.'
  influences:
    - name: Cleveland Clinic homepage
      role: 'Primary source for blue care actions, Source Sans Pro hierarchy, provider and appointment routes, and responsive information architecture.'
      url: https://my.clevelandclinic.org/
---

## 1. Visual Theme and Atmosphere

Cleveland Clinic is direct, authoritative, and service-first. White content fields, dark gray body copy, and medical blue links create a familiar hospital information environment. Photography supports care context, but navigation to providers, locations, appointments, and health information remains the visual priority.

The design should feel established rather than luxurious or technically experimental. Large bold headings establish confidence; clear utility rows reduce uncertainty.

## 2. Color System

Use white as the dominant field, `#555555` for long-form copy, and `#363636` for strong headings. Primary blue is `#0078bf`, with `#005688` for deeper text and focus states. Pale blue `#f1faff` supports informational bands.

Green `#249c3d` may indicate help or positive service availability but must include a label. Red and amber are reserved for actual error or warning content, never brand decoration.

## 3. Typography

Source Sans Pro carries the full experience. The audited hero is 51px/55px at 900 and reduces to 40px/44px on mobile. Major sections use approximately 42.5px at 700; utility card titles use 21.25px.

Body copy is unusually generous at about 20px/28px in prominent editorial regions. Compact navigation and metadata may use 15-17px, but health guidance should not be compressed to dashboard density.

## 4. Component Styling

Major care actions use 58px blue controls with 10px corners. Compact provider, directions, and appointment actions use 42px controls with 3px corners. Content cards are mostly square and border-defined rather than elevated.

Search uses a pale gray-blue field, a visible label, and an explicit submit control. Alerts use a blue leading border and plain-language next step instead of a decorative banner.

## 5. Layout Principles

Use a broad 1296px content container and 24px grid gaps. Surface provider, location, and appointment routes near the top in equal columns. Keep editorial health content below operational access routes unless a true public-health alert changes priority.

Long-form material should use a narrower 780px reading measure. Full-width blue or pale bands can separate major areas without wrapping each area in a floating panel.

## 6. Shapes and Radius

Most structure is square. Use 3px for compact controls and 10px for large patient actions. Circular geometry is limited to portraits, media controls, and status icons. Avoid pill-shaped navigation and oversized soft cards.

## 7. Depth and Elevation

Default cards need no shadow; borders and spacing establish hierarchy. Dropdown navigation can use an 8px/24px shadow, and dialogs can use a stronger neutral shadow over a clear scrim. Do not float ordinary health articles above the page.

## 8. Interaction and Motion

Keep navigation feedback between 100-180ms. Menus and care disclosures should open predictably without animated detours. Preserve the user's position when a location, provider, or service filter updates.

Reduced-motion mode removes hero movement and carousel transitions. Search results, appointment status, and form errors remain immediate and programmatically announced.

## 9. Responsive Behavior

The blue hero becomes a compact mobile statement at 40px/44px. Stack provider, location, and appointment actions in that order with full-width touch targets. Maintain 20px gutters and readable 17-20px body copy.

Collapse institutional navigation, but leave search and care access prominent. Avoid horizontal card rails for decision-critical services; a vertical list is easier to scan and operate.

## 10. Accessibility

Use a deep-blue focus ring on pale surfaces and white on blue. Health articles require review dates, authors or medical reviewers, heading hierarchy, and clear emergency limitations. Links must describe their destination rather than repeat "learn more".

Forms need persistent labels, error summaries, and recovery instructions. Provider, location, and appointment routes must be keyboard reachable without navigating promotional content first.

## 11. Imagery and Media

Use real care environments, clinicians, patients, and wayfinding context. Images should explain the service or human relationship, not simply signal wellness. Preserve faces and clinical context in responsive crops and provide meaningful alt text only when the image adds information.

## 12. Content Voice

Use plain, precise health language. State what a service is, who it is for, where it is available, and what the next step entails. Separate educational guidance from diagnosis and clearly identify when urgent or emergency care is required.

## 13. Reusable Patterns

The key reusable pattern is an operational access trio: find a provider, locate care, and schedule an appointment. It suits hospitals and public services with multiple high-frequency destinations.

A second pattern is broad editorial typography paired with restrained card chrome, allowing medically reviewed content to feel important without marketing theatrics.

## 14. Agent Implementation Notes

Implement service routing, search semantics, and article metadata before visual polish. Use real links for every provider and appointment destination, and preserve visible labels on forms. Treat the 42.5px headings as fixed breakpoint values rather than viewport-scaled type.

Do not infer emergency status from brand colors. Create dedicated semantic tokens and ensure every status has readable text.

## 15. Anti-Patterns

Do not use glass panels, pastel wellness gradients, ambiguous icon-only care choices, or hidden navigation. Avoid compressing health content into tiny dashboard cards, placing promotional carousels before care access, or using color as the only urgency signal. Never present educational content as individualized diagnosis.
