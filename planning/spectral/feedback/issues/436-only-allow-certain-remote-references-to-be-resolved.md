---
number: 436
title: "Only allow certain remote references to be resolved"
state: "closed"
labels: ["enhancement"]
author: "nulltoken"
created: "2019-08-12T12:42:43Z"
updated: "2020-05-14T22:52:30Z"
comments: 5
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/436"
---

# Only allow certain remote references to be resolved

**User story.**
As a API manager, I can add a rule that would restrict the list of automatically resolved http external references to a known subset, so that I can eventually ensure that only vetted external references are used.

**Describe the solution you'd like**
A way to configure spectral so that a list of complete urls (or regular expressions) describing the http remote references that are allowed to be resolved.

This could either be a new core rule or, maybe simpler from an implementation standpoint, an option to the http resolver.

**Additional context**
- From an Enterprisey persective, one may need to restrict the domains from which remote refs are allowed to be resolved from.
- Those remote references may actually point to versioned schemas, and one would want to only allow supported/stable versions to be used.
