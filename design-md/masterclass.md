---
name: MasterClass
tagline: Pure-black cinema with custom display serif and editorial reverence — celebrity-instructor learning as a premium streaming product.
author: webdesignhot
source_url: https://www.masterclass.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [media, marketplace]
tags: [dark, editorial, premium, cinema, serif, sans, education]
preview_swatch: ['#000000', '#ffffff', '#d4af72']
related: [coursera, udemy, khan-academy]
description: 'MasterClass is the premium-cinema aesthetic — a pure `#000000` black canvas, a custom MasterClass Display serif paired with a humanist sans for body, and full-bleed instructor portrait photography that treats every celebrity teacher like the cover subject of a glossy. Where Coursera reads as a campus website and Udemy reads as a marketplace, MasterClass reads as Netflix met a magazine and decided to teach you cooking from Gordon Ramsay. The brand''s signature is the instructor portrait — a high-contrast cinematic black-and-white-leaning portrait flooded across the hero band, the instructor''s name set in display serif at 80px, and a single soft `#d4af72` warm-gold accent reserved for premium tier callouts and certificate marks. Every course tile is rendered like a film poster — 4:5 portrait aspect, instructor name in custom serif, course subject below in the same sans as Netflix''s Helvetica Now, and zero discount stickers anywhere in the system. This is the cleanest, most editorial, most reverent surface in online learning — a brand that asks you to slow down and take cooking from a chef, not to add 84% off to your cart.'

colors:
  bg: '#000000'                    # primary canvas — pure black, the brand''s defining ground
  bg-alt: '#0a0a0a'                # alt section band, faintly lifted from pure black
  bg-elevated: '#171717'            # card surface, slightly raised
  bg-muted: '#1f1f1f'               # tertiary surface
  bg-light: '#fafafa'                # rare light section (gift, business pages)
  bg-cream: '#f5efe6'                # cream-warm section, editorial blocks on light pages
  surface: '#171717'                # default card on dark
  surface-elevated: '#1f1f1f'        # raised card / modal floor
  surface-hover: '#2a2a2a'           # nav hover, list-row hover
  surface-soft: '#0f0f0f'            # secondary card bg
  surface-light: '#ffffff'           # rare light card
  text: '#ffffff'                    # primary body — pure white on black
  text-strong: '#ffffff'             # display headlines
  text-muted: '#b3b3b3'              # secondary metadata
  text-soft: '#888888'               # tertiary captions
  text-faint: '#5e5e5e'              # disclosure, fine print
  text-dark: '#1a1a1a'               # text on light surfaces
  text-on-brand: '#000000'           # text on gold (rare)
  text-link: '#ffffff'               # inline link white with underline
  brand: '#ffffff'                   # MasterClass primary brand colour is white-on-black
  brand-accent: '#d4af72'            # premium-gold accent — certificate, premium tier, instructor name accent
  brand-accent-soft: '#e8d3a6'       # softer gold for hover states
  brand-accent-deep: '#a8854b'       # deeper gold for pressed states
  accent-cream: '#f5efe6'            # warm cream for editorial light bands
  accent-stone: '#3a3a3a'            # warm stone-grey for divider blocks
  border: '#2e2e2e'                  # default hairline on dark
  border-soft: '#1f1f1f'             # subtle divider on dark
  border-strong: '#4a4a4a'           # focused field outline
  border-light: '#e8e2d6'            # border on light surfaces
  border-focus: '#d4af72'            # focus ring — gold on dark
  on-brand: '#000000'                # label on white surface
  rating-star: '#d4af72'             # rating gold (rare — MasterClass downplays ratings)
  shadow-card: 'rgba(0,0,0,0.5)'    # default card shadow on dark
  shadow-modal: 'rgba(0,0,0,0.7)'    # modal floor
  shadow-popover: 'rgba(0,0,0,0.4)'  # popover/dropdown
  shadow-instructor: 'rgba(0,0,0,0.8)' # instructor-portrait gradient overlay
  success: '#3da06b'                 # certificate earned (rare semantic surface)
  success-soft: '#0a2014'            # success bg on dark
  warning: '#e6b15c'                 # warning amber
  warning-soft: '#2a1f0c'            # warning bg on dark
  danger: '#e07b5b'                  # error
  danger-soft: '#2a0f0a'             # error bg on dark
  info: '#ffffff'                    # info white
  info-soft: '#171717'               # info bg

typography:
  display:
    family: '"MasterClass Display", "GT Sectra Display", "Tiempos Headline", "Playfair Display", Georgia, serif'
    weights: [400, 500, 700]
    opentype-features: ['kern', 'liga', 'dlig']
  body:
    family: '"MasterClass Sans", "Helvetica Now", "Söhne", "Inter", -apple-system, "Segoe UI", "Roboto", Helvetica, Arial, sans-serif'
    weights: [300, 400, 500, 700]
  mono:
    family: '"SF Mono", "Söhne Mono", Menlo, Consolas, monospace'
    weights: [400]
  scale:
    display-cinema:  { size: 96, weight: 400, lineHeight: 1.0,  tracking: '-0.04em', family: display, opentype: ['kern','liga','dlig'], notes: 'Hero instructor name "GORDON RAMSAY" — the headline-as-portrait-caption' }
    display-hero:    { size: 72, weight: 400, lineHeight: 1.05, tracking: '-0.03em', family: display, notes: 'Marketing landing — "The world''s best teach you how"' }
    display-xl:      { size: 56, weight: 400, lineHeight: 1.1,  tracking: '-0.025em', family: display, notes: 'Section hero, category page' }
    display-lg:      { size: 44, weight: 400, lineHeight: 1.15, tracking: '-0.02em', family: display, notes: 'Course detail page title' }
    display-md:      { size: 32, weight: 500, lineHeight: 1.2,  tracking: '-0.01em', family: display, notes: 'Section heading' }
    display-sm:      { size: 24, weight: 500, lineHeight: 1.25, tracking: '-0.005em', family: display, notes: 'Subsection heading' }
    title-lg:        { size: 22, weight: 500, lineHeight: 1.3,  tracking: '0',       family: display, notes: 'Course tile instructor name' }
    title-md:        { size: 18, weight: 500, lineHeight: 1.35, tracking: '0',       family: display, notes: 'Card title' }
    title-sm:        { size: 16, weight: 500, lineHeight: 1.4,  tracking: '0',       family: display, notes: 'Small card title' }
    body-lg:         { size: 20, weight: 300, lineHeight: 1.55, tracking: '0',       family: body, notes: 'Editorial lead paragraph' }
    body-md:         { size: 16, weight: 400, lineHeight: 1.6,  tracking: '0',       family: body, notes: 'Default body, course description' }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body, notes: 'Secondary metadata, "10 lessons · 3h 20m"' }
    button-lg:       { size: 16, weight: 500, lineHeight: 1.0,  tracking: '0.04em',  family: body, notes: '"Get started" / "Watch trailer" CTA' }
    button-md:       { size: 14, weight: 500, lineHeight: 1.0,  tracking: '0.04em',  family: body, notes: 'Default button label' }
    eyebrow:         { size: 12, weight: 500, lineHeight: 1.0,  tracking: '0.16em',  family: body, notes: 'Uppercase eyebrow "INSTRUCTOR · CHEF"' }
    caption:         { size: 13, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body, notes: 'Disclosures, fine print' }
    metadata:        { size: 13, weight: 400, lineHeight: 1.3,  tracking: '0.02em',  family: body, opentype: ['tnum'], notes: 'Lesson count, runtime' }

radius:
  micro: 0          # MasterClass favours sharper-than-sharp; radius is rare
  sm: 2             # tiny indicator, badge
  md: 4             # input, small button
  lg: 6             # card (rare)
  xl: 8             # modal (only)
  pill: 9999        # nav pill, gold premium badge

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160]

