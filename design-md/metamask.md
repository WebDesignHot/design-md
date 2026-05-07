---
name: MetaMask
tagline: Foxy Orange on white — Ethereum wallet design with custom MM Sans, 8-bit fox mascot, friendly-utility voice.
updated_at: 2026-05-08T00:00:00.000Z
published_at: 2026-05-07T20:02:42.541Z
author: webdesignhot
source_url: https://metamask.io
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [fintech]
tags: [light, structured, sans, warm]
preview_swatch: ['#ffffff', '#f6851b', '#1a1a1a']
related: [phantom-app, uniswap, arbitrum]
description: 'MetaMask''s site is the Ethereum-side counterpart to Phantom''s Solana editorial-restraint. The canvas is white, headings sit in MM Sans (a custom geometric sans, Inter-adjacent) at 48–72px, and the brand color is "Foxy Orange" `#f6851b` — a warm orange picked from the iconic 8-bit fox mascot Cipher. Where Phantom went dark editorial, MetaMask went light-friendly with the fox as the brand''s identity. Cards have 8-12px radius. Voice is friendly-utility: "Your gateway to Ethereum and the decentralized web". The 8-bit pixelated fox appears more frequently than Phantom''s ghost — wave-animated on hero, idle-bobbing on dashboard, present in 70% of marketing images. The whole brand reads as crypto-onboarding-friendly: making Ethereum approachable without dumbing it down.'

colors:
  bg: '#ffffff'
  bg-soft: '#f5f5f5'
  bg-warm: '#fdf6ed'
  surface: '#ffffff'
  surface-soft: '#fafafa'
  surface-strong: '#f0f0f0'
  brand: '#f6851b'
  brand-hover: '#e3760e'
  brand-pressed: '#cc6800'
  brand-deep: '#a85400'
  brand-tint: '#fde5cc'
  brand-soft: '#fbcc99'
  on-brand: '#ffffff'
  fox-blue: '#037dd6'
  fox-blue-deep: '#0260a4'
  fox-red: '#d73a49'
  text: '#1a1a1a'
  text-strong: '#000000'
  text-muted: '#535a61'
  text-soft: '#8e8e8e'
  text-faint: '#bcbcbc'
  text-on-brand: '#ffffff'
  link: '#037dd6'
  link-hover: '#0260a4'
  selected-bg: '#fde5cc'
  border: '#d6d9dc'
  border-strong: '#bbbfc4'
  border-soft: '#eaecef'
  border-brand: '#f6851b'
  network-eth: '#627eea'
  network-polygon: '#8247e5'
  network-arbitrum: '#28a0f0'
  network-optimism: '#ff0420'
  success: '#1a8757'
  warning: '#cc8800'
  danger: '#d73a49'
  info: '#037dd6'

typography:
  display:
    family: '"MM Sans", "Inter", "Söhne", -apple-system, BlinkMacSystemFont, sans-serif'
    weights: [500, 700, 800]
  body:
    family: '"MM Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: '"JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 72, weight: 800, lineHeight: 1.05, tracking: '-0.02em',  family: display }
    display-xl:      { size: 56, weight: 800, lineHeight: 1.1,  tracking: '-0.018em', family: display }
    display-lg:      { size: 48, weight: 700, lineHeight: 1.15, tracking: '-0.012em', family: display }
    h1:              { size: 36, weight: 700, lineHeight: 1.2,  tracking: '-0.008em', family: display }
    h2:              { size: 28, weight: 700, lineHeight: 1.25, tracking: '-0.005em', family: display }
    h3:              { size: 22, weight: 700, lineHeight: 1.3,  tracking: '0',        family: display }
    h4:              { size: 18, weight: 600, lineHeight: 1.35, tracking: '0',        family: display }
    eyebrow:         { size: 12, weight: 700, lineHeight: 1.2,  tracking: '0.10em',   family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    label:           { size: 13, weight: 700, lineHeight: 1.3,  tracking: '0.04em',   family: body }
    button:          { size: 15, weight: 700, lineHeight: 1.0,  tracking: '0.02em',   family: body }
    address:         { size: 13, weight: 400, lineHeight: 1.5,  tracking: '0',        family: mono }

radius:
  micro: 4
  sm: 8
  md: 12
  lg: 16
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 56, 80, 96, 120]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 72

motion:
  ease-standard: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
  ease-emphasized: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 400
  reduced-motion: 'respects prefers-reduced-motion: reduce — disables fox-mascot animations'

breakpoints:
  mobile: 480
  tablet: 768
  desktop: 1280
  wide: 1440

