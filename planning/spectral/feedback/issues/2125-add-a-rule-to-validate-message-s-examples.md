---
number: 2125
title: "Add a rule to validate message's examples"
state: "closed"
labels: ["enhancement", "released", "AsyncAPI"]
author: "magicmatatjahu"
created: "2022-04-12T21:02:21Z"
updated: "2022-06-07T12:14:27Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2125"
---

# Add a rule to validate message's examples

**User story.**
As a user I want to know if the examples defined in the message object are valid.

**Is your feature request related to a problem?**
The following AsyncAPI document is invalid and Spectral should throw errors:

```yaml
asyncapi: "2.0.0"
info:
  title: Bad API
  version: "1.0.0"
components:
  messages:
    someMessage:
      payload:
        type: string
      headers:
        type: object
      examples:
        - payload: 2137 # should be string
          headers: someHeader # should have object shape
```

**Additional context**
Part of #2100
