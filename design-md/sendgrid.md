---
name: SendGrid
tagline: Functional API-blue on white — the email-platform dashboard aesthetic, now folded under the Twilio umbrella.
author: webdesignhot
source_url: https://www.twilio.com/en-us/sendgrid
spec: design.md/v1.5
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [light, sans, structured, cool, dense, dashboard]
preview_swatch: ['#ffffff', '#1f74ff', '#0d122b']
related: [twilio, postmark, mintlify]
description: 'SendGrid (now part of Twilio) lives in a functional dashboard palette — white canvas, cool navy text, a confident `#1f74ff` API-blue for action, and a residual SendGrid-blue accent that survives the Twilio merger. The aesthetic is workhorse rather than expressive: dense product cards, dark code-sample panels (`#0a1228`), deliverability metrics in tabular layouts, and Twilio Sans handling type duties across the consolidated brand. Information density is the point.'

colors:
  bg: '#ffffff'
  bg-soft: '#f4f6f9'
  bg-blue: '#e1eeff'
  bg-blue-soft: '#f0f6ff'
  bg-navy: '#0d122b'
  bg-codeblock: '#0a1228'
  surface: '#f8f9fb'
  surface-soft: '#fafbfd'
  surface-hover: '#f1f3f7'
  text: '#0d122b'
  text-strong: '#000000'
  text-muted: '#5b6079'
  text-soft: '#8b8e9e'
  text-faint: '#b4b6c4'
  text-on-dark: '#e6e9f1'
  text-on-dark-muted: '#9da1b3'
  text-code: '#e6e9f1'
  text-code-comment: '#6c7591'
  text-code-keyword: '#79b8ff'
  text-code-string: '#a5d6a7'
  brand: '#1f74ff'
  brand-strong: '#0d5fe0'
  brand-deep: '#0a4cb8'
  brand-soft: '#dceeff'
  brand-tint: '#f0f6ff'
  accent: '#f22f46'
  accent-strong: '#d4243b'
  accent-soft: '#fde7eb'
  accent-tint: '#fef2f4'
  border: '#0d122b1f'
  border-soft: '#0d122b10'
  border-strong: '#0d122b3a'
  border-blue: '#1f74ff40'
  link: '#1f74ff'
  link-hover: '#0d5fe0'
  on-brand: '#ffffff'
  success: '#14b86a'
  success-bg: '#dcf5e9'
  success-text: '#0a7d49'
  warning: '#f5a623'
  warning-bg: '#fef3e0'
  danger: '#f22f46'
  danger-bg: '#fde7eb'
  info: '#1f74ff'
  info-bg: '#dceeff'
  shadow-soft: 'rgba(13,18,43,0.04)'
  shadow-standard: 'rgba(13,18,43,0.08)'
  shadow-elevated: 'rgba(13,18,43,0.12)'

