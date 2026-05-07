---
name: Suno
tagline: A near-black booth with cream Neue Montreal and a hot-pink cue light — a music studio, a record sleeve, and a chat app fused into one canvas.
updated_at: 2026-05-05T10:17:17+12:00
published_at: 2026-05-03T16:49:18+12:00
author: webdesignhot
source_url: https://suno.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [ai, media, social]
tags: [dark, sans, spacious, warm, bright, playful]
preview_swatch: ['#101012', '#f7f4ef', '#fd429c']
related: [openai, anthropic, claude-ai]
description: 'Suno''s site is a recording booth. The canvas drops to `#101012` with cream `#f7f4ef` text — the off-white reads warmer than pure white, like vinyl-sleeve paper under stage lights — and Neue Montreal carries display copy at 72px with `-0.96px` tracking. The single chromatic accent is a hot-pink `#fd429c` cue light that signals records, hearts, and the active row in long lists; everything else stays monochromatic so the album-art tiles can sing. Where Krea commits to absolute `#000000` and refuses to bold, Suno warms the canvas slightly and sets Neue Montreal at weight 500 with tight leading — chunky song-title cadence over museum placard.'

colors:
  # Primary
  bg: '#101012'                  # near-black with slight warm tint, the booth ground
  bg-alt: '#1c1c1f'              # secondary panel for chrome and inset zones
  surface: '#1c1c1f'             # raised panel
  surface-translucent: 'rgba(28, 28, 31, 0.60)' # 60% panel for floated cards
  surface-soft: 'rgba(255, 255, 255, 0.05)' # 5% white whisper card for hover
  surface-strong: 'rgba(255, 255, 255, 0.08)' # 8% white emphasised
  surface-iced: '#fcfbf9'        # near-white modal/light surface for support pages
  surface-paper: '#f7f4ef'       # cream paper for rare light layouts
  text: '#f7f4ef'                # cream display, warmer than pure white
  text-strong: '#ffffff'         # pure white reserved for primary headlines
  text-medium: '#e0ddd6'         # slightly muted cream
  text-muted: '#c2c2c1'          # muted UI label
  text-soft: '#a3a3a3'           # quiet metadata
  text-faint: '#737373'          # disabled
  text-paper: '#101012'          # near-black on light surfaces
  # Brand
  brand: '#fd429c'               # signature hot-pink cue light
  brand-deep: '#e02f8a'          # pressed pink
  brand-soft: 'rgba(253, 66, 156, 0.15)' # pink wash for selected/hover
  on-brand: '#ffffff'
  # Secondary accents (used in feature panels, never on chrome)
  accent-cobalt: '#3860be'       # secondary blue accent
  accent-deep: '#27455c'         # deep teal-blue accent panel
  accent-amber: '#f5a623'        # rare amber accent for warnings
  # Interactive
  link: '#f7f4ef'                # links stay cream on dark; underlined
  link-hover: '#fd429c'          # pink on hover — the cue-light moment
  selected-bg: 'rgba(253, 66, 156, 0.15)' # pink-wash selected row
  disabled: '#737373'
  # Borders
  border: 'rgba(255, 255, 255, 0.10)'    # 10% white hairline
  border-strong: 'rgba(255, 255, 255, 0.18)' # emphasised rule
  border-subtle: 'rgba(255, 255, 255, 0.05)' # whisper hairline
  border-pink: 'rgba(253, 66, 156, 0.40)' # brand-tinted ring
  # Semantic
  success-bg: 'rgba(34, 197, 94, 0.12)'
  success-text: '#86efac'
  warning-bg: 'rgba(245, 166, 35, 0.12)'
  warning-text: '#fcd34d'
  danger-bg: 'rgba(239, 68, 68, 0.12)'
  danger-text: '#fca5a5'
  info-bg: 'rgba(56, 96, 190, 0.15)'
  info-text: '#93b8ee'

typography:
  display:
    family: '"Neue Montreal", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
    weights: [300, 400, 500, 700]
    opentype-features: ['kern', 'liga', 'ss01']
  body:
    family: '"Neue Montreal", system-ui, -apple-system, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
    weights: [300, 400, 500]
    opentype-features: ['kern', 'liga']
  mono:
    family: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
    weights: [400, 500]
    opentype-features: ['tnum', 'zero']
  scale:
    display-hero:    { size: 96, weight: 500, lineHeight: 1.0,  tracking: '-0.013em', family: display, opentype: 'kern liga' }
    display:         { size: 72, weight: 500, lineHeight: 1.0,  tracking: '-0.013em', family: display, note: 'observed -0.96px @ 72 — the brand signature' }
    h1:              { size: 56, weight: 500, lineHeight: 1.05, tracking: '-0.012em', family: display }
    h2:              { size: 48, weight: 500, lineHeight: 1.05, tracking: '-0.012em', family: display }
    h3:              { size: 24, weight: 500, lineHeight: 1.2,  tracking: '0',        family: display }
    h4:              { size: 20, weight: 500, lineHeight: 1.3,  tracking: '0',        family: display }
    h5:              { size: 16, weight: 500, lineHeight: 1.4,  tracking: '0',        family: display }
    eyebrow:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.06em',   family: display, transform: uppercase }
    body-large:      { size: 18, weight: 300, lineHeight: 1.5,  family: body }
    body:            { size: 16, weight: 300, lineHeight: 1.5,  family: body }
    body-small:      { size: 14, weight: 300, lineHeight: 1.5,  family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.4,  family: body }
    caption-tabular: { size: 13, weight: 500, lineHeight: 1.4,  family: mono, opentype: 'tnum' }
    label:           { size: 12, weight: 500, lineHeight: 1.3,  family: display }
    code:            { size: 13, weight: 400, lineHeight: 1.55, family: mono, opentype: 'tnum zero' }
    code-micro:      { size: 11, weight: 400, lineHeight: 1.4,  family: mono }

