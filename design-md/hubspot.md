---
name: HubSpot
tagline: Warm coral-orange (#FF7A59) on a near-white canvas, a humanist sans set generous and round, and a brand voice that turned inbound marketing into a methodology.
updated_at: 2026-05-27T23:16:48.365Z
published_at: 2026-05-27T23:16:48.365Z
author: webdesignhot
source_url: https://www.hubspot.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [saas]
tags: [light, warm, sans, saas, crm]
preview_swatch: ['#FF7A59', '#fcfcfa', '#33475b']
related: [mailchimp, intercom, salesforce]
description: 'HubSpot''s identity sits at the warm-friendly end of B2B SaaS: the signature coral-orange `#FF7A59` against a slightly off-white canvas, a humanist sans (HubSpot Sans / HubSpot Sans lineage) with generous round terminals, and a content-heavy "we are your inbound marketing teacher" voice that turned a methodology into a $2.5B revenue line.'


# Canonical 8-role aliases (bg / text / brand / border / accent / muted / surface / danger).
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent
  muted: text-muted
  border: border
colors:
  # Primary
  bg: '#fcfcfa'                    # warm off-white canvas (not pure white)
  bg-white: '#ffffff'              # pure white for card surfaces
  bg-warm: '#f8f7f4'               # softer warm panel
  bg-cream: '#fef8f3'              # peach-tinted callout band
  bg-dark: '#2e3338'               # slate-charcoal dark band
  bg-deep: '#213343'               # deeper navy-slate for footer
  surface: '#ffffff'               # primary card surface
  surface-2: '#f5f8fa'             # cool-tinted hover panel (legacy HubSpot grey)
  surface-3: '#eaf0f6'             # pressed / selected panel
  surface-orange-soft: '#fff1ec'   # pale coral tint for callouts
  surface-orange-deep: '#ffe2d6'   # deeper coral for hover on coral surfaces

  # Text
  text: '#33475b'                  # signature HubSpot navy-slate body (warmer than #000)
  text-strong: '#1f2d3d'           # display deeper navy
  text-darker: '#0a1f2f'           # near-black with navy tilt
  text-muted: '#516f90'            # mid navy-grey caption
  text-soft: '#7c98b6'             # tertiary soft navy
  text-faint: '#cbd6e2'            # disabled
  text-on-orange: '#ffffff'        # white sits on coral CTAs
  text-on-dark: '#f5f8fa'          # near-white on dark
  text-on-dark-muted: '#cbd6e2'    # muted on dark
  text-on-brand: '#ffffff'         # white on coral

  # Brand
  brand: '#FF7A59'                 # signature HubSpot coral-orange
  brand-deep: '#ff5c35'            # deeper coral for hover state
  brand-pressed: '#e54c2a'         # pressed coral
  brand-soft: '#ffa18c'            # softer coral for tints
  accent: '#33475b'                # navy-slate = secondary brand color
  accent-teal: '#00bda5'           # supporting teal (inbound flywheel)
  accent-yellow: '#f5c26b'         # supporting warm yellow (academy / sandbox)
  accent-purple: '#6a78d1'         # supporting violet (Service Hub)

  # Borders
  border: '#cbd6e2'                # cool light navy hairline
  border-soft: '#dfe3eb'           # softer divider
  border-strong: '#516f90'         # emphasis border
  border-on-orange: '#ffffff66'    # white at 40% on coral surfaces

  # Semantic
  success: '#00bda5'               # teal-green
  success-bg: '#d4f1ec'
  warning: '#f5c26b'               # warm yellow
  warning-bg: '#fdf3df'
  danger: '#f2545b'                # warm coral-red (kin to brand)
  danger-bg: '#fde2e2'
  info: '#00a4bd'                  # cyan-teal
  info-bg: '#d4f1f7'
  on-brand: '#ffffff'

typography:
  display:
    family: '"HubSpot Serif Page Header Human", "HubSpot Serif", Georgia, "Times New Roman", serif'
    weights: [400, 500, 600]
    opentype-features: 'kern, liga, ss01'
    note: 'Hero h1 uses a custom HubSpot serif — see https://www.hubspot.com (rendered 2026-05-28). Marketing pairs serif headings with HubSpot Sans body for the warm-editorial register.'
  body:
    family: '"HubSpot Sans", "Avenir Next", "Helvetica Neue", system-ui, -apple-system, sans-serif'
    weights: [300, 400, 500, 600]
    opentype-features: 'kern, liga, tnum'
  mono:
    family: '"JetBrains Mono", "SF Mono", "IBM Plex Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 88, weight: 700, lineHeight: 1.0,  tracking: '-0.03em',  family: display }
    display-xl:      { size: 72, weight: 700, lineHeight: 1.05, tracking: '-0.025em', family: display }
    display-lg:      { size: 56, weight: 700, lineHeight: 1.08, tracking: '-0.02em',  family: display }
    h1:              { size: 44, weight: 700, lineHeight: 1.1,  tracking: '-0.018em', family: display }
    h2:              { size: 34, weight: 600, lineHeight: 1.18, tracking: '-0.012em', family: display }
    h3:              { size: 26, weight: 600, lineHeight: 1.25, tracking: '-0.006em', family: display }
    h4:              { size: 20, weight: 600, lineHeight: 1.35, tracking: '0',        family: body }
    h5:              { size: 17, weight: 600, lineHeight: 1.4,  tracking: '0',        family: body }
    body-lg:         { size: 19, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body }
    body:            { size: 17, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body }
    body-sm:         { size: 15, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    lead:            { size: 22, weight: 400, lineHeight: 1.5,  tracking: '-0.005em', family: body }
    label:           { size: 14, weight: 500, lineHeight: 1.4,  tracking: '0',        family: body }
    caption:         { size: 13, weight: 500, lineHeight: 1.45, tracking: '0',        family: body }
    eyebrow:         { size: 12, weight: 700, lineHeight: 1.4,  tracking: '0.12em',   family: body }
    code:            { size: 14, weight: 400, lineHeight: 1.6,  tracking: '0',        family: mono }
    code-micro:      { size: 12, weight: 400, lineHeight: 1.5,  tracking: '0',        family: mono }

radius:
  micro: 2
  sm: 4
  md: 6
  lg: 8
  xl: 12
  xxl: 16
  featured: 24
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160]

layout:
  page-width: 1240
  prose-width: 720
  header-height: 76
  hero-y: 120
  section-y: 96
  gutter: 24

components:
  button-primary:
    bg: '#FF7A59'
    text: '#ffffff'
    radius: 6
    paddingX: 24
    paddingY: 14
    font: 'HubSpot Sans 600 / 16px'
    hover: 'bg #ff5c35 + translate-y -1px + shadow'
  button-on-orange:
    bg: '#ffffff'
    text: '#FF7A59'
    radius: 6
    paddingX: 24
    paddingY: 14
    font: 'HubSpot Sans 600 / 16px'
    hover: 'bg #fff1ec'
    use: 'CTA on coral hero band'
  button-secondary:
    bg: 'transparent'
    text: '#33475b'
    radius: 6
    border: '1px solid #cbd6e2'
    paddingX: 24
    paddingY: 13
    hover: 'border #FF7A59 + text #FF7A59'
  button-ghost:
    bg: 'transparent'
    text: '#FF7A59'
    radius: 6
    paddingX: 16
    paddingY: 10
    hover: 'bg #fff1ec'
  card-default:
    bg: '#ffffff'
    radius: 8
    padding: 32
    border: '1px solid #dfe3eb'
    shadow: '0 2px 8px rgba(51,71,91,0.06)'
  card-hub:
    bg: '#ffffff'
    radius: 12
    padding: 32
    border: '1px solid #eaf0f6'
    shadow: '0 4px 16px rgba(51,71,91,0.08)'
    use: 'Marketing/Sales/Service/CMS/Ops Hub product cards'
  card-cream:
    bg: '#fef8f3'
    radius: 12
    padding: 32
    border: 'none'
    use: 'callout / methodology blocks'
  input-text:
    bg: '#ffffff'
    border: '1px solid #cbd6e2'
    radius: 6
    paddingX: 14
    paddingY: 12
    focus: 'border #FF7A59 + ring 3px rgba(255,122,89,0.25)'
  badge:
    bg: '#fff1ec'
    text: '#ff5c35'
    radius: 9999
    paddingX: 12
    paddingY: 4
    font: 'HubSpot Sans 600 / 12px'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  ease-soft: 'cubic-bezier(0.45, 0, 0.55, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 360
  duration-cinematic: 600
  reduced-motion: 'respects prefers-reduced-motion: reduce — flywheel rotation animation stops, scroll-triggered reveals collapse to opacity-only fade, button hover translate becomes color-only state change'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  none: 'none'
  ambient: '0 1px 2px rgba(51,71,91,0.05)'
  standard: '0 2px 8px rgba(51,71,91,0.08)'
  elevated: '0 6px 20px rgba(51,71,91,0.10)'
  deep: '0 16px 40px rgba(51,71,91,0.14)'
  ring: '0 0 0 3px rgba(255,122,89,0.25)'

accessibility:
  contrast-text-on-bg: 9.8            # AAA — #33475b on #fcfcfa
  contrast-strong-on-bg: 13.4         # AAA — #1f2d3d on #fcfcfa
  contrast-muted-on-bg: 5.1           # AA body, AAA large
  contrast-white-on-brand: 3.5        # AA large only — coral + white is large-only
  contrast-text-on-dark: 11.8         # AAA — #f5f8fa on #2e3338
  focus-ring: '3px solid rgba(255,122,89,0.25) with 1px solid #FF7A59 inner edge — coral halo on light/dark surfaces'
  reduced-motion-honored: true
  keyboard-nav: 'visible focus on every interactive; coral ring preserves brand voice without contrast loss'

dark-mode: optional                  # HubSpot marketing is light-only; product dashboard ships its own theming

lineage:
  summary: 'HubSpot''s coral-orange + warm off-white + round humanist sans is the warmest move in B2B SaaS — a deliberate counter-position against Salesforce''s enterprise cobalt and a sibling system to Mailchimp''s chunky-friendly playbook. The 2006-founded inbound methodology (Halligan & Shah''s Inbound Marketing book) is encoded directly into every visual decision: coral CTA threaded through every band, off-white canvas warmer than pure white, HubSpot Sans / HubSpot Sans humanist sans escaping the Inter/Söhne homogeneity, and the inbound flywheel as the persistent brand mark. The closest sibling is Mailchimp (peer SMB marketing); the sharpest contrast is Salesforce (enterprise CRM HubSpot is positioned against); Intercom and Drift round out the warm-humanist B2B SaaS family.'
  influences:
    - name: Mailchimp
      role: Peer/sister B2B SMB marketing tool — proved warm-friendly works in B2B and the closest design sibling for tone, content-craft, and approachable-SMB voice
      url: https://mailchimp.com
    - name: Intercom
      role: B2B SaaS adjacent — humanist sans and customer-conversation-first positioning that shares HubSpot's friendly-technical register
      url: https://www.intercom.com
    - name: Salesforce
      role: Enterprise CRM competitor — HubSpot's entire warm coral + off-white playbook is positioned in deliberate contrast to Salesforce's enterprise cobalt blue
      url: https://www.salesforce.com
    - name: Drift
      role: Marketing-automation peer — shares the coral/orange accent direction and round humanist sans family, often confused with HubSpot at a glance
      url: https://www.drift.com
---

## 1. Visual Theme & Atmosphere

HubSpot's marketing site is anchored by three things: the signature **coral-orange `#FF7A59`** as the primary accent (never as a full canvas — used surgically on CTAs, illustration accents, and the flywheel logo), an **off-white canvas `#fcfcfa`** that warms the entire page versus the cold `#fff` most B2B SaaS leans on, and a **humanist sans** (HubSpot Sans / HubSpot Sans / Avenir-class) with round terminals, tall x-height, and that slightly friendly quality that separates inbound-marketing-software from enterprise-CRM-software.

The signature compositional move is a generous lead headline (44–88px, weight 700) in **navy-slate `#33475b`** — never pure black — paired with a coral-orange CTA button at 6px radius and a soft drop shadow. Round Hub product cards sit on a 3- or 5-column grid below, each one with its own subtle accent line and category icon. The illustration style runs to **soft geometric people with coral and teal accents** — they signal "small businesses, marketers, salespeople" rather than the abstract gradients enterprise CRM uses.

The atmosphere is **friendly-evangelical-B2B**. Where Salesforce shouts "Einstein AI for the Enterprise" in cobalt blue, HubSpot says "Grow better" in coral on warm cream. Where Intercom uses cobalt blue and tight grotesks to signal "modern technical product", HubSpot uses coral and round humanist sans to signal "we believe in inbound marketing and we'd love to teach you about it". The 2006-vintage methodology DNA (Brian Halligan and Dharmesh Shah's *Inbound Marketing* book) still runs through every page — there's always a content offer one scroll away, always an academy course, always a free CRM CTA.

The voice posture is **patient-teacher-with-a-methodology-to-sell**. Coral plus warm white plus round humanist sans feels approachable; the precision of the typography (HubSpot Sans is custom-tuned for screen rendering, the 17px body sits at 1.6 line-height for content-marketing readability) signals "this is a brand designed by people who write a lot of long-form". The two registers — friendly and evangelical — coexist by design: HubSpot wants you to take a free course, then buy the platform.

**Key Characteristics**

- Signature coral-orange `#FF7A59` used surgically — CTAs, accents, flywheel logo, illustration highlights
- Off-white canvas `#fcfcfa` warmer than pure white — sets HubSpot apart from cold-blue B2B
- Navy-slate `#33475b` body color — never pure black, ties to the inbound flywheel logo
- Humanist sans (HubSpot Sans / HubSpot Sans / Avenir-class) with round terminals and tall x-height
- Soft 6–8px radius on functional surfaces, 12–16px on Hub product cards — never sharp corners
- Soft shadows `0 2px 8px rgba(51,71,91,0.06)` — depth via shadow rather than border
- Hub product cards as the central visual unit — Marketing / Sales / Service / CMS / Operations
- Geometric illustration style with coral + teal accents — soft people, never abstract gradients
- Content-marketing-heavy: blog post grid, academy CTA, ebook download always within one scroll
- Section vertical rhythm at 96–120px — moderate, content-density-friendly (not poster-spacious)
- "Get free CRM" / "Get started free" as the dominant CTA verb across every band

## 2. Color Palette & Roles

### Primary

- **bg** (`#fcfcfa`): the warm off-white canvas — slightly cream-tinted, never pure white
- **bg-white** (`#ffffff`): pure white reserved for card surfaces
- **bg-warm** (`#f8f7f4`): softer warm panel for alternating bands
- **bg-cream** (`#fef8f3`): peach-tinted callout band — the "methodology" surface
- **bg-dark** (`#2e3338`): slate-charcoal dark band, used for testimonials and feature reveals
- **bg-deep** (`#213343`): deeper navy-slate, footer color
- **text** (`#33475b`): signature HubSpot navy-slate body — warmer than `#000`, ties to brand
- **on-brand** (`#ffffff`): white sits on every coral CTA

### Brand

- **brand** (`#FF7A59`): the coral-orange itself — the entire identity hangs on this exact hex
- **brand-deep** (`#ff5c35`): deeper coral for hover state — visible warmth shift
- **brand-pressed** (`#e54c2a`): pressed coral, button active state
- **brand-soft** (`#ffa18c`): softer coral for tints, illustration secondary
- **accent** (`#33475b`): navy-slate is the secondary brand color — the wordmark + flywheel runs in navy

### Accent (Supporting)

- **accent-teal** (`#00bda5`): inbound flywheel "attract → engage → delight" green-teal
- **accent-yellow** (`#f5c26b`): warm yellow for academy / sandbox / playful surfaces
- **accent-purple** (`#6a78d1`): violet associated with Service Hub illustrations

The five-color brand system (coral, navy, teal, yellow, violet) is part of why HubSpot illustrations read as "the inbound family" rather than generic. Each Hub gets a tint association — Marketing leans coral, Sales leans navy, Service leans purple, Operations leans teal.

### Interactive

- **link**: `#FF7A59` coral, no underline at rest, underline on hover
- **link-hover**: `#ff5c35` deeper coral + 1px underline
- **link-on-dark**: `#FF7A59` coral on `#2e3338` slate (4.1 contrast, AA large only — used at 18px+)
- **selected**: `rgba(255,122,89,0.12)` — pale coral highlight
- **disabled**: `#cbd6e2` text on `#f5f8fa` bg

### Neutral Scale

- **text** `#33475b` — navy-slate body (the signature)
- **text-strong** `#1f2d3d` — display deeper navy
- **text-darker** `#0a1f2f` — near-black with navy tilt
- **text-muted** `#516f90` — mid navy-grey caption
- **text-soft** `#7c98b6` — tertiary soft navy
- **text-faint** `#cbd6e2` — disabled
- **border** `#cbd6e2` — cool light navy hairline (1px)
- **border-soft** `#dfe3eb` — softer divider
- **border-strong** `#516f90` — emphasis border

The neutrals are **navy-tilted** — every grey has a touch of blue, never warm beige. This is the discipline that ties grayscale back to the navy-slate body color and the inbound flywheel.

### Surface & Borders

- **surface** `#ffffff` — primary card surface
- **surface-2** `#f5f8fa` — cool-tinted hover panel (legacy HubSpot grey, still in heavy use)
- **surface-3** `#eaf0f6` — pressed / selected panel
- **surface-orange-soft** `#fff1ec` — pale coral tint for callouts, badges, "tip" boxes
- **surface-orange-deep** `#ffe2d6` — deeper coral for hover states on coral surfaces

### Shadow Colors

HubSpot's depth language is **soft, navy-tinted shadows** — `rgba(51,71,91, ...)` rather than `rgba(0,0,0, ...)`. The navy tint keeps shadows feeling consistent with the navy-slate body color rather than reading as generic grey drop shadow.

- **shadow-ambient** `0 1px 2px rgba(51,71,91,0.05)` — input + small UI
- **shadow-standard** `0 2px 8px rgba(51,71,91,0.08)` — default card resting
- **shadow-elevated** `0 6px 20px rgba(51,71,91,0.10)` — Hub product card hover
- **shadow-deep** `0 16px 40px rgba(51,71,91,0.14)` — modal / dropdown menu
- **focus-ring** `0 0 0 3px rgba(255,122,89,0.25)` — coral focus halo

### Semantic

- **success** `#00bda5` on `#d4f1ec` — same teal as the flywheel accent
- **warning** `#f5c26b` on `#fdf3df` — warm yellow, kin to the supporting palette
- **danger** `#f2545b` on `#fde2e2` — warm coral-red (kin to the brand, not a clinical red)
- **info** `#00a4bd` on `#d4f1f7` — cyan-teal

## 3. Typography Rules

### Font Family

- **Display & Body**: HubSpot Sans (proprietary, distributed via the HubSpot CDN) with HubSpot Sans as the practical web-license substitute. Both are humanist sans-serifs with round terminals, tall x-height, and slightly geometric construction. Avenir Next is the system-class fallback — the family DNA runs Avenir → Lexend → HubSpot Sans.
- **Mono**: JetBrains Mono / SF Mono / IBM Plex Mono — used for code, version strings, and the rare data table.
- **OpenType**: `kern, liga, ss01` on display (stylistic set 01 unlocks the alternate single-story `a` on some weights). Standard `kern, liga, tnum` on body for tabular numbers in pricing tables.

### Hierarchy

| Role | Font | Size | Weight | Line H | Tracking | OT | Notes |
|---|---|---|---|---|---|---|---|
| display-hero | HubSpot Sans | 88 | 700 | 1.0 | -0.03em | ss01 | Above-fold hero one-liner |
| display-xl | HubSpot Sans | 72 | 700 | 1.05 | -0.025em | — | Section opener |
| display-lg | HubSpot Sans | 56 | 700 | 1.08 | -0.02em | — | Major feature header |
| h1 | HubSpot Sans | 44 | 700 | 1.1 | -0.018em | — | Subsection |
| h2 | HubSpot Sans | 34 | 600 | 1.18 | -0.012em | — | Feature header |
| h3 | HubSpot Sans | 26 | 600 | 1.25 | -0.006em | — | Card title |
| h4 | HubSpot Sans | 20 | 600 | 1.35 | 0 | — | Inline title |
| h5 | HubSpot Sans | 17 | 600 | 1.4 | 0 | — | Component label |
| lead | HubSpot Sans | 22 | 400 | 1.5 | -0.005em | — | Hero subhead |
| body-lg | HubSpot Sans | 19 | 400 | 1.6 | 0 | — | Blog body, prose pages |
| body | HubSpot Sans | 17 | 400 | 1.6 | 0 | — | Default — 1pt larger than 16-norm |
| body-sm | HubSpot Sans | 15 | 400 | 1.55 | 0 | — | Captions, meta |
| label | HubSpot Sans | 14 | 500 | 1.4 | 0 | — | Form + button |
| caption | HubSpot Sans | 13 | 500 | 1.45 | 0 | — | Meta below cards |
| eyebrow | HubSpot Sans | 12 | 700 | 1.4 | 0.12em | — | Section tags, ALL CAPS |
| code | JetBrains Mono | 14 | 400 | 1.6 | 0 | tnum | Inline code |
| code-micro | JetBrains Mono | 12 | 400 | 1.5 | 0 | tnum | Version strings, table cells |

### Principles

- **Humanist sans at every level** — round terminals and tall x-height carry the friendly inbound voice; a tight grotesque (Inter / Söhne) would shift the brand toward "enterprise serious"
- **Display in weight 700, body in weight 400** — the 300-point delta keeps hierarchy obvious without italics
- **Body at 17px, not 16** — HubSpot's slightly larger body is a content-marketing readability decision; 1.6 line-height supports long-form scrolling
- **Navy-slate body color `#33475b`, never `#000`** — pure black would break the inbound flywheel color story
- **Negative tracking on display only** — body sits at 0 tracking; the headline reads tight, the body reads neutral
- **Eyebrow at 12px / 0.12em / weight 700** — wider tracking than peers, deliberate "section marker" voice rather than label
- **Lead size 22px / weight 400** — the hero subhead sits between display and body and carries most of the marketing argument
- **Mono only for code and data** — never for eyebrows or labels (that's where HubSpot diverges from technical-product brands like Vercel / Linear)
- **No italic display** — italics are reserved for body emphasis and blockquote attribution

## 4. Component Stylings

### Buttons

**Primary CTA (coral-orange rectangle)** — the signature HubSpot button
- bg `#FF7A59`, text `#ffffff`, radius `6px`
- padding `14px 24px`, HubSpot Sans 600 16px
- hover: bg `#ff5c35` + translate-y -1px + shadow `0 6px 20px rgba(255,122,89,0.25)`, 240ms ease-standard
- focus: ring `3px solid rgba(255,122,89,0.25)` + 1px coral edge
- use: every primary action — "Get free CRM", "Get started free", "Get a demo"

**On-Coral CTA (inverted)**
- bg `#ffffff`, text `#FF7A59`, radius `6px`
- padding `14px 24px`, HubSpot Sans 600 16px
- focus: ring `3px solid rgba(255,255,255,0.4)` for contrast on coral band
- use: primary action when sitting on rare coral band (footer pre-CTA strip)

**Secondary Button (ghost-bordered)**
- bg `transparent`, text `#33475b`, border `1px solid #cbd6e2`, radius `6px`
- padding `13px 24px`, HubSpot Sans 600 16px
- hover: border `#FF7A59` + text `#FF7A59`, 240ms ease-standard
- use: secondary action — "Talk to sales", "View pricing", "Compare plans"

**Ghost Button (link-flavored)**
- bg `transparent`, text `#FF7A59`, no border, radius `6px`
- padding `10px 16px`, HubSpot Sans 600 15px
- hover: bg `#fff1ec` pale coral tint
- use: inline tertiary action, list links, "Learn more →" patterns (with arrow)

**Hub Product CTA**
- variant of primary with the Hub tint applied — Marketing Hub = coral, Sales Hub = navy, Service Hub = purple, Ops Hub = teal
- use: deep product pages where the Hub identity needs to carry the CTA

### Cards

**Card Default**
- bg `#ffffff`, radius `8px`, padding `32px`
- border `1px solid #dfe3eb`, shadow `0 2px 8px rgba(51,71,91,0.06)`
- hover: shadow `0 6px 20px rgba(51,71,91,0.10)` + translate-y -2px, 240ms ease-standard
- use: feature cards, content blocks, blog post tiles

**Card Hub (the signature)**
- bg `#ffffff`, radius `12px`, padding `32px`
- border `1px solid #eaf0f6`, shadow `0 4px 16px rgba(51,71,91,0.08)`
- icon `48×48px` colored Hub-tint, title `HubSpot Sans 600 / 26px`, 17px body
- bottom-row CTA in ghost coral with arrow
- use: the Marketing / Sales / Service / CMS / Operations Hub product cards — the central visual unit of HubSpot homepage

**Card Cream Callout**
- bg `#fef8f3`, radius `12px`, padding `32px`, no border, no shadow
- use: methodology / "inbound is…" blocks, ebook download promos

**Card Testimonial**
- bg `#ffffff`, radius `12px`, padding `40px`
- 24px HubSpot Sans 400 quote in navy-slate, customer avatar `64×64` round + name + company logo grey
- use: customer-story tiles in the 3-up grid below the hub product row

**Card Pricing Tier**
- bg `#ffffff`, radius `12px`, padding `40px`
- middle tier elevated: `2px solid #FF7A59` coral border + `0 6px 20px rgba(255,122,89,0.15)` coral-tinted shadow + "Most popular" coral badge
- use: pricing pages, tier comparison

### Badges & Tags

**Badge Coral (pill)**
- bg `#fff1ec`, text `#ff5c35`, radius `9999px`
- padding `4px 12px`, HubSpot Sans 600 12px
- use: "New", "Free", "Beta", "Most popular"

**Badge Hub-Tinted**
- bg = hub tint at 12% alpha, text = hub tint full, radius `9999px`
- padding `4px 12px`, HubSpot Sans 600 12px
- use: product category tags on blog posts and academy courses

**Tag Eyebrow**
- bg `transparent`, text `#516f90`, no radius
- HubSpot Sans 700 12px / 0.12em ALL CAPS
- use: section headers ("PLATFORM", "WHY HUBSPOT")

### Inputs & Forms

**Text Input**
- bg `#ffffff`, border `1px solid #cbd6e2`, radius `6px`
- padding `12px 14px`, HubSpot Sans 400 17px
- focus: border `#FF7A59` + ring `3px rgba(255,122,89,0.25)`, 150ms ease-standard
- placeholder: `#7c98b6`
- label: 14px / 500 above input in `#33475b` navy

**Inline Email Capture (signature HubSpot pattern)**
- horizontal: white input + coral submit button
- both at 6px radius, matched heights
- placeholder: "your@company.com"
- use: blog footer, ebook gate, demo request inline

**Select / Dropdown**
- same chrome as text input, chevron icon coral on hover
- menu: white card with shadow-elevated, options with 12% coral hover highlight

### Navigation

**Top Nav**
- bg `#fcfcfa` (matches canvas), height `76px`, gutters `24px`
- HubSpot wordmark (navy + coral flywheel) left, link cluster center (Software / Pricing / Resources / About), coral "Get started free" button right
- 1px `#dfe3eb` bottom border appears on scroll
- mega-dropdown reveals on hover: 3- or 4-column grid with Hub icons and descriptions

**Footer**
- bg `#213343` deep navy-slate, padding `96px 24px 48px`
- 5-column link grid in HubSpot Sans 14px, `#cbd6e2` link color, `#ffffff` headers
- pre-footer coral-band CTA strip: full-bleed `#fef8f3` cream with coral CTA
- HubSpot logo + flywheel + copyright row at bottom

### Tabs / Tooltips / Toasts

**Tab Group**
- underline-style: 3px coral `#FF7A59` on active, 1px `#dfe3eb` on rest
- text `#33475b` active (weight 600), `#516f90` rest

**Tooltip**
- bg `#2e3338` dark slate, text `#f5f8fa`, radius `4px`, padding `8px 12px`
- HubSpot Sans 500 13px

**Toast**
- bg `#ffffff`, border-left `4px solid #FF7A59` (or success teal / warning yellow per state)
- radius `8px`, padding `16px`, shadow-elevated
- HubSpot Sans 500 15px message

## 5. Layout Principles

### Spacing System

- **base** `4px`, scale `[0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160]`
- Density philosophy: **content-dense-but-comfortable**. HubSpot runs at 96–120px section vertical rhythm — moderate compared to Mailchimp's 140–160px poster-cadence. This reflects the content-marketing DNA: more content per scroll, friendlier-to-the-blog-reader pacing.

### Grid & Container

- **page-width** `1240px` with 24px gutters
- 12-column grid; hero is rarely full-bleed (the off-white canvas stays consistent edge-to-edge)
- **prose-width** `720px` — used for blog posts, academy lesson pages, ebook chapters
- Hub product card grid: 3-up at desktop, 2-up at tablet, 1-up at mobile
- Customer story grid: 3-up with mixed-height card variants

### Whitespace Philosophy

HubSpot's whitespace is **content-marketer-comfortable**. The hero gives the display-hero at 88px ~96px vertical air above and below. Hub product cards sit on 32px gaps in a 3-up grid. Section vertical rhythm runs 96px between major bands. The intent is "you can read three sections in one scroll" rather than Mailchimp's "one section is the whole viewport".

The off-white `#fcfcfa` canvas does more work than white would — it lets card surfaces (which are pure `#ffffff`) gently lift off the page without requiring heavy shadows.

### Section Cadence

The page reads as alternating subtle tonal bands:
1. Off-white `#fcfcfa` hero with 88px coral-accented display + coral CTA
2. White feature row with Hub product cards in a 3- or 5-up grid
3. Off-white `#fcfcfa` customer-stories band with 3-up testimonial cards
4. Cream `#fef8f3` methodology / academy callout band
5. White comparison / pricing-preview row
6. Dark slate `#2e3338` testimonial wall (rare, high-impact)
7. Cream `#fef8f3` pre-footer CTA band with coral primary CTA
8. Deep navy `#213343` footer

The off-white → white → cream → slate cadence is the rhythm. Coral threads through every band as the consistent accent — the eye always knows where to click.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| Micro | 2px | Tags, micro-pills |
| Small | 4px | Tooltips, code blocks |
| Medium | 6px | Buttons, inputs, selects — the workhorse radius |
| Large | 8px | Default cards |
| XL | 12px | Hub product cards, pricing tiles, testimonial cards |
| XXL | 16px | Featured callout cards, marketing hero illustrations |
| Featured | 24px | Special promotional callouts |
| Pill | 9999px | Badges, status chips, avatars |

HubSpot's radius system is **moderately rounded across the board** — nothing is sharp-cornered, nothing is wildly rounded. The 6px button and 8–12px card radius land in the "approachable B2B" sweet spot. Compare to Salesforce (4px crisp) or Linear (10–14px tighter editorial) or Stripe (8px clean) — HubSpot sits between Stripe and Intercom on the curvature axis, leaning slightly softer.

The shadows compensate for the lack of borders — most cards run a `1px solid #dfe3eb` hairline plus the soft navy-tinted shadow. Without the shadow, the cards would feel flat against the off-white canvas; with the shadow, they read as lifted product surfaces ready to click.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat — no border, no shadow | Display copy on canvas |
| 1 | 1px `#dfe3eb` border + `0 1px 2px rgba(51,71,91,0.05)` | Inputs, small UI components |
| 2 | 1px border + `0 2px 8px rgba(51,71,91,0.08)` | Default cards, blog tiles |
| 3 | 1px border + `0 6px 20px rgba(51,71,91,0.10)` | Hub product cards, card hover |
| 4 | `0 16px 40px rgba(51,71,91,0.14)` | Modals, mega-menu dropdowns |
| 5 | Inverted band `#2e3338` / `#213343` | Dark testimonial walls, footer |

### Shadow Philosophy

HubSpot's depth is **soft navy-tinted shadows on a warm off-white canvas**. The shadow color is `rgba(51,71,91, ...)` — not `rgba(0,0,0, ...)` — which keeps the shadow feeling like a continuation of the navy-slate body color rather than a generic grey drop. This is a small but distinctive choice that ties depth back to the brand color story.

Hover states **lift the card** — `translate-y(-2px)` plus an upgraded shadow — which gives the Hub product cards their characteristic "I am clickable" feedback. The lift is fast (240ms) and the shadow upgrade is visible enough to register without being garish.

Dark inversion bands (slate `#2e3338`, deep navy `#213343`) provide composition contrast without requiring elevation effects — the band itself does the rhetorical lifting.

## 8. Interaction & Motion

### Easing Curves

- **ease-standard** `cubic-bezier(0.4, 0, 0.2, 1)` — most state changes
- **ease-emphasized** `cubic-bezier(0.2, 0, 0, 1)` — modal entry, mega-menu reveal
- **ease-bounce** `cubic-bezier(0.34, 1.56, 0.64, 1)` — playful illustration moments (rare)
- **ease-soft** `cubic-bezier(0.45, 0, 0.55, 1)` — flywheel rotation, breathing animations

### Duration Buckets

- **fast** `150ms` — input focus, link state, button color change
- **standard** `240ms` — card hover lift, dropdown reveal, button translate
- **slow** `360ms` — modal entry, accordion expand
- **cinematic** `600ms` — flywheel spin cycle, scroll-into-view hero reveal

### Per-Component Recipes

- **Primary CTA hover**: bg `#FF7A59` → `#ff5c35` + translate-y -1px + coral-tinted shadow, 240ms ease-standard
- **Secondary button hover**: border + text shift to coral (full color sync), 240ms ease-standard
- **Hub card hover**: shadow upgrade + translate-y -2px + arrow icon shifts right 4px, 240ms ease-standard
- **Flywheel rotation**: 600ms slow spin cycle on scroll-into-view (the inbound flywheel illustration)
- **Link hover**: underline fades in (opacity 0 → 1) over 150ms, no thickness change
- **Tab switch**: 3px coral underline slides horizontally to new tab, 240ms ease-emphasized
- **Mega-menu reveal**: opacity + translate-y 8px, 240ms ease-emphasized

### Page Transitions

- Section reveals on scroll: fade-up 12px, 360ms slow ease-emphasized
- Hero on first paint: fade + translate-y 16px, 600ms cinematic ease-emphasized (one-time)
- Sticky nav: 1px border + subtle shadow appear on scroll, 240ms

### Reduced Motion Strategy

HubSpot respects `prefers-reduced-motion: reduce`:
- Flywheel rotation: disabled (static flywheel rendered)
- Card hover lift: removed (becomes shadow-only color shift)
- Scroll-triggered reveals: opacity-only fade
- Button hover translate: dropped (becomes color-only)
- Modal entry: opacity-only, no translate

## 9. Accessibility & A11y

### Contrast Pairs

- text `#33475b` on bg `#fcfcfa`: **9.8** — AAA all sizes
- text-strong `#1f2d3d` on bg `#fcfcfa`: **13.4** — AAA
- text-muted `#516f90` on bg `#fcfcfa`: **5.1** — AA body, AAA large
- white `#ffffff` on brand `#FF7A59`: **3.5** — AA large only (≥18px or 14px bold) — coral CTAs use 16px weight 600 to clear bar
- text-on-dark `#f5f8fa` on bg-dark `#2e3338`: **11.8** — AAA
- text `#33475b` on surface-2 `#f5f8fa`: **9.3** — AAA
- brand `#FF7A59` on bg `#fcfcfa`: **2.9** — fails AA — coral is for backgrounds and large UI elements only, never for body text

### Focus Indicators

- 3px solid `rgba(255,122,89,0.25)` coral halo + 1px solid `#FF7A59` inner edge on light surfaces
- 3px solid `rgba(255,255,255,0.4)` white halo on coral surfaces
- Visible on every interactive — the soft coral ring preserves brand voice without contrast loss
- Never `outline: none` without replacement

### ARIA Patterns

- Mega-dropdown nav: `role="menu"` + `aria-haspopup="menu"` + `aria-expanded`
- Modal: `role="dialog"` + `aria-modal="true"` + focus trap
- Newsletter / email-capture form: `<form>` with `aria-label="Subscribe to HubSpot blog"`
- Flywheel illustration: `aria-label="Inbound flywheel — attract, engage, delight"` if interactive; `aria-hidden="true"` if purely decorative
- Hub product cards: `<a>` wrapping with `aria-label="Marketing Hub — software for inbound marketers"`

### Keyboard Nav

- Tab order matches DOM source
- ENTER/SPACE activate buttons and cards
- ARROW navigates within mega-menus, tab groups, listboxes
- ESC closes modals, dropdowns, mega-menus

### Screen Reader Hints

- HubSpot wordmark SVG: `<title>HubSpot</title>` + `<desc>Inbound flywheel logo</desc>`
- Illustrations: described via `aria-label` when meaningful, hidden when decorative
- Eyebrow labels rendered as semantic `<span>` with `text-transform: uppercase` (not all-caps in source — preserves screen-reader pronunciation)
- Pull-quote rendered as `<blockquote>` with `cite` attribute when applicable

### Reduced Motion

- Honored across the site
- Flywheel rotation, card hover lift: disabled
- Scroll-triggered reveals: opacity-only
- Hover state changes preserve color, drop motion

## 10. Responsive Behavior

### Breakpoints

| Tier | Min-width | Use |
|---|---|---|
| mobile | 0–639px | Single-column, stacked Hub cards |
| tablet | 640–1023px | 2-column feature grid |
| desktop | 1024–1279px | Full 12-column with 3-up Hub grid |
| wide | 1280px+ | Container caps at 1240, generous gutters |

### Touch Targets

Minimum 44×44px on mobile. Primary CTA scales padding from `14px 24px` (desktop) to `16px 28px` (mobile) for 52px+ tap area — the coral button is on-brand even at touch sizes. Form inputs grow to 48px height on mobile.

### Collapsing Strategy

- **Hero display**: 88px → 64px → 48px → 36px down the cascade — HubSpot Sans scales aggressively
- **Hub product grid**: 5-col → 3-col → 2-col → 1-col
- **Customer story grid**: 3-col → 2-col → 1-col
- **Top nav**: full mega-dropdown → hamburger drawer at <1024px (drawer keeps coral CTA pinned at bottom)
- **Section vertical rhythm**: 120px → 80px → 64px
- **Pricing tier table**: 4-col side-by-side → 1-col stacked accordion on mobile

### Image Behavior

- Illustrations: SVG-based, scale infinitely; coral + teal accents remain crisp
- Product mockups: aspect-ratio 16:10, `object-fit: contain`, lazy-loaded
- Avatars: 48×48px circular for testimonial cards, 32×32px for blog author bylines
- Customer logos: monochrome navy-slate grey, height-locked at 32–40px in the social-proof rows

### Container Queries

HubSpot uses container queries on the Hub product cards — when a card narrows below 280px, the icon shifts from top-left to inline with the title, and the body copy truncates to 2 lines with ellipsis.

## 11. Content & Voice

### Tone

**Patient-teacher-with-a-methodology-to-sell.** HubSpot talks to small-to-mid-market business owners, marketers, and salespeople who want to grow their company but don't have a CMO yet. The voice is warm, evangelical about inbound methodology, content-craft-forward, and consistently second-person. "Grow better" rather than "Maximize revenue". "Free CRM" is the protected phrase — it appears more than any other CTA across the entire site.

The voice has been refined since 2006 around the *Inbound Marketing* book (Halligan & Shah) and is documented in HubSpot's internal style guide. The brand is famously content-marketing-forward — the HubSpot blog publishes more long-form than most media companies, and the academy has trained hundreds of thousands of marketers on the inbound methodology (which conveniently maps to HubSpot products).

### Microcopy Patterns

- **Button verbs**: "Get free CRM", "Get started free", "Get a demo", "Talk to sales", "Start free or get a demo"
- **Empty states**: "No contacts yet — let's import your first list." (Inviting, action-oriented.)
- **Errors**: "Something didn't work. Mind trying that again?" (Conversational, not technical.)
- **Success**: "Saved." / "Sent." (Past tense. Confidence.)
- **Loading**: "Pulling your data…" (Verb in progress, sets expectation.)
- **Confirmations**: "All set." / "You're in." (Brief, friendly.)
- **Inbound-method nudges**: "Want help? Take the free Inbound Course →" (academy callout woven into product flow)

### CTA Verb Conventions

HubSpot's CTA hierarchy is famously consistent: **"Get started free"** as primary across hero, pricing, footer; **"Get a demo"** as secondary for higher-touch sales paths; **"Talk to sales"** for enterprise. The word "free" appears in primary CTAs constantly — the freemium CRM is the entire growth flywheel. For content surfaces: **"Read the guide"**, **"Take the free course"**, **"Download the ebook"**, **"Watch the demo"**.

### Empty States

Empty states get the patient-teacher voice: "No deals in your pipeline yet — let's add your first." Often paired with a 30-second video tutorial or an academy link. HubSpot's empty states **always teach something** — they're the inbound methodology in microcosm.

## 12. Dark Mode & Theming

HubSpot's marketing site is **light-only** — no global dark variant offered. The product UI (HubSpot CRM dashboard, Marketing Hub editor) ships its own theming with a limited dark surface, but the marketing canvas commits to the off-white + coral + navy-slate palette as part of the brand commitment.

HubSpot uses the slate `#2e3338` and deep navy `#213343` bands as dark inversion devices for testimonial walls and footers — composition rhythm, not preference. The token swap inside any dark band:

```yaml
colors-inverted:
  bg: '#2e3338'
  surface: '#3a4046'
  surface-2: '#4a5159'
  text: '#f5f8fa'              # near-white, preserves voice
  text-muted: '#cbd6e2'
  text-soft: '#7c98b6'
  brand: '#FF7A59'             # coral unchanged
  border: '#516f90'            # mid-navy border on dark
```

A full dark marketing canvas would shift HubSpot from "approachable inbound teacher" to "developer-tool serious" — breaking the entire brand argument. The off-white canvas is doing too much brand work to drop.

## 13. Lineage & Influences

HubSpot's design system is **one of the most distinctive in B2B SaaS** specifically because it leans into warmth where almost every peer leans cold. Where Salesforce runs cobalt blue + crisp grotesque to project enterprise gravitas, where Intercom runs cobalt blue + tight humanist sans to project technical sophistication, HubSpot runs **coral-orange + warm off-white + round humanist sans** to project "we are your friendly inbound marketing teacher". The 2006-founding methodology (the *Inbound Marketing* book by Brian Halligan and Dharmesh Shah) is encoded directly into every visual decision.

The signature move is the **`#FF7A59` coral-orange** as a surgical accent — not used as a full canvas (the way Mailchimp uses its Cavendish yellow), but as the consistent CTA + accent + flywheel-logo color that threads through every band. The off-white `#fcfcfa` canvas (warmer than `#fff`, cooler than cream) does most of the brand work — it lets pure-white card surfaces lift gently without requiring heavy shadows, and it ties the page to the warm coral accent rather than the cold blue most B2B chooses.

The typography is **HubSpot Sans / HubSpot Sans / Avenir-class humanist sans** — round terminals, tall x-height, friendly construction. This is the deliberate counter-move against the "Inter SaaS" homogeneity that dominates the industry. HubSpot Sans (proprietary, custom-tuned for screen rendering) carries the same friendliness as Mailchimp's Cooper Light serif but in sans form — both brands found a way to escape Inter/Söhne without losing legibility.

The closest design siblings are **Mailchimp** (peer/sister B2B SMB marketing tool with the same warm-friendly playbook), **Drift** (marketing-automation peer with coral / orange accents and round humanist sans), and **Intercom** (B2B SaaS adjacent, though Intercom runs cobalt blue rather than coral). The contrast is sharpest against **Salesforce** — HubSpot's entire visual identity is positioned as "we are not Salesforce", and the warmth of coral + off-white versus Salesforce's enterprise blue is the longest-running brand argument in CRM.

The deeper lineage runs through **2010s warm-humanist B2B SaaS** — Mailchimp's chunky-friendly playbook proved that B2B could be warm, and HubSpot built the coral + humanist sans + content-marketing-heavy formula on top of that proof. By 2026, the discipline has aged extraordinarily well — HubSpot looks both contemporary and timeless, and the coral remains one of the most-recognized brand colors in B2B SaaS.

**Named Influences**

- **Mailchimp** ([mailchimp.com](https://mailchimp.com)) — Peer/sister B2B SMB marketing tool; proved warm-friendly works in B2B and the closest design sibling for tone, content-craft, and approachable-SMB voice
- **Intercom** ([intercom.com](https://www.intercom.com)) — B2B SaaS adjacent; humanist sans and customer-conversation-first positioning that shares HubSpot's friendly-technical register
- **Salesforce** ([salesforce.com](https://www.salesforce.com)) — Enterprise CRM competitor; HubSpot's entire warm coral + off-white playbook is positioned in deliberate contrast to Salesforce's enterprise cobalt blue
- **Drift** ([drift.com](https://www.drift.com)) — Marketing-automation peer; shares the coral/orange accent direction and round humanist sans family, often confused with HubSpot at a glance

## 14. Do's and Don'ts

### Do

- Keep the coral-orange at exactly `#FF7A59`; even a 5% drift toward `#ff5c35` shifts the brand from "inviting" to "urgent"
- Hold the off-white canvas at `#fcfcfa`; pure white reads as generic B2B SaaS
- Use HubSpot Sans / HubSpot Sans / Avenir-class humanist sans on every level — round terminals are the brand
- Keep navy-slate `#33475b` as the body color — never pure black, never cool grey
- Use coral as a surgical accent (CTAs, flywheel, illustrations) — not as a full canvas band
- Reach for soft navy-tinted shadows `rgba(51,71,91, ...)` rather than generic black
- Lift Hub product cards on hover with `translate-y(-2px)` + shadow upgrade — that's the signature interaction
- Use the 5-color brand system (coral, navy, teal, yellow, violet) for Hub product associations
- Place the "Get started free" CTA in every major section — the freemium CRM is the entire growth motor
- Set body type at 17px / 1.6 line-height — content-marketing readability is the floor
- Use 96–120px section vertical rhythm — content-dense-but-comfortable, not poster-spacious
- Anchor every page with an academy or content callout — inbound methodology is always one scroll away

### Don't

- Substitute Inter / Söhne / Helvetica for the humanist sans family; tight grotesques break the friendly inbound voice
- Use coral as a full background band; the brand is "coral as accent on warm white", not "coral canvas"
- Apply pure black to body text; navy-slate `#33475b` is the protected pair
- Drop body type below 16px — 17 is the content-marketing readability floor
- Use sharp 0px corners on cards or buttons; the soft 6–12px radius is the approachable B2B signature
- Use cool grey on the canvas; the off-white is warm-tilted and cool grey breaks the palette
- Apply heavy borders (2px+) instead of soft shadows — the depth language is shadow, not border weight
- Use coral on body text — coral fails AA contrast on the warm canvas; coral is for backgrounds and large UI only
- Drop the inbound flywheel illustration in favor of an abstract gradient; the flywheel is brand-load-bearing
- Add a "Talk to sales" CTA without also offering a "Get started free" option; the freemium path is non-negotiable
- Use Mailchimp's zero radius — that's a print-poster signature that doesn't translate to inbound B2B
- Use Salesforce-style cobalt blue accents anywhere; that's the brand HubSpot is positioned against

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg:             #fcfcfa (warm off-white canvas)
surface:        #ffffff (card surface, pure white)
bg-cream:       #fef8f3 (peach callout band)
bg-dark:        #2e3338 (slate testimonial band)
text:           #33475b (navy-slate body)
text-muted:     #516f90
brand:          #FF7A59 (coral-orange — the entire identity)
brand-deep:     #ff5c35 (hover state)
accent:         #33475b (navy-slate = secondary brand)
accent-teal:    #00bda5 (flywheel + success)
border:         #cbd6e2 (1px navy hairline)
```

### Example Component Prompts

1. *"Create a HubSpot-style warm hero: off-white `#fcfcfa` background, HubSpot Sans 700 at 88px navy-slate `#33475b` headline reading 'Grow better with HubSpot.' tracked at -0.03em, HubSpot Sans 400 22px lead subhead in navy-slate below, coral CTA `#FF7A59` bg with white HubSpot Sans 600 16 label saying 'Get started free' at 6px radius with soft coral-tinted shadow on hover."*

2. *"Design a HubSpot Hub product card: white bg, 12px radius, 1px `#eaf0f6` border, soft navy-tinted shadow `0 4px 16px rgba(51,71,91,0.08)`, 32px padding. 48×48 coral-tinted icon top-left, HubSpot Sans 600 26 title in navy-slate, body in HubSpot Sans 400 17, bottom-row 'Learn more →' ghost coral button. Card lifts on hover with translate-y -2px + shadow upgrade."*

3. *"Build a HubSpot testimonial card: white bg, 12px radius, soft shadow, 40px padding. 24px HubSpot Sans 400 quote in navy-slate `#33475b`, 64×64 round customer avatar with name in HubSpot Sans 600 15 and company role in HubSpot Sans 400 14 muted navy below. Company logo in monochrome navy at 32px height bottom-right."*

4. *"Compose a HubSpot cream callout band: full-bleed peach `#fef8f3` background, 96px vertical padding, navy-slate HubSpot Sans 600 44 headline, navy HubSpot Sans 400 19 body, coral CTA `#FF7A59` block with white label saying 'Take the free course'. Eyebrow above headline in HubSpot Sans 700 12 / 0.12em ALL CAPS in muted navy reading 'HUBSPOT ACADEMY'."*

5. *"Create a HubSpot pricing tier card: white bg, 12px radius, 40px padding. Middle tier gets 2px solid coral `#FF7A59` border + `0 6px 20px rgba(255,122,89,0.15)` coral-tinted shadow + coral pill badge 'Most popular' top-right. HubSpot Sans 600 28 tier name, HubSpot Sans 700 56 price in navy-slate with /mo HubSpot Sans 400 17 muted, feature list with coral check icons, primary coral CTA 'Get started free' at bottom."*

6. *"Design a HubSpot inline email capture: horizontal layout, white input on left with 1px `#cbd6e2` navy hairline border 6px radius, coral submit button on right matching height saying 'Subscribe', placeholder 'your@company.com' in `#7c98b6`. Focus state: input border becomes coral with 3px coral-tinted halo."*

### Iteration Guide

1. **Start with the coral exactness.** If `#FF7A59` is approximated as `#ff5c35` or `#ff6b3d`, force back to exact. The hex is non-negotiable — drift reads as Drift, not HubSpot.

2. **Warm the canvas.** If background is `#ffffff`, swap to `#fcfcfa`. The off-white is doing significant brand work — pure white reads as generic B2B SaaS.

3. **Swap to navy-slate body.** If body type is `#000000` or cool grey, swap to `#33475b`. The navy-slate ties everything back to the inbound flywheel color story.

4. **Soften the radius.** If buttons or cards are 0px or 16px+, force to 6px (buttons) or 8–12px (cards). The moderate radius is the approachable-B2B signature.

5. **Swap to humanist sans on display.** If hero copy is rendering in Inter / Söhne / Helvetica, swap to HubSpot Sans 700. The round terminals carry the friendly inbound voice.

6. **Replace borders with shadows.** If cards lean on 2px borders for depth, swap to 1px hairline + soft navy-tinted shadow. HubSpot depth is shadow-led, not border-led.

7. **Add the Hub product card grid.** If the page lacks the 3- or 5-up Marketing/Sales/Service/CMS/Operations row, add it — it's the central visual unit of HubSpot homepage.

8. **Thread coral through every band.** If the page reads as monochrome navy/white, find the CTA / accent moment in each section and apply coral. Coral as surgical accent in every band is the rhythm.

---

*Theme-toggle audit: score=0, signals=[none]*
