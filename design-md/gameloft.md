---
name: Gameloft
tagline: "Blue-led mobile game discovery with a catalog built for play."
updated_at: 2026-08-05T01:28:01.824Z
published_at: 2026-08-05T01:28:01.824Z
author: webdesignhot
source_url: https://www.gameloft.com/
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [gaming, media]
tags: [gaming, mobile, publisher, franchises, entertainment]
preview_swatch: ["#ffffff", "#0095f3", "#151515"]
related: [supercell, ubisoft, nintendo]
description: "Gameloft’s public design reads as a game publisher and discovery surface: a clean white base, bright blue action color, bold sans typography, and room for franchise artwork to provide the emotion. The interface should make games discoverable while letting characters, platforms, and release states remain explicit."

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  muted: text-soft
  border: border

colors:
  bg: '#ffffff'
  surface: '#ffffff'
  text: '#151515'
  brand: '#0095f3'
  on-brand: '#ffffff'
  border: '#dce1e7'
  text-soft: '#5e6873'
  border-soft: '#eef1f4'

typography:
  display:
    family: '"Montserrat Variable", system-ui, -apple-system, sans-serif'
    weights: [500, 600, 700]
  body:
    family: '"Montserrat Variable", system-ui, -apple-system, sans-serif'
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
  summary: "Recorded from the current gameloft public site during the 2026-08-05 catalog audit."
  influences:
    - name: "Gameloft public website"
      role: "Source for Montserrat Variable typography, bright blue action color, white catalog ground, and game-first discovery structure."
      url: https://www.gameloft.com/
---

## 1. Visual Theme & Atmosphere

Gameloft’s public design reads as a game publisher and discovery surface: a clean white base, bright blue action color, bold sans typography, and room for franchise artwork to provide the emotion. The interface should make games discoverable while letting characters, platforms, and release states remain explicit. The public composition should feel authored at first glance, then become predictable when a user starts a task. Keep the product or service evidence visible instead of replacing it with abstract decoration.

**Key Characteristics**
- A clear primary action
- A stable content hierarchy
- Readable metadata
- Intentional surface contrast
- Responsive media treatment
- Text equivalents for visual state

## 2. Color Palette & Roles

Use `#ffffff` as the page canvas and `#151515` as the durable text color. `#0095f3` is the sampled blue action and link color; use it for game discovery, platform actions, and selected navigation. Let game artwork bring secondary colors, but keep the chrome neutral. Use a light gray border for filters and cards, and write release, platform, and rating semantics next to any colored badge.

Use color roles consistently: background for the page ground, surface for grouped content, text for reading, brand for the primary action, border for structure, and semantic colors for states with text labels. Preview swatches should show the canvas, brand action, and primary reading color.

## 3. Typography Rules

Montserrat Variable is the sampled display and body family. Use bold display weights for franchise and game titles, with regular body text for platform, release, and description metadata. The hierarchy should feel energetic through artwork and scale rather than through excessive uppercase or tracking. Keep game names intact on mobile and use compact labels only for platform or status.

Suggested hierarchy: display-hero for the first promise, display-lg for a major section, h1 for the page task, h2 for grouped content, h3 for cards, body-lg for introductions, body for explanations, body-sm for metadata, label for controls, and caption for timestamps or secondary context. Never use tracking as a substitute for hierarchy.

## 4. Component Stylings

Primary game actions use blue with white text and an 8px radius; outline and dark actions can handle trailers, details, or platform selection. Game cards need artwork, title, platform, release state, and a stable action. Franchise filters and platform badges should be compact but text-labeled. Video or trailer previews need a poster frame and explicit play control. Navigation should separate games, news, careers, and support.

Treat controls as a system: every filled action needs a hover, pressed, disabled, and focus treatment; every card needs a stable content order; every input needs a label and error state. Use familiar icons inside tool buttons and give unfamiliar icons a tooltip.

## 5. Layout Principles

Use a 1280px catalog canvas with a responsive 12-column game grid. Hero artwork can span the full width, but metadata and CTA should sit in a stable text region rather than on unreadable image areas. Use 16/24px card gaps and 64/96px story bands. Preserve cover ratios for portrait and landscape game art, and keep the first visible game row stable while images load.

Prefer full-width bands with constrained inner content over decorative nested cards. Stable aspect ratios, explicit grid tracks, and fixed control dimensions keep media and labels from shifting the page as content loads.

## 6. Shapes & Radius Scale

Use 4px for badges, 8px for buttons and search, 12px for game cards, and 16px for a featured franchise panel. Pills are appropriate for platform and release-state labels. Do not make cover artwork itself overly rounded; the image should retain a game-box or poster quality.

Keep the radius scale intentional: micro controls, standard controls, comfortable cards, relaxed feature panels, and pills only for true categorical selectors. A rounded rectangle should communicate an action or grouped item, not decorate every section.

## 7. Depth & Elevation

