---
number: 1619
title: "Consistent validation messages"
state: "closed"
labels: ["enhancement", "v6", "s/needs-info"]
author: "P0lip"
created: "2021-05-12T09:20:09Z"
updated: "2021-07-08T18:43:17Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1619"
---

# Consistent validation messages

In short - we should use keywords defined in the following [RFC](https://datatracker.ietf.org/doc/html/rfc2119).
Apart from that, it's crucial to ensure the casing is similar, we use double quotes instead of the grave accent (_gravis_, `)
The above rule must apply to all kinds of errors, not just the ones originating from rulesets.
This means, both parsing & resolving errors are included.
