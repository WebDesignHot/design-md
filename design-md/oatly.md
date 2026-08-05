---
name: Oatly
tagline: "Handwritten food storytelling with black humor and a warm cream ground."
updated_at: 2026-08-05T01:54:57.232Z
published_at: 2026-08-05T01:54:57.232Z
author: webdesignhot
source_url: https://www.oatly.com/en-us
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [retail]
tags: [retail, food, editorial, playful, sustainable]
preview_swatch: ["#fffef6", "#111111", "#b5d334"]
related: [liquid-death, patagonia, allbirds]
description: "Oatly uses a strong editorial voice to turn a packaged food catalog into a point of view. Warm cream, black typography, handwritten display, product photography, and blunt microcopy create a recognizable system. The design should keep product, ingredients, nutrition, and purchase paths as clear as the brand attitude."

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  muted: text-soft
  border: border

colors:
  bg: "#fffef6"
  surface: "#f3f0e4"
  text: "#111111"
  brand: "#111111"
  on-brand: "#ffffff"
  border: "#111111"
  text-soft: "#5a574d"
  border-soft: "#d8d3c3"
  accent-green: "#b5d334"
  accent-yellow: "#f1df4b"

typography:
  display:
    family: "Margo Pro Regular, system-ui, -apple-system, sans-serif"
    weights: [500, 600, 700]
  body:
    family: "Margo Pro Regular, system-ui, -apple-system, sans-serif"
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
  summary: "Recorded from the current Oatly public site during the 2026-08-05 catalog audit."
  influences:
    - name: "Oatly public site"
      role: "Source for Margo Pro typography, cream/black foundation, product-storytelling voice, and playful campaign accents."
      url: https://www.oatly.com/en-us
---

## 1. Visual Theme & Atmosphere

Oatly uses a strong editorial voice to turn a packaged food catalog into a point of view. Warm cream, black typography, handwritten display, product photography, and blunt microcopy create a recognizable system. The design should keep product, ingredients, nutrition, and purchase paths as clear as the brand attitude. The public composition should be recognizable in a first viewport, then become predictable when a user starts a task. Keep the primary product, service, project, or artifact visible instead of replacing evidence with abstract decoration.

**Key Characteristics**
- A clear primary action
- A stable content hierarchy
- Readable metadata
- Intentional surface contrast
- Responsive media treatment
- Text equivalents for visual state

## 2. Color Palette & Roles

Use warm cream `#fffef6` and `#f3f0e4` as the editorial canvas, with `#111111` for direct copy and product facts. The primary action remains black, while chartreuse `#b5d334` and yellow `#f1df4b` can mark product or campaign moments. Color should support the message and packaging, not turn the page into a generic wellness gradient. Ingredients, allergens, and nutrition need neutral high-contrast treatment.

Use color roles consistently: background for the page ground, surface for grouped content, text for reading, brand for the primary action, border for structure, and semantic colors for states with text labels. Preview swatches show the canvas, brand action, and primary reading color.

## 3. Typography Rules

Margo Pro Regular is the sampled display and body family. Use its handwritten character for short headlines, campaign statements, and product callouts; use a calmer size and line height for ingredients, nutrition, and policy. Keep product names prominent and let blunt copy breathe rather than compressing it into small jokes.

Suggested hierarchy: display-hero for the first promise, display-lg for a major section, h1 for the page task, h2 for grouped content, h3 for cards, body-lg for introductions, body for explanations, body-sm for metadata, label for controls, and caption for timestamps. Keep tracking at zero unless the source evidence requires otherwise.

## 4. Component Stylings

Use black filled buttons for shop, product, and location actions, with cream or outlined secondary treatments. Product cards need pack image, product name, flavor/type, size, and purchase path. Ingredient and nutrition panels need strong headings and readable tables. Campaign stickers can use accent colors but need text equivalents. Navigation should separate products, impact, stories, and store locator.

Treat controls as a system: every filled action needs hover, pressed, disabled, and focus states; every card needs a stable content order; every input needs a label and error state. Use familiar icons inside tool buttons and give unfamiliar icons a tooltip.

## 5. Layout Principles

Use a 1280px editorial canvas with wide product imagery and a 720px reading measure for ingredients and impact stories. Product grids can use 3 or 4 columns, while campaign bands may use asymmetry and oversized type. Keep 16/24px card gaps and 64/96px intervals. Preserve product pack proportions and do not crop required nutrition text.

Prefer full-width bands with constrained inner content over decorative nested cards. Stable aspect ratios, explicit grid tracks, and fixed control dimensions keep media and labels from shifting as content loads.

## 6. Shapes & Radius Scale

Use 0/2px for nutrition tables and labels, 6px for controls, 12px for product cards, and 16px for campaign panels. Pills are for product attributes or dietary filters only. Let packaging and handwriting create personality rather than applying a radius to every block.

