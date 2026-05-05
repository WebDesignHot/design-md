---
name: Ideogram
tagline: A bright white canvas with a single saturated violet cue — a typography-first AI image tool that lets the gallery do all the talking.
author: webdesignhot
source_url: https://ideogram.ai
spec: design.md/v1.5
quality: curated
featured: false
categories: [ai, design-tools, media]
tags: [light, sans, spacious, minimal, bright, cool]
preview_swatch: ['#ffffff', '#8864e4', '#f6f4fe']
related: [openai, claude-ai, vercel]
description: 'Ideogram''s site is a bright gallery for an AI image model that specialises in legible type. The canvas is `#ffffff`, the chrome runs system-ui (a deliberate refusal of a custom face), and the only chromatic accent is a saturated violet `#8864e4` paired with its faint tint `#f6f4fe`. The product feed is a dense masonry of generated images and the chrome stays out of their way — a near-Material restraint that lets a thousand prompt outputs share one stage. Where Midjourney goes cosmic-dark and Krea goes black-room gallery, Ideogram opens on pure white and refuses a custom typeface — the model''s headline trick is rendering legible type inside images, so the marketing chrome must defer.'

colors:
  # Primary
  bg: '#ffffff'                  # paper-white canvas, the gallery wall
  bg-alt: '#fafafc'              # neutral-50 alternate for inset zones
  surface: '#f7f7f8'             # neutral-100 surface for floated panels
  surface-soft: '#ececee'        # neutral-200 raised panel
  surface-violet: '#f6f4fe'      # brand-tinted surface, ~6% violet wash
  surface-violet-deep: '#ede7fc' # active feed-tab fill
  text: '#0e0e10'                # near-black display
  text-strong: '#000000'         # rare absolute black for large hero only
  text-medium: '#2b2b2f'         # heading secondary
  text-soft: '#585964'           # neutral-600 metadata
  text-muted: '#606066'          # neutral-500 captions
  text-faint: '#9b9ba0'          # disabled/footer microcopy
  # Brand
  brand: '#8864e4'               # signature violet, the only chromatic accent
  brand-deep: '#7e4dda'          # pressed/hover violet
  brand-tint: '#f6f4fe'          # 6% violet wash for surface
  brand-tint-strong: '#ede7fc'   # active state fill
  on-brand: '#ffffff'            # white label on violet
  # Interactive
  link: '#7e4dda'                # links pick up the deep-violet tone
  link-hover: '#8864e4'          # hover lifts to brand violet
  selected-bg: '#f6f4fe'         # selected feed-tab surface
  disabled: '#cfcfd4'            # neutral-300 disabled chrome
  # Borders
  border: 'rgba(15, 15, 15, 0.05)'      # 5% black hairline, never solid
  border-strong: 'rgba(15, 15, 15, 0.12)' # emphasized rule on cards
  border-subtle: 'rgba(15, 15, 15, 0.03)' # quietest division
  border-violet: 'rgba(136, 100, 228, 0.30)' # brand-tinted hairline
  # Semantic
  success-bg: '#e7f5ec'
  success-text: '#1f6b3e'
  warning-bg: '#fef6e4'
  warning-text: '#7a5a14'
  danger-bg: '#fbebec'
  danger-text: '#9a2c34'
  info-bg: '#f6f4fe'             # leans on the brand tint
  info-text: '#5b3eb8'

typography:
  display:
    family: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    weights: [500, 600, 700]
    opentype-features: ['kern', 'liga']
  body:
    family: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500]
    opentype-features: ['kern']
  mono:
    family: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    weights: [400, 500]
    opentype-features: ['tnum', 'zero']
  scale:
    display-hero:    { size: 72, weight: 700, lineHeight: 1.0,  tracking: '-0.025em', family: display, opentype: 'kern liga' }
    display:         { size: 56, weight: 700, lineHeight: 1.05, tracking: '-0.02em',  family: display }
    h1:              { size: 48, weight: 700, lineHeight: 1.1,  tracking: '-0.02em',  family: display }
    h2:              { size: 36, weight: 600, lineHeight: 1.15, tracking: '-0.015em', family: display }
    h3:              { size: 22, weight: 600, lineHeight: 1.25, tracking: '0',        family: display }
    h4:              { size: 18, weight: 600, lineHeight: 1.3,  tracking: '0',        family: display }
    h5:              { size: 16, weight: 600, lineHeight: 1.4,  tracking: '0',        family: display }
    eyebrow:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.06em',   family: display, transform: uppercase }
    body-large:      { size: 18, weight: 400, lineHeight: 1.55, family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.5,  family: body }
    body-small:      { size: 14, weight: 400, lineHeight: 1.5,  family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.4,  family: body }
    caption-tabular: { size: 13, weight: 500, lineHeight: 1.4,  family: mono, opentype: 'tnum' }
    label:           { size: 12, weight: 500, lineHeight: 1.3,  family: display }
    code:            { size: 13, weight: 400, lineHeight: 1.55, family: mono, opentype: 'tnum zero' }
    code-micro:      { size: 11, weight: 400, lineHeight: 1.4,  family: mono }

radius:
  micro: 2
  sm: 4
  md: 6
  lg: 8
  xl: 10
  card: 12
  pill: 9999

spacing:
  base: 4
  scale: [1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 48, 64, 96, 128]

layout:
  page-width: 1280
  prose-width: 680
  site-gutter: 'clamp(16px, 4vw, 32px)'
  header-height: 56
  grid-columns: 12
  feed-columns: '4-6 (responsive masonry)'
  section-rhythm: '64-96px'

