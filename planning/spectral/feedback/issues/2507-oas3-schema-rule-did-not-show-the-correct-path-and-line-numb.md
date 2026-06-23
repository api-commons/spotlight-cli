---
number: 2507
title: "oas3-schema rule did not show the correct path and line number for response having extra schema with $ref"
state: "open"
labels: ["t/bug", "triaged"]
author: "coliu19"
created: "2023-07-12T15:09:30Z"
updated: "2024-05-31T12:34:27Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2507"
---

# oas3-schema rule did not show the correct path and line number for response having extra schema with $ref

**Describe the bug**
In an oas3 spec's response schema, I used `schema: $ref` without `content` keys etc around which is a oas2 format. Then spectral will raise `Property "schema" is not expected to be here` which is correct. But it did not show the correct path and line number.

**To Reproduce**

1. Given this OpenAPI document 'ref.json':
```ref.json
{
  "openapi": "3.0.0",
  "info": {
    "version": "1.0",
    "title": "Petstore",
    "license": {
      "name": "MIT"
    }
  },
  "servers": [
    {
      "url": "http://petstore.swagger.io/v1"
    }
  ],
  "tags": [
    {
      "name": "hello",
      "description": "desc"
    }
  ],
  "paths": {
    "/pets/{petId}": {
      "get": {
        "summary": "Info for a specific pet",
        "operationId": "showPetById",
        "tags": [
          "pets"
        ],
        "responses": {
          "200": {
            "description": "Incorrect",
            "schema": {
              "$ref": "#/components/schemas/Pet"
            }
          },
          "202": {
            "description": "Correct",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Pet"
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "Pet": {
        "required": [
          "id",
          "name"
        ],
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "name": {
            "type": "string"
          }
        }
      }
    }
  }
}
```
2. Given this rule 'validation.js':

```
import { oas } from '@stoplight/spectral-rulesets';
export default {
  'extends': [
    [
      oas,
      'off',
    ],
  ],
  'rules': {
    'oas3-schema': 'error',
  },
};
```

3. Run this CLI command `spectral lint -r validation.js ref.json`
4. See error
spectral-cli 6.5.1:
`52:13  error  oas3-schema  Property "schema" is not expected to be here.  components.schemas.Pet`
spectral-cli 6.8.0
`21:11  error  oas3-schema  Property "schema" is not expected to be here.  paths`

**Expected behavior**
The output should be
`32:22  error  oas3-schema  Property "schema" is not expected to be here.  paths./pets/{petId}.get.responses[200].schema`


**Environment (remove any that are not applicable):**
 - Library version: [e.g. 3.0.0]
 - OS: [MacOS 13.4.1]

**Additional context**
`paths./pets/{petId}.get.responses[200]`
the responses have additional properties "schema", which violates the oas3 schema spec here: https://github.com/OAI/OpenAPI-Specification/blob/main/schemas/v3.0/schema.json#L930.  
The correct syntax is actually shown on `paths./pets/{petId}.get.responses[202]`. 
oas3-schema rule behaves differently in two spectral versions. Both did not show the correct path and line number.

This is related to "ref" resolve. If I go to node_modules, and add `resolved: false` to the oas3-schema rule, it will show the correct result.  
So the fix may be

1. override the oas3-schema rule in my own ruleset. Can someone show me how to do this? Did not try out yet.
2. not resolving the whole spec may introduce other issues, spectral should determine to resolve or not to resolve intelligently. so there should be some enhancements around this code: https://github.com/stoplightio/spectral/blob/develop/packages/core/src/runner/lintNode.ts#L68
