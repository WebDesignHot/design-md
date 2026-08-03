---
name: Gamma
tagline: 'White AI creation studio with deep navy type, blue pill CTAs, and surreal pastel previews.'
updated_at: 2026-07-09T12:52:00+12:00
published_at: 2026-07-09T12:52:00+12:00
author: webdesignhot
source_url: https://gamma.app
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [ai, design-tools, saas]
tags: [light, editorial, sans, ai, presentations, website-builder]
preview_swatch: ['#ffffff', '#0540ad', '#002253']
related: [base44, mindstudio, jitter]
description: 'Gamma frames AI content creation as a clean white studio: deep navy ESBuild headlines, PPMori navigation, rounded blue CTAs, and saturated pastel product previews that make presentations, websites, and social media feel generated but still designed.'
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent-orange
  muted: text-muted
  border: border
  ring: brand-bright
colors:
  bg: '#ffffff'
  bg-soft: '#faf9f5'
  bg-blue-soft: '#d0e6fe'
  surface: '#ffffff'
  surface-glass: 'rgba(255, 255, 255, 0.8)'
  surface-preview: '#eaf7ff'
  text: '#002253'
  text-body: '#38383c'
  text-muted: '#66666b'
  text-soft: '#7a7a80'
  brand: '#0540ad'
  brand-hover: '#0b2e79'
  brand-bright: '#2548eb'
  brand-soft: '#d0e6fe'
  accent-orange: '#ff5000'
  accent-amber: '#ff6a0a'
  accent-rose: '#da2887'
  accent-pink: '#eb49a7'
  border: '#dfdfe0'
  border-blue: '#d0e6fe'
  border-subtle: 'rgba(223, 223, 224, 0.65)'
  focus: '#2548eb'
  success: '#1e8f5a'
  warning: '#ff6a0a'
  danger: '#d9355f'
  on-brand: '#ffffff'
typography:
  display:
    family: 'ESBuild, PPMori, system-ui, -apple-system, sans-serif'
    weights: [300, 500, 700, 800]
  body:
    family: 'PPMori, system-ui, -apple-system, BlinkMacSystemFont, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    hero-display: { size: 60, weight: 700, lineHeight: 1, tracking: '-0.02em', family: display }
    display: { size: 96, weight: 300, lineHeight: 1.1, tracking: '-0.03em', family: display }
    h1: { size: 48, weight: 700, lineHeight: 1.05, tracking: '-0.02em', family: display }
    h2: { size: 36, weight: 700, lineHeight: 1.12, tracking: '-0.015em', family: display }
    h3: { size: 30, weight: 800, lineHeight: 1.3, tracking: '-0.01em', family: body }
    body-lg: { size: 20, weight: 500, lineHeight: 1.45, tracking: '0', family: body }
    body: { size: 16, weight: 500, lineHeight: 1.5, tracking: '0', family: body }
    body-sm: { size: 14, weight: 500, lineHeight: 1.45, tracking: '0', family: body }
    nav: { size: 16, weight: 500, lineHeight: 1.5, tracking: '0', family: body }
    button: { size: 18, weight: 600, lineHeight: 1.25, tracking: '0', family: body }
radius:
  micro: 4
  sm: 8
  md: 12
  lg: 18
  xl: 24
  preview: 20
  pill: 9999
spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 80, 112, 144]
layout:
  page-width: 1280
  prose-width: 720
  header-height: 56
  hero-max-width: 1268
  split-min: 520
motion:
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 160
  duration-standard: 240
  duration-slow: 420
  reduced-motion: 'freeze generated preview drift and cursor flourishes'
breakpoints:
  mobile: 640
  tablet: 960
  desktop: 1280
  wide: 1536
components:
  button-primary:
    bg: brand
    text: on-brand
    radius: 24
    padding: '12px 28px'
    use: 'Start for free CTAs in header and hero'
  button-secondary:
    bg: surface
    text: text
    border: border-blue
    radius: 24
    padding: '12px 28px'
    use: 'Watch video and quiet secondary actions'
  nav-pill:
    bg: transparent
    text: text
    radius: 24
    padding: '8px 16px'
    use: 'Products, Solutions, language selector'
  preview-panel:
    bg: surface-preview
    border: border-blue
    radius: 20
    padding: 0
    use: 'Generated document or slide preview crops'
  product-card:
    bg: surface
    border: border-subtle
    radius: 18
    padding: 28
lineage:
  summary: 'Gamma borrows the authority of presentation software, the softness of creator tools, and the spectacle of AI image generation. The result is less dashboard and more clean studio wall with one vivid preview always visible.'
  influences:
    - { name: 'Presentation editors', role: 'content types and artifact previews' }
    - { name: 'AI image generators', role: 'surreal flower and gradient preview imagery' }
    - { name: 'Modern SaaS navigation', role: 'compact centered header and pill CTAs' }
---

## 1. Visual Theme & Atmosphere

Gamma is a bright creation studio. The page is mostly white, but the preview imagery carries enough blue, pink, and orange saturation that the interface never feels empty.

The core contrast is deep navy copy against a clean canvas. Rounded blue CTAs and pastel generated previews make the AI promise feel concrete: a document, presentation, or website appears immediately beside the headline.

