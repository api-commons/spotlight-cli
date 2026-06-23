---
number: 2331
title: "\"overrides\" section from included ruleset is ignored"
state: "closed"
labels: ["released", "documentation", "s/needs-docs"]
author: "anikitin"
created: "2022-11-08T00:59:46Z"
updated: "2023-05-23T22:18:16Z"
comments: 8
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2331"
---

# "overrides" section from included ruleset is ignored

**Describe the bug**
I have a master ruleset file which includes other files via "extends".
I need to define some "overrides" rules and I want to place them in a separate file and add it via "extens".
So, when I define the "overrides" section in external file, it is not applied.
If I do the same in master file, it works as expected.

**To Reproduce**

1. Create two ruleset files where ruleset-1 includes ruleset-2 via "extends"
2. Define "overrides" section in ruleset-2

**Actual behavior**
Overrides from included file are not applied

**Expected behavior**
Overrides from included file should be applied

**Environment:**
 - spectral-cli 6.6.0
