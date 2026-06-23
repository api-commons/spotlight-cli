---
number: 2509
title: "oas3-valid-media-example rule cannot handle schemas with discriminator"
state: "open"
labels: ["enhancement", "triaged"]
author: "TiMESPLiNTER"
created: "2023-07-14T07:34:51Z"
updated: "2024-06-26T13:20:41Z"
comments: 1
reactions_total: 3
thumbs_up: 3
url: "https://github.com/stoplightio/spectral/issues/2509"
---

# oas3-valid-media-example rule cannot handle schemas with discriminator

**Describe the bug**
The `oas3-valid-media-example` rule cannot handle schemas with discriminator and reports various validation errors.

In this case it reports 2 errors with the below spec:

* "payload" property must match exactly one schema in oneOf
* Property "color" is not expected to be here

**To Reproduce**

Use this OpenAPI spec to reproduce:

```yaml
openapi: 3.1.0

info:
  title: Example
  description: Test
  version: 0.1.0
  contact:
    name: Pascal
    url: www.timesplinter.ch
    email: dev@timesplinter.ch

tags:
  - name: Car

servers:
  - url: https://development.cars.com

paths:
  /v1/cars:
    post:
      operationId: createCar
      description: Create
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CarCreateRequest'
            examples:
              full-request:
                $ref: '#/components/examples/car-create-request'
      responses:
        '202':
          description: Reference to the intent created based on the request
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Intent'
              examples:
                full-response:
                  $ref: '#/components/examples/car-create-response'
      tags:
        - Car
    
  /v1/cars/{carId}:
    patch:
      operationId: updateCar
      description: Update
      parameters:
        - $ref: '#/components/parameters/carId'
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CarUpdateRequest'
            examples:
              full-request:
                $ref: '#/components/examples/car-update-request'
      responses:
        '202':
          description: Reference to the intent created based on the request
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Intent'
              examples:
                full-response:
                  $ref: '#/components/examples/car-update-response'
      tags:
        - Car

components:
  parameters:
    carId:
      name: carId
      required: true
      in: path
      schema:
        type: string
        format: uuid

  examples:
    car-create-request:
      value:
        brand: "Aston Martin"
        color: "red"
        type: "CarCreateRequest"

    car-update-request:
      value:
        color: "blue"
        type: "CarUpdateRequest"

    car-create-response:
      value:
        id: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
        payload: 
          brand: "Aston Martin"
          color: "red"
          type: "CarCreateRequest"

    car-update-response:
      value:
        id: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
        payload:
          color: "blue"
          type: "CarUpdateRequest"

  schemas:
    CarCreateRequest:
      type: object
      properties:
        brand:
          type: string
          example: Audi
        color:
          type: string
          example: red
        type:
          type: string
      required:
        - brand
        - color
        - type
        
    CarUpdateRequest:
      type: object
      properties:
        color:
          type: string
          example: blue
        type:
          type: string
      required:
        - type
            
    IntentPayload:
      additionalProperties: false
      discriminator:
        propertyName: type
        mapping:
          CarCreateRequest: '#/components/schemas/CarCreateRequest'
          CarUpdateRequest: '#/components/schemas/CarUpdateRequest'
      oneOf:
        - $ref: '#/components/schemas/CarCreateRequest'
        - $ref: '#/components/schemas/CarUpdateRequest'
           
    Intent:
      type: object
      additionalProperties: false
      properties:
        id:
          type: string
          format: uuid
          example: 3fa85f64-5717-4562-b3fc-2c963f66afa6
        payload:
          $ref: '#/components/schemas/IntentPayload'
      required:
        - id
        - payload

``` 

**Expected behavior**
The above API spec should be valid.

**Screenshots**
![image](https://github.com/stoplightio/spectral/assets/598854/cf393b42-f8a3-4ff9-8b4e-71aa6334c21d)

**Environment (remove any that are not applicable):**
 - Library version: 6.7.0
 - OS: Ubuntu 20
 - Browser: Insomnia app

**Additional context**
None.
