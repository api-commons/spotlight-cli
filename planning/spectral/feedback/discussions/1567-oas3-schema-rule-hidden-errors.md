---
number: 1567
title: "`oas3-schema` rule - hidden errors"
category: "General"
author: "barrett-schonefeld"
created: "2021-04-05T15:41:15Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/1567"
---

# `oas3-schema` rule - hidden errors

***Note: I opened a bug report outlining this same information in #1568. I apologize for duplicating the information, but an issue is a better forum for this discussion. Feel free to delete this discussion in favor of #1568.***

The `oas3-schema` rule seems to only show one error at a time. This means that repairing the given error may only reveal another `oas3-schema` error. This pattern of correcting errors to reveal more errors makes the user resolve problems one-at-a-time, invoking Spectral each time until all errors are resolved.

Below is an example document meant to illustrate discriminator errors (the document is not meant to describe a real, useful API). It provides two different examples of invalid discriminators. Yet, when I run Spectral against this document, I get only one error for the first schema with the discriminator field that is not an object. Then, if I remove or fix the first schema, the error for the missing `propertyName` field is revealed.

```yaml
openapi: "3.0.0"
info:
  description: Sample API definition
  version: 1.0.0
  title: Swagger Petstore
  license:
    name: MIT
    url: "http://www.apache.org/licenses/LICENSE-2.0.html"
  contact:
    email: "apiteam@swagger.io"
servers:
  - url: http://petstore.swagger.io/v1
tags:
  - name: pets
    description: A pet
paths:
  /pets/{pet_id}:
    get:
      summary: Info for a specific pet
      description: Get information about a specific pet
      operationId: get_pet_by_id
      tags:
        - pets
      parameters:
        - name: pet_id
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
                $ref: "#/components/schemas/PetDiscriminatorNotObject"
        '201':
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/PetDiscriminatorMissingPropertyNameField"
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
components:
  schemas:
    PetDiscriminatorNotObject:
      discriminator: ''
      description:
        A pet
      properties:
        id:
          type: integer
          format: int64
          description: "id property"
        name:
          type: string
          description: "name property"
        tag:
          type: string
          description: "tag property"
      example:
        id: 1
        name: doggie
        tag: dog
    PetDiscriminatorMissingPropertyNameField:
      discriminator: {}
      description:
        A pet
      properties:
        id:
          type: integer
          format: int64
          description: "id property"
        name:
          type: string
          description: "name property"
        tag:
          type: string
          description: "tag property"
      example:
        id: 1
        name: doggie
        tag: dog
    Error:
      description:
        An error in processing a service request
      required:
        - code
        - message
      properties:
        code:
          type: integer
          format: int32
          description: "code property"
        message:
          type: string
          description: "message property"
      example:
        code: 123
        message: "error occurred"
```

First, please let me know if I have laid this out properly and if the behavior is reproducible.
If so, is there a particular reason or use case in mind on which this behavior is based?
Would it seem desirable in the Spectral team and in the Spectral community to show all schema errors?
