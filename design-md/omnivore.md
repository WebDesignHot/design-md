---
name: Omnivore
tagline: Open-source read-it-later — clean white reading canvas, focused green-on-black brand, and a deliberately archival tone after the Eleven Labs sunset.
author: webdesignhot
source_url: https://omnivore.app
spec: design.md/v1
quality: curated
featured: false
categories: [media, dev-tools]
tags: [light, dark, sans, minimal, multi-theme, structured]
preview_swatch: ['#ffffff', '#1f2937', '#10b981']
related: [readwise, ghost, github]
description: 'Omnivore (now archived after the Eleven Labs acquisition) was the open-source read-it-later app dressed in a clean white reading canvas with a focused emerald `#10b981` brand and an Inter-based typographic system. Its marketing surface paired a near-black `#1f2937` chrome with generous reading widths — a calmer Pocket / Instapaper for the 2024–25 era.'

colors:
  bg: '#ffffff'                # primary marketing canvas
  bg-dark: '#0f1419'           # reader-mode dark canvas
  surface: '#f9fafb'           # cool-grey panel
  surface-2: '#f3f4f6'         # second-level neutral
  surface-dark: '#1f2937'      # dark-mode card
  text: '#1f2937'              # body, slate-900
  text-strong: '#0f1419'       # display
  text-muted: '#6b7280'        # captions
  text-soft: '#9ca3af'         # tertiary
  text-on-dark: '#f3f4f6'
  text-on-dark-muted: '#9ca3af'
  brand: '#10b981'             # emerald action
  brand-hover: '#059669'       # pressed
  brand-deep: '#047857'        # deep green
  brand-soft: '#d1fae5'        # tint
  accent: '#fbbf24'            # warm amber for highlights
  border: '#e5e7eb'
  border-dark: '#374151'
  on-brand: '#ffffff'

typography:
  display:
    family: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [600, 700]
  body:
    family: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [400, 500]
  serif:
    family: '"Lora", "Charter", Georgia, serif'
    weights: [400, 500]
  mono:
    family: '"JetBrains Mono", "Fira Code", Menlo, monospace'
    weights: [400]
  scale:
    h1:    { size: 56, weight: 700, lineHeight: 1.05, tracking: '-0.022em' }
    h2:    { size: 38, weight: 700, lineHeight: 1.15, tracking: '-0.015em' }
    h3:    { size: 24, weight: 600, lineHeight: 1.3,  tracking: '-0.005em' }
    body:  { size: 17, lineHeight: 1.6 }
    quote: { size: 20, family: serif, lineHeight: 1.5 }
    label: { size: 12, weight: 500, family: mono }

radius:
  xs: 4
  sm: 6
  md: 8
  lg: 10
  card: 12
  xl: 16
  xxl: 20
  button: 8
  pill: 9999

layout:
  container: 1180
  gutter: 24
  section-y: 96

components:
  - emerald-cta-button
  - reading-list-row
  - article-card-clean
  - dark-reader-toggle
  - open-source-badge
  - archive-banner

lineage:
  summary: |
    Omnivore was the open-source read-it-later app that filled the
    Pocket-shaped hole for serious readers between 2022 and the Eleven
    Labs acquisition / sunset in late 2024. Its marketing surface
    inherited the calm reading-app conventions — white canvas,
    Inter-based typography, generous reading widths — but distinguished
    itself with an emerald `#10b981` brand colour pulled from terminal
    palettes rather than the warm-orange of Readwise or the brand-blue
    of Pocket. The dark mode was a meaningful slate `#0f1419` —
    cooler than Linear's near-black, slightly bluer than Notion's
    campaign-zone. Headers used Inter at 56px / 700 weight with tight
    negative tracking, and a Lora-class serif appeared in the reader-
    surface mockups to model the actual reading experience.
    Spiritually closest to Instapaper's minimalism, technically
    closest to GitHub's open-source design language, the system was
    distinctive for being aggressively white-canvas where Readwise
    is cream.
  influences:
    - name: Instapaper
      role: Reading-app minimalism — white canvas, generous reading width, no chromatic decoration.
      url: https://instapaper.com
    - name: GitHub
      role: Open-source brand vocabulary — emerald accent, Inter typography, hairline cards.
      url: https://github.com
    - name: Pocket
      role: Direct functional predecessor; Omnivore positioned as the open-source alternative.
      url: https://getpocket.com
