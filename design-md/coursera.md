---
name: Coursera
tagline: University-blue `#0056d2` on warm-white parchment with Source Sans — the canonical online-degree marketplace.
author: webdesignhot
source_url: https://coursera.org
spec: design.md/v1.5
quality: curated
featured: false
categories: [media, marketplace]
tags: [light, education, sans, trustworthy, blue, academic]
preview_swatch: ['#ffffff', '#0056d2', '#1f1f1f']
related: []
description: 'Coursera is the canonical online-university aesthetic — a confident `#0056d2` royal blue paired with a warm `#fafafa` off-white canvas, Source Sans Pro and Inter setting body copy in friendly 16px / 400, and a course-card grid that reads as a cross between a campus bulletin board and an Amazon recommendation rail. The brand''s discipline is restraint: one blue for action, one near-black `#1f1f1f` for body, and a generous radius scale that rounds every card to 8px so the page feels approachable rather than transactional. Coursera''s signature is the partner-logo rail — Stanford, Yale, Google, IBM monograms parade across the homepage in muted greys, lending the marketplace its university-credentialed authority. Dense above-the-fold content stacking, breadcrumb-driven course navigation, and a left-rail filter sidebar on catalog pages place Coursera squarely in the e-commerce-meets-edu category — but the typography never gets aggressive, the color never gets loud, and the layout never feels like a sales funnel.'

colors:
  bg: '#ffffff'                    # primary canvas
  bg-warm: '#fafafa'                # warm off-white for hero sections
  bg-muted: '#f5f7f8'               # course-list bg, alt section band
  bg-deep: '#1f1f1f'                # footer / dark band
  bg-promo: '#eef0fb'               # promo-band soft blue
  surface: '#ffffff'                # default card
  surface-elevated: '#ffffff'        # modal floor (with shadow)
  surface-hover: '#f5f7f8'           # nav hover, list-row hover
  surface-soft: '#f7f9fc'            # secondary card bg
  surface-strong: '#e7eaf0'          # divider band
  text: '#1f1f1f'                    # primary body — near-black
  text-strong: '#0a0a0a'             # display headlines
  text-muted: '#5e6677'              # secondary metadata
  text-soft: '#6e7480'               # tertiary captions
  text-disabled: '#9aa0ad'           # disabled state
  text-on-brand: '#ffffff'            # text on blue
  text-link: '#0056d2'               # inline link blue
  text-link-hover: '#003e9c'         # link pressed
  brand: '#0056d2'                   # Coursera Blue — primary CTA, links, brand
  brand-hover: '#003e9c'             # primary button hover
  brand-active: '#002f7a'            # pressed
  brand-soft: '#eef0fb'              # soft tint surface, badge bg
  brand-deep: '#001e4f'              # deepest navy on dark surfaces
  accent-yellow: '#f5b728'           # rating star, achievement
  accent-orange: '#f47e2c'           # promotional accent, "Bestseller"
  accent-green: '#2e7d32'             # certificate complete, success
  accent-red: '#d52424'              # error, danger
  border: '#e0e0e0'                  # default hairline
  border-soft: '#eaedf2'             # subtle divider
  border-strong: '#c1c7d0'           # focused field outline
  border-focus: '#0056d2'            # focus ring
  on-brand: '#ffffff'                # label on brand surface
  rating-star: '#f5b728'             # star colour
  rating-star-empty: '#e0e0e0'       # unfilled star
  badge-bestseller: '#f47e2c'        # bestseller orange
  badge-new: '#0056d2'               # new course tag
  badge-trending: '#7c3aed'          # trending purple
  shadow-card: 'rgba(0,0,0,0.08)'   # default card shadow
  shadow-modal: 'rgba(0,0,0,0.20)'   # modal floor
  shadow-popover: 'rgba(0,0,0,0.12)' # popover/dropdown
  success: '#2e7d32'                 # certificate earned
  success-soft: '#e6f3e7'            # success bg
  warning: '#f5b728'                 # warning amber
  warning-soft: '#fff5db'            # warning bg
  danger: '#d52424'                  # error
  danger-soft: '#fbeaea'             # error bg
  info: '#0056d2'                    # info blue (reuses brand)
  info-soft: '#eef0fb'               # info bg

typography:
  display:
    family: '"Source Sans 3", "Source Sans Pro", "Open Sans", -apple-system, "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [300, 400, 600, 700]
    opentype-features: ['kern', 'liga']
  body:
    family: '"Source Sans 3", "Source Sans Pro", "Open Sans", -apple-system, "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 600]
  mono:
    family: '"SF Mono", "Roboto Mono", Menlo, Consolas, monospace'
    weights: [400]
  scale:
    display-hero:    { size: 60, weight: 700, lineHeight: 1.1,  tracking: '-0.02em', family: display, notes: 'Marketing landing hero — "Learn without limits"' }
    display-xl:      { size: 48, weight: 700, lineHeight: 1.15, tracking: '-0.015em', family: display, notes: 'Section hero, partner page' }
    display-lg:      { size: 36, weight: 700, lineHeight: 1.2,  tracking: '-0.01em', family: display, notes: 'Course detail page title' }
    display-md:      { size: 28, weight: 700, lineHeight: 1.25, tracking: '-0.005em', family: display, notes: 'Module heading, modal title' }
    display-sm:      { size: 22, weight: 700, lineHeight: 1.3,  tracking: '0',       family: display, notes: 'Section heading' }
    title-lg:        { size: 20, weight: 600, lineHeight: 1.35, tracking: '0',       family: display, notes: 'Course card title' }
    title-md:        { size: 18, weight: 600, lineHeight: 1.4,  tracking: '0',       family: display, notes: 'List item title' }
    title-sm:        { size: 16, weight: 600, lineHeight: 1.4,  tracking: '0',       family: display, notes: 'Sidebar nav, dropdown header' }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',       family: body, notes: 'Lead paragraph, hero subtitle' }
    body-md:         { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body, notes: 'Default body, course description' }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body, notes: 'Secondary metadata, "Beginner · 4 weeks"' }
    button-lg:       { size: 16, weight: 600, lineHeight: 1.0,  tracking: '0',       family: display, notes: '"Enroll for Free" pill' }
    button-md:       { size: 14, weight: 600, lineHeight: 1.0,  tracking: '0',       family: body, notes: 'Default button label' }
    caption:         { size: 13, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body, notes: 'Disclosures, fine print' }
    metadata:        { size: 14, weight: 400, lineHeight: 1.3,  tracking: '0',       family: body, opentype: ['tnum'], notes: 'Rating count, learner count' }
    badge:           { size: 12, weight: 600, lineHeight: 1.0,  tracking: '0.04em',  family: body, notes: '"Bestseller", "New", "Free" tags' }
    rating:          { size: 16, weight: 600, lineHeight: 1.0,  tracking: '0',       family: body, opentype: ['tnum'], notes: '"4.7" star aggregate' }

