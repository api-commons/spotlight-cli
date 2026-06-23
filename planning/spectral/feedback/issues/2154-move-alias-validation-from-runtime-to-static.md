---
number: 2154
title: "Move alias validation from runtime to static"
state: "closed"
labels: ["chore"]
author: "mnaumanali94"
created: "2022-05-09T21:14:22Z"
updated: "2022-08-24T11:21:49Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2154"
---

# Move alias validation from runtime to static

**Chore summary**
Currently if you use an alias in `given` that isn't defined, spectral detects the issue while running `lint` against an openapi file but not while validating the ruleset. 

**Tasks**
- [ ] Validation should fail if an alias is being used that isn't defined