components:
  button-primary:
    background: '#8864e4'
    text: '#ffffff'
    padding: '10px 20px'
    radius: 8
    border: 'none'
    font: 'system-ui 600 / 14px'
    hover-bg: '#7e4dda'
    active-bg: '#6e3fce'
    use: 'Primary CTA — violet fill is the single chromatic moment in the chrome.'
  button-secondary:
    background: '#ffffff'
    text: '#0e0e10'
    padding: '10px 20px'
    radius: 8
    border: '1px solid rgba(15, 15, 15, 0.12)'
    font: 'system-ui 500 / 14px'
    hover-bg: '#f7f7f8'
    use: 'Outline twin — same shape, hairline border, calm hover.'
  button-ghost:
    background: 'transparent'
    text: '#0e0e10'
    padding: '8px 12px'
    radius: 6
    font: 'system-ui 500 / 14px'
    hover-bg: 'rgba(15, 15, 15, 0.04)'
    use: 'Quiet utility action — nav links, secondary inline actions.'
  button-pill-violet:
    background: '#f6f4fe'
    text: '#7e4dda'
    padding: '6px 14px'
    radius: 9999
    border: '1px solid rgba(136, 100, 228, 0.30)'
    font: 'system-ui 500 / 13px'
    hover-bg: '#ede7fc'
    use: 'Active feed tab / selected filter — violet wash signals state.'
  card:
    background: '#ffffff'
    border: '1px solid rgba(15, 15, 15, 0.05)'
    radius: 12
    padding: '16px'
    use: 'Image-tile container or quiet info card — hairline only, no shadow at rest.'
  card-image-tile:
    background: '#f7f7f8'
    border: 'none'
    radius: 10
    padding: '0'
    use: 'Masonry feed cell — 10px radius, image fills bleed-to-edge.'
  input:
    background: '#ffffff'
    border: '1px solid rgba(15, 15, 15, 0.12)'
    radius: 8
    padding: '10px 14px'
    font: 'system-ui 400 / 14px'
    placeholder-color: '#9b9ba0'
    focus-ring: '0 0 0 2px #8864e4'
    use: 'Form fields and the prompt composer pill.'
  prompt-composer:
    background: '#ffffff'
    border: '1px solid rgba(15, 15, 15, 0.12)'
    radius: 9999
    padding: '12px 16px 12px 20px'
    font: 'system-ui 400 / 16px'
    inner-button: 'violet circle 36px, white icon'
    use: 'Hero generator — wide pill input with violet send button hard-right.'
  badge-tag:
    background: '#f7f7f8'
    text: '#585964'
    padding: '4px 10px'
    radius: 9999
    font: 'system-ui 500 / 12px'
    use: 'Style tag chips — neutral pill, clickable feel.'
  nav-link:
    background: 'transparent'
    text: '#0e0e10'
    padding: '8px 12px'
    font: 'system-ui 500 / 14px'
    hover-text: '#7e4dda'
    active-bg: '#f6f4fe'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-feed: 'cubic-bezier(0.32, 0.72, 0, 1)'
  duration-fast: 100
  duration-standard: 180
  duration-slow: 280
  duration-page: 360
  reduced-motion: 'respects prefers-reduced-motion: reduce — all transforms collapse to opacity-only, durations halve, masonry reflow snaps without animation.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  none: 'none'
  ambient: 'rgba(15, 15, 15, 0.04) 0 1px 2px'
  standard: 'rgba(15, 15, 15, 0.06) 0 4px 12px'
  elevated: 'rgba(15, 15, 15, 0.08) 0 16px 32px -12px'
  modal: 'rgba(15, 15, 15, 0.12) 0 24px 48px -16px'
  ring: '0 0 0 2px #8864e4'
  ring-soft: '0 0 0 3px rgba(136, 100, 228, 0.25)'

accessibility:
  contrast-text-on-bg: 18.7        # #0e0e10 on #ffffff — AAA at all sizes
  contrast-text-soft-on-bg: 5.4    # #585964 on #ffffff — AA at body sizes
  contrast-text-on-brand: 4.8      # #ffffff on #8864e4 — AA at body sizes
  contrast-link-on-bg: 6.9         # #7e4dda on #ffffff — AA large + AAA body
  focus-ring: '2px solid #8864e4 with 2px offset on light surfaces'
  reduced-motion-honored: true
  keyboard-nav: 'full tab order across header → composer → feed → footer; arrow keys move within the masonry grid.'
  prose-line-length: 'capped at 680px (~70 characters) on text pages; feed pages bleed to viewport.'

dark-mode: null                     # marketing chrome is light-only; in-product canvas may invert but the brand surface stays white.
---

## 1. Visual Theme & Atmosphere

Ideogram opens on pure white. The canvas is `#ffffff` and the chrome — masthead, sign-in chip, search input, footer — runs the system-ui stack at weight 400/500/600/700. The only chromatic accent on the page is a single saturated violet `#8864e4`, paired with its 6%-strength tint `#f6f4fe`, used on links, the active feed tab, and the primary CTA. Everything else is rendered in a neutral grey ladder borrowed from Material/Tailwind: `#fafafc`, `#f7f7f8`, `#ececee`. The result is a gallery wall that recedes so a thousand user-generated prompt outputs can share one stage.

The brand's most disciplined move is the **refusal of a custom typeface**. Ideogram's model claim is "we render legible typography inside generated images" — the very thing the chrome must avoid competing with. So the chrome runs system-ui (San Francisco on macOS/iOS, Segoe UI on Windows, Roboto on Android) and lets the user's OS render the wordmark. This is a brand-as-restraint move: where Midjourney commissions custom display faces, where Runway leans on editorial near-black, Ideogram pulls back to OS defaults so its product's typographic generations look like the more interesting choice.

