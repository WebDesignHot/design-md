---
name: Motion
tagline: AI-calendar productivity in green-and-purple — Inter at modest weights with a green-to-purple voltage gradient signaling the AI scheduler, anchored by a clean white canvas.
updated_at: 2026-05-05T19:20:38+12:00
published_at: 2026-05-05T10:17:17+12:00
author: webdesignhot
source_url: https://usemotion.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [saas]
tags: [light, ai, calendar, sans, gradient, scheduler]
preview_swatch: ['#ffffff', '#16a34a', '#7c3aed']
related: [linear, height, fantastical]
description: 'Motion''s marketing surface is an AI-calendar workspace dressed in a green-and-purple voltage duet. The canvas is pure white `#ffffff` — Motion commits to clarity over cream — and the type is Inter at modest mid-weights set in generous whitespace. Brand voltage comes from a two-part palette: `#16a34a` calendar-green for productivity and time-block moments, and `#7c3aed` AI-purple for scheduler-intelligence moments. The two often appear together as a left-to-right gradient stop on hero bands and AI-feature cards — green flowing into purple to signal "your calendar, scheduled by AI." Demo cards carry real product UI fragments (a week-grid calendar, a task-priority list, an AI auto-schedule confirmation). Section rhythm: white hero → green-purple gradient AI band → white feature grid → dark mid-page band → light pricing → cream pre-footer → footer. Headlines never bold beyond 500; the system trusts size and the green-purple voltage to carry emphasis.'

colors:
  bg: '#ffffff'                  # pure white canvas
  bg-soft: '#f8faf9'             # green-tinted soft surface (calendar bias)
  bg-elev: '#ffffff'             # elevated surface stays white
  bg-strong: '#eef2ee'           # mint-tinted pre-footer
  bg-dark: '#0d1117'             # mid-page dark CTA — slightly green-tinted near-black
  bg-dark-elev: '#161b22'        # dark popover surface
  surface: '#f8faf9'
  text: '#0d1117'                # ink — green-tinted near-black
  text-body: '#1f2937'           # default running-text
  text-muted: '#56636e'          # captions, footer links
  text-faint: '#8d97a3'          # placeholder, disabled
  brand: '#16a34a'               # calendar-green — primary brand voltage
  brand-hover: '#138a3f'         # press / hover
  brand-active: '#0f6e34'        # focused / active
  brand-soft: '#dcf2e3'          # green pastel surface
  brand-deep: '#0f6e34'          # deep green — used inside green-on-green compositions
  ai-purple: '#7c3aed'           # AI-scheduler voltage — second brand color
  ai-purple-hover: '#6d28d9'
  ai-purple-active: '#5b21b6'
  ai-soft: '#ede9fe'             # purple pastel surface
  on-brand: '#ffffff'
  on-dark: '#f8faf9'             # green-tinted white on dark
  link: '#1d4ed8'                # link blue — distinct from both brand and ai
  link-hover: '#1e40af'
  gradient-stop-1: '#16a34a'     # green stop
  gradient-stop-2: '#7c3aed'     # purple stop
  gradient-hero: 'linear-gradient(105deg, #16a34a 0%, #4f46e5 50%, #7c3aed 100%)'  # green→indigo→purple
  pastel-mint: '#dcf2e3'         # demo card — calendar / time-block
  pastel-lavender: '#ede9fe'     # demo card — AI scheduler
  pastel-sky: '#dbeafe'          # demo card — meetings / availability
  pastel-peach: '#fde6d3'        # demo card — task priority
  pastel-butter: '#fef3c7'       # demo card — milestone
  border: '#e2e8e5'              # green-tinted hairline
  border-strong: '#c1cdc6'       # stronger card border
  border-soft: '#eef2ee'
  shadow-tint: 'rgba(13, 17, 23, 0.06)'
  shadow-deep: 'rgba(13, 17, 23, 0.16)'
  info: '#1d4ed8'
  success: '#16a34a'
  warning: '#d97706'
  warning-soft: '#fef3c7'
  danger: '#dc2626'
  danger-soft: '#fee2e2'
  selection: 'rgba(22, 163, 74, 0.18)'
  ring-brand: 'rgba(22, 163, 74, 0.45)'
  ring-ai: 'rgba(124, 58, 237, 0.45)'

typography:
  display:
    family: '"Inter Display", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
    opentype-features: 'ss01, cv11 — Inter character marks'
  body:
    family: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
    opentype-features: 'tnum (tabular figures) inside calendar grids and time displays'
  mono:
    family: '"JetBrains Mono", "SF Mono", Menlo, Consolas, monospace'
    weights: [400]
  scale:
    display-hero:    { size: 80, weight: 600, lineHeight: 1.02, tracking: '-0.024em', family: display, opentype: 'ss01, cv11', notes: 'mega hero — green-purple gradient text on white canvas' }
    display-xl:      { size: 60, weight: 600, lineHeight: 1.05, tracking: '-0.022em', family: display, opentype: 'ss01', notes: 'homepage hero h1' }
    display-lg:      { size: 48, weight: 600, lineHeight: 1.08, tracking: '-0.02em',  family: display, opentype: 'ss01', notes: 'feature section h2' }
    display-md:      { size: 36, weight: 600, lineHeight: 1.14, tracking: '-0.014em', family: display, opentype: 'ss01', notes: 'pricing-page section heads' }
    title-lg:        { size: 28, weight: 600, lineHeight: 1.20, tracking: '-0.008em', family: display }
    title-md:        { size: 22, weight: 500, lineHeight: 1.30, tracking: '-0.004em', family: display }
    title-sm:        { size: 18, weight: 600, lineHeight: 1.35, tracking: 0,           family: body }
    label-md:        { size: 16, weight: 600, lineHeight: 1.40, tracking: 0,           family: body }
    button:          { size: 15, weight: 600, lineHeight: 1.20, tracking: 0,           family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: 0,           family: body }
    body-md:         { size: 16, weight: 400, lineHeight: 1.55, tracking: 0,           family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.50, tracking: 0,           family: body }
    caption:         { size: 13, weight: 600, lineHeight: 1.40, tracking: '0.04em',    family: body, notes: 'uppercase eyebrow with green or purple accent' }
    caption-tabular: { size: 13, weight: 500, lineHeight: 1.30, tracking: 0,           family: body, opentype: 'tnum', notes: 'time / metric chips inside calendar demos' }
    legal:           { size: 12, weight: 400, lineHeight: 1.40, tracking: '0.01em',    family: body }
    code-md:         { size: 14, weight: 400, lineHeight: 1.50, tracking: 0,           family: mono }
    code-micro:      { size: 12, weight: 400, lineHeight: 1.40, tracking: 0,           family: mono }

