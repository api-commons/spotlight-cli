---
number: 2386
title: "`spectral lint` error `TypeError: ajv_1.Name is not a constructor`"
state: "closed"
labels: []
author: "Gerben-T"
created: "2023-01-26T16:43:08Z"
updated: "2023-01-27T10:38:19Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2386"
---

# `spectral lint` error `TypeError: ajv_1.Name is not a constructor`

**Describe the bug**
When running `spectral lint` i get the following error

```
[redacted]\node_modules\ajv-errors\dist\index.js:10
const used = new ajv_1.Name("emUsed");
             ^

TypeError: ajv_1.Name is not a constructor
``` 

coming from `node_modules\@stoplight\spectral-core\dist\ruleset\validation\ajv.js:8:51`

**To Reproduce**

Just running `spectral lint` on any openapi file, for example https://raw.githubusercontent.com/OAI/OpenAPI-Specification/main/examples/v3.0/petstore.yaml

**Expected behavior**
Lint should complete and show success

**Environment (remove any that are not applicable):**
 - Library version: 6.6.0
 - OS: Windows 10
 - Node: v12.20.2