layout:
  page-width: 1440
  content-max: 1200
  prose-width: 680
  header-height: 72
  card-min: 200
  card-max: 280
  hero-min-height: 720       # MasterClass hero is cinema-tall

components:
  button-primary:
    bg: '#ffffff'
    color: '#000000'
    radius: 2
    padding: '14px 28px'
    height: 48
    font: button-lg
    weight: 500
    use: '"Get started" / "Get unlimited access" — primary CTA, white-on-black inversion. Sharp corners, no shadow.'
  button-primary-hover:
    bg: '#e8e8e8'
    color: '#000000'
    use: 'Hover — slight off-white shift, no transform.'
  button-secondary:
    bg: 'transparent'
    color: '#ffffff'
    border: '1px solid #ffffff'
    radius: 2
    padding: '14px 28px'
    height: 48
    use: '"Watch trailer" outlined ghost — sits beside primary on the hero.'
  button-secondary-hover:
    bg: 'rgba(255,255,255,0.1)'
    color: '#ffffff'
    use: 'Hover — faint white wash.'
  button-tertiary-text:
    bg: 'transparent'
    color: '#ffffff'
    radius: 0
    padding: '8px 0'
    use: 'Inline text link with underline — never a button-shaped tertiary.'
  button-icon:
    bg: 'transparent'
    color: '#ffffff'
    radius: 9999
    height: 40
    width: 40
    use: 'Wishlist heart, share, more-options — circular icon button.'
  button-play:
    bg: '#ffffff'
    color: '#000000'
    radius: 9999
    height: 64
    width: 64
    use: 'Play button overlaid on instructor video — large white circle with black play-arrow icon.'
  card-instructor:
    bg: '#171717'
    color: '#ffffff'
    radius: 4
    padding: 0
    use: 'Course tile with full-bleed instructor portrait — 4:5 portrait aspect, instructor name overlaid at bottom in 22px / 500 display serif, subject in 13px / 400 sans uppercase eyebrow above name. No rest shadow.'
  card-instructor-hover:
    bg: '#171717'
    color: '#ffffff'
    radius: 4
    use: 'Hover — instructor portrait scales 1.0 → 1.04 over 400ms ease-out; gradient overlay deepens. No shadow change.'
  card-feature:
    bg: '#171717'
    color: '#ffffff'
    radius: 4
    padding: 32
    use: '"Sessions" or "Series" feature card — instructor portrait 4:5 left, copy block right with 32px / 500 serif title, 16px / 400 description, white outlined "Watch now" CTA.'
  card-light-editorial:
    bg: '#f5efe6'
    color: '#1a1a1a'
    radius: 4
    padding: 48
    use: 'Light cream editorial section card on light pages — gift/business surfaces. 24px / 500 serif title, 16px / 400 body, deeper-gold CTA.'
  badge-premium:
    bg: '#d4af72'
    color: '#000000'
    radius: 9999
    padding: '4px 12px'
    use: 'Gold "Premium" / "Annual Member" pill — soft warm gold with black text.'
  badge-new:
    bg: '#ffffff'
    color: '#000000'
    radius: 2
    padding: '4px 8px'
    use: '"NEW" white tag with black text on instructor card top-left.'
  badge-coming-soon:
    bg: 'transparent'
    color: '#ffffff'
    border: '1px solid #ffffff'
    radius: 2
    padding: '4px 8px'
    use: '"COMING SOON" outlined tag for upcoming instructor classes.'
  rating-stars:
    color: '#d4af72'
    color-empty: '#3a3a3a'
    use: 'Rare — MasterClass downplays ratings. When shown, gold filled / dark stone empty. Numerals always tnum.'
  input-search:
    bg: 'transparent'
    color: '#ffffff'
    radius: 2
    height: 48
    padding: '12px 16px 12px 44px'
    border: '1px solid #4a4a4a'
    use: 'Top-bar search — sits inside the dark nav, magnifying icon left, "Search instructors" placeholder.'
  input-text:
    bg: '#171717'
    color: '#ffffff'
    radius: 2
    border: '1px solid #4a4a4a'
    height: 48
    padding: '12px 16px'
    use: 'Form input — sign-in, profile, billing fields.'
  filter-chip:
    bg: 'transparent'
    color: '#ffffff'
    border: '1px solid #4a4a4a'
    radius: 9999
    padding: '8px 16px'
    use: 'Category filter pill — pill-shaped on dark.'
  filter-chip-active:
    bg: '#ffffff'
    color: '#000000'
    border: '1px solid #ffffff'
    radius: 9999
    use: 'Applied-filter state — inverts to white pill.'
  category-row:
    bg: 'transparent'
    color: '#ffffff'
    use: '"Featured Categories" horizontal text-link strip — Cooking / Writing / Film & TV / Music / Business — uppercase 12px / 500 with 0.16em tracking.'
  nav-top-bar:
    bg: 'rgba(0,0,0,0.85)'
    color: '#ffffff'
    height: 72
    backdrop: 'blur(20px)'
    use: 'Sticky top nav — MasterClass wordmark left (custom serif), category links centre, search + sign-in + Get started right. Backdrop-blurred dark glass.'
  nav-top-bar-scrolled:
    bg: '#000000'
    use: 'On scroll past hero, nav becomes fully opaque black.'
  hero-instructor:
    bg: '#000000'
    color: '#ffffff'
    use: 'Full-bleed instructor portrait — 4:5 or 16:9 photographic ground with vertical gradient overlay (transparent top, `rgba(0,0,0,0.8)` bottom), instructor name in 96px serif, subject eyebrow above, "Watch trailer" + "Get started" CTAs below.'
  modal-dialog:
    bg: '#171717'
    color: '#ffffff'
    radius: 8
    shadow: '0 24px 48px rgba(0,0,0,0.7)'
    padding: 48
    border: '1px solid #2e2e2e'
    use: 'Sign-up / preview modal — dark surface with thin border, generous 48px padding.'
  toast:
    bg: '#ffffff'
    color: '#000000'
    radius: 2
    padding: '12px 16px'
    use: 'Confirmation toast — "Added to your list" — inverted white-on-black for contrast against dark surface.'
  ribbon-gold:
    bg: '#d4af72'
    color: '#000000'
    use: '"Get the Annual Membership" gold ribbon — used sparingly for premium-tier marketing on landing pages.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-cinema: 'cubic-bezier(0.16, 1, 0.3, 1)'
  ease-out: 'cubic-bezier(0, 0, 0.2, 1)'
  ease-in-out: 'cubic-bezier(0.65, 0, 0.35, 1)'
  duration-fast: 150
  duration-standard: 300
  duration-slow: 500
  duration-cinema: 800
  reduced-motion: 'respects prefers-reduced-motion: instructor-portrait scale-on-hover collapses to instant, hero parallax disables, video-trailer auto-play pauses, modal scale-in becomes opacity-only.'

breakpoints:
  mobile: 600
  tablet: 900
  desktop: 1200
  wide: 1440

shadows:
  none: 'none'
  card-rest: 'none'
  card-hover: '0 12px 32px rgba(0,0,0,0.5)'
  popover: '0 8px 24px rgba(0,0,0,0.4)'
  modal: '0 24px 48px rgba(0,0,0,0.7)'
  instructor-vignette: 'inset 0 -200px 200px -100px rgba(0,0,0,0.8)'
  ring: '0 0 0 2px #d4af72'

accessibility:
  contrast-text-on-bg: 21.0              # white on black — AAA at all sizes
  contrast-text-muted-on-bg: 9.5         # #b3b3b3 on black — AAA at body
  contrast-text-on-gold: 8.4             # black on `#d4af72` — AAA at body
  contrast-text-on-brand: 21.0           # black on white — AAA at all sizes
  focus-ring: '2px solid #d4af72 with 2px offset'
  reduced-motion-honored: true
  caption-track: 'every video lesson ships with closed captions in 10+ languages; transcripts side-by-side with player'
  language-support: 'English, Spanish, French, German, Italian, Portuguese, Japanese, Korean, simplified Chinese, traditional Chinese subtitles'

