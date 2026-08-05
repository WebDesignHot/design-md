---
name: Bandai Namco Entertainment
tagline: "Franchise worlds, character energy, and a global game catalog."
updated_at: 2026-08-05T01:54:28.905Z
published_at: 2026-08-05T01:54:28.905Z
author: webdesignhot
source_url: https://www.bandainamcoent.co.jp/english
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [gaming, media]
tags: [gaming, publisher, anime, franchises, entertainment]
preview_swatch: ["#ffffff", "#e60012", "#222222"]
related: [nintendo, blizzard, gameloft]
description: "Bandai Namco combines game publishing with a broader entertainment universe. A clean base, red action color, and strong franchise imagery make the public system feel energetic without losing the practical work of browsing games, news, platforms, and community destinations."

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  muted: text-soft
  border: border

colors:
  bg: "#ffffff"
  surface: "#f2f2f2"
  text: "#222222"
  brand: "#e60012"
  on-brand: "#ffffff"
  border: "#d9d9d9"
  text-soft: "#666666"
  border-soft: "#ededed"
  accent-yellow: "#f3c400"

typography:
  display:
    family: "Noto Sans, system-ui, -apple-system, sans-serif"
    weights: [500, 600, 700]
  body:
    family: "Noto Sans, system-ui, -apple-system, sans-serif"
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
  summary: "Recorded from the current Bandai Namco Entertainment public site during the 2026-08-05 catalog audit."
  influences:
    - name: "Bandai Namco Entertainment public site"
      role: "Source for Noto Sans typography, red action color, white/gray foundation, and franchise-led entertainment structure."
      url: https://www.bandainamcoent.co.jp/english
---

## 1. Visual Theme & Atmosphere

Bandai Namco combines game publishing with a broader entertainment universe. A clean base, red action color, and strong franchise imagery make the public system feel energetic without losing the practical work of browsing games, news, platforms, and community destinations. The public composition should be recognizable in a first viewport, then become predictable when a user starts a task. Keep the primary product, service, project, or artifact visible instead of replacing evidence with abstract decoration.

**Key Characteristics**
- A clear primary action
- A stable content hierarchy
- Readable metadata
- Intentional surface contrast
- Responsive media treatment
- Text equivalents for visual state

## 2. Color Palette & Roles

Use white and `#f2f2f2` as the open catalog ground, with `#222222` for titles, descriptions, and game metadata. `#e60012` is the primary red action and franchise signal; use it for discover, play, and selected navigation states rather than for every headline. A warm yellow can identify character or event content, but it needs a text label. Keep game artwork responsible for the wider palette.

Use color roles consistently: background for the page ground, surface for grouped content, text for reading, brand for the primary action, border for structure, and semantic colors for states with text labels. Preview swatches show the canvas, brand action, and primary reading color.

## 3. Typography Rules

Noto Sans is the sampled family for display and body. Use bold weights for franchise names and game titles, regular text for platform, rating, and release details, and compact labels for news type or audience. Let the art and title scale provide excitement instead of adding aggressive tracking or all-caps paragraphs.

Suggested hierarchy: display-hero for the first promise, display-lg for a major section, h1 for the page task, h2 for grouped content, h3 for cards, body-lg for introductions, body for explanations, body-sm for metadata, label for controls, and caption for timestamps. Keep tracking at zero unless the source evidence requires otherwise.

## 4. Component Stylings

Use red filled buttons for high-intent game and platform actions, white outlined buttons for trailers or details, and dark controls where artwork needs an inverse surface. Game cards need image, title, platform, release state, and action. Franchise filters and news labels should be text-backed. Video panels require an explicit play control and poster fallback; navigation should separate games, news, corporate, and support.

Treat controls as a system: every filled action needs hover, pressed, disabled, and focus states; every card needs a stable content order; every input needs a label and error state. Use familiar icons inside tool buttons and give unfamiliar icons a tooltip.

## 5. Layout Principles

Use a 1280px canvas with full-width franchise media and a constrained text rail. A 12-column game grid supports artwork beside metadata on desktop and a single readable stream on mobile. Keep 16/24px card gaps and 64/96px story intervals. Protect cover art ratios and do not place important titles inside unpredictable image crops.

Prefer full-width bands with constrained inner content over decorative nested cards. Stable aspect ratios, explicit grid tracks, and fixed control dimensions keep media and labels from shifting as content loads.

## 6. Shapes & Radius Scale

Use 4px for status labels, 8px for buttons and fields, 12px for game cards, and 16px for featured franchise panels. Pills are appropriate for platforms, release states, and game modes. Keep cover art edges lightly rounded or square so the game image remains the subject.

