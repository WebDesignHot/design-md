---
name: LUSH
tagline: "Colorful handmade beauty retail with product detail and ethical storytelling."
updated_at: 2026-08-05T01:55:54.299Z
published_at: 2026-08-05T01:55:54.299Z
author: webdesignhot
source_url: https://www.lush.com/us/en_us
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [retail, ecommerce]
tags: [retail, ecommerce, beauty, colorful, ethical]
preview_swatch: ["#ffffff", "#111111", "#ff5c8a"]
related: [glossier, aesop, rare-beauty]
description: "LUSH mixes a strong black-and-white retail framework with expressive product color, handwritten campaign moments, and ethical brand stories. The system should make scent, ingredients, use, price, availability, and store options easy to find while leaving room for playful product photography and activism."

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  muted: text-soft
  border: border

colors:
  bg: "#ffffff"
  surface: "#f3f3f1"
  text: "#111111"
  brand: "#111111"
  on-brand: "#ffffff"
  border: "#d8d8d4"
  text-soft: "#5f5f5b"
  border-soft: "#e9e9e5"
  accent-pink: "#ff5c8a"
  accent-green: "#49a078"
  accent-yellow: "#f2d64b"

typography:
  display:
    family: "LUSH handwritten, system-ui, -apple-system, sans-serif"
    weights: [500, 600, 700]
  body:
    family: "Inter, system-ui, -apple-system, sans-serif"
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
  summary: "Recorded from the current LUSH public site during the 2026-08-05 catalog audit."
  influences:
    - name: "LUSH public site"
      role: "Source for handwritten/display and Inter body roles, black/white retail framework, colorful product treatment, and ethical storytelling structure."
      url: https://www.lush.com/us/en_us
---

## 1. Visual Theme & Atmosphere

LUSH mixes a strong black-and-white retail framework with expressive product color, handwritten campaign moments, and ethical brand stories. The system should make scent, ingredients, use, price, availability, and store options easy to find while leaving room for playful product photography and activism. The public composition should be recognizable in a first viewport, then become predictable when a user starts a task. Keep the primary product, service, project, or artifact visible instead of replacing evidence with abstract decoration.

**Key Characteristics**
- A clear primary action
- A stable content hierarchy
- Readable metadata
- Intentional surface contrast
- Responsive media treatment
- Text equivalents for visual state

## 2. Color Palette & Roles

Use white and `#f3f3f1` as the retail canvas, with black for navigation, product names, and primary purchase actions. Product and campaign accents can use pink, green, and yellow, but every ingredient, availability, and ethical claim stays in dark readable text. Treat bright color as product evidence or story emphasis rather than a blanket gradient.

Use color roles consistently: background for the page ground, surface for grouped content, text for reading, brand for the primary action, border for structure, and semantic colors for states with text labels. Preview swatches show the canvas, brand action, and primary reading color.

## 3. Typography Rules

The source sample exposed a handwritten display role and Inter body role. Keep handwritten type for short campaign or product statements, and use Inter for price, ingredients, allergens, instructions, and store information. Product names can be bold and expressive, but the shopping hierarchy must remain stable across categories.

Suggested hierarchy: display-hero for the first promise, display-lg for a major section, h1 for the page task, h2 for grouped content, h3 for cards, body-lg for introductions, body for explanations, body-sm for metadata, label for controls, and caption for timestamps. Keep tracking at zero unless the source evidence requires otherwise.

## 4. Component Stylings

Use black filled buttons for add-to-bag, shop, and store actions, with outlined save or details controls. Product cards need image, name, type/scent, price/size, availability, and an action. Ingredient lists and how-to-use sections need readable accordions or tables. Colorful stickers can annotate limited editions or campaigns, but must have text and accessible names. Navigation should separate shop, gifts, stores, and ethics/story.

Treat controls as a system: every filled action needs hover, pressed, disabled, and focus states; every card needs a stable content order; every input needs a label and error state. Use familiar icons inside tool buttons and give unfamiliar icons a tooltip.

## 5. Layout Principles

Use a 1280px retail canvas with a 12-column product grid and a 720px measure for ingredient/ethics stories. Campaigns can break into expressive full-width bands, while product detail keeps image, purchase, and facts in a stable two-column desktop layout. Use 16/24px card spacing and 64/96px intervals. Keep product jar/bottle proportions stable.

Prefer full-width bands with constrained inner content over decorative nested cards. Stable aspect ratios, explicit grid tracks, and fixed control dimensions keep media and labels from shifting as content loads.

## 6. Shapes & Radius Scale

Use 0/2px for ingredient labels and tables, 6px for controls, 12px for product cards, and 16px for story panels. Pills fit scent, type, or skin/hair category filters. Do not soften every product edge; product photography and color should carry character.

