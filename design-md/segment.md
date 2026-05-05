---
name: Segment
tagline: Twilio Segment's customer-data-platform canvas — Whitney SSm humanist sans, navy-on-white, single confident `#1866ee` blue.
author: webdesignhot
source_url: https://segment.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [light, sans, navy, blue, enterprise, data-platform, analytics, customer-data]
preview_swatch: ['#ffffff', '#1866ee', '#000d25']
related: [datadog, posthog, vercel]
description: 'Segment''s marketing site (now Twilio Segment) is the canonical customer-data-platform canvas — a clean white ground (`#ffffff`) anchored on near-black navy ink (`#000d25`), accented by the unmistakable Segment blue (`#1866ee`) that carries every primary CTA, the wordmark, and the link state. Type runs **Whitney SSm**, the Hoefler & Co humanist sans licensed by Twilio post-acquisition, at confident 700 weights for display (48–72px with -1.44 to -2px tracking) and a careful 16/400 for body. CTAs are 50px pill (9999px) with 6×24px padding, navigation is whisper-quiet, and section bands alternate between white and a deep navy `#000d25` for the hero and conversion zones. The result is the only customer-data-platform site that successfully channels enterprise-trust without dropping into stock-photo blue-corporate territory.'

colors:
  bg: '#ffffff'                  # default canvas
  bg-dark: '#000d25'             # hero/footer dark band — Twilio Segment near-black navy
  bg-soft: '#f4f4f4'             # neutral surface for cards
  bg-cool: '#f6f9fb'             # cool-white alt band
  surface: '#ffffff'
  surface-dark: '#000d25'
  surface-elev: '#0a1838'        # raised dark surface inside dark bands
  brand: '#1866ee'               # Segment blue — every primary CTA
  brand-hover: '#0e58d9'         # darker blue on hover
  brand-active: '#0844a8'        # pressed state
  brand-pale: '#cfdcfb'          # disabled CTA tint
  brand-deep: '#0263e0'          # link colour — slightly more saturated
  brand-soft: '#e3eefe'          # info-banner surface
  text: '#000d25'                # primary ink — near-black navy
  text-strong: '#000817'         # display ink at maximum punch
  text-muted: '#525463'          # secondary metadata
  text-soft: '#7a7d8b'           # caption text
  text-on-brand: '#ffffff'       # white on Segment blue CTA
  text-on-dark: '#ffffff'        # white on navy band
  text-on-dark-muted: 'rgba(255,255,255,0.72)'  # secondary copy on dark
  link: '#0263e0'                # default inline link
  link-hover: '#0844a8'          # link hover deepens
  link-on-dark: '#62aef8'        # bright blue link on dark band
  border: '#e1e3ea'              # default 1px hairline
  border-soft: '#f0f1f5'         # editorial dividers
  border-strong: '#cdd0da'       # focus state hairline
  border-on-dark: 'rgba(255,255,255,0.14)'  # hairline on dark band
  badge-bg: '#e3eefe'            # "New" chip surface
  badge-text: '#0844a8'          # "New" chip text
  scrim: 'rgba(0,13,37,0.62)'    # navy-tinted modal backdrop
  shadow-card: 'rgba(0,13,37,0.06)'
  shadow-elev: 'rgba(0,13,37,0.12)'
  success: '#0a8754'             # confirmed-state green
  success-soft: '#dff5ea'
  warning: '#a35316'             # advisory amber
  warning-soft: '#fff3dc'
  danger: '#c0322a'              # validation error red
  danger-soft: '#fde6e3'
  info: '#1866ee'                # info banner — same as brand

