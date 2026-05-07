---
name: beehiiv
tagline: Aggressive black-on-yellow newsletter punch — heavy display sans, hyper-flat cards, and a `#ffd60a` highway-yellow that reads like a tabloid front page.
updated_at: 2026-05-06T19:53:28+12:00
published_at: 2026-05-03T16:32:19+12:00
author: webdesignhot
source_url: https://www.beehiiv.com
spec: design.md/v1.5
quality: curated
featured: true
categories: [media, saas]
tags: [light, dark, sans, structured, bright, multi-theme]
preview_swatch: ['#ffd60a', '#000000', '#ffffff']
related: [substack, ghost, kit-com]
description: 'beehiiv hits like a tabloid front page — a saturated `#ffd60a` highway yellow against pure black `#000`, heavy display type set tight, and pure-white feature bands that flash between the yellow hero and the black footer. The result is the loudest newsletter platform on the marketing internet, and it is intentional. Display caps at 88–112px / 800 weight tracked at `-0.04em`, cards use a 2px solid black border at 12px radius (no shadow), and the black-pill CTA is the brand''s pressure point. Where Substack frames itself around writing, beehiiv frames itself around making money — and every visual decision carries that monetisation-first energy. The lineage runs through the Wall Street Journal''s tabloid cousins, Off-White / Virgil''s industrial graphic vocabulary, and 2010s zine culture''s love of the black-on-yellow contrast pair.'

themes:
  default: light
  available: [light, dark]
  switch-via: 'Marketing site default is white-with-yellow-bands (light); footer + hero contrast bands ship in dark. Persisted in localStorage on the product app.'

colors:
  light:
    bg: '#ffffff'                 # primary marketing canvas
    bg-yellow: '#ffd60a'          # signature hero band — highway yellow
    bg-yellow-soft: '#fff7c2'     # softest yellow tint
    bg-yellow-deep: '#e6c000'     # deeper press of the yellow
    surface: '#fafafa'            # near-white card panel
    surface-2: '#f0f0f0'          # second-level neutral
    surface-3: '#e5e5e5'          # third-level neutral
    text: '#000000'               # plain black body
    text-strong: '#000000'
    text-display: '#000000'
    text-muted: '#666666'         # captions
    text-soft: '#999999'          # tertiary
    text-faint: '#cccccc'         # disabled
    text-on-yellow: '#000000'     # always black on yellow
    text-on-yellow-muted: '#000000a8'
    brand: '#ffd60a'              # the yellow itself is the brand
    brand-hover: '#e6c000'
    brand-active: '#cca800'
    brand-soft: '#fff7c2'
    accent: '#000000'             # black is the secondary brand
    accent-soft: '#1a1a1a'
    border: '#000000'             # 2px solid black border on cards
    border-soft: '#e5e5e5'        # softer divider
    on-brand: '#000000'           # text on yellow
    success: '#15803d'
    success-bg: '#dcfce7'
    warning: '#a16207'            # amber, not yellow (yellow is brand)
    warning-bg: '#fef3c7'
    danger: '#b91c1c'
    danger-bg: '#fee2e2'
    info: '#000000'
    info-bg: '#fafafa'

  dark:
    bg: '#000000'                 # pure black canvas
    bg-yellow: '#ffd60a'          # yellow band stays — chromatic identity
    bg-yellow-soft: 'rgba(255, 214, 10, 0.18)'
    bg-yellow-deep: '#e6c000'
    surface: '#0a0a0a'            # near-black card
    surface-2: '#1a1a1a'          # second-level dark
    surface-3: '#262626'          # third-level dark
    text: '#ffffff'               # white on black
    text-strong: '#ffffff'
    text-display: '#ffffff'
    text-muted: '#a3a3a3'
    text-soft: '#737373'
    text-faint: '#525252'
    text-on-yellow: '#000000'     # black on yellow stays inviolable
    text-on-yellow-muted: '#000000a8'
    brand: '#ffd60a'
    brand-hover: '#ffe45c'        # lifted on dark for legibility
    brand-active: '#e6c000'
    brand-soft: 'rgba(255, 214, 10, 0.18)'
    accent: '#ffffff'             # white doubles as accent on dark (mirrors light/black role)
    accent-soft: '#e5e5e5'
    border: '#ffffff'             # 2px white border on cards (mirrors light's 2px black)
    border-soft: '#1f1f1f'
    on-brand: '#000000'
    success: '#22c55e'            # lifted green for dark
    success-bg: 'rgba(34, 197, 94, 0.18)'
    warning: '#fbbf24'
    warning-bg: 'rgba(251, 191, 36, 0.18)'
    danger: '#ef4444'
    danger-bg: 'rgba(239, 68, 68, 0.18)'
    info: '#ffffff'
    info-bg: '#0a0a0a'

