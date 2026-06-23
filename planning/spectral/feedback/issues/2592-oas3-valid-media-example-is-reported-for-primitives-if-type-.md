---
number: 2592
title: "oas3-valid-media-example is reported for primitives if type is object"
state: "open"
labels: ["t/bug", "p/medium", "triaged", "OpenAPI"]
author: "gssbzn"
created: "2024-02-28T13:07:05Z"
updated: "2024-05-31T09:24:21Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2592"
---

# oas3-valid-media-example is reported for primitives if type is object

**Describe the bug**
According to https://spec.openapis.org/oas/v3.0.3#schema-object object can also be primitive values but spectral seems to flag examples using primitives as invalid

**To Reproduce**

1. Given this this schema
```yaml
schema:
    ApiError:
      type: object
      properties:
        detail:
          type: string
        error:
          type: integer
          format: int32
        parameters:
          type: array
          description: Parameter used to give more information about the error.
          items:
            type: object            
```
an example like 
```yaml
          example:
            error: 400
            detail: "Example"
            parameters:
            - "0"
```
3. Run this CLI command `spectral lint` with the default `extends: [spectral:oas]` rule sets
4. See error
```sh
error  oas3-valid-media-example  "0" property type must be object  components.responses.badRequest.content.application/json.example.parameters[0]
```

**Expected behavior**
Object examples should accept primitives according to the spec



**Environment (remove any that are not applicable):**
 - CLI version 6.11.0
