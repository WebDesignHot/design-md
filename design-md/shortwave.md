---
name: Shortwave
tagline: A dark AI-email canvas with Poppins display weight and one electric blue — Inbox rebuilt by the people who built it.
updated_at: 2026-05-28T23:12:53.511Z
published_at: 2026-05-28T23:12:53.511Z
author: webdesignhot
source_url: https://www.shortwave.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [saas, ai]
tags: [dark, structured, sans, email, ai]
preview_swatch: ['#0c0e16', '#356aff', '#7d9bff']
description: 'Shortwave is an AI email client built by the team behind Google Inbox, and its marketing site wears that lineage as a dark, product-forward canvas (`#0c0e16`) carrying white type (`#ffffff`) and a single electric brand blue (`#356aff`). Display copy is set in Poppins — a geometric sans pinned at 64px for the hero — while the body chain leads with Shortwave''s loaded UI sans (the raw probe captured the unloaded `Times` fallback, never the rendered face). One voltage, one CTA shape: the "Get started for free" button lands in `#356aff` at an 8px radius. The register is modern, AI-forward, and productivity-minded — closer to a developer-grade tool than a consumer mail app, all confidence and contrast against near-black.'

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: brand-soft
  muted: text-muted
  border: border
  ring: brand
colors:
  bg: '#0c0e16'                  # deep near-black navy canvas — the dark hero floor
  bg-elev: '#11141d'            # one step up from canvas for grouped sections
  surface: '#161922'            # card surface on the dark canvas
  surface-elev: '#1d212c'       # nested / hovered card surface
  text: '#ffffff'               # primary copy — white on the dark hero (authoritative)
  text-strong: '#ffffff'        # display copy — pure white at peak weight
  text-muted: '#9aa3b8'         # captions, metadata, secondary deck — cool slate
  text-soft: '#c4cad8'          # secondary running-text, slightly brighter than muted
  brand: '#356aff'              # primary CTA blue (rgb 53,106,255) — the singular voltage
  brand-hover: '#2a59e6'        # pressed/hover state — darker, denser blue
  brand-soft: '#7d9bff'         # lighter blue for accent text / links on dark
  brand-tint: 'rgba(53,106,255,0.12)'  # 12% blue wash for soft chips / focus halos
  on-brand: '#ffffff'           # white text on the blue CTA
  border: 'rgba(255,255,255,0.08)'      # 8% white hairline — the default divider on dark
  border-soft: 'rgba(255,255,255,0.04)' # 4% white for very subtle splits
  border-strong: 'rgba(255,255,255,0.16)' # 16% white for focused / emphasized edges
  shadow-ambient: 'rgba(0,0,0,0.32)'   # soft cast on dark surfaces
  shadow-elev: 'rgba(0,0,0,0.48)'      # deeper lift for popovers / modals
  shadow-brand: 'rgba(53,106,255,0.30)' # blue-tinted glow under the CTA on hover
  scrim: 'rgba(6,7,12,0.72)'    # modal backdrop — near-black wash
  success: '#3ecf8e'            # confirmation green, cool not neon
  success-soft: 'rgba(62,207,142,0.14)' # success surface tint on dark
  warning: '#f0b429'            # advisory amber on dark
  warning-soft: 'rgba(240,180,41,0.14)'
  danger: '#ff5c5c'             # form-error red, legible on near-black
  danger-soft: 'rgba(255,92,92,0.14)'
  info: '#356aff'               # informational accent reuses the brand blue
  info-soft: 'rgba(53,106,255,0.14)'

