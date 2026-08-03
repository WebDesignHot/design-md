---
name: itch.io
tagline: Independent game discovery in a dense gray catalog, compact Lato type, and direct red community links.
updated_at: 2026-08-03T06:38:00.000Z
published_at: 2026-08-03T06:38:00.000Z
author: webdesignhot
source_url: https://itch.io/
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [gaming, marketplace]
tags: [gaming, indie, marketplace, community, dense, red, game-jams]
preview_swatch: ['#f4f4f4', '#222222', '#da2c49']
related: [steam, gog, epic-games]
description: 'itch.io is a deliberately dense independent marketplace rather than a cinematic game storefront. The audited homepage uses a light-gray page field, white inventory regions, compact 13px Lato copy, 15-20px extra-bold section labels, direct red links, and small 2-4px controls. Game art provides most of the color while tags, jams, developer logs, pricing filters, and community routes remain continuously visible.'

aliases:
  background: bg
  foreground: text
  primary: brand-deep
  primary-foreground: on-brand
  accent: brand-deep
  muted: text-muted
  border: border
  ring: focus

colors:
  bg: '#f4f4f4'
  surface: '#ffffff'
  surface-muted: '#eeeeee'
  surface-dark: '#222222'
  surface-overlay: 'rgba(30,30,30,0.90)'
  text: '#222222'
  text-soft: '#434343'
  text-muted: '#858585'
  text-inverse: '#ffffff'
  brand: '#da2c49'
  brand-bright: '#ff2449'
  brand-deep: '#a51f37'
  on-brand: '#ffffff'
  featured: '#34a0f2'
  border: '#dadada'
  border-strong: '#cdcdcd'
  scrim: 'rgba(0,0,0,0.50)'
  focus: '#361275'
  success: '#247a52'
  warning: '#8a5a00'
  danger: '#da2c49'

typography:
  display:
    family: 'Lato, Arial, sans-serif'
    weights: [700, 900]
  body:
    family: 'Lato, Arial, sans-serif'
    weights: [400, 700, 900]
  mono:
    family: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
    weights: [400, 600]
  scale:
    brand: { size: 32, weight: 700, lineHeight: 1.1, tracking: '0', family: display }
    featured-title: { size: 28, weight: 900, lineHeight: 1.15, tracking: '0', family: display }
    section: { size: 20, weight: 900, lineHeight: 1.2, tracking: '0', family: display }
    utility-heading: { size: 15, weight: 900, lineHeight: 1.25, tracking: '0', family: display }
    card-title: { size: 14, weight: 700, lineHeight: 1.3, tracking: '0', family: body }
    body: { size: 13, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    small: { size: 12, weight: 400, lineHeight: 1.4, tracking: '0', family: body }
    button: { size: 13, weight: 700, lineHeight: 1, tracking: '0', family: body }

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64]

radius:
  none: 0
  xs: 2
  sm: 3
  md: 4

layout:
  page-width: 1200
  sidebar-width: 240
  prose-width: 720
  header-height: 50
  game-card-width: 220
  game-art-ratio: '16 / 9'
  grid-min: 180
  grid-gap: 16
  section-gap: 48
  mobile-gutter: 12

components:
  primary-button:
    bg: '#da2c49'
    color: '#ffffff'
    height: 40
    radius: 3
    padding: '10px 16px'
    border: '1px solid #da2c49'
    shadow: 'none'
    use: 'Purchase, download, follow, or submit the principal marketplace action.'
  secondary-button:
    bg: '#ffffff'
    color: '#222222'
    height: 40
    radius: 3
    padding: '10px 16px'
    border: '1px solid #cdcdcd'
    use: 'Account, filter, upload, and lower-priority utility actions.'
  tag-link:
    bg: '#ffffff'
    color: '#222222'
    min-height: 27
    radius: 4
    padding: '6px 8px'
    border: '1px solid #dadada'
    use: 'Compact genre, platform, format, price, or accessibility filter.'
  game-card:
    bg: '#ffffff'
    color: '#222222'
    radius: 3
    border: '1px solid #dadada'
    shadow: '0 1px 2px rgba(0,0,0,0.10)'
    padding: 0
    use: 'Game art, title, creator, price or status, platforms, and compact tags.'
  featured-panel:
    bg: '#222222'
    color: '#ffffff'
    radius: 3
    border: 'none'
    shadow: 'none'
    padding: '24px'
    use: 'One editorially featured game with larger art and a readable summary.'
  search:
    bg: '#ffffff'
    color: '#222222'
    height: 36
    radius: 3
    border: '1px solid #cdcdcd'
    padding: '8px 10px'
    use: 'Catalog search with a visible label, query persistence, and direct submit behavior.'

motion:
  duration-fast: 80
  duration-standard: 150
  duration-slow: 240
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  card-hover: 'Strengthen border and underline title without moving the dense grid.'
  reduced-motion: 'Remove art scaling and preserve border, underline, and focus feedback.'

breakpoints:
  mobile: 640
  tablet: 900
  desktop: 1200
  wide: 1440

shadows:
  card: '0 1px 2px rgba(0,0,0,0.10)'
  menu: '0 5px 16px rgba(0,0,0,0.18)'
  dialog: '0 14px 40px rgba(0,0,0,0.28)'
  focus: '0 0 0 3px rgba(54,18,117,0.28)'