shadows:
  card: '0 2px 8px rgba(246, 133, 27, 0.08)'
  card-hover: '0 6px 20px rgba(246, 133, 27, 0.14)'
  modal: '0 20px 60px rgba(0, 0, 0, 0.20)'

accessibility:
  contrast-text-on-bg: 16.1
  contrast-text-on-brand: 4.6
  focus-ring: '3px solid #037dd6'
  reduced-motion-honored: true

components:
  button-primary: { bg: brand, text: on-brand, padding: '14px 28px', radius: pill, font: button }
  button-secondary: { bg: bg, text: brand-pressed, padding: '12px 26px', radius: pill, border: '2px solid border-brand' }
  button-ghost: { bg: transparent, text: brand-pressed, padding: '10px 20px' }
  card: { bg: surface, radius: 12, padding: 24, border: '1px solid border-soft', shadow: 'card' }
  pill: { bg: brand-tint, text: brand-pressed, radius: pill, padding: '4px 12px', font: 'label' }
  network-pill: { bg: 'transparent', text: 'network-color', radius: pill, padding: '4px 12px', border: '1px solid network-color', font: 'label' }
  input: { bg: bg, border: '1px solid border-strong', text: text, radius: 8, padding: '12px 16px', focus-border: brand }

lineage:
  summary: 'MetaMask''s marketing system descends from the 2016 ConsenSys-era Ethereum-onboarding origin. Foxy Orange `#f6851b` was lifted directly from the iconic 8-bit fox mascot (named Cipher), drawn by Aaron Davis in 2018. MM Sans (custom geometric sans, Inter-adjacent) handles every heading. The fox mascot appears more frequently than Phantom''s ghost — wave-animated on hero, idle-bobbing on dashboard, present in 70% of marketing images. Network accent palette (Ethereum blue, Polygon purple, Arbitrum blue, Optimism red) chips chains across UI. Voice is friendly-utility: making Ethereum approachable without dumbing it down. The whole brand reads as crypto-onboarding-friendly — for the user who heard about NFTs from a friend, not the user already running a node.'
  influences:
    - { name: 'ConsenSys (2016 origin)', role: 'Ethereum-foundation incubator shaping crypto-onboarding instincts', url: 'https://consensys.io' }
    - { name: 'Cipher the 8-bit fox (Aaron Davis, 2018)', role: 'pixel-art mascot anchoring brand identity', url: 'https://metamask.io' }
    - { name: 'Pantone 144 / web-orange palette', role: 'warm orange lineage', url: 'https://www.pantone.com' }
    - { name: 'Phantom + Coinbase + Trust Wallet', role: 'crypto-wallet contemporaries', url: 'https://phantom.com' }
    - { name: '8-bit pixel art aesthetic (NES/SNES era)', role: 'mascot visual lineage — pixelated, friendly, retro', url: 'https://en.wikipedia.org/wiki/Pixel_art' }
---

## 1. Visual Theme & Atmosphere

MetaMask's site is the Ethereum-side counterpart to Phantom's Solana editorial-restraint. The canvas is white `#ffffff`, headings sit in MM Sans (custom geometric sans) at 48–72px, and the brand color is **Foxy Orange** `#f6851b` — a warm orange lifted from the iconic 8-bit fox mascot Cipher. Where Phantom went dark editorial, MetaMask went light-friendly with the fox as the brand's defining visual identity.

The 8-bit pixelated fox appears more frequently than Phantom's ghost — wave-animated on hero, idle-bobbing on dashboard, present in 70% of marketing images. Network accent palette (Ethereum blue `#627eea`, Polygon purple `#8247e5`, Arbitrum blue `#28a0f0`, Optimism red `#ff0420`) chips chains across UI. Voice is friendly-utility: "Your gateway to Ethereum and the decentralized web" — making the chain approachable without dumbing it down.

CTAs are pill-radius (9999px), with bg Foxy Orange and white text. Cards have 12px radius and soft orange-tinted shadows. Body uses 16px line-height 1.55. The whole brand reads as **crypto-onboarding-friendly**: for the user who heard about NFTs from a friend, not the user already running a node.

**Key Characteristics:**
- White canvas + Foxy Orange `#f6851b`
- 8-bit fox mascot Cipher — present in 70% of marketing
- MM Sans (custom geometric, Inter-adjacent)
- Pill-radius CTAs, 12px card radius
- Network-color chips (ETH/Polygon/Arbitrum/Optimism)
- Soft orange-tinted shadows
- Mono for addresses
- Light-only canvas
- Friendly-utility voice
- Pixel-art animation on fox

## 2. Color Palette & Roles

