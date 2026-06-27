# Spotlight Rules roadmap

An openly-governed, progressive build of the Spectral API linter — eight tools,
one engine, one rule catalog. Currently at **1.1.0**. A plan, not a commitment.

## The suite

- **spotlight-cli** — the linter engine + CLI (`@spotlight-rules/*` on npm).
- **spotlight-spec** — the ruleset format + JSON Schema, and the rule catalog.
- **spotlight-vscode** — lint while you edit, in VS Code.
- **spotlight-validator** — browser governance workbench.
- **spotlight-discovery** — browser artifact registry.
- **spotlight-api** — HTTP service over the engine.
- **spotlight-mcp** — MCP server for AI clients.
- **spotlight-pipeline** — governance-gate CI.

## Shipped

- 1.1.0 across all 11 npm packages.
- Curated catalog of 733 rules across 12 artifact types.
- Ruleset JSON Schema at 2020-12, with `title` / `reference` / `prompt` extensions and `functionOptions` schemas.
- Validator workbench: AI fix, tag filter, utilities, commit/PR, APIs.json export.
- Distributable catalog pack (engine-loadable rulesets + functions).
- Standardized dev process: single source of truth, uniform CI, drift gates, release runbook.

## Now

- Register the ruleset schema on schemastore (`.spotlight.*` / `.spectral.*`).
- VS Code: associate the schema with ruleset files; publish to Marketplace + Open VSX.
- Branch protection across the repos.

## Next

- Engine: `unrecognized-format` as a first-class rule; surface `documentationUrl` in output; JSON Schema 2020-12 keywords in the OAS ruleset.
- Spec: a ruleset authoring guide; publish the catalog pack as a package.
- Validator: shareable state (ruleset + document in the URL); embeddable widget.

## Later

- Engine: overrides on external `$ref` files; OR combinator; remote/private `extends`; richer formatters; AsyncAPI 3.x + OWASP packs.
- Spec: a conformance test suite for other implementations.
- Distribution: arm64 container images; a SonarQube path.
- A community ruleset registry, spec-validated, under API Commons.
