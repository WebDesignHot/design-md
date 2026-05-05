---
name: Ramp
tagline: 'Off-yellow `#fcfb70` and black-on-white editorial — finance ops dressed as a printed annual report.'
author: webdesignhot
source_url: https://ramp.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [fintech, saas]
tags: [light, editorial, sans, structured, bright, warm, dense]
preview_swatch: ['#ffffff', '#fcfb70', '#000000']
related: [stripe, mercury, linear]
description: 'Ramp picked the most counter-intuitive position in fintech: black type on white pages, broken only by a single pastel-yellow `#fcfb70` band that arrives once per scroll-length like a highlighter pulled across a paragraph in a printed report. The brand colour is functionally *black*; the yellow is sectional, not actionable. This makes Ramp read more like a McKinsey deliverable or a Pentagram annual report than a SaaS site — disciplined, editorial, almost institutional. Söhne (or Söhne-class neo-grotesque) handles every weight; the H1 sets at 500 with hard `-0.03em` tracking, giving it a quiet authority that Brex''s heavier weights or Stripe''s gradients can''t match. The pill button radius is the one warm gesture in an otherwise rectilinear, hairline-ruled system. There is no gradient, no glow, no glassy chrome: every page is a stack of editorial sections separated by a thin 10% black rule, and every CTA is a flat black pill with white type. The yellow band — and the way Ramp centres testimonials and customer logos inside it — is a direct descendant of New York Times product pages and Linear''s section-as-zone composition.'

colors:
  bg: '#ffffff'                         # primary white canvas — magazine-margin discipline
  bg-soft: '#fafaf7'                    # softest off-white panel, barely tinted warm
  bg-paper: '#f7f6f1'                   # the rare second neutral, used for footnote rails
  bg-yellow: '#fcfb70'                  # signature pastel-yellow band — sectional only
  bg-yellow-soft: '#fefee0'             # softest yellow wash, used for inline pull quotes
  bg-ink: '#0a0a0a'                     # near-black inverted band for testimonial closer
  bg-ink-pure: '#000000'                # peak black for footer / closing CTA inversion
  surface: '#ffffff'                    # default card surface
  surface-soft: '#f9f9f7'               # quiet card alternative
  surface-elev: '#fafaf7'               # softer elevated panel
  surface-yellow: '#fcfb70'             # full-bleed yellow band as a card-group ground
  text: '#0a0a0a'                       # near-black body — slight warmth in the deep
  text-strong: '#000000'                # peak ink for display copy
  text-body: '#1a1a1a'                  # body paragraph, slightly softer than headlines
  text-muted: '#5b5b58'                 # captions, helper text
  text-soft: '#8a8a85'                  # tertiary, eyebrow secondary
  text-faint: '#b0b0a8'                 # placeholder, disabled
  text-on-ink: '#ffffff'                # white type on the inverted near-black band
  text-on-ink-soft: '#a3a3a0'           # secondary copy on inverted band
  text-on-yellow: '#0a0a0a'             # near-black ink on yellow band — the contrast pair
  brand: '#0a0a0a'                      # the brand is black — yellow is sectional, not actionable
  brand-strong: '#000000'               # peak ink for primary CTA fill
  brand-hover: '#1a1a1a'                # hover-state black, very subtle warmth
  brand-pressed: '#000000'              # pressed-state — back to peak ink
  accent: '#fcfb70'                     # signature off-yellow — the only saturated colour
  accent-strong: '#e8e750'              # deeper highlighter yellow for hover on yellow chips
  accent-soft: '#fefee0'                # palest wash for inline pull quotes
  accent-ink: '#0a0a0a'                 # the ink that always rides on the yellow ground
  border: 'rgba(10, 10, 10, 0.10)'      # 10% black hairline rule — the editorial signature
  border-soft: 'rgba(10, 10, 10, 0.06)' # 6% quieter divider
  border-strong: 'rgba(10, 10, 10, 0.18)' # 18% near-black for focused inputs
  border-on-yellow: 'rgba(10, 10, 10, 0.16)' # hairline that survives on the yellow ground
  on-brand: '#ffffff'                   # white text on black pill button
  on-accent: '#0a0a0a'                  # black ink on yellow band
  link: '#0a0a0a'                       # links are black with underline — newspaper convention
  link-hover: '#000000'                 # hover stays black; underline thickens
  link-visited: '#3a3a36'               # quieter visited tone, rare
  shadow-ambient: 'rgba(10, 10, 10, 0.04)'  # rare ambient — Ramp largely avoids shadows
  shadow-card: 'rgba(10, 10, 10, 0.04) 0 1px 2px'  # the absolute minimum shadow tier
  shadow-elev: 'rgba(10, 10, 10, 0.08) 0 8px 24px -8px'  # used only on dropdowns / popovers
  scrim: 'rgba(10, 10, 10, 0.50)'       # modal backdrop
  success: '#1a7f3a'                    # forest-green confirmation — quiet, editorial
  success-soft: 'rgba(26, 127, 58, 0.10)'
  warning: '#a36b00'                    # umber-amber advisory — calm, not alarmist
  warning-soft: 'rgba(163, 107, 0, 0.10)'
  danger: '#9a1f1f'                     # ink-red error — restrained, never bright
  danger-soft: 'rgba(154, 31, 31, 0.10)'
  info: '#0a0a0a'                       # info reads as plain near-black with an underline
  info-soft: 'rgba(10, 10, 10, 0.06)'

typography:
  display:
    family: '"Söhne", "Söhne Breit", "Inter Display", Inter, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: ['kern', 'liga', 'ss01']
  body:
    family: '"Söhne", Inter, -apple-system, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 600]
    opentype-features: ['kern', 'liga']
  mono:
    family: '"Söhne Mono", "JetBrains Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace'
    weights: [400, 500]
    opentype-features: ['liga', 'tnum', 'zero']
  scale:
    display-hero:    { size: 96, weight: 500, lineHeight: 0.95, tracking: '-0.035em', family: display, opentype: ['ss01'] }
    display-xl:      { size: 80, weight: 500, lineHeight: 0.98, tracking: '-0.03em',  family: display }
    display-lg:      { size: 64, weight: 500, lineHeight: 1.0,  tracking: '-0.03em',  family: display }
    h1:              { size: 56, weight: 500, lineHeight: 1.04, tracking: '-0.025em', family: display }
    h2:              { size: 40, weight: 500, lineHeight: 1.10, tracking: '-0.02em',  family: display }
    h3:              { size: 28, weight: 500, lineHeight: 1.20, tracking: '-0.01em',  family: display }
    h4:              { size: 22, weight: 500, lineHeight: 1.30, tracking: '-0.005em', family: display }
    h5:              { size: 18, weight: 500, lineHeight: 1.40, tracking: '0',        family: display }
    eyebrow:         { size: 12, weight: 500, lineHeight: 1.40, tracking: '0.06em',   family: mono, transform: uppercase }
    section-label:   { size: 13, weight: 500, lineHeight: 1.40, tracking: '0.06em',   family: mono, transform: uppercase }
    body-lg:         { size: 20, weight: 400, lineHeight: 1.50, tracking: '0',        family: body }
    body-md:         { size: 17, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.45, tracking: '0',        family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.40, tracking: '0',        family: body }
    caption-mono:    { size: 12, weight: 500, lineHeight: 1.40, tracking: '0',        family: mono, opentype: ['tnum'] }
    label:           { size: 12, weight: 500, lineHeight: 1.30, tracking: '0',        family: body }
    label-mono:      { size: 11, weight: 500, lineHeight: 1.30, tracking: '0.06em',   family: mono, transform: uppercase }
    button-md:       { size: 15, weight: 500, lineHeight: 1.20, tracking: '0',        family: body }
    button-sm:       { size: 13, weight: 500, lineHeight: 1.20, tracking: '0',        family: body }
    quote-pull:      { size: 32, weight: 400, lineHeight: 1.30, tracking: '-0.015em', family: display }
    quote-hero:      { size: 44, weight: 400, lineHeight: 1.20, tracking: '-0.02em',  family: display }
    code-inline:     { size: 14, weight: 500, lineHeight: 1.40, tracking: '0',        family: mono }

radius:
  micro: 2          # focus indicators, inline tags
  xs: 4             # status badges
  sm: 6             # tag chips
  md: 8             # cards, inputs — the dominant editorial radius
  lg: 12            # hero panels, large surfaces
  xl: 16            # rare emphasis
  pill: 9999        # the only warm gesture — every CTA goes pill

spacing:
  base: 8
  scale: [4, 8, 12, 16, 20, 24, 32, 48, 64, 96, 128, 160, 192, 240]

layout:
  page-width: 1280
  prose-width: 680
  container-gutter: 32
  section-y: 128
  rhythm: 8
  header-height: 64
  hero-min-height: 720

