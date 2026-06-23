---
number: 2515
title: "Percent-encoding JSON Pointers in #2511 introduced a breaking change in spectral-core and spectral-cli"
state: "open"
labels: ["triaged"]
author: "dlkj"
created: "2023-07-25T08:24:25Z"
updated: "2024-05-31T12:34:29Z"
comments: 3
reactions_total: 3
thumbs_up: 3
url: "https://github.com/stoplightio/spectral/issues/2515"
---

# Percent-encoding JSON Pointers in #2511 introduced a breaking change in spectral-core and spectral-cli

**Describe the bug**

#2511 has introduced a breaking change for rule override JSON Pointers. Different minor versions of spectral-core require different rule override files.

**To Reproduce**

1. create an override with a character that could be percent encoded, for example:
```yaml
extends: ruleset.yaml
overrides:
  - files:
      - openapi.yaml#/resource:custom-method/post/requestBody
    rules:
      my-rule: off
```
2. override works with `spectral-core` 1.18.2
3. override fails with `spectral-core` 1.18.3
4. changing the override to the following fixes 1.18.3 but breaks 1.18.2. Note the changing of "`:`" to "`%3A`"
```yaml
extends: ruleset.yaml
overrides:
  - files:
      - openapi.yaml#/resource%3Acustom-method/post/requestBody
    rules:
      my-rule: off
```

**Expected behavior**

This should have been released as a breaking change, requiring a bump of the `spectral-cli` version number. Currently we have `6.6.0` of `stoplight/spectral-cli` showing both of theses behaviours depending on when it was installed from NPM (and which version of `spectral-core` was resolved.

**Environment (remove any that are not applicable):**
 - spectral-cli 6.6.0
 - Node.JS 18.16.0
 - OS: Windows 10, Ubuntu 22.04