Use flat white and image composition as the main depth system. Hovered game cards may use a blue outline and a small shadow; trailers and dialogs can use stronger elevation with a dark scrim. Avoid adding shadows to every art tile because the artwork already provides visual weight.

Elevation should explain interaction or layering. If a surface can be understood through contrast, spacing, and a border, do not add a shadow. Every overlay needs a scrim, a clear title, an escape path, and focus restoration.

## 8. Interaction & Motion

Use 150ms for hover and filter feedback, 240ms for carousels or disclosure, and 320ms for a featured game reveal. Auto-playing trailers need pause and reduced-motion alternatives; prefer poster frames until the user activates playback. Under reduced motion, remove parallax and preserve the final selected game state.

Use motion to confirm an action, expose a relationship, or orient the user. Do not use looping motion to manufacture attention. Make the final state available without animation and ensure reduced-motion preferences remove nonessential transitions.

## 9. Accessibility & A11y

Use dark text on white and verify white text on blue actions. Every game image and trailer poster needs meaningful alt text or a clear title. Platform and release badges require text, not just icons or colors. Carousels need buttons, a visible position, and keyboard control; focus must remain visible over artwork through a solid outline or scrim.

Use semantic landmarks, a single logical heading order, keyboard-operable controls, and text alternatives for status. Test focus against every surface, including imagery, selected states, dialogs, and disabled-looking controls. Do not use a color difference as the only error, progress, rating, or selection signal.

## 10. Responsive Behavior

At 640px, use one game column with a compact metadata row and keep the primary action below the title. At 1024px, use two columns and collapse secondary filters. At 1280px, use the full game grid and featured band. Maintain 44px controls, stable art ratios, and a poster fallback for every video.

Responsive changes should reflow tasks rather than merely scale the desktop composition. Preserve the first useful action, the content subject, and the state explanation at every breakpoint. If a control row cannot fit, group it under a labeled disclosure instead of allowing clipped text.

## 11. Content & Voice

Use energetic but concrete game language. Prefer “Explore game”, “Watch trailer”, “Choose platform”, and “Get the game”. Name genre, device, release state, and content rating where relevant. Empty states should offer a franchise or platform path instead of a generic no-results message.

Microcopy should state the object, action, and consequence. Keep empty states useful, error messages recoverable, and confirmation messages specific. Avoid claims that cannot be understood or verified from the surrounding interface.

## 12. Dark Mode & Theming

The public system is light-first with blue action and artwork-led color. Do not darken the entire page just because a trailer uses a dark image. A dark theme would need separate text, card, and focus tokens and must preserve game metadata contrast.

Theme tokens must cover background, surface, text, muted text, border, primary action, primary foreground, focus ring, and semantic states. A theme toggle should preserve the user’s position and announce the current mode; never use an automatic inversion that damages imagery or clinical/product evidence.

## 13. Lineage & Influences

Gameloft sits at the intersection of mobile game storefronts and publisher brand sites. The neutral structure leaves room for franchise art, while the blue action system keeps discovery and platform choices legible. It rejects a dense store-only treatment in favor of a publisher catalog that can carry news and game worlds together.

The lineage is a design rationale, not a claim that the source site uses every implementation token in this file. The sampled source URL and recorded production observations remain the authority for brand-specific color and typography decisions.

## 14. Do's and Don'ts

**Do**
- Let game art carry the emotion.
- Show platform and release state.
- Use blue for discovery actions.
- Keep poster ratios stable.
- Provide a static trailer frame.
- Label every carousel control.
- Keep game titles intact.
- Use text with every badge.

**Don't**
- Do not put copy on unreadable artwork.
- Do not autoplay trailers without pause.
- Do not use color alone for platform.
- Do not flatten all franchise art into one crop.
- Do not hide release state in hover.
- Do not add shadows to every game tile.
- Do not make the catalog a generic SaaS grid.
- Do not shrink mobile actions below 44px.

## 15. Agent Prompt Guide

### Quick Color Reference

- Background: use the sampled canvas token.
- Foreground: use the sampled reading token.
- Primary: use the brand action token.
- Surface: use the grouped-content token.
- Border: use the quiet structural divider.
- Focus: use a high-contrast visible ring.

### Example Component Prompts

- Create a Gameloft-like game catalog hero with a white canvas, a full-width franchise image, bold title, blue action, and explicit platform metadata.
- Design a game card with stable cover art, title, platform, release state, and “Explore game” action.
- Build a trailer panel with a poster frame, play button, pause alternative, and readable content label.
- Create a platform filter row that uses text badges and a clear selected state without recoloring the whole page.

### Iteration Guide

1. Check all metadata against the artwork crop.
2. Test the poster fallback with reduced motion.
3. Keep blue actions consistent across cards.
4. Verify platform labels without icon knowledge.
5. Make the first game row stable while loading.
6. Remove card shadows that do not clarify interaction.
