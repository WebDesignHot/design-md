---
name: Mistral
tagline: Butter-yellow canvas, Arial as a deliberate anti-tech statement, and zero-radius rectangles — French AI as a brutalist art-school manifesto.
updated_at: 2026-05-06T08:44:32+12:00
published_at: 2026-05-03T16:32:19+12:00
author: webdesignhot
source_url: https://mistral.ai
spec: webdesignhot/0.1
quality: curated
featured: true
categories: [ai, saas]
tags: [light, brutalist, sans, bright, warm, structured]
preview_swatch: ['#fffaeb', '#1f1f1f', '#fff0c2']
related: [vercel, anthropic, huggingface]
description: 'Mistral runs the most distinctive aesthetic of any frontier-AI lab. The canvas is `#fffaeb` — a saturated butter-yellow that reads as French-design provocation, not corporate restraint. Headlines are set at 82px in **Arial** (the system font, used deliberately as an anti-design statement), and every interactive surface — buttons, slides, callouts — is a **zero-radius rectangle** in a near-black `#1f1f1f`. There is no brand blue, no gradient mesh, no mascot — just a saffron page, hard edges, and the cultural confidence of a Paris-based lab refusing the SF tech-look. Slide controls use `#fff0c2`, a paler buttercream, as the only secondary surface. The heritage flame-orange `#ff6b00` lives on in the logomark and merch. The lineage is closer to Werkplaats Typografie + Yves Saint Laurent than to OpenAI or Anthropic — a European, art-school refusal of the SF tech aesthetic that doubles as a powerful brand differentiator.'

colors:
  # Primary
  bg: '#fffaeb'                          # observed butter-yellow body bg — defining canvas
  bg-secondary: '#fff0c2'                # paler buttercream — slide controls and accents
  bg-tertiary: '#fff5d6'                 # lightest buttercream — soft elevation
  surface: '#ffffff'                     # rare white surface, used inside cards
  surface-elevated: '#ffffff'            # white card lift on butter
  text: '#1f1f1f'                        # near-black observed body text (rgb 31,31,31)
  text-strong: '#0a0a0a'                 # rare absolute black — display only
  text-medium: '#3a3a3a'                 # secondary heading
  text-soft: '#5a5a5a'                   # captions, supporting copy
  text-faint: '#8a8a8a'                  # eyebrows, helper microcopy
  text-muted: '#b5b5b0'                  # disabled label
  # Brand
  brand: '#1f1f1f'                       # the brand action colour is just black
  brand-soft: 'rgba(31, 31, 31, 0.10)'   # observed translucent black hover
  brand-deep: '#000000'                  # active/pressed beat
  on-brand: '#ffffff'                    # white label on black rectangle
  # Accent
  accent-flame: '#ff6b00'                # historical Mistral flame orange (logomark, merch)
  accent-flame-deep: '#cc5500'           # darker flame for hover on rare merch surfaces
  accent-warm: '#fff0c2'                 # buttercream secondary surface
  # Interactive
  link: '#1f1f1f'                        # links are slate-dark, underlined
  link-hover: '#000000'                  # darker on hover, occasionally flame-orange
  link-visited: '#5a5a5a'
  selected-bg: '#fff0c2'                 # selected nav state
  disabled: '#b5b5b0'
  cta-bg: '#1f1f1f'
  cta-text: '#ffffff'
  # Neutral scale
  ink-100: '#0a0a0a'
  ink-200: '#1f1f1f'
  ink-300: '#3a3a3a'
  ink-400: '#5a5a5a'
  ink-500: '#8a8a8a'
  ink-600: '#b5b5b0'
  ink-700: '#dcdcd5'
  # Borders
  border: 'rgba(31, 31, 31, 0.18)'       # default hairline
  border-strong: 'rgba(31, 31, 31, 0.30)' # emphasised rule
  border-subtle: 'rgba(31, 31, 31, 0.08)' # quietest division
  border-flame: 'rgba(255, 107, 0, 0.40)' # rare flame-tinted hairline
  # Shadow palette
  shadow-color: 'rgba(31, 31, 31, 0.08)'
  shadow-warm: 'rgba(255, 107, 0, 0.12)'
  # Semantic
  success-bg: '#e8f0d4'                  # warm-green tint sympathetic to butter
  success-text: '#3d5a1f'
  warning-bg: '#ffe4a8'                  # deeper buttercream warning
  warning-text: '#7a4f00'
  danger-bg: '#fde0d4'                   # warm coral, not red-red
  danger-text: '#8a2a0a'
  info-bg: '#e0e8f0'                     # cool slate-blue tint
  info-text: '#1f3a5a'

typography:
  display:
    family: 'Arial, ui-sans-serif, system-ui, sans-serif'
    weights: [400, 700]
    opentype-features: ['kern']
    note: 'Arial is the brand decision — system-default as art-school provocation'
  body:
    family: 'Arial, ui-sans-serif, system-ui, sans-serif'
    weights: [400, 700]
    opentype-features: ['kern']
  mono:
    family: 'ui-monospace, "SF Mono", Menlo, Consolas, monospace'
    weights: [400, 500]
    opentype-features: ['tnum', 'zero']
  scale:
    display-hero:    { size: 82, weight: 400, lineHeight: 1.0,  tracking: '-2.05px', family: display, notes: 'observed hero — the brand defining moment' }
    display:         { size: 64, weight: 400, lineHeight: 1.02, tracking: '-1.5px', family: display }
    h1:              { size: 48, weight: 400, lineHeight: 1.05, tracking: '-1px', family: display }
    h2:              { size: 36, weight: 400, lineHeight: 1.10, tracking: '-0.5px', family: display }
    h3:              { size: 28, weight: 400, lineHeight: 1.15, tracking: 'normal', family: display }
    h4:              { size: 22, weight: 700, lineHeight: 1.25, family: display }
    h5:              { size: 18, weight: 700, lineHeight: 1.30, family: display }
    eyebrow:         { size: 12, weight: 700, lineHeight: 1.3,  tracking: '0.06em', family: display, transform: uppercase }
    body-large:      { size: 18, weight: 400, lineHeight: 1.55, family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.5,  family: body }
    body-small:      { size: 14, weight: 400, lineHeight: 1.5,  family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.4,  family: body }
    caption-tabular: { size: 13, weight: 500, lineHeight: 1.4,  family: mono, opentype: 'tnum' }
    label:           { size: 12, weight: 700, lineHeight: 1.3,  family: display }
    code:            { size: 14, weight: 400, lineHeight: 1.55, family: mono, opentype: 'tnum zero' }
    code-micro:      { size: 11, weight: 400, lineHeight: 1.4,  family: mono }
    button-label:    { size: 14, weight: 400, lineHeight: 1.0,  family: display }

