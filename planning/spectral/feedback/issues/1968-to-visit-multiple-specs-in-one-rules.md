---
number: 1968
title: "To visit multiple specs in one rules"
state: "closed"
labels: []
author: "jianyexi"
created: "2021-11-24T11:44:41Z"
updated: "2022-04-11T08:58:18Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1968"
---

# To visit multiple specs in one rules

**User story.**
As a rule developer, I want to check multiple specs in one rules  , so that I can using linter to avoid issues that only encounter in multiple specs

**Is your feature request related to a problem?**
we want to ensure the 'operationId' is unique among multiple swaggers. The spectral can't do it

**Describe the solution you'd like**
the rule function can visit all the inputs from the CLI , like given A,B,C 3 specs as inputs, when linting A, we can pass  B,C   as a parameter to the rule function , when linting B, AC as the parameter

**Additional context**
Add any other context or screenshots about the feature request here.
