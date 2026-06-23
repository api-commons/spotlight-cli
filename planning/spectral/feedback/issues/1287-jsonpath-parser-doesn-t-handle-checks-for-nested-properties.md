---
number: 1287
title: "JSONPath parser doesn't handle checks for nested properties"
state: "closed"
labels: ["t/bug"]
author: "tillig"
created: "2020-07-21T23:41:29Z"
updated: "2020-07-22T18:53:45Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1287"
---

# JSONPath parser doesn't handle checks for nested properties

**Describe the bug**

I'm trying to create a rule that requires all parameters to have an `example` or `examples` field _if_ it's not a `$ref` to some predefined entity.

The rule looks like this:

```yaml
  required-examples-parameters:
    description: Parameters should include examples unless they reference a schema that might already have examples.
    given: $..[?(@parentProperty !== 'links' && @.parameters)]['parameters'].[?(@.in && !@.schema.$ref)]
    then:
      function: xor
      functionOptions:
        properties:
          - example
          - examples
```

The rule does not properly handle the check for `!@.schema.$ref` via JSONPath though it seems to be a valid query.

**To Reproduce**

Create an OpenAPI `testdoc.yml` doc like this:

```yaml
openapi: '3.0.2'
info:
  title: Valid API
  version: '1.0'
paths:
  /root/v1/test/{id}:
    get:
      operationId: test-route-by-id
      description: Gets a thing by ID.
      parameters:
        - in: path
          name: id
          description: An ID for the fake test object.
          schema:
            $ref: '#/components/schemas/Identity'
          required: true
      responses:
        '200':
          description: OK
      tags:
        - test
components:
  schemas:
    Identity:
      type: integer
      example: 100
```

Now create a `.spectral.yml` like this:

```yaml
extends: spectral:oas
formats: ["oas3"]
rules:
  required-examples-parameters:
    description: Parameters should include examples unless they reference a schema that might already have examples.
    given: $..[?(@parentProperty !== 'links' && @.parameters)]['parameters'].[?(@.in && !@.schema.$ref)]
    then:
      function: xor
      functionOptions:
        properties:
          - example
          - examples
```

Put both of those documents in the same folder and...

`spectral lint testdoc.yml`

You will see a violation of the `required-examples-parameters` rule. **That rule shouldn't be violated** because the error is happening on a path parameter that has a `$ref` in the schema. It shouldn't match the JSONPath but it does.

**Expected behavior**

No violations of the `required-examples-parameters` rule for the test document.

**Environment**
 - Spectral CLI 5.4.0
 - OS: MacOS

**Additional context**

If you take the JSON version of that doc...

```json
{
  "openapi": "3.0.2",
  "info": {
    "title": "Valid API",
    "version": "1.0"
  },
  "paths": {
    "/root/v1/test/{id}": {
      "get": {
        "operationId": "test-route-by-id",
        "description": "Gets a thing by ID.",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "description": "An ID for the fake test object.",
            "schema": {
              "$ref": "#/components/schemas/Identity"
            },
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "tags": [
          "test"
        ]
      }
    }
  },
  "components": {
    "schemas": {
      "Identity": {
        "type": "integer",
        "example": 100
      }
    }
  }
}
```

And go pop that into https://jsonpath.com, try the expression:

`$..[?(@parentProperty !== 'links' && @.parameters)]['parameters'].[?(@.in && !@.schema.$ref)]`

It doesn't find anything. If you remove the `!` so it's:

`$..[?(@parentProperty !== 'links' && @.parameters)]['parameters'].[?(@.in && @.schema.$ref)]`

It finds the one property there.

I gather that what I'm trying to do is valid JSONPath, but it's not something the Spectral JSONPath evaluator is handling right.

Is there an alternative expression I could use to select parameters that aren't referencing other schema?
