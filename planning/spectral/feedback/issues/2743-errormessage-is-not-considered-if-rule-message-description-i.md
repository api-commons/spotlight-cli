---
number: 2743
title: "errorMessage is not considered if rule message/description is provided"
state: "open"
labels: []
author: "johannesmarx"
created: "2024-11-20T11:14:36Z"
updated: "2024-11-20T11:14:36Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2743"
---

# errorMessage is not considered if rule message/description is provided

**Describe the bug**
In case the built-in `schema` function is used for validation and custom `errorMessage`s are provided (including the configuration `allErrors: true`), the messages only show up if neither `message` or `description` of the rule is provided.

 **To Reproduce**

1. Given this OpenAPI document `spec.yaml`
```
openapi: 3.0.3
info:
  title: Test
  version: 1.0.0
  contact: 
    name: Contact
  description: Some API
servers:
  - url: https://example.com/v1
tags:
  - name: tag
paths:
  /:
    get:
      description: Operation
      operationId: operationId
      tags:
        - tag
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Response'
components:
  schemas:
    Response:
      type: object
      properties:
        special_property:
          type: integer
          maxLength: 2
```
and the rules file `.spectral.yaml`
```
extends: ["spectral:oas"]

rules:
  must-use-valid-special-property:
    message: Must use special property definition
    description: Checks for special property definition
    severity: error
    given: 
      - $..special_property
    then:
    - function: schema
      functionOptions:
        schema:
          type: object
          properties:
            type:
              type: string
              const: string
              errorMessage: "\"type\" property must be equal to `\"string\"` instead of `${0}`."
            maxLength:
              type: integer
              const: 3
              errorMessage: "\"maxLength\" of special property must be set to `3` instead of `${0}`."
          required: [type, maxLength]
        allErrors: true

```
3. Run this CLI command `npx spectral lint -r .spectral.yaml spec.yaml `
4. See the output
```
spec.yaml
 32:17  error  must-use-valid-special-property  Must use special property definition  components.schemas.Response.properties.special_property.type
 33:22  error  must-use-valid-special-property  Must use special property definition  components.schemas.Response.properties.special_property.maxLength
```

**Expected behavior**

As individual `errorMessage`s are provided and the option `allErrors: true` is set, I'd expect to receive the following instead:

```
spec.yaml
 32:17  error  must-use-valid-special-property  "type" property must be equal to `"string"` instead of `"integer"`.  components.schemas.Response.properties.special_property.type
 33:22  error  must-use-valid-special-property  "maxLength" of special property must be set to `3` instead of `2`.   components.schemas.Response.properties.special_property.maxLength
```

In case I comment `message: Must use special property definition` the `description` text is shown instead which also doesn't meet my expectations.
Only if both `message` and `description` properties of the rule are not set I'm getting the expected behavior.


**Environment (remove any that are not applicable):**
 - npx spectral --version
 6.14.2
