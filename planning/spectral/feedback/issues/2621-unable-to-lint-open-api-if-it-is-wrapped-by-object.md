---
number: 2621
title: "Unable to lint open api if it is wrapped by object"
state: "open"
labels: ["enhancement", "triaged"]
author: "school-coder"
created: "2024-05-14T14:43:47Z"
updated: "2024-05-31T09:24:24Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2621"
---

# Unable to lint open api if it is wrapped by object

**Describe the bug**
When openapi is wrapped in a object ( JSON or YAML), `extends: [spectral:oas]` is not able to be reused.

**To Reproduce**

1. Given this document,
![image](https://github.com/stoplightio/spectral/assets/644749/b6d29894-848d-4024-a0aa-897d24177847)
`spec` attribute needs to comply with `spectral:oas` ruleset.

 

2. When i try to start the node js server, with the below rule, 
![image](https://github.com/stoplightio/spectral/assets/644749/46c7733b-90ca-4606-a412-410605c522ba)
 

I am getting the following error 

`   RulesetValidationError: the rule must have at least "given" and "then" properties
`


**Expected behavior**
When a rule extends a certain rule set (as we have done for 'spectral:oas' for 'spec' attribute) for a given attribute, linting needs to be done for that attribute and corresponding linting responses needs to be provided. 'then' must be optional if 'extends' is provided.