dark-mode: default            # Dark IS the default; light surfaces (gift, business) are the deviation
---

## 1. Visual Theme & Atmosphere

MasterClass's site is the most cinematic surface in online learning. The canvas is pure `#000000` — not near-black, not Material's dark-grey, but absolute black like a movie theatre or a Netflix loading screen. The type is a custom MasterClass Display serif (a high-contrast didone with editorial DNA, related to GT Sectra Display) carrying every headline at 56–96px, paired with a humanist sans for body. The signature gesture is the instructor portrait — a single celebrity-grade headshot of Gordon Ramsay or Margaret Atwood or Annie Leibovitz flooded across the hero band as a 4:5 or 16:9 photographic ground, the instructor's name set in display serif at 96px overlaid bottom-left, a small uppercase eyebrow above ("INSTRUCTOR · CHEF") in 12px / 500 sans with `0.16em` tracking, and a "Watch trailer" + "Get started" button pair below. The page reads as a film poster, not as a course catalog.

Where Coursera leans on Stanford-blue institutional trust and Udemy leans on Amazon-discount-sticker bargain energy, MasterClass leans on **reverence for the instructor as auteur**. Every course is "Gordon Ramsay teaches cooking" — never "Cooking 101 with Gordon Ramsay". The structure foregrounds the human; the curriculum, the ratings, the price, the duration are all secondary signals subordinated to the single celebrity-portrait gesture. This is the single biggest differentiator from every other learning platform: MasterClass's brand argument is that the *teacher* is the product, not the syllabus.

The course-tile grid is the workhorse component, and it's rendered as a film-poster grid. Each tile is `4:5` portrait aspect — the same aspect ratio as a movie poster — with the instructor's photographic portrait full-bleed, a vertical gradient overlay from transparent top to `rgba(0,0,0,0.8)` bottom, the instructor's name overlaid at the bottom in 22px / 500 display serif, the subject in 13px / 400 sans uppercase eyebrow above the name. There's no rating star, no learner count, no price, no duration on the tile. The poster *is* the entire pitch. Tiles stack 4-across at desktop, 3-across at 900px, 2-across at 600px, 1-across mobile, with 16px gaps. On hover, the portrait scales subtly (1.0 → 1.04 over 400ms ease-out / cinema curve), the gradient overlay deepens, and the cursor becomes a play-button glyph. There's no card border and no rest shadow — the gradient overlay does all the visual containment.

The display serif is the brand's typographic signature. It's a high-contrast didone with sharp serifs, narrow apertures, and a slightly compressed proportion — closer to GT Sectra Display or Tiempos Headline than to Playfair. At 96px / 400 with `-0.04em` tracking, the instructor names in the hero read like the title cards of a prestige Netflix documentary. Body type is a humanist sans (likely a custom MasterClass Sans, descended from Helvetica Now or Söhne) at 16px / 400 / 1.6 line-height — generous editorial breathing room, never cramped. A 12px / 500 uppercase eyebrow with `0.16em` tracking labels sections ("INSTRUCTOR · CHEF", "ABOUT THIS CLASS", "WHAT YOU'LL LEARN").

Density is the third axis — but inverted from Udemy and Coursera. MasterClass is **sparse**. The hero takes 720px+ of vertical space (cinema-tall, not website-short). The first content section below the fold is one feature card, not a 4-card rail. Tiles breathe at 16px gaps but the surrounding section padding is 96px. There's no left-rail filter sidebar on category pages — categories are browsed via top-of-page text links (Cooking / Writing / Film & TV / Music / Business) in 12px / 500 uppercase eyebrow style, then the tile grid below. The interaction model is **streaming-service browse**, not e-commerce-faceted-search. There's no shopping cart, no per-course pricing, no discount stickers. The single "Get unlimited access" CTA in the nav swaps the reader from browsing to a single membership purchase flow.

**Key Characteristics:**
- Pure `#000000` canvas (not dark-grey) — cinema-grade absolute black is the brand ground.
- Custom MasterClass Display serif at 56–96px — high-contrast didone, the brand's typographic signature.
- Instructor-portrait hero at 720px+ tall — 4:5 or 16:9 full-bleed photography with vertical gradient overlay.
- Course tiles rendered as film posters — 4:5 portrait aspect, instructor name in display serif overlay, no ratings, no prices.
- Single soft `#d4af72` warm-gold accent reserved for premium-tier callouts and certificate marks. No other saturated colours.
- Humanist sans body (Helvetica Now / Söhne descendant) at 16px / 400 / 1.6 line-height — generous editorial breath.
- Eyebrow labels (12px / 500 / `0.16em` tracking, uppercase) for categories and section heads.
- Sharp `2px` radius on buttons, `4px` on cards; `0px` micro for indicators. Almost-no-radius signature.
- Streaming-service browse (top text links, photographic tile grid, single membership CTA) instead of e-commerce-faceted-search.
- No discount stickers, no rating stars on tiles, no learner counts, no pricing on cards. Reverence over urgency.
- White-on-black primary CTA (white pill with black text) — inversion of every other dark-site convention.
- Dark IS the default; light cream `#f5efe6` surfaces appear only on gift and business pages.

## 2. Color Palette & Roles

### Primary
- **Cinema Black** (`#000000`): The defining canvas. Pure, absolute black — not dark-grey, not near-black. The brand's choice of pure-black is intentional and unusual; most "dark mode" surfaces use `#0a0a0a` or `#111111` to soften OLED bloom, but MasterClass commits to `#000000` for the cinema-grade matte ground.
- **Off-Black** (`#0a0a0a`): Alt section band, faintly lifted from pure black for tonal variation.
- **Pure White** (`#ffffff`): Primary text, button background, brand wordmark. The complementary half of the binary.
- **Premium Gold** (`#d4af72`): The single accent. Premium-tier badges, certificate marks, gold-foil-style ribbons. Used sparingly — never decoratively.

### Brand & Dark
- **Surface Card** (`#171717`): Dark-card surface — slightly lifted from the page bg.
- **Surface Elevated** (`#1f1f1f`): Modal floor, popover bg.
- **Surface Hover** (`#2a2a2a`): Nav-link hover, list-row hover.
- **Stone Grey** (`#3a3a3a`): Warm divider blocks, empty rating-star colour.

### Accent
- **Premium Gold** (`#d4af72`): The brand's accent. Soft warm gold inspired by old-Hollywood Oscar-statuette gold. Used on premium pills, certificate marks, the hover state of a few key buttons.
- **Gold Soft** (`#e8d3a6`): Hover-lifted gold.
- **Gold Deep** (`#a8854b`): Pressed gold.
- **Cream** (`#f5efe6`): Warm cream for editorial light bands (gift, business, partner pages). The light-mode surface.

### Interactive
- **CTA White** (`#ffffff`): Primary CTA background — white pill with black label.
- **CTA Black** (`#000000`): Primary CTA text on white pill.
- **Outlined White** (`1px solid #ffffff`): Secondary action.
- **Filter Chip Active** (`#ffffff` bg + `#000000` text): Applied-filter state inverts to white.

### Neutral Scale
- **Pure White** (`#ffffff`): Primary text on dark — full luminance.
- **Muted** (`#b3b3b3`): Secondary metadata — "10 lessons · 3h 20m · Beginner friendly".
- **Soft** (`#888888`): Tertiary captions, breadcrumb separator.
- **Faint** (`#5e5e5e`): Disclosure, copyright, fine print.
- **Border Default** (`#2e2e2e`): Card hairlines on dark, dividers.
- **Border Soft** (`#1f1f1f`): Subtle table-row dividers.
- **Border Strong** (`#4a4a4a`): Focused field outline before gold ring kicks in.
- **Border Light** (`#e8e2d6`): Border on light cream surfaces (gift, business pages).

