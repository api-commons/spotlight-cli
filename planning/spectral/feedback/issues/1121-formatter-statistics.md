---
number: 1121
title: "Formatter: Statistics"
state: "closed"
labels: ["enhancement", "help wanted", "p/low", "hacktoberfest"]
author: "philsturgeon"
created: "2020-04-24T11:48:15Z"
updated: "2023-03-23T16:25:14Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1121"
---

# Formatter: Statistics

**User story.**
As a spectral CLI user I'd like to see common offenders in a clearer way than line by line.

**Describe the solution you'd like**

A new formatter that can output something along these lines:

```
statistics
  Total number of errors   : 284
  Total number of warnings : 378
  errors
   1   (0%) : 'scopes' is required property type object. The available scopes for the OAuth2 security scheme.
   3   (1%) : Arrays MUST NOT be returned as the top-level structure in a response body.
   1   (0%) : Parameter names must follow case convention
  42  (15%) : Path segments must follow case convention
 219  (77%) : Property names must follow case convention
  18   (6%) : Enum values must follow case convention
  warnings
  66  (17%) : operationIds should follow naming convention
  93  (25%) : operationIds must follow case convention
   5   (1%) : Required parameters should appear before optional parameters.
  10   (3%) : Common path parameters should be defined on path object
   5   (1%) : Definition was declared but never used in document
 104  (28%) : Schema must have a non-empty description.
  61  (16%) : Schema properties must have a description with content in it.
  17   (4%) : Property has inconsistent type
  17   (4%) : Description sibling to $ref matches that of the referenced schema. This is redundant and should be removed.
```



**Additional context**

Suggestion from @mkistler.
