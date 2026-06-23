---
number: 849
title: "OAS2 > Malformed security requirement object not being caught"
state: "closed"
labels: ["t/bug", "OpenAPI"]
author: "rossmcdonald"
created: "2019-12-11T17:25:47Z"
updated: "2020-10-01T09:11:08Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/849"
---

# OAS2 > Malformed security requirement object not being caught

Spectral 4.2.0 - OpenAPIv2 specification with a `security` object like:

```
security:
  - API-Key
```

Returns no errors, even though it is the wrong format.

https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#securityRequirementObject
