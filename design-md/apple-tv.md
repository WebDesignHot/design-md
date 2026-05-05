---
name: Apple TV+
tagline: Pure-black cinematic theatre with SF Pro and ruthless minimalism — content as the only voice.
author: webdesignhot
source_url: https://tv.apple.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [media, marketplace]
tags: [dark, minimal, sans, cinematic, prestige, restrained, premium]
preview_swatch: ['#000000', '#ffffff', '#0070e0']
related: [apple, netflix, hbo-max]
description: 'Apple TV+ runs the most ruthlessly minimal streaming UI in the category — a pure-black `#000000` canvas, SF Pro Display at moderate weights, and an aggressively restrained chrome where the content artwork *is* the design. Brand voltage is Apple Blue `#0070e0` (the same hue as the Apple ecosystem), but it appears only on the rare CTA where a button is unavoidable; most surfaces are plain white text on pure black with no decoration whatsoever. Where Netflix offers content-density and Disney+ offers hall-of-franchises, Apple TV+ is content-as-art-gallery — fewer, larger billboards, longer dwells on hero stills, and a layout that feels closer to a curated film festival than a streaming marketplace. Type uses SF Pro Display 600–700 with negative tracking on display sizes, and SF Pro Text for body. Geometry is flat 8px radius (Apple''s standard), shadows are subtle, and the aesthetic is "the platform vanishes, the work remains."'

colors:
  bg: '#000000'                    # canvas — pure-black, the Apple TV+ signature
  bg-deep: '#000000'                # consistent — no gradient
  surface: '#1c1c1e'                # secondary panel (Apple system grey-1 dark)
  surface-strong: '#2c2c2e'         # hover, input fill (Apple system grey-2 dark)
  surface-soft: '#0a0a0a'            # alt row band, near-black lift
  surface-card: '#1c1c1e'            # card surface
  surface-overlay: 'rgba(0,0,0,0.85)'
  text: '#ffffff'                    # ink
  text-strong: '#ffffff'
  text-body: '#ebebf5'                # secondary text (Apple system label dark)
  text-muted: '#ebebf599'              # 60% — Apple secondary label dark
  text-soft: '#ebebf57a'                # 48% — Apple tertiary label dark
  text-disabled: '#ebebf54d'             # 30% — Apple quaternary label dark
  brand: '#0070e0'                     # Apple Blue (system tint)
  brand-hover: '#1a86f0'                # subtle lift
  brand-active: '#005fbf'                # press deep
  brand-deep: '#003c8f'                  # gradient terminus, rare
  brand-tv: '#cd0000'                    # Apple TV+ wordmark red used on the marquee logo (rarely surfaced)
  on-brand: '#ffffff'
  accent-pink: '#ff375f'                  # Apple system pink — used on accent badges (rare)
  accent-orange: '#ff9f0a'                 # Apple system orange — buffering / warning
  accent-green: '#34c759'                  # Apple system green — success
  accent-purple: '#bf5af2'                  # Apple system purple — used on docs/sport sub-content
  border: '#38383a'                       # Apple system separator dark
  border-soft: '#1c1c1e'                  # divider matches surface
  border-strong: '#48484a'                # focused input
  shadow-card: 'rgba(0,0,0,0.7)'
  shadow-billboard: 'rgba(0,0,0,0.9)'
  scrim-bottom: 'linear-gradient(0deg, #000000 0%, transparent 100%)'
  success: '#34c759'
  warning: '#ff9f0a'
  danger: '#ff453a'
  info: '#0070e0'
  progress-watched: '#ffffff'              # white progress, not blue — keeps player chromatic-quiet
  progress-rail: 'rgba(255,255,255,0.3)'
  rating-badge: '#ffffff'                  # white maturity chip on dark
  liquid-glass-tint: 'rgba(255,255,255,0.18)'  # iOS 26 liquid-glass tint for player chrome

typography:
  display:
    family: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [300, 400, 500, 600, 700]
    opentype-features: ['ss01', 'tnum']
  body:
    family: '"SF Pro Text", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"SF Mono", SFMono-Regular, Menlo, Consolas, monospace'
    weights: [400]
  scale:
    billboard-hero:    { size: 80, weight: 700, lineHeight: 1.0,  tracking: '-0.025em',family: display, notes: 'Text fallback; usually SVG title-card' }
    display-xl:        { size: 56, weight: 700, lineHeight: 1.05, tracking: '-0.022em',family: display }
    display-lg:        { size: 40, weight: 600, lineHeight: 1.1,  tracking: '-0.018em',family: display }
    display-md:        { size: 32, weight: 600, lineHeight: 1.15, tracking: '-0.014em',family: display }
    display-sm:        { size: 24, weight: 600, lineHeight: 1.2,  tracking: '-0.01em', family: display }
    section-title:     { size: 22, weight: 600, lineHeight: 1.25, tracking: '-0.005em',family: display }
    row-title:         { size: 17, weight: 600, lineHeight: 1.3,  tracking: '0',       family: display }
    body-lg:           { size: 19, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body }
    body-md:           { size: 17, weight: 400, lineHeight: 1.47, tracking: '0',       family: body, notes: 'Apple body default — 17px not 16' }
    body-sm:           { size: 15, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body }
    button-lg:         { size: 17, weight: 600, lineHeight: 1.0,  tracking: '0',       family: body }
    button-md:         { size: 15, weight: 600, lineHeight: 1.0,  tracking: '0',       family: body }
    caption:           { size: 13, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body }
    metadata:          { size: 15, weight: 400, lineHeight: 1.3,  tracking: '0',       family: body, opentype: ['tnum'] }
    badge-rating:      { size: 11, weight: 600, lineHeight: 1.0,  tracking: '0.04em',  family: body, transform: uppercase }
    nav-link:          { size: 14, weight: 500, lineHeight: 1.0,  tracking: '0',       family: body }
    legal:             { size: 12, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body }
    micro-label:       { size: 12, weight: 700, lineHeight: 1.0,  tracking: '0.06em',  family: body, transform: uppercase, notes: '"NEW SEASON", "PREMIERING"' }
    editorial-quote:   { size: 22, weight: 400, lineHeight: 1.4,  tracking: '0',       family: display, notes: 'Critic pull-quote — italic permitted' }

