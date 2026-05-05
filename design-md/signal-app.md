---
name: Signal
tagline: Privacy-first messaging in `#3a76f0` Signal blue with Inter sans — minimal, ad-free, end-to-end-encrypted by default.
author: webdesignhot
source_url: https://signal.org
spec: design.md/v1.5
quality: curated
featured: false
categories: [social]
tags: [light, dark, messaging, privacy, sans, minimal, nonprofit]
preview_swatch: ['#ffffff', '#3a76f0', '#1c1f23']
related: [telegram, threads-app, twitter-x]
description: 'Signal is the most restrained surface in modern messaging — a paper-white `#ffffff` canvas with a confident `#3a76f0` Signal blue used sparingly for the primary action, Inter pulling display through body in the canonical privacy-tooling register, and the absolute minimum visual chrome compatible with explaining end-to-end encrypted messaging to non-technical readers. The brand''s argument is "we are a nonprofit, we have no ads, your messages are encrypted by default, and you can read the protocol on GitHub." Where Telegram leans into colourful sticker culture and WhatsApp leans into bubbly chat-app warmth, Signal commits to **deliberate minimalism**: one CTA blue, one Donate-deeper-blue, no decorative illustration beyond the whisper-mark logo, no celebrity endorsements (Edward Snowden''s tweet is the closest the brand gets), and section spacing generous enough that every block of body type breathes. Body type sits at 16px / 400 / 1.6 line-height — book-readable density. The encryption claim is rendered as a Signal Foundation 501(c)(3) banner at the bottom: "Signal is funded entirely by grants and donations from people like you." This is a brand whose visual restraint is an extension of its political position — you cannot trust an ad-supported messaging app to keep your messages private, and the visual surface refuses to look like one.'

colors:
  bg: '#ffffff'                    # primary canvas
  bg-warm: '#f8f9fa'                # alt section band
  bg-muted: '#f1f3f5'               # subtle bg variation
  bg-deep: '#1c1f23'                # footer dark band
  bg-promo: '#e8efff'               # soft Signal-blue promo band
  bg-cream: '#fef9e9'                # warm cream — donate / nonprofit ask band
  surface: '#ffffff'                # default card
  surface-elevated: '#ffffff'        # modal floor (with shadow)
  surface-hover: '#f8f9fa'           # nav hover, list-row hover
  surface-soft: '#f4f7ff'            # secondary blue-tinted surface
  surface-strong: '#e8eaee'          # divider band
  surface-dark: '#2e3138'            # dark card on dark surfaces
  text: '#1c1f23'                    # primary body — warm near-black
  text-strong: '#0a0d11'             # display headlines
  text-muted: '#5b6068'              # secondary metadata
  text-soft: '#7a7f87'               # tertiary captions
  text-disabled: '#a8acb3'           # disabled state
  text-on-brand: '#ffffff'            # text on Signal blue
  text-on-dark: '#ffffff'             # text on bg-deep
  text-link: '#2e62d8'               # inline link deeper blue
  text-link-hover: '#1f4ab2'         # link pressed
  brand: '#3a76f0'                   # Signal Blue — primary CTA, brand surface
  brand-hover: '#2e62d8'             # primary button hover
  brand-active: '#234fb8'            # pressed
  brand-soft: '#e8efff'              # soft tint surface, badge bg
  brand-deep: '#234fb8'              # deeper blue for inline links + dark surfaces
  donate-blue: '#2c6bed'             # donate CTA (slight differentiation)
  accent-cyan: '#5fb3f9'             # subtle accent
  accent-yellow: '#f1c40f'           # not heavily used; awareness highlight
  accent-orange: '#e69138'           # warning
  accent-red: '#d04a3c'              # error / danger
  accent-green: '#3eaa6c'             # encryption-verified, success
  border: '#e0e3e8'                  # default hairline
  border-soft: '#eef0f2'             # subtle divider
  border-strong: '#bcc0c7'           # focused field outline
  border-focus: '#3a76f0'            # focus ring
  on-brand: '#ffffff'                # label on brand surface
  encryption-verified: '#3eaa6c'     # green lock — verified safety number
  encryption-unverified: '#7a7f87'   # grey lock — encrypted but unverified contact
  shadow-card: 'rgba(28,31,35,0.06)' # default card shadow
  shadow-modal: 'rgba(28,31,35,0.20)' # modal floor
  shadow-popover: 'rgba(28,31,35,0.12)' # popover/dropdown
  success: '#3eaa6c'                 # message delivered, verified
  success-soft: '#e0f3e7'            # success bg
  warning: '#e69138'                 # warning amber
  warning-soft: '#fdf3e8'            # warning bg
  danger: '#d04a3c'                  # error, security warning
  danger-soft: '#fbeae6'             # error bg
  info: '#3a76f0'                    # info blue
  info-soft: '#e8efff'               # info bg

typography:
  display:
    family: '"Inter", "Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: ['kern', 'liga']
  body:
    family: '"Inter", "Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"SF Mono", "Roboto Mono", "JetBrains Mono", Menlo, Consolas, monospace'
    weights: [400]
  scale:
    display-hero:    { size: 56, weight: 700, lineHeight: 1.1,  tracking: '-0.025em', family: display, notes: 'Marketing landing — "Speak Freely"' }
    display-xl:      { size: 44, weight: 700, lineHeight: 1.15, tracking: '-0.02em', family: display, notes: 'Section hero, donate page' }
    display-lg:      { size: 36, weight: 700, lineHeight: 1.2,  tracking: '-0.015em', family: display, notes: 'Feature section title' }
    display-md:      { size: 28, weight: 700, lineHeight: 1.25, tracking: '-0.01em', family: display, notes: 'Section heading' }
    display-sm:      { size: 22, weight: 600, lineHeight: 1.3,  tracking: '-0.005em', family: display, notes: 'Subsection heading' }
    title-lg:        { size: 18, weight: 600, lineHeight: 1.4,  tracking: '0',       family: display, notes: 'Card title' }
    title-md:        { size: 16, weight: 600, lineHeight: 1.4,  tracking: '0',       family: display, notes: 'List item title' }
    title-sm:        { size: 14, weight: 600, lineHeight: 1.4,  tracking: '0',       family: display, notes: 'Sidebar nav, dropdown header' }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.6,  tracking: '0',       family: body, notes: 'Lead paragraph, hero subtitle' }
    body-md:         { size: 16, weight: 400, lineHeight: 1.6,  tracking: '0',       family: body, notes: 'Default body, feature description' }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body, notes: 'Secondary metadata' }
    button-lg:       { size: 16, weight: 600, lineHeight: 1.0,  tracking: '0',       family: display, notes: '"Download Signal" primary CTA' }
    button-md:       { size: 14, weight: 600, lineHeight: 1.0,  tracking: '0',       family: body, notes: 'Default button label' }
    eyebrow:         { size: 13, weight: 600, lineHeight: 1.0,  tracking: '0.06em',  family: body, notes: 'Uppercase eyebrow "FREQUENTLY ASKED"' }
    caption:         { size: 13, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body, notes: 'Disclosures, fine print' }
    metadata:        { size: 13, weight: 400, lineHeight: 1.3,  tracking: '0',       family: body, opentype: ['tnum'], notes: 'Version, build numbers' }
    badge:           { size: 12, weight: 600, lineHeight: 1.0,  tracking: '0.04em',  family: body, notes: '"OPEN SOURCE", "AUDIT" tags' }
    quote:           { size: 22, weight: 400, lineHeight: 1.45, tracking: '-0.005em', family: display, notes: 'Pull-quote — Snowden / EFF endorsements' }

