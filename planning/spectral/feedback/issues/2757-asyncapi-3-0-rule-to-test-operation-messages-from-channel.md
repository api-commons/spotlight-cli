---
number: 2757
title: "AsyncAPI 3.0 rule to test operation messages from channel"
state: "open"
labels: []
author: "rospe"
created: "2024-12-12T12:43:46Z"
updated: "2024-12-12T12:43:46Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2757"
---

# AsyncAPI 3.0 rule to test operation messages from channel

**User story.**
As an architect of our company' central AsyncAPI document registry, I want to be certain, that our AsyncAPI files follow the spec. In this case, we received AsyncAPI files that do not comply to the operation's message rules.

**Is your feature request related to a problem?**
Some AsyncAPI files used in our company use wrong references (from other channels). According to https://www.asyncapi.com/docs/reference/specification/v3.0.0#operationsObject, messages in operation objects must only be referenced from the operations' channel object messages.

**Describe the solution you'd like**
I would like to see a rule in the standard rule set.

**Additional context**
I could not find a way to solve this using the core functions.
