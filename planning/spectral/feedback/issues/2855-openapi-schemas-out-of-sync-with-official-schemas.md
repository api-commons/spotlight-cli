---
number: 2855
title: "OpenAPI schemas out-of-sync with official schemas"
state: "open"
labels: []
author: "ralfhandl"
created: "2025-10-07T14:23:10Z"
updated: "2025-10-07T14:30:23Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2855"
---

# OpenAPI schemas out-of-sync with official schemas

**Describe the bug**

The schemas for _OpenAPI 3.1_ in folder [packages/rulesets/src/oas/schemas/oas](https://github.com/stoplightio/spectral/blob/develop/packages/rulesets/src/oas/schemas/oas) are out of sync with the published official schemas at https://spec.openapis.org/oas/, for example

https://github.com/stoplightio/spectral/blob/724c7f88de332c9666ecc234814176e10fdcd1b7/packages/rulesets/src/oas/schemas/oas/v3.1/index.json#L845-L846

There is no `body` field in a [Link Object](https://spec.openapis.org/oas/v3.1.2.html#link-object), the field should be named `server`.

The schema for _OpenAPI 3.0_ may be outdated, it says

https://github.com/stoplightio/spectral/blob/724c7f88de332c9666ecc234814176e10fdcd1b7/packages/rulesets/src/oas/schemas/oas/v3.0.json#L2

whereas the latest official schema was published on 2024-10-18.

Also [_OpenAPI 3.2_](https://spec.openapis.org/oas/v3.2.html) has been published, maybe you want to support that version.