radius:
  micro: 2
  sm: 4
  md: 8
  lg: 12
  xl: 16
  card: 20
  pill: 9999

spacing:
  base: 4
  scale: [1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 48, 64, 96, 128]

layout:
  page-width: 1280
  prose-width: 720
  site-gutter: 'clamp(20px, 5vw, 48px)'
  header-height: 64
  grid-columns: 12
  feed-pattern: 'long vertical feed; 4-6 column album-tile rows; composer at bottom'
  section-rhythm: '64-96px'

components:
  button-primary:
    background: '#fd429c'
    text: '#ffffff'
    padding: '12px 24px'
    radius: 9999
    border: 'none'
    font: 'Neue Montreal 500 / 14px'
    hover-bg: '#e02f8a'
    active-bg: '#cb2680'
    use: 'Primary CTA — hot-pink pill, cue-light register.'
  button-secondary:
    background: 'transparent'
    text: '#f7f4ef'
    padding: '12px 24px'
    radius: 9999
    border: '1px solid rgba(255, 255, 255, 0.18)'
    font: 'Neue Montreal 500 / 14px'
    hover-bg: 'rgba(255, 255, 255, 0.06)'
    use: 'Outline twin — cream pill on dark.'
  button-ghost:
    background: 'transparent'
    text: '#f7f4ef'
    padding: '8px 14px'
    radius: 12
    font: 'Neue Montreal 500 / 14px'
    hover-bg: 'rgba(255, 255, 255, 0.06)'
    use: 'Quiet utility — nav links, footer, repeated inline.'
  button-cream:
    background: '#f7f4ef'
    text: '#101012'
    padding: '12px 24px'
    radius: 9999
    font: 'Neue Montreal 500 / 14px'
    hover-bg: '#ffffff'
    use: 'Inverted CTA on dark — cream paper button against the booth ground.'
  card:
    background: '#1c1c1f'
    border: '1px solid rgba(255, 255, 255, 0.10)'
    radius: 20
    padding: '20px'
    use: 'Quiet info card — neutral-900 fill, hairline edge.'
  card-album-tile:
    background: '#1c1c1f'
    border: 'none'
    radius: 20
    padding: '0'
    aspect-ratio: '1 / 1'
    use: 'Album art tile — 1:1 cell at 20px radius, image bleeds to edge.'
  input:
    background: '#1c1c1f'
    border: '1px solid rgba(255, 255, 255, 0.18)'
    radius: 12
    padding: '12px 16px'
    font: 'Neue Montreal 400 / 14px'
    placeholder-color: '#a3a3a3'
    focus-ring: '0 0 0 2px #fd429c'
    use: 'Form fields, search.'
  prompt-composer:
    background: '#1c1c1f'
    border: '1px solid rgba(255, 255, 255, 0.18)'
    radius: 9999
    padding: '14px 20px 14px 24px'
    font: 'Neue Montreal 400 / 16px'
    placeholder-color: '#a3a3a3'
    inner-button: '40px pink circle hard-right with white note glyph'
    position: 'composer-at-bottom — sticky to viewport bottom on home'
    use: 'Studio composer — long-pill input, mirrors the in-product studio.'
  badge-tag:
    background: 'rgba(255, 255, 255, 0.08)'
    text: '#c2c2c1'
    padding: '4px 12px'
    radius: 9999
    font: 'Neue Montreal 500 / 12px'
    use: 'Genre / mood chip.'
  badge-pink:
    background: 'rgba(253, 66, 156, 0.15)'
    text: '#fd429c'
    padding: '4px 12px'
    radius: 9999
    font: 'Neue Montreal 500 / 12px'
    use: '"Now playing" badge or hearted indicator — pink pill.'
  nav-link:
    background: 'transparent'
    text: '#f7f4ef'
    padding: '8px 14px'
    font: 'Neue Montreal 500 / 14px'
    hover-text: '#fd429c'
    active-bg: 'rgba(255, 255, 255, 0.06)'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-music: 'cubic-bezier(0.32, 0.72, 0, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 320
  duration-page: 480
  reduced-motion: 'respects prefers-reduced-motion: reduce — looping waveforms freeze, all transforms collapse to opacity-only, durations halve.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  none: 'none'
  ambient: 'rgba(0, 0, 0, 0.30) 0 1px 3px'
  standard: 'rgba(0, 0, 0, 0.40) 0 4px 12px'
  elevated: 'rgba(0, 0, 0, 0.50) 0 16px 32px -8px'
  pink-glow: '0 0 24px rgba(253, 66, 156, 0.35)'
  modal: 'rgba(0, 0, 0, 0.70) 0 24px 48px -12px'
  ring: '0 0 0 2px #fd429c'
  ring-soft: '0 0 0 3px rgba(253, 66, 156, 0.30)'

accessibility:
  contrast-text-on-bg: 17.0        # #f7f4ef on #101012 — AAA at all sizes
  contrast-text-strong-on-bg: 18.5 # #ffffff on #101012 — AAA
  contrast-text-muted-on-bg: 11.0  # #c2c2c1 on #101012 — AAA
  contrast-text-soft-on-bg: 7.5    # #a3a3a3 on #101012 — AAA at body sizes
  contrast-text-on-brand: 4.5      # #ffffff on #fd429c — AA at body sizes
  contrast-link-pink-on-bg: 5.6    # #fd429c on #101012 — AA at body sizes
  focus-ring: '2px solid #fd429c with 2px offset'
  reduced-motion-honored: true
  keyboard-nav: 'tab order: skip-link → masthead → composer → feed → footer; Cmd/Ctrl+Enter submits composer.'
  prose-line-length: 'capped at 720px on text pages.'

