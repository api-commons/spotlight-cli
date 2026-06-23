---
number: 1272
title: "feat: Duplicate Parameter in+name at different scopes"
state: "closed"
labels: ["enhancement", "OpenAPI"]
author: "philsturgeon"
created: "2020-07-02T15:35:12Z"
updated: "2020-12-31T09:40:16Z"
comments: 2
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/1272"
---

# feat: Duplicate Parameter in+name at different scopes

**User story.**
As a user of Swagger Validator/Editor, I would expect similar all those errors to show up in Spectral so I can easily migrate.


![Annotation 2020-06-30 143727](https://user-images.githubusercontent.com/67381/86371196-e7dbd100-bc80-11ea-8f59-c26f11151bda.jpg)

Spectral should let me know if I have a parameter which has the same name + in _and is in the same scope_, either path or operation.

Do not throw an error if somebody is trying to "override" the path parameter with one at the operation level. 

**Describe the solution you'd like**

```
swagger: '2.0'
info:
  title: Duplicate Parameters
  version: '1'
  description: ''
paths:
  /:
    parameters:
      - in: header
        name: foo
        type: string

    get:
      summary: partial update of a quote
      operationId: patch-quote-id-2
      responses:
        '200':
          description: OK
          schema:
            type: string
      
      parameters:
        - in: header
          name: foo
          type: string

        - in: header
          name: bar
          type: string
          
        - in: header
          name: bar
          type: integer
```

We should not see an error for foo, as it is overriding it. We should see an error for bar, because they've got the same "in" and the same "name" at the same scope.
