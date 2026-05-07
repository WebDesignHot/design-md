---
name: Character.AI
tagline: 'Cool zinc canvas, custom atHauss sans, and dark pill CTAs — a roleplay social product dressed in TikTok-grade neutrality.'
updated_at: 2026-05-05T20:18:33+12:00
published_at: 2026-05-03T16:32:19+12:00
author: webdesignhot
source_url: https://character.ai
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [ai, social]
tags: [light, sans, soft, structured, cool]
preview_swatch: ['#f4f4f5', '#202024', '#9b6cff']
related: [discord, notion, replicate]
description: 'Character.AI''s public-facing site uses a cool zinc-grey `#f4f4f5` canvas, a custom **atHauss** sans (a tight humanist face that resembles GT Walsheim with sharper terminals), and a near-black `#202024` pill CTA at 30px radius for the primary "Sign Up to Chat" call-to-action. Where roleplay/companion competitors lean into either glow-purple cyber aesthetics or kawaii pastel, Character.AI runs the *opposite* play — a TikTok/Discord-grade neutral with zinc surfaces, dark `#131316` social-login rectangles at 12px radius, and zero ornamentation. The signature lavender `#9b6cff` brand mark surfaces inside the product UI on character-card backgrounds and accent gradients, but the marketing site stays defiantly platform-coded. The result reads as platform infrastructure, not fandom, which is exactly the legitimacy posture a 10M-character marketplace needs.'

colors:
  # Primary
  bg: '#f4f4f5'                          # cool zinc-100 body bg — defining canvas
  bg-soft: '#fafafa'                     # softer surface for elevated panels
  bg-elevated: '#ffffff'                 # cards lift to white
  surface: '#ffffff'                     # default card surface
  surface-hover: '#f8f8f9'               # hover wash on white cards
  surface-strong: '#e4e4e7'              # zinc-200 strong panel
  text: '#26272b'                        # zinc-900 body text rgb(38,39,43)
  text-strong: '#0f0f12'                 # heading-strong, near-black with blue undertone
  text-medium: '#3f3f46'                 # zinc-700 secondary heading
  text-muted: '#6b6c70'                  # zinc-500 secondary copy
  text-soft: '#8a8b8f'                   # zinc-400 helper / metadata
  text-faint: '#a1a1a6'                  # zinc-300 disabled
  on-brand: '#fafafa'                    # off-white label on near-black CTA
  on-cta: '#fafafa'                      # off-white label on primary pill

  # Brand & Accent (lavender lives mostly in-product)
  brand: '#9b6cff'                       # Character lavender — in-product accent, marketing micro-use
  brand-strong: '#7e4cff'                # pressed lavender
  brand-deep: '#5a2ee0'                  # deep accent on white
  brand-soft: '#ede4ff'                  # tonal pill bg
  brand-faint: '#f7f2ff'                 # quietest lavender tint
  brand-glow: 'rgba(155, 108, 255, 0.32)' # in-product card-hover glow

  # CTA / Action chrome
  cta-bg: '#202024'                      # primary pill near-black with mild blue undertone
  cta-bg-strong: '#0f0f12'               # active / pressed state
  cta-text: '#fafafa'                    # off-white label
  social-bg: '#131316'                   # Google / Apple social-login button
  social-bg-hover: '#202024'             # hover collapses to primary CTA tone
  social-text: '#fafafa'                 # off-white label

  # Interactive
  link: '#202024'                        # near-black link colour, underline on hover
  link-hover: '#9b6cff'                  # lavender on hover only — the marketing site's only colour moment
  selected-bg: '#ede4ff'                 # selected character card / row
  disabled-bg: '#e4e4e7'                 # disabled control fill
  disabled-text: '#a1a1a6'               # disabled label

  # Borders
  border: 'rgba(38, 39, 43, 0.12)'       # zinc-tinted hairline (default)
  border-strong: 'rgba(38, 39, 43, 0.20)' # emphasized rule
  border-soft: 'rgba(38, 39, 43, 0.06)'  # quietest division
  border-focus: '#9b6cff'                # focus-ring lavender
  border-focus-cta: '#202024'            # focus-ring on light bgs near a CTA

  # Semantic
  success-bg: '#dcfce7'
  success-text: '#15803d'
  warning-bg: '#fef3c7'
  warning-text: '#854d0e'
  danger-bg: '#fee2e2'
  danger-text: '#b91c1c'
  info-bg: '#ede4ff'
  info-text: '#5a2ee0'

  # Shadow tints
  shadow-rgb: '38, 39, 43'               # zinc-900 tinted shadows
  shadow-glow: '155, 108, 255'           # lavender focus glow

typography:
  display:
    family: 'atHauss, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: ['ss01', 'liga', 'kern']
  body:
    family: 'atHauss, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 600]
    opentype-features: ['kern']
  mono:
    family: 'ui-monospace, "SF Mono", Menlo, Consolas, monospace'
    weights: [400, 500]
    opentype-features: ['tnum']
  scale:
    display-hero:    { size: 64, weight: 700, lineHeight: 1.05, tracking: '-1.28px', family: display }
    display:         { size: 48, weight: 600, lineHeight: 1.1,  tracking: '-0.96px', family: display }
    h1:              { size: 36, weight: 600, lineHeight: 1.15, tracking: '-0.72px', family: display }
    h2:              { size: 28, weight: 600, lineHeight: 1.2,  tracking: '-0.56px', family: display }
    h3:              { size: 24, weight: 600, lineHeight: 1.25, tracking: '-0.48px', family: display }
    h4:              { size: 20, weight: 600, lineHeight: 1.3,  tracking: '-0.4px',  family: display }
    h5:              { size: 18, weight: 500, lineHeight: 1.35, family: display }
    eyebrow:         { size: 12, weight: 600, lineHeight: 1.4,  tracking: '0.04em',   family: display, transform: uppercase }
    body-large:      { size: 18, weight: 400, lineHeight: 1.5,  family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.5,  family: body }
    body-small:      { size: 14, weight: 400, lineHeight: 1.5,  family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.4,  family: body }
    caption-tabular: { size: 13, weight: 500, lineHeight: 1.4,  family: mono, opentype: 'tnum' }
    label:           { size: 12, weight: 500, lineHeight: 1.3,  family: body }
    label-cta:       { size: 14, weight: 500, lineHeight: 1.2,  family: body }
    code:            { size: 13, weight: 400, lineHeight: 1.5,  family: mono }

