---
number: 1570
title: "Can't export rightly output with docker image"
state: "closed"
labels: ["enhancement"]
author: "prousso"
created: "2021-04-06T15:36:07Z"
updated: "2023-03-23T16:14:37Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1570"
---

# Can't export rightly output with docker image

**Describe the bug**
When I want to export output with docker image (same result with latest or master) I got all espace sequences when there are error in my specification

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document :
```yaml
openapi: "3.0.0"
info:
  version: 1.0.0
  title: Swagger Petstore
  license:
    name: MIT
servers:
  - url: http://petstore.swagger.io/v1
paths:
  /pets:
      summary: List all pets
      operationId: listPets
      tags:
        - pets
      parameters:
        - name: limit
          in: query
          description: How many items to return at one time (max 100)
          required: false
          schema:
            type: integer
            format: int32
      responses:
        '200':
          description: A paged array of pets
          headers:
            x-next:
              description: A link to the next page of responses
              schema:
                type: string
          content:
            application/json:    
              schema:
                $ref: "#/components/schemas/Pets"
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"

components:
  schemas:
    Pet:
      type: object
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
    Pets:
      type: array
      items:
        $ref: "#/components/schemas/Pet"
    Error:
      type: object
      required:
        - code
        - message
      properties:
        code:
          type: integer
          format: int32
        message:
          type: string
```
2. Run this CLI command `docker run --rm -t -v $(pwd):/app -v /tmp:/tmp stoplight/spectral:master lint --fail-severity error --display-only-failures --verbose --output /tmp/cactus -e utf8 app/my_file.yaml`
'
3. See error with escape sequences 

**Expected behavior**
Like in CLI I only want to print `error` instead of `^[[31merror^[[39m`


**Environment (remove any that are not applicable):**
 - Library version: docker image master or latest, cli 5.9.0
