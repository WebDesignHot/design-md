---
name: Khan Academy
tagline: Signature `#14bf96` mint green on white with Lato sans — free-for-everyone education in a warm, encouraging register.
author: webdesignhot
source_url: https://www.khanacademy.org
spec: design.md/v1.5
quality: curated
featured: false
categories: [media, marketplace]
tags: [light, education, sans, friendly, green, nonprofit, k12]
preview_swatch: ['#ffffff', '#14bf96', '#21242c']
related: [coursera, udemy, masterclass]
description: 'Khan Academy is the warm-not-corporate aesthetic — a signature `#14bf96` mint green snapped against a paper-white `#ffffff` canvas, Lato sans pulling display through body in a friendly humanist register, and a learning-tree navigation pattern that descends directly from the K-12 textbook lineage rather than from e-commerce or streaming. The brand''s personality is the volunteer math teacher who genuinely believes anyone can learn — encouraging, plain-spoken, never patronizing, never bargain-aware (because Khan is free). Where Coursera leans on Stanford-blue institutional trust and Udemy leans on Amazon-discount-sticker bargain energy, Khan leans on **mission-driven warmth**: the page''s argument is "we are a nonprofit, we are free, we believe in you, and here is the next exercise." Course structure is rendered as a learning tree (mastery dots showing skills attempted / familiar / proficient / mastered in a 4-stage progress system), illustrations lean toward Owl-mascot warmth (Khan''s mascot, "Khanmigo", appears on AI tutor surfaces and learner pages), and the overall density is generous — body type at 16px / 400 / 1.5 line-height with friendly 8px-radius cards. The brand is a 21st-century reincarnation of the warm tutor-teacher voice in pure web form.'

colors:
  bg: '#ffffff'                    # primary canvas
  bg-warm: '#f7f8fa'                # alt section band
  bg-muted: '#fafbfc'               # subtle bg variation
  bg-cream: '#fef9e9'                # warm cream for tip / encouragement bands
  bg-deep: '#21242c'                # footer dark band
  bg-promo: '#e3f9f1'               # mint promo band
  surface: '#ffffff'                # default card
  surface-elevated: '#ffffff'        # modal floor (with shadow)
  surface-hover: '#f7f8fa'           # nav hover, list-row hover
  surface-soft: '#f0fcf7'            # secondary mint-tinted card bg
  surface-strong: '#e7e9ed'          # divider band
  text: '#21242c'                    # primary body — warm near-black
  text-strong: '#0c0d0f'             # display headlines
  text-muted: '#5b5e6b'              # secondary metadata
  text-soft: '#797d8a'               # tertiary captions
  text-disabled: '#a8aab2'           # disabled state
  text-on-brand: '#ffffff'            # text on green
  text-link: '#0a7d63'               # inline link deeper green
  text-link-hover: '#06664f'         # link pressed
  brand: '#14bf96'                   # Khan Mint — primary brand colour
  brand-hover: '#0e9a78'             # primary button hover
  brand-active: '#0a7d63'            # pressed
  brand-soft: '#e3f9f1'              # soft tint surface, badge bg
  brand-deep: '#0a7d63'              # deeper green for inline links + dark surfaces
  accent-blue: '#1865f2'             # inline link blue (alternative to deep green for some surfaces)
  accent-yellow: '#f4cf3e'           # mastery-dot warning colour, energy points
  accent-orange: '#e07c2c'             # streaks, fire icon
  accent-purple: '#9059ff'           # avatar / profile accent
  accent-red: '#d23a48'              # error, danger
  accent-pink: '#e879b7'             # mascot accent (Khanmigo)
  border: '#d6d8de'                  # default hairline
  border-soft: '#e7e9ed'             # subtle divider
  border-strong: '#a8aab2'           # focused field outline
  border-focus: '#14bf96'            # focus ring
  on-brand: '#ffffff'                # label on brand surface
  mastery-attempted: '#a8aab2'       # mastery dot — attempted (grey)
  mastery-familiar: '#1865f2'        # mastery dot — familiar (blue)
  mastery-proficient: '#9059ff'      # mastery dot — proficient (purple)
  mastery-mastered: '#0a7d63'        # mastery dot — mastered (deep green)
  energy-points: '#f4cf3e'           # gamified yellow point currency
  streak-fire: '#e07c2c'             # streak counter orange
  shadow-card: 'rgba(33,36,44,0.08)' # default card shadow
  shadow-modal: 'rgba(33,36,44,0.20)' # modal floor
  shadow-popover: 'rgba(33,36,44,0.12)' # popover/dropdown
  success: '#0a7d63'                 # exercise correct
  success-soft: '#e3f9f1'            # success bg
  warning: '#d68a17'                 # warning amber
  warning-soft: '#fef9e9'            # warning bg
  danger: '#d23a48'                  # error / wrong answer
  danger-soft: '#fdebed'             # error bg
  info: '#1865f2'                    # info blue
  info-soft: '#e6efff'               # info bg

