---
number: 1010
title: "The example parse incorrect, if the field type is object or the format is date-time"
state: "closed"
labels: ["t/bug"]
author: "trheyi"
created: "2020-03-12T10:29:47Z"
updated: "2020-04-02T06:36:20Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1010"
---

# The example parse incorrect, if the field type is object or the format is date-time

**Describe the bug**
1. IF the field type is `object`.  `example` parse incorrectly. 
The error message is: **Example should have either a `value` or `externalValue` field.**
2. IF the field type is `string` and the format is `date-time`,  `example` parse incorrectly. 
The error message is: **`example` property format should match format `date-time`**

**To Reproduce**
The OAS 3.0.0 file is: 
```yml
openapi: 3.0.0
servers:
  - description: playground.yaojs.org
    url: 'https://playground.yaojs.org/api/test/pet'
info:
  description: 'The pets.this model for unit testing only (Based on `metadata`,  Updated at `2020-03-12 10:05:44` )'
  version: 1.0.0
  title: Pet
  contact:
    name: Max
    email: max@diancloud.com
    url: 'https://www.yaojs.org/about'
  license:
    name: Apache License 2.0
    url: 'https://github.com/YaoApp/yao-php/blob/master/LICENSE'
tags:
  - name: open
    description: The open APIs with JWT auth.
  - name: admin
    description: The APIs for administrators only.
paths:
  /search:
    get:
      x-bind: "YaoPHP\\Test\\Model\\Pet::search($r->params);"
      summary: Search Pet.
      description: 'Search Pet, by the index conditions.'
      tags:
        - open
      security:
        - openAuth: []
      operationId: openSearch
      parameters:
        - in: query
          name: select
          description: 'Select fields. The value is fields string split by comma, The Default is null, select all indexes fields.'
          schema:
            type: string
      responses:
        '200':
          description: Return the Pet Object array with pagination info.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/testPetObjectPagination'
        '400':
          description: The error caused by client input.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ExceptionClient'
        '500':
          description: The error caused by server side error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ExceptionServer'
components:
  securitySchemes:
    openAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
    adminAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
  schemas:
    testPetObjectPagination:
      type: object
      properties:
        data:
          type: array
          title: Pet
          description: The Pet object array.
          items:
            $ref: '#/components/schemas/testPetObject'
        curr:
          type: integer
          title: Current Page
          description: The current page
          example: 1
        prev:
          type: integer
          title: Previous Page
          description: The previous page
          example: 0
        next:
          type: integer
          title: Next Page
          description: The next page
          example: 2
        last:
          type: integer
          title: Last Page
          description: The last page
          example: 5
        from:
          type: integer
          title: From
          description: The begin line number of the record sets.
          example: 1
        to:
          type: integer
          title: To
          description: The end line number of the record sets.
          example: 15
        perpage:
          type: integer
          title: Perpage
          description: The amount each page display.
          example: 15
        total:
          type: integer
          title: Total
          description: The total records set.
          example: 72
      required:
        - data
        - curr
        - prev
        - next
        - last
        - from
        - to
        - perpage
        - total
    testPetObject:
      type: object
      properties:
        id_pet:
          type: integer
          format: int64
          title: ID
          description: The pet id. Made up by number.
          example: 1024
        id_category:
          type: string
          title: Category ID
          description: The category of pet(UUID)
          example: 2F674921BBFF42D4A9BCA1C1124118CF
        slug:
          type: string
          title: Slug
          description: 'The slug name, Unique string.'
          example: My-Cat-Cookie
        tags:
          type: string
          title: Tags
          description: Tags of the pet. Multiple splits with comma
          example: 'Cat,Black'
        name:
          type: string
          title: Name
          description: The pet name.
          example: Cookie
        feature:
          type: object
          title: Feature
          description: The pet features.
          example:
            body-color: black
            eye-color: blue
        markdown:
          type: string
          title: Description
          description: Description. Markdown format
          example: null
        created_at:
          type: string
          format: date-time
          title: Created At
          description: The record created at
          example: '2020-03-12 10:05:44'
        updated_at:
          type: string
          format: date-time
          title: Updated At
          description: The record updated at
          example: '2020-03-12 10:05:44'
    ExceptionClient:
      type: object
      required:
        - code
        - message
      properties:
        code:
          type: integer
          title: Code
          description: 400~499 The error caused by client input.
          example: 400
        message:
          type: string
          title: Message
          description: The description of the error.
          example: The resource does not exist
        context:
          type: object
          title: Context
          description: The context data when the error occurred.
          additionalProperties: true
          example:
            fields:
              - id_user
            messages:
              id_user: The user does not exist
    ExceptionServer:
      type: object
      required:
        - code
        - message
      properties:
        code:
          type: integer
          title: Code
          description: 500~599 The error caused by server side error.
          example: 500
        message:
          type: string
          title: Message
          description: The description of the error.
          example: "The file can't be saved, disk space not enough."
        context:
          type: object
          title: Context
          description: The context data when the error occurred.
          additionalProperties: true
          example:
            path: /storage/upload/test.jpg

```
**Expected behavior**
It should be correct.    ( It worked correctly on Swagger Editor )

**Screenshots**
[The screen shot](https://pasteboard.co/IYJDogg.png)

**Environment**
- Spectral: [5.0.0]
- Stoplight Studio: [1.10.2]
