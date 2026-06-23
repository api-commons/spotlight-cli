---
number: 2631
title: "fails to parse yaml values with double quote `\"` inside"
state: "open"
labels: ["t/bug", "p/low", "triaged"]
author: "pomali"
created: "2024-06-03T08:17:11Z"
updated: "2024-07-22T15:38:29Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2631"
---

# fails to parse yaml values with double quote `"` inside

**Describe the bug**
when linting yaml file, value containing double quote `"` does not get recognized as string

**To Reproduce**

1. Given this OpenAPI document 
`a.yaml`

```
openapi: 3.0.3
info:
  title: A
  version: 0.1.0
  description: "A"
paths:
  /api/device/apns/:
    get:
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/PaginatedAPNSDeviceList'
          description: ''
components:
  schemas:
    PaginatedAPNSDeviceList:
      type: object
      required:
      - results
      properties:
        next:
          type: string
          nullable: true
          format: uri
          example: http://api.example.org/accounts/?cursor=cD00ODY%3D"
```

and `.spectral.yaml`
```
extends: ["spectral:oas"]
```

3. Run this CLI command `spectral lint a.yaml`
4. See error
```
...
 27:20    error  oas3-valid-schema-example    "example" property must match format "uri"                     components.schemas.PaginatedAPNSDeviceList.properties.next.example
```

this is caused by `"` in example. (same arror can happen with oas3-valid-media-example)

**Expected behavior**
other yaml libraries (eg. pyyaml) recognize not-leading double quote and treat the value like a string, so it should not fail the validation (since format: uri gets downgraded to type: string, which should match, and if format: uri is recognized it should be valid anyway)
