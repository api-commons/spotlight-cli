---
number: 2790
title: "$ref stops resolving after a limit is reached"
state: "open"
labels: ["t/bug", "triaged"]
author: "ChristopherLiuI"
created: "2025-02-27T10:59:30Z"
updated: "2026-05-20T11:49:51Z"
comments: 3
reactions_total: 3
thumbs_up: 3
url: "https://github.com/stoplightio/spectral/issues/2790"
---

# $ref stops resolving after a limit is reached

**Describe the bug**
When reusing objects after reaching a certain depth the $refs stop being resolved and instead the $ref itself is linted.

**To Reproduce**
`asyncapi.yml`

```yaml
openapi: 3.0.2
info:
  description: add some description here
  title: API
  version: 1.0.0
  contact:
    name: GIT
    email: email@git.com
servers:
  - url: https://api.com
tags:
  - name: Tests
paths:
  /v1/tests:
    $ref: "./routes/tests.yml#/paths/tests"
  /v2/tests:
    $ref: "./routes/tests2.yml#/paths/tests2"
  /v3/tests:
    $ref: "./routes/tests3.yml#/paths/tests3"
  /v4/tests:
    $ref: "./routes/tests4.yml#/paths/tests4"
  /v5/tests:
    $ref: "./routes/tests5.yml#/paths/tests5"
  /v6/tests:
    $ref: "./routes/tests6.yml#/paths/tests6"
  /v7/tests:
    $ref: "./routes/tests7.yml#/paths/tests7"
  /v8/tests:
    $ref: "./routes/tests8.yml#/paths/tests8"
  /v9/tests:
    $ref: "./routes/tests9.yml#/paths/tests9"
  /v10/tests:
    $ref: "./routes/tests10.yml#/paths/tests10"
```

`test7.yml` all the testX.yml follow the same structure

```yaml
paths:
  tests7:
    post:
      tags:
        - Tests
      summary: Create test
      description: Create test
      operationId: createtests7
      responses:
        '200':
          $ref: "../components/responses/generic-responses.yml#/components/responses/200Ok"
        '401':
          $ref: "../components/responses/generic-responses.yml#/components/responses/400BadRequest"
        '500':
          $ref: "../components/responses/generic-responses.yml#/components/responses/500InternalServerError"
    get:
      tags:
        - Tests
      summary: Get tests
      description: Get tests
      operationId: gettests7
      responses:
        '200':
          $ref: "../components/responses/generic-responses.yml#/components/responses/200Ok"
        '401':
          $ref: "../components/responses/generic-responses.yml#/components/responses/400BadRequest"
        '500':
          $ref: "../components/responses/generic-responses.yml#/components/responses/500InternalServerError"
    delete:
      tags:
        - Tests
      summary: Delete tests
      description: DeleteTests
      operationId: deletetests7
      responses:
        '200':
          $ref: "../components/responses/generic-responses.yml#/components/responses/200Ok"
        '401':
          $ref: "../components/responses/generic-responses.yml#/components/responses/400BadRequest"
        '500':
          $ref: "../components/responses/generic-responses.yml#/components/responses/500InternalServerError"
    put:
      tags:
        - Tests
      summary: Update tests
      description: UpdateTests
      operationId: updatetests7
      responses:
        '200':
          $ref: "../components/responses/generic-responses.yml#/components/responses/200Ok"
        '401':
          $ref: "../components/responses/generic-responses.yml#/components/responses/400BadRequest"
        '500':
          $ref: "../components/responses/generic-responses.yml#/components/responses/500InternalServerError"
```

`responses.yml`

```yaml
components:
  responses:
    200Ok:
      description: The response body for a Ok response.
      content:
        application/json:
          schema:
            $ref: "#/components/schemas/Error"
          examples:
            default:
              $ref: "../examples/examples.yml#/components/examples/200Ok"
    400BadRequest:
      description: The response body for a Bad Request error. One or more parameters have an invalid value.
      content:
        application/json:
          schema:
            $ref: "#/components/schemas/Error"
          examples:
            default:
              $ref: "../examples/examples.yml#/components/examples/400BadRequest"
    500InternalServerError:
      description: The response body for an Internal Server error.
      content:
        application/json:
          schema:
            $ref: "#/components/schemas/Error"
          examples:
            default:
              $ref: "../examples/examples.yml#/components/examples/500InternalServerError"

  schemas:
    Error:
      type: 'object'
      additionalProperties: false
      properties:
        code:
          type: integer
          format: int32
          example: 10
        title:
          type: 'string'
          description: A machine-friendly identifier for the code.
          example: NOT_FOUND
        detail:
          type: 'string'
          example: Resource not found for id 12345
      required:
        - code
        - title
        - detail
```

`examples.yml`

```yaml
components:

  examples:

    200Ok:
      summary: Ok
      description: The following example shows the response body for a Ok response.
      value:
        code: 200
        title: Ok
        detail: The request was successful

    400BadRequest:
      summary: Bad Request
      description: The following example shows the response Bad Request body when the provided parameters were invalid.
      value:
        code: 400
        title: Bad Request
        detail: One or more parameters have an invalid value
        
    500InternalServerError:
      summary: Internal Server Error
      description: The following example shows the Internal Server Error response body.
      value:
        code: 500
        title: Internal Server Error
        detail: Server could not handle the request properly
```

**Expected behavior**
The expected behaviour should be that no errors or warnings are found, although these are show

```plaintext
  5:11  warning  oas3-examples-value-or-externalValue  Examples must have either "value" or "externalValue" field.  components.examples.200Ok
  8:13    error  oas3-valid-media-example              "value.value" property must exist                            components.examples.200Ok.value
 13:19  warning  oas3-examples-value-or-externalValue  Examples must have either "value" or "externalValue" field.  components.examples.400BadRequest
 16:13    error  oas3-valid-media-example              "value.value" property must exist                            components.examples.400BadRequest.value
 21:28  warning  oas3-examples-value-or-externalValue  Examples must have either "value" or "externalValue" field.  components.examples.500InternalServerError
 24:13    error  oas3-valid-media-example              "value.value" property must exist                            components.examples.500InternalServerError.value
```

**Additional context**
To test this I created a function which logs when a $ref is being validated following the same given patterns as the  oas3-examples-value-or-externalValue rule.