radius:
  micro: 2          # tiny indicator
  sm: 4             # input, small button
  md: 6             # tag, pill chip
  lg: 8             # primary card, button
  xl: 12            # large card, modal
  xxl: 16           # featured card, hero shell
  pill: 9999        # filter chip, badge pill

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]

layout:
  page-width: 1440
  content-max: 1280
  prose-width: 720
  header-height: 72
  sidebar-width: 280       # catalog filter rail
  card-min: 280            # min course card width
  card-max: 360            # max course card width
  hero-min-height: 480

components:
  button-primary:
    bg: '#0056d2'
    color: '#ffffff'
    radius: 24
    padding: '12px 24px'
    height: 48
    font: button-lg
    weight: 600
    use: '"Enroll for Free", "Start Learning" — primary CTA, pill-shaped Coursera blue.'
  button-primary-hover:
    bg: '#003e9c'
    color: '#ffffff'
    radius: 24
    use: 'Hover state — darker blue, no shadow lift.'
  button-secondary:
    bg: 'transparent'
    color: '#0056d2'
    border: '1px solid #0056d2'
    radius: 24
    padding: '12px 24px'
    height: 48
    use: '"Try for Free", "Learn More" — outlined secondary action.'
  button-tertiary-text:
    bg: 'transparent'
    color: '#0056d2'
    radius: 4
    padding: '8px 12px'
    use: 'Inline text link / footer-style action.'
  button-icon:
    bg: 'transparent'
    color: '#5e6677'
    radius: 4
    height: 32
    width: 32
    use: 'Wishlist heart, share, more-options icon button.'
  card-course:
    bg: '#ffffff'
    color: '#1f1f1f'
    radius: 8
    padding: 16
    border: '1px solid #e0e0e0'
    shadow: '0 2px 8px rgba(0,0,0,0.06)'
    use: 'Default course tile in catalog grid — 16:9 thumb on top, partner logo, title, instructor, rating, learner count, badges.'
  card-course-hover:
    bg: '#ffffff'
    color: '#1f1f1f'
    radius: 8
    shadow: '0 8px 24px rgba(0,0,0,0.12)'
    use: 'Hover lift — shadow deepens, no scale transform.'
  card-specialization:
    bg: '#fafafa'
    color: '#1f1f1f'
    radius: 12
    padding: 24
    border: '1px solid #e0e0e0'
    use: 'Specialization / Professional Certificate card — larger, 5-course curriculum preview.'
  card-degree:
    bg: '#ffffff'
    color: '#1f1f1f'
    radius: 16
    padding: 32
    border: '1px solid #e0e0e0'
    shadow: '0 4px 16px rgba(0,0,0,0.08)'
    use: 'Online Degree program card — premium tier, university crest top, "Apply Now" CTA.'
  badge-bestseller:
    bg: '#fff3e0'
    color: '#c4540a'
    radius: 4
    padding: '2px 8px'
    use: '"Bestseller" orange tag on top course cards.'
  badge-new:
    bg: '#eef0fb'
    color: '#0056d2'
    radius: 4
    padding: '2px 8px'
    use: '"New" tag on recently launched courses.'
  badge-free:
    bg: '#e6f3e7'
    color: '#2e7d32'
    radius: 4
    padding: '2px 8px'
    use: '"Free" tag for audit-track courses.'
  badge-trending:
    bg: '#f3eaff'
    color: '#7c3aed'
    radius: 4
    padding: '2px 8px'
    use: '"Trending" purple tag.'
  input-search:
    bg: '#ffffff'
    color: '#1f1f1f'
    radius: 24
    height: 48
    padding: '12px 16px 12px 44px'
    border: '1px solid #c1c7d0'
    use: 'Top-bar search — pill-shaped with magnifying-glass icon left.'
  input-text:
    bg: '#ffffff'
    color: '#1f1f1f'
    radius: 4
    border: '1px solid #c1c7d0'
    height: 48
    padding: '12px 16px'
    use: 'Form input — sign-in, profile fields.'
  filter-chip:
    bg: '#ffffff'
    color: '#1f1f1f'
    border: '1px solid #c1c7d0'
    radius: 9999
    padding: '6px 12px'
    use: 'Catalog filter pill — "Beginner · 4 weeks" — clickable to apply filter.'
  filter-chip-active:
    bg: '#eef0fb'
    color: '#0056d2'
    border: '1px solid #0056d2'
    radius: 9999
    use: 'Applied-filter state.'
  rating-stars:
    color: '#f5b728'
    color-empty: '#e0e0e0'
    use: '5-star rating row — filled yellow / empty grey, paired with numeric "4.7" aggregate.'
  partner-logo-rail:
    bg: '#ffffff'
    color: '#5e6677'
    use: 'Stanford / Yale / Google / IBM monogram strip — desaturated grey treatment for trust.'
  nav-top-bar:
    bg: '#ffffff'
    color: '#1f1f1f'
    height: 72
    border-bottom: '1px solid #e0e0e0'
    use: 'Sticky top nav — logo left, "Online Degrees / Find Career / For Enterprise" links centre, search + sign-in right.'
  sidebar-filter:
    bg: '#ffffff'
    color: '#1f1f1f'
    width: 280
    use: 'Catalog left rail — collapsible filter groups (Subject / Language / Level / Duration).'
  breadcrumb:
    bg: 'transparent'
    color: '#5e6677'
    color-link: '#0056d2'
    use: 'Course page breadcrumb — "Browse > Data Science > Machine Learning > [Course]".'
  modal-dialog:
    bg: '#ffffff'
    color: '#1f1f1f'
    radius: 12
    shadow: '0 24px 48px rgba(0,0,0,0.2)'
    padding: 32
    use: 'Sign-up / preview modal.'
  toast:
    bg: '#1f1f1f'
    color: '#ffffff'
    radius: 8
    padding: '12px 16px'
    use: 'Confirmation toast — "Course saved to wishlist".'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-out: 'cubic-bezier(0, 0, 0.2, 1)'
  ease-in-out: 'cubic-bezier(0.4, 0, 0.6, 1)'
  duration-fast: 150
  duration-standard: 250
  duration-slow: 400
  reduced-motion: 'respects prefers-reduced-motion: hover shadow lifts collapse to instant, modal scale-in becomes opacity-only, carousel auto-advance pauses entirely.'

