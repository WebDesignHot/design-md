---
name: MindStudio
tagline: 'White navigation shell around a dark gradient agent story with crisp blue CTAs.'
updated_at: 2026-07-08T21:20:00+12:00
published_at: 2026-07-08T21:20:00+12:00
author: webdesignhot
source_url: https://www.mindstudio.ai
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [ai, dev-tools, saas]
tags: [light, dark-hero, sans, agents, builder]
preview_swatch: ['#fafafa', '#0069ff', '#171b2a']
related: [lovable-dev, v0-app, replit]
description: 'MindStudio pairs a calm white product shell with a dark teal-purple hero for agent storytelling. The design uses Inter, compact blue CTAs, soft translucent pills, and large embedded media to frame AI agents as practical product infrastructure.'
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: hero-magenta
  muted: text-muted
  border: border
  ring: brand
colors:
  bg: '#fafafa'
  nav-bg: '#ffffff'
  surface: '#ffffff'
  surface-muted: '#f2f2f2'
  hero-bg: '#171b2a'
  hero-teal: '#16363b'
  hero-purple: '#27223d'
  hero-magenta: '#4b1835'
  text: '#060606'
  text-muted: '#585858'
  text-soft: '#a0a0a0'
  hero-text: '#ffffff'
  hero-text-muted: 'rgba(255, 255, 255, 0.68)'
  brand: '#0069ff'
  brand-hover: '#0056d6'
  brand-border: '#0100ff'
  border: '#e0e0e0'
  border-strong: '#0100ff'
  overlay: 'rgba(1, 0, 0, 0.15)'
  success: '#1f8f5f'
  warning: '#e6a100'
  danger: '#d44848'
  on-brand: '#ffffff'
