---
number: 2223
title: "Add rule to check uniqueness of `messageId`"
state: "closed"
labels: ["enhancement", "released", "AsyncAPI"]
author: "magicmatatjahu"
created: "2022-07-28T11:21:11Z"
updated: "2022-08-24T08:37:55Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2223"
---

# Add rule to check uniqueness of `messageId`

**User story.**
As a user, I want to know if the messages defined in my AsyncAPI document have a unique `messageId`.

**Describe the solution you'd like**
The following AsyncAPI document is invalid and Spectral should throw errors due to non-uniqueness of `messageId`.

```yaml
asyncapi: '2.4.0'
...

channels:
  someChannel:
    publish:
      message:
        messageId: someId
        ...
    subscribe:
      message:
        messageId: someId
```

**Additional context**
Part of #2100
