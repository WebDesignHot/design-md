---
name: Lemonade
tagline: 'Minimal insurance landing page with serif hero type, grayscale line illustration, and electric pink conversion.'
updated_at: 2026-07-09T13:17:00+12:00
published_at: 2026-07-09T13:17:00+12:00
author: webdesignhot
source_url: https://www.lemonade.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [fintech, insurance]
tags: [light, pink, serif, illustration, insurance, conversion]
preview_swatch: ['#ffffff', '#ff0083', '#4a4a4a']
related: [affirm, paypal, headway]
description: 'Lemonade makes insurance feel unusually lightweight: white space, Merriweather display type, thin neighborhood line art, Lato navigation, and a single electric pink CTA that owns the otherwise grayscale page.'
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: brand
  muted: text-muted
  border: border
  ring: brand
colors:
  bg: '#ffffff'
  bg-soft: '#f7f7f7'
  surface: '#ffffff'
  surface-muted: '#f7f7f7'
  text: '#4a4a4a'
  text-strong: '#000000'
  text-soft: '#7b7b7b'
  text-muted: '#9b9b9b'
  brand: '#ff0083'
  brand-hover: '#e00074'
  brand-soft: '#ffe3f1'
  illustration: '#4a4a4a'
  illustration-soft: '#b7b7b7'
  border: '#b7b7b7'
  border-soft: 'rgba(183, 183, 183, 0.50)'
  shadow-pink: 'rgba(255, 0, 131, 0.22)'
  success: '#2f9d68'
  warning: '#d99226'
  danger: '#d93b65'
  on-brand: '#ffffff'