typography:
  display:
    family: '"PP Neue Machina", "Inter Display", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [700, 800, 900]
    opentype-features: ['ss01', 'ss02', 'tnum']
  body:
    family: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: ['kern', 'tnum']
  mono:
    family: '"JetBrains Mono", "IBM Plex Mono", Menlo, monospace'
    weights: [400, 500, 700]
  scale:
    display-hero:    { size: 112, weight: 800, lineHeight: 0.9,  tracking: '-0.045em', family: display, opentype: 'ss01' }
    display-large:   { size: 88,  weight: 800, lineHeight: 0.95, tracking: '-0.04em',  family: display, opentype: 'ss01' }
    display:         { size: 72,  weight: 800, lineHeight: 0.98, tracking: '-0.035em', family: display, opentype: 'ss01' }
    h1:              { size: 56,  weight: 800, lineHeight: 1.0,  tracking: '-0.03em',  family: display }
    h2:              { size: 40,  weight: 800, lineHeight: 1.05, tracking: '-0.025em', family: display }
    h3:              { size: 28,  weight: 700, lineHeight: 1.2,  tracking: '-0.015em', family: display }
    h4:              { size: 22,  weight: 700, lineHeight: 1.25, tracking: '-0.01em',  family: display }
    h5:              { size: 18,  weight: 700, lineHeight: 1.3,  tracking: '-0.005em', family: display }
    h6:              { size: 14,  weight: 700, lineHeight: 1.35, tracking: '0',         family: display }
    body-large:      { size: 18,  weight: 400, lineHeight: 1.55, tracking: '0',         family: body }
    body:            { size: 16,  weight: 400, lineHeight: 1.5,  tracking: '0',         family: body }
    body-small:      { size: 14,  weight: 400, lineHeight: 1.45, tracking: '0',         family: body }
    stat-mega:       { size: 96,  weight: 800, lineHeight: 1.0,  tracking: '-0.035em', family: mono, opentype: 'tnum' }
    stat-large:      { size: 64,  weight: 800, lineHeight: 1.0,  tracking: '-0.025em', family: mono, opentype: 'tnum' }
    label:           { size: 12,  weight: 600, lineHeight: 1.3,  tracking: '0.06em',   family: mono }
    caption:         { size: 13,  weight: 500, lineHeight: 1.4,  tracking: '0.02em',   family: body }
    code-inline:     { size: 14,  weight: 400, lineHeight: 1.4,  tracking: '0',         family: mono }
    code:            { size: 14,  weight: 400, lineHeight: 1.5,  tracking: '0',         family: mono }

radius:
  none: 0
  micro: 2
  xs: 4
  sm: 6
  md: 8
  lg: 10
  card: 12
  xl: 16
  xxl: 20
  hero: 24
  pill: 9999

spacing:
  base: 4
  scale: [1, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 72
  hero-padding-y: 120
  section-padding-y: 120
  card-padding: 32

components:
  button-primary:
    backgroundColor: bg-dark
    textColor: on-dark
    radius: pill
    padding: '14px 28px'
    font: { family: body, weight: 600, size: 16 }
    hover: { backgroundColor: '#1a1a1a', transform: 'translateY(-1px)' }
    use: 'Black pill on yellow — the canonical hero CTA'
  button-yellow:
    backgroundColor: brand
    textColor: on-brand
    radius: pill
    padding: '14px 28px'
    font: { family: body, weight: 700, size: 16 }
    hover: { backgroundColor: brand-hover }
    use: 'Yellow pill on white — secondary action band'
  button-ghost:
    backgroundColor: transparent
    textColor: text
    border: border
    radius: md
    padding: '12px 24px'
    font: { family: body, weight: 600, size: 16 }
    hover: { backgroundColor: surface }
    use: 'Tight 2px border outline button'
  button-ghost-on-dark:
    backgroundColor: transparent
    textColor: on-dark
    border: on-dark
    radius: md
    padding: '12px 24px'
    font: { family: body, weight: 600, size: 16 }
    hover: { backgroundColor: surface-dark-2 }
    use: 'White-outline ghost on the black band'
  card:
    backgroundColor: bg
    border: border
    borderWidth: 2
    radius: card
    padding: 32
    shadow: 'none'
    use: 'The thick-black-border card — beehiiv''s signature elevation'
  card-yellow:
    backgroundColor: brand
    textColor: on-brand
    border: border
    borderWidth: 2
    radius: card
    padding: 32
    use: 'Yellow card on white — feature emphasis'
  card-dark:
    backgroundColor: surface-dark
    textColor: on-dark
    border: border-dark
    borderWidth: 1
    radius: card
    padding: 32
    use: 'Dark testimonial card on black band'
  stat-tile:
    backgroundColor: brand
    textColor: on-brand
    border: border
    borderWidth: 2
    radius: card
    padding: 24
    use: 'Revenue stat — mono numeral at stat-mega scale'
  badge:
    backgroundColor: bg-dark
    textColor: on-dark
    radius: pill
    padding: '4px 12px'
    font: { family: mono, weight: 600, size: 12 }
  input:
    backgroundColor: bg
    border: border
    borderWidth: 2
    radius: md
    padding: '14px 16px'
    font: { family: body, weight: 500, size: 16 }
    focus: { ring: '0 0 0 3px rgba(255,214,10,0.4)' }

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.34, 1.56, 0.64, 1)'   # slight overshoot for the punch
  ease-decelerate: 'cubic-bezier(0, 0, 0.2, 1)'
  duration-instant: 80
  duration-fast: 150
  duration-standard: 220
  duration-slow: 320
  duration-emphasized: 480
  hover-lift: 'translateY(-2px)'
  page-transition: 'opacity-only, 200ms standard'
  reduced-motion: 'respects prefers-reduced-motion: reduce — collapses transforms to opacity-only at 100ms'

breakpoints:
  mobile: 480
  tablet: 768
  desktop: 1024
  wide: 1280
  ultra: 1536

shadows:
  none: 'none'
  ambient: 'none'                                       # beehiiv refuses ambient shadow
  raised: 'rgba(0,0,0,0.08) 0 4px 16px'                 # rare, only on floating elements
  ring-yellow: '0 0 0 3px rgba(255,214,10,0.4)'
  ring-black: '0 0 0 3px rgba(0,0,0,0.2)'
  inset-dark: 'inset 0 0 0 1px #1f1f1f'                 # the dark-band ring

accessibility:
  contrast-text-on-bg: 19.6              # AAA — plain black on white
  contrast-text-on-brand: 17.4           # AAA — black on yellow (the canonical pair)
  contrast-text-on-dark: 19.6            # AAA — white on black
  contrast-muted-on-bg: 5.7              # AA at body sizes
  focus-ring: '3px solid rgba(255,214,10,0.4) with 1px offset'
  reduced-motion-honored: true
  keyboard-trap-free: true
  min-touch-target: 44

dark-mode: brand-band-only

