---
number: 1102
title: "[AsyncAPI] Enhance parameters and variables linting"
state: "closed"
labels: ["enhancement", "help wanted", "released", "AsyncAPI"]
author: "nulltoken"
created: "2020-04-18T15:25:55Z"
updated: "2022-05-31T12:14:56Z"
comments: 1
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/1102"
---

# [AsyncAPI] Enhance parameters and variables linting

In #974, it's been identified that new rules could really be helpful. 

Especially:
- add a rule to ensure all variables used in server url are defined
- add a rule to ensure all defined server variables are used
- add a rule to ensure all parameters used in channel path are defined
- add a rule to ensure all defined channel parameters are used

The oas `path-params` custom function may be a great source of inspiration to fulfill that.

/cc @derberg
