---
number: 1973
title: "Fix example for operation-id-kebab-case"
state: "closed"
labels: ["chore"]
author: "m-mohr"
created: "2021-11-30T15:47:24Z"
updated: "2021-12-29T22:35:13Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1973"
---

# Fix example for operation-id-kebab-case

**Chore summary**
Fix documentation example for operation-id-kebab-case at https://meta.stoplight.io/docs/spectral/ZG9jOjI1MTkw-custom-functions#options

**Tasks**

The given example doesn't work for me. I made it work like this:

```yaml
  operation-id-kebab-case:
    given: "$..operationId"
    then:
      function: pattern
      functionOptions:
        match: ^[a-z][a-z0-9\-]*$
```