components:
  button-primary:
    bg: '#0a0a0a'
    color: '#ffffff'
    radius: 9999
    padding: '12px 22px'
    height: 44
    font: 'Söhne 15px / 500'
    hover-bg: '#1a1a1a'
    use: 'The signature flat black pill — Get started, Talk to sales. Black-on-white only; never on yellow band.'
  button-secondary:
    bg: '#ffffff'
    color: '#0a0a0a'
    border: '1px solid #0a0a0a'
    radius: 9999
    padding: '12px 22px'
    height: 44
    font: 'Söhne 15px / 500'
    hover-bg: 'rgba(10, 10, 10, 0.04)'
    use: 'Outlined twin — Watch demo, See pricing. White fill, full ink hairline, full pill.'
  button-ghost:
    bg: 'transparent'
    color: '#0a0a0a'
    radius: 9999
    padding: '8px 16px'
    font: 'Söhne 15px / 500'
    hover-bg: 'rgba(10, 10, 10, 0.04)'
    use: 'Quiet third action — nav links, in-card secondaries.'
  button-on-yellow:
    bg: '#0a0a0a'
    color: '#ffffff'
    radius: 9999
    padding: '12px 22px'
    height: 44
    font: 'Söhne 15px / 500'
    use: 'Black pill on yellow band — the contrast is dramatic; never a yellow CTA on yellow.'
  card:
    bg: '#ffffff'
    border: '1px solid rgba(10, 10, 10, 0.10)'
    radius: 8
    padding: '32px'
    use: 'Default editorial card — white fill, 10% black hairline, no shadow. Hairline-only is the discipline.'
  card-paper:
    bg: '#fafaf7'
    border: '1px solid rgba(10, 10, 10, 0.06)'
    radius: 8
    padding: '32px'
    use: 'Paper-warm card — used inside the few warm-tinted panels (footnote rails, methodology blocks).'
  card-on-yellow:
    bg: '#ffffff'
    border: '1px solid rgba(10, 10, 10, 0.16)'
    radius: 8
    padding: '32px'
    use: 'White card sitting on the yellow band — hairline deepens to compensate for the surrounding chroma.'
  yellow-band:
    bg: '#fcfb70'
    color: '#0a0a0a'
    padding: '128px 32px'
    use: 'The signature sectional band — full-bleed pastel yellow with centred testimonial or metric in 28px Söhne 400.'
  text-input:
    bg: '#ffffff'
    color: '#0a0a0a'
    radius: 8
    height: 44
    padding: '12px 14px'
    border: '1px solid rgba(10, 10, 10, 0.18)'
    font: 'Söhne 16px / 400'
    placeholder-color: '#8a8a85'
    focus-border: '#0a0a0a'
    focus-ring: '0 0 0 2px rgba(10, 10, 10, 0.16)'
    use: 'Form fields — black-on-white, 8px radius, near-black focus border. No purple glow, no glassmorphism.'
  badge-status:
    bg: '#fcfb70'
    color: '#0a0a0a'
    radius: 4
    padding: '2px 8px'
    font: 'Söhne Mono 11px / 500 / uppercase / 0.06em'
    use: 'Yellow status pill — NEW, FEATURED. The rare sanctioned use of yellow outside of the band.'
  badge-tag:
    bg: '#ffffff'
    color: '#5b5b58'
    border: '1px solid rgba(10, 10, 10, 0.10)'
    radius: 4
    padding: '2px 8px'
    font: 'Söhne Mono 11px / 500'
    use: 'Tag chip — feature labels, integration tags. White fill, hairline border.'
  pill-eyebrow:
    bg: 'transparent'
    color: '#5b5b58'
    padding: '0'
    font: 'Söhne Mono 12px / 500 / uppercase / 0.06em'
    use: 'Section eyebrow — mono caps without chrome, sits above the H1 like a newspaper kicker.'
  nav-top:
    bg: 'rgba(255, 255, 255, 0.92)'
    backdrop-filter: 'blur(8px)'
    height: 64
    border-bottom: '1px solid rgba(10, 10, 10, 0.10)'
    use: 'Sticky top nav — translucent white with light blur, hairline divider always visible.'
  pull-quote:
    bg: '#fcfb70'
    color: '#0a0a0a'
    padding: '96px 64px'
    font: 'Söhne 32px / 400 / -0.015em'
    use: 'Testimonial centred inside the yellow band — 28–32px Söhne 400 with comfortable 1.3 line height.'
  divider-rule:
    bg: 'rgba(10, 10, 10, 0.10)'
    height: 1
    use: '10% black hairline — the only divider Ramp uses between sections.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-out-soft: 'cubic-bezier(0.0, 0, 0.2, 1)'
  duration-instant: 0
  duration-fast: 100
  duration-standard: 180
  duration-slow: 240
  duration-page: 300
  link-hover: 'underline-thickness 1px → 2px over 100ms standard'
  button-hover: 'background colour swap over 180ms — no translate, no shadow'
  card-hover: 'border opacity 10% → 18% over 180ms standard — no lift, no shadow'
  scroll-reveal: 'sections opacity 0 → 1 over 240ms ease-out-soft, no translate'
  reduced-motion: 'respects prefers-reduced-motion: reduce — all transitions to opacity-only and instant where possible.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1440
  ultra: 1600

shadows:
  none: 'none'
  ambient: 'rgba(10, 10, 10, 0.04) 0 1px 2px'
  card: 'none'
  card-hover: 'none'
  elevated: 'rgba(10, 10, 10, 0.08) 0 8px 24px -8px'
  popover: 'rgba(10, 10, 10, 0.10) 0 12px 32px -16px'
  modal: 'rgba(10, 10, 10, 0.20) 0 24px 64px -16px'
  ring: '0 0 0 2px rgba(10, 10, 10, 0.16)'

accessibility:
  contrast-text-on-bg: 19.6                   # #0a0a0a on #ffffff — AAA at all sizes
  contrast-text-on-bg-soft: 18.7              # #0a0a0a on #fafaf7 — AAA at all sizes
  contrast-text-on-yellow: 16.4               # #0a0a0a on #fcfb70 — AAA at all sizes
  contrast-text-muted-on-bg: 7.1              # #5b5b58 on #ffffff — AAA at body sizes
  contrast-text-soft-on-bg: 4.5               # #8a8a85 on #ffffff — AA at body sizes
  contrast-on-brand: 19.6                     # #ffffff on #0a0a0a — AAA at all sizes
  contrast-link-on-bg: 19.6                   # #0a0a0a underlined on #ffffff — AAA
  focus-ring: '2px solid rgba(10, 10, 10, 0.16) + 2px outline-offset; near-black ring'
  reduced-motion-honored: true
  touch-target-min: 44
  prose-line-length: 'capped at 680px / ~68 characters — newspaper column'
  yellow-text-policy: 'never use yellow as a foreground colour; yellow is always a ground for black ink'

dark-mode: optional

colors-dark:
  bg: '#0a0a0a'                         # near-black canvas — the inverted band promoted to default
  bg-soft: '#141414'                    # softest off-black panel
  bg-paper: '#1a1816'                   # warm-tinted dark panel, rare
  bg-yellow: '#fcfb70'                  # the yellow stays — passes contrast on dark too
  bg-ink: '#000000'                     # peak black
  surface: '#141414'                    # default dark card surface
  surface-soft: '#1a1a1a'
  text: '#ffffff'                       # white body
  text-strong: '#ffffff'
  text-body: '#e6e6e3'
  text-muted: '#a3a3a0'
  text-soft: '#7a7a76'
  text-on-yellow: '#0a0a0a'             # the contrast pair never changes
  brand: '#ffffff'                      # CTA fill inverts to white
  brand-hover: '#e6e6e3'
  on-brand: '#0a0a0a'                   # near-black text on the white pill
  border: 'rgba(255, 255, 255, 0.10)'
  border-soft: 'rgba(255, 255, 255, 0.06)'
  border-strong: 'rgba(255, 255, 255, 0.18)'

lineage:
  summary: 'Ramp picked the most counter-intuitive position in fintech: black type on white pages, broken only by a single pastel-yellow `#fcfb70` that arrives one band per page like a highlighter pulled across a paragraph in a printed report. The brand colour is functionally *black*; the yellow is sectional. This makes Ramp read more like a McKinsey deliverable or a Pentagram annual report than a SaaS site — disciplined, editorial, almost institutional. Söhne (or Söhne-class neo-grotesque) handles every weight; the H1 sets at 500 with hard `-0.03em` tracking, giving it a quiet authority that Brex''s heavier weights or Stripe''s gradients can''t match. The pill button radius is the one warm gesture in an otherwise rectilinear system. The yellow band itself — and the way Ramp centres testimonials and customer logos inside it — is a direct descendant of the New York Times product pages and Linear''s section-as-zone composition.'
  influences:
    - name: 'Pentagram editorial / annual-report design'
      role: 'Black-on-white, single pastel accent, generous whitespace, sectional typography. The annual-report voice Ramp inherits.'
      url: 'https://www.pentagram.com'
    - name: 'Stripe (early brand era)'
      role: 'Search for chromatic restraint and brand-as-typographic-system in fintech. Ramp pulls Stripe''s discipline further toward editorial.'
      url: 'https://stripe.com'
    - name: 'Klim / Lineto (Söhne)'
      role: 'Söhne is Ramp''s typographic backbone — neo-grotesque modernism with subtle warmth. Weight 500 + hard tracking is the brand voice.'
      url: 'https://lineto.com'
    - name: 'The New York Times (product / explainer pages)'
      role: 'Newspaper-broadsheet rhythm: section bands, hairline rules, mono caps eyebrows, prose columns capped at 680px.'
      url: 'https://www.nytimes.com'
    - name: 'Linear'
      role: 'Section-as-zone composition — full-bleed bands separated by hairlines. Ramp pulls this into editorial register.'
      url: 'https://linear.app'
    - name: 'McKinsey & Company / quarterly reports'
      role: 'The "institutional deliverable" register — disciplined typography, pastel accent, no decoration.'
      url: 'https://www.mckinsey.com'
    - name: 'Mercury'
      role: 'Adjacent fintech competitor. Where Mercury runs serif headline + mint band, Ramp runs neo-grotesque + yellow band.'
      url: 'https://mercury.com'
