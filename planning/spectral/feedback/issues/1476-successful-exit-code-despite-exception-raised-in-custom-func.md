---
number: 1476
title: "Successful exit code despite exception raised in custom function"
state: "closed"
labels: ["t/bug"]
author: "zippolyte"
created: "2021-01-13T09:18:16Z"
updated: "2021-08-12T17:43:58Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1476"
---

# Successful exit code despite exception raised in custom function

**Describe the bug**
Using a custom function, when there is an error in it and it raises an exception, the rule that uses it does not fail. It does print a message in stderr, but the exit code is still 0, which prevent detecting the failure when running in a CI for instance.

**To Reproduce**

1. Create a custom function that simply raises an exception
1. Use it in a rule in `spectral.yaml`
1. Run spectral on any document
1. See a successful exit status

**Expected behavior**

I'd expect an error status code to let me know that there was a problem evaluating all the rules

**Environment (remove any that are not applicable):**
 - Library version: 5.8.0 (same behavior in 5.4.0 and 5.6.0)