radius:
  micro: 2
  sm: 6
  md: 10
  lg: 14
  xl: 20
  pill: 9999
  full: 9999

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]

layout:
  page-width: 1200
  prose-width: 720
  header-height: 64
  card-padding-default: 32
  card-padding-large: 48
  section-padding: 96

components:
  button-primary:
    backgroundColor: brand
    textColor: on-brand
    rounded: lg
    padding: '12px 22px'
    use: 'primary CTA — Start free trial / Get Motion — calendar-green anchor'
  button-primary-hover:
    backgroundColor: brand-hover
    textColor: on-brand
    use: 'pointer hover'
  button-ai:
    backgroundColor: ai-purple
    textColor: on-brand
    rounded: lg
    padding: '12px 22px'
    use: 'AI-scheduler CTA — Try AI Scheduler — purple voltage anchor'
  button-secondary:
    backgroundColor: bg
    textColor: text
    rounded: lg
    padding: '12px 22px'
    border: '1px solid border-strong'
    use: 'Watch demo / less-committed pair next to primary'
  button-on-dark:
    backgroundColor: bg
    textColor: text
    rounded: lg
    padding: '12px 22px'
    use: 'white CTA over dark mid-page band'
  button-gradient:
    background: gradient-hero
    textColor: on-brand
    rounded: lg
    padding: '12px 22px'
    use: 'rare hero CTA using full green→purple gradient — only one per page'
  button-icon:
    backgroundColor: bg
    textColor: text
    rounded: full
    size: 36
    border: '1px solid border'
    use: 'carousel arrows, share, copy-link'
  card-default:
    backgroundColor: bg
    textColor: text
    rounded: lg
    padding: 32
    border: '1px solid border'
    shadow: ambient
    use: 'default content card'
  card-elevated:
    backgroundColor: bg
    textColor: text
    rounded: lg
    padding: 32
    border: '1px solid border-soft'
    shadow: standard
    use: 'pricing tier, integration, feature card'
  card-pastel-mint:
    backgroundColor: pastel-mint
    textColor: text
    rounded: xl
    padding: 48
    use: 'calendar / time-block demo card'
  card-pastel-lavender:
    backgroundColor: pastel-lavender
    textColor: text
    rounded: xl
    padding: 48
    use: 'AI scheduler demo card'
  card-pastel-sky:
    backgroundColor: pastel-sky
    textColor: text
    rounded: xl
    padding: 48
    use: 'meetings / availability demo card'
  card-pastel-peach:
    backgroundColor: pastel-peach
    textColor: text
    rounded: xl
    padding: 48
    use: 'task priority demo card'
  card-pastel-butter:
    backgroundColor: pastel-butter
    textColor: text
    rounded: xl
    padding: 48
    use: 'milestone / project demo card'
  card-gradient-hero:
    background: gradient-hero
    textColor: on-brand
    rounded: xl
    padding: 64
    use: 'hero AI band — full-bleed green→purple gradient with white type'
  hero-card-dark:
    backgroundColor: bg-dark
    textColor: on-dark
    rounded: xl
    padding: 64
    use: 'mid-page dark CTA — section reset'
  badge-ai:
    backgroundColor: ai-soft
    textColor: ai-purple-active
    rounded: pill
    padding: '4px 10px'
    fontSize: 12
    use: 'inline AI badge — appears next to AI feature headlines'
  badge-tag:
    backgroundColor: bg-soft
    textColor: text-muted
    rounded: pill
    padding: '4px 10px'
    fontSize: 12
    use: 'category / status pill'
  badge-status-success:
    backgroundColor: brand-soft
    textColor: brand-active
    rounded: pill
    padding: '4px 10px'
    fontSize: 12
    use: 'auto-scheduled / confirmed status'
  text-input:
    backgroundColor: bg
    textColor: text
    rounded: md
    padding: '10px 14px'
    height: 44
    border: '1px solid border-strong'
    use: 'email signup, calendar event input'
  text-input-focus:
    border: '1px solid brand'
    shadow: '0 0 0 3px rgba(22,163,74,0.20)'
    use: 'focus state — calendar-green ring'
  top-nav:
    backgroundColor: 'rgba(255,255,255,0.85)'
    textColor: text
    height: 64
    use: 'sticky white-tinted bar with backdrop-blur — Motion wordmark left, menu center, primary CTA right'
  footer:
    backgroundColor: bg-strong
    textColor: text-muted
    padding: 96
    use: 'mint-tinted pre-footer carrying multi-column link list'
  toast:
    backgroundColor: bg-dark
    textColor: on-dark
    rounded: md
    padding: '12px 16px'
    shadow: deep

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.16, 1, 0.3, 1)'
  ease-spring: 'cubic-bezier(0.32, 0.72, 0, 1)'
  duration-instant: 80
  duration-fast: 140
  duration-standard: 220
  duration-slow: 360
  duration-page: 480
  reduced-motion: 'respects prefers-reduced-motion: reduce — all transforms removed; AI auto-schedule animation skips to final state; gradient hero animates only opacity'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1200
  wide: 1440

