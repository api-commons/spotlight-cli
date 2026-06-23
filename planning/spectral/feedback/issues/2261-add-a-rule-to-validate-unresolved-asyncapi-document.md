---
number: 2261
title: "Add a rule to validate unresolved AsyncAPI document"
state: "open"
labels: ["enhancement", "triaged", "chore", "AsyncAPI"]
author: "magicmatatjahu"
created: "2022-08-29T13:52:57Z"
updated: "2024-05-31T12:36:35Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2261"
---

# Add a rule to validate unresolved AsyncAPI document

**Chore summary**

As a user I want to know if I defined `$ref` fields in proper places in my AsyncAPI document

**Is your feature request related to a problem?**

The following AsyncAPI document is invalid and Spectral should throw errors due to invalid defined references (in impossible places):

```yaml
asyncapi: '2.0.0'
channels: 
  someChannel:
    publish:
      $ref: '#/components/x-operations/someOperation'
components:
  'x-operations':
    someOperation: ...
```

We cannot use `$ref` in operations.

**Additional context**
Part of #2100
