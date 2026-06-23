---
number: 1569
title: "ability to override specific oas3-schema limits"
state: "closed"
labels: ["OpenAPI"]
author: "ahmadnassri"
created: "2021-04-05T20:32:34Z"
updated: "2023-03-23T16:22:46Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1569"
---

# ability to override specific oas3-schema limits

**User story.**
As an api developer, I can do add a rule to allow additional properties on the schema object, without failing the `oas3-schema` rule, so that I can enrich my api validation with custom properties.

e.g. I'm using [`ajv-errors`](https://github.com/ajv-validator/ajv-errors) in my API, which relies on a property: `errorMessage` to be added to to the schema object, but this will result in spectral failing with `oas3-schema` error.

the only way is to override `oas3-schema` and set it to `warn`

**Describe the solution you'd like**

ability to be specific about overriding `oas3-schema` rules maybe?

**Additional context**

https://github.com/ajv-validator/ajv-errors
