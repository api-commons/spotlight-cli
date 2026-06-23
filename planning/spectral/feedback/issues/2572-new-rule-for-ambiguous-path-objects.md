---
number: 2572
title: "new rule for ambiguous path objects?"
state: "open"
labels: ["enhancement", "triaged", "OpenAPI"]
author: "baywet"
created: "2024-01-10T14:48:30Z"
updated: "2024-05-31T09:24:19Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2572"
---

# new rule for ambiguous path objects?

**User story.**
As an API producer, I want to ensure my description doesn't contain ambiguous path objects, so that my API consumers do not run into issues with tooling they might use with my description (code-gen, etc...).

**Is your feature request related to a problem?**

We've been seeing a lot of cases where paths are ambiguous in the description. A good example of that [is trello](https://dac-static.atlassian.com/cloud/trello/swagger.v3.json?_v=1.524.0) which declares
`/actions/{id}/{field}` and `/actions/{id}/board` despite the fact that it's invalid [according to the spec](https://spec.openapis.org/oas/latest#paths-object).


**Describe the solution you'd like**
The proposed rule would error on such instances, prompting API providers to better design their API. (in that case the fields parameter could slide to a sub path segment `/actions/{id}/fields/{field}` to be semantically more meaningful).

This rule would also implicitly validate colliding paths across levels like `/{entity}/me` and `/books/{id}`.

It could even validate against the usage of fragments in the path (although this could be a separate rule) like `/foo/bar#baz`.

**Additional context**
https://github.com/microsoft/kiota/issues/3988

I'm happy to contribute this rule to the project, granted that I get some pointers.