### Surface & Borders
- **Surface Default** (`#171717`): Card.
- **Surface Elevated** (`#1f1f1f`): Modal floor, popover.
- **Surface Hover** (`#2a2a2a`): Interactive surface lift.
- **Surface Soft** (`#0f0f0f`): Faint-lifted secondary card bg.
- **Surface Light** (`#ffffff`): Rare light card on cream sections.
- **Cream Editorial** (`#f5efe6`): Warm light section bg.

### Shadow Colors
- **Card Rest**: No shadow. The dark canvas + gradient overlay carries containment.
- **Card Hover** (`rgba(0,0,0,0.5)`): On hover, a `0 12px 32px` shadow drops beneath the tile — invisible against pure black, but creates the lift sensation when the tile scales.
- **Popover Shadow** (`rgba(0,0,0,0.4)`): Dropdown, tooltip.
- **Modal Shadow** (`rgba(0,0,0,0.7)`): Dialog floor.
- **Instructor Vignette** (`inset 0 -200px 200px -100px rgba(0,0,0,0.8)`): The vertical gradient overlay on every instructor portrait that fades from transparent at top to deep black at bottom — creates the cinema feel and ensures legibility of the instructor name overlaid bottom-left.

### Semantic
- **Success** (`#3da06b` text on `#0a2014` soft bg): Certificate earned, "Added to your list" toast.
- **Warning** (`#e6b15c` text on `#2a1f0c` soft bg): "Subscription expires in 3 days" reminder.
- **Danger** (`#e07b5b` text on `#2a0f0a` soft bg): Form validation error, payment failure.
- **Info** (`#ffffff` text on `#171717` soft bg): Reuses card surface. "Now streaming on iOS, Android, Apple TV, Roku."

## 3. Typography Rules

### Font Family
- **Display**: `"MasterClass Display"` — a custom high-contrast didone serif with editorial DNA. Closely related to GT Sectra Display (Grilli Type) and Tiempos Headline (Klim Type Foundry). Fallback chain: `"GT Sectra Display", "Tiempos Headline", "Playfair Display", Georgia, serif`.
- **Body**: `"MasterClass Sans"` — a humanist sans, likely descended from Helvetica Now or Söhne. Fallback chain: `"Helvetica Now", "Söhne", "Inter", -apple-system, "Segoe UI", "Roboto", Helvetica, Arial, sans-serif`.
- **Mono**: `"SF Mono", "Söhne Mono", Menlo, Consolas, monospace` — used in a few code-related lessons (programming MasterClasses are rare).
- **OpenType Features**: `kern` and `liga` enabled site-wide. `dlig` (discretionary ligatures) enabled in display sizes for editorial flourishes (st, ct, fi, fl). `tnum` enabled on lesson counts and runtime numerics.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| Display Cinema | MC Display | 96px | 400 | 1.0 | -0.04em | kern,liga,dlig | Hero instructor name "GORDON RAMSAY" |
| Display Hero | MC Display | 72px | 400 | 1.05 | -0.03em | kern,liga,dlig | Marketing landing — "The world's best teach you how" |
| Display XL | MC Display | 56px | 400 | 1.1 | -0.025em | kern,liga | Section hero, category page |
| Display LG | MC Display | 44px | 400 | 1.15 | -0.02em | kern,liga | Course detail page title |
| Display MD | MC Display | 32px | 500 | 1.2 | -0.01em | kern,liga | Section heading |
| Display SM | MC Display | 24px | 500 | 1.25 | -0.005em | kern,liga | Subsection heading |
| Title LG | MC Display | 22px | 500 | 1.3 | 0 | kern,liga | Course tile instructor name |
| Title MD | MC Display | 18px | 500 | 1.35 | 0 | kern,liga | Card title |
| Title SM | MC Display | 16px | 500 | 1.4 | 0 | kern,liga | Small card title |
| Body LG | MC Sans | 20px | 300 | 1.55 | 0 | kern,liga | Editorial lead paragraph |
| Body MD | MC Sans | 16px | 400 | 1.6 | 0 | kern,liga | Default body, course description |
| Body SM | MC Sans | 14px | 400 | 1.5 | 0 | kern,liga | Secondary metadata |
| Button LG | MC Sans | 16px | 500 | 1.0 | 0.04em | kern,liga | "Get started" / "Watch trailer" CTA |
| Button MD | MC Sans | 14px | 500 | 1.0 | 0.04em | kern,liga | Default button label |
| Eyebrow | MC Sans | 12px | 500 | 1.0 | 0.16em | kern,liga | Uppercase "INSTRUCTOR · CHEF" |
| Caption | MC Sans | 13px | 400 | 1.4 | 0 | kern,liga | Disclosures, fine print |
| Metadata | MC Sans | 13px | 400 | 1.3 | 0.02em | tnum | Lesson count, runtime |

### Principles
- **Two families, two registers.** Display serif for emotional gravity (instructor names, headlines). Sans for everything else. The duet is the magazine convention adapted to streaming.
- **Light-weight serif at headline sizes.** Display headlines are 400 (regular) — never 700 bold. The brand's voice is cinematic restraint, not typographic shouting. The didone's high-contrast strokes carry the visual weight; bolding would feel coarse.
- **Aggressive negative tracking.** Display sizes use `-0.025em` to `-0.04em`. The brand pushes display tracking tighter than Coursera or Udemy because the editorial register can absorb the compression.
- **0.16em tracking on eyebrows.** Uppercase eyebrows ("INSTRUCTOR · CHEF") use 12px / 500 / `0.16em` — the wide tracking is what distinguishes the editorial-eyebrow register from button labels.
- **0.04em tracking on button labels.** Buttons get a small positive tracking — gives them a polished, slightly-spread quality at small sizes.
- **300-weight body for editorial lead.** Lead paragraphs at 20px / 300 / 1.55 — light-weight body type is rare; MasterClass uses it where the editorial voice needs a hush.
- **1.6 body line-height.** Default body sits at 1.6 — the most generous line-height of any learning marketplace. Reads slow, feels considered.
- **Discretionary ligatures in display.** `st`, `ct`, `fi`, `fl` get the discretionary-ligature treatment in headlines for editorial polish.

## 4. Component Stylings

### Buttons

**Primary (White Pill on Black)**
- Background: `#ffffff`. Text: `#000000`. Radius: `2px` (sharp). Padding: `14px 28px`. Height: `48px`. Font: MC Sans 16px / 500 / `0.04em` tracking.
- Hover: bg `#e8e8e8`. No shadow lift, no scale.
- Use: "Get started", "Get unlimited access", "Watch trailer". The white-on-black inversion is the brand's defining button signature.

**Secondary (Outlined White Ghost)**
- Background: `transparent`. Text: `#ffffff`. Border: `1px solid #ffffff`. Radius: `2px`. Padding: `14px 28px`.
- Hover: bg `rgba(255,255,255,0.1)`.
- Use: "Watch trailer", "Learn more". Sits next to primary on hero.

**Tertiary Text**
- Background: `transparent`. Color: `#ffffff`. No radius, padding `8px 0`. Underlined.
- Hover: opacity `1 → 0.7`.
- Use: Inline action, footer link.

**Icon Button (Circular)**
- Background: `transparent`. Color: `#ffffff`. Radius: `9999px` (full circle). Size: `40 × 40`.
- Hover: bg `rgba(255,255,255,0.1)`.
- Use: Wishlist heart, share, more-options.

**Play Button (Hero Trailer)**
- Background: `#ffffff`. Color: `#000000` (play-arrow icon). Radius: `9999px`. Size: `64 × 64`.
- Use: Overlaid centre on instructor video on hero. The triangle play-arrow is asymmetric (right-pointing), vertically centred but optically nudged 2px right.