---

## 1. Visual Theme & Atmosphere

Ramp's marketing surface is the quietest in fintech. Pages are white, type is black, and exactly one band per scroll-length is washed in the signature pastel `#fcfb70`. There is no gradient, no glassy glow, no glow-in-the-dark dashboard. The H1 lands at 80px / 500 weight with `-0.03em` tracking — restrained, but tracked tight enough to feel newspaper-like. The brand reads as if a Pentagram-trained editorial designer was hired to lay out a corporate-card website the way they'd lay out an annual report: hairline rules, full-bleed sectional bands, mono caps eyebrows, and a single pastel highlighter that only appears at strategic moments.

The chromatic move that distinguishes Ramp is that yellow is *not* a brand colour in the usual sense — it isn't on the logo, isn't on the CTA, isn't on icons. It's a **sectional device**, painted across a full horizontal band, almost always behind a customer testimonial or a metric. The brand colour is, functionally, black. Every CTA is a flat black pill with white type. Every headline is set at 500 weight in Söhne (or a Söhne-class neo-grotesque) with hard negative tracking. Every divider is a 10%-black hairline. The discipline is total: a Ramp page reads like a printed page that has been hyperlinked, not a SaaS marketing site.

What makes the yellow land as confident rather than decorative is the way it's deployed. The yellow band is full-bleed — it spans the entire viewport width, breaks the page rhythm, and contains a centred quotation or metric set in 28px Söhne 400 with comfortable 1.3 line-height. The band is preceded and followed by white space. It arrives once per scroll-length. There is no second yellow zone competing for attention. This restraint is the whole brand — the moment you add a second yellow accent, a yellow icon, a yellow line of text, the page collapses into the kind of brand-on-everything SaaS noise Ramp was specifically built to avoid.

The atmospheric vocabulary that captures Ramp's feeling: *broadsheet-quiet, annual-report-grade, hairline-ruled, Söhne-tracked-tight, McKinsey-deliverable, Pentagram-editorial, single-highlighter, sectional-yellow, pill-on-rectilinear, mono-caps-eyebrows, newspaper-column-prose, institutional-confident.* Every surface lands like it was designed by an in-house brand team that read editorial design history before they read SaaS marketing best-practice — which is, in fact, exactly what Ramp's brand team did.

The third register is the **discipline of weight 500 at large sizes**. Söhne at 500 with `-0.03em` tracking gives the H1 a quiet authority. A heavier 700 would push it into ad territory; a lighter 400 into editorial preciousness. The 500/`-0.03em` pair is the precise sweet spot for *broadsheet authority without ad-grade volume*. This is the typographic detail Brex pushes the opposite way (600/`-0.03em` for declarative confidence); Ramp pulls it toward calm.

**Key Characteristics**

- Pure white `#ffffff` canvas — the dominant tone, no warm-cream tint, no cool-grey panel
- Signature pastel-yellow `#fcfb70` band — full-bleed, sectional, one per scroll-length
- Near-black `#0a0a0a` body type — slight warmth in the deep, not pure black
- Söhne neo-grotesque at weight 500 — display, body, button, all the same family at three weights
- H1 at 80px / 500 with `-0.03em` tracking — broadsheet authority, not ad-grade volume
- Body at 17px / 1.55 line-height — slightly larger than default, optimised for reading
- Mono caps eyebrows in Söhne Mono at `0.06em` tracking — newspaper kicker convention
- Flat black pill CTAs (radius 9999) — the single warm gesture in an otherwise rectilinear system
- 8px card radius — hairline-only borders, no shadows on default cards
- 1280px max page width with 32px container gutters — generous editorial margin
- 128px section padding for major bands — the most generous vertical rhythm in fintech
- 10% black hairline rules — the only divider Ramp uses between sections
- Optional dark mode where the yellow band stays unchanged — black inverts to white only
- Newspaper-column prose at 680px max width — ~68 characters per line for reading rhythm

## 2. Color Palette & Roles

### Primary

- **Canvas** (`#ffffff`): pure white page background. The dominant tone — Ramp doesn't tint the canvas warm or cool. The whiteness is the editorial signature.
- **Off-White** (`#fafaf7`): the softest panel tint, barely warm. Used for elevated cards inside dense sections and for testimonial rails.
- **Paper Warm** (`#f7f6f1`): the rare second neutral, used for footnote rails or methodology blocks where a warmer ground signals a quieter register.
- **Text** (`#0a0a0a`): near-black with a subtle warmth — the colour that carries body and headline. Not pure black; the slight warmth keeps the page from reading as cold-tech.
- **Text Strong** (`#000000`): peak ink for display copy where maximum contrast is required.

### Brand & Sub-Brand

- **Brand** (`#0a0a0a`): the primary action colour is **black**. Not yellow. Yellow is sectional; black is actionable. The black pill is the brand-defining element.
- **Brand Strong** (`#000000`): peak ink for primary CTA fill on hero placements.
- **Brand Hover** (`#1a1a1a`): subtle warming on hover — the pill shifts barely a tone darker.
- **Brand Pressed** (`#000000`): pressed-state returns to peak ink.

### Accent (the Yellow)

- **Accent** (`#fcfb70`): the signature pastel-yellow. Used as a full-bleed sectional band and, sparingly, as the fill of a `NEW` mono-caps badge. Never as a foreground colour.
- **Accent Strong** (`#e8e750`): deeper highlighter yellow. Used only for hover state on yellow-fill chips.
- **Accent Soft** (`#fefee0`): palest yellow wash. Used for inline pull quotes inside dense prose where a full band would over-emphasise.
- **Accent Ink** (`#0a0a0a`): the near-black ink that always rides on the yellow ground. The pair is non-negotiable — black-on-yellow at 16.4:1 contrast is the brand's signature contrast pair.

### Interactive

- **Link** (`#0a0a0a` with underline): inline body links use the newspaper convention — same colour as body text, distinguished by a 1px underline. Underline thickens to 2px on hover.
- **Link Hover**: stays `#0a0a0a`; underline thickens. No colour change.
- **Selected** (`#fcfb70` background under `#0a0a0a` text): selected nav, active filter chip — the rare interactive use of the yellow.
- **Disabled** (`#b0b0a8`): faint warm-grey for disabled controls.
- **Focus** (2px `rgba(10, 10, 10, 0.16)` ring + 2px outline-offset): near-black translucent focus ring. No coloured glow.

### Neutral Scale

The neutral ramp is dense and disciplined:

- **Pure White** (`#ffffff`) — canvas
- **Off-White** (`#fafaf7`) — soft panel
- **Paper Warm** (`#f7f6f1`) — rare warm-tinted panel
- **Border Soft** (`rgba(10, 10, 10, 0.06)`) — quiet divider
- **Border Default** (`rgba(10, 10, 10, 0.10)`) — the editorial signature hairline
- **Border Strong** (`rgba(10, 10, 10, 0.18)`) — focused inputs
- **Text Faint** (`#b0b0a8`) — placeholder, disabled
- **Text Soft** (`#8a8a85`) — eyebrow secondary
- **Text Muted** (`#5b5b58`) — captions, helper text
- **Text Body** (`#1a1a1a`) — body paragraph, slightly softer than headlines
- **Text** (`#0a0a0a`) — headlines and body
- **Text Strong** (`#000000`) — peak display

The warm undertone in the deep ink and the soft warm tint in the off-white panel are deliberate. They keep the page from reading as the cold blue-greys of legacy enterprise software, and they create kinship with the printed-paper aesthetic Ramp inherits from editorial design.

### Surface & Borders

- **Canvas** (`#ffffff`) — page background
- **Surface Soft** (`#f9f9f7`) — quiet card alternative
- **Surface Elevated** (`#fafaf7`) — softer elevated panel
- **Surface Yellow** (`#fcfb70`) — full-bleed yellow band as a card-group ground
- **Surface Ink** (`#0a0a0a`) — inverted near-black band
- **Border Default** (`rgba(10, 10, 10, 0.10)`) — 10% black hairline rule, the signature
- **Border Soft** (`rgba(10, 10, 10, 0.06)`) — 6% quieter divider
- **Border Strong** (`rgba(10, 10, 10, 0.18)`) — 18% near-black for focused inputs
- **Border On-Yellow** (`rgba(10, 10, 10, 0.16)`) — hairline that survives on the yellow ground

### Shadow Colors

Ramp largely **avoids shadows**. The brand discipline is hairline-only: cards are bordered, not lifted. The only sanctioned shadows are:

