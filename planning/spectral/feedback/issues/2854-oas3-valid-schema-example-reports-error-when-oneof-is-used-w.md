---
number: 2854
title: "oas3-valid-schema-example reports error when `oneOf` is used with `additionalProperties: false`"
state: "open"
labels: []
author: "JAdshead"
created: "2025-10-06T22:28:24Z"
updated: "2025-10-06T23:01:51Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2854"
---

# oas3-valid-schema-example reports error when `oneOf` is used with `additionalProperties: false`

**Description**

When validating a document which uses `oneOf` for a object property combined with `additionalProperties: false` **oas3-valid-schema-example** reports an error of `Property "[X]" is not expected to be here` when there is a correct match on the example. 

While I believe this to be a bug Id be happy to be proven wrong as its possible I am missing something.

**To Reproduce**

Schema:

```yaml
openapi: 3.0.0
info:
  title: oas3-valid-schema-example
  description: 'example of document oas3-valid-schema-example with oneOf'
  version: '1.0'
  contact:
    name: API Owner
servers:
  - url: 'https://api.example.com'
paths:
  /my-api:
    get:
      description: 'Example endpoint with oneOf in response'
      operationId: getExampleWithOneOf
      summary: 'Get example with oneOf'
      responses:
        '200':
          description: 'Successful response'
          content:
            application/json:
              schema:
                type: object
                additionalProperties: false
                oneOf:
                  - type: 'object'
                    additionalProperties: false
                    required:
                      - 'url'
                    properties:
                      url:
                        type: 'string'
                      width:
                        type: 'integer'
                      height:
                         type: 'integer'
                example:
                  url: 'images/38.png'
                  width: 100
                  height: 100
```

ruleset.yaml file extending `oas` ruleset:

```yaml
extends: ["spectral:oas"]
```


```bash
npx @stoplight/spectral-cli lint --ruleset=ruleset.yaml ./valid-schema-example-document.yml
```

Results in:

```
./valid-schema-example-document.yml
 43:25    error  oas3-valid-schema-example  Property "url" is not expected to be here          paths./my-api.get.responses[200].content.application/json.schema.example
```

**Expected behavior**

I would expect that no error is reported as `url` is valid.

**Additional context**

When providing an invalid example e.g. changing `url` to `urls` the reported errors are what i would expect

given
```yaml
example:
  urls: 'images/38.png'
  width: 100
  height: 100
```
results in:
```
36:25    error  oas3-valid-schema-example  "example" property must have required property "url"       paths./my-api.get.responses[200].content.application/json.schema.example
 36:25    error  oas3-valid-schema-example  "example" property must match exactly one schema in oneOf  paths./my-api.get.responses[200].content.application/json.schema.example
```


Can add the following to the rules [tests](https://github.com/stoplightio/spectral/blob/develop/packages/rulesets/src/oas/__tests__/oas3-valid-schema-example.test.ts) to also reproduce.

```
{
  name: `${field} containing a valid complex example using oneOf`,
  document: {
    openapi: '3.0.2',
    [field]: {
      schema: {
        type: 'object',
        properties: {},
        additionalProperties: false,
        oneOf: [{
          type: 'object',
          additionalProperties: false,
          required: ['url'],
          properties: {
            url: {
              type: 'string',
            },
            width: {
              type: 'integer',
            },
            height: {
              type: 'integer',
            },
          },
        }],
        example: {
          url: 'images/38.png',
          width: 100,
          height: 100,
        },
      },
    },
  },
  errors: [],
},
```
