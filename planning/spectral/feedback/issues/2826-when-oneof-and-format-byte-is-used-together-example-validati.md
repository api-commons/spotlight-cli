---
number: 2826
title: "When oneOf and format: byte is used together, example validation wrongly fails"
state: "open"
labels: []
author: "Fethbita"
created: "2025-06-12T10:20:51Z"
updated: "2025-06-12T10:45:50Z"
comments: 0
reactions_total: 1
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2826"
---

# When oneOf and format: byte is used together, example validation wrongly fails

**Describe the bug**

In a response field, if response schema uses `oneOf` and a property in the `oneOf` objects has the `format: byte`, the `byte` example validation fails. Base64 values have padding and are always padded to a multiple of 4, but the validation only succeeds in this particular case if the length of the example value is **not** a multiple of 4.

**To Reproduce**

```yml
openapi: 3.1.1
info:
  title: User API
  contact:
    name: Acme Corporation
    url: https://example.com
    email: acme@example.com
  description: The User API allows managing users.
  version: 0.1.0
servers:
- url: https://example.com
tags:
- name: pets
paths:
  /pets/{petId}:
    patch:
      summary: Update a pet
      description: Update a pet
      operationId: updatePet
      tags:
        - pets
      parameters:
        - $ref: '#/components/parameters/petId'
      responses:
        "200":
          $ref: '#/components/responses/UpdatedPetResponse'

components:
  parameters:
    petId:
      name: petId
      in: path
      description: ID of pet to update
      required: true
      schema:
        type: string
  responses:
    UpdatedPetResponse:
      description: Pet updated
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Pet'
          examples:
            Updated Pet Example:
              $ref: '#/components/examples/UpdatedPetExample'
  schemas:
    Pet:
      type: object
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string
        tag:
          type: string
        pet:
          oneOf:
          - $ref: '#/components/schemas/PetOne'
          - $ref: '#/components/schemas/PetTwo'
          - $ref: '#/components/schemas/PetThree'
      
    PetOne:
      type: object
      properties:
        one:
          type: string
    PetTwo:
      type: object
      properties:
        one:
          type: string
        two:
          type: string
          format: byte
    PetThree:
      type: object
      properties:
        one:
          type: string
        two:
          type: string
          format: byte
        three:
          type: string

  examples:
    UpdatedPetExample:
      summary: Pet updated
      value:
        id: 123
        name: test
        tag: test
        pet:
          one: one
          two: MzJlZDJlYWNhYzg1YjhlZjc0YzI4MmFlMWVjMTU4MzllOWU1ZDVhNQ==
          three: three
```

With the above example, the example value `MzJlZDJlYWNhYzg1YjhlZjc0YzI4MmFlMWVjMTU4MzllOWU1ZDVhNQ==` will fail the validation with an ambiguous error like: 
```
"pet" property must match exactly one schema in oneOf
```

However if the value is edited, for example by deleting a single character, the validation will succeed. This failed our CI/CD pipelines after adding a new schema in the `oneOf`, so in this example if `PetOne` schema is removed from the `oneOf` array, the byte validation starts succeeding.

**Expected behavior**
The schema is valid and should not give an error.