The atmospheric vocabulary is **paper-canvas, masonry-tight, system-ui-restraint, violet-cue, Pinterest-grid-with-Material-edges, gallery-as-product, chrome-recedes**. Cards land at a Material-adjacent 10–12px radius, the feed is a dense 4–6-column masonry with 8–12px gutters, and section rhythm runs 64–96px — tighter than Anthropic's broadsheet but looser than a developer dashboard. The feed *is* the hero; there's no marketing band, no cosmic gradient, no looped background video. Just the work.

When the violet appears, it lands hard. The primary CTA pulls the eye immediately because the surrounding 95% of the page is neutral. The active feed tab — flipped from white-on-neutral to violet-text-on-violet-tint — reads as the page's only saturated affordance. Hover states stay calm: 4% black wash on ghost buttons, a 16px soft shadow on cards. The violet accent is positional, not decorative.

**Key Characteristics**
- Pure-white `#ffffff` canvas — gallery wall, never off-white
- System-ui stack — refusal of custom typeface is the brand's loudest typographic statement
- Single chromatic accent: violet `#8864e4` paired with 6% tint `#f6f4fe`
- Dense 4–6-column masonry feed with 8–12px gutters
- Card radius 10–12px — Material-adjacent, never plump
- Tonal depth (no heavy shadows) — `#ffffff` → `#f7f7f8` → `#ececee`
- Hairlines at 5% black — never solid
- Composer pill with violet send button — the page's secondary focal point
- Neutral text palette: `#0e0e10` display, `#606066` muted, `#585964` soft
- Restraint as functional: a thousand user images need a chrome that disappears

## 2. Color Palette & Roles

### Primary

- **bg** `#ffffff` — paper-white gallery canvas. Never `#fafafa` or off-white; the white is part of the brand.
- **text** `#0e0e10` — near-black display copy; warmer than absolute black, calmer than `#000` against pure white.
- **bg-alt** `#fafafc` — neutral-50 alternate ground for inset zones (sign-in card, cookie banner).
- **on-brand** `#ffffff` — white label on violet CTA buttons.

### Brand & Accent

- **brand** `#8864e4` — the signature violet. Used on primary CTA, primary link hover, and the active feed-tab fill text.
- **brand-deep** `#7e4dda` — pressed-state and link rest colour; slightly more saturated than the brand for legibility on white.
- **brand-tint** `#f6f4fe` — 6%-strength wash; surface fill for the active feed tab and selected filter chips.
- **brand-tint-strong** `#ede7fc` — active/selected state fill, ~12% wash.

### Interactive

- **link** `#7e4dda` — links use the deep-violet tone to maintain WCAG AA on white at body sizes (6.9:1 contrast).
- **link-hover** `#8864e4` — hover shifts the value slightly toward the brand violet.
- **selected-bg** `#f6f4fe` — selected nav, active feed tab fill.
- **disabled** `#cfcfd4` — neutral-300 disabled chrome.

### Neutral Scale

- **near-black** `#0e0e10` — display text, primary copy.
- **slate-medium** `#2b2b2f` — secondary headings.
- **neutral-600** `#585964` — metadata, secondary copy.
- **neutral-500** `#606066` — captions, helper text.
- **neutral-400** `#9b9ba0` — placeholder, footer microcopy.
- **neutral-300** `#cfcfd4` — disabled state.
- **neutral-200** `#ececee` — raised surface.
- **neutral-100** `#f7f7f8` — floated panel surface.
- **neutral-50** `#fafafc` — alternate ground.

### Surface & Borders

- **surface-0 (page)** — `#ffffff` paper-white.
- **surface-1 (panel)** — `#f7f7f8` neutral-100.
- **surface-2 (raised)** — `#ececee` neutral-200.
- **surface-violet (active)** — `#f6f4fe` brand-tinted active state.
- **border** `rgba(15, 15, 15, 0.05)` — 5% black hairline, the default rule.
- **border-strong** `rgba(15, 15, 15, 0.12)` — emphasized rule on cards and inputs.
- **border-subtle** `rgba(15, 15, 15, 0.03)` — quietest division between feed sections.
- **border-violet** `rgba(136, 100, 228, 0.30)` — used only on the violet-tinted active pill border.

### Shadow Colors

Ideogram's shadows are **neutral-tinted and minimal**. There are no brand-tinted shadows on the marketing chrome — the violet stays in fills and never bleeds into elevation. Cards rest flat; hover lifts add a soft 16px blur at 6% black; modals and popovers use a single `rgba(15, 15, 15, 0.08–0.12)` blur. Nothing about the depth system invites attention from the imagery.

### Semantic

- **success** — bg `#e7f5ec`, text `#1f6b3e`, border `rgba(40, 130, 80, 0.20)`. Reserved for sign-in confirmations.
- **warning** — bg `#fef6e4`, text `#7a5a14`. Quota / API limit warnings.
- **danger** — bg `#fbebec`, text `#9a2c34`. Failed generation, validation errors.
- **info** — bg `#f6f4fe`, text `#5b3eb8`. Notably, the info palette borrows the brand tint — a small unification.

Note: the unusual choice is that `info` collapses into the brand violet. Most systems separate `info-blue` from brand; Ideogram doesn't have a separate blue, so info simply leans on the violet wash.

## 3. Typography Rules

### Font Family