typography:
  display:
    family: '"Twilio Sans Display", "Twilio Sans", "Söhne", Inter, "Helvetica Neue", Arial, sans-serif'
    weights: [500, 600, 700]
  body:
    family: '"Twilio Sans Text", "Twilio Sans", Inter, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"Twilio Sans Mono", "JetBrains Mono", "SFMono-Regular", Menlo, Consolas, monospace'
    weights: [400, 500, 600]
  scale:
    display-hero:    { size: 64, weight: 700, lineHeight: 1.05, tracking: '-0.022em', family: display }
    h1:              { size: 56, weight: 700, lineHeight: 1.10, tracking: '-0.02em',  family: display }
    h2:              { size: 40, weight: 700, lineHeight: 1.15, tracking: '-0.015em', family: display }
    h3:              { size: 28, weight: 600, lineHeight: 1.25, tracking: '-0.01em',  family: display }
    h4:              { size: 22, weight: 600, lineHeight: 1.30, tracking: '-0.005em', family: display }
    h5:              { size: 18, weight: 600, lineHeight: 1.35, tracking: '0',         family: display }
    body-large:      { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',         family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.50, tracking: '0',         family: body }
    body-small:      { size: 14, weight: 400, lineHeight: 1.50, tracking: '0',         family: body }
    body-emphasis:   { size: 16, weight: 500, lineHeight: 1.50, tracking: '0',         family: body }
    button:          { size: 15, weight: 600, lineHeight: 1.20, tracking: '0',         family: body }
    button-small:    { size: 13, weight: 600, lineHeight: 1.20, tracking: '0',         family: body }
    nav:             { size: 14, weight: 500, lineHeight: 1.20, tracking: '0',         family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.45, tracking: '0',         family: body }
    label:           { size: 12, weight: 600, lineHeight: 1.30, tracking: '0.06em',    family: mono }
    label-uppercase: { size: 11, weight: 600, lineHeight: 1.30, tracking: '0.10em',    family: mono }
    code:            { size: 14, weight: 400, lineHeight: 1.55, tracking: '0',         family: mono }
    code-small:      { size: 12, weight: 400, lineHeight: 1.50, tracking: '0',         family: mono }
    metric:          { size: 36, weight: 700, lineHeight: 1.10, tracking: '-0.02em',   family: display }
    metric-small:    { size: 24, weight: 700, lineHeight: 1.20, tracking: '-0.01em',   family: display }
    micro:           { size: 11, weight: 500, lineHeight: 1.40, tracking: '0.04em',    family: mono }

radius:
  micro: 2
  sm: 4
  md: 6
  lg: 8
  xl: 12
  xxl: 16
  pill: 9999

spacing:
  base: 8
  scale: [2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120]

layout:
  page-width: 1240
  prose-width: 720
  header-height: 64
  gutter: 24
  section-y: 80

components:
  button-primary:
    background: brand
    text: on-brand
    radius: 4
    padding: '12px 20px'
    font: 'Twilio Sans Text 15px / weight 600'
    hover: 'background → #0d5fe0'
    use: 'Primary CTA — `#1f74ff` SendGrid blue, retained post-Twilio merger. The legacy continuity signal.'
  button-secondary:
    background: bg
    text: text
    border: '1px solid #0d122b'
    radius: 4
    padding: '12px 20px'
    hover: 'background → #f4f6f9'
    use: 'Secondary action paired with primary CTA'
  button-ghost:
    background: transparent
    text: brand
    border: 'none'
    padding: '8px 12px'
    hover: 'background → #f0f6ff'
    use: 'Tertiary inline action'
  card:
    background: bg
    border: '1px solid #0d122b1f'
    radius: 8
    padding: '24px'
    shadow: 'none'
    use: 'Default content card with hairline border'
  metric-card:
    background: bg
    border: '1px solid #0d122b1f'
    radius: 8
    padding: '20px 24px'
    use: 'Deliverability metric card — large number in `#1f74ff`, label in mono, sparkline trendline'
  code-block:
    background: '#0a1228'
    text: text-code
    border: 'none'
    radius: 8
    padding: '20px'
    font: 'Twilio Sans Mono 14px / 400'
    use: 'Dark code panel — dominant visual anchor inside otherwise white surface'
  pricing-row:
    background: bg
    border: 'none'
    border-bottom: '1px solid #0d122b10'
    padding: '12px 0'
    use: 'Pricing tier table row with hairline divider'
  status-pill:
    radius: 9999
    padding: '2px 8px'
    font: 'Twilio Sans Mono 11px / 600 / 0.08em uppercase'
    variants: 'Delivered (green), Bounced (red), Opened (blue), Pending (grey)'
    use: 'Email delivery status indicator'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 120
  duration-standard: 200
  duration-slow: 320
  hover-lift: 'background colour shift only — no translate, no shadow lift'
  reduced-motion: 'respects prefers-reduced-motion: reduce — already minimal, all motion strips to opacity'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  none: 'none'
  ambient: '0 1px 2px rgba(13,18,43,0.04)'
  soft: '0 2px 6px rgba(13,18,43,0.04)'
  standard: '0 4px 12px rgba(13,18,43,0.08)'
  elevated: '0 8px 24px rgba(13,18,43,0.12)'
  ring: '0 0 0 2px #1f74ff'

accessibility:
  contrast-text-on-bg: 16.8                # #0d122b on #ffffff — AAA
  contrast-text-on-brand: 4.7              # #ffffff on #1f74ff — AA
  contrast-link-on-bg: 5.4                 # #1f74ff on #ffffff — AA
  focus-ring: '2px solid #1f74ff, 2px offset'
  reduced-motion-honored: true
  keyboard-nav: 'tab follows DOM; focus ring on every interactive; skip-to-content link in header; arrow keys in dropdowns'

lineage:
  summary: |
    SendGrid spent over a decade as the email-API-platform default,
    establishing a workhorse blue-on-white aesthetic that emphasised
    deliverability metrics, code samples, and dashboards rather than
    editorial flourish. After Twilio's 2019 acquisition (and the 2024+
    migration to twilio.com/sendgrid), SendGrid's surface folded into
    the Twilio Sans / navy-text system but retained its own functional
    API-blue #1f74ff for the primary CTA. The result is a dual-brand
    artefact: Twilio's typography and navy structural ink, SendGrid's
    blue still doing the action work. Pages run denser than Twilio's
    parent marketing, with more tabular comparisons, code panels, and
    metric cards — the audience here is operations engineers and email
    marketers, not enterprise CFOs. The aesthetic descends from the
    SaaS-dashboard school of late-2010s developer tools (Datadog, New
    Relic) where information density was the point.
  influences:
    - name: Twilio (parent brand)
      role: Twilio Sans typography, deep-navy text, 4-8px tight radii inherited post-merger
      url: https://twilio.com
    - name: Datadog / New Relic
      role: Dashboard-density layout school — code panels, metric cards, deliverability tables
      url: https://www.datadoghq.com
    - name: Stripe (early-2010s docs era)
      role: Pale-blue API panels and inline code sample patterns
      url: https://stripe.com/docs
    - name: Postmark
      role: Adjacent email-API competitor — SendGrid plays cool/dense where Postmark plays yellow/playful
      url: https://postmarkapp.com

dark-mode: optional   # SendGrid uses occasional dark code blocks (#0a1228) within an otherwise light marketing surface; full dark-mode token swap not offered
---

## 1. Visual Theme & Atmosphere

SendGrid's surface (now hosted on twilio.com/sendgrid) is a workhorse dashboard aesthetic — white canvas, deep-navy type, a confident API-blue `#1f74ff` for action, and dense product layouts with code samples, deliverability charts, and pricing tables. The Twilio merger means typography is now Twilio Sans, but the SendGrid blue survives as the primary CTA fill — a deliberate preservation of the legacy brand colour.

