---
number: 2775
title: "I want to create a spectral ruleset that checks whether 200 or 400 responses have a schema.$ref tag"
state: "open"
labels: ["question"]
author: "nandeshwarshubh"
created: "2025-02-04T09:34:35Z"
updated: "2025-04-25T08:58:11Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2775"
---

# I want to create a spectral ruleset that checks whether 200 or 400 responses have a schema.$ref tag

I want to create a spectral ruleset that checks whether 200 or 400 responses have a schema.$ref tag

OPEN API YAML - myapi.yaml
```yaml
openapi: 3.0.3
info:
  title: Simple API
  description: A simple OpenAPI specification with a single endpoint
  version: 1.0.0
paths:
  /example:
    post:
      summary: Example API endpoint
      description: Accepts a request DTO and returns a response DTO
      operationId: exampleOperation
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/RequestDTO'
      responses:
        "200":
          description: Successful response
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ResponseDTO'
        "400":
          description: Bad request
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ExceptionDTO'
components:
  schemas:
    RequestDTO:
      type: object
      properties:
        id:
          type: string
          format: uuid
        name:
          type: string
      required:
        - id
        - name
    ResponseDTO:
      type: object
      properties:
        message:
          type: string
        timestamp:
          type: string
          format: date-time
      required:
        - message
        - timestamp
    ExceptionDTO:
      type: object
      properties:
        error:
          type: string
        details:
          type: string
      required:
        - error
```

My custom spectral ruleset - .spectral.yaml
```yaml
rules:
  response-schema-ref-required:
    description: "Responses with status codes 200, 400, or 500 must have a schema with a $ref key."
    message: "Response schema must reference a schema via $ref."
    severity: error
    given: "$.paths[*][*].responses[200,400,500].content[*].schema"
    then:
      field: $ref
      function: truthy
```

run - npx spectral lint myapifile.yaml

Response - 
/Users/myuser/Downloads/spectral-demo/myapifile.yaml
 47:17  error  response-schema-ref-required  Response schema must reference a schema via $ref.  components.schemas.ResponseDTO
 59:18  error  response-schema-ref-required  Response schema must reference a schema via $ref.  components.schemas.ExceptionDTO

![Image](https://github.com/user-attachments/assets/4bf8b5d3-9667-49a5-b801-93ed06ce7c19)


Why is it checking in components.schemas when we have specifically mentioned - given: "$.paths ?
