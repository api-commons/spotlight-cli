---
number: 2480
title: "OAS Core Rule: $ref can have description and summary siblings"
state: "closed"
labels: []
author: "CanVuralStudocu"
created: "2023-05-25T11:42:08Z"
updated: "2023-07-27T06:18:51Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2480"
---

# OAS Core Rule: $ref can have description and summary siblings

**Describe the bug**
I think according to the OpenAPI spec (https://swagger.io/specification/#reference-object) reference objects can have `$ref`, `summary` and `description` fields. But the Spectral rule `no-$ref-siblings` marks the `description` sibling of `$ref` as error.

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document 
```json
    {
    	"$ref": "#/components/schemas/Pet",
        "description": "This is a sibling description that should be allowed."
    }
```
2. Run this CLI command `spectral lint`
3. See error `no-$ref-siblings  $ref must not be placed next to any other properties`

**Expected behavior**
`description` and `summary` should be allowed as a sibling to `$ref`
