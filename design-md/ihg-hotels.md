---
name: IHG Hotels & Resorts
tagline: Direct hotel booking in deep blue utility bands, terracotta actions, and image-rich destination stories.
updated_at: 2026-08-03T06:34:00.000Z
published_at: 2026-08-03T06:34:00.000Z
author: webdesignhot
source_url: https://www.ihg.com/hotels/us/en/reservation
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [hospitality, marketplace]
tags: [hospitality, travel, booking, hotels, direct-booking, blue, terracotta]
preview_swatch: ['#ffffff', '#1f4456', '#c7370f']
related: [marriott, booking, airbnb]
description: 'IHG Hotels & Resorts gives the booking task visual priority through a deep-blue reservation band, terracotta-orange search actions, compact near-square fields, and direct property imagery. The audited homepage uses Graphik and GraphikWide, a 62px regular-weight desktop statement that reduces to 43px on mobile, white and warm-gray content bands, and a stacked mobile search form that preserves destination, date, room, and guest context.'

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: structure
  muted: text-muted
  border: border
  ring: brand

colors:
  bg: '#ffffff'
  bg-warm: '#f0eeed'
  surface: '#ffffff'
  surface-muted: '#ededed'
  surface-strong: '#dddddd'
  surface-inverse: '#1f4456'
  text: '#000000'
  text-soft: '#3f3d3d'
  text-muted: '#707372'
  text-inverse: '#ffffff'
  brand: '#c7370f'
  brand-deep: '#9f2b0c'
  on-brand: '#ffffff'
  structure: '#1f4456'
  structure-deep: '#153442'
  border: '#dddddd'
  border-strong: '#707372'
  scrim: 'rgba(15,35,45,0.55)'
  focus: '#c7370f'
  success: '#247a52'
  warning: '#8a5a00'
  danger: '#b42318'

