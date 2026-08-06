# DESIGN.md / WebDesignHot 0.2

Status: implementation specification. The active catalog may contain both
`webdesignhot/0.1` and `webdesignhot/0.2` entries.

WebDesignHot 0.2 is a catalog profile with a portable Google DESIGN.md Alpha
view. It is compatible with the Google core vocabulary where practical, but it
remains an independent WebDesignHot format. The upstream reference format is
documented at [google-labs-code/design.md](https://github.com/google-labs-code/design.md).

## Identity and profiles

Canonical catalog entries declare:

```yaml
spec: webdesignhot/0.2
profile: catalog
```

`spec` is the WebDesignHot version. `profile: catalog` enables the 15-section
directory contract, source metadata, aliases, taxonomy, lineage, motion,
accessibility, and other catalog extensions.

Existing v0.1 top-level fields remain readable. New catalog-only fields may be
placed under `x-webdesignhot`. If a namespaced field conflicts with an old
top-level field, the namespaced value wins and the validator reports an error.

Portable exports instead declare only:

```yaml
version: alpha
```

They contain the Google-compatible core fields and never combine `version` and
the WebDesignHot `spec` field.

## Core additions

v0.2 accepts the following additive fields and shapes:

- Typography supports `fontFamily`, `fontSize`, `fontWeight`, `lineHeight`,
  `letterSpacing`, and `textTransform` (`uppercase`, `lowercase`,
  `capitalize`, or `none`). Existing aliases such as `family`, `size`,
  `weight`, and `tracking` remain readable.
- A token may be a scalar or `{ value: ..., prompt: ... }`. Prompts are agent
  guidance and are not emitted as CSS token values.
- `icons` declares the icon library, sizes, stroke width, and semantic roles.
- `naming` declares variable prefix and kebab/camel output conventions.
- Components may use `base`, `variants`, and `sizes`:

```yaml
components:
  button:
    base: { padding: '8px 12px', rounded: md }
    sizes:
      sm: { padding: '6px 10px' }
    variants:
      primary:
        default: { backgroundColor: brand }
        hover: { backgroundColor: 'darken(brand, 6%)' }
        disabled: { backgroundColor: 'mix(brand, bg, 40%)' }
```

Component resolution order is `base`, `size`, `variant.default`, then the
requested state. Supported states are `default`, `hover`, `active`,
`focus-visible`, and `disabled`.

## Computed colors

Computed values use a restricted parser. Supported expressions are token
references such as `{colors.brand}`, CSS Color values, `color-mix()`, and:

- `darken(color, percent)`
- `lighten(color, percent)`
- `mix(colorA, colorB, percent)`
- `alpha(color, 0..1)`
- `auto-contrast(color)`
- `shift-hue(color, degrees)`

Expressions are converted to an internal AST. Unknown functions, JavaScript,
cycles, excessive nesting, undefined references, and oversized token maps are
errors. Exporters emit resolved values; they never execute input code.

## Catalog contract

Catalog entries continue to require the 15 numbered Markdown sections, source
metadata, categories, tags, dates, preview swatches, and canonical aliases.
`omitted` is a portable/core feature and cannot be used to waive a required
catalog section.

## CLI and MCP

The CLI accepts both versions and adds:

```bash
design-md lint DESIGN.md --spec auto --compat google-alpha
design-md upgrade DESIGN.md --to webdesignhot/0.2       # dry-run
design-md upgrade DESIGN.md --to webdesignhot/0.2 --write
design-md export DESIGN.md --to google-alpha
```

The existing export names keep their behavior. `google-alpha` is a new
portable export. Portable export reports catalog fields that cannot be
represented; core-field loss is an error, extension loss is a warning.

The MCP server keeps the raw `get_design` response stable and adds
`get_component`, `evaluate_token`, and optional `include_resolved` output for
`get_design`.

## Migration

v0.1 remains valid. Upgrade is deterministic and dry-run by default; it adds
the v0.2 identity/profile but does not infer icons, component states, or design
intent from prose. Canonical and public catalogs accept v0.1 and v0.2 during
the transition. A full catalog rewrite is intentionally deferred until the
v0.2 pilot and portable compatibility checks are stable.
