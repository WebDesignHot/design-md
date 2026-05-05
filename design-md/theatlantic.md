---
name: The Atlantic
tagline: Modern serif headlines on cream-paper, signature Atlantic orange `#fbb33b`, long-form magazine reading rendered for the web.
author: webdesignhot
source_url: https://www.theatlantic.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [media]
tags: [editorial, serif, magazine, longform, light, orange, literary]
preview_swatch: ['#fbf8f1', '#fbb33b', '#1a1a1a']
related: [substack, ghost, medium]
description: 'The Atlantic runs the most literary-magazine system of any major US web publication. The canvas is paper-cream (`#fbf8f1`) — a warm, slightly-yellowed off-white that distinguishes it from clinical white news sites and ports the printed magazine''s newsprint warmth to the screen. Headlines set in a custom modern serif (Atlantic Serif, a Didone-flavored display face), body in a humanist serif body cut, and labels in a tracked uppercase sans. The signature accent — the Atlantic A monogram orange (`#fbb33b`) — appears in section accents, the masthead A, the story-of-the-day chip, and the rare brand moment. Long-form features (the cover-class essays the magazine is famous for) get full-bleed art treatment with drop-caps, italic pull-quotes, and generous 720px reading columns. The result is the canonical literary magazine on the web: warm, considered, photo-rich, and unmistakably a magazine rather than a newspaper.'

colors:
  bg: '#fbf8f1'                  # cream paper — Atlantic's signature warm canvas
  bg-section: '#f5f1e6'           # slightly darker cream sub-band
  bg-feature: '#ffffff'           # cover-class features sometimes shift to pure white
  bg-dark: '#1a1a1a'              # dark mode + dark cover-class features
  surface: '#fbf8f1'
  surface-paper: '#ffffff'        # photo-card insert and chart panels
  surface-soft: '#f5f1e6'
  surface-strong: '#e8e3d5'
  surface-quote: '#f5f1e6'        # pull-quote backdrop
  text: '#1a1a1a'                # near-black ink, slightly warmer than #121212 (matches cream)
  text-strong: '#000000'
  text-muted: '#5a5a5a'           # bylines, captions
  text-soft: '#7a7a7a'           # photo credits, secondary meta
  text-faint: '#a0a0a0'           # disabled
  brand: '#fbb33b'                # Atlantic A-monogram orange — the signature
  brand-hover: '#e89e1c'           # darker orange
  brand-deep: '#c97e07'            # heaviest orange — used on Op-Doc / Politics tag chips
  brand-soft: '#fef0d4'            # tint surface
  brand-A-red: '#c41e3a'           # the masthead A wordmark sometimes renders red on print covers
  link: '#1a1a1a'                  # Atlantic uses ink underlined — distinctive choice (no link blue)
  link-hover: '#000000'            # underline thickens on hover
  link-visited: '#5a5a5a'          # visited dims to muted ink
  on-brand: '#1a1a1a'              # ink on orange — orange is high luminance, ink contrasts cleanly
  border: '#d8d3c5'              # warm-gray hairline calibrated for cream
  border-soft: '#e0dccf'
  border-strong: '#7a7a7a'
  border-rule: '#1a1a1a'
  shadow-card: 'rgba(26,26,26,0.06)'
  shadow-elev: 'rgba(26,26,26,0.1)'
  shadow-modal: 'rgba(26,26,26,0.2)'
  scrim: 'rgba(26,26,26,0.5)'
  success: '#1a7f37'
  success-soft: '#e3f2e7'
  warning: '#cc7a00'
  warning-soft: '#fde9cc'
  danger: '#c41e3a'
  danger-soft: '#f5d4d8'
  info: '#1a4972'
  info-soft: '#dde6ef'
  politics-accent: '#c41e3a'        # Politics section red
  ideas-accent: '#fbb33b'           # Ideas section uses brand orange
  culture-accent: '#7a3de8'         # Culture section purple
  technology-accent: '#1a4972'      # Technology section navy
  family-accent: '#0d7060'          # Family section teal
  health-accent: '#127f4e'          # Health section green
  cover-tag: '#fbb33b'              # cover-class tag chip color

