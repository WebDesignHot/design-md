---
name: Blizzard Entertainment
tagline: Cinematic franchise art on midnight navy, framed by cool blue actions and rounded high-confidence controls.
updated_at: 2026-08-03T05:54:39.000Z
published_at: 2026-08-03T05:54:39.000Z
author: webdesignhot
source_url: https://www.blizzard.com/en-us/
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [gaming]
tags: [gaming, dark, cinematic, blue, franchises, media, rounded]
preview_swatch: ['#131928', '#38a8ff', '#ffffff']
related: [riot-games, epic-games, playstation]
description: 'Blizzard Entertainment presents its game franchises through a midnight-navy cinematic shell, full-bleed key art, and bright cool-blue actions. The audited homepage pairs Poppins headings with Archivo body copy, broad 100px-radius calls to action, restrained translucent secondary controls, and tall game cards. The system is dramatic at the media layer but quiet in its navigation and metadata.'

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  muted: text-muted
  border: border
  ring: brand

colors:
  bg: '#131928'
  bg-deep: '#0a0d15'
  surface: '#20273c'
  surface-raised: '#323a48'
  surface-soft: 'rgba(208,233,255,0.20)'
  text: '#ffffff'
  text-muted: 'rgba(255,255,255,0.70)'
  text-faint: 'rgba(255,255,255,0.50)'
  brand: '#38a8ff'
  brand-start: '#1888ef'
  brand-end: '#009fe9'
  brand-soft: '#d0e9ff'
  on-brand: '#ffffff'
  border: 'rgba(255,255,255,0.15)'
  border-strong: 'rgba(208,233,255,0.42)'
  scrim: 'rgba(10,13,21,0.78)'
  shadow-card: 'rgba(0,0,0,0.35)'
  success: '#43c59e'
  warning: '#f0b44d'
  danger: '#ef5a67'
  info: '#38a8ff'

typography:
  display:
    family: '"Poppins", "Helvetica Neue", Arial, sans-serif'
    weights: [500, 600, 700]
  body:
    family: '"Archivo", "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
    weights: [400, 600]
  scale:
    hero: { size: 48, weight: 600, lineHeight: 1.2, tracking: '0', family: display }
    section: { size: 36, weight: 600, lineHeight: 1.12, tracking: '0', family: display }
    card-title: { size: 20, weight: 600, lineHeight: 1.2, tracking: '0', family: display }
    body: { size: 16, weight: 400, lineHeight: 1.55, tracking: '0', family: body }
    small: { size: 14, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    nav: { size: 14, weight: 500, lineHeight: 1, tracking: '0', family: body }
    button: { size: 24, weight: 600, lineHeight: 1, tracking: '0', family: display }

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]

radius:
  none: 0
  sm: 4
  md: 8
  lg: 16
  pill: 100

layout:
  page-width: 1440
  prose-width: 720
  header-height: 64
  game-card-width: 272
  game-card-height: 499
  grid-min: 248
  grid-gap: 24
  hero-min-height: 640

components:
  primary-button:
    bg: 'linear-gradient(135deg, rgba(24,136,239,0.90), rgba(0,159,233,0.90))'
    color: '#ffffff'
    height: 60
    radius: 100
    padding: '16px 32px'
    border: '2px solid rgba(255,255,255,0.15)'
    use: 'Primary buy, play, or account action.'
  secondary-button:
    bg: 'rgba(208,233,255,0.20)'
    color: '#ffffff'
    height: 60
    radius: 100
    padding: '16px 32px'
    border: '2px solid rgba(255,255,255,0.15)'
    use: 'Learn-more action over dark or photographic backgrounds.'
  game-card:
    bg: '#323a48'
    color: '#ffffff'
    radius: 4
    border: '1px solid rgba(255,255,255,0.15)'
    shadow: '0 8px 24px rgba(0,0,0,0.35)'
    padding: 0
    use: 'Tall franchise art with a compact title and platform block.'
  header:
    bg: '#0a0d15'
    color: 'rgba(255,255,255,0.70)'
    height: 64
    use: 'Quiet global navigation above cinematic content.'
  hero:
    bg: '#0a0d15'
    color: '#ffffff'
    use: 'Full-bleed franchise key art with a directional navy scrim.'
  text-link:
    bg: 'transparent'
    color: '#38a8ff'
    use: 'Inline and card-level detail action.'
  text-input:
    bg: '#20273c'
    color: '#ffffff'
    height: 48
    radius: 4
    border: '1px solid rgba(255,255,255,0.15)'
    padding: '12px 16px'
    use: 'Account and search field with a cool-blue focus ring.'

motion:
  duration-fast: 140
  duration-standard: 220
  duration-slow: 420
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  card-hover: 'Scale media to 1.02 and raise the card by 3px over 220ms.'
  hero-change: 'Crossfade artwork and copy over 420ms without moving the page frame.'
  reduced-motion: 'Replace scaling and crossfades with immediate state changes.'

breakpoints:
  mobile: 640
  tablet: 960
  desktop: 1280
  wide: 1600

shadows:
  card: '0 8px 24px rgba(0,0,0,0.35)'
  card-hover: '0 14px 36px rgba(0,0,0,0.45)'
  modal: '0 24px 64px rgba(0,0,0,0.55)'
  focus: '0 0 0 3px rgba(56,168,255,0.38)'

accessibility:
  focus-ring: '3px solid rgba(56,168,255,0.55) with 2px offset'
  touch-target-min: 44
  reduced-motion-honored: true
  hero-copy: 'Apply a directional scrim behind all text over franchise art.'
  carousel: 'Provide labeled controls, pause behavior, and stable focus after slide changes.'

