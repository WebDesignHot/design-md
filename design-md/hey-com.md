---
name: HEY
tagline: 'Warm-white canvas, deep purple-ink, and a crayon-box of saturated pastels — opinionated email dressed as a friendly poster.'
updated_at: 2026-05-28T23:12:50.068Z
published_at: 2026-05-28T23:12:50.068Z
author: webdesignhot
source_url: https://www.hey.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [saas]
tags: [light, bold, sans, email, opinionated, playful, colorful]
preview_swatch: ['#ffffff', '#5522fa', '#f5d652']
description: 'HEY''s site is 37signals at full volume — a warm-white canvas (`#ffffff`), one deep purple-ink (`#231c33`) doing every line of text, and a crayon-box of fully-saturated pastel bands (mint `#b3f4e0`, sky `#b6dbff`, canary `#fff5ca`, peach `#ffe5da`, lavender `#d5d2ff`) stacked as full-bleed sections. The display face is Really Sans Large pushed to a heavy 900 weight at 74px, body is Moniker set large and conversational, and the action voltage is an electric blurple `#5522fa` for links plus a stone pill (`#edeae6`, radius 46px) for quieter buttons. Where Superhuman whispers premium, HEY shouts personality: anti-corporate, plain-spoken, color-drenched, and proud of it.'

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: yellow
  muted: grey
  border: border
  ring: brand
colors:
  bg: '#ffffff'              # warm-white canvas / page floor
  paper: '#f9f7f5'           # warm off-white panel base (--color-paper)
  stone: '#edeae6'           # quiet button + grouped-card surface (--color-stone), the "Sign in" pill bg
  stone-light: '#f7f4f0'     # lightest warm neutral, subtle dividers (--color-stone-light)
  text: '#231c33'            # deep purple-ink — every line of type (--color-black / --rgb-black)
  grey: '#736c83'            # muted purple-grey for captions, metadata (--color-grey)
  brand: '#5522fa'           # electric blurple — links, primary action voltage (--color-blurple)
  on-brand: '#ffffff'        # white text on blurple
  cobalt: '#0074e4'          # secondary blue, gradient partner to blurple (--color-cobalt)
  yellow: '#f5d652'          # signature warm-yellow accent (--color-yellow)
  canary: '#fff5ca'          # pale-yellow section band (--color-canary)
  orange: '#f87917'          # warm-orange accent / illustration (--color-orange)
  coral: '#f95c5c'           # hot-coral accent (--color-coral)
  coral-dark: '#ec4343'      # deeper coral, hover/press (--color-coral-dark)
  salmon: '#ec8580'          # muted-coral gradient partner (--color-salmon)
  peach: '#ffe5da'           # pale-peach section band (--color-peach)
  mint: '#b3f4e0'            # signature mint section band — most-used backdrop (--color-mint)
  teal: '#5fddc5'            # bright teal accent, "HEY for You" mark (--color-teal)
  sky: '#b6dbff'             # pale-blue section band (--color-sky)
  lavender: '#d5d2ff'        # pale-violet section band (--color-lavender)
  pink: '#cf6fb6'            # magenta-pink accent (--color-pink)
  purple: '#7700a2'          # deep magenta-purple accent (--color-purple)
  green: '#299850'           # success / confirmation green (--color-green)
  border: '#231c3314'        # 8% purple-ink hairline (--box-shadow-border 0.08)
  shadow-card: 'rgba(35,28,51,0.2)'   # ink-tinted ambient on raised cards
  shadow-deep: 'rgba(35,28,51,0.6)'   # deepest layer of the stacked play/nav shadow

