---
number: 915
title: "oas3-valid-(content-)schema-example: can't handle circular references"
state: "closed"
labels: ["t/bug", "OpenAPI"]
author: "m-mohr"
created: "2020-01-14T16:20:39Z"
updated: "2021-11-30T14:52:48Z"
comments: 14
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/915"
---

# oas3-valid-(content-)schema-example: can't handle circular references

**Describe the bug**

It seems that in some cases the rules oas3-valid-schema-example and oas3-valid-content-schema-example fail although the examples and JSON paths are valid (afaik).

I get in the command line:
```
 2040:25  error  oas3-valid-content-schema-example  can't resolve reference #/components/schemas/process_json_schema from id #
 4745:15  error  oas3-valid-content-schema-example  can't resolve reference #/components/schemas/process_arguments from id #
 4745:15  error  oas3-valid-schema-example          can't resolve reference #/components/schemas/process_arguments from id #
 5016:29  error  oas3-valid-content-schema-example  can't resolve reference #/components/schemas/process_arguments from id #
```

**To Reproduce**

OpenAPI document: https://raw.githubusercontent.com/Open-EO/openeo-api/spectral/openapi.yaml

.spectral.yml
```
extends: "spectral:oas"
```

Run: `spectral lint openapi.yaml`

**Expected behavior**

No warnings/errors

**Environment (remove any that are not applicable):**
 - Library version: 5.0.0 and develop branch
 - OS: Windows 10
