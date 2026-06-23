---
number: 2503
title: "AsyncAPI - Add rule to check object keys in fixed fields "
state: "open"
labels: ["triaged", "chore"]
author: "Amzani"
created: "2023-07-11T08:17:56Z"
updated: "2024-05-31T12:34:27Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2503"
---

# AsyncAPI - Add rule to check object keys in fixed fields 

**Chore summary**

As a user I want to know if all the fixed fields are objects that MUST use keys that match the regular expression: ^[a-zA-Z0-9\.\-_]+$

https://www.asyncapi.com/docs/reference/specification/v2.6.0#componentsObject

Currently spectral trigger only an `asyncapi-document-unresolved` error

Example of an invalid asyncAPI file: https://gist.github.com/Amzani/7df1d67d7eb665bdc7a2a5dd7e794e0c

**Tasks**
- [ ] send a new error to match `^[a-zA-Z0-9\.\-_]+$` regular expression requirement

**Additional context**

- https://github.com/asyncapi/studio/issues/728
- https://github.com/stoplightio/spectral/issues/2100