Where Postmark plays yellow-and-black playful, SendGrid plays cool, dense, and informational. The H1 lands at a relatively restrained `56px / 700` — smaller than Brex or Deel — because the brand voice is *deliver email at scale*, not *campaign moment*. Pages run denser than Twilio's parent marketing, with more tabular comparisons, code panels, and metric cards. The audience here is operations engineers and email marketers; the page is designed to be skimmed for technical specifics (deliverability rate, API endpoint, rate limit, pricing tier).

The dual-brand inheritance is visible everywhere. Twilio's `#0d122b` deep-navy text and `#f22f46` accent red (retained for parent-brand callouts) co-exist with SendGrid's `#1f74ff` API-blue and `#e1eeff` pale-blue panel washes. The result reads as *Twilio chrome around SendGrid content* — a deliberately layered identity rather than a clean replacement. Tight 4–8px radii (Twilio inheritance) hold across every component; soft radii would shift the brand toward consumer marketing rather than developer infrastructure.

The dark code panel (`#0a1228`) is the strongest visual anchor on every product page. It sits inside otherwise white surfaces, creating a high-contrast dashboard moment that reads as "we are technical." Code samples use Twilio Sans Mono with syntax highlighting — `#79b8ff` for keywords, `#a5d6a7` for strings, `#6c7591` for comments. Deliverability charts deploy the SendGrid blue as the data colour with muted grey gridlines. Status pills (Delivered, Bounced, Opened) use small subtle coloured fills with mono labels.

**Key Characteristics:**
- White canvas (`#ffffff`) with deep-navy text (`#0d122b`) — Twilio inheritance
- SendGrid API-blue (`#1f74ff`) preserved as the primary CTA fill — legacy continuity signal
- Twilio Sans typography across display, body, and mono
- Restrained H1 at 56px / 700 — denser than parent Twilio (64px), smaller than peers
- Dark code panel (`#0a1228`) as the strongest visual anchor
- 4px button radius, 8px card radius — Twilio's tight ladder
- Deliverability metric cards with large numerals and sparkline trendlines
- Status pills with mono labels for email delivery state (Delivered, Bounced, Opened)
- Twilio red (`#f22f46`) retained for rare parent-brand callouts only
- Pale-blue API panels (`#e1eeff`) — borrowed from Stripe early-docs era
- Dashboard-density layout descended from Datadog / New Relic

## 2. Color Palette & Roles

### Primary

- **Bg / Canvas** (`#ffffff`): pure white — workhorse surface.
- **Text / Navy** (`#0d122b`): deep navy body type, inherited from Twilio.
- **Brand / API Blue** (`#1f74ff`): SendGrid functional blue — primary CTA, the legacy continuity colour.
- **Accent / Twilio Red** (`#f22f46`): retained from parent brand for rare callouts only — never CTA.

### Brand & Dark

- **Bg Navy** (`#0d122b`): occasional Twilio navy band, used for footer or deep-section emotional contrast.
- **Bg Codeblock** (`#0a1228`): dark code surface — slightly darker than the navy band for inset code anchoring.
- **Brand Strong** (`#0d5fe0`): pressed CTA state.
- **Brand Deep** (`#0a4cb8`): deeper variant for hovers on dark surfaces.

### Accent

- **Twilio Red** (`#f22f46`): parent-brand callout — used for "Twilio + SendGrid" cross-brand moments.
- **Red Strong** (`#d4243b`): pressed accent state.
- **Red Soft** (`#fde7eb`): error wash background.
- **Red Tint** (`#fef2f4`): palest danger background.

### Interactive

- **Brand** (`#1f74ff`): primary CTA, link, active state.
- **Brand Strong** (`#0d5fe0`): pressed.
- **Brand Soft** (`#dceeff`): info wash, link hover background.
- **Brand Tint** (`#f0f6ff`): palest blue panel — subtle elevation.
- **Bg Blue** (`#e1eeff`): pale API-blue full-band background.

### Neutral Scale

- **Strong** (`#000000`): rare, used only for absolute display contrast.
- **Body** (`#0d122b`): default body and heading colour.
- **Muted** (`#5b6079`): captions, metadata.
- **Soft** (`#8b8e9e`): tertiary placeholder.
- **Faint** (`#b4b6c4`): disabled labels.

### Surface & Borders

- **Surface** (`#f8f9fb`): softer white panel.
- **Surface Soft** (`#fafbfd`): palest off-white.
- **Surface Hover** (`#f1f3f7`): hovered card or row.
- **Bg Soft** (`#f4f6f9`): cool grey-blue panel for product tiles.
- **Border** (`#0d122b1f`): 12% navy hairline — the default rule.
- **Border Soft** (`#0d122b10`): 6% navy, between rows.
- **Border Strong** (`#0d122b3a`): 23% navy for emphasised cards.
- **Border Blue** (`#1f74ff40`): API-blue tinted border for focused inputs.

### Shadow Colors

- **Shadow Soft** (`rgba(13,18,43,0.04)`): subtle hover lift on metric cards.
- **Shadow Standard** (`rgba(13,18,43,0.08)`): floating panels, dropdowns.
- **Shadow Elevated** (`rgba(13,18,43,0.12)`): modals, deep menus (rare).

### Semantic

- **Success** background `#dcf5e9`, text `#0a7d49`, border `#a8e0c2` — green.
- **Warning** background `#fef3e0`, text `#a06a14`, border `#f0c98c` — amber.
- **Danger** background `#fde7eb`, text `#d4243b`, border `#f0a8b3` — Twilio red.
- **Info** background `#dceeff`, text `#0d5fe0`, border `#a8c8f5` — API blue.

