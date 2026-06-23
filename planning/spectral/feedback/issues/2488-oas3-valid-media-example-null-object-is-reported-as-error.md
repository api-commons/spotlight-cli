---
number: 2488
title: "oas3-valid-media-example null object is reported as error "
state: "closed"
labels: []
author: "LasneF"
created: "2023-06-14T15:14:43Z"
updated: "2023-07-19T10:51:25Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2488"
---

# oas3-valid-media-example null object is reported as error 

**Describe the bug**
rules oas3-valid-media-example is too picky with null value

**To Reproduce**
given the below scheam and example 
```
responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                "$ref" : "#/components/schemas/user"
              examples:
                BOB:
                  description: |
                    sample ok
                  value:
                    name: bob
                    address:
                      street : 1 rue de rest
                      city : apicity
                ALICE:
                  description: |
                    sample nok
                  value:
                    name: bob
                    address: null
components:
  schemas:
    user:
      type: object
      properties:
        name: 
          type: string
        address:
          type: object
          properties:
            street :
              type : string
            city: 
              type : string
```

BOB is correct but ALICE is spot as an ERROR 

within the following message 
error  oas3-valid-media-example  "address" property type must be object                    paths./user.get.responses[200].content.application/json.examples.ALICE.value.address


**Expected behavior**
this should not trigger this rules but a dedicated one , may be as warning , that example should not use null value