radius:
  micro: 2          # tiny indicator
  sm: 4             # input, badge
  md: 6             # tag chip
  lg: 8             # card, modal
  xl: 12            # large card, modal
  pill: 9999        # primary button cap, navigation pill

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160]

layout:
  page-width: 1280
  content-max: 1140
  prose-width: 680
  header-height: 64
  card-min: 280
  card-max: 360
  hero-min-height: 560

components:
  button-primary:
    bg: '#3a76f0'
    color: '#ffffff'
    radius: 9999
    padding: '14px 32px'
    height: 52
    font: button-lg
    weight: 600
    use: '"Download Signal" / "Get Signal" — primary CTA, full-pill Signal blue with white text. Generous padding signals "this is the conversion action."'
  button-primary-hover:
    bg: '#2e62d8'
    color: '#ffffff'
    radius: 9999
    use: 'Hover — darker blue shift, no shadow lift, no scale.'
  button-primary-active:
    bg: '#234fb8'
    color: '#ffffff'
    use: 'Pressed state.'
  button-secondary:
    bg: '#ffffff'
    color: '#234fb8'
    border: '2px solid #234fb8'
    radius: 9999
    padding: '14px 32px'
    height: 52
    use: '"Read the docs" outlined deeper-blue secondary — uses brand-deep `#234fb8` for AAA contrast.'
  button-tertiary-text:
    bg: 'transparent'
    color: '#2e62d8'
    radius: 4
    padding: '8px 12px'
    use: 'Inline text link — typically with underline.'
  button-icon:
    bg: 'transparent'
    color: '#5b6068'
    radius: 4
    height: 40
    width: 40
    use: 'Share, copy, more-options icon button.'
  button-donate:
    bg: '#2c6bed'
    color: '#ffffff'
    radius: 9999
    padding: '14px 32px'
    height: 52
    use: '"Donate" CTA — slightly differentiated blue from primary brand to signal "this is the nonprofit ask."'
  card-feature:
    bg: '#ffffff'
    color: '#1c1f23'
    radius: 8
    padding: 32
    border: '1px solid #e0e3e8'
    shadow: '0 1px 3px rgba(28,31,35,0.06)'
    use: '"End-to-end encryption / No ads / No tracking / Open source" feature card — icon top, 22px / 600 title, 16px / 400 description.'
  card-feature-hover:
    bg: '#ffffff'
    color: '#1c1f23'
    radius: 8
    shadow: '0 4px 12px rgba(28,31,35,0.08)'
    use: 'Hover lift — shadow deepens slightly, no scale.'
  card-quote:
    bg: '#ffffff'
    color: '#1c1f23'
    radius: 8
    padding: 32
    border: '1px solid #e0e3e8'
    use: 'Pull-quote card — Snowden / EFF / Bruce Schneier endorsement, 22px / 400 quote text, 14px / 600 attribution below.'
  card-faq:
    bg: '#ffffff'
    color: '#1c1f23'
    radius: 8
    padding: 24
    border: '1px solid #e0e3e8'
    use: 'FAQ accordion item — 18px / 600 question, expanded body 16px / 400, chevron icon right.'
  card-donate:
    bg: '#fef9e9'
    color: '#1c1f23'
    radius: 12
    padding: 32
    border: '1px solid #f1c40f'
    use: 'Warm-cream donate callout — Signal Foundation 501(c)(3) explainer with "Donate" CTA.'
  badge-open-source:
    bg: '#f4f7ff'
    color: '#234fb8'
    radius: 4
    padding: '4px 10px'
    use: '"OPEN SOURCE" blue tag.'
  badge-audited:
    bg: '#e0f3e7'
    color: '#1f6e44'
    radius: 4
    padding: '4px 10px'
    use: '"INDEPENDENTLY AUDITED" green tag.'
  badge-no-ads:
    bg: '#f1f3f5'
    color: '#1c1f23'
    radius: 4
    padding: '4px 10px'
    use: '"NO ADS" neutral tag.'
  pill-encryption:
    bg: '#e0f3e7'
    color: '#1f6e44'
    border: '1px solid #3eaa6c'
    radius: 9999
    padding: '4px 12px'
    use: '"🔒 End-to-end encrypted" verification pill — green lock icon + tnum.'
  input-text:
    bg: '#ffffff'
    color: '#1c1f23'
    radius: 8
    border: '1px solid #bcc0c7'
    height: 48
    padding: '12px 16px'
    use: 'Form input — donate amount, contact form fields.'
  input-amount:
    bg: '#ffffff'
    color: '#1c1f23'
    radius: 8
    border: '2px solid #bcc0c7'
    height: 56
    padding: '14px 16px'
    use: 'Donate amount input — taller and bolder than form inputs to draw attention.'
  amount-chip:
    bg: '#ffffff'
    color: '#1c1f23'
    border: '1px solid #bcc0c7'
    radius: 9999
    padding: '10px 20px'
    use: '"$10 / $25 / $50 / $100 / $250" donate-amount chip — pill-shaped.'
  amount-chip-active:
    bg: '#3a76f0'
    color: '#ffffff'
    border: '1px solid #3a76f0'
    radius: 9999
    use: 'Selected donate amount — Signal blue fill.'
  nav-top-bar:
    bg: 'rgba(255,255,255,0.92)'
    color: '#1c1f23'
    height: 64
    backdrop: 'blur(16px)'
    border-bottom: '1px solid #e0e3e8'
    use: 'Sticky top nav with backdrop blur — Signal whisper-mark + wordmark left, "Download / Donate / Blog / Developers" links centre, "Get Signal" pill CTA right.'
  download-band:
    bg: '#3a76f0'
    color: '#ffffff'
    radius: 12
    padding: 48
    use: 'Hero download band — Signal blue full-bleed with white "Get Signal" headline + platform-specific download buttons (App Store, Google Play, desktop, .deb, .apk).'
  modal-dialog:
    bg: '#ffffff'
    color: '#1c1f23'
    radius: 12
    shadow: '0 16px 48px rgba(28,31,35,0.20)'
    padding: 32
    use: 'Donate / contact modal.'
  toast:
    bg: '#1c1f23'
    color: '#ffffff'
    radius: 8
    padding: '12px 16px'
    use: 'Confirmation toast — "Donation processed" — dark on light inversion.'

lineage:
  summary: 'Signal''s visual surface is the canonical privacy-tooling register — paper-white canvas, single confident `#3a76f0` Signal blue, Inter sans pulling the entire scale, generous body-type breath, no decorative chrome beyond the whisper-mark. The brand inherits from the nonprofit-foundation web tradition (Mozilla, Wikimedia, EFF) where the visual restraint is a political statement: ad-free means surface-clean, encrypted-by-default means visually-quiet. Inter''s adoption mirrors the broader privacy-tooling cohort — Mullvad, ProtonMail, Tutanota, Bitwarden — all of whom converged on a clean humanist sans plus a single-blue voltage. Signal sharpens that voltage to a slightly violet `#3a76f0` (rather than the sky-blue used by social apps), reinforcing the protocol-cryptography lineage. What the brand rejects: sticker culture, gamification, monetization UI, ad surfaces, and any chromatic vocabulary that could be mistaken for an engagement-driven app.'
  influences:
    - name: 'Mozilla Foundation'
      role: 'Nonprofit-foundation web tradition — paper-white canvas, single brand voltage, restraint as political position'
      url: 'https://www.mozilla.org'
    - name: 'EFF'
      role: 'Privacy-advocacy editorial confidence — body type breath, body-readable density, no monetization chrome'
      url: 'https://www.eff.org'
    - name: 'WhatsApp / Telegram'
      role: 'Messaging-app peer set — Signal positions deliberately against their warm bubbly chat aesthetics'
      url: 'https://www.whatsapp.com'
    - name: 'ProtonMail / Mullvad'
      role: 'Privacy-tooling cohort — clean humanist sans, single-blue voltage, encryption-as-default vocabulary'
      url: 'https://proton.me'
    - name: 'Inter / Rasmus Andersson'
      role: 'Typographic foundation — Inter''s open-source neutrality is the privacy-tooling lingua franca'
      url: 'https://rsms.me/inter/'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-out: 'cubic-bezier(0, 0, 0.2, 1)'
  ease-in-out: 'cubic-bezier(0.4, 0, 0.6, 1)'
  duration-fast: 150
  duration-standard: 250
  duration-slow: 400
  reduced-motion: 'respects prefers-reduced-motion: hover transitions collapse to instant, accordion expands without height animation, modal scale-in becomes opacity-only, encryption-verification celebration pulse disables.'

