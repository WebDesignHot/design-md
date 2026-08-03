---
name: GOG
tagline: DRM-free game discovery in graphite chrome, soft gray shelves, and a focused purple commerce accent.
updated_at: 2026-08-03T05:54:39.000Z
published_at: 2026-08-03T05:54:39.000Z
author: webdesignhot
source_url: https://www.gog.com/en/
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [gaming, marketplace]
tags: [gaming, marketplace, dark-header, purple, dense, storefront, drm-free]
preview_swatch: ['#262626', '#d9d9d9', '#982e9c']
related: [steam, epic-games, xbox]
description: 'GOG combines a dark graphite storefront shell with pale gray merchandise shelves and a compact purple buying accent. The audited homepage uses Lato GOG for dense navigation and catalog copy, rectangular game art, modest 3-5px radii, and low elevation. Its hierarchy is carried by product imagery and price metadata rather than decorative UI, reflecting the service''s DRM-free ownership and preservation position.'

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  muted: text-muted
  border: border
  ring: brand

colors:
  bg: '#d9d9d9'
  bg-deep: '#262626'
  surface: '#ededed'
  surface-raised: '#f2f2f2'
  surface-inverse: '#262626'
  text: '#212121'
  text-muted: '#4c4c4c'
  text-faint: '#737373'
  text-inverse: '#ffffff'
  nav-text: '#cccccc'
  brand: '#982e9c'
  brand-deep: '#6e1d72'
  brand-soft: '#de8ae5'
  on-brand: '#ffffff'
  border: 'rgba(0,0,0,0.15)'
  border-strong: 'rgba(0,0,0,0.28)'
  scrim: 'rgba(0,0,0,0.72)'
  shadow-card: 'rgba(0,0,0,0.15)'
  success: '#4d7c0f'
  warning: '#8a5b00'
  danger: '#a32020'
  info: '#386d9d'

typography:
  display:
    family: '"Lato GOG Latin", "Lato GOG", "Open Sans", Arial, sans-serif'
    weights: [600, 700]
  body:
    family: '"Lato GOG Latin", "Lato GOG", "Open Sans", Arial, sans-serif'
    weights: [400, 600, 700]
  mono:
    family: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
    weights: [400, 600]
  scale:
    hero: { size: 32, weight: 700, lineHeight: 1.15, tracking: '0', family: display }
    section: { size: 28, weight: 600, lineHeight: 1.2, tracking: '0', family: display }
    card-title: { size: 14, weight: 600, lineHeight: 1.3, tracking: '0', family: body }
    body: { size: 14, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    small: { size: 12, weight: 400, lineHeight: 1.35, tracking: '0', family: body }
    nav: { size: 14, weight: 600, lineHeight: 1, tracking: '0', family: body }
    button: { size: 16, weight: 600, lineHeight: 1, tracking: '0', family: body }
    price: { size: 14, weight: 700, lineHeight: 1, tracking: '0', family: body, opentype: ['tnum'] }

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96]

radius:
  none: 0
  sm: 3
  md: 4
  lg: 5
  pill: 9999

layout:
  page-width: 1200
  prose-width: 720
  header-height: 56
  product-card-width: 256
  product-card-height: 233
  product-art-height: 119
  grid-min: 220
  grid-gap: 16

components:
  primary-button:
    bg: 'linear-gradient(180deg, #982e9c 0%, #6e1d72 100%)'
    color: '#ffffff'
    height: 52
    radius: 5
    padding: '16px 32px'
    border: '1px solid #6e1d72'
    shadow: '0 2px 4px rgba(0,0,0,0.15)'
    use: 'Primary purchase or install action.'
  secondary-button:
    bg: '#ededed'
    color: '#212121'
    height: 44
    radius: 4
    padding: '12px 24px'
    border: '1px solid rgba(0,0,0,0.28)'
    use: 'Secondary catalog and account action.'
  product-card:
    bg: '#ededed'
    color: '#212121'
    radius: 3
    border: '1px solid rgba(0,0,0,0.15)'
    shadow: '0 2px 4px rgba(0,0,0,0.15)'
    padding: 0
    use: 'Game art above a compact title, platform, discount, and price row.'
  header:
    bg: '#262626'
    color: '#cccccc'
    height: 56
    use: 'Graphite global navigation with restrained utility actions.'
  hero:
    bg: '#262626'
    color: '#ffffff'
    use: 'Full-width franchise artwork with a dark reading scrim and one purple action.'
  text-input:
    bg: '#f2f2f2'
    color: '#212121'
    height: 44
    radius: 4
    border: '1px solid rgba(0,0,0,0.28)'
    padding: '10px 12px'
    use: 'Search and account fields; focus with a visible purple outline.'
  discount-label:
    bg: '#6e1d72'
    color: '#ffffff'
    radius: 3
    padding: '4px 8px'
    use: 'Compact savings label attached to price metadata.'

motion:
  duration-fast: 120
  duration-standard: 200
  duration-slow: 320
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  card-hover: 'Raise the card by 2px and strengthen its shadow over 200ms.'
  reduced-motion: 'Remove transforms and preserve color and outline changes.'

breakpoints:
  mobile: 640
  tablet: 900
  desktop: 1200
  wide: 1440

shadows:
  card: '0 2px 4px rgba(0,0,0,0.15)'
  card-hover: '0 5px 14px rgba(0,0,0,0.20)'
  modal: '0 16px 40px rgba(0,0,0,0.32)'
  focus: '0 0 0 3px rgba(152,46,156,0.30)'

