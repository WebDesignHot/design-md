---
name: dbt Labs
tagline: dbt orange #fe6703 over a white analytics-engineering canvas — the data-transformation brand that codes its CTA in ink, not white.
updated_at: 2026-05-30T00:00:00.000Z
published_at: 2026-05-29T21:44:29.497Z
author: webdesignhot
source_url: https://www.getdbt.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [light, sans, structured, data, analytics-engineering, orange-cta, developer]
preview_swatch: ['#ffffff', '#fe6703', '#030711']
related: []
description: 'dbt Labs builds the data-transformation layer that turned "analytics engineering" into a job title, and its marketing system matches that disciplined-but-creative register: a white-first canvas, near-black ink (#030711) for headlines and body, and a single saturated dbt orange (#fe6703) carrying the CTA. The standout calibration is the CTA itself — the orange "Book a demo" button takes near-black text, not white (the orange is too light for white to clear AA), which makes dbt''s primary action read warmer and more editorial than the white-on-color CTAs of most data tools. Type is set in Polymath (display) and Polymath Text (body), a paired type system that gives dbt headlines a structured, slightly literary character distinct from the geometric sans of Snowflake or the DM Sans of Databricks. The system runs on a 12px button radius, a "Get started" white-pill / "Book a demo" orange-pill CTA pair, and a voice anchored in dbt''s own vocabulary — models, lineage, tests, trusted data, the analytics development lifecycle.'


colors:
  bg: '#ffffff'                       # canvas — marketing, docs, product pages
  bg-soft: '#f8fafc'                  # softer surface for nested content
  bg-surface: '#f1f5f9'               # subtle cool-gray card surface on light
  bg-warm: '#fff5ec'                  # soft orange wash — featured callouts, badge bg
  bg-dark: '#030711'                  # near-black band — dark hero / footer ground
  bg-dark-soft: '#0b1220'             # raised dark surface, dark feature cards
  surface: '#f1f5f9'                  # alias of bg-surface
  text: '#030711'                     # ink — display headlines + body emphasis (near-black)
  text-strong: '#0f172a'              # secondary headings on light
  text-body: '#334155'               # default running body on light
  text-slate: '#475569'              # sub-titles, secondary body
  text-muted: '#64748b'              # captions, metadata, breadcrumbs
  text-faint: '#94a3b8'              # disabled, placeholder — decorative only
  text-on-brand: '#030711'           # NEAR-BLACK ink on orange CTA — dbt calibration
  on-brand: '#030711'                # alias — ink, not white, on orange
  text-on-dark: '#ffffff'            # white text on near-black canvas
  on-dark: '#ffffff'                 # alias
  on-dark-muted: '#94a3b8'           # muted text on dark canvas
  brand: '#fe6703'                   # dbt orange — primary CTA, the signature
  brand-hover: '#e85d02'             # deeper orange hover
  brand-pressed: '#cc5302'           # pressed state
  brand-deep: '#b34902'              # deepest orange — used inside illustrations
  brand-soft: '#fff5ec'              # soft orange tint surface
  brand-tint: '#ffe2cc'             # stronger orange tint — badge fill, highlight wash
  accent-cta-white: '#ffffff'        # white pill CTA — "Get started" pairs with orange
  link: '#fe6703'                    # inline links lean on the brand orange
  link-hover: '#cc5302'
  link-ink: '#030711'               # ink links with orange underline on docs
  border: '#e2e8f0'                  # default hairline on light
  border-soft: '#eef2f6'            # softer hairline
  border-strong: '#cbd5e1'          # stronger outline — secondary button
  border-dark: '#1e293b'            # divider on near-black canvas
  semantic-success: '#0f9d58'        # confirmation green — dbt test "pass"
  semantic-warning-bg: '#fff7e0'
  semantic-warning-text: '#7a5a00'
  semantic-error: '#dc2626'          # validation / dbt test "fail"
  semantic-info: '#2563eb'           # info notices

typography:
  display:
    family: 'polymath, "Polymath", Georgia, "Times New Roman", system-ui, -apple-system, sans-serif'
    weights: [400, 500, 600, 700]
  body:
    family: 'polymath-text, "Polymath Text", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"JetBrains Mono", "Fira Code", ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 80, weight: 600, lineHeight: 1.02, tracking: '-0.025em', family: display, notes: 'homepage hero h1 — Polymath display, weight 600 not 700' }
    display-lg:      { size: 64, weight: 600, lineHeight: 1.05, tracking: '-0.02em',  family: display, notes: 'live-probed homepage h1 — 64px / 600 Polymath' }
    h1:              { size: 48, weight: 600, lineHeight: 1.10, tracking: '-0.018em', family: display }
    h2:              { size: 32, weight: 600, lineHeight: 1.18, tracking: '-0.012em', family: display, notes: 'live-probed — 32px / 600 Polymath; white on dark bands' }
    h3:              { size: 24, weight: 600, lineHeight: 1.25, tracking: '-0.005em', family: display }
    h4:              { size: 20, weight: 600, lineHeight: 1.30, tracking: '0',        family: body }
    h5:              { size: 18, weight: 600, lineHeight: 1.35, tracking: '0',        family: body }
    subtitle:        { size: 20, weight: 400, lineHeight: 1.50, tracking: '0',        family: body, notes: 'hero subheads, intro paragraphs' }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.60, tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.60, tracking: '0',        family: body, notes: 'live-probed body — 16px / 400 Polymath Text' }
    body-medium:     { size: 16, weight: 500, lineHeight: 1.60, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    label:           { size: 13, weight: 500, lineHeight: 1.40, tracking: '0',        family: body }
    caption:         { size: 12, weight: 500, lineHeight: 1.40, tracking: '0.01em',   family: body }
    eyebrow:         { size: 12, weight: 600, lineHeight: 1.40, tracking: '0.10em',   family: body, transform: uppercase }
    button:          { size: 15, weight: 600, lineHeight: 1.30, tracking: '0',        family: body }
    code:            { size: 14, weight: 400, lineHeight: 1.60, tracking: '0',        family: mono }
    code-sm:         { size: 13, weight: 400, lineHeight: 1.50, tracking: '0',        family: mono }

radius:
  micro: 2
  sm: 4
  md: 8
  lg: 12
  xl: 16
  xxl: 24
  pill: 9999
  full: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 96, 120]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64