radius:
  micro: 0
  sm: 4
  md: 8           # standard Apple radius — buttons, inputs
  lg: 12          # cards
  xl: 16          # detail modal, hero
  pill: 9999

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160]

layout:
  page-width: 1920
  content-max: 1440
  header-height: 64
  row-gap: 48               # generous — Apple TV+ uses more whitespace than peers
  poster-aspect: '16:9'     # Apple TV+ defaults to landscape 16:9 (large hero stills)
  billboard-aspect: '16:9'

components:
  button-primary:
    bg: '#ffffff'
    color: '#000000'
    radius: 8
    padding: '12px 24px'
    height: 44
    font: button-lg
    use: 'Default primary CTA — white-on-black inverts the canvas. Rare elsewhere.'
  button-primary-hover:
    bg: '#ebebeb'
    color: '#000000'
    radius: 8
    use: 'Slight grey shift on hover, no shadow.'
  button-blue:
    bg: '#0070e0'
    color: '#ffffff'
    radius: 8
    padding: '12px 24px'
    height: 44
    use: 'Blue Apple-system CTA — used on Sign In, Subscribe, paid CTAs.'
  button-large-hero:
    bg: '#ffffff'
    color: '#000000'
    radius: 8
    padding: '14px 32px'
    height: 52
    use: 'Billboard hero "Play" CTA — paired with secondary glass More.'
  button-glass:
    bg: 'rgba(255,255,255,0.2)'
    color: '#ffffff'
    radius: 8
    border: '1px solid rgba(255,255,255,0.25)'
    backdrop-filter: 'blur(20px)'
    use: '"More Info" sibling on billboard — frosted glass over still.'
  button-ghost:
    bg: 'transparent'
    color: '#ffffff'
    border: '1px solid rgba(255,255,255,0.3)'
    radius: 8
    use: 'Modal cancel, Skip Intro.'
  poster-card-landscape:
    bg: '#1c1c1e'
    color: '#ffffff'
    radius: 12
    aspect: '16:9'
    use: 'Default Apple TV+ tile — landscape hero still with title overlay.'
  poster-card-portrait:
    bg: '#1c1c1e'
    color: '#ffffff'
    radius: 12
    aspect: '2:3'
    use: 'Movie-Originals row alt tile.'
  poster-card-hover:
    bg: '#1c1c1e'
    color: '#ffffff'
    radius: 12
    transform: 'scale(1.03)'
    shadow: '0 16px 32px rgba(0,0,0,0.7)'
    use: 'Subtle lift — no border, no glow ring. Apple TV+ refuses ornament.'
  preview-popup:
    bg: '#1c1c1e'
    color: '#ffffff'
    radius: 16
    width: 400
    use: 'Click-to-expand preview with hero clip + title-card SVG + critical strip.'
  billboard-hero:
    bg: 'image(billboard-still) cover, #000'
    color: '#ffffff'
    use: 'Full-bleed 16:9 still or auto-loop video, with bottom black gradient and SVG title-card overlay.'
  billboard-quote:
    bg: 'transparent'
    color: '#ffffff'
    italic: true
    use: '"Acclaimed by Apple TV+" or critic quote — anchored above CTAs.'
  row-carousel:
    bg: '#000000'
    color: '#ffffff'
    use: 'Horizontal scroller with arrow chevrons on hover.'
  badge-apple-original:
    bg: 'transparent'
    color: '#ffffff'
    border: '1px solid rgba(255,255,255,0.4)'
    radius: 4
    padding: '3px 8px'
    transform: uppercase
    weight: 600
    use: '"AN APPLE ORIGINAL" outlined white tag in modal header.'
  badge-rating:
    bg: 'rgba(255,255,255,0.15)'
    color: '#ffffff'
    radius: 4
    padding: '2px 6px'
    use: '"TV-MA", "PG-13" maturity chip.'
  badge-premiering:
    bg: 'transparent'
    color: '#0070e0'
    border: '1px solid #0070e0'
    radius: 4
    use: '"PREMIERING [DATE]" outlined blue tag.'
  badge-new-season:
    bg: '#ffffff'
    color: '#000000'
    radius: 4
    padding: '3px 8px'
    use: '"NEW SEASON" white-block tag.'
  progress-bar:
    bg: 'rgba(255,255,255,0.3)'
    fill: '#ffffff'
    radius: 9999
    height: 3
    use: 'Continue-watching white progress (not blue — keeps player chromatic-quiet).'
  input-text:
    bg: '#1c1c1e'
    color: '#ffffff'
    radius: 8
    border: '1px solid #38383a'
    height: 44
    padding: '12px 16px'
    use: 'Sign-in field.'
  input-focused:
    bg: '#1c1c1e'
    color: '#ffffff'
    border: '1px solid #0070e0'
    use: 'Apple-blue focus ring.'
  nav-bar-transparent:
    bg: 'transparent'
    color: '#ffffff'
    height: 64
    use: 'Top of page.'
  nav-bar-solid-glass:
    bg: 'rgba(0,0,0,0.7)'
    backdrop-filter: 'blur(20px)'
    color: '#ffffff'
    height: 64
    use: 'Post-scroll glass-blurred nav (iOS 26 liquid-glass aesthetic).'
  modal-detail:
    bg: '#000000'
    color: '#ffffff'
    radius: 16
    use: 'Title-detail modal — 16:9 hero still + AN APPLE ORIGINAL tag + season list.'
  player-controls:
    bg: 'rgba(0,0,0,0.5)'
    backdrop-filter: 'blur(20px)'
    color: '#ffffff'
    use: 'Liquid-glass player toolbar — translucent over the video.'
  apple-tv-app-tile:
    bg: '#1c1c1e'
    color: '#ffffff'
    radius: 12
    use: 'Channel/app entry tile (HBO Max, Paramount+, MGM+ via Apple TV Channels).'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-out: 'cubic-bezier(0, 0, 0.2, 1)'
  ease-apple-spring: 'cubic-bezier(0.32, 0.72, 0, 1)'    # iOS-spring, Apple's default
  duration-fast: 200
  duration-standard: 350
  duration-slow: 600
  reduced-motion: 'respects prefers-reduced-motion: scale-up reduces to opacity, billboard auto-loop pauses, modal scale becomes opacity-only.'

