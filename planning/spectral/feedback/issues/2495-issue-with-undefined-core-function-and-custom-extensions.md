---
number: 2495
title: "Issue with undefined core function and  custom extensions"
state: "open"
labels: ["t/bug", "p/medium", "triaged"]
author: "christosgkoros"
created: "2023-06-29T09:49:09Z"
updated: "2024-05-31T12:34:26Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2495"
---

# Issue with undefined core function and  custom extensions

**Describe the bug**
When searching for custom extensions non-existence under `$paths.*.*` (verbs) any custom extension (starting with x-) under a`path.*` (resource name) will trigger the rule

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document 
```openapi: 3.0.3
openapi: 3.0.3
info:
  version: 1.0.0
  title: Valid Definition
  description: A definition to perform positive test on the full ruleset
  contact:
    name: Test
    email: test@test.com
servers:
  - url: "https://ruleset-beta.tech"

paths:
  /resource:
    x-test: test
```    
and the given rule:
```
rules:
 test_verb_ext:
  formats:
   - oas3
  given: $.paths[*][*]
  then:
   field: x-custom-extension
   function: undefined
  message: '{{error}}'
  description: test verb custom extension
  severity: warn
```
2. Run the Javascript API
```
const oneRuleSpectral = new Spectral();
        oneRuleSpectral.setRuleset({
          rules: {
            [rule.name]: rule.definition // Creating a ruleset with a single rule.
          }
        });
        const results = await oneRuleSpectral.run(targetDocument);
```
4. See error
```
"x-test" property must be undefined
```

**Expected behavior**
No error since `x-test` is not mentioned in the ruleset.


**Environment (remove any that are not applicable):**
 - Library version: [e.g. 1.18.0]
 - OS: [e.g. MacOS Ventura 13]

**Additional context**
Add any other context about the problem here.
