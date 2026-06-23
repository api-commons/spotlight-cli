---
number: 2922
title: "Interpolation of {{value}} is incorrect when using `field: \"@key\"`"
state: "open"
labels: []
author: "egrimstad"
created: "2026-03-26T15:42:41Z"
updated: "2026-03-26T15:48:54Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2922"
---

# Interpolation of {{value}} is incorrect when using `field: "@key"`

**Describe the bug**
When using `field: @key` in order to lint the keys in an object (as documented here: https://docs.stoplight.io/docs/spectral/d3482ff0ccae9-rules#then), for example for linting allowed response codes, the resulting error is bugged. It prints an `Object {}` as the interpolation for `{{value}}`, and the range is not what I expect.

**To Reproduce**

I added the following test to `packages/core/src/__tests__/linter.test.ts`:

<details><summary>Test</summary>
<p>

```ts
  test('should work with @key', async () => {
    const message = '404 must be equal to one of the allowed values: "200", "400"';

    spectral.setRuleset({
      rules: {
        rule1: {
          given: '$.responses',
          then: {
            field: '@key',
            function: enumeration,
            functionOptions: {
              values: ['200', '400'],
            },
          },
        },
      },
    });

    const document = new Document(
      `responses:
  "200":
    description: "ok"
  "404":
    description: "not found"`,
      Parsers.Yaml,
    );

    const result = await spectral.run(document);

    expect(result).toEqual([
      expect.objectContaining({
        code: 'rule1',
        message,
        severity: DiagnosticSeverity.Warning,
        path: ['responses', '404'],
        range: {
          end: {
            line: 7,
            character: 3,
          },
          start: {
            character: 3,
            line: 3,
          },
        },
      }),
    ]);
  });
```
</p>
</details> 
<details><summary>Test results</summary>
<p>

```ts
    expect(received).toEqual(expected) // deep equality

    - Expected  - 5
    + Received  + 6

    @@ -1,20 +1,21 @@
      Array [
    -   ObjectContaining {
    +   Object {
          "code": "rule1",
    -     "message": "404 must be equal to one of the allowed values: \"200\", \"400\"",
    +     "documentationUrl": undefined,
    +     "message": "Object{} must be equal to one of the allowed values: \"200\", \"400\"",
          "path": Array [
            "responses",
            "404",
          ],
          "range": Object {
            "end": Object {
    -         "character": 7,
    -         "line": 3,
    +         "character": 28,
    +         "line": 4,
            },
            "start": Object {
    -         "character": 3,
    +         "character": 8,
              "line": 3,
            },
          },
          "severity": 1,
        },
```
</p>
</details>

So there are two bugs:
1. I expected `message` to interpolate the relevant key "400", but it just gets evaluated to `Object{}`.
2. I expected the `range` to only enclose the key, but it seems to refer to the entire block, or something. This is especially confusing for the github-actions formatter.

**Environment (remove any that are not applicable):**
 - Library version: Tested on `develop`, but also observed on `6.15.0`.
 - OS: Linux

**Additional info:**
The same bug also occurs when using the JSONPath syntax: `$.responses.*~` for `given` and no `field`, which is part of the "jsonpath-plus" syntax as I understand it, and not standard.


I tried to look at the implementation to see if I could easily fix it, but it did not seem to be that straightforward. But I suppose it needs to be fixed in `lintNode.ts#processTargetResults`, maybe?
