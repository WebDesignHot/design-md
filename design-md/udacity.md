---
name: Udacity
tagline: 'Dark AI-skills marketplace with electric blue actions, Plus Jakarta Sans display type, and project-led proof.'
updated_at: 2026-07-26T12:00:00+12:00
published_at: 2026-07-26T12:00:00+12:00
author: webdesignhot
source_url: https://www.udacity.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [education, saas]
tags: [dark, structured, sans, education, ai, technical]
preview_swatch: ['#0a0b0f', '#175cff', '#ffffff']
related: [coursera, edx, openstax]
description: 'Udacity presents technical education as an AI career system: a near-black hero, electric-blue enrollment actions, broad Plus Jakarta Sans headlines, project counts, mentor proof, and structured program discovery.'
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent
  muted: text-muted
  border: border
  ring: brand
colors:
  bg: '#0a0b0f'
  bg-page: '#ffffff'
  surface: '#14161d'
  surface-light: '#f9f9f9'
  text: '#ffffff'
  text-dark: '#0b0b0b'
  text-muted: '#cecfd4'
  brand: '#175cff'
  brand-hover: '#0c49dc'
  accent: '#eda93b'
  border: '#343742'
  on-brand: '#ffffff'
typography:
  display:
    family: 'Plus Jakarta Sans, Inter, Arial, sans-serif'
    weights: [500, 600, 700]
  body:
    family: 'Inter, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'Roboto Mono, ui-monospace, monospace'
    weights: [400, 500]
  scale:
    hero: { size: 76, weight: 500, lineHeight: 1.02, tracking: '0', family: display }
    h1: { size: 48, weight: 600, lineHeight: 1.1, tracking: '0', family: display }
    h2: { size: 34, weight: 600, lineHeight: 1.2, tracking: '0', family: display }
    body-lg: { size: 20, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body: { size: 16, weight: 400, lineHeight: 1.55, tracking: '0', family: body }
    label: { size: 14, weight: 600, lineHeight: 1.4, tracking: '0', family: body }
radius:
  micro: 2
  sm: 4
  md: 8
  lg: 16
  pill: 9999
spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
layout:
  page-width: 1280
  prose-width: 720
  header-height: 72
  hero-min-height: 720
motion:
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 140
  duration-standard: 240
  duration-slow: 420
  reduced-motion: 'stop hero carousel and reveal content without sliding'
breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
components:
  button-primary: { bg: brand, text: on-brand, radius: 4, padding: '12px 20px' }
  program-card: { bg: surface-light, text: text-dark, border: border, radius: 8, padding: 24 }
  nav-link: { bg: transparent, text: text-muted, radius: 4, padding: '8px 10px' }
lineage:
  summary: 'Udacity blends the visual density of a technical product launch with the outcome structure of an education marketplace. Programs are sold through concrete projects, mentor access, and career progression.'
  influences:
    - { name: 'Developer platforms', role: 'dark launch surface, technical language, and project proof' }
    - { name: 'Education marketplaces', role: 'program catalog, credentials, and enrollment paths' }
    - { name: 'AI product launches', role: 'large model-led headline and electric blue action color' }
---

## 1. Visual Theme & Atmosphere

The first viewport is dark, direct, and technical. A large AI-focused headline sits above concrete project and mentor outcomes, while blue actions remain visible against the black surface.

## 2. Color Palette & Roles

Use `#0a0b0f` for launch sections and white for catalog sections. Electric blue is reserved for enrollment and discovery actions; amber identifies exceptional program labels such as master's offerings.

## 3. Typography Rules

Plus Jakarta Sans carries broad display headlines at medium weight. Inter handles navigation, metadata, outcomes, and longer descriptions with a quieter texture.

## 4. Component Stylings

Primary buttons are blue rectangles with 4px corners. Program cards use white or very light gray surfaces, clear subject labels, duration and skill metadata, and one consistent action.

## 5. Layout Principles

Lead with one featured learning path, then transition into a structured catalog. Use full-width bands rather than floating card sections, and keep proof adjacent to the relevant program claim.

## 6. Shapes & Radius Scale

Corners are disciplined: 4px for actions, 8px for course cards, and 16px for large media panels. Avoid soft pill-heavy education UI.

## 7. Depth & Elevation

Use dark tonal layers in the hero and thin neutral borders in the catalog. Cards should not appear to float far above the page.

## 8. Interaction & Motion

Featured programs may rotate, but controls and pause behavior must remain explicit. Blue buttons darken on hover and show a clear focus ring without changing layout.

## 9. Accessibility & A11y

Muted navigation text must stay readable on black. Carousels require pause, previous, and next controls; course outcomes should not rely on video or imagery alone.

## 10. Responsive Behavior

On mobile, stack hero copy before the featured program proof. Keep program metadata in a stable vertical order and use full-width enrollment buttons.

## 11. Content & Voice

Use measurable learning language: build, ship, practice, mentor, project, career, and credential. Avoid generic promises when a project count or concrete skill can be shown.

## 12. Dark Mode & Theming

Dark sections communicate technical depth, while white sections support catalog scanning. Preserve this deliberate alternation instead of forcing the entire site into one theme.

## 13. Lineage & Influences

Udacity reads like a developer platform that happens to sell education. Its strongest distinction is combining product-launch energy with the structured evidence expected from a learning provider.

## 14. Do's and Don'ts

Do show projects, mentors, and skills near enrollment actions. Do not hide program requirements, over-round every control, or use blue as a decorative background everywhere.

## 15. Agent Prompt Guide

Create an Udacity-style AI learning hero on near-black with a 76px Plus Jakarta Sans headline, electric-blue `Enroll now` buttons, amber program labels, real project counts, mentor proof, and a white structured program catalog below.
