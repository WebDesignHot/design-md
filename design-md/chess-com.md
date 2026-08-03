---
name: Chess.com
tagline: Focused online chess in warm dark surfaces, dimensional green actions, and a stable tournament-ready board.
updated_at: 2026-08-03T06:39:00.000Z
published_at: 2026-08-03T06:39:00.000Z
author: webdesignhot
source_url: https://www.chess.com/
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [gaming, social]
tags: [gaming, chess, community, competitive, dark, board, green]
preview_swatch: ['#312e2b', '#ffffff', '#81b64c']
related: [twitch, discord, duolingo]
description: 'Chess.com centers play inside warm charcoal and brown-gray surfaces with white Chess Sans display type, green dimensional actions, compact 5-10px controls, and an unmistakable square board. The audited homepage uses a 42px extra-bold hero and 36px section headings, reducing the hero to 28px on mobile. Navigation, lessons, bots, puzzles, events, and community routes share one dense dark shell without competing with the game state.'

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: gold
  muted: text-muted
  border: border
  ring: brand-light

colors:
  bg: '#312e2b'
  bg-deep: '#262421'
  surface: '#3b3937'
  surface-raised: '#4b4847'
  surface-subtle: 'rgba(255,255,255,0.02)'
  text: '#ffffff'
  text-soft: 'rgba(255,255,255,0.85)'
  text-default: 'rgba(255,255,255,0.72)'
  text-muted: 'rgba(255,255,255,0.50)'
  brand: '#81b64c'
  brand-hover: '#5d9948'
  brand-deep: '#45753c'
  brand-light: '#b2e068'
  on-brand: '#17210d'
  board-light: '#ebecd0'
  board-dark: '#779556'
  board-selected: 'rgba(255,255,0,0.50)'
  info: '#008cd1'
  gold: '#f7c631'
  border: 'rgba(255,255,255,0.14)'
  border-strong: 'rgba(255,255,255,0.50)'
  scrim: 'rgba(0,0,0,0.77)'
  focus: '#b2e068'
  success: '#81b64c'
  warning: '#e3aa24'
  danger: '#fa412d'

typography:
  display:
    family: '"Chess Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    weights: [700, 800]
  body:
    family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 600, 700]
  mono:
    family: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
    weights: [400, 600]
  scale:
    hero: { size: 42, weight: 800, lineHeight: 1.143, tracking: '0', family: display }
    hero-mobile: { size: 28, weight: 800, lineHeight: 1.143, tracking: '0', family: display }
    section: { size: 36, weight: 800, lineHeight: 1.11, tracking: '0', family: display }
    card-title: { size: 20, weight: 700, lineHeight: 1.25, tracking: '0', family: display }
    body: { size: 16, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    small: { size: 14, weight: 400, lineHeight: 1.43, tracking: '0', family: body }
    button: { size: 18, weight: 700, lineHeight: 1, tracking: '0', family: display }
    clock: { size: 20, weight: 700, lineHeight: 1, tracking: '0', family: mono, opentype: ['tnum'] }

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96]

radius:
  none: 0
  sm: 5
  md: 10

layout:
  page-width: 1200
  sidebar-width: 170
  prose-width: 640
  header-height: 64
  board-max: 720
  board-ratio: '1 / 1'
  action-width: 400
  grid-gap: 24
  section-gap: 80
  mobile-gutter: 16

components:
  primary-button:
    bg: '#81b64c'
    color: '#17210d'
    height: 64
    radius: 10
    padding: '18px 28px'
    border: '1px solid #45753c'
    shadow: 'inset 0 2px 4px rgba(178,224,104,0.50), inset 0 -2px 4px rgba(69,117,60,0.50), 0 2px 4px rgba(0,0,0,0.14)'
    use: 'Start a game, sign up, or perform the principal play action.'
  secondary-button:
    bg: '#3b3937'
    color: 'rgba(255,255,255,0.85)'
    height: 48
    radius: 10
    padding: '14px 24px'
    border: '1px solid rgba(255,255,255,0.14)'
    shadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 4px rgba(0,0,0,0.14)'
    use: 'Lesson, bot, puzzle, analysis, and lower-priority actions.'
  nav-item:
    bg: '#262421'
    color: 'rgba(255,255,255,0.72)'
    height: 40
    radius: 5
    padding: '10px 12px'
    border: 'none'
    use: 'Play, puzzles, learn, train, watch, and community destinations with icon and label.'
  chess-board:
    light: '#ebecd0'
    dark: '#779556'
    selected: 'rgba(255,255,0,0.50)'
    radius: 5
    ratio: '1 / 1'
    use: 'Stable eight-by-eight game surface with coordinates, last move, legal move, and focus states.'
  game-panel:
    bg: '#3b3937'
    color: '#ffffff'
    radius: 10
    border: '1px solid rgba(255,255,255,0.14)'
    shadow: '0 4px 12px rgba(0,0,0,0.20)'
    padding: '16px'
    use: 'Players, clocks, move list, offer controls, result, and connection state.'
  clock:
    bg: '#262421'
    color: '#ffffff'
    height: 48
    radius: 5
    padding: '12px 16px'
    border: '1px solid rgba(255,255,255,0.14)'
    use: 'Tabular game time with active-side emphasis and non-color status.'

motion:
  duration-fast: 80
  duration-standard: 160
  duration-slow: 260
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  piece-move: 'Move a piece over 160ms only after state validation; update board semantics immediately.'
  reduced-motion: 'Move pieces immediately and retain origin, destination, capture, check, and focus indicators.'

breakpoints:
  mobile: 640
  tablet: 960
  desktop: 1200
  wide: 1440

