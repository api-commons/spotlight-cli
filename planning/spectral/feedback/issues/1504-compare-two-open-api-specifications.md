---
number: 1504
title: "Compare two Open API specifications"
state: "closed"
labels: []
author: "deka"
created: "2021-02-14T07:55:07Z"
updated: "2021-05-11T19:16:09Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1504"
---

# Compare two Open API specifications

**User story.**
As a product owner, I  have to make sure that the new minor version deployed is backward compatible with the existing version.

**Describe the solution you'd like**
A command to check difference between two specifications with warnings and errors.
Warning example : new param in query request
Error example : endpoint removed

**Additional context**
I use semver. When new specification is not backward compatible, i deploy new major version side existing version
