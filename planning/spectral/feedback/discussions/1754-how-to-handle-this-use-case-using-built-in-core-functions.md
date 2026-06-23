---
number: 1754
title: "How to handle this use case using built in core functions"
category: "Q&A"
author: "gk12277"
created: "2021-07-23T05:26:59Z"
upvotes: 1
comments: 1
answered: false
url: "https://github.com/stoplightio/spectral/discussions/1754"
---

# How to handle this use case using built in core functions

Hi, could someone help me out with this.

```yaml
type: object
properties:
    object_1:
       type: object
       properties:
           foo:
              property_1:
                      x_key: true
                      y_key: true
           bar:
              property_2:
                      y_key: true
```

In this example I want to check the casing for `object_1` properties when `x_key` is present.
That is casing for `foo` property should be checked since inside foo inside property_1 there is `x_key` and since
property_2 does not have `x_key` casing for it should not be checked. Can I handle this without writing a custom function fo this.
