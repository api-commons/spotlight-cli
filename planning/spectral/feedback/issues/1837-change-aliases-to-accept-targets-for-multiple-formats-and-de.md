---
number: 1837
title: "Change Aliases to accept targets for multiple formats and description"
state: "closed"
labels: ["enhancement", "released"]
author: "mnaumanali94"
created: "2021-09-17T11:37:35Z"
updated: "2021-10-12T12:11:40Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1837"
---

# Change Aliases to accept targets for multiple formats and description

**User story.**
As a spectral user, I can specify targets for multiple formats and add a description. This would allow users to use the same alias for multiple formats i.e. OAS3, AsyncAPI e.t.c

**Is your feature request related to a problem?**
Aliases today accept a single target which results in duplication for the various supported formats. 

**Describe the solution you'd like**
Change aliases to a structure like: 

```jsonc
{
  "aliases": {
    // key is name - just guessing based on rest of spectral specification convention
    "schema": {
      "description": "Foo",
      "targets": [
        {
          "formats": ["oas2"],
          "given": "$.definitions.*"
        },
        {
          "formats": ["oas3", "asyncapi"],
          "given": "$.components.schemas.*"
        }
      ]
    },
  }
}
```

Description: Markdown
Formats: Array of formats