radius:
  micro: 0
  sm: 0
  md: 0
  lg: 0
  xl: 0
  card: 0
  button: 0                              # observed: every button on the marketing site is 0px radius
  input: 0
  pill: 0                                # there is no pill — the system has one shape

spacing:
  base: 4
  scale: [1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 48, 64, 80, 96, 128, 160]

layout:
  page-width: 1280
  prose-width: 720
  site-gutter: 'clamp(20px, 4vw, 64px)'
  header-height: 64
  grid-columns: 12
  grid-gutter: 24
  section-rhythm: '64-128px'

components:
  button-primary:
    background: '#1f1f1f'
    text: '#ffffff'
    padding: '12px 20px'
    radius: 0
    border: 'none'
    font: 'Arial 400 / 14px'
    hover-bg: '#000000'
    active-bg: '#000000'
    use: 'Discover Le Chat / Discover Vibe / Discover Studio — every product CTA is the same hard rectangle'
  button-secondary:
    background: '#fff0c2'
    text: '#1f1f1f'
    padding: '12px 20px'
    radius: 0
    border: 'none'
    font: 'Arial 400 / 14px'
    hover-bg: '#ffe4a8'
    use: 'Slide-next, carousel pagination, inline secondary actions'
  button-tertiary:
    background: 'transparent'
    text: '#1f1f1f'
    padding: '12px 20px'
    radius: 0
    border: '1px solid #1f1f1f'
    font: 'Arial 400 / 14px'
    hover-bg: 'rgba(31, 31, 31, 0.06)'
    use: 'Quietest third action — outlined-only on butter'
  button-ghost:
    background: 'transparent'
    text: '#1f1f1f'
    padding: '8px 12px'
    radius: 0
    font: 'Arial 400 / 14px'
    hover-bg: 'rgba(31, 31, 31, 0.06)'
    use: 'Nav links and footer actions — minimal chrome'
  card:
    background: '#ffffff'
    border: '1px solid rgba(31, 31, 31, 0.18)'
    radius: 0
    padding: '24px'
    use: 'Capability tiles inside the butter canvas — sharp-cornered white rectangles'
  card-buttercream:
    background: '#fff0c2'
    border: 'none'
    radius: 0
    padding: '32px 24px'
    use: 'Tonal panel inside the butter canvas — paler buttercream block'
  badge-eyebrow:
    background: 'transparent'
    text: '#5a5a5a'
    padding: '0'
    radius: 0
    font: 'Arial 700 / 12px / uppercase / 0.06em tracking'
    use: 'Section pre-label — no chrome, just type'
  badge-label:
    background: '#1f1f1f'
    text: '#ffffff'
    padding: '4px 8px'
    radius: 0
    font: 'Arial 700 / 11px / uppercase'
    use: 'Tag a feature, model name, or version stamp'
  input:
    background: '#ffffff'
    border: '1px solid rgba(31, 31, 31, 0.30)'
    radius: 0
    padding: '12px 14px'
    font: 'Arial 400 / 14px'
    placeholder-color: '#8a8a8a'
    focus-border: '#1f1f1f'
    focus-ring: '0 0 0 2px rgba(31, 31, 31, 0.20)'
    use: 'Form fields, search — sharp-cornered to match the system'
  nav-link:
    background: 'transparent'
    text: '#1f1f1f'
    padding: '8px 12px'
    font: 'Arial 400 / 14px'
    hover-text: '#000000'
    active-underline: '1px solid #1f1f1f'
  decorative-rule:
    color: 'rgba(31, 31, 31, 0.18)'
    height: '1px'
    use: 'Section divider — a single hairline, no shadow, no gradient'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-linear: 'linear'
  duration-fast: 100
  duration-standard: 180
  duration-slow: 280
  duration-page: 420
  reduced-motion: 'respects prefers-reduced-motion: reduce — all transitions become opacity-only, durations halved, slide carousels become static'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1440

shadows:
  none: 'none'
  ambient: 'rgba(31, 31, 31, 0.06) 0 1px 2px'
  standard: 'rgba(31, 31, 31, 0.08) 0 4px 8px'
  elevated: 'rgba(31, 31, 31, 0.10) 0 12px 24px -4px'
  modal: 'rgba(31, 31, 31, 0.18) 0 24px 48px -12px'
  ring: '0 0 0 2px rgba(31, 31, 31, 0.30)'
  ring-flame: '0 0 0 2px rgba(255, 107, 0, 0.40)'

accessibility:
  contrast-text-on-bg: 14.2              # #1f1f1f on #fffaeb — AAA at all sizes
  contrast-text-on-brand: 16.1           # #ffffff on #1f1f1f — AAA
  contrast-text-soft-on-bg: 6.8          # #5a5a5a on #fffaeb — AAA at body sizes
  contrast-on-buttercream: 13.5          # #1f1f1f on #fff0c2 — AAA
  focus-ring: '2px solid rgba(31, 31, 31, 0.30) with 2px offset; 2px solid rgba(255, 107, 0, 0.40) on dark/flame surfaces'
  reduced-motion-honored: true
  keyboard-nav: 'visible focus on every interactive surface; tab order matches visual flow; carousels accept arrow keys'
  prose-line-length: 'capped at 720px (~70 characters) for readable body copy'

dark-mode: null                          # marketing surface is butter-only by deliberate choice; product UI (Le Chat) handles its own theming

