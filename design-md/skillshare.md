---
name: Skillshare
tagline: Creative learning discovery in crisp black and white, mint actions, and image-led class shelves.
updated_at: 2026-08-03T06:30:00.000Z
published_at: 2026-08-03T06:30:00.000Z
author: webdesignhot
source_url: https://www.skillshare.com/en/
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [education, marketplace]
tags: [education, creative, classes, marketplace, mint, image-led, membership]
preview_swatch: ['#ffffff', '#0b1215', '#55da9b']
related: [masterclass, udemy, khan-academy]
description: 'Skillshare presents creative education as a visual marketplace. The audited homepage pairs a white editorial field with black typography, mint-green signup actions, violet campaign accents, and dense rows of colorful class imagery. GT Walsheim Pro keeps the experience direct and friendly, while compact 4-8px radii and a simple grid prevent the brand color from overpowering the work made by teachers and students.'

aliases:
  background: bg
  foreground: text
  primary: brand-deep
  primary-foreground: text-inverse
  accent: campaign
  muted: text-muted
  border: border
  ring: brand-deep

colors:
  bg: '#ffffff'
  bg-inverse: '#0b1215'
  surface: '#ffffff'
  surface-muted: '#f2f3f4'
  surface-strong: '#232424'
  text: '#0b1215'
  text-soft: '#394649'
  text-muted: '#767676'
  text-inverse: '#ffffff'
  brand: '#55da9b'
  brand-deep: '#147a50'
  on-brand: '#0b1215'
  campaign: '#6927ef'
  campaign-deep: '#5620c1'
  sky: '#24c2f2'
  border: '#dcdfe1'
  border-strong: '#394649'
  scrim: 'rgba(0,0,0,0.70)'
  focus: '#5620c1'
  success: '#147a50'
  warning: '#8a5a00'
  danger: '#b42318'

typography:
  display:
    family: '"GT Walsheim Pro", Arial, sans-serif'
    weights: [700]
  body:
    family: '"GT Walsheim Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif'
    weights: [400, 500, 700]
  mono:
    family: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
    weights: [400, 600]
  scale:
    hero: { size: 46, weight: 700, lineHeight: 1.26, tracking: '0', family: display }
    hero-mobile: { size: 32, weight: 700, lineHeight: 1.26, tracking: '0', family: display }
    section: { size: 36, weight: 700, lineHeight: 1.18, tracking: '0', family: display }
    category: { size: 28, weight: 700, lineHeight: 1.43, tracking: '0', family: display }
    card-title: { size: 16, weight: 700, lineHeight: 1.3, tracking: '0', family: body }
    body: { size: 16, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    small: { size: 14, weight: 400, lineHeight: 1.4, tracking: '0', family: body }
    button: { size: 18, weight: 700, lineHeight: 1, tracking: '0', family: body }

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120]

radius:
  none: 0
  sm: 4
  md: 8
  lg: 12
  pill: 100
  circle: '50%'

layout:
  page-width: 1200
  prose-width: 664
  header-height: 80
  class-card-width: 272
  class-card-height: 282
  grid-min: 240
  grid-gap: 24
  section-gap: 96
  mobile-gutter: 24

components:
  primary-button:
    bg: '#55da9b'
    color: '#0b1215'
    height: 40
    radius: 4
    padding: '8px 20px'
    border: '1px solid #55da9b'
    shadow: 'none'
    use: 'Membership signup and the single highest-priority conversion action.'
  campaign-button:
    bg: '#6927ef'
    color: '#ffffff'
    height: 48
    radius: 4
    padding: '12px 24px'
    border: '1px solid #6927ef'
    use: 'Time-bounded campaign or onboarding action when mint is already occupied.'
  secondary-button:
    bg: '#ffffff'
    color: '#0b1215'
    height: 40
    radius: 4
    padding: '8px 20px'
    border: '1px solid #394649'
    use: 'Provider login, filters, and lower-priority account actions.'
  class-card:
    bg: '#ffffff'
    color: '#394649'
    radius: 8
    border: '1px solid #dcdfe1'
    shadow: '0 1px 3px rgba(11,18,21,0.12)'
    padding: 0
    use: 'Image-first class summary with title, teacher, duration, and engagement metadata.'
  category-tile:
    bg: '#232424'
    color: '#ffffff'
    radius: 8
    border: 'none'
    padding: '24px'
    use: 'Bold creative-discipline entry backed by representative artwork.'
  text-input:
    bg: '#ffffff'
    color: '#0b1215'
    height: 44
    radius: 4
    border: '1px solid #394649'
    padding: '10px 12px'
    use: 'Search, email, and account fields with explicit visible labels.'

motion:
  duration-fast: 120
  duration-standard: 200
  duration-slow: 360
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  image-hover: 'Scale class artwork to 1.02 while keeping card geometry fixed.'
  reduced-motion: 'Remove image scaling and preserve color, underline, and focus feedback.'

breakpoints:
  mobile: 640
  tablet: 900
  desktop: 1200
  wide: 1440

shadows:
  card: '0 1px 3px rgba(11,18,21,0.12)'
  card-hover: '0 6px 18px rgba(11,18,21,0.16)'
  dialog: '0 16px 48px rgba(11,18,21,0.24)'
  focus: '0 0 0 3px rgba(86,32,193,0.30)'

accessibility:
  focus-ring: '3px solid #5620c1 with 2px offset'
  touch-target-min: 44
  reduced-motion-honored: true
  image-alt: 'Name the class topic or demonstrated technique; omit decorative portraits.'
  video: 'Provide captions, transcript access, and a visible playback state.'

