---
number: 1416
title: "path-params rule incorrectly flags parameter override definitions as duplicate "
state: "closed"
labels: ["t/bug"]
author: "wjwilkie"
created: "2020-12-08T16:00:22Z"
updated: "2020-12-23T17:13:55Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1416"
---

# path-params rule incorrectly flags parameter override definitions as duplicate 

**Describe the bug**
According to the OpenAPI Specification regarding Operation Parameters:  
"A list of parameters that are applicable for this operation. If a parameter is already defined at the Path Item, the new definition will override it but can never remove it. The list MUST NOT include duplicated parameters."  

However the "path-params" rule incorrectly identifies the scenario where the parameter definition exists both at the path and the operation level as a duplicate instead of a valid override.

Disabling the "path-params" rule is not a suitable long-term workaround because the rule does provide valuable validation to identify duplication scenarios where the same path parameter name is defined twice within the same parameter list at either the path or operation level.

**To Reproduce**
The following test could be added to oasPathParam.test.ts to demonstrate the failure.
```
  test('No error if path parameter definition has override at the operation level', async () => {
    const results = await s.run({
      paths: {
        '/foo/{bar}': {
          parameters: [
            {
              name: 'bar',
              in: 'path',
              required: true,
              description: 'Shared common parameter.'
            },
          ],
          get: {
            parameters: [
              {
                name: 'bar',
                in: 'path',
                required: true,
                description: 'Operation level parameter.'
              },
            ],
          },
        },
      },
    });

    expect(results).toHaveLength(0);
  });
```

**Expected behavior**
Spectral should not produce a lint error when a valid parameter override exists in the API definition.
