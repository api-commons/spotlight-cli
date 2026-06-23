---
number: 1843
title: "oas3-valid-oas-content-example rule doesn't detect example attributes which are not defined in schema"
state: "closed"
labels: ["wontfix", "OpenAPI"]
author: "anikitin"
created: "2021-09-21T11:58:25Z"
updated: "2021-10-04T17:26:52Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1843"
---

# oas3-valid-oas-content-example rule doesn't detect example attributes which are not defined in schema

Examples which contain properties which are not defined in schema do not cause any linter error.

Here is the example of my schema:

```
openapi: 3.0.3
info:
  title: Test API
  description: Test API
  contact:
    name: RingCentral Platform Team
    url: 'https://developers.ringcentral.com'
    email: platform@ringcentral.com
  version: v1
tags:
  - name: Test API
paths:
  /test-api:
    post:
      summary: Test
      description: Test API
      tags:
        - Test API
      operationId: testApi
      requestBody:
        content:
          application/json:
            schema:
              type: object
              required:
                - field1
              properties:
                field1:
                  type: string
                field2:
                  type: string
            examples:
              Example 1:
                value:
                  field1: test value 1
                  field3: test value 1
      responses:
        '204':
          description: No content
```
          
In this particular case example contains "field3" attribute, while the schema only defines "field1" and "field2".
Default OAS3 rules set doesn't produce any errors. (At the same time it does validate the missing required "field1" if I remove it or datatype mismatch)

**Expected behavior**
Validation error if an example contains the attribute not defined in the schema.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment (remove any that are not applicable):**
 - Library version: 5.8.0, 5.9.0, 5.9.1, 5.9.2, 6.0.0-alpha3