typography:
  display:
    family: 'Merriweather, Georgia, "Times New Roman", serif'
    weights: [400, 700]
  body:
    family: 'Lato, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    weights: [400, 700]
  mono:
    family: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
    weights: [400, 500]
  scale:
    hero-display: { size: 55, weight: 400, lineHeight: 1.3, tracking: '0', family: display }
    display: { size: 44, weight: 400, lineHeight: 1.2, tracking: '0', family: display }
    h1: { size: 36, weight: 400, lineHeight: 1.2, tracking: '0', family: display }
    h2: { size: 30, weight: 400, lineHeight: 1.25, tracking: '0', family: display }
    h3: { size: 20, weight: 700, lineHeight: 1.3, tracking: '0', family: body }
    body-lg: { size: 18, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body: { size: 16, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body-sm: { size: 14, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    nav: { size: 16, weight: 400, lineHeight: 1.35, tracking: '0', family: body }
    button: { size: 18, weight: 700, lineHeight: 1.2, tracking: '0', family: body }
radius:
  micro: 2
  sm: 5
  md: 8
  lg: 12
  xl: 20
  pill: 9999
spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
layout:
  page-width: 1180
  prose-width: 680
  header-height: 72
  hero-max-width: 1200
  hero-copy-width: 540
motion:
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 140
  duration-standard: 220
  duration-slow: 420
  reduced-motion: 'pause illustration drift and CTA glow'
breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536
components:
  button-primary:
    bg: brand
    text: on-brand
    radius: 5
    padding: '19px 44px'
    use: 'Check our prices CTA'
  nav-link:
    bg: transparent
    text: text
    radius: 0
    padding: '8px 0'
    use: 'Insurance category navigation'
  line-illustration:
    bg: transparent
    text: illustration
    radius: 0
    use: 'home, car, pet, and neighborhood scenes'
  hero-lockup:
    bg: surface
    text: text
    radius: 0
    use: 'centered serif headline and subcopy'
lineage:
  summary: 'Lemonade strips insurance down to a white editorial canvas and one saturated pink action. The hand-drawn city scene makes the product approachable while the CTA remains unmistakable.'
  influences:
    - { name: 'Direct insurance flows', role: 'single price-check CTA and product category nav' }
    - { name: 'Editorial landing pages', role: 'centered serif hero and generous whitespace' }
    - { name: 'Friendly line illustration', role: 'lightweight home and neighborhood context' }
---

## 1. Visual Theme & Atmosphere

Lemonade is sparse, bright, and unusually quiet for insurance. The page is mostly white, with grayscale line art framing the bottom edges and a centered editorial headline.

The electric pink CTA is the only loud color in the first viewport. That restraint makes the action feel decisive without making the page feel aggressive.

**Key Characteristics**
- White page shell.
- Merriweather serif hero headline.
- Lato navigation and buttons.
- Thin grayscale neighborhood illustration.
- One electric pink CTA.
- Centered composition.
- Minimal top navigation with product categories.
- Soft pink glow under the primary button.

## 2. Color Palette & Roles

Use `bg #ffffff` as the dominant surface. Supporting sections can move to `bg-soft #f7f7f7`, but the first viewport should remain clean.

The brand color is `brand #ff0083`. It should appear on primary conversion actions and tiny brand marks, not across every heading.

Text uses `text #4a4a4a`, with `text-soft #7b7b7b` for secondary nav and support copy. Illustration strokes should stay grayscale.

## 3. Typography Rules

| Role | Font | Size | Weight | Notes |
| --- | --- | ---: | ---: | --- |
| Hero | Merriweather | 55 | 400 | Calm, centered insurance reset |
| Display | Merriweather | 44 | 400 | Section statements |
| H1 | Merriweather | 36 | 400 | Detail pages |
| H2 | Merriweather | 30 | 400 | Support sections |
| H3 | Lato | 20 | 700 | Product cards |
| Body large | Lato | 18 | 400 | Hero subcopy |
| Body | Lato | 16 | 400 | Product copy |
| Button | Lato | 18 | 700 | Pink CTA |

The serif headline provides the brand's softness. Keep it centered and avoid uppercase display text outside buttons.

## 4. Component Stylings

Primary buttons are pink rectangles with a 5px radius and generous horizontal padding. Use a subtle pink shadow so the button floats without adding card chrome.

Navigation links are plain text. Do not put product categories in pills or tabs; the header should feel effortless.

Line illustrations should be thin, low-detail, and mostly monochrome. They frame the page rather than acting as product cards.

## 5. Layout Principles

Center the hero copy and CTA vertically in the first viewport. Place illustration groups along the lower left and right edges so they create a stage around the headline.

Keep the logo centered in the header, with insurance categories on the left and account access on the right.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
| --- | ---: | --- |
| Micro | 2 | tiny marks |
| Small | 5 | primary CTA |
| Medium | 8 | later cards or inputs |
| Large | 12 | product modules |
| Extra large | 20 | rare panels |
| Pill | 9999 | avoid in the hero |

The design is more about whitespace and line art than rounded surfaces. Keep shapes simple.

## 7. Depth & Elevation

Use very little elevation. The primary depth cue is the soft pink glow under the CTA.

Cards later in the page should use pale backgrounds and faint borders rather than heavy shadows.

## 8. Interaction & Motion

CTA hover can darken to `brand-hover #e00074` and slightly reduce the shadow. Navigation links can use simple underline or opacity changes.

Illustration motion, if any, should be light and slow. Insurance onboarding should feel quick, not theatrical.

## 9. Content Voice

Use reset language and simple promises: instant, affordable, generous, transparent. Keep copy concise and friendly.

Avoid dense policy terminology in the hero. Save coverage detail for the quote flow.

## 10. Navigation Pattern

The top nav is product-category oriented: renters, homeowners, car, pet, life, and giveback. It signals scope without adding a large menu.

Account access stays far right and quiet. It should not compete with the CTA.

## 11. Forms & Conversion

The first action is a price check, not a newsletter signup. Make the CTA direct and prominent.

If adding a form step, keep it modal or flow-based after the CTA. Do not clutter the landing page with policy fields.

## 12. Illustration System

Illustrations should use simple outlines, domestic scenes, and generous negative space. Houses, cars, pets, benches, and clouds fit the system.

Keep illustration fill minimal. The page loses its lightness if the drawings become colorful scenes.

## 13. Accessibility Notes

Pink buttons on white have strong visual priority, but ensure white button text remains legible. Use weight and size, not only saturation.

Large serif text should keep line height around 1.3 so the centered headline remains readable on narrow screens.

## 14. Anti-Patterns

Do not add gradient backgrounds, heavy photography, or dark insurance dashboards. They conflict with Lemonade's plain-spoken feel.

Do not overuse pink. The palette works because pink is reserved for action.

Avoid boxed hero cards. The hero should be open and centered.

## 15. Implementation Checklist

- Use a white first viewport.
- Center the serif hero headline.
- Set the CTA to `#ff0083`.
- Keep nav links plain.
- Add thin grayscale illustration around the hero.
- Use Lato for interface copy.
- Avoid extra card chrome in the hero.
- Reserve pink for conversion and small brand details.
