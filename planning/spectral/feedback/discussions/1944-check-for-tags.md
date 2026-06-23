---
number: 1944
title: "Check for Tags?"
category: "Q&A"
author: "michaelcilibrasi"
created: "2021-11-05T02:49:17Z"
upvotes: 1
comments: 1
answered: true
url: "https://github.com/stoplightio/spectral/discussions/1944"
---

# Check for Tags?

How can I check for tags not being present? I can check for tags having values. For example,
`paths[*]..summary`
shows me the value of the summary tags that are present. But I want to check if the summary tag itself is missing. For example, in the code snippet below, I want an error because it does not have a summary tag.

```
paths:
  /pets:
    get:
      operationId: listPets
      description: A description here.
      tags:
        - pets
```

## ✅ Accepted answer — @P0lip

Hello! Would the following work?
```yaml
rules:
  summary-tag-defined:
    given: $.paths[*][get,post,put,delete,patch,trace,options,head]
    then:
      field: summary
      function: defined
 ```
