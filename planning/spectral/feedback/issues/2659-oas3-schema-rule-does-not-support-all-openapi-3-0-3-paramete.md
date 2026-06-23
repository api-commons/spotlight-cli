---
number: 2659
title: "oas3-schema rule does not support all OpenAPI 3.0.3 parameter \"style\" property values"
state: "closed"
labels: []
author: "mrabey"
created: "2024-07-24T01:11:47Z"
updated: "2024-07-24T23:50:12Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2659"
---

# oas3-schema rule does not support all OpenAPI 3.0.3 parameter "style" property values

**Describe the bug**
When using spectra-tool to scan OpenAPI v3.0.3 schemas and enabling the `oas3-schema` rule, I am receiving an error regarding parameter property values of `form`.  The error states that there are only three supported values:
* matrix
* label
* simple

However, the [actual OpenAPI 3.0.3 spec](https://spec.openapis.org/oas/v3.0.3#style-values) states that there are more than those 3 values supported.  One of those supported values in the spec is `form`.

**To Reproduce**
Using an example path below, the error will state that `style: form` is an unacceptable value.

```
paths:
  /test/{testInput}:
    get:
      tags:
        - test
      summary: Test
      description: Test
      parameters:
      - name: testInput
        in: path
        required: true
        style: form
        explode: true
        schema:
            type: string
            example: '10001'
```

**Expected behavior**
Based on the OpenAPI 3.0.3 spec, `style: form` should have been an acceptable input and not thrown an error.

**Environment (remove any that are not applicable):**
 - Library version: latest (we build our scantools image every week and we don't specify a version for the spectral install)
 - OS: Ubuntu 22.04
