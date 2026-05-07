---
name: HBO Max
tagline: Deep purple-black premium streaming canvas with custom Sharp Grotesk and the unmistakable Max wordmark.
updated_at: 2026-05-03T21:06:23+12:00
published_at: 2026-05-03T21:06:23+12:00
author: webdesignhot
source_url: https://www.max.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [media, marketplace]
tags: [dark, bold, sans, premium, editorial, prestige]
preview_swatch: ['#0b0c0f', '#0072ff', '#ffffff']
related: [netflix, apple, stripe]
description: 'Max (formerly HBO Max) trades on prestige-TV signaling: a deep blue-black `#0b0c0f` canvas, a brand blue `#0072ff` that anchors the wordmark and primary CTA, and a custom Sharp Grotesk display sans rendered tight and modest. Where Netflix is content-dense, Max is content-curated — fewer, larger billboards, more editorial copy, and a spotlight on prestige titles (Succession, The Last of Us, House of the Dragon) rendered with custom title-card SVGs and cinematic still photography. Type uses Sharp Grotesk Display at 700 weight with `-0.02em` tracking for headlines, body in Sharp Grotesk Text at 400. Buttons are flat 4px rectangles, modals dark `#1a1c1f` with subtle 1px hairlines. The brand reads as a premium cable-network carrying a streaming UI on top — restrained, confident, almost stately.'

colors:
  bg: '#0b0c0f'                    # canvas — Max deep blue-black
  bg-deep: '#000000'                # billboard scrim terminus, video player
  surface: '#1a1c1f'                # secondary panel, modal ground
  surface-strong: '#26282d'         # elevated card, input fill
  surface-soft: '#15171a'           # alt row band
  surface-card: '#1a1c1f'           # poster default surface
  surface-overlay: 'rgba(11,12,15,0.85)'  # billboard scrim
  text: '#ffffff'                   # ink — pure white display
  text-strong: '#ffffff'
  text-body: '#e6e7eb'              # secondary running text
  text-muted: '#9aa0aa'             # metadata, subtitles
  text-soft: '#6c7280'              # disabled, footer secondary
  text-disabled: '#4d5159'
  brand: '#0072ff'                  # Max primary blue — wordmark + CTA
  brand-hover: '#1f86ff'            # hover lift
  brand-active: '#0058cc'           # press deep blue
  brand-deep: '#003e99'             # gradient terminus
  brand-purple: '#9c1ee0'           # legacy HBO Max purple — retained on some surfaces
  brand-purple-soft: '#5f0d8a'      # deep purple gradient origin
  on-brand: '#ffffff'
  accent-gold: '#c9a961'             # premium-tier badge accent (rare)
  accent-cyan: '#00d4ff'             # docs / sport sub-brand accent
  border: '#2a2d33'                  # default 1px hairline
  border-soft: '#1f2126'             # divider
  border-strong: '#4d5159'           # focused input
  scrim-top: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 100%)'
  scrim-bottom: 'linear-gradient(0deg, #0b0c0f 0%, transparent 100%)'
  shadow-card: 'rgba(0,0,0,0.7)'    # poster hover shadow
  shadow-billboard: 'rgba(0,0,0,0.85)'
  success: '#00c08a'                 # subscription confirmed
  warning: '#f6b73c'                 # buffering warning
  danger: '#ff4757'                  # form error
  danger-deep: '#cc1c2c'
  info: '#0072ff'                    # info matches brand
  rating-mature: '#ffffff'           # white maturity chip on dark
  progress-watched: '#0072ff'        # blue progress
  progress-rail: '#3a3d44'
  hbo-prestige: '#7a1fa2'             # legacy HBO logo purple, on archive titles