Keep the radius scale intentional: micro controls, standard controls, comfortable cards, relaxed feature panels, and pills only for true categorical selectors. A rounded rectangle should communicate an action or grouped item, not decorate every section.

## 7. Depth & Elevation

Use white bands, neutral borders, and image composition as the main depth system. A selected game can gain a red outline; dialogs and video overlays may use a stronger shadow with a scrim. Do not use elevation to imply a game ranking or quality claim.

Elevation should explain interaction or layering. If contrast, spacing, and a border are sufficient, do not add a shadow. Every overlay needs a scrim, a clear title, an escape path, and focus restoration.

## 8. Interaction & Motion

Use 150ms for filter and hover feedback, 240ms for menus and carousels, and 320ms for a controlled franchise reveal. Trailers should start from a poster and require an explicit play action. Reduced motion removes parallax and repeated loops while preserving the chosen game and final media frame.

Use motion to confirm an action, expose a relationship, or orient the user. Do not use looping motion to manufacture attention. Make the final state available without animation and honor reduced-motion preferences.

## 9. Accessibility & A11y

Use dark text on white and verify white text on red actions. Give every game image a title-aware alternative, and label platform, release, and rating information in text. Carousels need keyboard controls and a visible position. Focus must remain a solid high-contrast outline over both white UI and busy franchise art.

Use semantic landmarks, one logical heading order, keyboard-operable controls, and text alternatives for status. Test focus against every surface, including imagery, selected states, dialogs, and disabled-looking controls. Do not use color as the only error, progress, rating, or selection signal.

## 10. Responsive Behavior

At 640px, stack franchise copy and media and keep the primary action below the game title. At 1024px, reduce secondary filters before reducing title size. At 1280px, restore the full media-and-grid composition. Maintain 44px controls, stable poster ratios, and face-safe image crops.

Responsive changes should reflow tasks rather than merely scale the desktop composition. Preserve the first useful action, the content subject, and the state explanation at every breakpoint. If a row cannot fit, group it under a labeled disclosure instead of clipping text.

## 11. Content & Voice

Use energetic but concrete language: name the world, game, platform, and next action. Prefer “Explore game”, “Watch trailer”, and “Choose platform” over unqualified hype. Empty states should route to a franchise, genre, or platform path.

Microcopy should state the object, action, and consequence. Keep empty states useful, error messages recoverable, and confirmations specific. Avoid claims that cannot be understood or verified from the surrounding interface.

## 12. Dark Mode & Theming

The entry is light-first with red action and artwork-led color. A dark theme needs explicit card, text, focus, and image-scrim tokens; do not simply invert franchise artwork. Keep event and warning states distinct from the brand red.

Theme tokens must cover background, surface, text, muted text, border, primary action, primary foreground, focus ring, and semantic states. A theme toggle should preserve position and announce the current mode; never invert imagery or evidence blindly.

## 13. Lineage & Influences

Bandai Namco sits between a global game publisher and a character entertainment group. The neutral page lets IP worlds provide emotional color, while red and strong sans type keep navigation and action legible. It rejects both a bare storefront and a purely cinematic launch page by exposing catalog and community structure.

The lineage is a design rationale, not a claim that the source site uses every implementation token in this file. The sampled source URL and recorded production observations remain the authority for brand-specific decisions.

## 14. Do's and Don'ts

**Do**
- Let the franchise art carry energy.
- Show platform and release context.
- Use red for decisions.
- Keep cards comparable.
- Provide static trailer frames.
- Label community and news content.
- Protect faces in crops.
- Keep support navigation visible.

**Don't**
- Do not hide titles in artwork.
- Do not use red for every status.
- Do not autoplay trailers without pause.
- Do not imply quality with elevation.
- Do not use unlabeled platform icons.
- Do not crop important character faces.
- Do not make corporate copy sound like game hype.
- Do not reduce touch targets.

## 15. Agent Prompt Guide

### Quick Color Reference

- Background: use the sampled canvas token.
- Foreground: use the sampled reading token.
- Primary: use the brand action token.
- Surface: use the grouped-content token.
- Border: use the quiet structural divider.
- Focus: use a high-contrast visible ring.

### Example Component Prompts

- Create a Bandai Namco-like game hero with white canvas, franchise artwork, bold title, red action, platform metadata, and a static trailer frame.
- Design a game card with cover art, title, platform, release state, and a visible explore action.
- Build a franchise filter rail with text-backed platform and game-mode controls.
- Create a news card that separates event, community, and release content with clear labels.

### Iteration Guide

1. Check titles against the art crop.
2. Verify red action contrast.
3. Test the trailer without autoplay.
4. Read platform metadata without icons.
5. Protect faces at mobile width.
6. Remove any ranking implication from shadows.
