---
name: v0
tagline: A near-white prompt canvas with GeistSans and pure OKLCH grayscale — Vercel''s AI builder dressed as the calmest text editor on the internet.
author: webdesignhot
source_url: https://v0.app
spec: design.md/v1.5
quality: curated
featured: false
categories: [ai, dev-tools, design-tools]
tags: [light, sans, mono, minimal, structured, cool, multi-theme]
preview_swatch: ['#fafafa', '#171717', '#000000']
related: [vercel, linear, anthropic]
description: 'v0 is Vercel''s AI app builder, and its marketing surface is the calmest prompt canvas on the internet. The body sits at `oklch(0.985 0 0)` (a near-white that reads as paper, not white), display copy uses **GeistSans** at a restrained 32px weight 600 with `-1.28px` tracking, and the entire palette is engineered as a pure OKLCH grayscale ladder. There is no chromatic accent on the marketing chrome — the prompt input is the hero, the templates are the supporting cast, and the whole page acts like an empty document waiting for input. Where every other AI tool reaches for a 64–80px hero headline, v0 trusts the prompt input itself to carry the weight at a deliberate 32px restraint.'

colors:
  # Primary
  bg: '#fafafa'                  # observed body bg, oklch(0.985 0 0) near-white paper
  bg-pure: '#ffffff'             # oklch(1) for raised modals and dialogs
  surface: '#f2f2f2'             # oklch(0.961) panel for inset zones
  surface-soft: '#f0f0f0'        # oklch(0.94) for cards and chips
  surface-strong: '#e6e6e6'      # oklch(0.90) for emphasised dividers
  text: '#262626'                # oklch(0.205 0 0) near-black display
  text-strong: '#000000'         # rare absolute black for ultra-emphasis
  text-medium: '#525252'         # oklch(0.32) secondary copy
  text-muted: '#7c7c7c'          # oklch(0.51) caption
  text-deep: '#969696'           # oklch(0.59) ui label
  text-soft: '#bababa'           # oklch(0.732) quietest metadata
  text-faint: '#cfcfcf'          # oklch(0.82) disabled
  # Brand
  brand: '#000000'               # pure black is the brand — Vercel-derived
  brand-deep: '#000000'          # no second tone — flat black
  brand-soft: 'rgba(0, 0, 0, 0.08)' # 8% black wash for ghost hover
  on-brand: '#ffffff'            # white label on black
  # Interactive
  link: '#000000'                # links are pure black; underlined or distinguished by weight
  link-hover: '#525252'          # link hover tones down by value
  selected-bg: '#f2f2f2'         # selected state — surface step
  disabled: '#bababa'
  # Borders
  border: 'rgba(0, 0, 0, 0.078)'        # ~7.8% black hairline
  border-strong: 'rgba(0, 0, 0, 0.14)'  # emphasised rule
  border-subtle: 'rgba(0, 0, 0, 0.05)'  # 5% black soft hairline
  border-focus: '#000000'               # focus ring is pure black
  # Semantic — v0 keeps semantics monochrome where possible
  success-bg: '#f0f7f1'
  success-text: '#1f6b3e'
  warning-bg: '#fef6e4'
  warning-text: '#7a5a14'
  danger-bg: '#fbebec'
  danger-text: '#9a2c34'
  info-bg: '#f2f2f2'              # info collapses into surface — no chromatic info
  info-text: '#262626'

typography:
  display:
    family: 'GeistSans, "GeistSans Fallback", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
    weights: [400, 500, 600, 700]
    opentype-features: ['kern', 'liga', 'ss01', 'ss02']
  body:
    family: 'GeistSans, "GeistSans Fallback", ui-sans-serif, system-ui, sans-serif'
    weights: [400, 500]
    opentype-features: ['kern', 'liga']
  mono:
    family: 'GeistMono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    weights: [400, 500]
    opentype-features: ['tnum', 'zero']
  scale:
    display-hero:    { size: 48, weight: 600, lineHeight: 1.1,  tracking: '-0.04em',  family: display, opentype: 'ss01' }
    display:         { size: 40, weight: 600, lineHeight: 1.15, tracking: '-0.04em',  family: display }
    h1:              { size: 32, weight: 600, lineHeight: 1.25, tracking: '-0.04em',  family: display, note: 'observed -1.28px @ 32 — the brand signature' }
    h2:              { size: 24, weight: 600, lineHeight: 1.33, tracking: '-0.02em',  family: display }
    h3:              { size: 18, weight: 600, lineHeight: 1.4,  tracking: '-0.01em',  family: display }
    h4:              { size: 16, weight: 600, lineHeight: 1.5,  tracking: '0',        family: display }
    h5:              { size: 14, weight: 600, lineHeight: 1.5,  tracking: '0',        family: display }
    eyebrow:         { size: 11, weight: 500, lineHeight: 1.4,  tracking: '0.06em',   family: mono, transform: uppercase }
    body-large:      { size: 16, weight: 400, lineHeight: 1.55, family: body }
    body:            { size: 14, weight: 400, lineHeight: 1.55, family: body }
    body-small:      { size: 13, weight: 400, lineHeight: 1.5,  family: body }
    caption:         { size: 12, weight: 400, lineHeight: 1.4,  family: body }
    caption-tabular: { size: 12, weight: 500, lineHeight: 1.4,  family: mono, opentype: 'tnum' }
    label:           { size: 12, weight: 500, lineHeight: 1.3,  family: mono, note: 'mono labels are a v0 signature' }
    code:            { size: 13, weight: 400, lineHeight: 1.55, family: mono, opentype: 'tnum zero' }
    code-micro:      { size: 11, weight: 400, lineHeight: 1.4,  family: mono }