breakpoints:
  mobile: 600
  tablet: 900
  desktop: 1200
  wide: 1440

shadows:
  none: 'none'
  card-rest: '0 1px 3px rgba(28,31,35,0.06)'
  card-hover: '0 4px 12px rgba(28,31,35,0.08)'
  popover: '0 4px 16px rgba(28,31,35,0.12)'
  modal: '0 16px 48px rgba(28,31,35,0.20)'
  ring: '0 0 0 3px rgba(58,118,240,0.4)'

accessibility:
  contrast-text-on-bg: 14.4              # #1c1f23 on #ffffff — AAA
  contrast-text-muted-on-bg: 5.7         # #5b6068 on #ffffff — AA at body
  contrast-text-on-brand: 4.7            # white on #3a76f0 — AA at body
  contrast-link-on-bg: 6.9               # #2e62d8 on white — AAA
  contrast-deep-link-on-bg: 9.2          # #234fb8 on white — AAA
  focus-ring: '3px solid rgba(58,118,240,0.4) with 2px offset'
  reduced-motion-honored: true
  open-source: 'Signal''s clients (iOS, Android, desktop) and server are all open-source — public repos audited by independent security researchers'
  audit-trail: 'every protocol change documented in public GitHub PRs; cryptographic protocol formally verified by academic research papers'

dark-mode: optional        # Web has light-mode default; mobile and desktop apps offer system-respecting dark mode
---

## 1. Visual Theme & Atmosphere

Signal's website is the most restrained surface in modern messaging. The canvas is paper-white `#ffffff`, the type is Inter pulling display through body in the canonical privacy-tooling register, and the chromatic event of the page is `#3a76f0` — a confident Signal Blue used sparingly for the primary "Download Signal" CTA, the wordmark, and the soft-blue promo bands behind feature explainers. The brand's argument is "we are a nonprofit, we have no ads, your messages are encrypted by default, and you can read the protocol on GitHub" — and the visual surface is calibrated to make that argument credibly. There are no celebrity instructor portraits, no streaming-service hero videos, no e-commerce discount stickers, no editorial-magazine pull-quotes from anonymous sources. Every claim on the page either links to a public GitHub repo, a peer-reviewed academic paper, or a 501(c)(3) tax filing.

The signature is **deliberate minimalism**. Walk into signal.org and you'll see: a 64px sticky glass nav, a 560px hero with a 56px / 700 headline ("Speak Freely") and a single Signal-blue pill CTA ("Get Signal"), then below the hero, a 4-up feature card grid explaining end-to-end encryption / no ads / no tracking / open source — each card with an icon, a 22px / 600 title, and a 16px / 400 / 1.6 line-height description. There's no auto-playing trailer, no carousel of testimonials, no animated illustration of the encryption protocol. The page does its work through generous spacing (96px+ section gaps) and disciplined type (16px body, 1.6 line-height) — exactly the typographic register that Bruce Schneier's blog or the EFF website uses, because that's the visual language that signals "we speak the truth carefully."

Body type sits at 16px / 400 / 1.6 line-height — book-readable density, generous breath. The combination is critical for the privacy-tooling category: every paragraph on the page is doing the work of explaining a complex security concept (forward secrecy, sealed sender, zero-knowledge contact discovery) to a reader who may or may not have a CS background. Dense type would feel rushed; loose type would feel marketing-fluff. 1.6 line-height is the calm middle that lets readers slow down. The brand never uses display-serif companion fonts — Inter alone carries every register from 56px hero down to 13px caption.

Donate is the secondary surface. Signal is operated by the Signal Foundation (a 501(c)(3) nonprofit established 2018 with an initial $50M loan from Brian Acton, WhatsApp co-founder), and the donate page is critically important to the brand's argument. The donate CTA appears persistently in the top nav (in a slightly differentiated `#2c6bed` blue), and the donate page hosts a warm-cream `#fef9e9` "Help support Signal" callout band, amount chip selectors ($10 / $25 / $50 / $100 / $250 / Custom), and a long-form explainer of how donations are used. The brand's commitment is "no ads, no tracking, no data brokers — only the messages you send to people you choose." This is the political position the visual restraint enforces.

The download experience is the second key surface. The "Get Signal" CTA leads to a download page with platform-specific buttons (iOS App Store, Google Play, signal.org/install for desktop, .deb for Debian/Ubuntu, .apk for sideload), each rendered as a Signal-blue pill button with the platform icon left-aligned and the platform name + size hint right-aligned. There's no "Try free for 30 days" — Signal is permanently free. There's no "Sign up for an account" — Signal uses your phone number (or, increasingly, a username) as your identifier without a separate account creation step.

Density is deliberately low. Sections breathe at 96–128px gaps. Within sections, content sits at a 680px-prose width (narrower than tech-product norm) — closer to a long-form-article column width. The argument is "slow down, read carefully, this is what we do, this is how it works." The opposite of Telegram's sticker-heavy chat-app warmth or WhatsApp's bubbly green-and-white friendliness. Signal's brand is a serious tool for serious communication.

**Key Characteristics:**
- Paper-white `#ffffff` canvas warming to `#f8f9fa` in alt bands. Warm cream `#fef9e9` for donate / nonprofit ask band.
- Signature `#3a76f0` Signal Blue — primary CTA, wordmark, soft-blue promo bands.
- Deeper `#234fb8` blue for inline text links and outlined buttons (AAA contrast on white).
- Slightly differentiated `#2c6bed` Donate blue — separates nonprofit ask from learning verbs.
- Inter pulling display through body — one family, no companion. Display weights up to 700 with `-0.025em` tracking.
- 16px / 400 / 1.6 body line-height — book-readable density for security-concept explainers.
- Generous section spacing (96–128px) — disciplined minimalism, never cramped.
- 680px prose width on long-form pages — narrower than tech-product norm; closer to magazine column.
- Pill-shaped (`9999px` radius) primary CTA at `52px` height with generous `14px 32px` padding.
- "OPEN SOURCE" / "INDEPENDENTLY AUDITED" / "NO ADS" badges on feature cards — citation-grade claims.
- 🔒 Green encryption-verified pill — visual reinforcement of the cryptographic claim.
- Endorsement quotes from Snowden / EFF / Bruce Schneier — political-credibility signals, not celebrity-endorsement signals.
- Signal Foundation 501(c)(3) banner at footer — nonprofit status visible.
- Sticky glass nav (`rgba(255,255,255,0.92)` + `blur(16px)`) — modern web convention.
- Light-mode default; mobile/desktop apps offer system-respecting dark mode.

