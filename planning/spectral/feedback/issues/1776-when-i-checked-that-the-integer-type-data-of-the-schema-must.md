---
number: 1776
title: "When I checked that the integer type data of the schema must have an example, I found that 'example: 0' did not comply with the rule"
state: "closed"
labels: []
author: "youngxer"
created: "2021-08-12T10:26:07Z"
updated: "2021-08-18T14:19:54Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1776"
---

# When I checked that the integer type data of the schema must have an example, I found that 'example: 0' did not comply with the rule

**Describe the bug**
When I checked that the integer type data of the schema must have an example, I found that 'example: 0' did not comply with the rule
**To Reproduce**
1. example.yaml
``` yaml
openapi: 3.0.0
info:
  title: Examples
  version: "1.0"
  description: Examples of loads of examples, some right, some wrong.
paths:
  /schema-example:
    get:
      operationId: schema-examples
      description: when schema examples are inline (no $ref involved)
      responses:
        "200":
          description: Success, because the example matches the schema
          content:
            application/json:
              schema:
                properties:
                  id:
                    type: integer
                    example: 100
                  name:
                    type: string
                    example: myname
                  completed:
                    type: boolean
                    example: true
                  date:
                    type: number
                    example: 8.12
        "500":
          description: Fail, because the example is nonsense
          content:
            application/json:
              schema:
                properties:
                  id:
                    type: integer
                    example: 0
                  name:
                    type: string
                    example: myname
                  completed:
                    type: boolean
                    example: true
                  date:
                    type: number
                    example: 8.12
```
the rulesets:  
```
 "data-type-example": {
      "description": "Data type must have `example`.",
      "recommended": true,
      "severity": "error",
      "given": "$..responses..content[?(@property ==='application/json' && @.schema)]..[?(@.type === 'string' || @.type === 'number' || @.type === 'boolean' || @.type === 'integer')]",
      "then": {
        "field": "example",
        "function": "truthy"
      }
    },
```
2. Run this CLI command 
```
spectral lint example.yaml
```
3. See error
`error  date-type-example  Data type must have 'example'.          paths./schema-example.get.responses[500].content.application/json.schema.properties.id.example`

**Expected behavior**
When 'spectral lint example.yaml' is run, no error about 'data type example' will be reported

**Screenshots**
![image](https://user-images.githubusercontent.com/67850399/129181127-f0f7248b-cfe1-4fce-9baf-aa1ab540d100.png)

**Environment (remove any that are not applicable):**
 - Library version: 3.0.0
 - OS:  Windows 10