lineage:
  summary: |
    Mistral's site is a deliberate refusal of the Silicon Valley
    tech-marketing register. The butter-yellow `#fffaeb` canvas
    quotes Yves Saint Laurent and the saffron paper of *Le Monde
    Diplomatique* more than any tech site; setting the 82px hero in
    **Arial** — the operating-system default — is a Beuys-esque
    "cheap material, expensive idea" gesture that reads as
    art-school confidence. Every button, every card, every slide
    control rounds at **zero pixels**, an extraordinary discipline
    in 2026 when even brutalist sites compromise to 4-8px. The brand
    palette is restricted to butter, paler buttercream, near-black,
    white, and the heritage flame-orange that lives on in the
    logomark. The lineage is closer to Werkplaats Typografie + Dieter
    Rams than to OpenAI or Anthropic — a European, school-of-design
    refusal of the SF tech aesthetic that doubles as a powerful brand
    differentiator. Hugging Face's similarly cream-and-yellow palette
    is a cousin; the rest of the AI sector is a different planet.
  influences:
    - name: Werkplaats Typografie
      role: Dutch art-school graphics programme — default-system-font + zero-radius as anti-design statement.
      url: https://werkplaatstypografie.org
    - name: Yves Saint Laurent / Parisian fashion houses
      role: Saffron and butter as a register of "Paris taste, not San Francisco tech."
      url: https://www.ysl.com
    - name: Le Monde Diplomatique
      role: Saffron paper-stock cover register; European print-publication confidence.
      url: https://www.monde-diplomatique.fr
    - name: Hugging Face
      role: Sister French/EU lab in the cream-and-yellow open-source register.
      url: https://huggingface.co
    - name: Dieter Rams / Braun
      role: '"Weniger, aber besser" applied to chromatic and typographic restraint.'
      url: https://en.wikipedia.org/wiki/Dieter_Rams
    - name: Joseph Beuys
      role: Cheap-material-as-art lineage; system Arial as the Mistral version of felt sculpture.
    - name: Karel Martens / Maureen Mooren
      role: Dutch type-as-concept practitioners; defaults-as-decisions ethos.
---

## 1. Visual Theme & Atmosphere

Mistral's homepage opens on a saturated butter-yellow `#fffaeb` canvas — a colour the rest of the AI sector has decided is impossible. Where every other frontier-AI lab reaches for white, near-black, or a violet gradient mesh, Mistral chooses a saffron paper-tone that quotes Yves Saint Laurent ad campaigns and the cover stock of *Le Monde Diplomatique*. It reads simultaneously as Paris-creative-class confidence and as a deliberate refusal of the Bay Area register. You cannot mistake this site for a US-AI startup. That is the entire point.

The first headline lands at **82px in Arial**. The choice is the brand's most provocative typographic move — Arial, the operating-system default, the typeface every designer has been trained to avoid, set at 82px on saturated butter with mild negative tracking. It reads as Beuys-esque "cheap material, expensive idea" gesture. *We don't need a custom typeface to be taken seriously. We don't need Inter. We don't need Geist. The system font is enough.* That confidence — the willingness to use the most-mocked typeface on the internet at hero scale — is unmistakably French art-school.

Every interactive surface is a **zero-radius rectangle**. Primary product CTAs ("Discover Le Chat", "Discover Vibe", "Discover Studio") are identical near-black `#1f1f1f` blocks with white Arial 14px labels and 12×20 padding. The slide carousel uses a paler `#fff0c2` buttercream as the only secondary surface. There are no rounded chips, no pill toggles, no soft-cornered cards anywhere on the marketing site. The discipline is total — and in 2026, when even brutalist sites compromise to 4–8px radii, holding the line at 0px is a statement. The rectangle is the brand's geometric primitive, full stop.

The chromatic system is restricted to five colours: butter `#fffaeb`, paler buttercream `#fff0c2`, near-black `#1f1f1f`, white `#ffffff`, and the heritage Mistral flame `#ff6b00` (which appears almost exclusively on the logomark and merch — never as a marketing fill). There is no blue. There is no purple. There is no gradient. There is no mascot. The atmospheric vocabulary is *butter-paper, saffron-canvas, art-school-bold, Arial-confident, Werkplaats-grade, hard-rectangle, Paris-not-SF, Beuys-cheap-material, system-font-as-decision, anti-tech.* Everything else in the AI sector reads as engineered. Mistral reads as *cultivated* — a different value system entirely.

**Key Characteristics**

- Saturated butter `#fffaeb` canvas — never substituted for white
- **Arial** at 82px display — system-default as deliberate art-school move
- Zero-radius rectangles everywhere — no rounded variants, no pills
- Near-black `#1f1f1f` brand action colour, never pure black except in active states
- Paler buttercream `#fff0c2` as the only secondary surface
- Heritage flame `#ff6b00` reserved for the logomark and merch
- No blue, purple, or gradient — five-colour total palette
- Hard rectangles separated by 1px hairlines or pure spacing
- Generous ~1280px page width with 720px reading column
- Visible discipline — what is *omitted* (mascots, gradients, custom type) is the brand asset

## 2. Color Palette & Roles

### Primary

- **bg** `#fffaeb` — saturated butter-yellow, the defining canvas. Never `#ffffff`, never warm-cream — always saffron-toned.
- **text** `#1f1f1f` — near-black observed body text. Slightly warmer than absolute `#000000` so it rests on butter rather than fighting it.
- **bg-secondary** `#fff0c2` — paler buttercream for elevated panels, slide controls, carousel grounds.
- **brand-cta-bg** `#1f1f1f` — primary CTA inverts the canvas to maximum value contrast (near-black on butter).
- **on-cta** `#ffffff` — pure white label on the near-black rectangle.

### Brand & Dark

- **brand** `#1f1f1f` — Mistral's primary action colour is its near-black. The brand has no chromatic primary; the geometry (zero-radius rectangle) does the work.
- **brand-deep** `#000000` — rare absolute black for active/pressed states; never used at rest.
- **brand-soft** `rgba(31,31,31,0.10)` — translucent black for hover overlays on light surfaces.
- **on-brand** `#ffffff` — every label on the near-black rectangle is pure white Arial.

### Accent

- **accent-flame** `#ff6b00` — the heritage Mistral flame. Lives in the logomark, on merch, in occasional decorative sparks. Almost never appears in marketing UI fills.
- **accent-flame-deep** `#cc5500` — darker flame for rare hover states on merch surfaces.
- **accent-warm** `#fff0c2` — buttercream as secondary surface; the chromatic event of the slide carousel.

### Interactive

- **link** `#1f1f1f` — links are slate-dark with underlines, like a printed broadsheet.
- **link-hover** `#000000` — darker on hover; occasionally the flame-orange when the brand wants to wink.
- **link-visited** `#5a5a5a` — soft slate; rare, reserved for index pages.
- **selected-bg** `#fff0c2` — selected nav state and active carousel slide.
- **disabled** `#b5b5b0` — slate-muted disabled control text.

