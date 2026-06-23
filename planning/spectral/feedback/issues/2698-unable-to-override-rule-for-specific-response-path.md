---
number: 2698
title: "Unable to override rule for specific response path"
state: "open"
labels: []
author: "KollarM"
created: "2024-09-23T08:58:55Z"
updated: "2024-09-23T08:58:55Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2698"
---

# Unable to override rule for specific response path

For backward compatibility, I need to override the rule "must-always-return-json-objects-as-top-level-data-structures", but only for some operations.

Calling command `yarn spectral lint .\swagger.json --ruleset ruleset.yaml` gives error must-always-return-json-objects-as-top-level-data-structures for paths./v1/materials/bom.get.responses[200].content.application/json.schema

I tried to override this with many attempts in ruleset.yaml, but had no success.
extends:
  - ./zalando.yml
  - spectral:oas

#This section is for turning off rules
overrides:
  - files:
    - "swagger.json#/paths/~1v1~1materials~1bom/get/responses[200]/content/application/json/schema"
    - "swagger.json#/paths/~1v1~1materials~1bom/get/responses%5B200%5D/content/application/json/schema"
    - "swagger.json#/paths/~1v1~1materials~1bom/get/responses[200]/content/application/json/schema"
    - "swagger.json#/paths/~1v1~1materials~1bom/get/responses/[200]/content/application/json/schema"
    - "swagger.json#/paths/~1v1~1materials~1bom/get/responses/%5B200%5D/content/application/json/schema"
    - "swagger.json#/paths/~1v1~1materials~1bom/get/responses/[200]/content/application/json/schema"    
    - "swagger.json#/paths/~1v1~1materials~1bom/get/responses[200]..content..schema"
    - "swagger.json#/paths/~1v1~1materials~1bom/get/responses%5B200%5D..content..schema"
    - "swagger.json#/paths/~1v1~1materials~1bom/get/responses*/content/*/schema"
    - "swagger.json#/paths/~1v1~1materials~1bom/get/responses[200]/content/*/schema"
    - "swagger.json#/paths/~1v1~1materials~1bom/get/responses%5B200%5D/content/*/schema"
    rules:
      must-always-return-json-objects-as-top-level-data-structures: warn

# ~1 escapes /
# %5B escapes [

[swagger.json](https://github.com/user-attachments/files/17094855/swagger.json)

# %5D escapes ]

# %7B escapes {
# %7D escapes }

I'm attaching simplified swagger.json.