- `rgba(10, 10, 10, 0.04) 0 1px 2px` — ambient (rare, used on the sticky nav post-scroll)
- `rgba(10, 10, 10, 0.08) 0 8px 24px -8px` — elevated (dropdowns and popovers only)
- `rgba(10, 10, 10, 0.10) 0 12px 32px -16px` — popover (deeper drop for nested menus)
- `rgba(10, 10, 10, 0.20) 0 24px 64px -16px` — modal (the only element that admits a real shadow)

The shadow philosophy is *editorial*. Printed pages don't have shadows; Ramp doesn't either. Depth is achieved through **bands and rules**, not lift. The page is a vertical stack — white band → yellow band → white band → ink band — separated by 1px / 10% black rules. Cards inside bands use the same hairline plus an optional flat fill.

### Semantic

The semantic palette is **deliberately quiet**. Ramp's success/warning/danger colours are darker, more editorial, and never bright:

- **Success** (`#1a7f3a` on `rgba(26, 127, 58, 0.10)`): forest-green confirmation. Quiet, editorial, never the bright emerald of consumer apps.
- **Warning** (`#a36b00` on `rgba(163, 107, 0, 0.10)`): umber-amber advisory. Calm, not alarmist.
- **Danger** (`#9a1f1f` on `rgba(154, 31, 31, 0.10)`): ink-red error. Restrained, never bright red.
- **Info** (`#0a0a0a` on `rgba(10, 10, 10, 0.06)`): info reads as plain near-black with an underline — the same convention as inline links.

The semantic tones are tuned to match the editorial register. Bright primary colours (consumer-app green/red/blue) would clash with the broadsheet voice and would compete with the yellow band for chromatic attention.

## 3. Typography Rules

### Font Family

**Primary**: `"Söhne", "Söhne Breit", "Inter Display", Inter, "Helvetica Neue", Arial, sans-serif`. **Söhne** is a neo-grotesque type family from Klim Type Foundry / Lineto. Used at weight 500 for display copy with `-0.03em` letter-spacing — the hard tracking is half the brand voice. The fallback chain runs Inter Display → Inter → Helvetica → Arial; on no-license environments, Inter at 500 is the closest open-source substitute, though Söhne's tighter terminals and slightly higher x-height are subtly different.

**Mono companion**: `"Söhne Mono", "JetBrains Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace`. Söhne Mono carries section eyebrows, footnote markers, status pills, and pricing tabular numerals. The mono pair is the brand's secondary-identity tell — when Ramp wants to mark a section as *editorial-meta* (kicker, footnote, page number, citation), Söhne Mono at `0.06em` tracking does the work.

**OpenType features**: Söhne renders with `kern` and `liga` always on. `ss01` enables for stylistic alternates that clean up the `R` and `K` joins in display sizes. Mono adds `liga`, `tnum`, and `zero` — `tnum` enables tabular figures for pricing alignment and `zero` provides the slashed zero for code references.

The discipline: weight 500 across all display copy, weight 400 for body, weight 500 for nav and labels. There is no medium-weight middle ground at display sizes — display lives at 500. Body lives at 400. Nav links and form labels live at 500. The system has clear tiers without ambiguity.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| display-hero | Söhne | 96px | 500 | 0.95 | -0.035em | ss01 | The largest hero variant — landing page only |
| display-xl | Söhne | 80px | 500 | 0.98 | -0.03em | — | The canonical Ramp H1 — most pages |
| display-lg | Söhne | 64px | 500 | 1.0 | -0.03em | — | Section opener |
| h1 | Söhne | 56px | 500 | 1.04 | -0.025em | — | Sub-page title |
| h2 | Söhne | 40px | 500 | 1.10 | -0.02em | — | Marketing section H2 |
| h3 | Söhne | 28px | 500 | 1.20 | -0.01em | — | Card heading, sub-section |
| h4 | Söhne | 22px | 500 | 1.30 | -0.005em | — | Sub-card heading |
| h5 | Söhne | 18px | 500 | 1.40 | 0 | — | Inline emphasis |
| eyebrow | Söhne Mono | 12px | 500 | 1.40 | 0.06em | uppercase | Section pre-label |
| section-label | Söhne Mono | 13px | 500 | 1.40 | 0.06em | uppercase | Marketing section eyebrow |
| body-lg | Söhne | 20px | 400 | 1.50 | 0 | — | Hero deck, lede paragraph |
| body-md | Söhne | 17px | 400 | 1.55 | 0 | — | Default body — note the bump from 16 |
| body-sm | Söhne | 14px | 400 | 1.45 | 0 | — | Card body, dense rows |
| caption | Söhne | 13px | 400 | 1.40 | 0 | — | Image caption, footer micro |
| caption-mono | Söhne Mono | 12px | 500 | 1.40 | 0 | tnum | Pricing values, dashboard meta |
| label | Söhne | 12px | 500 | 1.30 | 0 | — | Form field label |
| label-mono | Söhne Mono | 11px | 500 | 1.30 | 0.06em | uppercase | Mono caps label |
| button-md | Söhne | 15px | 500 | 1.20 | 0 | — | Default CTA copy |
| button-sm | Söhne | 13px | 500 | 1.20 | 0 | — | Compact button |
| quote-pull | Söhne | 32px | 400 | 1.30 | -0.015em | — | Pull quote inside dense prose |
| quote-hero | Söhne | 44px | 400 | 1.20 | -0.02em | — | Hero quote inside the yellow band |
| code-inline | Söhne Mono | 14px | 500 | 1.40 | 0 | — | Inline `code` reference |

### Principles

- **Weight 500 + `-0.03em` tracking is the brand voice.** Söhne at 500 with hard negative tracking is the canonical Ramp display. Drop to 400 and the page reads as editorial-precious (Mercury territory); push to 700 and it reads as ad-grade (Klarna territory). The 500/`-0.03em` pair is the precise sweet spot.
- **Single-family system with mono companion.** Söhne Sans + Söhne Mono cover everything. Adding a serif (Mercury territory) or a third sans (most-of-SaaS territory) breaks the brand's neo-grotesque commitment.
- **Body holds at weight 400.** Body never goes 500 except for nav links and labels. The 400-vs-500 split is the brand's hierarchy logic; the gap is small but rigorously maintained.
- **Negative tracking compresses with size.** `-0.035em` at 96px, `-0.03em` at 64–80px, `-0.025em` at 56px, `-0.02em` at 40px, `-0.01em` at 28px, near-zero below 22px.
- **17px body, 1.55 line-height.** Slightly larger than the typical 16px and slightly more open than Brex's 1.50 — the editorial voice prefers a more generous reading rhythm.
- **Quote-pull at weight 400.** The pull-quote inside the yellow band steps *down* in weight from the 500 of headlines, creating a softer, more humanist register that contrasts with the structural display copy.
- **Mono caps for eyebrows, status pills, and pricing values.** Söhne Mono at 11–13px / 0.06em tracking is the brand's secondary-identity tell.
- **`tnum` enabled in pricing displays.** Tabular numerals make pricing comparison tables align column-wise — a polish detail that signals attention.
- **No italic in display.** Söhne is set roman across all hierarchy. Body italics carry quoted titles only.
- **Underlined inline links — newspaper convention.** Ramp's links are not coloured; they're the same near-black as body text with a 1px underline. Underline thickens to 2px on hover. This is the broadsheet move.

## 4. Component Stylings

### Buttons

**Primary Pill (Black)** — The signature button. Background: `#0a0a0a` near-black. Text: white at 15px / 500 in Söhne, **9999px radius (full pill)**, 12×22px padding, 44px height. Hover: background warms to `#1a1a1a` over 180ms — no translate, no shadow. Use case: *Get started*, *Talk to sales*, *Apply for Ramp*, *Open account*. The black pill on white is the brand-defining element.

**Secondary Pill (Outlined)** — `#ffffff` fill, near-black text at 15px / 500, 1px solid `#0a0a0a` border (full ink, not a soft grey), 9999px radius, 44px height, 12×22px padding. Hover: background fills `rgba(10, 10, 10, 0.04)`. Use case: *Watch demo*, *See pricing*, *Read documentation* — paired adjacently with the primary.

**Ghost Pill** — Transparent background, near-black text at 15px / 500, 9999px radius, 8×16px padding. Hover fills `rgba(10, 10, 10, 0.04)`. Use case: nav links, footer secondaries, in-card text actions.

**Pill on Yellow** — Same `#0a0a0a` fill / white text as primary, but used inside a yellow band. The contrast (black-on-yellow + black-pill) is dramatic and intentional — never invert to a yellow pill on yellow.

### Cards

**Default Editorial Card** — `#ffffff` fill, 1px hairline border at `rgba(10, 10, 10, 0.10)` (the signature 10% black rule), **8px radius**, 32px padding, **no shadow**. The dominant card across feature grids, customer logos, partner directories. Hover: border opacity steps from 10% to 18% over 180ms — no lift, no shadow change.

**Paper Card** — `#fafaf7` warm-off-white fill, 1px `rgba(10, 10, 10, 0.06)` border, 8px radius, 32px padding. Used inside the few warm-tinted panels (footnote rails, methodology blocks, citation lists). The paper-warm fill provides separation from the white canvas without needing a heavier border.