colors-dark:
  bg: '#000000'
  bg-soft: '#0a0a0a'
  surface: '#1a1a1a'
  surface-hover: '#222222'
  surface-strong: '#2a2a2a'
  text: '#ffffff'
  text-muted: '#ffffffb3'
  text-soft: '#ffffff80'
  brand: '#ffd60a'
  brand-hover: '#e6c000'
  border: '#1f1f1f'
  on-brand: '#000000'
  on-dark: '#ffffff'

lineage:
  summary: |
    beehiiv's marketing system is a tabloid in landing-page form. The hero band is
    saturated highway-yellow (`#ffd60a`) — a colour inherited from caution signs
    and old New York taxis — with pure `#000` Inter Display set at 88–112px / 800
    weight, tracked tight at `-0.04em`. The supporting bands are pure white and
    pure black, no greys in the middle. Cards on the white canvas use a 2px solid
    black border at 12px radius — a hyper-flat, near-brutalist move that
    distinguishes beehiiv from Substack's cosier serif aesthetic and Ghost's
    warm-cream restraint. The voice is aggressive-masculine: revenue stats in
    giant numerals, "monetize" as the verb of choice, and a punchy "sign up free"
    black-pill CTA that contrasts hard against the yellow. Where Substack tells
    you to write, beehiiv tells you to make money — and the design inherits that
    energy. The lineage runs through Wall Street Journal/NYP front-page broadsheet
    energy, Off-White / Virgil Abloh's industrial graphic vocabulary, and the
    2010s zine-revival love of black-on-yellow contrast.
  influences:
    - name: Wall Street Journal
      role: Tabloid + financial-news loud-headline lineage; the broadsheet front-page energy.
      url: https://www.wsj.com
    - name: Off-White
      role: Quotation-marks, bold display, black-on-yellow industrial graphic vocabulary.
      url: https://www.off---white.com
    - name: Substack
      role: Direct rival — beehiiv is positioned as the louder, money-first alternative.
      url: https://substack.com
    - name: Pangram Pangram (PP Neue Machina)
      role: The display family — industrial geometric sans tuned for marketing punch.
      url: https://pangrampangram.com
    - name: New York Post
      role: Tabloid front-page boldness translated into landing-page form.
      url: https://nypost.com
---

## 1. Visual Theme & Atmosphere

beehiiv's site reads like a tabloid front page that learned how to sell SaaS. The hero band is saturated `#ffd60a` highway-yellow with pure black PP Neue Machina (or Inter Display fallback) set at 88–112px / 800 weight, tracked tight. Below the hero, the page alternates pure white feature bands and a pure black footer — there are essentially no greys in the canvas, only at the card-tier and divider tier.

The voice is aggressive-monetization. Revenue stats, subscriber counts, and "$10,000 / month" appear at heroic display sizes — the canonical stat is set in JetBrains Mono at 96px with tabular numerals so the numerals lock-step align across cards. Where Substack frames itself around writing, beehiiv frames itself around making money — and the design carries that energy at every scale. Cards on the white canvas use a 2px solid `#000` border at 12px radius, a hyper-flat near-brutalist move that no other newsletter platform uses; the same card on the dark band uses a 1px `#1f1f1f` ring instead.

The atmosphere is poster-energy. The page bands swap colour aggressively: yellow hero → white feature → black testimonial → white pricing → yellow CTA-band → black footer. The contrast cycle is what gives beehiiv its tabloid pulse — a reader scrolling never settles into a single mood; the page wants attention. Where Notion oscillates between calm-light and emotional-dark for editorial pacing, beehiiv oscillates between yellow and black for impact pacing. There is no in-between mood.

The radius ladder is moderate. Cards at 12px, buttons at 10px, the canonical CTA at full pill (`9999px`). The pill CTA reads as the action pressure-point — a black pill on yellow is the brand's defining gesture. Even the secondary CTA (yellow pill on white) inherits the pill shape.

There is essentially no shadow vocabulary. The 2px solid black border carries elevation entirely; a card with a drop shadow reads as a different product (Ghost, Mailchimp). Even the dark-band testimonial card uses an inset 1px ring rather than a drop shadow. The flatness is the discipline — and the discipline reinforces the tabloid / zine register.

**Key Characteristics**

- Saturated `#ffd60a` highway-yellow hero band — the brand's identifying note
- Pure black `#000` against pure white `#fff`; essentially no grey in the canvas
- 2px solid black card borders at 12px radius — the hyper-flat elevation strategy
- Black pill CTA on yellow (the canonical pair); yellow pill on white as secondary
- PP Neue Machina or Inter Display at 88–112px / 800 weight tracked at `-0.04em`
- JetBrains Mono with tabular numerals for revenue stats at 64–96px scale
- Aggressive band-cycling: yellow → white → black → white → yellow
- Black on yellow always; never white on yellow (heritage and contrast both demand it)
- 120px section padding for poster breathing — looser than Substack, tighter than Linear
- Heavy `-0.04em` negative tracking at hero scale gives the bulletin-loud compression

## 2. Color Palette & Roles

### Primary

- **bg** (`#ffffff`): the primary white canvas; full pure white, no warmth.
- **bg-yellow** (`#ffd60a`): the signature highway-yellow hero band — saturated, not muted.
- **bg-dark** (`#000000`): pure black footer / contrast band; full-bleed black, no warmth.
- **text** (`#000000`): plain black body, no opacity tilt.
- **brand** (`#ffd60a`): the yellow itself is the brand identity.

### Brand & Dark

- **brand-hover** (`#e6c000`): yellow a half-step darker for pressed state.
- **brand-active** (`#cca800`): deepest pressed yellow.
- **brand-soft** (`#fff7c2`): softest yellow tint, used for selection backgrounds and inline highlights.
- **accent** (`#000000`): black is the secondary brand — every black surface reads as a brand element, not a neutral.
- **bg-dark-soft** (`#0a0a0a`): near-black interior surface for the dark band.

### Accent

- The system is intentionally yellow + black + white. There is no third hue. Any apparent "accent" is the same palette in a different role.
- **brand-soft** (`#fff7c2`) is the softest yellow tint, used sparingly for inline selection states.

### Interactive

