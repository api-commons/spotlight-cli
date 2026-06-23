---
number: 1603
title: "Nullable allOf construct doesn't work"
state: "open"
labels: ["triaged"]
author: "philipbjorge"
created: "2021-05-06T15:54:59Z"
updated: "2024-05-31T12:35:41Z"
comments: 6
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/1603"
---

# Nullable allOf construct doesn't work

**Describe the bug**
I'm trying to describe a nullable ref and spectral is yelling at my examples being invalid

**To Reproduce**

Given this OpenAPI document:
```
openapi: 3.0.0
info:
  title: repro
  version: '1.0'
servers:
  - url: 'http://localhost:3000'
paths:
  '/users/{userId}':
    parameters:
      - schema:
          type: integer
        name: userId
        in: path
        required: true
        description: Id of an existing user.
    get:
      summary: Get User Info by User ID
      tags: []
      responses:
        '200':
          description: User Found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
              examples:
                Get User Alice Smith:
                  value:
                    nullable_ref: null
        '404':
          description: User Not Found
      operationId: get-users-userId
      description: Retrieve the information of the user with the matching user ID.
components:
  schemas:
    Foo:
      type: object
      properties:
        bar:
          type: string
      required:
        - bar
    User:
      title: User
      type: object
      description: ''
      properties:
        nullable_ref:
          nullable: true
          allOf:
            - $ref: "#/components/schemas/Foo"
      required:
        - nullable_ref
```

Run this command:
```
npx @stoplight/spectral lint -q repro.yaml
```

Received:
```
29:35    error  oas3-valid-oas-content-example  `nullable_ref` property type should be object                            paths./users/{userId}.get.responses[200].content.application/json.examples['Get User Alice Smith'].value.nullable_ref
```

In the 6.0.0 alpha, I get an error:
```
Error: schema is invalid: data/properties/nullable_ref/type must be equal to one of the allowed values, data/properties/nullable_ref/type/0 must be equal to one of the allowed values, data/properties/nullable_ref/type must match a schema in anyOf
    at Ajv.validateSchema (/Users/philipbjorge/.npm/_npx/97956/lib/node_modules/@stoplight/spectral/node_modules/ajv/dist/core.js:251:23)
    at Ajv._addSchema (/Users/philipbjorge/.npm/_npx/97956/lib/node_modules/@stoplight/spectral/node_modules/ajv/dist/core.js:443:18)
    at Ajv.compile (/Users/philipbjorge/.npm/_npx/97956/lib/node_modules/@stoplight/spectral/node_modules/ajv/dist/core.js:145:26)
    at Object.exports.schema (/Users/philipbjorge/.npm/_npx/97956/lib/node_modules/@stoplight/spectral/dist/functions/schema/schema.js:37:33)
    at Object.o (eval at exports.evaluateExport (/Users/philipbjorge/.npm/_npx/97956/lib/node_modules/@stoplight/spectral/dist/ruleset/utils/evaluators.js:89:80), <anonymous>:1:1817)
    at Object.oasExample (eval at exports.evaluateExport (/Users/philipbjorge/.npm/_npx/97956/lib/node_modules/@stoplight/spectral/dist/ruleset/utils/evaluators.js:89:80), <anonymous>:1:3524)
    at Object.exports.lintNode (/Users/philipbjorge/.npm/_npx/97956/lib/node_modules/@stoplight/spectral/dist/runner/lintNode.js:29:33)
    at callback (/Users/philipbjorge/.npm/_npx/97956/lib/node_modules/@stoplight/spectral/dist/runner/runner.js:38:32)
    at JSONPath._handleCallback (/Users/philipbjorge/.npm/_npx/97956/lib/node_modules/@stoplight/spectral/node_modules/jsonpath-plus/dist/index-node-cjs.js:306:5)
    at JSONPath._trace (/Users/philipbjorge/.npm/_npx/97956/lib/node_modules/@stoplight/spectral/node_modules/jsonpath-plus/dist/index-node-cjs.js:337:10)
```

**Expected behavior**
I expected this example to pass validation -- I thought the `nullable: true`, `allOf` approach was the appropriate way to create a nullable reference in OAS 3

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment (remove any that are not applicable):**
 - Library version: 5.9.1