breakpoints:
  mobile: 600
  tablet: 900
  desktop: 1200
  wide: 1440

shadows:
  none: 'none'
  card-rest: '0 2px 8px rgba(0,0,0,0.06)'
  card-hover: '0 8px 24px rgba(0,0,0,0.12)'
  popover: '0 4px 16px rgba(0,0,0,0.12)'
  modal: '0 24px 48px rgba(0,0,0,0.20)'
  ring: '0 0 0 3px rgba(0,86,210,0.4)'

accessibility:
  contrast-text-on-bg: 16.4              # #1f1f1f on #ffffff — AAA
  contrast-text-muted-on-bg: 5.6         # #5e6677 on #ffffff — AA at body
  contrast-text-on-brand: 7.7            # white on #0056d2 — AAA at body
  focus-ring: '3px solid rgba(0,86,210,0.4) with 2px offset'
  reduced-motion-honored: true
  caption-track: 'video lectures ship with closed captions on every course; transcripts side-by-side with player'
  language-support: '50+ languages with on-platform subtitles'

dark-mode: null            # Light-only — no dark variant offered
---

## 1. Visual Theme & Atmosphere

Coursera's site reads like the website Stanford would build if Stanford built websites for itself. The canvas is paper-white `#ffffff` warming faintly to `#fafafa` in hero bands, the type is Source Sans 3 carrying an open, friendly book-like rhythm, and the only chromatic event on the page is `#0056d2` — a confident royal blue that lives on the primary CTA, the inline links, and the wordmark itself. Where Udemy's marketplace shouts in purple and orange and red discount stickers, Coursera whispers — its discipline is the visual language of a university website translated into e-commerce.

The signature is the partner-logo rail. Within the first viewport on the homepage you'll see the monograms of Stanford, Yale, Princeton, Johns Hopkins, Google, IBM, Meta, Microsoft — desaturated to mid-grey, parading horizontally across a white band. These logos are doing the heavy lifting of trust-building; the brand's position isn't "we have great courses," it's "we are the marketplace where world-class universities and enterprises publish their courseware, and the certificate you earn here looks the same as the one you'd earn on campus." The rail is rendered intentionally muted — saturated brand colors would cheapen the parade. Instead, every logo is treated like a watermark, present but not loud.

The course-card grid is the workhorse component. Every course renders as an `8px`-radius white card with a 16:9 thumbnail on top, the partner logo (or "Coursera Project Network" wordmark), the course title in 20px / 600, the instructor name in 14px / 400 muted grey, a yellow 5-star rating row with a 14px tabular learner count ("4.7 ★ 124,532 reviews"), and a small badge ("Bestseller" / "New" / "Free") tucked top-left of the thumbnail. The visual rhythm is Amazon-product-card adapted to academic content — cards stack 4-across at desktop, 2-across at tablet, 1-across at mobile. There is no auto-advancing carousel of distractions, no parallax hero with stock-photo lecturers; the page is content-dense from the fold and stays that way through the rails.

Source Sans 3 — the open-source workhorse from Adobe's Source family — sets the entire site. Display sizes go up to 60px / 700 with `-0.02em` tracking; body is 16px / 400 on a 1.5 line-height. The font is friendly without being playful, professional without being severe, and reads beautifully at body sizes — a deliberate echo of the readable-textbook tradition. There's no decorative italic, no display-serif companion, no condensed cut. One family pulls the entire load.

Density is the third axis. Every catalog page renders a 280px left-rail filter sidebar (collapsible groups: Subject, Language, Level, Duration, Skill, Educator), a faceted breadcrumb top, then the course-card grid in the centre. Filter chips at the top of the grid show applied filters — clickable pills you can dismiss to refine the view. The interaction model is e-commerce-faceted-search applied to learning: pick a subject, narrow by level, sort by ratings, enroll. But the brand never lets the page feel transactional — the pills round to `9999px`, the cards round to `8px`, and the type stays generously sized through every breakpoint.

**Key Characteristics:**
- Warm paper-white `#ffffff` / `#fafafa` canvas — paper, not glass; warm, not cool.
- Single confident `#0056d2` royal blue rationed for primary CTA, links, brand mark.
- Source Sans 3 carrying display through body — one humanist sans, no decorative companion.
- Pill-shaped (`24px` radius) primary buttons; `8px`-radius cards with subtle `0 2px 8px rgba(0,0,0,0.06)` rest shadow.
- Partner-logo rail (Stanford / Yale / Google / IBM) desaturated to grey for trust-without-loudness.
- Course-card grid as the workhorse: 16:9 thumb / partner logo / 20px title / 14px instructor / 5-star rating / 14px learner count.
- Catalog page has 280px left-rail collapsible filter sidebar — e-commerce faceted-search adapted.
- Yellow `#f5b728` rating stars; orange `#f47e2c` "Bestseller" badges; the only saturated colors in the system besides brand blue.
- 16px / 400 body type on 1.5 line-height — book-readable density, never condensed.
- Light-only — no dark mode offered (consistent with academic editorial tradition).

## 2. Color Palette & Roles

### Primary
- **Paper White** (`#ffffff`): The defining canvas. Pure white, no warm tint — Coursera reads as institutional rather than editorial.
- **Warm White** (`#fafafa`): Hero band background, alt section banding. The 1% off-white that softens the hero from feeling clinical.
- **Display Black** (`#1f1f1f`): Primary body text. Near-black with a hint of warmth; pure `#000` reads too harsh for textbook-density reading.
- **Coursera Blue** (`#0056d2`): The brand's only blue. Primary CTA, inline links, wordmark. Used once or twice per viewport — never decoratively.

### Brand & Dark
- **Brand Hover** (`#003e9c`): Pointer-over state. ~30% darker shift.
- **Brand Active** (`#002f7a`): Pressed state.
- **Brand Soft** (`#eef0fb`): Soft-tint surface for badges, info banners, selected filter chips.
- **Brand Deep** (`#001e4f`): Footer background, dark navigation hero (rare).

### Accent
- **Star Yellow** (`#f5b728`): Rating-star colour. The only place yellow appears.
- **Bestseller Orange** (`#f47e2c`): "Bestseller" tag. The only orange in the system.
- **Trending Purple** (`#7c3aed`): "Trending" tag accent. Used once on the homepage.
- **Achievement Green** (`#2e7d32`): Certificate-earned, success messaging. Doubles as the success semantic.

