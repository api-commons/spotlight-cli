---
number: 564
title: "Casing function"
state: "closed"
labels: ["enhancement", "p/high"]
author: "P0lip"
created: "2019-09-18T12:48:49Z"
updated: "2019-11-12T14:25:38Z"
comments: 2
reactions_total: 4
thumbs_up: 2
url: "https://github.com/stoplightio/spectral/issues/564"
---

# Casing function

**User story.**
As a ruleset maintainer, I would like to have a built-in casing function I could make use of in my own rulesets.
For the time being, in order to enforce casing, you need to use `pattern` function and come up with a regular expression.

**Describe the solution you'd like**
We could make enforcing naming convention in Spectral easier by providing `casing` function with pre-defined set of regular expressions, such as:
- pascal case
- camel case
- kebab case
- snake case
- etc.

`casing` function could also take a custom regular expression, same as `pattern` does.

Here is an example rule definition:
```yaml
given: $.paths[*].[*].[*].operationId # I know it looks weird, it's not important though
then:
      function: casing
      functionOptions:
        case: pascal
```

**Additional context**
It's a complementary functionality to https://github.com/stoplightio/spectral/issues/405
