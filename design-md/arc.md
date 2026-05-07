---
name: Arc
tagline: Browser-as-personality marketing — buttery cream canvas, Marlin Soft display, hand-tooled blue-and-coral palette.
updated_at: 2026-05-05T10:17:17+12:00
published_at: 2026-05-03T10:27:49+12:00
author: webdesignhot
source_url: https://arc.net
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [saas, dev-tools]
tags: [light, warm, playful, sans, mono, organic, retro]
preview_swatch: ['#FFFCEC', '#2404AA', '#000000']
related: [linear, raycast, notion]
description: 'Arc treats its product page like a fanzine — the canvas is a buttery cream `#FFFCEC`, headlines run in Marlin Soft SQ at heavyweight 700 with tight `-0.04em` tracking, and the accent palette mixes a deep `#2404AA` blue with a hot coral `#FB3A4D`. The result is editorial-feeling, hand-built, and unmistakable inside a sea of dark dev-tool sites. Where Linear runs near-black canvas + Inter Variable, where Vercel runs sharp white + Geist, where Raycast runs a dark dashboard register, Arc ships cream + soft-square sans + a 3-color brand stack — closer to a New York indie magazine than a Bay Area browser. The Browser Company''s house aesthetic leans editorial-fanzine over big-tech-sterile; the marketing canvas is a buttery cream (called "brandOffwhite" in the source CSS), closer to Notion''s warm grays than to any rival browser''s chrome. Headlines hold in Marlin Soft SQ — a soft-square sans that pairs warm lowercase shapes with a heavyweight 700 hold and aggressive `-0.04em` tracking. Body uses Marlin (sister non-soft variant) and inline code uses ABC Favorit Mono. CTAs invert to white pills with deep-blue text — coral is reserved for emphasis, not buttons.'

colors:
  # Primary
  bg: '#FFFCEC'                          # brandOffwhite — buttery cream canvas
  bg-secondary: '#FFF8DC'                # warmer cream for inset zones
  surface: '#FFFFFF'                     # pure white card / CTA surface
  surface-elev: '#FFFEF7'                # subtle lift over cream
  text: '#000000'                        # pure black on cream — high contrast
  text-strong: '#000000'                 # display copy
  text-medium: 'rgba(0, 0, 0, 0.8)'      # secondary copy
  text-soft: 'rgba(0, 0, 0, 0.6)'        # supporting / metadata
  text-faint: 'rgba(0, 0, 0, 0.45)'      # captions, eyebrows
  text-muted: 'rgba(0, 0, 0, 0.3)'       # disabled / faint
  # Brand
  brand: '#2404AA'                       # deep cobalt — dominant accent
  brand-deep: '#1A0388'                  # pressed-state cobalt
  brand-blue: '#3139FB'                  # saturated electric blue
  brand-red: '#FB3A4D'                   # hot coral, reserved for emphasis
  brand-coral-soft: '#FFE3E6'            # coral wash
  on-brand: '#FFFCEC'                    # cream label on cobalt
  cta-bg: '#FFFFFF'                      # white pill CTA
  cta-text: '#2702C2'                    # deep-blue CTA text
  # Student / community sub-palette
  swatch-pale-green: '#D7F0D2'
  swatch-salmon: '#FFD9CF'
  swatch-pale-yellow: '#FFF1A8'
  swatch-soft-blue: '#D1E2FF'
  swatch-lavender: '#E6DCFF'
  # Interactive
  link: '#2404AA'                        # cobalt link
  link-hover: '#3139FB'                  # electric blue on hover
  selected-bg: 'rgba(36, 4, 170, 0.08)'  # cobalt 8% wash
  disabled: 'rgba(0, 0, 0, 0.3)'
  # Borders
  border: 'rgba(0, 0, 0, 0.12)'          # default hairline
  border-strong: 'rgba(0, 0, 0, 0.20)'   # outlined buttons
  border-subtle: 'rgba(0, 0, 0, 0.06)'   # quietest division
  border-brand: 'rgba(36, 4, 170, 0.30)' # cobalt-tinted hairline
  # Semantic
  success-bg: '#D7F0D2'                  # pale-green tint
  success-text: '#1F4D24'
  warning-bg: '#FFF1A8'                  # pale-yellow tint
  warning-text: '#7A5A00'
  danger-bg: '#FFE3E6'                   # coral wash
  danger-text: '#A8112A'
  info-bg: '#D1E2FF'                     # soft-blue tint
  info-text: '#1A2B6B'

typography:
  display:
    family: '"Marlin Soft SQ", -apple-system, "system-ui", "Segoe UI", Roboto, sans-serif'
    weights: [400, 500, 700]
    opentype-features: ['liga', 'kern']
  body:
    family: 'Marlin, -apple-system, "system-ui", "Segoe UI", Roboto, sans-serif'
    weights: [400, 500]
    opentype-features: ['liga', 'kern']
  mono:
    family: '"ABC Favorit Mono", Menlo, Monaco, "Liberation Mono", monospace'
    weights: [400]
    opentype-features: ['tnum', 'zero']
  scale:
    display-hero:    { size: 64, weight: 700, lineHeight: 0.92, tracking: '-0.04em', family: display }
    display:         { size: 56, weight: 700, lineHeight: 0.93, tracking: '-0.04em', family: display }
    h1:              { size: 46, weight: 700, lineHeight: 0.93, tracking: '-0.04em', family: display }
    h2:              { size: 36, weight: 700, lineHeight: 1.0,  tracking: '-0.03em', family: display }
    h3:              { size: 28, weight: 500, lineHeight: 1.15, tracking: '-0.02em', family: display }
    h4:              { size: 22, weight: 500, lineHeight: 1.25, tracking: '-0.01em', family: display }
    h5:              { size: 18, weight: 500, lineHeight: 1.35, family: display }
    eyebrow:         { size: 11, weight: 500, lineHeight: 1.4,  tracking: '0.08em', family: mono, transform: uppercase }
    body-large:      { size: 20, weight: 400, lineHeight: 1.45, family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.5,  family: body }
    body-small:      { size: 14, weight: 400, lineHeight: 1.5,  family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.4,  family: body }
    caption-tabular: { size: 12, weight: 500, lineHeight: 1.4,  family: mono, opentype: 'tnum' }
    label:           { size: 11, weight: 500, lineHeight: 1.3,  family: mono, transform: uppercase }
    button:          { size: 14, weight: 600, lineHeight: 1.0,  family: body }
    code:            { size: 14, weight: 400, lineHeight: 1.55, family: mono }
    code-micro:      { size: 11, weight: 400, lineHeight: 1.4,  family: mono }
    quote-pull:      { size: 28, weight: 500, lineHeight: 1.2,  tracking: '-0.02em', family: display }

