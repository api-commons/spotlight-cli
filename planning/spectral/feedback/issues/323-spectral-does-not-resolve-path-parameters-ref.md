---
number: 323
title: "spectral does not resolve path->parameters->$ref"
state: "closed"
labels: ["t/bug"]
author: "brianmrock"
created: "2019-07-06T19:23:20Z"
updated: "2019-07-07T19:49:53Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/323"
---

# spectral does not resolve path->parameters->$ref

**Detective mod**e: Find the github issue, see if you can get more information out of the user, if not then close this down. 

```
yaml/domains/{domainCode}:parameters:

$ref: "#/components/parameters/domainCode"
```

The domainCode is defined in `components/parameters/domainCode` but it complains:```

name: path-paramssummary: Path parameters are correct and valid.message: >-The path "*/domains/{domainCode}/models*" uses a parameter"*{domainCode}*" that does not have a corresponding definition.

To fix, add a path parameter with the name "*domainCode*".path:

paths

'/domains/{domainCode}/models'severity: 50severityLabel: error```