radius:
  micro: 2
  sm: 4
  md: 6
  lg: 8
  xl: 10
  card: 12
  pill: 9999

spacing:
  base: 4
  scale: [1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 48, 64, 96, 128]

layout:
  page-width: 1200
  prose-width: 640
  site-gutter: 'clamp(16px, 4vw, 32px)'
  header-height: 56
  grid-columns: 12
  hero-pattern: 'centered prompt input + template grid below'
  section-rhythm: '64-96px'

components:
  button-primary:
    background: '#000000'
    text: '#ffffff'
    padding: '8px 16px'
    radius: 8
    border: 'none'
    font: 'GeistSans 500 / 14px'
    hover-bg: '#171717'
    active-bg: '#000000'
    use: 'Primary CTA — pure black on near-white, the brand inversion.'
  button-secondary:
    background: '#ffffff'
    text: '#000000'
    padding: '8px 16px'
    radius: 8
    border: '1px solid rgba(0, 0, 0, 0.14)'
    font: 'GeistSans 500 / 14px'
    hover-bg: '#fafafa'
    use: 'Outline twin — white fill, hairline border.'
  button-ghost:
    background: 'transparent'
    text: '#000000'
    padding: '6px 10px'
    radius: 6
    font: 'GeistSans 500 / 14px'
    hover-bg: 'rgba(0, 0, 0, 0.05)'
    use: 'Quiet utility — nav links, inline actions.'
  button-mono-label:
    background: '#f2f2f2'
    text: '#262626'
    padding: '4px 8px'
    radius: 4
    font: 'GeistMono 500 / 11px / uppercase / 0.06em tracking'
    use: 'Mono-rendered tag — template category, model identifier.'
  card:
    background: '#ffffff'
    border: '1px solid rgba(0, 0, 0, 0.078)'
    radius: 12
    padding: '16px'
    use: 'Template card or quiet info card — white on near-white, hairline only.'
  card-template:
    background: '#ffffff'
    border: '1px solid rgba(0, 0, 0, 0.078)'
    radius: 12
    padding: '16px'
    preview-area: '160px screenshot at 8px radius inside the card'
    label-position: 'mono caption at the foot'
    use: 'Template tile — screenshot preview + mono label below.'
  input:
    background: '#ffffff'
    border: '1px solid rgba(0, 0, 0, 0.14)'
    radius: 8
    padding: '8px 12px'
    font: 'GeistSans 400 / 14px'
    placeholder-color: '#969696'
    focus-ring: '0 0 0 2px #000000'
    use: 'Form fields, search.'
  prompt-input:
    background: '#ffffff'
    border: '1px solid rgba(0, 0, 0, 0.14)'
    radius: 12
    padding: '16px 20px'
    font: 'GeistSans 400 / 16px'
    placeholder-color: '#969696'
    inner-button: '32px black square at 6px radius hard-right'
    use: 'Hero prompt — the page''s sole focal point. Multi-line capable.'
  badge-mono:
    background: '#f2f2f2'
    text: '#262626'
    padding: '2px 8px'
    radius: 4
    font: 'GeistMono 500 / 11px'
    use: 'Mono category badge — template type, model name, "v0.app".'
  nav-link:
    background: 'transparent'
    text: '#262626'
    padding: '6px 10px'
    font: 'GeistSans 500 / 14px'
    hover-text: '#000000'
    active-bg: '#f2f2f2'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-editor: 'cubic-bezier(0.32, 0.72, 0, 1)'
  duration-fast: 80
  duration-standard: 160
  duration-slow: 240
  duration-page: 360
  reduced-motion: 'respects prefers-reduced-motion: reduce — all transitions become opacity-only, durations halve, scroll-linked reveals snap to final state.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1200
  wide: 1440

shadows:
  none: 'none'
  ambient: 'rgba(0, 0, 0, 0.04) 0 1px 2px'
  standard: 'rgba(0, 0, 0, 0.05) 0 4px 12px'
  elevated: 'rgba(0, 0, 0, 0.08) 0 16px 32px -12px'
  modal: 'rgba(0, 0, 0, 0.12) 0 24px 48px -16px'
  ring: '0 0 0 2px #000000'
  ring-soft: '0 0 0 3px rgba(0, 0, 0, 0.20)'

accessibility:
  contrast-text-on-bg: 14.6        # #262626 on #fafafa — AAA at all sizes
  contrast-text-medium-on-bg: 7.8  # #525252 on #fafafa — AAA
  contrast-text-muted-on-bg: 5.0   # #7c7c7c on #fafafa — AA at body sizes
  contrast-text-on-brand: 16.7     # #ffffff on #000000 — AAA
  contrast-link-on-bg: 18.7        # #000000 on #fafafa — AAA
  focus-ring: '2px solid #000000 with 2px offset'
  reduced-motion-honored: true
  keyboard-nav: 'tab order: skip-link → masthead → prompt input → templates → footer; Cmd/Ctrl+Enter submits prompt.'
  prose-line-length: 'capped at 640px on text pages; the prompt area is constrained to 720px.'

