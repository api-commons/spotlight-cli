---
number: 817
title: "Return error only for error level problems in linter"
state: "closed"
labels: []
author: "jerzyn"
created: "2019-11-27T13:48:39Z"
updated: "2019-12-22T23:29:02Z"
comments: 11
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/817"
---

# Return error only for error level problems in linter

**User story.**
Integrating with CI/CD tooling I will fail spec validation only if there are error-level problems.

**Is your feature request related to a problem?**
Our users of spectral are often not familiar with it and put the validations in CI/CD pipeline based on our internal rulesets. The fact that the default value fails on warnings is first - semantically doubtful, second - requires users to know the tooling better so that it doesn't fail on warnings as well.

**Describe the solution you'd like**
Change the default fail level of problems to errors.

**Additional context**
Add any other context or screenshots about the feature request here.