shadows:
  ambient: '0 1px 2px rgba(13,17,23,0.04)'
  standard: '0 6px 20px rgba(13,17,23,0.08)'
  elevated: '0 14px 40px rgba(13,17,23,0.10), 0 2px 6px rgba(13,17,23,0.04)'
  deep: '0 28px 60px rgba(13,17,23,0.18), 0 6px 12px rgba(13,17,23,0.08)'
  ring-brand: '0 0 0 3px rgba(22,163,74,0.45)'
  ring-ai: '0 0 0 3px rgba(124,58,237,0.45)'

accessibility:
  contrast-text-on-bg: 17.8                # AAA — #0d1117 on #ffffff
  contrast-body-on-bg: 13.4                # AAA — #1f2937 on #ffffff
  contrast-muted-on-bg: 5.8                # AA — #56636e on #ffffff
  contrast-on-brand: 4.6                   # AA — white on #16a34a at body sizes; AAA at display
  contrast-on-ai: 5.7                      # AA — white on #7c3aed at body sizes
  contrast-on-dark: 16.4                   # AAA — #f8faf9 on #0d1117
  contrast-link-on-bg: 8.6                 # AAA — #1d4ed8 on #ffffff
  focus-ring: '3px solid rgba(22,163,74,0.45) for productivity actions; 3px rgba(124,58,237,0.45) for AI actions'
  reduced-motion-honored: true
  keyboard-nav-honored: true

dark-mode: 'optional — Motion''s in-product calendar UI ships a dark variant (calendar grid inverted to #0d1117, brand-green slightly cooler, AI-purple unchanged). Marketing surface is light-only.'
---

## 1. Visual Theme & Atmosphere

Motion's marketing surface is an AI-calendar workspace dressed as a clean, productivity-focused product page. The canvas is pure white `#ffffff` — Motion commits to clarity over warmth — with type set in Inter at mid-weights (500–600) and generous whitespace. The atmosphere is bright, optimistic, and time-aware: every demo card frames a real calendar grid or scheduler interaction, and every feature anchors back to the question "when does this happen?".

Brand voltage comes from a **two-part palette**: `#16a34a` calendar-green for productivity and time-block moments, and `#7c3aed` AI-purple for scheduler-intelligence moments. The two often appear together as a left-to-right gradient stop on hero bands and AI-feature cards — green flowing into purple to signal "your calendar, scheduled by AI." Used apart, the green carries primary CTAs and time-block status; the purple carries AI-scheduler CTAs and AI badges.

Demo cards carry real product UI fragments — a week-grid calendar, a task-priority list, an AI auto-schedule confirmation animation, a meetings availability strip. Pastel surfaces (mint, lavender, sky, peach, butter) signal which feature family ships in that card. The mint surface is reserved for time-block / calendar moments; lavender for AI scheduler; sky for meetings; peach for task priority; butter for milestones.

Section rhythm: white hero → green-purple gradient AI band → white feature grid → dark mid-page band → light pricing → cream pre-footer → footer. Headlines never bold beyond 600; the system trusts size and the green-purple voltage to carry emphasis. The result is a productivity tool that looks confidently AI-native without falling into the gradient-purple-everywhere trap of contemporary AI marketing.

**Key Characteristics:**
- Canvas is **pure white** `#ffffff` — Motion's commitment to clarity. Off-white reads as "wellness app," not "calendar tool."
- Two-color brand voltage: `#16a34a` calendar-green + `#7c3aed` AI-purple, often paired as a gradient.
- Display weight is **600** — slightly bolder than Linear/Notion, signaling decisiveness.
- Pastel surface cards carry product UI demos with the green/purple semantic split.
- One `card-gradient-hero` band per page — the green-purple gradient is rare and reserved.
- Section padding is **96px** — universal vertical rhythm constant.
- Hairlines are subtly green-tinted (`#e2e8e5`) — not pure neutral.
- Cards round at 20px (xl) for pastel surfaces, 14px for primary CTAs, 10px for content cards.

## 2. Color Palette & Roles

### Primary
- **Bg / Canvas** (`#ffffff`): Pure white. Motion's clarity commitment.
- **Text / Ink** (`#0d1117`): Display, body emphasis, primary button text-on-light surfaces.
- **Brand / Calendar Green** (`#16a34a`): Primary CTA, productivity moments, time-block status, success states.

### Brand & Dark
- **Brand Hover** (`#138a3f`): Press state.
- **Brand Active** (`#0f6e34`): Focused / active.
- **Brand Soft** (`#dcf2e3`): Tonal pastel mint surface.
- **Brand Deep** (`#0f6e34`): Used inside green-on-green compositions for layered depth.
- **AI Purple** (`#7c3aed`): AI scheduler CTAs, AI badges, AI moments. The second-tier brand voltage.
- **AI Purple Hover** (`#6d28d9`) / **Active** (`#5b21b6`): Press / focused.
- **AI Soft** (`#ede9fe`): Tonal lavender surface for AI moments.
- **Bg Dark** (`#0d1117`): Mid-page dark CTA — slightly green-tinted near-black.
- **Bg Dark Elev** (`#161b22`): Dark popover surface (rare).
- **On-Dark** (`#f8faf9`): Green-tinted white over dark.

