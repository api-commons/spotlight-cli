---
number: 927
title: "oas3-valid-content-schema-example seems to misbehave with arrays"
state: "closed"
labels: ["t/bug", "OpenAPI"]
author: "bkabrda"
created: "2020-01-20T11:02:42Z"
updated: "2020-12-30T16:12:18Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/927"
---

# oas3-valid-content-schema-example seems to misbehave with arrays

**Describe the bug**

Given following schema:

```yaml
components:
  schemas:
    X:
      type: array
      items:
        type: string
      example:
        value:
          - "foo"
```

Validating yields error `error  oas3-valid-content-schema-example  `example` property type should be array`. When I transform it to

```yaml
components:
  schemas:
    X:
      type: array
      items:
        type: string
      example:
        - "foo"
```

I get the following warning: `warning  example-value-or-externalValue  Example should have either a `value` or `externalValue` field.`

**Expected behavior**

I think at least the first example is correct according to the openapi spec (so shouldn't yield an error), not sure about the second one.

**Environment (remove any that are not applicable):**
Using Docker image stoplight/spectral:5 (image id 38270ed7d5da).
