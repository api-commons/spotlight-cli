---
number: 2330
title: "OpenAPI 3 document with a shared response object fails to validate"
state: "closed"
labels: []
author: "rossLodge-R"
created: "2022-11-07T20:55:35Z"
updated: "2024-04-27T11:24:58Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2330"
---

# OpenAPI 3 document with a shared response object fails to validate

**Describe the bug**

A simple OpenAPI 3 document with a shared response object fails to validate with `error  oas3-schema  Property "content" is not expected to be here.  components.responses.FOO.content`.

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document '...'
```yaml
openapi: 3.0.0
servers:
  - url: 'http://localhost:8080/api/v1'
info:
  description: Prove shared response validation fails.
  version: 1.0.0
  title: Failing Service
  contact:
    name: foo
    url: https://example.com
    email: foo@example.com
tags:
  - name: foo
    description: "bar"
paths:
  /something:
    post:
      summary: Just here to fill out the necessary
      description: Still just here to fill out the necessary
      operationId: postSomething
      tags:
        - "foo"
      responses:
        '201':
          description: Something
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AbstractResponse'
        '400':
          description: Bad request.  Most likely failed validation.  See response for details.
          content:
            application/json:
              schema:
                $ref: '#/components/responses/ErrorResponse'
      security:
        - CustomBearerAuth: []
      requestBody:
        $ref: '#/components/requestBodies/SharedBody'
components:
  securitySchemes:
    CustomBearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
  requestBodies:
    SharedBody:
      description: foo
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/SimpleBody'
  responses:
    ErrorResponse:
      description: Standard response for errors.  Follows conventions for common error responses.
      content:
        application/json:
          schema:
            title: ErrorResponse
            description: An error.  Expect entries in the error field
            allOf:
              - $ref: "#/components/schemas/AbstractResponse"
              - type: object
                properties:
                  error:
                    type: array
                    minItems: 1
                    items:
                      type: object
                      properties:
                        httpStatus:
                          type: string
                        timestamp:
                          type: string
                          format: date-time
                        status:
                          description: The numeric http error code
                          type: integer
                        error:
                          description: HTTP reason phrase
                          type: string
                        exception:
                          description: Name of the exception thrown, if any
                          type: string
                        message:
                          description: Short information about the error
                          type: string
                        detail:
                          description: Long information about the error
                          type: string
                        stackTrace:
                          description: Stack trace of error
                          type: string
                      required:
                        - status
                required:
                  - error
  schemas:
    SimpleBody:
      title: SimpleBody
      type: object
      properties:
        foo:
          type: string
    AbstractResponse:
      title: AbstractResponse
      description: Wraps the response data
      type: object
      properties:
        meta:
          type: object
        data:
          type: object
        error:
          type: object

```
2. Run this CLI command 
```bash
echo 'extends: ["spectral:oas", "spectral:asyncapi"]' > .spectral.yaml
spectral lint ./whateveryounamedtheschema.yml
```
3. See error
```text
 58:15  error  oas3-schema  Property "content" is not expected to be here.  components.responses.ErrorResponse.content
 ```

**Expected behavior**
There should be no linting errors.

**Environment (remove any that are not applicable):**
 - Library version: 6.6.0
 - OS: OS X Ventura
