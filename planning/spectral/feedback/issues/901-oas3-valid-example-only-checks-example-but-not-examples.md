---
number: 901
title: "oas3-valid-...-example: Only checks example, but not examples"
state: "closed"
labels: ["t/bug"]
author: "m-mohr"
created: "2020-01-10T10:35:31Z"
updated: "2020-08-24T20:06:07Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/901"
---

# oas3-valid-...-example: Only checks example, but not examples

**Describe the bug**

This is somewhat related to #882: All the oas-valid-...-example rules only check the examples in `example`, but not the examples in `examples.*.value`. 

**To Reproduce**

OAS3 file adapted from the second test in src/rulesets/__tests__/templates/_oas-examples.ts:
```js
    {
      openapi: '3.0.0',
      headers: {
        xoxo: {
          schema: {
            type: 'string',
          },
          examples: {
            test1: {
              value: 123
            },
          },
        },
      },
    }
```

If I add to the test:
```js
  test('will fail when simple example is invalid (examples)', async () => {
    const results = await s.run({
      openapi: '3.0.0',
      [path]: {
        xoxo: {
          schema: {
            type: 'string',
          },
          examples: {
            test1: {
              value: 123
            },
          },
        },
      },
    });
    expect(results).toEqual([
      expect.objectContaining({
        severity: DiagnosticSeverity.Error,
        code: ruleName,
        message: '`examples.*.value` property type should be string',
      }),
    ]);
  });
```

and run: `npm test "oas3-valid-oas-header"`, it doesn't check the examples.test.value value.

**Expected behavior**

All examples should be checked.

**Environment (remove any that are not applicable):**
 - Library version: 5.0.0
 - OS: Windows 10
