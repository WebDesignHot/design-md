---
name: Ritual
tagline: 'Visible-supply-chain wellness — white lab canvas, Ritual Navy #142b6f everywhere, CircularXX, 25px rounded CTAs, warm yellow as the one accent.'
updated_at: 2026-05-28T23:13:34.023Z
published_at: 2026-05-28T23:13:34.023Z
author: webdesignhot
source_url: https://ritual.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [retail]
tags: [light, editorial, sans, commerce, wellness, yellow]
preview_swatch: ['#ffffff', '#142b6f', '#ffd200']
related: []
description: 'Ritual is the DTC vitamin brand that turned "transparency" into a visual system. The 2026 storefront is a clean, science-backed lab canvas: pure white background `#ffffff`, every word of body and display copy set in the brand-owned geometric sans **CircularXX**, and one color doing nearly all the work — **Ritual Navy `#142b6f`**, which is simultaneously the text color, the headline color, and the filled CTA. The signature CTA is unusual for a wellness brand: a solid navy rectangle rounded to a soft `25px` radius (not a full pill, not a sharp corner — a deliberate in-between), white label inside. Headlines run large and confident — `58px` CircularXX at weight `450`, a hair above regular, giving display copy a calm, even, almost-clinical color on the page. Against the navy-on-white austerity, Ritual pairs its identity color with a warm signature **yellow `#ffd200`** — the accent that warms the science, used on highlights, illustration, capsule beads, and play moments. The register is the opposite of supplement-aisle loud: it reads like a research white paper that happens to sell you multivitamins. Where most wellness DTC reaches for sage greens, blush pinks, and soft serifs, Ritual went **navy + yellow + geometric-sans on white** — the look of "we will show you exactly what is in the bottle and where it came from."'


# Canonical 8-role aliases (bg / text / brand / border / accent / muted / surface / danger).
# Maps role names to this entry's actual token names so role-aware
# downstream tools resolve `theme.background` → entry's `bg`, etc.
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent-yellow
  muted: text-muted
  border: border
  ring: brand

colors:
  # Page grounds
  bg: '#ffffff'                  # pure white lab canvas — the dominant surface
  bg-soft: '#f7f8fa'             # faintest cool-gray panel — alternating sections
  bg-deeper: '#eef0f5'           # secondary surface, cards on white
  bg-navy: '#142b6f'             # full-bleed navy section ground (footer, feature bands)
  bg-cream: '#fbf7ee'            # warm off-white pairing with the yellow accent
  # Surfaces & buttons
  surface: '#ffffff'             # default card surface
  surface-soft: '#f7f8fa'        # inset / secondary card
  # Brand — navy carries text, headline, and CTA all at once
  brand: '#142b6f'               # Ritual Navy — text + headlines + filled CTA
  brand-hover: '#0f2154'         # darker navy on CTA press
  brand-soft: '#e7eaf3'          # navy tint for badge / selection wash
  on-brand: '#ffffff'            # white label on navy CTA
  # Accent — the warm yellow that warms the science
  accent-yellow: '#ffd200'       # signature Ritual yellow — highlights, illustration, beads
  accent-yellow-soft: '#fff3bf'  # pale yellow wash / highlight band
  accent-yellow-deep: '#e6bd00'  # yellow border / hover edge
  on-accent: '#142b6f'           # navy text on yellow (yellow is too light for white)
  # Text
  text: '#142b6f'                # body + headlines — Ritual Navy, not black
  text-strong: '#0f2154'         # deepest navy for emphasis
  text-muted: '#5a6680'          # desaturated navy-gray — meta, captions, secondary copy
  # Borders & dividers
  border: '#dfe3ec'              # cool hairline divider on white
  border-strong: '#c3c9d8'       # emphasis hairline / input border
  border-navy: '#142b6f'         # focus / selected border
  # Semantic
  success: '#1f8a5b'             # confirmation green (in-stock, subscribed)
  warning: '#e6bd00'             # caution — reuses the yellow family
  danger: '#c2362b'              # error / out-of-stock
  info: '#142b6f'                # informational — defaults to brand navy

