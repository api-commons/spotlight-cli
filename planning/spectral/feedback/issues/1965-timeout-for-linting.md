---
number: 1965
title: "timeout for linting"
state: "open"
labels: ["enhancement", "triaged"]
author: "dckhedekar"
created: "2021-11-18T19:29:54Z"
updated: "2024-05-31T12:35:10Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1965"
---

# timeout for linting

**User story.**
As a linter user, I want to take a piecemeal approach to linting my oas spec , so that I don't have to wait for the listing job.


**Is your feature request related to a problem?**
For poorly written oas specifications, I don't want to wait for  the linting to get over to find out all my errors. If the errors are too many and fundamental I want to know them early and not wait for linting to throw back thousands of errors and warning at me.
I could instead benefit from early exists that helps me improve my spec step by step.

**Describe the solution you'd like**
Introduce a timeout in the linter

**Additional context**
Like many compilers say too many errors and quit.