### Interactive
- **CTA Blue** (`#0056d2`): Primary action.
- **Link Blue** (`#0056d2`): Inline links — same hue as CTA; brand consistency.
- **Outlined Blue** (`#0056d2` border on transparent): Secondary action.
- **Filter Chip Active** (`#eef0fb` bg + `#0056d2` text + `#0056d2` border): Applied-filter state.
- **Disabled** (`#9aa0ad` text on `#f5f7f8` bg): Non-interactive control.

### Neutral Scale
- **Display Black** (`#1f1f1f`): Display headlines, primary body.
- **Strong Black** (`#0a0a0a`): Hero display only — slightly darker than body for hierarchy.
- **Muted** (`#5e6677`): Secondary metadata — instructor name, "Beginner · 4 weeks · 23,000 enrolled".
- **Soft** (`#6e7480`): Tertiary captions, breadcrumb text.
- **Disabled** (`#9aa0ad`): Inactive form labels, disabled controls.
- **Border Default** (`#e0e0e0`): Card hairlines, dividers.
- **Border Soft** (`#eaedf2`): Subtle table-row dividers.
- **Border Strong** (`#c1c7d0`): Focused field outline before brand-blue ring kicks in.

### Surface & Borders
- **Surface Default** (`#ffffff`): Card, modal floor.
- **Surface Hover** (`#f5f7f8`): Nav hover, list-row hover.
- **Surface Soft** (`#f7f9fc`): Secondary card bg, FAQ accordion expanded.
- **Surface Strong** (`#e7eaf0`): Divider band between major sections.
- **Promo Surface** (`#eef0fb`): Soft-blue promo band — "Save 30% on Plus".

### Shadow Colors
- **Card Shadow** (`rgba(0,0,0,0.06)`): The default 2px / 8px-radius lift on every course card. Subtle — Coursera's elevation is whisper-soft, never dramatic.
- **Card Hover** (`rgba(0,0,0,0.12)`): Hover-state shadow — 4× stronger than rest. The page lifts toward you slightly on pointer-over.
- **Modal Shadow** (`rgba(0,0,0,0.20)`): Dialog floor — the only place 0.20 opacity shows up.

### Semantic
- **Success** (`#2e7d32` text on `#e6f3e7` soft bg): Certificate earned, save confirmed, profile saved.
- **Warning** (`#c4540a` text on `#fff5db` soft bg): "Course ends in 3 days" reminder, mid-priority alert.
- **Danger** (`#d52424` text on `#fbeaea` soft bg): Form validation error, payment failure.
- **Info** (`#0056d2` text on `#eef0fb` soft bg): Reuses brand blue. "New financial-aid options available."

## 3. Typography Rules

### Font Family
- **Primary**: `"Source Sans 3"` (formerly Source Sans Pro) — Adobe's open-source humanist sans, designed by Paul D. Hunt, released 2012, version 3 in 2021. Fallback chain: `"Source Sans Pro", "Open Sans", -apple-system, "Segoe UI", Helvetica, Arial, sans-serif`.
- **Mono**: `"SF Mono", "Roboto Mono", Menlo, Consolas, monospace` — used in code lectures (Computer Science specializations) and inline code in articles.
- **OpenType Features**: `kern` and `liga` enabled site-wide. `tnum` enabled on rating numbers, learner counts, and price tables for column alignment.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| Display Hero | Source Sans 3 | 60px | 700 | 1.1 | -0.02em | kern,liga | Marketing landing — "Learn without limits" |
| Display XL | Source Sans 3 | 48px | 700 | 1.15 | -0.015em | kern,liga | Section hero, partner page |
| Display LG | Source Sans 3 | 36px | 700 | 1.2 | -0.01em | kern,liga | Course detail page title |
| Display MD | Source Sans 3 | 28px | 700 | 1.25 | -0.005em | kern,liga | Module heading, modal title |
| Display SM | Source Sans 3 | 22px | 700 | 1.3 | 0 | kern,liga | Section heading |
| Title LG | Source Sans 3 | 20px | 600 | 1.35 | 0 | kern,liga | Course card title |
| Title MD | Source Sans 3 | 18px | 600 | 1.4 | 0 | kern,liga | List item title |
| Title SM | Source Sans 3 | 16px | 600 | 1.4 | 0 | kern,liga | Sidebar nav, dropdown header |
| Body LG | Source Sans 3 | 18px | 400 | 1.55 | 0 | kern,liga | Lead paragraph, hero subtitle |
| Body MD | Source Sans 3 | 16px | 400 | 1.5 | 0 | kern,liga | Default body, course description |
| Body SM | Source Sans 3 | 14px | 400 | 1.5 | 0 | kern,liga | Secondary metadata |
| Button LG | Source Sans 3 | 16px | 600 | 1.0 | 0 | kern,liga | "Enroll for Free" CTA label |
| Button MD | Source Sans 3 | 14px | 600 | 1.0 | 0 | kern,liga | Default button label |
| Caption | Source Sans 3 | 13px | 400 | 1.4 | 0 | kern,liga | Disclosures, fine print |
| Metadata | Source Sans 3 | 14px | 400 | 1.3 | 0 | tnum | Rating count, learner count |
| Badge | Source Sans 3 | 12px | 600 | 1.0 | 0.04em | kern,liga | Uppercase "BESTSELLER", "NEW" |
| Rating | Source Sans 3 | 16px | 600 | 1.0 | 0 | tnum | "4.7" star aggregate |
| Code | SF Mono | 14px | 400 | 1.5 | 0 | -- | Code lectures, inline code |

### Principles
- **Single family discipline.** Source Sans 3 covers display through body. There is no display-serif companion — the brand's institutional voice doesn't need one because the partner logos do the editorial work.
- **Modest negative tracking.** Display sizes use `-0.005em` to `-0.02em` only. Coursera never goes tighter than `-0.02em` even on 60px hero — the brand is open and readable, not condensed and aggressive.
- **400 / 600 / 700 only.** No 300 weight in production despite the family supporting it; no 500 (the workhorse mid-weight is 600). The system reads cleaner with three weights than five.
- **16px body, 1.5 line-height, no compromises.** Course descriptions, lecture transcripts, blog articles all sit at this baseline. Coursera reads like a textbook — generous and slow, never tight.
- **Tabular numerals on counts.** Rating aggregates ("4.7"), learner counts ("124,532 reviews"), price tables, certificate progress percentages all use `tnum`.
- **Sentence case for everything except badges.** "Enroll for free", "Add to wishlist" — capital first word only. Uppercase belongs only to small badges (BESTSELLER, NEW, FREE, TRENDING).

## 4. Component Stylings

### Buttons

