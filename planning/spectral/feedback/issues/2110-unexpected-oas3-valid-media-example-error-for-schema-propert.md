---
number: 2110
title: "unexpected oas3-valid-media-example error for schema property that overrides another's type"
state: "closed"
labels: []
author: "pedrodovale"
created: "2022-03-31T09:02:38Z"
updated: "2022-04-08T14:32:58Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2110"
---

# unexpected oas3-valid-media-example error for schema property that overrides another's type

Hi!

I'm trying to define a common search shema shared amongst different Open API documents. One of these documents needs to extend the schema and change the type to array of one of its properties. Then it's defining an example for a request body that uses this schema. However, spectral is reporting an error, stating that the example should be the original type, rather than the array. 

Since other tools I'm using are able to cope with this, I assume that this is a bug in spectral. If that's not the case, can someone explain what I can do to improve the Open API document below? Thank you in advance.

I made a simplified document of what I'm trying to accomplish. Here's how to reproduce the bug:

Given this Open API document:

*openapi.yaml*
````yaml
openapi: 3.0.3
info:
  title: API
  version: 1.0.0
servers:
  - url: https://api.com/
paths:
  /:
    post:
      tags: []
      summary: Your GET endpoint
      description: Your GET endpoint
      operationId: get-endpoint
      requestBody:
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/ExtendedSearch"
            examples:
              example1:
                value:
                  criteria:
                    - field: 'name'
        required: true
      responses:
        "200":
          description: OK
          content:
            application/json:
              schema:
                properties:
                  error:
                    type: string
components:
  schemas:
    Search:
      type: object
      properties:
        criteria:
          type: object # criteria original type
    ExtendedSearch:
      allOf:
        - $ref: '#/components/schemas/Search'
        - type: object
          properties:
            criteria:
              type: array # override criteria original type
              items:
                $ref: '#/components/schemas/ExtendedSearchCriteria'
    ExtendedSearchCriteria:
      type: object
      properties:
        field:
          type: string
          enum: [ name, status, createdDate, lastModifiedDate ]

````

and this rule set:

*ruleset.yaml*
````yaml
extends:
  - spectral:oas
````

when I execute this command:

````
spectral lint --ruleset ruleset.yaml openapi.yaml
````

the output includes the following:

````
22:28    error  oas3-valid-media-example    "criteria" property type must be object    paths./.post.requestBody.content.application/json.examples.example1.value.criteria
````

contrary to what I expected:
- no errors reported

Some additional notes:
- I'm using Spectral v6.1.0
- Accordingly, Prism returns `must be object` for this this request:
````
curl -X POST http://127.0.0.1:4010/ --header "Content-Type: application/json" --data '{"criteria":[]}'
````
