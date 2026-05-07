---
name: Phantom
tagline: Phantom Purple on near-black — crypto wallet design that respects the user's intelligence with editorial restraint.
updated_at: 2026-05-08T00:00:00.000Z
published_at: 2026-05-07T20:02:40.130Z
author: webdesignhot
source_url: https://phantom.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [fintech]
tags: [dark, structured, sans, cool, playful]
preview_swatch: ['#0c0c0e', '#ab9ff2', '#ffffff']
related: [metamask, solana-com, arbitrum]
description: 'Phantom''s site is the rare crypto wallet that has decided not to look like a crypto wallet. The canvas is near-black `#0c0c0e`, headings sit in Tobias Frere-Jones''s Söhne-adjacent custom Phantom Sans at 56–88px, and the brand color is "Phantom Purple" `#ab9ff2` (light periwinkle, with a deeper variant `#534bb1`). Where MetaMask leaned foxy-friendly and Coinbase leaned blue-corporate, Phantom picked editorial restraint — a single pastel purple on dark, magazine typography, illustrative spectral mascot used sparingly. Cards have 12-16px radius and soft purple-tinted shadows. Voice is sophisticated-friendly: "Your wallet for everything Solana" — confident enough to skip explainers, friendly enough not to feel cliquey.'

colors:
  bg: '#0c0c0e'
  bg-deep: '#06060a'
  bg-section: '#15151a'
  bg-elev: '#1f1f25'
  surface: '#15151a'
  surface-strong: '#22222a'
  surface-translucent: 'rgba(12, 12, 14, 0.85)'
  brand: '#ab9ff2'
  brand-hover: '#bdb3f6'
  brand-pressed: '#9b8ee8'
  brand-deep: '#534bb1'
  brand-deeper: '#3d3686'
  brand-tint: 'rgba(171, 159, 242, 0.15)'
  on-brand: '#0c0c0e'
  text: '#ffffff'
  text-strong: '#ffffff'
  text-muted: '#a8a8b8'
  text-soft: '#7a7a8c'
  text-faint: '#5a5a6c'
  text-on-brand: '#0c0c0e'
  link: '#ab9ff2'
  link-hover: '#ffffff'
  selected-bg: 'rgba(171, 159, 242, 0.15)'
  border: 'rgba(255, 255, 255, 0.08)'
  border-strong: 'rgba(255, 255, 255, 0.16)'
  border-brand: '#ab9ff2'
  ghost-glow: '#ab9ff2'
  success: '#5dd4a8'
  warning: '#f5c842'
  danger: '#ff6b6b'
  info: '#ab9ff2'

typography:
  display:
    family: '"Phantom Sans", "Söhne", "Inter", -apple-system, BlinkMacSystemFont, sans-serif'
    weights: [500, 700]
  body:
    family: '"Phantom Sans", "Söhne", "Inter", -apple-system, sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: '"JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 88, weight: 700, lineHeight: 1.0,  tracking: '-0.025em', family: display }
    display-xl:      { size: 72, weight: 700, lineHeight: 1.05, tracking: '-0.02em',  family: display }
    display-lg:      { size: 56, weight: 700, lineHeight: 1.1,  tracking: '-0.015em', family: display }
    h1:              { size: 40, weight: 700, lineHeight: 1.15, tracking: '-0.012em', family: display }
    h2:              { size: 32, weight: 600, lineHeight: 1.2,  tracking: '-0.008em', family: display }
    h3:              { size: 24, weight: 600, lineHeight: 1.25, tracking: '-0.005em', family: display }
    h4:              { size: 18, weight: 600, lineHeight: 1.3,  tracking: '0',        family: display }
    eyebrow:         { size: 12, weight: 600, lineHeight: 1.2,  tracking: '0.14em',   family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body:            { size: 15, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body }
    body-sm:         { size: 13, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    label:           { size: 12, weight: 600, lineHeight: 1.3,  tracking: '0.06em',   family: body }
    button:          { size: 14, weight: 600, lineHeight: 1.0,  tracking: '0.02em',   family: body }
    address:         { size: 13, weight: 400, lineHeight: 1.5,  tracking: '0',        family: mono }

radius:
  micro: 2
  sm: 4
  md: 8
  lg: 12
  xl: 16
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 56, 80, 96, 120]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 72

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.34, 0.07, 0.34, 1)'
  duration-fast: 120
  duration-standard: 200
  duration-slow: 320
  duration-cinematic: 480
  reduced-motion: 'respects prefers-reduced-motion: reduce — disables ghost-mascot float'

breakpoints:
  mobile: 480
  tablet: 768
  desktop: 1280
  wide: 1440

