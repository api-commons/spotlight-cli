---
number: 815
title: "Better readable and consistent path style"
state: "closed"
labels: []
author: "radicarl"
created: "2019-11-26T13:54:29Z"
updated: "2019-12-27T19:18:35Z"
comments: 8
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/815"
---

# Better readable and consistent path style

**User story.**
I would like to have better readable JSON/YAML-path in the output of the linter.
The wildcard {{path}} uses / for element separation and ~1 for / in element names. This is not very readable. I think . as a separator is in YAML and JSON more commen than the / and in this case the slashes in element names could be slashes.

```
paths./my/resource/{id}/nested-resource.get.responses.200.content.application/json
# better than
paths/~1my~1resource~1{id}~1nested-resource/get/responses/200/content.application~1json
```

I also noticed at least one different representation:
```
oas3-schema          /paths//my/resources/get/responses/200 should have required property '$ref'
```

**Describe the solution you'd like**
Path representation in JSON-Path-like-Notation. The leading $. could help to identify the path in the output message.
