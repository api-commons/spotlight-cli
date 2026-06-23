---
number: 2090
title: "oas3-valid-media-example incorrect error when validating multipleOf "
state: "open"
labels: ["t/bug", "triaged"]
author: "JvNoordenburg"
created: "2022-03-15T09:21:20Z"
updated: "2025-07-10T13:16:53Z"
comments: 7
reactions_total: 2
thumbs_up: 2
url: "https://github.com/stoplightio/spectral/issues/2090"
---

# oas3-valid-media-example incorrect error when validating multipleOf 

**Describe the bug**
When using the `multipleOf` validation keyword, a valid number sometimes results in an error when using the spectral-cli

**To Reproduce**

1. Given this OAS3 document 
```yaml
openapi: 3.0.3
info:
  title: calculation-api
  description: |
    The calculation API.
  version: 0.0.1
  contact:
    name: test
    email: test@mail.com
tags:
  - name: Loan
    description: |
      Calculations related to loans.
paths:
  /loan-to-market-value-calculations:
    post:
      tags:
        - Loan
      summary: Calculates the loan to market value.
      description: |
        Calculates the loan to market value.
      operationId: CalculateLoanToMarketValue
      requestBody:
        $ref: '#/components/requestBodies/CalculateLoanToMarketValueRequest'
      responses:
        '200':
          $ref: '#/components/responses/CalculateLoanToMarketValueResponse'
  
components:  
  requestBodies:    
    CalculateLoanToMarketValueRequest:
      description: |
        The request body of CalculateLoanToMarketValue.
      required: true
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/LoanRealEstateLtmv'
          examples:
            calculate-loan-to-market-value:
              description: |
                The information of a loan and a real estate used to calculate the loan to market value.
              value:
                loan:
                  residualDebt: 4000.10
                realEstate:
                  marketValue: 3000.03  

  responses:   
    CalculateLoanToMarketValueResponse:
      description: |
        The successful response of CalculateLoanToMarketValue.
      content:
        application/json:
          schema:
            description: |
              The information of the calculated loan to market value.
            type: object
            required:
              - loanToMarketValue
            additionalProperties: false
            properties:
              loanToMarketValue:
                description: |
                  The calculated loan to market value.
                type: number
                format: decimal
                multipleOf: 0.000001
          examples:
            calculate-loan-to-market-value:
              description: |
                An example of the calculated loan to market value.
              value:
                loanToMarketValue: 75.001     
            another-calculate-loan-to-market-value:
              description: |
                Another example of the calculated loan to market value.
              value:
                loanToMarketValue: 75.0001  
            yet-another-calculate-loan-to-market-value:
              description: |
                Yet another example of the calculated loan to market value.
              value:
                loanToMarketValue: 75 

  schemas:        
    LoanRealEstateLtmv:
      description: |
        The information of a loan and a real estate used to calculate the loan to market value.
      type: object
      required:
        - loan
        - realEstate
      additionalProperties: false
      properties:
        loan:
          $ref: '#/components/schemas/LoanRealEstateLtmv.Loan'
        realEstate:
          $ref: '#/components/schemas/LoanRealEstateLtmv.RealEstate'

    LoanRealEstateLtmv.Loan:
      description: |
        The information of a loan used to calculate the loan to market value.
      type: object
      required:
        - residualDebt
      additionalProperties: false
      properties:
        residualDebt:
          description: |
            The total outstanding balance of the loan.
          type: number
          format: decimal
          multipleOf: 0.01

    LoanRealEstateLtmv.RealEstate:
      description: |
        The information of a real estate used to calculate the loan to market value.
      type: object
      required:
        - marketValue
      additionalProperties: false
      properties:
        marketValue:
          description: |
            The (estimated) market value of a real estate.
          type: number
          format: decimal
          multipleOf: 0.01
```

Ruleset:
```yaml
extends: 
- spectral:oas

# See https://meta.stoplight.io/docs/spectral/ZG9jOjExNw-open-api-rules
rules:

  #
  # OAS 3
  #

  # TODO: Make sure servers is always empty
  # OpenAPI servers must be present and non-empty array.
  oas3-api-servers: false

  # TODO: Ensure an example value is always present
  # Examples for requestBody or response examples can have an externalValue or a value, but they cannot have both
  oas3-examples-value-or-externalValue: true

  # Operation security values must match a scheme defined in the components.securitySchemes object
  oas3-operation-security-defined: true

  # TODO: Make sure servers is always empty
  # Server URL should not point at example.com.
  oas3-server-not-example.com: true

  # Server URL should not have a trailing slash.
  oas3-server-trailing-slash: true

  # Unused components should be removed
  oas3-unused-component: true

  # Examples must be valid against their defined schema.
  oas3-valid-media-example: true

  # Validate the structure of OAS v3
  oas3-schema: true

  # Parameters should have a description
  oas3-parameter-description: true
```

2. Run this CLI command 
```PowerShell
spectral lint ./test-contract.yaml --ruleset ./.spectral.yaml
```
4. See error:
```PowerShell
74:36  error  oas3-valid-media-example  "loanToMarketValue" property must be multiple of 0.000001  components.responses.CalculateLoanToMarketValueResponse.content.application/json.examples.calculate-loan-to-market-value.value.loanToMarketValue
```

**Expected behavior**
No errors. The value `75.001` is a valid value using the `multipleOf: 0.000001` keyword. 

**Environment (remove any that are not applicable):**
 - Library version: 6.3.0

**Additional context**
- There are some extra examples that do pass the validation so it isn't an issue for all validation rules
- I've also tested this with Spectral Studio resulting in the same errors (which makes sense as I assume this used the same command)