Keep the radius scale intentional: micro controls, standard controls, comfortable cards, relaxed feature panels, and pills only for true categorical selectors. A rounded rectangle should communicate an action or grouped item, not decorate every section.

## 7. Depth & Elevation

Use flat cream and black outlines as the main system. A product card can use a small shadow when it is interactive; campaign overlays and store dialogs may use stronger elevation. Do not put product facts inside floating decorative cards where they lose context.

Elevation should explain interaction or layering. If contrast, spacing, and a border are sufficient, do not add a shadow. Every overlay needs a scrim, a clear title, an escape path, and focus restoration.

## 8. Interaction & Motion

Use 150ms for product hover and filter feedback, 240ms for disclosures, and 320ms for campaign reveals. Do not auto-animate product copy or nutrition data. Reduced motion keeps the final product frame and text visible immediately.

Use motion to confirm an action, expose a relationship, or orient the user. Do not use looping motion to manufacture attention. Make the final state available without animation and honor reduced-motion preferences.

## 9. Accessibility & A11y

Use black text on cream/white and verify white on black actions. Handwritten type must not carry long factual text or low-contrast detail. Product images need product-aware alternatives; nutrition and ingredient information must remain real text. Accent colors need labels for dietary or campaign state.

Use semantic landmarks, one logical heading order, keyboard-operable controls, and text alternatives for status. Test focus against every surface, including imagery, selected states, dialogs, and disabled-looking controls. Do not use color as the only error, progress, rating, or selection signal.

## 10. Responsive Behavior

At 640px, stack product story, image, and action while keeping the product name and purchase path visible. At 1024px, reduce campaign decoration before reducing ingredient text. At 1280px, use the full editorial grid. Keep 44px controls and safe product pack crops.

Responsive changes should reflow tasks rather than merely scale the desktop composition. Preserve the first useful action, the content subject, and the state explanation at every breakpoint. If a row cannot fit, group it under a labeled disclosure instead of clipping text.

## 11. Content & Voice

Use direct, witty copy, but never let humor obscure ingredients, allergens, nutrition, price, or availability. Prefer “Shop”, “Find a store”, “See ingredients”, and “Read the story”. Empty states can be playful while still suggesting a product or store path.

Microcopy should state the object, action, and consequence. Keep empty states useful, error messages recoverable, and confirmations specific. Avoid claims that cannot be understood or verified from the surrounding interface.

## 12. Dark Mode & Theming

The entry is warm light-first with black action and chartreuse/yellow accents. A dark campaign variant needs explicit ingredient, nutrition, focus, and product-image tokens. Do not make accent color the only dietary or availability signal.

Theme tokens must cover background, surface, text, muted text, border, primary action, primary foreground, focus ring, and semantic states. A theme toggle should preserve position and announce the current mode; never invert imagery or evidence blindly.

## 13. Lineage & Influences

Oatly borrows from editorial poster design, handwritten packaging, and activist food storytelling. The system uses copy as a visual material, but the product and its facts remain inspectable. It rejects the polished wellness sameness of soft gradients and generic claims in favor of a sharp point of view.

The lineage is a design rationale, not a claim that the source site uses every implementation token in this file. The sampled source URL and recorded production observations remain the authority for brand-specific decisions.

## 14. Do's and Don'ts

**Do**
- Let copy have a point of view.
- Keep facts literal.
- Show product pack and type.
- Use cream and black as anchors.
- Label accent states.
- Preserve nutrition readability.
- Make store paths visible.
- Use humor after clarity.

**Don't**
- Do not hide allergens in a joke.
- Do not use handwritten type for tables.
- Do not crop product facts.
- Do not turn every section into a campaign.
- Do not use accents as dietary proof alone.
- Do not autoplay copy animations.
- Do not bury the store locator.
- Do not use generic wellness gradients.

## 15. Agent Prompt Guide

### Quick Color Reference

- Background: use the sampled canvas token.
- Foreground: use the sampled reading token.
- Primary: use the brand action token.
- Surface: use the grouped-content token.
- Border: use the quiet structural divider.
- Focus: use a high-contrast visible ring.

### Example Component Prompts

- Create an Oatly-like product hero with warm cream ground, handwritten headline, pack image, black shop action, and a clear product fact line.
- Design a product card with pack image, flavor/type, size, price or purchase path, and ingredient link.
- Build a nutrition panel with readable facts, allergen label, and accessible table structure.
- Create a campaign story section where witty copy supports, but does not replace, product information.

### Iteration Guide

1. Read facts without the handwritten headline.
2. Check product crops at mobile width.
3. Verify black action contrast.
4. Keep accent labels textual.
5. Test nutrition table zoom.
6. Remove jokes that obscure purchase or allergen context.