radius:
  micro: 2
  sm: 6
  md: 10
  lg: 16
  xl: 24
  pill: 9999

spacing:
  base: 4
  scale: [1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 48, 64, 80, 96, 128]

layout:
  page-width: 1280
  prose-width: 680
  site-gutter: 'clamp(24px, 5vw, 64px)'
  header-height: 64
  grid-columns: 12
  section-rhythm: '80-128px'

components:
  button-primary:
    background: '#FFFFFF'
    text: '#2702C2'
    padding: '12px 22px'
    radius: 10
    border: 'none'
    font: 'Marlin 600 / 14px'
    hover-bg: '#FFFCEC'
    hover-text: '#1A0388'
    active-bg: '#F2EFDB'
    use: 'Primary action — white pill with deep-blue label, the inverse of Linear''s dark CTA'
  button-secondary:
    background: 'transparent'
    text: '#000000'
    padding: '12px 22px'
    radius: 10
    border: '1px solid rgba(0, 0, 0, 0.20)'
    font: 'Marlin 600 / 14px'
    hover-bg: 'rgba(0, 0, 0, 0.04)'
    use: 'Outlined twin — same shape, no fill'
  button-cobalt:
    background: '#2404AA'
    text: '#FFFCEC'
    padding: '12px 22px'
    radius: 10
    font: 'Marlin 600 / 14px'
    hover-bg: '#3139FB'
    active-bg: '#1A0388'
    use: 'Rare cobalt CTA — dark-section emphasis only'
  button-ghost:
    background: 'transparent'
    text: '#000000'
    padding: '10px 16px'
    font: 'Marlin 500 / 14px'
    hover-text: '#2404AA'
    use: 'Quiet third action — nav links, footer'
  card:
    background: '#FFFFFF'
    border: '1px solid rgba(0, 0, 0, 0.12)'
    radius: 16
    padding: '28px'
    use: 'Editorial card — white panel on cream, hand-built feel'
  card-cream:
    background: '#FFF8DC'
    border: '1px solid rgba(0, 0, 0, 0.08)'
    radius: 16
    padding: '32px'
    use: 'Warmer cream inset for testimonials and pull-quotes'
  card-student:
    background: 'var(--swatch)'
    border: 'none'
    radius: 16
    padding: '32px 28px'
    use: 'Student/community card — pale green, salmon, lavender swatch fills'
  input:
    background: '#FFFFFF'
    border: '1px solid rgba(0, 0, 0, 0.20)'
    radius: 10
    padding: '12px 16px'
    font: 'Marlin 400 / 16px'
    placeholder-color: 'rgba(0, 0, 0, 0.45)'
    focus-ring: '0 0 0 2px #2404AA'
    use: 'Form fields, search, email capture'
  badge-eyebrow:
    background: 'transparent'
    text: 'rgba(0, 0, 0, 0.6)'
    padding: '0'
    font: 'ABC Favorit Mono 500 / 11px / uppercase / 0.08em'
    use: 'Section eyebrow — mono caps, no chrome'
  pill-coral:
    background: 'rgba(251, 58, 77, 0.12)'
    text: '#A8112A'
    padding: '4px 12px'
    radius: 9999
    font: 'Marlin 500 / 12px'
    use: 'Hot-coral chip for emphasis labels — never a CTA'
  nav-link:
    background: 'transparent'
    text: '#000000'
    padding: '8px 14px'
    font: 'Marlin 500 / 15px'
    hover-text: '#2404AA'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-playful: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  duration-fast: 120
  duration-standard: 220
  duration-slow: 360
  duration-page: 480
  reduced-motion: 'respects prefers-reduced-motion: reduce — all transitions become opacity-only, durations halved'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1440

shadows:
  none: 'none'
  ambient: 'rgba(0, 0, 0, 0.04) 0 1px 3px'
  standard: 'rgba(0, 0, 0, 0.06) 0 4px 12px'
  riso: 'rgba(36, 4, 170, 0.10) 2px 2px 0px'
  elevated: 'rgba(0, 0, 0, 0.08) 0 12px 32px -8px, rgba(0, 0, 0, 0.04) 0 4px 8px'
  ring: '0 0 0 2px #2404AA'

accessibility:
  contrast-text-on-bg: 17.8                # #000000 on #FFFCEC — AAA at all sizes
  contrast-text-on-brand: 13.1             # #FFFCEC on #2404AA — AAA
  contrast-cta-text-on-cta: 12.4           # #2702C2 on #FFFFFF — AAA
  contrast-text-soft-on-bg: 7.9            # 60% black on cream — AAA
  focus-ring: '2px solid #2404AA with 2px offset'
  reduced-motion-honored: true
  keyboard-nav: 'visible focus on every interactive surface; tab order matches visual'
  prose-line-length: 'capped at ~680px for editorial readability'

dark-mode: null                            # marketing surface is light-only; the cream is the brand
---

## 1. Visual Theme & Atmosphere

Arc's marketing site refuses the dark-canvas dev-tool default. Open the page and you land on a buttery cream `#FFFCEC` — a warm off-white called "brandOffwhite" in the source CSS, closer to Notion's paper-warm grays than to Linear's near-black or Vercel's pure white. The hero stacks at 46px in **Marlin Soft SQ** at weight 700 with a tight `-0.04em` tracking; the supporting type runs in **Marlin** (the matched non-soft variant) and inline labels run in **ABC Favorit Mono**. The opening copy reads like a press quote — Arc's marketing voice borrows from real reviewers ("Arc is the Chrome replacement I've been waiting for") set as the H1. The whole surface feels editorial: a fanzine published by browser nerds.