### Code Syntax

- **Code text** `#e6e9f1` on `#0a1228` — base
- **Comment** `#6c7591` — italic
- **Keyword** `#79b8ff` — pale blue
- **String** `#a5d6a7` — pale green
- **Number** `#f9a87a` — orange-tan
- **Punctuation** `#9da1b3` — neutral muted

## 3. Typography Rules

### Font Family

- **Primary sans display**: Twilio Sans Display — used for H1–H3.
- **Primary sans body**: Twilio Sans Text — used for body, captions, button labels.
- **Fallback chain**: `"Twilio Sans Display", "Twilio Sans", "Söhne", Inter, "Helvetica Neue", Arial, sans-serif`.
- **Mono companion**: Twilio Sans Mono — used for code, labels, status pills, eyebrows.
- **Mono fallback**: `"JetBrains Mono", "SFMono-Regular", Menlo, Consolas, monospace`.
- **OpenType features** — standard ligatures and kerning. No `ss01`-style discipline; mono uses `tnum` for tabular numerals in metric cards.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| Display Hero | Twilio Sans Display | 64 | 700 | 1.05 | -0.022em | — | Maximum size, restrained vs Twilio parent |
| H1 | Twilio Sans Display | 56 | 700 | 1.10 | -0.02em | — | Standard hero |
| H2 | Twilio Sans Display | 40 | 700 | 1.15 | -0.015em | — | Section heading |
| H3 | Twilio Sans Display | 28 | 600 | 1.25 | -0.01em | — | Sub-section |
| H4 | Twilio Sans Display | 22 | 600 | 1.30 | -0.005em | — | Card title |
| H5 | Twilio Sans Display | 18 | 600 | 1.35 | 0 | — | Inline emphasis |
| Body Large | Twilio Sans Text | 18 | 400 | 1.55 | 0 | — | Lead paragraph |
| Body | Twilio Sans Text | 16 | 400 | 1.50 | 0 | — | Standard reading text |
| Body Small | Twilio Sans Text | 14 | 400 | 1.50 | 0 | — | Captions, helper |
| Body Emphasis | Twilio Sans Text | 16 | 500 | 1.50 | 0 | — | Inline emphasis |
| Button | Twilio Sans Text | 15 | 600 | 1.20 | 0 | — | Primary CTA label |
| Button Small | Twilio Sans Text | 13 | 600 | 1.20 | 0 | — | Compact buttons |
| Nav | Twilio Sans Text | 14 | 500 | 1.20 | 0 | — | Top-nav links |
| Caption | Twilio Sans Text | 13 | 400 | 1.45 | 0 | — | Image captions |
| Label | Twilio Sans Mono | 12 | 600 | 1.30 | 0.06em | — | Section eyebrow, status label |
| Label Uppercase | Twilio Sans Mono | 11 | 600 | 1.30 | 0.10em | uppercase | Status pill ("DELIVERED", "BOUNCED") |
| Code | Twilio Sans Mono | 14 | 400 | 1.55 | 0 | — | Code blocks |
| Code Small | Twilio Sans Mono | 12 | 400 | 1.50 | 0 | — | Inline code in body |
| Metric | Twilio Sans Display | 36 | 700 | 1.10 | -0.02em | tnum | Deliverability percentage, count |
| Metric Small | Twilio Sans Display | 24 | 700 | 1.20 | -0.01em | tnum | Secondary metric |
| Micro | Twilio Sans Mono | 11 | 500 | 1.40 | 0.04em | — | Endpoint paths, version stamps |

### Principles

- **Twilio Sans is the unified voice** — display and body use the same family with Display variant for hero sizes.
- **H1 at 56px / 700 is denser than parent Twilio** — SendGrid is dashboard-grade, not campaign-grade. The smaller H1 signals operations-engineer audience.
- **Mono labels at 0.06em tracking** — UI-tag aesthetic for status, eyebrow, endpoint path.
- **Tabular numerals** (`tnum`) on metric cards — deliverability percentages and counts must align column-true.
- **No serif anywhere** — SendGrid is sans + mono, full stop. A serif would shift the voice editorial.
- **Negative tracking on display** — `-0.022em` at 64px, `-0.02em` at 56px, `-0.015em` at 40px, normal below 18px.
- **Mono labels uppercase for status pills** — "DELIVERED", "BOUNCED", "OPENED" at 11px / `0.10em` reads as data-grid label.
- **Code text uses syntax-highlight palette** specifically tuned for the dark `#0a1228` panel — pale blue keywords, pale green strings, neutral muted punctuation.

## 4. Component Stylings

### Buttons

**Primary API Blue**
- Background: `#1f74ff`
- Text: `#ffffff`
- Padding: `12px 20px`
- Radius: `4px`
- Font: 15px Twilio Sans Text weight 600
- Hover: background → `#0d5fe0`
- Use: primary CTA — `Start for free`, `Contact sales`, `Get API key`

**Outlined Secondary**
- Background: `#ffffff`
- Text: `#0d122b`
- Border: `1px solid #0d122b`
- Padding: `12px 20px`
- Radius: `4px`
- Hover: background → `#f4f6f9`
- Use: secondary action

**Ghost / Inline**
- Background: transparent
- Text: `#1f74ff`
- No border
- Padding: `8px 12px`
- Hover: background → `#f0f6ff`
- Use: tertiary inline action

