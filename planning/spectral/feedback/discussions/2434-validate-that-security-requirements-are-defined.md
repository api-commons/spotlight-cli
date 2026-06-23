---
number: 2434
title: "Validate that Security Requirements are Defined"
category: "Rulesets"
author: "dillonredding"
created: "2020-04-13T23:12:55Z"
upvotes: 1
comments: 3
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2434"
---

# Validate that Security Requirements are Defined

**User story.**
As an API designer, when I define a security requirement at the top-level, or for an operation, then I want it to be defined in the `securitySchemes` `components`.

**Is your feature request related to a problem?**
According to the OAS for [security requirement objects](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#securityRequirementObject):

> The name used for each property MUST correspond to a security scheme declared in the [Security Schemes](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#componentsSecuritySchemes) under the [Components Object](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.3.md#componentsObject).

However, spectral raises no errors for the follow OpenAPI doc:

```yaml
openapi: 3.0.2
info:
  title: Foo API
  version: 0.0.0
security:
  - foobar: [] # undefined and therefore invalid
paths: {}
```

**Describe the solution you'd like**
I would like spectral to validate that all declared security requirements are defined as per the OAS requirement.