**Key Characteristics**
- Pure white page background with soft cream sections below the fold.
- Deep navy text, not generic black.
- ESBuild display headlines with tight, heavy hero weight.
- PPMori for navigation, body copy, and CTA labels.
- Rounded blue CTAs with white text.
- Secondary white pill buttons with pale blue borders.
- Oversized product preview cards with surreal image crops.
- Orange and pink accent colors reserved for generated media moments.

## 2. Color Palette & Roles

The primary canvas is `bg #ffffff`. Use `bg-soft #faf9f5` only for lower content bands or large product clusters.

Text anchors on `text #002253`, with `text-body #38383c` and `text-muted #66666b` for supporting copy. Gamma should read navy first, gray second.

The action color is `brand #0540ad`, observed on both header and hero `Start for free` buttons. `brand-bright #2548eb` works for focus and active states.

Pastel preview support comes from `brand-soft #d0e6fe`, `accent-orange #ff5000`, `accent-rose #da2887`, and `accent-pink #eb49a7`.

## 3. Typography Rules

| Role | Font | Size | Weight | Notes |
| --- | --- | ---: | ---: | --- |
| Hero | ESBuild | 60 | 700 | Deep navy, tight multi-line lockup |
| Display | ESBuild | 96 | 300 | Large editorial section statements |
| H1 | ESBuild | 48 | 700 | Detail-page title |
| H2 | ESBuild | 36 | 700 | Product family sections |
| H3 | PPMori | 30 | 800 | Product-card labels |
| Body large | PPMori | 20 | 500 | Hero support copy |
| Body | PPMori | 16 | 500 | Default copy |
| Button | PPMori | 18 | 600 | Hero CTAs |

Do not substitute a narrow grotesk for the hero. The Gamma headline depends on a rounded, compact display rhythm.

## 4. Component Stylings

Buttons: primary buttons are blue pills with a 24px radius. Secondary buttons are white pills with pale blue borders and navy labels.

Preview cards: image previews should be large, rounded, and cropped. They are not thumbnails; they are proof that the AI produced a finished artifact.

Navigation: keep nav text modest, horizontally grouped, and pill-ready. Gamma's header has very little chrome, so spacing does most of the work.

Tabs: product-type cards can use bold navy labels on a blue-soft band, with large cards peeking below the first viewport.

## 5. Layout Principles

Use an asymmetric hero: text and CTAs on the left, artifact preview stack on the right. The first viewport should show the next content band starting below the hero to create momentum.

Keep the header low and compact. The hero preview can be taller than the text column, but the text column should still align cleanly to the top third of the page.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
| --- | ---: | --- |
| Micro | 4 | focus outlines, tiny media controls |
| Small | 8 | icon buttons |
| Medium | 12 | small cards |
| Large | 18 | product cards |
| Preview | 20 | generated artifact previews |
| Pill | 9999 | nav and CTA pills |

Gamma uses roundness for friendly AI creation, but it does not over-soften the page. Large content panels stay clean and rectangular enough to feel like tools.

## 7. Depth & Elevation

Depth comes from layered artifacts rather than heavy shadows. Previews sit on white and blue-soft planes, sometimes cropped against the viewport edge.

Use pale borders and image contrast before box-shadow. Shadows should be soft and rare, mostly for floating media controls inside previews.

## 8. Interaction & Motion

Hover states should deepen the blue CTA and slightly brighten the secondary button border. Product previews can drift or reveal cursor affordances slowly, but avoid busy looping animations.

Generated media flourishes should take 360-420ms so they feel designed, not like a generic spinner.

## 9. Accessibility & A11y

`#002253` on white has very strong contrast. Blue CTAs with white text are also readable at the observed sizes.

Orange and pink accents should not carry body text. Use them as image or highlight colors, with navy or white labels layered separately.

## 10. Responsive Behavior

On mobile, stack the hero preview under the copy and reduce the hero display to 42-48px. Keep the primary CTA full-width or near full-width.

The preview stack should crop horizontally rather than shrinking all details beyond recognition. Preserve the blue CTA as the main conversion anchor.

## 11. Content & Voice

Gamma's voice is broad and creative: ideas become presentations, websites, docs, and social assets. Use confident but simple language.

Good verbs: create, design, generate, present, publish, remix. Avoid technical builder language unless the UI is specifically about API or integration surfaces.

## 12. Dark Mode & Theming

The audited homepage is light-first. A dark variant should keep navy as a source color but move to a deep blue-black canvas, preserving blue CTAs and pastel generated assets.

Do not invert the whole page into a purple AI gradient. Gamma's identity is clean white studio plus colorful artifacts.

## 13. Lineage & Influences

Gamma sits between slide editors, AI image generation, and document publishing tools. The brand treats output formats as equal citizens, which is why the hero copy names presentations and websites together.

The visual system avoids corporate dashboard density. It makes content creation feel spacious, polished, and fast.

## 14. Do's and Don'ts

Do use deep navy text. Do keep CTAs rounded and blue. Do let generated previews carry the color. Do pair clean white with occasional soft blue sections.

Do not make the page gray. Do not use orange as the primary CTA. Do not reduce previews to small cards. Do not replace ESBuild display type with a utilitarian system font.

## 15. Agent Prompt Guide

When generating Gamma-like UI, ask for a white AI creation studio with deep navy typography, blue pill CTAs, and large pastel previews of generated artifacts.

The result should feel like an AI-native presentation and website builder: spacious, confident, creative, and product-proof from the first viewport.