What makes Arc visually distinctive is the *combination* — most dev-tool sites pick one differentiator (color, type, layout) and lean. Arc layers three: the warm cream ground, the heavyweight soft-square type, and a hand-built three-color brand stack. Linear is dark + Inter. Vercel is sharp + Geist. Arc is cream + Marlin Soft + cobalt-coral-electric — a third option that signals warmth, opinion, and play. The accent palette of deep cobalt `#2404AA`, hot coral `#FB3A4D`, and electric blue `#3139FB` is more painterly than algorithmic; you can imagine the hex values being mixed by hand on a riso color sample, not picked from a Tailwind palette.

The third register is the **student / community sub-palette**. Arc's education and community pages (built around the campus ambassadors program and student-discount tier) drop into a pastel chip set — pale green, salmon, lavender, soft yellow — used as full-bleed page grounds and decorative borders. The sub-palette signals warmth and community without competing with the cobalt-led primary system; the chrome stays consistent (Marlin Soft SQ, white CTA, 10px radius) while the canvas warms into pastel.

Atmospheric vocabulary that captures the feeling: *cream-paper, fanzine, hand-tooled, soft-square, browser-nerds, warm-confident, riso-print, indie-magazine, painterly-palette, opinionated-warm, editorial-product.* Every surface lands like it was assembled by someone who reads N+1 and zines, not someone optimizing conversion-rate funnels.

**Key Characteristics**
- Cream `#FFFCEC` canvas — never pure white, always paper-warm "brandOffwhite"
- Custom **Marlin Soft SQ** display — soft-square sans with heavyweight 700 hold
- Tight `-0.04em` tracking on headlines — broadsheet-masthead compression
- Three-color brand stack — cobalt `#2404AA`, coral `#FB3A4D`, electric `#3139FB`
- White-pill CTA with deep-blue label — inverse of Linear/Vercel's dark pill
- Hand-built palette — feels mixed, not algorithmic
- Pastel community sub-palette (pale green, salmon, lavender) for student pages
- ABC Favorit Mono inline — Swiss-modern monospace by Dinamo
- Subtle riso-shadow language — flat with offset color, not drop-shadow
- 10px button radius — softer than Vercel's 6px, not pill geometry
- Editorial single-column layout with asymmetric pull-quotes
- Opinion-led marketing voice — quotes from real users as H1

## 2. Color Palette & Roles

### Primary

- **bg** `#FFFCEC` — buttery cream "brandOffwhite", the defining canvas. Never substitute `#FFFFFF`.
- **text** `#000000` — pure black on cream gives 17.8:1 contrast (AAA at all sizes).
- **bg-secondary** `#FFF8DC` — warmer cream for inset testimonial blocks.
- **surface** `#FFFFFF` — pure white for cards, CTAs, modal sheets.
- **cta-bg** `#FFFFFF` — primary CTA fill is white (not the cream); the value contrast against cream sells the button.
- **cta-text** `#2702C2` — deep blue label inside the white pill — Arc's signature CTA inversion.

### Brand & Accent

- **brand** `#2404AA` — deep cobalt; the dominant accent for links, brand wordmark, ghost-button hover, focus rings.
- **brand-deep** `#1A0388` — pressed-state cobalt.
- **brand-blue** `#3139FB` — saturated electric blue; used on link-hover and emphasis spots.
- **brand-red** `#FB3A4D` — hot coral, reserved for highlight chips and emphasis labels. **Never a CTA fill.**
- **brand-coral-soft** `#FFE3E6` — coral wash for danger semantic and gentle highlight grounds.

### Student / Community Sub-Palette

- **swatch-pale-green** `#D7F0D2` — used on Arc Education pages.
- **swatch-salmon** `#FFD9CF` — community / ambassador pages.
- **swatch-pale-yellow** `#FFF1A8` — pricing and student-discount callouts.
- **swatch-soft-blue** `#D1E2FF` — feature-comparison rails.
- **swatch-lavender** `#E6DCFF` — release notes and changelog.

These five hues function as full-bleed section grounds for community pages; on the marketing chrome they're *never* applied. The pastel set is sequenced — one hue per page, never stacked.

### Interactive

- **link** `#2404AA` — cobalt link in body copy, underlined.
- **link-hover** `#3139FB` — electric blue on hover; the only chromatic transition.
- **selected-bg** `rgba(36, 4, 170, 0.08)` — cobalt 8% wash for selected nav.
- **disabled** `rgba(0, 0, 0, 0.3)` — disabled control text.

### Neutral Scale

- **black** `#000000` — primary text and headlines (no slate substitute; pure black on cream is the choice).
- **text-medium** `rgba(0, 0, 0, 0.8)` — secondary heading colour.
- **text-soft** `rgba(0, 0, 0, 0.6)` — supporting copy, captions.
- **text-faint** `rgba(0, 0, 0, 0.45)` — eyebrows, placeholder.
- **text-muted** `rgba(0, 0, 0, 0.3)` — disabled microcopy.

### Surface & Borders

- **surface-0 (page)** `#FFFCEC` cream.
- **surface-1 (panel)** `#FFF8DC` warmer cream.
- **surface-2 (card)** `#FFFFFF` white card lift.
- **border** `rgba(0, 0, 0, 0.12)` — default hairline.
- **border-strong** `rgba(0, 0, 0, 0.20)` — outlined buttons.
- **border-subtle** `rgba(0, 0, 0, 0.06)` — quietest separation.
- **border-brand** `rgba(36, 4, 170, 0.30)` — cobalt-tinted rule for emphasis.

### Shadow Colors

Arc's depth language is **flat with riso-print warmth**. Cards lift off cream by value contrast (white-on-cream); explicit shadows are rare and, when used, mimic riso-print offsets — slightly shifted, slightly cobalt-tinted (`rgba(36, 4, 170, 0.10) 2px 2px 0px`) — never the hard neutral drop-shadow of dashboard apps. The brand never uses cool blue-tinted neutral shadows; that would crack the warm temperature of the page.