typography:
  display:
    family: '"CircularXX", "Circular", Helvetica, Arial, system-ui, -apple-system, sans-serif'
    weights: [450, 500, 600, 700]
  body:
    family: '"CircularXX", "Circular", Helvetica, Arial, system-ui, -apple-system, sans-serif'
    weights: [400, 450, 500, 600]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 80, weight: 450, lineHeight: 1.0,  tracking: '-0.02em',  family: display }
    display-lg:      { size: 58, weight: 450, lineHeight: 1.05, tracking: '-0.015em', family: display }
    h1:              { size: 44, weight: 500, lineHeight: 1.1,  tracking: '-0.012em', family: display }
    h2:              { size: 34, weight: 500, lineHeight: 1.15, tracking: '-0.008em', family: display }
    h3:              { size: 26, weight: 500, lineHeight: 1.25, tracking: '-0.004em', family: display }
    h4:              { size: 20, weight: 500, lineHeight: 1.3,  tracking: '0',        family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    label:           { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0.01em',   family: body }
    eyebrow:         { size: 12, weight: 600, lineHeight: 1.3,  tracking: '0.08em',   family: body }
    caption:         { size: 12, weight: 450, lineHeight: 1.4,  tracking: '0.02em',   family: body }
    button:          { size: 15, weight: 500, lineHeight: 1.0,  tracking: '0.01em',   family: body }

radius:
  micro: 4
  sm: 8
  md: 12
  lg: 16
  cta: 25
  xl: 32
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]

layout:
  page-width: 1320
  prose-width: 700
  header-height: 72

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 360
  reduced-motion: 'respects prefers-reduced-motion: reduce'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1320
  wide: 1536

shadows:
  card: '0 1px 2px rgba(20, 43, 111, 0.06)'
  card-hover: '0 8px 24px rgba(20, 43, 111, 0.10)'
  modal: '0 24px 64px rgba(20, 43, 111, 0.18)'

accessibility:
  contrast-text-on-bg: 11.6
  contrast-on-brand-on-brand: 11.6
  contrast-navy-on-yellow: 9.7
  focus-ring: '2px solid #142b6f + 2px outset gap'
  reduced-motion-honored: true

components:
  button-primary:   { bg: brand, text: on-brand, padding: '14px 28px', radius: 25, font: button, hover-bg: brand-hover }
  button-secondary: { bg: surface, text: brand, border: '1.5px solid border-navy', padding: '13px 26px', radius: 25, font: button }
  button-yellow:    { bg: accent-yellow, text: on-accent, padding: '14px 28px', radius: 25, font: button, hover-bg: accent-yellow-deep }
  button-ghost:     { bg: transparent, text: brand, padding: '12px 20px', radius: 25, font: button }
  card:             { bg: surface, border: '1px solid border', radius: 16, padding: 24, shadow: card }
  input:            { bg: surface, border: '1.5px solid border-strong', text: text, radius: 12, padding: '14px 16px', focus-border: border-navy }
  badge:            { bg: brand-soft, text: brand, radius: pill, padding: '4px 12px', font: eyebrow }
  badge-yellow:     { bg: accent-yellow, text: on-accent, radius: pill, padding: '4px 12px', font: eyebrow }

lineage:
  summary: 'Ritual launched in 2016 as a "vitamin you can actually see into" — a clear-capsule multivitamin built around radical supply-chain transparency ("Made Traceable"). The visual identity codifies that promise. The chrome is a research-paper canvas: pure white, navy type, geometric grotesque (CircularXX, the brand-licensed cut of Lineto''s Circular), and almost no decoration. The one expressive move is color discipline — a single deep navy `#142b6f` carries text, headlines, and the primary CTA, so the page reads as one calm voice; a single warm yellow `#ffd200` warms it back up at highlights, capsule-bead illustration, and play moments. The lineage is Swiss-international information design (Müller-Brockmann grids, Akzidenz/Helvetica neutrality) crossed with the clean-pharma / clinical-trust register of contemporary health tech (Oura, Levels, Function Health) and the geometric-sans DTC house style that Circular itself popularized across Spotify, Airbnb-era startups, and the 2016–2020 venture-backed wave. What Ritual rejects is the supplement-aisle vocabulary entirely: no gold foil, no leaf-and-mortar "natural" cues, no serif "apothecary" nostalgia, no neon "energy" gradients. The bottle is clear; so is the chrome.'
  influences:
    - { name: 'Circular (Lineto, Laurenz Brunner)', role: 'the geometric grotesque CircularXX is licensed from — sets the calm, even, slightly-warm sans voice', url: 'https://lineto.com/typefaces/circular' }
    - { name: 'Josef Müller-Brockmann / Swiss grid systems', role: 'information-design rigor — grid, neutrality, content-first layout', url: 'https://en.wikipedia.org/wiki/Josef_M%C3%BCller-Brockmann' }
    - { name: 'Oura', role: 'clean clinical-trust health-tech contemporary — white canvas, restrained palette, science register', url: 'https://ouraring.com/' }
    - { name: 'Function Health', role: 'transparency-as-product wellness peer — data-forward, lab-report aesthetic', url: 'https://www.functionhealth.com/' }
    - { name: 'Spotify (Circular era)', role: 'popularized Circular as the geometric-sans default of the venture-DTC wave', url: 'https://www.spotify.com/' }
    - { name: 'Aesop', role: 'minimal apothecary-as-editorial counter-reference — Ritual rejects its serif/amber for sans/navy', url: 'https://www.aesop.com/' }
---


## 1. Visual Theme & Atmosphere

Ritual's storefront reads like a research white paper that happens to sell you multivitamins. The canvas is pure white `#ffffff`, the type is a brand-licensed geometric sans (**CircularXX**), and almost everything you read — body copy, captions, and the largest headlines alike — is set in one color: **Ritual Navy `#142b6f`**. There is no black on the page. The decision to set body text in deep navy rather than `#000000` is the entire mood in a single token: it is soft enough to feel calm and human, dark enough to read as authoritative, and consistent enough that the page speaks in one even voice from header to footer.

The display register is confident but quiet. Headlines run large — the live hero `<h1>` measures **58px CircularXX at weight 450**, a deliberate half-step above regular `400`. That extra `50` units of weight is doing careful work: it gives big type enough presence to anchor a hero without ever tipping into the "BUY NOW" boldness of the supplement aisle. The result is an even gray-navy color on the page that feels measured and clinical — the typographic equivalent of a clinician's tone of voice.

Against this navy-on-white austerity, Ritual deploys exactly one warm move: its signature **yellow `#ffd200`**. The yellow is never the page; it is the highlight. It shows up in the capsule-bead illustration (the little oil beads suspended in the clear capsule), in the "Made Traceable" supply-chain graphics, in a highlight underline, in a play moment or an icon. Navy is the science; yellow is the warmth that keeps the science from feeling cold. This pairing — deep institutional navy plus a single optimistic yellow — *is* the Ritual identity. Remove the yellow and it reads like a fintech; remove the navy and it reads like a snack brand. Together they read "trustworthy, but human."

The component language reinforces the register. The signature CTA is a solid navy rectangle rounded to a soft `25px` radius — not a full pill (too playful), not a sharp corner (too severe), but a deliberate in-between that softens the institution. White label inside, navy fill, calm. The whitespace is generous and grid-disciplined; sections breathe; nothing crowds. Photography is bright, clean, often shot on white or warm cream, with the clear capsule and its yellow beads as the recurring hero object — the visual proof of the transparency promise.

Where most wellness DTC reaches for sage greens, blush pinks, soft serifs, and "natural" leaf cues, Ritual went the other direction entirely: **navy + yellow + geometric-sans on white**, the look of a brand that will show you exactly what is in the bottle and exactly where it came from. The atmosphere is honest, modern, and a little bit lab-coat — wellness for people who read the clinical-trial citations.

**Key Characteristics:**
- Pure white lab canvas `#ffffff` as the dominant surface
- **Ritual Navy `#142b6f`** as a do-everything color: body text, headlines, AND the primary CTA
- No pure black anywhere — navy replaces it for warmth and consistency
- **CircularXX** geometric sans carries 100% of type (display + body)
- Headlines at `58px` weight `450` — a confident half-step above regular, never aisle-loud
- Signature CTA: solid navy fill, white label, soft `25px` radius (not pill, not square)
- One warm accent — signature **yellow `#ffd200`** — for highlights, illustration, capsule beads
- Navy-on-yellow (not white-on-yellow) when the yellow is a fill — the yellow is too light for white
- Generous, grid-disciplined whitespace; calm section cadence
- Clear-capsule-with-yellow-beads as the recurring hero object (the transparency proof)
- "Made Traceable" supply-chain visuals as a brand signature
- Clinical, science-backed, transparent voice — research-paper register, not supplement-aisle


## 2. Color Palette & Roles

### Primary / Canvas
- **Background** `#ffffff` [→ `--bg`]: pure white lab canvas — the dominant surface for nearly every section.
- **Bg Soft** `#f7f8fa` [→ `--bg-soft`]: faintest cool-gray, used to alternate sections so white pages don't blur together.
- **Bg Deeper** `#eef0f5` [→ `--bg-deeper`]: secondary surface for inset cards and panels on white.
- **Bg Cream** `#fbf7ee` [→ `--bg-cream`]: warm off-white that pairs with the yellow accent for editorial bands.
- **Surface** `#ffffff` [→ `--surface`]: default card surface — cards sit on white with a hairline border.

### Brand — Navy Does Everything
- **Brand / Ritual Navy** `#142b6f` [→ `--brand`]: the do-everything color — body text, headlines, primary CTA fill, focus ring. Live-probed from production.
- **Brand Hover** `#0f2154` [→ `--brand-hover`]: darker navy for CTA press / hover.
- **Brand Soft** `#e7eaf3` [→ `--brand-soft`]: navy tint for badge backgrounds and text-selection wash.
- **On-Brand** `#ffffff` [→ `--on-brand`]: white label on the navy CTA.

### Accent — The Warm Yellow
- **Accent Yellow** `#ffd200` [→ `--accent-yellow`]: signature Ritual yellow — highlights, capsule-bead illustration, traceability graphics, play moments. The single warm move.
- **Accent Yellow Soft** `#fff3bf` [→ `--accent-yellow-soft`]: pale yellow wash for highlight bands and marker underlines.
- **Accent Yellow Deep** `#e6bd00` [→ `--accent-yellow-deep`]: yellow border / hover edge for yellow buttons.
- **On-Accent** `#142b6f` [→ `--on-accent`]: navy text on yellow fills — the yellow is too light for white text.

### Surface / Navy Ground
- **Bg Navy** `#142b6f` [→ `--bg-navy`]: full-bleed navy section ground (footer, feature bands) with white type reversed out.

### Text
- **Text** `#142b6f` [→ `--text`]: body copy and headlines — Ritual Navy, never black.
- **Text Strong** `#0f2154` [→ `--text-strong`]: deepest navy for emphasis and high-contrast headings.
- **Text Muted** `#5a6680` [→ `--text-muted`]: desaturated navy-gray for meta, captions, secondary copy.

### Borders & Dividers
- **Border** `#dfe3ec` [→ `--border`]: cool hairline divider on white.
- **Border Strong** `#c3c9d8` [→ `--border-strong`]: emphasis hairline / default input border.
- **Border Navy** `#142b6f` [→ `--border-navy`]: focus border and selected-state outline.

### Semantic
- **Success** `#1f8a5b` [→ `--success`]: confirmation — in-stock, subscribed, order placed.
- **Warning** `#e6bd00` [→ `--warning`]: caution — reuses the deep-yellow family so warnings stay on-brand.
- **Danger** `#c2362b` [→ `--danger`]: error, out-of-stock, validation failure.
- **Info** `#142b6f` [→ `--info`]: informational notices default to brand navy.


## 3. Typography Rules

### Font Family — One Geometric Sans

**CircularXX** (the brand-licensed extended cut of Lineto's *Circular*, by Laurenz Brunner) handles **100% of the typography** — display, headlines, body, nav, button, eyebrow, caption. It is a geometric grotesque with near-circular bowls and a faintly warm, friendly tone that keeps the navy austerity from going cold. There is no serif anywhere on the live site; the entire personality is carried by one sans across every register.

```
display: "CircularXX", "Circular", Helvetica, Arial, system-ui, -apple-system, sans-serif
body:    "CircularXX", "Circular", Helvetica, Arial, system-ui, -apple-system, sans-serif
mono:    ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace   (fallback only — not used directly)
```

Loaded weights cluster around `400`, `450`, `500`, `600`, `700`. The **`450` "Book" weight is the signature** — it is what the live `<h1>` uses, and it is what gives Ritual headlines their distinctive calm-but-present color. Body copy runs at `400`/regular with generous `1.6` line-height for readability of long clinical claims.

### Hierarchy

| Token | Size | Weight | Line-height | Tracking | Case | Use |
|-------|------|--------|-------------|----------|------|-----|
| `display-hero` | 80 | 450 | 1.0 | -0.02em | sentence | rare full-bleed campaign headline |
| `display-lg` | **58** | **450** | 1.05 | -0.015em | sentence | **the signature live hero `<h1>`** |
| `h1` | 44 | 500 | 1.1 | -0.012em | sentence | page / PDP title |
| `h2` | 34 | 500 | 1.15 | -0.008em | sentence | section headline |
| `h3` | 26 | 500 | 1.25 | -0.004em | sentence | subsection / card heading |
| `h4` | 20 | 500 | 1.3 | 0 | sentence | small heading / feature label |
| `body-lg` | 18 | 400 | 1.6 | 0 | sentence | lede / intro paragraph |
| `body` | 16 | 400 | 1.6 | 0 | sentence | default body copy |
| `body-sm` | 14 | 400 | 1.5 | 0 | sentence | secondary copy, footnotes |
| `label` | 13 | 500 | 1.4 | +0.01em | sentence | form labels, meta |
| `eyebrow` | 12 | 600 | 1.3 | +0.08em | UPPERCASE | section eyebrows, category tags |
| `caption` | 12 | 450 | 1.4 | +0.02em | sentence | image captions, fine print |
| `button` | 15 | 500 | 1.0 | +0.01em | sentence | CTA labels |
| `nav` | 15 | 500 | 1.2 | 0 | sentence | top-nav items |
| `price` | 16 | 500 | 1.2 | 0 | sentence | product price |

### Principles

- **Set everything in CircularXX.** Do not introduce a serif for "trust" or a second sans for "data" — the single family is the discipline.
- **Use `450` for big display copy.** The half-step above regular is the brand's typographic fingerprint; `700` headlines read too commercial.
- **Color type navy, never black.** `#142b6f` for all text; pure black would break the calm.
- **Sentence case for headlines.** Reserve UPPERCASE for the `12px +0.08em` eyebrow only.
- **Generous line-height (`1.6`) on body** — clinical claims and ingredient copy are long; let them breathe.
- **Tighten tracking as size grows** (`-0.02em` at 80px, `0` at body) so large headlines stay optically even.
- **One weight per role.** Headlines `450`–`500`, body `400`, labels/eyebrows `500`–`600`. Avoid `bold` runs inside body copy; use the deep-navy `text-strong` for emphasis instead.


## 4. Component Stylings

### Buttons — Soft-Rounded Navy, Not Pills

Four variants. All share the signature **`25px` radius** — the soft in-between corner that defines the brand.

```css
/* 1. Primary — navy fill, white label (the hero CTA) */
.btn-primary {
  background: #142b6f;
  color: #ffffff;
  padding: 14px 28px;
  border-radius: 25px;
  font: 500 15px/1 "CircularXX";
  letter-spacing: 0.01em;
  text-transform: none;          /* sentence case */
  transition: background 240ms cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-primary:hover { background: #0f2154; }

/* 2. Secondary — outlined navy on white */
.btn-secondary {
  background: #ffffff;
  color: #142b6f;
  border: 1.5px solid #142b6f;
  padding: 13px 26px;
  border-radius: 25px;
}
.btn-secondary:hover { background: #e7eaf3; }

/* 3. Yellow — the warm accent CTA (navy text!) */
.btn-yellow {
  background: #ffd200;
  color: #142b6f;               /* navy on yellow — yellow is too light for white */
  padding: 14px 28px;
  border-radius: 25px;
}
.btn-yellow:hover { background: #e6bd00; }

/* 4. Ghost — text-only, inline navy */
.btn-ghost {
  background: transparent;
  color: #142b6f;
  padding: 12px 20px;
  border-radius: 25px;
  text-decoration: underline;
  text-underline-offset: 4px;
}
```

The `25px` radius is the single most copy-able Ritual detail. It is softer than a typical `8px–12px` button but stops short of a full pill — read it as "rounded enough to feel friendly, square enough to feel serious." Use the **yellow button sparingly**: it is the loud option, reserved for a single primary action per view (e.g. a quiz "Get started"), never stacked next to other yellow buttons.

### Cards — Hairline on White

```css
.card {
  background: #ffffff;
  border: 1px solid #dfe3ec;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 1px 2px rgba(20, 43, 111, 0.06);
  transition: box-shadow 240ms, transform 240ms;
}
.card:hover {
  box-shadow: 0 8px 24px rgba(20, 43, 111, 0.10);
  transform: translateY(-2px);
}
```

Product and content cards sit on the white canvas with a `16px` radius (one step softer than the `12px` md default, calmer than the `25px` CTA) and a near-invisible navy-tinted shadow. On hover the card lifts gently and the shadow deepens — restrained, never bouncy. Product cards: image → name → benefit line → price → CTA, all type in navy.

### Inputs / Forms — Calm and Legible

```css
.input {
  background: #ffffff;
  border: 1.5px solid #c3c9d8;
  border-radius: 12px;
  padding: 14px 16px;
  font: 400 16px "CircularXX";
  color: #142b6f;
}
.input::placeholder { color: #5a6680; }
.input:focus {
  border-color: #142b6f;
  outline: 2px solid #142b6f;
  outline-offset: 2px;
}
```

Inputs are `16px` to prevent iOS zoom, `12px` radius, navy text on white, with a clear `1.5px` border that turns navy on focus. Labels sit above at `13px/500`. The quiz flow (Ritual's signature onboarding) uses large, generously padded radio cards rather than dropdowns — tappable, calm, one decision per screen.

### Badges / Tags / Pills

| Badge | Bg | Text | Use |
|-------|-----|------|-----|
| Default | `#e7eaf3` (navy soft) | `#142b6f` | category tag, "Best seller" |
| Yellow | `#ffd200` | `#142b6f` | "New", featured highlight |
| Subscribe | `#142b6f` | `#ffffff` | subscription / save badge |
| Success | `#1f8a5b` | `#ffffff` | "In stock", "Subscribed" |

All badges use the `pill` radius (`9999`) — full pills are reserved for small badges, while interactive buttons use the `25px` soft corner. Badge type is `12px UPPERCASE +0.08em` CircularXX.

### Navigation

```css
.nav {
  height: 72px;
  background: #ffffff;
  border-bottom: 1px solid #dfe3ec;
  font: 500 15px "CircularXX";
  color: #142b6f;
}
.nav a:hover { color: #0f2154; text-decoration: underline; text-underline-offset: 6px; }
```

A thin `72px` white header with a hairline bottom border, navy wordmark/links, and a navy CTA ("Shop" or "Take the quiz") at the right. Sticky on scroll with the same white background — no color change, no shadow drop until content scrolls beneath, keeping the chrome calm. The cart and account are minimal navy icons.


## 5. Layout Principles

### Spacing System
- Base unit **4px**; scale `[0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]`.
- Inside components: `16–24px` padding. Between content blocks: `48–64px`. Between full sections: `96–128px`.
- The large inter-section gaps are deliberate — they give each claim room to land, reinforcing the white-paper calm.

### Grid & Container
- Page max-width **1320px**, centered, with comfortable side gutters.
- Prose / editorial column capped at **700px** for readability of long clinical copy.
- Product grids: 4-up desktop → 3-up at `1024px` → 2-up tablet → 1-up mobile.
- Strict column grid (12-col) underpins feature sections; alignment is Swiss-precise.

### Whitespace Philosophy
- White is the brand. Whitespace is not "empty" — it is the lab bench the product sits on.
- Never crowd a claim. One headline, one supporting line, one CTA, then space.
- Alternate `#ffffff` and `#f7f8fa` (and occasionally `#fbf7ee` cream) section grounds to segment a long page without lines or boxes.

### Section Cadence
- Hero (white, navy 58px headline, navy CTA) → transparency / "Made Traceable" feature → ingredient detail → social proof → quiz prompt → navy footer.
- A full-bleed **navy band** (`#142b6f` ground, white type, yellow accent) appears once or twice per page as a tonal punctuation — the only place the navy becomes the surface rather than the ink.


## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| **Micro** | 4px | tiny chips, inline tags, image-corner softening |
| **Standard** | 8px | small controls, secondary inputs |
| **Comfortable** | 12px | inputs, small cards (default `md`) |
| **Relaxed** | 16px | product / content cards |
| **CTA** | **25px** | **the signature button radius — soft, not pill** |
| **Large** | 32px | hero media, feature panels, large illustration frames |
| **Pill** | 9999px | small badges and tags only |

Ritual's radius story is about the **`25px` CTA**: softer than the typical app button, stopping just short of a pill. It signals "friendly but serious." Cards stay a step tighter at `16px` so they read as structured containers, while the buttons inside them are the soft, inviting endpoint. Avoid `0px` sharp corners (too clinical-cold) and avoid full pills on buttons (too playful for the science register).


## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | flat, no shadow | section grounds, navy bands, inline content |
| 1 | `0 1px 2px rgba(20, 43, 111, 0.06)` | resting cards, inputs |
| 2 | `0 8px 24px rgba(20, 43, 111, 0.10)` | card hover, dropdowns, popovers |
| 3 | `0 24px 64px rgba(20, 43, 111, 0.18)` | modals, quiz overlays, cart drawer |

### Shadow Philosophy

Shadows are **navy-tinted, not gray** — every elevation token uses `rgba(20, 43, 111, …)` so the lift stays in the brand's color world and never muddies to neutral gray. Elevation is gentle: resting cards are nearly flat (`1px` shadow), hover adds a soft `8px` lift, and only true overlays (modal, cart) get real depth. The brand leans on whitespace and hairline borders far more than on shadow — depth is a quiet supporting cue, not a styling feature.


## 8. Interaction & Motion

- **Easing:** standard `cubic-bezier(0.4, 0, 0.2, 1)` for nearly everything — a calm, material-style curve with no overshoot or bounce.
- **Durations:** fast `150ms` (hovers, color shifts), standard `240ms` (cards, drawers, reveals), slow `360ms` (page-level transitions, hero illustration).
- **Button hover:** navy CTA darkens `#142b6f → #0f2154`; yellow CTA darkens `#ffd200 → #e6bd00`; secondary fills to `#e7eaf3`. Color shift only — no scale, no shadow pop.
- **Card hover:** `translateY(-2px)` + shadow deepen to level 2. Subtle, single-step.
- **Capsule / illustration:** the clear-capsule-with-yellow-beads may animate on scroll-in — beads drift or the capsule rotates slowly (`360ms+`). This is the one "delight" moment; keep it slow and continuous, never jittery.
- **Scroll reveals:** sections fade-and-rise `16px` over `240ms` as they enter the viewport.
- **Quiz flow:** screen-to-screen `240ms` cross-fade; progress bar fills in yellow `#ffd200` against navy.
- **Reduced motion:** `prefers-reduced-motion: reduce` honored — bead animation and scroll reveals are disabled; content appears in place; color-state changes remain (they are not motion).


## 9. Accessibility & A11y

Computed contrast against the live tokens (bg `#ffffff`, text/brand `#142b6f`, accent `#ffd200`):

- **Text on bg:** `#142b6f` on `#ffffff` = **11.6:1** — AAA for all sizes.
- **On-brand on brand (navy CTA):** `#ffffff` on `#142b6f` = **11.6:1** — AAA. White label on navy is high-contrast and safe.
- **Navy on yellow (yellow CTA / badge):** `#142b6f` on `#ffd200` = **9.7:1** — AAA. This is why yellow fills must use **navy** text, never white.
- **White on yellow (DO NOT USE):** `#ffffff` on `#ffd200` = **1.5:1** — fails everything. Yellow is a navy-text-only color.
- **Muted text on bg:** `#5a6680` on `#ffffff` = **5.6:1** — AA for normal text, AAA for large.
- **Text on soft panel:** `#142b6f` on `#f7f8fa` = **11.0:1** — AAA.
- **White on navy band:** `#ffffff` on `#142b6f` = **11.6:1** — AAA for reversed-out footer/feature copy.

Guidance:
- **Focus indicators:** `2px solid #142b6f` outline with `2px` offset gap on all interactive elements; visible against white and against navy bands (switch to `#ffd200` ring on navy grounds for visibility).
- **ARIA:** quiz steps use `role="radiogroup"` with labeled `radio` cards; cart drawer is a `dialog` with focus trap; capsule animation is `aria-hidden`.
- **Keyboard nav:** full tab order through nav → hero CTA → product grid → footer; quiz fully keyboard-operable; skip-to-content link first in DOM.
- **Screen readers:** decorative bead/capsule illustration `aria-hidden="true"`; price and "subscribe & save" amounts read as full phrases, not symbols.
- **Reduced motion:** honored (see §8) — no motion-dependent information.


## 10. Responsive Behavior

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Mobile | <640px | 1-up product grid; hero 58→34px; nav → hamburger; CTAs full-width |
| Tablet | 640–1024px | 2-up grid; nav still collapsed; hero 44px |
| Desktop | 1024–1320px | 3–4-up grid; inline nav; full hero scale |
| Wide | 1320–1536px | content caps at 1320px; side gutters grow; hero illustration may extend |

- **Touch targets:** minimum `44×44px` on all CTAs and quiz cards; the `14px 28px` button padding clears this comfortably.
- **Per-component collapsing:** multi-column feature bands stack vertically on mobile (image above text); the navy footer collapses its link columns into an accordion.
- **Headline scaling:** the `58px` hero steps down through `44 → 34px` rather than fluid-scaling, preserving the `450`-weight optical color at each stop.
- **Images:** capsule/product photography served responsive `srcset`; full-bleed navy bands keep full width on mobile; illustration scales but never below legibility of the yellow beads.
- **Sticky nav** stays `72px`; on mobile it compresses to `~60px` with the wordmark centered and cart at right.


## 11. Content & Voice

### Tone

**Clinical, transparent, and warm — a researcher who likes you.** Sentence case, second-person, evidence-forward. Claims are specific and cited ("Made Traceable", "clinically-backed", named suppliers). No hype, no exclamation-point energy, no urgency manipulation. The brand's whole proposition is honesty, so the copy never oversells.

### Microcopy patterns
- Primary CTA: **"Shop now"** / **"Take the quiz"** (sentence case)
- Subscription: **"Subscribe & save"** (the default purchase path)
- Transparency hook: **"Made Traceable"** (the brand signature — supply-chain visibility)
- Out-of-stock: **"Notify me"**
- Errors: **"Something didn't work. Try again."** (no blame, no exclamation)
- Empty cart: **"Your cart is empty."** (calm, declarative)

### Empty states
- Calm, navy on white, one line of copy + one navy CTA back to shopping or the quiz. Never an illustration-heavy "oops" moment — the brand stays composed.

### CTA verb conventions
- **Use:** Shop / Subscribe / Take the quiz / Learn more / See the research / Notify me
- **Avoid:** "Buy now!", urgency ("Last chance", "Selling fast"), hype ("Game-changing", "Miracle"). The trust is the pitch.


## 12. Dark Mode & Theming

**Light-only.** The white lab canvas *is* the brand — navy ink on white is the entire transparency metaphor (you can see into it, like the clear capsule). Inverting to a dark surface would break that meaning and dim the yellow accent's warmth. The one place navy becomes a surface is the intentional full-bleed **navy band** (`#142b6f` ground, white type, yellow accent) used as tonal punctuation — but that is a designed light-mode device, not a dark theme. No dark-mode storefront is offered, and theme switching is not part of the visual language.


## 13. Lineage & Influences

Ritual launched in 2016 around a single radical promise: a multivitamin you can see into, with a supply chain you can trace ("Made Traceable"). The visual identity is the argument made in chrome. It descends from **Swiss international information design** — Müller-Brockmann grids, content-first neutrality, the conviction that clarity is a moral position — and renders it in a single geometric grotesque, **CircularXX** (the brand-licensed cut of Lineto's *Circular*, the typeface that became the default voice of the 2016–2020 venture-DTC wave via Spotify and countless startups). The navy-on-white discipline and the lab-report calm align it with the contemporary clinical-trust register of health tech like **Oura** and **Function Health**, brands that also treat data transparency as the product. The warm **yellow `#ffd200`** is the humanizing dissent inside that rigor — the one color allowed to be optimistic.

What Ritual deliberately rejects is the entire supplement-aisle and apothecary vocabulary: no gold foil, no leaf-and-mortar "natural" cues, no serif nostalgia (the explicit counter-reference is **Aesop**, whose amber-bottle/serif minimalism Ritual answers with sans/navy), no neon "energy" gradients. Where the wellness mainstream signals trust through earthy softness, Ritual signals it through clinical clarity — the clear capsule, the named supplier, the navy citation. The bottle is transparent; so is the chrome.

**Named influences:**
- **Circular (Lineto, Laurenz Brunner)** — the geometric grotesque CircularXX is licensed from; sets the calm, even, slightly-warm sans voice across the entire site.
- **Josef Müller-Brockmann / Swiss grid systems** — information-design rigor: grid, neutrality, content-first layout, clarity-as-ethics.
- **Oura** — clean clinical-trust health-tech contemporary; white canvas, restrained palette, science register.
- **Function Health** — transparency-as-product wellness peer; data-forward, lab-report aesthetic.
- **Spotify (Circular era)** — popularized Circular as the geometric-sans default of the venture-DTC wave Ritual emerged from.
- **Aesop** — the apothecary-as-editorial counter-reference; Ritual rejects its serif/amber for sans/navy.


## 14. Do's and Don'ts

### Do
- Set **100% of type in CircularXX** — display, body, nav, button, eyebrow alike.
- Color **all text Ritual Navy `#142b6f`**, never pure black.
- Use the **`450` weight for large display copy** — the calm half-step above regular is the brand's fingerprint.
- Make the primary CTA a **solid navy fill, white label, `25px` radius**.
- Reserve **yellow `#ffd200` for highlights, illustration, and one loud CTA** — the accent, never the page.
- Put **navy text on yellow** fills (never white — it fails contrast).
- Keep the **canvas white `#ffffff`** with `#f7f8fa` / `#fbf7ee` for gentle section alternation.
- Use **generous whitespace** (`96–128px` between sections) so each claim lands.
- Tint shadows **navy `rgba(20,43,111,…)`**, not gray.
- Write **clinical, transparent, sentence-case** copy with specific, cited claims.
- Use the **navy full-bleed band** once or twice as tonal punctuation, with the yellow accent inside.
- Keep motion **calm** — color-shift hovers, gentle `-2px` card lift, slow capsule animation.

### Don't
- **Don't** use pure black `#000000` — navy `#142b6f` replaces it everywhere.
- **Don't** introduce a serif or a second typeface "for trust" — CircularXX is the discipline.
- **Don't** set headlines at `700` bold — it reads commercial; stay at `450`–`500`.
- **Don't** make buttons sharp `0px` corners or full pills — the signature is the soft `25px`.
- **Don't** put white text on yellow — `1.5:1`, fails everything. Yellow is navy-text-only.
- **Don't** flood the page with yellow — it is punctuation, not background.
- **Don't** reach for sage/blush/earth-tone "wellness" palettes — that is the aesthetic Ritual rejects.
- **Don't** use urgency or hype copy ("Last chance", "Miracle", "!") — the transparency is the pitch.
- **Don't** crowd claims — one headline, one line, one CTA, then space.
- **Don't** use gray shadows or heavy elevation — keep depth navy-tinted and gentle.


## 15. Agent Prompt Guide

### Quick Color Reference
- Background: `#ffffff`
- Text (navy, not black): `#142b6f`
- Brand / CTA fill: `#142b6f`
- On-brand (button label): `#ffffff`
- Accent yellow: `#ffd200`
- On-accent (text on yellow): `#142b6f`
- Soft panel: `#f7f8fa`
- Cream panel: `#fbf7ee`
- Navy band ground: `#142b6f`
- Border hairline: `#dfe3ec`
- Muted text: `#5a6680`

### Example Component Prompts

> "Create a Ritual-style landing hero. Pure white background `#ffffff`. Headline in CircularXX 58px weight 450, sentence case, navy `#142b6f`, tracked −0.015em. One supporting line of 18px navy body below. Primary CTA: solid navy `#142b6f` fill, white label, `25px` border-radius, `14px 28px` padding — darkens to `#0f2154` on hover. No black, no serif, generous whitespace. A clear-capsule-with-yellow-beads illustration sits to the right."

> "Design a Ritual product card. White surface, `16px` radius, `1px` border `#dfe3ec`, navy-tinted shadow `0 1px 2px rgba(20,43,111,0.06)`. Layout: product image → name (CircularXX 18px/500 navy) → one benefit line (14px muted `#5a6680`) → price (16px/500 navy) → navy `25px`-radius 'Subscribe & save' button. Lifts `-2px` on hover."

> "Build a Ritual 'Made Traceable' transparency band as a full-bleed navy section: `#142b6f` ground, white CircularXX headline 34px/500, white body, and a yellow `#ffd200` accent line or icon. Three columns: supplier → ingredient → result. Calm, lab-report tone."

> "Make a Ritual yellow CTA — the one loud action. Background `#ffd200`, NAVY text `#142b6f` (never white), `25px` radius, `14px 28px` padding, CircularXX 15px/500. Hover darkens to `#e6bd00`. Use only once per view."

> "Create a Ritual quiz step. White card, `16px` radius, navy 34px/450 question, large tappable radio cards (each `25px` radius, `1.5px` border, navy text), yellow `#ffd200` progress bar, navy 'Continue' CTA. One decision per screen, generous spacing."

> "Design a Ritual badge set: default = navy-soft `#e7eaf3` bg + navy `#142b6f` text; 'New' = yellow `#ffd200` bg + navy text; 'Subscribed' = success `#1f8a5b` bg + white text. All full-pill radius, 12px UPPERCASE CircularXX +0.08em."

### Iteration Guide
1. **If it reads cold/corporate** — warm it with the yellow accent (a highlight underline, the capsule beads, one icon). The navy needs the yellow to feel human.
2. **If it reads supplement-aisle** — strip any gold, serif, leaf, or gradient; return to flat navy-on-white + CircularXX.
3. **If headlines feel too commercial** — drop weight to `450` and color them navy `#142b6f` instead of black.
4. **If buttons feel wrong** — check the radius: it must be `25px` (not `8px`, not a full pill) with a solid navy fill.
5. **If yellow text is unreadable** — you put white on yellow; switch to navy `#142b6f`, the only legible pairing.
6. **If the page feels crowded** — add section spacing (`96–128px`) and alternate `#ffffff` / `#f7f8fa` grounds; let claims breathe.
7. **If it lacks trust** — make a claim specific and cite it ("Made Traceable", named supplier); the transparency is the design.
8. **If shadows look muddy** — re-tint them navy `rgba(20,43,111,…)`; never use gray elevation.