### Cards & Tiles

**Instructor Tile (Course Poster)**
- Background: `#171717` (only visible during image load). Color: `#ffffff`. Radius: `4px`. Padding: 0 (full-bleed image).
- Layout: 4:5 portrait full-bleed instructor photograph; vertical gradient overlay (`linear-gradient(180deg, transparent 0%, transparent 50%, rgba(0,0,0,0.8) 100%)`); instructor name overlaid bottom-left in 22px / 500 display serif; subject in 13px / 400 sans uppercase eyebrow above the name with 8px gap.
- Top-left corner: optional small badge ("NEW", "COMING SOON").
- Rest shadow: none.
- Use: Default course tile in catalog grid.

**Instructor Tile (Hover)**
- Image scales 1.0 → 1.04 over 400ms ease-cinema. Gradient overlay deepens slightly.
- Cursor: changes to a play-glyph cursor.
- Use: Pointer-over interaction.

**Feature Card (Sessions / Series)**
- Background: `#171717`. Color: `#ffffff`. Radius: `4px`. Padding: `32px`.
- Layout: Instructor portrait 4:5 left (40% width), copy block right (60% width) — 32px / 500 serif title, 16px / 400 description (max 4 lines), white outlined "Watch now" CTA at the bottom.
- Use: "Sessions" tier (group classes) or "Series" multi-instructor curriculum.

**Light Editorial Card (Gift / Business Pages)**
- Background: `#f5efe6` (cream). Color: `#1a1a1a`. Radius: `4px`. Padding: `48px`.
- Layout: 24px / 500 serif title, 16px / 400 body in dark, deeper-gold outlined CTA.
- Use: Light-mode editorial section on rare cream-bg pages.

### Badges, Tags, Indicators

**Premium Pill**
- Background: `#d4af72`. Color: `#000000`. Radius: `9999px` (pill). Padding: `4px 12px`. Font: 12px / 500.
- Use: "Annual Member" or "Premium" tier indicator. Soft warm gold with black text.

**New Tag**
- Background: `#ffffff`. Color: `#000000`. Radius: `2px`. Padding: `4px 8px`. Font: 12px / 500 uppercase `0.08em`.
- Use: "NEW" white tag on instructor tile top-left for newly launched classes.

**Coming Soon Tag**
- Background: `transparent`. Color: `#ffffff`. Border: `1px solid #ffffff`. Radius: `2px`.
- Use: "COMING SOON" outlined tag for pre-launch teaser tiles.

**Eyebrow (Subject Label)**
- Color: `#ffffff` or `#b3b3b3` depending on context. Font: 12px / 500 uppercase, `0.16em` tracking.
- Use: "INSTRUCTOR · CHEF", "INSTRUCTOR · WRITER", "FEATURED CATEGORY".

**Rating (Rare)**
- Filled stars: `#d4af72`. Empty: `#3a3a3a`. Numerals always tnum.
- Use: Rare on tiles; appears on the course detail page beneath the trailer.

### Inputs & Forms

**Search**
- Background: `transparent`. Color: `#ffffff`. Border: `1px solid #4a4a4a`. Radius: `2px`. Height: `48px`. Padding: `12px 16px 12px 44px`.
- Magnifying-glass icon left in `#b3b3b3`.
- Placeholder: "Search instructors".
- Focus: border `#d4af72`, ring `0 0 0 2px #d4af72`.
- Use: Top-bar search.

**Text Input**
- Background: `#171717`. Color: `#ffffff`. Border: `1px solid #4a4a4a`. Radius: `2px`. Height: `48px`. Padding: `12px 16px`.
- Label sits above, 14px / 500 `#ffffff`. Hint below, 13px / 400 `#b3b3b3`.
- Focus: border `#d4af72`, ring `0 0 0 2px #d4af72`.
- Use: Sign-in, profile, payment forms.

**Filter Chip**
- Default: bg `transparent`, color `#ffffff`, border `1px solid #4a4a4a`, radius `9999px`, padding `8px 16px`.
- Active: bg `#ffffff`, color `#000000`, border `#ffffff`. Inverts to white pill.
- Use: Category filter on browse page.

### Navigation

**Top Bar (Sticky, Glass)**
- Background: `rgba(0,0,0,0.85)` with `backdrop-filter: blur(20px)`. Color: `#ffffff`. Height: `72px`.
- Layout: MasterClass wordmark left (custom serif), category links centre ("Categories / Sessions / Articles / Gift"), search + sign-in + "Get unlimited access" gold-pill button right.
- On scroll past hero: fully opaque `#000000`, shadow `0 2px 12px rgba(0,0,0,0.4)` appears below.
- Mobile: collapses to hamburger + search-icon + Get-access CTA.

**Featured Categories Strip**
- Background: `transparent`. Color: `#ffffff`.
- Layout: Horizontal text-link strip — "COOKING / WRITING / FILM & TV / MUSIC / BUSINESS" in 12px / 500 uppercase with `0.16em` tracking, `48px` gaps between.
- Use: Below hero on home page; replaces the left-rail filter sidebar Coursera and Udemy use.

**Breadcrumb**
- Color: `#b3b3b3` for default, `#ffffff` for current. Font: 12px / 500 `0.08em` uppercase.
- Format: "HOME / COOKING / GORDON RAMSAY".

### Modals & Toasts

**Modal Dialog**
- Background: `#171717`. Color: `#ffffff`. Radius: `8px`. Padding: `48px`. Border: `1px solid #2e2e2e`.
- Shadow: `0 24px 48px rgba(0,0,0,0.7)`.
- Backdrop: `rgba(0,0,0,0.85)` with `backdrop-filter: blur(8px)` — blurs the page beneath.
- Use: Sign-up, trailer-preview, gift-membership modal.

**Toast**
- Background: `#ffffff`. Color: `#000000`. Radius: `2px`. Padding: `12px 16px`.
- Use: "Added to your list" — bottom-left, auto-dismiss 3s. Inverted white-on-black for contrast against dark page.

**Trailer Preview Modal**
- Full-screen black overlay with the trailer video centred at 16:9, instructor name and class title overlaid bottom-left, "X" close button top-right.
- Use: Click "Watch trailer" CTA on hero or tile.

## 5. Layout Principles

### Spacing System
- Base: 4px. Scale: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128 / 160.
- Tile-to-tile gap: 16px on desktop, 12px on tablet, 8px on mobile.
- Section padding: 96px top/bottom on major sections; 128–160px on hero sections.
- Editorial prose width: 680px max — generous reading column.

### Grid & Container
- Page width: 1440px max.
- Content max within page: 1200px centred.
- Browse page: full-width tile grid (4-across at desktop, 3-across at 900px, 2-across at 600px, 1-across mobile).
- Hero: full-bleed instructor portrait, content overlay constrained to 1200px and bottom-aligned 80px from baseline.

### Whitespace Philosophy
MasterClass is a sparse-density brand. Sections breathe at 96–128px (twice the gap of Coursera, four times Udemy). The hero takes 720px+ vertical (cinema-tall, not website-short). Editorial prose sits at 680px max width — narrow column for considered reading. Within tiles, the layout is also restrained — only two text overlays (instructor name + subject eyebrow), no rating, no price, no metadata. The page's argument is "slow down, this is curated, you have time." The opposite argument from Udemy.

### Section Cadence
- Top bar (sticky, glass)
- Hero (720px+, full-bleed instructor portrait, instructor name 96px serif, eyebrow + CTA pair)
- Featured categories strip (uppercase eyebrow text links)
- Featured class section (single feature card 60% page width)
- "New & noteworthy" tile rail (4 instructor tiles)
- "Most popular" tile rail
- "By category" tile rail (Cooking, Writing, etc. — 4 tiles each, infinite-scroll horizontally)
- Sessions feature band ("Live group classes")
- Gift / Business cream-band callout (light surface)
- "Trusted by" press logos (NYT, Forbes, Wired) in muted grey
- Footer (4-column dark band — links, language picker, app downloads)