### Semantic

- **success** — bg `#D7F0D2` (pale green), text `#1F4D24`, border `rgba(31, 77, 36, 0.30)`.
- **warning** — bg `#FFF1A8` (pale yellow), text `#7A5A00`, border `rgba(122, 90, 0, 0.25)`.
- **danger** — bg `#FFE3E6` (coral wash), text `#A8112A`, border `rgba(168, 17, 42, 0.30)`.
- **info** — bg `#D1E2FF` (soft blue), text `#1A2B6B`, border `rgba(26, 43, 107, 0.25)`.

The unusual choice: semantic colours come from the *student sub-palette*, not from a separate Material or Tailwind ladder. Success isn't `green-500`; it's pale-green. The whole palette is one painterly system.

## 3. Typography Rules

### Font Family

- **Display**: `"Marlin Soft SQ", -apple-system, system-ui, sans-serif` — custom commissioned soft-square sans by The Browser Company. Square skeletons with rounded interior corners give the type its hand-built warmth. Used at weight 400 / 500 / 700.
- **Body**: `Marlin, -apple-system, system-ui, sans-serif` — the matched non-soft sister face. Used at 400 / 500 for paragraph copy, captions, and UI labels.
- **Mono**: `"ABC Favorit Mono", Menlo, Monaco, monospace` — Dinamo Typefaces' Swiss-modern monospace. Used for inline code, eyebrow caps, and tabular numerals.
- **OpenType features**: `liga` and `kern` always on. `tnum` and `zero` enabled in mono (tabular figures, slashed zero) for code blocks.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| Display Hero | Marlin Soft SQ | 64px | 700 | 0.92 | -0.04em | liga | Hero ceiling, largest pull |
| Display | Marlin Soft SQ | 56px | 700 | 0.93 | -0.04em | liga | Section intro at scale |
| H1 | Marlin Soft SQ | 46px | 700 | 0.93 | -0.04em | liga | Page title, the canonical Arc hero |
| H2 | Marlin Soft SQ | 36px | 700 | 1.00 | -0.03em | liga | Major section |
| H3 | Marlin Soft SQ | 28px | 500 | 1.15 | -0.02em | — | Sub-section, weight steps down |
| H4 | Marlin Soft SQ | 22px | 500 | 1.25 | -0.01em | — | Card heading |
| H5 | Marlin Soft SQ | 18px | 500 | 1.35 | normal | — | Inline emphasis |
| Eyebrow | ABC Favorit Mono | 11px | 500 | 1.40 | 0.08em | uppercase | Section pre-label, mono caps |
| Body Large | Marlin | 20px | 400 | 1.45 | normal | — | Lede paragraph |
| Body | Marlin | 16px | 400 | 1.50 | normal | — | Default paragraph copy |
| Body Small | Marlin | 14px | 400 | 1.50 | normal | — | Captions, sidebars |
| Caption | Marlin | 13px | 400 | 1.40 | normal | — | Image captions |
| Caption Tabular | ABC Favorit Mono | 12px | 500 | 1.40 | normal | tnum | Stats, data labels |
| Label | ABC Favorit Mono | 11px | 500 | 1.30 | uppercase | — | UI labels, mono caps |
| Button | Marlin | 14px | 600 | 1.00 | normal | — | CTA copy |
| Pull Quote | Marlin Soft SQ | 28px | 500 | 1.20 | -0.02em | — | Editorial pull-quote |
| Code | ABC Favorit Mono | 14px | 400 | 1.55 | normal | — | Inline + block |
| Code Micro | ABC Favorit Mono | 11px | 400 | 1.40 | normal | — | Footnote refs |

### Principles

- **Soft-square is the signature.** Marlin Soft SQ at weight 700 with `-0.04em` tracking on the H1 is the single decision that makes Arc unmistakable. Switching to Inter (or Geist, or Söhne) collapses the brand into the dev-tool register.
- **Weight 700 only for display.** Headlines hit 700; subheads step down to 500; body holds at 400. The brand never asks weight to do shouting work — the *shape* of Marlin Soft does it.
- **Negative tracking compresses with size.** -0.04em at 36–64px, -0.03em at 28–36px, -0.02em at 22–28px, normal at 18px and below. The compression mirrors broadsheet masthead typography.
- **Mono for eyebrows, not just code.** ABC Favorit Mono caps at 11px / 0.08em tracking are Arc's section pre-labels — a Dinamo-signed signal of type discipline.
- **Two faces, never three.** Display (Marlin Soft SQ) + body (Marlin) + mono (Favorit). Adding a serif breaks the system; Arc deliberately avoids the Notion-style sans+serif duet.
- **Press-quote H1.** The hero copy is often a real reviewer's quote. Marlin Soft at 700 / 46px / -0.04em makes the press voice feel like a magazine cover blurb, not a marketing line.
- **OpenType discipline**: `liga` and `kern` always on; `tnum` and `zero` in mono for tabular alignment in stats.
- **Italics in body, never in display.** Marlin italic carries quoted titles and gentle emphasis; Marlin Soft never italicises.

## 4. Component Stylings

### Buttons

**Primary (White Pill)**
- Background: `#FFFFFF`. Text: `#2702C2` deep blue, Marlin 600 / 14px.
- Padding: `12px 22px`. Radius: `10px`. No border.
- Hover: bg → `#FFFCEC` (cream), text → `#1A0388`.
- Active: bg → `#F2EFDB` (deeper cream), text → `#1A0388`.
- Use: Primary CTA — *Get Arc, Download for Mac, Try Arc Search.*

**Secondary (Outlined)**
- Background: transparent. Text: `#000000`. Border: `1px solid rgba(0, 0, 0, 0.20)`.
- Same padding (12×22), radius (10), font (Marlin 600 / 14px) as primary.
- Hover: bg → `rgba(0, 0, 0, 0.04)`.
- Use: Twin to primary — *Watch the demo, Read the changelog.*