- **Display & Body**: `system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` — the modern OS stack. Renders as San Francisco on Apple, Segoe UI Variable on Windows 11, Roboto on Android, and falls back to Helvetica/Arial on legacy systems.
- **Mono**: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace` — for prompt output metadata, model versions, seed values, and rare code snippets.
- **OpenType features**: `kern` and `liga` enabled across display/body. `tnum` (tabular figures) and `zero` (slashed zero) enabled in mono for prompt parameters and seed numbers.
- **No custom typeface**: the deliberate refusal. Ideogram's model excels at rendering legible type *inside* generated images, so the marketing chrome refuses to compete with a custom face.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| Display Hero | system-ui | 72px | 700 | 1.0 | -0.025em | kern liga | Reserved for major announcements |
| Display | system-ui | 56px | 700 | 1.05 | -0.02em | liga | Homepage hero |
| H1 | system-ui | 48px | 700 | 1.1 | -0.02em | liga | Page title on detail pages |
| H2 | system-ui | 36px | 600 | 1.15 | -0.015em | — | Major section heading |
| H3 | system-ui | 22px | 600 | 1.25 | normal | — | Sub-section heading |
| H4 | system-ui | 18px | 600 | 1.3 | normal | — | Card heading |
| H5 | system-ui | 16px | 600 | 1.4 | normal | — | Inline emphasis |
| Eyebrow | system-ui | 12px | 500 | 1.4 | 0.06em | uppercase | Section pre-label |
| Body Large | system-ui | 18px | 400 | 1.55 | normal | — | Lede paragraph |
| Body | system-ui | 16px | 400 | 1.5 | normal | — | Default body |
| Body Small | system-ui | 14px | 400 | 1.5 | normal | — | Compact UI body |
| Caption | system-ui | 13px | 400 | 1.4 | normal | — | Image captions, helper |
| Caption Tabular | mono | 13px | 500 | 1.4 | normal | tnum | Prompt seed, dimensions |
| Label | system-ui | 12px | 500 | 1.3 | normal | — | UI labels, chips |
| Code | mono | 13px | 400 | 1.55 | normal | tnum zero | Inline + block |
| Code Micro | mono | 11px | 400 | 1.4 | normal | — | Footnote, model version |

### Principles

- **System-ui is the brand statement.** The refusal of a custom typeface is the typographic equivalent of Ideogram's product claim: we render legible type, you don't need to.
- **Weight 700 only at display sizes.** Headlines hit 700; subheads sit at 600; body and labels at 400/500.
- **Negative tracking compresses with size.** -0.025em at 72px, -0.02em at 48–56px, -0.015em at 36px, normal at 22px and below.
- **Two-mode discipline.** Sans system-ui carries display, body, captions, labels — everything except seed/dimension numerals, which switch to mono with `tnum` for tabular alignment.
- **Body defaults to 16/24.** No oversized prose, no editorial 20px body. The chrome is utilitarian.
- **Eyebrow uses 0.06em tracking + uppercase.** Slightly tighter than Anthropic's 0.04em, slightly looser than Linear's 0.04em — a small Ideogram-specific signature.
- **No italics in chrome.** Italics belong to user-typed prompt examples, not chrome copy.
- **Display tracking is negative; body tracking is normal.** The compression mirrors broadsheet masthead conventions but reins in for body legibility.

## 4. Component Stylings

### Buttons

**Primary (Violet)**
- Background: `#8864e4` violet. Text: `#ffffff`, system-ui 600 / 14px.
- Padding: `10px 20px`. Radius: `8px`. No border.
- Hover: bg → `#7e4dda`; transition `180ms ease-standard`.
- Active: bg → `#6e3fce` (pressed beat).
- Focus: 2px violet ring with 2px offset.
- Use: Primary CTA — *Generate, Sign in, Upgrade.*

**Secondary (Outline)**
- Background: `#ffffff`. Text: `#0e0e10`, system-ui 500 / 14px.
- Border: `1px solid rgba(15, 15, 15, 0.12)`.
- Hover: bg → `#f7f7f8`; border → `rgba(15, 15, 15, 0.20)`.
- Use: Twin to primary — *Cancel, View details.*

**Ghost (Quiet)**
- Background: transparent. Text: `#0e0e10`, system-ui 500 / 14px.
- Padding: `8px 12px`. Radius: `6px`.
- Hover: bg → `rgba(15, 15, 15, 0.04)`.
- Use: Nav links, repeated inline actions, footer.

**Pill Violet (Active State)**
- Background: `#f6f4fe`. Text: `#7e4dda`. Border: `1px solid rgba(136, 100, 228, 0.30)`. Radius: `9999`.
- Padding: `6px 14px`. Font: system-ui 500 / 13px.
- Hover: bg → `#ede7fc`.
- Use: Active feed tab, selected style filter, "showing X" status pill.

### Cards

**Editorial Card**
- Background: `#ffffff`. Border: `1px solid rgba(15, 15, 15, 0.05)`. Radius: `12px`. Padding: `16px`.
- Shadow: none at rest; on hover, `rgba(15, 15, 15, 0.06) 0 4px 12px`.
- Use: Info card, prompt-detail panel, related-images callout.

**Image Tile (Masonry)**
- Background: `#f7f7f8` (neutral-100, shows behind images while loading).
- Border: none. Radius: `10px`. Padding: `0`.
- Hover: 16px soft shadow at 8% black + 1.02× scale.
- Use: Feed cell — image fills bleed to edge, captions drop below the tile.

**Inset Card**
- Background: `#fafafc`. Border: `1px solid rgba(15, 15, 15, 0.03)`. Radius: `8px`. Padding: `16px`.
- Use: Quiet info zone — sign-in prompt, cookie banner, in-feed announcement.

### Badges, Tags, Pills

**Tag Chip (Style Filter)** — bg `#f7f7f8`, text `#585964`, system-ui 500 / 12px, padding `4px 10px`, radius `9999`. Hover deepens bg to `#ececee`.

