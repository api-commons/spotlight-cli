---
number: 2414
title: "Proposal: Option to exclude JSONPaths for the rules definition"
state: "open"
labels: ["enhancement", "triaged"]
author: "pavelkornev"
created: "2023-02-28T12:13:34Z"
updated: "2025-01-26T19:27:05Z"
comments: 1
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/2414"
---

# Proposal: Option to exclude JSONPaths for the rules definition

**User story.**
As a user of Spectral it would be much flexible for me to have an opportunity to exclude certain paths from the `given` paths without overcomplicating JSONPaths or without defining a custom function for this purpose.

**Describe the solution you'd like**

In the following example the rule checks all `description` or `title` properties, but excluding `examples` objects because same-called properties are not part of the OpenAPI documents definition itself, but rather the example of the actual content payload which have their own constrains and requirements/guidelines:
```jsonc
'no-script-tags-in-markdown': {
  description: 'Markdown descriptions must not have "<script>" tags.',
  recommended: true,
  given: '$..[description,title]',
  exclude: '$..examples', // <--- easy way to exclude `title` and `description` inside these objects
  then: {
    function: pattern,
    functionOptions: {
      notMatch: '<script',
    },
  },
},
```
