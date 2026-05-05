---
name: Character.AI
tagline: Cool zinc canvas, custom atHauss sans, and dark pill CTAs — a roleplay social product dressed in TikTok-grade neutrality.
author: webdesignhot
source_url: https://character.ai
spec: design.md/v1
quality: curated
featured: false
categories: [ai, social]
tags: [light, sans, soft, structured, cool]
preview_swatch: ['#f4f4f5', '#202024', '#1313161']
related: [discord, notion, replicate]
description: 'Character.AI''s public-facing site uses a cool zinc-grey `#f4f4f5` canvas, a custom **atHauss** sans (a tight humanist face that resembles GT Walsheim with sharper terminals), and a near-black `#202024` pill CTA at 30px radius for the primary "Sign Up to Chat" call-to-action. Where roleplay/companion competitors lean into either glow-purple cyber aesthetics or kawaii pastel, Character.AI runs the *opposite* play — a TikTok/Discord-grade neutral with zinc surfaces, dark `#131316` social-login rectangles at 12px radius, and zero ornamentation. The result reads as platform infrastructure, not fandom, which is exactly the legitimacy posture a 10M-character marketplace needs.'

colors:
  bg: '#f4f4f5'                # cool zinc-grey body bg observed
  bg-soft: '#fafafa'           # softer surface
  surface: '#ffffff'           # cards lift to white
  text: '#26272b'              # observed body text rgb(38,39,43)
  text-muted: '#6b6c70'        # secondary text in zinc-mid
  brand: '#202024'             # primary CTA near-black with mild blue undertone
  brand-strong: '#0f0f12'
  social-bg: '#131316'         # Google / Apple social-login button bg
  social-text: '#fafafa'
  on-brand: '#fafafa'
  accent: '#9b6cff'            # Character.AI lavender used inside the product UI
  border: 'rgba(38, 39, 43, 0.12)'
  border-soft: 'rgba(38, 39, 43, 0.08)'

typography:
  display:
    family: 'atHauss, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 600]
  body:
    family: 'atHauss, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500]
  mono:
    family: 'ui-monospace, "SF Mono", Menlo, Consolas, monospace'
    weights: [400]
  scale:
    h1:    { size: 36, weight: 600, lineHeight: 1.15, tracking: '-0.72px' }   # observed
    h2:    { size: 24, weight: 600, lineHeight: 1.25 }
    h3:    { size: 16, weight: 500, lineHeight: 1.4 }
    body:  { size: 16, lineHeight: 1.5 }
    label: { size: 12, weight: 500 }

radius:
  sm: 8
  md: 12
  lg: 16
  card: 16
  button: 30                   # observed primary pill radius
  social: 12                   # observed social-login rectangle
  pill: 9999

layout:
  page-width: 1200

components:
  button-primary:
    backgroundColor: '#202024'
    textColor: '#fafafa'
    rounded: 30
    padding: '0 16px'
    font: 'atHauss 500'
    use: 'Sign Up to Chat — the headline pill carrying every primary entry into the product.'
  button-social:
    backgroundColor: '#131316'
    textColor: '#fafafa'
    rounded: 12
    padding: '0 16px'
    use: 'Continue with Google / Continue with Apple — slightly darker, slightly squarer to read as platform-standard.'
  card:
    backgroundColor: '#ffffff'
    border: '1px solid rgba(38, 39, 43, 0.12)'
    rounded: 16
    use: 'Character cards in the discovery rail — large radius, image-led, name + tagline below.'

lineage:
  summary: |
    Character.AI runs counter-positioning against its category. Where
    Replika, Janitor, and similar roleplay/companion products lean
    into purple-glow cyber or kawaii-pastel aesthetics that signal
    "fandom platform," Character.AI dresses itself in **zinc-grey
    neutrality**: a `#f4f4f5` canvas borrowed from Tailwind's zinc
    scale, a custom **atHauss** sans (humanist with sharp terminals,
    closer to GT Walsheim), and a near-black `#202024` primary pill
    at 30px radius. The social-login rectangles drop to a darker
    `#131316` at 12px radius — TikTok and Discord run almost
    identical login surfaces, and Character.AI is signalling
    membership in *that* register, not in the fandom one. The
    lavender `#9b6cff` brand mark surfaces only inside the product
    UI; the marketing site stays defiantly neutral. The play is
    legitimacy: a 10M-character marketplace presented as
    infrastructure, with the implicit promise that the imagination
    happens *inside the app*, not on the marketing page.
  influences:
    - name: Discord
      role: Dark social-login rectangles + neutral marketing surface as a model for "platform, not fandom."
      url: https://discord.com
    - name: TikTok
      role: Zinc-neutral marketing pages and dark pill CTAs in a consumer-social register.
      url: https://www.tiktok.com
    - name: Notion
      role: Cousin in the off-white + custom-sans editorial register, though Character.AI runs cool-zinc rather than warm-cream.
      url: https://www.notion.com
