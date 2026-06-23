---
number: 2222
title: "How to ignore/disable rules for specific matches"
category: "Q&A"
author: "josephearl"
created: "2022-07-28T09:07:34Z"
upvotes: 1
comments: 3
answered: true
url: "https://github.com/stoplightio/spectral/discussions/2222"
---

# How to ignore/disable rules for specific matches

I am using Spectral CLI and have a `.spectral.yaml` configuration with:

```
extends: "@my-org/custom-ruleset"
```

When running Spectral with this configuration against my OpenAPI yaml I get some errors:

```
/path/to/openapi.yaml
 254:32  error  custom-object-properties-rule  Object properties should be camelCase  components.schemas.AnObject.properties.thePropertyName
```

In this case it is intended that this object property does not match the rule, and so I'd like to ignore this match

I have tried some variations on `match_ignores` in my configuration yaml, but that just seems to result in an error when running Spectral, e.g. adding:

```
match_ignores:
  ignores:
    - rule_id: custom-object-properties-rule
      match_text: "components.schemas.AnObject.properties.thePropertyName"
```

results in:

```
Error running Spectral!
Error #1: [object Object]
```

## ✅ Accepted answer — @josephearl

To answer my own question, need to add

```
overrides:
  - files:
      - "/path/to/openapi.yaml#/components/schemas/AnObject/properties/thePropertyName"
    rules:
      custom-object-properties-rule: "off"
```
