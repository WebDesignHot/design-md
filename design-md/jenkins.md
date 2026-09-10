---
name: "Jenkins"
tagline: "Open automation with a familiar mascot and a modern technical shell."
updated_at: 2026-08-23T11:57:43.376Z
published_at: 2026-08-23T11:57:43.376Z
author: webdesignhot
source_url: "https://www.jenkins.io/"
spec: webdesignhot/0.2
profile: catalog
quality: curated
featured: false
categories: [oss, dev-tools]
tags: [oss, ci-cd, automation, plugins, developer-tools]
preview_swatch: ["#ffffff", "#0d6efd", "#000c1a"]
related: [gitlab, github, docker]
description: "Jenkins combines a dark utility header, a large Georgia wordmark, the Jenkins butler mascot, blue task buttons, red identity details, a light technical hero, and vivid community feature bands. Preserve the human, open-source character while keeping pipelines, plugins, downloads, and documentation operationally clear."

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent-red
  muted: text-soft
  border: border
  ring: focus

colors:
  bg: "#ffffff"
  surface: "#f5f7f9"
  text: "#000c1a"
  brand: "#0d6efd"
  on-brand: "#ffffff"
  border: "#dce2e8"
  text-soft: "#586674"
  nav: "#212529"
  on-nav: "#ffffff"
  accent-red: "#d33833"
  accent-orange: "#ef6c35"
  focus: "#084298"

typography:
  display:
    family: "Georgia, Times New Roman, serif"
    weights: [400, 700]
  body:
    family: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    weights: [400, 500, 600, 700]
  mono:
    family: "ui-monospace, SFMono-Regular, Menlo, monospace"
    weights: [400, 500]
  scale:
    display-hero: { size: 64, weight: 700, lineHeight: 1.05, tracking: '0', family: display }
    display-lg: { size: 44, weight: 700, lineHeight: 1.1, tracking: '0', family: display }
    h1: { size: 38, weight: 700, lineHeight: 1.15, tracking: '0', family: display }
    h2: { size: 32, weight: 700, lineHeight: 1.2, tracking: '0', family: body }
    h3: { size: 24, weight: 600, lineHeight: 1.25, tracking: '0', family: body }
    body-lg: { size: 18, weight: 400, lineHeight: 1.6, tracking: '0', family: body }
    body: { size: 16, weight: 400, lineHeight: 1.66, tracking: '0', family: body }
    body-sm: { size: 14, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    label: { size: 14, weight: 600, lineHeight: 1.4, tracking: '0', family: body }
    caption: { size: 12, weight: 500, lineHeight: 1.4, tracking: '0', family: body }

radius:
  micro: 2
  sm: 4
  md: 8
  lg: 10
  xl: 14
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96]

layout:
  page-width: 1240
  prose-width: 760
  header-height: 58

motion:
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 120
  duration-standard: 220
  duration-slow: 380
  reduced-motion: 'disable carousel movement and show one complete static feature'

breakpoints:
  mobile: 640
  tablet: 960
  desktop: 1280
  wide: 1536

components:
  button-primary: { bg: brand, text: on-brand, padding: '10px 16px', radius: 10 }
  button-ghost: { bg: surface, text: text, border: border, padding: '10px 16px', radius: 10 }
  card: { bg: bg, border: border, radius: 10, padding: 24 }
  input: { bg: bg, border: border, text: text, radius: 10, padding: '9px 12px' }

lineage:
  summary: "Recorded from the live Jenkins homepage during the 2026-08-23 catalog audit."
  influences:
    - name: "Jenkins public site"
      role: "Supplied the dark utility header, Georgia display name, butler mascot, blue task controls, open-source navigation, and vivid feature carousel."
      url: "https://www.jenkins.io/"
---

## 1. Visual Theme & Atmosphere

Jenkins is human, recognizable, and operational. A dark utility header organizes a large open-source ecosystem, while a light hero pairs the butler mascot with a 64px Georgia name, a concise automation promise, and direct Download and Documentation actions.

Below the hero, vivid orange-red feature bands bring community energy. The mascot and color create warmth, but pipeline, plugin, security, and release information must remain more important than illustration.

**Key Characteristics**
- Jenkins butler as the main visual signature
- Dark compact utility navigation
- Large Georgia product name
- Blue task-oriented buttons
- Red bow-tie and identity accent
- Light technical hero
- Vivid community feature bands
- Search and documentation always reachable

## 2. Color Palette & Roles

