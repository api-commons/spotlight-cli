---
number: 2528
title: "Validation failing with `oneOf`"
state: "closed"
labels: []
author: "miller79"
created: "2023-08-25T20:06:50Z"
updated: "2023-08-31T14:01:30Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2528"
---

# Validation failing with `oneOf`

It appears that the `oas3-valid-media-example` has some kind of issue with `oneOf` that I haven't be able to identify. I've created an OpenAPI spec that exposes the issue below.

```yaml
openapi: 3.1.0
info:
  title: 'Test'
  version: '1.0.0'
paths:
  /test:
    post:
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                myObject:
                  $ref: '#/components/schemas/myObject'
            examples:
              minimumRequired:
                value:
                  myObject:
                    object2string: '1234'
      responses:
        '204':
          description: Successful action response

components:
  schemas:
    myObject:
      oneOf:
        - $ref: '#/components/schemas/object1'
        - $ref: '#/components/schemas/object2'
    object1:
        type: object
        properties:
          object1string:
            type: string
    object2:
      type: object
      properties:
        object2string:
          type: string
```

When running this with spectral, it throws the following error:

```
 20:28    error  oas3-valid-media-example  "myObject" property must match exactly one schema in oneOf     paths./test.post.requestBody.content.application/json.examples.minimumRequired.value.myObject
```

This appears to be a bug and wanted to see if I could get another eye on it to make sure for one I'm missing something and also to see if its easily fixable.