radius:
  micro: 4
  sm: 8
  md: 12
  lg: 16
  xl: 20
  card: 16
  social: 12
  pill: 30                               # primary CTA pill radius (observed)
  pill-full: 9999

spacing:
  base: 4
  scale: [1, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96]

layout:
  page-width: 1200
  prose-width: 640
  hero-prose-width: 720
  site-gutter: 'clamp(16px, 4vw, 48px)'
  header-height: 64
  grid-columns: 12
  section-rhythm: '64-96px'

components:
  button-primary:
    background: '#202024'
    text: '#fafafa'
    padding: '12px 20px'
    radius: 30
    border: 'none'
    font: 'atHauss 500 / 14px'
    hover-bg: '#0f0f12'
    active-bg: '#000000'
    use: 'Sign Up to Chat — the headline pill carrying every primary entry into the product'
  button-social:
    background: '#131316'
    text: '#fafafa'
    padding: '12px 16px'
    radius: 12
    border: 'none'
    font: 'atHauss 500 / 14px'
    hover-bg: '#202024'
    use: 'Continue with Google / Continue with Apple — slightly darker, slightly squarer to read as platform-standard'
  button-secondary:
    background: '#ffffff'
    text: '#26272b'
    padding: '12px 20px'
    radius: 30
    border: '1px solid rgba(38, 39, 43, 0.12)'
    font: 'atHauss 500 / 14px'
    hover-bg: '#f8f8f9'
    use: 'Outlined twin — same pill shape, hairline border'
  button-ghost:
    background: 'transparent'
    text: '#26272b'
    padding: '8px 12px'
    radius: 12
    font: 'atHauss 500 / 14px'
    hover-bg: 'rgba(38, 39, 43, 0.06)'
    use: 'Quiet third action — nav links, inline actions'
  card-character:
    background: '#ffffff'
    border: '1px solid rgba(38, 39, 43, 0.08)'
    radius: 16
    padding: '12px'
    use: 'Character card in discovery rail — square avatar top, name + tagline below, 16px radius white panel'
  card-feature:
    background: '#ffffff'
    border: '1px solid rgba(38, 39, 43, 0.12)'
    radius: 16
    padding: '24px'
    use: 'Feature highlight card on marketing strip — generous padding, hairline border'
  input:
    background: '#ffffff'
    border: '1px solid rgba(38, 39, 43, 0.20)'
    radius: 12
    padding: '12px 16px'
    font: 'atHauss 400 / 16px'
    placeholder-color: '#8a8b8f'
    focus-ring: '0 0 0 2px #9b6cff'
    use: 'Email / username on sign-up sheet — 12px radius matches social-button radius'
  badge-tag:
    background: 'rgba(38, 39, 43, 0.06)'
    text: '#3f3f46'
    padding: '4px 10px'
    radius: 9999
    font: 'atHauss 500 / 12px'
    use: 'Character tag — Anime / Movie / Game category chip in discovery'
  badge-lavender:
    background: '#ede4ff'
    text: '#5a2ee0'
    padding: '4px 10px'
    radius: 9999
    font: 'atHauss 500 / 12px'
    use: 'In-product status pill — c.ai+ / Premium / New character indicator'
  modal-signup:
    background: '#ffffff'
    border: 'none'
    radius: 20
    padding: '32px'
    shadow: 'rgba(0, 0, 0, 0.12) 0 24px 48px -12px'
    use: 'Sign-up modal — 20px radius, soft shadow, contains primary pill + social rectangles'
  nav-link:
    background: 'transparent'
    text: '#26272b'
    padding: '8px 12px'
    font: 'atHauss 500 / 14px'
    hover-text: '#0f0f12'
    use: 'Top nav links — quiet zinc-900, no underline'
  avatar:
    background: '#ede4ff'
    radius: 9999
    use: 'Character / user avatar — circular, lavender fallback bg with initial in atHauss 500'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-out: 'cubic-bezier(0.16, 1, 0.3, 1)'
  ease-snappy: 'cubic-bezier(0.32, 0.72, 0, 1)'
  duration-instant: 80
  duration-fast: 120
  duration-standard: 200
  duration-slow: 320
  duration-page: 400
  reduced-motion: 'respects prefers-reduced-motion: reduce — translate transforms become opacity fades, durations halved, character-card hover lift disabled'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1440

shadows:
  none: 'none'
  ambient: 'rgba(38, 39, 43, 0.04) 0 1px 3px'
  standard: 'rgba(38, 39, 43, 0.08) 0 8px 24px -8px'
  elevated: 'rgba(38, 39, 43, 0.12) 0 16px 32px -12px'
  modal: 'rgba(0, 0, 0, 0.18) 0 24px 48px -12px'
  card-hover: 'rgba(38, 39, 43, 0.08) 0 12px 24px -8px'
  ring: '0 0 0 2px #9b6cff'
  ring-cta: '0 0 0 2px #ffffff, 0 0 0 4px #202024'

accessibility:
  contrast-text-on-bg: 13.1              # #26272b on #f4f4f5 — AAA at body sizes
  contrast-text-on-cta: 13.6             # #fafafa on #202024 — AAA
  contrast-text-on-social: 18.2          # #fafafa on #131316 — AAA
  contrast-text-muted-on-bg: 5.4         # #6b6c70 on #f4f4f5 — AA at body
  contrast-text-on-brand: 4.8            # #fafafa on #9b6cff — AA at body sizes
  focus-ring: '2px solid #9b6cff with 2px white offset on light surfaces; 2px solid #ffffff with 2px outer #202024 on dark CTAs'
  reduced-motion-honored: true
  keyboard-nav: 'visible focus on every interactive surface; modal sign-up sheet traps focus; ESC dismisses; tab order matches visual'
  prose-line-length: 'capped at 640px for marketing prose; 720px for hero copy'
  aria-patterns: 'Sign-up modal uses role=dialog + aria-modal=true + aria-labelledby; social buttons use proper button semantics with aria-label noting provider; character cards use role=link with descriptive aria-label combining character name + tagline'