dark-mode: optional                # v0 ships a dark mode at the product level; marketing surface stays light by default.
colors-dark:
  bg: '#0a0a0a'                    # oklch(0.10) deep near-black
  bg-pure: '#000000'               # oklch(0) for raised modals
  surface: '#171717'               # oklch(0.18) panel
  surface-soft: '#1f1f1f'          # oklch(0.22) cards
  surface-strong: '#262626'        # oklch(0.27) dividers
  text: '#ededed'                  # oklch(0.94) primary copy
  text-medium: '#bababa'           # oklch(0.74)
  text-muted: '#7c7c7c'            # oklch(0.51)
  text-soft: '#525252'             # oklch(0.32)
  brand: '#ffffff'                 # white inverts the brand
  on-brand: '#000000'
  border: 'rgba(255, 255, 255, 0.10)'
  border-strong: 'rgba(255, 255, 255, 0.16)'
---

## 1. Visual Theme & Atmosphere

v0 is Vercel's AI app builder, and the marketing surface is the calmest prompt canvas on the internet. The body sits at `oklch(0.985 0 0)` ≈ `#fafafa` — a perceptual near-white that reads as paper, not glaring `#ffffff` — and every grey on the page is declared in OKLCH, not HSL or hex. The grayscale ladder runs `oklch(0.205)` for text, `oklch(0.51)` for muted, `oklch(0.732)` for soft, and `oklch(0.94)`/`oklch(0.961)` for surfaces. There is no chromatic accent on the chrome; the prompt input — "What do you want to create?" — is the hero, and templates fan out below as quiet supporting cards.

The brand's most disciplined typographic move is the **restrained display size**. Display copy uses **GeistSans** (Vercel's open-source family) set at a deliberate 32px weight 600 with `-1.28px` (`-0.04em`) of tracking. Where every other AI tool site leads with a 64–80px hero, v0 keeps the headline at 32px because the prompt input itself is meant to be the page's focal weight. The choice is the brand: this is a builder's tool, not a marketing-funnel front door.

The atmospheric vocabulary: **paper-canvas, OKLCH-engineered, builder-not-marketing, prompt-as-hero, GeistMono-labels, 32px-not-72px, calm-text-editor, no-chromatic-accent, value-contrast-not-shadow.** Card radii sit at 12px — Vercel-Linear adjacent. Section rhythm runs 64–96px. The whole composition reads closer to a text editor (Bear, iA Writer, Notion) than a SaaS marketing page.

When elements need emphasis, they reach for **value contrast** rather than colour. The primary CTA inverts the canvas exactly: pure black `#000000` on near-white `#fafafa` produces a 16.7:1 contrast. Mono labels (GeistMono 11px, uppercase, 0.06em tracking) appear as quiet metadata on template cards and nav badges — a major brand signal that positions v0 as a dev tool first, marketing surface second.

**Key Characteristics**
- Near-white `#fafafa` canvas — `oklch(0.985)`, paper not glaring
- GeistSans display + body, GeistMono for labels and code — Vercel's open-source trio
- Display at 32px weight 600 with `-1.28px` tracking — the brand's signature restraint
- OKLCH-engineered grayscale ladder — perceptually even on P3
- Pure black `#000000` is the brand — no chromatic accent in the chrome
- Mono labels (11px / 500 / uppercase / 0.06em) — dev-tool signal
- Centered prompt input as the hero — chat-app shape, builder context
- Card radius 12px — Vercel/Linear adjacent
- Section rhythm 64–96px — calm, not editorial-loose
- Dark mode shipped at the product level (Vercel-derived)

## 2. Color Palette & Roles

### Primary

- **bg** `#fafafa` — `oklch(0.985 0 0)` near-white paper canvas. Never `#ffffff`.
- **bg-pure** `#ffffff` — `oklch(1)` for raised modals, dialogs, popovers (the only place pure white appears).
- **text** `#262626` — `oklch(0.205 0 0)` near-black display copy.
- **brand** `#000000` — pure black is the brand, Vercel-derived.

### Brand & Accent

- **brand** `#000000` — flat black, used on primary CTA, link rest, focus ring.
- **on-brand** `#ffffff` — white label on black.
- **brand-soft** `rgba(0, 0, 0, 0.08)` — 8% black wash for ghost hover.

There is **no chromatic accent** on the marketing chrome. The discipline is the point — v0's brand is the prompt and the dev-tool register, not a colour.

### Interactive

- **link** `#000000` — links are pure black, distinguished by underline or weight.
- **link-hover** `#525252` — hover tones down by value, not chroma.
- **selected-bg** `#f2f2f2` — selected state uses a surface step.
- **disabled** `#bababa` — `oklch(0.732)` quiet disabled.

### Neutral Scale (OKLCH-engineered)

- **near-black** `#262626` — `oklch(0.205)` primary text.
- **slate** `#525252` — `oklch(0.32)` secondary copy, link hover.
- **muted** `#7c7c7c` — `oklch(0.51)` captions.
- **deep** `#969696` — `oklch(0.59)` placeholder, ui label.
- **soft** `#bababa` — `oklch(0.732)` disabled, footer microcopy.
- **faint** `#cfcfcf` — `oklch(0.82)` quietest division.
- **surface-strong** `#e6e6e6` — `oklch(0.90)`.
- **surface-soft** `#f0f0f0` — `oklch(0.94)`.
- **surface** `#f2f2f2` — `oklch(0.961)` panel.
- **bg** `#fafafa` — `oklch(0.985)` page canvas.
- **bg-pure** `#ffffff` — `oklch(1)` raised.

### Surface & Borders

- **surface-0 (page)** — `#fafafa` near-white.
- **surface-1 (panel)** — `#f2f2f2`.
- **surface-2 (card)** — `#ffffff` raised against `#fafafa` page.
- **border** `rgba(0, 0, 0, 0.078)` — ~7.8% black hairline (the default rule).
- **border-strong** `rgba(0, 0, 0, 0.14)` — emphasised rule on inputs.
- **border-subtle** `rgba(0, 0, 0, 0.05)` — quietest division.

