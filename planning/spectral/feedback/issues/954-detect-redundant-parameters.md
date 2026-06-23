---
number: 954
title: "Detect redundant parameters"
state: "closed"
labels: ["enhancement", "help wanted", "OpenAPI"]
author: "BigBlueHat"
created: "2020-02-03T20:09:23Z"
updated: "2021-04-12T16:54:42Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/954"
---

# Detect redundant parameters

**User story.**
As an API doc author, I can want to know if the parameters I've defined directly on the Path Object are overridden or duplicated on any child Operation Objects, so that I can find overrides and remove duplication.

**Is your feature request related to a problem?**
The API docs I'm working with now have duplicate path parameter on every Operation, but not on the Path Object. I'd love for spectral to highlight the redundancy/duplicates or call out parameters present on an Operation Object which are *not* present on a Path Object.

**Describe the solution you'd like**
I'd love redundant parameters expressed on both Path and Operation objects to throw a warning, and (especially path) parameters repeated on Operation objects but not present on Path objects to be called out.

**Additional context**
Stoplight Studio currently can't "see" them at all (i.e. shows an empty "Path Params" section and spectral throws no warnings. If I add a path param directly to the Path Object (via Stoplight or in code), the redundant ones on the Operation Object become aren't highlighted by spectral (and Stoplight still can't see them).

It'd also be great if Studio would put the `parameters` section immediately under the key/URL of the Path Object, and not at the bottom of the list. Putting it below the operations makes reading the YAML or JSON a pain...

Thanks!
🎩
