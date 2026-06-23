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
  attribution. No functional source changes yet; the linter is byte-for-byte the
  upstream `develop` snapshot apart from these added files.

> Renaming of the published npm packages (`@stoplight/spectral-*`) and CLI
> binary is **not yet done** — the codebase still builds and runs as upstream
> Spectral. Rebranding is tracked as future work.