typography:
  display:
    family: '"Whitney SSm A", "Whitney SSm B", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: ['tnum', 'ss01']
  body:
    family: '"Whitney SSm A", "Whitney SSm B", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"Operator Mono", "Söhne Mono", Menlo, Monaco, Consolas, "Courier New", monospace'
    weights: [400]
  scale:
    hero-display:    { size: 72, weight: 700, lineHeight: 1.05, tracking: '-2.16px',  family: display, opentype: ['ss01'] }
    page-title:      { size: 48, weight: 700, lineHeight: 1.05, tracking: '-1.44px',  family: display, opentype: ['ss01'] }
    section-head:    { size: 40, weight: 700, lineHeight: 1.1,  tracking: '-0.8px',   family: display, opentype: ['ss01'] }
    sub-section:     { size: 28, weight: 700, lineHeight: 1.2,  tracking: '-0.4px',   family: display }
    eyebrow:         { size: 14, weight: 600, lineHeight: 1.2,  tracking: '0.12em',   family: body, transform: uppercase }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-md:         { size: 16, weight: 400, lineHeight: 1.75, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    caption:         { size: 12, weight: 500, lineHeight: 1.45, tracking: '0',        family: body }
    micro:           { size: 11, weight: 500, lineHeight: 1.3,  tracking: '0.04em',   family: body }
    button-cta:      { size: 16, weight: 500, lineHeight: 1.0,  tracking: '0',        family: body }
    nav-link:        { size: 14, weight: 500, lineHeight: 1.0,  tracking: '0',        family: body }
    code-inline:     { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: mono }
    code-block:      { size: 13, weight: 400, lineHeight: 1.65, tracking: '0',        family: mono }
    metric-display:  { size: 56, weight: 700, lineHeight: 1.0,  tracking: '-1.5px',   family: display, opentype: ['tnum'] }
    metric-large:    { size: 32, weight: 700, lineHeight: 1.0,  tracking: '-0.6px',   family: display, opentype: ['tnum'] }
    badge:           { size: 11, weight: 600, lineHeight: 1.0,  tracking: '0.08em',   family: body, transform: uppercase }

radius:
  micro: 2
  sm: 4
  md: 6        # default cards
  lg: 8
  xl: 12
  pill: 9999   # CTAs — Segment's signature 50px pill

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 72
  hero-min-height: 540

components:
  button-cta:
    bg: '#1866ee'
    color: '#ffffff'
    radius: 9999
    padding: '6px 24px'
    height: 40
    font: button-cta
    use: 'Get demo, Try Segment, Sign up — every primary action.'
  button-cta-hover:
    bg: '#0e58d9'
    color: '#ffffff'
    radius: 9999
    use: 'Hover state — deeper blue.'
  button-secondary:
    bg: '#ffffff'
    color: '#000d25'
    border: '1px solid #000d25'
    radius: 9999
    padding: '5px 23px'
    height: 40
    use: 'Contact sales, Learn more — inverse CTAs.'
  button-on-dark:
    bg: '#ffffff'
    color: '#000d25'
    radius: 9999
    use: 'Primary CTA inside the navy hero band.'
  button-tertiary:
    bg: 'transparent'
    color: '#0263e0'
    use: '"Read the docs" link buttons — flips to brand-deep on hover.'
  card:
    bg: '#ffffff'
    color: '#000d25'
    radius: 6
    padding: '32px'
    border: '1px solid #e1e3ea'
    use: 'Feature card on white band — single hairline, no shadow at rest.'
  card-on-dark:
    bg: '#0a1838'
    color: '#ffffff'
    radius: 8
    padding: '32px'
    border: '1px solid rgba(255,255,255,0.10)'
    use: 'Elevated card inside the navy hero band.'
  text-input:
    bg: '#ffffff'
    color: '#000d25'
    radius: 6
    height: 44
    padding: '12px 14px'
    border: '1px solid #cdd0da'
    focus: '2px solid #1866ee'
    use: 'Form input — slim 6px radius for utility.'
  navigation:
    bg: '#ffffff'
    color: '#000d25'
    height: 72
    border-bottom: '1px solid #e1e3ea'
    use: 'Sticky masthead — quiet white band with mega-menu dropdowns.'
  badge-new:
    bg: '#e3eefe'
    color: '#0844a8'
    radius: 4
    padding: '2px 8px'
    font: badge
    use: '"NEW" chip beside nav links.'
  metric-card:
    bg: '#ffffff'
    color: '#000d25'
    radius: 6
    padding: '32px'
    border: '1px solid #e1e3ea'
    use: 'Customer proof tile — large `metric-display` number, label below.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 120
  duration-standard: 220
  duration-slow: 320
  cta-hover: 'CTA bg `#1866ee` → `#0e58d9` over 120ms ease-out'
  card-hover: 'border lifts to `#cdd0da` + translateY(-2px) + shadow-card fades in over 220ms'
  reduced-motion: 'respects prefers-reduced-motion: reduce — all transitions to opacity-only'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'none — Segment stays mostly flat at rest'
  card-hover: 'rgba(0,13,37,0.06) 0 4px 16px'
  modal: 'rgba(0,13,37,0.16) 0 16px 40px'
  ring: '0 0 0 3px rgba(24,102,238,0.32)'

accessibility:
  contrast-text-on-bg: 17.2          # #000d25 on #ffffff — AAA
  contrast-text-on-cta: 4.9          # #ffffff on #1866ee — AA at body sizes
  contrast-link-on-bg: 6.2           # #0263e0 on #ffffff — AAA
  contrast-text-on-dark: 18.4        # #ffffff on #000d25 — AAA
  focus-ring: '3px solid rgba(24,102,238,0.32) + 2px outline offset'
  reduced-motion-honored: true
  touch-target-min: 40
  keyboard-nav: 'Tab moves logo → mega-menu triggers (Down arrow expands) → utilities → main → footer.'

dark-mode: null   # Light-only marketing site. Segment app uses its own dark dashboard but the marketing surface stays light + selective dark bands.
---

## 1. Visual Theme & Atmosphere

Segment's marketing site is the canonical customer-data-platform canvas — calm, confident, navy-on-white, with a single-blue chromatic discipline that has become the template for every CDP and event-pipeline tool that came after. The base canvas is white (`#ffffff`) with a deep navy `#000d25` reserved for the hero band and conversion zones, anchored on near-black navy ink (`#000d25` — never pure `#000`). The brand colour is the unmistakable **`#1866ee` Segment blue** — close enough to a default CTA blue to read trustworthy, saturated enough to feel current, distinctly less violet than Stripe's `#635bff` and noticeably warmer than Linear's blue.

Type runs **Whitney SSm**, the Hoefler & Co humanist sans family that Segment licensed in its original 2014 brand and that Twilio re-licensed across its post-acquisition properties. Whitney's slightly-condensed apertures, spurred terminals, and assertive cap-height give the headlines a quiet authority that geometric sans (Inter, Söhne, Söhne Breit) can't match — it reads as the typeface of a serious business publication rather than a tech-bro startup. Display copy runs 48–72px at 700 with substantial negative tracking (-1.44px to -2.16px), body sits at 16/400 with a generous 1.75 line-height that telegraphs documentation-readability.

The chromatic identity is essentially **navy + blue + white**. Segment resists every temptation to introduce a second brand colour — no orange-for-warmth, no green-for-data-flow, no purple-for-AI. The single blue does all the work, with a slightly deeper hyperlink hue (`#0263e0`) for inline links so that body-prose links read distinct from CTA fills. Where the page wants chromatic richness, it reaches for the navy `#000d25` band rather than a second hue — the page alternates between paper-white sections and night-sky navy sections, and that alternation is what gives Segment its visual rhythm.

Shape language is dual-mode: **9999px pills for CTAs** (40px tall, 6×24px padding), **6–8px rounded corners for cards and surfaces**. Buttons feel marketing-lozenge rather than utility-rectangle, while cards stay quiet and rectangular. The combination is a deliberate reference to the Stripe / Vercel / Linear lineage — pill CTAs telegraph "this is a marketing surface" without inheriting the cold-rationalist feel of square buttons.

The page is engineered to feel like reading **a serious enterprise data publication**. Wide whitespace, careful typographic rhythm, restrained use of imagery (mostly product UI screenshots and customer logo grids), and a single confident blue that earns its place by appearing exactly where action is required.

**Key Characteristics:**
- Single brand colour: Segment blue (`#1866ee`) for CTAs, wordmark, focus, and conversion-band accents
- Hyperlink blue (`#0263e0`) — slightly more saturated for body-prose links so they read distinct from CTA fills
- Navy `#000d25` hero/conversion bands alternate with white content bands — Segment's signature section rhythm
- Whitney SSm at 700/48–72px with -1.44 to -2.16px tracking — the typographic signature
- Pill CTAs at 9999px / 40px height with 6×24px padding — Stripe-lineage button shape
- 6px card radius, 1px hairline borders — quiet enterprise-card chrome
- Customer-logo bar in greyscale at the top of every page — the social proof that earns the navy hero

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#ffffff`): default page floor, every product card, every form surface
- **Dark Band** (`#000d25`): hero band, footer, conversion zones — Twilio Segment near-black navy (never pure `#000`)
- **Cool Surface** (`#f6f9fb`): alternate light band — barely-tinted cool white for variation
- **Soft Surface** (`#f4f4f4`): neutral grey alternate band

### Brand
- **Segment Blue** (`#1866ee`): every primary CTA, brand wordmark, focus accent, key chart series
- **Brand Hover** (`#0e58d9`): deeper blue on hover
- **Brand Active** (`#0844a8`): pressed state, also the badge text colour
- **Brand Deep** (`#0263e0`): inline link colour — distinct from CTA fill
- **Brand Pale** (`#cfdcfb`): disabled CTA tint
- **Brand Soft** (`#e3eefe`): info-banner and badge surface

### Accent
- Segment intentionally has no second accent colour. The deep navy `#000d25` band is the chromatic foil; everything else is the brand blue.

### Interactive
- **Link** (`#0263e0`): default inline link in body — colour-only (no underline at rest, underline on hover)
- **Link Hover** (`#0844a8`): hyperlink deepens on hover
- **Link on Dark** (`#62aef8`): bright sky-blue link on the navy band — readable against `#000d25`
- **Visited** (`#525463`): muted grey visited state
- **Disabled** (`#7a7d8b`): disabled text and outline
- **Selected** (`#1866ee`): radio / checkbox / tab fill

### Neutral Scale
- **Ink** (`#000d25`) — primary text — navy near-black, the brand's calm-authority colour
- **Heading** (`#000817`) — display copy at maximum punch
- **Muted** (`#525463`) — secondary metadata, "Trusted by 25,000+ companies"
- **Soft** (`#7a7d8b`) — caption text
- **Faint** (`#9a9da9`) — disabled state text
- **Border** (`#e1e3ea`) — default 1px hairline (cool grey, slight blue undertone)
- **Border Soft** (`#f0f1f5`) — editorial dividers
- **Border Strong** (`#cdd0da`) — focus state hairline on inputs
- **Border on Dark** (`rgba(255,255,255,0.14)`) — hairline on the navy band

### Surface & Borders
- **Canvas** (`#ffffff`) — default
- **Cool** (`#f6f9fb`) — alternate light band
- **Soft** (`#f4f4f4`) — neutral surface
- **Dark** (`#000d25`) — hero band, footer
- **Dark Elev** (`#0a1838`) — raised card inside the navy band

### Shadow Colors
Segment stays mostly flat at rest. Card-hover shadow is a single-layer navy-tinted at 6% — a quiet lift rather than a Stripe-style multi-layer composition. The brand position: enterprise calm comes from typography and the navy-vs-white band rhythm, not from atmospheric shadows.

- `rgba(0,13,37,0.06) 0 4px 16px` — card-hover lift
- `rgba(0,13,37,0.16) 0 16px 40px` — modal drop
- `0 0 0 3px rgba(24,102,238,0.32)` — focus ring (translucent brand)

### Semantic
- **Success Green** (`#0a8754`): "Connected", "Synced", "Pipeline healthy" — deep teal-green that reads enterprise-confident
- **Warning Amber** (`#a35316`): advisory banners — warm brown rather than yellow to match the navy palette
- **Danger Red** (`#c0322a`): validation error red — distinct from brand blue
- **Info Blue** (`#1866ee`): informational banners — uses the brand colour itself

## 3. Typography Rules

### Font Family

**Primary**: `Whitney SSm A`, `Whitney SSm B` — the screen-optimised cuts of Hoefler & Co's Whitney typeface. Fallback chain: `"Helvetica Neue", Helvetica, Arial, sans-serif`. Whitney is the family Frere-Jones designed in 2004 for the Whitney Museum (later expanded by H&Co for general licensing) — humanist, slightly condensed, with spurred terminals that give it a publication-grade authority distinct from the geometric sans (Söhne, Inter, Söhne Breit) that dominate competitor sites.

**Mono**: `Operator Mono`, falling through `Söhne Mono` and the system mono stack. Used in code blocks and the rare inline event-name reference.

**OpenType features**: `tnum` is enabled on all metrics, customer-count callouts, and pricing tables. `ss01` is enabled on display headlines for the alternate `a` form that gives Whitney its slightly-current feel. Body text uses default glyphs.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| hero-display | Whitney SSm | 72 | 700 | 1.05 | -2.16px | ss01 | Hero banner headline — "The customer data platform" |
| page-title | Whitney SSm | 48 | 700 | 1.05 | -1.44px | ss01 | Subpage H1 |
| section-head | Whitney SSm | 40 | 700 | 1.1 | -0.8px | ss01 | Major section heads |
| sub-section | Whitney SSm | 28 | 700 | 1.2 | -0.4px | — | Sub-section heads |
| eyebrow | Whitney SSm | 14 | 600 | 1.2 | 0.12em | uppercase | "PLATFORM", "FEATURES" — small uppercase labels above headlines |
| body-lg | Whitney SSm | 18 | 400 | 1.55 | 0 | — | Hero sub-copy |
| body-md | Whitney SSm | 16 | 400 | 1.75 | 0 | — | Default body — generous 1.75 leading |
| body-sm | Whitney SSm | 14 | 400 | 1.5 | 0 | — | Footer links, secondary metadata |
| caption | Whitney SSm | 12 | 500 | 1.45 | 0 | — | Footnotes, micro-text |
| micro | Whitney SSm | 11 | 500 | 1.3 | 0.04em | — | Footer legal |
| button-cta | Whitney SSm | 16 | 500 | 1.0 | 0 | — | Primary CTA labels — medium (not bold) |
| nav-link | Whitney SSm | 14 | 500 | 1.0 | 0 | — | Masthead nav labels |
| code-inline | Operator Mono | 14 | 400 | 1.5 | 0 | — | `track('Order Completed')` event-name references |
| code-block | Operator Mono | 13 | 400 | 1.65 | 0 | — | API snippet blocks |
| metric-display | Whitney SSm | 56 | 700 | 1.0 | -1.5px | tnum | "300B+ events tracked monthly" |
| metric-large | Whitney SSm | 32 | 700 | 1.0 | -0.6px | tnum | Customer-proof tile metric |
| badge | Whitney SSm | 11 | 600 | 1.0 | 0.08em | uppercase | "NEW", "BETA" chips |

### Principles

- **Whitney SSm at 700, not 800.** Display weight stays at 700 — Segment's confidence comes from negative tracking, not heavy weight.
- **Generous 1.75 leading on body-md.** Most marketing sites run 1.5; Segment's 1.75 gives the long-form documentation pages publication-grade readability.
- **Eyebrow labels in uppercase 0.12em.** Small uppercase eyebrows ("PLATFORM", "FEATURES") set the rhythm above each section head.
- **Button CTAs at 500 (medium).** Most button systems use 600+; Segment uses 500 because the saturated brand blue already commands attention.
- **Tabular numerals on every metric.** `tnum` on customer counts, event volumes, pricing tables.
- **Negative tracking on display.** Display 72px and section-head 40px run -2.16px and -0.8px respectively — proportional to size.
- **Mono is reserved for code.** Operator Mono only appears inside code samples or inline event-name references, never as decorative typography.
- **Inter is the closest open-source substitute.** Adjust by ~3% letter-spacing to compensate for Whitney's tighter cap height.

## 4. Component Stylings

### Buttons

**`button-cta`** — Segment blue (`#1866ee`) fill, white text in 16/500, 9999px pill, 6×24px padding, 40px height. The most common CTA: "Get a demo", "Sign up free", "Try Segment", "Talk to sales". Hover deepens to `#0e58d9`. Active to `#0844a8`.

**`button-secondary`** — white fill, 1px ink (`#000d25`) outline, ink text in 16/500. Same pill, same 40px height. Used for "Learn more", "Read docs", inverse CTAs over white surfaces.

**`button-on-dark`** — white fill, navy text. The primary CTA inside the navy hero band — flips the colour direction so the white pill stands out against the deep navy background.

**`button-tertiary`** — plain brand-deep (`#0263e0`) text with an arrow glyph, no surface. Used for "Read the case study →" links — colour deepens on hover.

### Cards

**`feature-card`** — white surface, 6px radius, 1px `#e1e3ea` hairline, 32px padding, no shadow at rest. On hover, border deepens to `#cdd0da`, card lifts with `translateY(-2px)`, and the hover shadow fades in.

**`metric-card`** — white surface, 6px radius, 1px hairline, 32px padding. Stack: large `metric-display` number in 56/700 with `tnum` (e.g. "300B+"), label below in `body-sm` muted (e.g. "events tracked monthly"). The customer-proof tile.

**`card-on-dark`** — `#0a1838` raised navy surface, 8px radius, 1px `rgba(255,255,255,0.10)` border, white text. Used inside the navy hero band for the conversion CTA card — slightly larger radius (8 vs 6) gives it a softer feel against the deep navy floor.

**`testimonial-card`** — white surface, 6px radius, 1px hairline, 40px padding. Stack: body-lg quote (no quote marks, just italic), author name in 14/600, role in 14/400 muted, customer logo in greyscale below.

### Badges, Tags, Pills

**`badge-new`** — soft brand (`#e3eefe`) surface, deep brand (`#0844a8`) text in 11/600 uppercase 0.08em, 4px radius, 2×8px padding. "NEW" chip beside navigation labels for newly-released features.

**`badge-beta`** — same colour pair, "BETA" text. Used scarcely.

**`event-pill`** — `#f4f4f4` neutral grey surface, ink text in 12/500, mono font, 9999px radius, 4×10px padding. Used in code-flow diagrams to label event types — e.g. `Order Completed`, `Page Viewed`.

### Inputs / Forms

**`text-input`** — white surface, 1px `#cdd0da` hairline, 6px radius (slimmer than the pill CTAs to keep utility), 44px height, 12×14px padding. Stacked label above in `caption` muted. On focus the border thickens to 2px Segment blue and a 3px translucent ring appears.

**`select-dropdown`** — same surface as text-input, with chevron-down glyph anchored right.

**`form-card`** — gated lead form. White surface, 6px radius, 1px hairline, 40px padding. Stacked input fields with 16px gap, full-width Segment-blue CTA at the bottom.

### Navigation

**`masthead`** — full-width white bar with a thin 1px `#e1e3ea` bottom border, 72px height. Wordmark flush left in `#000d25` ink (Segment's `:`-glyph wordmark, never tinted blue at the marketing surface). Mega-menu triggers in 14/500 ink with chevron-down glyphs. Sign in / Get demo CTAs flush right.

**`mega-menu-flyout`** — opens from any nav trigger; white surface, 8px radius, 1px hairline, modal shadow. Multi-column nav with grouped feature links — e.g. "Connections" → Sources, Destinations, Functions; "Engage" → Audiences, Journeys, Twilio Engage.

**`footer`** — `#000d25` navy band with white text. Multi-column link grid + Twilio parent logo + legal in 11/500 white-72%.

### Modals & Toasts

**`modal`** — centred dialog over a 62%-opacity navy scrim. White surface, 12px radius (more relaxed than the 6px cards), 1px hairline border, modal shadow. Close X anchored top-right.

**`toast`** — bottom-centre notifications. White fill, 6px radius, 1px hairline, ink text, 16×24px padding.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128`
- Section padding (vertical): **96–128px** between major bands; **128–160px** on the hero band — Segment gives its conversion bands more breath than peers
- Card internal padding: **32px** for feature/metric cards; **40px** for testimonial and form cards
- Gutters: **24px** between feature cards in 3-column grid; **96–128px** between major page bands

### Grid & Container

- Max content width: **1280px** centred
- Hero: full-bleed navy band (`#000d25`) at 540px min-height; H1 + sub-copy + dual CTA stack centred
- Feature grid: **3 column** on desktop with 24px gutters
- Customer-logo bar: 6-up greyscale logo grid with `filter: grayscale(100%) opacity(0.7)`
- Footer: 5-column link list at desktop with navy ground

### Whitespace Philosophy

Segment trades on enterprise calm. Hero band runs 540px min-height with massive 96–128px vertical padding. Inside each band, density is moderate — feature grids run 3 across, metric cards stack with 32px gaps. The visual rhythm is **navy hero band → white feature band → cool-white alternation → navy CTA band → navy footer** — the navy/white alternation is the brand's signature section rhythm, more disciplined than the warm-cream/white alternation Etsy uses.

### Section Cadence

Pages follow a consistent script: navy hero (54%–60% of viewport), customer-logo greyscale bar (12%), white feature band, cool-white (`#f6f9fb`) alternate band, white feature band, navy CTA band ("Ready to unify your customer data?"), navy footer. The navy CTA band before the footer is the single most important conversion module — it's where the page asks for the demo.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 2px | Dense table corners |
| Small | 4px | Badges, NEW chips |
| Card | 6px | Feature cards, metric cards, inputs, modals |
| Featured | 8px | Cards on dark band, mega-menu flyouts |
| Hero | 12px | Modal containers |
| Pill | 9999px | CTAs, event pills |

There are no compound radii. The 6px → 8px step between white-band and dark-band cards is deliberate — softer corners on the navy ground reduce the visual weight of the dark surface.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Body, masthead, footer, all editorial bands (~95% of surfaces) |
| 1 — Hover Card | `rgba(0,13,37,0.06) 0 4px 16px` | Feature cards on hover |
| 2 — Modal | `rgba(0,13,37,0.16) 0 16px 40px` | Centred dialogs, mega-menus |
| 3 — Scrim | `rgba(0,13,37,0.62)` | Modal backdrop — navy-tinted, not pure black |

### Shadow Philosophy

Segment is a flat-by-default brand. Depth comes from the **navy-vs-white band alternation** (the hero `#000d25` band against the white feature band beneath) and the **1px `#e1e3ea` hairline borders** that define every card edge. Hover shadow is single-layer navy-tinted at 6% — a quiet hint of lift. The brand position: enterprise calm comes from typography rhythm and band-level chromatic separation, not from atmospheric shadow composition.

The modal scrim is **navy-tinted** (`rgba(0,13,37,0.62)`) rather than pure black — the brand's chromatic discipline extends even to the overlay.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, focus
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry, mega-menu

### Durations
| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 120ms | Hover colour swap (CTA bg, link colour), focus ring fade-in |
| Standard | 220ms | Card hover lift, mega-menu enter |
| Slow | 320ms | Hero copy reveal, page transitions |

### Per-Component Recipes

- **CTA hover**: background transitions from `#1866ee` to `#0e58d9` over 120ms.
- **CTA press**: deepens to `#0844a8` for 100ms on `:active`.
- **Card hover**: border deepens from `#e1e3ea` to `#cdd0da` + `translateY(0 → -2px)` + hover-shadow fades in over 220ms.
- **Mega-menu flyout**: 220ms ease-out fade + 4px slide-down from the masthead.
- **Hero copy reveal**: stagger of 60ms between H1 → sub-copy → CTA stack on first paint, 320ms each.
- **Modal enter**: scrim fades in over 200ms, dialog translates from `translateY(8px) opacity(0)` to `0/1` over 220ms emphasized.
- **Link hover**: colour transitions from `#0263e0` to `#0844a8` over 120ms; underline fades in simultaneously.
- **Customer-logo bar**: greyscale logos animate to colour on the band-row's `:hover` (a small flourish — the only chromatic moment in an otherwise greyscale row).

### Page Transitions

Page-to-page navigation uses no transition — links fire a hard navigation. Segment prioritises perceived speed.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. Card translateY suppresses (only border-colour and shadow remain). Hero copy reveal becomes instant. Mega-menu fade still applies (opacity-only is allowed).

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #000d25 ink on #ffffff canvas | 17.2 | AAA |
| #ffffff on #1866ee CTA | 4.9 | AA at body sizes |
| #ffffff on #0e58d9 CTA hover | 6.1 | AAA |
| #0263e0 link on #ffffff | 6.2 | AAA |
| #ffffff on #000d25 navy band | 18.4 | AAA |
| #62aef8 link on #000d25 navy | 8.9 | AAA |
| #525463 muted on #ffffff | 7.4 | AAA |
| #0844a8 deep on #e3eefe badge surface | 8.3 | AAA |

The white-on-Segment-blue CTA pair sits at **4.9 — AA at body sizes**. Hover `#0e58d9` crosses into AAA. All inline links pass AAA. The navy hero band's white text passes AAA at every size.

### Focus Indicators

Focus ring is **3px `rgba(24,102,238,0.32)` translucent brand** with 2px outline-offset. Buttons, inputs, and links all gain the translucent brand ring on `:focus-visible`. The translucency keeps the focus ring readable against both white and navy bands without needing two separate focus styles.

### ARIA Patterns

- **Mega-menu**: `role="menu"` with `role="menuitem"`; `aria-expanded` on triggers; arrow keys navigate within, Escape closes
- **Customer-logo bar**: `role="list"` with `aria-label="Trusted by 25,000+ companies including [list]"` for screen readers
- **Pricing table**: `role="table"` with `<caption>` describing the comparison
- **Form fields**: `aria-describedby` linking to inline help text; `aria-invalid` + `aria-errormessage` on validation failure
- **Lead form**: `<form aria-labelledby="form-heading">` with explicit submit button labelling
- **Toast notifications**: `role="status"` (polite) for success, `role="alert"` (assertive) for errors

### Keyboard Navigation

- Masthead: Tab moves logo → mega-menu triggers → Sign in → Get demo
- Mega-menu: Down arrow expands, arrow keys navigate, Esc closes
- Forms: Tab top-to-bottom, Enter submits
- Tables: Tab into table, arrow keys traverse cells (when applicable)

### Screen Reader Hints

Verbose `aria-label` on icon-only buttons. Customer logos in the greyscale bar use both alt text (the company name) and a `role="list"` wrapper that announces the trust statement. The Twilio parent-brand badge in the footer uses `aria-label="Twilio, parent company"`.

### Reduced Motion

All transitions degrade to opacity-only or instant. Card translateY suppresses. Hero stagger collapses to a single instant render.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Mega-menu collapses to hamburger drawer; CTA stack becomes full-width; feature grid 1-up; metric cards 2-up |
| Tablet | 640–1024px | Full mega-menu still hidden; feature grid 2-up |
| Desktop | 1024–1280px | Mega-menu reveals; feature grid 3-up |
| Wide | 1280–1536px | Content caps at 1280px |

### Touch Targets

- Primary CTAs: 40px height — meets AA (AAA at 44px is missed by 4px; Segment compensates with 6×24px padding for ample hit area)
- Nav triggers: 44×44px hit-zone with smaller visible label
- Form inputs: 44px height
- Mega-menu items: 40px row height

### Collapsing Strategy

- Masthead: full mega-menu collapses to a hamburger drawer at <1024px
- Hero: dual-CTA stack switches from inline to vertical at <640px
- Feature grid: 3 → 2 → 1 columns
- Metric cards: 4 → 2 → 1 across
- Footer: 5-column link list collapses to accordion at <640px

### Image Behavior

Product UI screenshots use `aspect-ratio: 16/10` with `object-fit: contain` and a 1px `rgba(255,255,255,0.08)` border on the navy band (subtle frame). Customer logos in the greyscale bar use `aspect-ratio: 4/1` with `object-fit: contain` and `filter: grayscale(100%) opacity(0.7)`.

### Container Queries

Used in the mega-menu flyout: when the menu is anchored near the viewport edge, the column count adapts from 4 → 3 → 2 columns to keep all link groups visible without horizontal scroll.

## 11. Content & Voice

### Tone

Confident, technical, enterprise-calm. Segment's voice is "the senior data engineer at a serious company who has done the integration before and is going to walk you through it." Headlines lead with capability ("The customer data platform", "Unify customer data across every touchpoint") rather than hype. The brand consistently positions Segment as **the infrastructure layer** — events flow through Segment, not around it.

### Microcopy Patterns

- **Button verbs**: "Get a demo", "Sign up free", "Talk to sales", "Try Segment", "Read docs" — outcome-named, no fake-friendly verbs
- **Error message recipe**: technical + actionable — "We couldn't connect to that destination. Check your API key in Settings → Destinations."
- **Success confirmations**: factual — "Pipeline connected. Events flowing in real time."
- **Field labels**: technical-precise — "Source name", "Write key", "API endpoint"
- **Empty data state**: descriptive — "No events received in the last 24 hours. Send a test event to confirm your integration."

### Empty States

Empty pipeline: "No events received yet. Send your first event to confirm the integration is working." — names the next action.

Empty destinations: "Add a destination to start sending data downstream." — instructive single-step.

Empty source: "Connect a source to start collecting customer data." — same pattern.

### CTA Verb Conventions

- Primary: **"Get a demo"** (default for sales CTA), **"Sign up free"** (self-serve), **"Talk to sales"** (enterprise)
- Secondary: **"Read the docs"**, **"View pricing"**, **"See it in action"**
- Tertiary: **"Read the case study →"**, **"Learn more →"**, **"View on GitHub →"**
- Avoided: "Buy now", "Click here", "Submit" — Segment never imperative-shouts

## 12. Dark Mode & Theming

**Light-only marketing site with selective dark bands.** The Segment marketing surface uses the navy `#000d25` band as a chromatic device — the hero, the CTA conversion zone, and the footer all run on navy with white text. But the page itself never offers a system-dark-mode toggle. The brand position: the navy band is part of the chromatic rhythm, not a theming choice.

The Segment app dashboard (segment.com/login) uses its own dashboard-specific dark mode with a deeper neutral surface, but that's a separate product surface from the marketing site documented here.

## 13. Lineage & Influences

Segment's visual lineage runs through three traditions: **financial-services trust design** (the navy + single-blue palette dates back to mid-century banking — Chase, Citi, Bank of America all use a similar discipline, and Segment intentionally borrowed the chromatic restraint to telegraph "your customer data is in safe hands"); **Stripe's marketing-as-publication template** (the band rhythm, the customer-logo bar, the pill CTA, the careful typography all trace back to the Stripe site that became the modern SaaS-marketing template); and **publishing-grade typography** (Whitney is a museum typeface — the choice of Whitney over Inter was a deliberate signal that Segment wanted to read as a serious publication, not a tech-startup landing page).

The post-Twilio-acquisition site preserved Segment's existing chromatic and typographic identity rather than re-skinning it as Twilio Red — a rare case of an acquisition where the parent brand chose to keep the acquired brand's design system intact because it was already a stronger brand than the parent's marketing surface.

What Segment rejects: cool-corporate stock photography, animation that distracts from data, multi-colour brand systems, gradients (the navy-to-blue gradient in the hero is restrained, almost imperceptible), and dark-mode toggles. The brand position is **calm enterprise authority** — Segment wants to read as the company you trust with your customer data, not the company you saw at a conference booth.

**Influences:**
- Stripe — pill CTA, customer-logo bar, marketing-as-publication structure, [stripe.com](https://stripe.com)
- Hoefler & Co — Whitney typeface lineage, [typography.com](https://typography.com)
- Twilio — parent brand (post-2020 acquisition), [twilio.com](https://twilio.com)
- Datadog — single-blue chromatic discipline for data-platform brands, [datadoghq.com](https://www.datadoghq.com)
- Mid-century banking signage — navy + blue trust palette
- The New York Times Magazine — typographic rhythm and editorial breath

## 14. Do's and Don'ts

**Do**
- Anchor the brand on Segment blue (`#1866ee`) for every primary CTA — never substitute a different blue
- Use Whitney SSm at 700 with negative tracking on display headlines — the typographic signature
- Alternate navy `#000d25` hero/CTA bands with white feature bands — the section rhythm is the brand
- Use 9999px pill CTAs at 40px height with 6×24px padding and 16/500 white text on Segment blue
- Run inline links at `#0263e0` (slightly more saturated than CTA blue) so they read distinct from buttons
- Set body type at 16/400 with **1.75 line-height** — the publication-grade readability is part of the brand
- Use eyebrow uppercase labels in 14/600 0.12em above each section head
- Render customer logos in greyscale at the top of every page — the trust bar earns the navy hero
- Render metrics with `tnum` — "300B+ events" stays aligned across viewports
- Use 6px card radius with 1px `#e1e3ea` hairlines — quiet enterprise chrome

**Don't**
- Don't introduce a second brand colour — Segment blue is the only true brand fill
- Don't use pure `#000` for ink — always navy `#000d25` to keep the chromatic warmth
- Don't use pure `#000` modal scrim — use navy-tinted `rgba(0,13,37,0.62)`
- Don't substitute Inter or Söhne for Whitney without adjusting tracking — they have different cap heights
- Don't tighten body line-height below 1.6 — the 1.75 leading is part of the publication feel
- Don't use shadow as a primary depth signal — borders + band alternation do the work
- Don't make the hero full-bleed without the customer-logo bar beneath — the social proof is what earns the navy
- Don't render eyebrow labels in colour — they stay muted ink uppercase
- Don't use exclamation marks — the voice is technical-confident, never giddy
- Don't say "Buy now" or "Click here" — every CTA names the outcome (Get a demo, Sign up free)

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:        #ffffff
Navy Band:     #000d25
Cool Surface:  #f6f9fb
Brand Blue:    #1866ee
Brand Hover:   #0e58d9
Brand Active:  #0844a8
Link Blue:     #0263e0
Link on Dark:  #62aef8
Brand Soft:    #e3eefe
Border:        #e1e3ea
Muted:         #525463
Success:       #0a8754
```

### Example Component Prompts

- "Create a Segment-style Get a demo button: a 40px-tall pill (9999px radius) with `#1866ee` fill, white text in Whitney SSm 16/500, 6×24px padding. Hover deepens to `#0e58d9`. Active to `#0844a8`. On focus, a 3px `rgba(24,102,238,0.32)` ring appears with 2px offset."
- "Build a Segment hero band: full-bleed `#000d25` navy ground at 540px min-height. Centred stack: eyebrow 'CUSTOMER DATA PLATFORM' in Whitney SSm 14/600 uppercase 0.12em white-72%; H1 'The single source of truth for your customer data' in Whitney SSm 72/700 with -2.16px tracking white-strong; sub-copy in Whitney SSm 18/400 white-72% at 1.55 line-height; dual CTA stack — primary white pill 'Get a demo' with `#000d25` text, secondary outline pill 'Talk to sales' with white border + white text."
- "Design a Segment feature card: white surface, 6px radius, 1px `#e1e3ea` hairline, 32px padding, no shadow at rest. Stack: 24×24 brand-blue glyph icon, eyebrow 'CONNECTIONS' in 14/600 uppercase 0.12em muted, h3 in Whitney SSm 28/700 ink, body in 16/400 ink with 1.75 line-height, 'Read the docs →' tertiary link in `#0263e0`. On hover: border deepens to `#cdd0da`, card translates -2px, shadow `rgba(0,13,37,0.06) 0 4px 16px` fades in."
- "Build a Segment customer-logo bar: full-width white band, 80px tall, 6 customer logos at `aspect-ratio: 4/1` `object-fit: contain` filter `grayscale(100%) opacity(0.7)` evenly spaced. Above the row, a small caption in 14/500 muted: 'Trusted by 25,000+ companies including'."
- "Create a Segment metric card: white surface, 6px radius, 1px hairline, 32px padding. Top: large `metric-display` number '300B+' in Whitney SSm 56/700 with -1.5px tracking and `tnum`. Below: label 'events tracked monthly' in 16/400 muted."
- "Design a Segment navy CTA band before the footer: full-bleed `#000d25` navy at 320px min-height. Centred stack: H2 'Ready to unify your customer data?' in Whitney SSm 40/700 with -0.8px tracking white-strong; sub-copy in 18/400 white-72%; primary white pill 'Get a demo' with `#000d25` text, 16/500. Anchored CTA reads as the demo conversion module."

### Iteration Guide

1. **Start with navy and white.** If your page has cool greys or pure black, it isn't Segment. Navy `#000d25` ink + white canvas + selective navy bands is the foundation.
2. **One brand colour.** Segment blue (`#1866ee`) for everything brand. Hyperlink `#0263e0` is the only second blue and it lives in body prose only.
3. **Whitney SSm at 700 with negative tracking.** Display 72px gets -2.16px, 48px gets -1.44px. Match the size-proportional tracking — without it, headlines read as generic.
4. **Pill CTAs at 40px / 16/500.** 9999px radius, medium weight (not bold), 6×24px padding. No exceptions.
5. **Section rhythm = navy → white → cool-white → navy.** The band alternation is the page's pulse. Don't run three white bands in a row.
6. **Customer-logo bar in greyscale at the top.** It's what earns the navy hero — without the social proof, the navy reads cold.
7. **Body line-height 1.75.** Most marketing sites run 1.5; Segment's 1.75 is the publication-grade signal.
8. **Use `tnum` on every metric.** "300B+ events" stays aligned across viewports.
