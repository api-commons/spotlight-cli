---
number: 2964
title: "TypeError: Cannot read properties of null when filter predicate evaluates a property on a null node"
state: "open"
labels: []
author: "Sruthisreem"
created: "2026-05-28T08:56:23Z"
updated: "2026-06-03T11:37:06Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2964"
---

# TypeError: Cannot read properties of null when filter predicate evaluates a property on a null node

## Summary

Spectral crashes with an unhandled `TypeError` when a ruleset uses a JSONPath filter predicate that reads a property of `@`, and the document contains a `null` value at a position the filter walks over. The whole lint run aborts; no diagnostics are returned.

The underlying issue appears to be in Nimma's filter-predicate codegen — `@.foo` is emitted without guarding against `@` being `null`/`undefined`. Other JSONPath engines (jsonpath-plus, jsonpath-ng) return "no match" in this situation rather than throwing.

## Steps to reproduce

`api.yaml`:
```yaml
openapi: 3.0.0
info:
  title: Repro
  version: 1.0.0
paths:
  /foo:
    get:
      responses:
        '200':
          description: ok
          content:
            application/json:
              schema:
                type: object
                properties:
                  bar:
                    type: string
                    nullable: true
                    example: null
```

`.spectral.yaml`:
```yaml
rules:
  date-format-required:
    given: "$..[?(@.format == 'date')]"
    severity: warn
    then:
      function: truthy
```

Run:
```
npx @stoplight/spectral-cli lint api.yaml --ruleset .spectral.yaml
```

## Expected

Either:
- The filter predicate evaluates to `false` for the null node and the rule runs to completion (consistent with other JSONPath implementations), **or**
- A structured diagnostic is returned describing which rule/path failed, instead of an unhandled exception that aborts the entire run.

## Actual

```
Error running Spectral!
Use --verbose flag to print the error stack.
Error #1: Cannot read properties of null (reading 'format')
```

## Also reproduces in a Web Worker context

Same ruleset + spec loaded into a browser-side worker using `@stoplight/spectral-core` directly (no CLI) produces the same exception:

This rules out the CLI as the source — it's the core engine.

## Why this matters

- The ruleset is structurally valid (passes `assertValidRuleset` and bundles cleanly).
- The spec is valid (`null` is a legal value for `nullable: true` properties, and is a legitimate `example`/`default`/`enum` value).


## Environment

- `@stoplight/spectral-cli`: 6.16.0
- `@stoplight/spectral-core`: 1.23.0
- Node: 24.15.0
- OS: macOS

## Related

- #1981 — Spectral parsing chokes on unexpected `null` values
- #2139 — v6 chokes on empty `example` (closed; workaround was "don't use empty example")
- #2649 — Example value as null fails

These share the "null hostility" theme but are surfaced through different code paths. This report is specifically about Nimma's filter-predicate evaluator throwing on null `@`.
