---
name: Supercell
tagline: "Character-led mobile game worlds with a bright, direct rhythm."
updated_at: 2026-08-05T01:26:02.912Z
published_at: 2026-08-05T01:26:02.912Z
author: webdesignhot
source_url: https://supercell.com/en/
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [gaming, media]
tags: [gaming, mobile, characters, playful, publisher]
preview_swatch: ["#ffffff", "#0f62d6", "#1c1c1c"]
related: [gameloft, riot-games, nintendo]
description: "Supercell uses a clean white public canvas and strong character artwork to make mobile game worlds feel immediate. A blue action signal and custom headline/body families provide structure, while the personality comes from characters, game scenes, and generous media. The system should be playful in imagery but exact about titles, platforms, and community actions."

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  muted: text-soft
  border: border

colors:
  bg: '#ffffff'
  surface: '#f3f5f7'
  text: '#1c1c1c'
  brand: '#0f62d6'
  on-brand: '#ffffff'
  border: '#dfe3e8'
  text-soft: '#626a73'
  border-soft: '#eef1f4'

typography:
  display:
    family: 'SupercellHeadline-Heavy, system-ui, -apple-system, sans-serif'
    weights: [500, 600, 700]
  body:
    family: 'SupercellText-Regular, system-ui, -apple-system, sans-serif'
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
  summary: "Recorded from the current supercell public site during the 2026-08-05 catalog audit."
  influences:
    - name: "Supercell public website"
      role: "Source for Supercell headline/body type, blue action color, white canvas, and character-led game composition."
      url: https://supercell.com/en/
---

## 1. Visual Theme & Atmosphere

Supercell uses a clean white public canvas and strong character artwork to make mobile game worlds feel immediate. A blue action signal and custom headline/body families provide structure, while the personality comes from characters, game scenes, and generous media. The system should be playful in imagery but exact about titles, platforms, and community actions. The public composition should feel authored at first glance, then become predictable when a user starts a task. Keep the product or service evidence visible instead of replacing it with abstract decoration.

**Key Characteristics**
- A clear primary action
- A stable content hierarchy
- Readable metadata
- Intentional surface contrast
- Responsive media treatment
- Text equivalents for visual state

## 2. Color Palette & Roles

Use white as the main canvas and `#1c1c1c` for body copy, correcting the overly black automatic sample. `#0f62d6` is the primary blue action and link cue; use it for game discovery and platform actions. A pale neutral surface can hold game metadata while character art supplies the expressive palette. Avoid turning blue into a background for long sections and pair all colorful status with text.

Use color roles consistently: background for the page ground, surface for grouped content, text for reading, brand for the primary action, border for structure, and semantic colors for states with text labels. Preview swatches should show the canvas, brand action, and primary reading color.

## 3. Typography Rules

SupercellHeadline-Heavy is the sampled display family and SupercellText-Regular is the sampled body family. Use the headline face for short game or world statements, not paragraphs. Body text should explain game mode, platform, and community context in a calm readable rhythm. The contrast between heavy headline and regular body carries personality without needing decorative effects.

Suggested hierarchy: display-hero for the first promise, display-lg for a major section, h1 for the page task, h2 for grouped content, h3 for cards, body-lg for introductions, body for explanations, body-sm for metadata, label for controls, and caption for timestamps or secondary context. Never use tracking as a substitute for hierarchy.

## 4. Component Stylings

Primary actions use blue with white text and an 8px radius; secondary actions can be white with a dark border or dark filled where the art needs contrast. Game cards should pair a stable character image with title, platform, mode, and action. Social or community links need familiar icons plus text. Video panels require a poster frame and explicit play control. Navigation can stay minimal, with game worlds and support clearly separated.

Treat controls as a system: every filled action needs a hover, pressed, disabled, and focus treatment; every card needs a stable content order; every input needs a label and error state. Use familiar icons inside tool buttons and give unfamiliar icons a tooltip.

## 5. Layout Principles

Use a 1280px canvas with broad media bands and a 12-column game grid. Let character art run wide, but keep title, platform, and CTA in a stable text zone. Use 16/24px card gaps and 64/96px section intervals. Preserve game art ratio and avoid cropping character faces or gameplay HUD into the fold.

Prefer full-width bands with constrained inner content over decorative nested cards. Stable aspect ratios, explicit grid tracks, and fixed control dimensions keep media and labels from shifting the page as content loads.

## 6. Shapes & Radius Scale

Use 4px for compact badges, 8px for buttons and controls, 12px for game cards, and 16px for featured world panels. Pills work for platform or game-mode labels, but the core action should be a rounded rectangle rather than a novelty shape. Let the illustration carry softness.

Keep the radius scale intentional: micro controls, standard controls, comfortable cards, relaxed feature panels, and pills only for true categorical selectors. A rounded rectangle should communicate an action or grouped item, not decorate every section.