### Shadow Colors

v0's shadows are **neutral, low-opacity, and rare**. The OKLCH grayscale ladder does the elevation work — surfaces step up by value rather than blur. When shadows do appear (modals, popovers), they're declared at 4–12% black with multi-stop blur. The brand never uses tinted shadows; pure black at low opacity is the only shadow colour.

### Semantic

- **success** — bg `#f0f7f1`, text `#1f6b3e`. Reserved for build-success status.
- **warning** — bg `#fef6e4`, text `#7a5a14`. API limits, deprecation notices.
- **danger** — bg `#fbebec`, text `#9a2c34`. Build errors, validation.
- **info** — bg `#f2f2f2`, text `#262626`. Notably, info collapses into the surface — no separate chromatic info colour. The brand refuses to introduce an info-blue.

Note: v0's semantic palette is the most monochrome of any AI tool. Where Anthropic uses earth tones (cactus = success), where Linear uses indigo for info — v0 keeps semantics quiet and reaches for chromatic only when absolutely required (validation errors).

## 3. Typography Rules

### Font Family

- **Display & Body**: `GeistSans, "GeistSans Fallback", ui-sans-serif, system-ui, sans-serif` — Vercel's open-source modern grotesque. Closer in proportions to Inter than to Helvetica; geometric grotesque with a slight Swiss DNA.
- **Mono**: `GeistMono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace` — used pervasively for labels, captions, code, and ui metadata.
- **OpenType features**: `kern` and `liga` enabled across display/body. `ss01` and `ss02` for stylistic alternates in display sizes. `tnum` (tabular figures) and `zero` (slashed zero) enabled in mono.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| Display Hero | GeistSans | 48px | 600 | 1.1 | -0.04em | ss01 | Reserved for major launches |
| Display | GeistSans | 40px | 600 | 1.15 | -0.04em | liga | Page-level emphasis |
| H1 | GeistSans | 32px | 600 | 1.25 | -0.04em | liga | Homepage hero — the signature |
| H2 | GeistSans | 24px | 600 | 1.33 | -0.02em | liga | Major section |
| H3 | GeistSans | 18px | 600 | 1.4 | -0.01em | — | Sub-section |
| H4 | GeistSans | 16px | 600 | 1.5 | normal | — | Card heading |
| H5 | GeistSans | 14px | 600 | 1.5 | normal | — | Inline emphasis |
| Eyebrow | GeistMono | 11px | 500 | 1.4 | 0.06em | uppercase | Section pre-label — *mono is the v0 signature* |
| Body Large | GeistSans | 16px | 400 | 1.55 | normal | — | Lede paragraph |
| Body | GeistSans | 14px | 400 | 1.55 | normal | — | Default body |
| Body Small | GeistSans | 13px | 400 | 1.5 | normal | — | Compact UI body |
| Caption | GeistSans | 12px | 400 | 1.4 | normal | — | Image captions |
| Caption Tabular | GeistMono | 12px | 500 | 1.4 | normal | tnum | Stats, dates |
| Label | GeistMono | 12px | 500 | 1.3 | normal | — | Mono ui labels — *brand-defining* |
| Code | GeistMono | 13px | 400 | 1.55 | normal | tnum zero | Inline + block |
| Code Micro | GeistMono | 11px | 400 | 1.4 | normal | — | Footnote, version |

### Principles

- **Display restraint is the brand statement.** 32px / 600 / -1.28px is the homepage hero — never push beyond 48px even on detail pages.
- **GeistMono for ui labels.** Mono-labelled chips, eyebrows, version tags, template-category badges — the dev-tool signal that distinguishes v0 from generic AI marketing.
- **Negative tracking compresses with size.** -0.04em at 32–48px, -0.02em at 24px, -0.01em at 18px, normal at 16px and below.
- **Three-mode discipline.** GeistSans carries display and body; GeistMono carries labels, code, and tabular figures; system stack is the fallback.
- **Body defaults to 14/22.** Tighter than editorial 16/24 — v0 reads as a developer surface, not a marketing brochure.
- **Eyebrow uses mono + 0.06em tracking + uppercase.** This is the brand's loudest typographic affordance for "this is a builder's tool."
- **No italics in chrome.** Italics belong to citations in body copy.
- **OpenType: ss01 and ss02 in display.** These switch alternate glyph forms in GeistSans for visual variety in headlines.

## 4. Component Stylings

### Buttons

**Primary (Black)**
- Background: `#000000`. Text: `#ffffff`, GeistSans 500 / 14px.
- Padding: `8px 16px`. Radius: `8px`. No border.
- Hover: bg → `#171717` over 80ms.
- Active: bg → `#000000` (instant).
- Focus: 2px black ring with 2px offset.
- Use: Primary CTA — *Try v0, Generate, Sign in.*

**Secondary (Outline)**
- Background: `#ffffff`. Text: `#000000`, GeistSans 500 / 14px.
- Border: `1px solid rgba(0, 0, 0, 0.14)`. Radius: `8px`.
- Hover: bg → `#fafafa`; border → `rgba(0, 0, 0, 0.20)`.
- Use: Twin to primary — *Read docs, Cancel.*

**Ghost (Quiet)**
- Background: transparent. Text: `#000000`, GeistSans 500 / 14px.
- Padding: `6px 10px`. Radius: `6px`.
- Hover: bg → `rgba(0, 0, 0, 0.05)`.
- Use: Nav links, footer, repeated inline actions.

