---
name: Ubisoft
tagline: "A dark, cinematic game catalog with a precise blue action signal."
updated_at: 2026-08-05T01:25:58.507Z
published_at: 2026-08-05T01:25:58.507Z
author: webdesignhot
source_url: https://www.ubisoft.com/en-us
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [gaming, media]
tags: [gaming, publisher, franchises, cinematic, community]
preview_swatch: ["#0d0d0d", "#006ef5", "#ffffff"]
related: [blizzard, gameloft, riot-games]
description: "Ubisoft’s site is best represented as a dark publisher surface: near-black space, bright blue actions, and large franchise imagery create cinematic energy while the navigation and game metadata remain functional. The design should let world-building lead without sacrificing platform, release, and community clarity."

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  muted: text-soft
  border: border

colors:
  bg: '#0d0d0d'
  surface: '#0d0d0d'
  text: '#ffffff'
  brand: '#006ef5'
  on-brand: '#ffffff'
  border: '#2b2b2b'
  text-soft: '#b5b5b5'
  border-soft: '#1c1c1c'

typography:
  display:
    family: '__Open_Sans_8792ad, system-ui, -apple-system, sans-serif'
    weights: [500, 600, 700]
  body:
    family: '__Open_Sans_8792ad, system-ui, -apple-system, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 80, weight: 700, lineHeight: 1.0,  tracking: '-0.03em',  family: display }
    display-lg:      { size: 56, weight: 700, lineHeight: 1.05, tracking: '-0.02em',  family: display }
    h1:              { size: 40, weight: 700, lineHeight: 1.1,  tracking: '-0.018em', family: display }
    h2:              { size: 32, weight: 600, lineHeight: 1.2,  tracking: '-0.012em', family: display }
    h3:              { size: 24, weight: 600, lineHeight: 1.25, tracking: '-0.005em', family: display }
    h4:              { size: 20, weight: 600, lineHeight: 1.3,  tracking: '0',        family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    label:           { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0',        family: body }
    caption:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.02em',   family: body }

radius:
  micro: 2
  sm: 4
  md: 8
  lg: 12
  xl: 16
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

components:
  button-primary: { bg: brand, text: on-brand, padding: '10px 16px', radius: 8 }
  button-ghost:   { bg: transparent, text: text, border: border, padding: '10px 16px', radius: 8 }
  card:           { bg: surface, border: border, radius: 12, padding: 24 }
  input:          { bg: bg, border: border, text: text, radius: 8, padding: '8px 12px' }

lineage:
  summary: "Recorded from the current ubisoft public site during the 2026-08-05 catalog audit."
  influences:
    - name: "Ubisoft public website"
      role: "Source for near-black canvas, blue action color, Open Sans-derived typography, and franchise-led cinematic composition."
      url: https://www.ubisoft.com/en-us
---

## 1. Visual Theme & Atmosphere

Ubisoft’s site is best represented as a dark publisher surface: near-black space, bright blue actions, and large franchise imagery create cinematic energy while the navigation and game metadata remain functional. The design should let world-building lead without sacrificing platform, release, and community clarity. The public composition should feel authored at first glance, then become predictable when a user starts a task. Keep the product or service evidence visible instead of replacing it with abstract decoration.

**Key Characteristics**
- A clear primary action
- A stable content hierarchy
- Readable metadata
- Intentional surface contrast
- Responsive media treatment
- Text equivalents for visual state

## 2. Color Palette & Roles

Use `#0d0d0d` for the cinematic canvas and `#ffffff` for primary copy, correcting the automatic body sample that landed as black on the dark page. `#006ef5` is the bright action and selected-state blue; use it for CTA, links, and focus-adjacent emphasis. Keep surfaces close to black with a `#2b2b2b` divider, and let franchise art carry secondary color. Text over imagery needs a deliberate scrim, not a hope that the crop is dark enough.

Use color roles consistently: background for the page ground, surface for grouped content, text for reading, brand for the primary action, border for structure, and semantic colors for states with text labels. Preview swatches should show the canvas, brand action, and primary reading color.

## 3. Typography Rules

The sampled site uses an Open Sans-derived family for display and body. Keep headings bold and compact, with white text and clear line breaks over dark surfaces. Body and metadata should remain neutral and readable, while game titles can use scale rather than decorative type. Avoid small uppercase text over busy images.

Suggested hierarchy: display-hero for the first promise, display-lg for a major section, h1 for the page task, h2 for grouped content, h3 for cards, body-lg for introductions, body for explanations, body-sm for metadata, label for controls, and caption for timestamps or secondary context. Never use tracking as a substitute for hierarchy.

## 4. Component Stylings

Primary actions use blue with white text and an 8px radius; a white outline action can handle trailer, details, or platform choices. Game cards need artwork, franchise/title, platform, release state, and a stable action. Navigation can use a dark utility bar with a clearly labeled menu; carousels need visible arrows and a position indicator. Search and filters should use dark fields with a high-contrast focus ring.

Treat controls as a system: every filled action needs a hover, pressed, disabled, and focus treatment; every card needs a stable content order; every input needs a label and error state. Use familiar icons inside tool buttons and give unfamiliar icons a tooltip.

## 5. Layout Principles

Use a 1280px dark canvas with full-bleed hero art and a constrained text rail. Keep the hero content in a stable column with a scrim behind it. Game grids can use 12 columns with 16/24px gaps, but editorial/news bands may break to full width. Use 64px navigation and 96px story spacing, and preserve image ratios for franchise cards.

Prefer full-width bands with constrained inner content over decorative nested cards. Stable aspect ratios, explicit grid tracks, and fixed control dimensions keep media and labels from shifting the page as content loads.

## 6. Shapes & Radius Scale

Use 2px or 4px for compact status, 8px for controls, 12px for game cards, and 16px for featured media panels. Use pills only for platform and release labels. Keep hero artwork edges mostly square or lightly softened; the cinematic feeling comes from crop and scale, not pill-shaped containers.

Keep the radius scale intentional: micro controls, standard controls, comfortable cards, relaxed feature panels, and pills only for true categorical selectors. A rounded rectangle should communicate an action or grouped item, not decorate every section.

## 7. Depth & Elevation

Use near-black bands and image scrims as the first depth layers. Selected cards can use a blue outline and a shallow shadow; menus and video dialogs can use a larger shadow with a black scrim. Never use a gradient blob as a substitute for the readable text scrim over artwork.

Elevation should explain interaction or layering. If a surface can be understood through contrast, spacing, and a border, do not add a shadow. Every overlay needs a scrim, a clear title, an escape path, and focus restoration.

## 8. Interaction & Motion

Use 150ms for nav and hover feedback, 240ms for carousel and panel transitions, and 320ms for controlled hero reveals. Trailer autoplay should be opt-in with a visible pause control. Under reduced motion, use a static hero frame, remove parallax, and preserve the selected game state without sliding content underneath focus.

Use motion to confirm an action, expose a relationship, or orient the user. Do not use looping motion to manufacture attention. Make the final state available without animation and ensure reduced-motion preferences remove nonessential transitions.

## 9. Accessibility & A11y

Use white or near-white text on the corrected dark canvas, with blue actions checked for white-on-blue contrast. Focus rings should be a bright outline with a contrasting offset against art and black. Every game image needs alt text, and trailer controls need labels and keyboard support. Game platform and release state should be written beside colored badges.

Use semantic landmarks, a single logical heading order, keyboard-operable controls, and text alternatives for status. Test focus against every surface, including imagery, selected states, dialogs, and disabled-looking controls. Do not use a color difference as the only error, progress, rating, or selection signal.

## 10. Responsive Behavior

At 640px, move hero copy below or beside a stable dark scrim rather than placing tiny type over art. At 1024px, reduce secondary nav and use two game columns. At 1280px, use the full-bleed cinematic hero and 12-column catalog. Maintain 44px controls and fixed poster ratios, especially for game art loaded asynchronously.

Responsive changes should reflow tasks rather than merely scale the desktop composition. Preserve the first useful action, the content subject, and the state explanation at every breakpoint. If a control row cannot fit, group it under a labeled disclosure instead of allowing clipped text.

## 11. Content & Voice

Use cinematic but concrete language. Pair a world or franchise statement with a literal action such as “Discover the game”, “Watch trailer”, or “Choose platform”. Do not make release, rating, or system requirements poetic. Empty states should route to a franchise, genre, or platform path.

Microcopy should state the object, action, and consequence. Keep empty states useful, error messages recoverable, and confirmation messages specific. Avoid claims that cannot be understood or verified from the surrounding interface.

## 12. Dark Mode & Theming

The catalog entry is dark-first. A light variant would need a new surface and image-scrim system rather than a simple color inversion. Keep blue as the action cue and make focus, warning, and release labels distinct from it.

Theme tokens must cover background, surface, text, muted text, border, primary action, primary foreground, focus ring, and semantic states. A theme toggle should preserve the user’s position and announce the current mode; never use an automatic inversion that damages imagery or clinical/product evidence.

## 13. Lineage & Influences

Ubisoft’s visual language borrows from cinematic title sequences and game launch pages: darkness creates atmosphere, full-bleed imagery provides world scale, and blue punctuates the action path. Its usable layer still follows publisher catalog rules for platform and release metadata. It rejects a flat business dashboard while keeping navigation and controls disciplined.

The lineage is a design rationale, not a claim that the source site uses every implementation token in this file. The sampled source URL and recorded production observations remain the authority for brand-specific color and typography decisions.

## 14. Do's and Don'ts

**Do**
- Use dark space to frame game worlds.
- Place text over a tested scrim.
- Use blue for the next action.
- Keep platform and release metadata literal.
- Provide static trailer states.
- Maintain visible carousel controls.
- Use white text on dark surfaces.
- Keep game art at stable ratios.

**Don't**
- Do not use black text on the dark canvas.
- Do not put tiny copy over bright art.
- Do not autoplay video without pause.
- Do not make blue every semantic state.
- Do not hide platform details in an icon.
- Do not make all cards full-bleed.
- Do not use gradient blobs as scrims.
- Do not let motion move content under focus.

## 15. Agent Prompt Guide

### Quick Color Reference

- Background: use the sampled canvas token.
- Foreground: use the sampled reading token.
- Primary: use the brand action token.
- Surface: use the grouped-content token.
- Border: use the quiet structural divider.
- Focus: use a high-contrast visible ring.

### Example Component Prompts

- Create a Ubisoft-like cinematic hero with near-black canvas, full-bleed franchise art, a tested scrim, white title, and blue action.
- Design a dark game card with art, title, platform, release state, and a bright focus-visible action.
- Build a trailer module with poster fallback, explicit play/pause controls, and readable content labels over a black surface.
- Create a dark navigation bar that separates games, news, support, and account actions without turning every item into a CTA.

### Iteration Guide

1. Check every text block against the crop behind it.
2. Verify blue action contrast and focus.
3. Test hero copy at 320px.
4. Remove any decorative gradient used instead of a scrim.
5. Keep release metadata readable without motion.
6. Make carousel position and controls keyboard accessible.