## 2. Color Palette & Roles

### Primary
- **Paper White** (`#ffffff`): The defining canvas. Pure white, no warm tint — Signal reads as document, not as decoration.
- **Warm Off-White** (`#f8f9fa`): Hero band background, alt section banding.
- **Signal Blue** (`#3a76f0`): The brand's primary blue. Wordmark, primary CTA background, soft-blue promo bands.
- **Display Black** (`#1c1f23`): Primary body text. Warm near-black with the slightest blue-grey tilt — softer than pure `#000`.

### Brand & Dark
- **Brand Hover** (`#2e62d8`): Pointer-over state.
- **Brand Active** (`#234fb8`): Pressed state.
- **Brand Soft** (`#e8efff`): Soft-tint surface for badges, soft promo bands, info messaging.
- **Brand Deep** (`#234fb8`): Deeper blue used for inline text links, outlined-button borders. Provides AAA contrast on white where the brighter `#3a76f0` only meets AA.
- **Donate Blue** (`#2c6bed`): Slightly differentiated blue — separates nonprofit ask from primary download-action verb.
- **Footer Black** (`#1c1f23`): Footer band.

### Accent
- **Encryption Green** (`#3eaa6c`): The encryption-verified colour. Green lock icon, "Verified safety number" indicator, success messaging.
- **Warning Orange** (`#e69138`): Warning amber.
- **Danger Red** (`#d04a3c`): Error / security warning.
- **Cream** (`#fef9e9`): Warm cream for the donate / nonprofit ask callout band.

### Interactive
- **CTA Blue** (`#3a76f0`): Primary action button background.
- **Inline Link Deep Blue** (`#234fb8`): Inline links — deeper than CTA so contrast is AAA on white.
- **Outlined Deep Blue** (`#234fb8` border on white): Secondary action.
- **Donate Blue** (`#2c6bed`): Donate CTA — slightly differentiated from primary brand action.
- **Disabled** (`#a8acb3` text on `#f1f3f5` bg): Non-interactive control.

### Neutral Scale
- **Display Black** (`#1c1f23`): Display headlines, primary body.
- **Strong Black** (`#0a0d11`): Hero display only.
- **Muted** (`#5b6068`): Secondary metadata — "Version 7.21.4 (build 12)", "Updated April 2024".
- **Soft** (`#7a7f87`): Tertiary captions, breadcrumb separators.
- **Disabled** (`#a8acb3`): Inactive form labels, disabled controls, encryption-unverified lock.
- **Border Default** (`#e0e3e8`): Card hairlines, dividers.
- **Border Soft** (`#eef0f2`): Subtle table-row dividers.
- **Border Strong** (`#bcc0c7`): Focused field outline before brand-blue ring.

### Surface & Borders
- **Surface Default** (`#ffffff`): Card, modal floor.
- **Surface Hover** (`#f8f9fa`): Nav hover, list-row hover.
- **Surface Soft** (`#f4f7ff`): Faint blue-tinted secondary surface.
- **Surface Strong** (`#e8eaee`): Divider band.
- **Promo Surface** (`#e8efff`): Soft-blue promo band — "End-to-end encrypted by default."
- **Donate Cream** (`#fef9e9`): Warm cream — Signal Foundation 501(c)(3) callout.

### Encryption-State Colours
- **Verified** (`#3eaa6c`): Green lock — verified safety number.
- **Unverified** (`#7a7f87`): Grey lock — encrypted but unverified contact.
- **Compromised** (`#d04a3c`): Red lock — safety number changed (potential MITM).

### Shadow Colors
- **Card Rest** (`rgba(28,31,35,0.06)`): The rest-state card shadow at `0 1px 3px`. Whisper-soft.
- **Card Hover** (`rgba(28,31,35,0.08)`): Hover-state shadow at `0 4px 12px`.
- **Popover Shadow** (`rgba(28,31,35,0.12)`): Dropdown, tooltip.
- **Modal Shadow** (`rgba(28,31,35,0.20)`): Dialog floor.

### Semantic
- **Success** (`#3eaa6c` text on `#e0f3e7` soft bg): Message delivered, encryption verified, donation processed.
- **Warning** (`#e69138` text on `#fdf3e8` soft bg): "Safety number changed" / unverified contact warning.
- **Danger** (`#d04a3c` text on `#fbeae6` soft bg): Form validation error, security alert.
- **Info** (`#3a76f0` text on `#e8efff` soft bg): "Signal Desktop now available for Linux ARM."

## 3. Typography Rules

### Font Family
- **Primary**: `"Inter"` (or `"Inter var"` variable) — Rasmus Andersson's open-source humanist sans, version 4.0+. Fallback chain: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", Helvetica, Arial, sans-serif`.
- **Mono**: `"SF Mono", "Roboto Mono", "JetBrains Mono", Menlo, Consolas, monospace` — used for safety-number display, version numbers, public key hex.
- **OpenType Features**: `kern` and `liga` enabled site-wide. `tnum` enabled on version numbers, build counters, and any cryptographic numerics (safety numbers).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| Display Hero | Inter | 56px | 700 | 1.1 | -0.025em | kern,liga | Marketing landing — "Speak Freely" |
| Display XL | Inter | 44px | 700 | 1.15 | -0.02em | kern,liga | Section hero, donate page |
| Display LG | Inter | 36px | 700 | 1.2 | -0.015em | kern,liga | Feature section title |
| Display MD | Inter | 28px | 700 | 1.25 | -0.01em | kern,liga | Section heading |
| Display SM | Inter | 22px | 600 | 1.3 | -0.005em | kern,liga | Subsection heading |
| Title LG | Inter | 18px | 600 | 1.4 | 0 | kern,liga | Card title |
| Title MD | Inter | 16px | 600 | 1.4 | 0 | kern,liga | List item title |
| Title SM | Inter | 14px | 600 | 1.4 | 0 | kern,liga | Sidebar nav, dropdown header |
| Body LG | Inter | 18px | 400 | 1.6 | 0 | kern,liga | Lead paragraph, hero subtitle |
| Body MD | Inter | 16px | 400 | 1.6 | 0 | kern,liga | Default body, feature description |
| Body SM | Inter | 14px | 400 | 1.5 | 0 | kern,liga | Secondary metadata |
| Button LG | Inter | 16px | 600 | 1.0 | 0 | kern,liga | "Download Signal" CTA |
| Button MD | Inter | 14px | 600 | 1.0 | 0 | kern,liga | Default button label |
| Eyebrow | Inter | 13px | 600 | 1.0 | 0.06em | kern,liga | Uppercase "FREQUENTLY ASKED" |
| Caption | Inter | 13px | 400 | 1.5 | 0 | kern,liga | Disclosures, fine print |
| Metadata | Inter | 13px | 400 | 1.3 | 0 | tnum | Version, build numbers |
| Badge | Inter | 12px | 600 | 1.0 | 0.04em | kern,liga | "OPEN SOURCE", "AUDIT" tags |
| Quote | Inter | 22px | 400 | 1.45 | -0.005em | kern,liga | Pull-quote — Snowden / EFF endorsements |
| Mono | SF Mono | 14px | 400 | 1.5 | 0 | -- | Safety numbers, public keys |