**Mono Label Button**
- Background: `#f2f2f2`. Text: `#262626`, GeistMono 500 / 11px / uppercase / 0.06em tracking.
- Padding: `4px 8px`. Radius: `4px`.
- Use: Tag-as-action — template category filter, model selector.

### Cards

**Editorial Card**
- Background: `#ffffff`. Border: `1px solid rgba(0, 0, 0, 0.078)`. Radius: `12px`. Padding: `16px`.
- Shadow: none at rest; on hover, `rgba(0, 0, 0, 0.05) 0 4px 12px`.
- Use: Quiet info card, capability tile.

**Template Card**
- Background: `#ffffff`. Border: `1px solid rgba(0, 0, 0, 0.078)`. Radius: `12px`. Padding: `16px`.
- Preview area: 160–240px screenshot at 8px radius inside the card.
- Label position: GeistMono caption at the foot, 11px / 500 / uppercase.
- Hover: `transform: translateY(-2px)` + shadow `rgba(0, 0, 0, 0.06) 0 8px 16px -4px`.
- Use: Template grid tile.

**Inset Panel**
- Background: `#f2f2f2`. Border: none. Radius: `8px`. Padding: `16px`.
- Use: Quiet info zone — sign-in prompt, in-feed announcement.

### Badges, Tags, Pills

**Mono Badge** — bg `#f2f2f2`, text `#262626`, GeistMono 500 / 11px / uppercase / 0.06em, padding `2px 8px`, radius `4px`. Used for template categories, model identifiers, "v0.app" badge.

**Status Eyebrow** — no chrome, just type. GeistMono 500 / 11px / uppercase / 0.06em, colour `#7c7c7c`.

**Version Pill** — bg `#000000`, text `#ffffff`, radius `4px`, GeistMono 500 / 10px. Used for version tags ("v1.0").

### Inputs / Forms

**Text Input**
- Background: `#ffffff`. Border: `1px solid rgba(0, 0, 0, 0.14)`. Radius: `8px`. Padding: `8px 12px`.
- Font: GeistSans 400 / 14px. Placeholder: `#969696`.
- Focus: `0 0 0 2px #000000` ring, border → `#000000`.
- Error: border → `#9a2c34`, helper red below.

**Prompt Input (Hero)**
- Background: `#ffffff`. Border: `1px solid rgba(0, 0, 0, 0.14)`. Radius: `12px`. Padding: `16px 20px`.
- Font: GeistSans 400 / 16px. Placeholder: `#969696`. Multi-line capable.
- Inner button: 32px black square at 6px radius hard-right, white arrow icon.
- Focus: ring `0 0 0 2px #000000`; border picks up brand black.
- Use: The single most prominent element on the home page.

**Search Input** — same as text input with a 14px icon-left search glyph in `#7c7c7c`.

### Navigation

- Header height `56px`. Background `#fafafa` (transparent on hero, opaque on scroll).
- Logo: v0 wordmark in GeistSans 600, near-black `#262626`.
- Nav links: GeistSans 500 / 14px, colour `#262626`, padding `6px 10px`. Hover: text → `#000000`.
- Right-side: ghost "Docs", ghost "Pricing", primary black "Sign in" button.
- Mobile (<640px): hamburger collapses to a full-screen sheet.

### Optional Components

**Dropdown Menu** — bg `#ffffff`, border `rgba(0, 0, 0, 0.078)`, radius `8px`, shadow `rgba(0, 0, 0, 0.08) 0 12px 24px -8px`. Items: GeistSans 400 / 14px, hover bg `#fafafa`.

**Tooltip** — bg `#000000`, text `#ffffff`, radius `4px`, padding `6px 10px`, font `GeistSans 500 / 12px`.

**Toast** — bg `#ffffff`, border `rgba(0, 0, 0, 0.078)`, radius `8px`, padding `12px 16px`, shadow standard.

**Modal** — bg `#ffffff`, radius `12px`, shadow `rgba(0, 0, 0, 0.12) 0 24px 48px -16px`, max-width `560px`. Backdrop: 60% black.

**Code Block** — bg `#f2f2f2`, radius `8px`, padding `12px 16px`, border none. GeistMono 13px / 400 with `tnum zero`.

## 5. Layout Principles

### Spacing System

- **Base unit**: 4px.
- **Scale**: 4, 8, 12, 16, 20, 24, 32, 48, 64, 96, 128 — Vercel-derived, calm.
- **Density observation**: v0 is *medium-calm*. Section rhythm 64–96px (tighter than Anthropic's 88–160 broadsheet, looser than dashboard density). Intra-section: 16–24px.

### Grid & Container

- **Page max width**: `1200px` — narrower than most marketing pages, wider than a docs site.
- **Site gutter**: `clamp(16px, 4vw, 32px)`.
- **Grid**: 12 columns with 16px gutters.
- **Hero treatment**: prompt input centred on a `720px` max column; 32px headline above it; templates fan out in a 3–4 column grid below.

### Whitespace Philosophy

The whitespace philosophy is **builder-calm**. Empty space serves the prompt input — the hero shouldn't feel crowded, and the page rarely scrolls past two viewport heights for the primary surface. The discipline mirrors text editors (Bear, iA Writer, Notion's blank page) where the empty document is the marketing.

### Section Cadence