Light/dark alternation: predominantly dark. Cream `#f5efe6` band appears once on the home page (Gift/Business) and on dedicated gift/business landing pages.

## 6. Shapes & Radius Scale

- **Micro** (`0px`): No radius — used on indicator dots, sometimes on filter chips.
- **Standard** (`2px`): Button, input, badge — the workhorse small radius. Sharper than every competitor.
- **Comfortable** (`4px`): Tile, card — the workhorse card radius.
- **Relaxed** (`6px`): Larger card variant.
- **Featured** (`8px`): Modal corners only.
- **Pill** (`9999px`): Premium gold pill, navigation gold CTA, circular icon buttons, filter chip.

The 2px button + 4px card pairing is the geometric signature. MasterClass commits to almost-no-radius — the closest of any major learning brand to "no rounded corners at all." This is a brand decision that aligns with the cinematic-editorial register: rounded corners feel friendly; sharp corners feel premium and considered.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 (flat) | No shadow, no border | Section background, hero band |
| 1 (gradient overlay) | `inset 0 -200px 200px -100px rgba(0,0,0,0.8)` | Instructor tile portrait — vignette is the depth |
| 2 (hover lift) | `0 12px 32px rgba(0,0,0,0.5)` | Tile hover (invisible against pure-black bg, but creates lift sensation when scaled) |
| 3 (popover) | `0 8px 24px rgba(0,0,0,0.4)` | Dropdown, tooltip |
| 4 (modal) | `0 24px 48px rgba(0,0,0,0.7)` | Dialog, trailer preview |

### Shadow Philosophy
On a pure-black page, conventional drop-shadows are nearly invisible — there's no underlying brightness to occlude. So MasterClass's depth language operates differently: tiles use **gradient overlays** rather than shadows for visual containment (the instructor portrait fades to deep black at the bottom, naturally containing the type), modals get a subtle border (`1px solid #2e2e2e`) plus a thicker shadow plus a backdrop-blur so the page beneath dims, and hover lifts use a combination of scale (1.0 → 1.04) plus a shadow that's invisible-on-black but registers via the parallax of nearby elements. The brand never uses brand-tinted shadows — the gold accent stays on premium pills and ribbons, not on elevation.

## 8. Interaction & Motion

### Easing Curves
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — Material's standard ease.
- **Cinema**: `cubic-bezier(0.16, 1, 0.3, 1)` — long, slow finish curve. Used for instructor-tile hover scale, hero parallax, modal scale-in. The brand's signature easing.
- **Out**: `cubic-bezier(0, 0, 0.2, 1)` — incoming elements.
- **In-Out**: `cubic-bezier(0.65, 0, 0.35, 1)` — accordion expand/collapse.

### Duration Buckets
- **Fast**: 150ms — colour shifts, hover transitions.
- **Standard**: 300ms — modal open, dropdown, button hover.
- **Slow**: 500ms — accordion expand, hero text reveal.
- **Cinema**: 800ms — instructor portrait scale on tile hover, trailer auto-play crossfade.

### Per-Component Recipes
- **Instructor tile hover**: Image scales 1.0 → 1.04 over 400ms ease-cinema. Gradient overlay opacity deepens 0.8 → 0.9. No card shadow change (tiles have no rest shadow).
- **Primary CTA hover**: Background `#ffffff → #e8e8e8` over 150ms ease-standard. No transform.
- **Outlined CTA hover**: Background `transparent → rgba(255,255,255,0.1)` over 150ms.
- **Filter chip toggle**: bg + text + border swap together over 150ms.
- **Modal open**: 300ms ease-cinema, opacity `0 → 1` + scale `0.96 → 1`. Backdrop blur ramps from 0 → 8px over 300ms.
- **Trailer auto-play**: Hero instructor video starts on page load (muted), runs 12-second loop. Click triggers full-screen modal with audio.
- **Hero text reveal**: On page load, instructor name fades in 0 → 1 over 500ms with translateY `12px → 0`.
- **Tile hover cursor**: Custom play-glyph cursor (white triangle in dark circle) replaces default cursor over the tile.
- **Toast in**: slide up from bottom 6px + opacity over 300ms; auto-dismiss after 3s.
- **Gold pill premium CTA hover**: Gold subtly brightens `#d4af72 → #e8d3a6` over 150ms.

### Page Transitions
MasterClass's site uses light client-side routing (Next.js or similar). Page changes within the catalog use a 200ms fade-out + 300ms fade-in. The hero video on each instructor page autoplays on landing, creating a seamless cinema-to-cinema transition. There's no full-page "wipe" or slide.

### Reduced Motion
`prefers-reduced-motion: reduce` collapses:
- Tile hover scale → instant snap.
- Hero parallax → disabled.
- Trailer auto-play → paused (still visible as static frame).
- Modal scale-in → opacity-only.
- Backdrop blur ramp → instant.
- Tile cursor change → still happens (cursor change is informational, not animated).

## 9. Accessibility & A11y

### Contrast Pairs
- White `#ffffff` on Black `#000000`: **21.0:1** — AAA at all sizes. Maximum possible.
- Muted `#b3b3b3` on Black `#000000`: **9.5:1** — AAA at body sizes.
- Soft `#888888` on Black `#000000`: **5.6:1** — AA at body. Used for tertiary captions only.
- Black `#000000` on Premium Gold `#d4af72`: **8.4:1** — AAA at body.
- Black `#000000` on White `#ffffff`: **21.0:1** — AAA at all sizes.
- Faint `#5e5e5e` on Black: **3.3:1** — fails AA for body, used for fine-print disclosures only with explicit `aria-label` augmentation.

### Focus Indicators
- Default focus: `2px solid #d4af72` outline with `2px` offset on dark surfaces. The premium gold is the focus colour, doubling its semantic weight.
- Form fields: border lifts to `#d4af72` on focus, plus the 2px ring outside.
- Tab order: top nav → search → main content top-to-bottom → tile grid → footer.