**Cobalt (Dark-Section CTA)**
- Background: `#2404AA`. Text: `#FFFCEC`. No border.
- Same shape (10px radius, 12×22 padding).
- Hover: bg → `#3139FB` (electric blue). Active: `#1A0388`.
- Use: Reserved for dark-band hero variants — rare; the white pill is the default primary.

**Ghost (Quiet)**
- Background: transparent. Text: `#000000`. No border.
- Padding: `10px 16px`. Marlin 500 / 14px.
- Hover: text → `#2404AA` cobalt.
- Use: Nav links, footer secondary actions, repeated CTAs in long pages.

### Cards

**Editorial Card**
- Background: `#FFFFFF`. Border: `1px solid rgba(0, 0, 0, 0.12)`. Radius: `16px`. Padding: `28px`.
- Shadow: none — value-contrast separates white from cream.
- Hover: border → `rgba(0, 0, 0, 0.20)`; transition `220ms`.
- Use: Feature tile, capability rail entry, release-note card.

**Cream Inset Card**
- Background: `#FFF8DC` warmer cream. Border: `1px solid rgba(0, 0, 0, 0.08)`. Radius: `16px`. Padding: `32px`.
- Use: Testimonial block, quoted reviewer, pull-quote module.

**Student / Community Card**
- Background: any pastel swatch (pale-green, salmon, lavender, soft-blue, pale-yellow). Border: none. Radius: `16px`. Padding: `32px 28px`.
- Use: Education, ambassador, community-program cards.

### Badges, Tags, Pills

**Eyebrow Label** — no chrome, just type. ABC Favorit Mono 500 / 11px / uppercase / 0.08em tracking, colour `rgba(0, 0, 0, 0.6)`. Sits above section headlines.

**Coral Pill** — bg `rgba(251, 58, 77, 0.12)`, text `#A8112A`, radius `9999px`, padding `4px 12px`. Hot-coral chip for emphasis labels (NEW, BETA, LIVE).

**Cobalt Tag** — bg `rgba(36, 4, 170, 0.08)`, text `#2404AA`, radius `4px`, padding `4px 10px`. Subtle cobalt-tinted pill.

### Inputs / Forms

- Background: `#FFFFFF`. Border: `1px solid rgba(0, 0, 0, 0.20)`. Radius: `10px`. Padding: `12px 16px`.
- Font: Marlin 400 / 16px. Placeholder: `rgba(0, 0, 0, 0.45)`.
- Focus: `0 0 0 2px #2404AA` ring, border → `#000000`.
- Error: border → `#A8112A`, ring → `rgba(168, 17, 42, 0.30)`.
- Helper: caption 13px text-soft below.

### Navigation

- Header height `64px`. Background `#FFFCEC` cream (transparent on hero, becomes opaque-cream on scroll).
- Logo: Arc wordmark, pure black, custom soft-square mark.
- Nav links: Marlin 500 / 15px, colour `#000000`, padding `8px 14px`. Hover → `#2404AA` cobalt.
- Right-side CTA pair: ghost "Sign in" + primary white-pill "Get Arc".
- Mobile: full-screen sheet, links stack at 28px / Marlin Soft 500.

### Optional Components

**Pull Quote** — Marlin Soft SQ 28px / 500 / -0.02em, text-medium, with a 4px cobalt vertical rule on the left edge.

**Footnote** — Marlin 13px / 400, text-soft; sits on a thin border-subtle rule.

**Code Block** — ABC Favorit Mono 14px, bg `#FFF8DC` warm cream, radius `8px`, padding `16px 20px`, border `rgba(0, 0, 0, 0.10)`. Inline code: same font, bg `rgba(0, 0, 0, 0.06)`, padding `2px 6px`, radius `4px`.

**Tooltip** — bg `#000000`, text `#FFFCEC`, radius `6px`, padding `8px 12px`, font `13px / Marlin 500`.

**Modal** — bg `#FFFFFF`, radius `16px`, shadow `rgba(0, 0, 0, 0.12) 0 24px 48px -12px`, max-width `560px`. Cream backdrop overlay at 60% opacity.

**Riso-Shadow Decorative** — selectively applied to feature illustrations: `rgba(36, 4, 170, 0.10) 2px 2px 0px` offset cobalt shadow that mimics riso-print misregistration.

## 5. Layout Principles

### Spacing System

- **Base unit**: 4px.
- **Scale**: 4, 8, 12, 16, 20, 24, 32, 48, 64, 80, 96, 128 — Fibonacci-adjacent.
- **Density observation**: Arc is *generously spaced* by SaaS standards but tighter than Anthropic. Headlines float in 64–96px of margin; body paragraphs sit on 24px line gaps; sections separate at 80–128px.

### Grid & Container

- **Page max width**: `1280px` — standard but feels wider because the cream canvas extends edge-to-edge.
- **Site gutter**: `clamp(24px, 5vw, 64px)` — generous on desktop, accommodating on mobile.
- **Grid**: 12 columns with 24px gutters. Hero blocks span full width; capability rails span 6–8 columns; sidebars span 4.
- **Hero treatment**: full-bleed cream, 46px H1 anchored left of centre, single white-pill CTA aligned underneath.

### Whitespace Philosophy

The cream canvas *is* the whitespace. Arc deliberately under-fills sections so the warm ground reads as a continuous magazine spread rather than a dense product page. Section gutters run **80–128px**; minor blocks sit on 48–64px gaps; intra-section spacing uses 16–32px. The page never feels crowded — empty cream is treated as a primary visual asset.

### Section Cadence

- Hero (cream) → Capability Rail (white card grid on cream) → Press Quote (warmer cream inset) → Feature Spread (cream with riso-shadow illustrations) → Student / Community (pastel swatch ground) → Footer (deeper cream).
- The pastel community sections appear once or twice per page as chromatic punctuation; they never spread to the chrome.
- Cream-on-cream sections separated by 1px border-subtle hairlines or by spacing alone.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| Micro | 2px | Inline chip corners, decorative dividers |
| Standard (sm) | 6px | Code block corners, compact pills |
| Comfortable (md) | 10px | Buttons, inputs, dropdowns — the dominant `--radius--button` |
| Relaxed (lg) | 16px | Cards, modal corners, feature tiles |
| Featured (xl) | 24px | Hero shells, pull-quote modules |
| Pill | 9999px | Coral emphasis chips, status indicators |

