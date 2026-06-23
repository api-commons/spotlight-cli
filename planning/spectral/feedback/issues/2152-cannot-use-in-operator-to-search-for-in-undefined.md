---
number: 2152
title: "Cannot use 'in' operator to search for '**' in undefined"
state: "closed"
labels: ["t/bug", "released"]
author: "DymitrStinski"
created: "2022-05-06T14:10:37Z"
updated: "2022-05-19T19:12:34Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2152"
---

# Cannot use 'in' operator to search for '**' in undefined

**Describe the bug**
One of valid JSONPath stopped working after update to spectral 6.x.

**To Reproduce**
1. Given this OpenAPI/AsyncAPI document '...'
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
and rule:
  ```
camel-case-property-name:
    description: "Name of property must be provided in camelCase notation."
    severity: error
    type: style
    resolved: false
    given:
      - "$.definitions.*.properties"
      - "$.definitions.*.allOf.*.properties"
    then:
      field: "@key"
      function: casing
      functionOptions:
        type: camel
```
3. Run this CLI command:
`npx spectral lint -r rules.yaml spec.yaml`

5. See error
```
Error running Spectral!
Use --verbose flag to print the error stack.
Error #1: Cannot use 'in' operator to search for '**' in undefined
```

**Expected behavior**
` 49:19  error  camel-case-property-name  Name of property must be provided in camelCase notation. definitions.GetOrderResponse.allOf[1].properties.Request`

**Environment:**
 - Library version: 6.3.0
 - OS: Windows 10
