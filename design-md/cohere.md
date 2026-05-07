---
name: Cohere
tagline: Stark white editorial canvas with deep green-black product bands and a CohereText/Unica77 type split.
updated_at: 2026-05-05T19:20:38+12:00
published_at: 2026-05-03T20:43:35+12:00
author: webdesignhot
source_url: https://cohere.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [ai, saas]
tags: [light, editorial, sans, restrained, monumental, enterprise]
preview_swatch: ['#ffffff', '#003c33', '#17171c']
related: [anthropic, mistral, openai]
description: 'Cohere''s 2026 web system reads like a sober enterprise AI command center with editorial restraint. The home page opens on a huge typographic declaration over a stark white canvas, then uses photography, dark green-black product bands, monochrome trust logos, and generous whitespace to make AI infrastructure feel controlled rather than speculative. CohereText carries the monumental headlines; Unica77 Cohere Web handles the precise UI; CohereMono surfaces uppercase technical labels. Cards are rounded but not cute. Type is large, tight, and almost monospaced in spirit.'

colors:
  bg: '#ffffff'                # canvas-white, dominant page background
  bg-soft-stone: '#eeece7'     # warm neutral product card surface
  bg-pale-green: '#edfce9'     # North page wash behind dark capability panels
  bg-pale-blue: '#f1f5ff'      # blog CTA surface behind 3D imagery
  bg-deep-green: '#003c33'     # Command/North dark product band
  bg-dark-navy: '#071829'      # financial/security solution band
  bg-cohere-black: '#000000'   # announcement bar, max-contrast brand anchor
  surface: '#ffffff'           # form/card surface on light
  surface-card: '#ffffff'      # primary card fill
  surface-card-soft: '#f2f2f2' # softest card containment
  text: '#212121'              # ink — default body text
  text-strong: '#000000'       # max-contrast headline ink
  text-muted: '#616161'        # body-muted secondary copy
  text-soft: '#75758a'         # slate — research separators, tertiary
  text-faint: '#93939f'        # muted slate — footer links, dates
  brand: '#17171c'             # near-black primary CTA fill
  brand-anchor: '#000000'      # global brand anchor
  brand-deep-green: '#003c33'  # enterprise green for North/Command
  brand-coral: '#ff7759'       # blog taxonomy chips, warm accents
  brand-coral-soft: '#ffad9b'  # pale chip borders, segmented details
  accent: '#1863dc'            # action blue for editorial links/pagination
  accent-focus: '#4c6ee6'      # keyboard focus ring blue
  accent-form-focus: '#9b60aa' # focus border for text inputs
  border: '#d9d9dd'            # standard hairline rule
  border-light: '#e5e7eb'      # secondary divider/utility rule
  border-card: '#f2f2f2'       # softest card containment line
  on-brand: '#ffffff'          # white text on near-black CTA
  on-dark: '#ffffff'           # white text on deep-green/navy bands
  semantic-error: '#b30000'    # validation ring/shadow

typography:
  display:
    family: 'CohereText, "Space Grotesk", Inter, ui-sans-serif, system-ui, sans-serif'
    weights: [400]
    opentype: 'kern, calt'
  body:
    family: '"Unica77 Cohere Web", Inter, Arial, ui-sans-serif, system-ui, sans-serif'
    weights: [400, 500]
  mono:
    family: 'CohereMono, "JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace'
    weights: [400]
  scale:
    hero-display:    { size: 96, weight: 400, lineHeight: 1.00, tracking: '-1.92px', family: display, opentype: 'kern' }
    product-display: { size: 72, weight: 400, lineHeight: 1.00, tracking: '-1.44px', family: display }
    section-display: { size: 60, weight: 400, lineHeight: 1.00, tracking: '-1.2px',  family: body }
    section-heading: { size: 48, weight: 400, lineHeight: 1.20, tracking: '-0.48px', family: body }
    card-heading:    { size: 32, weight: 400, lineHeight: 1.20, tracking: '-0.32px', family: body }
    feature-heading: { size: 24, weight: 400, lineHeight: 1.30, tracking: '0',       family: body }
    body-large:      { size: 18, weight: 400, lineHeight: 1.40, tracking: '0',       family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.50, tracking: '0',       family: body }
    body-strong:     { size: 16, weight: 500, lineHeight: 1.50, tracking: '0',       family: body }
    button:          { size: 14, weight: 500, lineHeight: 1.71, tracking: '0',       family: body }
    caption:         { size: 14, weight: 400, lineHeight: 1.40, tracking: '0',       family: body }
    mono-label:      { size: 14, weight: 400, lineHeight: 1.40, tracking: '0.28px',  family: mono, transform: uppercase }
    micro:           { size: 12, weight: 400, lineHeight: 1.40, tracking: '0',       family: body }
    micro-strong:    { size: 12, weight: 500, lineHeight: 1.40, tracking: '0',       family: body }

radius:
  xs: 4
  sm: 8
  md: 16
  lg: 22       # signature media-card radius
  xl: 30       # research/topic filter pill
  pill: 32     # primary CTA pill
  full: 9999

spacing:
  xxs: 2
  xs: 6
  sm: 8
  md: 12
  lg: 16
  xl: 24
  xxl: 32
  section: 80

layout:
  page-width: 1280
  prose-width: 720
  header-height: 72

