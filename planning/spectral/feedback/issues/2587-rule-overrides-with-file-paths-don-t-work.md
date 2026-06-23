---
number: 2587
title: "Rule overrides with file paths don't work"
state: "closed"
labels: []
author: "jcageman"
created: "2024-02-20T15:51:16Z"
updated: "2024-05-03T14:38:13Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2587"
---

# Rule overrides with file paths don't work

This is a repost of : #2424 and in my opinion it's a bug that simple overrides won't work, such as:

```
overrides:
  - files:
      - "folder1/*.yml"
    rules:
      info-description: off
```

I now i have to work with relative paths compared to the location i am calling the script from which i think is not super nice. Documentation suggests it's possible given the examples, but they don't work. See documentation: https://docs.stoplight.io/docs/spectral/293426e270fac-overrides

`Particular files/folders files: ['schemas/**/*.draft7.json']`