### Primary
- **Background** (`#ffffff`): white.
- **Bg Warm** (`#fdf6ed`): peach wash for hero.
- **Text** (`#1a1a1a`): body.

### Brand — Foxy Orange
- **Brand** (`#f6851b`): primary CTA, fox-mascot color.
- **Brand Hover** (`#e3760e`), **Pressed** (`#cc6800`), **Deep** (`#a85400`).
- **Brand Tint** (`#fde5cc`): selection wash.

### Fox Palette (mascot)
- **Fox Blue** (`#037dd6`): mascot accents, links.
- **Fox Red** (`#d73a49`): danger.

### Network Accents (chips only)
- **ETH Blue** (`#627eea`), **Polygon Purple** (`#8247e5`), **Arbitrum Blue** (`#28a0f0`), **Optimism Red** (`#ff0420`)

### Surface
- **Surface** (`#ffffff`), **Surface Soft** (`#fafafa`), **Surface Strong** (`#f0f0f0`).

### Borders
- **Border** (`#d6d9dc`), **Border Strong** (`#bbbfc4`), **Border Soft** (`#eaecef`).

### Semantic
- success `#1a8757`, warning `#cc8800`, danger `#d73a49`, info fox-blue.

## 3. Typography Rules

### Font Family
- **Display + Body**: MM Sans (custom geometric). Falls back to Inter → Söhne.
- **Mono**: JetBrains Mono / IBM Plex Mono for blockchain addresses.

### Hierarchy

| Role | Font | Size | Weight | LH | Tracking |
|------|------|------|--------|-----|----------|
| display-hero | MM Sans | 72 | 800 | 1.05 | -0.02em |
| display-lg | MM Sans | 48 | 700 | 1.15 | -0.012em |
| h1 | MM Sans | 36 | 700 | 1.2 | -0.008em |
| h2 | MM Sans | 28 | 700 | 1.25 | -0.005em |
| h3 | MM Sans | 22 | 700 | 1.3 | 0 |
| eyebrow | MM Sans | 12 | 700 | 1.2 | 0.10em UPPER |
| body | MM Sans | 16 | 400 | 1.55 | 0 |
| label | MM Sans | 13 | 700 | 1.3 | 0.04em |
| button | MM Sans | 15 | 700 | 1.0 | 0.02em |
| address | JetBrains Mono | 13 | 400 | 1.5 | 0 |

### Principles
- **MM Sans for everything**, mono for addresses.
- **Bold weights on display** (700-800).
- **Mixed case display, UPPER eyebrows.**

## 4. Component Stylings

### Buttons (3 variants — pill-radius)

**Primary** — Foxy Orange:
- bg `#f6851b`, text white, 15px MM Sans 700 0.02em
- Padding 14×28, radius 9999 (pill)
- Hover: bg `#e3760e`, scale 1.02

**Secondary** — bordered:
- bg white, text brand-pressed, 2px brand border, pill radius

**Ghost**: bg transparent, text brand-pressed, padding 10×20.

### Cards
- bg white, **12px radius**, padding 24
- 1px soft border + soft orange-tinted shadow `0 2px 8px rgba(246,133,27,0.08)`

### Pills
- Default: `brand-tint` bg, `brand-pressed` text, pill radius
- Network pills: outlined in network color, transparent bg, network-color text

### Inputs
- bg white, 1px gray border, 8px radius, padding 12×16
- Focus: border Foxy Orange

### Navigation
- 72px sticky header, white bg
- MetaMask wordmark left (with fox-mascot icon), top-level nav center, "Download" pill CTA right

## 5. Layout Principles

- Base 4px, 96-120px between sections
- Page max width 1280px
- Hero: fox-mascot animation right + headline left
- Network chain grid: 4-up at desktop, 2-up at tablet

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 4 | tags |
| Standard | 8 | inputs, dropdowns |
| Comfortable | 12 | **cards** |
| Relaxed | 16 | featured cards |
| Pill | 9999 | **buttons + pills** |

## 7. Depth & Elevation

| Level | Treatment |
|-------|-----------|
| 1 | `0 2px 8px rgba(246,133,27,0.08)` resting |
| 2 | `0 6px 20px rgba(246,133,27,0.14)` hover |
| 3 | `0 12px 32px rgba(246,133,27,0.18)` featured |
| 4 | `0 20px 60px rgba(0,0,0,0.20)` modal |

## 8. Interaction & Motion

- Standard ease, emphasized for fox-mascot bounces
- 150ms hover, 240ms standard, 400ms slow
- Fox waves on hero load (300ms), idle-bobs ±2px on dashboard
- Card hover: shadow lift + 1.01 scale

