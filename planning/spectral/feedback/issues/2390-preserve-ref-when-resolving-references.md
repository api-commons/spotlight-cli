---
number: 2390
title: "Preserve `$ref` when resolving references"
state: "closed"
labels: []
author: "ctreatma"
created: "2023-01-31T21:33:13Z"
updated: "2023-03-16T17:33:50Z"
comments: 6
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2390"
---

# Preserve `$ref` when resolving references

**User story.**
As a spectral user, I can identify which objects are `$refs`, so that I can ensure that complex objects are appropriately named.

**Is your feature request related to a problem?**

We generate client code from our OpenAPI specification; sometimes, the structure of our spec causes the generators to produce suboptimal code.

For example, an API endpoint might define a request body schema like this:
```yaml
post:
  operationId: createThingy
  #...
  responses:
    "200":
      content:
        application/json:
          schema:
            oneOf:
            - $ref: '../../../components/schemas/OriginalThingyInput.yaml'
            - $ref: '../../../components/schemas/NewThingyInput.yaml'
```

That is valid, but a code generator will look at that and generate a model called `CreateThingy200Response`.

Thus far, we haven't found a way to detect, using `spectral`, whether the `oneOf` is inline or if it came from a resolved `$ref`.

**Describe the solution you'd like**

We would like an option that can be specified to resolve references _and_ maintain the `$ref` property so that we can tell where the `$refs` were after resolution.

**Additional context**
Add any other context or screenshots about the feature request here.