**Active Pill** — bg `#f6f4fe`, text `#7e4dda`, border `rgba(136, 100, 228, 0.30)`, radius `9999`. The single brand-coloured pill on the page.

**Status Eyebrow** — no chrome, just type. system-ui 500 / 12px / uppercase / 0.06em tracking, colour `#606066`.

### Inputs / Forms

**Text Input**
- Background: `#ffffff`. Border: `1px solid rgba(15, 15, 15, 0.12)`. Radius: `8px`. Padding: `10px 14px`.
- Font: system-ui 400 / 14px. Placeholder: `#9b9ba0`.
- Focus: `0 0 0 2px #8864e4` ring, border → `#0e0e10`.
- Error: border → `#9a2c34`, helper `caption-error` below.
- Helper: caption 13px `#606066` below the field.

**Prompt Composer (Hero)**
- Background: `#ffffff`. Border: `1px solid rgba(15, 15, 15, 0.12)`. Radius: `9999` (pill). Padding: `12px 16px 12px 20px`.
- Font: system-ui 400 / 16px. Placeholder: `#9b9ba0`.
- Inner button: 36px violet circle hard-right, white arrow icon.
- Focus: ring grows to 3px at 25% violet; border picks up brand violet.
- Use: The single most prominent input on the home page — the *generator*, dressed as a chat-app composer.

**Search Input**
- Same as text input but with a 14px icon-left search glyph in `#606066`.
- Used in the masthead; stays a calm, narrow pill rather than a chunky search bar.

### Navigation

- Header height `56px`. Background `#ffffff` (transparent over hero on desktop; opaque on scroll).
- Logo: Ideogram wordmark, weight 600, near-black `#0e0e10`.
- Nav links: system-ui 500 / 14px, colour `#0e0e10`, padding `8px 12px`.
- Hover: bg → `#f6f4fe` (violet wash); text remains near-black.
- Active: bg → `#f6f4fe`, text → `#7e4dda` violet — the only chromatic state in the nav.
- Right-side: search input (200px wide) + sign-in chip (ghost button) + primary "Get started" violet button.
- Mobile (<640px): hamburger collapses to a full-screen sheet; links stack at 18px / 500 with 16px vertical rhythm.

### Optional Components

**Dropdown Menu** — bg `#ffffff`, border `rgba(15, 15, 15, 0.05)`, radius `8px`, shadow `rgba(15, 15, 15, 0.08) 0 12px 24px -8px`. Items: system-ui 400 / 14px, `12px 16px` padding, hover bg `#f6f4fe`.

**Tooltip** — bg `#0e0e10`, text `#ffffff`, radius `4px`, padding `6px 10px`, font `12px / 500`. 8px arrow in matching colour.

**Toast** — bg `#ffffff`, border `rgba(15, 15, 15, 0.05)`, radius `8px`, padding `12px 16px`, shadow `rgba(15, 15, 15, 0.10) 0 8px 24px -4px`. Icon-left optional.

**Modal** — bg `#ffffff`, radius `16px`, shadow `rgba(15, 15, 15, 0.12) 0 24px 48px -16px`, max-width `560px`. Backdrop: 60% black.

**Decorative**: subtle violet-tinted `#f6f4fe` blocks behind feature illustrations; no gradients, no meshes, no glow.

## 5. Layout Principles

### Spacing System

- **Base unit**: 4px.
- **Scale**: 4, 8, 12, 16, 20, 24, 32, 48, 64, 96, 128 — slightly tighter than Anthropic's broadsheet ladder; closer to Material Design's 4dp grid.
- **Density observation**: Ideogram is *medium-dense*. The masonry feed runs tight (8–12px gutters, 4–6 columns), the chrome runs calm (16–24px between elements), and section rhythm sits at 64–96px — half the rhythm of an editorial brand.

### Grid & Container

- **Page max width**: `1280px` for chrome; feed pages bleed to viewport.
- **Site gutter**: `clamp(16px, 4vw, 32px)`.
- **Grid**: 12 columns with 16px gutters on chrome surfaces.
- **Feed grid**: CSS columns / masonry — 4 columns at 1024–1280px, 5–6 at 1280–1536px, 3 at tablet, 2 at mobile.
- **Hero treatment**: 56–72px headline left-aligned, prompt composer pill centred 24px below, masonry feed begins immediately under the composer.

### Whitespace Philosophy

The whitespace philosophy is **functional, not editorial**. Where Anthropic uses whitespace as a brand asset (88–160px gutters), Ideogram uses just enough whitespace to keep the chrome legible and lets the masonry pack tight. The implicit deal: visit, browse, generate. Don't read prose.

### Section Cadence

- Masthead (white) → Hero composer (white, masonry feed beneath) → Footer (white, neutral-50 alternate accepted).
- There is no light/dark alternation; the whole site is a continuous white canvas.
- Section breaks are 64–96px of vertical space — no hairlines, no swatch bands.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| Micro | 2px | Decorative dividers, icon-corner inheritance |
| Standard (sm) | 4px | Chip corners on dense filter rails |
| Comfortable (md) | 6px | Compact buttons, sub-controls |
| Relaxed (lg) | 8px | Buttons, inputs — the dominant `--radius--main` |
| Featured (xl) | 10px | Image tiles in the feed |
| Card | 12px | Card containers, dropdowns, popovers |
| Modal | 16px | Modal dialogs, sheets |
| Pill | 9999px | Composer input, active filter pills, sign-in chip |

