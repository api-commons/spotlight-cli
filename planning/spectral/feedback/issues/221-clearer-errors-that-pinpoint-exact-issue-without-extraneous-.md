---
number: 221
title: "Clearer errors that pinpoint exact issue without extraneous errors"
state: "closed"
labels: []
author: "cbautista1002"
created: "2019-05-21T19:10:18Z"
updated: "2019-07-01T14:43:23Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/221"
---

# Clearer errors that pinpoint exact issue without extraneous errors

### **I'm submitting a...**
  - [ ] bug report
  - [x] feature request

### What is the current behavior?
When the schema is invalid, multiple seemingly-unrelated errors are returned along with the true error. These extra errors make a bit harder to pinpoint the actual issue.

### What is the expected behavior?
Only the actual error / root cause is listed as an error.

### What is the motivation / use case for changing the behavior?
Faster debugging of errors returned by Spectral. Fellow engineers would be able to more quickly fix issues in their schemas if the one actual error is provided.

### Please tell us about your environment:
```
$ spectral --version
@stoplight/spectral/3.0.0 linux-x64 node-v12.2.0
```

### Other information

Here's a sample schema:
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
      responses:
        '200':
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                type: array
                additionalItems: false
                items:
                  required: []
                  properties:
                    id:
                      type: integer
```

There are two issues with this schema:
1. `additionalItems` is not valid OpenAPI
2. `required` cannot be an empty list

Here is what spectral returns:
```
$ spectral lint myschema.yml
Adding OpenAPI 3.x functions
OpenAPI 3.x detected

myschema.yml
 32:22  error  oas3-schema  should NOT have additional properties: additionalItems
 32:22  error  oas3-schema  should have required property '$ref'
 32:22  error  oas3-schema  should match exactly one schema in oneOf

✖ 3 problems (3 errors, 0 warnings, 0 infos)
```

In this case, the first error is the only one that from my perspective is relevant and makes sense.

If that's fixed (remove `additionalItems`), then: the error is
```
$ spectral lint myschema.yml
Adding OpenAPI 3.x functions
OpenAPI 3.x detected

myschema.yml
 34:23  error  oas3-schema  should have required property '$ref'
 34:23  error  oas3-schema  should match exactly one schema in oneOf
 35:28  error  oas3-schema  should NOT have fewer than 1 items

✖ 3 problems (3 errors, 0 warnings, 0 infos)
```

In this case, the last listed error is the "real" error. As a first time user, this was confusing. The first two listed errors sent me chasing something that wasn't there.

Great project, btw!
