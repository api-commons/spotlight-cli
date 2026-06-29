# Spotlight Rules roadmap

An openly-governed, progressive build of the Spectral API linter — eight tools,
one engine, one rule catalog. Currently at **1.1.0**. A plan, not a commitment.

Today it governs the APIs you **produce**; the next half is governing the APIs and
context you **consume** — see [Consumer API governance](#consumer-api-governance--the-next-half) below.

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
- Ruleset schema fully documented — `description` / `title` / `examples` on every property, `$def`, and per-function options (generated, not hand-maintained).
- Ruleset schema published to [SchemaStore](https://www.schemastore.org/) — editors auto-apply Spotlight completion + validation to `*.spotlight.*` and `spotlight-ruleset.*` files.
- **spotlight-vscode** published to the VS Code Marketplace as [`spotlightrules.spotlight`](https://marketplace.visualstudio.com/items?itemName=spotlightrules.spotlight).
- Validator workbench: AI fix, tag filter, utilities, commit/PR, APIs.json export.
- Distributable catalog pack (engine-loadable rulesets + functions).
- Standardized dev process: single source of truth, uniform CI, drift gates, release runbook, branch protection.

## Now

- VS Code: associate the schema with ruleset files; publish to Open VSX (VSCodium / Cursor / Windsurf).

## Next

- Engine: `unrecognized-format` as a first-class rule; surface `documentationUrl` in output; JSON Schema 2020-12 keywords in the OAS ruleset.
- Spec: a ruleset authoring guide; publish the catalog pack as a package.
- Validator: shareable state (ruleset + document in the URL); embeddable widget.

## Later

- Engine: overrides on external `$ref` files; OR combinator; remote/private `extends`; richer formatters; AsyncAPI 3.x + OWASP packs.
- Spec: a conformance test suite for other implementations.
- Distribution: arm64 container images; a SonarQube path.
- A community ruleset registry, spec-validated, under API Commons.

## Consumer API governance — the next half

Governance has run producer-side and design-time. Agents and copilots consume APIs
faster than producer governance can keep up, so the same rules, discovery, and
validation turn to face the APIs and context we consume — governing, by rule, what
we hand to AI. Background: [Consumer API Governance in an Agentic World](https://apievangelist.com/2026/06/24/consumer-api-governance-in-an-agentic-world/).

- **Consumer rulesets (agent-safety packs)** — assert what a surface may and may not expose to an integration: no PII, no secrets, no pricing, scope-limited operations, bounded and deterministic outputs.
- **Consumption gate in discovery** — score a third-party OpenAPI / MCP server for agent-readiness before you integrate it.
- **Governed surface generation** — generate the gateway (e.g. KrakenD) / MCP declaration that shapes a consumed surface, governing both the declaration and the surface it produces (rulesets generated and hand-reviewed).
- **Context manifests** — a first-class artifact describing the governed context for an integration (sources, fields, rules), generated and diffable.
- **Continuous consumption monitoring** — re-lint the APIs you depend on; alert on drift, breaking changes, new PII, or policy violations before your agents hit them.
- **Runtime input/output governance** — apply the same rules to the requests and responses flowing to AI, deterministically, at the point of consumption.
- **Rulesets from plain-English policy** — generate a consumer ruleset from "products and metadata, no pricing, no PII", then review.
