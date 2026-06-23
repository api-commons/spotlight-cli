---
number: 2117
title: "Rule for enforcing all parameters to be references for AsyncAPI channels"
state: "open"
labels: ["enhancement", "triaged", "AsyncAPI"]
author: "jonaslagoni"
created: "2022-04-07T18:11:40Z"
updated: "2024-05-31T12:36:29Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2117"
---

# Rule for enforcing all parameters to be references for AsyncAPI channels

**User story.**
As a user, I want to be able to enforce that reusability should be in focus, and therefore all parameters should be references.

**Describe the solution you'd like**
I want this rule to be part of the built-in ruleset.

**Additional context**
The way I am currently enforcing it, is through the rule:

```yml
rules: 
  ...
  asyncapi-parameters-must-use-references:
    description: Channel parameters must be references
    given: $.channels.[*]
    severity: error
    resolved: false
    then:
      function: schema
      functionOptions:
        schema:
          properties:
            parameters:
              additionalProperties:
                type: object
                required:
                  - $ref
```