**Primary (Coursera Blue Pill)**
- Background: `#0056d2`. Text: `#ffffff`. Radius: `24px` (capsule). Padding: `12px 24px`. Height: `48px`. Font: Source Sans 3 16px / 600.
- Hover: `#003e9c`. No shadow lift, no scale transform.
- Active: `#002f7a`.
- Use: "Enroll for Free", "Start Learning", "Apply Now". One per viewport. The pill shape is the brand's defining radius signature.

**Secondary (Outlined Blue)**
- Background: `transparent`. Text: `#0056d2`. Border: `1px solid #0056d2`. Radius: `24px`. Padding: `12px 24px`.
- Hover: bg `#eef0fb`.
- Use: "Try for Free", "Learn More", "View Syllabus".

**Tertiary Text**
- Background: `transparent`. Color: `#0056d2`. No border. Padding: `8px 12px`.
- Hover: underline appears.
- Use: Inline action, footer link.

**Icon Button**
- Background: `transparent`. Color: `#5e6677`. Radius: `4px`. Size: `32 × 32`.
- Hover: bg `#f5f7f8`, color `#1f1f1f`.
- Use: Wishlist heart, share, more-options.

### Cards & Tiles

**Course Card (Default)**
- Background: `#ffffff`. Color: `#1f1f1f`. Radius: `8px`. Padding: `16px`. Border: `1px solid #e0e0e0`.
- Layout: 16:9 thumbnail on top, 8px gap, partner logo strip (24px tall), 8px gap, title (20px / 600), 4px gap, instructor (14px / 400 `#5e6677`), 8px gap, rating row (yellow stars + 16px / 600 score + 14px / 400 muted count).
- Rest shadow: `0 2px 8px rgba(0,0,0,0.06)`.
- Use: Default catalog tile.

**Course Card (Hover)**
- Background: `#ffffff` (no change). Shadow deepens to `0 8px 24px rgba(0,0,0,0.12)`. Title color stays the same.
- No scale, no lift transform — just shadow deepening.
- Use: Pointer-over interaction.

**Specialization Card**
- Background: `#fafafa`. Color: `#1f1f1f`. Radius: `12px`. Padding: `24px`. Border: `1px solid #e0e0e0`.
- Layout: Larger feature card with 5-course curriculum preview list inside.
- Use: "Professional Certificate" / "Specialization" rails.

**Online Degree Card**
- Background: `#ffffff`. Color: `#1f1f1f`. Radius: `16px`. Padding: `32px`. Border: `1px solid #e0e0e0`.
- Shadow: `0 4px 16px rgba(0,0,0,0.08)`.
- Layout: University crest top, degree name in 28px / 700, university partner, "Apply Now" primary CTA + "Learn More" secondary.
- Use: Online Master's / Bachelor's program tile — premium tier, larger radius.

### Badges, Tags, Indicators

**Bestseller**
- Background: `#fff3e0`. Color: `#c4540a`. Radius: `4px`. Padding: `2px 8px`. Font: 12px / 600.
- Use: Orange tag on top-rated courses.

**New**
- Background: `#eef0fb`. Color: `#0056d2`. Radius: `4px`.
- Use: Recently launched courses.

**Free**
- Background: `#e6f3e7`. Color: `#2e7d32`. Radius: `4px`.
- Use: Audit-track free courses.

**Trending**
- Background: `#f3eaff`. Color: `#7c3aed`. Radius: `4px`.
- Use: Trending purple tag — appears once on the homepage, rare elsewhere.

**Rating Stars**
- Filled: `#f5b728`. Empty: `#e0e0e0`. Half-star supported.
- Paired with: numeric aggregate "4.7" in 16px / 600 + "(124,532 reviews)" in 14px / 400 muted.

### Inputs & Forms

**Search (Pill)**
- Background: `#ffffff`. Color: `#1f1f1f`. Border: `1px solid #c1c7d0`. Radius: `24px`. Height: `48px`. Padding: `12px 16px 12px 44px`.
- Magnifying-glass icon left in `#5e6677`.
- Focus: border `#0056d2`, ring `0 0 0 3px rgba(0,86,210,0.4)`.
- Use: Top-bar global search and catalog search.

**Text Input**
- Background: `#ffffff`. Color: `#1f1f1f`. Border: `1px solid #c1c7d0`. Radius: `4px`. Height: `48px`. Padding: `12px 16px`.
- Label sits above, 14px / 600 `#1f1f1f`. Hint below, 13px / 400 `#5e6677`.
- Focus: border `#0056d2`, ring `0 0 0 3px rgba(0,86,210,0.4)`.
- Use: Sign-in, profile, payment forms.

**Filter Chip**
- Default: bg `#ffffff`, color `#1f1f1f`, border `1px solid #c1c7d0`, radius `9999px`, padding `6px 12px`.
- Active: bg `#eef0fb`, color `#0056d2`, border `#0056d2`. Dismissible "×" icon right.
- Use: Catalog filter pill — "Beginner", "4 weeks", "Free".

### Navigation

**Top Bar (Sticky)**
- Background: `#ffffff`. Border-bottom: `1px solid #e0e0e0`. Height: `72px`.
- Layout: Coursera wordmark + dropdown ("Online Degrees / Find Career / For Enterprise") left, search centre, profile + cart + sign-in right.
- Mobile: collapses to hamburger + search icon + profile.

**Catalog Sidebar (Filter Rail)**
- Background: `#ffffff`. Width: `280px`. Padding: `24px 16px`.
- Collapsible accordion groups: Subject, Language, Level, Duration, Skill, Educator, Subtitles. Each group title 16px / 600, options 14px / 400 with checkbox + count "(1,234)".
- Sticky on scroll.

**Breadcrumb**
- Color: `#5e6677`. Links: `#0056d2` (no underline by default; hover underlines).
- Format: "Browse > Data Science > Machine Learning > Stanford University: Machine Learning Specialization".

### Modals & Toasts

**Modal Dialog**
- Background: `#ffffff`. Radius: `12px`. Padding: `32px`.
- Shadow: `0 24px 48px rgba(0,0,0,0.20)`.
- Backdrop: `rgba(0,0,0,0.5)`.
- Use: Sign-up, course preview, financial-aid request.

**Toast**
- Background: `#1f1f1f`. Color: `#ffffff`. Radius: `8px`. Padding: `12px 16px`.
- Use: "Course saved to wishlist" — bottom-left, auto-dismiss 3s.

**Snackbar**
- Background: `#fff5db`. Color: `#1f1f1f`. Border-left: `4px solid #f5b728`. Radius: `8px`.
- Use: "Your course resumes where you left off" warning-style nudge on return.

## 5. Layout Principles

