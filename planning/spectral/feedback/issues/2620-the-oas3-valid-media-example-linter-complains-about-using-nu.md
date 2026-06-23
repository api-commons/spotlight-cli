---
number: 2620
title: "The oas3-valid-media-example linter complains about using nullable type when using allOf.  I am using the below example schema:"
state: "open"
labels: ["t/bug", "p/medium", "triaged"]
author: "menaheme"
created: "2024-05-08T12:32:18Z"
updated: "2024-05-31T09:24:24Z"
comments: 1
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/2620"
---

# The oas3-valid-media-example linter complains about using nullable type when using allOf.  I am using the below example schema:

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

_Originally posted by @sonasingh46 in https://github.com/stoplightio/spectral/discussions/2568_