- **link**: `#000000` underlined; never the brand yellow (yellow on white fails contrast).
- **link-on-yellow**: `#000000`, underlined; black always reads as the action on yellow.
- **link-on-dark**: `#ffd60a` for inline links inside the dark band — this is the only place yellow does link-duty.
- **selected**: `brand-soft` (`#fff7c2`) as fill, `#000000` as text.
- **disabled**: `text-faint` (`#cccccc`) on `surface` (`#fafafa`).

### Neutral Scale

- **text-muted** (`#666666`): captions, meta, secondary copy.
- **text-soft** (`#999999`): tertiary text — timestamps, micro-copy.
- **text-faint** (`#cccccc`): disabled state, separator labels.
- The system avoids more than three grey tiers; mid-tone greys read as a different product (Substack, Ghost).

### Surface & Borders

- **surface** (`#fafafa`): near-white card panel for nested grids.
- **surface-2** (`#f0f0f0`): second-tier neutral, internal table rows.
- **surface-3** (`#e5e5e5`): third-tier neutral, divider areas.
- **surface-dark** (`#0a0a0a`): dark-band card surface.
- **surface-dark-2** (`#1a1a1a`): second-level dark surface.
- **border** (`#000000`): the canonical 2px solid black card border — the brand's elevation.
- **border-soft** (`#e5e5e5`): softer 1px divider for internal grids.
- **border-dark** (`#1f1f1f`): 1px black-on-black ring used inside the dark band.

### Shadow Colors

- **none**: the default — beehiiv refuses ambient shadow on the marketing surface.
- **raised** (`rgba(0,0,0,0.08) 0 4px 16px`): rare, only on floating widgets like the newsletter-signup popover.
- **inset-dark** (`inset 0 0 0 1px #1f1f1f`): the only "shadow" used on the dark band — an inset ring rather than a drop shadow.

Note: the 2px solid black border *replaces* shadow as the elevation strategy. This is the hyper-flat doctrine — and it is the brand's most recognisable visual decision.

### Semantic

- **success** (`#15803d`) on **success-bg** (`#dcfce7`): editorial green.
- **warning** (`#a16207`) on **warning-bg** (`#fef3c7`): warm amber — beehiiv reaches for amber rather than yellow because yellow is the brand and would be overloaded.
- **danger** (`#b91c1c`) on **danger-bg** (`#fee2e2`): brick red.
- **info** (`#000000`) on **info-bg** (`#fafafa`): info reuses plain black; the system refuses an info-blue.

## 3. Typography Rules

### Font Family