### ARIA Patterns
- Instructor tiles: `role="article" aria-label="[Instructor Name] teaches [Subject]. [N] lessons."` (rating count omitted because tiles don't show ratings).
- Hero video: `role="region" aria-label="Class trailer for [Instructor Name]"`. Auto-playing video has `muted aria-hidden="true"` because the video is decorative; the headline carries semantic meaning.
- Filter chips: `role="button" aria-pressed="true|false"`.
- Search: `role="search"` with `aria-label="Search instructors"`.
- Modal: `role="dialog" aria-modal="true"` with focus trap. Backdrop `aria-hidden="true"`.
- Trailer modal: video player has full ARIA captions, transcript link, and keyboard controls.

### Keyboard Navigation
- Tab: move forward through controls; Shift+Tab reverses.
- Enter / Space: activate focused button or tile.
- Arrow keys: navigate within tile grid (roving tabindex).
- ESC: close modal, dropdown, trailer.
- Space: pause/resume hero trailer when focused.

### Screen Reader Hints
- Instructor portrait images have `alt="Portrait of [Instructor Name]"` — descriptive, not decorative.
- Instructor name overlaid on image is a real `<h2>` element, not text-on-image — preserves semantic structure.
- "Featured Categories" strip is a `<nav>` with `aria-label="Browse by category"`.
- Gold premium pill has `aria-label="Premium membership tier"`.
- Trailer modal: live-region announces play/pause state changes.

### Reduced Motion
Honoured. See §8.

## 10. Responsive Behavior

### Breakpoints
| Token | Min | Use |
|-------|-----|-----|
| mobile | 0px | 1 tile per row, hero scales to 480px tall |
| tablet | 600px | 2 tiles per row, hero 600px tall |
| tablet-lg | 900px | 3 tiles per row, hero 720px |
| desktop | 1200px | 4 tiles per row, hero 800px |
| wide | 1440px | content max 1200px centred, hero 900px |

### Touch Targets
- 48×48 minimum on all interactive controls. Tile tap targets fill the entire 4:5 area.
- On mobile, "Get unlimited access" CTA in nav becomes a 48px-tall sticky bottom bar.

### Collapsing Strategy
- **Top nav**: collapses to hamburger + search-icon + "Get access" CTA on `< 900px`.
- **Featured categories strip**: scrolls horizontally on `< 900px`.
- **Tile grid**: 4 → 3 → 2 → 1 across the breakpoint cascade.
- **Hero**: instructor portrait crops to 1:1 on mobile; instructor name scales 96 → 64 → 48 → 36.
- **Sessions feature card**: 60/40 split on desktop becomes stacked vertical on mobile (portrait above, copy below).

### Image Behavior
- Instructor portraits: served as 4:5 base, with 16:9 alt crop for hero. Cloudinary or similar with 480w / 720w / 1080w / 1440w via `srcset`. Lazy-load below the fold.
- Press logos: SVG with `currentColor` for tint adjustability — render at `#888888` muted grey.
- Trailer video: HLS adaptive bitrate, autoplay-muted on hero, full audio in modal.

### Container Queries
Not heavily used. Tile grid switches via media queries. Eyebrow tracking adjusts via container query on the side panels of feature cards.

## 11. Content & Voice

### Tone
MasterClass's voice is **reverent, restrained, and aspirational**. Course descriptions read like festival catalog blurbs — short, evocative, treating each instructor as an icon. Marketing copy tilts toward "the world's best" and "learn from a master" rather than "skill up" or "level up". The brand never assumes the reader is an expert; it never assumes the reader is a beginner either. Every page treats you as a curious adult who appreciates craft and is willing to spend time on it. The voice is closer to *The New Yorker* than to *Wired*.

### Microcopy Patterns
- **Primary CTA**: "Get started", "Get unlimited access", "Watch trailer", "Take this class".
- **Secondary CTA**: "Learn more", "Browse classes", "Gift a membership".
- **Confirmation toast**: "Added to your list", "Welcome back, [Name]", "Your annual membership is active".
- **Empty list**: "Save classes you want to watch later. Tap the bookmark on any class."
- **Empty progress**: "Start watching to see your progress here. Browse new & noteworthy classes."
- **Membership upsell**: "Get unlimited access to every class with the Annual Membership."
- **Gift pitch**: "Give the gift of inspiration. From $120/year."
- **Time-aware welcome**: "Welcome back, [Name]" + "Continue watching [Class Title]" CTA.

### Empty States
- Empty saved list: bookmark icon + "You haven't saved any classes yet" + "Browse new & noteworthy" CTA.
- Empty in-progress: "Your in-progress classes will appear here" + featured rail.
- Empty search: "No classes found for [query]. Try one of these instead:" + curated suggestions (handpicked, not algorithmic).
- Offline: "You're offline. Downloaded lessons are available below." (Mobile app only — web requires online.)

### CTA Verb Conventions
- "Watch" — primary verb for trailer or lesson video play. "Watch trailer", "Watch this class", "Watch now".
- "Take" — for full class enrollment. "Take this class".
- "Get unlimited access" — the membership purchase CTA. Always this exact phrase, never "Subscribe" or "Sign up".
- "Gift" — for gift membership. "Gift a membership", "Gift this class".
- "Save" — bookmark toggle, not "Add to wishlist".
- "Continue watching" — returning-user CTA on in-progress classes.
- "Browse" — category exploration. "Browse classes", "Browse by category".

The brand explicitly avoids: "Buy", "Add to cart", "Enroll", "Sign up", "Start free trial". These verbs belong to other categories of products; MasterClass uses streaming-service verbs instead.

## 12. Dark Mode & Theming

MasterClass is **dark by default**. The pure-black `#000000` canvas is the brand's defining ground, not a dark-mode toggle. There is no light-mode toggle in the consumer surface. The cream `#f5efe6` editorial bands that appear on gift, business, and partner pages are the closest the brand gets to a "light surface" — and they're explicitly editorial accents, not full-page light themes.

If a user's system prefers light mode, MasterClass ignores the preference and stays dark. This is intentional brand commitment: the cinema metaphor breaks if the canvas turns white.

The Trailer Modal goes one step darker — full pure-black overlay around the video player, with text and chrome dimmed even further. This is the only "ultra-dark" surface in the system.

### Light-Surface Treatment (Cream Editorial Sections)
When a section ships with `#f5efe6` cream bg:
- Body text: `#1a1a1a` (near-black on cream).
- Display: same MC Display serif at the same scale.
- Accent: deeper gold `#a8854b` instead of `#d4af72` (deeper for legibility on cream).
- Border: `#e8e2d6` (subtle cream-grey).
- Buttons: `#1a1a1a` background with `#ffffff` text (inversion of the dark-page button), or outlined `1px solid #1a1a1a`.

## 13. Lineage & Influences

MasterClass's visual lineage is three-streamed.

**The prestige-streaming aesthetic.** MasterClass launched in 2015 as celebrity-instructor video classes, and its visual language was always closer to Netflix Originals or HBO than to Coursera. The pure-black canvas, the 4:5 portrait poster grid, the cinema-grade typography, the auto-playing hero trailer — all directly borrowed from streaming-service browse pages (Netflix circa 2015, Apple TV+, HBO Max). The instructor-as-celebrity framing reinforces the analogy: this is a streaming service where the content is "the world's best teaching what they know" rather than "scripted episodic drama".

**The editorial magazine tradition.** MasterClass's display serif (a custom GT Sectra Display / Tiempos Headline relative) descends from Italian fashion magazines (*Vogue Italia*, *l'Uomo Vogue*) and prestige American titles (*The New Yorker*, *Vanity Fair*, *Esquire*). The high-contrast didone with sharp serifs and aggressive negative tracking is specifically the typographic register of a fashion editorial spread. The 12px / 500 / `0.16em` uppercase eyebrow is also a magazine convention — it labels the section the way a fashion-week recap labels its dispatches.

**The minimal-luxury web tradition.** The almost-no-radius (2px buttons, 4px cards), the white-on-black inversion, the soft warm-gold accent reserved for premium tier, the 96px+ section padding all descend from luxury fashion e-commerce circa 2015–2020 — Acne Studios, A-COLD-WALL*, Loewe, Bottega Veneta. MasterClass borrowed the visual register of "this is expensive and considered" from luxury fashion and applied it to learning. The result is a learning brand that signals "premium" through restraint rather than through pricing copy.

What MasterClass rejects: discount stickers, rating stars on tiles, ratings + review counts as primary metadata, bargain pricing language, "free trial" CTA prominence, e-commerce faceted filtering, multi-color brand palette, cool-grey tonal shifts, "Sign up" as primary CTA verb.

**Influences:**
- **Netflix** — pure-black canvas, full-bleed hero, 4:5 portrait poster grid, auto-playing trailer. https://netflix.com
- **Vogue Italia / The New Yorker** — display didone serif at headline sizes, eyebrow labels, editorial restraint. https://vogue.it
- **Acne Studios / Loewe** — almost-no-radius minimal-luxury web aesthetic, premium-gold accent. https://acnestudios.com
- **Apple TV+** — sticky glass nav, dark hero with auto-trailer, "Watch now" verb conventions. https://tv.apple.com
- **GT Sectra Display (Grilli Type)** — direct typographic ancestor of the MasterClass Display serif. https://grillitype.com/typeface/gt-sectra
- **Klim Type Foundry — Tiempos Headline** — secondary typographic reference. https://klim.co.nz/retail-fonts/tiempos-headline