**Card on Yellow Band** — `#ffffff` fill, hairline border deepens to `rgba(10, 10, 10, 0.16)` to compensate for the surrounding chroma, 8px radius, 32px padding. Used when a white card sits inside a yellow sectional band — most often for testimonial cards or featured-customer blocks.

### The Yellow Band

The most distinctive component. **Background**: `#fcfb70` full-bleed. **Padding**: `128px 32px` — the brand's generous vertical rhythm. **Content**: centred testimonial in Söhne 32–44px / 400 / `-0.015em` tracking, near-black ink, max-width 920px. Optional: customer logo grid below the quote in 16-up at desktop, monochrome SVG with `currentColor`.

The yellow band is the brand's most considered design moment. It arrives once per scroll-length, is preceded and followed by white space, and contains the page's most quotable content. There is no second yellow zone competing for attention. This is the discipline that defines the brand.

### Badges, Tags, Pills

**Yellow Status Pill** — `#fcfb70` brand-yellow fill, near-black text at 11px / 500 in Söhne Mono uppercase with `0.06em` tracking, 4px radius, 2×8px padding. Use case: `NEW`, `FEATURED`, `BETA` — the rare sanctioned use of the yellow outside the band.

**Tag Chip** — `#ffffff` fill, muted text at 11px / 500 in Söhne Mono, 1px `rgba(10, 10, 10, 0.10)` hairline border, 4px radius, 2×8px padding. Use case: feature labels, integration tags. The hairline border is what makes it readable on white without filling.

**Mono Caps Eyebrow** — No chrome, just type. Söhne Mono 12px / 500 / uppercase / `0.06em` in `#5b5b58`. Sits above the H1 like a newspaper kicker. The eyebrow is the editorial signature — no SaaS site uses this convention, but every newspaper page does.

### Inputs / Forms

**Text Input** — `#ffffff` fill, near-black text at 16px / 400 in Söhne, 1px border at `rgba(10, 10, 10, 0.18)`, **8px radius**, 44px height, 12×14px padding. Placeholder colour at `#8a8a85`. On focus: border shifts to `#0a0a0a` peak ink and a 2px translucent near-black ring appears (`rgba(10, 10, 10, 0.16) 0 0 0 2px`). No coloured glow, no purple ring — the focus state stays editorial.

**Select** — Same shape as text-input with a chevron icon at right (12px) at muted-text colour.

**Checkbox** — 16×16px square, 4px radius, 1px `#0a0a0a` border at rest, fills with `#0a0a0a` on check with white tick at 14px stroke 1.5.

### Navigation

**Top Nav** — `rgba(255, 255, 255, 0.92)` translucent white fill with `backdrop-filter: blur(8px)`, **64px height**, 1px bottom hairline at `rgba(10, 10, 10, 0.10)` always visible (not just on scroll — Ramp commits to the rule). Ramp wordmark left in Söhne 20px / 500. Center: nav links (Product, Use cases, Customers, Pricing, Resources) at 15px / 500 ghost-button style. Right: ghost `Sign in` + primary black-pill `Get started` button.

**Footer** — `#000000` peak black inversion band — the deepest darkest closer to the page. White wordmark, multi-column link grid in Söhne 14px / 400 in `#a3a3a0` soft-on-dark. Legal links + social icons at the bottom.

### Optional / Decorative

**Pull Quote (Inline)** — Söhne 32px / 400 / `-0.015em`, near-black text, with optional `#fefee0` palest-yellow background wash (the soft yellow used only inline, not full-bleed). 4px-radius rounded corners on the wash.

**Modal** — `#ffffff` fill, 12px radius (slightly more relaxed than the 8px card to signal *modal-grade*), 32px padding, modal shadow `rgba(10, 10, 10, 0.20) 0 24px 64px -16px`. Backdrop scrim at `rgba(10, 10, 10, 0.50)`. Max-width 520px for confirmations, 720px for forms.

**Toast** — `#ffffff` fill, 1px hairline border, 8px radius, 12×16px padding. Icon + message in Söhne 14px / 400 + dismiss button. Quiet semantic colours for success/warning/danger.

**Customer Logo Grid** — Inside the yellow band: 16-up at desktop, monochrome SVG with `currentColor` ink, gap 32px. The grid is the brand's conversion proof — *these are the companies that use Ramp* — placed inside the yellow ground for maximum chromatic emphasis.

## 5. Layout Principles

### Spacing System

- Base unit: **8px** (with 4px micro-rhythm for inline elements)
- Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 48 · 64 · 96 · 128 · 160 · 192 · 240`
- Section padding (vertical): **128px** for major marketing bands — the most generous in fintech; 96px between minor sections; 32–48px between content blocks
- Card internal padding: **32px** on default cards; 48px on featured editorial cards; 24px on compact tiles
- Inter-card gutters: 32px between cards in 3-up; 24px in dense 4-up; 16px in 6-up customer logo grids
- The yellow band itself uses **128px** vertical padding — the brand breathes most generously inside the chromatic moment

### Grid & Container

- Max content width: **1280px** with 32px gutters — generous editorial margin
- 12-column grid; hero blocks span full width inside the container; feature grids span 4-3-2-1 columns by breakpoint
- Reading column caps at **680px** for prose-heavy content (case studies, blog posts) — newspaper column rhythm at ~68 characters
- Hero treatment: full-bleed white canvas with 80px / 500 H1, left-aligned, deck below at 20px / 400, dual CTA pair (black pill primary + outlined secondary), product imagery on the right

### Whitespace Philosophy

The page breathes — 128px section padding is the most generous in fintech (typical SaaS is 80–96px, Brex pushes to 112px, Ramp goes further to 128px). The whitespace is part of the brand's "annual report" pitch — readers expect editorial space and reward generosity with attention. The breathing room compounds with the yellow band: when the band arrives, it has full air around it. The contrast between dense editorial sections (paragraph + figure + footnote rail) and the spacious yellow moment is the macro brand voice.

### Section Cadence

A typical Ramp page runs:

1. **Hero** — `#ffffff` canvas with mono-caps eyebrow, 80px / 500 H1 left-aligned, 20px / 400 deck, dual CTA pair (black pill primary + outlined secondary), product imagery on the right side
2. **Feature Section** — `#ffffff` band with editorial 3-up card grid, hairline borders, no shadows, 28px / 500 card titles + 17px / 400 body
3. **Yellow Sectional Band** — `#fcfb70` full-bleed band with centred testimonial in Söhne 32–44px / 400, optional customer logo grid below
4. **Editorial Long-Form** — `#ffffff` band with prose column at 680px width, body at 17px / 1.55 line-height, pull quotes in Söhne 32px / 400, footnote rail at 13px / 400
5. **Comparison Table** — Dense data table with mono caps headers, hairline rows, `tnum` enabled for pricing alignment
6. **Closing CTA** — Centered black pill on white canvas, single dominant action, mono-caps eyebrow above
7. **Footer** — `#000000` peak black inversion, multi-column link grid in 14px / 400 soft-on-dark

The "alternation" is *white + white + yellow + white + white + black footer*. The brand commits to white as the default ground; the yellow is a single moment per page; the black footer provides closure.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 2px | Decorative dividers, focus indicators inside chips |
| XS | 4px | Status badges, tag chips |
| SM | 6px | Compact chips |
| MD | 8px | Cards, inputs — the dominant editorial radius |
| LG | 12px | Modals, hero panels, large surfaces |
| XL | 16px | Rare emphasis (featured editorial cards) |
| Pill | 9999px | All buttons — the only warm gesture |

Ramp's signature pairing is **8px cards + 9999px pills** — the contrast between hard 8px card corners and the fully-rounded button is the brand's signature shape rhythm. Every page repeats it. There are no zero-radius elements except section dividers (which are 1px hairlines, not shapes). The 9999px pill is reserved for buttons exclusively — never for cards, never for chips.

The radius ladder is tight (2 → 4 → 6 → 8) before jumping to the modal/featured tier (12 → 16). The compression of the small tiers reinforces the editorial discipline; the jump to pill-radius for buttons creates the only warm gesture in an otherwise rectilinear system. This shape ladder is what distinguishes Ramp from Mercury (which uses 12–16px cards) and from Brex (which uses 16px cards + 8px buttons). Ramp goes 8px cards + full pills — sharper cards, fully rounded buttons.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no border, no shadow | Page canvas, body sections, dense data |
| 1 — Hairline | 1px `rgba(10, 10, 10, 0.10)` border | Default editorial cards (the signature) |
| 2 — Hairline + Soft | hairline + `rgba(10, 10, 10, 0.04) 0 1px 2px` | Sticky nav post-scroll |
| 3 — Elevated | `rgba(10, 10, 10, 0.08) 0 8px 24px -8px` | Dropdowns, popovers |
| 4 — Popover | `rgba(10, 10, 10, 0.10) 0 12px 32px -16px` | Nested menus, tooltips |
| 5 — Modal | scrim `rgba(10, 10, 10, 0.50)` + `rgba(10, 10, 10, 0.20) 0 24px 64px -16px` | Application dialogs, confirmations |

### Shadow Philosophy

