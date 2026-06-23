---
number: 1276
title: "Support OR combinator"
state: "open"
labels: ["enhancement", "triaged"]
author: "XVincentX"
created: "2020-07-08T16:31:40Z"
updated: "2024-05-31T12:35:37Z"
comments: 2
reactions_total: 3
thumbs_up: 3
url: "https://github.com/stoplightio/spectral/issues/1276"
---

# Support OR combinator

It would be very helpful if Spectral could support some sort of OR combinator where I can define multiple functions to apply. If one of them passes, the validation is marked as ✅ 

```
  given: >-
      $...parameters[*].name
  then:
    or:
    - function: casing
      functionOptions:
        type: snake
    - function: casing
      functionOptions:
        type: camel
```