dark-mode: optional                      # in-product UI ships a dark theme; marketing surface holds light

lineage:
  summary: 'Character.AI runs counter-positioning against its category. Where Replika, Janitor, Talkie lean into purple-glow cyber or kawaii pastel, Character.AI dresses itself in zinc-grey neutrality — a `#f4f4f5` Tailwind-zinc canvas, custom atHauss humanist sans, and a near-black `#202024` primary pill at 30px radius. Social-login rectangles drop to `#131316` at 12px radius — TikTok and Discord run almost identical login surfaces. The lavender `#9b6cff` brand mark surfaces only inside the product UI; the marketing site stays defiantly platform-coded. The play is legitimacy: a 10M-character marketplace presented as infrastructure.'
  influences:
    - name: Discord
      role: 'Dark social-login rectangles + neutral marketing surface as a model for "platform, not fandom"'
      url: https://discord.com
    - name: TikTok
      role: 'Zinc-neutral marketing pages and dark pill CTAs in a consumer-social register'
      url: https://www.tiktok.com
    - name: Notion
      role: 'Cousin in the off-white + custom-sans editorial register, though Character.AI runs cool-zinc rather than warm-cream'
      url: https://www.notion.com
    - name: Apple Sign-In + Google Sign-In
      role: '12px rectangle button conventions — Character.AI''s social buttons inherit the radius and dark fill'
      url: https://developer.apple.com/sign-in-with-apple/
    - name: Tailwind CSS zinc scale
      role: 'The `#f4f4f5` canvas is zinc-100; the entire grayscale ramp tracks Tailwind''s zinc tokens'
      url: https://tailwindcss.com
    - name: GT Walsheim
      role: 'Reference for atHauss''s humanist-with-sharp-terminals construction'
      url: https://www.schick-toikka.com/gt-walsheim
---

## 1. Visual Theme & Atmosphere

Character.AI's marketing surface opens onto a cool zinc-grey `#f4f4f5` canvas — the Tailwind zinc-100 hue lifted whole — with a 36px headline ("Get access to 10M+ Characters") set in custom **atHauss** at 600 weight and `-0.72px` tracking. The primary CTA is a near-black `#202024` pill at 30px radius; the social-login twins (Continue with Google, Continue with Apple) sit just below as slightly darker `#131316` rectangles at 12px radius. The chromatic and shape choices are deliberately understated for a roleplay product. The lavender brand accent that animates the in-product UI (`#9b6cff`) is barely visible on the marketing surface; instead the page reads as platform infrastructure — closer in posture to Discord or TikTok's developer pages than to a companion-AI competitor.

The strategic move is **counter-positioning**. Open Replika, Janitor, Pi, Talkie — the roleplay/companion category leans into either purple-glow cyber aesthetics that signal "fandom platform" or kawaii pastel that signals "imaginative play." Character.AI rejects both. The cool zinc canvas, the custom humanist sans (atHauss reads like GT Walsheim with sharper terminals), the near-black pill, and the dual-radius CTA system all signal *legitimacy*. The implicit promise: a 10M-character marketplace presented as infrastructure, with the imaginative work happening *inside the app*, not on the marketing page.

The dual-radius CTA pattern is the brand's most distinctive structural choice. Primary action is a **30px-radius pill** (almost fully rounded but not quite — a near-pill shape that reads as friendly without being cartoonish). Secondary social buttons are **12px-radius rectangles** — a 2.5× shape difference from the primary pill that creates immediate visual hierarchy. Most products use a single radius vocabulary; Character.AI's split is what gives the sign-up flow its distinct rhythm.

Atmospheric vocabulary: *zinc-platform, near-black-pill, social-rectangle, custom-humanist, lavender-restrained-to-product, TikTok-Discord-cousin, no-glow, no-cyber, legitimacy-not-fandom, 10M-marketplace.* The page reads as a platform's front door, not a roleplay portal.

**Key Characteristics**
- Cool zinc-100 `#f4f4f5` canvas — the Tailwind-borrowed defining surface
- Custom **atHauss** sans at 600 weight with `-0.72px` tracking on h1
- Near-black `#202024` primary pill at **30px radius** — the signature shape
- Darker `#131316` social-login rectangles at **12px radius** — dual-radius vocabulary
- Lavender `#9b6cff` reserved almost entirely for in-product UI
- Cards lift to white via tonal contrast, not shadow
- 16px card radius for character cards in discovery rails
- Single-family type system — no serif counterpoint, no mono on marketing
- Generous 1.5 line-height across body — humanist breathing room
- Counter-positioning against fandom register: zinc-neutral, not purple-cyber

## 2. Color Palette & Roles

### Primary

- **bg** `#f4f4f5` — cool zinc-100; the defining canvas, drawn straight from Tailwind's neutral-zinc scale.
- **text** `#26272b` — zinc-900 body text; warmer than `#000` but cooler than slate.
- **bg-soft** `#fafafa` — barely-grey for elevated bands.
- **surface** `#ffffff` — pure white card lift; cards always pop above the zinc bg.
- **cta-bg** `#202024` — near-black with mild blue undertone (the brand fingerprint). Primary CTA.
- **cta-text** `#fafafa` — off-white label, never pure white.

### Brand & Accent (lavender)

- **brand** `#9b6cff` — Character lavender; in-product card backgrounds, accent gradients, hover-glow on character tiles.
- **brand-strong** `#7e4cff` — pressed lavender.
- **brand-deep** `#5a2ee0` — accent text on white (badge text, link hover).
- **brand-soft** `#ede4ff` — tonal pill bg for status indicators (`c.ai+`, `Premium`).
- **brand-faint** `#f7f2ff` — quietest lavender tint, used as section background in promotional bands.
- **brand-glow** `rgba(155, 108, 255, 0.32)` — in-product card-hover glow effect.

### CTA / Action chrome (the dual-shape system)

- **primary-pill-bg** `#202024` — 30px radius, the headline action shape.
- **social-rectangle-bg** `#131316` — 12px radius, slightly darker.
- **outline-button-bg** `#ffffff` — 30px radius matching primary, hairline border.

