---
number: 2646
title: "Rule array-items does not support prefixItems keyword"
state: "open"
labels: ["t/bug", "s/needs-info"]
author: "yethee"
created: "2024-06-24T14:40:32Z"
updated: "2024-10-04T20:40:18Z"
comments: 2
reactions_total: 5
thumbs_up: 5
url: "https://github.com/stoplightio/spectral/issues/2646"
---

# Rule array-items does not support prefixItems keyword

**Describe the bug**
OpenAPI 3.1 inherits [data types from JSON Schema 2020-12](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#data-types), where we can use [`prefixItems`](https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema-00#section-10.3.1.1) keyword to define tuple value, instead of `items` keyword.
After changes from #2638 we got an error, when schema contains `prefixItems`:

```
Schemas with "type: array", require a sibling "items" field
```

**To Reproduce**

`test.yaml`:
```yaml
---
openapi: "3.1.0"
components:
  schemas:
    IssueWithPrefixItems:
      type: array
      prefixItems:
        - type: string
        - type: integer
      minItems: 2
      maxItems: 2
      additionalItems: false
```
Run validation:
```
npx @stoplight/spectral-cli lint test.yaml

5:26    error  array-items            Schemas with "type: array", require a sibling "items" field  components.schemas.IssueWithPrefixItems
```

**Expected behavior**
Field `items` should not be required when `prefixItems` field is defined.

**Environment (remove any that are not applicable):**
```
npm ls @stoplight/spectral-rulesets

`-- @stoplight/spectral-cli@6.11.1
  +-- @stoplight/spectral-ruleset-bundler@1.5.2
  | `-- @stoplight/spectral-rulesets@1.19.1 deduped
  `-- @stoplight/spectral-rulesets@1.19.1
```

**Additional context**
This issue related to #2638.
