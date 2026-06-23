---
number: 1971
title: "Enabling oas3-parameter-description gives error"
state: "closed"
labels: ["t/bug", "released", "p/medium", "triaged", "OpenAPI"]
author: "m-mohr"
created: "2021-11-30T14:59:54Z"
updated: "2021-12-22T17:16:44Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1971"
---

# Enabling oas3-parameter-description gives error

**Describe the bug**

I'm adding `oas3-parameter-description` in my config and it results in a CLI error:

> `Cannot read property 'in' of null`

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document: https://github.com/Open-EO/openeo-api/blob/spectral6/openapi.yaml
2. and the config file: https://github.com/Open-EO/openeo-api/blob/spectral6/.spectral.yml (this doesn't give an error, you need to activate `oas3-parameter-description: true` first)
2. Run this CLI command: spectral lint openapi.yaml
3. See error given above

**Expected behavior**
No error message, but instead a validation/lint result.
This worked before in 5.x, but got broken once I migrated vom 5 to 6.1.

Relevant line seems to be: https://github.com/stoplightio/spectral/blob/d6e2801a920499eba84e6e6fae3b9538713a27ec/packages/rulesets/src/oas/index.ts#L614

**Environment (remove any that are not applicable):**
 - Library version: 6.1.0
 - OS: Windows 10
