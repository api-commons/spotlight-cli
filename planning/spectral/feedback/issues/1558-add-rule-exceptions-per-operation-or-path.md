---
number: 1558
title: "Add rule exceptions per operation or path"
state: "closed"
labels: []
author: "roubles"
created: "2021-03-25T21:44:19Z"
updated: "2022-10-24T13:41:43Z"
comments: 4
reactions_total: 15
thumbs_up: 15
url: "https://github.com/stoplightio/spectral/issues/1558"
---

# Add rule exceptions per operation or path

**User story.**
As a user, I want to be able to add exceptions, per operation, to certain rules **in the open API spec** to ignore failures. 

This is related to, but different from the ask in https://github.com/stoplightio/spectral/issues/747 which was closed by providing the capability to have exceptions in rulesets via https://github.com/stoplightio/spectral/pull/939. The solution for that issue turns off the issue for the entire API spec.

We are asking for the rulesets to apply on the entire API spec, except on certain operations/APIs that are explicitly marked as exceptions. This is very similar to eslint's `// eslint-disable-line no-use-before-define.`

**Is your feature request related to a problem?**
Yes, today we do not have the flexibility to _not_ apply certain rules on certain APIs. We can only turn off all rules using https://github.com/stoplightio/spectral/pull/939 or `—skip-rule`. This is not ideal because these options turn off the rule on  the entire API spec. We need to be able to turn off the rule *per** operation.

**Describe the solution you'd like**
The solution we'd like is a comment that can be added to the yaml or the json. In the following example, we do not want spectral to alert us on the rule **operation-default-response** to apply on a specific operation (post):
```
  # spectral-lint-disable operation-default-response
  post:
      summary: Create a pet
      operationId: createPets
      tags:
        - pets
      responses:
        "201":
          description: Null response
```
Note that this rule will still fire on all other operations/APIs in this API spec. You can see how this comment can be moved to the path level and apply to all operations on a certain path as well.

This works for yaml files, since yaml supports comments. However, json does not support comments. Open to suggestions on other approaches to achieve this usecase of turning off rules per operation.