components:
  button-primary:
    backgroundColor: brand
    textColor: on-brand
    rounded: lg
    padding: '12px 20px'
    use: 'every primary CTA — Book a demo. ORANGE bg, NEAR-BLACK ink (not white), 12px radius'
  button-primary-hover:
    backgroundColor: brand-hover
    textColor: on-brand
    rounded: lg
  button-primary-pressed:
    backgroundColor: brand-pressed
    textColor: on-brand
    rounded: lg
  button-primary-disabled:
    backgroundColor: border
    textColor: text-faint
    rounded: lg
  button-white:
    backgroundColor: accent-cta-white
    textColor: text
    rounded: lg
    padding: '12px 20px'
    border: '1px solid border-strong'
    use: 'the white-pill partner CTA — Get started. White bg, near-black ink, 12px radius'
  button-secondary:
    backgroundColor: transparent
    textColor: text
    rounded: lg
    padding: '12px 20px'
    border: '1px solid border-strong'
    use: 'low-commitment pair on light surfaces — Read the docs, Watch demo'
  button-secondary-on-dark:
    backgroundColor: transparent
    textColor: on-dark
    rounded: lg
    padding: '12px 20px'
    border: '1px solid border-dark'
    use: 'outline button over near-black hero / footer band'
  button-ghost:
    backgroundColor: transparent
    textColor: text
    rounded: lg
    padding: '8px 12px'
    use: 'inline ghost — nav menu items, dropdown triggers'
  button-link:
    backgroundColor: transparent
    textColor: link
    use: 'text link — "Explore the docs →"; orange with underline on hover'
  hero-band-light:
    backgroundColor: bg
    textColor: text
    padding: 120
    use: 'homepage hero — white canvas, Polymath 64-80px headline, orange + white CTA pair'
  hero-band-dark:
    backgroundColor: bg-dark
    textColor: on-dark
    padding: 120
    use: 'near-black band — feature spotlight / closing CTA; orange CTA holds its color'
  feature-card:
    backgroundColor: bg
    textColor: text
    rounded: lg
    padding: 32
    border: '1px solid border'
    use: '3-up benefit grid card on white surfaces'
  feature-card-surface:
    backgroundColor: bg-surface
    textColor: text
    rounded: lg
    padding: 32
    use: 'product surface card on subtle cool-gray ground — no border'
  feature-card-dark:
    backgroundColor: bg-dark-soft
    textColor: on-dark
    rounded: lg
    padding: 32
    use: '3-up grid on near-black band — raised dark surface, no border'
  feature-callout-warm:
    backgroundColor: bg-warm
    textColor: text
    rounded: lg
    padding: 32
    use: 'soft orange wash callout — featured releases, "New in dbt" blocks'
  customer-story-card:
    backgroundColor: bg
    textColor: text
    rounded: lg
    padding: 32
    border: '1px solid border'
    use: 'customer story tile — logo + outcome stat + quote'
  pricing-tier-card:
    backgroundColor: bg
    textColor: text
    rounded: lg
    padding: 32
    border: '1px solid border'
    use: 'pricing tier — Developer / Team / Enterprise'
  pricing-tier-card-featured:
    backgroundColor: bg-warm
    textColor: text
    rounded: lg
    padding: 32
    border: '2px solid brand'
    use: 'featured tier — soft warm wash + orange outline as the badge'
  blog-card:
    backgroundColor: bg
    textColor: text
    rounded: lg
    padding: 24
    border: '1px solid border'
    use: 'developer-blog / dbt Developer Blog card — technical credible register'
  badge-pill:
    backgroundColor: brand-tint
    textColor: brand-deep
    rounded: pill
    padding: '4px 10px'
    use: 'NEW, BETA, GA — orange tint chip'
  badge-uppercase:
    backgroundColor: transparent
    textColor: text-strong
    use: 'eyebrow label — uppercase 12px / 600 / 0.10em tracking'
  text-input:
    backgroundColor: bg
    textColor: text
    rounded: md
    padding: '10px 14px'
    height: 44
    border: '1px solid border'
  text-input-focus:
    border: '2px solid brand'
    use: 'focus state — orange border + soft orange ring'
  top-nav:
    backgroundColor: bg
    textColor: text
    height: 64
    use: 'sticky white nav — dbt logo left, menu center, white "Get started" + orange "Book a demo" right'
  footer:
    backgroundColor: bg-dark
    textColor: on-dark-muted
    padding: 96
    use: 'near-black footer — white headings, muted slate links'
  code-block:
    backgroundColor: bg-dark
    textColor: on-dark
    rounded: md
    padding: 20
    use: 'fenced SQL / YAML / Jinja in docs and dev blog'
  cta-band-dark:
    backgroundColor: bg-dark
    textColor: on-dark
    padding: 96
    use: 'pre-footer CTA — near-black with orange "Book a demo" + outline-on-dark pair'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.16, 1, 0.3, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce — transitions reduced to opacity-only at 100ms; section-on-scroll reveals skip translate offset; card hover lifts removed'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: '0 1px 2px rgba(3,7,17,0.04)'
  standard: '0 4px 12px rgba(3,7,17,0.08)'
  elevated: '0 12px 32px rgba(3,7,17,0.12)'
  deep: '0 24px 48px rgba(3,7,17,0.16)'
  ring: '0 0 0 3px rgba(254,103,3,0.30)'
  on-dark: 'none — near-black canvases use brightness-step elevation (#030711 → #0b1220 → #1e293b)'

accessibility:
  contrast-text-on-bg: 20.15               # AAA — #030711 on #ffffff
  contrast-body-on-bg: 10.35               # AAA — #334155 on #ffffff
  contrast-slate-on-bg: 7.58               # AAA — #475569 on #ffffff
  contrast-muted-on-bg: 4.76               # AA — #64748b on #ffffff at body sizes
  contrast-on-brand: 6.86                  # AA (near AAA) — #030711 ink on #fe6703 orange
  contrast-white-on-brand: 2.93            # FAILS — white on orange; dbt uses ink instead
  contrast-brand-on-bg: 2.93               # orange on white — large/decorative only, never body
  contrast-on-dark: 20.15                  # AAA — #ffffff on #030711
  contrast-brand-on-dark: 6.86             # AA — #fe6703 on #030711
  focus-ring: '3px ring rgba(254,103,3,0.30) with 2px offset'
  reduced-motion-honored: true

dark-mode: 'light-first by default. There is no user-facing light/dark toggle on getdbt.com — the page floor is white with near-black ink. Near-black #030711 appears structurally as feature-spotlight bands, the pre-footer CTA band, and the global footer, not as a global theme. The orange CTA holds the same #fe6703 over both white and near-black grounds (its ink label stays near-black on light; on the dark band the orange button keeps ink text and still clears AA because the orange ground is unchanged). The dbt Developer Blog and docs stay white. A future marketing-wide dark theme would map bg → #030711, text → #ffffff, surface → #0b1220, border → #1e293b, with brand → #fe6703 unchanged.'
---

## 1. Visual Theme & Atmosphere

dbt Labs sells the layer of the data stack that turns raw warehouse tables into trusted, tested, documented models — and the marketing system carries that same "structured but human" character. The page floor is **white** (`#ffffff`) with **near-black ink** (`#030711`) for both headlines and body, and the entire identity hangs on a single warm signal: **dbt orange `#fe6703`**. Where the rest of the data category reaches for cool blues (Snowflake cyan, BigQuery blue) or, in Databricks's contrarian case, a saturated red, dbt picked a friendly, slightly retro orange that reads more like a craft tool than an enterprise platform. The orange is the brand the way a single accent runs through a well-designed IDE — sparing, deliberate, and unmistakable when it appears.