### Principles
- **Single family discipline.** Inter covers display through body. There is no display-serif companion — Signal's voice is restraint, not editorial flourish.
- **Modest negative tracking.** Display sizes use `-0.005em` to `-0.025em`. Signal never goes tighter than `-0.025em` even on 56px hero — the brand is calm and considered, not condensed.
- **0.06em tracking on eyebrows.** Uppercase eyebrows ("FREQUENTLY ASKED", "OPEN SOURCE") use 13px / 600 / `0.06em` — moderate tracking, slightly tighter than MasterClass's `0.16em` because Signal's editorial register is more documentation-grade.
- **0.04em tracking on badges.** Tiny 12px "OPEN SOURCE" / "AUDIT" badges use 600 weight + slight positive tracking.
- **16px body, 1.6 line-height.** Generous breath — Signal is explaining cryptography to non-experts, and dense type would feel rushed.
- **Tabular numerals on cryptographic content.** Version numbers, build counters, safety numbers, public-key hex — all `tnum`.
- **400 / 600 / 700 only.** Body at 400, titles at 600, hero display at 700. No 500 mid-weight, no 300 light. Three weights for hierarchy, no more.
- **Sentence case for everything except eyebrows and badges.** "Download Signal", "Read the docs" — capital first word only.
- **No italics.** Signal's body type doesn't italicise — emphasis comes through 600 weight, not slant.

## 4. Component Stylings

### Buttons

**Primary (Signal Blue Full Pill)**
- Background: `#3a76f0`. Text: `#ffffff`. Radius: `9999px` (full pill). Padding: `14px 32px`. Height: `52px`. Font: Inter 16px / 600.
- Hover: `#2e62d8`. No shadow lift, no scale.
- Active: `#234fb8`.
- Use: "Download Signal", "Get Signal", "Donate now". The full-pill at 52px height with generous padding signals "this is the conversion action."

**Secondary (Outlined Deep Blue)**
- Background: `#ffffff`. Text: `#234fb8`. Border: `2px solid #234fb8`. Radius: `9999px`. Padding: `14px 32px`.
- Hover: bg `#e8efff`.
- Use: "Read the docs", "Learn more". Note: uses deeper `#234fb8` rather than brand `#3a76f0` for AAA contrast.

**Tertiary Text**
- Background: `transparent`. Color: `#2e62d8`. Padding: `8px 12px`. Underlined.
- Hover: opacity `1 → 0.7`.
- Use: Inline action, footer link.

**Donate (Slightly Differentiated Blue)**
- Background: `#2c6bed`. Text: `#ffffff`. Radius: `9999px`. Padding: `14px 32px`. Height: `52px`.
- Hover: `#1f4ab2`.
- Use: "Donate" CTA — separates nonprofit ask from primary download verb.

**Icon Button**
- Background: `transparent`. Color: `#5b6068`. Radius: `4px`. Size: `40 × 40`.
- Hover: bg `#f8f9fa`, color `#1c1f23`.
- Use: Share, copy, more-options.

### Cards & Tiles

**Feature Card**
- Background: `#ffffff`. Color: `#1c1f23`. Radius: `8px`. Padding: `32px`. Border: `1px solid #e0e3e8`.
- Layout: 40px lock/shield/eye icon top in `#3a76f0`, 16px gap, 22px / 600 title "End-to-end encryption", 8px gap, 16px / 400 description "Your messages and calls are secured with the open-source Signal Protocol — even we can't read them." (max 4 lines).
- Rest shadow: `0 1px 3px rgba(28,31,35,0.06)`.
- Use: "End-to-end encryption / No ads / No tracking / Open source" 4-up feature grid.

**Feature Card (Hover)**
- Shadow deepens to `0 4px 12px rgba(28,31,35,0.08)` over 250ms ease-standard.
- No scale, no translate.

**Quote Card (Endorsement)**
- Background: `#ffffff`. Color: `#1c1f23`. Radius: `8px`. Padding: `32px`. Border: `1px solid #e0e3e8`.
- Layout: 22px / 400 quote text in italics-only-here register: "I use Signal every day." — Edward Snowden, then 14px / 600 attribution row "Edward Snowden · NSA whistleblower" with avatar / portrait left.
- Use: Endorsement section — Snowden, EFF, Bruce Schneier quotes.

**FAQ Accordion Card**
- Background: `#ffffff`. Color: `#1c1f23`. Radius: `8px`. Padding: `24px`. Border: `1px solid #e0e3e8`.
- Layout: 18px / 600 question left, chevron icon right that rotates on expand. Expanded body: 16px / 400 / 1.6 description below in 16px gap.
- Use: "How does Signal work?", "What data does Signal collect?", "Is Signal really free?"

**Donate Callout (Cream)**
- Background: `#fef9e9`. Color: `#1c1f23`. Radius: `12px`. Padding: `32px`. Border: `1px solid #f1c40f`.
- Layout: Warm-cream surface with the Signal Foundation 501(c)(3) explainer + amount chip selector + Donate CTA.
- Use: Donate page hero, footer-of-page nonprofit ask.

### Badges, Tags, Indicators

**OPEN SOURCE (Blue)**
- Background: `#f4f7ff`. Color: `#234fb8`. Radius: `4px`. Padding: `4px 10px`. Font: 12px / 600 / `0.04em` uppercase.

**INDEPENDENTLY AUDITED (Green)**
- Background: `#e0f3e7`. Color: `#1f6e44`. Radius: `4px`.

**NO ADS (Neutral)**
- Background: `#f1f3f5`. Color: `#1c1f23`. Radius: `4px`.

**Encryption Verified Pill**
- Background: `#e0f3e7`. Color: `#1f6e44`. Border: `1px solid #3eaa6c`. Radius: `9999px`. Padding: `4px 12px`.
- Format: "🔒 End-to-end encrypted" with green lock emoji + 12px / 600 text.

**Amount Chip**
- Default: bg `#ffffff`, color `#1c1f23`, border `1px solid #bcc0c7`, radius `9999px`, padding `10px 20px`.
- Active: bg `#3a76f0`, color `#ffffff`, border `#3a76f0`. Signal blue fill.
- Use: Donate amount selector — "$10 / $25 / $50 / $100 / $250".

### Inputs & Forms

**Text Input**
- Background: `#ffffff`. Color: `#1c1f23`. Border: `1px solid #bcc0c7`. Radius: `8px`. Height: `48px`. Padding: `12px 16px`.
- Label sits above, 14px / 600 `#1c1f23`. Hint below, 13px / 400 `#5b6068`.
- Focus: border `#3a76f0`, ring `0 0 0 3px rgba(58,118,240,0.4)`.

**Donate Amount Input**
- Background: `#ffffff`. Color: `#1c1f23`. Border: `2px solid #bcc0c7`. Radius: `8px`. Height: `56px`. Padding: `14px 16px`.
- Taller and bolder-bordered than form inputs. Currency symbol prefix in muted grey.
- Focus: border `#3a76f0`, ring `0 0 0 3px rgba(58,118,240,0.4)`.

### Navigation

**Top Bar (Sticky, Glass)**
- Background: `rgba(255,255,255,0.92)` with `backdrop-filter: blur(16px)`. Color: `#1c1f23`. Border-bottom: `1px solid #e0e3e8`. Height: `64px`.
- Layout: Signal whisper-mark + wordmark left (32px logo + 18px / 600 wordmark), nav links centre ("Download / Donate / Blog / Developers"), "Get Signal" pill CTA right.
- Mobile: collapses to hamburger + Get-Signal CTA.

**Footer**
- Background: `#1c1f23`. Color: `#ffffff`. Padding: `64px 0`.
- 4-column layout: Get Signal / About / Help / Legal.
- Bottom band: Signal Foundation 501(c)(3) status, EIN, year founded — small caption-grade text.

