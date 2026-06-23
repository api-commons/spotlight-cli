---
number: 2849
title: "Casing error shows incorrect line with nested $ref"
state: "open"
labels: []
author: "kierank1"
created: "2025-09-16T20:02:07Z"
updated: "2025-09-16T20:04:01Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2849"
---

# Casing error shows incorrect line with nested $ref

**Describe the bug**
With nested `$refs` in a schema, it appears that the error response that is given does not always correctly reference the property that is incorrect.

**To Reproduce**

Here's an example spec file:
```
openapi: 3.0.2
info:
  title: Example API
  version: 0.20.1
  description: Test API
  contact:
    name: "Testing"
servers:
  - url: https://example.com
tags:
  - name: example-tag
paths:
  /example:
    get:
      operationId: getExample
      description: Get Examples from the API
      tags:
        - example-tag
      responses:
        "200":
          $ref: "#/components/responses/ExampleResponse"

components:
  responses:
    ExampleResponse:
      description: OK
      content:
        application/json:
          schema:
            type: object
            properties:
              meta:
                type: object
                properties:
                  ruleType:
                    type: object
                    properties:
                      goodCasing:
                        $ref: "#/components/schemas/ExampleMeta"
                      BAD-CASING:
                        $ref: "#/components/schemas/ExampleMeta"
  schemas:
    ExampleMeta:
      type: object
      properties:
        goodCasing:
          type: boolean
          default: true
        BAD-CASING-2:
          type: string
          example: In Development
```
And my implemented rule:
```
rules:
  camel-case-for-all-field-names:
    description: "All field names must be camel case."
    severity: error
    given: 
      - "$..properties.*~"
    then:
      function: casing
      functionOptions:
        type: camel
```
This results in the failure:
```
 44:17  error  camel-case-for-all-field-names  All field names must be camel case.  components.schemas.ExampleMeta
 50:22  error  camel-case-for-all-field-names  All field names must be camel case.  components.schemas.ExampleMeta.properties.BAD-CASING-2
```

**Expected behavior**
I would expect that the initial first failure **should** reference line 41, pointing to `BAD-CASING`, similarily to `BAD-CASING-2`.

**Environment (remove any that are not applicable):**
 - Using docker
 - `FROM stoplight/spectral:6`
