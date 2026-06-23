---
number: 1346
title: "Incorrect example validation with oneOf and discriminator"
state: "closed"
labels: ["t/bug"]
author: "davidkvc"
created: "2020-09-18T17:30:44Z"
updated: "2021-03-15T08:43:23Z"
comments: 9
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/1346"
---

# Incorrect example validation with oneOf and discriminator

**Describe the bug**
When example of object defined as oneOf with discriminator is validated the `discriminator.propertyName` is not used to validate the example against specific schema from the oneOf array. 

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document 
```yaml
openapi: '3.0.2'
info:
  title: API Title
  version: '1.0'
servers:
  - url: https://api.server.test/v1
paths:
  /test:
    get:
      operationId: getTest

      responses:
        '200':
          content:
            application/json:
              schema:
                properties:
                  Items:
                    items:
                      $ref: '#/components/schemas/Item'
                    type: array
                required:
                  - Items
                type: object
              example:
                Items:
                  - Type: Standard
                    Name: test1
                    Id: 1
                  - Type: Extra
                    Name: test2
                    Id: 2
          description: Success

components:
  schemas:
    Item:
      discriminator:
        mapping:
          Standard: '#/components/schemas/Item/oneOf/1'
          Extra: '#/components/schemas/Item/oneOf/0'
        propertyName: Type
      oneOf:
        - properties:
            Name:
              type: string
            Type:
              type: string
            Id:
              type: number
          required:
            - Type
            - Id
            - Name
          type: object
        - properties:
            Name:
              type: string
            Type:
              type: string
            Id:
              type: number
            Extra:
              type: string
          required:
            - Type
            - Id
            - Name
            - Extra
          type: object
      required:
        - Type
```
2. Run this CLI command `spectral lint the_document.yml`
3. No error is produced even though the example response is not valid. Second element in the `Items` array is not valid according to schema definition for objects with Type=Extra

**Expected behavior**
I expect spectral to consider discriminator definition when validating schemas with oneOf definition

**Environment:**
 - Library version: 5.5.0

**Additional context**
This is even worse in situations when you meant to specify an example for the first schema in oneOf array but you get an error that your example is not valid according to the second schema in oneOf array. This happens because spectral apparently ignores discriminator definition and just validates against all of the schema definitions in oneOf array until it find one that is valid. Otherwise it generates error resulting from the validation of the last schema in the oneOf array. This leads to very confusing error messages. This is evident when we slightly edit the document:
```yaml
openapi: '3.0.2'
info:
  title: API Title
  version: '1.0'
servers:
  - url: https://api.server.test/v1
paths:
  /test:
    get:
      operationId: getTest

      responses:
        '200':
          content:
            application/json:
              schema:
                properties:
                  Items:
                    items:
                      $ref: '#/components/schemas/Item'
                    type: array
                required:
                  - Items
                type: object
              example:
                Items:
                  - Type: Standard
                    Name: null
                    Id: 1
                  - Type: Extra
                    Name: test2
                    Id: 2
          description: Success

components:
  schemas:
    Item:
      discriminator:
        mapping:
          Standard: '#/components/schemas/Item/oneOf/1'
          Extra: '#/components/schemas/Item/oneOf/0'
        propertyName: Type
      oneOf:
        - properties:
            Name:
              type: string
            Type:
              type: string
            Id:
              type: number
          required:
            - Type
            - Id
            - Name
          type: object
        - properties:
            Name:
              type: string
              nullable: true
            Type:
              type: string
            Id:
              type: number
            Extra:
              type: string
          required:
            - Type
            - Id
            - Name
            - Extra
          type: object
      required:
        - Type
```

Linting this schema generates error: ``27:21    error  oas3-valid-oas-content-example  `0` property should have required property `Extra` ``. As previously explained this error message is in my opinion wrong and can be very hard to decipher in complex schemas/examples. I would expect error message saying that `Name` property can't be null since the example should have been validated against the `Standard` schema only.