- Hero (near-white, prompt input centred) → Templates (near-white, white cards on near-white grid) → Features (near-white) → Footer (`#f2f2f2` step).
- The whole site stays in light territory; dark mode is shipped at the product level (the actual builder UI), not on the marketing surface.
- Section breaks: 64–96px vertical space + occasional `1px` `rgba(0, 0, 0, 0.078)` hairlines.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| Micro | 2px | Decorative dividers, icon-corner inheritance |
| Standard (sm) | 4px | Mono badges, status pills |
| Comfortable (md) | 6px | Compact ghost buttons |
| Relaxed (lg) | 8px | Buttons, inputs — the dominant `--radius--main` |
| Featured (xl) | 10px | Inset panels, template preview area |
| Card | 12px | Cards, prompt input, dropdowns |
| Pill | 9999px | Tag chips, sign-in chip (rare) |

v0's signature radius is **8px on buttons** and **12px on cards/prompt input** — Vercel/Linear adjacent. There are no zero-radius surfaces. Compound radii are rare; the system reads as a flat ladder.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat — no shadow | Default page surface, hero, body sections |
| 1 | Tonal — `#ffffff` against `#fafafa` | Cards, raised panels |
| 2 | `rgba(0,0,0,0.04) 0 1px 2px` | Sticky nav on scroll |
| 3 | `rgba(0,0,0,0.05) 0 4px 12px` | Hover-lifted cards |
| 4 | `rgba(0,0,0,0.08) 0 16px 32px -12px` | Dropdowns, popovers |
| 5 | `rgba(0,0,0,0.12) 0 24px 48px -16px` | Modals, dialogs |

### Shadow Philosophy

v0's depth is **OKLCH-tonal first, shadow second**. The grayscale ladder (`#fafafa` → `#f2f2f2` → `#f0f0f0` → `#ffffff` raised) does the primary elevation work. Each step is perceptually even on P3 displays because of OKLCH declaration, and there's no need for cast shadows on resting surfaces. Hover lifts use a soft 16px blur at 5% black on cards only. Modals and overlays carry the heaviest shadows but never exceed 12% black opacity.

## 8. Interaction & Motion

### Easing Curves

- **`ease-standard`**: `cubic-bezier(0.4, 0, 0.2, 1)` — Material default; default for hover, focus, colour transitions.
- **`ease-emphasized`**: `cubic-bezier(0.2, 0, 0, 1)` — modal enter, prompt focus expand.
- **`ease-editor`**: `cubic-bezier(0.32, 0.72, 0, 1)` — slow-out, fast-settle; template tile reveal on scroll.

### Duration Buckets

- **Fast (80ms)** — colour transitions, focus rings, link hovers — *faster than most brands; v0 reads snappy.*
- **Standard (160ms)** — button hover, card hover, dropdown reveal.
- **Slow (240ms)** — modal enter/exit, prompt focus expand.
- **Page (360ms)** — route transitions, hero reveal.

### Per-Component Micro-States

- **Button hover (primary)**: bg `#000000` → `#171717` over 80ms.
- **Card hover (template)**: `transform: translateY(-2px)` + shadow `rgba(0, 0, 0, 0.06) 0 8px 16px -4px` over 160ms.
- **Link hover**: colour `#000000` → `#525252` over 80ms.
- **Input focus**: 2px black ring fades in over 80ms; border darkens.
- **Prompt focus**: ring picks up subtle 3px wider variant; placeholder fades to 60% opacity.

### Page Transitions

Templates fade in via `IntersectionObserver` at 80% viewport, 240ms duration with 8px translate-up. Between routes, the masthead persists; the body cross-fades over 360ms.

### Reduced Motion

Honoured globally. All transforms become opacity-only; durations halved; scroll-linked reveals snap to final state.

## 9. Accessibility & A11y

### Contrast Pairs

- **`#262626` text on `#fafafa` bg**: 14.6:1 — AAA at all sizes.
- **`#525252` text on `#fafafa` bg**: 7.8:1 — AAA.
- **`#7c7c7c` text on `#fafafa` bg**: 5.0:1 — AA at body sizes.
- **`#969696` text on `#fafafa` bg**: 3.5:1 — fails AA body; only used for placeholder.
- **`#ffffff` text on `#000000` brand**: 16.7:1 — AAA.
- **`#000000` text on `#fafafa` bg**: 18.7:1 — AAA.
- **`#262626` text on `#f2f2f2` surface**: 13.9:1 — AAA.

### Focus Indicators

- Default ring: `0 0 0 2px #000000` with 2px offset.
- Soft ring (prompt focus): `0 0 0 3px rgba(0, 0, 0, 0.20)`.
- All interactive surfaces show a visible focus state.

### ARIA Patterns

- **Navigation**: `<nav aria-label="Main">` with skip-link to `#main-content`.
- **Prompt input**: `<form aria-label="Generate app">` with `aria-label` on the textarea.
- **Template grid**: `role="list"`, each card `role="listitem"`.
- **Dialog**: `role="dialog" aria-modal="true" aria-labelledby` with focus trap and Esc-to-close.
- **Live regions**: `aria-live="polite"` for build status messages.

### Keyboard Navigation

- Tab order: skip-link → masthead → prompt input → templates → footer.
- `Cmd/Ctrl+Enter` from anywhere submits the prompt.
- `/` keyboard shortcut focuses the prompt input.
- `Esc` closes dropdowns, modals.

### Screen Reader Hints

- Decorative icons: `aria-hidden="true"`.
- Template cards: `<figcaption>` for the mono label.
- Icon-only buttons (send, copy): `aria-label`.

### Reduced Motion

