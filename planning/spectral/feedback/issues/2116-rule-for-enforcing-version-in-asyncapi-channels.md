---
number: 2116
title: "Rule for enforcing version in AsyncAPI channels"
state: "open"
labels: ["enhancement", "triaged", "AsyncAPI"]
author: "jonaslagoni"
created: "2022-04-07T18:01:44Z"
updated: "2024-05-31T12:36:28Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2116"
---

# Rule for enforcing version in AsyncAPI channels

**User story.**
As a user, I want to enforce a version number within a channel, for example, `v1/channel/example`, so that I can comply with my version strategy.

**Describe the solution you'd like**
I want this rule to be part of the built-in ruleset.

**Additional context**
The way I am currently enforcing it is through this rule:
```yml
rules: 
  ...
  asyncapi-channel-must-have-version:
    given: "$.channels"
    description: 'Channel MUST have version number included in the topic. Example: "v1/channel/example"'
    severity: error
    then:
      field: "@key"
      function: pattern
      functionOptions:
        match: ".*(v(.*[0-9])).*"
```
