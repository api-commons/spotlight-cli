# About this fork

**Spotlight CLI** originated as a fork of
[Stoplight Spectral](https://github.com/stoplightio/spectral), and is now
released as an independent **1.0** under the
[API Commons](https://github.com/api-commons) organization.

Spectral is a flexible JSON/YAML linter with out-of-the-box support for OpenAPI,
AsyncAPI, and Arazzo. Spotlight Rules carries that foundation forward as an
openly-governed, vendor-neutral build, paired with
**[spotlight-spec](https://github.com/api-commons/spotlight-spec)** — a
standalone, formally-documented specification of the ruleset format with a JSON
Schema for validation.

## Provenance

- Upstream: https://github.com/stoplightio/spectral (Apache License 2.0)
- Seeded from: a source download of the upstream `develop` branch, June 2026 (no
  shared git history; **not** a GitHub network fork).
- License: **Apache License 2.0, unchanged** — see [LICENSE](./LICENSE) and
  [NOTICE](./NOTICE). The original copyright is held by Stoplight, Inc.;
  attribution is preserved as required by the License.

## The 1.0 reboot

With no existing users, Spotlight was rebooted as a clean 1.0 — everything
product-facing is renamed to Spotlight, and the package versions restart at
`1.0.0` (they no longer track upstream Spectral's version numbers).

- **Packages** — the 11 workspace packages publish as `@spotlight-rules/spotlight-*`,
  starting at `1.0.0`.
- **CLI binary** — `spotlight` (yargs `scriptName`, `bin`, packaged-binary output).
- **JavaScript API** — the main class is exported as **`Spotlight`** (was
  `Spectral`); the diagnostic type is `ISpotlightDiagnostic`.
- **Ruleset aliases** — built-in rulesets are referenced as **`spotlight:oas`**,
  `spotlight:asyncapi`, `spotlight:arazzo` (the `spectral:` scheme is **not**
  carried over).
- **Default ruleset files** — discovered from **`.spotlight.{yaml,yml,json,js}`**
  (the `.spectral.*` names are **not** carried over).
- **Internal** — the runtime keyword is `x-spotlight-runtime`; internal symbols
  and the bundler builtins registry key use the `@spotlight-rules/spotlight`
  namespace.
- Repointed `homepage`/`bugs`/`repository` URLs at `api-commons/spotlight-cli`.
- Removed upstream-specific docs (the Spectral version migration guides) and
  reset per-package `CHANGELOG.md`s to a clean `1.0.0` entry.

## What is **not** renamed (and why)

- **Attribution** — `LICENSE`, `NOTICE`, and the "derived from Stoplight
  Spectral" provenance throughout stay as-is. This is required by the Apache
  License and does not depend on having users.
- **External Stoplight utility dependencies** — `@stoplight/types`,
  `@stoplight/json`, `@stoplight/yaml`, `@stoplight/path`, etc. are unrelated
  libraries we depend on, not Spectral, and keep their names.
- **`planning/spectral/`** — a research mirror of upstream Spectral's issues and
  discussions; it is *about* Spectral and keeps its name.

> The npm scope (`@spotlight-rules`) differs from the GitHub organization
> (`api-commons`) and the site (`spotlight-rules.com`) — see the project READMEs.

## License compliance (Apache-2.0)

This fork's compliance posture with the upstream Apache License 2.0:

- **§4(a) License included.** The upstream `LICENSE` is retained at the repo root
  and in every package directory, so it is included in each published npm tarball
  (verified present in the `@spotlight-rules/spotlight-*` packages).
- **§4(b) Stating changes.** All changes from upstream are documented centrally in
  this `FORK.md` (rather than per-file banners).
- **§4(c) Retaining notices.** Upstream copyright/attribution notices in source
  files are preserved; the rename touched product/identifier names only, not the
  `Stoplight`/copyright notices.
- **§4(d) NOTICE.** Upstream Spectral ships **no** `NOTICE` file, so §4(d) imposes
  no propagation obligation. The `NOTICE` added here is voluntary attribution to
  Stoplight and the Spectral contributors.
- **§6 Trademarks.** The product was renamed Spectral → Spotlight; no upstream
  trademarks are used.