Ideogram's signature radius is **8px on buttons** and **10–12px on cards/tiles** — Material-adjacent. Pills (`9999px`) are reserved for the composer, the active filter chip, and the sign-in chip in the masthead. There are no zero-radius surfaces. Compound radii (e.g., `12px 12px 0 0` for a sticky-bottom panel) appear rarely; the default is symmetric.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat — no shadow | Default page surface, masthead, body sections |
| 1 | Tonal — `#fafafc` or `#f7f7f8` against `#ffffff` | Inset zones, alternate panels |
| 2 | `rgba(15,15,15,0.04) 0 1px 2px` | Sticky nav on scroll |
| 3 | `rgba(15,15,15,0.06) 0 4px 12px` | Hover-lifted cards, feed tiles |
| 4 | `rgba(15,15,15,0.08) 0 16px 32px -12px` | Dropdowns, popovers |
| 5 | `rgba(15,15,15,0.12) 0 24px 48px -16px` | Modals, dialogs |

### Shadow Philosophy

Ideogram's depth is **tonal-first, shadow-second**. The grayscale ladder (`#ffffff` → `#fafafc` → `#f7f7f8` → `#ececee`) does the primary elevation work — surfaces step up by value rather than by cast shadow. When shadows do appear, they're neutral (never violet-tinted), low-opacity (4–12%), and short-blur (1px to 24px). The brand never uses cool blue-tinted shadows like Stripe does; the palette is too narrow for tinted shadow play. The discipline keeps the violet accent positional rather than ambient.

## 8. Interaction & Motion

### Easing Curves

- **`ease-standard`**: `cubic-bezier(0.4, 0, 0.2, 1)` — Material default; used for hover, focus, colour transitions, dropdown reveals.
- **`ease-emphasized`**: `cubic-bezier(0.2, 0, 0, 1)` — punchier exit; modal open/close, composer focus expand.
- **`ease-feed`**: `cubic-bezier(0.32, 0.72, 0, 1)` — slow-out, fast-settle; masonry tile reveal on scroll.

### Duration Buckets

- **Fast (100ms)** — hover colour shifts, focus ring fade-in, link underlines.
- **Standard (180ms)** — button hover, card hover, dropdown reveal.
- **Slow (280ms)** — modal enter/exit, composer focus expansion.
- **Page (360ms)** — route transitions, hero reveal sequences.

### Per-Component Micro-States

- **Button hover (primary)**: bg `#8864e4` → `#7e4dda` over 180ms; no transform.
- **Button active (primary)**: bg → `#6e3fce` instantly on `:active`; releases over 100ms.
- **Card hover (feed tile)**: `transform: scale(1.02)` over 180ms ease-standard + soft shadow.
- **Link hover**: colour `#7e4dda` → `#8864e4` over 100ms; no underline change (links are already underlined in body copy).
- **Input focus**: 2px violet ring fades in over 100ms; border darkens to `#0e0e10`.
- **Composer focus**: ring grows from 2px to 3px at 25% violet; placeholder fades to 60% opacity over 180ms.
- **Active filter pill**: bg flips from `#f7f7f8` to `#f6f4fe` and text from `#585964` to `#7e4dda` over 180ms.

### Page Transitions

The masonry feed uses `IntersectionObserver` to fade tiles in at 80% viewport, 280ms duration with 8px translate-up. Between routes, the composer/masthead persists; the feed below cross-fades over 360ms.

### Reduced Motion

`@media (prefers-reduced-motion: reduce)` collapses every transition to opacity-only, halves durations, and disables tile-scale hover entirely. Masonry reflow snaps without animation. Focus rings remain instant.

## 9. Accessibility & A11y

### Contrast Pairs

- **`#0e0e10` text on `#ffffff` bg**: 18.7:1 — AAA at all sizes.
- **`#0e0e10` text on `#f7f7f8` surface**: 17.8:1 — AAA at all sizes.
- **`#585964` text on `#ffffff` bg**: 5.4:1 — AA at all sizes; AAA at large.
- **`#606066` text on `#ffffff` bg**: 5.0:1 — AA at all sizes.
- **`#9b9ba0` text on `#ffffff` bg**: 2.9:1 — fails AA; only used for placeholder/disabled.
- **`#ffffff` text on `#8864e4` brand**: 4.8:1 — AA at body sizes; safe for primary buttons.
- **`#7e4dda` text on `#f6f4fe` violet tint**: 6.9:1 — AAA at body; safe for active pill.
- **`#7e4dda` text on `#ffffff` bg**: 6.9:1 — AAA at body sizes.

### Focus Indicators

- Default ring: `0 0 0 2px #8864e4` with 2px offset on light surfaces.
- Soft ring (composer focus): `0 0 0 3px rgba(136, 100, 228, 0.25)` — wider, lower opacity for the prominent input.
- All interactive surfaces show a visible focus state. `outline: none` is never declared without a custom replacement.

### ARIA Patterns

- **Navigation**: `<nav aria-label="Main">` with skip-link to `#main-content`.
- **Composer**: `<form role="search" aria-label="Generate image">` with `aria-label="Image prompt"` on the textarea and `aria-keyshortcuts="Cmd+Enter"` on the submit button.
- **Feed**: `role="feed"` on the masonry container, each tile is an `<article>` with `aria-labelledby` pointing at the prompt caption.
- **Filter pills**: `role="tablist"` parent, each pill `role="tab" aria-selected`.
- **Dialog**: `role="dialog" aria-modal="true" aria-labelledby` with focus trap and Esc-to-close.
- **Live regions**: `aria-live="polite"` for "generation complete" toasts.

### Keyboard Navigation

- Tab order: skip-link → masthead nav → search → sign-in/CTA → composer → filter pills → feed tiles → footer.
- `Cmd/Ctrl+Enter` from anywhere submits the composer.
- Arrow keys navigate within the filter pill tablist.
- `Esc` closes dropdowns, modals, and detail overlays.
- Detail overlay: focus trap; first focus on close button.

