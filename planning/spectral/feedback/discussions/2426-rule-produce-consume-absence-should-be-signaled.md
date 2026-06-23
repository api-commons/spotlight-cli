---
number: 2426
title: "rule: produce/consume absence should be signaled"
category: "Rulesets"
author: "XVincentX"
created: "2019-09-23T20:48:42Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2426"
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
