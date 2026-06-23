---
number: 2971
title: "Add `--summary` flag to print aggregate lint statistics"
state: "open"
labels: []
author: "fuleinist"
created: "2026-06-10T14:17:36Z"
updated: "2026-06-10T14:17:36Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2971"
---

# Add `--summary` flag to print aggregate lint statistics

**User story.**

As a CI engineer, I can run `spectral lint --summary` to get a single stats line in my build logs, so that I can pipe the output into monitoring dashboards, status checks, or alerting rules without parsing the full per-issue list.

**Is your feature request related to a problem?**

When integrating `spectral lint` into CI status checks or observability pipelines, I usually only care about aggregate counts (`5 errors, 12 warnings, 0 info`), not the full per-issue output. Today the only way to get those counts is to run the linter, capture all the per-issue output, and post-process it with `jq` or similar — which is fragile and inconsistent across the various `--format` outputs (`stylish`, `json`, `markdown`, `github-actions`, etc.).

**Describe the solution you'd like**

Add a `--summary` (alias `-S`) flag to the `lint` subcommand that:

- runs the linter as usual (still respects `--ruleset`, `--fail-severity`, `--display-only-failures`, etc.)
- suppresses the per-issue output of the chosen `--format` formatter
- prints a single, machine-friendly summary line per document, e.g.:

```
openapi.yaml: 5 errors, 12 warnings, 0 info, 0 hint (17 total)
```

- exits with the same code as without the flag (so it still integrates with `--fail-severity`)

The exact wording is bikesheddable; the goal is one stable, parseable stats line per document so that downstream tools don't have to know which formatter is in use.

**Additional context**

- `--quiet` already suppresses the `No results with a severity of ...` message when there are no results, but it still emits the per-issue output when there are results, so it doesn't cover this use case.
- `--display-only-failures` is severity-filtering, not aggregate-stats — orthogonal to this idea.
- A complementary optional follow-up (not part of this request) would be machine-readable `--format summary` (e.g. JSON `{errors: 5, warnings: 12, info: 0, hint: 0}`); the CLI flag is the smaller, self-contained first step.
