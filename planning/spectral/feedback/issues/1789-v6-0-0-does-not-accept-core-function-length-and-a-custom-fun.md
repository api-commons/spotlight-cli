---
number: 1789
title: "v6.0.0 does not accept core function 'length' and a custom function in a single ruleset"
state: "closed"
labels: []
author: "MarcusAckermann"
created: "2021-08-26T06:40:00Z"
updated: "2021-08-26T06:43:52Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1789"
---

# v6.0.0 does not accept core function 'length' and a custom function in a single ruleset

**Describe the bug**
A ruleset which contains a custom function and uses the core function 'length' cannot be processed. The output is

**To Reproduce**

Find the ruleset and the OpenAPI document attached.
[spectral.zip](https://github.com/stoplightio/spectral/files/7052137/spectral.zip)

1. Given any valid OpenAPI document
2. Run this CLI command 'spectral lint -r api-guidelines-internal.yaml openapi.json'
3. The output is `Cannot read property 'length' of undefined`

**Expected behavior**
I expect the ruleset to be processed and a proper output on issues in the OpenAPI document, if any.

**Environment (remove any that are not applicable):**
 - Library version:6.0.0
 - OS: Windows 10