## 14. Do's and Don'ts

**Do:**
- Use pure `#000000` for the canvas, not near-black `#0a0a0a` or dark-grey `#111111`. The cinema-grade absolute black is the brand commitment.
- Render the primary CTA as a white pill with black text (`#ffffff` bg / `#000000` text) at `2px` radius. The white-on-black inversion is the brand button signature.
- Reserve gold `#d4af72` for premium-tier callouts, certificate marks, and focus rings — never decorative backgrounds.
- Use the custom display serif for headlines at 56–96px / 400 weight, with `-0.025em` to `-0.04em` tracking. Light-weight serif at large sizes is the brand's typographic move.
- Render instructor tiles as 4:5 portrait posters with full-bleed photography + vertical gradient overlay + instructor name in 22px / 500 display serif overlaid bottom-left + uppercase eyebrow above.
- Use 12px / 500 / `0.16em` uppercase tracking for eyebrows ("INSTRUCTOR · CHEF", "FEATURED CATEGORY"). The wide tracking is the editorial convention.
- Keep section padding at 96–128px — twice Coursera, four times Udemy. Sparse density is the brand.
- Auto-play hero trailer muted on landing; require click for full audio.
- Use 1.6 line-height on body type — generous editorial breath.
- Provide closed captions on every video lesson in 10+ languages; transcripts side-by-side.
- Keep the gold "Get unlimited access" CTA persistent in the top nav across the entire site.
- Use streaming-service verbs ("Watch", "Take", "Browse") instead of e-commerce verbs ("Buy", "Add to cart", "Enroll").

**Don't:**
- Don't add discount stickers, "X% off" tags, or struck-through pricing — MasterClass's brand is reverence, not bargain.
- Don't show rating stars or learner counts on tiles. The poster *is* the pitch.
- Don't introduce a multi-color palette. White, black, gold. That's it.
- Don't round buttons or cards beyond `4px`. Sharper than every competitor is the geometric signature.
- Don't bold display serif at 700 — display sits at 400 (or 500 for smaller heads). The didone's high contrast carries the visual weight.
- Don't use Helvetica's tight default tracking on body. Set body at 16px / 400 / 1.6 line-height with default tracking.
- Don't allow the canvas to drift to dark-grey `#111111` or `#0a0a0a` outside of the alt section band. Pure `#000000` is the brand commitment.
- Don't use shadows for tile rest depth — the gradient overlay is the depth language.
- Don't replace the hero with a static image where a trailer could play. The auto-playing trailer is the brand atmosphere.
- Don't use "Sign up" or "Free trial" as the primary CTA. "Get unlimited access" is the conversion verb.
- Don't compress section padding under 64px — the page must breathe.
- Don't use cool-grey neutrals; warm-stone `#3a3a3a` is the divider colour. Cool greys read as Linear or Vercel.
- Don't mix the gold accent with any other accent colour. Gold stands alone.

## 15. Agent Prompt Guide

### Quick Color Reference
- Canvas: `#000000`
- Off-Black: `#0a0a0a`
- Card Surface: `#171717`
- Pure White: `#ffffff`
- Premium Gold: `#d4af72`
- Cream Editorial: `#f5efe6`
- Muted: `#b3b3b3`
- Border: `#2e2e2e`
- Stone Empty Star: `#3a3a3a`
- Modal Surface: `#171717`

### Example Component Prompts
1. "Create a MasterClass instructor tile — `4px` radius, `#171717` placeholder bg, full-bleed 4:5 portrait of [Instructor]; vertical gradient overlay `linear-gradient(180deg, transparent 0%, transparent 50%, rgba(0,0,0,0.8) 100%)` over the lower half; overlaid bottom-left in 16px-padded body: 12px / 500 uppercase `0.16em` tracking `#ffffff` eyebrow 'INSTRUCTOR · CHEF', 8px gap, 22px / 500 MasterClass Display serif `#ffffff` instructor name 'GORDON RAMSAY'. Top-left optional small badge — `#ffffff` `2px` radius `4px 8px` 'NEW' in 12px / 500 black uppercase. On hover scale image `1.0 → 1.04` over 400ms ease-cinema. No rest shadow."
2. "Design a MasterClass primary CTA — `2px` radius, `#ffffff` background, `#000000` 16px / 500 / `0.04em` tracking 'Get unlimited access' label, `14px 28px` padding, `48px` height, hover bg `#e8e8e8`, no shadow."
3. "Build a MasterClass hero — full-bleed `#000000` background with 16:9 instructor portrait of [Instructor] flooded edge-to-edge with auto-playing muted trailer video; bottom-left overlay constrained to 1200px max width: 12px / 500 uppercase `0.16em` `#ffffff` eyebrow 'INSTRUCTOR · CHEF' with 80px bottom margin, 96px / 400 MasterClass Display serif `#ffffff` instructor name with `-0.04em` tracking 'GORDON RAMSAY', 24px / 400 MasterClass Sans `#b3b3b3` short class description max 2 lines, then horizontal pair: white-pill primary CTA 'Get started' + outlined-white secondary 'Watch trailer'."
4. "Render a MasterClass top nav — sticky, 72px tall, `rgba(0,0,0,0.85)` bg with `backdrop-filter: blur(20px)`; left: MasterClass wordmark in custom serif 18px / 500; centre: nav links 'Categories / Sessions / Articles / Gift' in 14px / 500 white, 32px gaps; right: search input 240px wide + 'Sign in' text link + gold `#d4af72` pill CTA 'Get unlimited access' 14px / 500 black text, `9999px` radius."
5. "Create a MasterClass browse page — full-width tile grid below the hero, 4-across at desktop, 16px gap, no left-rail filter sidebar; instead, above the grid render a horizontal text strip 'COOKING / WRITING / FILM & TV / MUSIC / BUSINESS / SPORTS & GAMING' in 12px / 500 uppercase white with `0.16em` tracking, 48px gaps between, centre-aligned. No breadcrumb."
6. "Build a MasterClass course detail page — `#000000` page bg; hero is 16:9 trailer video full-bleed top with the instructor name in 72px / 400 MasterClass Display overlaid bottom-left; below: 1200px-wide layout with 65/35 split — left 65% is editorial article-style content (24px / 500 serif 'About this class' heading, 18px / 400 body description in 1.6 line-height, lesson curriculum list with 18px / 500 lesson titles + 13px / 400 muted runtime), right 35% is sticky enrollment card on `#171717` surface (white pill 'Take this class' CTA, 'Get unlimited access' gold pill below, lesson count + total runtime metadata). No price displayed inline."

### Iteration Guide
1. **Commit to pure black.** If the canvas looks dark-grey, audit and force `#000000`. MasterClass's cinema-grade absolute black is the brand foundation.
2. **Light-weight display serif.** If headlines feel heavy, drop display weight to 400 — the didone's high contrast carries the visual weight without bolding.
3. **Aggressive negative tracking on display.** If display feels loose, tighten to `-0.03em` to `-0.04em` at 96px. MasterClass goes tighter than every competitor.
4. **Eyebrow before headline.** If a section feels unanchored, add a 12px / 500 / `0.16em` uppercase eyebrow 8px above the headline. The eyebrow does the editorial framing work.
5. **Skip the rest shadow on tiles.** If tiles feel disconnected from the canvas, remove the rest shadow and rely on the gradient overlay for containment.
6. **Use streaming verbs.** If a CTA feels off-brand, switch from "Sign up" or "Buy now" to "Watch trailer" or "Get unlimited access". MasterClass speaks streaming, not e-commerce.
7. **Sparse density.** If the page feels packed, increase section padding to 96–128px. MasterClass breathes 4× more than Udemy.
8. **Reserve gold for premium.** If gold appears anywhere besides the membership pill, certificate mark, or focus ring, audit and remove. Gold belongs to a tier signal, not to decoration.