---

## Overview

Character.AI's homepage opens onto a cool zinc-grey `#f4f4f5` canvas
— the Tailwind zinc-100 hue — with a 36px headline ("Get access to
10M+ Characters") set in custom **atHauss** at 600 weight and
`-0.72px` tracking. The primary CTA is a near-black `#202024` pill
at 30px radius; the social-login twins (Continue with Google,
Continue with Apple) sit just below as slightly darker `#131316`
rectangles at 12px radius.

The chromatic and shape choices are deliberately understated for a
roleplay product. The lavender brand accent that animates the
in-product UI (`#9b6cff`) is barely visible on the marketing
surface; instead the page reads as platform infrastructure — closer
in posture to Discord or TikTok's developer pages than to a
companion-AI competitor.

## Colors

- **bg** `#f4f4f5` — cool zinc-100, the defining canvas
- **surface** `#ffffff` — cards and modal layers
- **text** `#26272b` — zinc-900 body text
- **text-muted** `#6b6c70` — secondary copy
- **brand / cta-bg** `#202024` — primary CTA near-black with mild blue undertone
- **social-bg** `#131316` — Google/Apple social-login background, slightly darker
- **accent** `#9b6cff` — Character lavender, in-product only
- **border** `rgba(38,39,43,0.12)` — zinc-tinted hairline

## Typography

**atHauss** is a custom humanist sans deployed at 400-600 weights.
Headlines run 24-36px at 600 with mild negative tracking
(`-0.72px` at 36px); body and nav use 14-16px at 400-500. The
font-stack falls back to ui-sans-serif and system-ui — atHauss is
the only branded face on the page. There is no display serif, no
mono, no editorial counter-voice; the type system is single-family,
single-axis.

## Layout

Container width is moderate (~1200px) with comfortable gutters. The
homepage is essentially a sign-up gate plus a marketing strip
underneath; logged-in surfaces (which the marketing page mirrors
visually) use a 4-up character-card grid where each card is a 16px
radius white panel with a square avatar, character name, and
tagline. Footer nav is a flat list set in atHauss 400 at 16px.

## Elevation & Depth

Almost none. Cards lift off the zinc backdrop using value contrast
(white on zinc-100); the only shadow on the marketing page is a
soft drop on the modal sign-up sheet. Hover states are 4-8% darker
washes. The product UI introduces more elevation, but the brand
surface holds flat.

## Shapes

The defining radii are **30px for pill CTAs** and **12px for
social-login rectangles** — an unusual pairing that signals two
different interaction modes. Cards round at 16px. The 30px primary
pill is what most users register; the 12px social rectangles read
as platform-standard (matching Apple's SIWA guidance and Google's
button conventions).

## Components

The defining components are the **near-black pill CTA** (`#202024`,
30px radius, atHauss 500), the **darker social-login rectangle**
(`#131316`, 12px radius), and the **white character card** (16px
radius, image-led, name + tagline). The combination — pill primary
+ rectangle social + image card — is the entire interactive
vocabulary on the marketing surface.

## Do's and Don'ts

- **Do** keep the canvas cool zinc (`#f4f4f5`) — warm cream collapses Character.AI into the Anthropic/Notion register and weakens the platform posture.
- **Do** pair the 30px primary pill with 12px social-login rectangles; the dual-shape ladder is part of the brand recognition.
- **Do** use atHauss at 600 for headlines; the negative tracking gives the marketing the slight authority it needs.
- **Don't** introduce purple-glow or cyber aesthetics on the marketing page — that register belongs to in-product UI and the roleplay competitor set.
- **Don't** drop shadows on cards; depth here is value contrast on zinc.
- **Don't** soften the dark CTAs to dark-grey or navy — `#202024` near-black with a faint blue undertone is the signature.