### Accent — Pastel Card Surfaces
- **Pastel Mint** (`#dcf2e3`): Calendar / time-block demo card.
- **Pastel Lavender** (`#ede9fe`): AI scheduler demo card.
- **Pastel Sky** (`#dbeafe`): Meetings / availability demo card.
- **Pastel Peach** (`#fde6d3`): Task priority demo card.
- **Pastel Butter** (`#fef3c7`): Milestone / project demo card.

### Gradient
- **Gradient Hero**: `linear-gradient(105deg, #16a34a 0%, #4f46e5 50%, #7c3aed 100%)`. The signature green→indigo→purple voltage. Used on hero AI band and rare gradient-CTA buttons. The 105deg angle reads as a left-to-right time-flow metaphor.

### Interactive
- **Link** (`#1d4ed8`): Inline body links — distinct from both brand and AI. No underline by default.
- **Link Hover** (`#1e40af`): Pressed state.
- **Selection** (`rgba(22, 163, 74, 0.18)`): Text selection background — brand at 18% alpha.

### Neutral Scale
- **Ink** (`#0d1117`): Display + emphasis.
- **Text Body** (`#1f2937`): Default running-text.
- **Text Muted** (`#56636e`): Captions, footer links.
- **Text Faint** (`#8d97a3`): Placeholder, disabled.
- **Bg Strong** (`#eef2ee`): Mint-tinted pre-footer.
- **Bg Soft** (`#f8faf9`): Green-tinted soft surface (calendar bias).

### Surface & Borders
- **Bg** (`#ffffff`): Canvas.
- **Bg Soft** (`#f8faf9`): Default soft card.
- **Border** (`#e2e8e5`): Default 1px hairline — subtly green-tinted.
- **Border Strong** (`#c1cdc6`): Stronger card / input border.
- **Border Soft** (`#eef2ee`): Softest divider.

### Shadow Colors
All shadows use slate-tinted ink `rgba(13, 17, 23, …)` — neutral with a faint green-blue cast. Focus rings split: brand-green for productivity actions, AI-purple for AI actions. Two semantic focus colors — Motion's only place where the dual-voltage system is honored at the input layer.

### Semantic
- **Info** (`#1d4ed8`): Inline info badges, focused links.
- **Success** (`#16a34a`) on `#dcf2e3` mint: confirmation states (same hex as brand).
- **Warning** (`#d97706`) on `#fef3c7` butter: caution states.
- **Danger** (`#dc2626`) on `#fee2e2` blush: destructive actions.

## 3. Typography Rules

### Font Family
- **Primary**: `"Inter Display"` for display sizes (≥ 28px); `"Inter"` for everything else.
- **Mono**: `"JetBrains Mono"` (with `SF Mono` fallback) for code snippets and time-format displays inside calendar UI.
- **Fallback chain**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`.
- **OpenType features**: `ss01` (single-storey g), `cv11` (alternate digit shapes), `tnum` inside calendar grids and time displays for tabular alignment.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display-hero | Inter Display | 80 | 600 | 1.02 | -0.024em | ss01, cv11 | Mega hero — green-purple gradient text |
| display-xl | Inter Display | 60 | 600 | 1.05 | -0.022em | ss01 | Homepage hero h1 |
| display-lg | Inter Display | 48 | 600 | 1.08 | -0.02em | ss01 | Feature section h2 |
| display-md | Inter Display | 36 | 600 | 1.14 | -0.014em | ss01 | Pricing section heads |
| title-lg | Inter Display | 28 | 600 | 1.20 | -0.008em | — | Section titles |
| title-md | Inter Display | 22 | 500 | 1.30 | -0.004em | — | Card titles |
| title-sm | Inter | 18 | 600 | 1.35 | 0 | — | Small card titles |
| label-md | Inter | 16 | 600 | 1.40 | 0 | — | List labels |
| button | Inter | 15 | 600 | 1.20 | 0 | — | CTA labels |
| body-lg | Inter | 18 | 400 | 1.55 | 0 | — | Hero subhead |
| body-md | Inter | 16 | 400 | 1.55 | 0 | — | Default running-text |
| body-sm | Inter | 14 | 400 | 1.50 | 0 | — | Caption support |
| caption | Inter | 13 | 600 | 1.40 | 0.04em | — | Uppercase eyebrow with green/purple accent |
| caption-tabular | Inter | 13 | 500 | 1.30 | 0 | tnum | Time / metric chips inside calendar |
| legal | Inter | 12 | 400 | 1.40 | 0.01em | — | Footer legal |
| code-md | JetBrains Mono | 14 | 400 | 1.50 | 0 | — | Code snippets |
| code-micro | JetBrains Mono | 12 | 400 | 1.40 | 0 | — | Inline IDs, time formats |

### Principles
- **Display sits at 600 — not 700.** Motion is decisive without going aggressive. 600 reads as confident-pragmatic; 700 reads as marketing-template.
- **Negative tracking scales with size.** -0.024em at 80px tightens to 0 at 16px — Inter Display's metric-aware discipline.
- **Tabular figures inside calendar.** All time displays (9:00 AM, 14:30) use `tnum` for vertical alignment in week-grid demos.
- **Eyebrow is uppercase with 0.04em tracking.** Slightly tighter than Stripe's 0.08em — Motion's eyebrows whisper, they don't shout.
- **Mono only for code and time displays.** Don't reach for JetBrains Mono as a display accent — Inter handles all numeric display via `tnum`.
- **One sub-system, no font swaps.** Inter Display + Inter carries every page including pricing.

## 4. Component Stylings

### Buttons (6 variants)

**`button-primary`** — The signature CTA. Background `#16a34a` calendar-green, text white, type 15px / 600 Inter, padding 12 × 22px, radius 14px. "Start free trial" / "Get Motion" — one per viewport. Hover lightens via 4% white overlay; active darkens to `#138a3f`. Focus shows a 3px brand-green ring at 45% alpha.

