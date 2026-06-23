---
number: 321
title: "Spectral fails to validate parameter example with a schema correctly"
state: "closed"
labels: ["t/bug"]
author: "brianmrock"
created: "2019-07-06T18:27:34Z"
updated: "2019-08-22T17:25:45Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/321"
---

# Spectral fails to validate parameter example with a schema correctly

**Context**

OAS3 uses two types of examples (example property, not examples property!):

1. JSON Schema "example"
2. OpenAPI "example"

**Test cases (OAS3)**

## TEST 1

Given oas3 with

```
parameters:
        - name: petId
          in: path
          required: true
          description: The id of the pet to retrieve
          schema:
            type: string
          example: "1234567890"
```
**when**

spec linted

**expect**

no errors (example matches the nested schema)

## TEST 2

**Given oas3 with**
```
parameters:
        - name: petId
          in: path
          required: true
          description: The id of the pet to retrieve
          schema:
            type: string
          example: 123
```
**when**

spec linted

**expect**

error (example is an integer, schema requires string)

## TEST 3

**Given oas3 with**
```
parameters:
        - name: petId
          in: path
          required: true
          description: The id of the pet to retrieve
          schema:
            type: string
            example: "123"
```
**when**

spec linted

**expect**

be OK

## TEST 4

**Given oas3 with**
```
parameters:
        - name: petId
          in: path
          required: true
          description: The id of the pet to retrieve
          schema:
            type: string
            example: 123
          example: "abc"
```
**when**

spec linted

**expect**

be OK (nested example is canceled by parent example!!)

## TEST 5

**Given oas3 with**
```
parameters:
        - name: petId
          in: path
          required: true
          description: The id of the pet to retrieve
          example: "abc"
```
**when**

spec linted

**expect**

be OK (no schema to use)

## Test cases (OAS2)

only "in body" OAS2 params can have example... (see the spec to double check)

Figure out the tests :) 

**In scope**
- create a rule that can validate examples nested in "property" objects.

**Out of scope**

We do not want to support validating the `examples` yet.