lineage:
  summary: 'Recorded from the current Blizzard Entertainment homepage and public game catalog.'
  influences:
    - name: Blizzard Entertainment homepage
      role: 'Primary visual source for typography, color, controls, cards, and responsive behavior.'
      url: https://www.blizzard.com/en-us/
    - name: Blizzard games directory
      role: 'Catalog context for franchise imagery and platform metadata.'
      url: https://www.blizzard.com/en-us/games
---

## 1. Visual Theme and Atmosphere

Blizzard builds the interface around franchise media. A midnight-navy shell (`#131928`) and deeper masthead (`#0a0d15`) create a stable frame while game key art supplies color, texture, and motion. UI surfaces remain cool and translucent so they do not compete with characters and environments.

The brand signal is a clear sky blue (`#38a8ff`) used for links, focus, and action emphasis. Primary calls to action blend `#1888ef` into `#009fe9`; secondary controls use a pale-blue translucent fill.

## 2. Color System

Use white for display text and 70% white for body copy. Reserve 50% white for tertiary metadata at sufficiently large sizes. Cards lift to `#323a48`, while ordinary navigation and forms sit on `#20273c`.

Never place blue actions directly over uncontrolled bright art. Add a directional `rgba(10,13,21,0.78)` scrim or an opaque navy local surface first. Borders are cool white at 15% opacity and should remain visible on both base and raised surfaces.

## 3. Typography

Poppins carries headings and actions; Archivo carries navigation and body copy. The observed desktop hierarchy uses a 48px, 600-weight hero, 36px section headings, and 20px game-card titles. Tracking remains normal at every level.

The 24px Poppins button label is intentionally assertive and needs the 60px control height. Do not squeeze this size into compact utility controls; those should use Archivo at 14-16px.

## 4. Component Styling

Primary and secondary calls to action are broad 60px capsules with 32px horizontal padding and a 2px translucent border. The primary uses the blue gradient; the secondary uses a 20% pale-blue wash. Both keep white Poppins labels.

Game cards are tall, near 272 by 499px on desktop, with 4px corners and artwork occupying most of the surface. Place title and platform details in a stable lower block rather than over unpredictable art.

## 5. Layout Principles

Use full-width hero and franchise bands with a constrained 1440px content alignment. Card grids use 248px minimum tracks, 24px gutters, and four or five columns depending on available width. Keep section spacing generous at 64-96px so each franchise can establish a new visual scene.

Avoid placing the main experience inside a decorative container. The cinematic media should reach the viewport edges, while copy aligns to the same inner grid as the catalog below.

## 6. Shapes and Radius

The system combines nearly square cards with pill-shaped commands. Use 4px for cards, inputs, and structural surfaces. Use the 100px radius only for prominent calls to action. Small labels should not become capsules unless they represent a selectable state.

## 7. Depth and Elevation

Cards use a strong but compact `0 8px 24px rgba(0,0,0,0.35)` shadow because they sit on a very dark canvas. Hover can deepen this to `0 14px 36px rgba(0,0,0,0.45)`. Do not apply shadow to full-width bands; separate those through imagery and surface color.

## 8. Interaction and Motion

Use 140ms for color and outline responses, 220ms for card elevation, and up to 420ms for a user-controlled hero crossfade. Card media may scale to 1.02 inside an overflow-hidden frame, but the outer card dimensions must not change.

When reduced motion is requested, switch states immediately. Carousel controls must remain available and should not depend on autoplay for access to content.

## 9. Responsive Behavior

Below 960px, reduce the catalog to two columns and simplify the global navigation. Below 640px, use one full-width card or a horizontally scrollable rail with a visible next item. Hero copy should move into a protected lower-left area and use a smaller 36px heading without viewport-based font scaling.

Primary and secondary actions may stack on mobile. Preserve 44px minimum touch targets and keep enough bottom spacing that browser chrome does not obscure the last action.

## 10. Accessibility

Franchise artwork needs alt text describing the game and scene only when the image adds information; decorative extensions of a labeled card should use empty alt text. White copy over art always requires a tested scrim. Blue cannot be the sole selected-state signal; add an outline, icon, or text label.

Provide play/pause controls for moving heroes, labeled previous/next controls, and keyboard-reachable cards. Keep focus on the activated control after slide changes rather than moving it into new content.

## 11. Imagery and Media

Use real franchise key art, gameplay scenes, and product cover art. Preserve recognizable subjects and avoid arbitrary center crops. Wide hero images should provide negative space for the text block or be paired with a directional navy gradient.

Do not blur the primary game imagery. Users should be able to identify the franchise immediately from the first viewport.

## 12. Content Voice

Headlines are brief and declarative. Calls to action use concrete verbs such as "Buy now", "Play now", and "Learn more". Supporting copy can be cinematic, but platform, edition, availability, and account requirements should remain plain and scannable.

## 13. Reusable Patterns

The main reusable pattern is the cinematic band: full-bleed art, controlled dark scrim, 48px heading, short body copy, and one or two pill actions. It is suitable for entertainment catalogs and launch campaigns where the media is the product.

The second pattern is the tall franchise card. Keep the art ratio stable and reserve a separate metadata floor so a grid can mix very different visual worlds without losing alignment.

## 14. Agent Implementation Notes

Build the navy shell and typography first, then insert approved artwork with explicit aspect ratios. Test every text-over-image state independently; one scrim value will not suit every frame. The hover lift and image scale are implementation recommendations consistent with the audited hierarchy and must be disabled when reduced motion is active.

## 15. Anti-Patterns

Do not fill the page with blue gradients; the gradient belongs to primary actions. Avoid glass panels, oversized corner radii on cards, and atmospheric images that hide the actual games. Do not place white text directly over bright key art, animate a hero without controls, or crop important characters to preserve an arbitrary container size.