**`button-ai`** — The AI-scheduler CTA. Background `#7c3aed` AI-purple, otherwise identical shape and padding to primary. "Try AI Scheduler" / "Schedule with AI" — pairs with `button-primary` only when both productivity and AI features are equally weighted.

**`button-secondary`** — Background `#ffffff`, text `#0d1117`, 1px border `#c1cdc6`. The "Watch demo" / "Talk to sales" pair next to primary or AI button.

**`button-on-dark`** — Background `#ffffff`, text `#0d1117`, used over the dark mid-page band. Never inverts to translucent.

**`button-gradient`** — Background `linear-gradient(105deg, #16a34a, #4f46e5, #7c3aed)`, white text. Reserved for the single hero CTA when the page wants to lead with the dual-voltage signature. **One per page maximum.**

**`button-icon`** — 36 × 36px circular. White, 1px hairline border, ink icon. Carousel arrows, share, copy-link.

### Cards

**`card-default`** — White surface, 14px radius, 32px padding, 1px `#e2e8e5` border, ambient shadow.

**`card-elevated`** — White, 14px radius, 32px padding, 1px `#eef2ee` border, standard shadow. Pricing tier, integration card.

**`card-pastel-mint`** — Calendar / time-block demo. Background `#dcf2e3`, 20px radius, 48px padding. Frames a week-grid calendar mock with green time-block overlays.

**`card-pastel-lavender`** — AI scheduler demo. Background `#ede9fe`, same shape. Frames the AI auto-schedule confirmation animation — an event sliding into the calendar with a purple "AI scheduled" badge.

**`card-pastel-sky`** — Meetings / availability demo. Background `#dbeafe`, same shape. Frames a meeting availability strip with sky-blue accent.

**`card-pastel-peach`** — Task priority demo. Background `#fde6d3`, same shape. Frames a priority-ranked task list.

**`card-pastel-butter`** — Milestone demo. Background `#fef3c7`, same shape. Frames a project milestone view.

**`card-gradient-hero`** — Full-bleed green→indigo→purple gradient hero band. Rounded 20px (or full-bleed at desktop), padding 64px. Carries an h1 in display-hero, white type, single white-on-gradient CTA. **One per page.**

**`hero-card-dark`** — Mid-page dark CTA. `#0d1117` background, cream-tinted white text, 20px radius, 64px padding. Section reset.

### Badges & Pills
- **`badge-ai`** — Background `#ede9fe` AI-soft, text `#5b21b6` AI-purple-active, rounded pill, 4 × 10px, 12px font. "AI" label next to AI features.
- **`badge-tag`** — Default category pill. Bg-soft surface, muted text.
- **`badge-status-success`** — "Auto-scheduled" / "Confirmed" pill. Brand-soft mint background, brand-active green text.

### Inputs / Forms

**`text-input`** — White, 10px radius, 10 × 14px padding, 44px height, 1px `#c1cdc6` border. Inter 16px / 400.

**`text-input-focus`** — Border recolors to `#16a34a` brand-green; 3px brand-green ring at 20% alpha appears outside the border. **AI-mode inputs** (Copilot prompt, AI scheduler) use the AI-purple ring instead — the dual-voltage rule extended to focus.

**`text-input-error`** — Border `#dc2626`, helper text `#dc2626`.

### Navigation

**`top-nav`** — 64px-tall sticky bar, `rgba(255,255,255,0.85)` backdrop with 16px blur. Motion wordmark left in green ink (`#16a34a` accent on the M); horizontal menu (Product, Use Cases, Pricing, Customers, Resources) center; right cluster carries "Talk to sales" text link, "Sign in" text link, "Start free trial" `button-primary`. Stays white-tinted on every page.

**`footer`** — Mint-tinted bg-strong band, 96px padding, multi-column link grid. Motion wordmark in legal section.

### Toasts & Modals

**`toast`** — `#0d1117` background, cream-tinted white text, 10px radius, deep shadow. "Event scheduled" / "AI rescheduled 3 events". Auto-dismiss 3s.

**Modal** — White, 20px radius, 48px padding, deep shadow, 70% alpha backdrop overlay.

## 5. Layout Principles

