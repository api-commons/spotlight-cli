---
number: 2819
title: "externalValue doesn't permit for relative references"
state: "closed"
labels: ["released"]
author: "spiderPan"
created: "2025-05-08T17:39:35Z"
updated: "2026-05-21T09:24:15Z"
comments: 5
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2819"
---

# externalValue doesn't permit for relative references

> **Please delete this section, and any sections below that you don't use, before creating the issue.**

**Describe the bug**

Starting from OAS 3.1.0, the `externalValue` should allow relative reference, See the [documentation](https://spec.openapis.org/oas/v3.1.1.html#fixed-fields-15)


**To Reproduce**

1. Create a schema as following using openapi:3.1.0
```yaml
Response:
      description: OK
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/ResponseSchema'
          examples:
            jsonObject:
              externalValue: "./components/response.json"
```
2. Attempt to use spectral to validate this schema with spectral:oas rule.
3. Validation failed with 
```bash
error  oas3-schema            "externalValue" property must match format "uri".
```

**Expected behavior**
Spectral validation should pass and allow for relative URLs