### Neutral Scale

- **ink-100** `#0a0a0a` — rare absolute black for editorial display moments.
- **ink-200** `#1f1f1f` — primary body and brand text.
- **ink-300** `#3a3a3a` — secondary heading colour, body emphasis.
- **ink-400** `#5a5a5a` — supporting copy, captions, secondary text on butter.
- **ink-500** `#8a8a8a` — eyebrows, helper text, faint metadata.
- **ink-600** `#b5b5b0` — disabled labels, footer microcopy.
- **ink-700** `#dcdcd5` — quietest division, decorative dividers in print-like contexts.

### Surface & Borders

- **surface-0 (page)** — `#fffaeb` butter.
- **surface-1 (panel)** — `#fff0c2` buttercream.
- **surface-2 (card)** — `#ffffff` white card lift on butter.
- **border** `rgba(31, 31, 31, 0.18)` — default hairline; the only structural division on the page.
- **border-strong** `rgba(31, 31, 31, 0.30)` — emphasised rule for inputs and outlined buttons.
- **border-subtle** `rgba(31, 31, 31, 0.08)` — quietest separation for inline tags.
- **border-flame** `rgba(255, 107, 0, 0.40)` — rare flame-tinted hairline; reserved for merch surfaces.

### Shadow Colors

Mistral shadows are minimal and warm-tinted. Cards lift off butter by **value contrast alone** — white on butter provides separation without needing explicit elevation. When shadows do appear (modals, popovers), they're tinted with low-opacity slate-dark `rgba(31,31,31,0.06)` to `0.18`, never neutral grey, never blue-tinted. The brand reads as paper, not interface — the same reason heavy drop-shadows feel wrong on this canvas.

### Semantic

- **success** — bg `#e8f0d4` (warm-green sympathetic to butter), text `#3d5a1f`, border `rgba(120, 140, 60, 0.30)`.
- **warning** — bg `#ffe4a8` (deeper buttercream), text `#7a4f00`, border `rgba(212, 162, 50, 0.40)`.
- **danger** — bg `#fde0d4` (warm coral), text `#8a2a0a`, border `rgba(196, 80, 50, 0.30)`.
- **info** — bg `#e0e8f0` (cool slate-blue tint), text `#1f3a5a`, border `rgba(50, 90, 140, 0.30)`.

The semantic ladder is unusual: it derives from the butter palette rather than a separate Material/Tailwind ramp. Success isn't green-500; it's a butter-sympathetic warm green. Warning isn't amber; it's a deeper buttercream. The discipline keeps the page chromatically coherent even at error boundaries.

## 3. Typography Rules

### Font Family

- **Display & Body**: `Arial, ui-sans-serif, system-ui, sans-serif` — that is the entire stack. Arial is the brand decision. Helvetica is the fallback only when Arial is unavailable. Inter is *not* on the stack and would dissolve the brand register.
- **Mono**: `ui-monospace, "SF Mono", Menlo, Consolas, monospace` — used in code samples, version strings, and the rare API surface mock.
- **OpenType features**: `kern` always on; `tnum` and `zero` enabled in mono for tabular figures and slashed zero. Arial does not ship stylistic alternates, and the brand does not need them — the system-default character set *is* the visual identity.

There is no italic on the marketing surface. No display serif. No small-caps. No custom face. The conceit depends on the absence of typographic ornament.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| Display Hero | Arial | 82px | 400 | 1.0 | -2.05px | kern | Homepage hero — the brand defining moment |
| Display | Arial | 64px | 400 | 1.02 | -1.5px | kern | Section intro at scale |
| H1 | Arial | 48px | 400 | 1.05 | -1px | kern | Page title |
| H2 | Arial | 36px | 400 | 1.10 | -0.5px | kern | Major section |
| H3 | Arial | 28px | 400 | 1.15 | normal | kern | Sub-section |
| H4 | Arial | 22px | 700 | 1.25 | normal | kern | Card heading — only here does weight hit 700 |
| H5 | Arial | 18px | 700 | 1.30 | normal | kern | Inline emphasis |
| Eyebrow | Arial | 12px | 700 | 1.30 | 0.06em | uppercase | Section pre-label |
| Body Large | Arial | 18px | 400 | 1.55 | normal | kern | Lede paragraph |
| Body | Arial | 16px | 400 | 1.50 | normal | kern | Default body copy |
| Body Small | Arial | 14px | 400 | 1.50 | normal | kern | Secondary text, secondary buttons |
| Caption | Arial | 13px | 400 | 1.40 | normal | kern | Image captions, helper text |
| Caption Tabular | SF Mono | 13px | 500 | 1.40 | normal | tnum | Stats, version strings |
| Label | Arial | 12px | 700 | 1.30 | normal | uppercase | UI labels, button-corner stamps |
| Code | SF Mono | 14px | 400 | 1.55 | normal | tnum zero | Inline + block code |
| Code Micro | SF Mono | 11px | 400 | 1.40 | normal | — | Footnote refs, tiny metadata |
| Button Label | Arial | 14px | 400 | 1.0 | normal | kern | Hard-rectangle CTA labels |

### Principles

- **Arial is the brand decision.** Switching display to Helvetica or Inter dissolves the entire conceit. The system-default-ness *is* the identity.
- **Weight 400 for display, weight 700 only at small UI sizes.** Hero headlines run 400 — counter-intuitive in a brand-design world that ships hero type at 700+. The 82px / 400 / butter combination is what makes Mistral instantly recognisable.
- **Negative tracking scales with size.** -2.05px at 82px, -1.5px at 64px, -1px at 48px, -0.5px at 36px, normal at 28px and below. The compression mirrors the visual rhythm of broadsheet masthead typography.
- **No italic, ever, on the marketing surface.** Italic would introduce a softness the brand refuses.
- **Body width capped at 720px** even when the page is 1280px wide — readable column for long-form posts.
- **OpenType discipline**: `kern` always; `tnum` and `zero` only in mono. Arial doesn't ship `ss01` / `onum`, and the brand does not pretend otherwise.
- **Print-grade defaults.** 16px body, 1.5 line-height, 720px column, hairline section dividers — these are *broadsheet* metrics, not blog metrics.
- **System font as a strategic asset.** Arial loads in zero kilobytes from the user's OS. The brand pays no font-bandwidth cost. The performance story is a brand story.