typography:
  display:
    family: '"Lato", "Lato 2.0", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", Helvetica, Arial, sans-serif'
    weights: [400, 700, 900]
    opentype-features: ['kern', 'liga']
  body:
    family: '"Lato", "Lato 2.0", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", Helvetica, Arial, sans-serif'
    weights: [400, 700]
  mono:
    family: '"Source Code Pro", "SF Mono", "Roboto Mono", Menlo, Consolas, monospace'
    weights: [400]
  scale:
    display-hero:    { size: 56, weight: 900, lineHeight: 1.1,  tracking: '-0.02em', family: display, notes: 'Marketing landing — "For every student, every classroom, real results"' }
    display-xl:      { size: 44, weight: 700, lineHeight: 1.15, tracking: '-0.015em', family: display, notes: 'Section hero, mission page' }
    display-lg:      { size: 32, weight: 700, lineHeight: 1.2,  tracking: '-0.01em', family: display, notes: 'Course landing title — "Algebra 1"' }
    display-md:      { size: 24, weight: 700, lineHeight: 1.25, tracking: '-0.005em', family: display, notes: 'Section heading — "Unit 1: Algebra foundations"' }
    display-sm:      { size: 20, weight: 700, lineHeight: 1.3,  tracking: '0',       family: display, notes: 'Subsection heading' }
    title-lg:        { size: 18, weight: 700, lineHeight: 1.35, tracking: '0',       family: display, notes: 'Card title' }
    title-md:        { size: 16, weight: 700, lineHeight: 1.4,  tracking: '0',       family: display, notes: 'Skill title in tree' }
    title-sm:        { size: 14, weight: 700, lineHeight: 1.4,  tracking: '0',       family: display, notes: 'Sidebar nav, lesson list item' }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',       family: body, notes: 'Lead paragraph, lesson description' }
    body-md:         { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body, notes: 'Default body, exercise question text' }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body, notes: 'Secondary metadata, "12 of 24 skills mastered"' }
    button-lg:       { size: 16, weight: 700, lineHeight: 1.0,  tracking: '0',       family: display, notes: '"Start" / "Continue" CTA' }
    button-md:       { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0',       family: body, notes: 'Default button label' }
    eyebrow:         { size: 13, weight: 700, lineHeight: 1.0,  tracking: '0.08em',  family: body, notes: 'Uppercase eyebrow "GET STARTED"' }
    caption:         { size: 13, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body, notes: 'Disclosures, fine print' }
    metadata:        { size: 14, weight: 400, lineHeight: 1.3,  tracking: '0',       family: body, opentype: ['tnum'], notes: 'Skill count, points' }
    points:          { size: 16, weight: 700, lineHeight: 1.0,  tracking: '0',       family: display, opentype: ['tnum'], notes: '"2,340" energy points display' }
    code:            { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',       family: mono, notes: 'CS lectures, math LaTeX inline fallback' }

radius:
  micro: 2          # tiny indicator
  sm: 4             # input, small button, tag
  md: 6             # default card, badge
  lg: 8             # primary card, button — Khan's friendly default
  xl: 12            # large card, modal
  pill: 9999        # mastery dot, energy-point pill, primary button cap

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]

layout:
  page-width: 1440
  content-max: 1240
  prose-width: 720
  header-height: 64
  sidebar-width: 280       # learning tree sidebar
  card-min: 240
  card-max: 320
  hero-min-height: 480

components:
  button-primary:
    bg: '#14bf96'
    color: '#ffffff'
    radius: 9999
    padding: '12px 24px'
    height: 48
    font: button-lg
    weight: 700
    use: '"Start" / "Continue" / "Get Khan Academy" — primary CTA, pill-shaped Khan mint with white text.'
  button-primary-hover:
    bg: '#0e9a78'
    color: '#ffffff'
    radius: 9999
    use: 'Hover — darker mint shift, no shadow lift, no scale.'
  button-primary-active:
    bg: '#0a7d63'
    color: '#ffffff'
    use: 'Pressed state.'
  button-secondary:
    bg: '#ffffff'
    color: '#0a7d63'
    border: '2px solid #0a7d63'
    radius: 9999
    padding: '12px 24px'
    height: 48
    use: '"Learn more" outlined deeper-green secondary — uses brand-deep `#0a7d63` for AAA contrast.'
  button-tertiary-text:
    bg: 'transparent'
    color: '#0a7d63'
    radius: 4
    padding: '8px 12px'
    use: 'Inline text link / footer-style action.'
  button-icon:
    bg: 'transparent'
    color: '#5b5e6b'
    radius: 4
    height: 32
    width: 32
    use: 'Bookmark, share, more-options icon button.'
  button-donate:
    bg: '#1865f2'
    color: '#ffffff'
    radius: 9999
    padding: '12px 24px'
    height: 48
    use: '"Donate" CTA in nav — uses signal-blue rather than brand-mint to differentiate the nonprofit ask from the learning-action verbs.'
  card-course:
    bg: '#ffffff'
    color: '#21242c'
    radius: 8
    padding: 24
    border: '1px solid #d6d8de'
    shadow: '0 1px 3px rgba(33,36,44,0.06)'
    use: 'Default subject tile in catalog grid — illustration top, 18px / 700 title, 14px / 400 description, "X skills" metadata, primary mint CTA.'
  card-course-hover:
    bg: '#ffffff'
    color: '#21242c'
    radius: 8
    shadow: '0 4px 12px rgba(33,36,44,0.10)'
    use: 'Hover lift — shadow deepens, no scale, no translate.'
  card-skill:
    bg: '#ffffff'
    color: '#21242c'
    radius: 8
    padding: 16
    border: '1px solid #d6d8de'
    use: 'Skill row in learning tree — mastery dot left, skill title centre, "Practice" / "Mastered" tag right.'
  card-lesson:
    bg: '#f0fcf7'
    color: '#21242c'
    radius: 8
    padding: 16
    border: '1px solid #d6d8de'
    use: 'Lesson tile — soft mint-tinted bg with lesson type icon (video / exercise / article), title, runtime.'
  card-encouragement:
    bg: '#fef9e9'
    color: '#21242c'
    radius: 12
    padding: 24
    border: '1px solid #f4cf3e'
    use: '"Tip" / "Did you know?" warm-cream callout block — mascot illustration top-left, body copy right.'
  badge-mastered:
    bg: '#e3f9f1'
    color: '#0a7d63'
    radius: 9999
    padding: '4px 12px'
    use: '"Mastered" green pill — earned-state indicator on a skill row.'
  badge-proficient:
    bg: '#f3eaff'
    color: '#5e2bb1'
    radius: 9999
    padding: '4px 12px'
    use: '"Proficient" purple pill.'
  badge-familiar:
    bg: '#e6efff'
    color: '#0a44b8'
    radius: 9999
    padding: '4px 12px'
    use: '"Familiar" blue pill.'
  badge-attempted:
    bg: '#f1f2f5'
    color: '#5b5e6b'
    radius: 9999
    padding: '4px 12px'
    use: '"Attempted" grey pill.'
  mastery-dot:
    color-attempted: '#a8aab2'
    color-familiar: '#1865f2'
    color-proficient: '#9059ff'
    color-mastered: '#0a7d63'
    use: '4-stage skill mastery dot — circle with progress arc rendering current stage. Visible inline next to every skill in the learning tree.'
  pill-energy-points:
    bg: '#fef9e9'
    color: '#a06c0a'
    border: '1px solid #f4cf3e'
    radius: 9999
    padding: '4px 12px'
    use: '"⚡ 2,340" energy-point counter — yellow lightning icon + tnum number. Gamified currency.'
  pill-streak:
    bg: '#fef0e7'
    color: '#9d5511'
    border: '1px solid #e07c2c'
    radius: 9999
    padding: '4px 12px'
    use: '"🔥 7 day streak" — fire icon + day count. Daily-practice incentive.'
  input-search:
    bg: '#f7f8fa'
    color: '#21242c'
    radius: 8
    height: 48
    padding: '12px 16px 12px 44px'
    border: '1px solid #d6d8de'
    use: 'Top-bar search — magnifying-glass icon left, "Search Khan Academy" placeholder.'
  input-text:
    bg: '#ffffff'
    color: '#21242c'
    radius: 8
    border: '1px solid #d6d8de'
    height: 48
    padding: '12px 16px'
    use: 'Form input — sign-in, profile fields.'
  exercise-input:
    bg: '#ffffff'
    color: '#21242c'
    radius: 8
    border: '2px solid #d6d8de'
    height: 56
    padding: '14px 16px'
    use: 'Exercise answer input — taller and bolder-bordered than form inputs to draw attention.'
  filter-chip:
    bg: '#ffffff'
    color: '#21242c'
    border: '1px solid #d6d8de'
    radius: 9999
    padding: '6px 14px'
    use: 'Subject filter pill — pill-shaped, light hairline border.'
  filter-chip-active:
    bg: '#e3f9f1'
    color: '#0a7d63'
    border: '1px solid #14bf96'
    radius: 9999
    use: 'Applied-filter state — soft mint bg, deep-green text.'
  subject-tile:
    bg: '#ffffff'
    color: '#21242c'
    radius: 8
    padding: 24
    use: '"Math / Science / Computing / Arts & humanities / Economics / Reading & language arts / Life skills / Test prep" — tile with subject illustration top, 18px / 700 subject name below.'
  partner-logo-rail:
    bg: '#f7f8fa'
    color: '#5b5e6b'
    use: '"Used by hundreds of schools" — Bank of America, AT&T, Google.org, Carlos Slim Foundation logos in muted grey.'
  nav-top-bar:
    bg: '#ffffff'
    color: '#21242c'
    height: 64
    border-bottom: '1px solid #d6d8de'
    use: 'Sticky top nav — Khan Academy logo (mint owl + wordmark) left, "Courses" mega-menu, "Search", "Donate" right.'
  sidebar-tree:
    bg: '#ffffff'
    color: '#21242c'
    width: 280
    use: 'Learning tree sidebar on course page — collapsible unit groups (Unit 1: Algebra foundations / Unit 2: Solving equations / ...), each unit shows a percentage progress bar.'
  modal-dialog:
    bg: '#ffffff'
    color: '#21242c'
    radius: 12
    shadow: '0 16px 48px rgba(33,36,44,0.20)'
    padding: 32
    use: 'Sign-up / preview modal.'
  toast:
    bg: '#21242c'
    color: '#ffffff'
    radius: 8
    padding: '12px 16px'
    use: 'Confirmation toast — "Skill saved" — dark grey-on-white inversion.'
  toast-encouragement:
    bg: '#e3f9f1'
    color: '#0a7d63'
    radius: 8
    padding: '12px 16px'
    border-left: '4px solid #14bf96'
    use: '"Great job! 4 questions correct in a row." — encouragement toast, mint left-rail.'
  donate-banner:
    bg: '#fef9e9'
    color: '#21242c'
    border: '1px solid #f4cf3e'
    radius: 8
    padding: 16
    use: '"Donate today and your gift will be doubled." — warm cream nonprofit ask banner.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-out: 'cubic-bezier(0, 0, 0.2, 1)'
  ease-in-out: 'cubic-bezier(0.4, 0, 0.6, 1)'
  ease-bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  duration-fast: 150
  duration-standard: 250
  duration-slow: 400
  duration-celebration: 600
  reduced-motion: 'respects prefers-reduced-motion: hover shadow lifts collapse to instant, mastery-dot fill animation becomes opacity-only, streak-counter fire icon stops bouncing, modal scale-in becomes opacity-only, confetti-celebration on exercise-completion disables.'

breakpoints:
  mobile: 600
  tablet: 900
  desktop: 1200
  wide: 1440

shadows:
  none: 'none'
  card-rest: '0 1px 3px rgba(33,36,44,0.06)'
  card-hover: '0 4px 12px rgba(33,36,44,0.10)'
  popover: '0 4px 16px rgba(33,36,44,0.12)'
  modal: '0 16px 48px rgba(33,36,44,0.20)'
  ring: '0 0 0 3px rgba(20,191,150,0.4)'

accessibility:
  contrast-text-on-bg: 14.2              # #21242c on #ffffff — AAA
  contrast-text-muted-on-bg: 6.4         # #5b5e6b on #ffffff — AA at body
  contrast-text-on-brand: 2.6            # white on #14bf96 — fails AAA, used at 16px / 700 (large-text bracket)
  contrast-link-on-bg: 7.4               # #0a7d63 deeper green on white — AAA
  contrast-blue-link-on-bg: 6.6          # #1865f2 on white — AA at body
  focus-ring: '3px solid rgba(20,191,150,0.4) with 2px offset'
  reduced-motion-honored: true
  caption-track: 'every video lecture ships with closed captions in 50+ languages; transcripts side-by-side with player'
  language-support: '50+ languages with on-platform UI translation; flagship subjects (Math) translated into 20+ languages with native-speaker voice-over'
  screen-reader: 'mathematical equations rendered with MathJax + ARIA-described LaTeX for screen readers'

dark-mode: null            # Light-only — no dark variant offered (consistent with k-12 textbook tradition)
---

## 1. Visual Theme & Atmosphere

Khan Academy's site is the warmest learning surface on the internet. The canvas is paper-white `#ffffff` warming faintly to `#f7f8fa` in alt bands, the type is Lato — a humanist sans designed by Łukasz Dziedzic that has carried Khan's identity since 2012 — and the chromatic event of the page is `#14bf96`, a confident mint green that lives on the wordmark, the primary CTA, the mascot's plumage, and the skill-mastery dots in the learning tree. Where Coursera whispers in royal blue and Udemy shouts in electric purple and MasterClass commits to cinema-black reverence, Khan operates in a fourth register entirely: **mission-driven warmth**. The brand's argument is "we are a nonprofit, we are free, we believe in you, here is the next exercise."

The signature is the learning-tree navigation — Khan's most distinctive interaction pattern, descended from K-12 textbook chapter structure rather than from e-commerce or streaming. Every course (Algebra 1, AP Biology, World History) breaks into Units, each Unit breaks into Skills, and every Skill carries a 4-stage mastery dot indicator: Attempted (grey), Familiar (blue), Proficient (purple), Mastered (deep green). The dots fill via concentric arc progress as the learner answers exercise questions. A learner returning to Khan sees their entire course as a tree of mastery dots, with a unit progress percentage at the top of each unit ("12 of 24 skills mastered, 75% complete"), and the page invites the next-best-skill-to-practice via a green primary CTA. This is the workhorse interaction pattern, and it's what differentiates Khan from every other learning platform: progress is rendered as **mastery-of-skills**, not as **percentage-of-video-watched**.

The course-tile grid is the secondary workhorse component. Subject tiles render at `8px` radius (warmer than Udemy's `4px`, friendlier than Coursera's also-`8px`) with a subject illustration at the top (Khan's flat-illustration style — playful, slightly geometric, paired with rounded mascot characters), the subject name in 18px / 700 Lato below, a short description in 14px / 400 muted, and a primary mint CTA. The illustrations are not stock photography; they're custom SVGs that have been part of the brand since the early 2010s, carrying a hand-drawn warmth that signals "this is education, not a sales funnel." Tiles stack 4-across at desktop, 3-across at 900px, 2-across at 600px, 1-across mobile.

Lato — the sans-serif workhorse — sets the entire site. Display sizes go up to 56px at the heaviest 900 weight (Lato's Black) with `-0.02em` tracking; body is 16px / 400 / 1.5 line-height. Lato is a humanist sans with semi-rounded letterforms, a slightly humanist warmth in the bowls of o, e, a, and a slight stress in the diagonals of v, w, x — properties that make it feel friendly and book-readable. The font carries Khan's voice, which is the voice of an encouraging tutor who genuinely believes you can learn this if you stick with it: warm, clear, never patronizing, never condescending. There's no display-serif companion, no decorative italic, no condensed cut. One family pulls the entire load.

Density is the third axis. Khan's pages are content-dense but never cramped. Section padding sits at 64–96px; tile gaps at 24px; within-card padding at 16–24px; body line-height at 1.5. The hero takes 480px tall (shorter than MasterClass's 720px+, taller than Udemy's 360px) — generous but not lavish. Below the hero, the page packs subject tiles, a "for teachers" feature card, a "donate" call-to-action, and a partner-logo strip. Donate is woven into the page's argument — it's not aggressive, but it's permanent, signalled by a blue `#1865f2` "Donate" button in the nav (deliberately not green, so it differentiates from learning-action verbs).

The brand's gamification language deserves a paragraph of its own. Khan introduced energy points (yellow lightning-bolt currency awarded for completing exercises) and streak counters (orange fire-icon counters showing consecutive days of practice) early in its history — a Duolingo-adjacent pattern that's lighter than Duolingo's full-game treatment but still reaches for the same daily-habit reinforcement. The yellow `#f4cf3e` energy-point pill and orange `#e07c2c` streak-fire pill are the two small saturated accents in the system besides brand mint and link blue. They're rendered as warm, playful touches — not as urgent obligations.

**Key Characteristics:**
- Paper-white `#ffffff` canvas warming to `#f7f8fa` in alt bands. Warm cream `#fef9e9` for tip / encouragement callouts.
- Signature `#14bf96` mint green — primary CTA, wordmark, mastery-mastered dot, brand surfaces.
- Deeper `#0a7d63` green for inline text links and outlined buttons (AAA contrast on white).
- Lato humanist sans pulling display through body — one family, no companion.
- 4-stage mastery dot system (Attempted grey → Familiar blue → Proficient purple → Mastered deep-green) on every skill in the learning tree. The brand''s defining UX pattern.
- Energy points (yellow lightning, `#f4cf3e`) and streak counters (orange fire, `#e07c2c`) — light gamification, never aggressive.
- 8px-radius cards; pill-shaped (9999px) primary buttons. Friendly geometric pairing.
- Flat custom illustrations rather than stock photography — hand-drawn warmth signals education-not-sales.
- Donate `#1865f2` blue CTA in nav — deliberately not mint, to differentiate nonprofit ask from learning-action verbs.
- Khanmigo (mascot/AI tutor) appears on AI surfaces — owl-character illustrations carry the warmth.
- Body type at 16px / 400 / 1.5 line-height — friendly book-readable density.
- Light-only — no dark variant (consistent with K-12 textbook tradition).

## 2. Color Palette & Roles

### Primary
- **Paper White** (`#ffffff`): The defining canvas. Pure white, no warm tint.
- **Warm Off-White** (`#f7f8fa`): Hero band background, alt section banding.
- **Encouragement Cream** (`#fef9e9`): Warm cream for "Tip" / "Did you know?" / nonprofit ask callout bands. The brand's emotional-warmth surface.
- **Display Black** (`#21242c`): Primary body text. Warm near-black with a slight blue tilt — softer than pure `#000`.
- **Khan Mint** (`#14bf96`): The brand's primary green. Wordmark, primary CTA background, mastery-mastered dot, brand surfaces.

### Brand & Dark
- **Brand Hover** (`#0e9a78`): Pointer-over state — slightly darker mint.
- **Brand Active** (`#0a7d63`): Pressed state.
- **Brand Soft** (`#e3f9f1`): Soft-tint surface for badges, mint-tinted cards, success messaging.
- **Brand Deep** (`#0a7d63`): Deeper green used for inline text links, outlined-button borders, mastery-mastered dot. Provides AAA contrast on white where the brighter `#14bf96` only meets AA on large text.
- **Footer Black** (`#21242c`): Footer band, dark hero (rare).

### Accent
- **Donate Blue** (`#1865f2`): Donate-CTA blue. Deliberately not mint — differentiates nonprofit ask from learning-action verbs.
- **Energy Yellow** (`#f4cf3e`): Energy-points lightning-bolt icon and pill. The gamification accent.
- **Streak Orange** (`#e07c2c`): Streak-fire icon and pill. Daily-practice incentive.
- **Mascot Pink** (`#e879b7`): Khanmigo accent — used on AI tutor surfaces.
- **Profile Purple** (`#9059ff`): Avatar background tint, mastery-proficient dot.

### Interactive
- **CTA Mint** (`#14bf96`): Primary action button background.
- **Inline Link Deep Green** (`#0a7d63`): Inline links — deeper than CTA so contrast is AAA on white.
- **Inline Link Blue** (`#1865f2`): Alternative link colour on certain pages (donate-leaning, partner pages).
- **Outlined Deep Green** (`#0a7d63` border on white): Secondary action.
- **Filter Chip Active** (`#e3f9f1` bg + `#0a7d63` text + `#14bf96` border): Applied-filter state.
- **Disabled** (`#a8aab2` text on `#f7f8fa` bg): Non-interactive control.

### Neutral Scale
- **Display Black** (`#21242c`): Display headlines, primary body — slight blue-grey tilt, softer than pure black.
- **Strong Black** (`#0c0d0f`): Hero display only.
- **Muted** (`#5b5e6b`): Secondary metadata — "12 of 24 skills mastered", "Updated April 2024".
- **Soft** (`#797d8a`): Tertiary captions.
- **Disabled** (`#a8aab2`): Inactive form labels, disabled controls, mastery-attempted dot.
- **Border Default** (`#d6d8de`): Card hairlines, dividers.
- **Border Soft** (`#e7e9ed`): Subtle table-row dividers.
- **Border Strong** (`#a8aab2`): Focused field outline before brand-mint ring kicks in.

### Surface & Borders
- **Surface Default** (`#ffffff`): Card, modal floor.
- **Surface Hover** (`#f7f8fa`): Nav hover, list-row hover.
- **Surface Soft** (`#f0fcf7`): Mint-tinted secondary card bg (lesson tile).
- **Surface Strong** (`#e7e9ed`): Divider band.
- **Promo Surface** (`#e3f9f1`): Soft mint promo band.
- **Encouragement Surface** (`#fef9e9`): Warm cream callout surface.

### Shadow Colors
- **Card Rest** (`rgba(33,36,44,0.06)`): The rest-state card shadow at `0 1px 3px`. Whisper-soft.
- **Card Hover** (`rgba(33,36,44,0.10)`): Hover-state shadow at `0 4px 12px`. Lifts gently.
- **Popover Shadow** (`rgba(33,36,44,0.12)`): Dropdown, tooltip.
- **Modal Shadow** (`rgba(33,36,44,0.20)`): Dialog floor.
- All shadows are warm-grey-tinted (using the `#21242c` body colour as base) rather than neutral cool grey.

### Mastery Dots (4-Stage)
- **Attempted** (`#a8aab2`): Grey — no progress yet.
- **Familiar** (`#1865f2`): Blue — first level of comfort.
- **Proficient** (`#9059ff`): Purple — second level.
- **Mastered** (`#0a7d63`): Deep green — final state. Echoes brand-deep.

### Semantic
- **Success** (`#0a7d63` text on `#e3f9f1` soft bg): Exercise correct, skill mastered, "Great job!" toast.
- **Warning** (`#d68a17` text on `#fef9e9` soft bg): "Hint available" / "Try again" reminder.
- **Danger** (`#d23a48` text on `#fdebed` soft bg): Wrong answer, form validation error.
- **Info** (`#1865f2` text on `#e6efff` soft bg): "New AP exam dates announced."

## 3. Typography Rules

### Font Family
- **Primary**: `"Lato"` — Łukasz Dziedzic's humanist sans, designed 2010 (Lato 1) / refined 2014 (Lato 2.0). Open-source via the SIL Open Font License. Fallback chain: `"Lato 2.0", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", Helvetica, Arial, sans-serif`.
- **Mono**: `"Source Code Pro", "SF Mono", "Roboto Mono", Menlo, Consolas, monospace` — used in CS courses (Computing track) and inline code.
- **OpenType Features**: `kern` and `liga` enabled site-wide. `tnum` enabled on energy points, streak days, learner counts, exercise progress, and any tabular data display.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| Display Hero | Lato | 56px | 900 (Black) | 1.1 | -0.02em | kern,liga | Marketing landing — "For every student, every classroom" |
| Display XL | Lato | 44px | 700 | 1.15 | -0.015em | kern,liga | Section hero, mission page |
| Display LG | Lato | 32px | 700 | 1.2 | -0.01em | kern,liga | Course landing title — "Algebra 1" |
| Display MD | Lato | 24px | 700 | 1.25 | -0.005em | kern,liga | Section heading — "Unit 1: Algebra foundations" |
| Display SM | Lato | 20px | 700 | 1.3 | 0 | kern,liga | Subsection heading |
| Title LG | Lato | 18px | 700 | 1.35 | 0 | kern,liga | Card title |
| Title MD | Lato | 16px | 700 | 1.4 | 0 | kern,liga | Skill title in tree |
| Title SM | Lato | 14px | 700 | 1.4 | 0 | kern,liga | Sidebar nav, lesson list item |
| Body LG | Lato | 18px | 400 | 1.55 | 0 | kern,liga | Lead paragraph, lesson description |
| Body MD | Lato | 16px | 400 | 1.5 | 0 | kern,liga | Default body, exercise question text |
| Body SM | Lato | 14px | 400 | 1.5 | 0 | kern,liga | Secondary metadata |
| Button LG | Lato | 16px | 700 | 1.0 | 0 | kern,liga | "Start" / "Continue" CTA label |
| Button MD | Lato | 14px | 700 | 1.0 | 0 | kern,liga | Default button label |
| Eyebrow | Lato | 13px | 700 | 1.0 | 0.08em | kern,liga | Uppercase "GET STARTED" |
| Caption | Lato | 13px | 400 | 1.4 | 0 | kern,liga | Disclosures, fine print |
| Metadata | Lato | 14px | 400 | 1.3 | 0 | tnum | Skill count, points display |
| Points | Lato | 16px | 700 | 1.0 | 0 | tnum | "2,340" energy points display |
| Code | Source Code Pro | 14px | 400 | 1.5 | 0 | -- | CS lectures, math LaTeX inline fallback |

### Principles
- **Single family discipline.** Lato covers display through body. There is no display-serif companion — Khan's voice is friendly tutor, not editorial publication.
- **Three weights: 400, 700, 900.** Body at 400, titles at 700, hero display at 900 (Lato Black). The hero's 900 weight is Khan's signature — it's the heaviest weight any of the major learning brands deploys, and it gives the hero headline a confident "you can do this" gravity.
- **Modest negative tracking.** Display sizes use `-0.005em` to `-0.02em`. Khan never goes tighter than `-0.02em` even on 56px hero — the brand is open and friendly, never condensed.
- **0.08em tracking on eyebrows.** Uppercase eyebrows ("GET STARTED", "EARN BADGES") use 13px / 700 / `0.08em` — moderate tracking that distinguishes them from button labels without going full magazine register.
- **16px body, 1.5 line-height.** Exercise questions, lesson transcripts, articles all sit at this baseline — book-readable density.
- **Tabular numerals on energy points / streaks / progress.** Energy points ("2,340"), streaks ("7 day streak"), exercise progress ("12 of 24"), unit completion percentages ("75%") all use `tnum`.
- **Sentence case for everything except eyebrows.** "Start a new course", "Continue learning" — capital first word only. Uppercase reserved for tiny eyebrow labels.
- **Lato 2.0 over Lato 1.** Khan uses Lato 2.0 (the 2014 refinement) which has improved Cyrillic, expanded weights, and refined italic angles. The fallback chain prefers `"Lato 2.0"` first.

## 4. Component Stylings

### Buttons

**Primary (Khan Mint Pill)**
- Background: `#14bf96`. Text: `#ffffff`. Radius: `9999px` (capsule). Padding: `12px 24px`. Height: `48px`. Font: Lato 16px / 700.
- Hover: `#0e9a78`. No shadow lift, no scale.
- Active: `#0a7d63`.
- Use: "Start", "Continue", "Get Khan Academy", "Practice this skill". One per viewport. Pill shape signals friendliness.

**Secondary (Outlined Deep Green)**
- Background: `#ffffff`. Text: `#0a7d63`. Border: `2px solid #0a7d63`. Radius: `9999px`. Padding: `12px 24px`.
- Hover: bg `#e3f9f1`.
- Use: "Learn more", "Sign in". Note: uses deeper `#0a7d63` rather than brand `#14bf96` for AAA contrast.

**Tertiary Text**
- Background: `transparent`. Color: `#0a7d63`. Padding: `8px 12px`.
- Hover: underline appears.
- Use: Inline action, footer link.

**Donate (Blue Pill)**
- Background: `#1865f2`. Text: `#ffffff`. Radius: `9999px`. Padding: `12px 24px`. Height: `48px`.
- Hover: `#0d4ec7`.
- Use: "Donate" CTA in nav. Deliberately blue, not mint — differentiates the nonprofit ask from learning-action verbs.

**Icon Button**
- Background: `transparent`. Color: `#5b5e6b`. Radius: `4px`. Size: `32 × 32`.
- Hover: bg `#f7f8fa`, color `#21242c`.
- Use: Bookmark, share, more-options.

### Cards & Tiles

**Subject Tile**
- Background: `#ffffff`. Color: `#21242c`. Radius: `8px`. Padding: `24px`. Border: `1px solid #d6d8de`.
- Layout: Custom flat illustration top (96px tall), 16px gap, 18px / 700 subject name, 4px gap, 14px / 400 muted description (max 2 lines), 16px gap, "X courses" metadata or pill button.
- Rest shadow: `0 1px 3px rgba(33,36,44,0.06)`.
- Use: "Math / Science / Computing" homepage tile.

**Skill Card (Learning Tree Row)**
- Background: `#ffffff`. Color: `#21242c`. Radius: `8px`. Padding: `16px`. Border: `1px solid #d6d8de`.
- Layout: 4-stage mastery dot left (24px), 16px gap, skill title (16px / 700) centre, "Practice" / "Mastered" pill right.
- Hover: bg `#f7f8fa`.
- Use: Each skill row inside a unit's learning tree.

**Lesson Tile**
- Background: `#f0fcf7` (mint-tinted). Color: `#21242c`. Radius: `8px`. Padding: `16px`. Border: `1px solid #d6d8de`.
- Layout: lesson type icon left (video / exercise / article), title centre, runtime/question count right.
- Use: Lesson list inside a unit.

**Encouragement Callout**
- Background: `#fef9e9` (warm cream). Color: `#21242c`. Radius: `12px`. Padding: `24px`. Border: `1px solid #f4cf3e`.
- Layout: Mascot illustration top-left (40px tall), copy block right — 16px / 700 title "Tip!", 14px / 400 body.
- Use: "Tip!" / "Did you know?" / "Quick reminder" inline callout.

**Donate Banner**
- Background: `#fef9e9`. Color: `#21242c`. Border: `1px solid #f4cf3e`. Radius: `8px`. Padding: `16px`.
- Layout: Hands-illustration left, copy centre — "Donate today and your gift will be doubled.", blue "Donate" CTA right.
- Use: Top-of-page nonprofit ask, dismissible.

### Badges, Tags, Indicators

**Mastered (Green Pill)**
- Background: `#e3f9f1`. Color: `#0a7d63`. Radius: `9999px`. Padding: `4px 12px`. Font: 12px / 700.
- Use: "Mastered" earned-state pill on a skill row.

**Proficient (Purple Pill)**
- Background: `#f3eaff`. Color: `#5e2bb1`.
- Use: "Proficient" tier pill.

**Familiar (Blue Pill)**
- Background: `#e6efff`. Color: `#0a44b8`.
- Use: "Familiar" tier pill.

**Attempted (Grey Pill)**
- Background: `#f1f2f5`. Color: `#5b5e6b`.
- Use: "Attempted" baseline tier.

**Mastery Dot (4-Stage)**
- 24px circle with progress arc rendering current stage.
- Attempted: full grey `#a8aab2`.
- Familiar: 1/4 filled blue `#1865f2`.
- Proficient: 3/4 filled purple `#9059ff`.
- Mastered: full deep-green `#0a7d63`.
- The dots fill via animated arc as the learner answers exercise questions correctly. Progress is non-linear — Khan's algorithm awards bigger jumps for harder questions answered without hints.
- Use: Inline next to every skill in the learning tree.

**Energy Points Pill**
- Background: `#fef9e9`. Color: `#a06c0a`. Border: `1px solid #f4cf3e`. Radius: `9999px`. Padding: `4px 12px`.
- Format: "⚡ 2,340" — yellow lightning emoji + tnum number.
- Use: Top-bar gamification counter.

**Streak Pill**
- Background: `#fef0e7`. Color: `#9d5511`. Border: `1px solid #e07c2c`. Radius: `9999px`. Padding: `4px 12px`.
- Format: "🔥 7 day streak" — fire emoji + day count.
- Use: Daily-practice incentive in nav or profile.

### Inputs & Forms

**Search**
- Background: `#f7f8fa`. Color: `#21242c`. Border: `1px solid #d6d8de`. Radius: `8px`. Height: `48px`. Padding: `12px 16px 12px 44px`.
- Magnifying-glass icon left in `#5b5e6b`.
- Placeholder: "Search Khan Academy".
- Focus: border `#14bf96`, ring `0 0 0 3px rgba(20,191,150,0.4)`.

**Text Input**
- Background: `#ffffff`. Color: `#21242c`. Border: `1px solid #d6d8de`. Radius: `8px`. Height: `48px`. Padding: `12px 16px`.
- Label sits above, 14px / 700 `#21242c`. Hint below, 13px / 400 `#5b5e6b`.
- Focus: border `#14bf96`, ring `0 0 0 3px rgba(20,191,150,0.4)`.

**Exercise Answer Input**
- Background: `#ffffff`. Color: `#21242c`. Border: `2px solid #d6d8de`. Radius: `8px`. Height: `56px`. Padding: `14px 16px`.
- Taller and bolder-bordered than form inputs to draw attention during exercises.
- On correct: border `#14bf96`, then a 600ms confetti-celebration animation.
- On incorrect: border `#d23a48`, "Try again" hint appears below in red.
- Use: Math problem answer input, multiple-choice answer selection.

**Filter Chip**
- Default: bg `#ffffff`, color `#21242c`, border `1px solid #d6d8de`, radius `9999px`, padding `6px 14px`.
- Active: bg `#e3f9f1`, color `#0a7d63`, border `#14bf96`. Soft mint state.
- Use: Subject filter pill on browse page.

### Navigation

**Top Bar (Sticky)**
- Background: `#ffffff`. Border-bottom: `1px solid #d6d8de`. Height: `64px`.
- Layout: Khan Academy logo (mint owl + wordmark) left, "Courses" mega-menu link, "Search" input centre-left, "Sign in" + "Donate" blue pill right.
- Logged-in: replace Sign in with profile avatar + energy points pill + streak pill.
- Mobile: collapses to hamburger + search-icon + Donate.

**Learning Tree Sidebar**
- Background: `#ffffff`. Width: `280px`. Padding: `24px 16px`.
- Collapsible Unit groups (Unit 1: Algebra foundations / Unit 2: Solving equations / ...).
- Each unit shows: 16px / 700 unit name, 14px / 400 muted "12 of 24 skills mastered", thin progress bar (mint fill).
- Sticky on scroll.

**Mega Menu (Courses Dropdown)**
- Background: `#ffffff`. Shadow: `0 4px 16px rgba(33,36,44,0.12)`.
- Layout: Multi-column flyout grouped by educational level (Early childhood / Elementary / Middle / High school / College / Test prep), then by subject within.
- Use: Hover or click to expand from top nav.

### Modals & Toasts

**Modal Dialog**
- Background: `#ffffff`. Radius: `12px`. Padding: `32px`.
- Shadow: `0 16px 48px rgba(33,36,44,0.20)`.
- Backdrop: `rgba(33,36,44,0.5)`.
- Use: Sign-up, course preview, sign-in.

**Toast (Default)**
- Background: `#21242c`. Color: `#ffffff`. Radius: `8px`. Padding: `12px 16px`.
- Use: "Skill saved" — bottom-left, auto-dismiss 3s.

**Toast (Encouragement)**
- Background: `#e3f9f1`. Color: `#0a7d63`. Radius: `8px`. Padding: `12px 16px`. Border-left: `4px solid #14bf96`.
- Use: "Great job! 4 questions correct in a row." — encouragement state on exercise streak.

## 5. Layout Principles

### Spacing System
- Base: 4px. Scale: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128.
- Card-to-card gap: 24px on desktop, 16px on tablet, 12px on mobile.
- Section gap (major modules): 64–96px.
- Grid gutter: 24px.
- Within-card padding: 16–24px.

### Grid & Container
- Page width: 1440px max.
- Content max within page: 1240px centred.
- Course page: 280px learning-tree sidebar + 920px content (unit list, lesson cards).
- Hero: full-bleed background, content centred at 1240px.

### Whitespace Philosophy
Khan is a content-density product disguised as a textbook. Sections breathe at 64–96px gaps, cards at 24px, but within a card the layout is tight. The hero gets 96px top/bottom padding — generous breathing room because the brand promise lives there. Below the fold, density picks up: subject tiles in a 4-across grid, learning-tree skill rows tightly stacked. The brand never lets the page feel transactional, but it does maximize learning density per viewport.

### Section Cadence
- Top bar (sticky)
- Hero (Lato 56px / 900 headline, 18px lead, primary mint CTA + outlined deeper-green secondary)
- "Choose a subject" tile grid (8 subject tiles)
- "Recommended for you" rail (logged-in) or "Most popular courses" (logged-out)
- "For teachers" feature card band (mint-tinted)
- "Help us empower learners" donate banner (warm cream)
- Partner-logo "Trusted by" rail (Bank of America, AT&T, Google.org, Carlos Slim Foundation)
- Footer (4-column dark `#21242c` band — links, language picker, app downloads, mission statement)

Light/dark alternation: predominantly light. Footer is the only dark band.

## 6. Shapes & Radius Scale

- **Micro** (`2px`): Tiny indicator dot.
- **Standard** (`4px`): Input, dropdown, small badge.
- **Comfortable** (`6px`): Tag chip, default card alternative.
- **Relaxed** (`8px`): Subject tile, skill card, modal corners — the workhorse radius. Khan's friendly default.
- **Featured** (`12px`): Encouragement callout, large modal.
- **Pill** (`9999px`): Primary button, mastery-state pill, energy-points pill, filter chip — the brand's defining capsule shape.

The 8px card + 9999px pill button pairing is the geometric signature. Pills make CTAs feel friendly and clickable; 8px cards make content feel like institutional textbook. The combination lands warmer than Coursera (also 8px / 24px-pill but cooler in palette) and sharper than Material Design.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 (flat) | No shadow, no border | Section background, hero band |
| 1 (border) | `1px solid #d6d8de` | Card rest, input field, divider |
| 2 (subtle lift) | `0 1px 3px rgba(33,36,44,0.06)` | Default subject tile rest |
| 3 (hover lift) | `0 4px 12px rgba(33,36,44,0.10)` | Subject tile hover |
| 4 (popover) | `0 4px 16px rgba(33,36,44,0.12)` | Mega menu, dropdown, tooltip |
| 5 (modal) | `0 16px 48px rgba(33,36,44,0.20)` | Dialog, sign-up modal |

### Shadow Philosophy
Shadows are warm-grey-tinted (using the `#21242c` body colour as base) and whisper-soft. The rest-state card shadow at 0.06 opacity is barely perceptible; the hover shadow at 0.10 grows just enough to feel intentional. Modals get the only shadow above 0.15 opacity. The brand never uses brand-tinted shadows — green belongs to action and mastery, not to elevation. The aesthetic is closer to Material Design's elevation ladder than to Apple's sharp-shadow tradition, but tuned softer.

## 8. Interaction & Motion

### Easing Curves
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — Material standard ease, used for fades, opacity, simple slides.
- **Out**: `cubic-bezier(0, 0, 0.2, 1)` — incoming elements (modal in, dropdown open).
- **In-Out**: `cubic-bezier(0.4, 0, 0.6, 1)` — accordion expand/collapse.
- **Bounce**: `cubic-bezier(0.34, 1.56, 0.64, 1)` — celebration animations (correct answer confetti, skill mastered).

### Duration Buckets
- **Fast**: 150ms — colour shifts, hover transitions, button-press feedback.
- **Standard**: 250ms — card hover shadow lift, modal open, dropdown.
- **Slow**: 400ms — accordion expand, mastery dot fill animation.
- **Celebration**: 600ms — confetti burst on exercise correct, mastery-mastered transition.

### Per-Component Recipes
- **Subject tile hover**: Shadow `0 1px 3px → 0 4px 12px` over 250ms ease-standard. No scale, no translate.
- **Primary CTA hover**: Background `#14bf96 → #0e9a78` over 150ms ease-standard. No shadow change.
- **Mastery dot fill**: When learner advances stage, dot's progress arc animates from previous stage to new stage over 400ms ease-out, with a brief 200ms colour-pulse celebration.
- **Exercise correct**: Input border glows green, confetti burst (yellow + green particles) emits from input centre over 600ms ease-bounce, "Great job!" toast slides in.
- **Streak fire icon**: When streak count increments (daily login), fire icon does a 200ms bounce-scale `1 → 1.2 → 1`.
- **Modal open**: 250ms ease-out, opacity `0 → 1` + scale `0.96 → 1`.
- **Accordion expand**: Unit group expand on click — height auto-grow over 400ms ease-in-out, content fades in over last 200ms.
- **Toast in**: slide up from bottom 6px + opacity over 250ms; auto-dismiss after 3s with reverse motion.
- **Khanmigo mascot blink**: Owl mascot illustration occasionally blinks (every 4–6s) as a 100ms ease-in-out micro-animation.

### Page Transitions
Khan uses light client-side routing. Page changes within a course (lesson → exercise → next lesson) trigger a 200ms opacity fade. There's no full-page slide. The learning-tree sidebar persists across page changes within a course.

### Reduced Motion
`prefers-reduced-motion: reduce` collapses:
- Card hover shadow lifts → instant snap.
- Mastery dot fill animation → opacity-only colour swap.
- Confetti-celebration on exercise correct → disabled (just toast appears).
- Streak fire bounce → no animation.
- Khanmigo blink → static.
- Modal scale-in → opacity-only.
- Accordion expand → instant.

## 9. Accessibility & A11y

### Contrast Pairs
- Display Black `#21242c` on white `#ffffff`: **14.2:1** — AAA at all sizes.
- Muted `#5b5e6b` on white `#ffffff`: **6.4:1** — AA at body sizes.
- White `#ffffff` on Khan Mint `#14bf96`: **2.6:1** — fails AAA, used at 16px / 700 (large-text bracket boundary). For most body uses, the inline link uses deeper `#0a7d63`.
- Inline link Deep Green `#0a7d63` on white: **7.4:1** — AAA at all sizes.
- Donate Blue `#1865f2` on white: **6.6:1** — AA at body.
- Mastery-mastered Deep Green `#0a7d63` on white: **7.4:1** — AAA.
- Energy Yellow `#f4cf3e` on white: **2.0:1** — fails for text; used decoratively only (icon).
- Disabled `#a8aab2` on white: **2.7:1** — fails AA, used for disabled-only states with `aria-disabled`.

### Focus Indicators
- Default focus: `3px solid rgba(20,191,150,0.4)` outline with `2px` offset on light surfaces.
- Form fields: border lifts to `#14bf96` on focus, plus the 3px ring outside.
- Tab order: top nav → search → main content top-to-bottom → learning-tree sidebar → unit / skill content → footer.

### ARIA Patterns
- Subject tiles: `role="article" aria-label="[Subject], [N] courses available"`.
- Mastery dots: `role="img" aria-label="[Skill name] — [Stage]: 75% complete"`. Each dot has descriptive label.
- Learning tree: `role="navigation" aria-label="Course units and skills"`. Each unit accordion: `aria-expanded`, `aria-controls`.
- Exercise input: `aria-describedby` linked to question hint and feedback message. Wrong-answer message has `role="alert"` for immediate screen-reader announcement.
- Math equations: rendered with MathJax + `aria-label` containing LaTeX-described semantic content for screen readers.
- Modal: `role="dialog" aria-modal="true"` with focus trap.
- Energy-points / streak counters: `aria-live="polite"` on increment.

### Keyboard Navigation
- Tab: move forward through controls; Shift+Tab reverses.
- Enter / Space: activate focused button or tile, submit answer in exercise.
- Arrow keys: navigate within learning tree (roving tabindex), move between multiple-choice options.
- ESC: close modal, mega menu, sidebar overlay.
- Tab on exercise input → submit button + skip button accessible without mouse.

### Screen Reader Hints
- Mastery dots use detailed aria-labels (skill name + stage + progress percent).
- Khan's video player has full ARIA captions, transcript link, and keyboard controls. Captions in 50+ languages.
- Math content described via LaTeX-to-speech bridge (e.g. "x squared plus 2x equals zero" rather than reading raw LaTeX).
- Khanmigo AI tutor surfaces use `role="region" aria-label="AI tutor conversation"` with `aria-live="polite"` for each response.

### Reduced Motion
Honoured. See §8.

## 10. Responsive Behavior

### Breakpoints
| Token | Min | Use |
|-------|-----|-----|
| mobile | 0px | 1 tile per row, sidebar collapses to filter modal |
| tablet | 600px | 2 tiles per row, sidebar shows as collapsible drawer |
| tablet-lg | 900px | 3 tiles per row, sidebar visible at 240px |
| desktop | 1200px | 4 tiles per row, full 280px sidebar |
| wide | 1440px | content max 1240px centred |

### Touch Targets
- 48×48 minimum on all interactive controls. Tile tap targets fill the entire card body.
- Mastery dots are 24×24 visually but have 44×44 tap targets via padding.
- Exercise inputs at 56×wide for easy keyboard typing on mobile.

### Collapsing Strategy
- **Top nav**: collapses to hamburger + search-icon + Donate on `< 900px`.
- **Energy points / streak pills**: collapse to a single icon-with-number on mobile.
- **Learning tree sidebar**: collapses to "Course outline" button on mobile that opens a full-screen drawer.
- **Subject grid**: 4 → 3 → 2 → 1 across the breakpoint cascade.
- **Hero**: title scales 56 → 44 → 32 → 24; illustration collapses below text on `< 600px`.

### Image Behavior
- Subject illustrations: SVG with `currentColor` for tint adjustability.
- Mascot illustrations: SVG, scale crisp at any size.
- Video player: 16:9 with adaptive bitrate streaming. Captions support 50+ languages.

### Container Queries
Used on the learning tree sidebar — unit progress bar collapses to icon-only on narrow widths; on the encouragement-callout block — mascot illustration drops at narrow widths.

## 11. Content & Voice

### Tone
Khan Academy's voice is **encouraging, plain-spoken, and mission-driven**. Course descriptions read like a friendly tutor's lesson plan — clear, structured, free of jargon. Marketing copy tilts mission-first ("For every student, every classroom, real results", "We're a nonprofit that relies on support from people like you") rather than aspirational. The brand never assumes the reader has math anxiety; never assumes the reader is gifted either. Every page treats you as a curious learner who can do this if they stick with it. The voice is closer to a beloved high-school teacher than to a corporate trainer.

### Microcopy Patterns
- **Primary CTA**: "Start", "Continue", "Practice", "Get Khan Academy".
- **Secondary CTA**: "Learn more", "Sign in", "Browse courses".
- **Confirmation toast**: "Skill saved", "Welcome back, [Name]", "Great job! 4 questions correct in a row."
- **Empty enrolled**: "Choose a subject to start. We'll save your progress as you go."
- **Empty progress**: "Your courses will appear here once you start. Pick a subject to begin."
- **Wrong answer**: "Not quite. Try again — you can do this." (Never "Wrong" or "Incorrect".)
- **Hint pattern**: "Stuck? Get a hint." → reveals scaffolded hint inline.
- **Encouragement**: "Great job!", "Keep going!", "You're on a streak!", "Almost there!"
- **Mission ask**: "Donate today and your gift will be doubled. Help us provide a free, world-class education for anyone, anywhere."
- **Time-aware welcome**: "Welcome back, [Name]" + "Continue learning [Course]" CTA.

### Empty States
- Empty enrolled: subject grid + "Choose a subject to start" — never blocks the user.
- Empty progress: "Your progress will appear here" + featured course rail.
- Empty search: "We couldn't find any results for [query]. Try one of these:" + curated subject suggestions.
- Wrong answer: "Not quite. [Hint snippet]. Try again — you can do this."
- Offline (mobile): "You're offline. Downloaded videos are available below." (Web does not work offline.)

### CTA Verb Conventions
- "Start" — primary verb for beginning a course or skill. Always sentence case.
- "Continue" — returning-user CTA on in-progress course.
- "Practice" — for exercise sets within a skill.
- "Get Khan Academy" — homepage primary CTA, replaces "Sign up".
- "Donate" — nonprofit ask. Always blue, never green.
- "Save" — bookmark toggle.
- "Try again" — wrong-answer retry. Never "Retry" or "Submit".
- "Get a hint" — exercise scaffolding action.

The brand explicitly avoids: "Buy", "Subscribe", "Add to cart", "Enroll" (Khan is free; these verbs imply payment), "Free trial" (everything is already free), "Sign up" (replaced with "Get Khan Academy").

## 12. Dark Mode & Theming

Khan Academy is **light-only on the consumer surface**. There is no dark-mode variant in the web app, mobile app, or marketing site. The brand's visual lineage is the K-12 textbook tradition — paper-white pages, dark ink, generous margins — and a dark mode would break that metaphor. Long-form reading (lesson articles, video transcripts) and exercise practice are also better-served by light backgrounds for sustained learning sessions in well-lit classroom or home environments where Khan's primary audience sits.

The video player has a "theatre mode" (the player chrome darkens around the video) but the surrounding page stays light. This is the only "dark" treatment in the system.

If theming were added, the canvas would lift to `#0f1418` with `#e8eaed` body text. Khan Mint `#14bf96` would brighten slightly to `#3bd9b3` for AAA contrast on dark. Cards would shift to `#1a1f24` with `#2c3138` borders. The encouragement-cream surface would shift to `#2a2418` warm-deep-cream. But there's no public roadmap signal for it.

## 13. Lineage & Influences

Khan Academy's visual lineage is three-streamed.

**The K-12 textbook tradition.** Khan was founded in 2008 by Salman Khan as a YouTube tutorial series that became a structured curriculum. Its visual language was always closer to a textbook companion website than to a startup product — paper-white pages, generous body line-height, illustrated diagrams over photography, friendly mascot characters, a learning-tree navigation pattern lifted from chapter-and-section structure. The mastery-dot system descends from competency-based education research (Bloom's Mastery Learning, 1968) and was visualized as 4-stage circles to communicate progress without grades. The brand's argument has always been "learning is a tree of skills, not a series of grades" — and the visual system reinforces this by making mastery the unit of progress.

**The nonprofit-warm web tradition.** Khan is a 501(c)(3) nonprofit, and the visual register is calibrated to mission-driven warmth. The mint-green brand colour, the mascot illustrations, the encouragement-cream callout surfaces, the "Donate" blue CTA in the nav — all come from a lineage of nonprofit web design (Wikipedia, Mozilla, Khan, ProPublica, GiveDirectly) that signals "we are mission-driven, your trust matters more than your transaction." The discipline is restraint: no discount stickers, no aspirational marketing, no celebrity instructors. The argument is "we are free and we believe in you" delivered in the voice of a tutor.

**The Lato-and-flat-illustration design tradition.** Lato (Łukasz Dziedzic, 2010) became one of the most-used open-source typefaces of the 2010s — adopted by Wikipedia, Mozilla, GitLab, MailChimp, and many nonprofits. Its humanist warmth and SIL Open Font licence aligned with Khan's nonprofit ethos. The flat-illustration style (custom SVGs of subjects, mascot characters, hands-around-globe diversity imagery) descends from the early-2010s flat-design movement (post-Skeuomorphic but pre-Material) — specifically from Mailchimp's Freddie mascot, Slack's onboarding illustrations, and Duolingo's Duo owl. Khan's owl mascot Khanmigo (2023) is a direct descendant of this tradition.

What Khan rejects: dark mode, decorative serif companion, multi-color brand palette, aggressive negative tracking, full-screen marketing video, modal pop-overs, discount stickers, e-commerce verbs ("Buy", "Subscribe"), aspirational celebrity-instructor marketing.

**Influences:**
- **Wikipedia** — paper-white nonprofit canvas, donate-blue CTA, mission-first voice. https://wikipedia.org
- **Bloom's Mastery Learning (1968)** — competency-based education theory underpinning the 4-stage mastery dots. https://en.wikipedia.org/wiki/Mastery_learning
- **Lato (Łukasz Dziedzic)** — humanist sans that anchors the friendly tutor voice. https://fonts.google.com/specimen/Lato
- **Duolingo** — gamified learning (energy points, streaks) and mascot-driven warmth; Khan's lighter-touch take. https://duolingo.com
- **Mailchimp Freddie** — friendly mascot tradition Khan adopts in Khanmigo. https://mailchimp.com
- **ProPublica / Mozilla** — nonprofit web aesthetic, mission-driven typography. https://propublica.org

## 14. Do's and Don'ts

**Do:**
- Use `#14bf96` for primary CTA backgrounds, the wordmark, and mastery-mastered indicators — and `#0a7d63` deeper green for inline text links and outlined buttons (better contrast).
- Pair primary CTA with white text — at 16px / 700 the contrast is AA at body, AAA at large-text bracket.
- Round buttons to `9999px` (pill) and cards to `8px` — the geometric pairing signals friendly-but-institutional.
- Apply a subtle `0 1px 3px rgba(33,36,44,0.06)` shadow on rest cards; deepen to `0 4px 12px rgba(33,36,44,0.10)` on hover.
- Use the 4-stage mastery dot system (Attempted grey → Familiar blue → Proficient purple → Mastered deep-green) on every skill in the learning tree.
- Render Lato 900 (Black) for the hero headline at 56px — Khan's signature typographic weight.
- Use yellow `#f4cf3e` for energy-points pills and orange `#e07c2c` for streak-fire pills — the only saturated accents besides brand mint and link blue.
- Default to sentence case ("Start", "Continue") with uppercase reserved for tiny eyebrow labels (13px / 700 / `0.08em`).
- Use blue `#1865f2` for the Donate CTA in nav — deliberately not mint to differentiate the nonprofit ask from learning-action verbs.
- Use custom flat illustrations rather than stock photography for subject tiles, hero, and encouragement callouts.
- Use warm cream `#fef9e9` for "Tip!" / "Did you know?" / encouragement callouts — distinct from mint promo bands.
- Provide closed captions on every video lecture in 50+ languages; transcripts side-by-side.
- Use mathematical equations rendered with MathJax + ARIA-described LaTeX for screen readers.

**Don't:**
- Don't use `#14bf96` for inline body links — its 2.6:1 contrast on white fails. Use `#0a7d63` deeper green instead.
- Don't add discount stickers, "X% off" tags, or pricing copy — Khan is free; these patterns would break the brand's mission.
- Don't use celebrity-instructor portrait heroes — Khan is community-and-tutor warmth, not auteur-celebrity.
- Don't use scale transforms on hover — Khan's elevation grows via shadow, not translation.
- Don't introduce a serif companion font — single-family Lato carries everything.
- Don't pair brand mint with multiple saturated secondary colours — yellow energy points and orange streaks are the only saturated accents.
- Don't tighten display tracking past `-0.02em` — the brand is open and friendly, not condensed.
- Don't apply heavy shadows on cards (`> 0.15` opacity) — the elevation is whisper-soft.
- Don't introduce a dark theme — Khan is light-only by textbook tradition.
- Don't use "Buy" / "Subscribe" / "Free trial" verbs — they imply payment which contradicts the brand's free-for-everyone commitment.
- Don't make the Donate CTA mint — it must be blue to differentiate from learning verbs.
- Don't gamify aggressively — energy points and streaks are light touches; Duolingo's full-game treatment would feel coercive on a learning-mastery brand.
- Don't render mastery as a single percentage — the 4-stage mastery dot system is the brand's pedagogical commitment.

## 15. Agent Prompt Guide

### Quick Color Reference
- Canvas: `#ffffff`
- Warm Off-White: `#f7f8fa`
- Encouragement Cream: `#fef9e9`
- Khan Mint (CTA): `#14bf96`
- Inline Link Deep Green: `#0a7d63`
- Display Black: `#21242c`
- Muted: `#5b5e6b`
- Border: `#d6d8de`
- Donate Blue: `#1865f2`
- Energy Yellow: `#f4cf3e`
- Streak Orange: `#e07c2c`

### Example Component Prompts
1. "Create a Khan Academy subject tile — `#ffffff` background, `8px` radius, `1px solid #d6d8de` border, `0 1px 3px rgba(33,36,44,0.06)` rest shadow; flat custom illustration top (96px tall, mint and yellow accent colours), 16px gap, 18px / 700 Lato `#21242c` subject title 'Math', 4px gap, 14px / 400 `#5b5e6b` description '20 courses · From basic arithmetic to advanced calculus', 16px gap, primary mint pill 'Start' CTA. On hover deepen shadow to `0 4px 12px rgba(33,36,44,0.10)`."
2. "Design a Khan Academy primary CTA — `9999px` pill radius, `#14bf96` background, white 16px / 700 'Start' label, `12px 24px` padding, `48px` height, hover bg `#0e9a78`, no shadow lift."
3. "Build a Khan Academy hero — `#ffffff` background, 56px Lato 900-weight headline 'For every student, every classroom, real results' in `#21242c` with `-0.02em` tracking, 18px / 400 `#5b5e6b` lead 'We are a nonprofit that relies on support from people like you', primary mint pill 'Get Khan Academy' + outlined deeper-green secondary 'Learn more' inline; flat illustration of diverse learners around a globe right side."
4. "Render a Khan Academy 4-stage mastery dot inline — 24px circle, current stage 'Proficient' shown as 3/4-filled purple `#9059ff` arc on grey track, with `aria-label='Solving linear equations — Proficient: 75% complete'`."
5. "Create a Khan Academy course page — 280px left learning-tree sidebar with collapsible Unit groups (each unit shows 14px / 400 muted '12 of 24 skills mastered' + 4px-tall mint progress bar at 75%); 920px content right with section heading 'Unit 1: Algebra foundations' in 24px / 700, then 8 skill cards stacked vertically — each skill card has `8px` radius, `1px solid #d6d8de` border, `16px` padding, mastery dot left, 16px / 700 skill title centre, 'Practice' or 'Mastered' pill right."
6. "Build a Khan Academy exercise page — exercise question stated in 18px / 400 `#21242c` body type with embedded LaTeX math (rendered with MathJax), `56px`-tall answer input with `2px solid #d6d8de` border below, primary mint 'Check' button below input, 'Get a hint' tertiary text link beside it, 'Get help' link in muted grey at bottom. On correct answer: input border glows `#14bf96`, confetti emits over 600ms ease-bounce, mint encouragement toast 'Great job!' slides in from bottom-left."

### Iteration Guide
1. **Soften everything.** If the design feels corporate, reduce colour saturation, increase line-height to 1.5+, round buttons to pill (`9999px`).
2. **Pill the CTAs.** Khan's primary buttons are full pills — `9999px` radius. Anything less reads as Material Design or e-commerce.
3. **Use deeper green for inline links.** The brand mint `#14bf96` doesn't pass AAA on white at body sizes. Switch to `#0a7d63` deeper green for inline text links and outlined buttons.
4. **Add a mastery dot.** If a skill list feels generic, add the 4-stage mastery indicator (grey / blue / purple / deep-green) inline. The dot is Khan's pedagogical signature.
5. **Custom illustrations, not stock photos.** If the page feels corporate, replace photographic imagery with flat custom SVG illustrations (mascot characters, geometric subject icons).
6. **Single family discipline.** If display feels off-brand, drop the secondary font — Lato carries everything. Three weights only: 400, 700, 900.
7. **Donate is blue.** If Donate CTA accidentally went mint, switch to `#1865f2` blue — the differentiation from learning verbs is a brand commitment.
8. **Encouraging copy.** If error states say "Wrong" or "Incorrect", switch to "Not quite. Try again — you can do this." Khan's voice is the tutor's voice, not the test's.
