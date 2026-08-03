---
name: edX
tagline: 'Online-learning marketplace with dark teal navigation, warm editorial hero, orange CTAs, and university course cards.'
updated_at: 2026-07-09T13:20:00+12:00
published_at: 2026-07-09T13:20:00+12:00
author: webdesignhot
source_url: https://www.edx.org
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [education, marketplace]
tags: [education, courses, teal, orange, cards, search]
preview_swatch: ['#edebe3', '#d64000', '#00262b']
related: [coursera, udemy, khan-academy]
description: 'edX combines academic marketplace trust with a productized course carousel: Inter typography, dark teal nav pills, warm neutral surfaces, orange registration CTAs, Harvard course cards, partner logos, and search-led course discovery.'
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent-cyan
  muted: text-muted
  border: border
  ring: brand
colors:
  bg: '#edebe3'
  bg-page: '#ffffff'
  bg-warm: '#e7e3da'
  bg-soft: '#f9f8f6'
  surface: '#ffffff'
  surface-course: '#edebe3'
  text: '#00262b'
  text-body: '#454545'
  text-muted: '#707070'
  text-soft: '#4b5563'
  brand: '#d64000'
  brand-hover: '#b93600'
  brand-soft: '#fff0e8'
  nav: '#00262b'
  accent-cyan: '#04c5e7'
  accent-blue: '#00698f'
  accent-green: '#1f453d'
  border: '#cccccc'
  border-warm: '#e1ddd1'
  shadow-card: 'rgba(0, 0, 0, 0.10)'
  success: '#1f8f5f'
  warning: '#d89a00'
  danger: '#d64000'
  on-brand: '#ffffff'
