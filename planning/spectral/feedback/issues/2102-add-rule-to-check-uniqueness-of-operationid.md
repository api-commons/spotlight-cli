---
number: 2102
title: "Add rule to check uniqueness of `operationId`"
state: "closed"
labels: ["enhancement", "released", "AsyncAPI"]
author: "magicmatatjahu"
created: "2022-03-22T10:19:43Z"
updated: "2022-05-31T12:14:59Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2102"
---

# Add rule to check uniqueness of `operationId`

**User story.**
As a user, I want to know if the operations defined in my AsyncAPI document have a unique `operationId`.

**Describe the solution you'd like**
The following AsyncAPI document is invalid and Spectral should throw errors due to non-uniqueness of `operationId`.

```yaml
asyncapi: '2.3.0'
...

channels:
  someChannel:
    publish:
      operationId: someId
      ...
    subscribe:
      operationId: someId
      ...
```

**Additional context**
Part of #2100
