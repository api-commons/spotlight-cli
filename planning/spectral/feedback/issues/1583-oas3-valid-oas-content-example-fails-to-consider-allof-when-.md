---
number: 1583
title: "oas3-valid-oas-content-example fails to consider allOf when validating examples against endpoint request schema"
state: "closed"
labels: ["t/bug"]
author: "elsewhat"
created: "2021-04-26T10:13:41Z"
updated: "2021-05-06T13:32:35Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1583"
---

# oas3-valid-oas-content-example fails to consider allOf when validating examples against endpoint request schema

**Describe the bug**
The error code oas3-valid-oas-content-example is reported in situations where the OpenAPI specification uses the allOf directive and is according with the standard.

Example of reported error (see test case below): 
`error  oas3-valid-oas-content-example  Property "planningPlantId" is not expected to be here                    components.examples.create-work-order-minimal.value`

In this instance planningPlantId is present in the schema through an allOf directive. 


**To Reproduce**
1. OpenAPI test specification
```
openapi: 3.0.1
info:
  title: Example API
  version: "0.1.0"  
paths:   
  /work-order:               
    post:
      summary: Create Work order
      operationId: CreateWorkOrder
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/WorkOrderCreate'
            examples:
              create-work-order-minimal:
                $ref: '#/components/examples/create-work-order-minimal'
      responses:
        '204':
          description: Success - No content

components:
  schemas:
    WorkOrderCreateAbstract:
      type: object
      properties:
        planningPlantId:
          type: string
          example: '1100'
      additionalProperties: false          

    WorkOrderCreate:
      allOf:
        - $ref: '#/components/schemas/WorkOrderCreateAbstract'
      type: object
      properties:
        text:
          type: string
          example: '0010'
      additionalProperties: false            
      required: ["planningPlantId","text"]

  examples:
    create-work-order-minimal:
      summary: Create minimal
      value:
        text: 'Test text'
        planningPlantId: '1100'


```


2. Run this CLI command 'spectral lint'
```
C:\temp>spectral lint spectral_issue_allof_example_api.yaml
OpenAPI 3.x detected

c:/temp/spectral_issue_allof_example_api.yaml
  1:1   warning  oas3-api-servers                OpenAPI `servers` must be present and non-empty array.
  1:1   warning  openapi-tags                    OpenAPI object should have non-empty `tags` array.
  2:6   warning  info-contact                    Info object should contain `contact` object.                             info
  2:6   warning  info-description                OpenAPI object info `description` must be present and non-empty string.  info
  7:10  warning  operation-description           Operation `description` must be present and non-empty string.            paths./work-order.post
  7:10  warning  operation-tags                  Operation should have non-empty `tags` array.                            paths./work-order.post
 47:13    error  oas3-valid-oas-content-example  Property `planningPlantId` is not expected to be here                    components.examples.create-work-order-minimal.value

✖ 7 problems (1 error, 6 warnings, 0 infos, 0 hints)
```

3. See error `oas3-valid-oas-content-example  Property "planningPlantId" is not expected to be here                    components.examples.create-work-order-minimal.value` which should not have occured

**Expected behavior**
No error message should be thrown for the validation of example 'create-work-order-minimal'


**Environment (remove any that are not applicable):**
 - Library version: 5.9.1
 - OS: Windows
