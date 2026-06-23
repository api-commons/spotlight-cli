---
number: 2341
title: "Cannot use 'in' operator to search for '**' in undefined"
state: "closed"
labels: ["t/bug", "p/medium", "reviewed-medium"]
author: "DymitrStinski"
created: "2022-11-16T16:57:19Z"
updated: "2023-09-06T16:47:00Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2341"
---

# Cannot use 'in' operator to search for '**' in undefined

**Describe the bug**
One of valid JSONPath stopped working after update to spectral 6.x.

**To Reproduce**

1. Given this OpenAPI document '...'

```
---
swagger: '2.0'
x-samples-languages:
  - java
x-project-id: apiv1
host: myhost.com
info:
  title: 'Order Management API'
  description: The Order Management API.
  version: '1.2'
schemes:
  - http
  - https
basePath: /v1
consumes:
  - application/json
produces:
  - application/json
tags:
  - name: Order
    description: 'Order description.'
paths:
  /orders/getOrder:
    post:
      description: Creates a request.
      operationId: getOrder
      tags:
        - Order
      parameters:
        - in: body
          name: 'getOrderRequest'
          description: Contains both required and optional elements to make a order request.
          required: true
          schema:
            $ref: '#/definitions/GetOrderRequest'
      responses:
        '200':
          description: 'Successful response.'
          schema:
            $ref: '#/definitions/GetOrderResponse'
definitions:
  GetOrderResponse:
    type: object
    description: Contains service response object with order information.
    allOf:
      - $ref: "#/definitions/Order"
      - type: object
        properties:
          Request:
            $ref: '#/definitions/GetOrderRequest'
            description: Copy of the service request object.
          errors:
            type: array
            description: Lists detailed error information. For a successful response, this element will not exist in the response.
            items:
              type: object
              required:
                - category
                - type
              properties:
                category:
                  type: string
                  example: 'BAD_REQUEST'
                  description: The category of the error.
                type:
                  type: string
                  example: 'REQUIRED_FIELD_MISSING'
                  description: The type of the error.
                description:
                  type: string
                  example: 'may not be null'
                  description: The detailed description of the error.

  GetOrderRequest:
    type: object
    description: Contains both required and optional elements to make a request.
    required:
      - confirmationId
    properties:
      confirmationId:
        type: string
        pattern: '^[A-Z0-9]{6,}$'
        example: 'ABCDEF'
        description: The order reference ID.
      givenName:
        type: string
        example: 'John'
        description: The first name.
      middleName:
        type: string
        example: 'W'
        description: The middle name or the initial of the middle name.
      surname:
        type: string
        example: 'Smith'
        description: The last name.

  Order:
    type: object
    description: Contains order information.
    properties:
      contactInfo:
        type: string
        description: Contains contact information for the order.

```

2. and rule:

```
"example-rule": {
    "description": "Example rule.",
    "resolved": false,
    "given": [
        "$.definitions.*",
        "$.components.schemas.*",
        "$.paths.*.parameters.*.schema.*"
    ],
    "then": {
        "function": truthy
    }
}
```

3. Run this rule from JS API

4. See error:

```
Cannot use 'in' operator to search for '**' in undefined
TypeError: Cannot use 'in' operator to search for '**' in undefined
    at Object.get (C:\SabreDeveloper\src\api-first-framework\api-first-linter\node_modules\nimma\dist\legacy\cjs\runtime\traverse.js:97:17)
    at _traverseBody (C:\SabreDeveloper\src\api-first-framework\api-first-linter\node_modules\nimma\dist\legacy\cjs\runtime\traverse.js:8:23)
    at _traverse (C:\SabreDeveloper\src\api-first-framework\api-first-linter\node_modules\nimma\dist\legacy\cjs\runtime\traverse.js:41:7)
    at Scope.zonedTraverse (C:\SabreDeveloper\src\api-first-framework\api-first-linter\node_modules\nimma\dist\legacy\cjs\runtime\traverse.js:56:5)
    at Scope.traverse (C:\SabreDeveloper\src\api-first-framework\api-first-linter\node_modules\nimma\dist\legacy\cjs\runtime\scope.js:92:30)
    at Nimma.eval (eval at query (C:\SabreDeveloper\src\api-first-framework\api-first-linter\node_modules\nimma\dist\legacy\cjs\core\index.js:66:71), <anonymous>:48:11)
    at Nimma.query (C:\SabreDeveloper\src\api-first-framework\api-first-linter\node_modules\nimma\dist\legacy\cjs\core\index.js:68:71)
    at execute (C:\SabreDeveloper\src\api-first-framework\api-first-linter\node_modules\@stoplight\spectral-core\src\runner\runner.ts:96:9)
    at Runner.run (C:\SabreDeveloper\src\api-first-framework\api-first-linter\node_modules\@stoplight\spectral-core\src\runner\runner.ts:64:7)
    at Spectral.runWithResolved (C:\SabreDeveloper\src\api-first-framework\api-first-linter\node_modules\@stoplight\spectral-core\src\spectral.ts:70:18)
```


**Expected behavior**
run with no errors

**Environment:**

Library version: 6.3.0
OS: Windows 10
