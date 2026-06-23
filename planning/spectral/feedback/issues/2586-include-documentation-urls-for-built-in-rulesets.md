---
number: 2586
title: "Include documentation URLs for built-in rulesets"
state: "open"
labels: ["enhancement", "triaged"]
author: "dillan"
created: "2024-02-19T16:30:07Z"
updated: "2024-05-31T09:24:20Z"
comments: 0
reactions_total: 2
thumbs_up: 2
url: "https://github.com/stoplightio/spectral/issues/2586"
---

# Include documentation URLs for built-in rulesets

**User story.**
As a Spectral user, I can click on a documentation URL, so that I can get more context for why a rule has failed, so that I may address the issue more quickly.

**Is your feature request related to a problem?**
While the concise `message` helps me quickly understand what the issue is for a lint result, providing more context or proposed solutions can help users address the issue more quickly, accurately, and completely.

The ruleset docs like the one linked below provide a wealth of info, including both good and bad examples. This context can save Spectral uses a lot of time and frustration if they have quick access to this information. https://docs.stoplight.io/docs/spectral/4dec24461f3af-open-api-rules#oas3-server-variables

**Describe the solution you'd like**
For each Spectral lint result, include the `documentationURL` for all built-in rulesets. Especially for machine-readable output formats like JSON. Ideally, each lint result would also identify the ruleset that the failing rule came from.

**Additional context**
Relates to: https://github.com/stoplightio/spectral/pull/2443