typography:
  display:
    family: '"AtlanticSerif", "Atlantic Serif", "Atlantic Condensed", Georgia, "Times New Roman", serif'
    weights: [300, 400, 500, 600, 700, 900]
    opentype-features: ['liga', 'kern', 'dlig']
  body:
    family: '"AtlanticSerifBody", "Atlantic Serif Body", "Atlantic Body", Georgia, "Times New Roman", serif'
    weights: [400, 500, 700]
  sans:
    family: '"AtlanticSans", "Atlantic Sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 700]
  mono:
    family: 'Menlo, Consolas, "Courier New", monospace'
    weights: [400]
  scale:
    masthead-wordmark:   { size: 64, weight: 700, lineHeight: 1.0,  tracking: '-0.005em', family: display, opentype: ['liga'] }
    cover-headline:      { size: 60, weight: 700, lineHeight: 1.05, tracking: '-0.02em', family: display }
    headline-mega:       { size: 52, weight: 700, lineHeight: 1.07, tracking: '-0.015em', family: display }
    headline-jumbo:      { size: 42, weight: 700, lineHeight: 1.1,  tracking: '-0.01em', family: display }
    headline-xl:         { size: 32, weight: 700, lineHeight: 1.13, tracking: '-0.005em', family: display }
    headline-lg:         { size: 26, weight: 700, lineHeight: 1.18, tracking: '0',         family: display }
    headline-md:         { size: 22, weight: 700, lineHeight: 1.2,  tracking: '0',         family: display }
    headline-sm:         { size: 18, weight: 700, lineHeight: 1.25, tracking: '0',         family: display }
    deck-italic:         { size: 20, weight: 400, lineHeight: 1.4,  tracking: '0',         family: display, style: italic }
    body-md:             { size: 20, weight: 400, lineHeight: 1.6,  tracking: '0',         family: body }
    body-sm:             { size: 17, weight: 400, lineHeight: 1.55, tracking: '0',         family: body }
    pull-quote:          { size: 32, weight: 400, lineHeight: 1.3,  tracking: '0',         family: display, style: italic }
    drop-cap:            { size: 80, weight: 700, lineHeight: 1.0,  tracking: '0',         family: display }
    byline:              { size: 13, weight: 700, lineHeight: 1.3,  tracking: '0.06em',    family: sans, transform: uppercase }
    dateline:            { size: 13, weight: 400, lineHeight: 1.3,  tracking: '0',         family: sans }
    section-label:       { size: 12, weight: 700, lineHeight: 1.0,  tracking: '0.12em',    family: sans, transform: uppercase }
    caption:             { size: 14, weight: 400, lineHeight: 1.4,  tracking: '0',         family: sans }
    photo-credit:        { size: 11, weight: 400, lineHeight: 1.3,  tracking: '0.06em',    family: sans, transform: uppercase }
    micro-meta:          { size: 12, weight: 500, lineHeight: 1.2,  tracking: '0.06em',    family: sans, transform: uppercase }
    button-label:        { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0.08em',    family: sans, transform: uppercase }
    nav-link:            { size: 13, weight: 700, lineHeight: 1.0,  tracking: '0.1em',     family: sans, transform: uppercase }
    cover-tag:           { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0.12em',    family: sans, transform: uppercase }

radius:
  micro: 0
  sm: 2
  md: 4
  pill: 9999
  none: 0

spacing:
  base: 4
  scale: [2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160]

layout:
  page-width: 1200
  prose-width: 720         # Atlantic uses a wider reading column than NYT/WaPo — long-form magazine breathing room
  feature-width: 1024
  header-height: 64
  masthead-rule-weight: 1.5
  section-rule-weight: 1
  hairline-weight: 1

components:
  button-primary:
    bg: '#1a1a1a'
    color: '#fbf8f1'
    radius: 0
    padding: '14px 24px'
    height: 48
    font: button-label
    use: 'Subscribe, Continue — primary CTA. Ink fill, square corners.'
  button-primary-hover:
    bg: '#000000'
    color: '#fbf8f1'
    use: 'Pointer-down on dark CTAs.'
  button-secondary:
    bg: 'transparent'
    color: '#1a1a1a'
    border: '1px solid #1a1a1a'
    radius: 0
    padding: '14px 24px'
    height: 48
    use: 'Already a subscriber, secondary actions.'
  button-text-link:
    bg: 'transparent'
    color: '#1a1a1a'
    use: 'Inline body links — ink with underline (no link blue).'
  cover-tag:
    bg: '#fbb33b'
    color: '#1a1a1a'
    radius: 0
    padding: '4px 8px'
    font: cover-tag
    use: 'Magazine cover-class tag (orange chip) on flagship features.'
  card-headline:
    bg: '#fbf8f1'
    color: '#1a1a1a'
    radius: 0
    border: 'top 1px solid #d8d3c5'
    use: 'Default river card on cream — photo above, Atlantic Serif headline, italic deck, sans byline.'
  card-photo:
    bg: '#ffffff'
    color: '#1a1a1a'
    radius: 0
    use: 'Photo card lifted onto pure white inside the cream page.'
  card-feature-cover:
    bg: '#1a1a1a'
    color: '#fbf8f1'
    radius: 0
    use: 'Cover-class feature card with dark ground (Atlantic''s signature dark feature treatment).'
  card-section-kicker:
    bg: '#fbf8f1'
    color: '#1a1a1a'
    border-top: '4px solid var(--section-accent)'
    use: 'Section card with 4px section-color stripe.'
  card-opinion:
    bg: '#f5f1e6'
    color: '#1a1a1a'
    radius: 0
    use: 'Opinion / Ideas — slightly darker cream sub-band.'
  pull-quote:
    bg: 'transparent'
    color: '#1a1a1a'
    border: 'top 1px solid #1a1a1a; bottom 1px solid #1a1a1a'
    padding: '32px 0'
    use: 'Italic Atlantic Serif 32px between two ink rules — Atlantic''s flagship pull-quote (largest of major news brands).'
  drop-cap:
    color: '#1a1a1a'
    family: display
    use: 'On long-form: 80px Atlantic Serif 700 with 3-line drop on the lead paragraph.'
  text-input:
    bg: '#ffffff'
    color: '#1a1a1a'
    radius: 4
    height: 48
    padding: '14px 16px'
    border: '1px solid #7a7a7a'
    focus: 'border thickens to 2px ink'
    use: 'Email entry, search input.'
  paywall-cta:
    bg: '#1a1a1a'
    color: '#fbf8f1'
    padding: '40px 32px'
    use: 'Dark paywall with cream text — Atlantic''s reverse pairing.'
  nav-section-link:
    color: '#1a1a1a'
    font: nav-link
    padding: '14px 12px'
    use: 'Section nav (Politics, Ideas, Culture, Technology, Family, Health, Books). Hover: ink underline grows.'
  search-icon:
    bg: 'transparent'
    color: '#1a1a1a'
    use: '32×32 ink magnifying-glass.'
  newsletter-card:
    bg: '#fbb33b'
    color: '#1a1a1a'
    radius: 0
    use: 'Newsletter promo (e.g., The Atlantic Daily) with brand orange ground.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-out-soft: 'cubic-bezier(0.0, 0, 0.2, 1)'
  duration-fast: 100
  duration-standard: 220
  duration-slow: 360
  card-hover: 'image scales 1.0 → 1.03 inside square clip; headline gains 1px ink underline; 220ms standard'
  longread-scroll-progress: 'top progress bar tracks scroll position through long-form features — orange (#fbb33b) fill on cream rail'
  reduced-motion: 'respects prefers-reduced-motion: reduce — transforms suppressed, fade-only.'

breakpoints:
  mobile: 600
  tablet: 768
  desktop: 1024
  wide: 1440

shadows:
  ambient: '0 1px 0 0 #d8d3c5'
  standard: 'rgba(26,26,26,0.06) 0 2px 4px'
  elevated: 'rgba(26,26,26,0.1) 0 6px 16px'
  deep: 'rgba(26,26,26,0.2) 0 12px 32px'
  ring: '0 0 0 2px #fbb33b'

accessibility:
  contrast-text-on-bg: 16.4              # #1a1a1a on #fbf8f1 — AAA
  contrast-text-on-brand-orange: 11.6     # #1a1a1a on #fbb33b — AAA
  contrast-muted-on-bg: 7.0
  focus-ring: '2px solid #fbb33b (Atlantic orange) + 2px outline-offset'
  reduced-motion-honored: true
  touch-target-min: 48                   # Atlantic uses 48 (taller than NYT/WaPo'​s 44) for magazine touch ergonomics
  keyboard-nav: 'Tab moves logo → section nav → utility (Subscribe, Sign in, Search). Skip-link first.'

dark-mode: optional
colors-dark:
  bg: '#1a1a1a'
  bg-section: '#262626'
  surface: '#1a1a1a'
  surface-paper: '#262626'
  surface-soft: '#262626'
  surface-quote: '#1f1f1c'
  text: '#fbf8f1'                 # cream stays as text in dark mode (preserves brand)
  text-strong: '#ffffff'
  text-muted: '#bdbdbd'
  text-soft: '#9a9a9a'
  brand: '#fbb33b'                 # orange unchanged — high luminance reads on dark
  link: '#fbf8f1'                  # ink-underlined links flip to cream
  border: '#3a3a3a'
  border-rule: '#fbf8f1'
---

## 1. Visual Theme & Atmosphere

The Atlantic is **the literary magazine rendered for the web**. The canvas is paper-cream (`#fbf8f1`) — a warm, slightly-yellowed off-white that distinguishes it from the clinical paper-white of NYT/WaPo and ports the printed magazine's newsprint warmth to the screen. The cream gives the page an immediate "you are reading a magazine, not a newspaper" signal: it's softer, more considered, more book-like. The Atlantic has used variations of this cream since the 1857 founding — the digital site preserves the print warmth almost exactly.

Headlines run in **Atlantic Serif** — a custom modern Didone-derived display face commissioned by the magazine in the 2017 redesign, sitting between Bodoni's contrast and Caslon's humanist warmth. Body uses a humanist serif body cut optimized for long reading, and labels run a tracked uppercase sans. The trio gives the page a magazine feel rather than a newspaper feel — heavier display contrast on headlines, more generous body line-heights, larger pull-quotes (32px italic — the biggest pull-quote of any major news brand).

The signature accent is the **Atlantic A monogram orange** (`#fbb33b`) — the color of the famous A logotype that has anchored the magazine's brand for decades. Used sparingly: on the cover-class tag chip, on the Ideas section accent, on the newsletter promo card, on the focus ring, on the long-form scroll-progress bar. Outside these moments the page is ink-on-cream — the orange functions as a single chromatic punctuation, the way a magazine's foil-stamped logo punctuates a printed cover.

The Atlantic's most distinctive design choice is its **cover-class feature treatment**. The magazine's flagship long-form essays — "America's New Working Class", "How America Lost Its Mind" — get full-bleed art treatment with custom illustration or photography hero, drop-caps on the lead paragraph, generous italic pull-quotes, and a 720px reading column (wider than NYT's 600 or WaPo's 620 — the magazine's reading width). The dark cover-class card variant inverts to ink ground with cream text — a reverse pairing similar to the FT's salmon-on-navy.

**Key Characteristics:**
- **Paper-cream canvas** (`#fbf8f1`) — warm off-white that signals "magazine" not "newspaper"
- Custom modern serif (Atlantic Serif) for display — Didone-flavored with humanist warmth
- Atlantic A-monogram orange (`#fbb33b`) — single brand voltage, used sparingly
- 720px reading column — widest of major US news brands; magazine breathing room
- 32px italic pull-quotes — the largest in news design
- Drop-caps on long-form features (80px Atlantic Serif)
- Section color-coding: Politics red, Ideas orange, Culture purple, Tech navy, Family teal, Health green
- Ink underlined links (no link blue) — Atlantic uses ink + underline, distinct from typical web convention
- Cover-class dark card treatment with ink ground + cream text — magazine cover ported to web
- 0px radius on cards, alerts, sections — broadsheet-magazine aesthetic
- Tracked uppercase Atlantic Sans (12–14px, 0.06–0.12em) for meta labels
- Italic Atlantic Serif deck — magazine-flavored editorial decoration
- 48px primary CTA height (taller than NYT/WaPo's 44px) — magazine touch ergonomics

## 2. Color Palette & Roles

### Primary
- **Cream Canvas** (`#fbf8f1`): the warm-paper page color, the brand's most identifying decision. Magazine warmth.
- **Ink** (`#1a1a1a`): primary text color. Slightly warmer than absolute black — calibrated to harmonize with cream.
- **Atlantic Orange** (`#fbb33b`): the singular brand voltage — A-monogram color, cover-class tag, focus ring, newsletter card.

### Brand & Sub-Brand
- **Brand Orange** (`#fbb33b`)
- **Orange Hover** (`#e89e1c`)
- **Orange Deep** (`#c97e07`) — heavy accent on Op-Doc / Politics tag chips
- **Orange Soft** (`#fef0d4`) — tint surface
- **A-Monogram Red** (`#c41e3a`) — sometimes the masthead A renders in red on print covers

### Section Accents (Color-Coded Pillar System)
- **Politics** (`#c41e3a`) — red
- **Ideas** (`#fbb33b`) — Atlantic orange (the magazine's flagship section uses the brand color)
- **Culture** (`#7a3de8`) — purple
- **Technology** (`#1a4972`) — navy
- **Family** (`#0d7060`) — teal
- **Health** (`#127f4e`) — green
- **Books** — uses ink (no accent — book reviews are voiceless)

### Accent
- **Editorial Link Ink** (`#1a1a1a`) — Atlantic uses ink + underline as the link state, no link blue
- **Link Hover** (`#000000`) — ink darkens, underline thickens
- **Link Visited** (`#5a5a5a`) — visited dims to muted

### Interactive
- **Default Link** (`#1a1a1a` text + underline always visible) — Atlantic always shows the underline (not on-hover)
- **Active CTA** (`#1a1a1a` ink fill on Subscribe)
- **Disabled** (`#a0a0a0` text)
- **Selected** (saved-article chip with orange fill)

### Neutral Scale (Calibrated for Cream)
- **Ink** (`#1a1a1a`) — body, headlines (warmer than absolute black, calibrated for cream)
- **Muted** (`#5a5a5a`) — bylines, captions
- **Soft** (`#7a7a7a`) — photo credits, secondary meta
- **Faint** (`#a0a0a0`) — disabled
- **Hairline** (`#d8d3c5`) — universal rule color (warm-gray, calibrated for cream)

### Surface & Borders
- **Cream** (`#fbf8f1`) — canvas
- **Paper** (`#ffffff`) — pure-white photo and chart inserts inside the cream page
- **Section Sub-Band** (`#f5f1e6`) — slightly darker cream for Opinion / Ideas / pull-quote backdrop
- **Surface Strong** (`#e8e3d5`) — disabled fill
- **Hairline** (`#d8d3c5`) — default 1px rule
- **Border Strong** (`#7a7a7a`) — form input border
- **Border Rule** (`#1a1a1a`) — section rule (1px ink) and pull-quote rules

### Shadow Colors
**Ink-tinted** (warmer than neutral-gray, calibrated for cream harmony):
- `rgba(26,26,26,0.06) 0 2px 4px` — dropdown
- `rgba(26,26,26,0.1) 0 6px 16px` — overlay
- `rgba(26,26,26,0.2) 0 12px 32px` — modal lift

### Semantic
- **Success** (`#1a7f37` on `#e3f2e7`)
- **Warning** (`#cc7a00` on `#fde9cc`)
- **Danger** (`#c41e3a` on `#f5d4d8`) — form errors share Politics red
- **Info** (`#1a4972` on `#dde6ef`) — info shares Tech navy

## 3. Typography Rules

### Font Family

**Display**: `Atlantic Serif` — the custom modern Didone-derived display face commissioned for the 2017 redesign. Sits between Bodoni contrast and Caslon humanist warmth. Available in 300, 400, 500, 600, 700, 900. Fallback: `Georgia, "Times New Roman", serif`.

**Body**: `Atlantic Serif Body` — the body cut, optimized for long reading at 20px / 1.6 line-height. Available in 400, 500, 700.

**Sans**: `Atlantic Sans` — paired sans for bylines, captions, section labels, button labels, navigation. Available in 400, 500, 700. Fallback: `"Helvetica Neue", Helvetica, Arial, sans-serif`.

**Mono**: System mono `Menlo, Consolas, "Courier New", monospace`. Used only on rare data displays.

**OpenType features**: Atlantic Serif uses standard ligatures (`liga`), discretionary ligatures (`dlig`) on the masthead and cover-headlines, and tightly-tuned kerning (`kern`) at display sizes. The dlig moments are part of the magazine flavor — "ct" and "st" ligatures appear in cover-class headlines.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| masthead-wordmark | Atlantic Serif | 64 | 700 | 1.0 | -0.005em | liga, dlig, kern | "The Atlantic" |
| cover-headline | Atlantic Serif | 60 | 700 | 1.05 | -0.02em | liga, dlig | Cover-class long-form essay headline |
| headline-mega | Atlantic Serif | 52 | 700 | 1.07 | -0.015em | — | Large feature |
| headline-jumbo | Atlantic Serif | 42 | 700 | 1.1 | -0.01em | — | Top-of-fold lead |
| headline-xl | Atlantic Serif | 32 | 700 | 1.13 | -0.005em | — | Above-fold secondary |
| headline-lg | Atlantic Serif | 26 | 700 | 1.18 | 0 | — | River lead |
| headline-md | Atlantic Serif | 22 | 700 | 1.2 | 0 | — | River sub |
| headline-sm | Atlantic Serif | 18 | 700 | 1.25 | 0 | — | Compact module |
| deck-italic | Atlantic Serif (italic) | 20 | 400 | 1.4 | 0 | — | Standfirst — italic, weight 400 |
| body-md | Atlantic Body | 20 | 400 | 1.6 | 0 | — | Default running text — larger (20px) and looser (1.6) than peers |
| body-sm | Atlantic Body | 17 | 400 | 1.55 | 0 | — | Compact card body |
| pull-quote | Atlantic Serif (italic) | 32 | 400 | 1.3 | 0 | — | The largest pull-quote in news (32px italic) |
| drop-cap | Atlantic Serif | 80 | 700 | 1.0 | 0 | — | First letter of long-form lead paragraph, 3-line drop |
| byline | Atlantic Sans | 13 | 700 | 1.3 | 0.06em | uppercase | "BY ED YONG" |
| dateline | Atlantic Sans | 13 | 400 | 1.3 | 0 | — | "November 5, 2024" |
| section-label | Atlantic Sans | 12 | 700 | 1.0 | 0.12em | uppercase | "POLITICS" / "IDEAS" |
| caption | Atlantic Sans | 14 | 400 | 1.4 | 0 | — | Photo / illustration caption |
| photo-credit | Atlantic Sans | 11 | 400 | 1.3 | 0.06em | uppercase | "JESSE LENZ FOR THE ATLANTIC" |
| micro-meta | Atlantic Sans | 12 | 500 | 1.2 | 0.06em | uppercase | "5 min read" / "Listen" |
| button-label | Atlantic Sans | 14 | 700 | 1.0 | 0.08em | uppercase | "SUBSCRIBE" / "SIGN IN" |
| nav-link | Atlantic Sans | 13 | 700 | 1.0 | 0.1em | uppercase | "Politics" / "Ideas" — heavy tracking |
| cover-tag | Atlantic Sans | 11 | 700 | 1.0 | 0.12em | uppercase | "THE COVER STORY" — orange chip |

### Principles

- **Body at 20px / 1.6 line-height.** The Atlantic runs the largest, loosest body type of any major news brand — magazine reading ergonomics. NYT runs 18/1.55, FT runs 18/1.55; Atlantic runs 20/1.6 because long-form essays are the brand's flagship product.
- **720px reading column** — widest in major US news. The magazine's reading width.
- **32px italic pull-quote** — the largest in major news design. NYT/WaPo/Guardian run 26–28px; Atlantic stretches to 32. Magazine flavor.
- **Drop-caps on long-form.** First letter of the lead paragraph in 80px Atlantic Serif 700 with a 3-line drop. Inherits the print magazine convention.
- **Ink underlined links.** Distinctive: Atlantic does not use blue link color. Inline links are ink + underline; hover thickens the underline. The lack of color gives the page a more book-like feel.
- **Heavy nav-link tracking (0.1em).** Section nav uppercase labels track wider than peers — magazine masthead convention.
- **Section accent colors are pillar-coded.** Politics red, Ideas orange, Culture purple, Tech navy, Family teal, Health green. The accent appears on the 4px section-card top stripe and the kicker label.
- **Crimson Pro / Source Serif Pro are the closest open-source serif fallbacks** — adjusted for slightly less Didone contrast than Atlantic Serif. Inter for sans.

## 4. Component Stylings

### Buttons

**`button-primary`** — Ink fill (`#1a1a1a`), cream text (`#fbf8f1`), 0px radius, 14×24px padding, 48px height, 14px / 700 Atlantic Sans uppercase tracked 0.08em. Press: darkens to `#000000`. The 48px height (vs 44px on most news sites) gives a magazine-touch feel.

**`button-secondary`** — Transparent fill, ink text, 1px ink border, 0px radius, same dimensions.

**`button-text-link`** — Plain ink text (`#1a1a1a`), no surface, no border. Always underlined.

### Cover-Class Treatment

**`cover-tag`** — Orange chip (`#fbb33b`) with ink text in 11/700 uppercase tracked 0.12em ("THE COVER STORY"). 0px radius, 4×8px padding. Sits above cover-class feature headlines.

**`card-feature-cover`** — Cover-class long-form card with **ink ground** (`#1a1a1a`), **cream text** (`#fbf8f1`), and full-bleed art above. Inverts the page palette — magazine cover ported to web.

### Cards

**`card-headline`** — Cream surface (inherits canvas), 0px radius, top 1px hairline (`#d8d3c5`), no shadow. Photo above (often lifted onto pure white inside cream), Atlantic Serif 22/700 headline, italic Atlantic Serif 20/400 deck, Atlantic Sans 13/700 uppercase byline.

**`card-photo`** — Pure white surface inserted into the cream page — for photographs and illustrations.

**`card-section-kicker`** — Same structure with a **4px section-color top stripe** (Politics red, Ideas orange, Culture purple, etc.). The pillar accent identifies the section.

**`card-opinion`** / **`card-ideas`** — Slightly darker cream sub-band (`#f5f1e6`) ground.

### Pull-Quote

**`pull-quote`** — Italic Atlantic Serif 32px / 1.3 — the **largest pull-quote in major news design**. Between two 1px ink rules at 32px vertical padding. The 32px italic gives the magazine reading its most distinctive moment.

### Drop-Cap

**`drop-cap`** — On long-form features: first letter of the lead paragraph rendered in Atlantic Serif 80px / 700 with a 3-line drop-cap. Inherits the print magazine convention.

### Inputs / Forms

**`text-input`** — White surface (lifts off cream), 1px `#7a7a7a` border, 4px radius, 48px height, 14×16px padding. Focus: border thickens to 2px ink.

**`paywall-cta`** — **Ink ground** (`#1a1a1a`) with **cream text** (`#fbf8f1`) — Atlantic's reverse pairing. Headline in cream Atlantic Serif 26/700. Cream-outline "Subscribe" CTA. The dark ground signals magazine-cover-class moment.

### Navigation

**`top-nav`** — Cream surface, 64px height (taller than NYT/WaPo's 56px — magazine breathing room), 1.5px bottom ink rule. "The Atlantic" wordmark center-aligned in Atlantic Serif 64/700, Subscribe + Sign In + Search top-right.

**`section-nav`** — Horizontal Atlantic Sans 13/700 uppercase tracked 0.1em links. Hover: ink underline grows from below over 220ms (slightly slower than peers — magazine pacing).

**`newsletter-card`** — Brand orange ground (`#fbb33b`) with ink text ("Subscribe to The Atlantic Daily").

### Decorative

**`section-rule`** — 1px ink rule.

**`pillar-stripe`** — 4px section-color stripe at the top of section cards.

**`hairline-rule`** — 1px `#d8d3c5` warm-gray rule between river stories.

**`scroll-progress`** — On long-form features: a thin bar at the top of the viewport tracks scroll position through the article, filled in Atlantic orange (`#fbb33b`) on a cream rail. Magazine reading affordance.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `2 · 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 120 · 160`
- Section padding: 80px between page bands (more generous than NYT/WaPo's 64px — magazine breathing)
- Card internal: 16px between image and headline; 12px between headline and deck

### Grid & Container

- Max content width: **1200px** centered on 12-column grid
- Reading column: **720px** — widest in major US news; magazine reading width
- Feature container: **1024px** for cover-class hero
- Footer: 4-column link list with newsletter promo

### Whitespace Philosophy

The Atlantic runs **generous** — 80px section padding, 720px reading column, 20px / 1.6 body, 32px pull-quotes. The cream canvas does the brand work; the layout breathes. Photographs and illustrations are given full-bleed treatment on cover-class features. The contrast: the river density on the homepage stays moderate (cards at 24px gutters), but inside an article the reading experience is the brand's flagship — uncrowded, unhurried.

### Section Cadence

- Politics / World / Business / Climate: cream ground with section-color kicker
- Ideas: orange-accented cream (the magazine's flagship section uses brand orange)
- Culture / Books: cream with purple kicker; Books uses ink-only
- Technology: cream with navy kicker
- Family / Health: cream with teal/green kicker
- Cover-class long-form: ink ground with cream text (inverted)

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| None | 0px | Cards, photos, sections, alerts, paywall, cover tags — broadsheet-magazine aesthetic |
| Micro | 2px | Photo-credit chip |
| Standard | 4px | Text input only |
| Pill | 9999px | Save-article chip, audio play button — only when icon is round |

The Atlantic commits to **square corners** on every editorial surface — buttons, cards, alerts, paywall, cover tags, section cards all sit at 0px radius. Only text inputs round (4px) for ergonomics. This is in line with the WaPo's discipline and stricter than the FT or Guardian.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Article body, hero, section bands |
| 1 — Hairline | 1px `#d8d3c5` rule | River cards, table rows |
| 2 — Section Rule | 1px `#1a1a1a` rule | Section break |
| 3 — Pillar Stripe | 4px section-color rule | Section card top |
| 4 — White Insert | pure white into cream | Photo, illustration, chart panels |
| 5 — Dark Card | ink ground over cream | Cover-class feature card |
| 6 — Dropdown | `rgba(26,26,26,0.06) 0 2px 4px` | Account menu |
| 7 — Modal | `rgba(26,26,26,0.2) 0 12px 32px` | Paywall modal |

### Shadow Philosophy

The Atlantic combines five non-shadow depth signals: hairline + section rule + pillar stripe + white insert + dark card. The result: depth comes from **palette inversion** (cream → white, cream → ink) and **rule weight**, not from cast shadows. Shadows appear only on chrome.

## 8. Interaction & Motion

### Easing

- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)`
- **Out-soft**: `cubic-bezier(0.0, 0, 0.2, 1)`

### Durations

| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 100ms | Color swaps |
| Standard | 220ms | Card hover, link underline grow (slightly slower than peers — magazine pacing) |
| Slow | 360ms | Modal enter, cover-class transitions |

### Per-Component Recipes

- **Card hover**: image scales 1.0 → 1.03 (slightly more than the 1.02 norm — Atlantic likes a slightly more pronounced lift); headline gains 1px ink underline (grows from 0 to full width over 220ms).
- **Long-form scroll progress**: orange (`#fbb33b`) bar fills smoothly across the top of the viewport as the user scrolls through an article — proportional to scroll position.
- **Section-nav link hover**: underline grows from below over 220ms standard.
- **Cover-class card hover**: image scale + slight darken on the cream-text overlay.
- **Paywall modal enter**: scrim fades 0 → 0.5 alpha over 220ms; modal translates 16px to 0 + opacity 0 → 1 over 360ms emphasized.

### Page Transitions

220ms cross-fade. Cover-class to article transitions use a slightly slower 360ms emphasized for magazine-cover-arrival feel.

### Reduced Motion

Card hovers degrade to underline-only; scroll-progress bar stays static (only updates on scroll, not animated); transforms suppressed.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #1a1a1a ink on #fbf8f1 cream | 16.4 | AAA |
| #1a1a1a on #fbb33b orange | 11.6 | AAA |
| #fbf8f1 cream on #1a1a1a (reverse) | 16.4 | AAA |
| #5a5a5a muted on #fbf8f1 | 7.0 | AAA |
| #7a7a7a soft on #fbf8f1 | 4.7 | AA |
| #1a1a1a on #f5f1e6 sub-band | 15.8 | AAA |
| #c41e3a politics on #fbf8f1 | 5.5 | AA |

### Focus Indicators

Focus ring: `2px solid #fbb33b` (Atlantic orange) with 2px outline-offset. The orange is the brand's only chromatic moment, and the focus ring uses it deliberately — keyboard users see the brand color on every Tab.

### ARIA Patterns

- **Long-form articles**: `role="article"` with structured `<section>` for chapter breaks. Drop-cap is `aria-hidden="true"` (decorative).
- **Cover-class feature card**: `aria-label` includes "Cover story: [title]" so screen readers announce the editorial weight
- **Section nav**: `<nav aria-label="Sections">` with each pillar link, active marked `aria-current="page"`
- **Paywall modal**: `role="dialog"`, `aria-modal="true"`, focus trapped, Esc closes
- **Scroll progress**: `role="progressbar"` with live `aria-valuenow` updating as the user scrolls

### Keyboard Navigation

- Top nav: Tab moves Logo → Section nav → Subscribe → Sign In → Search
- Section nav: Tab traverses pillars left-to-right
- Article body: Tab skips drop-caps and decorative photos; lands on inline links and Listen / Save chips
- Skip-link first

### Screen Reader Hints

- Cover tag carries `aria-label="Cover story"`
- Drop-cap is `aria-hidden="true"`; lead paragraph reads as plain text
- Photo credits announce as "Photograph by [Name] for The Atlantic"
- Save-article chip: `aria-pressed`

### Reduced Motion

Card hovers → underline-only; cover-class scale suppressed; scroll-progress updates without animation.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | Top nav collapses to hamburger + wordmark + Subscribe; section nav into hamburger; river cards 1-up; reading column at viewport with 16px gutters; pull-quote drops to 24px italic; drop-cap drops to 56px |
| Tablet | 600–1024px | Section nav as horizontal scroller; river cards 2-up at 768+ |
| Desktop | 1024–1440px | Full section nav; river cards 3-up; sidebar appears on article pages |
| Wide | >1440px | Content caps at 1200px |

### Touch Targets

- Primary CTAs: 48×48px (taller than NYT/WaPo's 44 — magazine touch ergonomics)
- Section nav: 48px tap area
- Save-article chip: 36×36px
- Cover-class card tap area: 60+px

### Collapsing Strategy

- Section nav collapses to scroller, then hamburger
- Subscribe stays visible at all breakpoints
- River cards drop column count: 4 → 3 → 2 → 1
- Sidebar collapses below article body on tablet
- Cover-class hero stays full-bleed at all breakpoints

### Image Behavior

- River-card images: `aspect-ratio: 16/9` desktop, `4/3` mobile
- Cover-class hero: full-bleed up to 1200px, often custom commissioned illustration
- Photo essays: scroll-snap on touch, arrow buttons on mouse
- Lazy-load below the fold; high-priority above-fold image gets `fetchpriority="high"`

### Container Queries

Right-rail "Most popular" compresses to single-line truncate when narrow.

## 11. Content & Voice

### Tone

Literary, considered, intellectual but not academic. The Atlantic's voice trusts the reader's patience — long-form essays are 4,000–10,000 words and the design supports unhurried reading. Headlines lead with the idea ("How America Lost Its Mind", "Why You Should Stop Eating Sugar"); decks add specifics; body unspools an argument over many paragraphs. The brand verbs avoid news-bureau urgency in favor of essayistic framing.

### Microcopy Patterns

- **Subscribe verbs**: "Subscribe", "Continue", "Sign in", "Read"
- **Paywall messages**: "You've reached your free article limit. Subscribe for unlimited access to The Atlantic."
- **Date format**: "November 5, 2024" — US convention, month first
- **Section labels in tracked uppercase**: "POLITICS", "IDEAS", "CULTURE"
- **Newsletter promo**: "The Atlantic Daily" framed as a curation, not a notification
- **Empty state — saved articles**: "Your saved articles will appear here. Click the bookmark icon on any article to save it."

### CTA Verb Conventions

- Primary: **"Subscribe"**, **"Continue"**, **"Sign in"**, **"Read"**, **"Listen"**
- Secondary: **"Save"**, **"Share"**, **"Read more"**
- Tertiary: **"More from The Atlantic"**, **"View all"**
- Avoided: "Click here", "Submit", "Buy now", "Try free"

### Empty States

- Saved articles: "Your saved articles will appear here. Click the bookmark icon on any article to save it for later."
- Search no results: "No articles match your search. Try different keywords or browse our sections."
- Comments: The Atlantic disabled comments in 2018; no comment empty state exists.

## 12. Dark Mode & Theming

The Atlantic supports a **system-level dark mode** with a distinctive token swap that **preserves cream as the text color** instead of inverting to white:

- `bg`: `#1a1a1a` — ink ground
- `surface`: `#1a1a1a`
- `surface-paper`: `#262626` — photo insert in dark mode
- `surface-soft`: `#262626`
- `text`: `#fbf8f1` — cream stays as text (preserves brand reverse pairing)
- `text-strong`: `#ffffff`
- `text-muted`: `#bdbdbd`
- `brand`: `#fbb33b` — orange unchanged (high luminance reads on dark)
- `link`: `#fbf8f1` — ink-underlined links flip to cream
- `border`: `#3a3a3a`
- `border-rule`: `#fbf8f1` — section rules invert ink → cream

The dark mode preserves the cream-and-ink reverse pairing — same as the cover-class card treatment in light mode. This is unusual; most dark modes use white text. The Atlantic preserves the cream because cream-and-ink (in either direction) is the brand pairing.

## 13. Lineage & Influences

The Atlantic's visual lineage is **the American literary magazine** — founded in Boston in 1857, the magazine has always carried a paper-cream stock and a serif-display + serif-body trio in its print edition. The 2017 web redesign, led by Joanna Pearlstein and the Atlantic's product-design team, ported these decisions to digital with a custom Atlantic Serif type family and an explicit cream canvas (replacing earlier white-canvas iterations).

The Atlantic's most significant editorial-design innovation is its **cover-class feature treatment** — the long-form essays the magazine is famous for ("America's Long Romance with Lethargy", "How America Lost Its Mind") get full-bleed art, drop-caps, italic pull-quotes at 32px (the largest in news), and the dark cover-card variant. These features are designed as digital magazine covers, not articles, and they signal the magazine's flagship product clearly.

The 720px reading column is the widest in major US news — wider than NYT (600), WaPo (620), or FT (620) — because the Atlantic's body type at 20px / 1.6 line-height needs it. The result is the most leisurely reading experience on a major American publication.

What the Atlantic rejects: paywall-driven interruption beyond the meter limit, photographic chrome that fights the cream canvas, decorative gradients, illustrated chrome unrelated to the article, brand color used decoratively, dark-mode-by-default, link-blue convention. What it borrows from: **Harper's Magazine** (cream paper + literary serif tradition), **The New Yorker** (cover-class essay treatment, drop-caps, magazine pacing), and **The New York Times Magazine** (Sunday Magazine sub-brand layout pattern).

**Influences:**
- The American literary magazine — founded 1857, cream paper since the original print edition
- Atlantic Serif (2017) — custom modern Didone-derived display
- Harper's Magazine — cream-paper literary tradition
- The New Yorker — cover essay + drop-cap convention
- The New York Times Magazine — Sunday-magazine layout precedent
- Joanna Pearlstein — design lead on the 2017 redesign

## 14. Do's and Don'ts

**Do**
- Use the cream canvas (`#fbf8f1`) — the warm-paper page is the brand
- Use Atlantic Serif (modern Didone-derived) for headlines, Atlantic Serif Body for body, Atlantic Sans for meta
- Use ink (`#1a1a1a`) for body text — warmer than absolute black, calibrated for cream
- Use Atlantic orange (`#fbb33b`) sparingly — focus ring, cover-tag chip, newsletter card, scroll-progress bar
- Set body at 20px / 1.6 line-height — magazine reading ergonomics
- Use 720px reading columns on long-form features — magazine breathing room
- Use 32px italic pull-quotes — the largest in news design
- Apply 80px Atlantic Serif drop-caps on long-form lead paragraphs
- Use the cover-class dark card (ink ground, cream text) for flagship long-form
- Use ink + underline for inline links — no link blue convention

**Don't**
- Don't use pure white as the canvas — cream is the brand
- Don't use blue-link convention — Atlantic uses ink with underline always visible
- Don't use absolute black (#000) for body — ink is `#1a1a1a` calibrated for cream
- Don't apply the orange decoratively — it's a single brand voltage, used sparingly
- Don't round card corners — broadsheet-magazine aesthetic is square (0px)
- Don't use 18/1.55 body (NYT proportions) — Atlantic body is 20/1.6 for magazine ergonomics
- Don't use exclamation marks or "Let's" verbs in microcopy — voice is essayistic
- Don't use stock photography on cover-class features — those get commissioned illustration / photography
- Don't apply shadows to cards — depth is hairline + pillar stripe + white insert + dark card
- Don't let the focus ring be ink-only — the orange focus ring is the brand's keyboard-visibility signature

## 15. Agent Prompt Guide

### Quick Color Reference

```
Cream-Canvas:     #fbf8f1
Ink:              #1a1a1a
Atlantic-Orange:  #fbb33b
Politics-Red:     #c41e3a
Ideas-Orange:     #fbb33b
Culture-Purple:   #7a3de8
Tech-Navy:        #1a4972
Muted:            #5a5a5a
Hairline:         #d8d3c5
White-Insert:     #ffffff (for photos inside the cream page)
```

### Example Component Prompts

- "Create The Atlantic article header on cream (#fbf8f1): section label in Atlantic Sans 12/700 uppercase tracked 0.12em ('POLITICS' or 'IDEAS'), 4px section-color top stripe (Politics red, Ideas orange, etc.), headline in Atlantic Serif 42/700 ink with -0.01em tracking, italic Atlantic Serif 20/400 deck, Atlantic Sans 13/700 uppercase byline ('BY ED YONG'), Atlantic Sans 13/400 dateline ('November 5, 2024' — US month-first format)."
- "Design The Atlantic cover-class feature card: **dark ground** (`#1a1a1a`), cream text (`#fbf8f1`), full-bleed art above. Orange (#fbb33b) 'THE COVER STORY' tag chip in 11/700 uppercase tracked 0.12em, then headline in Atlantic Serif 60/700 cream with -0.02em tracking, then italic 20/400 deck. The dark card is the inversion of the cream page — magazine cover ported."
- "Build The Atlantic Subscribe button: ink (#1a1a1a) fill, cream (#fbf8f1) text in Atlantic Sans 14/700 uppercase tracked 0.08em ('SUBSCRIBE'), 0px radius (square), 14×24px padding, 48px height (taller than NYT/WaPo's 44 — magazine touch). Press: darkens to #000000."
- "Create The Atlantic pull-quote: italic Atlantic Serif at **32px / 1.3** (the largest in news), ink, between two 1px ink rules at 32px vertical padding, over cream (#fbf8f1) ground. The 32px italic gives magazine flavor."
- "Design The Atlantic drop-cap: first letter of the long-form lead paragraph in Atlantic Serif 80/700, ink, with a 3-line drop into the surrounding 20/1.6 body."
- "Build The Atlantic newsletter promo card: brand orange (#fbb33b) ground, ink (#1a1a1a) text. Headline 'Subscribe to The Atlantic Daily' in Atlantic Serif 24/700, sub-copy in Atlantic Sans 14/400, ink Subscribe button below. 0px radius, 32×24px padding."

### Iteration Guide

1. **Start on cream, not white.** `#fbf8f1` is the page. Pure white is reserved for photo inserts inside the cream page.
2. **Atlantic Serif Display + Atlantic Sans meta.** The custom Didone-derived display + tracked uppercase sans is the brand. Substitute Crimson Pro + Inter only as fallback.
3. **Body at 20/1.6, not 18/1.55.** Magazine reading ergonomics. Don't tighten to news proportions.
4. **720px reading column.** Wider than NYT/WaPo. Long-form is the brand's flagship; the column reflects it.
5. **Orange used sparingly.** Focus ring, cover-tag chip, newsletter card, scroll-progress. If you find yourself adding orange decoratively, demote it.
6. **Square corners (0px) on cards, alerts, sections.** Broadsheet-magazine aesthetic.
7. **Ink + underline for inline links.** No link blue. The lack of color gives the body type a more book-like feel.
8. **Drop-caps on long-form leads.** 80px Atlantic Serif 700 with 3-line drop is part of the brand. Print magazine convention preserved.