### Modals & Toasts

**Modal Dialog**
- Background: `#ffffff`. Color: `#1c1f23`. Radius: `12px`. Padding: `32px`.
- Shadow: `0 16px 48px rgba(28,31,35,0.20)`.
- Backdrop: `rgba(28,31,35,0.5)`.
- Use: Donate, contact form, image preview.

**Toast**
- Background: `#1c1f23`. Color: `#ffffff`. Radius: `8px`. Padding: `12px 16px`.
- Use: "Donation processed", "Link copied" — bottom-left, auto-dismiss 3s.

## 5. Layout Principles

### Spacing System
- Base: 4px. Scale: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128 / 160.
- Card-to-card gap: 24px on desktop, 16px on tablet, 12px on mobile.
- Section gap (major modules): 96–128px.
- Grid gutter: 24px.

### Grid & Container
- Page width: 1280px max (narrower than dev-platform norm).
- Content max within page: 1140px centred.
- Prose width: 680px — narrower than tech-product norm; closer to magazine column.
- Hero: full-bleed background, content centred at 1140px.

### Whitespace Philosophy
Signal is a sparse-density brand. Sections breathe at 96–128px gaps — twice the typical SaaS norm. Within sections, content sits at a 680px-prose width on long-form pages, which is closer to a long-form-article column than to a tech marketing page. The argument is "slow down, read carefully, this is what we do." The page is calibrated to support sustained reading of complex security claims by non-experts. Body line-height stays at 1.6 throughout.

### Section Cadence
- Top bar (sticky, glass)
- Hero (560px, 56px / 700 "Speak Freely" headline, 18px lead, primary Signal-blue pill CTA + outlined deeper-blue secondary)
- Feature card 4-up grid (End-to-end encryption / No ads / No tracking / Open source)
- "How Signal works" explainer band — 680px prose width with diagrams
- Endorsement section (Snowden / EFF / Bruce Schneier quote cards in 3-up grid)
- "Stay in touch" newsletter band on `#e8efff` soft-blue
- Donate cream callout (`#fef9e9`)
- "Help us" — Signal Foundation 501(c)(3) explainer
- Press logos band (NYT, Guardian, Wired, EFF, Citizen Lab) in muted grey
- Footer (4-column dark `#1c1f23` band)

Light/dark alternation: predominantly light. Footer is the only dark band.

## 6. Shapes & Radius Scale

- **Micro** (`2px`): Tiny indicator dot.
- **Standard** (`4px`): Input, dropdown, badge.
- **Comfortable** (`6px`): Tag chip.
- **Relaxed** (`8px`): Card, modal — the workhorse radius.
- **Featured** (`12px`): Donate callout, large modal.
- **Pill** (`9999px`): Primary button, encryption-verified pill, amount chip — the brand's defining capsule shape for primary action.

The 8px card + full-pill (`9999px`) primary button pairing is the geometric signature. Pills make the primary action feel friendly and trustworthy; 8px cards make content feel like institutional documentation. The absence of micro-radius on cards (no 4px-cornered cards) places Signal somewhere between Khan Academy (also 8px / pill) and OpenAI's editorial brand.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 (flat) | No shadow, no border | Section background, hero band |
| 1 (border) | `1px solid #e0e3e8` | Card rest, input field, divider |
| 2 (subtle lift) | `0 1px 3px rgba(28,31,35,0.06)` | Default feature card rest |
| 3 (hover lift) | `0 4px 12px rgba(28,31,35,0.08)` | Feature card hover |
| 4 (popover) | `0 4px 16px rgba(28,31,35,0.12)` | Dropdown, tooltip |
| 5 (modal) | `0 16px 48px rgba(28,31,35,0.20)` | Dialog, donate modal |

### Shadow Philosophy
Shadows are warm-grey-tinted (using the `#1c1f23` body colour as base) and whisper-soft. The rest-state card shadow at 0.06 opacity is barely perceptible. The hover shadow at 0.08 grows just enough to feel intentional. Modals get the only shadow above 0.15 opacity. The brand never uses brand-tinted shadows — blue belongs to action, not to elevation. The aesthetic is closer to Apple's quiet-shadow tradition than to Material Design's elevation ladder.

## 8. Interaction & Motion

### Easing Curves
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — Material standard ease.
- **Out**: `cubic-bezier(0, 0, 0.2, 1)` — incoming elements.
- **In-Out**: `cubic-bezier(0.4, 0, 0.6, 1)` — accordion expand/collapse.

### Duration Buckets
- **Fast**: 150ms — colour shifts, hover transitions.
- **Standard**: 250ms — modal open, dropdown.
- **Slow**: 400ms — accordion expand.

### Per-Component Recipes
- **Feature card hover**: Shadow `0 1px 3px → 0 4px 12px` over 250ms ease-standard. No scale.
- **Primary CTA hover**: Background `#3a76f0 → #2e62d8` over 150ms ease-standard. No transform.
- **Outlined CTA hover**: Background `#ffffff → #e8efff` over 150ms.
- **Amount chip toggle**: bg + text + border swap together over 150ms.
- **FAQ accordion expand**: chevron rotates 0 → 90deg over 200ms ease-out, body height auto-grows over 400ms ease-in-out, content fades in over last 200ms.
- **Modal open**: 250ms ease-out, opacity `0 → 1` + scale `0.96 → 1`.
- **Toast in**: slide up 6px + opacity over 250ms; auto-dismiss after 3s.
- **Encryption-verified pulse**: when safety number is verified, green pill pulses `1.0 → 1.05 → 1.0` over 600ms ease-out.

### Page Transitions
Signal.org uses static-site rendering (Hugo or similar) with no client-side routing. Page changes are full page loads. There's no transition — the page just navigates.

### Reduced Motion
`prefers-reduced-motion: reduce` collapses:
- Card hover shadow lifts → instant snap.
- Accordion expand → instant.
- Modal scale-in → opacity-only.
- Toast slide → instant.
- Encryption-verified pulse → static.

## 9. Accessibility & A11y

### Contrast Pairs
- Display Black `#1c1f23` on white `#ffffff`: **14.4:1** — AAA at all sizes.
- Muted `#5b6068` on white: **5.7:1** — AA at body sizes.
- White `#ffffff` on Signal Blue `#3a76f0`: **4.7:1** — AA at body. Used at 16px / 600 (large-text bracket).
- Inline link Deep Blue `#234fb8` on white: **9.2:1** — AAA at all sizes.
- Brand-hover Blue `#2e62d8` on white: **6.9:1** — AAA.
- Encryption Green `#3eaa6c` on white: **3.7:1** — fails AA at body, used at 16px / 600 large-text bracket or with green lock-icon adjacent.
- Disabled `#a8acb3` on white: **2.6:1** — fails AA, used for `aria-disabled` only.

### Focus Indicators
- Default focus: `3px solid rgba(58,118,240,0.4)` outline with `2px` offset.
- Form fields: border lifts to `#3a76f0` on focus, plus the 3px ring outside.
- Tab order: top nav → main content top-to-bottom → feature cards → endorsement quotes → donate band → footer.

### ARIA Patterns
- Feature cards: `role="article" aria-label="[Feature title]: [Brief description]"`.
- Endorsement quotes: `<blockquote>` with `<cite>` for attribution.
- FAQ accordion: each item `<details><summary>` for native semantics, with `aria-expanded` and `aria-controls`.
- Encryption pill: `role="status" aria-label="End-to-end encrypted"`.
- Amount chip: `role="radio" aria-checked="true|false"` within `role="radiogroup"`.
- Modal: `role="dialog" aria-modal="true"` with focus trap.
- Search: not present on signal.org (intentional minimalism).