### Spacing System
- Base: 4px. Scale: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128.
- Card-to-card gap: 24px on desktop, 16px on tablet, 12px on mobile.
- Section gap (major modules): 64px.
- Grid gutter: 24px.

### Grid & Container
- Page width: 1440px max.
- Content max within page: 1280px centred.
- Catalog: 280px filter sidebar + 1000px course grid (4-across at desktop, 3-across at 900px, 2-across at 600px, 1-across mobile).
- Hero: full-bleed background, content centred at 1280px.

### Whitespace Philosophy
Coursera is a content-density product disguised as a textbook. Sections breathe at 64px gaps, cards at 24px, but within a card the layout is tight (16px padding) so 4 cards fit in a row without horizontal scroll. The hero gets 96px top/bottom padding — the most generous breathing room on the page — because it's framing the brand promise. Below the fold, density takes over.

### Section Cadence
- Top bar (sticky)
- Hero (96px top padding, 60px display headline, 18px lead, primary CTA)
- Partner-logo rail (Stanford / Yale / Google / IBM, 64px tall band on `#fafafa`)
- "Most Popular Courses" rail (4 course cards)
- "Skills That Pay" carousel
- "Browse by Subject" tile grid
- "Explore Online Degrees" feature card row
- "From Our Partners" testimonial + university quote band
- Footer (4-column dark `#1f1f1f` band — links, language picker, app downloads)

Light/dark alternation: predominantly light. Footer is the only dark band.

## 6. Shapes & Radius Scale

- **Micro** (`2px`): Tiny indicator dot.
- **Standard** (`4px`): Input, dropdown, small badge — the workhorse small radius.
- **Comfortable** (`6px`): Tag chip, pill chip variant.
- **Relaxed** (`8px`): Course card, secondary card, modal corners — the workhorse large radius.
- **Featured** (`12px`): Specialization card, large modal.
- **Premium** (`16px`): Online Degree program card.
- **Pill** (`24px`): Primary button, search input, filter chip — the brand's defining capsule shape for buttons.
- **Round** (`9999px`): Avatar, profile circle, filter-chip alternative.

The 24px pill button + 8px card pairing is the geometric signature. The pill makes CTAs feel friendly and clickable; the 8px card makes content feel like institutional documentation.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 (flat) | No shadow, no border | Section background, hero band |
| 1 (border) | `1px solid #e0e0e0` | Card rest, input field, divider |
| 2 (subtle lift) | `0 2px 8px rgba(0,0,0,0.06)` | Default course card rest |
| 3 (hover lift) | `0 8px 24px rgba(0,0,0,0.12)` | Course card hover |
| 4 (popover) | `0 4px 16px rgba(0,0,0,0.12)` | Dropdown, tooltip |
| 5 (modal) | `0 24px 48px rgba(0,0,0,0.20)` | Dialog, sign-up modal |

### Shadow Philosophy
Shadows are neutral-grey and whisper-soft. The rest-state card shadow (`rgba(0,0,0,0.06)`) is barely perceptible — it gives the card just enough lift to feel three-dimensional without dramatising. On hover, the shadow grows 4× more intense (still under 0.15 opacity) and the card appears to come forward without translating. Modals are the only place 0.20 opacity shows up. The brand never uses brand-tinted shadows — blue belongs to action, not elevation.

## 8. Interaction & Motion

### Easing Curves
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — Material's standard ease, used for fades, opacity, simple slides.
- **Out**: `cubic-bezier(0, 0, 0.2, 1)` — incoming elements (modal in, dropdown open).
- **In-Out**: `cubic-bezier(0.4, 0, 0.6, 1)` — accordion expand/collapse.

### Duration Buckets
- **Fast**: 150ms — colour shifts, hover transitions, button-press feedback.
- **Standard**: 250ms — card hover shadow lift, modal open, dropdown.
- **Slow**: 400ms — accordion expand, hero carousel slide.

### Per-Component Recipes
- **Course card hover**: Shadow `0 2px 8px rgba(0,0,0,0.06) → 0 8px 24px rgba(0,0,0,0.12)`, 250ms ease-standard. No scale, no translate — purely shadow.
- **Primary CTA hover**: Background `#0056d2 → #003e9c`, 150ms ease-standard. No shadow change, no scale.
- **Filter chip toggle**: bg + text + border swap together over 150ms.
- **Modal open**: 250ms ease-out, opacity `0 → 1` + scale `0.96 → 1`.
- **Dropdown open**: 200ms ease-out, opacity `0 → 1` + translateY `-4px → 0`.
- **Toast in**: slide up from bottom 6px + opacity over 250ms; auto-dismiss after 3s with reverse motion.
- **Accordion expand**: height auto-grow over 400ms ease-in-out, content fades in over last 200ms.

### Page Transitions
Coursera's catalog and course pages are server-rendered with light client-side routing for filter changes. Filter applies trigger a 150ms opacity dim on the grid, then the new results swap in over 200ms. There's no full-page transition.

### Reduced Motion
`prefers-reduced-motion: reduce` collapses:
- Card hover shadow lifts → instant snap.
- Modal scale-in → opacity-only.
- Toast slide → instant appear/disappear.
- Carousel auto-advance → pauses entirely.
- Accordion expand → instant.

## 9. Accessibility & A11y

### Contrast Pairs
- Display Black `#1f1f1f` on white `#ffffff`: **16.4:1** — AAA at all sizes.
- Muted `#5e6677` on white `#ffffff`: **5.6:1** — AA at body sizes.
- White `#ffffff` on Coursera Blue `#0056d2`: **7.7:1** — AAA at body.
- Brand Blue `#0056d2` link on white: **7.7:1** — AAA.
- Achievement Green `#2e7d32` on white: **6.0:1** — AA at body.
- Star Yellow `#f5b728` on white: **2.0:1** — fails for text; used decoratively only (rating stars).
- Disabled `#9aa0ad` on white: **2.7:1** — fails AA, used for disabled-only states with `aria-disabled`.

### Focus Indicators
- Default focus: `3px solid rgba(0,86,210,0.4)` outline with `2px` offset on light surfaces.
- Form fields: border lifts to `#0056d2` on focus, plus the 3px ring outside.
- Tab order: top nav → search → main content top-to-bottom → sidebar filters → grid cards → footer.

### ARIA Patterns
- Course cards: `role="article" aria-label="[Course Title], by [Instructor]. Rating [4.7] of 5 stars based on [124,532] reviews. [Beginner] level."`
- Rating stars: `aria-hidden="true"` on the star icons, with the text label carrying the semantic meaning.
- Filter sidebar: `role="region" aria-label="Filter courses"`. Each accordion group: `aria-expanded`, `aria-controls`.
- Course player: `role="region" aria-label="Course video player"`. Captions: `<track kind="captions">` per available language.
- Modal: `role="dialog" aria-modal="true"` with focus trap.

