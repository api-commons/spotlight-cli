---
number: 2530
title: "How to alphabetically order all paths?"
category: "Q&A"
author: "shreyasbharath"
created: "2023-09-04T05:33:31Z"
upvotes: 1
comments: 1
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2530"
---

# How to alphabetically order all paths?

I've tried 👇🏽 , which doesn't work. Any ideas?

```
  openapi-paths-alphabetical:
    description: OpenAPI object should have alphabetical `paths`.
    message: '{{property}} should be ordered alphabetically'
    severity: error
    given: $.paths[*]~
    then:
      field: operation
      function: alphabetical
```

Also tried this, but it still errors after ordering the paths.

```
paths-alphabetical:
    description: OpenAPI should have alphabetical `paths`.
    recommended: true
    given: "$"
    then:
      field: paths
      function: alphabetical
      functionOptions:
        keyedBy: name
 ```
