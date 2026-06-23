---
number: 2376
title: "Minimum > Maximum isnt flagged"
state: "open"
labels: ["enhancement", "triaged"]
author: "savage-alex"
created: "2023-01-03T16:45:03Z"
updated: "2024-05-31T12:34:46Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2376"
---

# Minimum > Maximum isnt flagged

When making an API definition I accidently defined a minimum value for an integer that was larger than the maximum.
Spectral picked up that the example was wrong but didnt flag that the constraints themselves were mixed.

It would been brilliant if spectral could have flagged this mismatch so it was clear they were not done correctly. Thanks
