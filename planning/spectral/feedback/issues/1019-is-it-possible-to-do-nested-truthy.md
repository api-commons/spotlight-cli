---
number: 1019
title: "Is it possible to do \"nested truthy\""
state: "closed"
labels: ["chore"]
author: "Jaredk3nt"
created: "2020-03-18T19:40:06Z"
updated: "2020-03-29T12:55:46Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1019"
---

# Is it possible to do "nested truthy"

**Chore summary**

Need clarification on if it is possible to do a "nested" truthy or if I need two separate rules. An example of what I am trying to do is:

```
  description: 'responses should include a `Request-Id` header',
  recommended: true,
  type: 'validation',
  severity: 'warn',
  given: '$.responses[*].headers',
  then: {
    field: 'Request-Id',
    function: 'truthy'
  }
```

This works correctly if the "response" has a headers section, however if no headers section is supplied it will *not* throw a warning that there is no `Request-Id`. Is it possible to get a single rule to give me the same warning if there is no header object?

Thanks!

**Tasks**
- [ ] Clarify rule possibilities