breakpoints:
  mobile: 600
  tablet: 1024
  desktop: 1280
  wide: 1920

shadows:
  none: 'none'
  poster-rest: 'none'
  poster-hover: '0 16px 32px rgba(0,0,0,0.7)'
  modal: '0 32px 64px rgba(0,0,0,0.9)'
  billboard-scrim: 'inset 0 -240px 200px -100px #000000'
  ring: '0 0 0 2px #0070e0'

accessibility:
  contrast-text-on-bg: 21.0           # white on pure black — perfect AAA
  contrast-text-on-brand: 4.5         # white on Apple Blue — AA
  contrast-muted-on-bg: 12.6
  focus-ring: '2px solid #0070e0 with 4px offset'
  reduced-motion-honored: true
  caption-track: 'always available, full Apple Accessibility caption customisation'
  audio-description: 'AD on most originals; voice-over support'
  voiceover-optimised: 'rotor navigation, custom labels per tile, gesture-driven scrubber'

dark-mode: native
---

## 1. Visual Theme & Atmosphere

Apple TV+ is the most ruthlessly minimal streaming UI in the category. The canvas is pure `#000000` — not the cinematic-projection `#141414` of Netflix nor the planetarium-navy of Disney+, but actual void. On OLED displays this means the screen physically goes dark behind any image-less area; the content artwork floats in literal nothing. This is Apple's signature: the platform disappears so completely that the content artwork *is* the entire visual hierarchy.

