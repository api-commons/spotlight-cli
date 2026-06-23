# Spectral feedback corpus

A point-in-time mirror of community feedback from upstream
[stoplightio/spectral](https://github.com/stoplightio/spectral), captured to
inform the **spotlight-rules** roadmap. Read-only snapshot; not affiliated with
Stoplight.

- **Captured:** 2026-06-23
- **Issues:** 972 (238 open, 734 closed) — `issues/<number>-<slug>.md`
- **Discussions:** 172 — `discussions/<number>-<slug>.md`
- Regenerate with [`../fetch-feedback.cjs`](../fetch-feedback.cjs) (`node fetch-feedback.cjs`).
- Machine-readable indexes: [`issues-index.json`](./issues-index.json), [`discussions-index.json`](./discussions-index.json).

Each file carries YAML frontmatter (state, labels, author, dates, reactions /
upvotes, comment count, source URL) followed by the original body. Discussions
include the accepted answer when present. PRs are excluded. Comment threads are
**not** mirrored — reaction and comment *counts* are kept as demand signals; open
the source URL for full threads.

## What the data says (signal for the roadmap)

### Open-issue labels (top)
`triaged` 145 · `enhancement` 55 · `t/bug` 46 · `chore` 25 · `p/medium` 17 ·
`AsyncAPI` 11 · `OpenAPI` 10 · `json-refs` 8 · `documentation` 8 · `help wanted` 7.

### Highest-demand open issues (👍)
| 👍 | # | Title | Theme |
| --- | --- | --- | --- |
| 23 | 2901 | rollup vulnerable (CVE-2026-27606) | security/deps |
| 16 | 2959 | Null guard crash: "Cannot read properties of null (enum)" | robustness |
| 13 | 2195 | Apply overrides to external `$ref`'d files | $ref/overrides |
| 13 | 2693 | SyntaxError while running `spectral lint` | robustness |
| 10 | 1124 | Make `unrecognized-format` tweakable | rules |
| 8 | 2007 | Wrong path printed for nested `$ref`s | $ref |
| 8 | 2636 | Publish **arm64 Docker** images | distribution |
| 7 | 2622 | Node 21+ `punycode` deprecation warning | deps |
| 7 | 2655 | rulesets 1.19.0 breaks path `$ref` behavior | regression |
| 7 | 2700 | rollup < 3.29.5 vulnerability | security/deps |
| 7 | 2646 | `array-items` doesn't support `prefixItems` | JSON Schema 2020-12 |

Most-commented open issues add: **#1054 switch `$ref` resolver to
APIDevTools/json-schema-ref-parser** (21 comments), **#1072 subpar error
messages**, **#2203 builtin "objects must have type: object" rule**.

### Discussions by category
Q&A 118 · General 24 · Rulesets 15 · Ideas 10 · Show and tell 5.

### Highest-upvoted discussions
| ⬆ | # | Cat | Title | Theme |
| --- | --- | --- | --- | --- |
| 8 | 1415 | Q&A | Integration with SonarQube | integrations |
| 7 | 2716 | General | When will a new version be released? | **release cadence** |
| 7 | 2598 | Q&A | Plan to support **AsyncAPI 3.x**? | formats |
| 5 | 2359 | Q&A | Run debugger for custom rules | authoring DX |
| 4 | 2653 | Q&A | Validate a plain JSON Schema? | formats |
| 4 | 2516 | Q&A | Multi-document YAML files | parsing |
| 3 | 2464 | Q&A | Extend ruleset from a **private repo** | distribution |
| 2 | 2666 | Ideas | **Is there a JSON Schema for the rulesets?** | → spotlight-spec |
| 2 | 2704 | General | Java implementation for the Spectral spec | ecosystem |
| 2 | 2677 | Q&A | OAS 3.1 & OWASP rules | formats/rules |

> **#2666 is the thesis for [spotlight-spec](https://github.com/api-commons/spotlight-spec):**
> a user asks for a JSON Schema for rulesets, IDE autocompletion, and
> [schemastore.org](https://www.schemastore.org/) registration — exactly what
> spotlight-spec delivers. The roadmap turns that from "built" into "published,
> registered, and wired into the editor."

See [`../ROADMAP.md`](../ROADMAP.md) for how these signals map to spotlight-rules,
spotlight-cli, spotlight-spec, and spotlight-vscode.