## 4. Component Stylings

### Buttons

**Primary (Black Rectangle)**
- Background: `#1f1f1f` near-black.
- Text: `#ffffff` pure white, Arial 400 / 14px.
- Padding: `12px 20px`. Radius: `0`. Border: none.
- Hover: bg → `#000000` (the rare absolute-black moment); transition `180ms ease-standard`.
- Active: bg → `#000000` (held).
- Use: Primary product CTAs — *Discover Le Chat, Discover Vibe, Discover Studio, Try the API.* Every primary action is the same hard rectangle.

**Secondary (Buttercream Rectangle)**
- Background: `#fff0c2` paler buttercream.
- Text: `#1f1f1f` near-black, Arial 400 / 14px.
- Padding: `12px 20px`. Radius: `0`. Border: none.
- Hover: bg → `#ffe4a8` (deeper buttercream).
- Use: Slide-next, carousel pagination, inline secondary actions.

**Tertiary (Outlined)**
- Background: transparent. Text: `#1f1f1f`. Border: `1px solid #1f1f1f`.
- Same padding and radius.
- Hover: bg → `rgba(31, 31, 31, 0.06)`.
- Use: Quietest third action — alternative footer CTAs, declined paths.

**Ghost (Nav)**
- Background: transparent. Text: `#1f1f1f`. No border.
- Padding: `8px 12px`. Radius: `0`.
- Hover: bg → `rgba(31, 31, 31, 0.06)`.
- Use: Nav links, footer links, minimal-chrome inline actions.

### Cards

**White Card on Butter**
- Background: `#ffffff`. Border: `1px solid rgba(31, 31, 31, 0.18)`. Radius: `0`. Padding: `24px`.
- Shadow: none — value-contrast alone separates white card from butter page.
- Hover: border → `rgba(31, 31, 31, 0.30)`; transition `180ms`.
- Use: Capability tile, product feature, model card.

**Buttercream Panel**
- Background: `#fff0c2`. Border: none. Radius: `0`. Padding: `32px 24px`.
- Use: Tonal section panel — used inside butter as a chromatic punctuation block.

### Badges, Tags, Pills

**Eyebrow Label** — no chrome, just type. Arial 700 / 12px / uppercase / 0.06em tracking, colour `#5a5a5a`. Sits above section headlines.

**Black Tag** — bg `#1f1f1f`, text `#ffffff`, padding `4px 8px`, radius `0`, font Arial 700 / 11px / uppercase. Marks model names, version stamps, "NEW" badges.

**Buttercream Tag** — bg `#fff0c2`, text `#1f1f1f`, same shape. Quieter alternative.

There is no pill. The system has one shape and the badges hold the line.

### Inputs / Forms

- Background: `#ffffff`. Border: `1px solid rgba(31, 31, 31, 0.30)`. Radius: `0`. Padding: `12px 14px`.
- Font: Arial 400 / 14px. Placeholder: `#8a8a8a`.
- Focus: border → `#1f1f1f`; ring → `0 0 0 2px rgba(31, 31, 31, 0.20)`.
- Error: border → `#8a2a0a`, ring → `rgba(196, 80, 50, 0.30)`, helper text in `#8a2a0a`.
- Helper: caption 13px in `#5a5a5a` below.

### Navigation

- Header height `64px`. Background `#fffaeb` butter (transparent on hero, solid on scroll).
- Logo: Mistral wordmark with the heritage flame mark, near-black.
- Nav links: Arial 400 / 14px, colour `#1f1f1f`, padding `8px 12px`. Hover → `#000000`; active gets `1px` underline.
- Right-side CTA pair: ghost "Sign in" + primary black rectangle "Try Le Chat".
- Mobile: full-screen sheet, links stack at 18px / 700 with hairline dividers.

### Decorative Components

**Section Hairline** — single 1px rule in `rgba(31, 31, 31, 0.18)`. The only decorative element on the page.

**Slide Carousel** — full-bleed butter or buttercream band, three cards visible, buttercream rectangular pagination dots, arrow controls in black rectangles.

**Heritage Flame Glyph** — `#ff6b00` flame mark at 24×24 to 64×64; appears in the logomark, footer, and rare merch surfaces. Never used as a fill behind text.

**Code Block** — SF Mono 14px on `#fff0c2` buttercream ground, padding `16px 20px`, border `1px solid rgba(31,31,31,0.18)`, radius `0`.

**Tooltip** — bg `#1f1f1f`, text `#ffffff`, radius `0`, padding `6px 10px`, font `12px / 700`. No arrow caret.

**Modal** — bg `#ffffff`, radius `0`, shadow `rgba(31,31,31,0.18) 0 24px 48px -12px`, max-width `560px`, butter backdrop overlay at 70% opacity.

## 5. Layout Principles

### Spacing System

- **Base unit**: 4px.
- **Scale**: 4, 8, 16, 24, 32, 48, 64, 80, 96, 128, 160 — Fibonacci-adjacent.
- **Density observation**: Mistral is *moderately dense* — denser than Anthropic's editorial whitespace, looser than Stripe's docs. Headlines float in 64–96px of margin; body paragraphs sit on 24px gaps; section gutters run 64–128px.

### Grid & Container

- **Page max width**: `1280px` — generous edges that let butter breathe to the screen edge.
- **Site gutter**: `clamp(20px, 4vw, 64px)` — generous on desktop, accommodating on mobile.
- **Grid**: 12 columns with 24px gutters. Hero blocks span full width; capability rails span 6–8 columns; sidebar metadata spans 3–4.
- **Hero treatment**: full-bleed butter, 82px headline anchored left, body confined to a 720px column.

### Whitespace Philosophy

Mistral's whitespace philosophy is *butter as breathing room*. The saturated canvas needs room around type to read as paper rather than chrome — when butter fills 70% of the visible viewport, the brand register holds. Cramping content collapses the whole conceit into "ugly yellow site." Section gutters run **64–128px** between major blocks; minor blocks sit on 48–64px gaps; intra-section spacing uses 16–32px.

### Section Cadence