The chromatic delta between `#202024` and `#131316` is small (visible only in close comparison) but intentional. The social buttons are *darker* than primary because they want to read as platform-standard (Apple SIWA + Google buttons are typically `#000` or near-black), while the primary CTA reads as the brand's own action.

### Interactive

- **link** `#26272b` — near-black, underline on hover.
- **link-hover** `#9b6cff` — lavender; the only chromatic moment on the marketing site.
- **selected-bg** `#ede4ff` — selected character card or row (in-product mostly).
- **disabled-bg** `#e4e4e7` — disabled control fill.
- **disabled-text** `#a1a1a6` — disabled label.
- **focus-ring** `#9b6cff` — 2px solid lavender with 2px white offset on light surfaces; on dark CTA focus uses a 2px white inner ring + 2px `#202024` outer.

### Neutral Scale (zinc ramp)

- **zinc-900** `#0f0f12` — heading-strong, the deepest text.
- **zinc-800** `#26272b` — primary body text.
- **zinc-700** `#3f3f46` — secondary heading emphasis.
- **zinc-500** `#6b6c70` — secondary copy, helper.
- **zinc-400** `#8a8b8f` — placeholder, soft caption.
- **zinc-300** `#a1a1a6` — disabled, faint metadata.
- **zinc-200** `#e4e4e7` — strong panel.
- **zinc-100** `#f4f4f5` — the canvas itself.

### Surface & Borders

- **surface-0 (page)** — `#f4f4f5` zinc-100.
- **surface-1 (panel)** — `#fafafa` lifted band.
- **surface-2 (card)** — `#ffffff` white card.
- **surface-3 (hover)** — `#f8f8f9` interactive hover.
- **border** `rgba(38, 39, 43, 0.12)` — zinc-tinted hairline (the default).
- **border-strong** `rgba(38, 39, 43, 0.20)` — emphasized rule.
- **border-soft** `rgba(38, 39, 43, 0.06)` — quietest division.

### Shadow Colors

Shadows on the marketing surface are **near-absent**. The sign-up modal is the one place a real shadow appears: `rgba(0, 0, 0, 0.18) 0 24px 48px -12px`. Card-hover gets a subtle zinc-tinted shadow only in-product. Elsewhere, depth is value contrast on zinc.

### Semantic

- **success** — `#dcfce7` / `#15803d`. Used for "Profile saved", "Character published".
- **warning** — `#fef3c7` / `#854d0e`. Used for moderation flags, age-gate warnings.
- **danger** — `#fee2e2` / `#b91c1c`. Used for blocked content, account suspension.
- **info** — `#ede4ff` / `#5a2ee0`. Reuses lavender pair — signals "Character.AI brand info".

## 3. Typography Rules

### Font Family

- **Display & Body**: **atHauss**, a custom humanist sans with sharp terminals (closer to GT Walsheim than to Inter or Söhne). Loaded with weights 400 / 500 / 600 / 700. The face has a slightly taller x-height than Inter, which is what gives Character.AI's body type its distinctive "modern but readable" cadence.
- **Fallback**: `ui-sans-serif → system-ui → -apple-system → Segoe UI → Roboto → Helvetica Neue → Arial → sans-serif`. The chain prioritises platform-default sans on every OS — keeping the marketing surface looking native to the user's device when atHauss fails to load.
- **Mono**: System mono only (`ui-monospace, "SF Mono", Menlo, Consolas, monospace`). Character.AI does not ship a custom mono and barely uses mono on the marketing surface — a single weight 400 / 500 only.
- **OpenType features**: `kern` always; `ss01` on display (cleaner alt-`a`); `tnum` on the rare tabular number block (in-product analytics).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display-hero | atHauss | 64 | 700 | 1.05 | -1.28px | ss01 | Marketing landing hero (rare) |
| display | atHauss | 48 | 600 | 1.1 | -0.96px | — | Section openers |
| h1 | atHauss | 36 | 600 | 1.15 | -0.72px | — | Standard hero ("Get access to 10M+ Characters") |
| h2 | atHauss | 28 | 600 | 1.2 | -0.56px | — | Section heading |
| h3 | atHauss | 24 | 600 | 1.25 | -0.48px | — | Subsection / card heading |
| h4 | atHauss | 20 | 600 | 1.3 | -0.4px | — | Inline heading |
| h5 | atHauss | 18 | 500 | 1.35 | normal | — | Lead-in |
| eyebrow | atHauss | 12 | 600 | 1.4 | 0.04em | uppercase | Section label |
| body-large | atHauss | 18 | 400 | 1.5 | normal | — | Lede |
| body | atHauss | 16 | 400 | 1.5 | normal | — | Default body |
| body-small | atHauss | 14 | 400 | 1.5 | normal | — | Secondary copy |
| caption | atHauss | 13 | 400 | 1.4 | normal | — | Helper text |
| caption-tabular | mono | 13 | 500 | 1.4 | normal | tnum | Token / metric |
| label | atHauss | 12 | 500 | 1.3 | normal | — | Form labels, tags |
| label-cta | atHauss | 14 | 500 | 1.2 | normal | — | Button text |
| code | mono | 13 | 400 | 1.5 | normal | — | API doc inline (rare) |

### Principles

- **Negative tracking on display, generous on body.** Headlines compress at `-0.72px` to `-1.28px`; body holds at normal tracking with 1.5 line-height — the gap is the tone.
- **600 is the heading weight.** atHauss at 600 reads as confident-but-friendly; 700 is reserved for the rare display-hero. Never go below 500 for h1-h4.
- **Single-family type system.** No serif pull-quotes, no editorial counter-voice. The marketing surface speaks in one humanist register.
- **Body line-height of 1.5 on a 16px base.** Standard humanist breathing room — comfortable for the long character-bio paragraphs.
- **Mono is rare.** Only used for in-product token counts or metric numbers. No mono badges on marketing.
- **Letter-spacing in pixels on display.** atHauss tracking values are quoted in `-0.72px` not `-0.02em` — the px-anchored spec is the brand's house style.
- **No italic body emphasis.** Use weight 500 on body for emphasis; italic is reserved for in-product character action descriptors like *Charlie laughs*.

## 4. Component Stylings

### Buttons

