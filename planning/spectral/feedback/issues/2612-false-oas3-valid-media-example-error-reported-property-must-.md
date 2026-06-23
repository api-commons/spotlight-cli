---
number: 2612
title: "False \"oas3-valid-media-example\" error reported: \"property must match exactly one schema in oneOf\""
state: "open"
labels: ["t/bug", "p/medium", "triaged"]
author: "JPPortier"
created: "2024-04-11T13:06:42Z"
updated: "2024-09-27T13:59:44Z"
comments: 3
reactions_total: 3
thumbs_up: 3
url: "https://github.com/stoplightio/spectral/issues/2612"
---

# False "oas3-valid-media-example" error reported: "property must match exactly one schema in oneOf"

**Describe the bug**


When validating an example with `oneOf` schema, an `oas3-valid-media-example`error is reported even if correct

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document 
`spectral-issue-poc.yaml` file content:
```yaml
openapi: 3.0.2
info:
  description: POC
  title: POC
  version: "1.0"
  license:
    name: MIT
    url: "https://www.poc.com"
  contact:
    email: support@poc.com
    name: support at poc
    url : "https://www.poc.com"
servers:
  - url: https://foo.com
security:
  - Basic: []
tags:
  - description: foo description
    name: Poc
paths:
  '/poc':
    post:
      description: foo description
      tags:
        - Poc
      summary: Trigger a poc
      operationId: poc-operation
      requestBody:
        $ref: "#/components/requestBodies/poc-request"
      responses:
        "200":
          description: "Done"
components:
  examples:

    poc-sample:
      summary: poc sample
      value:
        message:
          text_message:
            text: "This is a text message."

  requestBodies:
    poc-request:
      description: This is the request body for sending a message. `app_id`, `recipient`, and `message` are all required fields.
      content:
        application/json:
          schema:
            $ref: "#/components/schemas/poc-payload-request"
          examples:
            sample:
              $ref: "#/components/examples/poc-sample"
      required: true

  schemas:
    poc-payload-request:
      type: object
      required:
        - "message"
      properties:
        message:
          $ref: "#/components/schemas/message-types"

    message-types:
      type: object
      oneOf:
        - $ref: "#/components/schemas/message-type-foo"
        - $ref: "#/components/schemas/message-type-text"

    message-type-foo:
      type: object
      properties:
        foo_message:
          type: object
          required:
            - foo
          properties:
            foo:
              type: string
    message-type-text:
      type: object
      properties:
        text_message:
          type: object
          required:
            - text
          properties:
            text:
              type: string

  securitySchemes:
    Basic:
      type: http
      scheme: basic
```

And this `ruleset.yaml` file:
```yaml
extends: ["spectral:oas"]
```

2. Run this CLI command '....'
```
spectral lint "spectral-issue-poc.yaml" --ruleset ruleset.yaml
```
3. See error
```
spectral-issue-poc.yaml
 39:17  error  oas3-valid-media-example  "message" property must match exactly one schema in oneOf  components.examples.poc-sample.value.message

✖ 1 problem (1 error, 0 warnings, 0 infos, 0 hints)

```

**Expected behavior**
Example is compliant with spec and error should not been reported

**Environment (remove any that are not applicable):**
 - Library version:  
   - **spectral --version**: `6.11.1`
   - **Docker image**: `docker.io/stoplight/spectral@sha256:d55a6be334e3d50e1f3598e1fd4d51c5c1734d033aae295b69efa829420cb979` (https://hub.docker.com/layers/stoplight/spectral/6.11.1/images/sha256-d55a6be334e3d50e1f3598e1fd4d51c5c1734d033aae295b69efa829420cb979?context=explore)
 - OS: Docker image launched from MacOS
 - Browser: N/A

**Additional context**
Add any other context about the problem here.