Arc's signature radius is **10px** on buttons — softer than Vercel's 6px but not the full pill. Cards run 16px. Pull-quotes and hero modules use 12–24px corner rounds. The Marlin Soft SQ typeface itself echoes the geometry: square shapes with rounded interior corners, a 6–10px corner-radius equivalent in type form.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat — no shadow | Default page surface, hero, body sections |
| 1 | Value-contrast (white card on cream) | Editorial cards, capability tiles |
| 2 | `rgba(0, 0, 0, 0.04) 0 1px 3px` | Sticky nav, dropdowns |
| 3 | `rgba(0, 0, 0, 0.06) 0 4px 12px` | Hover-lifted cards |
| 4 | `rgba(0, 0, 0, 0.08) 0 12px 32px -8px` | Overlay menus, popovers |
| 5 | `rgba(0, 0, 0, 0.12) 0 24px 48px -12px` | Modals, dialogs |
| Riso | `rgba(36, 4, 170, 0.10) 2px 2px 0px` | Decorative offset shadow (illustrations only) |

### Shadow Philosophy

Arc's depth is **flat with riso-warm offsets**. Cards lift off cream by *value contrast alone* — white on cream provides separation without explicit shadow. When shadows do appear (modals, popovers), they're tinted with low-opacity black, never blue-tinted. The decorative *riso-shadow* — a 2px offset cobalt shadow — appears selectively on feature illustrations to mimic riso-print misregistration; it's a brand-tinted shadow used intentionally as ornament, not a generic elevation system. The system reads as paper-and-ink, not interface-and-depth.

## 8. Interaction & Motion

### Easing Curves

- `ease-standard`: `cubic-bezier(0.4, 0, 0.2, 1)` — Material-style; default for hover, focus, color transitions.
- `ease-emphasized`: `cubic-bezier(0.2, 0, 0, 1)` — punchier exit; used on modal enter, hero reveal.
- `ease-playful`: `cubic-bezier(0.34, 1.56, 0.64, 1)` — gentle overshoot; used sparingly on illustration hovers and student-page reveals.

### Duration Buckets

- **Fast (120ms)** — colour transitions, focus rings, link hovers.
- **Standard (220ms)** — button hover, card hover, dropdown reveal.
- **Slow (360ms)** — modal enter/exit, page section fade-in.
- **Page (480ms)** — route transitions, hero reveal sequences.

### Per-Component Micro-States

- **Button hover (white pill)**: bg `#FFFFFF` → `#FFFCEC` (cream); text `#2702C2` → `#1A0388`; transition `220ms ease-standard`. No lift, no scale.
- **Button hover (cobalt)**: bg `#2404AA` → `#3139FB` (electric blue) — the only hover that introduces a *brighter* color.
- **Card hover**: border deepens from `rgba(0, 0, 0, 0.12)` to `rgba(0, 0, 0, 0.20)`; no shadow change.
- **Link hover**: colour `#2404AA` → `#3139FB` over 120ms; underline thickens 1px → 2px.
- **Input focus**: 2px cobalt ring fades in over 120ms; border darkens from 0.20 to full black.
- **Nav link active**: 1px black underline animates left-to-right over 220ms.
- **Illustration hover (playful)**: gentle 1deg rotation + 2px cobalt riso-shadow appears; 360ms ease-playful.

### Page Transitions

Editorial reveal: hero text fades in over 480ms with 24px translate-up; below-fold sections use `IntersectionObserver` to fade in at 80% viewport, 360ms duration, no translate.

### Reduced Motion

`@media (prefers-reduced-motion: reduce)` — all transitions become opacity-only, durations halved. Translate animations and the playful illustration overshoots are disabled entirely; scroll-linked reveals snap to final state. The `ease-playful` curve is replaced with `ease-standard` so motion never feels "bouncy" when the user has opted out.

## 9. Accessibility & A11y

### Contrast Pairs

- **`#000000` text on `#FFFCEC` bg**: 17.8:1 — AAA at all sizes.
- **`rgba(0, 0, 0, 0.6)` text on `#FFFCEC` bg**: 7.9:1 — AAA at body sizes.
- **`rgba(0, 0, 0, 0.45)` text on `#FFFCEC` bg**: 4.5:1 — AA at large sizes only.
- **`#FFFCEC` text on `#2404AA` button**: 13.1:1 — AAA.
- **`#2702C2` text on `#FFFFFF` CTA**: 12.4:1 — AAA at all sizes.
- **`#A8112A` text on `rgba(251, 58, 77, 0.12)` coral pill**: 6.2:1 — AAA at body sizes.

### Focus Indicators

- Default focus ring: `0 0 0 2px #2404AA` cobalt with 2px offset on cream pages.
- On dark surfaces (rare hero variants): `0 0 0 2px #FFFCEC` cream.
- All interactive surfaces must have a visible focus state — no `outline: none` without a replacement.
- The white-pill primary button gets a 2px cobalt ring with 2px white offset, so the ring is visible against both cream and white surfaces.

### ARIA Patterns

- **Navigation**: `<nav aria-label="Main">` with skip-link to main content.
- **Disclosure**: `<button aria-expanded aria-controls>` for collapsible feature sections.
- **Dialog**: `role="dialog" aria-modal="true" aria-labelledby` with focus trap and Esc-to-close.
- **Combobox** (download platform selector): `role="combobox" aria-expanded aria-autocomplete="list"`.
- **Live regions**: `aria-live="polite"` for download-progress messages.

### Keyboard Navigation

- Tab order matches visual flow: skip-link → nav → hero CTA → main content → footer.
- All buttons, links, inputs reachable via Tab; modals trap focus inside until dismissed.
- `Esc` closes modals and the mobile menu sheet.
- Arrow keys navigate within tab groups and listboxes (changelog filters).