lineage:
  summary: 'Recorded from the current Skillshare public homepage at desktop and mobile widths on 2026-08-03.'
  influences:
    - name: Skillshare homepage
      role: 'Primary source for palette, GT Walsheim typography, class cards, signup controls, and responsive composition.'
      url: https://www.skillshare.com/en/
---

## 1. Visual Theme and Atmosphere

Skillshare treats learning as an active creative marketplace. A clean white field gives class artwork, instructor portraits, and student outcomes room to carry the visual energy. Black typography provides a firm editorial spine; mint green signals the main membership action without flooding every surface.

Violet and bright sky blue appear as campaign or category accents. They should feel additive and playful, not like a continuous gradient theme. The result is optimistic and maker-led rather than academic or institutional.

## 2. Color System

Use `#ffffff` for the main field and `#0b1215` for primary copy and inverse sections. The observed mint action is `#55da9b` with near-black text. Violet `#6927ef` supports promotions and selected states; `#24c2f2` can label creative categories or illustrations.

Color must retain a job. Mint means primary progress, violet means campaign or active emphasis, and colorful media identifies the class itself. Do not use all three accents in one small component.

## 3. Typography

GT Walsheim Pro defines both the display and interface voice. The audited desktop hero is 46px/58px at 700; mobile reduces to 32px/40px. Section headings may reach 36px, while category labels use 28px with generous line height over imagery.

Body copy remains 16px with a 1.5 line height. Keep tracking at zero. The face is already geometric and friendly; extra letter spacing makes course titles harder to scan.

## 4. Component Styling

The primary signup control is compact: 40px high, mint, 4px radius, and bold near-black text. Provider login buttons use white surfaces, dark borders, and the same height. Class cards place a fixed-ratio image above title, instructor, and concise metadata.

Category tiles can invert to near-black with white 28px labels over artwork. Keep metadata and controls outside the image crop whenever they affect enrollment decisions.

## 5. Layout Principles

Center primary content near 1200px with 24px card gaps and 80-96px between major bands. The audited class cards are approximately 272px wide and 282px tall, creating a dense four-column desktop shelf without losing readable titles.

Let the hero copy occupy roughly 664px rather than spanning the viewport. Below it, use unframed page bands and image-led grids. Avoid wrapping an entire course section in a decorative card.

## 6. Shapes and Radius

Skillshare is mostly rectangular. Use 4px for controls, 8px for class and category media, and 12px only for larger overlays. Pills are appropriate for short filters and interest chips, not general buttons or content panels.

## 7. Depth and Elevation

Default course cards need only a subtle `0 1px 3px` shadow or a light border. Hover can strengthen elevation to `0 6px 18px` while the artwork scales to 1.02 inside an overflow-hidden media frame. Do not detach every section from the page with ambient shadows.

## 8. Interaction and Motion

Use 120ms for press and focus feedback, 200ms for card hover, and up to 360ms for shelf transitions. Enrollment controls should respond immediately. Preserve card dimensions while images load and animate so rows never jump.

For reduced motion, remove scaling and sliding. Keep a visible underline, border, or color change so interactive state remains obvious.

## 9. Responsive Behavior

The hero contracts from 46px to 32px and the content gutter becomes 24px. Class shelves should become a one-column list or a deliberate horizontal rail with fully visible first content; never show clipped text as a discovery cue.

Stack signup fields and make the primary action at least 44px high on touch devices, even if the desktop control is 40px. Preserve the class image ratio and place duration and teacher metadata below it.

## 10. Accessibility

Use a violet focus ring because it remains visible against white, mint, and black. Every video lesson requires captions and transcript access. Course cards need descriptive link text and alt text based on the skill demonstrated, not generic labels such as "course image".

Do not encode membership status, progress, or difficulty through accent color alone. Pair every state with text, an icon, or a progress value.

## 11. Imagery and Media

Use authentic lesson frames, finished creative work, instructor portraits, and hands-on process imagery. Favor clear, inspectable compositions over atmospheric stock photography. Keep thumbnails bright and varied so the neutral UI remains a useful gallery frame.

Video posters should reserve a stable area for duration and playback state without covering the focal subject. Use scrims only where white text overlays busy media.

## 12. Content Voice

Headlines are encouraging and outcome-oriented: name the skill, teacher expertise, or tangible project. Course metadata should be literal and comparable. Actions should say "Start learning", "View class", or "Sign up" rather than vague promotional phrases.

## 13. Reusable Patterns

The key reusable pattern is a neutral discovery shell with colorful user-created inventory. It suits course markets, portfolios, and creator communities where content should supply the palette.

A second pattern is progressive commitment: low-friction browsing first, then one mint membership action after the learner understands the class value.

## 14. Agent Implementation Notes

Build the typography, white field, and card dimensions before importing media. Model each class card with explicit image, title, teacher, duration, and progress slots. Keep mint to one primary action per local section and use violet only for selected or campaign context.

The audit observed a 40px desktop signup control; raise touch instances to 44px without changing the visual proportions. Lazy-load offscreen imagery with intrinsic dimensions.

## 15. Anti-Patterns

Do not turn the page into a rainbow dashboard, use oversized rounded cards, or place explanatory text inside every image. Avoid generic graduation imagery, heavy shadows, glass panels, and decorative gradients. Never hide course duration, instructor identity, price, or membership requirements until hover.
