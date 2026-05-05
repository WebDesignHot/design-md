---
name: DeepSeek
tagline: Deep-blue Chinese-tech minimalism — a research lab dressed in `#4d6bfe` and stark white space.
author: webdesignhot
source_url: https://www.deepseek.com
spec: design.md/v1
quality: curated
featured: false
categories: [ai, dev-tools]
tags: [light, minimal, sans, structured, cool, bright]
preview_swatch: ['#ffffff', '#4d6bfe', '#0a0a23']
related: [mistral, openai, huggingface]
description: 'DeepSeek''s site is the Chinese-research-lab aesthetic refined into a single-product page — a stark white canvas, deep electric blue `#4d6bfe` for the brand mark and primary action, near-black display copy, and a sans-serif system that reads cleanly in both Latin and CJK. The design language is "research paper meets enterprise SaaS": confident, restrained, and almost aggressively unstyled.'

colors:
  bg: '#ffffff'                # white canvas
  bg-deep: '#0a0a23'           # deep navy band used on hero / footer accents
  surface: '#f5f7fb'           # soft grey-blue surface
  surface-strong: '#eef1f8'    # card hover
  text: '#1a1a1a'              # near-black body
  text-strong: '#0a0a0a'       # display copy
  text-muted: '#6b7280'        # secondary copy
  text-on-dark: '#e6e8ef'
  brand: '#4d6bfe'             # signature DeepSeek blue (whale-mark blue)
  brand-hover: '#3a55e5'       # pressed
  brand-deep: '#2a3eb1'        # accent on white
  brand-soft: '#eaeefe'        # tonal pill background
  accent-cyan: '#5eaaff'       # secondary highlight in illustrations
  border: '#e5e7eb'            # hairline
  border-soft: '#eef0f4'
  on-brand: '#ffffff'

typography:
  display:
    family: 'Inter, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", -apple-system, "system-ui", sans-serif'
    weights: [500, 600, 700]
  body:
    family: 'Inter, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", -apple-system, "system-ui", sans-serif'
    weights: [400, 500]
  mono:
    family: '"JetBrains Mono", "Source Code Pro", Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 64, weight: 700, lineHeight: 1.1,  tracking: '-0.02em' }
    h2:    { size: 40, weight: 600, lineHeight: 1.15, tracking: '-0.015em' }
    h3:    { size: 24, weight: 600, lineHeight: 1.3,  tracking: '0' }
    body:  { size: 16, lineHeight: 1.6 }    # generous lh for CJK fallback
    label: { size: 13, weight: 500 }

radius:
  xs: 4
  sm: 6
  md: 8
  lg: 12
  card: 16
  xl: 20
  button: 8
  pill: 9999

layout:
  container: 1200
  gutter: 24
  rhythm: 8

components:
  button-primary: 'Solid `#4d6bfe` background, white text, 8px radius, 600 weight, 12–16px vertical padding. The brand-blue CTA is the entire action vocabulary.'
  button-secondary: 'Outlined — 1px `#e5e7eb` border on white, dark text, identical 8px radius.'
  card: '`#f5f7fb` panel with 16px radius and a 1px `#e5e7eb` border, no shadow.'
  hero: 'Two-column on desktop — bold Inter 64px headline left, abstract whale/grid illustration right. Sometimes flips to a `#0a0a23` deep-navy band with white type.'
  banner: 'Top announcement strip — `#eaeefe` soft-blue background, `#2a3eb1` text, single line about the latest model release.'
  nav: 'Quiet horizontal bar with bilingual labels (CN/EN), no fill until scroll.'

lineage:
  summary: |
    DeepSeek's site embodies a particular strain of Chinese-tech
    enterprise design: stark white canvas, a single saturated brand
    blue, near-black sans-serif type, and almost no decorative
    chrome. The brand colour `#4d6bfe` — sometimes called "whale blue"
    after the DeepSeek mascot — does all the action work, with
    `#eaeefe` as its tonal-pill cousin. The typography stack pairs
    Inter (or a near-Inter variable) with PingFang SC / Hiragino Sans
    GB / Microsoft YaHei for CJK fallback, on a slightly more
    generous 1.6 line-height than Western stacks usually run — a
    deliberate accommodation for Chinese characters which read denser
    at the same size. The aesthetic lineage runs through Anthropic's
    research-lab restraint, Mistral's monochromatic European
    minimalism, and Alibaba/Bytedance's enterprise-SaaS chromatic
    discipline. Where OpenAI uses a near-monochrome black-on-white
    and Mistral leans into orange, DeepSeek stakes out the saturated
    cool-blue end of the AI-lab spectrum, with the deep `#0a0a23`
    navy reserved for hero bands and footer accents to add weight
    without warming the palette.
  influences:
    - name: Anthropic
      role: Research-lab restraint — long-form essays and stark single-product marketing pages.
      url: https://www.anthropic.com
    - name: Mistral
      role: European-AI-lab discipline — single brand colour, near-monochrome support palette, generous whitespace.
      url: https://mistral.ai
    - name: Alibaba Cloud / ByteDance
      role: Chinese enterprise-SaaS chromatic vocabulary — saturated mid-blues on stark white with bilingual type stacks.
      url: https://www.alibabacloud.com