### Screen Reader Hints

- Decorative riso-shadow illustrations have `aria-hidden="true"`.
- Icon-only buttons have `aria-label`.
- The Arc wordmark uses `aria-label="Arc"` and visually hides any decorative inner mark.

### Reduced Motion

Honoured via the global media query. All translate/scale animations become opacity-only; the playful overshoot curve is replaced with the standard ease; durations halve. Scroll-linked illustration animations snap to final state.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Use |
|---|---|---|
| Mobile | < 640px | Single column, full-bleed sections, 32px H1 |
| Tablet | 640–1024px | 2-column rails, 40px H1 |
| Desktop | 1024–1280px | Full 12-col grid, 46px H1 |
| Wide | 1280–1440px | Site max width hits |
| Ultra | > 1440px | Page locks to 1280, gutters expand |

### Touch Targets

- Minimum tap target: 44×44px (WCAG AAA).
- Buttons: 44px minimum height on mobile (12px vertical padding × 2 + line-height ≈ 44px).
- Nav link tap area: 44×44px even when visual padding is smaller.

### Collapsing Strategy

- **Header**: full nav at ≥1024px; hamburger sheet below.
- **Hero**: 64px display → 46px H1 → 36px → 32px across desktop/tablet/mobile.
- **Capability grid**: 3-up at desktop, 2-up at tablet, 1-up at mobile.
- **Body width**: 680px → fluid 90vw at mobile.
- **Section spacing**: 128px → 80px → 64px across sizes.

### Image Behavior

- Hero illustrations use `srcset` with 1x/2x/3x for crisp riso-shadow reproduction.
- Browser-screenshot imagery uses `aspect-ratio` to prevent layout shift.
- Lazy-loading on below-fold images; eager on hero.
- Pastel community-page backgrounds use CSS `background-color` (no images) so they render instantly.

### Container Queries

Used inside capability cards to switch icon position when card width crosses 280px (icon-left vs. icon-top). Used inside the changelog rail when the inline meta exceeds 320px.

## 11. Content & Voice

### Tone

**Opinionated, warm, browser-nerd.** Arc writes like a small studio that has read N+1 and Edward Tufte and decided browsers should be fun. Headlines pose strong claims ("The browser that browses for you"); subheads explain like a thoughtful friend; product copy carries small jokes without becoming twee. The voice is the inverse of "Bay Area engineer" — it's "New York indie-magazine editor."

### Microcopy Patterns

- **Button verbs**: "Get Arc," "Download for Mac," "Try Arc Search," "Read the changelog," "Watch the demo." Never "Sign up free!" never "Get started today →".
- **Error messages**: "Couldn't reach the update server. Check your connection or try again." Specific, calm, no shame.
- **Success confirmations**: "Saved." "Got it — see you soon." Brief, friendly.
- **Loading states**: "Downloading…" "Setting up your spaces…" — Arc-specific where possible.
- **Press-quote H1s**: real reviewer quotes pulled forward as the page's primary headline, attributed in caption underneath.

### Empty States

What they say: explain the state and offer the next step. *"No tabs in this Space yet. Open a new tab or pin one from another Space."*
What they don't say: "Oops!", "Whoops!", any apologetic exclamation. Empty states are normal, not failures.

### CTA Verb Conventions

- Primary on hero: "Get Arc," "Download Arc," "Try Arc Search"
- Secondary: "Watch the demo," "Read the announcement," "Read the changelog"
- Footer: "Read the manifesto," "Browse the docs," "View pricing," "Become an ambassador"

The brand never uses "Sign up free!" or "Get started today!" — the tone is invitational and curious, never urgent. Arc doesn't trade in scarcity; it trades in opinion.

## 12. Dark Mode & Theming

**Light-only — no dark variant offered on the marketing surface.** The cream-paper canvas is the brand's defining choice; a dark mode would require re-keying the entire palette and would collapse the editorial-fanzine register that distinguishes Arc from every other dev-tool browser. The cream `#FFFCEC` is non-negotiable.

The product UI (Arc the browser itself) handles its own theming separately and ships a dark mode plus per-Space theme tinting; that variant is documented at the product layer, not on the marketing surface. The marketing site at `arc.net` is intentionally light-only across all viewports and times of day.

If a downstream surface ever needs a dark companion, the rule would be: keep the cobalt accent at full saturation, swap cream for `#1A1814` (warm slate-deep), and lift cards to `#262320` — but this is not currently shipped, and any future dark surface would be a deliberate brand decision, not an automatic theme swap.

## 13. Lineage & Influences

Arc's design DNA is **indie editorial magazine** rather than tech product. The cream paper-canvas, custom soft-square sans, and hand-built three-color palette quote indie New York publications, riso-print zines, and small-studio book design directly. Where contemporary dev-tool brands reach for dark canvases (Linear, Raycast), pure white minimalism (Vercel, Mintlify), or rainbow gradients (early Stripe, current Replit), Arc reaches for the visual language of a fanzine made by browser nerds.

What it inherits: the warm cream conventions of Notion's off-white-paper register, the tight tracking and weight discipline of broadsheet masthead typography, and the painterly hand-mixed quality of indie-press color palettes. What it borrows from contemporaries: Notion's warm-gray ground recoded as cream; Linear's restraint applied to a light canvas; Stripe's confidence in a single brand color, but split into a three-color stack. What it rejects: dark canvases as the "serious dev tool" register, gradient meshes as the "AI startup" register, and the Bay Area sterile-white default.

**Named influences:**

- **Marlin / Marlin Soft (custom commissioned)** — The wordmark's voice — soft-square sans with editorial heft. *https://www.thebrowser.company*
- **Notion** — Adjacent precedent for cream-ground product marketing; warm-gray register. *https://notion.so*
- **ABC Favorit Mono (Dinamo Typefaces)** — Inline mono with Swiss-modern personality. *https://abcdinamo.com/typefaces/favorit*
- **N+1 / Bidoun / The Believer** — Indie editorial magazine layout conventions; press-quote H1s, asymmetric pull-quotes, generous gutters.
- **Riso-print zines** — Color-misregistration aesthetic informs the cobalt-shadow decorative language.
- **Rasmus Andersson / Inter** — Negative reference; Arc deliberately avoids the Inter default to differentiate.
- **The Browser Company in-house brand team** — Hand-built palette curation, three-color stack discipline.