### Keyboard Navigation
- Tab: move forward through controls; Shift+Tab reverses.
- Enter / Space: activate focused button or card.
- Arrow keys: navigate within course-card grid (planned: roving tabindex).
- ESC: close modal, dropdown, sidebar overlay.
- "/" : focus search (Cmd-K alternative not implemented).

### Screen Reader Hints
- Course card aria-label packs title + instructor + rating + level into one string for fast scanning.
- Partner logos have `aria-label="Stanford University"` etc.; decorative when paired with adjacent visible text.
- Video player: live-region announces play/pause state changes.

### Reduced Motion
Honoured. See §8.

## 10. Responsive Behavior

### Breakpoints
| Token | Min | Use |
|-------|-----|-----|
| mobile | 0px | 1 card per row, sidebar collapses to filter modal |
| tablet | 600px | 2 cards per row, sidebar shows as collapsible drawer |
| tablet-lg | 900px | 3 cards per row, sidebar visible at 240px |
| desktop | 1200px | 4 cards per row, full 280px sidebar |
| wide | 1440px | content max 1280px centred |

### Touch Targets
- 48×48 minimum on all interactive controls. Card tap targets fill the entire card body (anchor wraps the whole card).
- On mobile, filter chips reflow to wrap with 12px gaps.

### Collapsing Strategy
- **Top nav**: collapses to hamburger + search + profile on `< 900px`.
- **Filter sidebar**: collapses to "Filters" button on mobile that opens a full-screen drawer.
- **Course grid**: 4 → 3 → 2 → 1 across the breakpoint cascade.
- **Hero**: title scales 60 → 48 → 36 → 28; image collapses below text on `< 600px`.

### Image Behavior
- Course thumbnails: 16:9 aspect, served at 320w / 640w / 960w / 1280w via responsive `srcset`. Lazy-load below the fold.
- Partner logos: SVG with `currentColor` for tint adjustability.
- Video player: 16:9 with adaptive bitrate streaming (HLS).

### Container Queries
Used on the filter sidebar — accordion group titles collapse to icon-only at narrow rail widths.

## 11. Content & Voice

### Tone
Coursera's voice is **encouraging, professional, and accessible**. Course descriptions read like syllabi written for adult learners — clear, structured, free of jargon. Marketing copy tilts aspirational ("Learn without limits", "Upskill for your future") without being saccharine. The brand never assumes the reader is an expert; every page treats you like a motivated newcomer who deserves clear instructions.

### Microcopy Patterns
- **Primary CTA**: "Enroll for Free", "Start Learning", "Apply Now", "Get Started".
- **Secondary CTA**: "Try for Free", "Learn More", "View Syllabus".
- **Confirmation toast**: "Course saved to wishlist", "Welcome back, [Name]", "Your enrollment is confirmed".
- **Empty wishlist**: "Save courses you're interested in for later. Tap the heart on any course."
- **Empty progress**: "Your courses will appear here once you enroll. Browse the catalog to find your next skill."
- **Premium upsell**: "Unlock thousands of courses with Coursera Plus."
- **Financial aid**: "Need help paying for this course? Apply for financial aid."
- **Time-aware welcome**: "Welcome back, [Name]" + "Continue learning" CTA on resumed-course module.

### Empty States
- Empty wishlist: heart-icon illustration + "Save courses you're interested in" + "Browse Courses" CTA.
- Empty enrollments: "Your courses will appear here" + featured catalog rail.
- Empty search: "No results for [query]" + "Try removing filters" + suggested searches.
- Offline: "You're offline. Downloaded lectures are available below."

### CTA Verb Conventions
- "Enroll" — primary verb for free enrollment in a single course.
- "Apply" — for degree programs (admissions process required).
- "Subscribe" — for Coursera Plus monthly tier.
- "Save" — wishlist toggle, not "Bookmark".
- "Continue learning" — returning-user CTA on in-progress courses.
- "View Syllabus" — secondary action to inspect curriculum without enrolling.
- "Get certificate" — completion CTA, not "Download" or "Earn".

## 12. Dark Mode & Theming

Coursera is **light-only on the consumer surface**. There is no dark-mode variant in the web app, mobile app, or marketing site. The brand's visual lineage is the academic textbook — paper-white pages, dark ink, generous margins — and a dark mode would break that metaphor. Long-form reading (course transcripts, articles, syllabi) is also better-served by light backgrounds for sustained reading sessions in well-lit environments.

The video player has a dark theatre mode (the player chrome darkens around the video) but the surrounding page stays light. This is the only "dark" treatment in the system.

If theming were to be added, the canvas would lift to `#0f1419` with `#e8eaed` body text. Brand blue `#0056d2` would brighten slightly to `#4a90ff` to retain WCAG AA contrast on dark. Cards would shift to `#1a1f26`. But no public design has done this and there's no roadmap signal for it.

## 13. Lineage & Influences

Coursera's visual lineage is three-streamed.

**The university website tradition.** Coursera was founded in 2012 by Stanford CS professors Andrew Ng and Daphne Koller — and the site bears the unmistakable fingerprint of Stanford's web aesthetic: paper-white canvas, royal blue brand, single-column long-form content, faculty-led "course preview video" as hero element. Every Coursera course page reads like a course-catalog entry from a top-tier university adapted for the web.

**The Amazon-product-card e-commerce tradition.** Coursera adopted the e-commerce facets pattern wholesale — left-rail filter sidebar, faceted search, breadcrumb navigation, "Customers also viewed" rails, rating + review aggregate, "Add to wishlist". Where Amazon optimises for transaction velocity, Coursera adapted the same scaffolding for course discovery.

**The Material Design / friendly-sans tradition.** Source Sans 3, the 8px card radius, the 24px pill button, the neutral-grey shadow tier system — these are direct adaptations of Google's Material Design language, contemporary to Coursera's founding (Material 1 launched 2014). The brand never went full Material (no FAB, no ripple effect on click) but the elevation tiers and the corner-rounding philosophy are unmistakable.

What Coursera rejects: dark mode as default, decorative serif companion, multi-color brand palette, aggressive negative tracking, full-screen marketing video on every page, modal upsell pop-overs.

