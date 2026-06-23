---
number: 804
title: "How to check if one property or another are truthy?"
state: "closed"
labels: ["chore"]
author: "okv"
created: "2019-11-22T11:16:03Z"
updated: "2019-11-26T15:03:07Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/804"
---

# How to check if one property or another are truthy?

**Chore summary**
How to check if one property or another are truthy?


**Additional context**
I try to check `example` or `examples` in responses content. I thought it would be similar to xor:

```yaml
    then:
      function: or
      functionOptions:
        properties:
          - example
          - examples
```

but I got error:

```
Function or not found. Called by rule response-content-example.
```

I have feeling that a missed something in docs)

p.s. spectral is a great tool, thanks a lot for your effort.
