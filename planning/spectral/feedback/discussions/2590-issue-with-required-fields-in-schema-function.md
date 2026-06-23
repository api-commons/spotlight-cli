---
number: 2590
title: "Issue with required fields in schema function"
category: "Q&A"
author: "jcdebosschere"
created: "2024-02-21T22:15:07Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2590"
---

# Issue with required fields in schema function

Hello,

I'm in trouble with this rule: 

``` json
"normal-response-must-return-standard-structure": {
    "description": "Non-error response MUST contain a standard object with data and metadata (including self/href) properties.",
    "message": "Non-error response MUST contain a standard object with data and metadata properties. Details: {{error}}",
    "given": ["$.paths.*.[get,post,put].responses.[200,201].content.application/json"],
    "severity": "error",
    "then": [
        {
            "function": schema,
            "functionOptions": {
                "allErrors": true,
                "schema": {
                    "type": "object",
                    "required": ["metadata", "data"],
                    "properties": {
                        "metadata": {
                            "type": "object",
                            "required": ["self"],
                            "properties": {
                                "self": {
                                    "type": "object",
                                    "properties": {
                                        "href": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "data": {
                            "oneOf": [
                                { "type": "object" },
                                { "type": "array" }
                            ]
                        }
                    }
                }
            }
        }
    ]
},
```

I'm trying to validate that part of an OAS:
``` yaml
paths:
  /documents:
    post:
      requestBody:
        content:
          application/json:
            schema:
              type: object
              required:
                - data
              properties:
                data:
                  $ref: '#/components/schemas/Document'
      responses:
        '201':
          content:
            application/json:
              schema:
                type: object
                  required:
                    - metadata
                    - data
                  properties:
                    metadata:
                      required: [self]
                      readOnly: true
                      properties:
                        self:
                          $ref: '#/components/schemas/Href'
                    data:
                      $ref: '#/components/schemas/Document'

components:
 schemas:
    Document:
      type: object
      properties:
        documentId:
          type: string
        sourceLang:
          type: string
    Href:
      type: object
      required:
        - href
      properties:
        href:
          $ref: '#/components/schemas/Url'
    Url:
      type: string
      format: uri
```
I'm getting the following errors when linting:

(...) Non-error response MUST contain a standard object with data and metadata properties. Details: "schema" property must have required property "metadata"  paths./documents.post.responses[201].content.application/json
(...) Non-error response MUST contain a standard object with data and metadata properties. Details: "schema" property must have required property "data"      paths./documents.post.responses[201].content.application/json

I have Jest test cases that validate the rule. If I remove the 'required' elements in the rule, there is no error but the tests are failing because having just one of data or metadata is considered as OK, which is not the goal. 

Adding ".schema" at the end of the 'given' clause doesn't help neither. 

I'm really out of clue and any help would be very appreciated.
