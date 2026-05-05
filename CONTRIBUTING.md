# Contributing

Thanks for considering a contribution! This catalog stays useful only if every entry reflects the **real production design** of the brand it documents.

## Three kinds of PRs

### 1. New brand
Add `design-md/{kebab-case-slug}.md`. Follow the v1.5 schema in [`SPEC.md`](./SPEC.md). Quick template:

```markdown
---
name: Brand Name
tagline: One-line essence — under 80 chars
author: webdesignhot
source_url: https://example.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [...]    # ai | dev-tools | saas | fintech | media | social | marketplace | design-tools | automotive | fashion
tags: [...]          # dark | light | minimal | editorial | sans | serif | mono | dense | spacious | structured | playful | brutalist | retro | cool | warm | soft | bright | organic
preview_swatch: ['#bg', '#brand', '#text']
related: [3 sibling slugs]
description: 'Long single-quoted YAML. Internal apostrophes doubled — like ''this''.'

# 30+ color roles, 15+ typography scale rows, named radius/spacing/breakpoints/shadows/motion scales,
# accessibility object, components map (≥6 variants), lineage with influences as objects.
---

## 1. Visual Theme & Atmosphere
## 2. Color Palette & Roles
## 3. Typography Rules
## 4. Component Stylings
## 5. Layout Principles
## 6. Shapes & Radius Scale
## 7. Depth & Elevation
## 8. Interaction & Motion          (NEW v1.5)
## 9. Accessibility & A11y           (NEW v1.5)
## 10. Responsive Behavior
## 11. Content & Voice               (NEW v1.5)
## 12. Dark Mode & Theming           (NEW v1.5)
## 13. Lineage & Influences
## 14. Do's and Don'ts
## 15. Agent Prompt Guide
```

Target 500–800 lines per entry. Use real values from the brand's production marketing site (open Chrome DevTools, copy hex/font-family/computed-styles).

### 2. Refinement to existing entry
Token corrections, missing sections, deeper prose, sharper observations. PR title: `refine(linear): fix display tracking, expand motion section`.

### 3. Bug fix
Wrong color, broken URL, schema violation. PR title: `fix(stripe): correct purple from #533afd to #635bff per current site`.

## YAML rules — these have bitten us repeatedly

1. **Always single-quote `description:` values**, double internal apostrophes:
   ```yaml
   description: 'It''s a thing — a thing.'
   ```
2. **Always space after `:` in inline mappings**:
   ```yaml
   button-primary: { bg: brand, text: on-brand }   # ✅
   button-primary:{ bg: brand, text: on-brand }    # ❌
   ```
3. **`lineage.influences` items must be objects**:
   ```yaml
   lineage:
     influences:
       - name: 'Brand Name'
         role: 'How they influenced'
         url: https://example.com
   ```

## Validate before submitting

```bash
# Parse YAML cleanly
npx js-yaml design-md/{slug}.md

# Lint via the CLI (catches schema violations, missing sections, contrast warnings)
npx design-md lint design-md/{slug}.md
```

## Review criteria

- **Real not invented**: tokens grounded in observed production HTML/CSS, not vibe-guessed
- **All 15 sections present**: even if some are short, they MUST exist (use the section number for AI navigation)
- **Sharp prose**: avoid generic phrases like "modern and clean" — capture what's *unique* to this brand
- **Lineage is honest**: cite real influences (this brand's own type foundry, the website's actual font fallback, magazine references)
- **License compatibility**: don't paste licensed content from a closed source

## Code of conduct

Be kind. Disagree on substance, never on identity. Maintainers reserve the right to close PRs that don't meet the quality bar without prejudice — a closed PR is not a personal rejection.

## Maintainership

This catalog is maintained by [webdesignhot](https://www.webdesignhot.com). The web app, CLI, and MCP server live in separate repos. PRs accepted directly here; for product features go to the respective repo.