## 7. Depth & Elevation

Use flat white sections and character media as the primary composition. A selected game card can gain a blue outline; use a shallow shadow only for media overlays or menus. Avoid card stacks that make the playful world feel like a generic dashboard.

Elevation should explain interaction or layering. If a surface can be understood through contrast, spacing, and a border, do not add a shadow. Every overlay needs a scrim, a clear title, an escape path, and focus restoration.

## 8. Interaction & Motion

Use 150ms for controls, 240ms for card and menu feedback, and 320ms for a controlled character or world reveal. Video and animated artwork should default to a poster frame and expose pause. Honor reduced motion by disabling parallax and repeated loops while preserving the finished art and selected state.

Use motion to confirm an action, expose a relationship, or orient the user. Do not use looping motion to manufacture attention. Make the final state available without animation and ensure reduced-motion preferences remove nonessential transitions.

## 9. Accessibility & A11y

Use dark body text on white and verify white text on blue actions. Character art and game screenshots need useful alt text that names the game or scene. Social icons must have labels, and video controls must be keyboard-operable. Platform and game mode should appear as text labels so the playful art does not carry the whole meaning.

Use semantic landmarks, a single logical heading order, keyboard-operable controls, and text alternatives for status. Test focus against every surface, including imagery, selected states, dialogs, and disabled-looking controls. Do not use a color difference as the only error, progress, rating, or selection signal.

## 10. Responsive Behavior

At 640px, stack game world copy and media while keeping the action directly under the title. At 1024px, use two game columns and collapse secondary navigation. At 1280px, let the world media run full width beside a readable text rail. Keep 44px touch targets, stable art ratios, and face-safe image crops.

Responsive changes should reflow tasks rather than merely scale the desktop composition. Preserve the first useful action, the content subject, and the state explanation at every breakpoint. If a control row cannot fit, group it under a labeled disclosure instead of allowing clipped text.

## 11. Content & Voice

Use short, lively, concrete copy. Prefer “Play now”, “Meet the characters”, “Explore the game”, and “See updates” over vague hype. Name platform and mode whenever the action depends on them. Empty states should point to a game world or recent update, not a blank mascot.

Microcopy should state the object, action, and consequence. Keep empty states useful, error messages recoverable, and confirmation messages specific. Avoid claims that cannot be understood or verified from the surrounding interface.

## 12. Dark Mode & Theming

The entry is light-first and media-led. A dark theme should be a separate game-world surface with explicit text, selection, and media-scrim tokens. Do not darken character art or use blue as the only way to identify interactive elements.

Theme tokens must cover background, surface, text, muted text, border, primary action, primary foreground, focus ring, and semantic states. A theme toggle should preserve the user’s position and announce the current mode; never use an automatic inversion that damages imagery or clinical/product evidence.

## 13. Lineage & Influences

Supercell borrows from character publishing, mobile game stores, and animated entertainment. The white framework gives game worlds room to be loud while the custom type keeps headlines unmistakable. It rejects dense utility chrome and treats the game, characters, and community as the primary evidence.

The lineage is a design rationale, not a claim that the source site uses every implementation token in this file. The sampled source URL and recorded production observations remain the authority for brand-specific color and typography decisions.

## 14. Do's and Don'ts

**Do**
- Let characters and gameplay be inspectable.
- Keep the action close to the game title.
- Use custom display type sparingly.
- Label platform and game mode.
- Use poster fallbacks for video.
- Protect faces in responsive crops.
- Keep social actions labeled.
- Use blue as a focused cue.

**Don't**
- Do not let art hide the game title.
- Do not use hype as the only content.
- Do not autoplay loops without pause.
- Do not make blue every status.
- Do not crop character faces at mobile widths.
- Do not put utility chrome over the focal art.
- Do not rely on mascots for empty-state meaning.
- Do not reduce touch targets for playful density.

## 15. Agent Prompt Guide

### Quick Color Reference

- Background: use the sampled canvas token.
- Foreground: use the sampled reading token.
- Primary: use the brand action token.
- Surface: use the grouped-content token.
- Border: use the quiet structural divider.
- Focus: use a high-contrast visible ring.

### Example Component Prompts

- Create a Supercell-like game world hero with white canvas, bold custom headline, character artwork, blue action, and explicit game mode.
- Design a game card with a face-safe image crop, title, platform, mode label, and “Explore game” action.
- Build a media panel with a static gameplay poster, accessible play control, and a concise scene description.
- Create a mobile game updates section that keeps social links labeled and separates community news from game actions.

### Iteration Guide

1. Check whether the game is understandable without its artwork.
2. Protect character faces on every breakpoint.
3. Keep custom display type out of metadata.
4. Test video controls with keyboard and reduced motion.
5. Use blue only where a decision is available.
6. Remove any utility overlay that covers the focal scene.