typography:
  display:
    family: 'GraphikWide, Graphik, Arial, "Helvetica Neue", sans-serif'
    weights: [400, 600]
  body:
    family: 'Graphik, Arial, "Helvetica Neue", Helvetica, sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
    weights: [400, 600]
  scale:
    hero: { size: 62, weight: 400, lineHeight: 1.15, tracking: '0', family: display }
    hero-mobile: { size: 43, weight: 400, lineHeight: 1.15, tracking: '0', family: display }
    section: { size: 52, weight: 400, lineHeight: 1.15, tracking: '0', family: display }
    section-mobile: { size: 36, weight: 400, lineHeight: 1.18, tracking: '0', family: display }
    card-title: { size: 22, weight: 600, lineHeight: 1.3, tracking: '0', family: body }
    body: { size: 18, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    small: { size: 14, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    label: { size: 14, weight: 600, lineHeight: 1.2, tracking: '0', family: body }
    button: { size: 16, weight: 600, lineHeight: 1, tracking: '0', family: body }

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120]

radius:
  none: 0
  xs: 2
  sm: 3
  md: 5
  lg: 10
  xl: 14

layout:
  page-width: 1265
  prose-width: 760
  header-height: 80
  booking-height: 124
  property-card-min: 280
  grid-gap: 24
  section-gap: 88
  mobile-gutter: 16

components:
  primary-button:
    bg: '#c7370f'
    color: '#ffffff'
    height: 54
    radius: 3
    padding: '16px 28px'
    border: '1px solid #c7370f'
    shadow: 'none'
    use: 'Search hotels, book, or complete the next reservation step.'
  secondary-button:
    bg: '#ffffff'
    color: '#1f4456'
    height: 52
    radius: 3
    padding: '14px 24px'
    border: '1px solid #1f4456'
    use: 'View details, compare rates, and account actions.'
  booking-bar:
    bg: '#1f4456'
    color: '#ffffff'
    radius: 0
    padding: '24px'
    use: 'Destination, date, guests, rooms, rate preference, and one orange search action.'
  booking-field:
    bg: '#ffffff'
    color: '#000000'
    height: 54
    radius: 3
    border: '1px solid #dddddd'
    padding: '12px 14px'
    use: 'Persistent-label reservation input with summary value and explicit edit state.'
  property-card:
    bg: '#ffffff'
    color: '#000000'
    radius: 3
    border: '1px solid #dddddd'
    shadow: '0 2px 8px rgba(31,68,86,0.10)'
    padding: 0
    use: 'Hotel image, brand, location, rate context, and direct booking action.'
  member-rate:
    bg: '#f0eeed'
    color: '#1f4456'
    radius: 3
    border: '1px solid #dddddd'
    padding: '12px 16px'
    use: 'Loyalty benefit or rate context without obscuring the total price.'

motion:
  duration-fast: 100
  duration-standard: 180
  duration-slow: 320
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  booking-update: 'Update price and availability in place while preserving entered search criteria.'
  reduced-motion: 'Disable destination parallax and card translation; preserve loading and selection feedback.'

breakpoints:
  mobile: 640
  tablet: 900
  desktop: 1200
  wide: 1440

shadows:
  card: '0 2px 8px rgba(31,68,86,0.10)'
  dropdown: '0 8px 24px rgba(31,68,86,0.18)'
  dialog: '0 18px 48px rgba(15,35,45,0.30)'
  focus: '0 0 0 3px rgba(199,55,15,0.28)'

accessibility:
  focus-ring: '3px solid #c7370f with 2px offset; use white inside the blue booking band'
  touch-target-min: 44
  reduced-motion-honored: true
  pricing: 'Expose nightly rate, taxes, fees, currency, cancellation terms, and total in text.'
  dates: 'Use labeled date controls with keyboard navigation and a readable text summary.'

lineage:
  summary: 'Recorded from the current IHG Hotels & Resorts reservation homepage at desktop and mobile widths on 2026-08-03.'
  influences:
    - name: IHG Hotels & Resorts reservation homepage
      role: 'Primary source for Graphik typography, blue booking structure, terracotta actions, property imagery, and stacked mobile search.'
      url: https://www.ihg.com/hotels/us/en/reservation
---

## 1. Visual Theme and Atmosphere

IHG is a practical global hotel marketplace. Deep blue creates a stable reservation shell, terracotta orange identifies search and booking, and white or warm-gray bands make property imagery easy to compare. The interface feels direct and established rather than editorially precious.

Hotel and destination photographs carry the emotional promise. The UI around them remains restrained so dates, rooms, rate terms, and loyalty context stay legible.

## 2. Color System

Use white for most content, `#f0eeed` for warm supporting bands, and `#1f4456` for the booking and navigation structure. The primary action is `#c7370f` with white text. Body copy is black; `#707372` supports secondary rate or location details.

Do not reuse orange for warnings. Booking errors and alerts require separate semantic colors and text. Deep blue can frame search but should not become a full-page dark theme.

## 3. Typography

Graphik is the primary interface face, with GraphikWide for selected display moments. The audited desktop statement is 62px/71px at 400, reducing to 43px/49px on mobile. Section headings reach 52px desktop and 36px mobile.

Body copy is 18px with normal tracking. Keep booking labels at 14px and rate values at 16-18px. Use tabular numerals where dates, guest counts, points, and prices align.

## 4. Component Styling

Primary search and booking controls are 52-54px high, orange, and only 3px rounded. Booking fields share the same height and radius, with persistent labels and clear summary values. Property cards place full-width real hotel imagery above location, rate, and action content.

Member-rate treatments use warm gray and blue copy. They must supplement, not replace, the comparable total price and cancellation terms.

## 5. Layout Principles

The booking task comes first. On desktop, arrange destination, dates, guests, rooms, and rate preference in one deep-blue band with a single orange action. Center later content around 1265px with 24px property-grid gaps and 80-96px section spacing.

Keep destination storytelling in full-width image or text bands. Do not nest the booking tool inside an ornamental card or bury it below a marketing hero.

## 6. Shapes and Radius

IHG is close to square. Use 3px for controls and property cards, 5px for minor utility panels, and 10-14px only for the stacked mobile booking container or large media. Avoid pills for dates, rooms, and rate actions.

## 7. Depth and Elevation

Use low card elevation: `0 2px 8px rgba(31,68,86,0.10)`. Menus and date pickers may use stronger 8px/24px shadows. Maintain a clear boundary between the booking band and page rather than making every field independently float.

## 8. Interaction and Motion

Field and button feedback should complete in 100-180ms. Availability updates may take longer, but preserve all entered criteria and expose a visible loading state. Do not reset dates or guest counts after a recoverable error.

Reduced motion removes image parallax and card translation. Calendar focus, selected dates, and loading state remain visible and announced.

## 9. Responsive Behavior

On mobile, stack reservation fields inside one coherent white search surface over or below the deep-blue band. Preserve destination, check-in, check-out, room, and guest summaries; do not collapse them into ambiguous icons. The orange search action becomes full-width.

Property cards become a single column with stable image ratios. The display heading drops to 43px and section headings to 36px without viewport-based font scaling.

## 10. Accessibility

Date pickers require keyboard navigation, labeled previous and next month controls, announced selected ranges, and a readable text alternative. Focus should be orange on pale surfaces and white inside the blue band.

Expose nightly rate, total, taxes, fees, currency, cancellation, and accessibility attributes as text. Never communicate member savings through color or a crossed-out number alone.

## 11. Imagery and Media

Use actual hotel rooms, exteriors, pools, restaurants, and destination context. Crops should let users inspect the property rather than present dark, atmospheric fragments. Include multiple representative images at a stable aspect ratio and reserve logos for brand identification.

## 12. Content Voice

Use literal travel and booking language: destination, dates, guests, rooms, rate, total, and cancellation. Promotional copy can emphasize welcome and experience, but reservation controls must remain unambiguous and locally formatted.

## 13. Reusable Patterns

The strongest pattern is a contrasting booking utility band above image-led inventory. It works for hospitality, transport, and reservation products where structured input must precede discovery.

A second pattern is compact loyalty context adjacent to transparent pricing, helping members understand value without hiding standard options.

## 14. Agent Implementation Notes

Implement the reservation state model before imagery. Keep every field controlled, preserve criteria across navigation, and render a complete text summary for dates and guests. Use orange only for the primary next action in the booking flow.

Treat 62px and 43px as breakpoint-specific display sizes. Use intrinsic dimensions and responsive sources for hotel imagery to prevent layout shift.

## 15. Anti-Patterns

Do not hide the booking tool behind a hero button, round every field into pills, or substitute destination atmosphere for inspectable hotel images. Avoid opaque fees, preselected extras, ambiguous date icons, and membership-only price displays. Never clear a valid search after an API or availability error.
