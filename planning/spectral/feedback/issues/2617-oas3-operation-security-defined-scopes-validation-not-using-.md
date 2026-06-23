---
number: 2617
title: "oas3-operation-security-defined scopes validation not using resolved securitySchemes"
state: "open"
labels: ["t/bug", "p/medium", "triaged"]
author: "cuttingclyde"
created: "2024-05-02T21:25:18Z"
updated: "2024-05-31T09:24:24Z"
comments: 0
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/2617"
---

# oas3-operation-security-defined scopes validation not using resolved securitySchemes

[fdxapi.components.test.yaml.txt](https://github.com/stoplightio/spectral/files/15194201/fdxapi.components.test.yaml.txt)
[fdxapi.tax.fails.yaml.txt](https://github.com/stoplightio/spectral/files/15194202/fdxapi.tax.fails.yaml.txt)
[fdxapi.tax.passes.yaml.txt](https://github.com/stoplightio/spectral/files/15194203/fdxapi.tax.passes.yaml.txt)

**Describe the bug**
The oas3-operation-security-defined rule fires even though the referenced securityScheme contains the referenced scopes.

**To Reproduce**

1. Given attached `fdxapi.tax.fails.yaml` OpenAPI document which references securitySchemes in attached `fdxapi.components.test.yaml` OpenAPI document
2. Run the spectral:oas ruleset
3. Which returns error:
```
 36:15  warning  oas3-operation-security-defined  "fdx:customerpersonal:read" must be listed among scopes.  paths./tax-forms.get.security[0].OAuthFapi1Advanced[0]
```
4. Given attached `fdxapi.tax.passes.yaml` OpenAPI document which includes the full securitySchemes definition copied exactly from `fdxapi.components.test.yaml`
5. Run the spectral:oas ruleset
6. Which succeeds without firing the rule

**Expected behavior**
The original rule failure should not occur, since the referenced scope `fdx:customerpersonal:read` is defined in the referenced file's securitySchemes.

**Environment (remove any that are not applicable):**
 - OAS version: 3.1.0
 - Spectral version: 6.11.1
 - OS: Linux (BitBucket pipeline) and Windows 11 (Spectral CLI)
