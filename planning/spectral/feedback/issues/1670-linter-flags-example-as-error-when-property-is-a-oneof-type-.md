---
number: 1670
title: "Linter flags example as error when property is a oneOf type string"
state: "closed"
labels: []
author: "wtjones"
created: "2021-06-11T13:21:12Z"
updated: "2021-06-24T08:58:18Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1670"
---

# Linter flags example as error when property is a oneOf type string

**Describe the bug**
When `anyOf` is used to represent string types, example models fail linting event though a string is given.


**To Reproduce**

1. Given this OpenAPI/AsyncAPI document 
```
openapi: 3.0.0
info:
  title: Sample API
  description: Optional multiline or single-line description in [CommonMark](http://commonmark.org/help/) or HTML.
  version: 0.1.9
  contact:
    name: foo
servers:
  - url: http://api.example.com/v1
    description: Optional server description, e.g. Main (production) server
  - url: http://staging-api.example.com
    description: Optional server description, e.g. Internal staging server for testing
tags:
  - name: Users
paths:
  /users:
    get:
      operationId: getUsers
      tags:
        - Users
      summary: Returns a list of users.
      description: Optional extended description in CommonMark or HTML.
      responses:
        "200": # status code
          description: A JSON array of user names
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/User"
              example:
                name: Joe
                job: Barley Farmer
components:
  schemas:
    User:
      type: object
      properties:
        name:
          type: string
        job:
          oneOf:
            - $ref: "#/components/schemas/FarmerJobType"
            - $ref: "#/components/schemas/BankerJobType"
    FarmerJobType:
      type: string
    BankerJobType:
      type: string

```

2. Run this CLI command 'spectral lint example.yaml'
3. See error
```
 32:22  error  oas3-valid-oas-content-example  `job` property should match exactly one schema in oneOf  paths./users.get.responses[200].content.application/json.example.job
```

**Expected behavior**
There is no way for the linter to determine exactly which string type is implied in the example, however it shouldn't matter as they are both of type string.

I could see this a defensive behavior in case I had different minLength/maxLength values. In the above example, an error seems a bit harsh.

**Environment (remove any that are not applicable):**
 - Library version: 5.9.1