**Twilio Red Callout (rare)**
- Background: `#f22f46`
- Text: `#ffffff`
- Padding: `12px 20px`
- Radius: `4px`
- Use: reserved for parent-brand cross-promotion only

### Cards & Containers

**Default Card**
- Background: `#ffffff`
- Border: `1px solid #0d122b1f`
- Radius: `8px`
- Padding: `24px`
- Shadow: none (hairline-only depth)
- Hover: background → `#f8f9fb`, optional shadow `0 2px 6px rgba(13,18,43,0.04)`

**Metric Card**
- Background: `#ffffff`
- Border: `1px solid #0d122b1f`
- Radius: `8px`
- Padding: `20px 24px`
- Inside: large metric in `#1f74ff` (Twilio Sans Display 36/700/tnum), small label below in mono `#5b6079`, sparkline trendline in `#1f74ff` with grey gridlines

**Code Block**
- Background: `#0a1228`
- Text: `#e6e9f1`
- Border: none
- Radius: `8px`
- Padding: `20px`
- Font: Twilio Sans Mono 14/400/1.55
- Optional copy button top-right
- Syntax-highlighted with the palette above

**Pale Blue Panel**
- Background: `#e1eeff`
- Text: `#0d122b`
- Border: none
- Radius: `8px` (or full-bleed for band)
- Use: API documentation panel, "Get started" callout

**Pricing Row**
- Background: `#ffffff`
- Border-bottom: `1px solid #0d122b10`
- Padding: `12px 0`
- Hover: background → `#fafbfd`
- Use: tier comparison table — left label, right cells with tier values

### Badges, Tags, Pills

**Status Pill (email delivery)**
- Radius: `9999px`
- Padding: `2px 8px`
- Font: Twilio Sans Mono 11px / 600 / `0.10em` uppercase
- Variants:
  - **DELIVERED** — bg `#dcf5e9`, text `#0a7d49`, border `1px solid #a8e0c2`
  - **BOUNCED** — bg `#fde7eb`, text `#d4243b`, border `1px solid #f0a8b3`
  - **OPENED** — bg `#dceeff`, text `#0d5fe0`, border `1px solid #a8c8f5`
  - **PENDING** — bg `#f4f6f9`, text `#5b6079`, border `1px solid #0d122b1f`

**API Endpoint Tag**
- Background: `#0a1228`
- Text: `#79b8ff`
- Border: none
- Radius: `4px`
- Padding: `2px 8px`
- Font: Twilio Sans Mono 12px / 500
- Use: inline endpoint path display — `POST /v3/mail/send`

**Method Tag (GET/POST/PUT/DELETE)**
- Radius: `4px`
- Padding: `2px 6px`
- Font: Twilio Sans Mono 11px / 600 uppercase
- GET → green, POST → blue, PUT → orange, DELETE → red

### Inputs & Forms

- Background: `#ffffff`
- Border: `1px solid #0d122b1f`
- Radius: `4px`
- Padding: `10px 14px`
- Font: Twilio Sans Text 16px / 400 / `#0d122b`
- Placeholder: `#8b8e9e`
- Focus: border → `#1f74ff`, ring `2px #1f74ff40`
- Label: Twilio Sans Text 13px / 600 / `#0d122b`
- Helper: Twilio Sans Text 12px / 400 / `#5b6079`
- Error: border → `#f22f46`, helper → `#f22f46`

### Navigation

- Background: `#ffffff`
- Bottom border: `1px solid #0d122b1f`
- Logo: SendGrid wordmark (or Twilio + SendGrid lockup) on the left
- Links: Twilio Sans Text 14px / 500 / `#0d122b`, hover → `#1f74ff`
- Right-pinned: secondary `Sign in` ghost button + primary blue `Start for free` CTA
- Mobile: hamburger drawer

### Deliverability Chart

- Background: `#ffffff` panel
- Data colour: `#1f74ff` (SendGrid blue)
- Gridlines: `#0d122b10` (6% navy)
- Axis labels: Twilio Sans Mono 11px / 500 / `#5b6079`
- Tooltip: dark `#0a1228` background, white text, `0 4px 12px rgba(13,18,43,0.08)` shadow

## 5. Layout Principles

### Spacing System

