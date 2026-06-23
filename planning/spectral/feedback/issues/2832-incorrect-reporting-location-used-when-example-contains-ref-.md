---
number: 2832
title: "Incorrect reporting location used when example contains $ref value"
state: "open"
labels: []
author: "Relequestual"
created: "2025-07-17T09:50:56Z"
updated: "2025-07-31T15:50:04Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2832"
---

# Incorrect reporting location used when example contains $ref value

**Describe the bug**
OpenAPI 3.0.3 defines both `example` and `examples`.
The value of `example` is "dumb data" and should be treated as such.
`examples` is an object of named examples, and the value of such an object may be either an example object (defined in the spec) or a reference object (aka using $ref).

The rule `oas3-valid-schema-example` when applied is applied correctly, but is reported at the referenced location when the value of `example` looks like a reference object.

**To Reproduce**

Given this OAD...

```
openapi: 3.0.3
servers:
  - url: https://example.com/api
    description: Example API server
info:
  title: OpenAPI Enum Boolean Bug Example
  version: 1.0.0
paths:
  /test-bool-enum:
    post:
      summary: Test boolean enum bug
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/BoolEnumObject'
      responses:
        '200':
          description: Success
components:
  schemas:
    BoolEnumObject:
      type: object
      properties:
        mustBeFalse:
          type: boolean
          enum: [false]
      required:
        - mustBeFalse
      example:
        $ref: '#/components/examples/BoolEnumObjectInvalid'
  examples:
    BoolEnumObjectValid:
      value:
        mustBeFalse: false
    BoolEnumObjectInvalid:
      value:
        mustBeFalse: true

```

Run spectral linting with `oas3-valid-schema-example` enabled. Your choice as to how.

See error reported.

<img width="1049" height="168" alt="Image" src="https://github.com/user-attachments/assets/41a2747f-db6e-4736-9c4f-f725b12559c4" />

Full error content:
```
[{
	"resource": "openapi-bug-example.yml",
	"owner": "spectral",
	"code": "oas3-valid-schema-example",
	"severity": 8,
	"message": "\"example\" property must have required property \"mustBeFalse\"",
	"source": "spectral",
	"startLineNumber": 36,
	"startColumn": 27,
	"endLineNumber": 38,
	"endColumn": 26
}]
```

**Expected behavior**

Reporting location should be where the example is defined.

**Environment (remove any that are not applicable):**
 - Library version: 6.15.0

**Additional context**
Likely related to https://github.com/stoplightio/spectral/issues/2830