---

## Overview

Omnivore's marketing site sat on a clean white canvas with an
emerald `#10b981` brand colour and Inter at 56px / 700 weight
carrying the display headline. Where Readwise leaned warm-cream
and editorial, Omnivore leaned cool-white and structural — a
calmer, more developer-flavoured read-it-later app. The dark
reader mode (a meaningful slate `#0f1419` rather than pure black)
got its own mockup band on the marketing page.

The site is now archived following the Eleven Labs acquisition
in late 2024, but the design language remains a useful reference
for open-source reading-app conventions. The emerald-on-white
plus slate-dark-mode duet is the signature, paired with a Lora
serif inside the reader mockups to model the actual reading
experience.

## Colors

- **bg** `#ffffff` — primary marketing canvas
- **bg-dark** `#0f1419` — reader-mode dark canvas
- **surface** `#f9fafb` — cool-grey panel
- **text-strong** `#0f1419` — display
- **text** `#1f2937` — body, slate-900
- **text-muted** `#6b7280` — captions
- **brand** `#10b981` — emerald action colour
- **brand-soft** `#d1fae5` — tint for badges and hovers
- **accent** `#fbbf24` — warm amber for in-text highlights (the actual highlighter colour in the reader)
- **border** `#e5e7eb` — cool hairline

## Typography

Display is **Inter** at 700 weight, sized 56px on a 59px line-height
with `-0.022em` tracking. Body is plain Inter at 17px / 1.6 — slightly
larger than typical SaaS body to signal "reading app." A **Lora** serif
appears inside the reader mockups (and only there), modelling what
the actual saved-article reading surface looks like.

A monospaced **JetBrains Mono** shows up in the open-source badge,
version strings, and the small "v1.x.x" labels. The system has
no display serif — the serif lives only inside the product mockup,
not in the marketing chrome.

## Layout

The container is 1180px with 24px gutters and a moderate 96px
section vertical rhythm. The page reads as alternating bands:
hero (white) → feature row → reader mockup (often dark) → pricing
→ open-source CTA → footer. The dark-mode reader band is the
chromatic event of the page.

## Elevation & Depth

Depth on the white canvas is bordered (1px `#e5e7eb`) plus a soft
`0 4px 12px rgba(15,20,25,0.06)` shadow on cards. The dark-mode
mockup uses a 1px `#374151` border and no shadow, leaning on the
slate-vs-black contrast. The reader mockup gets a slightly stronger
shadow (`0 12px 32px rgba(15,20,25,0.18)`) to read as a floating
device frame.

## Shapes

Buttons land at 8px, cards at 12px, hero shells at 16–20px. The
radius ladder is moderate — softer than GitHub's 6px, tighter than
Webflow's 16px. Avatars and pills go full 9999px. The system reads
as developer-tool-rounded rather than SaaS-pillowy.

## Components

The defining components are the **emerald CTA button** (`#10b981`
fill, white Inter 500 label, 8px radius), the **reading-list row**
(a horizontal article tile with title, source, time-to-read, and
a small emerald checkmark for unread state), the **article card**
(white panel, 12px radius, hairline border, soft shadow), the
**dark reader mockup** (a slate `#0f1419` device frame showing
Lora-set serif body text and amber-highlighted passages), and the
**open-source badge** — a pill-shaped tile with a GitHub icon and
the repo star count.

## Do's and Don'ts

- **Do** hold the brand to the emerald `#10b981`; drift toward teal or lime breaks the developer-tool reading.
- **Do** reserve the Lora serif for the reader-product mockup only; using it in marketing chrome would imply Readwise / Substack territory.
- **Do** flip to slate `#0f1419` rather than pure black for dark-mode bands; pure black reads as Linear, not Omnivore.
- **Don't** swap the emerald for terminal-green `#00ff00`; Omnivore's green is a calmer, foliage-class hue.
- **Don't** use the amber accent on action surfaces; it represents the highlighter and lives inside the reader mockup only.
- **Don't** apply heavy shadows to feature cards; the bordered + soft-shadow pattern is the elevation strategy.