typography:
  display:
    family: 'Inter, system-ui, -apple-system, sans-serif'
    weights: [500, 600, 700]
  body:
    family: 'Inter, system-ui, -apple-system, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero: { size: 56, weight: 600, lineHeight: 1.08, tracking: '-0.025em', family: display }
    display: { size: 44, weight: 600, lineHeight: 1.1, tracking: '-0.02em', family: display }
    h1: { size: 40, weight: 600, lineHeight: 1.12, tracking: '-0.015em', family: display }
    h2: { size: 36, weight: 600, lineHeight: 1.12, tracking: '-0.01em', family: display }
    h3: { size: 24, weight: 600, lineHeight: 1.25, tracking: '-0.005em', family: display }
    body-lg: { size: 20, weight: 400, lineHeight: 1.6, tracking: '0', family: body }
    body: { size: 16, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body-sm: { size: 14, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    nav: { size: 16, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    button: { size: 14, weight: 500, lineHeight: 1.5, tracking: '0', family: body }
radius:
  micro: 2
  sm: 8
  md: 12
  lg: 18
  xl: 28
  video: 12
  pill: 9999
spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
layout:
  page-width: 1280
  prose-width: 700
  header-height: 56
  hero-height: 820
  media-width: 640
motion:
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 140
  duration-standard: 220
  duration-slow: 420
  reduced-motion: 'freeze carousel and video hover treatments'
breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536
components:
  button-primary:
    bg: brand
    text: on-brand
    radius: 12
    padding: '8px 20px'
    use: 'navigation and conversion CTA'
  button-ghost:
    bg: overlay
    text: hero-text
    radius: pill
    padding: '10px 32px'
    use: 'hero secondary action'
  card:
    bg: surface
    border: border
    radius: 12
    padding: 24
  video-frame:
    bg: surface
    border: transparent
    radius: 12
    shadow: '0 24px 70px rgba(0, 0, 0, 0.25)'
lineage:
  summary: 'MindStudio presents AI agents through a pragmatic product shell and cinematic hero sections. The white nav and blue CTA feel like SaaS infrastructure, while the dark gradient media area creates enough drama for the Remy agent narrative.'
  influences:
    - { name: 'AI agent launch pages', role: 'agent persona and product narrative' }
    - { name: 'SaaS navigation systems', role: 'white top bar, compact blue CTA' }
    - { name: 'Product video hero sections', role: 'large embedded media as primary proof' }
---

## 1. Visual Theme & Atmosphere

MindStudio uses a split personality deliberately. The navigation and later product cards are clean, white, and practical; the hero drops into a dark teal-purple gradient to make the agent story feel cinematic.

This is not a dark-mode site. It is a light SaaS shell with a dark product showcase embedded inside it. Blue CTAs provide the operational layer.

**Key Characteristics**
- White navigation bar with black logo.
- Dark grainy gradient hero.
- Inter everywhere.
- Blue CTA buttons with 12px radius.
- White hero headings and muted translucent body copy.
- Embedded video/media frame as the visual anchor.
- Soft pill secondary CTA over the hero.
- Product cards return to white surfaces below.

## 2. Color Palette & Roles

Page shell: `bg #fafafa`, `nav-bg #ffffff`, and `surface #ffffff`.

Hero: `hero-bg #171b2a`, `hero-teal #16363b`, `hero-purple #27223d`, and `hero-magenta #4b1835` form the dark atmospheric field.

Text: `text #060606` for the shell, `text-muted #585858` for nav/supporting copy, `hero-text #ffffff` for dark sections, and `hero-text-muted rgba(255, 255, 255, 0.68)` for long hero copy.

Action: `brand #0069ff` is the real CTA blue. `brand-border #0100ff` appears in sampled border and focus contexts.

## 3. Typography Rules

| Role | Font | Size | Weight | Notes |
| --- | --- | ---: | ---: | --- |
| Hero | Inter | 56 | 600 | white on dark gradient |
| Display | Inter | 44 | 600 | product sections |
| H1 | Inter | 40 | 600 | page title |
| H2 | Inter | 36 | 600 | carousel headings |
| H3 | Inter | 24 | 600 | cards |
| Body large | Inter | 20 | 400 | hero paragraphs |
| Body | Inter | 16 | 400 | default copy |
| Nav | Inter | 16 | 400 | quiet top bar |
| Button | Inter | 14 | 500 | compact SaaS CTA |

Avoid novelty fonts. MindStudio needs to feel trustworthy and agent-infrastructure ready.

## 4. Component Stylings

Primary CTA: blue fill, white text, 12px radius, compact height. It appears in the nav and in conversion sections.

Hero secondary: translucent black pill with white text. It should sit over the gradient without feeling like a hard outlined button.

Video frame: white embedded media card with rounded corners and a strong but soft shadow.

Cards: white surface, thin `#e0e0e0` border, 12px radius.

Navigation: fixed-height white bar, centered nav links, login as text, CTA on the far right.

## 5. Layout Principles

Use a full-width dark hero band immediately below the white nav. Content should split: explanatory copy on the left and a large media frame on the right.

Below the hero, return to a centered product cadence with white cards, blue CTAs, and restrained copy.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
| --- | ---: | --- |
| Micro | 2 | cookie and utility controls |
| Small | 8 | small pills |
| Medium | 12 | CTAs, video frame, cards |
| Large | 18 | larger modules |
| Extra large | 28 | feature panels |
| Pill | 9999 | hero secondary actions |

MindStudio's default radius is 12px. Use the extreme pill only for overlay actions.

## 7. Depth & Elevation

Depth comes from media and gradient, not stacked cards.

| Level | Treatment | Use |
| --- | --- | --- |
| 0 | white shell | nav and page base |
| 1 | dark gradient band | hero |
| 2 | elevated video frame | product proof |
| 3 | white card with border | announcements |

## 8. Interaction & Motion

Use practical SaaS timings: 140ms hover, 220ms color transitions, 420ms carousel or hero media movement.

Blue CTAs darken on hover. Hero carousel controls can fade in and out, but avoid excessive motion because the video already carries attention.

## 9. Accessibility & A11y

Blue `#0069ff` with white text is suitable for CTA text. White hero text over the dark gradient is strong, but translucent support copy should stay large and avoid low opacity.

Focus states should use `#0100ff` or an outer blue ring. Video embeds need a text alternative and keyboard-accessible controls.

## 10. Responsive Behavior

On mobile, keep the white nav compact, stack hero copy above the media frame, and reduce the hero height. The secondary pill should remain centered or full-width below the copy.

Large video frames should scale to the viewport width with preserved aspect ratio, not crop important controls.

## 11. Content & Voice

Voice is confident and product-agent oriented. Use words like agent, build, ship, spec, app, workflow, and product.

Copy should describe capability in plain terms. Avoid overpromising autonomy; the brand tone works best when AI is framed as a practical collaborator.

## 12. Dark Mode & Theming

The site is not globally dark. Treat dark sections as product storytelling bands inside a light shell.

If building a full dark theme, keep blue as the CTA, preserve white text, and use the teal-purple gradient as the main brand background.

## 13. Lineage & Influences

MindStudio borrows from classic SaaS navigation, AI-agent launch pages, and product video storytelling. The white shell establishes trust before the hero introduces drama.

The Remy section behaves like a product trailer. The design system should make space for narrative media without turning every surface into a video poster.

## 14. Do's and Don'ts

Do combine white shell and dark hero. Do use blue for conversion actions. Do use Inter consistently. Do keep media frames large. Do keep secondary hero actions translucent.

Do not tag the whole design as dark. Do not use purple as the main CTA. Do not place low-contrast gray text over the gradient at small sizes. Do not clutter the nav.

## 15. Agent Prompt Guide

### Quick Color Reference

Page background: `#fafafa`; nav: `#ffffff`; text: `#060606`; muted text: `#585858`; hero base: `#171b2a`; hero teal: `#16363b`; hero magenta: `#4b1835`; CTA blue: `#0069ff`; border: `#e0e0e0`.

### Example Component Prompts

- Create a MindStudio-style hero with white nav, dark teal-purple gradient background, left agent copy, and right video frame.
- Design a compact blue Get Started button with 12px radius.
- Build a translucent pill CTA over a dark gradient hero.
- Create a white announcement card with thin border and black text below the hero.

### Iteration Guide

1. Keep the shell light even when the hero is dark.
2. Use blue only for actionable conversion controls.
3. Make media frames large enough to be the proof.
4. Preserve Inter and restrained nav spacing.
5. Use gradient atmosphere in bands, not everywhere.