shadows:
  button: '0 2px 4px rgba(0,0,0,0.14)'
  panel: '0 4px 12px rgba(0,0,0,0.20)'
  dialog: '0 18px 48px rgba(0,0,0,0.42)'
  focus: '0 0 0 3px rgba(178,224,104,0.34)'

accessibility:
  focus-ring: '3px solid #b2e068 with 2px offset'
  touch-target-min: 44
  reduced-motion-honored: true
  board: 'Expose coordinates, piece, color, legal moves, last move, turn, check, and result to assistive technology.'
  clocks: 'Announce meaningful time thresholds without speaking every second.'

lineage:
  summary: 'Recorded from the current Chess.com public homepage at desktop and mobile widths on 2026-08-03.'
  influences:
    - name: Chess.com homepage
      role: 'Primary source for Chess Sans hierarchy, warm dark shell, dimensional green actions, navigation density, and responsive play framing.'
      url: https://www.chess.com/
---

## 1. Visual Theme and Atmosphere

Chess.com creates a focused game room with warm charcoal and brown-gray surfaces rather than pure black. White type, familiar green actions, and a stable beige-green board make the play state immediately recognizable. Navigation remains dense but visually subordinate to the board.

The tone is competitive and approachable. Dimensional buttons recall physical game controls without turning the interface into skeuomorphic decoration.

## 2. Color System

Use `#312e2b` for the page and `#262421` for deeper navigation. White text appears at 85%, 72%, or 50% opacity according to hierarchy. Primary green is `#81b64c`, with `#5d9948` hover and `#45753c` depth. Use dark `#17210d` text on the flat bright green; reserve white text for the darker green states.

The board uses stable light and dark square tokens such as `#ebecd0` and `#779556`. Selection, legal move, check, and last move require distinct patterns or shapes in addition to color.

## 3. Typography

Chess Sans drives display and action text. The audited hero is 42px/48px at 800 and reduces to 28px/32px on mobile. Section headings use 36px/40px. System sans supports dense navigation and metadata.

Use tabular monospace numerals for clocks and ratings where alignment matters. Keep tracking at zero and avoid decorative chess-themed display faces.

## 4. Component Styling

The primary play action is 64px high, 10px rounded, and layered with green inset highlights and a shallow external shadow. Secondary lesson, bot, and puzzle actions use dark 48px controls with the same 10px shape.

The chessboard remains exactly square. A game panel contains players, clocks, move list, connection state, draw or resign controls, and result without overlapping the board.

## 5. Layout Principles

On wide screens, reserve a compact 170px navigation rail, a board up to 720px, and an adjacent game panel. The board is the fixed-format primary surface; labels, clocks, and loading states must never resize it.

Marketing sections can pair a board or product image with a 640px copy column, using 80px section spacing. Do not frame every section as a floating card.

## 6. Shapes and Radius

Use 5px for navigation, clocks, and board corners; 10px for major buttons and game panels. Avoid pills except for brief status filters. Pieces themselves follow the selected set and must not inherit UI shadows or rounded containers.

## 7. Depth and Elevation

Buttons use inset highlights and a short shadow to feel pressable. Game panels use `0 4px 12px rgba(0,0,0,0.20)`. Keep the board flat so square colors and piece silhouettes remain exact.

## 8. Interaction and Motion

Press feedback completes in 80ms and ordinary transitions in 160ms. A validated piece move may animate over 160ms, but board semantics and clocks update immediately. Never delay a competitive clock while waiting for decorative animation.

Reduced motion moves pieces immediately and retains origin, destination, capture, check, and focus indicators.

## 9. Responsive Behavior

On mobile, place the board first at full available width and keep it square. Move player and clock summaries directly above and below; place the move list and secondary controls after the board. The hero reduces to 28px.

Collapse navigation into a labeled menu but retain direct play access. Keep touch squares large enough for accurate moves and prevent page scrolling while a piece drag is active.

## 10. Accessibility

Provide a keyboard-operable board with coordinates, piece identity, color, legal moves, last move, turn, check, and result. Do not expose the board only as a grid of unlabeled squares. Focus uses light green with a clear offset.

Announce meaningful clock thresholds and turn changes without speaking every second. Provide non-drag move input and an accessible move list using standard chess notation.

## 11. Imagery and Media

Use the actual board, pieces, puzzles, lesson positions, player portraits, and event broadcasts. Avoid replacing gameplay with atmospheric tournament imagery when users need to understand the product. Board screenshots must preserve coordinates and readable piece contrast.

## 12. Content Voice

Actions are direct: play, solve, learn, challenge, analyze, watch. Match and connection messages should explain current state and recovery. Competitive results remain factual and avoid shaming language.

## 13. Reusable Patterns

The key reusable pattern is a fixed square primary surface with adjacent live status and controls. It applies to board games, maps, editors, and simulators where dynamic labels must never shift the core canvas.

A second pattern is a dimensional green primary action within an otherwise low-contrast dark shell, creating one unmistakable route to play.

## 14. Agent Implementation Notes

Use a proven chess rules and notation library for legal moves, game state, and PGN rather than implementing chess logic manually. Build board semantics and keyboard movement before drag animation. Define the board with `aspect-ratio: 1 / 1` and stable grid tracks.

Keep server authority, clocks, reconnection, and optimistic movement rules explicit. Visual animation must reconcile to the confirmed game state without duplicate moves.

## 15. Anti-Patterns

Do not hand-roll chess legality, let labels resize the board, hide clocks during reconnect, or rely on drag alone. Avoid neon green glows, black-only backgrounds, rounded cards around every section, and animated pieces that lag the game state. Never encode legal moves, check, or turn solely through color.
