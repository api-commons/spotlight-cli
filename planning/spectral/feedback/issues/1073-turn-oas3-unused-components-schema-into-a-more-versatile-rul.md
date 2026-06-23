---
number: 1073
title: "Turn `oas3-unused-components-schema` into a more versatile rule"
state: "closed"
labels: ["enhancement", "p/medium", "OpenAPI"]
author: "nulltoken"
created: "2020-04-08T13:27:46Z"
updated: "2021-02-26T22:33:24Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1073"
---

# Turn `oas3-unused-components-schema` into a more versatile rule

**User story.**
OpenaApi 3.x [Components](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#componentsObject) section list a lot of reusable objects. But we currently only focus on `schemas` orphaned objects. We could do so much more!!!

Proposal:
- Slightly tweak the function to make it accept an array of reusable objects locations and process them all as potential sources. The `given` property may have to be tweaked as well (`$`?).
- Rename this rule into  `oas3-unused-components-object` 
- Extend the test suites to cover those additional paths

Would this proposal be considered as a possible addition:
 - Create another issue targeting the `oas2` ruleset (and another one for the soon to be released `asyncapi` ruleset)