typography:
  display:
    family: '"Sharp Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 700, 800, 900]
    opentype-features: ['ss01', 'tnum']
  body:
    family: '"Sharp Grotesk Text", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 700]
  mono:
    family: 'SFMono-Regular, Menlo, Consolas, monospace'
    weights: [400]
  scale:
    billboard-hero:    { size: 72, weight: 800, lineHeight: 1.0,  tracking: '-0.03em', family: display, notes: 'Used only on text-only fallback; primary uses SVG' }
    display-xl:        { size: 56, weight: 800, lineHeight: 1.05, tracking: '-0.025em',family: display }
    display-lg:        { size: 40, weight: 700, lineHeight: 1.1,  tracking: '-0.02em', family: display }
    display-md:        { size: 28, weight: 700, lineHeight: 1.15, tracking: '-0.01em', family: display }
    display-sm:        { size: 22, weight: 700, lineHeight: 1.2,  tracking: '0',       family: display }
    section-title:     { size: 20, weight: 500, lineHeight: 1.3,  tracking: '0',       family: display }
    row-title:         { size: 18, weight: 500, lineHeight: 1.2,  tracking: '0',       family: display }
    body-lg:           { size: 18, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body }
    body-md:           { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body }
    body-sm:           { size: 14, weight: 400, lineHeight: 1.43, tracking: '0',       family: body }
    button-lg:         { size: 16, weight: 700, lineHeight: 1.0,  tracking: '0.01em',  family: display }
    button-md:         { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0.01em',  family: body }
    caption:           { size: 13, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body }
    metadata:          { size: 14, weight: 400, lineHeight: 1.3,  tracking: '0',       family: body, opentype: ['tnum'] }
    badge-rating:      { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0.05em',  family: body, transform: uppercase }
    nav-link:          { size: 14, weight: 500, lineHeight: 1.0,  tracking: '0.01em',  family: body }
    legal:             { size: 12, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body }
    micro-label:       { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0.08em',  family: body, transform: uppercase }
    editorial-quote:   { size: 22, weight: 500, lineHeight: 1.35, tracking: '0',       family: display, notes: 'Critic-pull-quote, occasional' }

radius:
  micro: 0
  sm: 2
  md: 4          # primary CTA
  lg: 6
  xl: 8
  pill: 9999

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120]

layout:
  page-width: 1920
  content-max: 1440
  header-height: 72
  row-gap: 40
  poster-aspect: '2:3'
  billboard-aspect: '16:9'

components:
  button-primary:
    bg: '#0072ff'
    color: '#ffffff'
    radius: 4
    padding: '14px 28px'
    height: 48
    font: button-lg
    use: 'Sign Up Now, Start Streaming, Watch Now — primary blue CTA.'
  button-primary-hover:
    bg: '#1f86ff'
    color: '#ffffff'
    radius: 4
    use: 'Pointer-over lift.'
  button-primary-active:
    bg: '#0058cc'
    color: '#ffffff'
    radius: 4
    use: 'Press state.'
  button-large-hero:
    bg: '#0072ff'
    color: '#ffffff'
    radius: 4
    padding: '18px 36px'
    height: 56
    font: button-lg
    use: 'Billboard hero "Watch" CTA — paired with secondary glass More Info.'
  button-glass:
    bg: 'rgba(255,255,255,0.15)'
    color: '#ffffff'
    radius: 4
    padding: '14px 28px'
    border: '1px solid rgba(255,255,255,0.3)'
    use: '"More Info" sibling on billboard.'
  button-white:
    bg: '#ffffff'
    color: '#0b0c0f'
    radius: 4
    padding: '14px 28px'
    use: 'Acquisition-page "Choose Your Plan" CTA over dark hero.'
  button-ghost:
    bg: 'transparent'
    color: '#ffffff'
    border: '1px solid #4d5159'
    radius: 4
    use: 'Modal cancel, "Skip Intro" overlay.'
  poster-card:
    bg: '#1a1c1f'
    color: '#ffffff'
    radius: 4
    aspect: '2:3'
    use: 'Carousel tile — title-card SVG overlay anchored bottom-left in 8% inset.'
  poster-card-hover:
    bg: '#1a1c1f'
    color: '#ffffff'
    radius: 4
    transform: 'scale(1.05)'
    shadow: '0 12px 24px rgba(0,0,0,0.7)'
    use: 'Modest scale-up — Max prefers a subtler lift than Netflix.'
  preview-popup:
    bg: '#1a1c1f'
    color: '#ffffff'
    radius: 6
    width: 380
    use: 'Click-to-expand preview with title-card + critical reception strip + CTAs.'
  billboard-hero:
    bg: 'image(billboard-still) cover, #000'
    color: '#ffffff'
    use: 'Full-bleed 16:9 prestige still with editorial pull-quote and SVG title-card overlay.'
  billboard-quote:
    bg: 'transparent'
    color: '#ffffff'
    italic: true
    use: '"A masterpiece — The New York Times" — review pull-quote anchored above CTAs.'
  row-carousel:
    bg: '#0b0c0f'
    color: '#ffffff'
    use: 'Horizontal scroller with chevron arrows on hover.'
  badge-hbo-original:
    bg: '#ffffff'
    color: '#0b0c0f'
    radius: 0
    padding: '4px 8px'
    transform: uppercase
    weight: 700
    use: '"HBO ORIGINAL" / "MAX ORIGINAL" white-block tag in modal header.'
  badge-rating:
    bg: '#3a3d44'
    color: '#ffffff'
    radius: 2
    padding: '2px 6px'
    use: 'Maturity chip "TV-MA", "R", "TV-14".'
  badge-new-episode:
    bg: 'transparent'
    color: '#0072ff'
    border: '1px solid #0072ff'
    radius: 2
    use: '"NEW EPISODE" outlined blue tag.'
  progress-bar:
    bg: '#3a3d44'
    fill: '#0072ff'
    radius: 0
    height: 3
    use: 'Continue-watching blue progress.'
  input-text:
    bg: '#26282d'
    color: '#ffffff'
    radius: 4
    border: '1px solid transparent'
    height: 50
    padding: '14px 18px'
    use: 'Sign-in email field with floating label.'
  nav-bar-transparent:
    bg: 'transparent'
    color: '#ffffff'
    height: 72
    use: 'Top of page over billboard.'
  nav-bar-solid:
    bg: '#0b0c0f'
    color: '#ffffff'
    height: 72
    border-bottom: '1px solid #2a2d33'
    use: 'Post-scroll solidified nav.'
  modal-detail:
    bg: '#1a1c1f'
    color: '#ffffff'
    radius: 8
    use: 'Title-detail modal — 16:9 hero still + critical-acclaim band + season list.'
  player-controls:
    bg: 'linear-gradient(0deg, rgba(0,0,0,0.7), transparent)'
    color: '#ffffff'
    use: 'Bottom video toolbar — blue scrubber fill.'
  hub-tile:
    bg: 'image(hub-art) cover, #1a1c1f'
    color: '#ffffff'
    radius: 8
    height: 120
    use: 'Branded hub entry tile — HBO, DC, Adult Swim, Cartoon Network, Discovery.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-out: 'cubic-bezier(0, 0, 0.2, 1)'
  ease-prestige: 'cubic-bezier(0.65, 0, 0.35, 1)'   # smoother, slower lift
  duration-fast: 120
  duration-standard: 240
  duration-slow: 480
  duration-poster-expand: 400
  reduced-motion: 'respects prefers-reduced-motion: poster scale-up reduces to opacity-only fade; billboard auto-rotation halts; clip autoplay disabled.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1920

shadows:
  none: 'none'
  poster-rest: 'none'
  poster-hover: '0 12px 24px rgba(0,0,0,0.7)'
  modal: '0 32px 64px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.06)'
  hub-tile: '0 8px 24px rgba(0,0,0,0.45)'
  ring: '0 0 0 2px #0072ff'

accessibility:
  contrast-text-on-bg: 19.2
  contrast-text-on-brand: 4.6
  contrast-muted-on-bg: 6.8
  focus-ring: '2px solid #0072ff with 3px offset'
  reduced-motion-honored: true
  caption-track: 'always available, customisable'
  audio-description: 'AD on most originals'

dark-mode: native
---

## 1. Visual Theme & Atmosphere

Max is the prestige-TV streamer wearing a 21st-century streaming UI. The canvas is a deliberate `#0b0c0f` — a deep blue-black, slightly cooler than Netflix's `#141414`, evoking the hour after dusk in an editorial photoshoot. Where Netflix is content-as-wall, Max is content-as-feature: the page renders fewer rows, larger billboard hero stills, and gives every prestige title (Succession, The Last of Us, House of the Dragon, Hacks) the editorial gravity of a museum spread.

The brand blue `#0072ff` is the singular voltage. After the 2023 transition from "HBO Max" to "Max", the wordmark shifted from the gradient-purple lockup to a flat brand-blue letterform. The blue surfaces only on primary CTA, the wordmark, the watched-progress bar, and the "NEW EPISODE" outlined tag — everywhere else is monochrome white-on-deep-black. (Legacy HBO purple `#9c1ee0` still appears occasionally on archived HBO-original surfaces, but it has been progressively retired.)

Sharp Grotesk, the bespoke type family commissioned from Klim Type Foundry, is the second restraint. Display runs 700–800 weight with `-0.02em` to `-0.03em` tracking, body runs 400 in Sharp Grotesk Text. The cut is a modern grotesk with subtly humanised terminals — geometric enough to feel premium-engineered, soft enough to feel narrative-warm. Headlines hold tight (`-0.03em` at 56–72px); body is generous (1.5 line-height, 16–18px).

The page rhythm is editorial. A typical Max landing renders one auto-rotating billboard (longer dwell than Netflix's 12s — Max sits at 14–16s), a hub-tile band (HBO, DC, Adult Swim, Cartoon Network, Discovery, TLC sub-brands), and 4–5 carousel rows. The space between rows is wider (40px) and the section gap larger (96px). The result is a magazine-spread cadence rather than a video-store density.

Where Netflix's interaction signature is the 0.75s delayed-hover poster expand, Max's is the *click*-to-expand preview — posters scale only 1.05× on hover (a whisper, not a leap), and the full preview opens on click. This is more deliberate, more "premium" — the user is making a decision, not browsing.

**Key Characteristics:**
- Deep blue-black `#0b0c0f` canvas — cooler than Netflix, warmer than pure black.
- Brand blue `#0072ff` for primary CTA, wordmark, watched progress, NEW EPISODE tag — rationed.
- Custom Sharp Grotesk display sans (Klim Type Foundry); Sharp Grotesk Text for body.
- Editorial pull-quote ("A masterpiece — The New York Times") woven into billboard hero compositions.
- Title-card SVG artwork at 280–320px wide, anchored bottom-left of poster card with 8% inset.
- Hub-tile band — HBO, DC, Discovery, Adult Swim sub-brand entries with branded backgrounds.
- 1.05× hover scale (subtler than Netflix), click-to-expand preview interaction.
- Critical-reception strip in detail modal — review-quote pull and Rotten Tomatoes/Metacritic scores.
- Sharper typography: 700-weight display with `-0.02em` to `-0.03em` tight tracking.
- Dark-mode-only — Max has no public light theme.

## 2. Color Palette & Roles

### Primary
- **Canvas Deep Blue-Black** (`#0b0c0f`): The defining ground. Cooler than Netflix's `#141414`, slightly bluer than pure black.
- **Pure White** (`#ffffff`): All display and primary text.
- **Max Blue** (`#0072ff`): The single brand action voltage. Wordmark, primary CTA, watched-progress, NEW EPISODE outline.

### Brand & Dark
- **Blue Hover** (`#1f86ff`): CTA hover lift, 240ms transition.
- **Blue Active** (`#0058cc`): Press / pointer-down state.
- **Blue Deep** (`#003e99`): Gradient terminus on subscribe-page hero.
- **Pure Black** (`#000000`): Reserved for billboard scrim terminus and player surface.
- **Legacy HBO Purple** (`#9c1ee0`): Retained on some HBO-original archive surfaces; being progressively retired.
- **HBO Prestige Purple** (`#7a1fa2`): Original HBO logo purple, on legacy network-mark contexts.

### Accent
- **Gold** (`#c9a961`): Premium-tier "Max Ultimate" badge accent on the plan-comparison page. Rare elsewhere.
- **Cyan** (`#00d4ff`): Sport / docs sub-brand accent — used on Bleacher Report integration.
- **Brand Purple Soft** (`#5f0d8a`): Origin colour of HBO-Max gradient washes on legacy archival pages.

### Interactive
- **CTA Blue** (`#0072ff`): Primary action.
- **Glass White** (`rgba(255,255,255,0.15)` with `rgba(255,255,255,0.3)` 1px border): Translucent secondary on billboard.
- **Outline Grey** (`#4d5159` border on transparent): Ghost CTA on dark surface.

### Neutral Scale
- **Display White** (`#ffffff`): Headlines.
- **Body Light** (`#e6e7eb`): Synopsis paragraph text.
- **Muted** (`#9aa0aa`): Metadata, "2024 · S2 · 8 Episodes · TV-MA".
- **Soft** (`#6c7280`): Disabled, footer secondary.
- **Disabled** (`#4d5159`): Greyed-out menu items.
- **Mid Grey** (`#3a3d44`): Unfilled progress rail, maturity-chip background.

### Surface & Borders
- **Surface Strong** (`#26282d`): Input fill, hovered element ground.
- **Surface Default** (`#1a1c1f`): Secondary panel, modal ground.
- **Surface Soft** (`#15171a`): Alt-row band.
- **Surface Overlay** (`rgba(11,12,15,0.85)`): Billboard scrim ground.
- **Border Default** (`#2a2d33`): 1px hairline divider.
- **Border Soft** (`#1f2126`): Subtler row divider.
- **Border Strong** (`#4d5159`): Focused input outline.

### Shadow Colors
- **Poster Hover** (`rgba(0,0,0,0.7)`): Hard, opaque drop — same logic as Netflix (soft shadows vanish on dark grounds).
- **Modal** (`rgba(0,0,0,0.85)`): Heavy under-modal shadow.
- **Hub Tile** (`rgba(0,0,0,0.45)`): Lighter lift on the hub-tile band, where tiles already have visible bg.

### Semantic
- **Success** (`#00c08a`): Subscription-confirmed teal-green.
- **Warning** (`#f6b73c`): Buffering indicator amber.
- **Danger** (`#ff4757`): Form validation red.
- **Danger Deep** (`#cc1c2c`): Hovered danger state.
- **Info** (`#0072ff`): Matches brand blue — info banners use brand colour.

## 3. Typography Rules

### Font Family
- **Primary Display**: `"Sharp Grotesk"` — bespoke Klim Type Foundry cut commissioned for the 2020 HBO Max launch and refined for the 2023 Max rebrand. Weights 400, 500, 700, 800, 900. Falls back to `"Helvetica Neue", Helvetica, Arial`.
- **Body**: `"Sharp Grotesk Text"` — humanist text companion to the display cut. Optimised for 14–18px sizes.
- **Mono**: SF Mono / Menlo fallback chain. Used only on developer doc surfaces.
- **OpenType Features**: `ss01` for stylistic alternates on display; `tnum` for metadata rows ("S2 · 8 Episodes · 47m").

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| Billboard Hero (text fallback) | Sharp Grotesk | 72px | 800 | 1.0 | -0.03em | ss01 | Used only when title-card SVG unavailable |
| Display XL | Sharp Grotesk | 56px | 800 | 1.05 | -0.025em | ss01 | Detail modal hero |
| Display LG | Sharp Grotesk | 40px | 700 | 1.1 | -0.02em | ss01 | Marketing landing hero |
| Display MD | Sharp Grotesk | 28px | 700 | 1.15 | -0.01em | ss01 | Modal sub-header, season label |
| Display SM | Sharp Grotesk | 22px | 700 | 1.2 | 0 | ss01 | Episode title in season list |
| Section Title | Sharp Grotesk | 20px | 500 | 1.3 | 0 | -- | "Continue Watching", "New This Month" |
| Row Title | Sharp Grotesk | 18px | 500 | 1.2 | 0 | -- | Carousel row label |
| Body LG | Sharp Grotesk Text | 18px | 400 | 1.5 | 0 | -- | Modal synopsis |
| Body MD | Sharp Grotesk Text | 16px | 400 | 1.5 | 0 | -- | Account, settings |
| Body SM | Sharp Grotesk Text | 14px | 400 | 1.43 | 0 | -- | Episode descriptions |
| Button LG | Sharp Grotesk | 16px | 700 | 1.0 | 0.01em | -- | Primary CTA |
| Button MD | Sharp Grotesk Text | 14px | 700 | 1.0 | 0.01em | -- | Modal action |
| Caption | Sharp Grotesk Text | 13px | 400 | 1.4 | 0 | -- | Disclosures |
| Metadata | Sharp Grotesk Text | 14px | 400 | 1.3 | 0 | tnum | "2024 · S2 · 8 Episodes" |
| Badge Rating | Sharp Grotesk Text | 11px | 700 | 1.0 | 0.05em | -- | "TV-MA", uppercase |
| Nav Link | Sharp Grotesk Text | 14px | 500 | 1.0 | 0.01em | -- | Top nav |
| Legal | Sharp Grotesk Text | 12px | 400 | 1.5 | 0 | -- | Footer |
| Micro Label | Sharp Grotesk Text | 11px | 700 | 1.0 | 0.08em | -- | "MAX ORIGINAL", uppercase |
| Editorial Quote | Sharp Grotesk | 22px | 500 | 1.35 | 0 | -- | Critic pull-quote, italic permitted here |

### Principles
- **Sharp Grotesk's tight tracking is the brand voice.** Display sizes hold `-0.02em` to `-0.03em` — anything looser reads as generic.
- **Editorial italics permitted, but only for pull-quotes.** Sharp Grotesk italic appears only in the critic-quote slot. Everywhere else, upright.
- **800 weight for hero, 700 for sub-display.** This double-bold cadence creates the prestige-TV "this is HBO important" tone.
- **Tabular numerals on episode metadata.** Season-list "S2 E07 · 47m" rows align via `tnum`.
- **Uppercase reserved for badges + tags only.** Sentence case rules for everything else.
- **Body in Sharp Grotesk Text, not Display.** Klim's separate body cut has wider proportions optimised for paragraph reading.

## 4. Component Stylings

### Buttons

**Primary CTA**
- Background: `#0072ff`. Text: `#ffffff`. Radius: `4px`. Padding: `14px 28px`. Height: `48px`. Font: Sharp Grotesk 16 / 700, `0.01em` tracking.
- Hover: `#1f86ff` (240ms ease-standard).
- Active: `#0058cc`.
- Use: "Sign Up Now", "Start Streaming", "Watch", "Continue".

**Primary Hero CTA**
- Background: `#0072ff`. Text: `#ffffff`. Radius: `4px`. Padding: `18px 36px`. Height: `56px`.
- Use: Billboard hero "Watch" — paired with glass More Info sibling.

**Glass Secondary**
- Background: `rgba(255,255,255,0.15)`. Border: `1px solid rgba(255,255,255,0.3)`. Color: `#ffffff`. Radius: `4px`. Padding: `14px 28px`.
- Use: "More Info" sibling on billboard. Frost-glass over still imagery.

**White CTA**
- Background: `#ffffff`. Color: `#0b0c0f`. Radius: `4px`.
- Use: Acquisition page "Choose Your Plan" — high-contrast over deep blue gradient hero.

**Ghost / Outline**
- Background: `transparent`. Color: `#ffffff`. Border: `1px solid #4d5159`. Radius: `4px`.
- Use: Modal cancel, settings cancel, "Skip Intro".

### Cards & Tiles

**Poster Card**
- Background: `#1a1c1f`. Aspect: 2:3. Radius: `4px`. No shadow at rest.
- Title-card SVG overlay anchored bottom-left, 8% inset from edges, max 70% of card width.
- Hover: 1.05× scale + `0 12px 24px rgba(0,0,0,0.7)` shadow, 240ms ease-prestige.

**Preview Popup**
- Background: `#1a1c1f`. Radius: `6px`. Width: 380px.
- Trigger: click-to-expand (not hover, like Netflix).
- Content: 16:9 still, title-card SVG, critical-acclaim badges (Rotten Tomatoes %, Metacritic score, Emmy/Golden Globe/Peabody if applicable), 2-line synopsis, Watch + Add-to-List + More-Info row.

**Billboard Hero**
- Aspect: 16:9 full-bleed. Bottom inset gradient: `#0b0c0f` over 240px.
- Title-card SVG: 320–400px wide, anchored bottom-left at 7% page-width inset.
- Editorial pull-quote: optional, 22px Sharp Grotesk italic 500, anchored above CTAs in a 480px-wide column.
- CTAs: Blue Watch + Glass More Info.
- Auto-rotate: 14–16s dwell, 1.2s cross-dissolve.

**Hub Tile**
- Background: full-bleed sub-brand artwork (HBO, DC, Adult Swim, Cartoon Network, Discovery, TLC, ID).
- Radius: `8px`. Height: 120px on desktop, aspect 16:9 on mobile.
- Hover: 1.04× scale + `0 8px 24px rgba(0,0,0,0.45)`.
- Layout: horizontal row of 6–7 tiles, gutter 12px.

**Detail Modal**
- Background: `#1a1c1f`. Radius: `8px`. Width: clamp(900px, 80vw, 1400px).
- Header: 16:9 hero still with title-card SVG anchored bottom-left.
- Critical strip: Rotten Tomatoes badge + Metacritic + Emmy/Globe icons in a horizontal row beneath the still.
- Synopsis: 18px / 400 / 1.5 paragraph.
- Episode list: per-season tabbed view with 16:9 episode-still + title + runtime + synopsis.

### Badges, Tags

**MAX ORIGINAL / HBO ORIGINAL**
- Background: `#ffffff`. Color: `#0b0c0f`. Radius: `0`. Padding: `4px 8px`. Font: 11px / 700 uppercase, `0.08em` tracking.
- Use: White-block tag in modal header above the title.

**Maturity Rating**
- Background: `#3a3d44`. Color: `#ffffff`. Radius: `2px`. Padding: `2px 6px`.
- Use: "TV-MA", "R", "TV-14" chip in metadata row.

**NEW EPISODE**
- Background: `transparent`. Color: `#0072ff`. Border: `1px solid #0072ff`. Radius: `2px`.
- Use: Outlined blue pill on returning-series posters.

**Critical Acclaim Pill**
- Background: `#1a1c1f`. Color: `#c9a961`. Border: `1px solid #c9a961`. Radius: `pill`. Padding: `4px 12px`.
- Use: "Emmy Winner", "Golden Globe Nominee" — gold-on-dark pill in critical strip.

### Inputs, Forms

**Text Input**
- Background: `#26282d`. Color: `#ffffff`. Radius: `4px`. Border: `1px solid transparent`. Height: `50px`.
- Floating label: `#9aa0aa` 13px → animates to top-left on focus.
- Focus: Border `#0072ff`.

**Plan-Card (Subscribe page)**
- Background: `#1a1c1f`. Radius: `8px`. Border: `1px solid #2a2d33` (default) → `1px solid #0072ff` (selected).
- Selected state shows blue ring `0 0 0 2px #0072ff`.
- Use: With Ads / Standard / Ultimate plan-comparison cards.

### Navigation

**Top Nav (Transparent)**
- Background: `transparent`. Color: `#ffffff`. Height: `72px`.
- Logo: blue Max wordmark (24px height) anchored left.
- Links: Home, Series, Movies, Originals, Sport, Browse — five-link bar.

**Top Nav (Solid)**
- Background: `#0b0c0f` + 1px bottom hairline `#2a2d33` after scrollY > 60px.
- 240ms transition.

**Hub Sub-Nav**
- When user enters a hub (e.g. /hbo), sub-nav appears below main with hub-specific filters.

### Player

**Player Controls**
- Background: `linear-gradient(0deg, rgba(0,0,0,0.7), transparent)`. Height: 100px.
- Scrubber: rail `#3a3d44`, fill `#0072ff`, height `4px`.
- Playhead: `#0072ff` 14×14 circle, scales to 18×18 on hover.

## 5. Layout Principles

### Spacing System
- Base: 4px. Scale: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 120.
- Row gap: 40px (looser than Netflix's 36) — Max wants more editorial air.
- Section gap: 96px between major page modules.

### Grid & Container
- Page width: 1920px max. Content max: 1440px.
- Carousel: 6 posters per row at desktop, 4 at tablet, 2.5 at mobile.
- Hub-tile band: 6 tiles per row at desktop, 3 at tablet, 2 at mobile.
- Header: 72px fixed.

### Whitespace Philosophy
Max balances density with editorial breathing room. Typical landing renders billboard + hub band + 4 carousel rows above the fold (vs Netflix's 6–7). The page reads more like a magazine table-of-contents than a video-store wall.

### Section Cadence
- Billboard hero (16:9 full-bleed)
- Hub-tile band (HBO, DC, Adult Swim, Cartoon Network, Discovery, TLC, ID)
- Continue Watching (if applicable)
- Editorial spotlight ("Critically Acclaimed")
- 3–4 personalised rows
- Footer (compact dark)

## 6. Shapes & Radius Scale

- **Sharp** (`0px`): MAX ORIGINAL badge, watched-progress bar, billboard image edges. Sharp where the artwork dominates.
- **Micro** (`2px`): Maturity rating chip, NEW EPISODE outlined tag.
- **Standard** (`4px`): Buttons, poster cards, inputs.
- **Comfortable** (`6px`): Preview popup.
- **Relaxed** (`8px`): Detail modal, hub tiles, plan cards.
- **Pill** (`9999px`): Critical-acclaim pills, profile avatars.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | Flat, no shadow | Default poster, page bg, transparent nav |
| 1 | 1px `#2a2d33` border | Section dividers, focused input |
| 2 | `0 8px 24px rgba(0,0,0,0.45)` | Hub-tile hover |
| 3 | `0 12px 24px rgba(0,0,0,0.7)` + scale(1.05) | Poster hover |
| 4 | `0 32px 64px rgba(0,0,0,0.85)` + scrim | Detail modal |
| 5 | `rgba(0,0,0,0.5)` scrim only | Player chrome |

### Shadow Philosophy
Same as Netflix's near-black canvas problem — soft shadows vanish, so Max uses hard, opaque drops. The hover lift is gentler (1.05× vs 1.4×) to read as premium-restraint rather than browse-energy.

## 8. Interaction & Motion

### Easing Curves
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — defaults.
- **Out**: `cubic-bezier(0, 0, 0.2, 1)` — incoming elements.
- **Prestige**: `cubic-bezier(0.65, 0, 0.35, 1)` — slower, more deliberate. The brand's signature ease for poster hover and modal entry.

### Duration Buckets
- **Fast**: 120ms — colour shift on button hover.
- **Standard**: 240ms — modal in, billboard CTA hover, poster scale.
- **Slow**: 480ms — billboard cross-dissolve.

### Per-Component Recipes
- **Primary CTA hover**: `#0072ff → #1f86ff`, 120ms.
- **Glass button hover**: bg `0.15 → 0.25` opacity lift, border opacity `0.3 → 0.5`.
- **Poster hover**: 1.0× → 1.05×, 240ms ease-prestige + shadow fade-in.
- **Billboard auto-rotate**: 14–16s dwell, 1.2s cross-dissolve.
- **Modal in**: 360ms ease-prestige, scale 0.96 → 1.0 + opacity 0 → 1.
- **Top-nav solidify**: 240ms ease-standard at scrollY > 60px.

### Page Transitions
Hub navigation uses route-driven transitions with a 240ms cross-fade of the carousel band; modal navigation is in-page.

### Reduced Motion
- Poster hover → opacity-only (no scale).
- Billboard auto-rotate → halts.
- Modal in → opacity-only.
- Clip autoplay → static still.

## 9. Accessibility & A11y

### Contrast Pairs
- White on `#0b0c0f`: **19.2:1** — AAA.
- Muted `#9aa0aa` on `#0b0c0f`: **6.8:1** — AAA at body sizes.
- White on brand `#0072ff`: **4.6:1** — AA.
- Soft `#6c7280` on `#0b0c0f`: **3.4:1** — AA large only.
- Gold `#c9a961` on `#1a1c1f`: **6.2:1** — AAA.

### Focus Indicators
- 2px solid `#0072ff` ring with 3px offset on all controls. Brand-blue ring against deep canvas reads with high salience and ties focus to brand.

### ARIA Patterns
- Carousels: `role="region" aria-roledescription="carousel"`.
- Hub tiles: `role="link" aria-label="Browse [Sub-brand]"`.
- Modal: `role="dialog" aria-modal="true"`, focus trapped, ESC closes.
- Player: standard media controls with full keyboard support.

### Keyboard Navigation
- Tab between rows; arrows within rows.
- Enter on poster opens detail modal.
- Space play/pause in player.
- Esc closes modal / pauses / exits fullscreen progressively.

### Screen Reader
- Poster `aria-label` packs title, year, season info, maturity, critical scores.
- Hub tile `aria-label` names sub-brand explicitly.

### Caption / AD
- Caption tracks on all originals; full customisation (color, size, edge, opacity).
- Audio description on most HBO originals; toggle from player gear.

### Reduced Motion
Honoured per §8.

## 10. Responsive Behavior

### Breakpoints
| Token | Min | Use |
|-------|-----|-----|
| mobile | 0px | 2.5 posters peek, hub-tiles stack 2-wide |
| tablet | 1024px | 4 posters, hub 3-wide |
| desktop | 1280px | 6 posters, hub 6-wide |
| wide | 1920px | 6 posters, billboard full-bleed |

### Touch Targets
- 48×48 minimum hit area on all controls. Buttons full-width on mobile.

### Collapsing Strategy
- Top nav links → hamburger at < 1024px.
- Billboard CTAs → stacked at < 640px.
- Detail modal → full-screen sheet at < 768px.
- Hub-tile band → 2-up grid on mobile, scrolls vertically.

### Image Behavior
- Posters: 2:3, lazy-loaded, srcset 250/500/1000w.
- Billboard: 16:9, srcset 720/1080/1440/2160p.
- Hub tile: 16:9 sub-brand artwork, srcset 300/600/1200w.

### Container Queries
Preview popup chooses left/right anchor based on row-container CQ.

## 11. Content & Voice

### Tone
Max's voice is **prestige-editorial**. Less "watch this" and more "this is the work." Acquisition copy invokes craft ("home of the cultural conversations that shape us"); product copy invokes critical reception ("Emmy-winning", "from the creator of...").

### Microcopy Patterns
- **Primary CTA**: "Sign Up Now", "Start Streaming", "Watch" (in product), "Continue".
- **Secondary**: "More Info", "Try It Free".
- **Acquisition headline**: "Where HBO meets so much more." or "Stream now. Cancel anytime."
- **Empty list**: "Movies and shows you've added will appear here."
- **Error**: "We can't find an account with that email. Try a different one or sign up."
- **Profile prompt**: "Who's watching?"
- **Cancellation**: "Cancel anytime. No commitments."

### Empty States
Empty My-List: text + 6-poster suggested-adds row. Empty Continue Watching: row hidden (not rendered).

### CTA Verb Conventions
- "Watch" (primary in product) > "Stream" > "Sign Up" > "Start Streaming".
- "Add to My List" not "Save".
- "More Info" > "Details".

## 12. Dark Mode & Theming

**Dark-only.** Max ships no public light theme. The video-streaming context favours dark for OLED-friendliness and viewer-eye fatigue across long sessions. Help-doc / legal surfaces (`help.max.com`) use a neutral light skin for documentation legibility, but this is not part of the consumer product.

A hypothetical light theme would lift canvas to `#fafafa` and deepen brand to `#005ad6` for AA — but no design exists.

## 13. Lineage & Influences

Max's lineage is HBO's premium-cable identity translated to streaming UI.

**HBO premium cable.** The "MAX ORIGINAL" / "HBO ORIGINAL" white-block tag is a direct descendant of HBO's late-90s on-screen ID slate. The dark-canvas-with-prestige-still aesthetic mirrors HBO's mid-2000s on-air bumpers.

**The New York Times Magazine.** The editorial pull-quote on the billboard hero is borrowed from broadsheet feature-piece layout. Sharp Grotesk's humanised terminals echo NYT-Mag's preferred typography.

**Apple TV (2019+).** The hub-tile band and the larger-than-Netflix billboard borrow from Apple TV's prestige-streaming UI vocabulary.

What Max rejects: high-density poster walls (Netflix), thumbnail-heavy preview cards (YouTube), gamified tile aesthetics. Restraint is the brand.

**Influences:**
- **HBO (1972–present)** — premium-cable identity, "It's not TV. It's HBO."
- **Klim Type Foundry** — drew Sharp Grotesk and Sharp Grotesk Text. https://klim.co.nz
- **The New York Times Magazine** — editorial pull-quote convention.
- **Apple TV+ (2019)** — prestige-streaming hub-tile pattern. https://tv.apple.com
- **Saul Bass** — title-as-graphic SVG-overlay principle.

## 14. Do's and Don'ts

**Do:**
- Use `#0b0c0f` — slightly bluer than Netflix's near-black, warmer than pure black.
- Reserve `#0072ff` for primary CTA, wordmark, watched-progress, NEW EPISODE outline.
- Render show titles as title-card SVG anchored bottom-left of poster with 8% inset.
- Use Sharp Grotesk 700–800 weight at display sizes with `-0.02em` to `-0.03em` tracking.
- Include editorial pull-quote in billboard hero when a critic-quote is available.
- Surface Rotten Tomatoes / Metacritic / Emmy / Golden Globe in detail-modal critical strip.
- Use 1.05× hover scale (subtler than Netflix), with 240ms ease-prestige curve.
- Show MAX ORIGINAL / HBO ORIGINAL white-block tag above title in modals.
- Use hub-tile band for sub-brand entry (HBO, DC, Discovery, Adult Swim, etc).
- Default to dark — Max has no light theme.

**Don't:**
- Don't use Netflix's `#141414` — Max's `#0b0c0f` is cooler and bluer; the shift is intentional.
- Don't pile colour onto the page — blue is the only brand voltage; everything else is monochrome.
- Don't over-densify — Max wants 4–5 rows above the fold, not Netflix's 6–7.
- Don't auto-play preview clips on hover — Max uses click-to-expand; hover is just 1.05× lift.
- Don't use italic Sharp Grotesk except for the editorial pull-quote slot.
- Don't use legacy purple `#9c1ee0` on new surfaces — the brand transitioned to blue in 2023.
- Don't apply soft shadows — they vanish on `#0b0c0f`; use hard `rgba(0,0,0,0.7)` drops.
- Don't put the wordmark in any colour but `#0072ff` (or white over blue surfaces).
- Don't use uppercase outside of MAX ORIGINAL, NEW EPISODE, and rating chips.
- Don't introduce a light theme — Max is dark.

## 15. Agent Prompt Guide

### Quick Color Reference
- Canvas: `#0b0c0f`
- Brand Blue: `#0072ff`
- Blue Hover: `#1f86ff`
- Pure White: `#ffffff`
- Muted: `#9aa0aa`
- Surface: `#1a1c1f`
- Surface Strong: `#26282d`
- Border: `#2a2d33`
- Glass White: `rgba(255,255,255,0.15)`
- Gold (premium): `#c9a961`

### Example Component Prompts
1. "Create a Max-style billboard hero — full-bleed 16:9 prestige still with bottom `#0b0c0f` gradient over 240px, title-card SVG at 360px wide bottom-left at 7% page inset, optional 22px Sharp Grotesk italic 500 critic pull-quote above CTAs, blue `#0072ff` Watch button + `rgba(255,255,255,0.15)` glass More Info."
2. "Design a Max poster card — 2:3 portrait, `#1a1c1f` bg, 4px radius, title-card SVG anchored bottom-left with 8% inset, on hover scale to 1.05× over 240ms with `cubic-bezier(0.65,0,0.35,1)` and gain `0 12px 24px rgba(0,0,0,0.7)` shadow."
3. "Build a Max hub-tile band — 6 horizontal sub-brand tiles (HBO, DC, Adult Swim, Cartoon Network, Discovery, TLC), each 16:9 with full-bleed brand artwork, 8px radius, 12px gutter, 1.04× hover scale + `0 8px 24px rgba(0,0,0,0.45)` shadow."
4. "Render a Max detail modal — `#1a1c1f` bg, 8px radius, 16:9 hero still header, MAX ORIGINAL white-block tag above title, critical-acclaim strip beneath (Rotten Tomatoes %, Metacritic, Emmy nominations), 18px Sharp Grotesk Text synopsis paragraph."
5. "Create a Max plan card — `#1a1c1f` bg, 8px radius, 1px `#2a2d33` border, blue `#0072ff` border + `0 0 0 2px #0072ff` ring on selected, plan-name in 28px Sharp Grotesk 700, monthly price in 40px 800."

### Iteration Guide
1. **Cool the canvas.** If the page reads as Netflix-warm, push canvas bluer toward `#0b0c0f`.
2. **Sharpen the type.** Sharp Grotesk's brand voice is its tight tracking — pull display to `-0.025em`.
3. **Editorialise.** If the billboard feels generic, add a critic pull-quote — Max's signature.
4. **Subtler hover.** If the poster hover feels Netflix-like, reduce scale from 1.4× to 1.05× and slow the curve.
5. **Add a critical strip.** Detail modals without Rotten Tomatoes / Metacritic feel un-Max.
6. **Hub-tile, don't poster.** Sub-brand entries use larger 16:9 tiles, not portrait posters.
7. **Pull the colour.** If you have more than blue + neutrals + white on screen, audit for stray accent colour — Max is monochrome with one brand voltage.
8. **Italicise the quote.** Sharp Grotesk italic appears nowhere except critic pull-quotes — guard the rule.
