---
number: 1945
title: "Spectral does not distinquish paths with different path variables"
state: "closed"
labels: ["chore"]
author: "adamzareba"
created: "2021-11-05T11:15:10Z"
updated: "2021-11-10T08:13:05Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1945"
---

# Spectral does not distinquish paths with different path variables

**Chore summary**
Spectral linter throws an error in case of OpenApi 3.0 specification contains the same paths with different path variable name. 
```
 32:19  error  path-params  The paths `/pets/{petId}` and `/pets/{ownerId}` are equivalent.  paths./pets/{ownerId}
```

**Tasks**
- define OpenAPI specification, like:
```
openapi: "3.0.0"
info:
  version: 1.0.0
  title: Swagger Petstore
  description: Swagger Petstore
  contact:
    name: Swagger Petstore

tags:
  - name: pets
    description: Pets

paths:
  /pets/{petId}:
    get:
      operationId: showPetById
      description: Info for a specific pet
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
        default:
          description: unexpected error
  /pets/{ownerId}:
    put:
      operationId: updateOwnersPets
      description: Updates pets
      parameters:
        - name: ownerId
          in: path
          required: true
          description: The id of the pet's owner
          schema:
            type: string
      tags:
        - pets
      responses:
        '201':
          description: Null response
        default:
          description: unexpected error
```
- Run validation: 
```
spectral lint petstore.yaml
```

**Additional context**
Spectral (5.9.1)
OS: Windows