**Primary pill (30px radius)** — `#202024` bg, `#fafafa` text, atHauss 500 / 14px, padding `12px 20px`. Hover deepens to `#0f0f12`; active to `#000000`. The "Sign Up to Chat" pill is the headline action across every entry point.

**Social rectangle (12px radius)** — `#131316` bg, `#fafafa` text, atHauss 500 / 14px, padding `12px 16px`. Hover collapses to `#202024` (matching primary). Used for Continue with Google / Continue with Apple. The shape difference from primary pill is intentional — social buttons read as platform-standard.

**Secondary outlined pill (30px radius)** — `#ffffff` bg, `#26272b` text, `1px rgba(38, 39, 43, 0.12)` border, atHauss 500 / 14px. Same radius as primary but inverted chrome.

**Ghost (12px radius)** — transparent, `#26272b` text, hover wash `rgba(38, 39, 43, 0.06)`. Used for nav links and inline actions.

### Cards

**Character card** — `#ffffff` bg, `1px rgba(38, 39, 43, 0.08)` border, **16px radius**, `12px` padding. Layout: square avatar top (16px radius matching card), character name in atHauss 600 / 14px below, tagline in atHauss 400 / 13px / `#6b6c70`. Hover lifts: `rgba(38, 39, 43, 0.08) 0 12px 24px -8px` shadow with subtle `1.02` scale (in-product only).

**Feature card** — `#ffffff` bg, `1px rgba(38, 39, 43, 0.12)` border, 16px radius, `24px` padding. Used in marketing strip for product highlights.

### Badges, Tags, Pills

**Tag chip (neutral)** — `rgba(38, 39, 43, 0.06)` bg, `#3f3f46` text, atHauss 500 / 12px, pill radius (9999). Used for character tags: `Anime`, `Movie`, `Game`, `Anime Game Character`.

**Lavender status pill** — `#ede4ff` bg, `#5a2ee0` text, atHauss 500 / 12px, pill radius. Used for `c.ai+`, `Premium`, `New`. The lavender appears here.

### Inputs & Forms

**Default input** — `#ffffff` bg, `1px rgba(38, 39, 43, 0.20)` border, **12px radius**, `12px 16px` padding, atHauss 400 / 16px, `#8a8b8f` placeholder. Focus ring `0 0 0 2px #9b6cff` with 2px white offset. The 12px radius matches social-button radius (forms read as platform-grade).

**Form labels** — atHauss 500 / 14px, `#26272b`, `8px` margin-bottom from input.

**Helper text** — atHauss 400 / 13px, `#6b6c70`, `4px` margin-top from input.

**Error state** — border `#fee2e2`; helper text flips to `#b91c1c`.

### Navigation

**Top nav** — 64px header height, `#f4f4f5` bg (matches page), no border, no shadow. Wordmark left in atHauss 600. Nav links right at atHauss 500 / 14px / `#26272b`. Right-most cluster: ghost "Log in" button + primary "Sign Up" pill.

**Footer nav** — flat list set in atHauss 400 / 14px / `#6b6c70`, 4-column grid on desktop.

### Modal / Sign-up sheet

**Sign-up modal** — `#ffffff` bg, **20px radius** (slightly larger than card radius), `32px` padding, `rgba(0, 0, 0, 0.18) 0 24px 48px -12px` shadow. Backdrop `rgba(38, 39, 43, 0.6)`. Contains primary pill at top + social rectangles below + "Continue as guest" ghost link at bottom. Initial focus on first input; ESC dismisses.

### Avatars

**Character avatar** — 9999 radius circle, `#ede4ff` lavender fallback bg with character initial in atHauss 500. Sizes ladder: 32 / 40 / 48 / 64 / 96px.

### Tooltips

**Tooltip** — `#202024` bg, `#fafafa` text, 8px radius, atHauss 400 / 13px, `8px 12px` padding, `200ms` fade-in.

### Toasts

**Toast** — `#ffffff` bg, `1px rgba(38, 39, 43, 0.12)` border, 12px radius, ambient shadow, `12px 16px` padding. Slide-up from bottom, `320ms` ease-out.

## 5. Layout Principles

### Spacing System

Base unit **4px**. Scale: `1, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96`. Component padding lives in 8–24; section padding in 64–96. Slightly denser than infrastructure-AI brands (Cartesia, Anthropic) to signal "social platform, not paper preview."

### Grid & Container

- **Page max-width**: 1200px, centred, `clamp(16px, 4vw, 48px)` site gutter.
- **Hero prose-width**: 720px max.
- **Marketing prose-width**: 640px (denser than infrastructure prose).
- **Grid columns**: 12, 24px gutter.
- **Character discovery rail**: 4-up grid on desktop, 3-up tablet, 2-up mobile.
- **Feature grid**: typically 3-up for marketing strip.

### Whitespace Philosophy

Between sections: 64–96px on desktop, 48px on mobile — denser than infrastructure brands. The page is sign-up-gated; the marketing strip below is intentionally compact, designed to be scrolled past quickly to reach the auth flow.

### Section Cadence

The page alternates **`#f4f4f5` zinc canvas** and **`#ffffff` white** bands every 1–2 sections to chunk the narrative. There is no dark band on marketing — dark surfaces live in-product (chat UI, character editor).

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| Micro | 4px | Inline tags, dense form chips |
| Small | 8px | Tooltips, inline pills |
| Medium | 12px | Inputs, social-rectangle CTAs, ghost buttons |
| Card | 16px | Character cards, feature cards, default panels |
| Large | 20px | Modal sheets, large promotional cards |
| Pill | 30px | Primary CTA pill — the brand signature |
| Pill-full | 9999px | Status badges, character tags, avatars |

The dual primary radii — **30px pill + 12px social rectangle** — are the brand's structural fingerprint. Most products run a single radius vocabulary; Character.AI's split creates immediate hierarchy in the sign-up CTA cluster. Don't collapse the difference.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow, no border | Page bg, zinc canvas |
| 1 (hairline) | `1px rgba(38, 39, 43, 0.08–0.12)` border, no shadow | Cards, inputs |
| 2 (tonal) | White card on zinc bg, no shadow | Default character card lift |
| 3 (ambient) | `rgba(38, 39, 43, 0.04) 0 1px 3px` | Toasts (subtle) |
| 4 (elevated) | `rgba(38, 39, 43, 0.12) 0 16px 32px -12px` | Card-hover in-product, tooltip |
| 5 (modal) | `rgba(0, 0, 0, 0.18) 0 24px 48px -12px` | Sign-up modal sheet |

