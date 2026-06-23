---
number: 1911
title: "variable not supported in server url within openapi 3.1.0"
state: "closed"
labels: ["t/bug", "released", "OpenAPI"]
author: "fidgi"
created: "2021-10-23T11:48:02Z"
updated: "2021-10-25T12:12:39Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1911"
---

# variable not supported in server url within openapi 3.1.0

**Describe the bug**
When a variable is used in a server url within an openapi 3.1.0 document as follow:
```
openapi: 3.1.0
...
servers:
- url: https://api.example.com/{version}
  description: |
    API location
  variables:
    version:
      default: v1

```
, the following error is reported by spectral :

```
spectral lint specs/openapi.yaml


/home/me/udd/public-profiles-api/specs/openapi.yaml
 103:8  error  oas3-schema  "url" property must match format "uri".  servers[0].url

✖ 1 problem (1 error, 0 warnings, 0 infos, 0 hints)
```

All is fine if the variable is removed or if the openapi version is set to 3.0.3 .

**To Reproduce**
see above

**Expected behavior**

Spectral should not report an error in this case


**Environment (remove any that are not applicable):**
 - Library version: @stoplight/spectral-cli 6.1.0
 - OS: Linux