### Spacing System
Base unit **4px**. Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128`. Section padding **96px** between bands. Card padding 32px (default), 48px (pastel), 64px (gradient hero / dark hero).

### Grid & Container
- **Max content width**: 1200px centered.
- **Pastel-card grid**: 2-up at desktop with mint-and-lavender pairing as the canonical AI+calendar duet. 1-up on mobile.
- **Pricing tier grid**: 3-up at desktop, 1-up at mobile.
- **Calendar week-grid demos** (inside pastel-mint cards) use 7-column subgrids with `tnum` time labels.

### Whitespace Philosophy
Whitespace is the dominant atmosphere. Hero sits in 96px+ of pure white; the green-purple gradient hero card is the one place where the canvas inverts to color. Between pastel grids, the white canvas resets — two adjacent pastel cards of the same color are forbidden.

### Section Cadence
White hero → gradient hero card (or pastel pair) → white feature grid → dark mid-page band → white pricing → mint pre-footer → footer. The canvas resets between every voltage band.

## 6. Shapes & Radius Scale

| Tier | Token | Value | Use |
|---|---|---|---|
| Micro | micro | 2px | Cookie / legal CTAs |
| Standard | sm | 6px | Inputs, small chips |
| Comfortable | md | 10px | Default content cards, table cells |
| Relaxed | lg | 14px | Primary / AI CTAs, secondary buttons, default cards |
| Featured | xl | 20px | Pastel surface cards, gradient hero, dark hero, modals |
| Pill | pill | 9999px | Badges, AI tag, status pills |
| Full | full | 9999px / 50% | Avatars, icon buttons |

No compound radii. Calendar grid cells (inside pastel-mint demos) use 6px sub-radius for time-block events.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No shadow | Canvas, top nav background, footer band |
| 1 — Hairline | 1px `#e2e8e5` border | Default cards, inputs, secondary buttons |
| 2 — Ambient | `0 1px 2px rgba(13,17,23,0.04)` | Resting cards |
| 3 — Standard | `0 6px 20px rgba(13,17,23,0.08)` | Card hover, sticky nav at scroll, pricing tiers |
| 4 — Elevated | `0 14px 40px rgba(13,17,23,0.10), 0 2px 6px rgba(13,17,23,0.04)` | Elevated cards, popovers |
| 5 — Deep | `0 28px 60px rgba(13,17,23,0.18), 0 6px 12px rgba(13,17,23,0.08)` | Modals, command palette |

### Shadow Philosophy
Slate-tinted ink shadows (faint green-blue cast) sit naturally against the white canvas. Pastel cards stay flat — they carry depth through color. The gradient hero card uses no shadow; the gradient itself is the depth signal. Modals stack two shadows for compound depth.

## 8. Interaction & Motion

### Easing Curves
- **Standard** `cubic-bezier(0.4, 0, 0.2, 1)` — color, opacity, simple transforms.
- **Emphasized** `cubic-bezier(0.16, 1, 0.3, 1)` — pastel reveals, dark hero entrance.
- **Spring** `cubic-bezier(0.32, 0.72, 0, 1)` — AI auto-schedule animation, calendar event drop-in.

### Duration Buckets
- **Instant (80ms)**: Color hover, cursor changes.
- **Fast (140ms)**: Button hover, focus ring, input border recolor.
- **Standard (220ms)**: Card hover, dropdown, tab switch.
- **Slow (360ms)**: Pastel card scroll reveal, AI auto-schedule animation, modal entrance.
- **Page (480ms)**: Inter-page transition.

### Per-Component Micro-States
- **Button hover (primary / AI)**: 4% white overlay; no transform; 140ms.
- **Card hover (pastel)**: 4px translate-y lift + standard shadow; 220ms emphasized.
- **AI auto-schedule animation**: Calendar event card slides from right edge into a time-block slot over 360ms spring; "AI scheduled" badge fades in at 80ms after settle.
- **Gradient hero text**: Subtle 60s loop where the gradient stops shift 5deg back-and-forth — an ambient breathing motion, not aggressive.
- **Input focus (productivity)**: Border recolors `#c1cdc6` → `#16a34a`; 3px green ring at 20% alpha; 140ms.
- **Input focus (AI)**: Border recolors to `#7c3aed`; 3px purple ring at 20% alpha. The dual-voltage rule extended to focus.

### Page Transitions
Default fade. Inter-page route is 480ms emphasized fade-in with 12px translate-y. Section-on-scroll reveals are 360ms with 16px offset. Pastel cards stagger 80ms increments inside a row.

### Reduced Motion
`prefers-reduced-motion: reduce` honored: all transforms removed, transitions reduced to 100ms opacity-only, AI auto-schedule animation skips to final state, gradient hero animates only opacity (no breathing motion), pastel reveals fade in without offset.

## 9. Accessibility & A11y

### Contrast Pairs
- **Text on bg**: `#0d1117` on `#ffffff` = **17.8** — AAA.
- **Body on bg**: `#1f2937` on `#ffffff` = **13.4** — AAA.
- **Muted on bg**: `#56636e` on `#ffffff` = **5.8** — AA.
- **On-brand**: `#ffffff` on `#16a34a` = **4.6** — AA at body sizes; AAA at display.
- **On-AI**: `#ffffff` on `#7c3aed` = **5.7** — AA at body sizes.
- **On-dark**: `#f8faf9` on `#0d1117` = **16.4** — AAA.
- **Link on bg**: `#1d4ed8` on `#ffffff` = **8.6** — AAA.
- **Gradient hero text**: White on the gradient — measured against the green stop (worst case at left edge) gives 4.6, AA-compliant. Display sizes pull this to AAA.

### Focus Indicators
Two-color focus system: 3px brand-green at 45% alpha for productivity actions (calendar inputs, primary CTAs); 3px AI-purple at 45% alpha for AI actions (Copilot prompt, AI scheduler). 2px offset on both.

### ARIA Patterns
- **Calendar grid**: `role="grid"` with `role="gridcell"` for each time-block; `aria-label` carries the time range and event title.
- **AI scheduler dialog**: `role="dialog"` with `aria-modal="true"`, focus trap, Escape closes.
- **Tabs (feature cards)**: `role="tablist"` + `role="tab"` with `aria-selected`.
- **Combobox (AI prompt)**: `role="combobox"` with `aria-expanded`, owned `role="listbox"`.
- **Live region (auto-schedule)**: `aria-live="polite"` announces "3 events rescheduled by AI" once animation completes.
- **Navigation**: `<nav aria-label="Primary">` for top nav; mobile drawer uses `aria-expanded`.

