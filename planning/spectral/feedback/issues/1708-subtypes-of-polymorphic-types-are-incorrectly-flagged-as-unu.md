---
number: 1708
title: "Subtypes of polymorphic types are incorrectly flagged as unused definitions"
state: "open"
labels: ["triaged"]
author: "ggoodvmw"
created: "2021-07-01T23:17:54Z"
updated: "2025-12-16T14:00:05Z"
comments: 3
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/1708"
---

# Subtypes of polymorphic types are incorrectly flagged as unused definitions

**Describe the bug**
When a polymorphic type is "subtyped" using allOf, and only the parent type is actually used in an operation, the subtype is incorrectly flagged as being unused.

**To Reproduce**
Using Spectral 5.9.1

1. Given this OpenAPI/AsyncAPI document:

        swagger: "2.0"
        info:
          description: "Bug example"
          version: "1.0.0"
          title: "Swagger Petstore"
          termsOfService: "http://swagger.io/terms/"
          contact:
            email: "apiteam@swagger.io"
          license:
            name: "Apache 2.0"
            url: "http://www.apache.org/licenses/LICENSE-2.0.html"
        host: "petstore.swagger.io"
        basePath: "/v2"
        tags:
        - name: "pet"
          description: "Everything about your Pets"
          externalDocs:
            description: "Find out more"
            url: "http://swagger.io"
        - name: "store"
          description: "Access to Petstore orders"
        - name: "user"
          description: "Operations about user"
          externalDocs:
            description: "Find out more about our store"
            url: "http://swagger.io"
        schemes:
        - "https"
        - "http"
        paths:
          /pet:
            post:
              tags:
              - "pet"
              summary: "Add a new pet to the store"
              description: "Add a new pet to the store"
              operationId: "addPet"
              consumes:
              - "application/json"
              - "application/xml"
              produces:
              - "application/xml"
              - "application/json"
              parameters:
              - in: "body"
                name: "body"
                description: "Pet object that needs to be added to the store"
                required: true
                schema:
                  $ref: "#/definitions/Pet"
              responses:
                "200":
                  description: "Success"
                "405":
                  description: "Invalid input"
        definitions:
          Pet:
            type: "object"
            required:
            - "name"
            - "photoUrls"
            - "petType"
            discriminator: petType
            properties:
              petType:
                type: "string"
              id:
                type: "integer"
                format: "int64"
          Cat:
            type: "object"
            allOf:
              - $ref: "#/definitions/Pet"
              - properties:
                  meowVolume:
                    type: integer

2. Run this CLI command

        spectral lint example.yaml

3. See error

        OpenAPI 2.0 (Swagger) detected

        /tmp/example.yaml
         70:7  warning  oas2-unused-definition  Potentially unused definition has been detected.  definitions.Cat

        ✖ 1 problem (0 errors, 1 warning, 0 infos, 0 hints)

**Expected behavior**
I would expect that "Cat" is not flagged as an unused definition. Its "parent" type "Pet" is used in the POST API, so it's legal to pass a Cat to the POST.

**Environment (remove any that are not applicable):**
 - OS: MacOS Big Sur
