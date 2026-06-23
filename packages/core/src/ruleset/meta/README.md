# Ruleset meta-schemas

These JSON Schema files describe the **ruleset format** that Spotlight CLI
consumes (`rules`, `extends`, `overrides`, `aliases`, …). They are resolved
against each other at runtime to validate a loaded ruleset.

| File | Defines |
| --- | --- |
| `ruleset.schema.json` | The top-level ruleset object. |
| `rule.schema.json` | An individual rule. |
| `shared.json` | Severity, formats, and `given`/path expressions. |
| `json-extensions.json` | Portable (data-form) `extends`/`function`/`format`. |
| `js-extensions.json` | Runtime (code-form) `extends`/`function`/`format`. |

## Canonical published specification

The implementation-neutral, standalone form of this format is published as
**[spotlight-spec](https://github.com/api-commons/spotlight-spec)**, which bundles
these files into a single portable JSON Schema with a written specification:

> https://api-commons.github.io/spotlight-spec/schema/v1/spotlight-ruleset.schema.json

`spotlight-spec` is **generated from these files** (see its
`tools/sync-from-spectral.mjs`), so they are the source of truth and the
published spec tracks them. When you change the ruleset format here, regenerate
the spec and bump its version. See [SPOTLIGHT_SPEC.md](../../../../../SPOTLIGHT_SPEC.md)
at the repo root for the relationship.