### Keyboard Navigation
Tab order follows visual reading order. Calendar grid supports arrow keys for time-block navigation. AI prompt accepts arrow keys for suggestion list, Enter to submit. Modal focus traps with Escape close.

### Screen Reader Hints
Calendar demos use `aria-label` for each time-block ("Sprint planning, 2 PM to 3 PM Thursday"). AI badge announces as "AI feature" rather than "AI". Decorative gradient halos use `aria-hidden="true"`.

### Reduced Motion Handling
All transforms removed. AI auto-schedule animation jumps to final state. Gradient hero stops moving (opacity-only).

## 10. Responsive Behavior

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Single-column body; nav collapses to hamburger; pastel grid 1-up; hero h1 scales to 36px / 600; gradient hero card becomes shorter (32px padding); section padding 64px |
| Tablet | 640–1024px | 2-up pastel grid; nav stays horizontal but tightens; hero at 48px |
| Desktop | 1024–1200px | 2-up or 3-up pastel grid; full nav; hero at 60–80px |
| Wide | > 1200px | Same as desktop with more outer breathing room; max content width caps at 1200px |

### Touch Targets
- `button-primary` / `button-ai` render at 44 × 44px minimum.
- `button-icon` is 36 × 36px (under WCAG 44 — used only inside dense desktop UI clusters).
- `text-input` height is 44px throughout.

### Collapsing Strategy
- Nav collapses to hamburger at < 640px; full-screen sheet menu.
- Pastel grids reduce columns rather than scaling cards.
- Pricing comparison table converts to horizontally-scrollable swipe at < 1024px.
- Calendar week-grid demos collapse to 3-column day view at < 640px.

### Image Behavior
- Calendar UI screenshots crop to fit container.
- Gradient hero card scales padding rather than text.
- Customer logo strip wraps to 2 rows at tablet, 3 at mobile.

### Container Queries
Pricing tier cards use `@container (min-width: 360px)` to switch from stacked-vertical to inline-row pricing.

## 11. Content & Voice

### Tone
**Time-aware, productivity-pragmatic, AI-confident.** Motion writes as a calendar tool that thinks like a project manager. Headlines describe what the product does in concrete time-language: "Your calendar, scheduled by AI", "Tasks, meetings, projects — scheduled automatically". No "magic" theatre, no "transform your business" framing — Motion is specific about what AI does (schedules, reschedules, prioritizes).

### Microcopy Patterns
- **CTA verbs**: "Start free trial", "Try AI Scheduler", "Talk to sales", "Watch demo". Never "Try the magic" or "Boost productivity".
- **Section eyebrows**: 13px / 600 / 0.04em uppercase — "AI SCHEDULER", "TIME BLOCKING", "TASK PRIORITY".
- **Demo card titles**: One-line capability — "Auto-schedule meetings" not "Unleash calendar magic".
- **AI badge label**: "AI" pill — never "✨ AI" or "Beta AI".

### Empty States
"No events scheduled this week — Motion's AI will fill in priority tasks when you connect a project." Single line muted text plus a green CTA link.

### Error Messages
Short, declarative, action-oriented. "Couldn't connect to Google Calendar — try again or check permissions" not "Oops!". Errors carry an icon-x in `#dc2626`.

### Success Confirmations
Toast: "Event scheduled" / "AI rescheduled 3 events" / "Calendar synced". Cream-tinted white text on dark, deep shadow, auto-dismiss 3s.

### CTA verb conventions
Productivity actions use "Schedule" / "Block time" / "Plan". AI actions use "Try AI" / "Schedule with AI" / "Auto-prioritize". The brand prefers concrete time-verbs over generic productivity language.

## 12. Dark Mode & Theming

Motion's in-product calendar UI ships a dark variant — calendar grid inverts to `#0d1117`, time-blocks lift to slightly cooler greens (`#22c55e`), AI-purple stays `#7c3aed` (no shift), pastel surfaces become low-saturation tonal variants. The marketing site is **light-only** — the gradient hero band depends on white context.

In-page dark contrast on marketing is achieved through the single `hero-card-dark` (`#0d1117`) band per page. That band is the only dark surface on the marketing site.

## 13. Lineage & Influences

Motion descends from the **AI-productivity marketing tradition** — Linear's editorial rigor, Notion's publication metaphor, Cal.com's calendar-grid demos. The green-purple dual voltage is Motion's contribution: a two-color brand system where productivity-green and AI-purple carry distinct semantic weight but appear together as a gradient when the brand wants to lead with the AI-calendar synthesis.

The pastel surface card system traces back to Stripe and Airtable. Motion's contribution is the semantic-pastel split: mint for time/calendar, lavender for AI, sky for meetings, peach for tasks, butter for milestones — each surface carries a fixed feature meaning rather than rotating arbitrarily.

- **Linear** — Editorial product page rhythm, Inter Display discipline. https://linear.app
- **Notion** — Single-color CTA confidence, publication metaphor. https://notion.so
- **Cal.com** — Calendar-grid demos as feature anchors. https://cal.com
- **Fantastical** — Time-block visual vocabulary in calendar UI.
- **Inter Display** (Rasmus Andersson) — The display family's mid-weight discipline.

## 14. Do's and Don'ts

