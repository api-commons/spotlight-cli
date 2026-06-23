---
number: 537
title: "Unused parameter error message format"
state: "closed"
labels: ["t/bug"]
author: "philsturgeon"
created: "2019-09-10T14:35:51Z"
updated: "2020-05-14T22:51:51Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/537"
---

# Unused parameter error message format

**Describe the bug**
I was building a intentionally broken file for a test, and noticed a funny looking error:

<img width="554" alt="Screen Shot 2019-09-10 at 10 30 58" src="https://user-images.githubusercontent.com/67381/64622996-13619800-d39d-11e9-9fa0-128c4a80e063.png">

Not sure why the quotes and asterix. Maybe just the quotes but definitely not the asterix.

**To Reproduce**

Lint this document on stoplight.io/spectral and it'll appear.

```
openapi: '3.0.0'
info:
  version: 1.0.0
  title: Swagger Petstore
  license:
    name: MIT
paths:
  /pets:
    get:
      summary: Info for a specific pet
      operationId: showPetById
      tags:
        - pets
      parameters:
        - name: petId
          in: path
          required: true
          description: The id of the pet to retrieve
          schema:
            type: string
      responses:
        '200':
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Pet'
components:
  schemas:
    Pet:
      required:
        - id
        - name
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string
        tag:
          type: string
```