Ramp's depth philosophy is **editorial**: printed pages don't have shadows, and Ramp doesn't either. The page is built from **bands and rules** rather than lifted surfaces. Cards are bordered, not floated. The default card geometry is hairline-only — no shadow at any level. This is the discipline that defines the brand.

The shadow tiers exist only for elements where editorial depth fails — dropdowns must overlap content, modals must scrim everything beneath them, popovers must visually escape their containers. For these elements, Ramp uses **near-black-tinted** shadows (`rgba(10, 10, 10, …)`) at low opacities. The shadow is functional, not decorative. The discipline differs from Brex's brand-glow shadow (which extends brand chroma into negative space) and Mercury's softer multi-layer shadows (which signal consumer-app polish).

The single exception: customer-logo grids inside the yellow band sometimes use a faint `rgba(10, 10, 10, 0.04)` ambient shadow under the white logo cards to create separation against the chromatic ground. Even here, the shadow is so soft it's barely perceptible — the brand's discipline holds.

## 8. Interaction & Motion

### Easing Curves

- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — Material-style; default for hover, focus, color transitions
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — punchier exit; modal entry, hero reveal
- **Out-Soft**: `cubic-bezier(0.0, 0, 0.2, 1)` — gentle settle; dropdown reveal, scroll-reveal

### Duration Buckets

| Bucket | Value | Use |
|--------|-------|-----|
| Instant | 0ms | Border opacity changes, link underline weight |
| Fast | 100ms | Link underline fade-in, focus ring fade-in |
| Standard | 180ms | Button background colour swap, card border opacity |
| Slow | 240ms | Modal entry, dropdown reveal, scroll-reveal opacity |
| Page | 300ms | Route transitions |

### Per-Component Recipes

- **Link hover**: underline thickness `1px → 2px` over 100ms standard; colour stays `#0a0a0a` near-black at all states.
- **Primary pill button hover**: background `#0a0a0a → #1a1a1a` over 180ms standard. **No translate, no shadow change.** The discipline is rectilinear-and-flat; consumer-app micro-lifts would break the editorial register.
- **Secondary pill button hover**: background `transparent → rgba(10, 10, 10, 0.04)` over 180ms; border colour unchanged.
- **Ghost button hover**: background `transparent → rgba(10, 10, 10, 0.04)` over 180ms.
- **Card hover**: border opacity `10% → 18%` over 180ms standard. **No lift, no shadow.** The brand is hairline-only.
- **Yellow band hover-on-card**: white card inside yellow band hovers with border opacity `16% → 24%` and a subtle 2px upward translate (the only translate Ramp uses).
- **Scroll-reveal**: marketing-page sections fade in over 240ms ease-out-soft when entering viewport at 80% threshold. **Opacity only** — no translateY rise that competes with the scroll itself.
- **Modal entry**: backdrop scrim fades in over 180ms; modal content fades + scales from 0.98 to 1.0 over 240ms ease-emphasized.
- **Dropdown reveal**: fades in over 180ms ease-out-soft from `translateY(-4px)` to `translateY(0)`.

### Page Transitions

