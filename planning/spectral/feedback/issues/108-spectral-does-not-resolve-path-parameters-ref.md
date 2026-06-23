---
number: 108
title: "spectral does not resolve path->parameters->$ref"
state: "closed"
labels: []
author: "naivefun"
created: "2019-03-26T05:11:38Z"
updated: "2019-04-03T06:24:05Z"
comments: 8
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/108"
---

# spectral does not resolve path->parameters->$ref

```yaml
/domains/{domainCode}:
  parameters:
    - $ref: "#/components/parameters/domainCode"
```

The domainCode is defined in `components/parameters/domainCode` but it complains:
```
- name: path-params
  summary: Path parameters are correct and valid.
  message: >-
    The path "**/domains/{domainCode}/models**" uses a parameter
    "**{domainCode}**" that does not have a corresponding definition.


    To fix, add a path parameter with the name "**domainCode**".
  path:
    - paths
    - '/domains/{domainCode}/models'
  severity: 50
  severityLabel: error
```
