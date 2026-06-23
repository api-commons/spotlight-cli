---
number: 24
title: "Update rule inputs to be more consistent"
state: "closed"
labels: ["enhancement"]
author: "rossmcdonald"
created: "2018-10-03T15:43:36Z"
updated: "2018-10-03T18:01:33Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/24"
---

# Update rule inputs to be more consistent

With the changes for #21, all rule/function inputs are now under an `inputs` object, however now some of the naming is inconsistent and redundant. We should review each rule and fix values to be more sane.

For example:

```
"input": {
  "truthy": "tags"
}
```

Should be converted to:

```
"input": {
  "property": "tags"
}
```