shadows:
  card: '0 2px 8px rgba(171, 159, 242, 0.08)'
  card-hover: '0 8px 24px rgba(171, 159, 242, 0.16)'
  glow: '0 0 32px rgba(171, 159, 242, 0.40)'
  modal: '0 24px 64px rgba(0, 0, 0, 0.80)'

accessibility:
  contrast-text-on-bg: 17.6
  contrast-text-on-brand: 9.4
  focus-ring: '2px solid #ab9ff2'
  reduced-motion-honored: true

components:
  button-primary: { bg: brand, text: on-brand, padding: '14px 28px', radius: pill, font: button }
  button-secondary: { bg: transparent, text: text, padding: '12px 26px', radius: pill, border: '1px solid border-strong' }
  button-ghost: { bg: transparent, text: brand, padding: '10px 20px' }
  card: { bg: surface, radius: 16, padding: 24, border: '1px solid border' }
  pill: { bg: surface-strong, text: text, radius: pill, padding: '4px 12px', font: 'label' }
  input: { bg: bg-elev, border: '1px solid border-strong', text: text, radius: 12, padding: '12px 16px', focus-border: brand }

lineage:
  summary: 'Phantom''s marketing system is the rare crypto wallet that has decided not to look like a crypto wallet. The brand emerged in 2021 with the Solana ecosystem and almost immediately differentiated through editorial restraint — single pastel purple on near-black, magazine typography, spectral ghost mascot used sparingly. Phantom Purple `#ab9ff2` (light periwinkle, with deeper variant `#534bb1`) was picked specifically not to overlap MetaMask''s foxy-orange or Coinbase''s blue. Phantom Sans (custom, Söhne-adjacent grotesque sans) handles every heading. The ghost-mascot animation appears only on hero and 404; never on dashboards, never animated in marketing photos. Voice is sophisticated-friendly: confident enough to skip explainers, friendly enough not to feel cliquey.'
  influences:
    - { name: 'Solana ecosystem (2020-)', role: 'Layer 1 chain that Phantom was purpose-built for', url: 'https://solana.com' }
    - { name: 'Söhne by Klim Type Foundry', role: 'closest commercial relative to Phantom Sans', url: 'https://klim.co.nz/retail-fonts/sohne/' }
    - { name: 'MetaMask foxy + Coinbase blue', role: 'crypto-wallet contemporaries Phantom differentiated against', url: 'https://metamask.io' }
    - { name: 'Editorial design (Apartamento, The Gentlewoman)', role: 'magazine typography references in dark crypto context', url: 'https://www.apartamentomagazine.com' }
    - { name: 'Vercel + Linear brand languages', role: 'tech-editorial dark-canvas contemporaries', url: 'https://vercel.com' }
---

## 1. Visual Theme & Atmosphere

Phantom's site is the rare crypto wallet that has decided not to look like a crypto wallet. The canvas is near-black `#0c0c0e` (very slight cool tilt, never pure black), headings sit in Phantom Sans at 56–88px, and the brand color is **Phantom Purple** `#ab9ff2` — a light periwinkle that's almost a pastel, with a deeper variant `#534bb1` for emphasis. Where MetaMask leaned foxy-friendly and Coinbase leaned corporate-blue, Phantom picked editorial restraint.

The spectral ghost mascot — a soft purple wisp — appears on hero and 404 pages only. It's animated to slowly float ±4px on idle, glowing subtly. Marketing photos never feature anthropomorphized ghosts, never NFT-bro language, never "to the moon" energy. The brand commits to "we're a wallet that respects you" — magazine typography, dark canvas, single pastel accent, occasional ghost.

CTAs are pill-radius (9999px), with bg `#ab9ff2` and **dark text** `#0c0c0e` for accessibility (the light purple is too pastel for white text body sizes — 9.4:1 contrast with dark text vs ~3:1 with white). Cards have 16px radius and soft purple-tinted shadows. Body uses 15px line-height 1.6 in monochrome; Solana addresses use mono.

**Key Characteristics:**
- Near-black canvas `#0c0c0e`
- Phantom Purple `#ab9ff2` light periwinkle CTA + brand
- Phantom Sans (Söhne-adjacent custom)
- **Dark text on purple bg** (accessibility — purple too light for white body)
- Pill-radius CTAs
- 16px card radius
- Spectral ghost mascot — hero/404 only
- Soft purple-tinted shadows + occasional glow
- Mono for blockchain addresses
- Dark-only canvas

## 2. Color Palette & Roles

### Primary
- **Background** (`#0c0c0e`): near-black with cool tilt.
- **Text** (`#ffffff`): pure white.

### Brand — Phantom Purple
- **Brand** (`#ab9ff2`): light periwinkle, primary CTA + brand mark.
- **Brand Hover** (`#bdb3f6`), **Pressed** (`#9b8ee8`).
- **Brand Deep** (`#534bb1`): emphasis purple for headlines, accent strokes.
- **Brand Deeper** (`#3d3686`): pressed deep.
- **Brand Tint** (15% purple): selection wash.

