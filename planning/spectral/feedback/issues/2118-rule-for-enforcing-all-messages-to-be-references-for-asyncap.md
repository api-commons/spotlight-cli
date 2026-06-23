---
number: 2118
title: "Rule for enforcing all messages to be references for AsyncAPI channels"
state: "open"
labels: ["enhancement", "triaged", "AsyncAPI"]
author: "jonaslagoni"
created: "2022-04-07T18:19:56Z"
updated: "2024-05-31T12:36:29Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2118"
---

# Rule for enforcing all messages to be references for AsyncAPI channels

**User story.**
As a user, I want to be able to enforce that reusability should be in focus, and therefore all messages should be references.

**Describe the solution you'd like**

I want this rule to be part of the built-in ruleset.

**Additional context**
Compared to https://github.com/stoplightio/spectral/issues/2117, messages can be defined with `oneOf`, and if that is the case, we need to match against an array of references instead of a single instance.

The way I am currently enforcing it is through the rule:
```yml
rules: 
  ...
  asyncapi-messages-must-use-references:
    description: Operation messages must be references
    given: $.channels.[*][subscribe,publish].message
    severity: error
    resolved: false
    then:
      function: schema
      functionOptions:
        schema: 
          if:
            required:
              - oneOf
          then:
            properties: 
              oneOf:
                type: array
                items:
                  type: object
                  required:
                    - $ref
          else:
            type: object
            required:
              - $ref
```