dark-mode: optional                # Suno is dark-first; light mode exists for support pages.
colors-dark: same as colors        # primary surface is already dark.
---

## 1. Visual Theme & Atmosphere

Suno is a recording booth dressed as a chat app. The canvas drops to `#101012` — a near-black with a faint warm tint — and the body text is `#f7f4ef`, an off-white cream that reads like the paper of a vinyl sleeve under tungsten light. The combination is the brand's defining mood: warmer than Krea's absolute black, more atmospheric than Vercel's monochrome, more curated than a generic dark dashboard. The page reads as a recording studio at golden hour.

The display face is **Neue Montreal** by Pangram Pangram, set at 72px on a 72px line-height with `-0.96px` of tracking and weight **500** (medium). The medium weight on tight leading is the typographic signature: it produces a chunky, song-title cadence. "Make a house song about quitting your job" reads like a track listing on a record sleeve — not a marketing headline, not a research paper title, a *song title*. The choice of medium (not bold, not regular) puts Suno in Spotify's headline-weight register rather than the SaaS-marketing register of Stripe or Vercel.

The single chromatic accent is **hot-pink `#fd429c`** — used sparingly as a cue light on records, hearts, and the now-playing row. Suno's product surface is a long vertical feed of square album-art tiles, so the chrome stays monochromatic to let the user-generated artwork carry all the colour. The pink only appears when something is "active" — currently playing, freshly liked, the primary CTA. The discipline keeps the pink-on-near-black pairing recognisable from a thumbnail and ties the marketing surface to the product UI without breaking the metaphor.

Atmospheric vocabulary: **booth-warm, vinyl-sleeve-cream, song-title-cadence, hot-pink-cue-light, composer-at-bottom, chunky-medium-weight, tungsten-undertone, album-tile-feed, chat-app-as-music-studio, Pangram-Pangram-Neue-Montreal.** Card radii sit at 20px — softer than Linear's 6–8px, harder than Apple Music's near-circles — landing at the chat-app sweet spot. Section rhythm runs 64–96px; the feed packs tight while the chrome breathes.

**Key Characteristics**
- Near-black `#101012` canvas — warm-tinted, not absolute black
- Cream `#f7f4ef` body text — warmer than pure white, vinyl-sleeve paper register
- Neue Montreal (Pangram Pangram) at 72px / weight 500 / -0.96px tracking
- Hot-pink `#fd429c` accent — single chromatic moment, used as cue light
- Album-art tile grid — 1:1 squares at 20px radius
- Composer-at-bottom shape — chat-app metaphor for music creation
- Body weight 300 (light) — captions whisper, headlines shout
- Card radius 20px — Suno's signature shape, softer than Linear
- 10% white hairlines — tonal stacking, no heavy shadows
- Dark-first; cream surface only on rare light contexts

## 2. Color Palette & Roles

### Primary

- **bg** `#101012` — near-black with faint warm tint; the booth ground.
- **text** `#f7f4ef` — cream display copy; warmer than pure white, the vinyl-sleeve register.
- **bg-alt** `#1c1c1f` — secondary panel for chrome and inset zones.
- **brand-cta-bg** `#fd429c` — hot-pink primary CTA fill.

### Brand & Accent

- **brand** `#fd429c` — hot-pink cue light. Primary CTA, link hover, "now playing" indicator, hearts.
- **brand-deep** `#e02f8a` — pressed pink.
- **brand-soft** `rgba(253, 66, 156, 0.15)` — 15% pink wash for selected rows and hovered tiles.
- **accent-cobalt** `#3860be` — secondary blue accent, used in feature panels (never on chrome).
- **accent-deep** `#27455c` — deep teal-blue accent for inset feature backgrounds.
- **accent-amber** `#f5a623` — rare amber for warnings.

### Interactive

- **link** `#f7f4ef` — links stay cream on dark; underlined for affordance.
- **link-hover** `#fd429c` — pink on hover — the cue-light moment.
- **selected-bg** `rgba(253, 66, 156, 0.15)` — selected row in feed lists.
- **disabled** `#737373` — neutral-500 disabled chrome.

### Neutral Scale

- **cream** `#f7f4ef` — primary text, the vinyl-sleeve white.
- **white** `#ffffff` — rare absolute white for primary hero emphasis only.
- **cream-medium** `#e0ddd6` — slightly muted cream.
- **cool-grey-300** `#c2c2c1` — muted UI label.
- **cool-grey-400** `#a3a3a3` — quiet metadata.
- **cool-grey-500** `#737373` — disabled.
- **near-black** `#101012` — page canvas.
- **panel** `#1c1c1f` — raised surfaces.
- **whisper** `rgba(255, 255, 255, 0.05)` — softest hover wash.

### Surface & Borders

- **surface-0 (page)** — `#101012` near-black booth.
- **surface-1 (panel)** — `#1c1c1f` raised.
- **surface-translucent** — `rgba(28, 28, 31, 0.60)` — 60% panel for floated cards on imagery.
- **surface-soft** — `rgba(255, 255, 255, 0.05)` — whisper card on hover.
- **surface-paper** — `#f7f4ef` rare cream surface for paper-light contexts.
- **border** `rgba(255, 255, 255, 0.10)` — 10% white hairline (default).
- **border-strong** `rgba(255, 255, 255, 0.18)` — emphasised rule.
- **border-subtle** `rgba(255, 255, 255, 0.05)` — quietest division.
- **border-pink** `rgba(253, 66, 156, 0.40)` — brand-tinted ring.

### Shadow Colors

