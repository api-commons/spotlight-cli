---
number: 2095
title: "How to mark endpoint with a \"consumes\" attribute but no body parameter as an error"
category: "Q&A"
author: "jonbe242"
created: "2022-03-17T09:41:44Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2095"
---

# How to mark endpoint with a "consumes" attribute but no body parameter as an error

In an OAS2 API, I'd like to mark endpoints that have a `consumes` attribute on an endpoint having no body parameter as an error.
I'd like to check against both global and local consumes declarations.

I guess this requires a custom function. Has anyone written such a function?

Example where GET /foos/{id} should be flagged as having (two) irrelevant "consumes" declarations.

```
consumes:
  - 'application/json'
paths:
  /foos/{id}:
    get:
      summary: "Get foos"
      consumes:
        - 'application/json'
      parameters:
        - name: id
          in: query
          type: string
      responses:
        200:
          description: "OK"
          schema:
            $ref: "#/definitions/Foo"
```
