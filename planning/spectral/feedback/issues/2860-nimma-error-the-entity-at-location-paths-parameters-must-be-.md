---
number: 2860
title: "Nimma error: The entity at location paths parameters must be a schema object"
state: "open"
labels: []
author: "tero"
created: "2025-10-27T13:04:41Z"
updated: "2025-10-27T13:04:41Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2860"
---

# Nimma error: The entity at location paths parameters must be a schema object

**Describe the bug**
Moving parameters from operation level to path level causes Nimma error.

**To Reproduce**

1. Take Petstore API specification as the base https://github.com/OpenAPITools/openapi-petstore/blob/master/src/main/resources/openapi.yaml
2. From/user/{username} path move path parameter definition from get operation to path level. You should have code like below.
```  
/user/{username}:
    parameters:
      - name: username
        in: path
        description: The name that needs to be fetched. Use user1 for testing.
        required: true
        style: simple
        explode: false
        schema:
          type: string
    get:
      tags:
      - user
      summary: Get user by user name
      operationId: getUserByName
      responses:
        200:
          description: successful operation
          content:
            application/xml:
              schema:
                $ref: '#/components/schemas/User'
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        400:
          description: Invalid username supplied
        404:
          description: User not found
      x-accepts: application/json
      x-tags:
      - tag: user
```
3. Run this CLI command `npx lint-openapi openapi.yaml`
4. See error
```
[ERROR] There was a problem with spectral.
[ERROR] Error running Nimma
[ERROR] Additional error details:
[ERROR] Cause: the entity at location paths./user/{username}.parameters must be a schema object
[ERROR] At: location paths./user/{username}.parameters must be a schema object
```

**Expected behavior**
I expect to see validation output like some validation errors and warnings, but instead I get "Error running Nimma"

**Environment:**
 - OS: MacOS 26.0.1