- Hero (butter) → Product Rail (white cards on butter) → Capability Block (buttercream panel band) → Editorial Long-form (butter, 720px column) → Slide Carousel (buttercream slides on butter) → Footer (butter with hairline top border).
- The buttercream band is the chromatic event of the page — it appears once per scroll-stop as a breath of paler butter.
- Sections separated by 1px slate-dark hairlines or by spacing alone — never by gradient fades or shadow drops.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| Micro | 0px | All micro surfaces — there is no micro radius |
| Standard (sm) | 0px | All chips, status pills, tags |
| Comfortable (md) | 0px | All buttons, inputs, dropdowns |
| Relaxed (lg) | 0px | All modals, code blocks, callouts |
| Featured (xl) | 0px | All cards, swatch tiles, editorial pull-boxes |
| Pill | 0px | The system has no pill |

The radii ladder is `0, 0, 0, 0, 0, 0`. Every interactive surface is a hard rectangle. The discipline is total — a single rounded surface anywhere on the marketing page would crack the manifesto. Internal product UIs (Le Chat) introduce some softness to match conventional chat ergonomics, but the marketing brand surface holds the line absolutely.

There are no compound radii. There are no per-corner asymmetries. There is the rectangle, and there is nothing else.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat — no shadow | Default page surface, hero, body sections, every flat block |
| 1 | Value-contrast (white card on butter) | Capability cards, model tiles |
| 2 | `rgba(31, 31, 31, 0.06) 0 1px 2px` | Sticky nav background on scroll |
| 3 | `rgba(31, 31, 31, 0.08) 0 4px 8px` | Hover-lifted cards (rare) |
| 4 | `rgba(31, 31, 31, 0.10) 0 12px 24px -4px` | Dropdown menus, popovers |
| 5 | `rgba(31, 31, 31, 0.18) 0 24px 48px -12px` | Modals, dialogs |

### Shadow Philosophy

Mistral's depth is **value-contrast first, shadow last**. Cards lift off butter by value-contrast alone — white on butter provides separation without explicit shadow. The vast majority of the marketing page sits at Level 0 or Level 1 (flat or value-contrast). Explicit shadows appear only on overlay UI (sticky nav, dropdowns, modals), and they are tinted with low-opacity slate-dark `rgba(31,31,31, 0.06)` to `0.18`, never neutral grey, never blue.

The brand reads as paper, not interface. A heavy drop-shadow on a card would feel wrong for the same reason it would feel wrong on a printed magazine spread — paper does not drop-shadow against paper. Mistral honours that printed-page logic strictly.

## 8. Interaction & Motion

### Easing Curves

- `ease-standard`: `cubic-bezier(0.4, 0, 0.2, 1)` — Material-style; default for hover, focus, colour transitions.
- `ease-emphasized`: `cubic-bezier(0.2, 0, 0, 1)` — punchier exit; used on modal enter and slide-carousel transitions.
- `ease-linear`: `linear` — for the rare slide-carousel position change where uniform motion reads as more deliberate.

### Duration Buckets

- **Fast (100ms)** — colour transitions, focus rings, link hovers.
- **Standard (180ms)** — button hover, card hover, tooltip reveal.
- **Slow (280ms)** — modal enter/exit, dropdown reveal.
- **Page (420ms)** — slide-carousel position change, route transitions.

### Per-Component Micro-States

- **Button hover (primary)**: bg colour shift `#1f1f1f` → `#000000` only — no lift, no scale, no shadow change. `transition: background-color 180ms ease-standard`.
- **Button hover (secondary)**: bg colour shift `#fff0c2` → `#ffe4a8` only.
- **Card hover**: border deepens from `rgba(31,31,31,0.18)` to `rgba(31,31,31,0.30)`; no lift, no shadow change.
- **Link hover**: colour `#1f1f1f` → `#000000` over 100ms; underline thickens 1px → 2px.
- **Input focus**: 2px slate ring fades in over 100ms; border darkens to `#1f1f1f`.
- **Nav link active**: 1px slate underline animates in left-to-right over 180ms.
- **Slide-carousel position change**: 420ms `ease-emphasized` translate, no fade.

### Page Transitions

The hero text fades in over 280ms with no translate — Mistral resists the contemporary "everything reveals upward" pattern as too ostentatious. Below-fold sections use `IntersectionObserver` to fade in at 80% viewport, 280ms duration, no translate.

### Reduced Motion

`@media (prefers-reduced-motion: reduce)` — all transitions become opacity-only, durations halved. Slide carousels become static (single visible slide, arrow controls hidden). Translate animations are disabled entirely; scroll-linked reveals snap to final state.

## 9. Accessibility & A11y

### Contrast Pairs

- **`#1f1f1f` text on `#fffaeb` butter**: 14.2:1 — AAA at all sizes.
- **`#5a5a5a` text on `#fffaeb` butter**: 6.8:1 — AAA at body sizes.
- **`#8a8a8a` text on `#fffaeb` butter**: 3.6:1 — AA at large sizes only (≥18px).
- **`#ffffff` text on `#1f1f1f` button**: 16.1:1 — AAA.
- **`#1f1f1f` text on `#fff0c2` buttercream**: 13.5:1 — AAA.
- **`#1f1f1f` text on `#ffffff` card**: 17.4:1 — AAA.
- **`#5a5a5a` caption on `#ffffff` card**: 7.2:1 — AAA.

The butter canvas with near-black text is one of the highest-contrast colour pairings on the modern web — well above the 7:1 AAA threshold at all sizes. Accessibility is an emergent property of the brand discipline.

### Focus Indicators

- Default focus ring: `0 0 0 2px rgba(31, 31, 31, 0.30)` with 2px offset on butter pages.
- On near-black surfaces (buttons, modals): `0 0 0 2px rgba(255, 107, 0, 0.40)` — flame-orange ring as the only flame appearance in marketing UI.
- All interactive surfaces must have a visible focus state — no `outline: none` without a replacement.

### ARIA Patterns

- **Navigation**: `<nav aria-label="Main">` with skip-link to main content.
- **Disclosure**: `<button aria-expanded aria-controls>` for collapsible sections.
- **Dialog**: `role="dialog" aria-modal="true" aria-labelledby` with focus trap and Esc-to-close.
- **Carousel**: `role="region" aria-roledescription="carousel" aria-label`; pagination dots are `<button aria-label="Slide N of M" aria-current="true">`.
- **Live regions**: `aria-live="polite"` for form validation messages.

### Keyboard Navigation

