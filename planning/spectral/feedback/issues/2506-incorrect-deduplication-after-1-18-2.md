---
number: 2506
title: "Incorrect deduplication after 1.18.2"
state: "closed"
labels: []
author: "derbylock"
created: "2023-07-12T13:51:52Z"
updated: "2023-07-13T09:34:04Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2506"
---

# Incorrect deduplication after 1.18.2

**Describe the bug**
After updating to 1.18.2, spectral begins incorrectly showing path if there are any $ref usages in path.

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document spec.yaml
```
---
info:
  title: Test
  version: 1.0.0
  description: Test spec
  contact:
    name: Team test
    url: http://localhost:8080/contact
    email: foo@bar.baz
  license:
    url: http://localhost:8080/license
    name: Some license
openapi: 3.0.3
servers:
  - url: http://localhost:8080
tags:
  - name: testTag
    description: Test tag
paths:
  "/api/v1/clients/{client_id}/test-runs/{test_run_id}":
    description: Working with Test runs
    summary: Test runs
    parameters:
      - name: client_id
        description: Client's ID
        in: path
        required: true
        schema:
          type: string
      - name: test_run_id
        description: Test run's ID
        in: path
        required: true
        schema:
          type: string
    get:
      operationId: getInfo
      description: get info
      tags:
        - testTag
      parameters:
        - name: hash
          description: Run Hash
          in: query
          required: true
          schema:
            type: string
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    $ref: '#/components/schemas/Error'
                required:
                  - error
    post:
      operationId: setInfo
      description: set info
      tags:
        - testTag
      requestBody:
        content:
          application/json:
            schema:
              type: object
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    $ref: '#/components/schemas/Error'
                required:
                  - error
components:
  schemas:
    Error:
      type: string
```

and rules in rules.yaml:
```
extends:
  - [spectral:oas, all]
  - spectral:asyncapi
functions:
  - custom_check
rules:
  custom_check:
    severity: warn
    message: "{{error}}"
    recommended: true
    given: "$.paths.*.*.responses.*.content.application/json.schema.properties.error.type"
    then:
      function: pattern
      functionOptions:
        match: "^object$"
```
2. Run this CLI command 'spectral lint --ruleset rules.yaml spec.yaml'
3. We have single error with incorrect path "paths". It is even doesn't match the `given` property of the rule. 
```
/home/tolokanal/git/api-product-tools-linting/bug/spec.yaml
 19:7  warning  custom_check  Object{} must match the pattern "^object$"  paths

✖ 1 problem (0 errors, 1 warning, 0 infos, 0 hints)
```

**Expected behavior**
It should output 2 errors as it relates to different paths:
```
 57:27  warning  custom_check  "string" must match the pattern "^object$"  paths./api/v1/clients/{client_id}/test-runs/{test_run_id}.get.responses[200].content.application/json.schema.properties.error.type
 79:27  warning  custom_check  "string" must match the pattern "^object$"  paths./api/v1/clients/{client_id}/test-runs/{test_run_id}.post.responses[200].content.application/json.schema.properties.error.type
```

**Environment (remove any that are not applicable):**
 - Library version: 1.18.2
 - OS: [linux](https://github.com/stoplightio/spectral/pull/2501)

**Additional context**
It worked as expected a week ago but now it is broken. I think it is related to #2501
