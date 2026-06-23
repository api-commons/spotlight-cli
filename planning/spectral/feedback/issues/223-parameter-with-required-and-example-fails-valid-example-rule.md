---
number: 223
title: "Parameter with required and example fails valid-example rule"
state: "closed"
labels: ["t/bug", "enhancement"]
author: "cbautista1002"
created: "2019-05-22T17:33:14Z"
updated: "2019-08-29T15:40:10Z"
comments: 12
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/223"
---

# Parameter with required and example fails valid-example rule

### **I'm submitting a...**
  - [x] bug report

### What is the current behavior?

If you have a parameter that has `required: true` and an example, the `valid-example` rule fails. See "Other information" for details.

### What is the expected behavior?

The `valid-example` rule executes successfully for a valid parameter example as it understands that required is not a list for parameters but a boolean.

### What is the motivation / use case for changing the behavior?

The `valid-example` rule is very helpful and it should work for parameters

### Please tell us about your environment:
```
$ spectral --version
@stoplight/spectral/3.0.0 linux-x64 node-v12.2.0
```

### Other information

Given this schema
```yaml
openapi: "3.0.0"
info:
  version: 1.0.0
  title: Swagger Petstore
  description: Swagger Petstore
  license:
    name: MIT
  contact:
    name: Test
servers:
  - url: http://petstore.swagger.io/v1
paths:
  /pets/{petId}:
    get:
      summary: Info for a specific pet
      operationId: showPetById
      description: Get a pet
      tags:
        - pets
      parameters:
        - name: petId
          in: path
          required: true
          description: The id of the pet to retrieve
          schema:
            type: string
          example: "1234567890"
      responses:
        '200':
          description: Expected response to a valid request
```

Running `spectral lint myschema.yml` results in:
```
Adding OpenAPI 3.x functions
OpenAPI 3.x detected
Encountered error when running rule 'valid-example' on node at path '$,paths,/pets/{petId},get,parameters,0':
Error: schema is invalid: data/required should be array
No errors or warnings found!
```

As an aside, an "error" was found but yet spectral says "No errors or warnings found!" and the return code is `0`. Why the discrepancy?

Thanks a lot. Let me know if I can help!
