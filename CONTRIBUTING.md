# Contributing

The public repository accepts additions and corrections, but the canonical
catalog lives in the WebDesignHot monorepo. A merged public pull request is
imported into the canonical source through an automated, conflict-aware pull
request. The public repository is then refreshed from that canonical source.

The canonical catalog currently uses `webdesignhot/0.2` with
`profile: catalog`. Submissions may still use `webdesignhot/0.1`; the same
validator and portable compatibility gate will check both versions.

## Changes we accept

### New entry

Add `design-md/{kebab-case-slug}.md` using either the `webdesignhot/0.1` schema
in [`SPEC.md`](./SPEC.md) or the `webdesignhot/0.2` catalog profile in
[`SPEC-V0.2.md`](./SPEC-V0.2.md). Values must come from a current desktop and mobile audit
of the declared `source_url`, not from memory or an invented style direction.

### Existing entry refinement

Correct observed tokens, broken source URLs, relationships, accessibility
guidance, or prose. Explain the evidence for factual changes in the PR.

## Required quality

- Valid YAML frontmatter and either `spec: webdesignhot/0.1`, or
  `spec: webdesignhot/0.2` with `profile: catalog`.
- Unique normalized `source_url` and a lowercase kebab-case filename.
- Real `published_at` and `updated_at` values, with the update not earlier than publication.
- Non-empty controlled categories and tags.
- Exactly three valid `preview_swatch` colors.
- Canonical `background`, `foreground`, and `primary` aliases whose values
  resolve to color tokens in the default theme.
- Numbered `##` sections 1 through 15, each appearing exactly once, with no
  unfinished marker text.
- Every `related` slug exists; no self-reference or repeated relationship.
- Honest `lineage` sources using absolute HTTP(S) URLs.

Controlled categories are:

`ai`, `automotive`, `design-tools`, `dev-tools`, `ecommerce`, `education`,
`fashion`, `fintech`, `frameworks`, `gaming`, `hardware`, `healthcare`,
`hospitality`, `insurance`, `marketplace`, `media`, `observability`, `oss`,
`retail`, `saas`, and `social`.

## Validate before submitting

Run the same complete-catalog check used by CI:

```bash
npx -y @webdesignhot/design-md@0.6.1 lint design-md --strict
```

Validating only the changed file is insufficient because source URL uniqueness
and `related` integrity depend on every entry in the directory.

## Review flow

1. Fork this repository and create a branch.
2. Add or refine the entry.
3. Run the strict directory validator.
4. Open a pull request with audit evidence and a concise change summary.
5. Maintainers merge the public PR after review.
6. Automation opens a canonical import PR in the WebDesignHot monorepo.

Public deletions and changes to `SPEC.md` require manual maintainer review. The
importer intentionally refuses to apply them automatically.