Honoured globally. All transforms collapse to opacity; durations halve; scroll-linked reveals snap.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Use |
|---|---|---|
| Mobile | < 640px | Single-column; full-width prompt |
| Tablet | 640–1024px | 2-column template grid; condensed masthead |
| Desktop | 1024–1200px | 3-column template grid; full nav |
| Wide | 1200–1440px | 4-column template grid |
| Ultra | > 1440px | Page locks at 1200px; gutters expand |

### Touch Targets

- Minimum tap target: 44×44px.
- Buttons: 40px minimum height on mobile (effective tap area 44px).
- Template cards: full card is the tap target.

### Collapsing Strategy

- **Header**: full nav at ≥1024px; hamburger sheet below.
- **Hero**: 32px headline holds across all breakpoints — the brand's restraint is breakpoint-agnostic.
- **Prompt input**: full-width pill on mobile, max-width `720px` on tablet+.
- **Template grid**: 4-up → 3-up → 2-up → 1-up across sizes.
- **Section spacing**: 96px → 64px → 48px across sizes.

### Image Behavior

- Template screenshots use `srcset` with 1x/2x for crisp Retina rendering.
- `aspect-ratio` preserves layout during load.
- Lazy-loading on below-fold images; eager on hero.

### Container Queries

Used inside template cards to switch preview layout (stacked vs. side-by-side metadata) when card width crosses 280px.

## 11. Content & Voice

### Tone

**Builder-calm, dev-tool register, no marketing exuberance.** v0 writes like a tool's documentation — full sentences, plain verbs, no exclamation marks. Headlines describe capabilities ("Generate UI from a prompt"); subheads explain. The voice positions v0 as a serious developer surface, not a consumer toy.

### Microcopy Patterns

- **Button verbs**: "Generate," "Sign in," "Continue," "Save," "Deploy," "Copy code." Never "Get started for free!" never "Start building today."
- **Error messages**: "Couldn't generate. Try simplifying the prompt."
- **Success confirmations**: "Generated." "Saved to projects." Brief.
- **Loading states**: "Generating…" with subtle progress indicator.
- **Mono captions**: "v1.0" "next.js" "react" — model and template metadata in mono.

### Empty States

- *"No projects yet. Try a prompt above to start."*
- *"No matching templates."*
- Never uses "Oops!" or apologetic exclamation marks.

### CTA Verb Conventions

- Primary on hero: "Try v0," "Sign in"
- Secondary: "Read the docs," "View pricing," "Watch demo"
- Footer: "Pricing," "Docs," "Templates," "Discord"

The voice is **invitational with technical confidence** — the closest match in tone to Linear and Vercel, deliberately distinct from Anthropic's literary register or OpenAI's research register.

## 12. Dark Mode & Theming

**Dark mode is shipped at the product level (the actual builder UI), not on the marketing surface by default.** The marketing canvas at `v0.app` stays light at all times; the product canvas (where you actually build) supports dark mode via Vercel's standard `prefers-color-scheme` mechanism.

### Dark Token Map

When dark mode applies (in-product), the OKLCH ladder inverts:

- **bg** `#0a0a0a` — `oklch(0.10)` deep near-black.
- **bg-pure** `#000000` — `oklch(0)` raised modals.
- **surface** `#171717` — `oklch(0.18)` panel.
- **surface-soft** `#1f1f1f` — `oklch(0.22)` cards.
- **surface-strong** `#262626` — `oklch(0.27)` dividers.
- **text** `#ededed` — `oklch(0.94)` primary.
- **text-medium** `#bababa` — `oklch(0.74)` secondary.
- **text-muted** `#7c7c7c` — `oklch(0.51)` captions.
- **text-soft** `#525252` — `oklch(0.32)` quietest.
- **brand** `#ffffff` — white inverts the brand.
- **on-brand** `#000000` — black label on white.
- **border** `rgba(255, 255, 255, 0.10)` — 10% white hairline.

The single rule: **brand inverts** in dark mode. White becomes the brand colour against the black canvas. The OKLCH ladder makes the inversion perceptually even.

## 13. Lineage & Influences

v0 inherits Vercel's typographic and chromatic system but **inverts the canvas**: where vercel.com is the deep-black builder's console, v0.app is the near-white prompt sheet. The body bg is `oklch(0.985 0 0)` — a perceptual near-white that reads as paper, not glaring white — and every grey on the page is declared in OKLCH, not HSL or hex. The grayscale ladder runs `oklch(0.205)` for text, `oklch(0.51)` for muted, `oklch(0.732)` for soft, and `oklch(0.94)`/`oklch(0.961)` for surfaces.

