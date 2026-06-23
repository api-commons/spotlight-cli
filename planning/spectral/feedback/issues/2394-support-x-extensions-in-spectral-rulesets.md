---
number: 2394
title: "Support x-extensions in spectral rulesets"
state: "closed"
labels: ["enhancement", "released"]
author: "vincentklg"
created: "2023-02-03T09:30:03Z"
updated: "2023-05-23T22:18:10Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2394"
---

# Support x-extensions in spectral rulesets

**Describe the bug**
When declaring an anchor in the ruleset.yml, spectral exits with `Error #1: undefined`
In the example below the anchor is `valid-head-pattern`, we would like to avoid a redundant regex declaration.

**To Reproduce**
1. Given this ruleset file:
```yaml
extends: ["spectral:oas"]

x-vars:
  - &valid-header-pattern ^(Accept|Accept-CH|Accept-CH-Lifetime|Accept-Charset|Accept-Encoding)$

rules:

  invalid-response-header:
      description: "Use of headers not listed in NLB API guide is not allowed."
      severity: error
      given: $..responses..headers
      resolved: false
      then:
        field: "@key"
        function: pattern
        functionOptions:
          match: *valid-header-pattern

```

3. Run this CLI command `spectral lint openapi.yml --ruleset ruleset.yml`
Consider `openai.yml` a valid oas file.

4. See error:
```
Error running Spectral!
Use --verbose flag to print the error stack.
Error #1: undefined
```

**Expected behavior**
I would expect that the alias inside the rule is resolved against the corresponding anchor at the beginning of the file.

**Environment (remove any that are not applicable):**
 - Spectral CLI version: [6.6.0]
 - OS: [e.g. macOS 10.15.7] I know 🙄
