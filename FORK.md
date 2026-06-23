# About this fork

**Spotlight CLI** is a fork of [Stoplight Spectral](https://github.com/stoplightio/spectral),
maintained under the [API Commons](https://github.com/api-commons) organization.

Spectral is a flexible JSON/YAML linter with out-of-the-box support for OpenAPI,
AsyncAPI, and Arazzo. API Commons forks it to:

1. Maintain an openly-governed, vendor-neutral build of the linter for the API
   Commons community.
2. Pair the linter with **[spotlight-spec](https://github.com/api-commons/spotlight-spec)** —
   a standalone, formally-documented specification of the Spectral ruleset
   format (rules and rulesets), extracted as its own artifact with a JSON Schema
   for validation independent of any single implementation.

## Relationship to upstream

This repository was seeded from a source download of the upstream `develop`
branch (no shared git history). It is **not** a GitHub network fork. We track
upstream manually and document divergence here.

## Provenance

- Upstream: https://github.com/stoplightio/spectral
- Seeded from: `develop` branch, June 2026
- License: Apache License 2.0 (unchanged) — see [LICENSE](./LICENSE) and [NOTICE](./NOTICE)

## Changes from upstream

This section records every intentional divergence from upstream Spectral.

- **2026-06-23** — Initial import. Added `NOTICE`, `FORK.md`, and this fork
  attribution. No functional source changes; byte-for-byte the upstream
  `develop` snapshot apart from these added files.
- **2026-06-23** — Rebrand (`rebrand/spotlight` branch).
  - Renamed the 11 internal workspace packages `@stoplight/spectral-*` →
    `@api-commons/spotlight-*` and updated every internal import, dependency,
    `tsconfig` path mapping, and test alias accordingly.
  - Renamed the CLI binary `spectral` → `spotlight` (`bin`, yargs `scriptName`,
    and the packaged-binary output path).
  - Repointed `homepage`/`bugs`/`repository` URLs at `api-commons/spotlight-cli`.
  - Added `SPOTLIGHT_SPEC.md` and `packages/core/src/ruleset/meta/README.md`
    establishing [spotlight-spec](https://github.com/api-commons/spotlight-spec)
    as the canonical published form of the ruleset meta-schema.

### Deliberately **not** changed (compatibility)

- The **`spectral:` ruleset alias scheme** (`spectral:oas`, `spectral:asyncapi`,
  `spectral:arazzo`) is preserved. A huge number of rulesets in the wild
  reference these; renaming the scheme would break them. See `SPOTLIGHT_SPEC.md`.
- The default ruleset filename **`.spectral.yaml`** is preserved for the same
  reason.
- `CHANGELOG.md` files retain their original upstream package names (historical
  record).

> The package versions were left at their upstream numbers. These packages are
> not yet published to npm under the `@api-commons` scope; publishing is future
> work.