### Keyboard Navigation
- Tab: move forward through controls; Shift+Tab reverses.
- Enter / Space: activate focused button or accordion.
- ESC: close modal, dropdown.
- Arrow keys (within radio group): navigate amount chips.

### Screen Reader Hints
- Feature card icons are decorative (`aria-hidden="true"`); the title carries the semantic meaning.
- Endorsement quote attribution: `<cite>Edward Snowden, NSA whistleblower</cite>`.
- Encryption-verified pill: green lock icon has `aria-hidden="true"` because the text "End-to-end encrypted" carries the meaning.
- Donate amount chips announce their value when focused.

### Reduced Motion
Honoured. See §8.

## 10. Responsive Behavior

### Breakpoints
| Token | Min | Use |
|-------|-----|-----|
| mobile | 0px | 1 feature card per row, prose width 100% |
| tablet | 600px | 2 cards per row |
| desktop | 900px | 4 cards per row, prose width 680px |
| wide | 1200px | content max 1140px centred |

### Touch Targets
- 48×48 minimum on all interactive controls. Primary download CTA at 52px tall.
- Amount chips at 44px height on mobile.

### Collapsing Strategy
- **Top nav**: collapses to hamburger + Get-Signal CTA on `< 900px`.
- **Feature card grid**: 4 → 2 → 1 across the breakpoint cascade.
- **Hero**: title scales 56 → 44 → 36; subtitle stays at 18px.
- **Donate amount chips**: wrap to 2 rows on mobile.

### Image Behavior
- Logo: SVG (whisper-mark only at small sizes, full wordmark + whisper-mark at large sizes).
- Endorsement portraits: small 40px circular avatars.
- Press logos: SVG with `currentColor` for tint adjustability — render at `#5b6068` muted grey.

### Container Queries
Used on the donate card — amount chip grid collapses to 2-column when card width is below 320px.

## 11. Content & Voice

### Tone
Signal's voice is **calm, precise, and politically engaged**. Marketing copy reads like a security researcher's blog post — clear, structured, free of hyperbole. Headlines ("Speak Freely") set the stage; descriptions explain how the cryptographic guarantee actually works in plain English. The brand never assumes the reader is a security expert; it never assumes the reader is naive about surveillance either. Every page treats you as a thoughtful adult who deserves to know how their messaging app actually handles data. The voice is closer to the EFF or Bruce Schneier's blog than to a consumer-tech product.

### Microcopy Patterns
- **Primary CTA**: "Download Signal", "Get Signal", "Donate now".
- **Secondary CTA**: "Read the docs", "Learn more", "Read the whitepaper".
- **Tertiary**: "Read the source code →", "Read our terms →".
- **Confirmation toast**: "Donation processed", "Link copied".
- **Empty states**: rare — Signal's marketing site is mostly evergreen content.
- **Error states**: rare on signal.org; security warnings exist in the app itself ("Safety number changed").
- **Donate ask**: "Signal is funded entirely by grants and donations from people like you. There are no advertisers or investors — just the community of people who use Signal."
- **Privacy claim**: "Signal messages and calls are always end-to-end encrypted, painstakingly engineered to keep your communication safe."
- **Open-source claim**: "Anyone can verify our security by examining the code. Signal is the most scrutinised messaging app in the world."

### Empty States
Signal.org has no empty states because it has no user-generated content. The app itself has empty-conversation states ("Send your first message — your messages are end-to-end encrypted").

### CTA Verb Conventions
- "Download" — primary verb. "Download Signal", "Download for [Platform]".
- "Get" — alternative primary. "Get Signal".
- "Donate" — nonprofit ask.
- "Read" — for docs, source code, whitepaper. "Read the docs", "Read the source code".
- "Learn" — for educational content. "Learn how Signal works".
- "Verify" — for security-related actions. "Verify safety number".

The brand explicitly avoids: "Buy", "Subscribe", "Sign up" (Signal has no signup — your phone number is your identity), "Free trial" (Signal is permanently free).

## 12. Dark Mode & Theming

The Signal **website (signal.org) is light-mode only**. The marketing surface stays paper-white throughout — there's no `prefers-color-scheme` toggle, no dark variant. The reasoning: signal.org is documentation-grade content that benefits from sustained light-mode reading; users coming to the site are typically researching the app, not chatting in it.

The Signal **mobile and desktop apps** offer system-respecting dark mode (the in-app dark theme), but that's a different surface from the marketing site.

If a dark mode were added to signal.org, the canvas would lift to `#0f1115` with `#e8eaee` body text. Signal Blue `#3a76f0` would brighten to `#5689f4` for AAA contrast on dark. Cards would shift to `#1c1f23` (the same colour the current footer uses). Borders to `#2e3138`. The cream donate callout would become a darker navy-cream `#2a2418`. But there's no public roadmap signal for it.

## 13. Lineage & Influences

Signal's visual lineage is three-streamed.

**The privacy-tooling tradition.** Signal is the descendant of Open Whisper Systems (founded 2013 by Moxie Marlinspike), and its visual language was always closer to a security-research website than to a consumer chat app. The single-blue palette, the dense body type, the citation-grade endorsement quotes from Snowden and EFF, the GitHub repos linked from every feature page — all descend from the privacy-tooling design tradition exemplified by EFF.org, Tor Project, Riseup.net, and Bruce Schneier's blog. The discipline is restraint: complex security claims rendered in plain prose with citations; no marketing-copy hyperbole; no design flourishes that could be misread as visual deception.

**The nonprofit-foundation web tradition.** Signal Foundation (501(c)(3), established 2018) joins a lineage of mission-driven nonprofit web design (Mozilla, Wikipedia, Khan Academy, ProPublica, EFF). The warm-cream donate callout, the explicit "Signal is funded entirely by grants and donations" copy, the EIN visible in the footer — all signal "we are nonprofit, your trust matters more than your transaction." The Donate CTA's slight-blue differentiation from the primary download CTA is the visual rhyme of Khan's same move.

