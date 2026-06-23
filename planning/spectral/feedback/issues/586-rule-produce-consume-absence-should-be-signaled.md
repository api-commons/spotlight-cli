---
number: 586
title: "rule: produce/consume absence should be signaled"
state: "closed"
labels: ["enhancement", "help wanted", "p/medium", "OpenAPI"]
author: "XVincentX"
created: "2019-09-23T20:48:42Z"
updated: "2023-03-23T16:05:08Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/586"
---

# rule: produce/consume absence should be signaled

If I have this document where there's no global nor local produce:

```yml
swagger: '2.0'
paths:
  /path:
    post:
      consumes:
        - application/json
      parameters:
        - in: body
          name: body
          schema:
            type: object
            properties:
              id:
                type: integer
              status:
                type: string
                enum:
                  - open
                  - close
            required:
              - id
      responses:
        200:
          schema:
            type: string
```

I'd be expecting an error