typography:
  display:
    family: '"Really Sans Large", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
    weights: [700, 800, 900]
  body:
    family: 'Moniker, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
    weights: [400, 500, 700]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 74, weight: 900, lineHeight: 1.0,  tracking: '-0.02em',  family: display }
    display-lg:      { size: 56, weight: 900, lineHeight: 1.05, tracking: '-0.015em', family: display }
    h1:              { size: 44, weight: 800, lineHeight: 1.1,  tracking: '-0.01em',  family: display }
    h2:              { size: 34, weight: 800, lineHeight: 1.15, tracking: '-0.008em', family: display }
    h3:              { size: 26, weight: 700, lineHeight: 1.25, tracking: '0',        family: display }
    h4:              { size: 20, weight: 700, lineHeight: 1.3,  tracking: '0',        family: display }
    body-xl:         { size: 28, weight: 400, lineHeight: 1.4,  tracking: '0',        family: body }
    body-lg:         { size: 20, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    body:            { size: 18, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    body-sm:         { size: 16, weight: 400, lineHeight: 1.45, tracking: '0',        family: body }
    label:           { size: 14, weight: 700, lineHeight: 1.4,  tracking: '0',        family: body }
    button:          { size: 16, weight: 700, lineHeight: 1.2,  tracking: '0',        family: body }
    caption:         { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0.01em',   family: body }

radius:
  micro: 4
  sm: 8
  md: 12
  lg: 18
  xl: 28
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]

layout:
  page-width: 1200
  prose-width: 680
  header-height: 72

motion:
  ease-standard: 'cubic-bezier(0.37, 1, 0.74, 1)'
  duration-fast: 150
  duration-standard: 300
  duration-slow: 450
  reduced-motion: 'respects prefers-reduced-motion: reduce'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

components:
  button-primary: { bg: brand, text: on-brand, padding: '14px 28px', radius: 9999 }
  button-stone:   { bg: stone, text: text, padding: '14px 28px', radius: 9999 }
  button-ghost:   { bg: transparent, text: text, border: border, padding: '14px 28px', radius: 9999 }
  card:           { bg: paper, border: border, radius: 18, padding: 32 }
  input:          { bg: bg, border: border, text: text, radius: 12, padding: '12px 16px' }

shadows:
  border: '0 0 0 2px rgba(35,28,51,0.08)'
  nav: '0 0.2em 1.2em -0.4em rgba(35,28,51,0.2), 0 0.4em 2.0em -0.8em rgba(35,28,51,0.3), 0 0.8em 0.8em -1.2em rgba(35,28,51,0.5)'
  card: '0 0 0 1px rgba(35,28,51,0.02), 0 0.2em 1.6em -0.8em rgba(35,28,51,0.2), 0 0.4em 2.4em -1.0em rgba(35,28,51,0.3), 0 0.8em 1.2em -1.6em rgba(35,28,51,0.5)'
  play: '0 0.2em 0.4em -0.2em rgba(35,28,51,0.2), 0 0.4em 0.8em -0.4em rgba(35,28,51,0.4), 0 0.6em 1.2em -0.6em rgba(35,28,51,0.6)'
  video: '0 0.2em 2.4em -0.4em rgba(35,28,51,0.2), 0 0.4em 3.2em -0.8em rgba(35,28,51,0.3), 0 0.8em 2.0em -1.2em rgba(35,28,51,0.5)'

accessibility:
  contrast-text-on-bg: 16.3        # #231c33 on #ffffff — AAA
  contrast-text-on-stone: 13.6     # #231c33 on #edeae6 — AAA
  contrast-text-on-mint: 13.2      # #231c33 on #b3f4e0 — AAA
  contrast-text-on-yellow: 11.4    # #231c33 on #f5d652 — AAA
  contrast-on-brand: 7.0           # #ffffff on #5522fa — AA / AAA large
  contrast-brand-link: 7.0         # #5522fa on #ffffff — AA / AAA large
  contrast-grey-on-bg: 5.0         # #736c83 on #ffffff — AA body
  focus-ring: '2px solid #231c33 via box-shadow 0 0 0 2px rgba(35,28,51,0.08), thickening to solid ink on focus-visible'
  reduced-motion-honored: true
  touch-target-min: 44

dark-mode: null   # Light-only marketing surface. The HEY app ships light + dark themes; the public site is warm-white only and leans on saturated pastel bands for variety, not a dark canvas.
---

## 1. Visual Theme & Atmosphere

HEY's marketing site is what happens when a software company refuses to look like one. The canvas stays a clean warm-white `#ffffff`, every line of type is set in a single deep purple-ink `#231c33` (warmer and softer than `#000`, with a faint violet cast that ties into the brand's blurple), and the whole page is punctuated by full-bleed bands of fully-saturated pastels — mint `#b3f4e0`, sky `#b6dbff`, canary `#fff5ca`, peach `#ffe5da`, lavender `#d5d2ff`. It reads less like a SaaS landing page and more like a friendly broadside poster, or a children's-book spread that happens to be selling email.

The display face does a lot of the shouting. **Really Sans Large** is pushed to a heavy **900 weight** at a 74px hero — not just bold, but *bulging*, a thick-stroked headline that fills the line and crowds the margins on purpose. Body copy is **Moniker**, a humanist sans set unusually large (the sampled body runs around 28px) and conversational, so the page reads like someone talking directly at you rather than a marketing department writing around you. The combination — heavy heavy display over big chatty body — is the anti-corporate register made visible.

Color is the page's joy. Where most premium SaaS sites pick one accent and guard it jealously, HEY runs a full crayon box. Each scroll section gets its own saturated background — a mint block, then a sky block, then a canary block — and dark ink text sits confidently on top of every one of them. Diagonal 135° gradients pair the brights into duos (mint→sky, blurple→cobalt, peach→canary, coral→salmon) for hero washes and illustration backdrops. The effect is energetic and slightly maximalist, but it never tips into chaos because the *text color never changes* — purple-ink everywhere is the discipline that lets the backgrounds run wild.

The action layer has two voices. The loud one is **blurple `#5522fa`** — an electric blue-violet used for inline links and primary "yes, do it" actions, the single most-used accent on the page. The quiet one is **stone `#edeae6`** — a warm putty-grey used for the "Sign in" pill and other secondary buttons, with the same deep ink text. Both buttons are radically rounded: the sampled "Sign in" CTA lands at a 46px radius, which at button height is effectively a full pill. Rounded, friendly, pill-shaped buttons are everywhere — nothing on this page has a sharp corner if it can help it.

Depth, when it appears, is theatrical rather than subtle. HEY's shadows are multi-layer stacks (six stacked `rgba(35,28,51,…)` layers on a card) that produce a soft, lifted, almost paper-cutout float — reserved for video players, screenshots, and the floating nav. The page chrome itself stays flat; the drama is saved for the product imagery. The overall atmosphere is **loud, warm, plain-spoken, and proudly un-serious** — exactly the personality 37signals built the whole product around.

**Key Characteristics:**
- Warm-white canvas (`#ffffff`) — never grey, never dark
- One ink color for all type: deep purple-ink `#231c33` (`--color-black`), warmer than pure black
- A full crayon-box palette of saturated pastel bands (mint, sky, canary, peach, lavender) used as full-bleed section backgrounds
- Heavy Really Sans Large display at **900 weight**, 74px hero — thick-stroked and shouting
- Moniker body set large (~28px) and conversational — the page talks at you
- Electric **blurple `#5522fa`** for links + primary action; stone `#edeae6` for quiet buttons
- Radically rounded pill buttons everywhere (sampled radius 46px → effectively pill)
- 135° diagonal gradients pairing brights into duos for hero washes
- Multi-layer ink-tinted shadow stacks reserved for video / screenshots / nav, not chrome
- Anti-corporate, opinionated, deliberately un-minimal — color is the feature, not the restraint

## 2. Color Palette & Roles

### Canvas & Surface
- **Canvas** (`#ffffff`): warm-white floor for every page. There is no dark variant on the marketing surface.
- **Paper** (`#f9f7f5`, `--color-paper`): warm off-white panel base for grouped cards and quieter sections.
- **Stone** (`#edeae6`, `--color-stone`): putty-grey surface — the "Sign in" button fill and grouped-card background.
- **Stone Light** (`#f7f4f0`, `--color-stone-light`): the lightest warm neutral, for subtle dividers and nested fills.

### Text
- **Ink** (`#231c33`, `--color-black`): the one and only text color — every headline, paragraph, label, and link-at-rest. Deep purple-ink, not pure black.
- **Grey** (`#736c83`, `--color-grey`): muted purple-grey for captions, metadata, timestamps, and secondary detail.

### Brand & Action
- **Blurple** (`#5522fa`, `--color-blurple`): the primary action voltage — inline links, primary CTAs, the "HEY for Domains" mark. The single most-used accent on the page.
- **Cobalt** (`#0074e4`, `--color-cobalt`): secondary blue, the gradient partner to blurple in the blurple→cobalt hero wash.
- **On-brand** (`#ffffff`): white text on blurple and cobalt fills.

### Warm Accents (the signature warm set)
- **Yellow** (`#f5d652`, `--color-yellow`): the signature warm-yellow accent — highlights, illustration fills, emphasis swatches.
- **Canary** (`#fff5ca`, `--color-canary`): pale-yellow full-bleed section band.
- **Orange** (`#f87917`, `--color-orange`): warm-orange accent for illustration and emphasis.
- **Coral** (`#f95c5c`, `--color-coral`): hot-coral accent; **Coral Dark** (`#ec4343`) for hover/press.
- **Salmon** (`#ec8580`, `--color-salmon`): muted-coral gradient partner.
- **Peach** (`#ffe5da`, `--color-peach`): pale-peach full-bleed section band.

### Cool Accents
- **Mint** (`#b3f4e0`, `--color-mint`): the signature mint band — the most-used decorative background on the page.
- **Teal** (`#5fddc5`, `--color-teal`): bright teal accent, the "HEY for You" mark.
- **Sky** (`#b6dbff`, `--color-sky`): pale-blue full-bleed section band.
- **Lavender** (`#d5d2ff`, `--color-lavender`): pale-violet full-bleed section band.

### Magenta Accents
- **Pink** (`#cf6fb6`, `--color-pink`): magenta-pink accent for illustration variety.
- **Purple** (`#7700a2`, `--color-purple`): deep magenta-purple, the heaviest accent in the box.

### Gradients
HEY pairs its brights into 135° diagonal duo-gradients rather than using single flat fills on hero washes:
- `mint-sky`: `linear-gradient(135deg, #b3f4e0 0%, #b6dbff 100%)`
- `blurple-cobalt`: `linear-gradient(135deg, #5522fa 0%, #0074e4 100%)`
- `peach-canary`: `linear-gradient(135deg, #ffe5da 0%, #fff5ca 100%)`
- `coral-salmon`: `linear-gradient(135deg, #f95c5c 0%, #ec8580 100%)`
- `teal-mint`: `linear-gradient(135deg, #5fddc5 0%, #b3f4e0 100%)`

### Borders & Shadows
- **Border** (`#231c3314`, 8% ink): hairlines render as a 2px ink-tinted box-shadow ring (`0 0 0 2px rgba(35,28,51,0.08)`) rather than a hard 1px line — softer, warmer.
- **Shadow** (`rgba(35,28,51,…)`): all elevation tints toward the purple-ink, never pure black or blue. Shadows are built as 4–6 layer stacks for a soft paper-cutout float.

### Semantic
- **Success** (`#299850` ink-leaning green, `--color-green`) — confirmations and positive states.
- **Danger / Error** — reuse **Coral Dark** (`#ec4343`) for form errors; it reads as alarm without introducing a new hue.
- **Warning** — reuse **Orange** (`#f87917`) with dark-ink text; HEY does not maintain a separate amber.
- **Info** — reuse **Cobalt** (`#0074e4`); it stays distinct from the blurple action color.

## 3. Typography Rules

### Font Family

**Display**: `"Really Sans Large"`, HEY's heavy display face. Fallback chain: `system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif`. Used for the hero and all headings, almost always at the **900 weight** — the thick-stroked, line-filling weight is the headline personality. 800 is the secondary display weight for smaller headings.

**Body**: `Moniker`, a warm humanist sans. Fallback chain: `system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif`. Set unusually large — the sampled live body runs ~28px — and at 400 for running text, 500 for emphasis, 700 for labels and button text. Moniker is what gives the copy its conversational, spoken quality.

**Mono companion**: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, monospace` — used rarely, for code-flavored detail or technical callouts.

The discipline is family-modulated, not weight-modulated like Superhuman: HEY uses two distinct faces (heavy display + humanist body) and lets the contrast between them carry the hierarchy. Type color never changes — it is always purple-ink `#231c33` — so size, weight, and family do all the work.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| display-hero | Really Sans Large | 74 | 900 | 1.0 | -0.02em | Hero headline — thick-stroked, line-filling, the peak moment |
| display-lg | Really Sans Large | 56 | 900 | 1.05 | -0.015em | Major section opener |
| h1 | Really Sans Large | 44 | 800 | 1.1 | -0.01em | Page / sub-page title |
| h2 | Really Sans Large | 34 | 800 | 1.15 | -0.008em | Section heading |
| h3 | Really Sans Large | 26 | 700 | 1.25 | 0 | Feature-block heading |
| h4 | Really Sans Large | 20 | 700 | 1.3 | 0 | Card / sub-feature title |
| body-xl | Moniker | 28 | 400 | 1.4 | 0 | Hero deck — the big conversational line beneath the headline |
| body-lg | Moniker | 20 | 400 | 1.5 | 0 | Lead paragraph in feature blocks |
| body | Moniker | 18 | 400 | 1.5 | 0 | Default running text |
| body-sm | Moniker | 16 | 400 | 1.45 | 0 | Card meta, secondary copy |
| label | Moniker | 14 | 700 | 1.4 | 0 | Form labels, eyebrow tags |
| button | Moniker | 16 | 700 | 1.2 | 0 | Pill button text |
| caption | Moniker | 13 | 500 | 1.4 | 0.01em | Captions, footnotes, timestamp metadata |
| link-inline | Moniker | inherit | 400 | inherit | 0 | Blurple `#5522fa` underlined inline link |
| quote | Really Sans Large | 28 | 700 | 1.3 | 0 | Pull-quote / testimonial display |

### Principles

- **Heavy display is the brand.** Really Sans Large at 900 is not a "bold variant" — it is the default headline weight. Dropping to 700 for a hero reads as someone else's site. The thick stroke is the personality.
- **Body runs large and chatty.** Moniker at 18–28px (much larger than the typical 16px SaaS body) is deliberate — it makes the copy feel spoken, conversational, and unhurried.
- **One ink color, full stop.** Hierarchy comes from size/weight/family, never from a second text color. Greying down body copy is the cardinal anti-pattern; only true metadata uses `#736c83`.
- **Negative tracking on display only.** The hero pulls in at `-0.02em` because heavy 900 type wants to be tightened; body and labels sit at neutral or fractionally positive tracking.
- **Two faces, hard contrast.** The whole system rides on the gap between the heavy geometric-leaning display and the warmer humanist body — keep both, don't collapse to a single family.
- **Generous leading on body.** Body sits at 1.4–1.5 line-height; the large size plus open leading is what keeps the chatty register readable rather than cramped.
- **Links are blurple and underlined.** Inline links break the one-ink rule on purpose — they are `#5522fa` with an underline so they read unmistakably as actions in a wall of conversational copy.

## 4. Component Stylings

### Buttons

**`button-primary`** — The loud action. Blurple `#5522fa` fill, white text at 16px / 700 Moniker, **fully-pill radius (9999px)**, ~14×28px padding. Used for "Try HEY for free", primary sign-up, and the single most-important action per band. The pill shape plus electric blurple is the maximum-energy affordance.

**`button-stone`** — The quiet action. Stone `#edeae6` fill, deep-ink `#231c33` text at 16px / 700, fully-pill radius (the sampled "Sign in" button lands at 46px, effectively a pill at button height). Used for "Sign in" and secondary actions where blurple would over-shout. Same shape as primary, calmer fill.

**`button-ghost`** — Tertiary. Transparent fill, ink text, a 2px ink-tinted hairline ring (`box-shadow 0 0 0 2px rgba(35,28,51,0.08)`), fully-pill radius. Used for "Learn more" beside a primary button.

**`button-on-color`** — Button placed inside a saturated pastel band (mint, sky, canary). Stays blurple `#5522fa` with white text for the primary action; secondary inverts to white fill with ink text. The dark-ink text on the surrounding band stays unchanged.

All buttons are pill-shaped (9999px). HEY does not ship rectangular or lightly-rounded buttons — the radically-round pill is universal.

### Cards

**`card`** — Warm-paper panel. Paper `#f9f7f5` or stone `#edeae6` fill, deep-ink text, **18px radius**, optional 2px ink-tinted hairline ring. Padding ~32px. Used for feature groupings and content blocks. Cards inside a colored band may take the band's own pastel as their fill to layer tonally.

**`card-floating`** — Screenshot / video / product-shot card. White fill, larger radius (~28px), and the signature **multi-layer ink shadow stack** (`--box-shadow-card` / `--box-shadow-video`) for a soft paper-cutout float. This is where HEY spends its elevation budget.

**`pull-quote`** — Testimonial card. Pastel-band or paper fill, 18px radius, quote set in 28px / 700 Really Sans Large ink, attribution beneath in caption grey with a small avatar. Often dropped directly onto a colored section band.

### Badges, Tags, Pills

**`badge-pill`** — Pastel chip. Any of the brights (mint, canary, lavender, peach) as fill with deep-ink text at 14px / 700, fully-pill radius, ~4×12px padding. Used for "New", category labels, and feature tags. Because the band backgrounds are already colorful, badges often pick a *contrasting* bright from the box.

**`badge-brand`** — Blurple `#5522fa` fill, white text, pill radius — reserved for the loudest "do this" micro-label.

### Inputs / Forms

**`text-input`** — White fill, deep-ink text, **12px radius** (gentler than buttons but still soft), ~12×16px padding, a 2px ink-tinted hairline ring at rest. Placeholder in grey `#736c83`. On focus the ring thickens to a solid ink (`#231c33`) 2px outline — the focus state is ink, matching the type color, not blurple.

**`form-field`** — Label above input in 14px / 700 Moniker ink, helper text beneath in 13px caption grey. Generous 16–24px vertical rhythm between fields — forms breathe like the rest of the page.

### Navigation

**`top-nav`** — Floating warm-white bar, ~72px tall, with the multi-layer nav shadow (`--box-shadow-nav`) lifting it off the page. Wordmark flush left in heavy Really Sans Large ink, nav links centered/right in Moniker ink (no underline at rest), and a stone "Sign in" pill plus a blurple "Try HEY" pill flush right. The nav is one of the few chrome elements that gets a real shadow.

**`nav-link`** — Deep-ink `#231c33`, no underline at rest; on hover the link picks up the blurple `#5522fa` color or an underline. Active/current routes to blurple.

**`footer`** — Warm paper or stone band, multi-column link lists in Moniker ink, blurple inline links, set in the same big conversational type as the body — the footer is not shrunk to fine print.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**, expressed throughout in `em` on the live site (`--space-medium: 1em`, `--space-large: 2em`, `--space-x-large: 3em`, up to `--space-xxxx-large: 6em`).
- Scale: `0 · 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`
- Section padding (vertical): generous — 96–128px on major colored bands so each pastel section reads as its own poster.
- Card internal padding: ~32px on content cards, tightening to 24px on dense nested panels.
- Inter-element rhythm scales with the large type — because the body is set big, the gaps are big too.

### Grid & Container

- Max content width: ~1200px inner grid.
- Prose width: ~680px for long-form reading columns, narrower than the page gutter so reading lines stay comfortable despite the large body size.
- Colored bands run **full-bleed edge to edge**; the content inside respects the 1200px inner grid.
- Feature grids: 2-up or 3-up at desktop, collapsing to 1-up on mobile — never denser than 3 columns, because the large type and colorful blocks need room.

### Whitespace Philosophy

The page is a stack of full-bleed colored "posters." Each section claims a saturated pastel background and a healthy 96–128px of vertical breathing room. Between sections the color simply changes — there are no gradient transitions between bands, just a hard color swap (mint section, then sky section). The warm-white canvas appears between colored bands and in content-dense zones; it is the rest-state the eye returns to. Whitespace is generous but *loud* — empty space is often colored, not white.

### Section Cadence

A typical HEY page runs as a sequence of colored posters:

1. White or pastel hero (74px / 900 headline, big Moniker deck, blurple + stone pills)
2. Mint `#b3f4e0` feature band (dark ink on mint, illustration or screenshot)
3. White breather with a floating screenshot card (multi-layer shadow)
4. Sky `#b6dbff` or canary `#fff5ca` feature band
5. Peach `#ffe5da` testimonial / pull-quote band
6. Blurple→cobalt gradient CTA close ("Try HEY", white text on the gradient)

The rhythm device is **color rotation**, not light/dark alternation. Each scroll reveals a new bright, and the dark-ink type stays constant across all of them.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 4px | Inline tags, fine inset chips |
| Standard | 8px | Small controls, dense UI elements |
| Comfortable | 12px | Text inputs, form fields |
| Relaxed | 18px | Content cards, panels |
| Large | 28px | Floating screenshot / video cards, large feature shells |
| Pill | 9999px | All buttons, badges, chips — the universal HEY shape |

The defining rule: **buttons and badges are always fully-pill, content surfaces round generously (12–28px), and nothing has a sharp corner.** The sampled "Sign in" button at radius 46px confirms the pill bias — at button height, 46px is effectively a full pill. Where Superhuman reserves the pill for one nav chip, HEY pills *everything* interactive. The radically rounded geometry is core to the friendly, un-corporate feel — there is no rectangular hard-edge element on the page.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Canvas, colored bands, most content cards (the page chrome is flat) |
| 1 — Hairline | `0 0 0 2px rgba(35,28,51,0.08)` ink ring | Inputs, ghost buttons, quiet card edges |
| 2 — Nav float | multi-layer `--box-shadow-nav` (3+ stacked ink layers) | Floating top navigation bar |
| 3 — Card float | 6-layer `--box-shadow-card` stack | Screenshot cards, product-shot panels |
| 4 — Video float | 5-layer `--box-shadow-video` stack, deepest spread | Hero video player, large media |
| 5 — Play hover | `--box-shadow-play-hover` (3 layers, lifted) | Play-button hover state on video |

### Shadow Philosophy

HEY's depth is **theatrical and selective**. Shadows are not subtle ambient hints — they are deliberately constructed multi-layer stacks (the live `--box-shadow-card` stacks *six* layers of `rgba(35,28,51,…)`) that produce a soft, paper-cutout float, as if the screenshot were lifted off the page on a cushion of air. Crucially, every shadow is tinted toward the **purple-ink** (`rgba(35,28,51,…)`), never pure black and never blue, so the cast picks up the brand's warm temperature.

The philosophy is the inverse of "everything floats slightly": the chrome (sections, cards, buttons) stays flat, and elevation is *spent* on the few hero moments — the video player, the product screenshot, the floating nav. Color does the section-level hierarchy; shadow does the "look at this one thing" hierarchy.

## 8. Interaction & Motion

### Easing

- **Standard**: `cubic-bezier(0.37, 1, 0.74, 1)` — the live `--transition` curve. A gentle, slightly-overshooting ease that gives hover and reveal a soft, friendly bounce-into-place rather than a clinical snap.
- **Slow**: same curve at the `--transition-slow` 0.3s duration for larger reveals and band transitions.

### Durations

| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 150ms | Button hover color/lift, link color swap, focus-ring fade (`--transition` 0.15s) |
| Standard | 300ms | Card hover lift, larger reveals (`--transition-slow` 0.3s) |
| Slow | 450ms | Section entrance reveals, scroll-triggered content fades |

### Per-Component Recipes

- **Primary button hover**: blurple `#5522fa` deepens / lifts slightly with the soft `cubic-bezier(0.37, 1, 0.74, 1)` overshoot over 150ms. May add a subtle shadow lift. No harsh scale.
- **Stone button hover**: stone `#edeae6` darkens a step toward `#231c33` ink-tint; lift identical to primary.
- **Card / screenshot hover**: the multi-layer shadow stack deepens and the card lifts a few px over 300ms — the paper-cutout floats higher.
- **Play button hover**: switches from `--box-shadow-play` to the deeper `--box-shadow-play-hover` stack — the play affordance lifts toward the viewer.
- **Link hover**: ink → blurple `#5522fa` color swap (or underline appears) over 150ms.
- **Section reveal**: colored bands and their content fade-and-rise into place on scroll over 450ms with the soft easing — a gentle, cheerful entrance.

### Page Transitions

Navigation between pages is a simple body cross-fade; the floating nav stays put. Scroll-anchored jumps use smooth-scroll with the standard soft easing. The motion language is friendly and slightly springy — matching the playful visual register — never clinical or instant.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. All lifts, scroll-reveals, and the springy overshoot collapse to opacity-only fades or are removed entirely. Hover states fall back to instant color swaps with no transform. Shadow-lift hovers become static.

## 9. Accessibility & A11y

### Contrast Pairs

Because the single ink color `#231c33` is extremely dark, it clears AAA against the white canvas *and* against every saturated pastel band — which is precisely why HEY can run dark ink on a dozen different colored backgrounds without ever changing text color.

| Pair | Ratio | Level |
|------|-------|-------|
| #231c33 ink on #ffffff canvas | 16.3 | AAA |
| #231c33 ink on #edeae6 stone | 13.6 | AAA |
| #231c33 ink on #f9f7f5 paper | 15.3 | AAA |
| #231c33 ink on #b3f4e0 mint | 13.2 | AAA |
| #231c33 ink on #fff5ca canary | 14.9 | AAA |
| #231c33 ink on #ffe5da peach | 13.6 | AAA |
| #231c33 ink on #b6dbff sky | 11.3 | AAA |
| #231c33 ink on #d5d2ff lavender | 11.3 | AAA |
| #231c33 ink on #f5d652 yellow | 11.4 | AAA |
| #ffffff on #5522fa blurple | 7.0 | AA / AAA large |
| #5522fa blurple link on #ffffff | 7.0 | AA / AAA large |
| #736c83 grey on #ffffff | 5.0 | AA body |

Note: white text on the bright warm accents (orange `#f87917` ≈ 2.7, coral `#f95c5c` ≈ 3.1) **fails** — which is why HEY always sets *dark ink* on warm pastels, never white. White text is reserved for blurple, cobalt, and the deep gradient washes.

### Focus Indicators

Focus is expressed in **ink**, matching the type color. The resting hairline ring (`box-shadow 0 0 0 2px rgba(35,28,51,0.08)`) thickens to a solid `2px #231c33` outline on `:focus-visible`. Keyboard focus is visible against every pastel band because the dark ink ring always contrasts. Mouse interaction suppresses the ring via `:focus-visible`.

### ARIA Patterns

- **Top nav**: `<nav>` landmark with `aria-label="Primary"`. The "Sign in" / "Try HEY" pills are `<a>` links (they route, not modal).
- **Pricing toggle** (monthly/annual): `role="radiogroup"` with `aria-checked` radios.
- **FAQ accordions**: `<button aria-expanded>` toggling `<region>` panels; HEY's marketing leans on expandable Q&A.
- **Video player**: play control is a real `<button>` with `aria-label`; the floating shadow is decorative.

### Keyboard Navigation

- Tab order follows source: wordmark → nav links → Sign in → Try HEY → page content.
- All pill buttons and links are reachable and operable with Enter/Space.
- Accordions toggle with Enter/Space and announce expanded state.
- Skip-to-content link recommended given the tall colored-band layout.

### Screen Reader Hints

The decorative colored bands carry no semantic meaning and should not be announced — they are background only. Illustrations get descriptive `alt` (HEY's are personality-rich, so the alt text should match the playful tone). Because color is heavily used for *mood* rather than *meaning*, no information is ever conveyed by color alone — labels and text always carry the meaning.

### Reduced Motion

All scroll-reveals, hover lifts, and the springy easing degrade to opacity-only fades or static states under `prefers-reduced-motion: reduce`.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Nav collapses to wordmark + menu; hero headline drops 74 → ~40px; bands stack 1-up; body type scales down via `clamp()` |
| Tablet | 640–1024px | Inline nav links return; hero ~56px; feature bands 2-up; pull-quotes single-column |
| Desktop | 1024–1280px | Full nav inline; hero at 74px; feature bands 2–3-up; floating screenshots at full scale |
| Wide | >1280px | Content caps at 1200px; full-bleed colored bands extend to the viewport edges, gutters absorb the rest |

The live hero font size uses `clamp(1.375rem, 2.225vw, 2rem)` on body — type fluidly scales between breakpoints rather than stepping, so the conversational large-body feel holds across widths.

### Touch Targets

- Pill buttons: minimum 44px height with generous 28px horizontal padding — easily over the WCAG target.
- Nav pills: 44px effective tap height.
- Inline links: large body size (18–28px) gives generous tap rows.

### Collapsing Strategy

- Nav links collapse into a menu sheet below 640px; the two pills may remain or move into the sheet.
- Full-bleed colored bands keep their backgrounds at all widths; only inner padding tightens (128px → 48px vertical on mobile).
- Multi-column feature grids reduce columns (3 → 2 → 1) rather than reflowing — color blocks never shrink below readable width.
- Floating screenshot cards downscale proportionally and may drop the heaviest shadow layers on small screens.

### Image Behavior

Product screenshots and illustrations carry intrinsic aspect ratios and downscale proportionally inside their floating cards. The pastel band backgrounds are solid CSS color (or CSS gradients), so they render crisp at any resolution with no asset loading.

### Container Queries

Used sparingly where present; the primary responsive mechanism is the fluid `clamp()` type scale plus column-count reduction at the standard breakpoints.

## 11. Content & Voice

### Tone

Plain-spoken, opinionated, warm, and proudly anti-corporate — this is 37signals' house voice. HEY talks like a person with a strong point of view, not a marketing department. Headlines make claims and take stances ("Email sucked for years, not anymore"); copy is direct, occasionally funny, never hedged. The voice trusts the reader and isn't afraid to be a little contrarian.

### Microcopy Patterns

- **Button verbs**: "Try HEY", "Sign in", "See the pricing", "Read more" — concrete, casual, outcome-named. Never "Submit" or "Click here".
- **Error recipe**: plain-language `[what happened] + [what to do]`, in the same conversational register as the rest of the copy — no robotic error codes.
- **Success confirmations**: short and human — celebratory without being saccharine.
- **Field labels**: single words in heavy Moniker; the generous spacing makes purpose obvious.

### Empty States

Empty states are an opportunity for personality, not an apology. They name the next action in plain language and often carry a touch of the brand's wit. The tone stays encouraging and direct — "Nothing here yet. Want to add the first one?" over a sterile "No items found."

### CTA Verb Conventions

- Primary action: **"Try HEY"** / **"Try HEY for free"** (hero, nav)
- Secondary: **"Sign in"** (stone pill), **"See the pricing"**
- Tertiary: **"Read more"**, **"Learn how"**
- Avoided: "Submit", "Click here", "Buy now", corporate "Request a demo" — HEY frames it as *trying* the product, not transacting.

## 12. Dark Mode & Theming

**Light-only marketing surface.** The HEY app itself (email + calendar) ships both light and dark themes, but the public marketing site is warm-white only. HEY gets its visual variety not from a dark mode but from the **rotation of saturated pastel bands** — mint, sky, canary, peach, lavender — so each section already feels distinct without a theme swap.

The brand position is the opposite of a developer tool: a dark canvas would read as technical and serious, which is exactly the register HEY is rebelling against. The warm-white-plus-crayon-box approach signals friendly, human, and accessible — the personality is in the color rotation, not in a light/dark toggle.

When a section needs "dark" punctuation, HEY uses the **blurple→cobalt gradient** (`linear-gradient(135deg, #5522fa, #0074e4)`) with white text — a saturated, energetic dark moment rather than a neutral charcoal. These are scoped to individual CTA bands, never page-wide.

## 13. Lineage & Influences

HEY's visual lineage runs straight through **37signals / Basecamp's design DNA** — the same house that built Ruby on Rails and a long line of opinionated, anti-enterprise software. The plain-spoken heavy-type headlines, the refusal to look like enterprise SaaS, and the "we have opinions and you'll like them" register are pure 37signals. Where most of its category chases a cool, minimal, single-accent premium look (Linear, Superhuman, Stripe), HEY deliberately runs the other way: maximal color, big friendly type, and a poster-like layout that feels closer to editorial illustration than to a dashboard.

The deeper lineage is **mid-century poster and broadside design** — full-bleed flat color fields, heavy condensed-feeling display type, and bold simple geometry, updated with a soft pastel palette and radically rounded pills. The single-ink-on-many-colors discipline echoes screen-printing constraints, where one ink color is reused across multiple colored stocks. The springy, slightly-overshooting motion and the universally pill-shaped buttons borrow from a friendlier, more consumer-app tradition than the productivity tools HEY competes with. What HEY rejects is the entire premium-minimal playbook: one guarded accent, restrained neutrals, dark canvases, and corporate gravitas. It picks color, warmth, and personality over polish-as-restraint.

**Influences:**
- 37signals — the parent company and design philosophy; opinionated, anti-enterprise, plain-spoken, [37signals.com](https://37signals.com)
- Basecamp — sibling product with the same heavy-type, color-forward, personality-first marketing register, [basecamp.com](https://basecamp.com)
- Once / Campfire — 37signals' "buy once, run forever" line sharing the loud, contrarian visual voice, [once.com](https://once.com)
- Stripe — the in-house-typeface-as-brand-signature idea, inverted: HEY uses heavy display where Stripe uses refined neutral, [stripe.com](https://stripe.com)
- Linear — the foil HEY reacts against; the cool single-accent minimal SaaS look HEY deliberately rejects, [linear.app](https://linear.app)

## 14. Do's and Don'ts

**Do**
- Keep the canvas warm-white (`#ffffff`) and let saturated pastel bands carry the variety
- Use exactly one text color everywhere: deep purple-ink `#231c33` — size and weight make the hierarchy
- Set the hero in Really Sans Large at the heavy **900 weight**, ~74px — the thick stroke is the brand
- Set body in Moniker, large (18–28px) and conversational — let the copy sound spoken
- Run dark ink on every colored band; the ink clears AAA on all of them
- Pill everything interactive — buttons, badges, chips all at 9999px radius
- Use blurple `#5522fa` for inline links and the loudest primary action; stone `#edeae6` for quiet buttons
- Rotate the crayon-box (mint, sky, canary, peach, lavender) section to section as the rhythm device
- Tint shadows toward the purple-ink (`rgba(35,28,51,…)`), never pure black
- Reserve the multi-layer floating shadow for screenshots, video players, and the nav — keep chrome flat
- Pair brights into 135° diagonal gradients for hero washes (mint→sky, blurple→cobalt, peach→canary)
- Write microcopy with a point of view — casual, direct, a little contrarian

**Don't**
- Don't drop the hero below 900 weight — 700 reads as a generic site, the heaviness is non-negotiable
- Don't introduce a second text color or grey-down body copy; only true metadata uses `#736c83`
- Don't put white text on the warm accents (orange, coral) — they fail contrast; warm pastels take dark ink
- Don't use sharp or lightly-rounded corners on buttons — every interactive element is a full pill
- Don't go minimal or pick a single guarded accent — the multi-color rotation *is* the brand
- Don't add a dark canvas / dark mode to the marketing site — variety comes from pastel bands
- Don't use pure black (`#000`) or blue-tinted shadows — the warm purple-ink temperature is the brand
- Don't shrink the body to 16px corporate-SaaS size — the large conversational type is the voice
- Don't gradient-blend between section bands; swap color hard, poster-style
- Don't make the motion clinical — keep the soft `cubic-bezier(0.37, 1, 0.74, 1)` springy ease
- Don't write hedged, corporate microcopy or use "Submit" / "Click here" — HEY has opinions

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:        #ffffff
Paper:         #f9f7f5
Stone:         #edeae6   (quiet button bg)
Ink (text):    #231c33   (the only text color)
Grey (muted):  #736c83
Brand/Link:    #5522fa   (blurple)
Cobalt:        #0074e4
Yellow:        #f5d652
Canary:        #fff5ca
Orange:        #f87917
Coral:         #f95c5c
Peach:         #ffe5da
Mint:          #b3f4e0
Teal:          #5fddc5
Sky:           #b6dbff
Lavender:      #d5d2ff
```

### Example Component Prompts

- "Create a HEY-style hero on a mint band (#b3f4e0): a 74px Really Sans Large headline at 900 weight in deep purple-ink #231c33 with -0.02em tracking, then a 28px Moniker deck at 400 weight in the same ink, then two fully-pill buttons — a blurple #5522fa 'Try HEY' with white text, and a white-fill 'Sign in' beside it. Dark ink only; never white text on the mint."
- "Design a HEY feature card: warm-paper fill (#f9f7f5), 18px radius, a 2px ink hairline ring (box-shadow 0 0 0 2px rgba(35,28,51,0.08)), 32px padding. Inside: a 26px Really Sans Large 700 ink title, then 18px Moniker body at 1.5 line-height in #231c33, then one blurple #5522fa underlined inline link."
- "Build a HEY floating screenshot card: white fill, 28px radius, and a soft multi-layer ink shadow stack (0 0.2em 1.6em -0.8em rgba(35,28,51,0.2), 0 0.4em 2.4em -1.0em rgba(35,28,51,0.3), 0 0.8em 1.2em -1.6em rgba(35,28,51,0.5)) so it floats like a paper cutout. Place it on a warm-white canvas between two colored bands."
- "Create the HEY nav: floating warm-white bar, ~72px tall, with a soft multi-layer ink shadow lifting it. Wordmark left in heavy Really Sans Large ink #231c33, links centered in 18px Moniker ink with no underline at rest, then a stone #edeae6 'Sign in' pill and a blurple #5522fa 'Try HEY' pill — both fully rounded (9999px) — flush right."
- "Build a HEY CTA close band: full-bleed 135° gradient from blurple #5522fa to cobalt #0074e4, white 56px Really Sans Large 900 headline, white 20px Moniker deck, and a white-fill fully-pill button with ink #231c33 text labelled 'Try HEY for free'."
- "Design a HEY pricing card on a canary band (#fff5ca): white card, 18px radius, ink #231c33 title and price in Really Sans Large, feature list in 18px Moniker ink with mint #b3f4e0 check chips, and a blurple #5522fa pill CTA at the bottom."

### Iteration Guide

1. **Warm-white canvas, colored bands for variety.** If the page feels flat, add a saturated pastel section band (mint, sky, canary) — don't reach for a second text color or a grey.
2. **One ink, always.** All type is `#231c33`. If you're tempted to grey-down a subheading, increase size/weight contrast instead.
3. **Push display to 900.** If the hero looks too tame, it's almost always the weight — Really Sans Large at 900 is the floor for hero copy, not the ceiling.
4. **Pill everything.** Any rectangular or 8px-rounded button reads as off-brand. Buttons and badges go fully round (9999px).
5. **Dark ink on warm, white on blurple.** Never invert this — warm accents (orange, coral, yellow) fail with white text; only blurple/cobalt/gradient bands take white.
6. **Spend shadow on screenshots, not chrome.** If everything has a shadow, remove them all except the floating product shots, video player, and nav.
7. **Big, chatty body.** If the copy feels corporate, scale the body up (18–28px Moniker) and rewrite with a point of view — the size and voice are linked.
8. **Rotate the crayon box.** Don't repeat the same band color twice in a row; cycle mint → sky → canary → peach → lavender for the poster-stack rhythm.

---

*Theme-toggle audit: score=0, signals=[none]*
