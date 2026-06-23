---
number: 1517
title: "Error location is wrong when the error is in a $ref inside an arrays .items property"
state: "closed"
labels: ["t/bug", "json-refs"]
author: "henrikrudstrom"
created: "2021-02-25T10:12:22Z"
updated: "2023-03-23T16:02:29Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1517"
---

# Error location is wrong when the error is in a $ref inside an arrays .items property

**Describe the bug**
The error output gives wrong (or not complete location) of the error when using a $ref to a jsonschema document in an `array`s `items` property. 

**To Reproduce**

Given a yaml spec that references a json-schema (that contains an error: the `additionalProperties` is inside `properties`)

test.yaml: 
```
---
openapi: 3.0.1
info:
  version: 1.0.0
  title: Test
  description: Test
  contact:
    url: https://github.com/just/a-test
servers:
  - url: 'http://just.a.test'
tags:
  - name: test
paths:
  '/test':
    get:
      operationId: get-test
      description: Test
      tags:
        - test
      responses:
        '200':
          description: Success
          content:
            application/json:
              schema:
                '$ref': '#/components/schemas/TestResponse'
components:
  schemas:
    TestResponse:
      type: array
      description: array of
      items:
        '$ref': './test-schema.json#/definitions/root'
```
test-schema.json
```
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
    "root": {
      "type": "object",
      "properties": {
        "additionalProperties": false,
        "id": {
          "type": "number"
        },
        "key": {
          "type": "string",
          "minLength": 6,
          "maxLength": 6
        },
        "status": {
          "type": "string",
          "enum": ["active", "inactive"]
        }
      }
    }
  }
}
```

running `spectral lint test.yaml`
i get this output: 
```
/Users/henrikrudstrom/dev/amedia/spec-playground/playground/specs/repro/repro.yaml
 32:13  error  oas3-schema  `additionalProperties` property type should be object.  components.schemas.TestResponse.items
```
Notice that it points to the location of the `$ref` in `test.yaml` and not the location of the actual error in the `test-schema.json`

**Expected behavior**
I would have expected the error to point to the file/linenumber of the error in the jsonschema.
Interestingly, if i would reference the schema directly, ie change the last lines of `test.yaml` to this: 

```
components:
  schemas:
    TestResponse:
        '$ref': './test-schema.json#/definitions/root'
```
i get much more useful output, pointing to the correct line of the error in `test-schema.json`
```
/Users/henrikrudstrom/dev/amedia/spec-playground/playground/specs/repro/test-schema.json
 7:33  error  oas3-schema  `additionalProperties` property type should be object.  definitions.root.properties.additionalProperties
```
So i know spectral can do it!

Additionally, while trying to debug (originally this was a very big schema), i tried to lint `test-schema.json` hoping to narrow down the bug in the schema, but running `spectral lint test-schema.json` did not produce any errors, i would have expected that to fail as well.



**Environment (remove any that are not applicable):**
 - Library version: [5.8.1]
 - OS: [Mac OS 10.15.6]
 - Environment [Node v14.13.0]
