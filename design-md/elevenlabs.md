---
name: ElevenLabs
tagline: Lime-on-deep-green voice-tech aesthetic — InterDisplay headlines and pill CTAs over a near-white canvas with lush moss accents.
author: webdesignhot
source_url: https://elevenlabs.io
spec: design.md/v1
quality: curated
featured: false
categories: [ai, saas]
tags: [light, minimal, sans, spacious, bright, structured]
preview_swatch: ['#9fe870', '#163300', '#e2f6d5']
related: [anthropic, huggingface, replicate]
description: 'ElevenLabs leans into a synaesthetic voice-tech identity — paper-white canvas (`#ffffff`) with a single confident lime green (`#9fe870`) for CTAs, paired against a deep moss-green text tone (`#163300`) that reads richer than plain black. InterDisplay does the headline work at 96px/700 with a tight `-2.4px` track, and soft mint surfaces (`#e2f6d5`) carry the secondary chrome. The result is an unusually warm, vegetal palette for an AI company.'

colors:
  bg: '#ffffff'              # body canvas
  bg-soft: '#e2f6d5'         # mint surface band
  surface: '#ecfae8'          # secondary panel tint
  surface-hover: '#d4f0c2'    # darker mint on hover
  text: '#163300'             # near-black moss green
  text-muted: '#163300b3'     # 70% moss
  text-soft: '#16330080'      # 50% moss
  brand: '#9fe870'            # lime CTA
  brand-hover: '#8ad65e'      # darker lime on press
  brand-text: '#163300'       # text on lime
  accent: '#0e0f0c'           # near-black accent
  border: '#1633001a'         # 10% moss hairline
  border-soft: '#1633000d'    # 5% moss
  on-brand: '#163300'

typography:
  display:
    family: 'InterDisplay, Inter, "InterVariable", -apple-system, "system-ui", sans-serif'
    weights: [500, 600, 700]
  body:
    family: 'Inter, "InterVariable", -apple-system, "system-ui", sans-serif'
    weights: [400, 500]
  mono:
    family: 'Menlo, ui-monospace, "SF Mono", Monaco, Consolas, monospace'
    weights: [400]
  scale:
    h1:    { size: 96, weight: 700, lineHeight: 1.0,  tracking: '-0.025em' }
    h2:    { size: 64, weight: 700, lineHeight: 1.05, tracking: '-0.02em' }
    h3:    { size: 32, weight: 600, lineHeight: 1.2,  tracking: '-0.01em' }
    body:  { size: 16, lineHeight: 1.5 }
    label: { size: 13, weight: 500, tracking: '0' }

radius:
  sm: 6
  md: 8
  lg: 12
  card: 16
  button: 9999    # pill — defining shape
  pill: 9999

components:
  button-primary:
    backgroundColor: brand
    textColor: brand-text
    rounded: pill
    use: 'lime pill — primary CTA across hero and pricing'
  button-secondary:
    backgroundColor: transparent
    textColor: text
    border: text
    rounded: pill
  card:
    backgroundColor: bg-soft
    border: border
    rounded: card
    use: 'mint feature card — soft surface contains demo audio waveforms'
  badge:
    backgroundColor: surface
    textColor: text
    rounded: pill

lineage:
  summary: |
    ElevenLabs' refreshed marketing palette walks away from the
    near-black voice-recording aesthetic of its early site and lands
    on something more vegetal and optimistic — paper-white canvas,
    deep moss-green type (`#163300`) instead of plain black, and a
    single confident lime CTA (`#9fe870`) wrapped in a fully-rounded
    pill. The duet of moss-green text on lime echoes the colour
    grammar of the audio-waveform: a saturated organic accent against
    a rich earthy ground. Type is InterDisplay at headline scale
    (a tighter, more architectural cut of Inter), held to 700 weight
    with `-2.4px` tracking at 96px — that hard negative tracking is
    where the marketing voice lives. The pill-shaped CTAs and mint
    surface tints place ElevenLabs visually adjacent to Linear-era
    minimalism, but the green-on-green pairing is what makes the brand
    legible at a glance against the otherwise sea of grayscale AI
    landing pages.
  influences:
    - name: Linear
      role: Pill CTAs and the discipline of a single confident accent over a quiet neutral canvas.
      url: https://linear.app
    - name: Stripe
      role: Single-brand-colour-as-action discipline; ElevenLabs replaces blue with lime but keeps the chromatic restraint.
      url: https://stripe.com
    - name: Inter / Rasmus Andersson
      role: InterDisplay sets the headline tone — a tighter cut tuned for large-scale display use.
      url: https://rsms.me/inter
