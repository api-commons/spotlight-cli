---
number: 405
title: "new rules: case enforcement"
state: "closed"
labels: ["enhancement", "p/medium"]
author: "philsturgeon"
created: "2019-07-25T17:26:50Z"
updated: "2020-04-28T15:58:10Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/405"
---

# new rules: case enforcement

**User story.**
As an OpenAPI user, I would like the following default rules, which are not in the OpenAPI spec but are rather nice and help new users create consistent specs, and look the best in the most tools.

- camelCase for Request and Response payload
- Title Case for responses description
- PascalCase for schema names

**Is your feature request related to a problem?**
User requested these rules and they are common enough we should help make it clear how to do.

**Describe the solution you'd like**

#712 added casing as a core function, so let's show it off in our openapi ruleset. We can make it recommended: false for now to avoid it popping up everywhere, and see what feedback we get about it.
