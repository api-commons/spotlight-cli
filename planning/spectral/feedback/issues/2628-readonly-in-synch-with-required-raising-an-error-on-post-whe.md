---
number: 2628
title: "ReadOnly in synch with required raising an error on POST where it should not "
state: "closed"
labels: ["t/bug", "p/medium", "triaged", "OpenAPI", "jira"]
author: "LasneF"
created: "2024-05-31T12:34:43Z"
updated: "2024-09-23T15:13:06Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2628"
---

# ReadOnly in synch with required raising an error on POST where it should not 

**Describe the bug**

given an attribute set readOnly , and as part of the required list ,  Spectral raises an error 
oas3-valid-media-example ,  property must have required property "XXX"

Looks the context of usage here in a POST is not taken into account 

**To Reproduce**

leveraging the spec below just run spectral lint 

it raises 
 39:13    error  oas3-valid-media-example             "value" property must have required property "id"                                                        components.examples.Medor.value 
 
 
```
openapi: 3.1.0

info: 
  title: "sample"
  version: "sample"
  
paths:
  /dogs:
    post:
      requestBody:
        content:
          application/json:
            schema:
                $ref: '#/components/schemas/Dogs'
            examples:
              Simple:
                $ref: '#/components/examples/Medor' 
      responses:
        '200':
          description: nice Dog

  
components:
  schemas:
    Dogs:
        type: object
        required: 
          -  id
        properties:
            id: 
              readOnly: true
              type: integer
            name: 
              type: "string"
  examples: 
    Medor: 
      description: |
        A simple pricing request on a single product.
      value:
        name : "Medor le chien"
```

**Expected behavior**
looking on https://github.com/OAI/learn.openapis.org/issues/101 ,
and the statement 
" If the property is marked as readOnly being true and is in the required list, the required will take effect on the response only."

the field should not raise such error 

**Environment (remove any that are not applicable):**
Tested leveraging spectral  6.11.1 on windows 

**Additional context**
Add any other context about the problem here.