---

## Overview

DeepSeek's marketing surface is the Chinese AI-lab aesthetic at full
confidence. The canvas is pure white `#ffffff`, the brand colour is a
single saturated electric blue `#4d6bfe`, and the type system is
Inter + PingFang SC running on a 1.6 line-height to accommodate both
Latin and CJK characters at the same body size.

Hero bands sometimes flip to a deep `#0a0a23` navy with white
typography, particularly for major model-release announcements. The
top announcement strip — soft `#eaeefe` blue with `#2a3eb1` text —
is a permanent fixture, signalling whichever model version is current.

The overall posture is "research paper meets enterprise SaaS":
confident, almost aggressively unstyled, with the implication that
the technology speaks for itself.

## Colors

- **bg** `#ffffff` — stark white canvas, the working surface
- **bg-deep** `#0a0a23` — deep navy hero / footer band
- **surface** `#f5f7fb` — soft grey-blue card and panel base
- **text-strong** `#0a0a0a` — display copy, near full black
- **text** `#1a1a1a` — primary body
- **text-muted** `#6b7280` — captions and secondary metadata
- **brand** `#4d6bfe` — signature DeepSeek blue, the only action colour
- **brand-soft** `#eaeefe` — tonal pill background and announcement strip
- **brand-deep** `#2a3eb1` — accent text on light surfaces
- **border** `#e5e7eb` — hairline rules

## Typography

The display is **Inter** (or a near-Inter variable cut) at 700 weight,
sized 64px with `-0.02em` tracking. Headlines are bilingual on the
Chinese-locale version, with PingFang SC carrying the CJK characters
at the same size and weight.

Body type is the same Inter at 400/500, sized 16px on a generous 1.6
line-height — the extra leading is a deliberate accommodation for
Chinese characters, which read denser than Latin at identical font
sizes. The font stack chains through PingFang SC, Hiragino Sans GB,
and Microsoft YaHei for cross-platform CJK fallback.

Code blocks use **JetBrains Mono** or Source Code Pro on `#f5f7fb`
backgrounds, with minimal syntax highlighting.

## Layout

The container max-width is 1200px with 24px gutters and an 8px
spacing rhythm. Hero sections are typically two-column on desktop —
bold Inter headline left, abstract whale/grid illustration right —
collapsing to single column on mobile.

Vertical rhythm between sections runs 80–120px. Feature grids are
three-column on desktop with `#f5f7fb` cards and `#e5e7eb` borders;
no shadows lift them.

## Elevation & Depth

Depth comes from tonal layering (`#ffffff` → `#f5f7fb` → `#eef1f8`)
plus the 1px `#e5e7eb` border. The `#0a0a23` deep navy hero band
provides chromatic depth rather than physical elevation. Shadows are
essentially absent — DeepSeek's depth language is flat-on-flat with a
single hairline.

## Shapes

Radii ladder is 4/6/8/12/16/20. Buttons sit at 8px (the standard
enterprise-SaaS control radius), cards at 16px, hero shells at 20px.
Pill shapes appear on tags and the announcement banner. The overall
shape vocabulary is rectangular and confident — no playful
super-ellipses, no fully-rounded CTAs.

## Components

The defining components are the **`#4d6bfe` solid CTA** (8px radius,
white text, 600 weight Inter), the **soft-blue announcement strip**
that runs across the top of every page advertising the current model,
and the **whale/grid hero illustration** that pairs with the Inter
headline. Cards are `#f5f7fb` panels with hairline borders.

## Do's and Don'ts

- **Do** keep the action palette to a single blue `#4d6bfe`; secondary actions use the outlined pattern, never a different hue.
- **Do** use the 1.6 body line-height even on Latin-only pages — it''s the brand''s typographic fingerprint and supports the bilingual mission.
- **Do** lean on the deep `#0a0a23` navy for hero bands when announcing a major model release; it adds weight without warming the palette.
- **Don''t** introduce a secondary accent (purple, teal, orange). DeepSeek''s strategic message is "one lab, one colour, one mission".
- **Don''t** drop the CJK font fallback — even on EN-only surfaces, the stack should chain to PingFang SC for visiting Chinese readers.
- **Don''t** apply shadows to cards; the depth language is flat tone-and-border, not elevation.
