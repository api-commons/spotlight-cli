---
number: 2568
title: "\"nullable\" cannot be used without \"type\" linter error"
category: "General"
author: "sonasingh46"
created: "2024-01-03T10:36:31Z"
upvotes: 2
comments: 1
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2568"
---

# "nullable" cannot be used without "type" linter error

The oas3-valid-media-example linter complains about using nullable type when using allOf.  I am using the below example schema: 
```yaml
openapi: 3.0.1
info:
  title: User API
  description: The User API allows managing users.
  version: 0.1.0
paths:
  /api/v1/user:
    patch:
      summary: Patch User
      operationId: patchUser
      requestBody:
        description: Patch user body
        required: true
        content:
          application/json:
            example:
              Name: test
            schema:
              $ref: "#/components/schemas/PatchRequest"
      responses:
        "200":
          description: The patched user.
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Name"

components:
  schemas:
    Name:
      type: string
      description: Name of the user.
      maxLength: 255
      minLength: 1

    ID:
      type: string
      description: ID of the user.
      maxLength: 255
      minLength: 1

    PatchRequest:
      description: Patch user
      allOf:
        - $ref: "#/components/schemas/Name"
        - $ref: "#/components/schemas/ID"
      minProperties: 1
      nullable: true
```

Why does the linter complain while using nullable:true ? Also, when i remove the example from the spec, the error goes away. I am using this code generator https://github.com/deepmap/oapi-codegen and it generates the code as expected and works fine.
