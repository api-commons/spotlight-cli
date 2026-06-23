---
number: 1792
title: "[Feature] Disallow changing values"
state: "closed"
labels: []
author: "yordis"
created: "2021-08-28T18:04:04Z"
updated: "2021-11-23T21:42:04Z"
comments: 5
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1792"
---

# [Feature] Disallow changing values

**User story.**
As a programmer, I would like to disable the ability to modify operations ID

**Is your feature request related to a problem?**
If somebody changes the operation ID by mistake, or intentionally; it will cause breaking changes and compilation failures in our setup.

**Describe the solution you'd like**
Add a rule where we can disable the ability to change the operation ID. I thought maybe be able to point the rule to some cache file version or something like that, where the rule could compare the values

**Additional context**

Having some way to compare values with cache data could potentially be used to create rules for disallowing breaking changes in general beside the operation id such as changing the type of an schema.