The most distinctive calibration on the entire site is hiding in the primary CTA. dbt's orange "Book a demo" button takes **near-black ink text, not white** — because `#fe6703` is light enough that white-on-orange fails contrast (2.93:1) while near-black-on-orange clears AA comfortably (6.86:1). That one decision changes the whole feel of the brand. White-on-color CTAs (Databricks red, Stripe purple) read as corporate and high-contrast; dbt's ink-on-orange button reads warmer, more editorial, almost like a highlighter swipe. It's the small detail that tells you the team thought about the orange as a real color with real luminance, not just a brand swatch dropped into a button component.

Type is set in **Polymath** (display) paired with **Polymath Text** (body) — a two-member type system rather than a single workhorse sans. Polymath gives dbt headlines a structured, slightly literary quality with subtle character that distinguishes them from the geometric neutrality of DM Sans or Inter. The live homepage hero runs **64px / weight 600** with negative tracking; notably dbt stays at **600, not 700**, for display — the headlines feel set and confident without the compressed heaviness of a Databricks hero. Polymath Text carries body at 16px / 400 with a generous 1.6 line-height, which suits dbt's long-form documentation and Developer Blog register.

The page rhythm is **white-first with near-black punctuation**. Most surfaces — homepage above the fold, docs, the Developer Blog, customer stories, pricing — ship white. Near-black `#030711` appears as deliberate punctuation: a feature-spotlight band mid-page, the pre-footer CTA band, and the global footer. On those dark bands, white text takes the headline role (the live probe shows the h2 in white on a dark ground) and the orange CTA holds its exact same color — the orange is luminous enough to pop against near-black without any shift. The dark bands give the eye somewhere to rest and make the orange feel like an event when it lands.

The voice register is **analytics-engineering native**: dbt invented (or at least named and popularized) the discipline, and the copy leans on its own vocabulary — models, lineage, tests, sources, the analytics development lifecycle, "trusted data". The tone sits between developer-tool plainspokenness and a quiet craft pride. It's not the research-paper density of Databricks nor the playful warmth of MongoDB; it's the voice of a team that believes data work should be engineered like software, and writes for practitioners who already agree.

**Key Characteristics:**
- **dbt orange `#fe6703`** — warm, slightly retro saturated orange. The single brand signal, used sparingly. Sharp 12px radius.
- **Ink-on-orange CTA** — the "Book a demo" button uses near-black `#030711` text, NOT white (white fails AA on this orange). The brand's signature calibration.
- **White-first canvas `#ffffff`** with near-black ink `#030711` — 20:1 contrast, editorial clarity.
- **Polymath / Polymath Text** — paired display + text type, structured and slightly literary. Display at weight 600, not 700.
- **Near-black `#030711` punctuation bands** — feature spotlight, pre-footer CTA, footer. White text + orange CTA on dark.
- **CTA pair** — white "Get started" pill + orange "Book a demo" pill, both 12px radius, both near-black ink.
- **12px button radius** — softened rectangle, friendlier than Databricks's 8px, never pill.
- **Analytics-engineering voice** — models, lineage, tests, trusted data, the analytics development lifecycle.
- **Generous body line-height (1.6)** — built for long-form docs and the Developer Blog.
- **Single warm accent in a cool category** — orange where peers chose blue. The positioning move.

## 2. Color Palette & Roles

### Primary
- **Bg / Canvas** (`#ffffff`): The default page floor — marketing, docs, Developer Blog, customer stories, pricing.
- **Bg Soft** (`#f8fafc`): Softer surface for nested content and alternating sections.
- **Bg Surface** (`#f1f5f9`): Subtle cool-gray tint for product / feature cards on light.
- **Bg Warm** (`#fff5ec`): Soft orange wash — featured-release callouts, featured pricing tier, badge backgrounds.
- **Bg Dark** (`#030711`): Near-black band — feature spotlight, pre-footer CTA, footer ground. Same hex as `text`.
- **Bg Dark Soft** (`#0b1220`): Raised dark surface for cards on the near-black band.

### Text / Ink
- **Text / Ink** (`#030711`): Display headlines, body emphasis, dark-band ground. The near-black that doubles as canvas-dark.
- **Text Strong** (`#0f172a`): Secondary headings on light.
- **Text Body** (`#334155`): Default running body on light.
- **Text Slate** (`#475569`): Sub-titles, secondary body.
- **Text Muted** (`#64748b`): Captions, metadata, breadcrumbs.
- **Text Faint** (`#94a3b8`): Disabled and placeholder only — fails AA on white, decorative use only.

### Brand
- **Brand / Primary CTA** (`#fe6703`): dbt orange — the signature action color. Pairs with near-black ink, never white.
- **Brand Hover** (`#e85d02`): Deeper orange on hover.
- **Brand Pressed** (`#cc5302`): Pressed state.
- **Brand Deep** (`#b34902`): Deepest orange — illustration accents, badge text on light tint.
- **Brand Soft** (`#fff5ec`): Soft orange tint surface (callouts, badge bg).
- **Brand Tint** (`#ffe2cc`): Stronger orange tint — badge fill, highlight wash.

### On-Color / On-Dark
- **Text On-Brand** (`#030711`): **NEAR-BLACK ink on the orange CTA** — dbt's defining calibration (NOT white).
- **Accent CTA White** (`#ffffff`): The white-pill partner CTA fill ("Get started") that pairs with the orange button.
- **Text On-Dark** (`#ffffff`): White text on near-black bands.
- **On-Dark Muted** (`#94a3b8`): Muted text on near-black canvas.

### Interactive
- **Link** (`#fe6703`): Inline links lean on the brand orange (with underline on hover).
- **Link Hover** (`#cc5302`): Pressed link state.
- **Link Ink** (`#030711`): Ink link with an orange underline — the docs/long-form link form where orange-on-white would be too low-contrast for body size.

### Borders
- **Border** (`#e2e8f0`): Default 1px hairline on light.
- **Border Soft** (`#eef2f6`): Lighter hairline.
- **Border Strong** (`#cbd5e1`): Stronger outline — secondary / white-pill button.
- **Border Dark** (`#1e293b`): Divider on near-black canvas.

### Shadow Colors
- **Ambient** (`rgba(3,7,17,0.04)`): Barely-visible card shadow.
- **Standard** (`rgba(3,7,17,0.08)`): Default elevated card.
- **Elevated** (`rgba(3,7,17,0.12)`): Floating popovers, dropdowns.
- **Deep** (`rgba(3,7,17,0.16)`): Modals, dialogs.
- Dark canvases use **brightness-step elevation** (`#030711` → `#0b1220` → `#1e293b`) — shadows are invisible on near-black.

### Semantic
- **Success** (`#0f9d58`): Confirmation green — reads naturally as dbt test "pass".
- **Warning Bg** (`#fff7e0`) / **Warning Text** (`#7a5a00`): Caution callouts — kept yellow-warm so they don't read as the brand orange.
- **Error** (`#dc2626`): Validation errors, dbt test "fail". Cooler red, distinct from the warm brand orange.
- **Info** (`#2563eb`): Info notices — the one cool-blue in the system.

## 3. Typography Rules