The discipline is the point: with no chromatic accent on the chrome, the prompt input becomes the hero, and the entire page reads as an empty document waiting for input. Display type is **GeistSans** (Vercel's open-source family) set at a restrained 32px weight 600 with `-1.28px` (`-0.04em`) of tracking — small enough that the type never competes with the prompt, but tracked tight enough to keep the headline confident. **GeistMono** appears for code previews, template metadata, and the subtle ui labels. The whole composition is the calmest builder canvas in the AI category — closer to a text editor than a SaaS marketing page.

What it inherits: Vercel's GeistSans + GeistMono pairing, OKLCH-engineered neutral ladder, builder-tool restraint, monochrome chrome. What it borrows from contemporaries: Linear's OKLCH discipline, Notion's empty-document register, Bear / iA Writer's minimal-canvas energy. What it rejects: chromatic accent, oversized hero typography, gradient meshes, AI-tech iconography.

**Named influences:**

- **Vercel** — Geist family + OKLCH-engineered neutral ladder + builder-tool restraint. *https://vercel.com*
- **Linear** — OKLCH-native grayscale; monochrome chrome discipline. *https://linear.app*
- **Notion / Bear / iA Writer** — empty-document-as-marketing canvas; the prompt is the hero. *https://www.notion.com*
- **Geist (open-source typeface)** — Vercel's modern grotesque + mono trio. *https://vercel.com/font*

## 14. Do's and Don'ts

### Do

- **Do** keep display type at 32px — the prompt input is the hero, not the headline.
- **Do** declare every neutral in OKLCH; the perceptual evenness is the brand's discipline.
- **Do** use GeistMono for ui labels and template metadata — the dev-tool register is part of the identity.
- **Do** keep the canvas at `#fafafa` (`oklch(0.985)`) — never glaring white.
- **Do** use pure black `#000000` for primary CTAs — the brand inverts the canvas exactly.
- **Do** use ~7.8% black hairlines for borders. Solid borders are too loud.
- **Do** prefer value contrast (white card on near-white) over drop shadows for elevation.
- **Do** keep section rhythm at 64–96px — calm, not editorial-loose.
- **Do** use `tnum` mono numerals for stats, dates, version tags.
- **Do** ship dark mode at the product level via OKLCH inversion.

### Don't

- **Don't** introduce a chromatic accent on the marketing chrome; pure black on near-white is the palette.
- **Don't** push the headline above 40px — v0 trusts the input, not the banner.
- **Don't** mix in non-Geist faces; the family carries display, body, and mono.
- **Don't** use the HSL grey ladder; OKLCH declaration is non-negotiable for the brand.
- **Don't** apply heavy or tinted shadows. v0's depth is neutral and minimal.
- **Don't** insert gradients, meshes, or glow effects.
- **Don't** drop body weight below 400; GeistSans loses character.
- **Don't** apologise in microcopy — empty states are normal, not failures.
- **Don't** show the marketing surface in dark mode by default; light is the brand register.
- **Don't** use sans labels where mono labels are expected — the GeistMono register is brand-defining.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #fafafa (oklch(0.985))
bg-pure: #ffffff (oklch(1))
surface: #f2f2f2 (oklch(0.961))
surface-soft: #f0f0f0 (oklch(0.94))
text: #262626 (oklch(0.205))
text-medium: #525252 (oklch(0.32))
text-muted: #7c7c7c (oklch(0.51))
text-soft: #bababa (oklch(0.732))
brand: #000000
border: rgba(0, 0, 0, 0.078)
border-strong: rgba(0, 0, 0, 0.14)
```

### Example Component Prompts

1. **"Create a v0-style hero — `#fafafa` near-white canvas, 32px headline in GeistSans weight 600 with `-1.28px` tracking and `#262626` text. Below the headline, a wide centred prompt input pill at 12px radius, 720px max-width, `#ffffff` fill with `1px rgba(0, 0, 0, 0.14)` border, 16px placeholder text in `#969696`, 32px black square send button hard-right. Template grid below in 3 columns at 12px radius."**

2. **"Design a v0 template card — `#ffffff` background, `1px rgba(0, 0, 0, 0.078)` border, 12px radius, 16px padding. Inside: 160px screenshot preview at 8px radius, then a GeistMono caption at the foot in 11px / 500 / uppercase / 0.06em tracking. Hover translates -2px with a 4px soft shadow at 6% black."**

3. **"Build a v0 mono badge — `#f2f2f2` background, `#262626` text, 4px radius, 2×8px padding, GeistMono 500 / 11px / uppercase / 0.06em tracking. Use for template categories and model identifiers."**

4. **"Compose a v0 nav — 56px header, `#fafafa` background (transparent over hero, opaque on scroll), v0 wordmark hard-left in GeistSans 600 / `#262626`. Link list GeistSans 500 / 14px in `#262626` with `#000000` hover. Right-side: ghost 'Docs', ghost 'Pricing', primary black 'Sign in' button at 8px radius."**

5. **"Render a v0 code block — `#f2f2f2` background, no border, 8px radius, 12px×16px padding. Use GeistMono 13px / 400 with `tnum` and `zero` features. Mono caption above (GeistMono 11px / 500 / uppercase) labels the language."**

6. **"Create a v0 prompt input — `#ffffff` background, `1px rgba(0, 0, 0, 0.14)` border, 12px radius, 16px×20px padding, GeistSans 400 / 16px placeholder text in `#969696`. 32px black square send button at 6px radius hard-right with white arrow icon. Multi-line capable with auto-grow. Focus picks up `0 0 0 2px #000000` ring."**

### Iteration Guide

1. **Start with `#fafafa`, not `#ffffff`.** If the bg is glaring white, you've already lost the brand. Near-white `oklch(0.985)` is the entry ticket.
2. **Drop the headline to 32px.** If the hero is 64–80px, you're in marketing register; v0's restraint is 32px.
3. **Switch all greys to OKLCH.** `oklch(0.51)` instead of `#7c7c7c` — the perceptual evenness is the brand's discipline.
4. **Use GeistMono for labels.** Replace sans 12px badges with mono 11px uppercase — the dev-tool register is brand-defining.
5. **Strip chromatic accent.** Any blue, purple, or green is wrong — replace with pure black.
6. **Centre the prompt.** If the page reads as a multi-column landing, you've over-built. The single centred prompt is the hero.
7. **Replace shadows with tonal stepping.** White-on-near-white separates panels.
8. **Calm the verbs.** Replace "Sign up free!" with "Try v0"; replace "Get started today!" with "Sign in."