### Shadow Philosophy

Character.AI's marketing surface is **flat-on-zinc**. Cards lift via white-on-zinc-100 value contrast, not blur. The only place a real shadow appears is the sign-up modal. In-product, the character-card hover gets a subtle zinc-tinted shadow plus a 1.02 scale — but that's a product UI move, not a marketing one. Shadows are zinc-tinted (never neutral black, never lavender).

## 8. Interaction & Motion

### Easing curves

- **Standard** — `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, focus.
- **Emphasized** — `cubic-bezier(0.2, 0, 0, 1)` — incoming elements (modal opens, toasts).
- **Out** — `cubic-bezier(0.16, 1, 0.3, 1)` — overshoot-free decelerate.
- **Snappy** — `cubic-bezier(0.32, 0.72, 0, 1)` — character-card hover lift, scale transitions.

### Duration buckets

- **Instant** — 80ms — focus ring, button press.
- **Fast** — 120ms — hover bg shift, link underline reveal.
- **Standard** — 200ms — default transition.
- **Slow** — 320ms — card hover lift, modal opens.
- **Page** — 400ms — route transition between marketing pages.

### Per-component micro-states

- **Primary pill hover** — bg shifts `#202024 → #0f0f12` over `120ms ease-standard`. No translate.
- **Social rectangle hover** — bg shifts `#131316 → #202024` over `120ms`. The chromatic collapse to primary CTA tone signals "this is a primary path too."
- **Character card hover** — translate Y `-2px` + ambient shadow + 1.02 scale (in-product) over `320ms ease-snappy`. Marketing version stays static.
- **Link hover** — colour shift `#26272b → #9b6cff` over `120ms`. The lavender is the brand peeking through.
- **Input focus** — 2px lavender ring fades in `80ms`; border colour swaps to `#9b6cff` simultaneously.
- **Modal open** — backdrop fades 0 → 0.6 over `200ms`; modal scales `0.96 → 1` + translates Y `+8px → 0` over `320ms ease-emphasized`.

### Page transitions

Marketing pages are mostly static; section anchors use `scroll-behavior: smooth` over `400ms`. In-product chat transitions use a fade-through pattern with `ease-out`.

### Reduced-motion strategy

`prefers-reduced-motion: reduce` is fully honoured. Translate transforms become opacity fades. Scale animations become opacity-only. Durations halve. Smooth scroll disables. Character card hover lift disables entirely.

## 9. Accessibility & A11y

### Contrast pairs (computed)

| Pair | Ratio | WCAG |
|---|---|---|
| `#26272b` on `#f4f4f5` (body) | 13.1:1 | AAA |
| `#fafafa` on `#202024` (CTA) | 13.6:1 | AAA |
| `#fafafa` on `#131316` (social) | 18.2:1 | AAA |
| `#6b6c70` on `#f4f4f5` (muted) | 5.4:1 | AA at body |
| `#fafafa` on `#9b6cff` (lavender CTA) | 4.8:1 | AA at body |
| `#5a2ee0` on `#ede4ff` (badge) | 7.2:1 | AAA |
| `#3f3f46` on `rgba(38,39,43,0.06)` flat (tag) | 9.0:1 | AAA |

### Focus indicators