- Tab order matches visual flow: skip-link → nav → hero CTA → main content → carousel controls → footer.
- All buttons, links, inputs reachable via Tab; modals trap focus inside until dismissed.
- Carousels accept `←` / `→` arrow keys for slide navigation.
- `Esc` closes modals and dropdowns.
- `Home` / `End` jump to first/last slide in carousel.

### Screen Reader Hints

- Decorative hairlines have `role="separator"`.
- Icon-only buttons (carousel arrows) have `aria-label="Previous slide"` / `"Next slide"`.
- Heritage flame glyph in logo has `aria-hidden="true"`; logo wordmark has `aria-label="Mistral AI"`.

### Reduced Motion

Honoured via the global media query. All translate/scale animations become opacity-only; durations halve; carousels become static.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Use |
|---|---|---|
| Mobile | < 640px | Single column, full-bleed butter sections |
| Tablet | 640–1024px | 2-column rails, narrower gutters, reduced hero scale |
| Desktop | 1024–1280px | Full 12-col grid, 720px prose, hero at 82px |
| Wide | > 1280px | Page locks to 1280px, gutters expand |

### Touch Targets

- Minimum tap target: 44×44px (WCAG AAA).
- Buttons: 48px minimum height on mobile (12px vertical padding × 2 + 14px line-height + buffer).
- Nav link tap area: 44×44px even when visual padding is smaller — the rectangle expands invisibly on touch.
- Carousel dots: 32×32 hit area on a 12px visual dot.

### Collapsing Strategy

- **Header**: full nav at ≥1024px; hamburger sheet below — sheet slides from right, full-screen butter, 18px / 700 stacked links.
- **Hero**: 82px headline → 56px → 36px across desktop/tablet/mobile.
- **Capability grid**: 4-up at desktop, 2-up at tablet, 1-up at mobile.
- **Body width**: 720px → fluid 90vw at mobile.
- **Slide carousel**: 3 visible at desktop, 2 at tablet, 1 at mobile (with peek of next).
- **Section spacing**: 128px → 80px → 48px across sizes.

### Image Behavior

- Product imagery uses `srcset` with 1x/2x for crisp screenshots on butter.
- Hero illustrations use `aspect-ratio` to prevent layout shift.
- Lazy-loading on below-fold images; eager on hero.
- Heritage flame glyph rendered as inline SVG so it can be re-coloured (e.g., near-black on buttercream) without an extra request.

### Container Queries

Used inside capability cards to switch layout when card width crosses 280px (icon-left vs. icon-top). Carousel cards similarly switch at 320px to a vertical text-block layout.

## 11. Content & Voice

### Tone

**Confident, French-direct, technical-but-cultured.** Mistral writes the way a Paris-based research lab writes — precise verbs, no marketing exclamations, no scarcity language. Headlines often state a capability ("Frontier AI. In your hands.") rather than sell a feeling. Subheads explain rather than persuade. The brand sounds like a small team of researchers and engineers who think the work speaks for itself — and who are correct.

### Microcopy Patterns

- **Button verbs**: "Discover Le Chat," "Try the API," "Read the paper," "Sign in," "Talk to sales." Never "Sign up now!", never "Get started for free →".
- **Error messages**: "Something went wrong. Try again, or [contact support]." Specific, calm, no shame.
- **Success confirmations**: "Done." "Thanks — we'll be in touch." Brief.
- **Loading states**: "Generating…" / "Reasoning…" — model-aware language even on marketing.

### Empty States

What they say: explain the empty state and offer the next step. *"No conversations yet. Start a new chat to see them here."*
What they don't say: "Oops!", "Whoops!", apologetic exclamations. The brand does not perform contrition.

### CTA Verb Conventions

- Primary on hero: "Discover Le Chat," "Try the API," "Talk to a Mistral expert."
- Secondary: "Read the paper," "Read the announcement," "Browse the API docs."
- Footer: "Read research," "View pricing," "Open the API console."

The brand never uses "Sign up free!" or "Get started today!" — the tone is invitational, deliberate, never urgent. Mistral does not trade in scarcity. The verbs read more like a museum's wall labels than a SaaS landing page.

## 12. Dark Mode & Theming

**Light-only — butter is the brand. No dark variant offered on the marketing surface.** The saturated butter `#fffaeb` is the brand's defining choice; a dark mode would require re-keying the entire palette and would collapse the art-school-French register that distinguishes Mistral from every other AI lab.

The product UI (Le Chat at chat.mistral.ai) handles its own theming separately and ships a dark variant; that variant is a calmer near-black with sympathetic warm-grey panels and is documented in the Le Chat product surface, not here. The marketing site at `mistral.ai` is intentionally butter-only across all viewports and times of day.

If a downstream surface ever needs a butter-dark companion, the rule would be: hold the heritage flame at full saturation, swap butter for `#1a1814` (warm slate-deep), buttercream for `#2a2620`, near-black text for `#fff5d6` (paler butter as ink) — but this is not currently shipped, and no Mistral surface uses these values. Use them only as a research starting point if extending the system.

## 13. Lineage & Influences

Mistral's design DNA is **European art-school + French publishing** rather than tech product. The butter-yellow canvas, system-default Arial, and zero-radius rectangles quote *Werkplaats Typografie*, *Werkbund* exhibition design, and the saffron paper stock of Yves Saint Laurent ad campaigns and *Le Monde Diplomatique* covers. Where contemporary AI labs reach for purple gradients (early OpenAI), cream-and-serif editorial calm (Anthropic), or pure-white minimalism (current OpenAI), Mistral reaches for the visual language of European graphic-design schools and Parisian print culture.

What it inherits: Werkplaats Typografie's "default-system-font as concept" tradition (Karel Martens, Maureen Mooren), the saffron-canvas register of *Le Monde Diplomatique* and YSL campaigns, Dieter Rams' "weniger, aber besser" applied to chromatic restraint, and the post-Beuys "cheap material, expensive idea" gesture (using Arial when you could have any font is the Mistral version of the felt-and-fat sculpture). What it borrows from contemporaries: Hugging Face's cream-and-yellow open-source register (sister French/EU lab cousin), Stripe's hairline-border restraint, and the broader European refusal of SF tech aesthetic. What it rejects: gradient meshes, neon accents, hero animations, custom typefaces, mascots, "AI tech" iconography, and the entire register of Bay Area startup marketing.