## 9. Accessibility & A11y

- text on bg = **16.1:1** AAA
- on-brand on brand: white on Foxy Orange = **4.6:1** AA
- 3px fox-blue focus ring (distinct from brand)

Fox-mascot is `aria-hidden="true"` — decorative. Network chips have `aria-label="Connected to Ethereum mainnet"`.

## 10. Responsive Behavior

mobile <479: hero 72→44; nav hamburger; 1-up. tablet: 2-up. desktop+: 3-4-up.

## 11. Content & Voice

### Tone
**Friendly-utility.** Approachable for newcomers, capable for power users.

### Microcopy patterns
- Primary CTA: **"Download MetaMask"** / **"Connect wallet"**
- Sign-up: implicit
- Errors: **"Couldn't connect. Try refreshing."**
- Loading: **"Pending transaction…"**
- Empty: **"No tokens yet. Buy ETH to get started."**

### CTA verb conventions
- **Download / Connect / Send / Swap / Buy**
- Avoid: NFT-bro ("Ape in"), corporate ("Onboard")

## 12. Dark Mode & Theming

**Light + Dark.** MetaMask Extension UI has both modes. Marketing site is light-only.

Dark variant: bg `#1c1c1c`, text white, Foxy Orange unchanged.

## 13. Lineage & Influences

MetaMask descends from 2016 ConsenSys-era Ethereum-onboarding origins. Foxy Orange `#f6851b` was lifted from Aaron Davis's 2018 8-bit fox mascot Cipher. MM Sans (custom geometric) anchors typography. The fox appears in 70% of marketing — more frequently than Phantom's ghost — making MetaMask brand-warmer.

**Named influences:**
- **ConsenSys (2016 origin)** — Ethereum incubator
- **Cipher the 8-bit fox (Aaron Davis, 2018)** — pixel mascot
- **Pantone 144** — warm orange
- **Phantom + Coinbase + Trust Wallet** — wallet contemporaries
- **8-bit pixel art (NES/SNES era)** — mascot visual lineage

## 14. Do's and Don'ts

### Do
- **Foxy Orange `#f6851b` for primary CTA + brand only.**
- **MM Sans (or Inter fallback).**
- **Pill-radius CTAs, 12px cards.**
- **8-bit fox mascot on hero / 404 / empty states.**
- **Network-color chips for chain selection.**
- **Mono for addresses.**
- **Soft orange-tinted shadows.**
- **Friendly-utility voice.**

### Don't
- **Don't substitute Foxy Orange.**
- **Don't smooth-illustrate the fox.** Pixel-art is the brand.
- **Don't use network colors as primary CTA.**
- **Don't all-caps headlines.**
- **Don't add gradients on CTA.**
- **Don't add NFT-bro microcopy.**

## 15. Agent Prompt Guide

### Quick Color Reference
- bg: `#ffffff`
- text: `#1a1a1a`
- brand (Foxy Orange): `#f6851b` / hover `#e3760e`
- fox-blue: `#037dd6`
- network: ETH `#627eea`, Polygon `#8247e5`, Arbitrum `#28a0f0`, Optimism `#ff0420`

### Example Component Prompts

> Build a MetaMask-style hero: white canvas, 8-bit fox mascot (Cipher) animated wave right 50%, 72px MM Sans 800 heading "A wallet for the decentralized web" left. Pill-radius Foxy Orange `#f6851b` "Download MetaMask" CTA, white 15px MM Sans 700.

> Design a network selector: list of pills, each with network color outline + label "ETHEREUM" / "POLYGON" / "ARBITRUM" / "OPTIMISM". Active pill has filled bg in network color.

> Render an address display: JetBrains Mono 13px gray on white, "0xABCD...1234" truncated, copy-icon button in fox-blue.

> Build a "Connect Wallet" CTA: pill radius, Foxy Orange bg, white 15px MM Sans 700 0.02em "Connect Wallet", padding 14×28.

> Design a token card: white surface, 12px radius, 24px pad, soft orange-tinted shadow. Token icon left, token name 16px Bold, balance right-aligned in 24px Bold black. Network chip below.

### Iteration Guide

1. **White + Foxy Orange + MM Sans + Pixel Fox.**
2. **Pill-radius CTAs, 12px cards.**
3. **Network colors for chain chips, never primary CTA.**
4. **Mono for addresses.**
5. **8-bit pixel-art aesthetic preserved on fox.**
6. **Friendly-utility voice.**
7. **Reject smooth fox illustrations, NFT-bro language, gradient CTAs.**