components:
  button-primary:
    backgroundColor: '#17171c'
    textColor: '#ffffff'
    rounded: 32
    padding: '12px 24px'
    font: '14px Unica77 Cohere Web, weight 500'
    use: 'Request a demo, primary hero CTA — near-black pill on light surfaces'
  button-secondary:
    backgroundColor: transparent
    textColor: '#212121'
    rounded: 4
    padding: '8px 0'
    font: '16px Unica77 Cohere Web, weight 400, underline'
    use: 'Explore products, Try the Playground — text-only secondary'
  button-pill-outline:
    backgroundColor: transparent
    textColor: '#17171c'
    rounded: 30
    padding: '6px 12px'
    border: '1px solid #17171c'
    use: 'Research filters, topic tags, lightweight taxonomy controls'
  card-product:
    backgroundColor: '#eeece7'
    textColor: '#212121'
    rounded: 8
    padding: '32px'
    use: 'Warm stone card for product/model summaries with checkmark bullets'
  card-capability:
    backgroundColor: '#ffffff'
    textColor: '#212121'
    rounded: 4
    padding: '24px'
    use: 'Content block with thin-line geometric illustration + text link'
  card-hero-photo:
    backgroundColor: '#ffffff'
    rounded: 22
    use: 'Signature media card combining photography with overlaid agent-console'
  agent-console-card:
    backgroundColor: '#17171c'
    textColor: '#ffffff'
    rounded: 8
    padding: '24px'
    use: 'Dark product mockup panel with agent names, status chips, response cards'
  dark-feature-band:
    backgroundColor: '#003c33'
    textColor: '#ffffff'
    rounded: 22
    padding: '80px'
    use: 'Full-width product capability section, security claims'
  blog-filter-chip:
    backgroundColor: transparent
    textColor: '#ff7759'
    rounded: 8
    padding: '8px 14px'
    font: '32px Unica77, weight 400'
    use: 'Oversized coral taxonomy chip on blog index'
  contact-form-card:
    backgroundColor: '#ffffff'
    textColor: '#212121'
    rounded: 22
    padding: '32px'
    use: 'Rounded white form against dark green or warm stone backgrounds'
  announcement-bar:
    backgroundColor: '#000000'
    textColor: '#ffffff'
    height: 36
    font: '12px Unica77, weight 400'
    use: 'Full-width black strip above nav with centered microcopy'
  input-text:
    backgroundColor: '#ffffff'
    textColor: '#212121'
    rounded: 4
    padding: '12px 16px'
    border: '1px solid #d9d9dd'
    focusBorder: '1px solid #9b60aa'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 120
  duration-standard: 200
  duration-slow: 320
  reduced-motion: 'Respects prefers-reduced-motion: reduce — page-band crossfades collapse to instant swaps; pill hover lift becomes opacity-only'

breakpoints:
  small-mobile: 425
  mobile: 640
  large-mobile: 768
  tablet: 1024
  desktop: 1440
  wide: 2560

shadows:
  ambient: 'none'                                                  # the system runs flat by default
  standard: '0 1px 2px rgba(0,0,0,0.04)'                           # rare card lift
  elevated: '0 8px 24px rgba(15,24,41,0.08)'                       # contact form floating on dark band
  deep: '0 16px 40px rgba(7,24,41,0.16)'                           # modal-grade lift
  ring: '0 0 0 2px rgba(76,110,230,0.5)'                           # focus halo

accessibility:
  contrast-text-on-bg: 16.1            # #212121 on #ffffff — AAA at body sizes
  contrast-text-on-brand: 17.4         # #ffffff on #17171c — AAA
  contrast-text-on-deep-green: 12.6    # #ffffff on #003c33 — AAA
  contrast-text-muted-on-bg: 6.3       # #616161 on #ffffff — AA
  focus-ring: '2px solid #4c6ee6 with 2px offset'
  reduced-motion-honored: true

dark-mode: light-only