**2px solid `#9b6cff`** with **2px white offset** on light surfaces. On dark CTAs (where lavender wouldn't read) the focus uses **2px white inner ring + 2px outer `#202024`** — this is the Stripe-derived pattern adapted for Character.AI's dual-shape CTA system.

### ARIA patterns

- **Sign-up modal** — `role="dialog"` + `aria-modal="true"` + `aria-labelledby` referencing the modal title + `aria-describedby` for the lede. Initial focus on first input; ESC dismisses; tab cycles within modal.
- **Character card (link)** — `role="link"` with `aria-label` combining character name + tagline + interaction count for screen readers.
- **Social buttons** — proper `<button>` semantics with `aria-label="Continue with Google"` (the visible "Continue with Google" text suffices, but explicit aria-label is defensive).
- **Tag chips** — `role="button"` (when filterable) with `aria-pressed` to indicate selected state.
- **Tooltips** — `role="tooltip"` + `aria-describedby` on trigger.

### Keyboard navigation

- Tab order matches reading order — wordmark, nav links, primary CTA, hero, feature strip, footer.
- ESC dismisses modals, tooltips, dropdowns.
- Enter activates links, primary buttons; Space activates buttons.
- Arrow keys move within character-card discovery rail when focus enters the rail.
- Skip-to-content link on first Tab.

### Screen reader hints

- Character cards announce: `[Character Name], [Tagline], [N] interactions, [Tag list]`.
- Lavender brand mark uses `aria-hidden="true"` for decorative SVG; visible "Character.AI" wordmark remains.
- The 30px-radius primary pill and 12px social rectangle both render as standard `<button>` — no custom ARIA needed beyond labels.

### Reduced motion

Honoured globally. See §8.

## 10. Responsive Behavior

### Breakpoints

| Name | Min-width | Notes |
|---|---|---|
| mobile | 0 | Single column, 16px gutter, hero copy at 28px |
| tablet | 640px | 2-up character grid, hero at 32px |
| desktop | 1024px | 3-up grid, hero at 36px |
| wide | 1280px | 4-up character discovery, full nav visible |
| max | 1440px | Container caps at 1200px |

### Touch targets

All interactive elements honour **44×44px minimum**. The primary pill at `12px 20px` padding renders at ~44px tall. Social buttons at the same padding render at ~44px. Character cards on mobile expand their hit area to the full card.

### Collapsing strategy

- **Hero** — single-column on mobile (copy → CTA → social buttons stacked). Desktop has a side illustration in some variants.
- **Character discovery rail** — 4 → 3 → 2 columns by breakpoint.
- **Feature grid** — 3-up desktop, 2-up tablet, 1-up mobile.
- **Top nav** — links collapse into a hamburger drawer at <1024px; primary "Sign Up" pill remains visible in the header.
- **Sign-up modal** — desktop modal becomes a full-page sheet on mobile, sliding up from the bottom.

### Image behaviour

- All character avatars are AVIF with WebP fallback.
- `loading="lazy"` on every below-the-fold avatar.
- `aspect-ratio: 1` on avatar containers prevents CLS.
- Hero illustration centre-aligns and caps at 480px on mobile.

### Container queries

Used on the character card — at `@container (max-width: 200px)` the avatar shifts to a 16:9 aspect (rare condensed state).

## 11. Content & Voice

### Tone

**Approachable, platform-neutral, slightly playful in-product.** The marketing surface speaks the way Discord and TikTok speak about themselves to new users — enthusiastic without being childish, clear about the product, leaving the imaginative work for inside the app. "Get access to 10M+ Characters" — direct, scaled, factual.

In-product the tone shifts to support **roleplay register**: the character speaks in their own voice, action descriptors are italicised (*Sherlock raises an eyebrow*), the platform stays out of the way.

### Microcopy patterns

- **Button verbs (marketing)** — "Sign Up to Chat", "Continue with Google", "Continue with Apple", "Log in", "Try the app".
- **Button verbs (in-product)** — "Send", "Regenerate", "New chat", "Save", "Publish character".
- **Error messages** — `[Field]: [problem].` Example: "Email: please enter a valid email address."
- **Success confirmations** — minimal: "Saved", "Published", "Sent".
- **Empty states** — "Start chatting with [Character]" / "No conversations yet. Find your first Character below."
- **Moderation copy** — clear, non-judgemental: "This message was hidden for safety. [Learn more]."

### CTA verb conventions

The brand uses **specific** verbs:

1. **Sign Up to Chat** — top hero, the canonical conversion phrase.
2. **Continue with [Provider]** — social path, follows OAuth conventions.
3. **Try the app** / **Open the app** — secondary, for users who already have accounts.
4. **Explore Characters** — discovery entry, used on logged-out marketing.

Avoided: *Discover*, *Unlock*, *Get started* (too vague), *Join now* (too sales-y).

### Empty states

- Empty conversation list: "No conversations yet. Find your first Character below."
- Empty character grid: "We couldn't find characters matching that search. Try a different keyword."
- Empty saved characters: "Save your favourite Characters here for quick access."

### Tone anchors

- Direct about scale ("10M+ Characters") because scale is the brand's product-market fit.
- Use second person ("you", "your") in marketing — it's a consumer product.
- Avoid corporate/enterprise verbs (no "leverage", "robust", "innovative").
- In-product, let characters do the talking — Character.AI's voice is the platform's voice; the character's voice is the user's voice.

## 12. Dark Mode & Theming

The marketing surface is **light-only**. The in-product UI ships a **dark theme** that flips the canvas to `#0f0f12` (zinc-950 with blue undertone, matching the primary CTA's pressed state) with text at `#fafafa` and lavender accents shifting to a slightly desaturated `#a784ff` for body-level contrast.

### In-product dark theme tokens

```yaml
colors-dark:
  bg: '#0f0f12'                    # zinc-950 with blue undertone
  bg-soft: '#1a1a1f'
  surface: '#202024'               # cards on zinc-950
  surface-hover: '#2a2a30'
  text: '#fafafa'
  text-muted: '#a1a1a6'
  text-soft: '#6b6c70'
  brand: '#a784ff'                 # desaturated lavender for dark
  brand-soft: '#2a1f4a'
  cta-bg: '#fafafa'                # CTA inverts on dark — light pill
  cta-text: '#0f0f12'
  border: 'rgba(250, 250, 250, 0.12)'
  border-strong: 'rgba(250, 250, 250, 0.20)'
```

The dark theme inverts the CTA — primary action becomes a `#fafafa` light pill on dark, mirroring the light-mode dark-pill. This preserves the brand's pill-shape vocabulary across themes.

The marketing surface holds **light** because sign-up flows are higher conversion on light bgs; dark is reserved for the chat product where users spend hours reading.

## 13. Lineage & Influences

Character.AI runs **counter-positioning** against its category. Where Replika, Janitor, Talkie, and similar roleplay/companion products lean into purple-glow cyber or kawaii-pastel aesthetics that signal "fandom platform," Character.AI dresses itself in **zinc-grey neutrality**: a `#f4f4f5` canvas borrowed from Tailwind's zinc scale, a custom **atHauss** sans (humanist with sharp terminals, closer to GT Walsheim than Inter), and a near-black `#202024` primary pill at 30px radius. The social-login rectangles drop to a darker `#131316` at 12px radius — TikTok and Discord run almost identical login surfaces, and Character.AI is signalling membership in *that* register, not in the fandom one.

The lavender `#9b6cff` brand mark surfaces only inside the product UI; the marketing site stays defiantly neutral. The play is legitimacy: a 10M-character marketplace presented as infrastructure, with the implicit promise that the imagination happens *inside the app*, not on the marketing page.

The dual-radius CTA system (30px pill + 12px rectangle) is structurally borrowed from Apple Sign-In + Google Sign-In conventions — Character.AI extends those platform-button shapes onto its own primary pill, creating a sign-up flow that visually integrates with the platform-standard auth UX.

**Named influences**:
- **Discord** ([https://discord.com](https://discord.com)) — Dark social-login rectangles + neutral marketing surface as a model for "platform, not fandom."
- **TikTok** ([https://www.tiktok.com](https://www.tiktok.com)) — Zinc-neutral marketing pages and dark pill CTAs in a consumer-social register.
- **Notion** ([https://www.notion.com](https://www.notion.com)) — Cousin in the off-white + custom-sans editorial register, though Character.AI runs cool-zinc rather than warm-cream.
- **Apple Sign-In + Google Sign-In** — 12px rectangle button conventions; Character.AI's social buttons inherit the radius and dark fill.
- **Tailwind CSS zinc scale** ([https://tailwindcss.com](https://tailwindcss.com)) — The `#f4f4f5` canvas is zinc-100; the entire grayscale ramp tracks Tailwind's zinc tokens.
- **GT Walsheim / Schick Toikka** — Reference for atHauss's humanist-with-sharp-terminals construction.

## 14. Do's and Don'ts

### Do

- **Keep the canvas cool zinc (`#f4f4f5`).** Warm cream collapses Character.AI into the Anthropic/Notion register and weakens the platform posture.
- **Pair the 30px primary pill with 12px social-login rectangles.** The dual-shape ladder is part of the brand recognition.
- **Use atHauss at 600 for headlines** with `-0.72px` tracking. The negative tracking gives the marketing the slight authority it needs.
- **Reserve lavender `#9b6cff` for in-product accents and link-hover.** The marketing site stays neutral.
- **Use `#202024` for primary CTA, `#131316` for social.** The chromatic delta is small but intentional.
- **Honour the 16px card radius for character cards.** It's softer than the 12px input radius — friendly without being cartoonish.
- **Use white-on-zinc value contrast for card lift.** No drop shadow.
- **Set the focus ring as 2px `#9b6cff` with 2px white offset.** Lavender is the brand's accessibility colour.
- **Italicise character action descriptors in-product** (*Charlie laughs*) — that's the roleplay register.
- **Honour `prefers-reduced-motion`.** Card hover scale + translate disable when user opts out.

### Don't

- **Don't introduce purple-glow or cyber aesthetics on the marketing page.** That register belongs to the roleplay competitor set.
- **Don't drop shadows on cards on the marketing surface.** Depth is value contrast on zinc.
- **Don't soften the dark CTAs to dark-grey or navy.** `#202024` near-black with mild blue undertone is the signature.
- **Don't collapse the dual radius (30px + 12px) into a single shape.** The split is structural to the brand.
- **Don't use atHauss at 700 unless absolutely necessary.** 600 is the default; 700 is reserved for display-hero.
- **Don't use kawaii/pastel illustrations.** Character art is character-illustration-grade (in-product), not illustration-cute.
- **Don't write marketing copy in the first person ("we").** The brand speaks in second person to the user.
- **Don't add a third radius to the primary CTA cluster.** Pill + rectangle is the rule.
- **Don't introduce a serif counter-voice** (no editorial pull-quotes). Single-family humanist throughout.
- **Don't use Tailwind slate or gray instead of zinc.** Zinc has the cool-blue undertone; slate is too neutral, gray is too warm.
- **Don't add gradient backgrounds on the marketing surface.** Solid zinc and white only.
- **Don't lavender-fill the primary CTA.** Lavender is for hover, badge, and in-product chrome — never the headline pill.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg:             #f4f4f5
surface:        #ffffff
text:           #26272b
text-muted:     #6b6c70
cta-bg:         #202024
cta-text:       #fafafa
social-bg:      #131316
brand-lavender: #9b6cff
brand-soft:     #ede4ff
border:         rgba(38, 39, 43, 0.12)
```

### Example Component Prompts

1. *"Create a Character.AI-style sign-up hero: zinc-100 `#f4f4f5` canvas, headline 'Get access to 10M+ Characters' in atHauss 600 / 36px / -0.72px tracking / `#26272b`. Below the headline: a primary `#202024` pill 'Sign Up to Chat' at 30px radius / `#fafafa` text / 12px 20px padding. Then two social buttons stacked — `#131316` rectangles at 12px radius / `#fafafa` text / 12px 16px padding — labelled 'Continue with Google' and 'Continue with Apple'. Below: a 'Log in' ghost link at 12px radius."*

2. *"Design a Character.AI-style character discovery card: white `#ffffff` panel, 16px radius, `1px rgba(38, 39, 43, 0.08)` border, 12px padding. Square avatar at top (16px radius matching card), character name in atHauss 600 / 14px below, 1-line tagline in atHauss 400 / 13px / `#6b6c70` below that, then a tag chip row using `rgba(38, 39, 43, 0.06)` bg / `#3f3f46` text at pill radius."*

3. *"Build a Character.AI-style sign-up modal: white background, 20px radius, `rgba(0, 0, 0, 0.18) 0 24px 48px -12px` shadow, 32px padding. Backdrop `rgba(38, 39, 43, 0.6)`. Heading 'Welcome to Character.AI' in atHauss 600 / 24px. Email input at 12px radius / `1px rgba(38, 39, 43, 0.20)` border. Then primary pill 'Continue' at 30px radius. Below: divider 'OR' then social rectangles."*

4. *"Create a Character.AI-style discovery rail: 4-column grid on desktop (1200px container), 24px gutter. Each cell is a character card (white panel / 16px radius / hairline border). Above the rail: a section title in atHauss 600 / 28px and an eyebrow above that in atHauss 600 / 12px / uppercase / 0.04em tracking / `#6b6c70`."*

5. *"Build a Character.AI-style nav bar: 64px height, `#f4f4f5` bg matching page, no border. Wordmark left ('character.ai' in atHauss 600 / 18px). Right cluster: nav links in atHauss 500 / 14px (`#26272b`), then ghost 'Log in' button (transparent, 12px radius), then primary `#202024` pill 'Sign Up' at 30px radius."*

6. *"Design a Character.AI-style chat row (in-product, dark theme): `#0f0f12` bg, character avatar circle 40px on the left (lavender `#ede4ff` fallback). Character name in atHauss 600 / 14px / `#fafafa`, message in atHauss 400 / 16px / `#fafafa` / 1.5 line-height below. Action descriptors *italicised* in `#a1a1a6`. Hover row bg `#1a1a1f`."*

### Iteration Guide

1. **Start with the canvas at `#f4f4f5`.** If your bg is white or warm-cream, you're in the wrong brand register.
2. **Verify the dual-radius CTA pattern.** Primary at 30px pill, social at 12px rectangle — both must coexist in the sign-up cluster.
3. **Replace any "Discover" or "Get started" CTA copy with "Sign Up to Chat".** That's the canonical phrase.
4. **Set headlines in atHauss 600 with `-0.72px` tracking.** Not Inter, not 700.
5. **Audit lavender usage — keep it to in-product accents, badges, link-hover.** Don't lavender-fill the CTA.
6. **Verify card radius is 16px, not 12px or 20px.** Character cards are softer than inputs, gentler than modals.
7. **Confirm no gradient backgrounds.** Solid zinc and white only.
8. **Replace any drop-shadow card lift with white-on-zinc value contrast.** Shadows live on the modal only.
