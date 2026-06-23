---
number: 1969
title: "New releases due to security vulnerabilities"
state: "closed"
labels: ["chore"]
author: "Linuus"
created: "2021-11-24T13:27:58Z"
updated: "2021-12-16T18:41:50Z"
comments: 6
reactions_total: 2
thumbs_up: 2
url: "https://github.com/stoplightio/spectral/issues/1969"
---

# New releases due to security vulnerabilities

**Chore summary**

Make a new release to bump jsonpointer library as it has security vulnerabilities. It is a dependency on better-ajv-errors and it looks like it has already been bumped in core. I believe you need a new core release and then bump the dependency in cli?

**Tasks**
- [ ] New release of core
- [ ] Bump core version in cli and release