Suno's shadows are **deep-black with rare pink-glow accents**. The dark canvas absorbs cast shadows, so most surfaces lift via tonal stepping (`#101012` → `#1c1c1f` → whisper). The brand uses an exceptional **pink glow** (`0 0 24px rgba(253, 66, 156, 0.35)`) on the now-playing tile — a single brand-tinted shadow used as a cue-light effect. This is the rare case where the brand colour bleeds into elevation.

### Semantic

- **success** — bg `rgba(34, 197, 94, 0.12)`, text `#86efac`. Reserved for save-confirmation.
- **warning** — bg `rgba(245, 166, 35, 0.12)`, text `#fcd34d` (amber-300).
- **danger** — bg `rgba(239, 68, 68, 0.12)`, text `#fca5a5` (red-300).
- **info** — bg `rgba(56, 96, 190, 0.15)`, text `#93b8ee` — borrows the cobalt accent.

Note: Suno uses Tailwind 300-step text colours for semantic on dark to maintain AA contrast while staying calm. Saturated 500s would compete with the pink cue light.

## 3. Typography Rules

### Font Family

- **Display & Body**: `"Neue Montreal", ui-sans-serif, system-ui, sans-serif` — Pangram Pangram's modern grotesque, licensed and self-hosted. Closer to Helvetica Now than to Inter; relaxed terminals, tight apertures, slightly playful counters.
- **Mono**: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace` — used only for tabular data (track durations, BPM, sample rates).
- **OpenType features**: `kern` and `liga` enabled. `ss01` for the alternate single-storey `a` in Neue Montreal display sizes. `tnum` and `zero` enabled in mono.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| Display Hero | Neue Montreal | 96px | 500 | 1.0 | -0.013em | kern liga | Reserved for major launches |
| Display | Neue Montreal | 72px | 500 | 1.0 | -0.013em | kern liga | Homepage hero — the signature |
| H1 | Neue Montreal | 56px | 500 | 1.05 | -0.012em | liga | Page title |
| H2 | Neue Montreal | 48px | 500 | 1.05 | -0.012em | liga | Major section |
| H3 | Neue Montreal | 24px | 500 | 1.2 | normal | — | Sub-section |
| H4 | Neue Montreal | 20px | 500 | 1.3 | normal | — | Card heading |
| H5 | Neue Montreal | 16px | 500 | 1.4 | normal | — | Inline emphasis |
| Eyebrow | Neue Montreal | 12px | 500 | 1.4 | 0.06em | uppercase | Section pre-label |
| Body Large | Neue Montreal | 18px | 300 | 1.5 | normal | — | Lede paragraph |
| Body | Neue Montreal | 16px | 300 | 1.5 | normal | — | Default body — *light weight is the brand* |
| Body Small | Neue Montreal | 14px | 300 | 1.5 | normal | — | Compact UI body |
| Caption | Neue Montreal | 13px | 400 | 1.4 | normal | — | Image captions |
| Caption Tabular | mono | 13px | 500 | 1.4 | normal | tnum | Track duration, BPM |
| Label | Neue Montreal | 12px | 500 | 1.3 | normal | — | UI labels, chips |
| Code | mono | 13px | 400 | 1.55 | normal | tnum zero | Inline code (rare) |
| Code Micro | mono | 11px | 400 | 1.4 | normal | — | Footnote, version |

### Principles

- **Display weight 500 with tight leading is the signature.** Neue Montreal at 72px / 500 / 1.0 line-height / -0.96px tracking produces the chunky song-title cadence. The choice of medium (not 700, not 400) defines the brand voice.
- **Body weight 300 (light) is non-negotiable.** The contrast between heavy 500 headlines and 300 body is the brand's typographic signal: song titles shout, captions whisper.
- **Single-family discipline.** Neue Montreal carries display, body, captions, labels — everything except tabular numerals.
- **Negative tracking only at display sizes.** -0.013em at 72px+, -0.012em at 48–56px, normal at 24px and below.
- **Body size 16/24.** Slightly tighter than editorial 18/28; matches the chat-app density of Discord and Linear.
- **Eyebrow uses 0.06em tracking + uppercase.** Wider than Anthropic's 0.04em, narrower than Krea's 0.08em — the music-context register.
- **No italics in display.** Italics belong to lyric quotes in body copy.
- **OpenType: ss01 in display** — switches to the alternate `a` glyph in Neue Montreal headlines for visual interest.

## 4. Component Stylings

### Buttons

**Primary (Pink Pill)**
- Background: `#fd429c` hot-pink. Text: `#ffffff`, Neue Montreal 500 / 14px.
- Padding: `12px 24px`. Radius: `9999` (full pill). No border.
- Hover: bg → `#e02f8a` over 200ms.
- Active: bg → `#cb2680` (pressed beat).
- Focus: 2px pink ring with 2px offset.
- Use: Primary CTA — *Make a song, Sign up, Try Suno.*

**Secondary (Outline Pill)**
- Background: transparent. Text: `#f7f4ef`, Neue Montreal 500 / 14px.
- Border: `1px solid rgba(255, 255, 255, 0.18)`. Radius: `9999` (pill).
- Hover: bg → `rgba(255, 255, 255, 0.06)`.
- Use: Twin to primary — *Listen on Spotify, Read more.*

**Ghost (Quiet)**
- Background: transparent. Text: `#f7f4ef`, Neue Montreal 500 / 14px.
- Padding: `8px 14px`. Radius: `12px`.
- Hover: bg → `rgba(255, 255, 255, 0.06)`.
- Use: Nav links, footer, repeated inline.

