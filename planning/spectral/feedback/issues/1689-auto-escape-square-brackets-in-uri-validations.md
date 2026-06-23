---
number: 1689
title: "Auto escape square brackets in URI validations"
state: "open"
labels: ["t/bug", "triaged", "p/documented"]
author: "ThomasKoppensteiner"
created: "2021-06-23T15:21:52Z"
updated: "2024-05-31T12:35:06Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1689"
---

# Auto escape square brackets in URI validations

**User story.**
As an API designer, I can use square brackets in URI strings so that the validation is still valid.

**Is your feature request related to a problem?**
I would like to use square brackets in paginations links (for convenience and readability reasons), without the need to url-encoded them.

```json
{
  "links": {
     "next":  "http://example.com?page[size]=3&page[number]=2"
  }
}
```

**Describe the solution you'd like**
Squared brackets are automatically url-encoded before the validation in case `string <uri>` or `string <uri-reference>` is used.

**Additional context**
Error message `"next" property must match format "uri-reference"`
