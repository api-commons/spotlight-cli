---
number: 1875
title: "Operation must have \"operationId\" reported for OpenAPI schema"
state: "closed"
labels: ["wontfix"]
author: "reece"
created: "2021-10-04T18:41:16Z"
updated: "2025-07-04T11:06:27Z"
comments: 3
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/1875"
---

# Operation must have "operationId" reported for OpenAPI schema

**Describe the bug**

Within stoplight.io, I get `Operation must have "operationId"` for OpenAPI 3 schema. operationId is not required for OpenAPI, but is required for asyncAPI.

**To Reproduce**

1. Create an API with the OpenAPI provided below.

**Expected behavior**

No error or warning because [operationId is not REQUIRED in OpenAPI 3.0.0](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.0.md#operationObject) or 3.1.0.

**Screenshots**

![image](https://user-images.githubusercontent.com/109453/135905239-ccdca0fb-5d3e-4059-b6b5-62dd23c86d39.png)

**Environment (remove any that are not applicable):**
- stoplight.io  
- Browser: Chrome

**OpenAPI Bug Example**

```
openapi: 3.0.0
info:
  title: Bug Test
  description: A Spectral test
  version: '1.0'
  contact:
    name: Bob Smith
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
                type: object
        '404':
          description: User Not Found
      #operationId: get-users-userId
      description: Retrieve the information of the user with the matching user ID.
```
