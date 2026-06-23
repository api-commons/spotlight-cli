---
number: 1972
title: "oas3-valid-schema-example: Issue with properties called \"default\"?"
state: "open"
labels: ["t/bug", "triaged", "OpenAPI", "team/plaid", "p/documented"]
author: "m-mohr"
created: "2021-11-30T15:04:38Z"
updated: "2026-02-11T02:45:49Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1972"
---

# oas3-valid-schema-example: Issue with properties called "default"?

**Describe the bug**

oas3-valid-schema-example: I have an OpenAPI file with an example that contains a property `default`. It seems that's the reason validation somehow applies strange rules for it.

I'm getting two errors:

>  1713:28  error  oas3-valid-schema-example  schema is invalid: data/type must be equal to one of the allowed values, data/type must be array, data/type must match a schema in anyOf  paths./udf_runtimes.get.responses[200].content.application/json.example.PHP.default
> 1726:28  error  oas3-valid-schema-example  schema is invalid: data/type must be equal to one of the allowed values, data/type must be array, data/type must match a schema in anyOf  paths./udf_runtimes.get.responses[200].content.application/json.example.R.default

I don't fully understand why that is. The default schema specifies it should be "string" and the values in the examples are strings.

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document: https://github.com/Open-EO/openeo-api/blob/spectral6/openapi.yaml
2. and the config file: https://github.com/Open-EO/openeo-api/blob/spectral6/.spectral.yml  (this doesn't give an error, you need to remove the "except" rules first)
2. Run this CLI command: spectral lint openapi.yaml
3. See the error given above

**Expected behavior**
No error message, but instead a successful validation.
This worked before in 5.x, but got broken once I migrated from 5 to 6.1.

**Environment (remove any that are not applicable):**
 - Library version: 6.1.0
 - OS: Windows 10
