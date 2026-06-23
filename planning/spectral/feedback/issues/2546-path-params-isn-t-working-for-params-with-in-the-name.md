---
number: 2546
title: "path params isn't working for params with \".\" in the name"
state: "open"
labels: ["t/bug", "triaged", "OpenAPI"]
author: "fantapop"
created: "2023-10-13T21:18:50Z"
updated: "2024-05-31T12:34:31Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2546"
---

# path params isn't working for params with "." in the name

**Describe the bug**
I'm getting an error from the path-params checker saying that a parameter is unused in the path however its clearly being used. I believe this is because the parameter name includes a ".".  According to [#1969](https://github.com/OAI/OpenAPI-Specification/issues/1969), there should be no restrictions on characters in the path parameters.

**To Reproduce**

1. Given this OpenAPI Document: [petstore.json](https://github.com/stoplightio/spectral/files/12899236/petstore.json) and a recommended [ruleset.json](https://github.com/stoplightio/spectral/files/12899260/ruleset.json)

2. Run this CLI command: `spectral lint petstore.json --ruleset ruleset.json`
3. See error
```
  24:11    error  path-params            Parameter "pet.id" must be used in path "/pets/{pet.id}".      paths./pets/{pet.id}.get.parameters[0]
```
**Expected behavior**
I expect there to be no path-params error