### Screen Reader Hints

- Decorative icons: `aria-hidden="true"`.
- Feed tile alt text: the prompt text (truncated to 200 chars).
- Icon-only buttons (heart, share, more): `aria-label`.

### Reduced Motion

Honoured globally. All transforms collapse to opacity; durations halve; tile scale hover disabled.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Use |
|---|---|---|
| Mobile | < 640px | Single-column feed; full-screen nav sheet |
| Tablet | 640–1024px | 2–3 column feed; condensed masthead |
| Desktop | 1024–1280px | 4-column feed; full nav |
| Wide | 1280–1536px | 5–6 column feed |
| Ultra | > 1536px | Page locks at 1536; feed continues to add columns up to 8 |

### Touch Targets

- Minimum tap target: 44×44px (WCAG AAA).
- Buttons: 40px minimum height on mobile; 44px on tablet+.
- Feed tile: tile size adjusts; tap target = full tile.
- Heart/share icons on tiles: 32px visual icon, 44px tap area.

### Collapsing Strategy

- **Header**: search input collapses to icon at <1024px; full nav at ≥1024px.
- **Hero**: 56px → 40px → 32px headline across desktop/tablet/mobile.
- **Composer**: full-width pill on mobile (`12px 16px` padding), max-width 720px on tablet+, max-width 800px on desktop.
- **Feed**: 4 columns → 3 → 2 → 1 across desktop/tablet/large-mobile/small-mobile.
- **Section spacing**: 96px → 64px → 48px across sizes.

### Image Behavior

- Feed tiles use `srcset` with breakpoint-derived sizes; native lazy-loading.
- Aspect ratio is preserved by intrinsic sizing — no layout shift during masonry reflow.
- Detail-page hero image uses `object-fit: contain` to prevent crop.
- Generated images: WebP preferred, JPEG fallback, AVIF when supported.

### Container Queries

Used inside feed tiles to switch the caption layout (truncate vs. expand) when tile width crosses 240px.

## 11. Content & Voice

### Tone

**Functional, neutral, model-aware.** Ideogram writes like a competent technical product — full sentences, plain verbs, no exclamation marks. The voice neither apologises nor oversells. Headlines describe what the model does ("Generate images with legible text"); subheads explain how. No marketing exuberance, no "AI revolution" rhetoric.

### Microcopy Patterns

- **Button verbs**: "Generate," "Sign in," "Continue," "Save," "Share." Never "Get started for free!" never "Start your journey."
- **Error messages**: "Couldn't generate. Try simplifying the prompt or [contact support]." Specific, actionable.
- **Success confirmations**: "Saved to your library." "Copied prompt." Brief, calm.
- **Loading states**: "Generating…" — with a violet progress dot or pill.
- **Quota warnings**: "X generations remaining today. [Upgrade]" — neutral counter, no shame.

### Empty States

- *"No images yet. Try a prompt above to start."* — explain the empty, offer the next step.
- *"No matches. Try different keywords."* — search empty, no apology.
- Never uses "Oops!" / "Whoops!" / exclamation marks.

### CTA Verb Conventions

- Primary on hero: "Generate," "Try Ideogram," "Sign up"
- Secondary: "Browse the gallery," "Read the docs," "View pricing"
- Footer: "Pricing," "API," "Careers," "Contact"

The voice is **invitational with technical confidence** — closer to Linear or Vercel than Anthropic's literary register or OpenAI's research register. Ideogram's brand voice is the model's voice: it does the work, no fanfare.

## 12. Dark Mode & Theming

**Light-only on the marketing chrome — no dark variant offered.** The pure-white canvas is the brand's defining choice; the violet accent is calibrated for a 4.8:1 contrast on `#ffffff` and would need recalibration on dark.

The product canvas (the actual generator) may invert to a dark editor mode for late-night use, but the marketing surface at `ideogram.ai` and the core feed remain light at all times. The white canvas is part of the gallery metaphor — a museum doesn't dim its walls at night.

If a downstream surface ever needed a dark companion, the rule would be: keep the violet `#8864e4` at full saturation, swap white for `#0e0e10`, lift surfaces to `#1a1a1d` and `#26262a`. But this is not currently shipped on any Ideogram-branded surface.

## 13. Lineage & Influences

Ideogram's design DNA is **Material Design's neutral grey ladder + Pinterest's masonry feed + Linear's single-accent discipline**, with a deliberate refusal to commission a custom typeface. Where Midjourney goes cosmic-dark and leans hard on a custom display face, where Krea uses pure black with Suisse Intl, where Runway commits to editorial near-black with Söhne — Ideogram opens on white, runs system-ui, and lets the violet `#8864e4` carry every chromatic moment in the chrome.

The Pinterest lineage is most visible in the feed: 4–6 column masonry, tight gutters, image-first cells, no chrome between tiles. The Material lineage shows up in the radius ladder (4/6/8/10/12), the 5%-black hairlines, and the Roboto fallback in the system stack. The Linear lineage is the **single-accent discipline**: one saturated colour, used positionally, never decoratively. Where Linear chose indigo `#5e6ad2`, Ideogram chose violet `#8864e4`.

What it inherits: Material's grey ladder + neutral hairlines, Pinterest's dense masonry grid, Linear's restraint-as-authority chrome, system-ui's everyday-OS register. What it borrows from contemporaries: Vercel's calm white-canvas chrome, Notion's tile-grid feed pattern. What it rejects: Midjourney's cosmic gradients, Stable Diffusion's black-room studio register, the AI-startup purple-mesh hero.

**Named influences:**

