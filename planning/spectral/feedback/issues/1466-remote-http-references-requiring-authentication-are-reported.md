---
number: 1466
title: "Remote HTTP references requiring authentication are reported as errors"
state: "closed"
labels: []
author: "denver-HJS"
created: "2021-01-09T02:29:26Z"
updated: "2021-01-14T22:14:43Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1466"
---

# Remote HTTP references requiring authentication are reported as errors

**User story.**
As a Developer, I can provide my Stoplight credentials, so that I can lint my OAS spec that contains remote HTTP references guarded by Stoplight's (or any host's) access controls.

**Is your feature request related to a problem?**
I get linting errors when running spectral against a specification that's not located in Stoplight but contains remote references to Stoplight Next projects.

**Describe the solution you'd like**
I'd like to be able to provide my Stoplight application token to the CLI so that the remote references are resolved and incorporated into the linter instead of being reported as an error.