### Surface
- **Surface** (`#15151a`), **Surface Strong** (`#22222a`), **Bg Elev** (`#1f1f25`).

### Borders
- **Border** (8% white), **Border Strong** (16% white), **Border Brand** = purple.

### Semantic
- success `#5dd4a8`, warning `#f5c842`, danger `#ff6b6b`, info = brand.

## 3. Typography Rules

### Font Family
- **Display + Body**: Phantom Sans (custom, Söhne-adjacent). Falls back to Söhne → Inter.
- **Mono**: JetBrains Mono / IBM Plex Mono for Solana addresses + transaction signatures.

### Hierarchy

| Role | Font | Size | Weight | LH | Tracking |
|------|------|------|--------|-----|----------|
| display-hero | Phantom Sans | 88 | 700 | 1.0 | -0.025em |
| display-lg | Phantom Sans | 56 | 700 | 1.1 | -0.015em |
| h1 | Phantom Sans | 40 | 700 | 1.15 | -0.012em |
| h2 | Phantom Sans | 32 | 600 | 1.2 | -0.008em |
| h3 | Phantom Sans | 24 | 600 | 1.25 | -0.005em |
| eyebrow | Phantom Sans | 12 | 600 | 1.2 | 0.14em UPPER |
| body | Phantom Sans | 15 | 400 | 1.6 | 0 |
| label | Phantom Sans | 12 | 600 | 1.3 | 0.06em |
| button | Phantom Sans | 14 | 600 | 1.0 | 0.02em |
| address | JetBrains Mono | 13 | 400 | 1.5 | 0 |

### Principles
- **Phantom Sans for everything**, mono for addresses.
- **Tight tracking on display** (-0.025em hero).
- **Body 15px / 1.6** — editorial reading rhythm.
- **Mixed case display, UPPER eyebrows.**

## 4. Component Stylings

### Buttons (3 variants — pill-radius)

**Primary** — Phantom Purple:
- bg `#ab9ff2`, **text `#0c0c0e`** (dark on light purple — accessibility)
- 14px Phantom Sans 600 0.02em, padding 14×28, **radius 9999 (pill)**
- Hover: bg `#bdb3f6`, scale 1.02

**Secondary** — bordered:
- bg transparent, text white, 1px white-16% border, pill radius

**Ghost**: bg transparent, text purple, padding 10×20.

### Cards
- bg `#15151a`, **16px radius**, padding 24
- 1px white-8% border + soft purple-tinted shadow `0 2px 8px rgba(171,159,242,0.08)`
- Hover: shadow shifts to `0 8px 24px rgba(171,159,242,0.16)`
- Featured cards: glow shadow `0 0 32px rgba(171,159,242,0.40)`

### Pills (token tags, network labels)
- bg `surface-strong`, text white, pill radius
- Solana network pill: brand-tint bg, brand text

### Inputs
- bg bg-elev, 1px white-16% border, 12px radius
- Focus: border purple

### Navigation
- 72px sticky header, near-black bg
- Phantom wordmark left (white with purple ghost icon), top-level nav center, "Get Phantom" purple pill CTA right

## 5. Layout Principles

- Base 4px, 96-120px between sections
- Page max width 1280px
- Hero: spectral ghost mascot center with overlapping headline
- Feature grid: 3-up at desktop, 2-up at tablet, 1-up at mobile

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 2 | indicators |
| Standard | 4 | tooltips |
| Comfortable | 8 | tags, dropdowns |
| Relaxed | 12 | inputs |
| Featured | 16 | **cards** |
| Pill | 9999 | **buttons + tags** |

## 7. Depth & Elevation

| Level | Treatment |
|-------|-----------|
| 1 | `0 2px 8px rgba(171,159,242,0.08)` resting |
| 2 | `0 8px 24px rgba(171,159,242,0.16)` hover |
| 3 | `0 0 32px rgba(171,159,242,0.40)` featured glow |
| 4 | `0 24px 64px rgba(0,0,0,0.80)` modal |

## 8. Interaction & Motion

- Standard ease, emphasized for cinematic
- 120ms hover, 200ms standard, 480ms cinematic for ghost-mascot float
- Ghost-mascot floats ±4px on idle (8s loop)
- Card glow appears on featured items only

## 9. Accessibility & A11y

- text on bg = **17.6:1** AAA
- on-brand on brand: dark `#0c0c0e` on `#ab9ff2` = **9.4:1** AAA
- 2px purple focus ring

Solana addresses use `<code>` semantic markup for screen-reader discrimination from prose. Ghost mascot is `aria-hidden`. Network selectors have `aria-label`.