Where every other streamer competes by adding chrome (Netflix's red CTA, Disney+'s blue glow, Max's editorial pull-quote), Apple TV+ competes by *removing* it. The page typically renders one billboard hero, one or two carousel rows, and a footer — that's it. No franchise tiles, no marketplace badges, no aggressive recommendation density. The atmosphere is film-festival programme rather than streaming-marketplace.

Type is SF Pro Display (Apple's system display sans) at 600–700 weight with `-0.02em` to `-0.025em` negative tracking on display sizes — close to Stripe-grade tightness. SF Pro Text handles body at 17px (Apple's body default — *not* 16px) with 1.47 line-height. The brand voice is precision-quiet — every glyph reads as engineered, every line of body reads as edited. There is no italic except in the rare critic pull-quote.

Brand voltage is Apple Blue `#0070e0` (the same Apple-system tint used across iOS, macOS, tvOS, watchOS), but it appears only on the rare CTA where a coloured button is unavoidable — Sign In, Subscribe, paid actions. The default primary CTA is *white-on-black*, the most extreme form of restraint: invert the canvas, render the button. This is the visual move that distinguishes Apple TV+ from every peer — even Disney+'s blue feels chromatically loud next to Apple TV+'s monochromatic discipline.

Geometry is the standard Apple radius scale (4 / 8 / 12 / 16 / 20). Buttons at 8px, cards at 12px, modals at 16px. Shadows are subtle and only on hover — `0 16px 32px rgba(0,0,0,0.7)`. There is no border on resting cards, no decoration on tiles, no badge-density. The "AN APPLE ORIGINAL" tag is the only branded label, and it's *outlined-white* not filled-colour.

The default tile aspect is **16:9 landscape** with full-bleed hero artwork and the title overlay anchored bottom-left. Apple TV+ rarely uses 2:3 portrait posters — the brand prefers cinematic-still landscape because it gives the artwork (often a key still from the show, drawn editorially) more room to breathe.

Motion is iOS-spring everywhere — `cubic-bezier(0.32, 0.72, 0, 1)`. The same easing curve found in iOS app launches, sheet presentations, and macOS window animations. Durations are slightly longer than peers (350ms for modal entry vs Netflix's 200ms) because Apple's animation discipline favours intentionality over speed.

The chrome behaviour is iOS 26 *Liquid Glass*. The top nav over the billboard is fully transparent; on scroll, it solidifies into a translucent `rgba(0,0,0,0.7)` with `backdrop-filter: blur(20px)` — the same liquid-glass aesthetic across iOS/macOS/tvOS. The video player controls use the same blurred-glass treatment.

**Key Characteristics:**
- Pure-black `#000000` canvas — actual void on OLED, the most extreme streaming canvas.
- White-on-black default primary CTA (no coloured button) — signature restraint.
- Apple Blue `#0070e0` reserved for the rare paid/Sign-In CTA only.
- SF Pro Display 600–700 weight, `-0.02em` to `-0.025em` tight tracking.
- 16:9 landscape tile default (vs 2:3 portrait at peers).
- "AN APPLE ORIGINAL" outlined-white tag — only branded label, never coloured.
- Liquid-glass top nav and player chrome (`backdrop-filter: blur(20px)`).
- 1.03× hover scale — the subtlest in the category.
- iOS-spring easing (`cubic-bezier(0.32, 0.72, 0, 1)`) for all motion.
- 17px body default (Apple's standard), not 16px.
- Generous whitespace — 48px row gap, 96–160px section gap.
- Dark-mode-only native; Apple TV app on iOS/macOS follows system theme but Apple TV+ web is always dark.

## 2. Color Palette & Roles

### Primary
- **Pure Black** (`#000000`): The canonical Apple TV+ canvas. Actual void on OLED.
- **Pure White** (`#ffffff`): Display, primary text, default primary CTA background.
- **Apple Blue** (`#0070e0`): The sole brand-coloured voltage. Reserved for paid CTA, Sign In, focus rings.

### Brand & Dark
- **Blue Hover** (`#1a86f0`): Subtle lift on Apple Blue CTA hover.
- **Blue Active** (`#005fbf`): Press state.
- **Blue Deep** (`#003c8f`): Gradient terminus, rarely used.
- **Apple TV+ Wordmark Red** (`#cd0000`): The marquee-red of the Apple TV+ logo letterform — surfaces only on the lockup, never in product UI.

### Accent
- **System Pink** (`#ff375f`): Apple system pink — used on accent badges, rare.
- **System Orange** (`#ff9f0a`): Buffering / warning.
- **System Green** (`#34c759`): Success / download complete.
- **System Purple** (`#bf5af2`): Used on Apple TV+ docs / sport sub-content surface.

### Interactive
- **Default CTA White** (`#ffffff` bg, `#000000` text): The primary CTA pattern.
- **Apple Blue CTA** (`#0070e0`): Reserved for Sign In, Subscribe, paid actions.
- **Glass White** (`rgba(255,255,255,0.2)` + `rgba(255,255,255,0.25)` 1px border + `blur(20px)`): Frost-glass secondary.
- **Outline** (`rgba(255,255,255,0.3)` border on transparent): Ghost.

### Neutral Scale (Apple System Dark)
- **Display White** (`#ffffff`): Headlines.
- **Body Light** (`#ebebf5`): Apple system label dark — primary body.
- **Muted** (`#ebebf599` — 60%): Apple system secondary label dark — metadata.
- **Soft** (`#ebebf57a` — 48%): Apple tertiary label dark.
- **Disabled** (`#ebebf54d` — 30%): Apple quaternary label dark.

These four-step opacity tiers are Apple's system-wide neutral scale on dark — the same hierarchy in iOS, macOS, tvOS.

### Surface & Borders
- **Surface Strong** (`#2c2c2e`): Apple system grey-2 dark — input fill, hovered control.
- **Surface Default** (`#1c1c1e`): Apple system grey-1 dark — secondary panel, card.
- **Surface Soft** (`#0a0a0a`): Near-black lift, rarely used.
- **Border Default** (`#38383a`): Apple system separator dark.
- **Border Strong** (`#48484a`): Focused input.

### Shadow Colors
- **Card Shadow** (`rgba(0,0,0,0.7)`): Hover lift — pure-black shadow on pure-black canvas only reads via the alpha-difference.
- **Modal Shadow** (`rgba(0,0,0,0.9)`): Heavier under modals.
- **Billboard Inset Scrim** (gradient): `#000` over 240px from bottom — guarantees title legibility on any still.

### Liquid Glass
- **Glass Tint** (`rgba(255,255,255,0.18)`): iOS 26 liquid-glass tint — used on player chrome, top nav.
- **Glass Backdrop** (`backdrop-filter: blur(20px)` + `saturate(1.8)`): Apple's signature blur-and-saturate combo.

### Semantic
- **Success** (`#34c759`): System green.
- **Warning** (`#ff9f0a`): System orange.
- **Danger** (`#ff453a`): System red dark.
- **Info** (`#0070e0`): Matches brand.

## 3. Typography Rules

### Font Family
- **Primary Display**: `"SF Pro Display"` — Apple's system display sans. Weights 300, 400, 500, 600, 700 used.
- **Body**: `"SF Pro Text"` — text-optimised companion with wider proportions for paragraph reading.
- **Mono**: `"SF Mono"` — used in developer surfaces only.
- **Fallback**: `-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial`.
- **OpenType Features**: `ss01` for stylistic alternates on display; `tnum` for metadata, episode runtimes, timestamps.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| Billboard Hero (text) | SF Pro Display | 80px | 700 | 1.0 | -0.025em | ss01 | Text fallback — usually SVG title-card |
| Display XL | SF Pro Display | 56px | 700 | 1.05 | -0.022em | ss01 | Detail modal hero |
| Display LG | SF Pro Display | 40px | 600 | 1.1 | -0.018em | ss01 | Marketing landing |
| Display MD | SF Pro Display | 32px | 600 | 1.15 | -0.014em | ss01 | Sub-header, season label |
| Display SM | SF Pro Display | 24px | 600 | 1.2 | -0.01em | ss01 | Episode title in season list |
| Section Title | SF Pro Display | 22px | 600 | 1.25 | -0.005em | -- | "Continue Watching", "New This Week" |
| Row Title | SF Pro Display | 17px | 600 | 1.3 | 0 | -- | Carousel row label |
| Body LG | SF Pro Text | 19px | 400 | 1.5 | 0 | -- | Modal synopsis |
| Body MD | SF Pro Text | 17px | 400 | 1.47 | 0 | -- | Apple body default — 17px not 16 |
| Body SM | SF Pro Text | 15px | 400 | 1.4 | 0 | -- | Episode descriptions |
| Button LG | SF Pro Text | 17px | 600 | 1.0 | 0 | -- | Primary CTA |
| Button MD | SF Pro Text | 15px | 600 | 1.0 | 0 | -- | Modal action |
| Caption | SF Pro Text | 13px | 400 | 1.4 | 0 | -- | Disclosures |
| Metadata | SF Pro Text | 15px | 400 | 1.3 | 0 | tnum | "2024 · S2 · 8 Episodes · 47m" |
| Badge Rating | SF Pro Text | 11px | 600 | 1.0 | 0.04em | -- | "TV-MA", uppercase |
| Nav Link | SF Pro Text | 14px | 500 | 1.0 | 0 | -- | Top nav |
| Legal | SF Pro Text | 12px | 400 | 1.5 | 0 | -- | Footer |
| Micro Label | SF Pro Text | 12px | 700 | 1.0 | 0.06em | -- | "NEW SEASON", uppercase |
| Editorial Quote | SF Pro Display | 22px | 400 | 1.4 | 0 | -- | Critic pull-quote, italic permitted |

### Principles
- **Apple body is 17px, not 16.** SF Pro Text's design-target body is 17px with 1.47 line-height — keep this; reverting to 16px reads as web-default-not-Apple.
- **Tight tracking is the brand voice.** Display sizes hold `-0.018em` to `-0.025em` — close to Stripe but slightly looser. Pull tighter than `-0.025em` and the type stops reading as Apple.
- **600 is the workhorse weight.** Apple's display defaults to 600 (Semibold) for most headlines; 700 reserved for billboard. There is rarely 800/900 in production.
- **No italic except for critic pull-quotes.** SF Pro ships italic, but it appears almost nowhere in product. The one exception is the editorial-quote slot.
- **Tabular numerals on metadata.** "2024 · S2 · 8 Episodes · 47m" rows align via `tnum`.
- **Uppercase only for badges, tags, and the AN APPLE ORIGINAL label.** Sentence case rules elsewhere.
- **No 800/900 weights in production.** Apple resists Disney+'s Inspire 800 and Max's Sharp Grotesk 800. SF Pro caps at 700 in product.

## 4. Component Stylings

### Buttons

**Primary CTA (White)**
- Background: `#ffffff`. Text: `#000000`. Radius: `8px`. Padding: `12px 24px`. Height: `44px`. Font: SF Pro Text 17 / 600.
- Hover: `#ebebeb` (slight grey shift, no shadow change).
- Active: `#d4d4d4`.
- Use: Default primary action — Watch, Play, Continue. The most-rendered CTA in the system.

**Apple Blue CTA**
- Background: `#0070e0`. Text: `#ffffff`. Radius: `8px`. Padding: `12px 24px`. Height: `44px`.
- Hover: `#1a86f0`, 200ms.
- Active: `#005fbf`.
- Use: Sign In, Subscribe, paid CTA — appears rarely.

**Hero Primary**
- Background: `#ffffff`. Color: `#000000`. Padding: `14px 32px`. Height: `52px`.
- Use: Billboard hero "Play" — paired with secondary glass More.

**Glass Secondary**
- Background: `rgba(255,255,255,0.2)`. Border: `1px solid rgba(255,255,255,0.25)`. Backdrop-filter: `blur(20px)`. Color: `#ffffff`. Radius: `8px`.
- Use: "More" or "Trailer" sibling on billboard.

**Ghost / Outline**
- Background: `transparent`. Color: `#ffffff`. Border: `1px solid rgba(255,255,255,0.3)`. Radius: `8px`.
- Use: Modal cancel, Skip Intro.

### Cards & Tiles

**Landscape Tile (Default)**
- Background: `#1c1c1e` (placeholder). Aspect: 16:9. Radius: `12px`.
- Title: SVG title-card overlay anchored bottom-left at 7% inset, max 65% width.
- Hover: 1.03× scale + `0 16px 32px rgba(0,0,0,0.7)` shadow, 350ms ease-apple-spring. No border, no glow ring.

**Portrait Tile (Movies)**
- Background: `#1c1c1e`. Aspect: 2:3. Radius: `12px`.
- Used on Originals movie row. Hover identical to landscape.

**Preview Popup**
- Background: `#1c1c1e`. Radius: `16px`. Width: 400px.
- Trigger: click-to-expand.
- Content: 16:9 hero clip / still + title-card SVG + critical strip + metadata + Watch/Watchlist/More.

**Billboard Hero**
- Aspect: 16:9 full-bleed. Bottom inset: `#000` over 240px.
- Title: SVG title-card 360–440px wide bottom-left at 5% inset.
- Optional: critic pull-quote in 22px italic, 1-2 lines above CTAs.
- CTAs: White Play + Glass More.
- Auto-loop: hero short clip plays muted on landing-page entry; pauses on user interaction.

**Detail Modal**
- Background: `#000000`. Radius: `16px`. Width: clamp(900px, 80vw, 1440px).
- Header: 16:9 hero still (or auto-loop video).
- Below header: AN APPLE ORIGINAL outlined tag → title (display-xl) → 1-line tagline → critical-strip (Rotten Tomatoes/Metacritic if available) → CTA row (Play/Watchlist) → synopsis paragraph.
- Episode/season tabs (TV).

**Channel App Tile (Apple TV Channels)**
- Background: `#1c1c1e`. Aspect: 16:9. Radius: `12px`.
- Use: Add-on channels through Apple TV app — Paramount+, Max via Apple TV Channels, MGM+, etc.

### Badges, Tags

**AN APPLE ORIGINAL**
- Background: `transparent`. Color: `#ffffff`. Border: `1px solid rgba(255,255,255,0.4)`. Radius: `4px`. Padding: `3px 8px`. Font: 12px / 600 uppercase, 0.06em tracking.
- Use: The brand's only original-content tag — outlined white, never coloured.

**NEW SEASON**
- Background: `#ffffff`. Color: `#000000`. Radius: `4px`. Padding: `3px 8px`. Font: 12px / 700 uppercase.
- Use: Rare, on returning-series tiles.

**Maturity Rating**
- Background: `rgba(255,255,255,0.15)`. Color: `#ffffff`. Radius: `4px`. Padding: `2px 6px`.

**PREMIERING**
- Background: `transparent`. Color: `#0070e0`. Border: `1px solid #0070e0`. Radius: `4px`.
- Use: "PREMIERING JUNE 14" outlined blue tag.

**Critical Acclaim Strip**
- Rotten Tomatoes badge (red splat with score) + Metacritic green-circle score + Emmy/Globe icons in a horizontal row. Inherited from the data partner sources, never rendered in brand colours.

### Inputs

**Text Input**
- Background: `#1c1c1e`. Color: `#ffffff`. Border: `1px solid #38383a`. Radius: `8px`. Height: `44px`. Padding: `12px 16px`.
- Floating label: 13px `#ebebf599` → 11px on focus.
- Focus: Border `#0070e0`.
- Error: Border `#ff453a` + 13px error text.

### Navigation

**Top Nav (Transparent)**
- Background: `transparent`. Color: `#ffffff`. Height: `64px`.
- Logo: white "Apple TV+" wordmark, 24px height (TV+ in red `#cd0000`).
- Links: Home, Movies, TV Shows, Sports, Kids, Library.

**Top Nav (Liquid Glass — Post-scroll)**
- Background: `rgba(0,0,0,0.7)`. Backdrop-filter: `blur(20px) saturate(1.8)`. Height: `64px`.
- Triggers at scrollY > 80px. 350ms ease-apple-spring transition.

**Profile Selector**
- Avatar: 200×200 photo / Memoji / coloured-monogram circle.
- Hover: 1.04× scale, no border, no ring — pure scale.

### Player

**Player Controls (Liquid Glass)**
- Background: `rgba(0,0,0,0.5)` with `backdrop-filter: blur(20px)`. Translucent over video.
- Scrubber: rail `rgba(255,255,255,0.3)`, fill `#ffffff` (not blue — keeps player chromatic-quiet), height `3px`, radius `9999px` (pill).
- Playhead: white `12×12` circle, scales to `16×16` on hover.

## 5. Layout Principles

### Spacing System
- Base: 4px. Scale: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 120 / 160.
- Row gap: 48px (most generous in category — Netflix 36, Max 40, Apple TV+ 48).
- Section gap: 96–160px between major page modules.

### Grid & Container
- Page width: 1920px. Content max: 1440px.
- Carousel: 4 landscape tiles per row at desktop (vs Netflix's 6 portrait), 3 at tablet, 2 at mobile.
- Header: 64px.

### Whitespace Philosophy
Apple TV+ uses *more* whitespace than every peer combined. The page is editorial-spacious — fewer rows, larger gutters, longer dwells on each element. Where Netflix renders 6–7 rows above the fold, Apple TV+ renders 2–3. This is the Apple aesthetic translated to streaming: subtraction as design.

### Section Cadence
- Billboard hero (16:9 with auto-loop video)
- "Just Added" or featured row
- Genre rows (2–4 only)
- Apple TV Channels (add-on subs, optional)
- Footer (compact)

The brand resists the bottomless-feed pattern of Netflix/Prime Video.

## 6. Shapes & Radius Scale

- **Sharp** (`0px`): Billboard image edges only.
- **Standard** (`4px`): Badges, rating chips, AN APPLE ORIGINAL tag.
- **Apple Default** (`8px`): Buttons, inputs.
- **Comfortable** (`12px`): Cards, tiles, channel apps.
- **Featured** (`16px`): Detail modal, preview popup.
- **Pill** (`9999px`): Avatars, progress bars.

This is Apple's standard radius scale across the entire ecosystem — TVOS, iOS, macOS, watchOS share these same tiers.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | Flat | Default tile, page bg, transparent nav |
| 1 | 1px `#38383a` border | Section dividers, focused input |
| 2 | `0 16px 32px rgba(0,0,0,0.7)` + scale(1.03) | Tile hover (subtle, no border, no ring) |
| 3 | Liquid-glass blur + tint | Top nav post-scroll, player chrome |
| 4 | `0 32px 64px rgba(0,0,0,0.9)` | Detail modal |
| 5 | `inset 0 -240px 200px -100px #000` | Billboard scrim |

### Shadow Philosophy
On a pure-black canvas, traditional shadows don't read — Apple TV+ instead uses *liquid-glass* (translucent + blur) as its primary elevation cue. Where peers use opaque drop-shadows, Apple TV+ uses backdrop-blur to lift the chrome from the underlying content. This is the iOS 26 design language mapped to streaming.

## 8. Interaction & Motion

### Easing Curves
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)`.
- **Out**: `cubic-bezier(0, 0, 0.2, 1)`.
- **Apple Spring**: `cubic-bezier(0.32, 0.72, 0, 1)` — the iOS-spring default. Used everywhere.

### Duration Buckets
- **Fast**: 200ms — colour shift, button hover.
- **Standard**: 350ms — modal in, billboard CTA, tile hover (longer than peers).
- **Slow**: 600ms — billboard auto-loop transitions.

### Per-Component Recipes
- **Primary CTA hover**: bg `#fff → #ebebeb`, 200ms ease-standard. No transform.
- **Apple Blue CTA hover**: `#0070e0 → #1a86f0`, 200ms.
- **Tile hover**: 1.0× → 1.03× over 350ms ease-apple-spring + shadow fade-in. The subtlest hover in the category.
- **Billboard auto-loop**: hero clip plays muted on landing; user interaction halts.
- **Modal in**: 400ms ease-apple-spring, scale 0.95 → 1.0 + opacity 0 → 1.
- **Top nav solidify**: 350ms ease-apple-spring at scrollY > 80px — transparent → liquid-glass.

### Page Transitions
Tile-click-to-detail uses iOS-style "expand from source" transition — the tile scales up to fill the modal viewport while the page behind dims. ~400ms ease-apple-spring. Closing reverses the animation. This is unique to Apple TV+ in the streaming category.

### Reduced Motion
- Tile hover → opacity-only.
- Billboard auto-loop → static still.
- Tile-to-modal expand → instant cut + opacity fade.
- Top-nav solidify → instant.

## 9. Accessibility & A11y

### Contrast Pairs
- White on `#000`: **21.0:1** — perfect AAA, the maximum possible contrast.
- Body light `#ebebf5` on `#000`: **20.0:1** — AAA.
- Muted (60% white) on `#000`: **12.6:1** — AAA at all sizes.
- White on Apple Blue `#0070e0`: **4.5:1** — AA.
- Soft (48% white) on `#000`: **10.0:1** — AAA.

### Focus Indicators
- 2px solid `#0070e0` Apple Blue ring with 4px offset on all controls. Brand-blue against pure-black is the most legible focus indicator possible.

### ARIA Patterns
- Carousels: `role="region" aria-roledescription="carousel"`.
- Tiles: `role="link"` with full metadata in `aria-label`.
- Modal: `role="dialog" aria-modal="true"`, focus trapped, ESC closes.
- Player: full keyboard support with iOS-style scrubber gestures via touch + custom VoiceOver rotor.

### Keyboard Navigation
- Tab between rows; arrows within rows.
- Enter on tile opens detail modal with iOS expand-from-source transition.
- Space play/pause; F fullscreen; M mute; arrows seek.
- Esc progresses: modal close → player pause → fullscreen exit.

### VoiceOver Optimisation
Apple TV+ is the gold standard for VoiceOver streaming UX:
- Custom labels per tile (no robot-recital of metadata).
- Rotor navigation for jumping to genre rows.
- Gesture-driven scrubber control.
- Audio-description tracks on most originals with VoiceOver-aware ducking.

### Caption / AD
- Captions on all titles. Apple Accessibility caption customisation (font, size, edge, opacity, colour).
- Audio description on most Apple Originals.

### Reduced Motion
Honoured per §8. Especially important for iOS-style expand-from-source transitions which can trigger vestibular response.

## 10. Responsive Behavior

### Breakpoints
| Token | Min | Use |
|-------|-----|-----|
| mobile | 0px | 2 landscape tiles per row, full-screen modals |
| tablet | 1024px | 3 tiles |
| desktop | 1280px | 4 tiles |
| wide | 1920px | 4 tiles, content-max 1440 |

### Touch Targets
- 44×44 minimum (Apple HIG standard, slightly under industry 48).

### Collapsing Strategy
- Top nav → hamburger at < 1024px.
- Detail modal → full-screen sheet at < 768px with iOS-style swipe-down dismiss.
- Billboard CTAs → stacked at < 600px.
- Auto-loop hero → static still on mobile to save bandwidth.

### Image Behavior
- Landscape tiles: 16:9 srcset 320/640/1280w.
- Billboard: 16:9 srcset 720/1080/1440/2160p with optional auto-loop video at 720p.

### Container Queries
Preview popup chooses left/right anchor based on row container CQ.

## 11. Content & Voice

### Tone
Apple TV+ voice is **editorial-restrained-cinematic**. Where Disney+ is friendly-magical and Netflix is direct-confident, Apple TV+ is *quiet-prestige*. Acquisition copy reads like a film festival programme: "From Academy Award winners. New work. Unmissable." Product copy is sparse — synopsis paragraphs are 2–3 sentences, not 6. The brand assumes the user reads.

### Microcopy Patterns
- **Primary CTA**: "Play", "Watch", "Continue", "Resume".
- **Secondary**: "More", "Trailer".
- **Acquisition headline**: "Apple TV+. Where stories live big." or "All Apple Originals. All in one place."
- **Empty list**: "Add titles to Up Next to keep track of what to watch." (Note: not "Watchlist" — Apple uses "Up Next").
- **Error**: "Something went wrong. Try again." (3 words, no blame, no apology-ladder).
- **Profile prompt**: "Who's watching?"
- **Cancellation**: "Cancel anytime."

### Empty States
Empty Up Next: text + 4-tile suggested-adds row. Empty Continue Watching: hidden.

### CTA Verb Conventions
- "Play" (primary in product) > "Watch" > "Subscribe" > "Sign In".
- "Up Next" not "My List", not "Watchlist" — distinctive Apple terminology.
- "More" not "Details", not "More Info".
- "Trailer" not "Preview".

## 12. Dark Mode & Theming

**Dark-only on the web Apple TV+ surface.** The web product (`tv.apple.com`) is always dark, regardless of system theme.

**System-aware on native Apple TV apps.** The macOS/iOS/iPadOS Apple TV apps follow the system theme: dark canvas in dark mode, light canvas in light mode. In light mode, the canvas swaps to `#f2f2f7` (Apple system grey-6 light), text inverts to `#000000`, surfaces lift to `#ffffff` cards, and Apple Blue stays `#0070e0`.

The web product does not currently honour system theme — it stays dark for the cinematic-streaming context.

A hypothetical web-light theme would use:
- Canvas: `#f2f2f7` (Apple system grey-6 light).
- Surface: `#ffffff` cards.
- Text: `#000000`.
- Brand: `#0070e0` (unchanged — passes AA on white).
- Border: `#c6c6c8` (Apple system separator light).

This pattern is fully spec'd in the iOS / macOS HIG but not implemented on `tv.apple.com`.

## 13. Lineage & Influences

Apple TV+ inherits from three streams.

**Apple Human Interface Guidelines.** The pure-black canvas, white-on-black CTA, SF Pro Display typography, 8px radius standard, iOS-spring easing, liquid-glass chrome — all of these descend directly from Apple's cross-platform HIG and tvOS design language.

**Film festival programmes.** The editorial-restrained tone, the longer-than-peers row gaps, the AN APPLE ORIGINAL outlined-not-filled tag, the absence of badge-density and price-tags — these read more like a Sundance/Cannes/Venice programme than a streaming-marketplace UI.

**Pre-streaming Apple iTunes Store.** The 16:9 landscape tile default and the carousel-row-with-large-stills pattern echo iTunes Movies and Music's carousel rows from the 2010s — Apple TV+ is the modern descendant of Apple's media-storefront design heritage.

What Apple TV+ rejects: badge density (Prime Video), red-CTA energy (Netflix), franchise hubs (Disney+), editorial pull-quotes-as-decoration (Max). The brand is *radical restraint*.

**Influences:**
- **Apple Human Interface Guidelines** — radius scale, SF Pro, iOS spring easing, dark-system colour scale. https://developer.apple.com/design/
- **Film festival programmes (Sundance, Cannes, Venice)** — editorial restraint, programme-as-design.
- **iTunes Store / Apple TV app (2007–2019)** — carousel-row + landscape-tile heritage.
- **Saul Bass** — title-as-graphic SVG-overlay principle.

## 14. Do's and Don'ts

**Do:**
- Use pure `#000000` canvas — not `#141414` (Netflix) or `#0e1735` (Disney+). Apple TV+ commits to actual black.
- Use white-on-black `#ffffff/#000000` as the default primary CTA — the signature Apple TV+ button.
- Reserve Apple Blue `#0070e0` for Sign In, Subscribe, paid CTA only — not the default Watch button.
- Use SF Pro Display 600–700 weight at display sizes with `-0.02em` to `-0.025em` tracking.
- Use SF Pro Text at 17px (not 16) for body — Apple's standard.
- Default tiles to 16:9 landscape — Apple TV+ rarely uses 2:3 portrait.
- Use AN APPLE ORIGINAL outlined-white tag — never coloured.
- Use liquid-glass `rgba(0,0,0,0.7) + backdrop-filter: blur(20px)` on top nav and player chrome.
- Use `cubic-bezier(0.32, 0.72, 0, 1)` iOS-spring easing on all motion.
- Use 1.03× hover scale (subtlest in the category).
- Use 17px / 17px / 19px body sizes (Apple standard) — not 14/16/18.
- Use 8px button radius, 12px tile radius, 16px modal radius (Apple HIG).
- Default progress fill to white, not blue — keeps player chromatic-quiet.

**Don't:**
- Don't render a coloured primary CTA as default — white-on-black is the brand.
- Don't use red — that signals Netflix.
- Don't use blue glow rings (Disney+) or marketplace badges (Prime Video) — Apple TV+ refuses ornament.
- Don't use 800/900 weights — SF Pro caps at 700 in production.
- Don't use heavy shadows — liquid-glass blur replaces traditional drop-shadows.
- Don't pile carousel rows above the fold — Apple TV+ commits to 2–3 rows max above the fold.
- Don't add franchise hubs, hub-tile bands, or content-tier badges — the brand resists categorical chrome.
- Don't use italic SF Pro outside the critic-quote slot.
- Don't use uppercase outside of badges and the AN APPLE ORIGINAL tag.
- Don't auto-play preview clips on hover — billboard auto-loops, tiles do not.
- Don't override the iOS-spring easing — generic eases break the brand.

## 15. Agent Prompt Guide

### Quick Color Reference
- Canvas: `#000000`
- Primary CTA bg: `#ffffff`
- Primary CTA text: `#000000`
- Apple Blue: `#0070e0`
- White: `#ffffff`
- Body Light: `#ebebf5`
- Muted (60%): `#ebebf599`
- Surface: `#1c1c1e`
- Surface Strong: `#2c2c2e`
- Border: `#38383a`
- Glass: `rgba(0,0,0,0.7) + blur(20px)`

### Example Component Prompts
1. "Create an Apple TV+ billboard hero — full-bleed 16:9 hero clip auto-looping muted over `#000000` canvas, bottom inset gradient `#000` over 240px, title-card SVG bottom-left at 400px wide at 5% inset, optional 22px SF Pro Display italic critic pull-quote, white `#fff/#000` Play button + glass `rgba(255,255,255,0.2) + blur(20px)` More sibling, both 8px radius, 17px / 600."
2. "Design an Apple TV+ landscape tile — 16:9 `#1c1c1e` placeholder, 12px radius, SVG title-card bottom-left at 7% inset 65% width max, on hover scale 1.03× over 350ms with `cubic-bezier(0.32,0.72,0,1)` ease-apple-spring + `0 16px 32px rgba(0,0,0,0.7)` shadow. No border, no ring."
3. "Build an Apple TV+ top nav — 64px height, transparent at top, on scrollY > 80px transitions 350ms ease-apple-spring to `rgba(0,0,0,0.7) + backdrop-filter: blur(20px) saturate(1.8)` liquid-glass, white Apple TV+ wordmark left (TV+ in `#cd0000`), 14px / 500 nav links right."
4. "Render an Apple TV+ detail modal — `#000000` bg, 16px radius, 16:9 hero still or auto-loop video header, AN APPLE ORIGINAL outlined-white border tag above title, display-xl 56px / 700 / -0.022em title, optional Rotten Tomatoes / Metacritic strip, 19px / 400 / 1.5 SF Pro Text synopsis."
5. "Create an Apple TV+ primary CTA — pure white `#ffffff` background, pure black `#000000` text, 8px radius, 12px 24px padding, 44px height, SF Pro Text 17 / 600. Hover lifts to `#ebebeb` background over 200ms, no transform, no shadow."

### Iteration Guide
1. **Black, not near-black.** If canvas reads as Netflix-ink, push to pure `#000` — Apple TV+ commits to actual black.
2. **Invert the CTA.** If the primary CTA is coloured, swap to white-on-black — that's the brand.
3. **Subtract.** If the page has more than 3 rows above the fold, remove rows. Apple TV+ uses subtraction as design.
4. **Liquid-glass the chrome.** Top nav and player should use `backdrop-filter: blur(20px)` over translucent black, not opaque solid.
5. **iOS-spring everything.** Replace generic `ease-out` with `cubic-bezier(0.32,0.72,0,1)` — Apple's signature.
6. **Bigger gutters.** Row gap to 48px+, section gap to 96px+ — Apple TV+ is the most spacious streaming UI.
7. **Tighten the type.** SF Pro Display at display sizes wants `-0.02em` to `-0.025em` — looser reads as web-default.
8. **Outlined-white, not coloured.** Tags like AN APPLE ORIGINAL must be outlined, not filled — coloured tags break the monochrome discipline.