typography:
  display:
    family: 'Poppins, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
    weights: [500, 600, 700]
  body:
    family: '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, "Liberation Mono", monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 64, weight: 700, lineHeight: 1.0,  tracking: '-0.03em',  family: display }
    display-lg:      { size: 56, weight: 700, lineHeight: 1.05, tracking: '-0.02em',  family: display }
    h1:              { size: 40, weight: 700, lineHeight: 1.1,  tracking: '-0.018em', family: display }
    h2:              { size: 32, weight: 600, lineHeight: 1.2,  tracking: '-0.012em', family: display }
    h3:              { size: 24, weight: 600, lineHeight: 1.25, tracking: '-0.005em', family: display }
    h4:              { size: 20, weight: 600, lineHeight: 1.3,  tracking: '0',        family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    label:           { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0',        family: body }
    overline:        { size: 12, weight: 600, lineHeight: 1.4,  tracking: '0.08em',   family: body, transform: uppercase }
    caption:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.02em',   family: body }
    button:          { size: 15, weight: 600, lineHeight: 1.2,  tracking: '0',        family: body }
    code:            { size: 14, weight: 400, lineHeight: 1.55, tracking: '0',        family: mono }

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

components:
  button-primary:
    bg: '#356aff'
    color: '#ffffff'
    radius: 8
    padding: '10px 16px'
    font: button
    use: '"Get started for free" — every primary conversion action.'
  button-primary-hover:
    bg: '#2a59e6'
    color: '#ffffff'
    shadow: 'rgba(53,106,255,0.30) 0 8px 24px -6px'
    use: 'Pointer hover — denser blue, a soft blue glow lifts beneath.'
  button-ghost:
    bg: 'transparent'
    color: '#ffffff'
    border: '1px solid rgba(255,255,255,0.16)'
    radius: 8
    padding: '10px 16px'
    use: 'Secondary "Watch demo" / "Sign in" on the dark canvas.'
  button-soft:
    bg: 'rgba(53,106,255,0.12)'
    color: '#7d9bff'
    radius: 8
    padding: '10px 16px'
    use: 'Tertiary action — tinted blue wash, blue label, no border.'
  card:
    bg: '#161922'
    color: '#ffffff'
    border: '1px solid rgba(255,255,255,0.08)'
    radius: 12
    padding: '24px'
    use: 'Feature card on dark — surface lift plus hairline, light shadow.'
  input:
    bg: '#11141d'
    color: '#ffffff'
    border: '1px solid rgba(255,255,255,0.16)'
    radius: 8
    padding: '8px 12px'
    focus: 'border → #356aff + 3px blue tint halo (rgba(53,106,255,0.12))'
    use: 'Single-line form field on the dark hero.'
  badge-pill:
    bg: 'rgba(53,106,255,0.12)'
    color: '#7d9bff'
    radius: 9999
    padding: '4px 10px'
    font: caption
    use: '"New" / "AI" announcement chip — tinted blue on dark.'
  nav-link:
    color: '#ffffff'
    use: 'Top-nav item — white at rest, brand blue on hover/active.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  button-hover: 'background 240ms standard + blue glow 240ms — no transform'
  card-hover: 'surface lightens #161922 → #1d212c, hairline 8% → 16% over 240ms'
  reduced-motion: 'respects prefers-reduced-motion: reduce — transitions become opacity-only fades'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'rgba(0,0,0,0.32) 0 1px 2px 0'
  card: 'rgba(0,0,0,0.32) 0 4px 16px -4px'
  elevated: 'rgba(0,0,0,0.48) 0 16px 40px -12px, rgba(0,0,0,0.32) 0 4px 12px -4px'
  brand-glow: 'rgba(53,106,255,0.30) 0 8px 24px -6px'
  ring: '0 0 0 3px rgba(53,106,255,0.12)'

accessibility:
  contrast-text-on-bg: 19.27        # #ffffff on #0c0e16 — AAA
  contrast-text-on-surface: 17.55   # #ffffff on #161922 — AAA
  contrast-on-brand: 4.51           # #ffffff on #356aff — AA body / AAA large
  contrast-brand-on-bg: 4.27        # #356aff on #0c0e16 — AA large / non-text UI
  contrast-brand-soft-on-bg: 7.34   # #7d9bff on #0c0e16 — AAA large, AA body
  contrast-muted-on-bg: 7.62        # #9aa3b8 on #0c0e16 — AAA large, AA body
  focus-ring: '1.5px solid #356aff + 3px rgba(53,106,255,0.12) halo on dark surfaces'
  reduced-motion-honored: true
  touch-target-min: 44

dark-mode: default   # The marketing site IS dark — near-black navy canvas with white type. There is no separate light marketing variant in the captured brand state.
---

## 1. Visual Theme & Atmosphere

Shortwave's marketing site opens on a **dark near-black navy canvas** (`#0c0e16`) carrying **white type** (`#ffffff`) and a single **electric brand blue** (`#356aff`). It is the visual posture of a tool that takes itself seriously: built by the team behind Google Inbox, Shortwave positions email not as a consumer toy but as a workspace, and the dark canvas signals "this is software you live inside," not a brochure you skim. The page reads like an app's own dark theme escaped onto the web — the marketing surface and the product surface share one temperature.

The typographic split is the second signal. Display copy is set in **Poppins** — a geometric, near-circular sans pinned at **64px / 700** for the hero — while body copy runs in Shortwave's loaded UI sans (the raw audit captured `Times`, but `Times` is the *unloaded fallback*; the rendered face is the product's own neutral grotesque, and the body chain leads with an Inter-class sans). Poppins gives headlines a friendly, almost rounded confidence that softens the dark canvas; the neutral body keeps long-form copy legible and machine-precise. The contrast between rounded-geometric display and neutral-grotesque body is deliberate — warmth up top, precision in the running text.

There is exactly **one voltage** on the page. Where most AI products reach for purple-pink gradients and neon glows, Shortwave commits to a single saturated blue. `#356aff` is the only chromatic event: it fills the "Get started for free" CTA at an **8px radius**, tints links, and underlines the active nav state. Everything else is white, slate, or near-black. The restraint reads as confidence — the product doesn't need to shout in five colours.

The atmosphere is **product-forward minimalism on dark glass**. Surfaces lift from the canvas through tonal layering (`#0c0e16` → `#11141d` → `#161922` → `#1d212c`) and 8% white hairlines rather than heavy drop-shadow stacks. Shadows exist but stay soft and near-black — they read as ambient depth, not Material-style elevation drama. The whole composition feels engineered: a dark IDE-adjacent register where the blue is the cursor and the white is the code.

The register throughout is **modern, AI-forward, and productivity-minded**. Headlines lead with capability and automation ("Automate your email with AI") rather than feelings. The page trusts the reader to be a power user — someone who knows what an inbox-zero workflow costs and wants the machine to carry it.

**Key Characteristics:**
- Dark near-black navy canvas (`#0c0e16`) — the marketing site is natively dark, not light-with-a-dark-band
- White type as the dominant ink (`#ffffff`) — pure white at every level on the dark floor
- One electric brand blue (`#356aff`) — the singular chromatic voltage, nothing competes with it
- Poppins for display (geometric, rounded, friendly) at up to 64px / 700 hero
- Neutral grotesque body (Inter-class) — `Times` in the raw probe is the unloaded fallback, never the rendered face
- Tonal surface layering on dark glass instead of shadow-stack elevation
- 8% white hairlines (`rgba(255,255,255,0.08)`) as the default divider — never solid grey
- CTA lands at 8px radius — rectangular-soft, never fully-pill
- Soft near-black ambient shadows; a blue-tinted glow reserved for the primary CTA hover
- AI-forward, power-user voice — capability-led, automation-minded, never giddy

## 2. Color Palette & Roles

### Canvas / Primary
- **Canvas** (`#0c0e16`): the dark near-black navy floor for every page. The marketing site is natively dark — there is no light variant in the captured brand.
- **Canvas Elev** (`#11141d`): one tonal step up from the floor — grouped section backings, input fills.
- **White** (`#ffffff`): the dominant text colour — display headlines, body copy, primary nav links all sit in pure white.

### Brand
- **Brand Blue** (`#356aff`): the singular voltage. Primary CTA fill ("Get started for free"), active-state underline, focus ring, info accent. RGB 53, 106, 255.
- **Brand Hover** (`#2a59e6`): pressed/hover state on the primary blue — denser, slightly darker.
- **Brand Soft** (`#7d9bff`): a lighter blue for inline link text and accent labels on the dark canvas, where full-saturation `#356aff` sits at the edge of body contrast.
- **Brand Tint** (`rgba(53,106,255,0.12)`): 12% blue wash for soft chips, badge fills, and the focus halo.

### Text / Neutral Scale
- **White** (`#ffffff`) — display + body, the dominant ink
- **Text Soft** (`#c4cad8`) — secondary running-text, slightly dimmed from pure white
- **Text Muted** (`#9aa3b8`) — captions, metadata, timestamps, secondary deck (cool slate)

### Surface
- **Surface** (`#161922`): the default card surface on the dark canvas.
- **Surface Elev** (`#1d212c`): nested or hovered card surface — one tonal step brighter.

### Interactive
- **Link** (`#7d9bff`): inline body links — lighter blue for legibility on near-black.
- **Link Hover** (`#356aff`): hover brightens toward the full brand voltage; underline thickens.
- **CTA** (`#356aff` fill, `#ffffff` text): primary conversion button.
- **Disabled** (`#9aa3b8` text on `rgba(255,255,255,0.04)`): drained slate on a faint fill.

### Borders
- **Hairline** (`rgba(255,255,255,0.08)`): the default 8% white divider — never solid grey.
- **Hairline Soft** (`rgba(255,255,255,0.04)`): 4% white for very subtle splits.
- **Hairline Strong** (`rgba(255,255,255,0.16)`): 16% white for ghost-button edges and focused inputs.

### Shadow Colors
Shortwave's shadows stay **near-black and soft** on the dark canvas — they read as ambient depth rather than Material elevation. The one chromatic shadow is the **blue-tinted glow** beneath the primary CTA on hover (`rgba(53,106,255,0.30)`), tying the only colour event on the page to the only lift event.

- `rgba(0,0,0,0.32) 0 1px 2px 0` — ambient
- `rgba(0,0,0,0.32) 0 4px 16px -4px` — card
- `rgba(0,0,0,0.48) 0 16px 40px -12px` — elevated popover / modal
- `rgba(53,106,255,0.30) 0 8px 24px -6px` — primary CTA hover glow

### Semantic
- **Success** (`#3ecf8e` on `rgba(62,207,142,0.14)`) — confirmation; cool mint-green, never neon
- **Warning** (`#f0b429` on `rgba(240,180,41,0.14)`) — advisory amber, legible on near-black
- **Danger** (`#ff5c5c` on `rgba(255,92,92,0.14)`) — form-error red, bright enough to read on dark
- **Info** (`#356aff` on `rgba(53,106,255,0.14)`) — informational; reuses the brand blue

## 3. Typography Rules

### Font Family

**Display**: `Poppins, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`. Poppins is a geometric sans with near-circular bowls (`o`, `e`, `a`) and even stroke weight — it gives the dark hero a rounded, approachable confidence. Used at weights 500–700, peaking at 700 for the 64px hero.

**Body**: `"Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`. The raw probe captured `Times` for body — **this is the unloaded fallback, not the rendered face**. The shipped UI sans is a neutral grotesque (Inter-class); the chain leads with Inter so substitutions land in the same metric family rather than reflowing to a serif. Body weights: 400 (copy), 500 (labels), 600 (emphasis).

**Mono**: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, "Liberation Mono", monospace` — used for keyboard shortcuts and the rare code/command callout in feature copy.

The page runs a **two-family system**: Poppins carries every display role (geometric warmth), the neutral grotesque carries every body and UI role (machine precision). The split is the typographic fingerprint — never set body in Poppins, never set the hero in the grotesque.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| display-hero | Poppins | 64 | 700 | 1.0 | -0.03em | Hero "Automate your email with AI" — peak moment |
| display-lg | Poppins | 56 | 700 | 1.05 | -0.02em | Section opener on major bands |
| h1 | Poppins | 40 | 700 | 1.1 | -0.018em | Page / feature-spread headline |
| h2 | Poppins | 32 | 600 | 1.2 | -0.012em | Feature block heading |
| h3 | Poppins | 24 | 600 | 1.25 | -0.005em | Sub-feature / card title |
| h4 | Inter | 20 | 600 | 1.3 | 0 | Inline emphasis title, footer column heads |
| body-lg | Inter | 18 | 400 | 1.55 | 0 | Hero deck — the line beneath the hero h1 |
| body | Inter | 16 | 400 | 1.55 | 0 | Default running text |
| body-sm | Inter | 14 | 400 | 1.5 | 0 | Card meta, captions in flow |
| label | Inter | 13 | 500 | 1.4 | 0 | Form labels, nav micro-labels |
| overline | Inter | 12 | 600 | 1.4 | 0.08em | Section eyebrow, uppercase |
| caption | Inter | 12 | 500 | 1.4 | 0.02em | Timestamps, helper text |
| button | Inter | 15 | 600 | 1.2 | 0 | CTA + nav button label |
| code | mono | 14 | 400 | 1.55 | 0 | Keyboard-shortcut / command callout |

### Principles

- **Two families, one job each.** Poppins owns display (rounded-geometric warmth); the neutral grotesque owns body and UI (machine precision). Never cross the two — body in Poppins reads soft and brochure-ish, the hero in grotesque loses its friendliness.
- **`Times` is a fallback ghost.** The raw probe sampled `Times` for body because the web font hadn't loaded. Never set body copy in a serif — the shipped face is a sans, and the chain leads with Inter so unloaded states fall back to a sans, not a serif.
- **Negative tracking only on display.** The 64px hero rides at `-0.03em`; mid displays at `-0.012em` to `-0.018em`; body and captions sit at zero. Geometric sans like Poppins need slightly tighter tracking at large sizes to avoid looking loose.
- **Tight leading at large sizes.** The hero sits at 1.0 line-height — Poppins compresses vertically at display sizes, the way an app's onboarding masthead does.
- **Generous body leading.** Body runs at 1.55 — lush by SaaS standards. The extra leading keeps long-form feature copy calm against the dark canvas.
- **Uppercase only on overlines.** Positive tracking (`0.08em`) is reserved for the 12px uppercase eyebrow; everything else is sentence case.
- **Inter is the production-safe substitute** for the body face — it shares the metrics the chain expects. For display, Poppins has no acceptable swap; falling back to a default geometric (Montserrat, Geist) changes the brand's rounded character.

## 4. Component Stylings

### Buttons

**`button-primary`** — The signature blue CTA. `#356aff` fill, white text at 15px / 600, **8px radius**, 10×16px padding. Used for "Get started for free" and every primary conversion. There is exactly one primary CTA per band.

**`button-primary-hover`** — Pointer hover. Background flips to the denser `#2a59e6`; a soft blue-tinted glow (`rgba(53,106,255,0.30) 0 8px 24px -6px`) lifts beneath. No transform, no scale.

**`button-ghost`** — Secondary action on the dark canvas. Transparent fill, white text, 1px 16%-white hairline border (`rgba(255,255,255,0.16)`), 8px radius. Used for "Watch demo" or "Sign in" beside the primary CTA.

**`button-soft`** — Tertiary action. A 12% blue wash fill (`rgba(53,106,255,0.12)`), brand-soft blue label (`#7d9bff`), no border, 8px radius. The tinted-blue surface telegraphs a blue-family action without the full saturation of the primary.

### Cards

**`card`** — Feature panel on the dark canvas. `#161922` surface, white text, **12px radius**, 1px 8%-white hairline (`rgba(255,255,255,0.08)`), 24px padding, soft near-black card shadow. The surface lift plus hairline is the elevation language — the shadow only deepens the read, it doesn't carry it.

**`card-hover`** — Surface lightens `#161922` → `#1d212c`; the hairline strengthens 8% → 16% white over 240ms. No translate.

**`feature-tile`** — Smaller nested tile inside a feature grid. `#11141d` fill, 4%-white hairline, 12px radius, 20px padding. Used where card-on-card stacking would lose contrast.

### Badges, Tags, Pills

**`badge-pill`** — Tinted-blue announcement chip. `rgba(53,106,255,0.12)` fill, `#7d9bff` text at 12px / 500, 9999px radius, 4×10px padding. Used for "New" or "AI" markers at the top of the hero. At most one per band.

**`category-tag`** — Slate rectangular tag with 8px radius inside feature cards to mark "Inbox", "Calendar", "AI Assistant". 12px / 600 uppercase overline with 0.08em tracking, `#9aa3b8` text.

### Inputs / Forms

**`input`** — `#11141d` fill, 1px 16%-white hairline (`rgba(255,255,255,0.16)`), **8px radius**, 8×12px padding, white text, muted placeholder (`#9aa3b8`). On focus the border turns brand blue (`#356aff`) and a soft 3px blue tint halo (`rgba(53,106,255,0.12)`) appears — a soft ring, not a hard outline.

**`email-input-hero`** — Inline email signup on the hero. Same fill and radius; the "Get started for free" CTA sits flush right as a combined affordance, no gap.

### Navigation

**`top-nav`** — Transparent over the dark canvas at the top of the page, 64px height, 1px 8%-white bottom hairline once scrolled. Wordmark flush left in white, nav links centred in white body, "Sign in" ghost button + blue "Get started for free" CTA flush right.

**`nav-link`** — White (`#ffffff`) at rest, no underline. On hover the link turns brand-soft blue (`#7d9bff`); the active page gets a 1.5px brand-blue underline.

### Tooltips & Toasts

**`tooltip`** — `#1d212c` fill, white text at 13px / 500, 8px radius, 8×12px padding, soft near-black shadow. Used on keyboard-shortcut callouts inside product screenshots.

**`toast`** — `#161922` fill, 12px radius, 8%-white hairline, white text, 16×20px padding. Semantic toasts carry a 2px left accent strip in the matching semantic colour (success mint, danger red).

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `0 · 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96`
- Section padding (vertical): 64–96px for major bands — generous, product-tour cadence
- Card internal padding: 24px on `card`; 20px on nested `feature-tile`
- Inter-card gutters: 24px between cards in a 3-up grid; 16px in dense 4-up grids

### Grid & Container

- Max content width: **1280px** on the inner grid with 24px gutters
- Prose width: **720px** for long-form feature body — narrower than the page gutter to keep reading flow tight
- Header height: **64px**
- Feature grid pattern: 3-up at desktop, 2-up at tablet, 1-up at mobile — never 4+ columns of prose

### Whitespace Philosophy

The dark canvas does the heavy lifting for breathing room — large fields of near-black around white type and blue accents read as calm and premium without needing extra padding. Sections get 64–96px of vertical room top and bottom. Because the page is uniformly dark, there are no light/dark band alternations to manage; rhythm comes from surface tonal shifts (`#0c0e16` floor → `#161922` card clusters) rather than full-band colour swaps.

### Section Cadence

A typical page runs:

1. Dark hero (64px Poppins white headline, 18px deck, blue CTA + ghost "Watch demo")
2. Product screenshot band (the app rendered on the dark canvas, often inside a browser/window chrome frame)
3. Feature stack (3-up cards on the dark floor — surface `#161922`, hairline, soft shadow)
4. AI-capability spread (alternating image/copy rows, blue accent labels)
5. Social-proof band (logos or testimonials, muted slate metadata)
6. Dark CTA close ("Get started for free" — full-bleed near-black, centred blue CTA)

The blue appears at most a handful of times per page — it's the conversion signal, not a decorative thread.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 2px | Inline tags, fine indicators (rare) |
| Small | 4px | Tight chips, nested controls |
| Standard | 8px | Buttons, inputs, ghost CTAs — the signature control shape |
| Comfortable | 12px | Cards, toasts, feature tiles |
| Featured | 16px | Hero shell, product-screenshot frame |
| Pill | 9999px | Announcement / badge chips only |

The system rounds every shape uniformly on all four corners — no compound radii. The single rule: **controls (buttons, inputs) at 8px, cards at 12px, hero shells at 16px, and the fully-pill radius is reserved for small announcement chips.** Buttons stay rectangular-soft at 8px rather than fully pill — it reads as software-grade and precise, not consumer-bubbly.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow, sits on canvas | Hero copy, section backings (~70% of surfaces) |
| 1 — Ambient | `rgba(0,0,0,0.32) 0 1px 2px 0` | Sticky nav at scroll, inputs |
| 2 — Card | `rgba(0,0,0,0.32) 0 4px 16px -4px` | Feature cards, screenshot frames |
| 3 — Elevated | `rgba(0,0,0,0.48) 0 16px 40px -12px, rgba(0,0,0,0.32) 0 4px 12px -4px` | Dropdowns, popovers, modals |
| 4 — Brand glow | `rgba(53,106,255,0.30) 0 8px 24px -6px` | Primary blue CTA on hover only |
| 5 — Modal | scrim `rgba(6,7,12,0.72)` + dialog with elevated shadow | Sign-in / waitlist modal |

### Shadow Philosophy

On a dark canvas, drop shadows can't do the same lifting work they do on white — a near-black shadow on near-black is nearly invisible. Shortwave therefore leans on **tonal surface layering plus hairlines** for most elevation (`#0c0e16` floor → `#161922` card → `#1d212c` hover), and uses soft near-black shadows only to add ambient separation under cards and popovers. The single chromatic lift is the **blue glow** under the CTA on hover — the only place colour and elevation combine. The product-screenshot frame gets the heaviest shadow, framing the app as the hero object.

## 8. Interaction & Motion

### Easing

- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — hover colour swaps, surface lightening, hairline transitions
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry, section reveals on scroll

### Durations

| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 150ms | Hairline tone swaps, focus-ring fades, link colour shifts |
| Standard | 240ms | Button hover, card surface lightening, nav underline |
| Slow | 320ms | Modal entry, screenshot reveal on scroll |

### Per-Component Recipes

- **Primary button hover**: background `#356aff` → `#2a59e6` over 240ms standard; blue glow (`rgba(53,106,255,0.30) 0 8px 24px -6px`) fades in over 240ms. **No transform, no scale.** Colour + glow only.
- **Ghost button hover**: hairline strengthens `rgba(255,255,255,0.16)` → `rgba(255,255,255,0.28)`, fill picks up a faint 4% white wash over 240ms.
- **Card hover**: surface lightens `#161922` → `#1d212c`, hairline 8% → 16% white over 240ms standard. No translate.
- **Link hover**: brand-soft blue `#7d9bff` brightens toward `#356aff` over 150ms; underline thickens 1 → 1.5px.
- **Input focus**: border turns `#356aff`, 3px blue tint halo (`rgba(53,106,255,0.12)`) expands from 0 over 150ms.
- **Modal enter**: scrim fades in over 240ms; dialog scales `0.96 → 1.0` and fades over 320ms emphasized.
- **Screenshot reveal**: product screenshots fade + rise 16px on first scroll into view over 320ms emphasized.

### Page Transitions

Between page navigations the body cross-fades over 320ms; the fixed top-nav stays static. Smooth-scroll anchored links use 500ms emphasized easing.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. All `translate`, `scale`, and scroll-reveal transforms suppress. The CTA hover loses its glow lift — hover becomes background-colour-only. Modal entry becomes an instant fade rather than scale + fade. Screenshot reveals appear without the 16px rise.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #ffffff white on #0c0e16 canvas | 19.27 | AAA |
| #ffffff white on #161922 surface | 17.55 | AAA |
| #ffffff on #356aff brand CTA | 4.51 | AA body / AAA large |
| #356aff brand on #0c0e16 canvas | 4.27 | AA large / non-text UI |
| #7d9bff brand-soft on #0c0e16 | 7.34 | AAA large / AA body |
| #9aa3b8 muted on #0c0e16 | 7.62 | AAA large / AA body |

### Focus Indicators

Focus ring is a **1.5px solid brand blue (`#356aff`)** border with a soft 3px blue tint halo (`rgba(53,106,255,0.12)`) on dark surfaces. The tinted halo gives the ring presence against near-black without the harsh look of a solid 3px outline. `:focus-visible` suppresses the ring on mouse interaction while preserving it on keyboard navigation. Note: full-saturation `#356aff` on `#0c0e16` lands at 4.27 — it clears AA for non-text UI components (3:1) and large text, so the blue is sound as a focus indicator and on large display copy; body-weight blue text uses the lighter `#7d9bff` (7.34) instead.

### ARIA Patterns

- **Top nav**: `<nav>` landmark with `aria-label="Primary"`. The "Get started for free" CTA is an `<a>` to the signup flow.
- **Hero signup**: `<form>` with `aria-label="Get started with Shortwave"`. The inline email input + CTA render as a paired `<input>` + `<button>` for screen readers even though they read as one affordance.
- **Feature tabs / segmented capability switcher**: `role="tablist"` with `role="tab"` children; `aria-selected` reflects the active capability panel.
- **Modal** (sign-in / waitlist): focus trap inside, Esc closes, click-outside closes, focus returns to the trigger. `role="dialog"` with `aria-labelledby` on the modal title.

### Keyboard Navigation

- Top nav: Tab moves logo → nav links → Sign in → Get started for free
- Hero signup: Tab focuses the input, then the CTA; Enter from the input submits
- Feature tablist: arrow keys move between tabs, Tab moves into the active panel
- Modal: Tab cycles interactive elements inside the dialog only

### Screen Reader Hints

Inline blue links use the lighter `#7d9bff` rather than the full `#356aff` precisely so body-size link text clears AA on the dark canvas. The full-voltage blue is reserved for the CTA fill (where white-on-blue carries the contrast at 4.51) and for large display accents. This keeps "blue means action" consistent while never letting an under-contrast blue land on body text.

### Reduced Motion

All transitions degrade to opacity-only when `prefers-reduced-motion: reduce` is set. The CTA glow lift suppresses (the colour change persists). Modal scale-in becomes a flat fade. Scroll-reveal screenshots appear without the rise.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Top nav collapses to logo + hamburger; hero h1 drops 64 → 36px; feature stacks 1-up; cards span full width with 16px page padding |
| Tablet | 640–1024px | Top nav keeps inline links; hero h1 settles at 48px; feature stacks 2-up |
| Desktop | 1024–1280px | Full top nav inline; hero h1 at 64px; feature stacks 3-up |
| Wide | >1280px | Content width caps at 1280px; gutters absorb the rest |

### Touch Targets

- Primary CTA: minimum 44×44px tap area
- Ghost / nav buttons: 40–44px height with 16px horizontal padding
- Email input field: 44px height
- Inline link tap-target: 44px row height even where text height is ~24px (line-height 1.55 × 16px adds spacing)

### Collapsing Strategy

- Top nav links collapse into a hamburger sheet below 640px; the sheet inherits the dark canvas
- Hero CTA + email input stack vertically on mobile — the inline-paired affordance becomes a stacked pair at full width
- 3-up feature grids drop to 2-up at tablet, 1-up at mobile — reduce columns, never reflow rows
- Product-screenshot frames scale proportionally; on mobile they crop to the most important panel rather than shrinking illegibly

### Image Behavior

Product screenshots carry their own intrinsic aspect ratios and downscale proportionally inside a 16px-radius frame with a soft shadow. The dark canvas is a flat CSS colour (no image asset), so it renders crisply at any resolution and pixel density.

### Container Queries

Used sparingly. Feature cards use container queries to switch their internal layout from icon-left to icon-top when the card narrows below ~280px, keeping the title legible in a 1-up mobile stack.

## 11. Content & Voice

### Tone

Modern, AI-forward, productivity-minded. Shortwave writes for power users who already know email is a workload — the voice leads with **automation and capability**, not with empathy theatre. Headlines name the outcome ("Automate your email with AI") rather than the pain ("Tired of your inbox?"). There is a quiet ex-Google-Inbox confidence in the copy: this team has built mail at scale before, and the writing assumes you know it.

### Microcopy Patterns

- **Button verbs**: "Get started for free", "Watch demo", "Sign in" — direct, outcome-named, never "Submit" or "Click here"
- **Error message recipe**: `[What went wrong] + [What to try]` — e.g., "We couldn't reach your account. Check your connection and try again."
- **Success confirmations**: short and concrete — "You're in. Check your inbox to finish setup."
- **Field labels**: minimal — usually a single word ("Email", "Work email") because the dark layout's whitespace makes function obvious

### Empty States

The empty-inbox state: "All caught up. Shortwave will surface what needs you." — action-implying, never just "No messages". The unconnected-account state names the next move: "Connect Gmail to start automating."

### CTA Verb Conventions

- Primary action: **"Get started for free"** (hero, nav, closing band)
- Secondary action: **"Watch demo"**, **"Sign in"**
- Tertiary text: **"Learn more"**, **"See how it works"**
- Avoided: "Submit", "Click here", "Buy now" — the relationship is framed as starting (free), not buying

## 12. Dark Mode & Theming

**The marketing site is natively dark.** Unlike sites that run light-with-a-dark-band, Shortwave's captured brand state is dark end to end — a near-black navy canvas (`#0c0e16`) carrying white type and one electric blue. The dark register isn't a mode toggle on the marketing surface; it *is* the surface, and it deliberately mirrors the temperature of the product's own dark theme so the site and the app read as one continuous environment.

The token system is built dark-first: surfaces lighten upward from the floor (`#0c0e16` → `#11141d` → `#161922` → `#1d212c`), borders are white-at-low-opacity rather than dark grey, and shadows are near-black-soft because elevation on dark comes from tonal lift and hairlines, not from heavy cast. If a light variant were ever needed, the mapping would invert: canvas → `#ffffff`, white text → a near-black ink, white hairlines → 8% black, and the blue `#356aff` would hold its value as the one constant across both modes (it clears contrast on both white and near-black).

The brand position: a dark canvas reads as **software you work inside** — IDE-adjacent, power-user-coded, serious about throughput. A light marketing site would push Shortwave toward the consumer-mail category it is explicitly not in.

## 13. Lineage & Influences

Shortwave's visual lineage runs through three traditions. First, **Google Inbox / Material's product DNA** — Shortwave was founded by ex-Google-Inbox engineers, and the site inherits Inbox's bias toward bundling, automation, and a single confident accent colour, translated into a darker, more developer-grade register. Second, the **dark developer-tool aesthetic** popularised by Linear and Vercel — near-black canvas, white type, tonal surface layering, and restraint as a signal of seriousness. Third, the **single-saturated-blue discipline** that runs through Stripe and the broader productivity-SaaS canon — one electric blue (`#356aff`) carrying every action, no rainbow gradients despite being an AI product.

Where most 2020s AI products reach for purple-to-pink gradients, neon glows, and shimmer, Shortwave rejects that vocabulary almost entirely. The page is dark, flat-ish, and chromatically disciplined — the AI-forward positioning is carried by the *copy* ("Automate your email with AI") and the product screenshots, not by gradient theatre. The blue is the only voltage, and it's a confident, almost institutional blue rather than a synthetic AI-violet. Poppins for display adds the one note of warmth — its rounded geometry keeps the dark, precise canvas from reading cold or hostile, the same way a friendly onboarding face softens a technical product.

What Shortwave rejects: AI-gradient washes, multi-colour brand systems, fully-pill consumer buttons, exclamation-mark microcopy, and light-mode marketing brochure energy. The brand is dark-minimalist, capability-led, one-voltage.

**Influences:**
- Google Inbox — the founders' prior product; bundling + automation DNA, single-accent discipline, [killedbygoogle.com/google-inbox](https://killedbygoogle.com)
- Linear — dark developer-grade canvas, tonal layering, restraint-as-seriousness, [linear.app](https://linear.app)
- Vercel — near-black canvas with white type and a single confident accent, [vercel.com](https://vercel.com)
- Stripe — single-saturated-blue discipline across a productivity surface, [stripe.com](https://stripe.com)
- Poppins (Indian Type Foundry) — the geometric display face that warms the dark canvas, [fonts.google.com/specimen/Poppins](https://fonts.google.com/specimen/Poppins)

## 14. Do's and Don'ts

**Do**
- Build on the dark near-black navy canvas (`#0c0e16`) — the brand is natively dark, not light-with-a-band
- Keep type white (`#ffffff`) for primary copy at every level — display and body alike
- Reserve `#356aff` as the single voltage — primary CTA fill, focus ring, active underline, info accent
- Use the lighter `#7d9bff` for inline blue *text* on dark so body-size links clear AA contrast
- Set display in Poppins (700 hero), body in the neutral grotesque — never mix the two roles
- Land controls (buttons, inputs) at 8px radius, cards at 12px, hero shells at 16px
- Layer surfaces tonally (`#0c0e16` → `#161922` → `#1d212c`) for elevation instead of heavy shadow
- Use 8% white hairlines (`rgba(255,255,255,0.08)`) as dividers — never solid grey
- Reserve the blue-tinted glow for the primary CTA hover — the one place colour and lift combine
- Give the product screenshot the heaviest shadow and the 16px frame — it's the hero object
- Lead copy with capability and automation ("Automate your email with AI"), confident and direct

**Don't**
- Don't put the page on a light/cream canvas — the dark floor is the whole register
- Don't render body in a serif — `Times` in the raw probe is the unloaded fallback, not the shipped face
- Don't set body copy in Poppins — it reads soft and brochure-ish; Poppins is display-only
- Don't introduce a second brand colour — the blue carries every action, full stop
- Don't reach for AI-violet gradients, neon glows, or shimmer — Shortwave rejects that vocabulary
- Don't use full-saturation `#356aff` for body-size link text on dark — it sits at the AA edge; use `#7d9bff`
- Don't make buttons fully pill — 8px reads software-grade; 9999px is reserved for small announcement chips
- Don't carry elevation with heavy black drop shadows on the dark canvas — lean on tonal lift + hairlines
- Don't use pure `#000` for the canvas — `#0c0e16` carries a faint navy that keeps the dark from going flat
- Don't use exclamation marks in microcopy — the voice is confident, not giddy
- Don't break the radius hierarchy — 8px controls, 12px cards, never the reverse

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:        #0c0e16
Surface:       #161922
Surface-elev:  #1d212c
Text (white):  #ffffff
Text-soft:     #c4cad8
Text-muted:    #9aa3b8
Brand:         #356aff
Brand-hover:   #2a59e6
Brand-soft:    #7d9bff
Brand-tint:    rgba(53,106,255,0.12)
Hairline:      rgba(255,255,255,0.08)
On-brand:      #ffffff
```

### Example Component Prompts

- "Create a Shortwave-style hero: dark near-black navy canvas (#0c0e16), 64px / 700 Poppins headline 'Automate your email with AI' in white with -0.03em tracking and 1.0 line-height, then an 18px / 400 deck beneath in #c4cad8 at 1.55 line-height. Below: a primary blue CTA (#356aff fill, white text, 8px radius, 10×16px padding) labelled 'Get started for free' beside a ghost button (transparent, white text, 1px rgba(255,255,255,0.16) border) labelled 'Watch demo'. Max-width 1280px centred."
- "Design a Shortwave feature card: #161922 surface on a #0c0e16 page, 12px radius, 1px hairline border at rgba(255,255,255,0.08), 24px padding, soft near-black shadow (rgba(0,0,0,0.32) 0 4px 16px -4px). Inside: a 24px / 600 Poppins white title, then 16px / 400 body in #c4cad8 at 1.55 line-height, then an inline link in #7d9bff at the bottom. On hover the surface lightens to #1d212c and the hairline strengthens to 16% white."
- "Build a Shortwave product-screenshot band: dark canvas (#0c0e16), a centred app screenshot inside a 16px-radius frame with a heavy soft shadow (rgba(0,0,0,0.48) 0 16px 40px -12px), a 32px / 600 Poppins white section heading above it, and a 12px / 600 uppercase blue-soft (#7d9bff) overline label above that with 0.08em tracking."
- "Create the Shortwave nav: 64px tall, transparent over the dark canvas with a 1px rgba(255,255,255,0.08) bottom hairline on scroll. Wordmark left in white. Centred links (Product, Pricing, Blog) in 15px white, brand-soft blue (#7d9bff) on hover. Right side: a ghost 'Sign in' button (transparent, white, 1px 16%-white border, 8px radius), then a blue 'Get started for free' CTA (#356aff fill, white text, 8px radius)."
- "Build a Shortwave email signup: #11141d-fill input with a 1px rgba(255,255,255,0.16) border, 8px radius, 44px height, white text, placeholder 'Enter your work email' in #9aa3b8. On focus the border turns #356aff with a 3px rgba(53,106,255,0.12) tint halo. The 'Get started for free' blue CTA sits flush right of the input with no gap as one combined affordance."
- "Design a Shortwave AI-capability tile: #161922 surface, 12px radius, 8%-white hairline, 24px padding. A tinted-blue pill at top (rgba(53,106,255,0.12) fill, #7d9bff text, 9999px radius, 4×10px padding) reading 'AI', then a 20px / 600 white title, then 14px / 400 #9aa3b8 body. No bright gradients — the blue is the only colour event."

### Iteration Guide

1. **Canvas stays dark.** Anything other than the near-black navy `#0c0e16` breaks the brand — Shortwave is natively dark, not light-with-a-band.
2. **One blue voltage per fold.** If two `#356aff` CTAs are visible at once, demote one to a ghost or soft-blue button — the brand colour draws the eye, it doesn't paper the page.
3. **Poppins for display only.** Headlines in Poppins 700; body in the neutral grotesque. Body in Poppins reads brochure-soft; the hero in grotesque loses its warmth.
4. **`Times` is a ghost — ignore it.** If you saw `Times` in a probe, that's the unloaded fallback. Set body in an Inter-class sans, never a serif.
5. **Blue text uses `#7d9bff`, blue fills use `#356aff`.** Full-saturation blue on near-black is at the AA edge for body text — use the lighter blue for link text, the full blue for CTA fills and large accents.
6. **Layer surfaces tonally.** `#0c0e16` floor → `#161922` card → `#1d212c` hover. Don't reach for heavy black shadows to create depth on dark.
7. **8 / 12 / 16 — controls / cards / hero.** The radius hierarchy is invariant. Buttons aren't pill; pill is reserved for small announcement chips.
8. **No AI-violet, no gradients.** The AI positioning lives in the copy and the screenshots, not in gradient washes or neon glows. Keep it dark, flat, and one-voltage.

---

*Theme-toggle audit: score=0, signals=[native-dark]*
