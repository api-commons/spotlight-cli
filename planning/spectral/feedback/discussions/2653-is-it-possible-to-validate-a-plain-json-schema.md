---
number: 2653
title: "Is it possible to validate a plain JSON Schema?"
category: "Q&A"
author: "silwol"
created: "2024-07-08T19:20:12Z"
upvotes: 4
comments: 3
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2653"
---

# Is it possible to validate a plain JSON Schema?

Validating an OpenAPI specification file is as simple as putting `extends: "spectral:oas"` into a `.yaml` file, and passing this in as a parameter when calling `spectral lint`.

I have a use case where I don't have an OpenAPI specification inside a file, but just a plain JSON schema which I'd check for consistency? Is that possible? Given the fact that the `spectral:oas` ruleset relies on JSON Schema, and the `draft-2020-12` JSON schema definition is even included in the source tree, this should be rather straight-forward, right? Is it exposed as functionality somewhere? I tried using `spectral:jsonschema` and `spectral:json-schema`, but none of these worked.