Use white and #f5f7f9 for the main canvas, #000c1a for reading, and #0d6efd for primary actions. The dark #212529 header frames navigation. Jenkins red #d33833 and orange #ef6c35 support identity and feature storytelling, not ordinary status semantics.

## 3. Typography Rules

Use Georgia for the Jenkins name and major editorial headings; use system UI for navigation, controls, pipeline explanations, and documentation. The hero name is 64px/700 on desktop, section headings are 24-32px, and body copy is 16px with a generous 1.66 line height. Monospace carries Jenkinsfile, console output, plugin IDs, and commands.

## 4. Component Stylings

Primary buttons are blue with white labels and 10px radius. Secondary buttons use a pale surface with dark text; tertiary actions are underlined links; destructive actions use explicit danger tokens and confirmation. Plugin cards show name, version, health, and compatibility. Pipeline status must combine icon, text, and color. Search is a stable rounded field with keyboard hint. Navigation uses labeled text and familiar chevrons.

## 5. Layout Principles

Use a 1240px shell. The hero is a two-column composition with mascot and text, then a hint of the next feature band. Operational pages use denser tables or grids with 760px prose. Keep documentation, plugins, security, and downloads visible in navigation.

## 6. Shapes & Radius Scale

Use 8-10px for controls, cards, and search; 14px for a major panel; pills only for status and version. Mascot artwork may use circular framing, but ordinary page sections remain full-width or unframed.

## 7. Depth & Elevation

Use slight border and shadow on search, menus, plugin cards, and dialogs. The hero and feature bands remain flat. Status rows rely on contrast and rules rather than floating card stacks.

## 8. Interaction & Motion

Use 120ms controls, 220ms menus, and up to 380ms for a feature slide. Carousels require previous/next controls, pause behavior, and stable dimensions. Focus uses a 2px dark-blue ring. Reduced motion disables slide movement and presents one complete static feature.

## 9. Accessibility & A11y

Give the butler meaningful alternative text only when it conveys Jenkins identity; decorative variants should be ignored. Pipeline health, build result, and plugin status require textual labels. Search, menus, carousel controls, and code copy must be keyboard operable. Preserve white-on-blue and white-on-dark contrast.

## 10. Responsive Behavior

Below 960px, stack the mascot and hero copy, then collapse navigation into a labeled menu. Below 640px, reduce the Jenkins name without viewport-based scaling, stack actions, keep status tables scrollable inside bounded regions, and turn feature slides into static vertical content when needed.

## 11. Content & Voice

Use practical community language: "Download Jenkins", "Read the documentation", "Find a plugin", and "View security advisories". Pipeline messages name the job, stage, result, duration, and next action. Avoid mascot jokes where the user needs operational clarity.

## 12. Dark Mode & Theming

The audited homepage is light with a dark header. A complete dark mode requires separate mascot treatment, code, table, status, blue, red, border, and surface tokens. Do not extend the header color into an undifferentiated dark canvas.

## 13. Lineage & Influences

Jenkins combines continuous-integration dashboards, open-source community portals, and a long-lived character mascot. Its design strength is the coexistence of friendly identity and exact automation state. Neither side should erase the other.

## 14. Do's and Don'ts

**Do**
- Keep the mascot recognizable but purposeful.
- Expose pipeline state in text.
- Preserve documentation and plugin routes.
- Use blue for primary tasks.
- Reserve red and orange for identity or explicit state.
- Keep search stable.
- Make carousel controls complete.
- Reflow operational tables safely.

**Don't**
- Do not use the mascot as background decoration everywhere.
- Do not communicate build health with color alone.
- Do not autoplay motion without pause.
- Do not hide plugin compatibility.
- Do not nest dashboard cards.
- Do not make console output an image.
- Do not bury security advisories.
- Do not overuse Georgia in dense UI.

## 15. Agent Prompt Guide

**Quick colors:** background #ffffff; surface #f5f7f9; text #000c1a; action blue #0d6efd; header #212529; Jenkins red #d33833; orange #ef6c35.

**Example prompts**
- Create a Jenkins hero with the butler mascot, a large Georgia name, and direct Download and Documentation actions.
- Design a pipeline result table with textual state, duration, stage details, and bounded console output.
- Build a plugin card with version, compatibility, health, and one clear install action.
- Create an accessible static alternative to the feature carousel for reduced motion.

**Iteration guide:** establish operational routes; place the mascot and name; set blue task hierarchy; add pipeline and plugin state; verify carousel controls; then test mobile tables, focus, and reduced motion.
