# Spotlight CLI ↔ Spotlight Spec

Spotlight CLI consumes **rulesets**: JSON/YAML documents that declare the rules
used to lint API descriptions. The format of those documents is specified
independently of this linter in
**[spotlight-spec](https://github.com/api-commons/spotlight-spec)**.

## The relationship

- The authoritative schema files for the ruleset format live in this repo at
  [`packages/core/src/ruleset/meta/`](./packages/core/src/ruleset/meta/) and are
  used at runtime to validate loaded rulesets.
- `spotlight-spec` is **generated from those files** into a single, portable
  JSON Schema plus a written specification. Its generator
  (`tools/sync-from-spectral.mjs`) reads this repo (or downloads it) and its CI
  fails if the published spec drifts from this source.

In other words: **this repo is the source of truth for the format; the spec is
its published, implementation-neutral face.**

## Using the published schema

Author and validate rulesets against the canonical, versioned URL — no linter
runtime required:

```
https://api-commons.github.io/spotlight-spec/schema/v1/spotlight-ruleset.schema.json
```

For example, associate it in your editor for inline validation and autocomplete,
or run it in CI with any JSON Schema (draft-07) validator. See the
[spotlight-spec README](https://github.com/api-commons/spotlight-spec) for
details.

## The `spectral:` ruleset aliases

Built-in rulesets are still referenced with the historical `spectral:` scheme
(`spotlight:oas`, `spotlight:asyncapi`, `spotlight:arazzo`) for backwards
compatibility with the large body of existing rulesets in the wild. This scheme
is intentionally **not** renamed. See [FORK.md](./FORK.md).