**Cream (Inverted)**
- Background: `#f7f4ef` cream. Text: `#101012`, Neue Montreal 500 / 14px.
- Padding: `12px 24px`. Radius: `9999`.
- Hover: bg → `#ffffff`.
- Use: Rare inverted CTA — paper button on the booth ground for press contexts.

### Cards

**Editorial Card**
- Background: `#1c1c1f`. Border: `1px solid rgba(255, 255, 255, 0.10)`. Radius: `20px`. Padding: `20px`.
- Shadow: none at rest; on hover, `rgba(0, 0, 0, 0.40) 0 4px 12px`.
- Use: Feature card, capability tile.

**Album Tile**
- Background: `#1c1c1f` (placeholder while artwork loads). Border: none. Radius: `20px`. Aspect: 1:1.
- Hover: 24px soft shadow at 50% black + 1.02× scale; play-button overlay fades in.
- Use: Album art grid — image bleeds to edge, title/artist drop below tile in cream/muted.

**Now-Playing Tile**
- Same as album tile, but with `pink-glow` shadow (`0 0 24px rgba(253, 66, 156, 0.35)`).
- Optional 1px pink hairline ring.
- Use: The single tile in view that's currently playing — pink glow signals state.

### Badges, Tags, Pills

**Genre Tag** — bg `rgba(255, 255, 255, 0.08)`, text `#c2c2c1`, Neue Montreal 500 / 12px, padding `4px 12px`, radius `9999`. Hover deepens bg to 12% white.

**Pink Pill** — bg `rgba(253, 66, 156, 0.15)`, text `#fd429c`, radius `9999`. "Now playing", "Hearted", "New" badges.

**Eyebrow Label** — no chrome, just type. Neue Montreal 500 / 12px / uppercase / 0.06em tracking, colour `#a3a3a3`.

### Inputs / Forms

**Text Input**
- Background: `#1c1c1f`. Border: `1px solid rgba(255, 255, 255, 0.18)`. Radius: `12px`. Padding: `12px 16px`.
- Font: Neue Montreal 400 / 14px. Placeholder: `#a3a3a3`.
- Focus: `0 0 0 2px #fd429c` ring, border → `#fd429c`.
- Error: border → `#ef4444`, helper red below.

**Prompt Composer (Hero / Studio)**
- Background: `#1c1c1f`. Border: `1px solid rgba(255, 255, 255, 0.18)`. Radius: `9999` (full pill). Padding: `14px 20px 14px 24px`.
- Font: Neue Montreal 400 / 16px. Placeholder: `#a3a3a3` ("Describe a song…").
- Inner button: 40px pink circle hard-right, white note glyph.
- Position: sticky-to-viewport-bottom on the home feed, mirroring the in-product studio composer.
- Use: The brand's hero shape — composer-at-bottom that ties marketing to product UI.

### Navigation

- Header height `64px`. Background `transparent` over hero (uses `backdrop-filter: blur(12px)` on scroll).
- Logo: Suno wordmark in cream, Neue Montreal 500.
- Nav links: Neue Montreal 500 / 14px, colour `#f7f4ef`, padding `8px 14px`. Hover: text → `#fd429c`.
- Right-side: ghost "Sign in" + primary pink "Try Suno" button.
- Mobile (<640px): hamburger collapses to a full-screen sheet; links stack at 24px / 500.

### Optional Components

**Dropdown Menu** — bg `#1c1c1f`, border `rgba(255, 255, 255, 0.10)`, radius `12px`, shadow `rgba(0, 0, 0, 0.50) 0 12px 24px -8px`. Items: Neue Montreal 400 / 14px, hover bg `rgba(255, 255, 255, 0.06)`.

**Tooltip** — bg `#1c1c1f`, text `#f7f4ef`, radius `8px`, padding `6px 10px`, font `12px / 500`.

**Toast** — bg `#1c1c1f`, border `rgba(255, 255, 255, 0.10)`, radius `12px`, padding `12px 16px`, shadow standard.

**Modal** — bg `#1c1c1f`, radius `20px`, shadow `rgba(0, 0, 0, 0.70) 0 24px 48px -12px`, max-width `560px`. Backdrop: 80% black.

**Waveform Visualizer** — translucent panel `rgba(255, 255, 255, 0.05)` with pink-tinted bars; animated only on actively-playing tiles.

## 5. Layout Principles

### Spacing System

- **Base unit**: 4px.
- **Scale**: 4, 8, 12, 16, 20, 24, 32, 48, 64, 96, 128 — chat-app density.
- **Density observation**: Suno is *medium-tight*. The album feed packs at 16–24px gutters; chrome breathes at 64–96px section rhythm. The composer-at-bottom requires the feed to be navigable without competing for vertical space.

### Grid & Container

- **Page max width**: `1280px` for chrome; feed pages bleed to viewport.
- **Site gutter**: `clamp(20px, 5vw, 48px)`.
- **Grid**: 12 columns with 16px gutters.
- **Album feed grid**: 4–6 columns at 1:1 aspect ratio with 16px gutters; collapses to 3 → 2 → 1 across breakpoints.
- **Hero treatment**: 72px headline left-aligned, body 16px / 300 below in cream; sticky composer pill at viewport bottom.

### Whitespace Philosophy

The whitespace is **booth-warm**. Section gutters at 64–96px; intra-section at 16–24px. The page reads tighter than Anthropic's broadsheet but warmer than a developer dashboard — closer to a curated record-store website.

### Section Cadence