Page-to-page navigation uses a 300ms cross-fade with the sticky header staying static. Anchor smooth-scroll uses 600ms ease-emphasized. The sticky nav border-bottom fades in over 100ms when scrollY > 8px (it's already visible at rest, but it deepens slightly).

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. Scroll-reveal becomes static on-mount. Modal scale-in becomes opacity-only. All `translate` and `scale` transforms suppress entirely — replaced with instant render or opacity-only fades. Durations halve where they remain. Card hover loses any translate; only the border opacity change remains. Button hover loses nothing because it had no translate to begin with — the brand's restraint pays off in reduced-motion compliance.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| `#0a0a0a` text on `#ffffff` canvas | 19.6 | AAA at all sizes |
| `#0a0a0a` text on `#fafaf7` panel | 18.7 | AAA at all sizes |
| `#0a0a0a` text on `#fcfb70` yellow band | 16.4 | AAA at all sizes |
| `#5b5b58` muted on `#ffffff` | 7.1 | AAA at body sizes |
| `#8a8a85` soft on `#ffffff` | 4.5 | AA at body sizes |
| `#ffffff` on `#0a0a0a` near-black pill | 19.6 | AAA at all sizes |
| `#0a0a0a` link underlined on `#ffffff` | 19.6 | AAA at all sizes |
| `#1a7f3a` success on `#ffffff` | 5.4 | AA at body sizes |
| `#9a1f1f` danger on `#ffffff` | 6.3 | AA at body sizes |

The contrast ratios are all extreme — Ramp's near-black-on-white discipline produces 19.6:1 ratios that exceed AAA at every size. The yellow band's 16.4:1 is also AAA — the pastel-yellow + near-black pair is one of the most contrast-correct accent pairings in fintech.

### Focus Indicators

Focus ring is `2px solid rgba(10, 10, 10, 0.16)` near-black translucent ring with 2px outline-offset. The ring stays editorial — no coloured glow, no purple ring, no brand-chroma extension. The discipline is *visible focus without decorative emphasis*. On the yellow band, the focus ring deepens to `2px solid rgba(10, 10, 10, 0.30)` to compensate for the surrounding chroma.

### ARIA Patterns

- **Top nav**: `<nav aria-label="Primary">` landmark with skip-link.
- **Hero CTA**: black pill button uses standard `<button>` element with text label; no decorative icons require `aria-label` compensation.
- **Yellow band testimonial**: wrapped in `<blockquote cite="...">` with `<cite>` for attribution.
- **Pricing tier toggle**: `role="radiogroup"` with `<input type="radio">` for monthly/annual switching.
- **Modal**: `role="dialog" aria-modal="true" aria-labelledby` with focus trap and Esc-to-close.
- **Combobox / search**: `role="combobox" aria-expanded aria-autocomplete="list"`.
- **Toast notifications**: `aria-live="polite"` for non-critical; `aria-live="assertive"` for errors.
- **Customer logo grid**: each logo wrapped in `aria-label="<Customer name>"` since visual logos lack text content.

### Keyboard Navigation

- Tab order: skip-link → wordmark → primary nav → search → auth CTAs → main content → footer
- Pricing tier toggle navigable via Arrow keys within the radiogroup
- Modal focus trap: Tab cycles within modal; Esc dismisses
- Yellow-band testimonial is non-interactive — focus skips it entirely
- Footer link grid uses Arrow-key column traversal (custom JS) to make the dense link grid keyboard-friendly

### Screen Reader Hints

- Mono caps eyebrows use CSS `text-transform: uppercase` so screen readers announce natural-case
- Ramp wordmark uses `aria-label="Ramp"`
- Yellow band has no special aria — it's a stylistic background, content reads naturally
- Pricing values announce with currency unit despite tabular-numeral mono visual
- Pull quotes inside the yellow band use `<blockquote>` for semantic emphasis
- Underlined links rely on the visible underline + `<a>` tag; no decorative `aria-label` is needed

### Reduced Motion

All transitions degrade to opacity-only or instant. Card hover translates suppress entirely; only the border opacity change remains. Modal scale-in becomes instant. Scroll-reveal becomes static on-mount. The brand's hairline-and-rule discipline means most components have nothing to suppress — the brand's restraint pays off in reduced-motion compliance.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Top nav collapses to logo + Get Started + hamburger; hero H1 drops 80→44px; cards 1-up; yellow band padding reduces to 80px vertical; testimonial drops to 24px / 400 |
| Tablet | 640–1024px | Top nav keeps inline links (without mega-menu); hero H1 at 56px; cards 2-up; yellow band padding at 96px vertical |
| Desktop | 1024–1280px | Full nav with mega-menu; hero H1 at 64–80px; cards 3-up; yellow band at 128px vertical padding |
| Wide | 1280–1440px | Content width caps at 1280; gutters absorb the rest |
| Ultra | >1440px | Page locks to 1280; gutters expand to 64px |

### Touch Targets

- Buttons: 44px minimum height across all sizes — Apple HIG compliant
- Top-nav links: 44×44px tap area even at 15px text
- Yellow status pill (NEW badges): 28px visual but 12px vertical padding for 44px effective
- Pricing tier toggle: 44×44px segmented-control thumb

### Collapsing Strategy

- **Top nav** at <1024px: primary nav links collapse into hamburger sheet; `Get Started` black pill stays visible
- **Hero CTA pair** at <640px: stacks vertically (black pill above, outlined secondary below)
- **Card grids**: 4 → 3 → 2 → 1 columns
- **Yellow band**: vertical padding reduces from 128px → 96px → 80px across breakpoints; testimonial type drops from 44px → 32px → 24px
- **Customer logo grid**: 16 → 8 → 4 → 3 columns; logos render monochrome at all sizes
- **Pricing cards**: stack vertically at <1024px; featured tier remains prominent

### Image Behavior

Customer logos use SVG with `currentColor` so they switch from `#0a0a0a` on white to `#0a0a0a` on yellow without asset swap. Product imagery uses `aspect-ratio` to prevent layout shift. Marketing illustrations use `srcset` with 1x/2x. Ramp avoids decorative imagery — most pages render entirely with type, hairlines, and the yellow band, with product screenshots being the only image content.

### Container Queries

Used inside dense data tables: when card width crosses 480px, comparison table switches from horizontally-scrolling to fully-visible columns. At narrower widths, columns stack into card-style rows.

## 11. Content & Voice

### Tone

**Editorial, considered, lightly analytical.** Ramp writes like a corporate-finance team that hired editorial designers and then hired editorial writers to match the design. Headlines pose direct claims ("Save more. Spend less."); subheads explain capability with broadsheet calm; product copy treats finance ops as a serious editorial subject — corporate cards, accounts payable, expense management, procurement — without the urgency or enthusiasm of consumer fintech. The voice is *quieter than Mercury's* (Mercury allows itself a serif headline and slightly warmer copy), *more editorial than Brex's* (Brex pushes faster and more declarative), *more institutional than Wise's* (Wise leans approachable; Ramp leans considered).

### Microcopy Patterns

- **Button verbs**: *Get started*, *Talk to sales*, *Watch demo*, *See pricing*, *Read documentation*, *Sign in*. Direct, no superlatives, no exclamation marks.
- **Error messages**: *"We couldn't process your application. Please verify your business details and try again."* — specific, accountable, professional. Never *"Oops!"* or *"Something went wrong!"* — consumer-app emotional hedging.
- **Success confirmations**: *"Application submitted. We'll review and respond within two business days."* — clear, time-bounded, professional.
- **Empty states**: *"No transactions to display. Connect your accounts to see real-time spending."* — instruction-led, includes the next action, no decorative emoji or marketing copy.
- **Field labels**: *Business name*, *Email*, *Annual revenue*, *Industry*, *Number of employees*. Specific, no friendly framing.
- **Loading states**: *"Verifying business…"*, *"Reviewing application…"*, *"Connecting accounts…"* — context-specific and trust-building.
- **Pricing copy**: *"For finance teams that need to scale spend visibility."* — capability-led, never *"For modern teams who want to grow!"*.

### Empty States

The dashboard empty state for new accounts: *"Welcome to Ramp. Add your first cardholder to begin issuing virtual cards."* — instruction-led, points at the next action, builds momentum without enthusiasm. The transactions empty state: *"No transactions yet. Spend with your Ramp card or import a CSV from your existing provider."* — describes the state and offers two paths forward.

The empty-state copy is short, factual, and never uses humour or emoji. The brand's voice does not allow itself the consumer-app concessions of *"Looks like you're new here!"* or *"Nothing here yet — let's get started!"*. The editorial register holds.

### CTA Verb Conventions

- Primary on hero: *Get started*, *Talk to sales*, *Apply for Ramp*
- Secondary: *Watch demo*, *See pricing*, *Read customer stories*, *Sign in*
- Tertiary text: *Learn more*, *Browse integrations*, *View documentation*, *Read the docs*, *Read our blog*
- Avoided: *Click here*, *Submit*, *Sign up free*, *Start your free trial!*. Ramp maintains a corporate-grade register without dropping into consumer-marketing-template language.

The verbs match the corporate-card audience — CFOs, controllers, finance leads — who respond to outcome verbs and time-to-value claims rather than urgency or enthusiasm.

### Headline Conventions

Headlines use **one or two short sentences** — never a multi-clause construction. Examples:

- *"Save more. Spend less."*
- *"Finance ops, one platform."*
- *"Corporate cards that pay for themselves."*
- *"The smarter way to scale spend."*

The sentence rhythm is short, declarative, periods preferred over exclamation marks. The brand voice never asks rhetorical questions in headlines (consumer-app convention) and never uses sentence-fragment marketing copy without periods (modern-startup convention).

## 12. Dark Mode & Theming

**Optional dark mode on certain product pages.** The marketing surface is primarily light-canvas, but Ramp ships dark variants on specific dashboard preview pages and case-study pages where dark mode demonstrates the in-product experience. The dark mode is a complete token swap with the **yellow band unchanged across both grounds** — the pastel-yellow `#fcfb70` reads strongly on both white and near-black, and inverting the yellow would lose the brand.

Dark-mode token swap:

- **canvas**: `#ffffff` → `#0a0a0a`
- **bg-soft**: `#fafaf7` → `#141414`
- **bg-paper**: `#f7f6f1` → `#1a1816`
- **bg-yellow**: `#fcfb70` → unchanged (the yellow stays the same)
- **bg-ink**: `#0a0a0a` → `#000000` (peak black promoted)
- **text**: `#0a0a0a` → `#ffffff`
- **text-body**: `#1a1a1a` → `#e6e6e3`
- **text-muted**: `#5b5b58` → `#a3a3a0`
- **text-soft**: `#8a8a85` → `#7a7a76`
- **text-on-yellow**: `#0a0a0a` → unchanged (the contrast pair never changes)
- **brand**: `#0a0a0a` → `#ffffff` (CTA fill inverts to white)
- **brand-hover**: `#1a1a1a` → `#e6e6e3`
- **on-brand**: `#ffffff` → `#0a0a0a` (near-black text on the white pill)
- **border**: `rgba(10, 10, 10, 0.10)` → `rgba(255, 255, 255, 0.10)`
- **border-strong**: `rgba(10, 10, 10, 0.18)` → `rgba(255, 255, 255, 0.20)`
- **shadow opacities**: doubled in dark mode for visibility against dark canvas; modal shadow becomes `rgba(0, 0, 0, 0.40) 0 24px 64px -16px`

The yellow band is the brand's most cross-mode-resilient asset; it never needs reformulation. The black-on-yellow contrast pair is preserved exactly because the yellow itself preserves its `#fcfb70` value across both modes — only the surrounding canvas inverts. This is the rare brand where the accent colour is mode-independent because the accent's role is *sectional, not actionable*. Brex's gradient is also mode-independent because the gradient itself reads on both grounds; Ramp's yellow is mode-independent for the same reason.

The white pill CTA on the dark canvas is the dark-mode-preferred treatment — white text on dark inverts to near-black text on white pill. The pill geometry, padding, and typography are unchanged. The mono caps eyebrow inverts colour from `#5b5b58` to `#a3a3a0` to maintain readability. The hairline rule inverts from `rgba(10, 10, 10, 0.10)` to `rgba(255, 255, 255, 0.10)`.

## 13. Lineage & Influences

Ramp's design DNA traces three lineages: **Pentagram-school editorial design**, where black-on-white type, single pastel accent, and generous whitespace produce the "annual report" register Ramp inherits and pulls into web; **Klim / Lineto's Söhne**, the neo-grotesque type family that carries the disciplined, slightly-warm authority across every weight in the brand — the typographic backbone; and **The New York Times product / explainer pages**, the broadsheet-rhythm convention of section bands separated by hairline rules, mono caps eyebrows, and prose columns capped at ~70 characters per line. Ramp's combination of these three lineages produces a register no peer occupies: editorial discipline + neo-grotesque type + sectional pastel accent + flat black pill CTA + hairline-only depth.

The choice to commit to *yellow-as-sectional* rather than *yellow-as-brand* is the brand's most considered decision. A typical fintech with a yellow brand colour (Klarna, for instance) puts yellow on the logo, on the CTA, on icons, on highlights — yellow becomes the brand identity. Ramp's choice is the opposite: yellow stays sectional. The brand colour is functionally black. This makes the yellow rare, considered, and chromatically powerful when it does appear. The single yellow band per scroll-length is more memorable than a yellow-everywhere brand because the surrounding white space concentrates the reader's attention on the moment.

The neo-grotesque + pill button pairing is the brand's typographic-shape combination. Söhne at weight 500 with `-0.03em` tracking provides the editorial display register; the full-pill button (radius 9999) provides the single warm gesture in an otherwise rectilinear system. The combination distinguishes Ramp from Mercury (which uses a serif headline + 12px-radius button) and from Brex (which uses a 600-weight Söhne + 8px-radius gradient button). Ramp's 500-weight Söhne + full-pill black button is the precise typographic-shape signature.

What Ramp rejects: **gradients** (Brex / Stripe signal), **glass-morphism** (consumer-app signal), **soft drop-shadows on cards** (consumer-app signal), **brand colour on the CTA** (most-of-fintech signal), **serif headlines** (Mercury signal), **warm cream surfaces** (Wise signal), **cool grey panels** (Brex / Apple signal), **multi-stop accent palette** (Stripe / Linear signal). The brand position is engineered to look like a printed page that has been hyperlinked — the editorial register is the entire identity.

**Influences:**

- **Pentagram editorial / annual-report design** — Black-on-white, single pastel accent, generous whitespace, sectional typography. The annual-report voice Ramp inherits. *https://www.pentagram.com*
- **Klim / Lineto (Söhne)** — Söhne is Ramp's typographic backbone — neo-grotesque modernism with subtle warmth. Weight 500 + hard tracking is the brand voice. *https://lineto.com*
- **The New York Times (product / explainer pages)** — Newspaper-broadsheet rhythm: section bands, hairline rules, mono caps eyebrows, prose columns capped at 680px. *https://www.nytimes.com*
- **McKinsey & Company / quarterly reports** — The "institutional deliverable" register — disciplined typography, pastel accent, no decoration. The corporate-finance audience expects this register. *https://www.mckinsey.com*
- **Linear** — Section-as-zone composition — full-bleed bands separated by hairlines. Ramp pulls this convention into editorial register. *https://linear.app*
- **Stripe (early brand era)** — Search for chromatic restraint and brand-as-typographic-system in fintech. Ramp pulls Stripe's discipline further toward editorial. *https://stripe.com*
- **Mercury** — Adjacent fintech competitor. Where Mercury runs serif headline + mint band, Ramp runs neo-grotesque + yellow band. The competitive differentiation. *https://mercury.com*
- **Brex** — Direct competitor in the corporate-card category. Brex chose the loud chromatic position; Ramp chose the editorial restraint. *https://brex.com*

## 14. Do's and Don'ts

### Do

- **Do** keep the yellow `#fcfb70` to **one full-bleed band per scroll-length**. Multiple yellow zones break the pacing and dilute the chromatic moment.
- **Do** keep CTAs **black with white text and full pill radius**. Yellow CTAs read as a different brand entirely (Klarna territory).
- **Do** ship Söhne (or a Söhne-class neo-grotesque) at **weight 500** for display copy with `-0.03em` tracking. The 500/`-0.03em` pair is the brand voice.
- **Do** use **mono caps eyebrows** (Söhne Mono 12px / 500 / 0.06em / uppercase) above headlines. The newspaper kicker convention is the editorial signature.
- **Do** cap prose columns at **680px** (~68 characters) for reading rhythm — the broadsheet measure.
- **Do** use **hairline borders** (`rgba(10, 10, 10, 0.10)`) instead of shadows on default cards. The brand is hairline-only.
- **Do** keep section padding at **128px** vertical for major bands. The most generous rhythm in fintech; the whitespace is half the brand.
- **Do** use **underlined inline links** in body copy at the same near-black as text. Newspaper convention; never coloured links.
- **Do** invert footer to **`#000000` peak black** for closing emphasis. The black footer provides closure to the page rhythm.
- **Do** centre testimonials inside the yellow band at **32–44px Söhne 400** with comfortable line-height. The pull-quote-on-yellow is the brand's most quotable moment.
- **Do** use `tnum` enabled in pricing displays for column alignment. Tabular numerals signal corporate-grade attention.
- **Do** keep the brand voice **editorial and considered**. No exclamation marks in marketing copy; no consumer-app enthusiasm.

### Don't

- **Don't** apply **gradients, glows, or glassy chrome**. Ramp's discipline is flat-and-printed; gradients shift the brand into Brex/Stripe territory.
- **Don't** centre the H1. Left-aligned 80px Söhne is the brand voice; centred display copy reads as marketing-template generic.
- **Don't** use yellow as a **type colour** or **icon fill**. Yellow is sectional, not actionable. The yellow ground always carries near-black ink.
- **Don't** introduce a **second saturated colour** (no green, no blue, no purple). The yellow + black pair is the entire chromatic system.
- **Don't** drop the H1 weight below 500 or push above 600. Söhne at 400 reads as editorial-precious (Mercury); at 700 reads as ad-grade (Klarna). 500 is the sweet spot.
- **Don't** soften the CTA radius below 9999. The full pill is the only warm gesture; an 8px-radius CTA reads as a different brand entirely.
- **Don't** add **drop-shadows** to default cards. The hairline-only discipline is what makes the page feel printed rather than SaaS-generic.
- **Don't** use **warm cream** surfaces. The pure-white canvas is the editorial signature; warm cream shifts to Wise/Mercury territory.
- **Don't** use **cool grey** panels. The white-and-warm-undertone neutral system is the brand's chromatic discipline; cool grey shifts to Brex/Apple territory.
- **Don't** use exclamation marks in marketing copy. The voice is broadsheet-quiet, not consumer-enthusiasm.
- **Don't** widen the page beyond **1280px**. The brand reads as Pentagram-grade editorial, not data-dense SaaS.
- **Don't** introduce **decorative illustration** outside of product screenshots. The page is type-and-rule; illustration breaks the discipline.

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:           #ffffff
Off-White:        #fafaf7
Yellow Band:      #fcfb70
Yellow Soft:      #fefee0
Text:             #0a0a0a
Text Strong:      #000000
Text Muted:       #5b5b58
Text Soft:        #8a8a85
Brand (CTA):      #0a0a0a
On Brand:         #ffffff
On Yellow:        #0a0a0a
Border:           rgba(10, 10, 10, 0.10)
Border Soft:      rgba(10, 10, 10, 0.06)
Border Strong:    rgba(10, 10, 10, 0.18)
Footer Bg:        #000000
```

### Example Component Prompts

1. **"Create a Ramp-style hero: pure white `#ffffff` canvas, no decoration. Mono caps eyebrow above the headline in Söhne Mono 12px / 500 / `0.06em` uppercase in `#5b5b58` muted-grey. 80px / 500 Söhne H1 with `-0.03em` tracking in `#0a0a0a` near-black, left-aligned, max-width 920px. 20px / 400 Söhne body deck below at 1.50 line-height in `#1a1a1a`. Dual CTA pair below — primary black pill (`#0a0a0a` fill, white text 15px / 500, full pill radius 9999, 12×22 padding, 44px height, hover warms to `#1a1a1a`) + secondary outlined pill (`#ffffff` fill, near-black text, 1px solid `#0a0a0a` border, full pill radius). Product screenshot on the right side, no decorative wash."**

2. **"Design a Ramp yellow sectional band: full-bleed `#fcfb70` background, 128px vertical padding, max-width 920px content. Centred testimonial in Söhne 32–44px / 400 weight / `-0.015em` tracking, near-black `#0a0a0a` ink, comfortable 1.30 line height. Below the quote: customer name in Söhne 16px / 500 + role/company in Söhne 14px / 400 muted. Optional 16-up customer logo grid below in monochrome SVG with `currentColor` near-black."**

3. **"Build a Ramp editorial card: `#ffffff` background, 8px radius, 1px hairline border `rgba(10, 10, 10, 0.10)` (10% black — the editorial signature), 32px padding, **no shadow**. Inside: optional 24×24 monochrome icon at top in `#0a0a0a`, 28px / 500 Söhne heading with `-0.01em` tracking, 17px / 400 Söhne body in `#1a1a1a` at 1.55 line-height. Hover: border opacity steps from 10% to 18% over 180ms — no lift, no shadow."**

4. **"Compose a Ramp top nav: 64px height, `rgba(255, 255, 255, 0.92)` translucent fill with `backdrop-filter: blur(8px)`, 1px bottom hairline `rgba(10, 10, 10, 0.10)` always visible. Ramp wordmark left in Söhne 20px / 500 near-black. Center nav links (Product, Use cases, Customers, Pricing, Resources) in Söhne 15px / 500 ghost-button style. Right: ghost `Sign in` + primary black-pill `Get started` button (full pill, 12×22 padding)."**

5. **"Render a Ramp comparison table: 1280px max width, monospace caps headers in Söhne Mono 11px / 500 / `0.06em` / uppercase in `#5b5b58`. Rows separated by 1px `rgba(10, 10, 10, 0.10)` hairlines. Pricing values in Söhne Mono 16px / 500 with `tnum` enabled for column alignment. Feature checkmarks in `#0a0a0a` near-black. Featured tier highlighted with a `#fafaf7` row background and a small `#fcfb70` `RECOMMENDED` mono caps badge at the top."**

6. **"Build a Ramp footer: full-bleed `#000000` peak black background, 96px top padding, 64px bottom. White Ramp wordmark in Söhne 20px / 500. Multi-column link grid in Söhne 14px / 400 in `#a3a3a0` soft-on-dark — Product / Solutions / Resources / Company columns. Below: legal links + social icons + copyright in Söhne 13px / 400 muted, separated by 1px `rgba(255, 255, 255, 0.10)` hairline rule."**

### Iteration Guide

1. **Check the canvas + accent pair.** Ramp is `#ffffff` canvas + `#fcfb70` yellow band. If your canvas is warm cream or cool grey, you've drifted to Wise/Mercury or Brex territory. The pure-white canvas is non-negotiable.
2. **Switch to Söhne (or Inter as fallback) at weight 500.** Söhne at 600 collapses the brand into Brex territory; at 400 collapses into editorial-precious Mercury territory. The 500 weight + `-0.03em` tracking is the precise voice.
3. **Push the H1 to 80px with `-0.03em` tracking.** 56–64px reads as restrained-modern (Mercury); 96px reads as ad-grade (Brex). 80px at 500 with hard tracking is the canonical Ramp.
4. **Keep yellow sectional, not actionable.** A yellow CTA breaks the brand. The CTA is **black**; the yellow is a **band**. This is the brand's most counter-intuitive discipline.
5. **Apply the full-pill button radius.** A square or 8px-radius CTA reads as a different brand. The pill is the only warm gesture in an otherwise rectilinear system.
6. **Use hairline borders, not shadows, on cards.** The 10% black hairline is the editorial signature. Drop shadows shift the brand into consumer-app territory.
7. **Use mono caps eyebrows above headlines.** Söhne Mono 12px / 500 / `0.06em` / uppercase. The newspaper kicker is the editorial signature; SaaS sites without it read as generic.
8. **Cap prose at 680px width.** The broadsheet column rhythm is what makes Ramp's long-form copy feel like an article rather than a marketing page. Wider columns shift the register toward marketing.
