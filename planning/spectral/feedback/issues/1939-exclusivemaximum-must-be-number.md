---
number: 1939
title: "exclusiveMaximum must be number"
state: "closed"
labels: []
author: "galvo"
created: "2021-11-02T22:36:14Z"
updated: "2021-11-11T12:16:15Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1939"
---

# exclusiveMaximum must be number

**Describe the bug**
Version 6.1.0 is incorrectly expecting exclusiveMaximum to be a number

**To Reproduce**

1. Given this OpenAPI spec

```
openapi: 3.0.2
info:
  title: Test
  description: |
    My Test API
  version: "0.0.1"
  contact:
    name: Me
    url: https://me.com
    email: me@me.com
  license:
    name: My License
    url: http://mylicense.com
tags:
  - name: Test
    description: "My Test"
servers:
  - url: "{protocol}://{server}:{port}"
    description: Internal API
    variables:
      protocol:
        enum:
          - "http"
          - "https"
        default: "http"
      server:
        default: "my-service"
      port:
        enum:
          - "80"
          - "443"
        default: "80"
paths:
  "/test":
    get:
      tags:
        - Test
      summary: Test exclusiveMaximum
      operationId: "testExclusiveMaximum"
      description: Get Problem
      responses:
        "200":
          description: Test exclusiveMaximum
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Test'
components:
  schemas:
    Test:
      type: object
      description: My test schema
      properties:
        status:
          type: integer
          format: int32
          description: HTTP status code
          minimum: 100
          maximum: 600
          exclusiveMaximum: true
          example: 503
        detail:
          type: string
          description: Test string

```

2. Run the docker command with a ruleset defined as follows

extends: [[spectral:oas, all]]

3. See error

The following error is returned

 61:20  error  oas3-valid-schema-example  schema is invalid: data/exclusiveMaximum must be number  components.schemas.Test.properties.status.example

✖ 1 problem (1 error, 0 warnings, 0 infos, 0 hints)

**Expected behavior**
I expect that there would be no error for this field as exclusiveMaximum is of type boolean see https://swagger.io/docs/specification/data-models/data-types/


**Environment (remove any that are not applicable):**
 - Library version: 6.1.0
 - OS: Docker