accessibility:
  focus-ring: '3px solid rgba(152,46,156,0.45) with 2px offset'
  touch-target-min: 44
  reduced-motion-honored: true
  image-alt: 'Use the game title and edition; do not repeat nearby visible text.'
  pricing: 'Expose original price, discount, and final price as readable text.'

lineage:
  summary: 'Recorded from the current GOG storefront and its public ownership and preservation messaging.'
  influences:
    - name: GOG storefront
      role: 'Primary visual source for color, type, card, navigation, and responsive behavior.'
      url: https://www.gog.com/en/
    - name: GOG Dreamlist
      role: 'Product context for game preservation and community requests.'
      url: https://www.gog.com/dreamlist
---

## 1. Visual Theme and Atmosphere

GOG uses a practical marketplace composition: graphite navigation and footer chrome frame broad light-gray catalog shelves. The page does not rely on ornamental backgrounds. Franchise art provides most of the visual intensity, while the interface keeps a neutral material palette around it.

Purple is reserved for actions and selected states. This makes buying, installing, or advancing through a campaign visibly distinct without turning every control into brand decoration. The overall tone is mature, compact, and ownership-focused.

## 2. Color System

Use `#d9d9d9` as the page field and `#ededed` or `#f2f2f2` for raised content. The `#262626` shell should remain continuous across global navigation and footer areas. Primary body copy is `#212121`; muted copy should remain no lighter than `#4c4c4c` on pale surfaces.

The principal action is a top-to-bottom `#982e9c` to `#6e1d72` gradient. A flat `#982e9c` is suitable for focus, selected tabs, and small badges where a gradient would become noisy.

## 3. Typography

The audited site identifies `Lato GOG Latin` and `Lato GOG`, with Open Sans as a resilient substitute. Headings are functional rather than theatrical: 28-32px, 600-700 weight, normal tracking, and compact line height. Product titles stay near 14px so price and platform metadata remain visible without expanding cards.

Use tabular numerals for prices. Avoid condensed or aggressively tracked display faces; the type system should read like a library catalog, not a game trailer.

## 4. Component Styling

Primary actions are 52px high with 16px vertical and 32px horizontal padding, a 5px radius, and a low 2px shadow. Secondary controls use a pale surface, graphite text, and a visible neutral border.

Product cards use 3px corners, a 1px low-contrast border, and `0 2px 4px rgba(0,0,0,0.15)`. Keep the artwork edge-to-edge. Place title, platform support, discount, and final price in a compact metadata block below it.

## 5. Layout Principles

Center the catalog in a container near 1200px. Use a responsive grid with a 220px minimum track and 16px gaps. A reference desktop tile is approximately 256 by 233px, with about 119px reserved for artwork.

Sections should be easy to scan: heading, optional short action row, then a card rail or grid. Do not wrap each section in another floating panel; the gray page field already separates the white and pale card surfaces.

## 6. Shapes and Radius

GOG is softly rectangular. Use 3px for product cards, 4px for inputs and utility controls, and 5px for important buttons. Circular geometry belongs to avatars and icon-only controls only. Large pill controls are not part of the observed storefront language.

## 7. Depth and Elevation

Elevation is deliberately shallow. Default cards receive a 2px vertical shadow with 15% black. Hover may lift a card by 2px and increase the shadow to `0 5px 14px rgba(0,0,0,0.20)`. Reserve the stronger modal shadow for dialogs and avoid ambient glow around ordinary merchandise.

## 8. Interaction and Motion

Color and elevation transitions should complete in 120-200ms. Carousel movement may use 320ms, but product browsing should never feel delayed. Keep discount labels and price rows static. For reduced motion, remove translations and preserve border, color, and focus changes.

## 9. Responsive Behavior

On narrow screens, collapse global navigation into compact controls, keep the hero action full-width inside the content gutter, and reduce the product grid to one or two columns. Maintain a 16px page gutter and 44px minimum targets. Never crop the game title or final price to make a card artificially short.

## 10. Accessibility

Every card needs a single descriptive link target and meaningful alt text for its artwork. Price changes must be expressed as text, not color alone. Use a visible purple focus ring with offset against both the graphite header and pale card surfaces.

The purple gradient supports white action text at its darker end; where contrast is uncertain, use the deeper `#6e1d72` as a flat background. Announce carousel changes only when the user initiates them.

## 11. Imagery and Media

Use actual game key art and cover art as the primary imagery. Keep logos and UI chrome secondary. Hero crops should preserve recognizable characters or environments and include a dark scrim behind white text. Product art should use a stable aspect ratio so card rows do not shift during image loading.

## 12. Content Voice

Copy should be direct and customer-first. Lead with ownership, compatibility, edition, and price facts. Supporting editorial can discuss preservation and discovery, but purchase actions should remain literal: "Buy now", "Add to cart", or "Install".

## 13. Reusable Patterns

The strongest reusable pattern is the neutral shelf plus vivid media: graphite global shell, gray section field, pale product cards, and one purple action. This works for software libraries, media stores, and archive products where users compare many items repeatedly.

A second pattern is metadata compression. Keep platform, discount, and price aligned in one predictable row so visual art does not displace decision-critical information.

## 14. Agent Implementation Notes

Start with the shell colors and grid dimensions before adding imagery. Implement the card as a stable aspect-ratio media block plus a fixed metadata region. Use the purple gradient only for the primary action in each local context. All hover motion is an implementation recommendation derived from the audited depth language, not a requirement to copy site behavior exactly.

## 15. Anti-Patterns

Do not turn the catalog into a black-only gaming interface; the light gray merchandise field is essential. Avoid oversized rounded cards, neon glows, glass panels, and decorative gradients outside primary actions. Do not hide prices behind hover, and do not use atmosphere-only imagery when users need to inspect the product.