- Hero (booth-dark) → Album feed (booth-dark, full-bleed grid) → Feature panels (occasional cobalt-tinted dark for contrast) → Footer (slightly lighter `#1c1c1f`).
- The whole site stays in dark territory; cream surfaces appear only on rare paper-light contexts (legal, terms).
- Section breaks: 64–96px vertical space + 1px hairlines (`rgba(255, 255, 255, 0.10)`).

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| Micro | 2px | Decorative dividers |
| Standard (sm) | 4px | Compact chips (rare) |
| Comfortable (md) | 8px | Sub-controls, code blocks |
| Relaxed (lg) | 12px | Inputs, dropdowns, ghost buttons |
| Featured (xl) | 16px | Inset cards |
| Card | 20px | Cards, album tiles, modals — Suno's signature |
| Pill | 9999px | Primary CTA, composer, tag chips, sign-in |

Suno's signature radius is **20px on cards and album tiles** — softer than Linear/Vercel, harder than Apple Music's near-circles. Pills (`9999px`) are reserved for the primary CTA, the composer, and tag chips. Buttons land at `9999` (pill) for primary/secondary; `12px` for ghost (quieter).

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat — no shadow | Default page surface, hero, body sections |
| 1 | Tonal — `#1c1c1f` against `#101012` | Cards, panels |
| 2 | `rgba(0,0,0,0.30) 0 1px 3px` | Sticky nav on scroll |
| 3 | `rgba(0,0,0,0.40) 0 4px 12px` | Hover-lifted cards |
| 4 | `rgba(0,0,0,0.50) 0 16px 32px -8px` | Dropdowns, popovers |
| 5 | `rgba(0,0,0,0.70) 0 24px 48px -12px` | Modals, dialogs |
| Special | `0 0 24px rgba(253, 66, 156, 0.35)` | Pink-glow on now-playing tile only |

### Shadow Philosophy

Suno's depth is **tonal-first with a single brand-tinted exception**. The dark canvas absorbs cast shadows, so most surfaces lift via tonal stepping. The exception: the "now-playing" album tile gets a pink-glow shadow (`0 0 24px rgba(253, 66, 156, 0.35)`) — the only place the brand colour bleeds into elevation. This is intentional: the glow signals *currently playing* without needing a separate badge or indicator.

## 8. Interaction & Motion

### Easing Curves

- **`ease-standard`**: `cubic-bezier(0.4, 0, 0.2, 1)` — Material default.
- **`ease-emphasized`**: `cubic-bezier(0.2, 0, 0, 1)` — punchier exit; modal enter.
- **`ease-music`**: `cubic-bezier(0.32, 0.72, 0, 1)` — slow-out, fast-settle; tile reveal, waveform animation.

### Duration Buckets

- **Fast (100ms)** — colour transitions, focus rings, link hovers.
- **Standard (200ms)** — button hover, card hover, dropdown reveal.
- **Slow (320ms)** — modal enter/exit, composer expansion.
- **Page (480ms)** — route transitions, hero reveal sequences.

### Per-Component Micro-States

- **Button hover (primary pink)**: bg `#fd429c` → `#e02f8a` over 200ms; subtle 1.02× scale on the icon glyph.
- **Album tile hover**: scale 1.02× over 200ms + 24px shadow + play-button overlay fades in over 100ms.
- **Now-playing tile**: pink glow pulses subtly (`@keyframes glow-pulse` from 35% to 50% opacity over 2s, infinite, respects reduced-motion).
- **Link hover**: colour `#f7f4ef` → `#fd429c` over 100ms; underline thickens 1px → 2px.
- **Heart toggle**: empty → pink fill with 1.2× scale over 200ms ease-music (springy "boop").
- **Composer focus**: ring grows from 2px to 3px at 30% pink; placeholder fades to 60%.

### Page Transitions

Hero / feed cross-fade over 480ms ease-music. Album tiles fade in via `IntersectionObserver` at 80% viewport, 320ms duration with 12px translate-up. Composer persists across navigation (sticky-to-bottom).

### Reduced Motion

`@media (prefers-reduced-motion: reduce)` — looping waveforms freeze on a static frame; pink glow stops pulsing (holds at 35%); all transforms collapse to opacity-only; durations halved.

## 9. Accessibility & A11y

### Contrast Pairs

- **`#f7f4ef` text on `#101012` bg**: 17.0:1 — AAA at all sizes.
- **`#ffffff` text on `#101012` bg**: 18.5:1 — AAA.
- **`#c2c2c1` text on `#101012` bg**: 11.0:1 — AAA at body sizes.
- **`#a3a3a3` text on `#101012` bg**: 7.5:1 — AAA at body sizes.
- **`#737373` text on `#101012` bg**: 4.6:1 — AA at body sizes.
- **`#ffffff` text on `#fd429c` brand**: 4.5:1 — AA at body sizes; safe for pink CTA.
- **`#fd429c` text on `#101012` bg**: 5.6:1 — AA at body sizes; safe for link hover.

### Focus Indicators

- Default ring: `0 0 0 2px #fd429c` with 2px offset.
- Soft ring (composer focus): `0 0 0 3px rgba(253, 66, 156, 0.30)`.
- All interactive surfaces show a visible focus state.

### ARIA Patterns

- **Navigation**: `<nav aria-label="Main">` with skip-link.
- **Composer**: `<form aria-label="Create song">` with `aria-label` on the input.
- **Album feed**: `role="feed"` on the grid; each tile is `<article>` with `aria-labelledby` pointing at the title; the now-playing tile uses `aria-current="true"`.
- **Audio player**: `role="region" aria-label="Audio player"` with controls labelled.
- **Dialog**: `role="dialog" aria-modal="true" aria-labelledby` with focus trap.
- **Live regions**: `aria-live="polite"` for "song ready" toasts.

### Keyboard Navigation

- Tab order: skip-link → masthead → composer → feed → footer.
- `Cmd/Ctrl+Enter` from anywhere submits the composer.
- Space toggles play/pause when focused on a tile.
- Arrow keys navigate within the feed grid.
- `Esc` closes modals.

