# spotlight-rules roadmap (draft)

A feature roadmap for the **spotlight-rules** stack, derived from 972 issues and
172 discussions mirrored from upstream Spectral (see
[`feedback/`](./feedback/README.md)). Every item links to the evidence that
motivates it.

This is a planning draft, not a commitment. Issue/discussion numbers (e.g.
[#2901]) refer to the upstream Spectral tracker.

## The stack

| Target | Repo | npm / artifact | Role |
| --- | --- | --- | --- |
| **spotlight-cli** | [api-commons/spotlight-cli](https://github.com/api-commons/spotlight-cli) | `@spotlight-rules/spotlight-*` (11 pkgs) | the linter engine + CLI (Spectral fork) |
| **spotlight-spec** | [api-commons/spotlight-spec](https://github.com/api-commons/spotlight-spec) | JSON Schema + spec | standalone ruleset specification |
| **spotlight-vscode** | [api-commons/spotlight-vscode](https://github.com/api-commons/spotlight-vscode) | VS Code extension | editor experience |
| **spotlight-validator** | [api-commons/spotlight-validator](https://github.com/api-commons/spotlight-validator) | browser app | governance playground (validator.spotlight-rules.com) |
| **spotlight-rules** | the org / ecosystem | — | governance, cadence, distribution, docs |

## Positioning — why this fork exists (the feedback makes the case)

Three signals in the data define the opening:

1. **Release cadence frustration.** "When will a new version be released?"
   ([#2716], 7⬆, top General discussion) plus a backlog of **security issues that
   sit open** — rollup CVE ([#2901], 23👍), rollup<3.29.5 ([#2700]), `punycode`
   deprecation ([#2622]), `lodash.toPath` ([#2774]), minimatch ([#2937]). A fork
   whose **first promise is "current dependencies, fast security response"** has
   immediate, measurable value.
2. **The ruleset format has no published, standalone spec.** [#2666] asks for
   exactly a JSON Schema + IDE autocomplete + schemastore registration.
   **spotlight-spec already answers it** — the work is to publish, register, and
   wire it in.
3. **Format coverage gaps** the community keeps asking about: AsyncAPI 3.x
   ([#2598], [#2673]), OAS 3.1 + OWASP ([#2677]), JSON Schema 2020-12 keywords
   like `prefixItems` ([#2646]), plain JSON Schema linting ([#2653]).

**Thesis:** *the openly-governed, well-maintained, formally-specified build of
Spectral — current on security, faster on cadence, with a real ruleset
specification and first-class editor support.*

---

## Cross-cutting themes (ranked by evidence)

| # | Theme | Primary signal | Lands in |
| --- | --- | --- | --- |
| 1 | Security & dependency currency | [#2901] 23👍, [#2700], [#2622], [#2774], [#2937] | cli, org |
| 2 | Crash/robustness hardening | [#2959] 16👍, [#1981], [#2693] | cli |
| 3 | `$ref`/overrides power | [#2195] 13👍, [#1054] (21💬), [#2007], [#2464] | cli |
| 4 | Ruleset format spec + authoring DX | [#2666], [#2504], [#2359] | spec, vscode |
| 5 | Format coverage (AsyncAPI 3, OAS 3.1, JSON Schema 2020-12) | [#2598], [#2677], [#2646], [#2653] | cli, spec |
| 6 | Rule/ruleset features | [#1124] 10👍, [#1276], [#2008], [#2203], [#2437] | cli (rulesets) |
| 7 | Output/formatters | [#1555], [#2553], [#2705] | cli |
| 8 | Distribution & integrations | [#2636] 8👍 (arm64), [#2249], [#1415], GitHub Action | cli, org |

---

## spotlight-cli

### Now (foundation — the fork's headline value)
- **Dependency & security sweep.** Resolve the open security backlog as the
  first release: rollup ([#2901], [#2700]), `punycode` ([#2622]),
  `lodash.toPath` ([#2774]), minimatch ([#2937]). Add automated dependency +
  CVE alerting (Dependabot/audit gate in CI).
- **Crash hardening.** Add the missing null guards driving the top robustness
  reports: [#2959] (16👍), [#1981], [#2693]. Establish a fuzz/regression fixture
  set from these reports.
- **Finish the rebrand internals** already underway, and decouple package
  versions from upstream Spectral numbers on the first independent release
  (document the mapping in `FORK.md`).

### Next
- **Overrides on external `$ref`'d files** ([#2195], 13👍) — the single most
  upvoted pure feature request. Long-standing upstream caveat; a concrete win.
- **`$ref` correctness:** wrong path printed for nested `$ref`s ([#2007]); guard
  the rulesets path-`$ref` regression class ([#2655], [#2713], [#2515]).
- **`unrecognized-format` as a first-class rule** ([#1124], 10👍) — severity-
  tweakable and overridable like any other rule.
- **JSON Schema 2020-12 keywords** in the OAS ruleset/validation: `prefixItems`
  ([#2646]) and friends; fix `oas3-valid-media-example` edge cases
  ([#2090], [#2509]).
- **Output/formatters:** JUnit includes passed tests ([#1555]); multiple
  `--format`/`--output` pairs on Windows/PowerShell ([#2553]); surface
  `documentationUrl` in console output ([#2705]).

### Later
- **AsyncAPI 3.x ruleset** ([#2598] 7⬆, [#2673]) and OAS 3.1 + OWASP rule pack
  ([#2677]); "objects must have `type: object`" builtin ([#2203]).
- **Evaluate the `$ref` resolver swap** to APIDevTools/json-schema-ref-parser
  ([#1054], 21💬) — high-impact, high-risk; spike behind a flag.
- **Remote/private ruleset `extends`** with auth ([#2464], [#2541]); lint plain
  JSON Schema ([#2653]); multi-document YAML ([#2516]).
- **Rule expressiveness:** OR combinator ([#1276]), `additionalProperties:false`
  override ([#2008]), required-but-undefined ([#2437]).
- **Custom-rule DX:** debugging support ([#2359], 5⬆) and browser-bundled custom
  formats/functions ([#2723]).

---

## spotlight-spec

The spec already exists and already answers [#2666]. The roadmap is about reach,
depth, and keeping it authoritative.

### Now
- **Register on [schemastore.org](https://www.schemastore.org/)** for
  `.spectral.{json,yml,yaml}` (and `.spotlight.*`) — exactly the ask in [#2666].
  This lights up autocomplete/validation in every schemastore-aware editor for
  free.
- **Publish the schema at a stable, versioned URL** (already `v1` on GitHub
  Pages) and announce it as the answer to [#2666].

### Next
- **Per-builtin-function `functionOptions` schemas.** Today the spec validates
  that `then.function` exists but not its options; add option schemas for
  `pattern`, `length`, `enumeration`, `casing`, `schema`, etc. This is the
  biggest authoring-DX upgrade and directly powers editor autocomplete.
- **A ruleset authoring guide** (aliases, overrides, `extends` modifiers,
  formats) living next to the spec.
- **`documentationUrl`-in-message** conventions ([#2504], [#2705]) documented so
  tools render rule docs consistently.

### Later
- **Conformance test suite** (valid/invalid corpus, already seeded) published as
  a reusable fixture set so *other* implementations (e.g. the Java interest in
  [#2704]) can target the spec.
- **`v2` only when the format changes** — keep the generator
  (`sync-from-spectral`) as the drift guard so the spec never diverges silently
  from the engine.

---

## spotlight-vscode

### Now
- **Associate the spotlight-spec schema** with `.spectral.*`/`.spotlight.*` files
  in the extension so users get **ruleset autocomplete + validation while
  editing** — the editor half of [#2666]. (Pairs with schemastore registration.)
- **Replace the Spectral-branded icon/artwork** (tracked in the extension's
  `FORK.md`).

### Next
- **Consume the published `@spotlight-rules/spotlight-*` engine** instead of
  upstream `@stoplight/spectral-*` (now that the packages are on npm), so the
  extension ships the fork's fixes/cadence.
- **Inline rule documentation:** surface `documentationUrl` on hover/diagnostics
  ([#2705], [#2504]).
- **Publish** to the VS Code Marketplace and Open VSX under the org.

### Later
- **Custom-rule debugging** affordances ([#2359], 5⬆) — the most-upvoted
  authoring-experience ask.
- **Ruleset scaffolding** commands (new rule, new ruleset from a template that
  validates against spotlight-spec).

---

## spotlight-validator

A browser-based governance playground at **validator.spotlight-rules.com** —
runs the Spotlight engine client-side (Vite + Monaco) to lint OpenAPI, AsyncAPI,
and JSON Schema, with a best-of-breed ruleset compiled from public rulesets and
selectable by tag.

### Now (shipped)
- In-browser linting; Monaco artifact + custom-ruleset editors; ~289 rules
  compiled from 10 public rulesets, tagged `source:`/`category:`/`format:`;
  duplicate detection; tag-filtered selection.

### Next
- **Recover the remaining custom-function rules** (Paystack and others whose
  functions aren't yet bundled).
- **Real AsyncAPI & JSON Schema rule sets** — the compiled corpus is
  OpenAPI-heavy; add format-specific best-of-breed rules.
- **Shareable state** (ruleset + document in the URL) and import-from-URL.
- **Curated "recommended" preset** beyond duplicate-hiding — a hand-reviewed core.

### Later
- Save/load named rule profiles; export a ruleset for the CLI; diff against a
  baseline; embeddable widget.

---

## spotlight-rules (org / ecosystem)

### Now
- **Publish a security & release policy** and a visible cadence — the direct
  answer to [#2716]. Cut a first independent release that clears the security
  backlog (theme 1).
- **One docs entry point** linking cli + spec + vscode and explaining the
  relationship to upstream Spectral (provenance, compatibility, the `spectral:`
  alias compatibility promise).

### Next
- **Distribution:** arm64 (multi-arch) container images ([#2636], 8👍); a
  reusable **GitHub Action**; document Maven/Gradle invocation ([#2249]).
- **Compatibility guarantee** statement: existing `spectral:` rulesets and
  `.spectral.*` files keep working (already preserved in the fork).

### Later
- **Integrations:** SonarQube path ([#1415], 8⬆, top Q&A); CI recipe library.
- **Ruleset registry / "Show and tell" curation** — collect community rulesets
  (the upstream "Rulesets"/"Show and tell" categories had real traction) into a
  discoverable, spec-validated catalog. Natural fit with the API Commons mission.
- **Track the Java-implementation interest** ([#2704]) as a spec-conformance
  consumer, not something we build.

---

## Sequencing at a glance

| Phase | spotlight-cli | spotlight-spec | spotlight-vscode | org |
| --- | --- | --- | --- | --- |
| **Now** | security/dep sweep; crash guards; version-decouple | schemastore + announce | schema association; new icon | security/release policy; docs hub |
| **Next** | external-ref overrides; `$ref` fixes; `unrecognized-format`; formatters; 2020-12 keywords | functionOptions schemas; authoring guide | consume `@spotlight-rules` engine; inline docs; Marketplace | arm64 images; GitHub Action |
| **Later** | AsyncAPI 3; OWASP/OAS3.1; ref-parser spike; remote/private extends | conformance suite | custom-rule debugging; scaffolding | SonarQube; ruleset registry |

## How to maintain this

- Re-run [`fetch-feedback.cjs`](./fetch-feedback.cjs) periodically to refresh the
  corpus; the demand signals (👍/⬆/💬) re-prioritize the list.
- When an item ships in the fork, note it here and in the relevant repo's
  `FORK.md` so divergence from upstream stays documented.
