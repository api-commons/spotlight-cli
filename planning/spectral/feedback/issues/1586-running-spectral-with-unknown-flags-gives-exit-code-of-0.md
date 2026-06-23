---
number: 1586
title: "Running spectral with unknown flags gives exit code of 0"
state: "closed"
labels: ["enhancement", "p/longterm", "triaged", "v6"]
author: "philipbjorge"
created: "2021-04-28T16:41:39Z"
updated: "2021-05-12T19:10:51Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1586"
---

# Running spectral with unknown flags gives exit code of 0

**Describe the bug**
When running the linter, if you pass it unknown arguments it does not run the linter and instead writes out help docs.
This behavior is fine but it's problematic because it returns an exit code of 0 - For the past 2 weeks, we erroneously thought the linter was running because it was giving a successful status code.

**To Reproduce**
`npx @stoplight/spectral lint descriptions/v1/api.yaml -rip && echo "FAIL"`

You will see the word `FAIL` printed to your console, indicating the status code was successful

**Expected behavior**
I expected spectral to return a non zero status code and my echo statement to not run

**Environment (remove any that are not applicable):**
 - Library version: 5.9.1