Keep the radius scale intentional: micro controls, standard controls, comfortable cards, relaxed feature panels, and pills only for true categorical selectors. A rounded rectangle should communicate an action or grouped item, not decorate every section.

## 7. Depth & Elevation

Use borders and white/soft-gray surfaces for retail structure. Selected products can use an accent outline; cart drawers and dialogs use a medium shadow with a scrim. Keep ethical/ingredient facts in the document flow, not buried in decorative floating cards.

Elevation should explain interaction or layering. If contrast, spacing, and a border are sufficient, do not add a shadow. Every overlay needs a scrim, a clear title, an escape path, and focus restoration.

## 8. Interaction & Motion

Use 150ms for product controls, 240ms for filter and cart feedback, and 320ms for campaign/media reveals. Product galleries need explicit controls and a static first image. Reduced motion removes repeated loops and preserves selected product, price, and cart state.

Use motion to confirm an action, expose a relationship, or orient the user. Do not use looping motion to manufacture attention. Make the final state available without animation and honor reduced-motion preferences.

## 9. Accessibility & A11y

Use black text on white/soft gray and verify white on black actions. Product images need names and purpose-aware alternatives; scent and ingredient information must be text. Do not communicate skin/hair category, limited edition, or availability through accent color alone. Cart and filter drawers need focus restoration.

Use semantic landmarks, one logical heading order, keyboard-operable controls, and text alternatives for status. Test focus against every surface, including imagery, selected states, dialogs, and disabled-looking controls. Do not use color as the only error, progress, rating, or selection signal.

## 10. Responsive Behavior

At 640px, stack product image, title, price, and purchase action with ingredients available nearby. At 1024px, collapse secondary filters and campaign modules before reducing facts. At 1280px, use the full retail grid and detail layout. Maintain 44px controls and safe product crops.

Responsive changes should reflow tasks rather than merely scale the desktop composition. Preserve the first useful action, the content subject, and the state explanation at every breakpoint. If a row cannot fit, group it under a labeled disclosure instead of clipping text.

## 11. Content & Voice

Use warm, playful, direct retail copy. “Shop”, “Add to bag”, “Find a store”, “See ingredients”, and “How to use” should remain literal. Ethical and product claims need evidence or clear context. Empty states can suggest a category, gift, or nearby store without creating urgency.

Microcopy should state the object, action, and consequence. Keep empty states useful, error messages recoverable, and confirmations specific. Avoid claims that cannot be understood or verified from the surrounding interface.

## 12. Dark Mode & Theming

The entry is light-first with black action and colorful product accents. A dark campaign mode needs separate product facts, cart, ingredient, and focus tokens. Keep product and availability states distinct from campaign colors.

Theme tokens must cover background, surface, text, muted text, border, primary action, primary foreground, focus ring, and semantic states. A theme toggle should preserve position and announce the current mode; never invert imagery or evidence blindly.

## 13. Lineage & Influences

LUSH combines handmade product retail with activist editorial storytelling and bold packaging color. The black/white shop framework creates trust for price and ingredient detail, while campaign color and handwriting make the brand feel alive. It rejects sterile beauty minimalism by keeping product process and point of view visible.

The lineage is a design rationale, not a claim that the source site uses every implementation token in this file. The sampled source URL and recorded production observations remain the authority for brand-specific decisions.

## 14. Do's and Don'ts

**Do**
- Show product facts near the action.
- Keep ingredient text readable.
- Use color as product evidence.
- Expose store availability.
- Label limited editions.
- Make filters reversible.
- Preserve product proportions.
- Keep ethics content specific.

**Don't**
- Do not hide ingredients behind color.
- Do not make a product card image-only.
- Do not use campaign color as availability proof.
- Do not bury the store locator.
- Do not animate galleries without controls.
- Do not make handwritten type carry instructions.
- Do not conceal price/size.
- Do not turn every section into a campaign.

## 15. Agent Prompt Guide

### Quick Color Reference

- Background: use the sampled canvas token.
- Foreground: use the sampled reading token.
- Primary: use the brand action token.
- Surface: use the grouped-content token.
- Border: use the quiet structural divider.
- Focus: use a high-contrast visible ring.

### Example Component Prompts

- Create a LUSH-like retail hero with black action, colorful product image, short handwritten campaign line, and visible product facts.
- Design a product card with image, name, scent/type, size, price, availability, and add-to-bag action.
- Build a product detail facts panel with ingredients, how-to-use, allergen context, and accessible accordion controls.
- Create a store locator section with location input, availability result, and clear next action.

### Iteration Guide

1. Read product facts without color.
2. Check add-to-bag focus state.
3. Keep ingredient accordion keyboard-accessible.
4. Verify product crop at mobile width.
5. Distinguish campaign and availability accents.
6. Remove decoration that hides price or size.