---

## Overview

ElevenLabs' marketing surface is built around a single observation:
voice is organic. Rather than reach for the cool-blue tech palette
that defines most AI peers, the site grounds itself in a deep moss
green (`#163300`) for type and a saturated lime (`#9fe870`) for action.
The base canvas stays paper-white, but the chromatic personality is
unmistakably vegetal — closer to a Patagonia annual report than a
typical machine-learning landing page.

The display family is **InterDisplay** at 96px/700 with `-2.4px`
letter-spacing — a tight, architectural cut of Inter tuned for
headline use. Body copy steps down to standard Inter at 16/24, and
the entire system avoids serif altogether. The hero CTA is a fully
rounded lime pill that anchors every page.

## Colors

- **bg** `#ffffff` — paper canvas; the default surface
- **bg-soft** `#e2f6d5` — mint band used between content sections
- **text** `#163300` — deep moss green replaces plain black
- **text-muted** `#163300b3` — 70% moss for captions
- **brand** `#9fe870` — lime CTA, the brand's identifying note
- **brand-hover** `#8ad65e` — darker lime on press
- **border** `#1633001a` — 10% moss hairline; never solid grey

The chromatic discipline is the thing: across the entire site there
is essentially one accent (lime) and one content tone (moss green).
Even error/info states are kept restrained, letting the lime CTA
read as both wayfinding and brand at once.

## Typography

Display type is **InterDisplay** at 700 weight, sized 96px with a
matching 96px line-height and `-2.4px` letter-spacing — that hard
negative tracking is what gives the marketing its compressed,
broadcast tone. H2 lands at 64px with similar discipline. Body steps
down to Inter at 400/500 across 16px on a 24px line-height.

There is no serif in the system — voice-tech leans technical, not
editorial. The mono family appears only in code samples and inline
API references, drawn from system Menlo to keep the bundle lean.

## Layout

The grid is generous and centered, with hero blocks claiming roughly
800–900px of horizontal real estate and large negative-space gutters
that let the lime CTA breathe. Section transitions alternate between
white and the mint `#e2f6d5` band, creating a soft two-tone rhythm
without ever flipping fully into a dark mode. Cards sit at 16px
radius, buttons land at full pill radius (9999px).

## Elevation & Depth

Depth is tonal, not shadowed. The mint band is the deepest the page
goes; everything else is white-on-white separated by a 10% moss
hairline (`#1633001a`). When elevation is needed — like a floating
voice-demo widget — the site reaches for a soft `0 8px 24px` shadow
in pure moss, never neutral grey.

## Shapes

Pill is the defining radius. CTAs, badges, audio-waveform pills and
voice-tag chips all share the 9999px radius, and that consistency is
what makes the brand legible at a glance. Cards step down to 16px,
inputs to 12px, and small inline tags to 6px.

## Components

The signature components are the **lime pill CTA** (`#9fe870` on
`#163300`, fully rounded), the **mint feature card** (`#e2f6d5` panel
with a 10% moss hairline and 16px radius), and the **voice-tag chip**
which carries an SVG waveform glyph alongside the speaker name.
Navigation is a thin top bar with no fill, letting the canvas
dominate.

## Do's and Don'ts

- **Do** keep the action palette to a single lime (`#9fe870`); secondary actions use the moss-on-white outlined pill, never a different hue.
- **Do** use moss-green (`#163300`) for type rather than plain black — it warms the page and signals brand at every paragraph.
- **Do** lean on InterDisplay 700 with `-2.4px` tracking at hero scale; that compression is the marketing voice.
- **Don't** mix the lime (`#9fe870`) with the moss-text colour (`#163300`) outside the CTA pairing — the contrast only works in that combination.
- **Don't** apply heavy drop-shadows to the mint cards; the surface tint does the elevation work.
- **Don't** introduce a serif into the system — voice-tech here is technical, and serif breaks the tone.
