---
number: 1210
title: "Warn about undeclared path parameters"
state: "closed"
labels: []
author: "LexLuengas"
created: "2020-06-05T09:17:39Z"
updated: "2020-06-08T08:12:36Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1210"
---

# Warn about undeclared path parameters

**User story.**
As a developer, I want to detect paths with path parameters that are not declared. 

**Is your feature request related to a problem?**
Without detection, those path parameters remain ambiguous until someone realizes information is missing and complains.

**Describe the solution you'd like**
I would like to see warnings about path parameters that are undeclared.

**Additional context**
For example, given the following paths object
```yaml
/pets/{petId}:
  get:
    summary: Info for a specific pet
    operationId: showPetById
    tags:
      - pets
    responses:
      [...]
```
(i.e. there is no `parameters` property), I would like to see a warning along the lines of:

> warn: the method `get` for path `/pets/{petId}` uses curly braces but contains no parameter declaration for "petId".

The same warning would show if the parameters object was present, but did not contain the declaration of the parameter `petId`.

I am unsure whether this directly relates to #1102.