### Screen Reader Hints

- Album tiles: alt text matches "<title> by <artist>".
- Now-playing state: `aria-current="true"` plus `aria-label="Now playing: <title>"`.
- Heart button: `aria-pressed` toggles between "Like" and "Liked".
- Decorative pink glow: `aria-hidden="true"`.

### Reduced Motion

Honoured globally. Looping waveforms freeze; pink glow holds static; durations halved.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Use |
|---|---|---|
| Mobile | < 640px | Single-column feed; full-screen nav |
| Tablet | 640–1024px | 2–3 column album feed |
| Desktop | 1024–1280px | 4-column album feed; full nav |
| Wide | 1280–1536px | 5-column album feed |
| Ultra | > 1536px | Page locks at 1280; gutters expand; feed up to 6 columns |

### Touch Targets

- Minimum tap target: 44×44px.
- Pill buttons: 48px minimum height on mobile (12px vertical padding).
- Album tile: tile = tap target; play overlay icon 48×48 at center.
- Composer mic / send buttons: 48×48 visual + extended tap area.

### Collapsing Strategy

- **Header**: full nav at ≥1024px; hamburger sheet below.
- **Hero**: 72px → 56px → 40px headline across desktop/tablet/mobile.
- **Composer**: full-width at mobile; max-width 720px on tablet+; remains sticky-bottom across all sizes.
- **Album grid**: 5-up → 4-up → 3-up → 2-up → 1-up across sizes.
- **Section spacing**: 96px → 64px → 48px across sizes.

### Image Behavior

- Album artwork uses `srcset` with 1x/2x/3x for crisp Retina rendering.
- Native lazy-loading on below-fold tiles.
- `aspect-ratio: 1 / 1` locked.

### Container Queries

Used inside album tiles to switch caption layout (single line vs. wrap) when tile width crosses 200px.

## 11. Content & Voice

### Tone

**Playful, music-aware, confidently casual.** Suno writes like a friend who runs a small label — full sentences, occasional warmth, no marketing exuberance but not Anthropic's literary calm either. Headlines are song-like ("Make a song about anything"); subheads explain. The voice positions Suno as a creative tool with personality.

### Microcopy Patterns

- **Button verbs**: "Make a song," "Try Suno," "Continue," "Save," "Share." Sometimes uses lowercase ("make a song") for personality.
- **Error messages**: "Couldn't generate the song. Try again, or [contact support]."
- **Success confirmations**: "Saved." "Song's ready." Brief, warm.
- **Loading states**: "Composing…" or "Mixing…" — music-aware language even on marketing.

### Empty States

- *"No songs yet. Make one above."*
- *"No matches. Try a different mood."*
- Never uses "Oops!" — empty is normal.

### CTA Verb Conventions

- Primary on hero: "Make a song," "Try Suno," "Get started"
- Secondary: "Listen to examples," "Watch the demo," "View pricing"
- Footer: "Discord," "Pricing," "API," "Support"

The voice is **invitational with a creative-tool warmth** — closer to GarageBand's friendly competence than to a research lab register.

## 12. Dark Mode & Theming

**Dark-first; light mode exists only for support pages.** The marketing surface, the album feed, and the studio are all rendered on the `#101012` booth canvas — that's the brand's defining choice.

The light-mode tokens (used at `/legal`, `/privacy`, `/terms`) flip the palette: `bg: #f7f4ef`, `text: #101012`, `text-muted: #737373`, `border: rgba(0, 0, 0, 0.05)`. The pink stays at `#fd429c` (slightly darker `#e02f8a` for AA contrast on cream). The light variant is utilitarian — it doesn't carry the brand's booth atmosphere.

The single rule: **never** show the marketing surface or the album feed in light mode. The booth is the brand.

## 13. Lineage & Influences

Suno's identity is **a recording booth dressed as a chat app**. The canvas runs `#101012` — a near-black with a faint warm tint — and the body text is `#f7f4ef`, an off-white cream that reads like the paper of a vinyl sleeve under tungsten light. **Neue Montreal** by Pangram Pangram carries the type, set at 72px/72px with `-0.96px` tracking; the medium weight (500) on a tight leading creates a chunky, song-title cadence. The single chromatic accent is a hot pink `#fd429c` — used sparingly as a cue light on records, hearts, and the now-playing row.

Suno's product surface is a long vertical feed of square album-art tiles, so the chrome stays monochromatic to let the user-generated artwork carry all the colour. The UI rounding sits at 12–20px — softer than Linear's 6–8px, harder than Apple Music's near-circles — landing at the chat-app sweet spot. The pink accent tracks back to OG SoundCloud / mid-2010s music UI, but Suno renders it cleaner. The composer-at-bottom shape borrows directly from ChatGPT and Claude's chat UI — Suno frames music creation as a chat conversation.

What it inherits: Apple Music's dark-canvas + album-tile feed pattern; SoundCloud's pink-magenta as music-context accent; ChatGPT/Claude's composer-at-bottom shape; Pangram Pangram's modern-grotesque typographic register. What it borrows from contemporaries: Spotify's headline-weight register; Discord's playful microcopy. What it rejects: Linear's monochrome cobalt accent (Suno's pink is warmer, more music-pop); Anthropic's editorial restraint (Suno is louder, more playful).

**Named influences:**

- **Apple Music** — dark-canvas + album-tile feed pattern; pink-magenta as music-context accent. *https://www.apple.com/apple-music/*
- **Pangram Pangram (Neue Montreal)** — the medium-weight modern grotesque that sets the song-title cadence. *https://pangrampangram.com/products/neue-montreal*
- **ChatGPT / Claude** — long vertical feed + composer-at-bottom shape; chat app as music studio. *https://chat.openai.com*
- **SoundCloud (legacy)** — pink-magenta cue-light accent in music UI.
- **Spotify** — headline-weight register; medium-weight display.