**The modern-Inter web tradition.** Signal redesigned signal.org around 2020–2022 with Inter as its single typeface, joining the post-2018 wave of Inter-everywhere web design (Linear, Vercel, Together, Cohere, Anthropic, Notion's NotionInter). The aggressive negative tracking on display, the 1.6 body line-height, the pill-shaped primary CTA, the glass-blurred sticky nav — all conform to the modern-Inter web aesthetic. Signal commits to the genre rather than trying to differentiate within it; the differentiation is content-side, not visual-side.

What Signal rejects: dark mode on web, multi-color brand palette, decorative illustration, photographic hero imagery, celebrity testimonials (Snowden / EFF are political-credibility quotes, not marketing endorsements), discount stickers, free trials, e-commerce verbs, modal pop-overs.

**Influences:**
- **EFF (Electronic Frontier Foundation)** — privacy-tooling visual register, citation-grade endorsements, nonprofit foundation aesthetic. https://eff.org
- **Tor Project** — security-research-website visual conventions, single-purpose CTA discipline. https://torproject.org
- **Wikipedia** — paper-white nonprofit canvas, donate-blue CTA, mission-first voice. https://wikipedia.org
- **Linear / Vercel** — modern-Inter web aesthetic, glass nav, generous spacing. https://linear.app
- **Bruce Schneier's blog** — the typographic register Signal's body type aspires to. https://schneier.com
- **Khan Academy** — donate-CTA differentiation, nonprofit-warmth callout patterns. https://khanacademy.org

## 14. Do's and Don'ts

**Do:**
- Use `#3a76f0` for the primary CTA, wordmark, and brand surfaces — and `#234fb8` deeper blue for inline text links and outlined buttons (better contrast).
- Pair primary CTA with white text — at 16px / 600 the contrast is AA at body (large-text bracket).
- Round the primary CTA to full pill (`9999px`) at `52px` height with `14px 32px` padding — generous geometry signals "this is the conversion action."
- Round cards and feature blocks to `8px`.
- Apply a subtle `0 1px 3px rgba(28,31,35,0.06)` shadow on rest cards; deepen to `0 4px 12px rgba(28,31,35,0.08)` on hover. No scale.
- Set body type at 16px / 400 / 1.6 line-height — generous breath for security-concept explainers.
- Use Inter for everything — single-family discipline.
- Use 13px / 600 / `0.06em` uppercase eyebrows for section labels.
- Anchor every cryptographic claim with a "Read the docs →" or "Read the whitepaper →" citation link.
- Use the encryption-verified green pill 🔒 for visual reinforcement of the cryptographic claim.
- Use endorsement quotes from Snowden / EFF / Bruce Schneier — political-credibility signals, not celebrity-endorsement signals.
- Render the Signal Foundation 501(c)(3) status visibly in the footer with EIN — operational transparency.
- Use slightly differentiated `#2c6bed` for the Donate CTA — separates nonprofit ask from primary download verb.
- Maintain 96–128px section spacing — disciplined minimalism.
- Use 680px prose width on long-form pages — narrower than tech-product norm, closer to magazine column.

**Don't:**
- Don't use `#3a76f0` for inline body links — its 4.7:1 contrast on white only meets AA. Use `#234fb8` deeper blue for inline links.
- Don't add discount stickers, "free trial" copy, or pricing — Signal is permanently free.
- Don't use celebrity-instructor portrait heroes or auto-playing trailer videos — Signal's brand is restraint, not cinema.
- Don't introduce a multi-color brand palette — blue + green-for-encryption + neutral is the discipline.
- Don't use scale transforms on hover — Signal's elevation grows via shadow, not translation.
- Don't introduce a serif companion font — single-family Inter carries everything.
- Don't tighten display tracking past `-0.025em` — Signal is calm and considered, not condensed.
- Don't apply heavy shadows on cards (`> 0.15` opacity) — the elevation is whisper-soft.
- Don't add a "Sign up" CTA — Signal uses your phone number; there's no signup.
- Don't pair brand blue with multiple saturated secondary colours — green for encryption-verified is the only saturated accent.
- Don't gate "Download Signal" behind email collection — the conversion friction would betray the brand's privacy-first commitment.
- Don't add modal pop-overs or interstitial ads — Signal would never tolerate this on its app, and the marketing site reflects the same discipline.
- Don't render donate amounts as marketing-style "GIVE NOW! 50% MATCH!" — the warm-cream nonprofit-ask register is calm and explanatory.
- Don't make the body type smaller than 16px — Signal's audience reads carefully.

## 15. Agent Prompt Guide

### Quick Color Reference
- Canvas: `#ffffff`
- Warm Off-White: `#f8f9fa`
- Donate Cream: `#fef9e9`
- Signal Blue: `#3a76f0`
- Inline Link Deep Blue: `#234fb8`
- Donate Blue: `#2c6bed`
- Display Black: `#1c1f23`
- Muted: `#5b6068`
- Border: `#e0e3e8`
- Encryption Green: `#3eaa6c`
- Soft Blue Promo: `#e8efff`

### Example Component Prompts
1. "Create a Signal feature card — `#ffffff` background, `8px` radius, `1px solid #e0e3e8` border, `0 1px 3px rgba(28,31,35,0.06)` rest shadow, `32px` padding; 40px lock icon top in `#3a76f0`, 16px gap, 22px / 600 Inter `#1c1f23` 'End-to-end encryption' title, 8px gap, 16px / 400 / 1.6 `#1c1f23` description 'Your messages and calls are secured with the open-source Signal Protocol — even we can''t read them.' On hover: shadow deepens to `0 4px 12px rgba(28,31,35,0.08)` over 250ms, no scale."
2. "Design a Signal primary CTA — `9999px` full-pill radius, `#3a76f0` background, white 16px / 600 'Download Signal' label, `14px 32px` padding, `52px` height, hover bg `#2e62d8`, no shadow lift."
3. "Build a Signal hero — `#ffffff` background, 56px Inter 700-weight headline 'Speak Freely' in `#1c1f23` with `-0.025em` tracking, 18px / 400 / 1.6 `#5b6068` lead 'Say "hello" to privacy. Signal is the most trusted messaging app in the world.', primary Signal-blue full-pill CTA 'Get Signal' + outlined deeper-blue secondary 'Read the docs' inline. Pure paper-white background, no illustration, no gradient — just type and CTAs."
4. "Render a Signal endorsement quote card — `#ffffff` background, `8px` radius, `1px solid #e0e3e8` border, `32px` padding; 22px / 400 Inter `#1c1f23` quote text 'I use Signal every day.', 16px gap, attribution row with 40px circular portrait avatar of Edward Snowden left + 14px / 600 'Edward Snowden' + 14px / 400 muted '· NSA whistleblower'."
5. "Create a Signal donate band — `#fef9e9` warm-cream background, `12px` radius, `1px solid #f1c40f` border, `32px` padding; 36px / 700 'Help us build a better future for private communication.' headline, 16px / 400 / 1.6 explainer 'Signal is funded entirely by grants and donations from people like you. There are no advertisers or investors.', then amount chip row — pill-shaped chips at `#ffffff`/`#bcc0c7` border / `#1c1f23` text for default state, `#3a76f0` fill / white text for active state, options '$10 / $25 / $50 / $100 / $250 / Custom', then `#2c6bed` Donate-blue pill CTA 'Donate now' below."
6. "Build a Signal sticky top nav — 64px tall, `rgba(255,255,255,0.92)` bg with `backdrop-filter: blur(16px)`, `1px solid #e0e3e8` border-bottom; left: Signal whisper-mark + 'Signal' wordmark in 18px / 600 `#1c1f23`; centre: nav links 'Download / Donate / Blog / Developers' in 14px / 500 navy `#1c1f23`, 32px gaps; right: 'Get Signal' Signal-blue full-pill 14px / 600 white-text CTA at 40px height."

### Iteration Guide
1. **Slow down the type.** If body feels rushed, increase line-height to 1.6. Signal's brand is calm reading.
2. **Round the CTA fully.** If primary buttons feel boxy, force `9999px` radius. Signal's full-pill primary is the brand commitment.
3. **Single-family discipline.** Inter for everything. If a serif appears, audit and remove.
4. **Use deeper blue for inline links.** The brand `#3a76f0` doesn't pass AAA on white at body sizes. Switch to `#234fb8` deeper blue.
5. **Generous section spacing.** If the page feels packed, increase section padding to 96–128px. Signal breathes 2–3× more than typical SaaS.
6. **Cite every cryptographic claim.** If a privacy claim has no link, add a "Read the docs →" or "Read the whitepaper →" citation. Signal's brand requires citation-grade evidence.
7. **Donate is a slightly different blue.** If the Donate CTA accidentally went brand `#3a76f0`, switch to `#2c6bed` to differentiate the nonprofit ask from the primary download verb.
8. **No discount-sticker energy.** If a banner says "Get 50% off" or "Limited time", audit and remove. Signal is permanently free; sale-energy contradicts the brand.
