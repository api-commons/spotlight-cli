---
number: 2781
title: "Validation fails when default is set as object property"
state: "closed"
labels: []
author: "luzeno"
created: "2025-02-20T09:06:23Z"
updated: "2025-03-07T14:00:54Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2781"
---

# Validation fails when default is set as object property

**Describe the bug**
The oas validation fails when the `default` property is set as an object property, but it doesn't cover all the `required` values:

`38:15    error  oas3-valid-schema-example  "default" property must have required property "count"         components.schemas.Foo.default`.

**To Reproduce**

1. Given this OpenAPI document and Spectral configuration

**api.yaml**
```yaml
openapi: 3.0.3
info:
  title: Sample API
  version: 0.1.0

paths:
  /test:
    post:
      requestBody:
        description: Optional description in *Markdown*
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Foo'
      responses:
        "200": # status code
          description: Sample response
          content:
            application/json:
              schema:
                type: array
                items:
                  type: string

components:
  schemas:
    Foo:
      type: object
      properties:
        name:
          type: string
        count:
          type: integer
      required:
        - name
        - count
      default: # <--- Failing because 'default' doesn't contain the 'count' property that is required
        name: foo
```

**.spectral.yaml**
```yaml
extends: ["spectral:oas"]
```

2. Run this command: `spectral lint api.yaml`
3. Validation fails with the following error:

`38:15    error  oas3-valid-schema-example  "default" property must have required property "count"         components.schemas.Foo.default`

**Expected behavior**
The validation should pass since it is compliant with the [json schema validation](https://datatracker.ietf.org/doc/html/draft-wright-json-schema-validation-00#section-6.2) and the [oas specification](https://spec.openapis.org/oas/v3.0.0#properties).

**Environment:**
 - Library version: 6.14.2

**Additional context**
The validation works fine for the given OpenAPI document using the swagger editor online.