## 14. Do's and Don'ts

### Do

- **Do** keep the canvas at `#101012` — near-black with a faint warm tint, never absolute black.
- **Do** typeset display in Neue Montreal at **500** with tight leading; the chunky song-title cadence is the brand's voice.
- **Do** use `#f7f4ef` cream rather than pure white for body — the warm tint matters against the `#101012` ground.
- **Do** reserve `#fd429c` for music-context cues only (now-playing, hearts, primary CTA, link hover); never spread it across general UI.
- **Do** drop body weight to **300** (light); the contrast between heavy headline and light body is the brand's signature.
- **Do** keep card/album-tile radius at 20px — softer than Linear, harder than Apple Music.
- **Do** use the composer-at-bottom shape — the chat-app metaphor is the product-tying signal.
- **Do** use 10% white hairlines for borders (`rgba(255, 255, 255, 0.10)`).
- **Do** add a pink glow shadow to the now-playing tile — the only brand-tinted shadow in the system.
- **Do** loop waveforms silently with `playsinline` and freeze on `prefers-reduced-motion`.

### Don't

- **Don't** introduce a second chromatic accent on the marketing surface — the cobalt and deep teal belong to feature panels, not chrome.
- **Don't** use rounded-circle avatars on album tiles — the 20px squares are the format.
- **Don't** drop body weight below 300; below that the cream-on-near-black contrast collapses.
- **Don't** push display headlines above 96px — the brand's chunkiness lives in 72–96px territory.
- **Don't** bold display headlines (700) — Suno's signature is medium (500).
- **Don't** use the pink as a background fill beyond the 15% wash; solid pink panels collapse the brand.
- **Don't** insert gradients or meshes; the booth is flat and tonal.
- **Don't** show the marketing surface in light mode — the booth is the brand.
- **Don't** apologise in microcopy — empty states are normal.
- **Don't** mix sans display with serif body — Neue Montreal carries everything.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #101012
bg-alt: #1c1c1f
surface: #1c1c1f
surface-soft: rgba(255, 255, 255, 0.05)
text: #f7f4ef
text-strong: #ffffff
text-muted: #c2c2c1
text-soft: #a3a3a3
brand: #fd429c
brand-deep: #e02f8a
border: rgba(255, 255, 255, 0.10)
border-strong: rgba(255, 255, 255, 0.18)
```

### Example Component Prompts

1. **"Create a Suno-style hero — `#101012` near-black canvas with faint warm tint, 72px headline in Neue Montreal weight **500** with `-0.96px` tracking and cream `#f7f4ef` text on a 72px line-height. Below the headline, 16px body in Neue Montreal weight **300** in `#c2c2c1`. Sticky composer pill at viewport bottom: `#1c1c1f` background, `1px rgba(255, 255, 255, 0.18)` border, 9999 radius, 40px pink `#fd429c` send circle hard-right with white note glyph."**

2. **"Design a Suno album tile — 1:1 aspect, 20px radius, `#1c1c1f` placeholder ground while artwork loads, no border. Hover scales 1.02× with a 24px soft shadow at 50% black. Title and artist drop below the tile: title in Neue Montreal 500 / 14px cream, artist in 300 / 13px in `#a3a3a3`."**

3. **"Build the now-playing tile state — same as album tile, but with a pink glow shadow `0 0 24px rgba(253, 66, 156, 0.35)` and an optional 1px pink hairline ring. The glow pulses subtly between 35% and 50% opacity over 2s, paused under prefers-reduced-motion."**

4. **"Compose a Suno nav — 64px header, transparent background with 12px backdrop-blur on scroll, Suno wordmark hard-left in cream Neue Montreal 500. Link list Neue Montreal 500 / 14px cream with `#fd429c` hover. Right-side: ghost 'Sign in' + primary pink 'Try Suno' pill button."**

5. **"Render a Suno composer pill — `#1c1c1f` background, `1px rgba(255, 255, 255, 0.18)` border, 9999 radius, `14px 20px 14px 24px` padding, 16px placeholder 'Describe a song…' in `#a3a3a3`, Neue Montreal 400. 40px pink `#fd429c` circle hard-right with white note glyph. Focus expands ring to 3px at 30% pink. Sticky to viewport bottom on home."**

6. **"Create a Suno feature panel — full-bleed `#101012` canvas, 96px vertical padding, 48px Neue Montreal 500 headline in cream left-aligned with 12-col grid, 16px body in `#c2c2c1` weight **300** constrained to a 720px column. Single ghost-outline pill 'Listen to examples' CTA below."**

### Iteration Guide

1. **Start with `#101012`, not `#000000`.** If the bg is absolute black, you're in Krea's register; Suno warms the canvas slightly.
2. **Switch body to weight 300.** If body is 400, the contrast between headline and body collapses. Light body is the brand.
3. **Bump card radius to 20px.** If cards are at 8–12px, you're in Linear/Vercel territory; Suno softens to 20.
4. **Add the pink — but only once in view.** Pink `#fd429c` is the cue light: primary CTA, now-playing tile, link hover. Never as a fill.
5. **Use Neue Montreal at 500, not 700.** Bold display collapses the song-title cadence into Stripe-marketing register.
6. **Use cream `#f7f4ef`, not pure white.** The warm tint is the vinyl-sleeve signal.
7. **Position the composer at the bottom.** Sticky-to-viewport-bottom mirrors the in-product studio metaphor.
8. **Calm the verbs.** Replace "Sign up free!" with "Try Suno"; replace "Get started today!" with "Make a song."