accessibility:
  focus-ring: '3px solid #361275 with 2px offset'
  touch-target-min: 44
  reduced-motion-honored: true
  metadata: 'Expose price, platform, input method, accessibility, content warning, and download format as text.'
  media: 'Label trailers, animated screenshots, and flashing content; provide pause controls.'

lineage:
  summary: 'Recorded from the current itch.io public homepage at desktop and mobile widths on 2026-08-03.'
  influences:
    - name: itch.io homepage
      role: 'Primary source for Lato typography, compact marketplace density, red link language, filter geometry, community navigation, and responsive catalog behavior.'
      url: https://itch.io/
---

## 1. Visual Theme and Atmosphere

itch.io is a working independent marketplace, not a cinematic game campaign. A light-gray field, compact white inventory regions, direct red links, and dense filter groups allow many games, jams, tools, and community destinations to coexist. Game art provides personality without requiring expressive UI chrome.

The experience should feel open to small creators and unusual work. Slight roughness and high information density are part of the identity, but structure and accessibility cannot be sacrificed.

## 2. Color System

Use `#f4f4f4` for the page, white for inventory, `#222222` for text and featured inverse panels, and `#da2c49` for brand links and primary actions. `#858585` is secondary metadata; `#34a0f2` can identify a limited editorial or informational feature.

Game thumbnails supply diverse color. Do not tint cards by genre. Brand red must not double as the only error indicator.

## 3. Typography

Lato carries all content. The brand is 32px at 700, featured titles reach 28px at 900, ordinary section titles are 20px at 900, and sidebar headings are 15px at 900. Body copy is compact at 13px.

Preserve this dense scale on desktop, but raise touch-critical labels and long descriptions where needed on mobile. Keep normal tracking for rapid catalog scanning.

## 4. Component Styling

Controls and cards use 2-4px corners. Primary actions are red, while filters and account controls use white surfaces and gray borders. Game cards use stable 16:9 art, title, creator, price or free status, platform, and tags.

Featured games may use one dark panel with larger art and white copy. Do not convert every game into a large promotional card.

## 5. Layout Principles

Use a 1200px catalog with a 240px filter or discovery column and a flexible game grid. Tracks may shrink to 180-220px with 16px gaps. Keep section spacing near 48px so users can scan many shelves without excessive scrolling.

Tags, jams, developer logs, price filters, and upload routes should remain discoverable. Avoid replacing the information architecture with a single recommendation feed.

## 6. Shapes and Radius

The system is tightly rectangular. Use 2px for small labels, 3px for cards and buttons, and 4px for tag links. Do not add 12-24px consumer-app rounding or pill shapes to ordinary filters.

## 7. Depth and Elevation

Use a minimal `0 1px 2px` card shadow or a gray border. Hover strengthens the border and title underline without lifting the grid. Menus and dialogs may use stronger shadows when they must overlay dense content.

## 8. Interaction and Motion

Feedback is fast: 80ms press, 150ms hover, and no more than 240ms for menu transitions. Dense grids should not shift when hovered. Animated screenshots and trailers must start by user action or expose immediate pause.

Reduced motion removes art scaling and animated previews while preserving red link, border, and focus feedback.

## 9. Responsive Behavior

Collapse the sidebar into labeled filter groups above results or a keyboard-accessible drawer. Keep the first games visible and preserve active filters in a textual summary. Use one or two columns based on available width, with 12px outer gutters.

Although desktop utility links can be 27-40px high, mobile targets must reach 44px. Do not shrink price, platform, or creator metadata to preserve column count.

## 10. Accessibility

Use the deep violet `#361275` focus ring so keyboard focus remains distinct from red brand links. Every game needs text for price, supported platform, input method, download format, content warnings, and relevant accessibility features.

Trailers and animated screenshots need controls and flashing-content warnings. Filter updates should announce result counts and retain focus.

## 11. Imagery and Media

Use actual screenshots, cover art, GIFs, and trailers supplied by creators. Preserve pixels and unusual visual styles rather than applying a uniform stock treatment. Stable media ratios prevent the dense grid from moving during load.

Featured crops should still reveal gameplay or the actual work. Avoid atmospheric art that hides what the buyer receives.

## 12. Content Voice

Keep marketplace language literal and creator-forward. Name the game, creator, platform, price, status, jam, and update. Editorial copy can be informal, but purchase and download requirements must be unambiguous.

## 13. Reusable Patterns

The key pattern is a compact filter rail plus a flexible image catalog. It suits creator marketplaces with long-tail inventory and many overlapping tags.

A second pattern is community parity: game jams, developer logs, uploads, and discussions remain first-class alongside shopping.

## 14. Agent Implementation Notes

Model searchable metadata before laying out the grid. Render price, platform, creator, and status as text, preserve active filters in the URL, and reserve intrinsic media dimensions. Keep the visual density rather than inflating every card.

Use brand red for links and primary actions, but supply separate semantic error tokens. Test the filter experience with keyboard and narrow screens.

## 15. Anti-Patterns

Do not turn itch.io into a dark cinematic store, add oversized rounded cards, hide filters behind recommendations, or normalize independent artwork into one color treatment. Avoid autoplaying GIF walls, hover-only prices, and icon-only platform data. Never remove creator and jam routes to simplify the marketplace.