## 10. Responsive Behavior

mobile <479: hero 88→44; nav hamburger; 1-up. tablet: 2-up. desktop+: 3-up.

## 11. Content & Voice

### Tone
**Sophisticated-friendly.** Confident enough to skip "what is crypto" explainers, friendly enough not to feel cliquey.

### Microcopy patterns
- Primary CTA: **"Get Phantom"** / **"Connect wallet"** / **"Continue"**
- Sign-up: implicit — wallet is the auth
- Errors: **"Couldn't connect. Try again."**
- Loading: **"Confirming on Solana…"**
- Empty: **"No NFTs yet. Browse Magic Eden to start collecting."**

### CTA verb conventions
- **Get Phantom / Connect / Send / Swap / Stake**
- Avoid: NFT-bro ("Ape in", "WAGMI"), corporate ("Onboard", "Start your journey")

## 12. Dark Mode & Theming

**Dark-only.** The brand has no light mode. Spectral ghost on near-black IS the brand identity.

## 13. Lineage & Influences

Phantom's marketing system emerged in 2021 with the Solana ecosystem and differentiated through editorial restraint — single pastel purple on near-black, magazine typography, spectral ghost mascot used sparingly. Phantom Purple `#ab9ff2` was picked specifically not to overlap MetaMask's foxy-orange or Coinbase's blue.

**Named influences:**
- **Solana ecosystem (2020-)** — Layer 1 chain
- **Söhne by Klim Type Foundry** — Phantom Sans relative
- **MetaMask + Coinbase** — wallet contemporaries differentiated against
- **Editorial design (Apartamento, The Gentlewoman)** — magazine typography
- **Vercel + Linear brand languages** — tech-editorial dark-canvas contemporaries

## 14. Do's and Don'ts

### Do
- **Phantom Purple `#ab9ff2` for primary CTA + brand only.**
- **Dark text on purple bg** — accessibility-correct.
- **Phantom Sans (or Söhne fallback) for everything.**
- **Pill-radius CTAs, 16px cards.**
- **Spectral ghost on hero/404 only** — never on dashboard.
- **Mono for blockchain addresses + transactions.**
- **Near-black canvas, never pure black.**
- **Soft purple-tinted shadows.**

### Don't
- **Don't put white text on Phantom Purple bg** — 3:1 contrast fails AA.
- **Don't substitute purple.** `#ab9ff2` is the brand.
- **Don't anthropomorphize the ghost.** No personality moments, no waving.
- **Don't add NFT-bro microcopy.** "Ape in" / "WAGMI" off-brand.
- **Don't use gradients on CTA.**
- **Don't all-caps headlines.**
- **Don't add a light mode** without explicit Phantom approval.

## 15. Agent Prompt Guide

### Quick Color Reference
- bg: `#0c0c0e`
- text: `#ffffff`
- brand (Phantom Purple): `#ab9ff2` / hover `#bdb3f6`
- brand-deep: `#534bb1`
- border: 8% white / strong 16% white

### Example Component Prompts

> Build a Phantom-style hero: near-black canvas, soft spectral ghost mascot center floating ±4px (8s loop), 88px Phantom Sans 700 heading "Your wallet for everything Solana" mixed-case `-0.025em` in white. Pill-radius purple `#ab9ff2` "Get Phantom" CTA with **dark text** `#0c0c0e` 14px Phantom Sans 600 0.02em.

> Design a token card: surface `#15151a`, 16px radius, 24px pad, 1px white-8% border, soft purple-tinted shadow. 24px Phantom Sans h3 token name, address in mono 13px `#a8a8b8`. Token-network pill in purple.

> Render an address display: JetBrains Mono 13px `#a8a8b8` on near-black, "ABCD...1234" truncated, copy-icon button in purple ghost style.

> Build a "Connect Wallet" CTA: pill radius, Phantom Purple bg, **dark text** 14px Phantom Sans 600 0.02em, padding 14×28. Hover: bg `#bdb3f6`, scale 1.02.

> Design a featured swap card: surface, 16px radius, 24px pad, glow shadow `0 0 32px rgba(171,159,242,0.40)`, 32px Phantom Sans 600 token-pair "SOL → USDC".

### Iteration Guide

1. **Near-black + Phantom Purple + Phantom Sans (or Söhne).**
2. **Dark text on purple bg** — never white at body sizes.
3. **Pill-radius CTAs, 16px cards.**
4. **Mono for blockchain addresses.**
5. **Ghost mascot on hero/404 only.**
6. **Soft purple-tinted shadows + occasional glow.**
7. **Editorial restraint — no NFT-bro microcopy, no gradients.**
8. **Reject white-on-purple at body, anthropomorphized ghost, light mode.**
