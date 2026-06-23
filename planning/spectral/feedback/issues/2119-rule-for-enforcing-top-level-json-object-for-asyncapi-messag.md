---
number: 2119
title: "Rule for enforcing top-level JSON Object for AsyncAPI message payloads"
state: "open"
labels: ["enhancement", "triaged", "AsyncAPI"]
author: "jonaslagoni"
created: "2022-04-07T21:25:54Z"
updated: "2024-05-31T12:36:30Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2119"
---

# Rule for enforcing top-level JSON Object for AsyncAPI message payloads

**User story.**
As a user, I want to enforce all message payloads to always contain a JSON object as the top-level message payload.

**Describe the solution you'd like**

I want this rule to be part of the built-in ruleset.

**Additional context**
The way I am currently enforcing it is through the rule:
```yml
rules: 
  ...
  asyncapi-message-payload-must-have-root-level-object:
    description: Message payloads must at the root be an object
    given: $.channels.[*][subscribe,publish].message..payload
    severity: error
    then:
      function: schema
      functionOptions:
        schema:
          properties:
            type:
              const: "object"
```