- **Display**: PP Neue Machina (Pangram Pangram's industrial geometric sans) → Inter Display → Inter → -apple-system → BlinkMacSystemFont → Segoe UI → Helvetica → Arial → sans-serif.
- **Body**: Inter → -apple-system → BlinkMacSystemFont → Segoe UI → Roboto → Helvetica → Arial → sans-serif.
- **Mono companion**: JetBrains Mono → IBM Plex Mono → Menlo → monospace.
- **OpenType features**: `ss01` and `ss02` on display (geometric stylistic alternates for Neue Machina); `tnum` (tabular numerals) on stats and pricing tiers.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display-hero | PP Neue Machina | 112 | 800 | 0.9 | -0.045em | ss01 | reserved for the most aggressive marketing |
| display-large | PP Neue Machina | 88 | 800 | 0.95 | -0.04em | ss01 | the canonical hero size |
| display | PP Neue Machina | 72 | 800 | 0.98 | -0.035em | ss01 | secondary heroes |
| h1 | PP Neue Machina | 56 | 800 | 1.0 | -0.03em | — | section heads |
| h2 | PP Neue Machina | 40 | 800 | 1.05 | -0.025em | — | feature-band heads |
| h3 | PP Neue Machina | 28 | 700 | 1.2 | -0.015em | — | sub-feature heads |
| h4 | PP Neue Machina | 22 | 700 | 1.25 | -0.01em | — | card heads |
| h5 | PP Neue Machina | 18 | 700 | 1.3 | -0.005em | — | inline emphasis |
| h6 | PP Neue Machina | 14 | 700 | 1.35 | 0 | — | label-grade heads |
| body-large | Inter | 18 | 400 | 1.55 | 0 | kern | hero subheads |
| body | Inter | 16 | 400 | 1.5 | 0 | kern | default reading |
| body-small | Inter | 14 | 400 | 1.45 | 0 | kern | secondary copy |
| stat-mega | JetBrains Mono | 96 | 800 | 1.0 | -0.035em | tnum | revenue numerals — the headline stat |
| stat-large | JetBrains Mono | 64 | 800 | 1.0 | -0.025em | tnum | secondary stat |
| label | JetBrains Mono | 12 | 600 | 1.3 | 0.06em | — | eyebrow, category cue |
| caption | Inter | 13 | 500 | 1.4 | 0.02em | kern | image / chart caption |
| code-inline | JetBrains Mono | 14 | 400 | 1.4 | 0 | — | inline code |
| code | JetBrains Mono | 14 | 400 | 1.5 | 0 | — | code block |

### Principles

- **Tight tracking is the marketing voice**: at hero sizes the track tightens to `-0.04em` to `-0.045em`. Without that compression, PP Neue Machina at 800 weight reads as competent but not declarative. The negative tracking is what carries the bulletin-loud register.
- **800 weight or nothing**: the display family runs at 800 weight as default; 700 appears only at H3 and below. This is a heavier weight register than Substack (700) or Notion (700) and the heaviness is the brand.
- **Revenue stats are typographic anchors**: every dashboard mockup, every pricing tier, every testimonial uses JetBrains Mono with `tnum` for numerals. The mono numerals lock-step align across cards — a typographic decision that signals "this product is about money".
- **No serif, no rounded sans, no humanist warmth**: beehiiv refuses every soft typographic register. PP Neue Machina is industrial-geometric; Inter is workhorse-neutral; JetBrains Mono is technical. Together they signal "loud, technical, monetisation-first".
- **Mono labels mark category and stats**: anywhere the page is naming a category ("Newsletter", "Sponsor", "Tier") or showing a stat, the type switches to JetBrains Mono.
- **The H1 leans on size, weight, and tracking together**: at 56–112px / 800 / `-0.03em` to `-0.045em`, the headline reads as a tabloid headline rather than a marketing banner. Soften any of those three dials and the register shifts.

## 4. Component Stylings

### Buttons

**Primary (black pill)**
- Background: `#000000`. Text: `#ffffff` at Inter 600 / 16px. Padding: `14px 28px`. Radius: 9999px. Border: none.
- Hover: background → `#1a1a1a`, transform → `translateY(-1px)`. Active: transform → `translateY(0)`, no colour shift.
- Use: every primary CTA — Sign up free, Start earning, Launch your newsletter.

**Yellow pill**
- Background: `#ffd60a`. Text: `#000000` at Inter 700 / 16px. Padding: `14px 28px`. Radius: 9999px. Border: none.
- Hover: background → `#e6c000`, no transform.
- Use: secondary action on white feature bands; substitutes for primary in "secondary" hierarchy.

**Ghost (outline)**
- Background: transparent. Text: `#000000` at Inter 600 / 16px. Padding: `12px 24px`. Radius: 8px. Border: `2px solid #000000`.
- Hover: background → `#fafafa`. Use: tertiary action paired with primary or yellow CTA.

**Ghost on dark**
- Background: transparent. Text: `#ffffff` at Inter 600 / 16px. Padding: `12px 24px`. Radius: 8px. Border: `2px solid #ffffff`.
- Hover: background → `#1a1a1a`. Use: secondary action inside the dark band.

### Cards

**Standard (thick-black-border)**
- Background: `#ffffff`. Border: `2px solid #000000`. Radius: 12px. Padding: 32px. No shadow.
- Hover: transform → `translateY(-2px)`, no shadow added.
- Use: feature cards, pricing tiers, testimonials on white bands.

**Yellow card**
- Background: `#ffd60a`. Text: `#000000` at Inter 600 / 18px. Border: `2px solid #000000`. Radius: 12px. Padding: 32px.
- Use: feature emphasis cards, callout blocks.

**Dark card** (testimonial in dark band)
- Background: `#0a0a0a`. Text: `#ffffff` at Inter 500 / 16px. Border: `1px solid #1f1f1f`. Radius: 12px. Padding: 32px. No shadow.
- Use: testimonials inside the black band.

**Stat tile**
- Background: `#ffd60a`. Text: `#000000` at JetBrains Mono 96 / 800. Border: `2px solid #000000`. Radius: 12px. Padding: 24px.
- Use: revenue / subscriber count tiles — the brand's iconic stat surface.

### Badges, Tags, Pills

**Black badge**
- Background: `#000000`. Text: `#ffffff` at JetBrains Mono 600 / 12px tracked `+0.06em` uppercase. Padding: `4px 12px`. Radius: 9999px.
- Use: "FREE", "POPULAR", "NEW" status tags.

**Yellow badge**
- Background: `#ffd60a`. Text: `#000000` at JetBrains Mono 600 / 12px. Padding: `4px 12px`. Radius: 9999px.
- Use: feature highlights, premium tier markers.

### Inputs / Forms

**Text input**
- Background: `#ffffff`. Border: `2px solid #000000`. Radius: 8px. Padding: `14px 16px`. Font: Inter 500 / 16px.
- Focus: ring `0 0 0 3px rgba(255,214,10,0.4)` (yellow ring).
- Placeholder: `#999999`.

**Newsletter signup input**
- Background: `#ffffff`. Border: `2px solid #000000`. Radius: 9999px. Padding: `14px 24px`. Font: Inter 500 / 16px.
- Pairs with a black pill submit button inside the same shape.

### Navigation

**Top bar**
- Background: `#ffffff` with `2px solid #000000` bottom border (or no border on yellow hero). Height: 72px.
- Logo: beehiiv wordmark in PP Neue Machina 800 / 22px in `#000000`.
- Nav items: Inter 600 / 14px, colour `#000000`, hover → underline appears.
- Primary CTA always visible at top right (black pill).

### Tooltips, Toasts, Modals

- **Tooltip**: background `#000000`, text `#ffffff` at Inter 500 / 12px, radius 6px, padding `6px 10px`. Shadow: `none`.
- **Toast**: background `#000000`, text `#ffffff` at Inter 500 / 14px, radius 12px, padding `16px 20px`. No shadow; the dark fill is the elevation.
- **Modal**: background `#ffffff`, border `2px solid #000000`, radius 16px, no shadow. Backdrop: `rgba(0,0,0,0.6)`. Padding: 32px.

## 5. Layout Principles

### Spacing System

Base unit: 4px. Scale: `[1, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160]` × 4px. The system favours large jumps for poster energy — 32px gutters, 64–80px between feature stacks within a band, 120–160px between major bands. The largeness is what gives beehiiv its broadsheet feel.

### Grid & Container

- **Page width**: 1280px max, centred.
- **Prose width**: 720px for editorial blog and docs.
- **Hero treatment**: hero copy claims roughly 800–900px horizontal, headline at 88–112px display-large, image / illustration spans full container width below or sits as a beehiiv newsletter mockup at right.
- **Feature grid**: 3-column at 1024px+, 2-column at 768–1024px, 1-column below 768px. Card gap: 32px (tighter cards, 24px).

### Whitespace Philosophy

Whitespace here is poster breathing — generous around the hero (120px+ top/bottom padding), tight inside cards (32px). The page exhales between bands and inhales inside the band itself. Where Substack uses whitespace as a literary cue, beehiiv uses it as a publication-poster cue — there is more air around the headline than around the body text, mimicking a tabloid's front-page hierarchy.

### Section Cadence

The signature cadence is band-cycling: yellow hero → white feature → black testimonial → white pricing → yellow CTA-band → black footer. Each band is full-bleed (the bg colour reaches the viewport edges), and transitions are abrupt (no gradient between bands). The abrupt transitions are the brand — they communicate the same poster-style energy as a turning page on a tabloid.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| none | 0px | rare; only used for full-bleed bands |
| micro | 2px | inline tags, internal indicators |
| xs | 4px | tight UI primitives |
| sm | 6px | small inline pills, secondary buttons |
| md | 8px | standard buttons, ghost outlines |
| lg | 10px | large buttons (rare) |
| card | 12px | the canonical card radius |
| xl | 16px | larger feature cards, modal |
| xxl | 20px | hero shells |
| hero | 24px | feature-image rounded corners |
| pill | 9999px | the canonical CTA pill, badges |

The radius ladder is moderate-tight. Cards at 12px, primary CTA at full pill, tags at full pill — this combination of moderate radius for surface and full pill for action is the brand's signature. Buttons at 10px (rectangular) read as secondary; the pill is reserved for the primary CTA.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | flat, on `#ffffff` or `#ffd60a` or `#000000` | body content, default surfaces |
| 1 | `2px solid #000000` border, no shadow | the canonical card; depth via thick border |
| 2 | `2px solid #000000` + `translateY(-2px)` on hover | hovered card |
| 3 | `1px solid #1f1f1f` inset on `#0a0a0a` | dark-band testimonial card |
| 4 | `rgba(0,0,0,0.08) 0 4px 16px` shadow | rare floating widget (newsletter popover) |
| 5 | full-bleed modal with `2px #000000` border + backdrop | dialog |

**Shadow Philosophy**: beehiiv refuses ambient shadow on the marketing canvas. The 2px solid black border carries elevation entirely — and the refusal of shadow is what distinguishes beehiiv from Substack's softer card chrome. On the dark band, the inset 1px ring substitutes for the border (a 2px outer border on black would read as overkill); the inset ring is the dark-band's elevation logic. The only true drop shadow appears on rare floating widgets like the newsletter-signup popover, where elevation is genuinely needed.

## 8. Interaction & Motion

### Easing

- **standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — workhorse Material-style ease.
- **emphasized**: `cubic-bezier(0.34, 1.56, 0.64, 1)` — slight overshoot used for the punch on hero entrance and CTA hover-press.
- **decelerate**: `cubic-bezier(0, 0, 0.2, 1)` — used for elements entering from off-canvas.

### Durations

- **instant** (80ms): hover background colour shifts on buttons.
- **fast** (150ms): card hover lift, link underline grow.
- **standard** (220ms): primary CTA press, dropdown open.
- **slow** (320ms): modal open, page band cross-fade.
- **emphasized** (480ms): hero entrance choreography with stat-numeral count-up.

### Per-component micro-states

- **Black-pill CTA hover**: background → `#1a1a1a`, `translateY(-1px)`, 150ms standard ease. Active: `translateY(0)`.
- **Card hover**: `translateY(-2px)` over 150ms; the 2px black border stays solid (no thickness change).
- **Stat tile entrance**: numeral counts up from 0 to final value over 1200ms with `decelerate` ease (animated only when the tile enters viewport).
- **Yellow-pill hover**: background → `#e6c000`, no transform.
- **Input focus**: yellow ring fades in at 100ms; border thickness stays at 2px.

### Page transitions

beehiiv uses opacity-only fades at 200ms between marketing routes; no slide, no scale. The aggressive band-cycling within a page is the visual energy, so route transitions stay quiet to let the cycling carry the impact.

### Reduced-motion strategy

`prefers-reduced-motion: reduce` is honored: card hover lifts disappear, stat count-up animation is replaced by static final value, page entrance becomes instant cut. The yellow ring on focus remains (focus indication is not animation).

## 9. Accessibility & A11y

### Contrast pairs (computed)

- **text on bg**: `#000000` on `#ffffff` → 19.6:1 (AAA at all sizes).
- **text on bg-yellow**: `#000000` on `#ffd60a` → 17.4:1 (AAA at all sizes — the canonical pair).
- **text on bg-dark**: `#ffffff` on `#000000` → 19.6:1 (AAA at all sizes).
- **text-muted on bg**: `#666666` on `#ffffff` → 5.7:1 (AA at body, AAA at large).
- **on-yellow-muted**: `#000000a8` on `#ffd60a` → 11.5:1 (AAA).

### Focus indicators

- **Default focus ring**: `3px solid rgba(255,214,10,0.4)` with 1px offset on white surfaces; the yellow ring is visible on every neutral surface.
- **On yellow surfaces**: ring shifts to `3px solid rgba(0,0,0,0.4)` (black ring on yellow band).
- **On dark surfaces**: ring shifts to `3px solid rgba(255,214,10,0.4)` (yellow ring on black band — high contrast).

Focus rings are never removed. The ring colour adapts to the surface.

### ARIA patterns

- Pricing toggles use `role="radiogroup"` rather than tabs.
- Newsletter signup uses `aria-describedby` to associate input with helper text.
- Modals use `role="dialog"`, `aria-modal="true"`, focus trap, `Esc` to close.
- Stat tiles with count-up animation use `aria-live="polite"` only on first reveal.

### Keyboard nav order

Top bar → hero CTA → feature bands in DOM order → pricing → footer. Skip-to-content link at top of DOM, visible on focus. Tab order matches visual order through band-cycling.

### Screen reader hints

- Yellow hero band carries no special semantics beyond visual styling.
- Decorative band-dividers carry `aria-hidden="true"`.
- Stat tiles use `aria-label="N thousand subscribers"` rather than relying on numeral parsing.
- Icon-only buttons carry `aria-label` describing the action.

### Reduced motion

Honored throughout — see §8.

## 10. Responsive Behavior

### Breakpoints

| Tier | Width | Behavior |
|---|---|---|
| mobile | < 480px | single column, 16px gutter, 64px section padding, hero at 48–56px display |
| tablet | 480–768px | single column, 24px gutter, 80px section padding, hero at 64–72px |
| desktop | 768–1024px | 2-column feature grids, 32px gutter, 96px section padding |
| wide | 1024–1280px | 3-column feature grids, 32px gutter, 120px section padding |
| ultra | 1280px+ | container caps at 1280px, hero at full 88–112px |

### Touch Targets

Minimum 44×44px on touch devices. The 14px / 28px button padding clears the threshold. Pill CTA on mobile expands to 16px / 32px padding for thumb-friendly tap area.

### Collapsing strategy

- **Top nav**: hamburger menu < 768px; primary CTA stays visible at top right.
- **Hero**: mockup image moves below copy < 768px; copy claims full width.
- **Feature grid**: 3 → 2 → 1 columns at 1024 / 768 / 480.
- **Pricing tiers**: stack vertically < 768px with the popular tier highlighted via order shift to top.
- **Footer**: 4-column → 2-column → 1-column at 1024 / 768 / 480.
- **Stat tiles**: 4-across → 2x2 grid → 1-column at 1024 / 768 / 480.

### Image behavior

Hero newsletter-mockups use `aspect-ratio: 4/3` lock with `object-fit: cover`. Below 768px, mockup fills container width with maintained aspect ratio.

### Container queries

Used inside the dashboard mockups — the tier component switches between condensed and expanded modes based on container width.

## 11. Content & Voice

### Tone

beehiiv's tone is **monetisation-loud**: direct, present-tense, unapologetic about money. It writes like a financial newspaper's promotional column — short bulletins, dollar figures at the headline scale, and a willingness to use phrases like "10x your revenue" or "monetize from day one" that softer brands would avoid. Headlines lean on numerals and verbs of growth ("Scale your newsletter", "Monetize without limits"); the secondary copy explains the mechanism plainly.

### Microcopy patterns

- **Button verbs**: "Start free", "Sign up free", "Launch your newsletter", "Talk to sales", "Book a demo", "Start earning". The verb is always action-forward and the modifier is always free or money-related.
- **Error messages**: pattern is "[Action] couldn't be completed. [Reason]." e.g. "Couldn't send your newsletter — your account has unpaid charges. Update your billing to resume."
- **Success confirmations**: short, declarative, often paired with a numeral. "Newsletter sent to 10,427 subscribers." rather than "Your newsletter was sent successfully!"

### Empty states

Empty states are direct and instructional, with a monetisation prompt where relevant. "No subscribers yet — share your signup link" with a copy-link button as primary action. "No revenue this month — set up your first sponsorship." Empty-state copy frames the absence as opportunity, not failure.

### CTA verb conventions

- **Primary marketing CTA**: "Start free" or "Sign up free" — the canonical phrase.
- **Money-forward CTA**: "Start earning", "Monetize now", "Launch & earn".
- **Demo / sales**: "Book a demo" or "Talk to sales".
- **Newsletter signup**: "Subscribe" — plain, with the numeral count nearby ("Join 50,000 readers").

## 12. Dark Mode & Theming

beehiiv's marketing surface uses dark mode **as a band-level treatment**, not as a default page mode. The dark band is the testimonial / footer zone; the rest of the page stays on white-and-yellow. The dark token map (see frontmatter `colors-dark`):

- **bg**: `#000000` (pure black, no warmth)
- **bg-soft**: `#0a0a0a` for testimonial card surfaces
- **surface**: `#1a1a1a`, **surface-strong**: `#2a2a2a`
- **text**: `#ffffff` (no opacity tilt)
- **text-muted**: `#ffffffb3`, **text-soft**: `#ffffff80`
- **brand**: `#ffd60a` — yellow holds at full saturation; contrast against `#000000` is 17.4:1 (AAA)
- **border**: `#1f1f1f` (the inset-ring black-on-black)

When implementing the dark band:
- Cards use `1px solid #1f1f1f` (or inset ring) instead of the 2px outer border — outer 2px on black reads as overkill.
- Yellow gains link-duty in the dark band (it is the only place yellow does links).
- Pill CTAs invert: white pill with black text on the dark band.
- No shadows are added; the dark mode preserves the flat-as-discipline doctrine.

The dark zone is opt-in only — beehiiv does not follow `prefers-color-scheme: dark` automatically. The dashboard / product side has a separate full dark theme controlled by user preference.

## 13. Lineage & Influences

beehiiv's design lineage runs through three traditions: financial-broadsheet boldness, industrial graphic vocabulary, and 2010s zine-revival aesthetics. The yellow-and-black contrast pair is heritage — caution signs, taxi liveries, hardware-store branding — and the brand reaches for that vernacular legibility deliberately. The 2px solid black card border is a near-brutalist move borrowed from sticker-art and zine-revival design (the Mast Brothers chocolate-bar typography era), translated into landing-page form.

The display family (PP Neue Machina from Pangram Pangram) is the explicit citation of the industrial-geometric tradition that runs through Mark Simonson's Proxima, Pangram's full library, and Inter Display. The voice — monetisation-forward, direct, present-tense — is positioned as the loud counter to Substack's literary register and Ghost's open-source warmth. Where Substack invites you to write, beehiiv invites you to scale.

The Off-White / Virgil Abloh reference is structural: the quotation-mark-as-decoration, the bold display, the black-on-yellow industrial vocabulary. beehiiv translates that fashion-graphic idiom into newsletter-platform marketing, and the translation is unusually direct.

**Named influences**

- **Wall Street Journal** ([wsj.com](https://www.wsj.com)) — Tabloid + financial-news loud-headline lineage; the broadsheet front-page energy.
- **Off-White** ([off---white.com](https://www.off---white.com)) — Quotation-marks, bold display, black-on-yellow industrial graphic vocabulary.
- **Substack** ([substack.com](https://substack.com)) — Direct rival; beehiiv is positioned as the louder, money-first alternative.
- **Pangram Pangram** ([pangrampangram.com](https://pangrampangram.com)) — The PP Neue Machina display family — industrial geometric sans tuned for marketing punch.
- **New York Post** ([nypost.com](https://nypost.com)) — Tabloid front-page boldness translated into landing-page form.

## 14. Do's and Don'ts

**Do**

- Keep the hero yellow saturated at exactly `#ffd60a`; lighter yellows read as cosy, darker yellows read as caution-tape industrial — neither is beehiiv.
- Always set black on yellow (and never white on yellow); the contrast ratio and the tabloid heritage demand it.
- Use a 2px solid black border on cards — the hairline-and-shadow language of Stripe / Linear is explicitly avoided here.
- Run the display family at 800 weight or heavier; 700 is the bottom of the ladder, not the default.
- Use JetBrains Mono with `tnum` for revenue stats and pricing; the mono numerals lock-step align across cards.
- Cycle bands aggressively: yellow → white → black → white → yellow. The cycle is the brand's pulse.
- Use the black pill CTA on yellow as the canonical action; the yellow pill on white is the secondary inversion.
- Honor `prefers-reduced-motion: reduce` — collapse hover lifts and stat count-ups to static states.
- Run sections at 120–160px vertical padding; the broadsheet breath is the rhythm.
- Use 12px card radius and full pill (9999px) for the CTA — the moderate-card / full-pill pair is the signature.

**Don't**

- Don't soften the display type weight below 700; beehiiv lives on the heavy side of the type ladder.
- Don't introduce a third hue; the system is yellow + black + white and any drift breaks the tabloid identity.
- Don't apply drop shadows to cards; the hyper-flat 2px border is the elevation strategy.
- Don't replace the yellow with pastel-yellow or muted gold — the saturated `#ffd60a` is non-negotiable.
- Don't set white on yellow text; the contrast fails and the heritage breaks. Black on yellow always.
- Don't add gradients, glows, or atmospheric blur — the system is poster-flat.
- Don't soften the band transitions with gradients; the abrupt swap from yellow to black is the energy.
- Don't run hero copy below 56px on desktop; the bulletin-loud register requires headline scale.
- Don't use Inter as the display family; Inter is the body. PP Neue Machina (or Inter Display fallback) carries the marketing voice.
- Don't follow `prefers-color-scheme: dark` automatically on marketing — the dark band is a designed band, not a system mode.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #ffffff
bg-yellow: #ffd60a
bg-dark: #000000
text: #000000
text-on-yellow: #000000
text-on-dark: #ffffff
text-muted: #666666
brand: #ffd60a
brand-hover: #e6c000
border: #000000
border-soft: #e5e5e5
```

### Example Component Prompts

1. "Create a hero in the beehiiv style: full-bleed `#ffd60a` yellow band, PP Neue Machina (or Inter Display fallback) at 88px / 800 weight headline in `#000000` with `-0.04em` tracking, supporting body at Inter 18px / 400 in `#000000`, primary black-pill CTA (`#000000` background, `#ffffff` text at Inter 600 / 16px, `14px 28px` padding, full pill 9999px radius)."

2. "Design a feature card in the beehiiv style: `#ffffff` background, `2px solid #000000` border, 12px radius, 32px padding, NO drop shadow, PP Neue Machina 700 / 28px H3 title, body at Inter 400 / 16px in `#000000`. Hover: `translateY(-2px)`, border stays at 2px solid black."

3. "Render a revenue stat tile in the beehiiv style: `#ffd60a` yellow background, `2px solid #000000` border, 12px radius, 24px padding, JetBrains Mono 800 / 96px numeral with `tnum` enabled in `#000000`, label below at JetBrains Mono 600 / 12px tracked `+0.06em` uppercase."

4. "Create a dark testimonial band in the beehiiv style: full-bleed `#000000` background, testimonial card at `#0a0a0a` with `1px solid #1f1f1f` ring (inset), 12px radius, 32px padding, quote at Inter 500 / 18px in `#ffffff`, attribution at JetBrains Mono 600 / 12px in `#ffd60a`."

5. "Design a newsletter-signup form in the beehiiv style: pill-shaped wrapper at 9999px radius, `2px solid #000000` border, white fill, Inter 500 / 16px input with placeholder `#999999`, black pill submit button at right. Focus ring: `0 0 0 3px rgba(255,214,10,0.4)` yellow."

6. "Render a pricing tier card in the beehiiv style: `#ffffff` background, `2px solid #000000` border, 12px radius, 32px padding, tier name at PP Neue Machina 700 / 22px, price at JetBrains Mono 800 / 64px with `tnum` and `-0.025em` tracking in `#000000`, feature list below at Inter 400 / 16px with `#000000` checkmark bullets, primary CTA black pill at the bottom."

### Iteration Guide

1. **Start with the yellow**: confirm the saturated `#ffd60a` (not pastel, not gold). If your yellow reads cosy, you've drifted to a different system.
2. **Verify the type voice**: hero headlines should hit 56–112px at 800 weight with negative tracking around `-0.03em` to `-0.045em`. If the headline reads competent rather than declarative, tighten the track and bump the weight.
3. **Audit the elevation strategy**: cards must use `2px solid #000000` border, never a drop shadow. If you see any soft shadow on a card, replace it with the 2px border.
4. **Check the contrast pair**: text on yellow must be black; text on white can be black or grey; text on black must be white. White on yellow fails contrast and breaks the heritage.
5. **Verify the band cycle**: a complete page should cycle yellow → white → black → white → yellow. If your page is mostly white, you're missing the brand's pulse.
6. **Confirm the CTA shape**: primary action should be the black pill at full 9999px radius. Rectangle buttons read as secondary, not primary.
7. **Audit the stat surfaces**: every numeric stat (revenue, subscribers, growth) should use JetBrains Mono with `tnum` at 64–96px scale. If your stats are in Inter, you're missing the technical-monetisation cue.
8. **Test the reduced-motion path**: card hover lifts and stat count-ups should collapse to static states under `prefers-reduced-motion: reduce`.
