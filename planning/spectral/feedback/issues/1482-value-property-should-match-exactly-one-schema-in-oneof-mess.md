---
number: 1482
title: "\"`value` property should match exactly one schema in oneOf\" message with right example"
state: "closed"
labels: ["t/bug", "cs/reported"]
author: "GillesTourreau"
created: "2021-01-16T21:37:11Z"
updated: "2021-05-11T21:02:06Z"
comments: 2
reactions_total: 5
thumbs_up: 5
url: "https://github.com/stoplightio/spectral/issues/1482"
---

# "`value` property should match exactly one schema in oneOf" message with right example

I have the following YAML example which I edit on the Stoplight Studio (Windows version)

```yaml
openapi: 3.0.0
info:
  title: Test
  version: '1.0'
servers:
  - url: 'http://localhost:3000'
paths:
  /pets:
    patch:
      requestBody:
        content:
          application/json:
            schema:
              oneOf:
                - $ref: '#/components/schemas/Cat'
                - $ref: '#/components/schemas/Dog'
            examples:
              'Cat example':
                value:    # <--- "`value` property should match exactly one schema in oneOf" error display.
                  hunts: true
                  age: 15
              'Dog example':
                value:    # <--- "`value` property should match exactly one schema in oneOf" error display.
                  bark: true
                  breed: Dingo
      responses:
        '200':
          description: Updated
components:
  schemas:
    Dog:
      type: object
      properties:
        bark:
          type: boolean
        breed:
          type: string
          enum: [Dingo, Husky, Retriever, Shepherd]
    Cat:
      type: object
      properties:
        hunts:
          type: boolean
        age:
          type: integer
```

Two errors are displayed at the line 19 and 23 which explain that the examples are invalid and does not match the `Dog` or `Cat` schemas.
Can you confirm that it is a bug of the Stoplight studio validator ?