- Base unit: `8px`
- Scale: `2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120`
- Density observation: tighter than parent Twilio (`80px` section padding vs Twilio's `96px+`). Designed for skim-and-scan technical reading.

### Grid & Container

- Max content width: `1240px` with `24px` gutters
- Grid: classical 12-column
- Hero: 2-column — copy left, code sample or product UI right
- Feature sections: 3-column grids of `#1f74ff`-accented metric cards
- Pricing: 3- or 4-tier table with hairline rows
- Code panels often span 60% width inside hero, full-width inside docs

### Whitespace Philosophy

- **Information density is the point** — SendGrid packs more facts per scroll than Twilio's parent marketing. Tighter `80px` section padding reflects the operations-engineer audience.
- **Hairline-rich** — multiple border layers (12% navy outer, 6% navy inner, full hairline tables) build structure without ink-heavy chrome.
- **Code panels dominate** — every product page anchors on at least one dark `#0a1228` panel showing API usage. The panel is the visual anchor.
- **Metrics get breathing room** — metric cards space at `24px` minimum to let the large numerals land.

### Section Cadence

- Hero (white) → product feature row (white with metric cards) → code block (dark anchor) → pricing table (white) → testimonial / logo wall (white) → footer (`#0d122b` navy)
- Full-bleed dark bands are rare; the dark `#0a1228` lives inside code panels, not as a section background

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 2px | Inline highlights |
| Standard | 4px | Buttons, inputs, API endpoint tags — workhorse (Twilio inheritance) |
| Comfortable | 6px | Method tags, secondary inputs |
| Relaxed | 8px | Cards, code panels, pale-blue panels |
| Large | 12px | Featured cards, modal frames |
| Featured | 16px | Hero panels (rare) |
| Pill | 9999px | Status pills only |

The system holds tight corners across every component. Radii ladder is `2 / 4 / 6 / 8 / 12`. Cards at `8`, buttons at `4` — Twilio inheritance. Pills (`9999`) reserved for status chips ("Delivered", "Bounced", "Opened"). Soft radii would shift the brand toward consumer marketing rather than developer infrastructure.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | No shadow | Page bg, inline text |
| 1 — Hairline | `1px solid #0d122b1f` | Default card and row separation |
| 2 — Soft | `0 2px 6px rgba(13,18,43,0.04)` plus hairline | Hovered metric card, subtle lift |
| 3 — Standard | `0 4px 12px rgba(13,18,43,0.08)` plus hairline | Floating panels, dropdowns |
| 4 — Elevated | `0 8px 24px rgba(13,18,43,0.12)` | Modals, deep menus |
| 5 — Inset Dark | `#0a1228` panel inside white surface | Code panel — high-contrast dashboard moment |
| 6 — Ring | `2px solid #1f74ff` at 2px offset | Keyboard focus |

**Shadow Philosophy** — depth is hairline-only with the rare 1px shadow under code blocks. The dark code panels themselves are the strongest depth cue — `#0a1228` inside otherwise white surfaces creates a strong dashboard contrast moment that reads as "we are technical." Deliverability charts use the SendGrid blue as the data colour with muted grey gridlines. Shadows are neutral navy-tinted rather than chromatic.

## 8. Interaction & Motion

### Easing Curves

- **Standard** `cubic-bezier(0.4, 0, 0.2, 1)` — default
- **Emphasized** `cubic-bezier(0.2, 0, 0, 1)` — modal entrance, dropdown open

### Duration Buckets

- Fast: `120ms` — colour swaps, ring fades
- Standard: `200ms` — button hover, card row hover
- Slow: `320ms` — modal entrance, drawer slide

### Per-Component Micro-States

- **Button hover (primary)** — background `#1f74ff` → `#0d5fe0` over 120ms. No translate, no shadow lift.
- **Card hover** — background → `#f8f9fb`, optional shadow soft (level 2) over 200ms.
- **Pricing row hover** — background → `#fafbfd` over 120ms.
- **Link hover** — colour `#1f74ff` → `#0d5fe0` over 120ms; underline appears under link via `text-decoration` over 120ms.
- **Input focus** — border `#0d122b1f` → `#1f74ff` plus 2px ring `#1f74ff40` over 120ms.
- **Metric card sparkline** — animates draw-in once on viewport entry over 800ms; respects reduced-motion (renders static).
- **Status pill** — no hover state; static label.

### Page Transitions

- No client-side transitions on marketing. Standard browser navigation. Modal entrance fades from opacity 0 with `translate-Y(8px)` over 320ms emphasized.

### Reduced Motion Strategy

- `@media (prefers-reduced-motion: reduce)` — already minimal. Sparkline draw-in renders static. All translate animations strip to opacity-only at 120ms linear.

## 9. Accessibility & A11y

### Contrast Pairs

- `#0d122b` body on `#ffffff` bg — **16.8:1** (AAA)
- `#5b6079` muted on `#ffffff` bg — **6.2:1** (AA)
- `#ffffff` text on `#1f74ff` brand — **4.7:1** (AA at body sizes)
- `#1f74ff` link on `#ffffff` bg — **5.4:1** (AA)
- `#0a7d49` success text on `#dcf5e9` bg — **4.9:1** (AA)
- `#d4243b` danger text on `#fde7eb` bg — **5.1:1** (AA)
- `#e6e9f1` code text on `#0a1228` bg — **15.4:1** (AAA)

### Focus Indicators

- Default focus ring: `2px solid #1f74ff` at `2px` offset
- Inputs: 2px ring inset `#1f74ff40` plus border colour shift to `#1f74ff`
- Within dark code panels: ring becomes `#79b8ff` for contrast

### ARIA Patterns

- **Combobox** — `role="combobox"` for region dropdowns, IP filtering
- **Dialog** — `role="dialog"` `aria-modal="true"` for upgrade modals
- **Listbox** — `role="listbox"` with `aria-activedescendant` for plan selectors
- **Tabs** — `role="tablist"` for "Send Email / Manage Templates" feature tabs
- **Table** — `<table role="table">` with `<th scope="col">` for pricing comparison
- **Status** — `role="status"` `aria-live="polite"` for delivery metric updates

### Keyboard Navigation

- Tab order follows DOM
- Skip-to-content link in header
- All interactive elements reachable via Tab
- `Esc` closes dropdowns and modals
- Arrow keys for tab navigation, listbox selection
- `/` opens search where present

### Screen Reader Hints

- Code blocks marked `<pre><code>` with `role="region"` and `aria-label="API request example"`
- Sparklines paired with text alternative — "deliverability up 12%"
- Status pills include screen-reader only "Status:" prefix
- Decorative icons `aria-hidden="true"`

### Reduced Motion

- Honoured — sparklines render static, modal entrances strip translate.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, code panels horizontal scroll, H1 56→36px |
| Tablet | 640–1024px | 2-column hero, 2-column metric grid, H1 56→44px |
| Desktop | 1024–1280px | Full 12-column grid, hero with code panel right |
| Wide | ≥1280px | Centred 1240px container with margins |

### Touch Targets

- Buttons at `12px 20px` give a comfortable `44px+` tap height
- Pricing row `12px 0` padding expands to `16px` on touch devices
- Status pills retain `2px 8px` but get `min-height: 24px` for easier tap

### Collapsing Strategy

- H1: `56px` → `44px` → `36px` across desktop → tablet → mobile
- Body: `16px` everywhere
- Metric cards: 4-column → 2-column → single column stacked
- Code panels: full width, may horizontally scroll inside (no soft-wrap on code)
- Pricing tables: stack tier columns into per-tier cards on mobile
- Section spacing: `80px` → `48px` on mobile
- Nav: horizontal links + CTAs → hamburger drawer

### Image Behavior

- Product screenshots maintain `8px` border-radius and `1px solid #0d122b1f` border
- Sparklines simplify on mobile — fewer data points, larger touch targets on hover
- Logo wall reduces to 2-column on mobile

### Container Queries

- Metric cards use container queries to stack `metric / label / sparkline` vertically when their container drops below `260px`.

## 11. Content & Voice

### Tone

Operations-direct, technically precise, slightly enterprise. The voice assumes the reader integrates email APIs into production systems. Headlines emphasise scale and reliability ("Deliver email at scale", "99.99% uptime", "Trusted by 80,000+ companies"). Body copy is feature-dense with metric-anchored claims rather than aspirational language.

### Microcopy Patterns

- **Button verbs** — `Start for free`, `Contact sales`, `Get API key`, `Read docs`. Never `Try it free today`, never `Click here to learn more`.
- **Error message recipe** — technical, blame-free: `Email failed: 421 4.7.0 Try again later. Recipient mailbox unavailable.`
- **Success confirmations** — terse: `API key created.`, `Email sent.`, `Webhook configured.`
- **Inline validation** — appears under field, Twilio red, 12px Twilio Sans Text 400.

### Empty States

- Direct: `No campaigns yet — get started with your first send.`
- Always paired with primary `Create campaign` CTA and secondary `View example`.
- No mascots, no apologetic copy.

### CTA Verb Conventions

- Primary: `Start for free`, `Get API key`, `Contact sales`
- Secondary: `Read API docs`, `View pricing`, `Sign in`
- Tertiary: `Learn more →`, `See benchmarks →`

## 12. Dark Mode & Theming

**Light marketing surface only — dark code panels embedded.** SendGrid does not ship a full dark-mode token swap on the marketing site. The dark `#0a1228` lives inside code panels and the rare `#0d122b` footer band; it is not a section-level theme.

If a downstream implementation needs a full dark mode, the recommended swap is:
- `bg` `#ffffff` → `#0d122b`
- `surface` `#f8f9fb` → `#1a1f3a`
- `bg-codeblock` `#0a1228` stays — code panels remain dark
- `text` `#0d122b` → `#e6e9f1`
- `text-muted` `#5b6079` → `#9da1b3`
- `border` `#0d122b1f` → `#ffffff14`
- `brand` `#1f74ff` stays — colour is brand-locked
- `bg-blue` `#e1eeff` → `rgba(31,116,255,0.15)`

The colour-locked SendGrid blue means CTAs read identical in light and dark — preserving the legacy continuity signal.

## 13. Lineage & Influences

SendGrid spent over a decade as the email-API-platform default, establishing a workhorse blue-on-white aesthetic that emphasised deliverability metrics, code samples, and dashboards rather than editorial flourish. After Twilio's 2019 acquisition (and the 2024+ migration to twilio.com/sendgrid), SendGrid's surface folded into the Twilio Sans / navy-text system but retained its own functional API-blue `#1f74ff` for the primary CTA. The result is a dual-brand artefact: Twilio's typography and navy structural ink, SendGrid's blue still doing the action work.

Pages run denser than Twilio's parent marketing, with more tabular comparisons, code panels, and metric cards — the audience here is operations engineers and email marketers, not enterprise CFOs. The aesthetic descends from the SaaS-dashboard school of late-2010s developer tools (Datadog, New Relic) where information density was the point. Stripe's early-2010s docs era contributed the pale-blue API panel pattern. Postmark sits adjacent as the playful-yellow alternative; SendGrid plays cool/dense.

The brand explicitly rejects: gradient hero illustrations, soft pastel palettes, mascot characters, pill-shaped CTAs (Twilio's tight 4–8px ladder is doctrinal), serif type anywhere, glow shadows, and any visual move that would shift the brand toward consumer marketing rather than developer infrastructure.

**Named influences:**
- Twilio (parent brand) — typography, navy text, tight radii
- Datadog / New Relic — dashboard-density layout school
- Stripe (early-2010s docs era) — pale-blue API panels
- Postmark — adjacent email-API competitor (contrast point)

## 14. Do's and Don'ts

### Do

- Keep the SendGrid blue `#1f74ff` as the action colour even though Twilio red is technically the parent brand — the blue is what users recognise.
- Show code panels prominently — SendGrid's audience is integrators, the dark code block is the brand's strongest visual anchor.
- Stay denser than Twilio's parent marketing; tighter section padding (80px) and smaller H1 (56px) are part of the brand voice.
- Use Twilio Sans Mono for status pills, eyebrows, and endpoint paths — the typographic split is the labelling system.
- Apply tabular numerals (`tnum`) to metric cards — column-true alignment is required.
- Keep button radius at 4px and card radius at 8px — Twilio's tight ladder.
- Use status pills with mono labels in uppercase (`DELIVERED`, `BOUNCED`) for email-state visualisation.
- Preserve Twilio red `#f22f46` for parent-brand callouts only — never on the primary CTA.
- Use deliverability-blue gridlines (`#0d122b10`) and SendGrid-blue data fills on charts.
- Code panel syntax-highlight palette is fixed: keyword `#79b8ff`, string `#a5d6a7`, comment `#6c7591`.

### Don't

- Don't drop the SendGrid blue in favour of Twilio red on the CTA — the blue is the legacy continuity signal.
- Don't soften card or button radii beyond Twilio's 4–8px range — looser radii break the dashboard tone.
- Don't introduce gradients or glow — SendGrid's voice is flat, hairline, and functional.
- Don't pill-shape CTAs (`9999px`) — buttons stay at 4px.
- Don't use serif type anywhere — sans + mono is the entire system.
- Don't mix consumer-pastel palettes — the brand is cool, dense, and informational.
- Don't use light grey shadows on cards — depth is hairline-first.
- Don't stack code panels without padding — they need `20px` internal breathing room.
- Don't apply the dark `#0a1228` as a section-level background — it lives inside code panels only.
- Don't use the H1 weight below 700 — the dashboard-confident voice is the brand.

## 15. Agent Prompt Guide

### Quick Color Reference

- Background: White `#ffffff`
- Body text: Navy `#0d122b`
- Muted text: `#5b6079`
- Brand CTA: API Blue `#1f74ff`
- CTA Hover: `#0d5fe0`
- Pale API panel: `#e1eeff`
- Code panel: `#0a1228`
- Twilio Red (rare): `#f22f46`
- Border: `#0d122b1f` (12% navy)
- Success: `#dcf5e9` bg / `#0a7d49` text

### Example Component Prompts

- "Create a hero section on white background. Headline at 56px Twilio Sans Display weight 700, line-height 1.10, letter-spacing -0.02em, colour `#0d122b`. Subtitle at 18px Twilio Sans Text weight 400, line-height 1.55, colour `#5b6079`. Primary CTA: `#1f74ff` background, white text, 4px radius, 12px 20px padding, 15px Twilio Sans Text weight 600. Secondary outlined: white bg, `#0d122b` text, 1px solid `#0d122b`, 4px radius. Right side: dark code panel `#0a1228` showing API request example."
- "Design a deliverability metric card: white bg, 1px solid `#0d122b1f`, 8px radius, 20px 24px padding. Large metric in Twilio Sans Display 36/700/tnum, colour `#1f74ff`, e.g. '99.99%'. Below: label in Twilio Sans Mono 12/600/0.06em uppercase, colour `#5b6079`, e.g. 'DELIVERABILITY'. Sparkline trendline in `#1f74ff` with `#0d122b10` gridlines."
- "Build a status pill: `#dcf5e9` background, `#0a7d49` text, 1px solid `#a8e0c2`, 9999px radius, 2px 8px padding, Twilio Sans Mono 11px / 600 / 0.10em uppercase, label 'DELIVERED'."
- "Create a dark code block: `#0a1228` background, 8px radius, 20px padding, no border. Inside: Twilio Sans Mono 14/400/1.55 with syntax highlighting — keywords `#79b8ff`, strings `#a5d6a7`, comments `#6c7591` italic, base text `#e6e9f1`. Optional copy button top-right."
- "Design navigation: white background, 1px bottom border `#0d122b1f`. SendGrid wordmark on left. Links in Twilio Sans Text 14/500/`#0d122b`, hover `#1f74ff`. Right: ghost `Sign in` + primary `Start for free` CTA (`#1f74ff` bg, 4px radius)."
- "Build a pricing tier table: 4-column with hairline `1px solid #0d122b10` rows, `12px 0` padding per row. Tier headers in Twilio Sans Display 22/600. Tier prices use `tnum` tabular figures. Recommended tier highlighted with `#dceeff` row background and `1px solid #1f74ff` border."

### Iteration Guide

1. If the page reads "consumer SaaS" rather than "dev infrastructure," check the radii — 4–8px holds, 12px+ breaks the dashboard tone.
2. The CTA colour must remain `#1f74ff` (SendGrid blue) — switching to Twilio red breaks the legacy continuity.
3. If code panels feel weak, increase contrast: `#0a1228` is the doctrinal panel colour, not `#1c2333` or lighter.
4. Metric numerals must use `font-feature-settings: "tnum"` — column-true alignment is required.
5. Status pills always use mono uppercase labels at `0.10em` tracking — sans labels break the data-grid feel.
6. The Twilio red `#f22f46` is parent-brand only — using it as a CTA breaks the SendGrid identity.
7. Page section padding caps at `80px` — denser than Twilio parent's `96px+` is part of the voice.
8. If the page reads campaign-y, drop the H1 weight from 700 to a still-700 but smaller size (56px not 64px) and add a metric card row to recover the dashboard-grade tone.