lineage:
  summary: |
    Cohere stages itself as the enterprise-AI counterweight to OpenAI's
    consumer warmth and Anthropic's research-paper restraint. The page
    metaphor is a sober command center: stark white canvas, monumental
    typographic declarations, and full-width dark green or navy bands
    when the brand wants to feel like infrastructure rather than
    interface. CohereText handles the 96px hero declarations with
    -1.92px tracking; Unica77 Cohere Web carries every UI surface with
    precise 16px body type; CohereMono ships uppercase technical labels
    that read like research-paper taxonomy. The visual lineage runs
    through Wired and the New York Times Magazine for the editorial
    cadence (oversized hero + small uppercase label + rule-separated
    research list), and through HashiCorp/Vercel for the discipline of
    near-black pill CTAs on a flat white field. Color arrives almost
    exclusively through photography and dark product environments —
    coral chips for blog taxonomy, action blue for editorial links,
    deep enterprise green for product bands. The chrome itself stays
    almost entirely monochrome.
  influences:
    - name: Wired / NYT Magazine
      role: Oversized hero declaration + small uppercase mono label editorial cadence.
      url: https://www.wired.com
    - name: HashiCorp
      role: Enterprise-infrastructure restraint — flat surfaces, near-black pills, no decorative chrome.
      url: https://www.hashicorp.com
    - name: Anthropic
      role: AI-research paper-led typographic discipline; near-monospaced spirit at body sizes.
      url: https://www.anthropic.com
    - name: Stripe
      role: Single-confidence-color discipline applied to action blue (#1863dc) for editorial links.
      url: https://stripe.com
---

## 1. Visual Theme & Atmosphere

Cohere's marketing site reads like a sober enterprise-AI command center
with editorial restraint. The home page opens on a huge typographic
declaration — CohereText at 96px with -1.92px letter-spacing — sitting
quietly over a stark white canvas. There are no atmospheric gradients,
no decorative chrome, no consumer-facing warmth. The brand voice is
"infrastructure, designed by adults": every surface is austere, every
hero declaration is monumental, every interactive control is rendered
as either a near-black pill or a text-only underlined link.

The system is built around a deliberate alternation between the **bright
editorial canvas** (white background, large mono-spirited type, monochrome
trust logos with wide spacing) and the **dark product band** (deep
enterprise green `#003c33` or dark navy `#071829`, full-width, with the
chrome inverting to white text and dark capability cards). This dual-mode
rhythm is what separates Cohere from the broader AI marketing pattern of
gradient-blue hero pages — instead of softening, the page commits to
austerity, then breaks rhythm with full-width dark sections that feel
like opening a research environment terminal in the middle of a
publication.

What truly distinguishes Cohere is its mix of austere monochrome UI with
bursts of tactile brand imagery. The site avoids decorative chrome in
the normal interface; color arrives through photography, abstract 3D
media on blog CTA surfaces (`#f1f5ff` pale-blue wash), coral taxonomy
chips (`#ff7759`) on the blog index, blue research links (`#1863dc`),
and dark product environments. Cards are rounded — usually 8px or 22px
— but never cute. Type is large, tight, and almost monospaced in spirit
even when it's set in Unica77 Cohere Web; the system's cadence is closer
to a technical paper than a SaaS landing page.

The trust-logo strips deserve their own paragraph: monochrome partner
marks, set with extreme horizontal spacing, no card containment, no
borders. The negative space *is* the credibility signal. When a brand
has Oracle, Salesforce, McKinsey, and the U.S. Department of State in
its logo strip, you do not put each one inside a rounded white card with
a drop shadow. You center the entire row in a sea of white space and
let the marks themselves do the work.

**Key Characteristics:**
- Monumental display headlines at 96px CohereText with -1.92px tracking and 1.0 line-height
- Stark white editorial canvas interrupted by full-width deep green (`#003c33`) and dark navy (`#071829`) product bands
- Rounded media cards at 8px (small) and 22px (signature large), never below 8px for major media
- Near-black (`#17171c`) pill CTAs at 32px radius — secondary actions render as underlined text links
- Trust-logo strips with monochrome partner marks and intentionally vast horizontal spacing
- Agent-console mockups on dark panels with small status chips and integration badges
- Coral (`#ff7759`) blog taxonomy chips at oversized scale — taxonomy as a hero-level control
- Blue (`#1863dc`) reserved for editorial links and research pagination — never a CTA
- Three-typeface system: CohereText (display), Unica77 Cohere Web (UI/body), CohereMono (uppercase labels)
- Flat by default — no shadows on standard cards; depth comes from surface alternation and rounded corners

## 2. Color Palette & Roles

### Primary
- **Canvas White** (`#ffffff`): The dominant page background and form/card surface. Cohere uses pure white, not warm-shifted cream — the cool clean field is intentional and reinforces the enterprise tone.
- **Ink** (`#212121`): Default body text and most link text on light backgrounds. A barely-lifted near-black with no warm undertone.
- **Near-Black Primary** (`#17171c`): Primary CTA pill background, dark footer, deep UI cards. Holds back from pure black to keep type optically balanced.

### Brand & Dark
- **Cohere Black** (`#000000`): Announcement bar, highest-contrast text moments, and the global brand anchor.
- **Deep Enterprise Green** (`#003c33`): Product hero bands for North and Command-style dark sections. The signature Cohere band color — a deep forest green that reads as "industrial" without competing with the chrome.
- **Dark Navy** (`#071829`): Financial-services and security-oriented solution bands. Used when "enterprise" needs to feel like a financial-grade environment rather than a research lab.

### Accent
- **Action Blue** (`#1863dc`): Editorial links, pagination, and secondary action emphasis. Reserved for prose-level interactive moments — never used as a CTA fill.
- **Focus Blue** (`#4c6ee6`): Keyboard focus ring color. Slightly brighter than action blue so the focus halo reads above the link itself.
- **Form-Focus Violet** (`#9b60aa`): Focus border for text inputs. The single muted-purple in the system, used only when a form control activates.
- **Coral** (`#ff7759`): Blog category chips, taxonomy outlines, warm product markers. Vivid red-orange, high-energy, used sparingly on editorial surfaces.
- **Soft Coral** (`#ffad9b`): Pale chip borders and segmented article-label details.

### Interactive
- **CTA Black** (`#17171c`): The single button fill in the entire system.
- **Link Inline Default** (`#212121`): Body links default to ink color with underline.
- **Link Inline Hover** (`#1863dc`): Hover transitions to action blue.
- **Disabled Text** (`#93939f`): Muted slate for disabled controls.

### Neutral Scale
- **Heading Strong** (`#000000`): Used for the most emphatic display headlines.
- **Heading** (`#212121`): Default heading and body text.
- **Body Muted** (`#616161`): Secondary text, descriptions, paragraph subhead copy.
- **Slate** (`#75758a`): Research-paper separators and tertiary text.
- **Muted Slate** (`#93939f`): Footer links, dates, metadata, de-emphasized labels.

### Surface & Borders
- **Surface Card** (`#ffffff`): Pure white card fill, identical to canvas — separation comes from border, not surface contrast.
- **Soft Stone** (`#eeece7`): Product cards, testimonial placeholders, warm neutral surface blocks. The single "warm" surface in an otherwise cool palette.
- **Pale Green Wash** (`#edfce9`): North page section backdrop behind stacked dark capability panels.
- **Pale Blue Wash** (`#f1f5ff`): Blog CTA surface behind abstract 3D imagery.
- **Card Border** (`#f2f2f2`): Softest card containment line.
- **Hairline** (`#d9d9dd`): Standard list rules and section dividers.
- **Border Light** (`#e5e7eb`): Secondary divider and utility rule.

### Shadow Colors
Cohere is mostly flat. Shadows appear only on contact forms floating against dark green bands:
- **Form Lift** (`rgba(15,24,41,0.08)`): `0 8px 24px` — single soft drop on form panels over dark backgrounds.
- **Modal** (`rgba(7,24,41,0.16)`): `0 16px 40px` — reserved for dialog elevation.

### Semantic
- **Focus Blue** (`#4c6ee6`): Keyboard focus.
- **Form-Focus Violet** (`#9b60aa`): Active text-input border.
- **Error Red** (`#b30000`): Validation ring/shadow color associated with form errors.

### Gradient System
Cohere does not use gradients as generic UI fill. Gradients and color fields are media-led: abstract 3D hero imagery, deep blue open-science particle fields, red-orange product video posters, and dark green-to-black product environments. UI surfaces stay flat; gradient richness is reserved for large media panels and CTA image bands.

## 3. Typography Rules

### Font Family

**Display** — `CohereText`, falling back to `Space Grotesk`, `Inter`, `ui-sans-serif`, `system-ui`, `sans-serif`. Custom geometric-modernist face used exclusively at hero scales (72-96px). The face has very tight default tracking and reads as monospace-adjacent at large sizes despite being proportional.

**Body / UI** — `Unica77 Cohere Web`, falling back to `Inter`, `Arial`, `ui-sans-serif`, `system-ui`. Lasse Lambach's Unica77 in a Cohere-licensed cut. Used across every functional UI role from 14px buttons through 60px section displays.

**Technical labels** — `CohereMono`, falling back to `JetBrains Mono`, `ui-monospace`, `SF Mono`, `Menlo`. Reserved for uppercase technical labels (category markers, system names, research-paper section headers).

OpenType features: Cohere relies on default `kern` and `calt` (contextual alternates) — no exotic stylistic sets. The face's character is in its proportions, not in alternate forms.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| Hero Display | CohereText | 96px (6.0rem) | 400 | 1.00 | -1.92px | kern | Home page declaration scale |
| Product Display | CohereText | 72px (4.5rem) | 400 | 1.00 | -1.44px | kern | Product/research hero headlines |
| Section Display | Unica77 | 60px (3.75rem) | 400 | 1.00 | -1.2px | kern, calt | Large product-page headings |
| Section Heading | Unica77 | 48px (3.0rem) | 400 | 1.20 | -0.48px | kern, calt | Split hero and CTA headings |
| Card Heading | Unica77 | 32px (2.0rem) | 400 | 1.20 | -0.32px | kern, calt | Feature card and list-section titles |
| Feature Heading | Unica77 | 24px (1.5rem) | 400 | 1.30 | 0 | kern, calt | Cards, filters, article titles |
| Body Large | Unica77 | 18px (1.13rem) | 400 | 1.40 | 0 | kern, calt | Lead text, larger paragraphs |
| Body | Unica77 | 16px (1.0rem) | 400 | 1.50 | 0 | kern, calt | Default copy and link text |
| Body Strong | Unica77 | 16px (1.0rem) | 500 | 1.50 | 0 | kern, calt | Inline emphasis, list-row labels |
| Button | Unica77 | 14px (0.88rem) | 500 | 1.71 | 0 | kern, calt | Compact CTA labels |
| Caption | Unica77 | 14px (0.88rem) | 400 | 1.40 | 0 | kern, calt | Metadata, small explanatory text |
| Mono Label | CohereMono | 14px (0.88rem) | 400 | 1.40 | 0.28px | kern, uppercase | Uppercase technical labels |
| Micro | Unica77 | 12px (0.75rem) | 400 | 1.40 | 0 | kern, calt | Footer, nav microcopy |
| Micro Strong | Unica77 | 12px (0.75rem) | 500 | 1.40 | 0 | kern, calt | Footer section labels |

### Principles

- **Use massive type sparingly.** Cohere pages typically have one oversized headline and then settle into restrained 16-24px UI copy. The hero declaration *is* the page's voice; nothing below it tries to compete.
- **Display type stays tight.** Hero copy should feel compact and carved, not airy. Line-heights at 1.0 and -1.92px tracking at 96px are non-negotiable signatures.
- **Avoid heavy bold weights.** The system runs at weight 400 (display, body, captions) and 500 (buttons, body emphasis, micro-strong). True bold (700) does not appear in the chrome.
- **Uppercase mono for system markers.** Category labels, research-paper section headers, and product-tier tags use CohereMono uppercase with 0.28px positive tracking.
- **Editorial pages can use coral chips and blue links**, but the base typography stays black and measured. Color appears as taxonomy, not as decoration.
- **Long-form prose holds at 16px body, 1.5 line-height**. The 18px body-large variant only appears in lead paragraphs immediately under the hero.
- **Line-height tightens with size.** From 1.5 (body) → 1.4 (body-large/feature) → 1.3 (24px feature heading) → 1.2 (32-48px heading) → 1.0 (display). The compression is what makes the hero declaration feel monumental.

## 4. Component Stylings

### Buttons

**`button-primary`** — Near-black pill CTA, the dominant action across all surfaces.
- Background `#17171c`, text `#ffffff`
- Padding `12px 24px`, rounded `32px` (signature pill radius)
- Font: 14px Unica77 Cohere Web weight 500, line-height 1.71
- Hover: ground darkens toward pure `#000000`; transition 200ms
- Use: "Request a demo", "Submit", primary hero CTAs

**`button-primary-on-dark`** — White pill on deep-green/navy bands.
- Background `#ffffff`, text `#17171c`
- Same shape, same padding, inverted color
- Use: Primary CTA inside dark feature bands

**`button-secondary`** — Text-only underlined link, no fill.
- Background transparent, text `#212121` with underline
- Padding `8px 0` (text-only, no horizontal pad)
- Font: 16px Unica77 weight 400
- Use: "Explore products", "Try the Playground", newsletter signup, secondary hero actions

**`button-pill-outline`** — Outlined pill control.
- Background transparent, text `#17171c`
- 1px solid `#17171c` border, rounded `30px`, padding `6px 12px`
- Use: Research filters, topic tags, lightweight taxonomy controls

**`button-pill-outline-active`** — Active filter state.
- Background `#17171c`, text `#ffffff`
- Same border-radius and padding as default

### Announcement Bar

**`announcement-bar`** — Full-width black strip above the nav.
- Background `#000000`, text `#ffffff`, height 36px
- Centered microcopy in 12px Unica77 weight 400
- Underlined "Learn more" link inline
- Close control at far right (small × glyph)

### Cards

**`card-product`** — Warm stone product/model summary card.
- Background `#eeece7`, text `#212121`
- Rounded 8px, padding 32px
- Layout: small pill button at top, 32px card heading, divider line, checkmark bullet rows
- 3-column on desktop in product matrix

**`card-capability`** — Light feature card.
- Background `#ffffff`, text `#212121`
- Rounded 4px, padding 24px
- Layout: thin-line geometric illustration top, 24px heading, body, text link
- Often unframed on light backgrounds — borders only when explicit separation needed

**`card-hero-photo`** — Signature large media card.
- Background `#ffffff` with photographic content fill
- Rounded 22px (the signature Cohere card radius)
- No border, no shadow — the rounded corners and image-bleed do the containment
- Often combines photography with an overlaid agent-console module

**`card-contact-form`** — Rounded white form panel against dark sections.
- Background `#ffffff`, text `#212121`
- Rounded 22px, padding 32px
- Single soft drop shadow `0 8px 24px rgba(15,24,41,0.08)` when floating on dark green
- Two-column input rows

### Agent Console Card

**`agent-console-card`** — Dark product mockup panel.
- Background `#17171c`, text `#ffffff`, rounded 8px, padding 24px
- Contents: agent names, status chips (small pill labels), integration badges, prompt fields, generated response cards
- Status chips use product accent colors against the dark surface
- Used as the centerpiece overlay on hero photo cards

### Dark Feature Band

**`dark-feature-band`** — Full-width product capability section.
- Background `#003c33` (deep green) or `#071829` (dark navy), text `#ffffff`
- Rounded 22px on the band itself when contained, full-width-bleed when used as page section
- Padding 80px (signature `spacing.section`)
- Inner cards use darker translucent surfaces, pale borders, abstract line illustrations

### Badges & Chips

**`blog-filter-chip`** — Oversized coral taxonomy chip on blog index.
- Background transparent, text `#ff7759`
- 1px solid `#ffad9b` border, rounded 8px, padding 8px 14px
- Font: 32px Unica77 weight 400 (deliberately oversized — taxonomy as hero control)

**`blog-filter-chip-active`** — Inverts to filled coral.
- Background `#ff7759`, text `#17171c`
- Same shape

**`research-tag`** — Small uppercase mono pill for research-paper topic tags.
- Background `#f2f2f2`, text `#75758a`
- Rounded 4px, padding 4px 10px
- Font: CohereMono 12px uppercase, 0.28px tracking

### Inputs & Forms

**`input-text`** — Default text field.
- Background `#ffffff`, text `#212121`
- 1px solid `#d9d9dd` border, rounded 4px, padding 12px 16px, height 44px
- Font: 16px Unica77 weight 400
- Label above in 14px Unica77 weight 500

**`input-text-focused`** — Activated state.
- Border switches to `1px solid #9b60aa` (form-focus violet)
- 2px focus ring at `rgba(76,110,230,0.5)` offset 2px

**`input-text-error`** — Validation error.
- Border `1px solid #b30000`
- Error microcopy below in 12px Unica77 weight 400, color `#b30000`

### Trust Logo Strip

**`trust-logo-strip`** — Centered partner logos with vast spacing.
- Background `#ffffff`, no card chrome, no borders
- Logos in monochrome (black on light, white on dark) at uniform optical height
- Horizontal gap: 80px+ between logos
- Often preceded by a centered small uppercase mono label ("TRUSTED BY")

### Navigation

**`primary-nav`** — Three-zone layout.
- Background `#ffffff`, height 72px
- Bottom rule: 1px `#d9d9dd`
- Layout: Cohere wordmark left, primary horizontal menu centered (Models / Products / Research / Pricing / Docs), Sign-in + primary CTA pill right
- Links in 14px Unica77 weight 500, color `#212121`
- Hover: opacity 0.7 + 200ms transition (no color shift)
- Mega-menu dropdowns use full-width overlays with category columns

### Decorative Elements

**Thin-line geometric illustrations** — Single-stroke icon/diagram set used inside capability cards. Drawn in 1.5px stroke, color `#212121`, no fill. The visual lineage of these icons traces back to early-90s technical-paper figure annotation.

**Abstract 3D media** — Hero composites use rendered abstract forms (orbs, particle fields, deep blue gradients) rather than literal product screenshots on the home page. The 3D content lives inside the `card-hero-photo` containers at 22px radius.

**Footer Newsletter Block** — Dark footer subscription module with coral "AI moves fast" eyebrow label, white headline in 32px Unica77, muted legal microcopy in `#93939f`, single-line email input field, arrow submit marker.

## 5. Layout Principles

### Spacing System

Base unit is 8px with many one-off alignment values for editorial precision:
`2px (xxs)` · `6px (xs)` · `8px (sm)` · `10px` · `12px (md)` · `16px (lg)` · `20px` · `22px` · `24px (xl)` · `28px` · `32px (xxl)` · `36px` · `40px` · `56px` · `60px` · `64px` · `80px (section)` · `120px (hero-air)`.

Large sections rely on dramatic vertical breathing room. The home page places a trust-logo strip far below the hero media. Product pages often hold dark panels inside fields of empty white space, then transition to dense forms or footers only near the end.

### Grid & Container

- **Page max-width**: 1280px on standard pages, 1440px on home
- **Prose column**: ~720px max for long-form research and blog content
- **Global nav**: three-zone layout — logo left, menu centered, sign-in/CTA right
- **Home hero**: centered text above a two-card media composition (wide product mockup card beside a narrower photography card)
- **Feature sections**: 3-column cards on desktop, 2-column on tablet, 1-column on mobile
- **Product pages** alternate centered hero blocks, trust-logo strips, large single-feature bands, and 2-3 column card grids
- **Research pages** use full-width lists with date and chip columns instead of decorative cards
- **Forms** use two-column input rows inside a rounded white card on dark or stone section backgrounds

### Whitespace Philosophy

Cohere uses whitespace as a trust signal. Large empty intervals separate the brand claim, customer proof, product proof, and CTA. Dense content appears only where it serves the information architecture: research paper rows, blog card grids, contact form fields. The page should never feel "compressed" — even on a laptop screen, sections breathe at 80-120px vertical rhythm.

The trust-logo strip is the canonical example: monochrome marks on a sea of white, with horizontal gaps that would feel wrong on any other site. The negative space is what makes the trust signal credible.

### Section Cadence

Home page rhythm:
1. **Hero declaration** (white, 120px top air)
2. **Hero photo card** (white, 22px radius, contains agent-console overlay)
3. **Trust-logo strip** (white, 80px+ vertical, no chrome)
4. **Capability section** (white, 3-column unframed cards with thin-line icons)
5. **Dark product band** (deep green, 80px padding, white text, dark inner cards)
6. **Customer story** (white, large quote in 32px Unica77, photo card right)
7. **Pre-footer CTA** (warm stone or pale wash, centered headline + pill CTA)
8. **Footer** (dark `#17171c` or pure white with dark text)

## 6. Shapes & Radius Scale

| Token | Value | Tier | Use |
|-------|-------|------|-----|
| `xs` | 4px | Micro | Small images, search fields, article thumbnails, utility elements |
| `sm` | 8px | Standard | Blog chips, cards, small media, dialogs, agent-console card |
| `md` | 16px | Comfortable | Medium product cards and grouped blocks |
| `lg` | 22px | Signature | Major media-card and soft placeholder radius — the Cohere fingerprint |
| `xl` | 30px | Pill-outline | Research/topic filter pills |
| `pill` | 32px | CTA Pill | Primary CTA buttons |
| `full` | 9999px | Round | Round status elements and avatar plates |

### Image Treatment

Images are not decorative backdrops for text except in CTA bands. Most imagery sits as rounded cards with visible corners: product videos, enterprise photography, article thumbnails, abstract 3D renders. The dominant radii are 8px (small thumbnails) and 22px (signature large media). The 22px radius is the system's most recognizable shape signal — it appears on hero photo cards, contact form panels, and dark feature bands when contained.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | No shadow, white or dark field | Hero copy, research lists, editorial surfaces, default cards |
| 1 — Bordered | 1px `#d9d9dd`, `#e5e7eb`, or dark translucent rules | Research rows, forms, pale cards, footer inputs |
| 2 — Media Lift | Rounded image or video over contrasting section color | Hero photo cards, product videos, CTA imagery |
| 3 — Form Float | `0 8px 24px rgba(15,24,41,0.08)` | Contact form floating on dark green band |
| 4 — Modal | `0 16px 40px rgba(7,24,41,0.16)` | Reserved for dialogs and overlays |
| 5 — Dark Product Field | Deep green or navy full-width band | Command, North, financial-services, security sections |

**Shadow Philosophy**: Cohere is mostly flat. Depth comes from surface alternation (white → soft-stone → deep-green), media contrast, rounded corners, and thin borders rather than drop shadows. The single shadow tier (form-float) appears only when a white form panel sits against a dark green band — the shadow exists to keep the form readable, not to suggest elevation. The deep-green and dark-navy bands provide the system's primary depth cue: they break the white canvas's visual plane and announce "this is a different content layer."

## 8. Interaction & Motion

### Easing
- **Standard ease**: `cubic-bezier(0.4, 0, 0.2, 1)` — material-style ease for most state transitions
- **Emphasized ease**: `cubic-bezier(0.2, 0, 0, 1)` — for entrance animations and band reveals

### Duration Buckets
- **Fast**: 120ms — hover color/opacity shifts, button press feedback
- **Standard**: 200ms — most state transitions, dropdown reveals, link underline draw
- **Slow**: 320ms — section band reveals, hero crossfades, mega-menu opens

### Per-component micro-states
- **Primary pill hover**: background ground darkens from `#17171c` to `#000000` over 200ms; no lift, no shadow change
- **Secondary text-link hover**: underline thickens from 1px to 2px over 120ms; color shifts from `#212121` → `#1863dc`
- **Pill-outline filter hover**: background fills with `rgba(23,23,28,0.05)` over 120ms
- **Card hover (capability/product)**: 1px border darkens from `#d9d9dd` → `#75758a` over 200ms; no shadow, no transform
- **Coral blog-filter hover**: pale fill `rgba(255,119,89,0.1)` appears over 120ms

### Page transitions
- Section bands crossfade as they enter the viewport — opacity 0 → 1 over 320ms with the emphasized ease
- Trust-logo strips have no entrance animation; they appear immediately
- Dark product bands use a subtle parallax — background scrolls 5% slower than foreground content

### Reduced motion
The site respects `prefers-reduced-motion: reduce`. All band reveals collapse to instant swaps; pill hover lift becomes opacity-only; parallax disables entirely. The link underline draw still fires (information signal), but transitions immediately without animation.

## 9. Accessibility & A11y

### Contrast pairs (WCAG)
- **Body text on canvas**: `#212121` on `#ffffff` = 16.1:1 — AAA at all sizes
- **White on near-black brand**: `#ffffff` on `#17171c` = 17.4:1 — AAA
- **White on deep enterprise green**: `#ffffff` on `#003c33` = 12.6:1 — AAA at body sizes
- **Body muted on canvas**: `#616161` on `#ffffff` = 6.3:1 — AA at body, AAA at large
- **Action blue on canvas**: `#1863dc` on `#ffffff` = 5.5:1 — AA at body sizes
- **Coral chip on canvas**: `#ff7759` on `#ffffff` = 3.1:1 — meets AA only at large/headline sizes; chip text uses 14-32px which qualifies

### Focus indicators
- Default focus ring: 2px solid `#4c6ee6` with 2px offset
- Form-input focus: border switches to `#9b60aa` (1px), with the 2px ring offset 2px outside
- Pill CTAs: focus halo at `0 0 0 2px rgba(76,110,230,0.5)` outside the 1px brand border

### ARIA patterns
- **Dropdowns**: full ARIA combobox pattern with `aria-expanded`, `aria-controls`, `role="listbox"` for the menu
- **Mega-menu**: `role="menubar"` with arrow-key navigation between top-level items, then `role="menu"` for the popout
- **Dialogs** (contact-form modal): `role="dialog"`, `aria-modal="true"`, focus trap, escape-key dismiss
- **Tabbed sections** (product pages): `role="tablist"` + `role="tab"` + `role="tabpanel"` with arrow-key navigation
- **Status badges** in agent-console mockups: `aria-label` describes the status (e.g., "Active", "Idle") rather than relying on color alone

### Keyboard nav
- Tab order: nav → hero CTA → secondary CTA → first content card → subsequent cards in DOM order → footer
- Arrow keys move within tablists and mega-menu trees
- Escape closes any popout (dropdown, mega-menu, dialog)
- Enter/Space activate buttons; Enter activates links

### Screen reader hints
- The thin-line geometric illustrations inside capability cards have `aria-hidden="true"` since they're decorative
- The CohereMono uppercase labels are announced as written (not auto-uppercased by CSS) so screen readers don't spell them out letter-by-letter
- Trust-logo strip uses an offscreen `<h2>Trusted by</h2>` for landmark navigation

### Reduced motion
The system respects `prefers-reduced-motion: reduce` per §8. All non-essential motion disables; focus rings still appear; loading states use static spinners instead of animated ones.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Small Mobile | <425px | Single column. Hero drops to 48px. Pill nav collapses to hamburger. Trust logos stack vertically. Form rows stack. |
| Mobile | 425-640px | Single column with larger media cards. Hero at 56-64px. Section padding 48px. |
| Large Mobile | 640-768px | Wider one-column with larger photography. Hero at 64-72px. |
| Tablet | 768-1024px | Two-column cards begin. Nav spacing tightens. Hero at 80px. |
| Desktop | 1024-1440px | Full nav, 3-column card grids, split hero compositions. Hero at 96px. |
| Large Desktop | 1440-2560px | Wide containers (1440px max) and large empty vertical intervals. |

### Touch Targets

Primary CTAs and pills meet comfortable touch sizing through 12-24px padding and 32px pill radii. Research filter chips and blog category chips are larger than standard tags (8-14px padding), making dense taxonomy surfaces usable on touch devices. Form inputs render at 44px height. Links inside body prose receive ~24px line-height which provides comfortable tap rows.

### Collapsing Strategy

- **Nav** collapses from horizontal mega-menu to a compact mobile drawer at 1024px. Sign-in and primary CTA stay visible at all widths
- **Hero media** moves from split cards (wide product + narrow photo) to stacked cards
- **Product/capability grids** collapse from 3 columns to 2 to 1
- **Form fields** collapse from paired rows to single column
- **Research rows** preserve their rule-separated structure but stack metadata below titles on smaller widths
- **Trust-logo strip** collapses from a horizontal row of 6 to a 2-row 3-up grid, then to a 3-row 2-up grid on mobile
- **Hero typography**: 96px → 80px → 72px → 64px → 56px → 48px across breakpoints; tracking scales proportionally

### Image Behavior

- Hero photo cards maintain their 22px radius at every breakpoint
- Abstract 3D media uses `srcset` with multiple resolutions to avoid pixelation on retina
- Trust logos are SVG and remain crisp at all sizes
- Photography in agent-console overlays uses lazy-loading below the fold

## 11. Content & Voice

### Tone

Cohere writes like a senior researcher explaining infrastructure to a senior buyer: precise, declarative, never hedged. The voice is "we know what we're building, you know what you need, the only question is fit." There is no startup-style breathlessness, no AGI hype, no "imagine if" rhetoric. The product *is* the pitch.

### Microcopy patterns

**Primary CTAs**: "Request a demo", "Talk to sales", "Get started", "Read the docs"
**Secondary actions**: "Explore products", "Try the Playground", "View pricing"
**Footer microcopy**: "AI moves fast" — the only flourish in the entire footer

### Error message recipe

`{Field name} is required` for empty fields. `Please enter a valid {field type}` for malformed input. `Something went wrong. Try again or [contact support].` for system errors. Errors appear directly under the field in 12px Unica77 weight 400, color `#b30000`. No icons, no exclamation marks.

### Empty states

Cohere doesn't show empty-state illustrations. The empty-state pattern is a single line of mono-label uppercase text ("NO RESULTS · ADJUST YOUR FILTERS") centered in the content region. Refusal to anthropomorphize is the brand's empty-state design choice.

### CTA verb conventions

- "Request a demo" — primary B2B CTA across the system
- "Talk to sales" — when the buyer is mid-funnel
- "Get started" — for self-serve developer entry (Playground, docs)
- "Read the paper" / "Read the post" — for research and editorial content
- "View pricing" — never "See pricing" (Cohere prefers "View")

The brand avoids "Try" as a verb (sounds tentative), "Sign up" (sounds consumer), and "Discover" (sounds breathless). Action verbs are always concrete and direct.

## 12. Dark Mode & Theming

**Light-only.** Cohere ships no public dark-mode toggle. The page uses dark *bands* (deep green `#003c33` and dark navy `#071829`) inside the white canvas as a structural device, but there is no per-user dark theme. The marketing surface is intentionally light-canvas-only — the dark bands are a publication-design technique (alternating brightness for rhythm), not a theming option.

The in-product Playground and dashboard surfaces use a separate dark theme with `#0e0e10` ground and Unica77 white text, but those tokens are not exposed in the marketing system.

If implementing a Cohere-flavored dark mode, the suggested mapping:
- `bg` → `#0e0e10` (near-black with no warmth)
- `surface` → `#17171c` (current brand color becomes the card surface)
- `text` → `#ffffff`
- `text-muted` → `rgba(255,255,255,0.7)`
- `brand` → `#ffffff` (CTAs invert to white pills with `#0e0e10` text)
- `border` → `rgba(255,255,255,0.12)`
- Deep green and dark navy bands persist as accent surfaces, but feel less special since the page is already dark — use them sparingly

## 13. Lineage & Influences

Cohere's visual lineage runs through **Wired** and **NYT Magazine** for its editorial cadence — the oversized hero declaration paired with small uppercase mono labels and rule-separated research lists is unmistakably magazine-design DNA. Cohere takes this further than most tech companies, allowing the trust-logo strip to be unframed and the section rhythm to be entirely whitespace-driven.

The pill-CTA discipline (32px radius, near-black fill, no border) traces to **HashiCorp** and **Vercel** — both companies use the same near-black pill-on-white pattern as their primary action surface. Cohere differentiates by using a more saturated near-black (`#17171c`) with a faint blue-cool undertone, vs. HashiCorp's slightly warmer near-black.

The action-blue link discipline (`#1863dc`) is borrowed from **Stripe**'s single-confidence-color philosophy, but applied to editorial links rather than CTAs. Cohere's blue is hyperlink-grade rather than brand-grade — it signals "this is a link" rather than "this is the brand."

The deep enterprise green band (`#003c33`) is more singular: it doesn't have an obvious antecedent in tech-marketing. The closest visual cousin is Bloomberg Terminal's green-on-black palette, though Cohere uses it for atmospheric depth rather than data display.

What Cohere rejects: gradient hero backgrounds (the AI-marketing default), playful illustrations (the consumer-AI default), and brand-colored CTAs (the SaaS default). The chrome stays austere; color arrives through photography and content surfaces, not through UI accents.

**Influences:**
- **Wired / NYT Magazine** — Oversized hero + small uppercase mono label editorial cadence — https://www.wired.com
- **HashiCorp** — Enterprise infrastructure restraint — https://www.hashicorp.com
- **Vercel** — Near-black pill CTA on flat white — https://vercel.com
- **Stripe** — Single-confidence action-color discipline — https://stripe.com
- **Anthropic** — AI-research paper-led typographic restraint — https://www.anthropic.com
- **Bloomberg Terminal** — Deep-green-on-black industrial atmosphere — https://www.bloomberg.com/professional/

## 14. Do's and Don'ts

### Do
- Use white canvas as the default surface; introduce dark green or navy as full-width product bands
- Keep primary CTAs pill-shaped (32px radius) and near-black (`#17171c`) on light surfaces
- Use 22px radius on major media cards and placeholders — the Cohere fingerprint
- Use coral (`#ff7759`) for editorial taxonomy and small warm accents only — never as the main CTA color
- Use action blue (`#1863dc`) for inline links inside body prose only — never on CTAs or buttons
- Use monochrome trust logos with vast horizontal spacing — let the negative space do the credibility work
- Use thin-line geometric illustrations for research and capability icons
- Let photography and product mockups carry color, while the UI shell stays restrained
- Default body to 16px Unica77 with 1.5 line-height; reach for 18px body-large only in lead paragraphs
- Use CohereMono uppercase for technical labels with 0.28px tracking
- Reserve 96px CohereText display only for the page-top hero declaration

### Don't
- Don't turn coral or blue into broad decorative surface colors — they are taxonomy and link signals
- Don't add heavy drop shadows to cards — the system is flat by default
- Don't make every section card-based; Cohere often uses unframed rows, rules, and open space
- Don't use rounded cards below 8px for major media — the radius vocabulary starts at 8px and scales up
- Don't replace the display/body type split with one generic sans-serif voice
- Don't render undocumented interaction variants in documentation or previews
- Don't use saturated gradients as normal UI backgrounds; keep gradients media-led
- Don't use bold (700) weight in the chrome — display sits at 400, body at 400-500
- Don't apply pill-shape to non-CTA buttons; outline pills (30px) are the only secondary pill variant
- Don't use cream or warm-shifted whites for the canvas — Cohere's white is cool and clean (`#ffffff`)

## 15. Agent Prompt Guide

### Quick Color Reference
- Page Background: `#ffffff` (Canvas White)
- Primary CTA: `#17171c` (Near-Black) on white text
- Heading text: `#212121` (Ink)
- Body muted: `#616161`
- Action link blue: `#1863dc`
- Coral taxonomy chip: `#ff7759`
- Deep enterprise green band: `#003c33`
- Dark navy band: `#071829`
- Border hairline: `#d9d9dd`
- Warm stone product card: `#eeece7`
- Mono label color: `#212121`

### Example Component Prompts

- "Create a Cohere hero on white canvas. Headline at 96px CohereText weight 400, line-height 1.0, letter-spacing -1.92px, color `#212121`. Subhead at 18px Unica77 weight 400, line-height 1.4, color `#616161`. Single near-black pill CTA (`#17171c` background, `#ffffff` text, 32px radius, padding 12px 24px, 14px Unica77 weight 500). 120px top padding. No gradient, no decorative chrome."

- "Design a Cohere capability card: white background `#ffffff`, no border, 4px radius, 24px padding. Top: thin-line geometric illustration in 1.5px stroke, color `#212121`, ~48px square. Title at 24px Unica77 weight 400, line-height 1.3, color `#212121`. Body at 16px Unica77 weight 400, color `#616161`. Underlined text link at the bottom in 16px Unica77 weight 500, color `#212121` (hover shifts to `#1863dc`). Three cards in a row at desktop, no shadows."

- "Build a Cohere dark feature band: full-width `#003c33` deep green background, padding 80px vertical, 22px radius if contained within page max-width. Section heading at 48px Unica77 weight 400, line-height 1.2, letter-spacing -0.48px, color `#ffffff`. Lead body at 18px Unica77 weight 400, color `rgba(255,255,255,0.85)`. Three inner cards on darker translucent surfaces (`rgba(0,0,0,0.2)` with 1px `rgba(255,255,255,0.12)` border, 8px radius). Each inner card: 24px feature heading + 16px body + thin-line illustration."

- "Create a Cohere trust-logo strip: white canvas, no card chrome, no shadows. Centered eyebrow label in 14px CohereMono uppercase weight 400, letter-spacing 0.28px, color `#75758a` ('TRUSTED BY'). Below it, a single horizontal row of 6 monochrome partner logos at uniform optical height (~32px), with 80px+ horizontal gaps. No borders, no boxes."

- "Design a Cohere blog filter chip row: cream-or-white canvas. Each chip rendered as oversized 32px Unica77 weight 400 text in coral `#ff7759`, with 1px `#ffad9b` border, 8px radius, padding 8px 14px, transparent background. Active chip inverts: `#ff7759` background, `#17171c` text. The chips read as taxonomy declarations rather than utility filters — the oversized type is intentional."

- "Build a Cohere announcement bar: full-width `#000000` background above the nav, 36px height. Centered microcopy at 12px Unica77 weight 400, color `#ffffff`. Inline 'Learn more' link with underline. Small × close icon at far right in `#ffffff`."

### Iteration Guide

1. **Always start from the white canvas.** If you reach for a colored hero background, you are pulling away from the brand. Color arrives through dark bands, photography, and taxonomy chips — never as a chrome wash.
2. **The 22px radius is sacred.** Every signature media card uses 22px. If you find yourself reaching for 12px or 16px on a hero photo card, you've lost the fingerprint. Cards smaller than hero media use 8px; pills use 32px.
3. **Pill CTAs only at 32px radius.** Outline-pill secondary controls use 30px. Anything else (text-only with underline) is the brand's secondary-action pattern. Never a 4-8px CTA.
4. **Three typefaces, three roles, no overlap.** CohereText is display-only (72-96px). Unica77 is everything 14-60px. CohereMono is uppercase technical labels only. Don't reach across.
5. **Hero declaration is one per page.** The 96px CohereText hero appears exactly once, at the top of the page. All subsequent headings step down — `section-heading` 48px is the next available scale. Never a second 96px declaration.
6. **Trust the whitespace.** If a section feels too quiet, you probably have it right. Cohere pages are paced — each section breathes at 80-120px vertical rhythm. Compressing the rhythm reads as anxious.
7. **Coral is taxonomy, blue is link, near-black is CTA.** These three colors have non-overlapping roles. Coral on a CTA reads as "the brand confused itself." Blue on a button reads as "the brand thinks this is Stripe." Near-black on a chip reads as "the brand thinks this is Linear." Stay in lane.
8. **The dark band is a structural device, not decoration.** When you use a `#003c33` deep-green band, the page is announcing "this is a different content layer — a product capability or security claim." If the content doesn't justify that announcement, use a warm-stone (`#eeece7`) section break instead.