### Do
- Keep the canvas at pure `#ffffff` — Motion's clarity is the brand.
- Use `button-primary` (calendar-green) for productivity actions and `button-ai` (AI-purple) for AI actions.
- Reserve the gradient hero card for **one per page**.
- Use the pastel surfaces semantically: mint=calendar, lavender=AI, sky=meetings, peach=tasks, butter=milestones.
- Anchor every band at 96px vertical padding.
- Use `tnum` for all time displays (9:00 AM, 14:30) — tabular alignment is the calendar discipline.
- Pair brand-green and AI-purple inside one band only when the gradient is present.
- Trust whitespace as the hero atmosphere — 96px between every band.
- Use `caption` (uppercase, 0.04em tracking) for eyebrows above hero headlines.
- Keep display weight at 600 — confident-pragmatic, not aggressive.

### Don't
- Don't use cream or off-white for the canvas. Pure `#ffffff` is the brand's clarity commitment.
- Don't dilute brand-green by using it for non-productivity actions.
- Don't dilute AI-purple by using it for non-AI actions.
- Don't apply the green-purple gradient to multiple bands per page. One per page maximum.
- Don't bold display type beyond 600. Going to 700 reads as marketing-template.
- Don't pair pastel-mint and pastel-lavender adjacent in the same row unless deliberately framing the AI-calendar duet.
- Don't use cool greys for borders. Motion's hairlines are subtly green-tinted (`#e2e8e5`).
- Don't repeat the same pastel surface in two consecutive cards.
- Don't use display-tracking 0 or positive tracking. The negative tracking is the typographic signature.
- Don't add "✨" emoji to AI badges. The pill alone signals AI.

## 15. Agent Prompt Guide

### Quick Color Reference
```
Bg / Canvas:           #ffffff (pure white)
Text / Ink:            #0d1117
Body:                  #1f2937
Muted:                 #56636e
Brand / Calendar Grn:  #16a34a (productivity CTA + brand voltage)
Brand Soft / Mint:     #dcf2e3
AI Purple:             #7c3aed (AI scheduler CTA + AI voltage)
AI Soft / Lavender:    #ede9fe
Gradient:              linear-gradient(105deg, #16a34a, #4f46e5, #7c3aed)
Pastel Sky:            #dbeafe (meetings)
Pastel Peach:          #fde6d3 (tasks)
Pastel Butter:         #fef3c7 (milestones)
Bg Dark:               #0d1117 (single mid-page CTA)
On-Dark:               #f8faf9 (green-tinted white)
Link:                  #1d4ed8 (inline link)
Hairline:              #e2e8e5 (green-tinted)
```

### Example Component Prompts

1. "Create a hero band on `#ffffff` with Inter Display 60px / 600 / line-height 1.05 / -0.022em tracking headline ('Your calendar, scheduled by AI'), 18px / 400 `#1f2937` subhead at 1.55 line-height. Primary CTA in `#16a34a` calendar-green (white text, 15px / 600 Inter, 14px radius, 12 × 22px padding). Secondary CTA white with 1px `#c1cdc6` border. 96px vertical padding."

2. "Build a gradient hero card: full-bleed `linear-gradient(105deg, #16a34a 0%, #4f46e5 50%, #7c3aed 100%)` at 105deg. White text. Inter Display 80px / 600 / -0.024em. 64px padding, 20px outer radius. Single white-on-gradient `button-on-dark` CTA. Use only once per page."

3. "Compose a 2-up pastel duet: pastel-mint `#dcf2e3` left card framing a calendar week-grid with green time-blocks; pastel-lavender `#ede9fe` right card framing an AI scheduler with a purple 'AI scheduled' badge. Each card 20px radius, 48px padding. Title in Inter Display 28px / 600 / -0.008em."

4. "Build a calendar-week demo card: pastel-mint `#dcf2e3` background, 20px radius, 48px padding. 7-column subgrid for days, time labels in Inter 13px / 500 with `tnum` tabular figures (9:00 AM, 10:00 AM). Time-blocks rendered as 6px-radius event cards in `#16a34a` brand-green at 90% alpha with white type."

5. "Design an AI scheduler card: pastel-lavender `#ede9fe` background. Inline AI badge (pill, AI-soft `#ede9fe` background, AI-purple-active `#5b21b6` text, 12px). Title in Inter Display 28px / 600. Body in 16px / 400. Below body, an animated event card sliding from right into a calendar slot — 360ms spring entrance."

6. "Design a top nav: 64px-tall sticky bar, `rgba(255,255,255,0.85)` backdrop with 16px blur. Motion wordmark left (M letter accented in `#16a34a`). Horizontal menu (Product / Use Cases / Pricing / Customers / Resources) center in 15px / 500 ink. Right cluster: 'Talk to sales' text link, 'Sign in' text link, 'Start free trial' primary CTA in calendar-green."

### Iteration Guide
1. Start with pure white `#ffffff`. Cream is wrong. Motion is clarity.
2. Pick a primary verb: "Schedule" → green CTA. "Try AI" → purple CTA. "Both" → gradient hero card.
3. Use the gradient hero card sparingly. One per page.
4. Match pastel surface to feature: calendar=mint, AI=lavender, meetings=sky, tasks=peach, milestones=butter.
5. All time displays use `tnum`. Vertical alignment in week-grid demos is the calendar discipline.
6. Display weight is 600 — never 700. Compress with negative tracking before reaching for bolder weight.
7. Anchor every band at 96px vertical padding.
8. The two-color focus rule (green for productivity inputs, purple for AI inputs) is unique to Motion. Honor it on every input.