typography:
  display:
    family: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    weights: [600, 700, 800]
  body:
    family: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    weights: [400, 500, 600, 700, 800]
  mono:
    family: '"Roboto Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
    weights: [400, 500]
  scale:
    hero-display: { size: 64, weight: 800, lineHeight: 1.05, tracking: '0', family: display }
    display: { size: 48, weight: 800, lineHeight: 1.12, tracking: '0', family: display }
    h1: { size: 36, weight: 800, lineHeight: 1.2, tracking: '0', family: display }
    h2: { size: 28, weight: 700, lineHeight: 1.25, tracking: '0', family: display }
    h3: { size: 22, weight: 700, lineHeight: 1.25, tracking: '0', family: body }
    body-lg: { size: 20, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body: { size: 16, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body-sm: { size: 14, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    nav: { size: 14, weight: 500, lineHeight: 1.35, tracking: '0', family: body }
    button: { size: 18, weight: 500, lineHeight: 1.2, tracking: '0', family: body }
radius:
  micro: 4
  sm: 8
  md: 12
  lg: 16
  xl: 24
  pill: 94
spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
layout:
  page-width: 1280
  prose-width: 720
  header-height: 76
  hero-max-width: 1490
  course-card-width: 277
motion:
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 140
  duration-standard: 240
  duration-slow: 420
  reduced-motion: 'pause course carousel and partner-logo scroll'
breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536
components:
  nav-pill:
    bg: nav
    text: on-brand
    radius: 94
    padding: '10px 18px'
    use: 'Learn menu and selected navigation states'
  button-primary:
    bg: brand
    text: on-brand
    radius: 94
    padding: '15px 22px'
    use: 'Register and Explore courses actions'
  search-input:
    bg: surface
    text: text-body
    border: border
    radius: 4
    padding: '11px 16px'
    use: 'Header course search'
  course-card:
    bg: surface
    border: border-warm
    radius: 8
    padding: 0
    use: 'University course preview cards'
lineage:
  summary: 'edX uses university credibility as marketplace proof. The visual system pairs academic neutrals and dark teal navigation with orange CTAs that push users toward registration and course exploration.'
  influences:
    - { name: 'Course marketplaces', role: 'course cards, duration, level, and provider metadata' }
    - { name: 'Academic institutions', role: 'partner logos and university-branded card imagery' }
    - { name: 'Consumer learning apps', role: 'large hero claim, carousel controls, and register CTA' }
---

## 1. Visual Theme & Atmosphere

edX is an education marketplace with academic proof and consumer conversion. The top bar is practical, the hero is warm and promotional, and the course cards immediately show recognizable institutions.

The system uses dark teal for navigation and orange for action. Warm neutrals keep the page from feeling like a generic SaaS dashboard.

**Key Characteristics**
- Inter typography.
- Dark teal navigation pill.
- Header search field.
- Orange rounded CTAs.
- Warm neutral hero surfaces.
- Course cards with university labels.
- Partner logo row below the hero.
- Carousel controls for hero/course promotion.

## 2. Color Palette & Roles

Use `bg #edebe3` and `bg-warm #e7e3da` for warm academic surfaces. The main nav color is `nav #00262b`.

The conversion color is `brand #d64000`, used for `Register for free` and `Explore courses`. Keep it reserved for actions.

Use `accent-cyan #04c5e7` for temporary banners or promotional strips, but avoid turning the whole page cyan.

## 3. Typography Rules

| Role | Font | Size | Weight | Notes |
| --- | --- | ---: | ---: | --- |
| Hero | Inter | 64 | 800 | Big course-marketplace claim |
| Display | Inter | 48 | 800 | Major section headings |
| H1 | Inter | 36 | 800 | Page titles |
| H2 | Inter | 28 | 700 | Course groups |
| H3 | Inter | 22 | 700 | Course card titles |
| Body large | Inter | 20 | 400 | Hero subcopy |
| Body | Inter | 16 | 400 | Course metadata |
| Button | Inter | 18 | 500 | Orange actions |

Use Roboto Mono only for technical or credential snippets. The core marketplace UI should stay in Inter.

## 4. Component Stylings

Navigation pills use dark teal with white text. They can be fully rounded but should remain compact.

Primary buttons are orange pills. Use consistent radius across register, explore, and offer CTAs.

Course cards are white, fixed-width, and metadata-heavy: provider, title, duration, level, and course type.

## 5. Layout Principles

The header combines logo, learn menu, search, business link, sign-in, and register action. Keep it single-row on desktop.

Hero layouts can pair a large claim on the left with course cards on the right. The cards are proof that the claim leads to real courses.

Partner logos should sit immediately below the hero to reinforce academic credibility.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
| --- | ---: | --- |
| Micro | 4 | search input and icons |
| Small | 8 | course cards |
| Medium | 12 | content modules |
| Large | 16 | carousel surfaces |
| Extra large | 24 | wide panels |
| Pill | 94 | nav and CTA pills |

edX uses round pills for top-level actions but keeps cards simple and rectangular.

## 7. Depth & Elevation

Use light borders on course cards and subtle shadow only when cards sit over dark or image-based hero backgrounds.

Partner logos should not sit in individual cards. They work best as a clean row on white or warm neutral background.

## 8. Interaction & Motion

Course carousels need explicit previous/next controls and visible position dots. Pause motion for reduced-motion users.

Search should be responsive and prominent. It is a primary discovery path, not just a utility icon.

## 9. Content Voice

Use career and institution language: career goals, expert-led courses, certificates, degrees, universities, introductory level, completion time.

Avoid vague learning inspiration. Users need to know what they can take, who provides it, and what outcome it supports.

## 10. Navigation Pattern

The primary navigation starts with a `Learn` pill and a search box. Business, sign-in, and registration actions sit right.

Keep `Register for free` visible in the header. It is a persistent marketplace conversion action.

## 11. Course Card System

Course cards should include a provider band or logo, type label, title, institution, duration, and level. Preserve fixed widths so carousel movement is predictable.

Do not hide metadata behind hover. Mobile users need the same decision cues.

## 12. Search & Discovery

The header search placeholder should be explicit, such as "What do you want to learn?" Pair it with a search icon button inside the input.

Course exploration can start from hero CTA, search, nav menu, or partner logos. These paths should feel connected.

## 13. Accessibility Notes

Orange CTAs need white text and enough size. Carousel controls need labels and keyboard support.

Promotional banners should have close buttons with accessible names and should not trap focus.

## 14. Anti-Patterns

Do not make the page purely institutional. Without course cards and CTAs, edX loses marketplace clarity.

Do not overload the hero with too many logos. The partner row can carry proof below the hero.

Avoid using cyan as the main brand color. It is an accent, not the primary action system.

## 15. Implementation Checklist

- Use Inter for all main UI.
- Keep the header search visible.
- Style nav selected states in dark teal.
- Use orange rounded CTAs for registration and course exploration.
- Show real course cards in the hero.
- Include institution logos below the hero.
- Provide carousel controls with accessible labels.
- Reserve warm neutrals for academic atmosphere.