- **Material Design** — neutral grey ladder, 5%-black hairlines, system-ui restraint. *https://m3.material.io*
- **Pinterest** — dense masonry grid for many-image feeds; visual-first browsing. *https://www.pinterest.com*
- **Linear** — single saturated accent against a near-monochrome chrome; calm marketing register. *https://linear.app*
- **Vercel** — pure-white calm chrome; system-stack typography. *https://vercel.com*
- **Notion** — tile-grid feed pattern; editorial restraint. *https://www.notion.com*

## 14. Do's and Don'ts

### Do

- **Do** keep the canvas at pure `#ffffff`. The white is part of the gallery metaphor.
- **Do** keep the typographic system on system-ui — the refusal of a custom face is the brand's discipline.
- **Do** reserve `#8864e4` for action and active states; pair it with the `#f6f4fe` tint, never an unrelated tint.
- **Do** pack the feed dense — 4–6 column masonry with 8–12px gutters keeps the gallery feel.
- **Do** use 5%-black hairlines (`rgba(15, 15, 15, 0.05)`) for borders. Solid borders are too loud.
- **Do** lift cards via tonal stepping (`#f7f7f8` against `#ffffff`) rather than shadow.
- **Do** keep the prompt composer as a wide pill — the chat-app metaphor signals "type and submit."
- **Do** use `tnum` mono numerals for seed values, dimensions, and model versions.
- **Do** keep section rhythm at 64–96px — tighter than editorial, looser than dashboard.
- **Do** treat semantic info as the brand violet — info is the only semantic that overlaps with brand.

### Don't

- **Don't** introduce a second chromatic accent; the violet is the only colour the chrome carries.
- **Don't** add a custom display face — Ideogram's model claim is type-in-images, so the chrome must defer.
- **Don't** use heavy shadows; depth is tonal and Material-restrained.
- **Don't** push display headlines above 72px — the chrome is calm, the imagery is loud.
- **Don't** drop hairlines below 3% opacity; below that they disappear and the chrome loses structure.
- **Don't** use the violet for backgrounds beyond the 6% tint `#f6f4fe`. Solid violet panels collapse the brand.
- **Don't** use cool blue-tinted shadows; the palette is too narrow for tinted shadow play.
- **Don't** insert gradients, meshes, or glow effects. The chrome stays flat.
- **Don't** set body weight below 400; the system-ui rendering loses legibility at 300.
- **Don't** apologise in microcopy — empty states are normal, not failures.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #ffffff
bg-alt: #fafafc
surface: #f7f7f8
surface-violet: #f6f4fe
text: #0e0e10
text-soft: #585964
text-muted: #606066
brand: #8864e4
brand-deep: #7e4dda
border: rgba(15, 15, 15, 0.05)
border-strong: rgba(15, 15, 15, 0.12)
```

### Example Component Prompts

1. **"Create an Ideogram-style hero — pure white `#ffffff` canvas, 56px headline in system-ui weight 700 with -0.02em tracking and near-black `#0e0e10` text, 18px body in system-ui regular below, single primary violet `#8864e4` button at 8px radius, no gradient and no animation. Include a wide prompt composer pill (9999 radius) below the headline with a 36px violet send circle hard-right."**

2. **"Design an Ideogram feed tile — 1:1 image cell with 10px radius, no border, `#f7f7f8` placeholder ground while loading. Caption below in system-ui 13px `#606066`, prompt text truncated to one line with ellipsis. Hover lifts the tile at 1.02× scale with a 16px soft shadow at 6% black."**

3. **"Build an active filter pill — `#f6f4fe` violet-tint background, `#7e4dda` text, 1px `rgba(136, 100, 228, 0.30)` border, 9999 radius, 6px×14px padding, system-ui 500 / 13px. Hover deepens bg to `#ede7fc`."**

4. **"Compose an Ideogram nav — 56px header, `#ffffff` background, wordmark hard-left in system-ui 600 / `#0e0e10`, link list system-ui 500 / 14px with `#f6f4fe` hover wash. Right-side: 200px search input, ghost sign-in button, primary violet 'Get started' button."**

5. **"Render an Ideogram prompt composer — `#ffffff` background, 1px `rgba(15, 15, 15, 0.12)` border, 9999 radius, `12px 16px 12px 20px` padding, 16px placeholder text in `#9b9ba0`. 36px violet `#8864e4` circle hard-right with white arrow icon. Focus expands ring to 3px at 25% violet."**

6. **"Create an Ideogram detail-page card — `#ffffff` background, `1px rgba(15, 15, 15, 0.05)` border, 12px radius, 16px padding, 22px heading in system-ui 600, 16px body in system-ui regular, no shadow at rest. Use 5% hairlines for any internal divisions."**

### Iteration Guide

1. **Start white, not off-white.** If the bg is `#fafafa` or `#f9f9f9`, you've lost the brand. Pure `#ffffff` is the entry ticket.
2. **Drop the custom typeface.** Switch to system-ui — the OS-rendered text is part of the discipline.
3. **Reserve violet for one fill at a time.** If the page has more than one violet element in view, you've over-applied. The accent is positional.
4. **Compress section rhythm.** Anthropic-style 128–160px gutters are too loose — Ideogram's rhythm is 64–96px.
5. **Pack the feed.** If gutters are above 16px, tighten — masonry should feel close-packed.
6. **Replace shadows with tonal stepping.** White on cream-grey separates panels; explicit shadows reserve for hover and overlay.
7. **Use 5% hairlines.** Solid `#e5e5e5` borders read as too structural; switch to `rgba(15, 15, 15, 0.05)`.
8. **Calm the verbs.** Replace "Sign up free!" with "Sign in"; replace "Get started today!" with "Generate."
