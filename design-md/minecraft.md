---
name: Minecraft
tagline: 'Block-built game storefront with charcoal bands, grass green actions, yellow rewards, and edge-to-edge world art.'
updated_at: 2026-07-26T12:00:00+12:00
published_at: 2026-07-26T12:00:00+12:00
author: webdesignhot
source_url: https://www.minecraft.net
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [gaming]
tags: [dark, playful, blocky, green, gaming, marketplace]
preview_swatch: ['#171615', '#3c8527', '#ffc42b']
related: [xbox, roblox, epic-games]
description: 'Minecraft turns its game world into a layered storefront: charcoal navigation and content bands, square grass-green actions, yellow marketplace rewards, white block-like headlines, and edge-to-edge art for games, updates, skin packs, and community stories.'
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent
  muted: text-muted
  border: border
  ring: accent
colors:
  bg: '#171615'
  bg-header: '#262423'
  surface: '#3d3938'
  surface-deep: '#111111'
  text: '#ffffff'
  text-muted: '#c8c5c3'
  text-dark: '#262423'
  brand: '#3c8527'
  brand-bright: '#6cc349'
  accent: '#ffc42b'
  accent-orange: '#ffa41f'
  border: '#56514f'
  on-brand: '#ffffff'
typography:
  display:
    family: 'Noto Sans, Helvetica Neue, Arial, sans-serif'
    weights: [700, 800, 900]
  body:
    family: 'Noto Sans, Helvetica Neue, Arial, sans-serif'
    weights: [400, 600, 700]
  mono:
    family: 'ui-monospace, SFMono-Regular, monospace'
    weights: [400, 700]
  scale:
    hero: { size: 64, weight: 900, lineHeight: 0.98, tracking: '0', family: display }
    h1: { size: 44, weight: 800, lineHeight: 1.08, tracking: '0', family: display }
    h2: { size: 32, weight: 700, lineHeight: 1.15, tracking: '0', family: display }
    body-lg: { size: 19, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body: { size: 16, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
radius:
  micro: 0
  sm: 0
  md: 0
  lg: 0
  pill: 0
spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
layout:
  page-width: 1280
  prose-width: 720
  header-height: 72
  media-aspect-ratio: '16 / 9'
motion:
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 420
  reduced-motion: 'replace trailers and parallax with static key art'
breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
components:
  button-primary: { bg: brand, text: on-brand, radius: 0, padding: '14px 24px' }
  button-reward: { bg: accent, text: text-dark, radius: 0, padding: '14px 24px' }
  marketplace-card: { bg: surface, text: text, border: border, radius: 0, padding: 0 }
lineage:
  summary: 'Minecraft carries the geometry and material logic of the game into every web control. Square actions, layered charcoal blocks, pixel-like rhythm, and landscape key art make the storefront feel continuous with the world being sold.'
  influences:
    - { name: 'Voxel environments', role: 'square geometry, layered surfaces, and block-like rhythm' }
    - { name: 'Game launch pages', role: 'cinematic key art, trailers, and purchase calls to action' }
    - { name: 'Digital marketplaces', role: 'skin packs, add-ons, ratings, and currency-led offers' }
---

## 1. Visual Theme & Atmosphere

Minecraft is dark, tactile, and scene-led. Charcoal bands frame colorful world art, while square green and yellow actions feel like controls built from the same blocks as the game.

## 2. Color Palette & Roles

Use `#171615` and `#262423` as layered backgrounds. Grass green drives core purchase actions; yellow and orange identify marketplace rewards, pre-orders, and temporary promotions.

## 3. Typography Rules

Use heavy Noto Sans or a compatible blocky display treatment for major game titles. Body copy remains a clean sans so product details and ratings stay readable.

## 4. Component Stylings

Buttons are square, bold, and high contrast. Game tiles use edge-to-edge art with genre and player-mode metadata; marketplace cards add ratings, creator, and currency or free status.

## 5. Layout Principles

Alternate full-width dark bands and game-art scenes. Keep the current campaign first, followed by game discovery, marketplace offers, updates, and community content.

## 6. Shapes & Radius Scale

Radius is effectively zero. Preserve square corners on buttons, panels, tags, image frames, and cards to maintain the constructed world language.

## 7. Depth & Elevation

Create depth with stacked dark tones, textured separators, and overlapping key art. Do not use soft SaaS shadows or translucent glass.

## 8. Interaction & Motion

Buttons can shift one or two pixels like physical blocks and darken quickly. Trailers and scene parallax need clear controls and static fallbacks under reduced motion.

## 9. Accessibility & A11y

Keep white text readable over art with solid panels or scrims. Marketplace ratings need text equivalents, and autoplay media must support pause and captions.

## 10. Responsive Behavior

Crop key art around the main character or game object, not the center by default. Stack marketplace cards without shrinking labels, ratings, or action targets.

## 11. Content & Voice

Use adventurous, active language: discover, build, brave, explore, play, and pre-order. Pair playful headlines with exact platform, player mode, price, and release information.

## 12. Dark Mode & Theming

Dark is the default storefront frame. Individual game art can be bright or seasonal, but controls retain charcoal, green, and yellow roles.

## 13. Lineage & Influences

The web system directly extends Minecraft's voxel construction language. It rejects smooth, soft product UI in favor of square controls, layered materials, and vivid world imagery.

## 14. Do's and Don'ts

Do use real game art, square geometry, and clear platform metadata. Do not round buttons, replace worlds with generic gradients, or let promotional art hide the purchase action.

## 15. Agent Prompt Guide

Create a Minecraft-style game storefront with charcoal full-width bands, edge-to-edge voxel world art, heavy white headline, square grass-green pre-order button, yellow marketplace action, and block-built cards showing genre, player mode, ratings, and price.