## 14. Do's and Don'ts

### Do

- **Do** keep the cream `#FFFCEC` as the page canvas. Pure white breaks the warm hand-built feel.
- **Do** use Marlin Soft SQ at weight 700 with `-0.04em` tracking for hero copy. It's the heartbeat of the brand.
- **Do** invert the primary CTA to a white pill with deep-blue text. The cream-canvas inversion is the signature.
- **Do** reserve the deep cobalt `#2404AA` for primary accents and let the coral and electric blue support emphasis only.
- **Do** treat the hot coral `#FB3A4D` as a chip / emphasis tag — never a CTA fill.
- **Do** use ABC Favorit Mono for eyebrow caps at 11px / 0.08em tracking. The mono signal is part of the brand voice.
- **Do** apply the riso-shadow (cobalt 2px offset) to feature illustrations only. It's an ornament, not an elevation system.
- **Do** drop into the pastel community sub-palette (pale-green, salmon, lavender) for student / ambassador pages — full-bleed page grounds.
- **Do** quote real reviewers as H1s. The press-quote hero is part of Arc's marketing register.
- **Do** prefer value contrast (white-on-cream) over drop shadows for elevation.

### Don't

- **Don't** flatten the palette to a single brand color. Arc's hand-built feel comes from a three-color brand stack plus the student sub-palette.
- **Don't** use Inter (or Geist, Söhne, SF Pro) for headlines — it instantly reads as generic dev-tool. The soft-square Marlin is the differentiator.
- **Don't** apply heavy drop-shadows. Arc's depth language is flat with subtle borders, occasionally riso-warm offsets.
- **Don't** introduce a third type family. Marlin Soft + Marlin + Favorit Mono is the system.
- **Don't** use coral `#FB3A4D` as a primary CTA fill. The white pill is the primary; coral is a chip.
- **Don't** stack pastel community swatches in the same section. The sub-palette is sequenced — one hue per page.
- **Don't** crowd the page. Cream space is a brand asset.
- **Don't** ship a dark mode for the marketing surface. The cream is non-negotiable.
- **Don't** mix tech-startup verbs ("Sign up free!", "Get started today!") with the brand voice. The tone is invitational.
- **Don't** use pure neutral grey shadows. When elevation is needed, tint warm or use the riso-cobalt offset.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #FFFCEC
surface: #FFFFFF
text: #000000
brand-cobalt: #2404AA
brand-electric: #3139FB
brand-coral: #FB3A4D
cta-bg: #FFFFFF
cta-text: #2702C2
swatch-pale-green: #D7F0D2
swatch-salmon: #FFD9CF
swatch-lavender: #E6DCFF
border: rgba(0, 0, 0, 0.12)
```

### Example Component Prompts

1. **"Create a hero in Arc style — cream `#FFFCEC` canvas, 46px headline in Marlin Soft SQ 700 with `-0.04em` tracking, 16px Marlin body at 60% black, single white-pill CTA `#FFFFFF` background with `#2702C2` deep-blue text at 10px radius, no gradient, no animation. Reading column capped at 680px."**

2. **"Design a capability card in Arc style — white `#FFFFFF` background, 16px radius, 1px `rgba(0, 0, 0, 0.12)` border, 28px interior padding, 22px Marlin Soft SQ 500 heading at -0.01em tracking, 16px Marlin 400 body at 60% black, no shadow, hover deepens border to 0.20 opacity."**

3. **"Build a press-quote hero — Marlin Soft SQ 46px / 700 / -0.04em on cream `#FFFCEC`, the quote in pure black, attribution in 13px Marlin caption at 60% black underneath, no quotation glyphs, white-pill CTA below the attribution."**

4. **"Compose a student-program section — full-bleed pastel `#D7F0D2` pale-green background, 64px vertical padding, 36px Marlin Soft SQ 700 heading in pure black, 18px Marlin body at 80% black, single secondary outlined button (transparent bg, 1px black 0.20 border)."**

5. **"Render an eyebrow + section header pair — ABC Favorit Mono caps at 11px / 0.08em tracking / 60% black, 8px gap, then Marlin Soft SQ 36px / 700 / -0.03em in pure black on cream."**

6. **"Create the primary nav — 64px header height, cream `#FFFCEC` background (transparent on hero), Arc wordmark left-aligned in pure black, links 15px Marlin 500 with cobalt-on-hover, right-aligned ghost 'Sign in' + white-pill 'Get Arc' pair."**

### Iteration Guide

1. **Start with cream, not white.** If the bg is `#FFFFFF`, you've already lost the brand. Cream `#FFFCEC` is the entry ticket.
2. **Switch the headline to Marlin Soft SQ 700 / -0.04em.** Inter at the same size collapses the brand into Vercel/Linear territory. The soft-square shape is the differentiator.
3. **Invert the CTA.** White pill with deep-blue text on a cream canvas is the Arc CTA pattern. Don't use a dark pill (Linear) or coloured fill (Stripe).
4. **Strip gradients.** Any mesh, conic, or radial gradient is wrong — replace with flat cream or a pastel swatch fill.
5. **Reach for the three-color stack, not a single brand color.** Cobalt + coral + electric blue. Coral is emphasis; electric is link-hover; cobalt is dominant.
6. **Add an ABC Favorit Mono eyebrow.** 11px / 0.08em tracking caps above each section heading is part of the Arc register.
7. **Drop the shadows.** Replace box-shadows with value-contrast (white card on cream). If decoration is needed, use the riso-cobalt offset on illustrations only.
8. **Calm the verbs.** Replace "Sign up now!" with "Get Arc"; replace "Learn more →" with "Read the changelog". The voice is invitational and curious.
