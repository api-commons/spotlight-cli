---
number: 410
title: "Docs for validating objects against schemas"
state: "closed"
labels: []
author: "denver-HJS"
created: "2019-07-29T20:40:56Z"
updated: "2019-07-31T11:25:03Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/410"
---

# Docs for validating objects against schemas

**Chore summary**
The README.md says the following under the FAQs:

> How is this different than Ajv?
> 
> Ajv is a JSON Schema validator, not a linter. Spectral does expose a schema function that you can use in your rules to validate all or part of the target object with JSON Schema (Ajv is used under the hood). However, Spectral also provides a number of other functions and utilities that you can use to build up a linting ruleset to validates things that JSON Schema is not well suited for.

I wasn't able to find any examples of using the exposed `schema` function, and I'm having a hard time conceptualizing that myself.

**Tasks**
- [ ] Add sample code and/or working examples of validating a given object in memory against an oas3 resource schema