**Named influences:**

- **Werkplaats Typografie** — Dutch art-school graphics programme; default-system-font + zero-radius as anti-design statement.
- **Yves Saint Laurent / Parisian fashion houses** — saffron and butter as a register of "Paris taste, not San Francisco tech."
- **Le Monde Diplomatique** — saffron paper-stock cover register; European print-publication confidence.
- **Hugging Face** — sister French/EU lab in the cream-and-yellow open-source register.
- **Dieter Rams / Braun** — "weniger, aber besser" applied to chromatic and typographic restraint.
- **Joseph Beuys** — cheap-material-as-art lineage; system Arial as the Mistral version of felt sculpture.
- **Karel Martens / Maureen Mooren** — Dutch type-as-concept practitioners; defaults-as-decisions ethos.

## 14. Do's and Don'ts

### Do

- **Do** commit fully to butter `#fffaeb` — anything cooler reads as the wrong brand.
- **Do** use Arial (or a system-equivalent fallback) for everything; importing a custom face dissolves the entire conceit.
- **Do** keep every radius at 0px; a single rounded surface breaks the manifesto.
- **Do** reserve the heritage flame `#ff6b00` for the logomark and merch — never as a marketing fill.
- **Do** invert the canvas for primary CTAs — near-black `#1f1f1f` on butter gives maximum value contrast.
- **Do** lean on whitespace at 64–128px section gutters — paper-like cadence.
- **Do** prefer value contrast (white-on-butter) over drop shadows for elevation.
- **Do** use eyebrow labels (12px / 700 / uppercase / 0.06em) above section headings — broadsheet convention.
- **Do** cap reading width at ~720px even on wider pages — readable column.
- **Do** ship system-default Arial as a brand asset — the zero-kilobyte font cost is part of the story.

### Don't

- **Don't** swap Arial for Helvetica, Inter, or Geist. Arial is the brand decision, full stop.
- **Don't** add gradients, drop shadows, or hero animations. Mistral is architectural flatness.
- **Don't** introduce a blue or purple accent. The palette is butter, buttercream, near-black, white, and the heritage flame for the logomark only.
- **Don't** soften the type to italic or to display-serif. The system has no italic on the marketing surface.
- **Don't** use the flame `#ff6b00` as a button fill or a section background. It lives on the logomark and merch — nowhere else in marketing UI.
- **Don't** round any corner. The rectangle is the brand's geometric primitive.
- **Don't** ship marketing copy with exclamation marks. The tone is considered, never breathless.
- **Don't** introduce a mascot, illustration character, or 3D render. The brand has no character art.
- **Don't** use pure black `#000000` for body text. Near-black `#1f1f1f` is warmer on butter.
- **Don't** add a dark mode to the marketing surface. Butter is the brand.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #fffaeb
bg-secondary: #fff0c2
text: #1f1f1f
text-soft: #5a5a5a
brand-cta: #1f1f1f
on-cta: #ffffff
accent-flame: #ff6b00
border: rgba(31,31,31,0.18)
border-strong: rgba(31,31,31,0.30)
```

### Example Component Prompts

1. **"Create a hero in Mistral style — saturated butter `#fffaeb` canvas, 82px headline in Arial 400 with -2.05px tracking, 18px lede in Arial 400, single primary CTA as a near-black `#1f1f1f` rectangle at 0px radius with white Arial 14px label and 12×20 padding, no gradient, no animation. Reading column capped at 720px. Heritage flame `#ff6b00` reserved for the logomark only."**

2. **"Design a capability card in Mistral style — white `#ffffff` background, 0px radius, 1px `rgba(31,31,31,0.18)` border, 24px interior padding, 22px Arial 700 heading, 16px Arial 400 body, no shadow, hover deepens border to `rgba(31,31,31,0.30)` opacity."**

3. **"Build a slide carousel in Mistral style — 3 visible cards on a paler `#fff0c2` buttercream band, each card a hard rectangle with white background and 1px hairline border, pagination as small black `#1f1f1f` rectangles (12×4 each), arrow controls as 32×32 black rectangles with white chevron icons, 420ms ease-emphasized translate on slide change."**

4. **"Compose an editorial section in Mistral style — full-bleed butter, 12px Arial 700 uppercase 0.06em-tracking eyebrow label in `#5a5a5a`, 48px Arial 400 H1 with -1px tracking, 16px Arial 400 body in 720px column, 1px `rgba(31,31,31,0.18)` hairline at section end, no decoration."**

5. **"Render a primary nav in Mistral style — 64px header height, butter `#fffaeb` background, Mistral wordmark left-aligned with the heritage flame mark, links 14px Arial 400 in `#1f1f1f` with hover bg `rgba(31,31,31,0.06)`, right-aligned ghost 'Sign in' button + primary near-black rectangle 'Try Le Chat' button (12×20 padding, 14px white label, 0 radius)."**

6. **"Create an input field in Mistral style — white `#ffffff` background, 1px `rgba(31,31,31,0.30)` border, 0 radius, 12×14 padding, Arial 400 / 14px text, `#8a8a8a` placeholder, focus state darkens border to `#1f1f1f` and adds a 2px slate ring, error state turns border `#8a2a0a` and ring `rgba(196,80,50,0.30)`."**

### Iteration Guide

1. **Start with butter, not white.** If the bg is `#ffffff`, you've already lost the brand. Saturated `#fffaeb` is the entry ticket.
2. **Switch the typeface to Arial.** If the body is Inter, Geist, or Helvetica, change it to Arial (or `ui-sans-serif, system-ui, sans-serif`). System-default *is* the identity.
3. **Drop the hero weight to 400.** If the headline is 700, reduce to 400. Mistral's 82px / 400 / butter is the recognisable signature.
4. **Zero out every radius.** Buttons, cards, inputs, modals — all to 0px. A single rounded corner anywhere breaks the manifesto.
5. **Strip the gradient.** Any mesh, conic, or radial gradient is wrong — replace with flat butter or a buttercream band.
6. **Reserve flame for the logomark.** If `#ff6b00` is anywhere in marketing UI besides the logo and merch, move it.
7. **Invert for CTAs.** Primary action is near-black `#1f1f1f` rectangle on butter, not flame, not buttercream.
8. **Drop the shadows.** Replace box-shadows with value-contrast (white card on butter) or 1px hairlines.