### Font Family
- **Display**: `polymath, "Polymath", Georgia, "Times New Roman", system-ui, -apple-system, sans-serif`. Polymath carries all headline roles — a structured, slightly literary display face that gives dbt headlines character beyond a neutral grotesk.
- **Body**: `polymath-text, "Polymath Text", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`. Polymath Text is the reading companion to Polymath — optimized for long-form docs and Developer Blog paragraphs.
- **Mono**: `"JetBrains Mono", "Fira Code", ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace`. For fenced SQL, YAML, and Jinja in docs and code samples.
- **Substitutes**: If Polymath / Polymath Text are unavailable, the closest open-source pairing is **Inter** for body and a slightly literary display like **Fraunces** or **Newsreader** for headlines if the editorial register matters; for a safer all-sans fallback, **Inter** alone works (apply -0.02em tracking at display sizes to approximate Polymath's set feel). All are Google Fonts.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display-hero | Polymath | 80 | 600 | 1.02 | -0.025em | — | Largest hero (campaign pages) |
| display-lg | Polymath | 64 | 600 | 1.05 | -0.02em | — | **Live-probed homepage hero h1** |
| h1 | Polymath | 48 | 600 | 1.10 | -0.018em | — | Major section heads |
| h2 | Polymath | 32 | 600 | 1.18 | -0.012em | — | **Live-probed** — white on dark bands |
| h3 | Polymath | 24 | 600 | 1.25 | -0.005em | — | Card titles, feature heads |
| h4 | Polymath Text | 20 | 600 | 1.30 | 0 | — | Inline emphasis heads |
| h5 | Polymath Text | 18 | 600 | 1.35 | 0 | — | Smallest heading |
| subtitle | Polymath Text | 20 | 400 | 1.50 | 0 | — | Hero subheads, intro paragraphs |
| body-lg | Polymath Text | 18 | 400 | 1.60 | 0 | — | Developer Blog body, long-form |
| body | Polymath Text | 16 | 400 | 1.60 | 0 | — | **Live-probed default body** |
| body-medium | Polymath Text | 16 | 500 | 1.60 | 0 | — | Body emphasis |
| body-sm | Polymath Text | 14 | 400 | 1.55 | 0 | — | Footer body, secondary copy |
| label | Polymath Text | 13 | 500 | 1.40 | 0 | — | Form labels, inline tags |
| caption | Polymath Text | 12 | 500 | 1.40 | 0.01em | — | Image captions, fine print |
| eyebrow | Polymath Text | 12 | 600 | 1.40 | 0.10em | uppercase | Uppercase section labels |
| button | Polymath Text | 15 | 600 | 1.30 | 0 | — | CTA labels |
| code | JetBrains Mono | 14 | 400 | 1.60 | 0 | — | Fenced SQL / YAML / Jinja |
| code-sm | JetBrains Mono | 13 | 400 | 1.50 | 0 | — | Inline code tokens |

### Principles
- **Display stays at weight 600, not 700.** Unlike Databricks's heavy 700 hero, dbt holds display at 600. The lighter display weight keeps Polymath's structured character legible and reads "considered" rather than "shouting" — appropriate for a craft tool.
- **Two-member type system.** Polymath (display) + Polymath Text (body) is a deliberate pairing, not a single family. Headlines and body have distinct optical tuning; respect the split — display roles use Polymath, body roles use Polymath Text.
- **Negative tracking scales with size**: -0.025em at 80px, -0.02em at 64px, easing to 0 by 20px. The tracking is what makes Polymath headlines feel set rather than typed.
- **Body line-height 1.6** — generous, built for dbt's heavy documentation and long-form Developer Blog. Looser than the typical 1.5 SaaS body; the extra leading keeps technical paragraphs scannable.
- **Eyebrow labels at 0.10em tracking, uppercase, 12px / 600.** Wide tracking signals "technical caption" — section markers like "PRODUCT", "WHY DBT", "CUSTOMERS".
- **Button labels at 15px / 600.** Slightly larger than the typical 14px to give the warm CTA presence and to keep the near-black ink legible on the orange ground.
- **JetBrains Mono for code.** dbt's surface is dense with SQL, YAML, and Jinja — a mono with ligatures and clear glyph distinction matters for code samples.
- **No swapping families across roles.** Don't set body in Polymath display or headlines in Polymath Text; the pairing is the brand.

## 4. Component Stylings

### Buttons (5 variants)

**`button-primary`** — The signature dbt orange CTA. Background `#fe6703`, text **`#030711` near-black ink (NOT white)**, type 15px / 600 Polymath Text, padding 12×20px, **12px radius**. Used on every primary action: "Book a demo", "Talk to sales", "Get a demo".
- *Hover*: Background deepens to `#e85d02` over 150ms; no transform (or optional `translateY(-1px)`).
- *Pressed*: Background drops to `#cc5302` over 80ms.
- *Disabled*: Background `#e2e8f0`, text `#94a3b8`.
- *On-dark*: The same orange holds over near-black bands — the orange is luminous enough that no color shift is needed, and the ink label still clears AA against the unchanged orange ground.

**`button-white`** — The white-pill partner CTA ("Get started"). Background `#ffffff`, text `#030711` near-black, 1px `#cbd5e1` border, 12px radius, same 12×20px padding. This pairs to the *left* of the orange button in the nav and hero — the two-CTA pattern (white "Get started" + orange "Book a demo") is the brand's repeated signal.

**`button-secondary`** — Transparent with `#cbd5e1` border, text `#030711`, 12px radius, 12×20px padding. Low-commitment pair on light surfaces — "Read the docs", "Watch demo".

**`button-secondary-on-dark`** — Transparent with `#1e293b` border, text `#ffffff`, 12px radius. Used over near-black hero / CTA bands.

**`button-ghost`** — Inline ghost. Transparent, text `#030711`, smaller padding (8×12px), 12px radius. Nav menu items, dropdown triggers, table-row actions.

**`button-link`** — Text link: orange `#fe6703` with underline on hover. Body-medium 16 / 500. The "Explore the docs →" pattern. (On long-form/docs body, prefer `link-ink` — near-black text with an orange underline — since orange-on-white at body size is low-contrast.)

### Cards

**`hero-band-light`** — Homepage hero. White canvas (`#ffffff`), near-black ink, 120px vertical padding. Polymath headline (64-80 / 600) + 20px Polymath Text subtitle + the white "Get started" / orange "Book a demo" CTA pair. Product mockup (a dbt project / lineage graph) floats right or below.

**`hero-band-dark`** — Feature-spotlight / closing band. Near-black canvas (`#030711`), white headline (live h2 is white on dark), 120px padding. The orange CTA holds its color over the dark ground.

**`feature-card`** — 3-up benefit grid card on white. White background, 12px radius, 32px padding, 1px `#e2e8f0` border. Icon glyph (near-black or orange), h3 title (24 / 600), body description (16 / 400 `#334155`).

**`feature-card-surface`** — Product surface card on subtle cool-gray ground `#f1f5f9`, 12px radius, 32px padding, no border. Used in product-feature grids.

**`feature-card-dark`** — 3-up grid on the near-black band. Background `#0b1220` (raised dark surface), white text, 12px radius, 32px padding, no border.

**`feature-callout-warm`** — Soft orange wash callout. Background `#fff5ec`, near-black text, 12px radius, 32px padding. "New in dbt", featured-release blocks, beta-program callouts.

**`customer-story-card`** — Customer story tile. White, 12px radius, 32px padding, 1px `#e2e8f0` border. Customer logo at top, h3 outcome stat ("90% faster to trusted data"), 1-line quote in body-medium, "Read the story →" link.

**`code-block`** — Fenced SQL / YAML / Jinja in docs and the Developer Blog. Background `#030711` near-black, white text in JetBrains Mono 14 / 400 / 1.6, 8px radius, 20px padding. Syntax highlighting can use a warm accent (orange for keywords) to tie to the brand.

### Pricing (3-tier)

**`pricing-tier-card`** — Developer / Team / Enterprise. White, 12px radius, 32px padding, 1px `#e2e8f0` border. Tier name in h4, price in h2 (32 / 600), feature checklist in body, full-width orange CTA at bottom (ink-on-orange).

**`pricing-tier-card-featured`** — Featured tier (typically Team). **Soft warm wash `#fff5ec` background + 2px `#fe6703` orange outline** — the warm tint and orange border are the "most popular" badge. The orange CTA stays orange.

### Blog / Developer Blog

**`blog-card`** — dbt Developer Blog tile. White, 12px radius, 24px padding, 1px `#e2e8f0` border. Optional 16:9 thumbnail, category tag pill (`#fff5ec` bg, `#b34902` text), post title in h4 (20 / 600), author + date meta in body-sm `#64748b`. Technically-credible register.

### Badges & Pills

**`badge-pill`** — "NEW", "BETA", "GA". Background `#ffe2cc` orange tint, text `#b34902` deep orange, full pill (9999px), 4×10px padding, type eyebrow (12 / 600 / 0.10em / uppercase).

**`badge-uppercase`** — Section eyebrow. Transparent, text `#0f172a`, type eyebrow (12 / 600 / 0.10em).

### Inputs / Forms

**`text-input`** — White, 8px radius, 10×14px padding, 44px height, 1px `#e2e8f0` border. Body 16 / 400, placeholder `#94a3b8`.

**`text-input-focus`** — Border thickens to 2px solid `#fe6703` (the brand orange functions as the focus accent) plus an outer 3px `rgba(254,103,3,0.30)` ring.

### Navigation

**`top-nav`** — 64px-tall sticky white bar. dbt logo anchors the left; horizontal menu (Product / Why dbt / Pricing / Resources / Docs) center; the **white "Get started" pill + orange "Book a demo" pill** on the right — the two-CTA pair is the brand's most repeated chrome element. Stays white on every page.

**`footer`** — Near-black ground (`#030711`), white headings, `#94a3b8` muted slate links. Multi-column — Product / Solutions / Resources / Community / Company / Legal. 96px vertical padding.

### CTA Band

**`cta-band-dark`** — Pre-footer CTA. Near-black (`#030711`), white headline + subhead, 96px padding, orange "Book a demo" + outline-on-dark "Read the docs" pair. The orange holds against the near-black ground.

## 5. Layout Principles

### Spacing System
Base unit **4px**. Tokens: `xxs:4 · xs:8 · sm:12 · md:16 · lg:20 · xl:24 · xxl:32 · xxxl:40 · section-sm:48 · section:64 · section-lg:96 · hero:120`. Section padding alternates: 64px between minor bands, 96px between major bands, 120px for hero spaces. Card internal padding: 24px blog card, 32px feature / product / pricing / customer-story card.

### Grid & Container
- **Max content width**: 1280px centered, with 32px horizontal breathing room on desktop, 24px tablet, 16px mobile.
- **Hero**: Full-width band, 120px padding, type column constrained to ~720px with the product mockup / lineage graph floating right or below.
- **3-up feature card grid**: 3 columns desktop, 2 tablet, 1 mobile.
- **4-up benefit grid**: 4 columns desktop on benefit-heavy pages.
- **Pricing tier grid**: 3-up at desktop with the featured tier (Team) highlighted by warm wash + orange outline.
- **Customer logo wall**: 6-up desktop, 3-up tablet, 2-up mobile; monochrome SVGs at unified height (~28px).
- **Developer Blog / docs**: Single-column prose ~720px wide with full-width code blocks breaking out of the prose column.

### Whitespace Philosophy
The white-first canvas needs generous breathing room. Section padding sits at 96–120px on major bands. The white space is what lets the warm orange CTA land as a moment rather than a button — orange-on-white at tight padding reads busy; orange-on-white at 120px padding reads confident. dbt's restraint with the orange (one or two instances per viewport) is half the brand; the whitespace is the other half.

### Section Cadence
Homepage rhythm: white hero band (orange + white CTA pair) → customer logo wall (white) → 3-up feature card grid (light surface) → near-black feature-spotlight band (white text, orange CTA) → 3-up benefit grid (white) → customer story strip (white) → near-black pre-footer CTA band → near-black footer. The single near-black appearance mid-page provides rest before returning to white, then the page closes dark.

## 6. Shapes & Radius Scale

| Tier | Token | Value | Use |
|---|---|---|---|
| Micro | micro | 2px | Inline tags inside data tables, dense cells |
| Standard | sm | 4px | Compact rows, dense badges |
| Comfortable | md | 8px | Form inputs, code blocks |
| Large | lg | 12px | **Buttons** (primary, white, secondary, ghost), feature / product / pricing / customer-story cards |
| XL | xl | 16px | Hero illustration containers |
| XXL | xxl | 24px | Decorative containers (rare) |
| Pill | pill | 9999px | Badges, status pills, NEW/BETA/GA chips |

The **12px radius on every button** is dbt's signature shape choice — softer than Databricks's 8px engineered corner, friendlier without going to the full pill. The 12px feels like a craft tool: rounded enough to be warm, square enough to be serious. Pill radius is **reserved for badges only**; a pill button would read as wrong for dbt, drifting toward consumer-app aesthetics.

Cards also sit at 12px to match the buttons — the system speaks one rounded-rectangle language. Inputs and code blocks step down to 8px to feel slightly tighter and more "field-like".

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No shadow | Body sections, top nav (until scrolled), near-black bands |
| 1 — Ambient | `0 1px 2px rgba(3,7,17,0.04)` | Sticky nav after scroll |
| 2 — Standard | `0 4px 12px rgba(3,7,17,0.08)` | Default elevated cards (feature, product, pricing, customer story) |
| 3 — Elevated | `0 12px 32px rgba(3,7,17,0.12)` | Floating popovers, dropdowns, nav mega-menu |
| 4 — Deep | `0 24px 48px rgba(3,7,17,0.16)` | Modals, dialogs, full-screen forms |
| 5 — Brightness-step | `#030711` → `#0b1220` → `#1e293b` | Near-black canvas elevation — no shadow |

### Shadow Philosophy
Light surfaces use **ink-tinted shadows** (near-black at very low alpha) rather than pure black — they echo the brand's ink color and stay soft. Near-black bands use **brightness-step elevation**: shadows are invisible on near-black, so the system layers via `#030711` → `#0b1220` → `#1e293b`. Customer logo cells sit flat — they read as a credibility wall, not interactive surfaces.

No glow effects, no gradient overlays on cards, no neumorphism. The closest decorative depth is the dbt project / lineage-graph mockup inside hero bands, which carries its own internal UI depth (nodes, edges, model cards). Surrounding containers stay quiet.

## 8. Interaction & Motion

### Easing Curves
- **Standard ease**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for color, border, opacity transitions on buttons, links, form fields.
- **Emphasized ease**: `cubic-bezier(0.16, 1, 0.3, 1)` — section-on-scroll reveals, lineage-graph animations, card hover lift.

### Duration Buckets
- **Fast (150ms)**: Color transitions on hover, focus ring, link hover.
- **Standard (240ms)**: Card hover lift, button press feedback, dropdown opens, mega-menu reveal.
- **Slow (320ms)**: Mockup / lineage-graph reveal, modal entrance, hero illustration animation.

### Per-Component Micro-States
- **Button hover (primary)**: Background deepens `#fe6703` → `#e85d02` over 150ms; optional `translateY(-1px)`. The ink label stays put.
- **Button press**: Background drops to `#cc5302` over 80ms.
- **Button hover (white / secondary)**: Border shifts `#cbd5e1` → `#94a3b8` over 150ms; subtle bg tint to `#f8fafc`.
- **Card hover (feature)**: Card lifts `translateY(-2px)` over 240ms; shadow intensifies standard → elevated.
- **Customer story card hover**: Card lifts `translateY(-2px)`; outcome stat may subtly scale `scale(1.02)`.
- **Link hover**: Orange underline appears / color shifts `#fe6703` → `#cc5302` over 150ms.
- **Input focus**: Border recolors `#e2e8f0` → 2px `#fe6703` over 150ms; outer 3px `rgba(254,103,3,0.30)` ring appears.
- **Lineage graph**: Edges may animate in sequence (data flowing through models) over 320ms emphasized ease — a brand-appropriate "dbt builds lineage" motif.

### Page Transitions
Standard browser navigation. Section-on-scroll reveals are a 320ms fade-in-up (24px offset) gated by `IntersectionObserver`. Feature card grids stagger in left-to-right with 80ms increments. Lineage-graph mockups may animate edge-by-edge on first reveal.

### Reduced Motion
`prefers-reduced-motion: reduce` honored: all transforms removed, transitions reduced to opacity-only at 100ms, lineage-graph edge animation disabled (graph renders static), card hover lifts removed, mega-menu opens instantly, customer-story stat scale removed.

## 9. Accessibility & A11y

### Contrast Pairs
- **Text on bg**: `#030711` on `#ffffff` = **20.15** — AAA at every size.
- **Body on bg**: `#334155` on `#ffffff` = **10.35** — AAA at body sizes.
- **Slate on bg**: `#475569` on `#ffffff` = **7.58** — AAA at body sizes.
- **Muted on bg**: `#64748b` on `#ffffff` = **4.76** — AA at body sizes; do not use below 14px.
- **Ink on brand**: `#030711` on `#fe6703` = **6.86** — AA (near AAA). This is the dbt CTA calibration — near-black ink on orange.
- **White on brand**: `#ffffff` on `#fe6703` = **2.93** — **FAILS** AA. This is exactly why dbt uses ink, not white, on its orange CTA. Never put white text on the orange.
- **Brand on bg**: `#fe6703` on `#ffffff` = **2.93** — orange text on white fails AA at body size. Reserve orange text for large display / decorative use; use ink-with-orange-underline for inline links.
- **On-dark on bg-dark**: `#ffffff` on `#030711` = **20.15** — AAA.
- **Brand on dark**: `#fe6703` on `#030711` = **6.86** — AA. The orange is legible on near-black.

### Focus Indicators
Every focusable element shows a **3px ring at `rgba(254,103,3,0.30)`** with 2px offset — the brand orange as a translucent focus halo. On the orange CTA itself, the focus ring renders as a 2px near-black inset outline + the 3px translucent orange outer ring (a solid orange ring would disappear against the orange button).

### ARIA Patterns
- **Buttons**: Native `<button>` elements; `aria-label` only when icon-only.
- **Pricing comparison**: `<table>` with `<thead>` and `<th scope="row">`; featured tier column uses `aria-label="Most popular plan"`.
- **Feature card grid**: `<article>` per card with `aria-labelledby` referencing the card title.
- **Customer story cards**: `<article>` wrapping logo + outcome stat + quote, with `<blockquote>` for the quote.
- **Code blocks**: `<pre><code>` with `aria-label` describing the language ("SQL example", "dbt model YAML", "Jinja macro").
- **Navigation**: `<nav aria-label="Primary">`; mega-menu uses `aria-expanded` and `aria-controls`; mobile drawer traps focus.
- **Lineage graph**: Wrapped in `<figure>` with `<figcaption>` describing the data flow ("Lineage graph showing staging models feeding marts").

### Keyboard Navigation
Tab order follows visual reading order. Skip-link at top jumps to `<main>`. Mobile nav drawer traps focus when open; Escape closes. Mega-menu opens on Enter/Space, closes on Escape, arrow keys navigate within. Pricing comparison headers use `<th scope="col">`.

### Screen Reader Hints
Lineage-graph mockups use descriptive `alt` / `figcaption`. Customer logos use `alt` with the customer name. The dbt logo in nav uses `aria-label="dbt home"`. Code blocks include `<span class="sr-only">Code example in [language]:</span>` prefixes. Outcome stats on customer cards use `aria-label` spelling out the figure.

### Reduced Motion Handling
All transforms removed. Card hover lifts removed. Lineage-graph edge animation disabled (static render). Mega-menu opens instantly. Section-on-scroll reveals become static. Customer-story stat scale removed.

## 10. Responsive Behavior

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Hero h1 64→36px; lineage-graph mockup stacks below type column; nav collapses to hamburger (orange "Book a demo" CTA stays visible); feature grid stacks 1-up; logo wall reflows to 2-up |
| Tablet | 640–1024px | Hero h1 48px; mockup right-aligned; 3-up feature grid → 2-up; logo wall 3-up; pricing tier grid 2-up with horizontal scroll for comparison table |
| Desktop | 1024–1280px | Full hero h1 64px; 3-up feature grid; 3-up pricing; 6-up logo wall; 4-up benefit grid |
| Wide | > 1280px | Content caps at 1280px; outer breathing room expands; hero mockup gains additional right gutter |

### Touch Targets
- Primary CTA: 44px height (12px padding × 2 + 15px line-height area + buffer). Meets WCAG AA.
- Feature card CTAs: full-width on mobile to maximize touch area.
- Pricing comparison rows: 44px minimum via padding.
- Mega-menu items: 44px row height on mobile drawer.

### Collapsing Strategy
Top nav collapses to hamburger below 1024px; the orange "Book a demo" CTA stays visible in the bar (right of the hamburger) even when the menu collapses — the orange CTA is the non-negotiable element; the white "Get started" pill may move into the drawer. Feature grid: 3 → 2 → 1. Pricing tier grid: 3 → 2 → 1; comparison table converts to horizontally-scrollable swipe with sticky plan headers.

### Image Behavior
dbt project / lineage-graph mockups retain native aspect ratios; horizontal scroll preserved on mobile. Customer logos stay at native widths; logo wall reflows to 2 rows on mobile. Developer Blog images cap at prose-width on small screens, break out to full container on desktop.

## 11. Content & Voice

### Tone
**Analytics-engineering native, practitioner-credible, quietly opinionated.** dbt writes for data engineers, analytics engineers, and data team leads — people who already believe data work should be engineered like software. Headlines describe outcomes and discipline ("Deliver trusted data", "Transform data in your warehouse"); body copy leans on dbt's own vocabulary (models, sources, tests, lineage, the analytics development lifecycle). The voice sits between developer-tool plainspokenness and craft pride — not the research-paper density of Databricks, not the playful warmth of MongoDB. dbt invented the category's language and writes like it.

### Microcopy Patterns
- **CTA verbs**: "Book a demo", "Get started", "Talk to sales", "Read the docs", "Explore dbt". Never "Start your journey" or "Unlock the power of".
- **Section labels**: 12px uppercase eyebrow at 0.10em tracking — "PRODUCT", "WHY DBT", "CUSTOMERS", "TRUSTED DATA".
- **Feature titles**: Capability-led — "Build models", "Test your data", "Document lineage", "Ship with confidence".
- **Customer story headlines**: Outcome-led — "How [company] cut time-to-trusted-data by 90%" not "[company] loves dbt".

### Empty States
A single line in `text-muted` ("No results for 'foo' — try a broader search term") with a brand-orange link (or ink-with-orange-underline) to a default landing page. Never apologetic; always action-oriented — the docs/search empty states match dbt's practitioner register.

### Error Messages
Short, declarative, technically specific — mirroring dbt's own CLI error register. "Compilation error in model `stg_orders` — column `order_id` not found in source" rather than "Oops, something went wrong". Errors carry an icon in `#dc2626` and inline guidance, often with a code snippet for resolution.

### Success Confirmations
Single-line toast in `text` over `surface` with a `success` (`#0f9d58`) accent stripe at the left — reads naturally as a dbt test "pass". "12 models built, 34 tests passed" rather than "Hooray!". The success green stays separate from the brand orange so confirmations don't compete with CTAs.

### CTA Verb Conventions
The brand prefers declarative present-imperative verbs and its own nouns: "Book a demo", "Get started", "Read the docs". Pricing CTAs add specificity: "Start for free", "Contact sales". dbt leans on its vocabulary rather than generic SaaS phrasing — "trusted data", "analytics engineering", "the analytics development lifecycle" — which signals "this is a discipline, not just a tool".

## 12. Dark Mode & Theming

dbt's marketing site is **light-first by default** — the page floor is white with near-black ink, and there is no user-facing light/dark toggle on getdbt.com. Near-black `#030711` appears **structurally, not as a theme**: a feature-spotlight band mid-page, the pre-footer CTA band, and the global footer ship near-black, while the homepage above the fold, docs, the Developer Blog, customer stories, and pricing stay white. The dark bands are punctuation, providing visual rest and making the closing CTA land harder.

The **orange CTA holds the same `#fe6703` over both white and near-black grounds**. Its near-black ink label stays near-black on white, and on the dark band the orange button keeps its ink text because the orange ground itself is unchanged (ink-on-orange clears AA regardless of what's behind the button). No color shift is needed between light and dark surfaces — the orange is luminous enough to carry both.

The dbt Cloud product (the IDE / web app behind login) ships its own theme system separate from this marketing spec, including a developer-friendly dark editor theme. The marketing site doesn't expose those product theme tokens.

If a future marketing-wide dark theme shipped, the natural mapping would be: bg → `#030711`, text → `#ffffff`, surface → `#0b1220`, border → `#1e293b`, code-block stays `#030711` (already dark), and **brand stays `#fe6703` with ink-on-orange CTAs** unchanged. Feature and pricing cards would move to `#0b1220` backgrounds with `#1e293b` borders.

## 13. Lineage & Influences

dbt's visual identity makes a quiet but deliberate positioning move: **warm where the data category is cool**. Snowflake staked the data-cloud space in cyan blue; BigQuery and Redshift live in cloud-provider blues; Databricks went contrarian with red. dbt picked a friendly, slightly retro **orange `#fe6703`** that reads more like a craft developer tool than an enterprise data platform — fitting, because dbt grew bottom-up through practitioners (the analytics-engineering community) rather than top-down through enterprise procurement. The orange signals approachability and craft, and the ink-on-orange CTA calibration reinforces that warmer, more editorial register.

The brand descends from the **developer-tooling and open-source lineage** rather than the enterprise-data one. dbt began as an open-source command-line tool (dbt Core) that practitioners adopted because it brought software-engineering practice — version control, testing, modularity, CI — to analytics work. That heritage shows in the voice (practitioner-credible, opinionated about discipline) and in the visual system's restraint: a single accent, generous whitespace, type that respects long-form reading. The Polymath / Polymath Text pairing places dbt in a slightly more literary typographic neighborhood than its peers' geometric sans, giving headlines character that matches the brand's craft-pride tone.

The light-first canvas with near-black punctuation bands echoes the cleaner end of modern developer-tool marketing (Vercel, Linear, Stripe's docs surfaces) more than enterprise-data marketing — confident whitespace, a single warm accent, and dark bands used as deliberate rest rather than as a global theme. What dbt rejects is equally telling: it avoids the cool-blue gradient chrome of the data-cloud category, avoids white-on-color CTAs (its ink-on-orange is the tell), and avoids the heavy 700-weight hero type of enterprise platforms in favor of a lighter, set 600.

- **Snowflake** — Category peer; the warm-vs-cool contrast (dbt orange vs Snowflake cyan) is part of dbt's positioning in the data stack. https://www.snowflake.com
- **Databricks** — Peer data-platform brand with a similar single-accent / light-first / dark-band discipline, but white-on-color CTAs and an 8px engineered button radius where dbt uses ink-on-orange and 12px. https://www.databricks.com
- **Vercel** — Developer-tool marketing reference: light-first canvas, generous whitespace, near-black punctuation bands, restrained accent use. https://vercel.com
- **Stripe** — Developer-credible documentation register and disciplined component system that dbt's docs and Developer Blog echo. https://stripe.com
- **Linear** — Craft-tool aesthetic with a single accent and editorial restraint, a contemporary dbt's marketing surface visually rhymes with. https://linear.app

## 14. Do's and Don'ts

### Do
- Use **dbt orange `#fe6703`** as the primary CTA color — "Book a demo", "Talk to sales".
- Put **near-black ink `#030711` on the orange CTA**, never white. The orange is too light for white to clear AA; ink-on-orange is the brand calibration.
- Pair the orange "Book a demo" with the **white "Get started" pill** — the two-CTA pair is the brand's repeated chrome signal.
- Use **12px radius on every button and card** — softened rectangle, friendlier than 8px, never pill.
- Keep the page **white-first** with near-black ink; reserve near-black `#030711` for feature-spotlight, pre-footer CTA, and footer bands.
- Set display headlines in **Polymath at weight 600** (not 700) with negative tracking — the lighter set weight is the brand.
- Set body in **Polymath Text at 16px / 400 / 1.6 line-height** — the generous leading suits dbt's long-form docs.
- Use the soft orange wash `#fff5ec` for featured-release callouts and the featured pricing tier.
- Use the brand orange as the **focus accent** (2px border + 3px translucent ring) on inputs.
- Lean on dbt's vocabulary in copy — models, lineage, tests, trusted data, the analytics development lifecycle.
- Use **JetBrains Mono** for fenced SQL / YAML / Jinja; dbt's surface is code-dense.
- Apply brightness-step elevation on near-black bands (`#030711` → `#0b1220` → `#1e293b`); shadows are invisible on dark.

### Don't
- Don't put **white text on the orange CTA** — it fails AA (2.93:1). This is the single most important dbt rule.
- Don't use **orange text on white at body size** — orange-on-white is 2.93:1 and fails. Use ink with an orange underline for inline links.
- Don't use **pill-radius buttons**. Every button is 12px radius. Pill is for badges only.
- Don't push display type to **weight 700** — dbt holds display at 600. The lighter set weight is intentional.
- Don't swap **Polymath display for Polymath Text** (or vice versa) across roles — the two-member type pairing is the brand.
- Don't introduce **cool-blue gradient chrome** — that's the data-cloud category's lane (Snowflake). dbt's warmth is the differentiator.
- Don't apply **box-shadow elevation on near-black bands** — shadows are invisible. Use brightness-step `#0b1220`.
- Don't put **two orange CTAs in the same viewport** competing. One orange action per band; restraint gives the orange its power.
- Don't bold body text beyond **weight 500**. Body emphasis is `body-medium` (500); display carries the heavier feel.
- Don't use the **warning yellow or success green as decorative accents** — keep semantic colors semantic so they don't read as the brand orange.
- Don't replace the orange with **red or amber** — `#fe6703` is the brand orange; a redder shade drifts toward Databricks, a yellower one toward warning.
- Don't repeat the **dark-band treatment in two consecutive sections** — cadence needs alternation: white feature grid → near-black spotlight → white story strip → near-black CTA.

## 15. Agent Prompt Guide

### Quick Color Reference
```
Bg / Canvas:     #ffffff (white — marketing, docs, Developer Blog, pricing)
Bg Warm:         #fff5ec (soft orange wash — callouts, featured tier, badge bg)
Bg Surface:      #f1f5f9 (subtle cool-gray product card surface)
Bg Dark:         #030711 (near-black — feature spotlight, pre-footer CTA, footer)
Text / Ink:      #030711 (near-black — headlines + body emphasis)
Body:            #334155 (slate body running-text)
Muted:           #64748b (captions, metadata)
Brand:           #fe6703 (dbt orange — primary CTA only)
Brand Hover:     #e85d02 (deeper orange on hover)
On-Brand:        #030711 (NEAR-BLACK ink on orange CTA — NOT white)
White CTA:       #ffffff (the "Get started" pill that pairs with orange)
Border:          #e2e8f0 (1px hairline)
Link (inline):   #030711 ink with #fe6703 orange underline (body); #fe6703 for display links
```

### Example Component Prompts

1. "Create a hero band on `#ffffff` white canvas with a Polymath 64px / 600 / -0.02em near-black headline ('Deliver trusted data with dbt'), 20px / 400 `#334155` Polymath Text subtitle, and a CTA pair: a white 'Get started' pill (`#ffffff` bg, `#030711` ink, 1px `#cbd5e1` border, 12px radius) on the left and an orange 'Book a demo' pill (`#fe6703` bg, `#030711` NEAR-BLACK ink — not white, 12px radius, 12×20px padding, Polymath Text 15 / 600) on the right. 120px vertical padding. A dbt lineage-graph mockup floats right."

2. "Build a 3-up feature card grid on `#ffffff` canvas: each card white, 12px radius, 32px padding, 1px `#e2e8f0` border. Each card carries an icon glyph, an h3 title (Polymath 24 / 600 / -0.005em — 'Build models', 'Test your data', 'Document lineage'), a 2-line body description (16 / 400 `#334155` Polymath Text), and an 'Explore →' link (near-black ink with `#fe6703` orange underline)."

3. "Compose a 3-tier pricing layout: Developer / Team / Enterprise. Each card white, 12px radius, 32px padding, 1px `#e2e8f0` border. The featured Team tier uses a soft warm wash `#fff5ec` background with a 2px `#fe6703` orange outline as the badge (no 'Most popular' pill). Plan name in h4, price in h2 (Polymath 32 / 600), feature checklist in body, full-width orange CTA at bottom (`#fe6703` bg, `#030711` ink, 12px radius)."

4. "Design a near-black feature-spotlight band: `#030711` background, white Polymath 32px / 600 headline, 18px / 400 `#94a3b8` subtitle, and the orange 'Book a demo' CTA (`#fe6703` bg, `#030711` ink — the orange holds its color over the dark band) paired with an outline-on-dark 'Read the docs' button (transparent, white text, 1px `#1e293b` border, 12px radius). 96px padding. Raised dark feature cards (`#0b1220`) below."

5. "Build a top nav: 64px-tall sticky white bar. dbt logo on the left, horizontal menu (Product / Why dbt / Pricing / Resources / Docs) center in Polymath Text body-medium `#030711`, and on the right a white 'Get started' pill (`#ffffff` bg, ink text, 1px `#cbd5e1` border) plus an orange 'Book a demo' pill (`#fe6703` bg, `#030711` ink, 12px radius). The orange CTA stays visible even when the nav collapses to a hamburger below 1024px."

6. "Create a dbt Developer Blog card: white, 12px radius, 24px padding, 1px `#e2e8f0` border. Optional 16:9 thumbnail at top, a category tag pill (`#fff5ec` bg, `#b34902` deep-orange text, pill radius), post title in h4 (Polymath 20 / 600), author + date meta in body-sm `#64748b`. On hover, lift `translateY(-2px)` over 240ms; shadow steps standard → elevated."

### Iteration Guide
1. Start white-first. Most surfaces live on `#ffffff` with near-black `#030711` ink. Near-black bands are for feature spotlight, pre-footer CTA, and footer only.
2. **Always near-black ink on the orange CTA — never white.** White-on-orange fails AA (2.93:1); ink-on-orange clears it (6.86:1). This is the single most dbt-specific rule.
3. Place **one orange action per viewport**. Pair it with the white "Get started" pill, not a second orange. The restraint with the orange is what gives it power.
4. Use **12px radius** on every button and card. If you reach for pill radius, you're drifting toward a consumer app; if you reach for 8px, you're drifting toward Databricks. 12px is dbt's softened rectangle.
5. Keep display at **Polymath weight 600** with negative tracking (-0.02em at 64px). Don't bump to 700 — the lighter set weight is the brand.
6. Don't set orange text on white at body size (it fails contrast). For inline links, use near-black ink with an orange underline; reserve solid orange text for large display/decorative use.
7. Lean on dbt's vocabulary — models, lineage, tests, trusted data, analytics development lifecycle. The practitioner register is the voice.
8. When in doubt about emphasis, **scale type up or add whitespace before adding color**. The system has one accent (orange) plus ink and white — adding extra colors to text drifts away from the brand's restraint.

---

*Theme-toggle audit: score=0, signals=[none]*