**Influences:**
- **Stanford University** — paper-white canvas, royal-blue brand, faculty-led course-preview hero. https://stanford.edu
- **Amazon** — e-commerce faceted-search, course-card grid, rating + review pattern. https://amazon.com
- **Material Design (Google)** — Source Sans (Adobe contemporaneously open-sourced for parallel ecosystem), 8px card radius, neutral-grey elevation tiers. https://m3.material.io
- **edX** — direct contemporary, similar university-marketplace category. https://edx.org
- **Adobe Source family** — Source Sans 3, Source Serif, Source Code Pro — the open-source type backbone. https://github.com/adobe-fonts/source-sans

## 14. Do's and Don'ts

**Do:**
- Use `#0056d2` for primary CTA, inline links, and the wordmark — and nowhere else for action.
- Pair primary CTA with white text — the contrast is AAA at body sizes.
- Round buttons to `24px` (capsule pill) and cards to `8px` — the geometric pairing is the brand signature.
- Apply a subtle `0 2px 8px rgba(0,0,0,0.06)` shadow on rest cards; deepen to `0 8px 24px rgba(0,0,0,0.12)` on hover. No scale, no translate.
- Use the partner-logo rail (Stanford / Yale / Google / IBM) desaturated to mid-grey near the top of the homepage for trust-building.
- Set body type at 16px / 400 / 1.5 line-height — the textbook-readable density is the brand.
- Use yellow `#f5b728` rating stars exclusively — no other color for ratings.
- Provide closed captions on every video lecture; transcripts side-by-side with the player.
- Keep the canvas paper-white `#ffffff` warming to `#fafafa` in hero bands. No tints elsewhere.
- Default to sentence case ("Enroll for free") with uppercase reserved for badges only.

**Don't:**
- Don't use `#0056d2` decoratively (background fills, divider lines, icon accents) — it's reserved for action and brand.
- Don't use scale transforms on hover — Coursera's elevation grows via shadow, not translation.
- Don't mix italic Source Sans into running copy — the cut exists but is essentially never used.
- Don't pair the brand blue with a saturated secondary color — yellow stars and orange "Bestseller" are the only saturated accents.
- Don't tighten display tracking past `-0.02em` — the brand is open and readable, not condensed.
- Don't use a serif companion font — single-family Source Sans 3 carries display through body.
- Don't apply heavy shadows on cards (`> 0.15` opacity) — the elevation is whisper-soft, never dramatic.
- Don't introduce a dark theme — Coursera is light-only by tradition.
- Don't strip the partner-logo rail from hero pages — the trust-building parade is the brand's foundational move.
- Don't compress course-card rails to fewer than 16px gaps — density without breath reads as cheap.
- Don't use 600 weight for headlines — display is 700, body-bold accents are 600.
- Don't use shouty discount stickers ("70% OFF!") — Coursera's pricing is positioned as "free / financial aid available", not "discounted".

## 15. Agent Prompt Guide

### Quick Color Reference
- Canvas: `#ffffff`
- Warm Canvas: `#fafafa`
- Coursera Blue: `#0056d2`
- Brand Hover: `#003e9c`
- Display Black: `#1f1f1f`
- Muted: `#5e6677`
- Border: `#e0e0e0`
- Star Yellow: `#f5b728`
- Bestseller Orange: `#f47e2c`
- Success Green: `#2e7d32`

### Example Component Prompts
1. "Create a Coursera-style course card — `#ffffff` background, `8px` radius, `1px solid #e0e0e0` border, `0 2px 8px rgba(0,0,0,0.06)` rest shadow; 16:9 thumbnail on top with a small `#fff3e0` 'Bestseller' badge top-left in 12px / 600 `#c4540a`; below: 24px Stanford partner monogram, 20px / 600 `#1f1f1f` title 'Machine Learning Specialization', 14px / 400 `#5e6677` 'Andrew Ng + 2 others', yellow 5-star row + 16px / 600 '4.9' + 14px / 400 muted '(124,532)'. On hover deepen shadow to `0 8px 24px rgba(0,0,0,0.12)` over 250ms."
2. "Design a Coursera primary CTA — `24px` pill radius, `#0056d2` background, white 16px / 600 'Enroll for Free' label, `12px 24px` padding, `48px` height, hover to `#003e9c`, no shadow lift."
3. "Build a Coursera homepage hero — `#fafafa` warm-white background, 60px Source Sans 3 700-weight headline 'Learn without limits' in `#1f1f1f` with `-0.02em` tracking, 18px / 400 `#5e6677` lead paragraph beneath, primary blue pill CTA + outlined-blue secondary inline."
4. "Render a Coursera partner-logo rail — `#fafafa` band, 64px tall, horizontal scroll of Stanford / Yale / Google / IBM / Microsoft / Meta / Princeton / Johns Hopkins logos all desaturated to `#5e6677` mid-grey at 24px height, 48px gap between logos."
5. "Create a Coursera catalog page — 280px left filter sidebar with collapsible accordion groups (Subject / Language / Level / Duration / Skill), each group title 16px / 600 with checkbox options 14px / 400 + count '(1,234)'; 1000px course grid right with 4-across course cards at 24px gap; sticky top bar with 'Browse > Data Science > Machine Learning' breadcrumb in `#5e6677` with `#0056d2` link state."
6. "Build a Coursera Online Degree program card — `#ffffff` background, `16px` radius, `0 4px 16px rgba(0,0,0,0.08)` shadow, `32px` padding; university crest top, 28px / 700 'Master of Computer Science' title, 16px / 400 'University of Illinois Urbana-Champaign' subtitle, primary blue pill 'Apply Now' + outlined 'Learn More' inline."

### Iteration Guide
1. **Soften the shadow.** If cards feel heavy, reduce shadow opacity — Coursera's rest is `0.06`, hover is `0.12`. Anything `> 0.15` reads as Material Design rather than Coursera.
2. **Pill the buttons.** If primary CTA feels boxy, raise radius to `24px`. Coursera's pill is the geometric signature.
3. **Mute the partner logos.** Saturated brand colors on the partner rail cheapen the parade. Desaturate to `#5e6677` for trust-without-loudness.
4. **Single-family discipline.** If display feels off-brand, drop the secondary font — Source Sans 3 carries everything.
5. **Sentence case verbs.** "Enroll for free", not "ENROLL FOR FREE" or "Enroll For Free". Capital first word only.
6. **Open the tracking.** If display feels condensed, loosen tracking — Coursera never goes tighter than `-0.02em` even at 60px.
7. **Yellow only for stars.** If yellow appears anywhere besides rating stars or the bestseller orange tag, audit and remove.
8. **Generous body line-height.** Course descriptions and transcripts read at 1.5 — anything tighter feels rushed.
